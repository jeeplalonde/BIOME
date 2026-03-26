import { useState, useEffect, useCallback } from 'react'
import { fetchAllHealthChecks, type ProjectHealth } from './lib/healthCheck'
import { capabilities, categoryLabels, categoryDescriptions, type HealthStatus } from './data/capabilities'
import { ProjectSummary } from './components/ProjectSummary'
import { CapabilityCard } from './components/CapabilityCard'

// Map capability IDs to health check response keys
const capabilityKeyMap: Record<string, string> = {
  rls_coverage: 'rls_coverage',
  rls_policy_count: 'rls_policy_count',
  audit_log_standard: 'audit_log_standard',
  updated_at_triggers: 'updated_at_triggers',
  database_health: 'database_health',
  table_count: 'table_count',
  total_rows: 'total_rows',
  uuid_standard: 'uuid_standard',
  biome_function_standard: 'biome_function_standard',
}

function App() {
  const [healthData, setHealthData] = useState<ProjectHealth[]>([])
  const [loading, setLoading] = useState(true)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('biome-theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('biome-theme', dark ? 'dark' : 'light')
  }, [dark])

  const runChecks = useCallback(async () => {
    setLoading(true)
    const results = await fetchAllHealthChecks()
    setHealthData(results)
    setLastChecked(new Date())
    setLoading(false)
  }, [])

  useEffect(() => { runChecks() }, [runChecks])

  // Group capabilities by category
  const categories = ['security', 'data', 'reliability', 'standards'] as const

  // Build per-capability, per-project values
  function getCapabilityValues(capId: string) {
    const cap = capabilities.find((c) => c.id === capId)!
    const dataKey = capabilityKeyMap[capId]
    const values: Record<string, { value: unknown; status: HealthStatus }> = {}

    for (const ph of healthData) {
      if (!ph.data) {
        values[ph.project.name] = { value: null, status: 'unknown' }
        continue
      }
      const rawValue = (ph.data as Record<string, unknown>)[dataKey]
      values[ph.project.name] = {
        value: rawValue,
        status: cap.evaluate(rawValue),
      }
    }
    return values
  }

  const projectNames = healthData.map((h) => h.project.name)

  // Overall engine health
  const allStatuses: HealthStatus[] = []
  if (!loading) {
    for (const cap of capabilities) {
      const vals = getCapabilityValues(cap.id)
      for (const v of Object.values(vals)) {
        allStatuses.push(v.status)
      }
    }
  }
  const overallHealthy = allStatuses.length > 0 && allStatuses.every((s) => s === 'healthy')
  const hasWarning = allStatuses.some((s) => s === 'warning')
  const hasCritical = allStatuses.some((s) => s === 'critical')

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl m-0">BIOME Engine Monitor</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-2 text-sm font-sans bg-birch border border-moss-dry
                         rounded-lg cursor-pointer hover:border-living-moss transition-colors"
              title={dark ? 'Switch to daylight' : 'Switch to nightfall'}
            >
              {dark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={runChecks}
              disabled={loading}
              className="px-4 py-2 text-sm font-sans bg-deep-canopy text-clean-air
                         rounded-lg cursor-pointer hover:opacity-90 transition-opacity
                         disabled:opacity-50 disabled:cursor-not-allowed border-0"
            >
              {loading ? 'Checking...' : 'Refresh'}
            </button>
          </div>
        </div>
        <p className="text-fern font-sans m-0">
          Infrastructure health across all BIOME projects.
          {' '}
          <span className="text-lichen text-sm">
            Click any capability to learn what it measures and why.
          </span>
        </p>
        {lastChecked && (
          <p className="text-lichen text-xs font-sans mt-2 m-0">
            Last checked: {lastChecked.toLocaleTimeString()}
          </p>
        )}

        {/* Overall status banner */}
        {!loading && (
          <div className={`mt-4 px-4 py-3 rounded-lg font-sans text-sm ${
            hasCritical
              ? 'bg-health-red-bg text-health-red'
              : hasWarning
                ? 'bg-health-yellow-bg text-health-yellow'
                : 'bg-health-green-bg text-health-green'
          }`}>
            {hasCritical
              ? 'Critical issues detected — review the capabilities below.'
              : hasWarning
                ? 'Some capabilities need attention — review warnings below.'
                : 'All systems healthy across all BIOME projects.'}
          </div>
        )}
      </header>

      {/* Project summary cards */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-birch border border-moss-dry rounded-xl p-5">
                  <p className="text-sm text-lichen font-sans m-0">Loading...</p>
                </div>
              ))
            : healthData.map((h) => (
                <ProjectSummary key={h.project.id} health={h} />
              ))}
        </div>
      </section>

      {/* Capabilities by category */}
      {categories.map((cat) => {
        const catCapabilities = capabilities.filter((c) => c.category === cat)
        return (
          <section key={cat} className="mb-10">
            <div className="mb-4">
              <h2 className="text-xl mb-1">{categoryLabels[cat]}</h2>
              <p className="text-sm text-fern font-sans m-0">{categoryDescriptions[cat]}</p>
            </div>
            <div className="space-y-3">
              {catCapabilities.map((cap) => (
                <CapabilityCard
                  key={cap.id}
                  capability={cap}
                  values={loading ? {} : getCapabilityValues(cap.id)}
                  projectNames={projectNames}
                />
              ))}
            </div>
          </section>
        )
      })}

      {/* Footer */}
      <footer className="mt-12 text-center text-lichen text-sm font-sans">
        BIOME Inc. — Engine Monitor
      </footer>
    </div>
  )
}

export default App
