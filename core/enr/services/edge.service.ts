/**
 * Edge Service — typed directional connections between entities.
 *
 * WHY: The ENR model is a graph. Entities are nodes, edges are connections.
 * This service lets you connect, disconnect, and traverse the graph.
 * Every connection has a type (derived_from, depends_on, etc.) and direction.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, EdgeInsert, EdgeRow } from '../../supabase/types.gen'

type Client = SupabaseClient<Database>

export async function createEdge(
  client: Client,
  data: Omit<EdgeInsert, 'id' | 'created_at'>
): Promise<EdgeRow> {
  const { data: edge, error } = await client
    .from('edges')
    .insert(data)
    .select()
    .single()

  if (error) throw error
  return edge
}

export async function getEdgesFrom(
  client: Client,
  sourceId: string,
  type?: string
): Promise<EdgeRow[]> {
  let query = client.from('edges').select().eq('source_id', sourceId)
  if (type) query = query.eq('type', type)

  const { data, error } = await query.order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getEdgesTo(
  client: Client,
  targetId: string,
  type?: string
): Promise<EdgeRow[]> {
  let query = client.from('edges').select().eq('target_id', targetId)
  if (type) query = query.eq('type', type)

  const { data, error } = await query.order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getConnectedEntities(
  client: Client,
  entityId: string,
  type?: string
): Promise<EdgeRow[]> {
  let query = client.from('edges').select()
    .or(`source_id.eq.${entityId},target_id.eq.${entityId}`)

  if (type) query = query.eq('type', type)

  const { data, error } = await query.order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function removeEdge(
  client: Client,
  id: string
): Promise<void> {
  const { error } = await client.from('edges').delete().eq('id', id)
  if (error) throw error
}
