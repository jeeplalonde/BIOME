/**
 * LoadingState — standard loading indicator for async operations.
 *
 * WHY: BIOME standard says we always handle loading states.
 * One component, used everywhere, keeps the UX consistent.
 * Uses CSS vars so it adapts to both Daylight and Canopy modes.
 */

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <div className="w-6 h-6 border-2 border-[var(--color-dry-moss,#DDD6C5)] border-t-[var(--color-living-moss,#7EB89A)] rounded-full animate-spin" />
      <p className="text-sm text-[var(--color-lichen,#8BA78E)]">{message}</p>
    </div>
  )
}
