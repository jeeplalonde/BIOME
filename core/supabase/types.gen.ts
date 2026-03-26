/**
 * Auto-generated Supabase types from the live Manifest AI database.
 * Re-generate with: supabase gen types typescript
 *
 * WHY: Type-safe database operations. Every query is checked at compile time.
 * This is the SSOT for what the database actually looks like.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_log: {
        Row: {
          action: string
          actor_id: string | null
          after_data: Json | null
          before_data: Json | null
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          reason: string | null
        }
        Insert: {
          action: string
          actor_id?: string | null
          after_data?: Json | null
          before_data?: Json | null
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          reason?: string | null
        }
        Update: {
          action?: string
          actor_id?: string | null
          after_data?: Json | null
          before_data?: Json | null
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      canvas_chains: {
        Row: {
          created_at: string
          id: string
          label: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          label: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string
          updated_at?: string
        }
        Relationships: []
      }
      canvas_steps: {
        Row: {
          chain_id: string
          created_at: string
          depends_on: string[]
          entity_id: string
          id: string
          status: string
          step_order: number
        }
        Insert: {
          chain_id: string
          created_at?: string
          depends_on?: string[]
          entity_id: string
          id?: string
          status?: string
          step_order: number
        }
        Update: {
          chain_id?: string
          created_at?: string
          depends_on?: string[]
          entity_id?: string
          id?: string
          status?: string
          step_order?: number
        }
        Relationships: []
      }
      edges: {
        Row: {
          created_at: string
          id: string
          metadata: Json
          source_id: string
          target_id: string
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json
          source_id: string
          target_id: string
          type: string
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json
          source_id?: string
          target_id?: string
          type?: string
        }
        Relationships: []
      }
      entity_nodes: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          label: string
          metadata: Json
          owned_by: string | null
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          label: string
          metadata?: Json
          owned_by?: string | null
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          label?: string
          metadata?: Json
          owned_by?: string | null
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      field_nodes: {
        Row: {
          created_at: string
          entity_id: string
          id: string
          key: string
          referenced_by: string[]
          source_form: string
          updated_at: string
          value: Json | null
          version: number
        }
        Insert: {
          created_at?: string
          entity_id: string
          id?: string
          key: string
          referenced_by?: string[]
          source_form?: string
          updated_at?: string
          value?: Json | null
          version?: number
        }
        Update: {
          created_at?: string
          entity_id?: string
          id?: string
          key?: string
          referenced_by?: string[]
          source_form?: string
          updated_at?: string
          value?: Json | null
          version?: number
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

/** Convenience types for direct table access */
export type EntityNodeRow = Database['public']['Tables']['entity_nodes']['Row']
export type EntityNodeInsert = Database['public']['Tables']['entity_nodes']['Insert']
export type EntityNodeUpdate = Database['public']['Tables']['entity_nodes']['Update']

export type FieldNodeRow = Database['public']['Tables']['field_nodes']['Row']
export type FieldNodeInsert = Database['public']['Tables']['field_nodes']['Insert']
export type FieldNodeUpdate = Database['public']['Tables']['field_nodes']['Update']

export type EdgeRow = Database['public']['Tables']['edges']['Row']
export type EdgeInsert = Database['public']['Tables']['edges']['Insert']

export type AuditLogRow = Database['public']['Tables']['audit_log']['Row']
export type AuditLogInsert = Database['public']['Tables']['audit_log']['Insert']

export type CanvasChainRow = Database['public']['Tables']['canvas_chains']['Row']
export type CanvasChainInsert = Database['public']['Tables']['canvas_chains']['Insert']

export type CanvasStepRow = Database['public']['Tables']['canvas_steps']['Row']
export type CanvasStepInsert = Database['public']['Tables']['canvas_steps']['Insert']
export type CanvasStepUpdate = Database['public']['Tables']['canvas_steps']['Update']
