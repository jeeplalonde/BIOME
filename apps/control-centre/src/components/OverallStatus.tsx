/**
 * OverallStatus — the big hero indicator at the top.
 *
 * WHY: You should know the system health at a glance, the moment
 * the page loads. Green glow = breathe easy. Amber = investigate.
 * Red = something's broken.
 */

import type { HealthStatus } from '../hooks/useHealthCheck'

const config: Record<HealthStatus, { label: string; color: string; glow: string; ring: string }> = {
  ok:       { label: 'All Systems Operational', color: 'var(--color-ok)',    glow: 'var(--color-glow-ok)',    ring: 'rgba(151,188,98,0.3)' },
  warn:     { label: 'Degraded Performance',    color: 'var(--color-warn)',  glow: 'var(--color-glow-warn)',  ring: 'rgba(212,168,83,0.3)' },
  error:    { label: 'System Issues Detected',  color: 'var(--color-error)', glow: 'var(--color-glow-error)', ring: 'rgba(212,83,83,0.3)' },
  checking: { label: 'Running Health Checks',   color: 'var(--color-info)',  glow: 'var(--color-glow-moss)',  ring: 'rgba(126,184,154,0.3)' },
  offline:  { label: 'Systems Offline',         color: 'var(--color-offline)', glow: 'transparent',           ring: 'rgba(58,74,63,0.3)' },
}

interface OverallStatusProps {
  status: HealthStatus
  lastRun: string | null
  running: boolean
  onRefresh: () => void
  totalChecks: number
  okCount: number
}

export function OverallStatus({ status, lastRun, running, onRefresh, totalChecks, okCount }: OverallStatusProps) {
  const c = config[status]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6">
      {/* Status orb + label */}
      <div className="flex items-center gap-5">
        <div className="relative">
          {/* Outer glow ring */}
          <div
            className="absolute inset-[-8px] rounded-full blur-md"
            style={{ backgroundColor: c.glow }}
          />
          {/* Inner orb */}
          <div
            className={`relative w-14 h-14 rounded-full flex items-center justify-center ${running ? 'pulse-glow' : ''}`}
            style={{
              backgroundColor: `color-mix(in srgb, ${c.color} 15%, transparent)`,
              border: `2px solid ${c.ring}`,
              boxShadow: `0 0 32px ${c.glow}, 0 0 64px ${c.glow}`,
            }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: c.color }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium text-[var(--color-text-primary)]">
            {c.label}
          </h1>
          <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] mt-0.5">
            {okCount}/{totalChecks} checks passing
            {lastRun && ` · ${new Date(lastRun).toLocaleTimeString()}`}
          </p>
        </div>
      </div>

      {/* Refresh button */}
      <button
        onClick={onRefresh}
        disabled={running}
        className="px-4 py-2 text-xs font-[family-name:var(--font-mono)] text-[var(--color-living-moss)] bg-[var(--color-canopy-glass)] border border-[var(--color-canopy-border)] rounded-lg hover:border-[var(--color-canopy-border-hover)] hover:shadow-[0_0_16px_var(--color-glow-moss)] transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
      >
        {running ? 'Checking...' : 'Run Health Check'}
      </button>
    </div>
  )
}
