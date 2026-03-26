import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { ensureAuth, loadOrCreateProject, loadFields, saveField } from '../lib/persistence'
import { templates } from '../data/templates'

type FieldValues = Record<string, string>

interface DiscoveryState {
  fields: FieldValues
  setField: (key: string, value: string) => void
  getField: (key: string) => string
  getCompletedCount: (fieldKeys: string[]) => number
  loading: boolean
  saving: boolean
  error: string | null
}

const DiscoveryContext = createContext<DiscoveryState | null>(null)

// Find which template a field key belongs to
function sourceFormForKey(key: string): string {
  for (const t of templates) {
    if (t.fields.some((f) => f.key === key)) return t.num
  }
  return 'unknown'
}

const DEBOUNCE_MS = 800

export function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState<FieldValues>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const projectIdRef = useRef<string | null>(null)
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  // Boot: auth → load project → load fields
  useEffect(() => {
    let cancelled = false

    async function boot() {
      try {
        const userId = await ensureAuth()
        const projectId = await loadOrCreateProject(userId)
        if (cancelled) return
        projectIdRef.current = projectId

        const savedFields = await loadFields(projectId)
        if (cancelled) return
        setFields(savedFields)
      } catch (err) {
        if (!cancelled) setError((err as Error).message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    boot()
    return () => { cancelled = true }
  }, [])

  // Debounced save to Supabase
  const persistField = useCallback((key: string, value: string) => {
    const projectId = projectIdRef.current
    if (!projectId) return

    // Clear previous timer for this key
    if (saveTimers.current[key]) clearTimeout(saveTimers.current[key])

    saveTimers.current[key] = setTimeout(async () => {
      setSaving(true)
      try {
        await saveField(projectId, key, value, sourceFormForKey(key))
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setSaving(false)
      }
    }, DEBOUNCE_MS)
  }, [])

  const setField = useCallback((key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    persistField(key, value)
  }, [persistField])

  const getField = useCallback((key: string) => fields[key] ?? '', [fields])

  const getCompletedCount = useCallback(
    (fieldKeys: string[]) =>
      fieldKeys.filter((k) => (fields[k] ?? '').trim().length > 0).length,
    [fields]
  )

  return (
    <DiscoveryContext.Provider value={{ fields, setField, getField, getCompletedCount, loading, saving, error }}>
      {children}
    </DiscoveryContext.Provider>
  )
}

export function useDiscovery() {
  const ctx = useContext(DiscoveryContext)
  if (!ctx) throw new Error('useDiscovery must be used within DiscoveryProvider')
  return ctx
}
