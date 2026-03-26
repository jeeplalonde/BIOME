import type { HealthStatus } from '../data/capabilities'

const statusConfig: Record<HealthStatus, { label: string; bg: string; text: string; dot: string }> = {
  healthy:  { label: 'Healthy',  bg: 'bg-health-green-bg',  text: 'text-health-green',  dot: 'bg-health-green' },
  warning:  { label: 'Warning',  bg: 'bg-health-yellow-bg', text: 'text-health-yellow', dot: 'bg-health-yellow' },
  critical: { label: 'Critical', bg: 'bg-health-red-bg',    text: 'text-health-red',    dot: 'bg-health-red' },
  unknown:  { label: 'Unknown',  bg: 'bg-birch',            text: 'text-lichen',         dot: 'bg-lichen' },
}

export function StatusBadge({ status }: { status: HealthStatus }) {
  const config = statusConfig[status]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-sans font-medium ${config.bg} ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}
