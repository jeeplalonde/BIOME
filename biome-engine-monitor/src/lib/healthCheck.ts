import { projectClients, type ProjectClient } from './supabase'

export interface HealthData {
  database_health: boolean
  table_count: number
  total_rows: number
  rls_coverage: number
  rls_policy_count: number
  audit_log_standard: boolean
  updated_at_triggers: number
  uuid_standard: boolean
  biome_function_standard: boolean
  checked_at: string
}

export interface ProjectHealth {
  project: ProjectClient
  data: HealthData | null
  error: string | null
  loading: boolean
}

export async function fetchHealthCheck(project: ProjectClient): Promise<{
  data: HealthData | null
  error: string | null
}> {
  try {
    const { data, error } = await project.client.rpc('biome_health_check')

    if (error) {
      return { data: null, error: error.message }
    }

    return { data: data as HealthData, error: null }
  } catch (err) {
    return { data: null, error: (err as Error).message }
  }
}

export async function fetchAllHealthChecks(): Promise<ProjectHealth[]> {
  const results = await Promise.all(
    projectClients.map(async (project) => {
      const { data, error } = await fetchHealthCheck(project)
      return { project, data, error, loading: false }
    })
  )
  return results
}
