/**
 * Field Node Service — CRUD for the atomic unit of truth.
 *
 * WHY: Field nodes are how data is actually stored in BIOME.
 * Each field belongs to an entity and is versioned. When you update
 * a field, the old version stays — you get a new version number.
 * This gives us full history without losing anything.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, FieldNodeInsert, FieldNodeRow } from '../../supabase/types.gen'
import type { Json } from '../../supabase/types.gen'

type Client = SupabaseClient<Database>

export async function setField(
  client: Client,
  entityId: string,
  key: string,
  value: Json,
  sourceForm: string = ''
): Promise<FieldNodeRow> {
  // Get current version for this key
  const { data: existing } = await client
    .from('field_nodes')
    .select('version')
    .eq('entity_id', entityId)
    .eq('key', key)
    .order('version', { ascending: false })
    .limit(1)
    .single()

  const nextVersion = existing ? existing.version + 1 : 1

  const insert: FieldNodeInsert = {
    entity_id: entityId,
    key,
    value,
    version: nextVersion,
    source_form: sourceForm,
  }

  const { data, error } = await client
    .from('field_nodes')
    .insert(insert)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getField(
  client: Client,
  entityId: string,
  key: string
): Promise<FieldNodeRow | null> {
  const { data, error } = await client
    .from('field_nodes')
    .select()
    .eq('entity_id', entityId)
    .eq('key', key)
    .order('version', { ascending: false })
    .limit(1)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data
}

export async function getFields(
  client: Client,
  entityId: string
): Promise<FieldNodeRow[]> {
  // Get latest version of each field for this entity
  const { data, error } = await client
    .from('field_nodes')
    .select()
    .eq('entity_id', entityId)
    .order('key')
    .order('version', { ascending: false })

  if (error) throw error

  // Deduplicate: keep only the latest version per key
  const latest = new Map<string, FieldNodeRow>()
  for (const row of data ?? []) {
    if (!latest.has(row.key)) {
      latest.set(row.key, row)
    }
  }

  return Array.from(latest.values())
}

export async function getFieldHistory(
  client: Client,
  entityId: string,
  key: string
): Promise<FieldNodeRow[]> {
  const { data, error } = await client
    .from('field_nodes')
    .select()
    .eq('entity_id', entityId)
    .eq('key', key)
    .order('version', { ascending: true })

  if (error) throw error
  return data ?? []
}

/** Bulk set multiple fields on an entity at once */
export async function setFields(
  client: Client,
  entityId: string,
  fields: Record<string, Json>,
  sourceForm: string = ''
): Promise<FieldNodeRow[]> {
  const results: FieldNodeRow[] = []
  for (const [key, value] of Object.entries(fields)) {
    const field = await setField(client, entityId, key, value, sourceForm)
    results.push(field)
  }
  return results
}
