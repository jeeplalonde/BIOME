/**
 * BIOME Audit Trail Types
 *
 * WHY: Every data mutation in BIOME creates an immutable audit record.
 * This is non-negotiable — we need to know who changed what, when, and why.
 * Records are append-only. Nothing gets deleted or updated.
 */

export interface AuditRecord {
  id: string
  /** Which entity was affected */
  entity_id: string
  /** What type of entity */
  entity_type: string
  /** What happened */
  action: AuditAction
  /** Who did it */
  actor_id: string
  /** Snapshot of the data before the change (null for creates) */
  before: Record<string, unknown> | null
  /** Snapshot of the data after the change (null for deletes) */
  after: Record<string, unknown> | null
  /** Optional context — why did this change happen */
  reason: string | null
  /** Immutable timestamp */
  created_at: string
}

export type AuditAction =
  | 'create'
  | 'update'
  | 'delete'
  | 'archive'
  | 'restore'
  | 'transition'
