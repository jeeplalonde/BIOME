import { CanopyLayout, GlassCard } from './components'

function App() {
  return (
    <CanopyLayout title="Manifest AI — Discovery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-[family-name:var(--font-content)] text-[var(--color-text-primary)] mb-1">
            BIOME Control Centre
          </h2>
          <p className="text-sm text-[var(--color-text-muted)]">
            Manifest AI Discovery App — Internal Build
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">System Status</h3>
          <div className="space-y-2">
            <StatusRow label="Frontend" status="ok" detail="Vite + React + TS" />
            <StatusRow label="Styling" status="ok" detail="Tailwind Canopy" />
            <StatusRow label="Types" status="ok" detail="ENR + Audit" />
            <StatusRow label="Database" status="warn" detail="Schema ready, needs Docker" />
            <StatusRow label="Auth" status="warn" detail="RLS defined, not active" />
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Architecture</h3>
          <div className="space-y-2 text-xs text-[var(--color-text-muted)]">
            <ArchRow label="SSOT" done />
            <ArchRow label="ENR Types" done />
            <ArchRow label="Field Nodes" done />
            <ArchRow label="Audit Trail" done />
            <ArchRow label="Canvas Chain" done />
            <ArchRow label="RLS Policies" done />
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Design System</h3>
          <div className="space-y-2 text-xs text-[var(--color-text-muted)]">
            <ArchRow label="Canopy Mode" done />
            <ArchRow label="Glass Morphism" done />
            <ArchRow label="Solarpunk Palette" done />
            <ArchRow label="Typography" done />
            <ArchRow label="Loading States" done />
            <ArchRow label="Error States" done />
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Next Steps</h3>
          <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-amber-light)]">&#9654;</span>
              Install Docker + start Supabase local
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-amber-light)]">&#9654;</span>
              Run migrations against local DB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-amber-light)]">&#9654;</span>
              Connect Supabase client to frontend
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-amber-light)]">&#9654;</span>
              Build Discovery Engine UI
            </li>
          </ul>
        </GlassCard>

      </div>
    </CanopyLayout>
  )
}

function StatusRow({ label, status, detail }: { label: string; status: 'ok' | 'warn' | 'error'; detail: string }) {
  const dot = {
    ok: 'bg-[var(--color-status-ok)]',
    warn: 'bg-[var(--color-status-warn)]',
    error: 'bg-[var(--color-status-error)]',
  }

  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${dot[status]}`} />
        <span className="text-[var(--color-text-secondary)]">{label}</span>
      </div>
      <span className="text-[var(--color-text-muted)]">{detail}</span>
    </div>
  )
}

function ArchRow({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={done ? 'text-[var(--color-status-ok)]' : 'text-[var(--color-text-muted)]'}>
        {done ? '✓' : '○'}
      </span>
      <span>{label}</span>
    </div>
  )
}

export default App
