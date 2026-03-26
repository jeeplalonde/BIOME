/**
 * CanopyLayout — the main shell for all internal BIOME tools.
 *
 * WHY: Every internal tool shares the same dark Canopy chrome.
 * This gives us consistent navigation, branding, and glass morphism
 * without repeating layout code across pages.
 */

interface CanopyLayoutProps {
  children: React.ReactNode
  title?: string
}

export function CanopyLayout({ children, title = 'BIOME' }: CanopyLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-canopy-bg)] text-[var(--color-text-primary)] font-[family-name:var(--font-ui)]">
      {/* Top nav */}
      <header className="border-b border-[var(--color-canopy-border)] bg-[var(--color-canopy-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-living-moss)] font-[family-name:var(--font-mono)] text-sm font-semibold tracking-wider">
              BIOME
            </span>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-[var(--color-text-secondary)] text-sm">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot status="ok" label="System" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}

/** Small status indicator used in the nav */
function StatusDot({ status, label }: { status: 'ok' | 'warn' | 'error'; label: string }) {
  const colors = {
    ok: 'bg-[var(--color-status-ok)]',
    warn: 'bg-[var(--color-status-warn)]',
    error: 'bg-[var(--color-status-error)]',
  }

  return (
    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
      <div className={`w-1.5 h-1.5 rounded-full ${colors[status]}`} />
      {label}
    </div>
  )
}
