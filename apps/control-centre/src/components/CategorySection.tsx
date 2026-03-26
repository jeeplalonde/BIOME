/**
 * CategorySection — groups health checks by category with a header.
 */

import type { SystemCheck } from '../hooks/useHealthCheck'
import { StatusCard } from './StatusCard'

const categoryLabels: Record<string, { title: string; icon: string }> = {
  infrastructure: { title: 'Infrastructure', icon: '◆' },
  data:           { title: 'Data Layer',     icon: '◇' },
  services:       { title: 'Core Services',  icon: '▸' },
  apps:           { title: 'Applications',   icon: '○' },
}

export function CategorySection({ category, checks }: { category: string; checks: SystemCheck[] }) {
  const meta = categoryLabels[category] ?? { title: category, icon: '·' }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[var(--color-living-moss)] text-xs">{meta.icon}</span>
        <h2 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-[var(--color-text-secondary)]">
          {meta.title}
        </h2>
        <div className="flex-1 h-px bg-[var(--color-canopy-border)]" />
        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]">
          {checks.filter(c => c.status === 'ok').length}/{checks.length}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {checks.map(check => (
          <StatusCard key={check.id} check={check} />
        ))}
      </div>
    </div>
  )
}
