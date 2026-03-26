import { useHealthCheck } from './hooks/useHealthCheck'
import { OverallStatus } from './components/OverallStatus'
import { CategorySection } from './components/CategorySection'

const CATEGORY_ORDER = ['infrastructure', 'data', 'services', 'apps'] as const

function App() {
  const { checks, overall, lastRun, running, runChecks } = useHealthCheck()

  const grouped = CATEGORY_ORDER.map(cat => ({
    category: cat,
    checks: checks.filter(c => c.category === cat),
  })).filter(g => g.checks.length > 0)

  const okCount = checks.filter(c => c.status === 'ok').length

  return (
    <div className="min-h-screen bg-[var(--color-canopy-bg)]">
      {/* Header */}
      <header className="border-b border-[var(--color-canopy-border)] bg-[var(--color-canopy-surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-12">
          <div className="flex items-center gap-2.5">
            <span className="text-[var(--color-living-moss)] font-[family-name:var(--font-mono)] text-sm font-semibold tracking-wider">
              BIOME
            </span>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              Control Centre
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="text-[var(--color-text-muted)] text-xs font-[family-name:var(--font-mono)]">
              Health Monitor
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <OverallStatus
          status={overall}
          lastRun={lastRun}
          running={running}
          onRefresh={runChecks}
          totalChecks={checks.length}
          okCount={okCount}
        />

        <div className="space-y-8 pb-12">
          {grouped.map(({ category, checks }) => (
            <CategorySection key={category} category={category} checks={checks} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
