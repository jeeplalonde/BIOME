import { useState } from 'react'
import type { Capability, HealthStatus } from '../data/capabilities'
import { StatusBadge } from './StatusBadge'
import { SectionChat } from './SectionChat'

interface CapabilityCardProps {
  capability: Capability
  values: Record<string, { value: unknown; status: HealthStatus }>
  projectNames: string[]
}

const SUPABASE_URL = 'https://jslzcnurnyucfiigyrtj.supabase.co'

export function CapabilityCard({ capability, values, projectNames }: CapabilityCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Overall status: worst across all projects
  const statuses = Object.values(values).map((v) => v.status)
  const overallStatus: HealthStatus = statuses.includes('critical')
    ? 'critical'
    : statuses.includes('warning')
      ? 'warning'
      : statuses.includes('unknown')
        ? 'unknown'
        : 'healthy'

  function formatValue(value: unknown): string {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No'
    if (typeof value === 'number') return `${value}%`
    return String(value)
  }

  return (
    <div className="bg-birch border border-moss-dry rounded-xl overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center justify-between cursor-pointer
                   hover:bg-moss-dry/30 transition-colors text-left bg-transparent border-0"
      >
        <div className="flex items-center gap-3">
          <StatusBadge status={overallStatus} />
          <h3 className="text-base font-serif text-forest-floor m-0">{capability.name}</h3>
        </div>
        <span className="text-lichen text-sm font-sans">
          {expanded ? '−' : '+'}
        </span>
      </button>

      {/* Per-project values — always visible */}
      <div className="px-5 pb-4 flex gap-4">
        {projectNames.map((name) => {
          const entry = values[name]
          if (!entry) return null
          return (
            <div key={name} className="flex-1 bg-clean-air rounded-lg px-3 py-2">
              <div className="text-xs text-lichen font-sans mb-0.5">{name}</div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-sans font-semibold text-forest-floor">
                  {formatValue(entry.value)}
                </span>
                <StatusBadge status={entry.status} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Expanded: educational context + chat */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-moss-dry pt-4 space-y-4">
          <div>
            <h4 className="text-sm font-sans font-semibold text-forest-floor m-0 mb-1">
              What is this?
            </h4>
            <p className="text-sm font-sans text-fern leading-relaxed m-0">
              {capability.description}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-sans font-semibold text-forest-floor m-0 mb-1">
              Why it matters
            </h4>
            <p className="text-sm font-sans text-fern leading-relaxed m-0">
              {capability.whyItMatters}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-sans font-semibold text-forest-floor m-0 mb-1">
              Industry standard
            </h4>
            <p className="text-sm font-sans text-fern leading-relaxed m-0">
              {capability.industryStandard}
            </p>
          </div>
          <div className="bg-hearthstone rounded-lg px-3 py-2">
            <span className="text-xs font-sans text-lichen">
              Metric: {capability.metric}
            </span>
          </div>

          {/* Section Chat — contextual AI advisor */}
          <SectionChat
            capability={capability}
            values={values}
            projectNames={projectNames}
            supabaseUrl={SUPABASE_URL}
          />
        </div>
      )}
    </div>
  )
}
