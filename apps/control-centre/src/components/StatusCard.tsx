/**
 * StatusCard — glass card showing one system's health.
 *
 * WHY: Each system check gets its own card with a status indicator,
 * name, and detail text. The glow color changes with status —
 * green for ok, amber for warn, red for error.
 */

import type { SystemCheck, HealthStatus } from '../hooks/useHealthCheck'

const statusConfig: Record<HealthStatus, { dot: string; glow: string; label: string }> = {
  ok:       { dot: 'bg-[var(--color-ok)]',    glow: 'shadow-[0_0_12px_var(--color-glow-ok)]',    label: 'Healthy' },
  warn:     { dot: 'bg-[var(--color-warn)]',   glow: 'shadow-[0_0_12px_var(--color-glow-warn)]',  label: 'Warning' },
  error:    { dot: 'bg-[var(--color-error)]',  glow: 'shadow-[0_0_12px_var(--color-glow-error)]', label: 'Error' },
  checking: { dot: 'bg-[var(--color-info)]',   glow: '',                                           label: 'Checking' },
  offline:  { dot: 'bg-[var(--color-offline)]', glow: '',                                           label: 'Offline' },
}

export function StatusCard({ check }: { check: SystemCheck }) {
  const config = statusConfig[check.status]

  return (
    <div className={`
      bg-[var(--color-canopy-glass)] backdrop-blur-md
      border border-[var(--color-canopy-border)]
      rounded-xl p-4
      hover:border-[var(--color-canopy-border-hover)]
      hover:shadow-[0_0_24px_var(--color-glow-moss)]
      transition-all duration-300 fade-in
    `}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${config.dot} ${config.glow} ${check.status === 'checking' ? 'pulse-glow' : ''}`} />
          <span className="text-sm font-medium text-[var(--color-text-primary)] truncate">
            {check.name}
          </span>
        </div>
        {check.latencyMs !== undefined && (
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] shrink-0">
            {check.latencyMs}ms
          </span>
        )}
      </div>
      <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed pl-5">
        {check.detail}
      </p>
    </div>
  )
}
