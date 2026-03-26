/**
 * useEntity — React hook for working with entity nodes.
 *
 * WHY: Components need a clean way to load, create, and update entities
 * without managing Supabase calls directly. This hook handles loading
 * state, errors, and keeps the component code focused on the UI.
 */

import { useState, useEffect, useCallback } from 'react'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, EntityNodeRow, EntityNodeInsert, EntityNodeUpdate } from '../../supabase/types.gen'
import { getEntity, createEntity, updateEntity, listEntities } from '../services/entity.service'

type Client = SupabaseClient<Database>

interface UseEntityResult {
  entity: EntityNodeRow | null
  loading: boolean
  error: string | null
  reload: () => void
  update: (updates: EntityNodeUpdate) => Promise<void>
}

export function useEntity(client: Client, id: string | null): UseEntityResult {
  const [entity, setEntity] = useState<EntityNodeRow | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!id) return
    setLoading(true)
    setError(null)
    try {
      const data = await getEntity(client, id)
      setEntity(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load entity')
    } finally {
      setLoading(false)
    }
  }, [client, id])

  useEffect(() => { load() }, [load])

  const update = useCallback(async (updates: EntityNodeUpdate) => {
    if (!id) return
    try {
      const updated = await updateEntity(client, id, updates)
      setEntity(updated)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update entity')
    }
  }, [client, id])

  return { entity, loading, error, reload: load, update }
}

interface UseEntitiesResult {
  entities: EntityNodeRow[]
  loading: boolean
  error: string | null
  reload: () => void
  create: (data: Omit<EntityNodeInsert, 'id' | 'created_at' | 'updated_at'>) => Promise<EntityNodeRow>
}

export function useEntities(
  client: Client,
  filters?: { type?: string; status?: string }
): UseEntitiesResult {
  const [entities, setEntities] = useState<EntityNodeRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await listEntities(client, filters)
      setEntities(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load entities')
    } finally {
      setLoading(false)
    }
  }, [client, filters?.type, filters?.status])

  useEffect(() => { load() }, [load])

  const create = useCallback(async (
    data: Omit<EntityNodeInsert, 'id' | 'created_at' | 'updated_at'>
  ) => {
    const entity = await createEntity(client, data)
    setEntities(prev => [entity, ...prev])
    return entity
  }, [client])

  return { entities, loading, error, reload: load, create }
}
