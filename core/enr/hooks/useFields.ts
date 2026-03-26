/**
 * useFields — React hook for working with field nodes.
 *
 * WHY: Field nodes are the atomic data units. Components need to
 * read and write fields without managing async state themselves.
 * This hook auto-loads fields for an entity and provides a save function.
 */

import { useState, useEffect, useCallback } from 'react'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, FieldNodeRow } from '../../supabase/types.gen'
import type { Json } from '../../supabase/types.gen'
import { getFields, setField } from '../services/field.service'

type Client = SupabaseClient<Database>

interface UseFieldsResult {
  fields: FieldNodeRow[]
  loading: boolean
  error: string | null
  reload: () => void
  saveField: (key: string, value: Json, sourceForm?: string) => Promise<FieldNodeRow>
  getFieldValue: (key: string) => Json | null
}

export function useFields(client: Client, entityId: string | null): UseFieldsResult {
  const [fields, setFieldsState] = useState<FieldNodeRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!entityId) return
    setLoading(true)
    setError(null)
    try {
      const data = await getFields(client, entityId)
      setFieldsState(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load fields')
    } finally {
      setLoading(false)
    }
  }, [client, entityId])

  useEffect(() => { load() }, [load])

  const saveField = useCallback(async (key: string, value: Json, sourceForm?: string) => {
    if (!entityId) throw new Error('No entity ID')
    const field = await setField(client, entityId, key, value, sourceForm)
    // Update local state — replace or add the field
    setFieldsState(prev => {
      const without = prev.filter(f => f.key !== key)
      return [...without, field]
    })
    return field
  }, [client, entityId])

  const getFieldValue = useCallback((key: string): Json | null => {
    const field = fields.find(f => f.key === key)
    return field?.value ?? null
  }, [fields])

  return { fields, loading, error, reload: load, saveField, getFieldValue }
}
