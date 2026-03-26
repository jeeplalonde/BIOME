/**
 * Entity Node Service — CRUD operations for the core artifact table.
 *
 * WHY: Every object in BIOME is an entity node. This service is the
 * single way to create, read, update, and query entities. All mutations
 * go through here so the audit trail can intercept them.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, EntityNodeInsert, EntityNodeUpdate, EntityNodeRow } from '../../supabase/types.gen'
import { logMutation } from '../../audit/services/audit.service'

type Client = SupabaseClient<Database>

export async function createEntity(
  client: Client,
  data: Omit<EntityNodeInsert, 'id' | 'created_at' | 'updated_at'>
): Promise<EntityNodeRow> {
  const { data: entity, error } = await client
    .from('entity_nodes')
    .insert(data)
    .select()
    .single()

  if (error) throw error

  await logMutation(client, {
    entity_id: entity.id,
    entity_type: entity.type,
    action: 'create',
    after_data: entity as unknown as Record<string, unknown>,
  })

  return entity
}

export async function getEntity(
  client: Client,
  id: string
): Promise<EntityNodeRow | null> {
  const { data, error } = await client
    .from('entity_nodes')
    .select()
    .eq('id', id)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data
}

export async function listEntities(
  client: Client,
  filters?: { type?: string; status?: string }
): Promise<EntityNodeRow[]> {
  let query = client.from('entity_nodes').select()

  if (filters?.type) query = query.eq('type', filters.type)
  if (filters?.status) query = query.eq('status', filters.status)

  const { data, error } = await query.order('updated_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function updateEntity(
  client: Client,
  id: string,
  updates: EntityNodeUpdate
): Promise<EntityNodeRow> {
  const before = await getEntity(client, id)

  const { data: entity, error } = await client
    .from('entity_nodes')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  await logMutation(client, {
    entity_id: entity.id,
    entity_type: entity.type,
    action: 'update',
    before_data: before as unknown as Record<string, unknown>,
    after_data: entity as unknown as Record<string, unknown>,
  })

  return entity
}

export async function archiveEntity(
  client: Client,
  id: string,
  reason?: string
): Promise<EntityNodeRow> {
  const before = await getEntity(client, id)

  const { data: entity, error } = await client
    .from('entity_nodes')
    .update({ status: 'archived' })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  await logMutation(client, {
    entity_id: entity.id,
    entity_type: entity.type,
    action: 'archive',
    before_data: before as unknown as Record<string, unknown>,
    after_data: entity as unknown as Record<string, unknown>,
    reason,
  })

  return entity
}
