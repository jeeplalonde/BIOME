/**
 * Audit Trail Service — immutable record of every mutation.
 *
 * WHY: Non-negotiable. Every change to data in BIOME gets logged here.
 * The audit_log table is append-only — no updates, no deletes.
 * This is how we answer "who changed what, when, and why?"
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, AuditLogInsert, AuditLogRow } from '../../supabase/types.gen'

type Client = SupabaseClient<Database>

interface MutationLog {
  entity_id: string
  entity_type: string
  action: string
  before_data?: Record<string, unknown> | null
  after_data?: Record<string, unknown> | null
  reason?: string | null
}

/** Log a mutation to the audit trail. Called by ENR services, not directly. */
export async function logMutation(
  client: Client,
  log: MutationLog
): Promise<AuditLogRow> {
  const { data: session } = await client.auth.getSession()
  const actorId = session?.session?.user?.id ?? null

  const insert: AuditLogInsert = {
    entity_id: log.entity_id,
    entity_type: log.entity_type,
    action: log.action,
    actor_id: actorId,
    before_data: log.before_data as AuditLogInsert['before_data'],
    after_data: log.after_data as AuditLogInsert['after_data'],
    reason: log.reason ?? null,
  }

  const { data, error } = await client
    .from('audit_log')
    .insert(insert)
    .select()
    .single()

  if (error) throw error
  return data
}

/** Get the full audit history for an entity */
export async function getEntityHistory(
  client: Client,
  entityId: string
): Promise<AuditLogRow[]> {
  const { data, error } = await client
    .from('audit_log')
    .select()
    .eq('entity_id', entityId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data ?? []
}

/** Get recent audit activity for the current user */
export async function getMyActivity(
  client: Client,
  limit: number = 50
): Promise<AuditLogRow[]> {
  const { data: session } = await client.auth.getSession()
  const userId = session?.session?.user?.id
  if (!userId) return []

  const { data, error } = await client
    .from('audit_log')
    .select()
    .eq('actor_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data ?? []
}
