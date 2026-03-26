import type { ProjectHealth } from '../lib/healthCheck'
import { StatusBadge } from './StatusBadge'
import type { HealthStatus } from '../data/capabilities'

export function ProjectSummary({ health }: { health: ProjectHealth }) {
  const { project, data, error, loading } = health

  if (loading) {
    return (
      <div className="bg-birch border border-moss-dry rounded-xl p-5">
        <h3 className="text-base font-serif text-forest-floor m-0 mb-1">{project.name}</h3>
        <p className="text-sm text-lichen font-sans m-0">Checking...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="bg-birch border border-health-red/30 rounded-xl p-5">
        <h3 className="text-base font-serif text-forest-floor m-0 mb-1">{project.name}</h3>
        <StatusBadge status="critical" />
        <p className="text-sm text-health-red font-sans m-0 mt-2">{error ?? 'No data'}</p>
      </div>
    )
  }

  const overallStatus: HealthStatus = data.database_health ? 'healthy' : 'critical'

  return (
    <div className="bg-birch border border-moss-dry rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-serif text-forest-floor m-0">{project.name}</h3>
        <StatusBadge status={overallStatus} />
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-clean-air rounded-lg px-2 py-2">
          <div className="text-lg font-sans font-bold text-forest-floor">{data.table_count}</div>
          <div className="text-xs text-lichen font-sans">Tables</div>
        </div>
        <div className="bg-clean-air rounded-lg px-2 py-2">
          <div className="text-lg font-sans font-bold text-forest-floor">{data.total_rows.toLocaleString()}</div>
          <div className="text-xs text-lichen font-sans">Rows</div>
        </div>
        <div className="bg-clean-air rounded-lg px-2 py-2">
          <div className="text-lg font-sans font-bold text-forest-floor">{data.rls_coverage}%</div>
          <div className="text-xs text-lichen font-sans">RLS</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-lichen font-sans text-right">
        {project.region}
      </div>
    </div>
  )
}
