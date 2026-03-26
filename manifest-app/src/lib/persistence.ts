import { supabase } from './supabase'

// --- Auth: anonymous sign-in (persistent per browser) ---

export async function ensureAuth(): Promise<string> {
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user) return session.user.id

  const { data, error } = await supabase.auth.signInAnonymously()
  if (error) throw new Error(`Auth failed: ${error.message}`)
  return data.user!.id
}

// --- Project entity node ---

interface EntityNode {
  id: string
  type: string
  label: string
  status: string
  metadata: Record<string, unknown>
  created_by: string
  owned_by: string
}

const PROJECT_TYPE = 'project'
const PROJECT_LABEL = 'Discovery Draft'

export async function loadOrCreateProject(userId: string): Promise<string> {
  // Try to find an existing project for this user
  const { data: existing, error: selectErr } = await supabase
    .from('entity_nodes')
    .select('id')
    .eq('type', PROJECT_TYPE)
    .eq('owned_by', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (existing) return existing.id

  // None found — create one
  if (selectErr && selectErr.code !== 'PGRST116') {
    // PGRST116 = "no rows returned" — that's fine, anything else is an error
    throw new Error(`Load project failed: ${selectErr.message}`)
  }

  const { data: created, error: insertErr } = await supabase
    .from('entity_nodes')
    .insert({
      type: PROJECT_TYPE,
      label: PROJECT_LABEL,
      status: 'draft',
      metadata: {},
      created_by: userId,
      owned_by: userId,
    })
    .select('id')
    .single()

  if (insertErr) throw new Error(`Create project failed: ${insertErr.message}`)
  return created!.id
}

// --- Field nodes: load & save ---

interface FieldNodeRow {
  key: string
  value: { text: string } | null
}

export async function loadFields(projectId: string): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from('field_nodes')
    .select('key, value')
    .eq('entity_id', projectId)

  if (error) throw new Error(`Load fields failed: ${error.message}`)

  const fields: Record<string, string> = {}
  for (const row of (data as FieldNodeRow[]) ?? []) {
    if (row.value && typeof row.value === 'object' && 'text' in row.value) {
      fields[row.key] = row.value.text
    }
  }
  return fields
}

export async function saveField(
  projectId: string,
  key: string,
  value: string,
  sourceForm: string
): Promise<void> {
  const { error } = await supabase
    .from('field_nodes')
    .upsert(
      {
        entity_id: projectId,
        key,
        value: { text: value },
        source_form: sourceForm,
        version: 1,
      },
      { onConflict: 'entity_id,key' }
    )

  if (error) throw new Error(`Save field failed: ${error.message}`)
}
