/**
 * Canvas Chain Service — ordered workflows with dependency enforcement.
 *
 * WHY: Canvas chain integrity is an ARB standard. Upstream artifacts
 * must complete before downstream can start. This service enforces
 * that rule at the data layer — you literally can't advance a step
 * if its dependencies aren't complete.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, CanvasChainRow, CanvasStepRow, CanvasStepInsert } from '../../supabase/types.gen'

type Client = SupabaseClient<Database>

export async function createChain(
  client: Client,
  label: string
): Promise<CanvasChainRow> {
  const { data, error } = await client
    .from('canvas_chains')
    .insert({ label })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function addStep(
  client: Client,
  step: Omit<CanvasStepInsert, 'id' | 'created_at'>
): Promise<CanvasStepRow> {
  const { data, error } = await client
    .from('canvas_steps')
    .insert(step)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getChainSteps(
  client: Client,
  chainId: string
): Promise<CanvasStepRow[]> {
  const { data, error } = await client
    .from('canvas_steps')
    .select()
    .eq('chain_id', chainId)
    .order('step_order', { ascending: true })

  if (error) throw error
  return data ?? []
}

/**
 * Advance a step's status — but ONLY if all dependencies are complete.
 * This is the canvas chain integrity enforcement.
 */
export async function advanceStep(
  client: Client,
  stepId: string,
  newStatus: string
): Promise<CanvasStepRow> {
  // Get the step and its chain
  const { data: step, error: stepError } = await client
    .from('canvas_steps')
    .select()
    .eq('id', stepId)
    .single()

  if (stepError) throw stepError

  // If trying to start work, check dependencies
  if (newStatus === 'in_progress' || newStatus === 'complete') {
    if (step.depends_on.length > 0) {
      const { data: deps, error: depsError } = await client
        .from('canvas_steps')
        .select('id, status')
        .in('entity_id', step.depends_on)
        .eq('chain_id', step.chain_id)

      if (depsError) throw depsError

      const incomplete = (deps ?? []).filter(d => d.status !== 'complete')
      if (incomplete.length > 0) {
        throw new Error(
          `Cannot advance step: ${incomplete.length} upstream dependency/dependencies not complete. ` +
          `Canvas chain integrity requires all upstream steps to finish first.`
        )
      }
    }
  }

  const { data: updated, error } = await client
    .from('canvas_steps')
    .update({ status: newStatus })
    .eq('id', stepId)
    .select()
    .single()

  if (error) throw error
  return updated
}
