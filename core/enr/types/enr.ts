/**
 * BIOME Entity-Node-Relationship (ENR) Type System
 *
 * WHY: Every piece of data in BIOME follows the ENR pattern.
 * Artifacts are typed entity nodes. Connections are typed directional edges.
 * This gives us a universal graph structure that scales across all BIOME products.
 */

/** The atomic unit of truth in BIOME */
export interface FieldNode {
  id: string
  key: string
  value: unknown
  version: number
  source_form: string
  referenced_by: string[]
  created_at: string
  updated_at: string
}

/** A typed entity node — any artifact in the system */
export interface EntityNode {
  id: string
  type: EntityType
  label: string
  fields: Record<string, FieldNode>
  metadata: EntityMetadata
  created_at: string
  updated_at: string
}

/** Metadata attached to every entity */
export interface EntityMetadata {
  created_by: string
  owned_by: string
  status: EntityStatus
  tags: string[]
}

/** A typed directional edge connecting two entities */
export interface Edge {
  id: string
  type: EdgeType
  source_id: string
  target_id: string
  metadata: Record<string, unknown>
  created_at: string
}

/** Canvas chain — ordered sequence of entity nodes with dependency tracking */
export interface CanvasChain {
  id: string
  label: string
  steps: CanvasStep[]
  created_at: string
  updated_at: string
}

export interface CanvasStep {
  order: number
  entity_id: string
  depends_on: string[]
  status: StepStatus
}

// --- Enums ---

export type EntityType =
  | 'discovery'
  | 'insight'
  | 'question'
  | 'artifact'
  | 'decision'
  | 'task'
  | 'user'
  | 'project'

export type EdgeType =
  | 'derived_from'
  | 'depends_on'
  | 'references'
  | 'authored_by'
  | 'assigned_to'
  | 'part_of'
  | 'supersedes'

export type EntityStatus =
  | 'draft'
  | 'active'
  | 'archived'
  | 'deleted'

export type StepStatus =
  | 'pending'
  | 'in_progress'
  | 'complete'
  | 'blocked'
