/**
 * LoadingState — standard loading indicator for async operations.
 *
 * WHY: BIOME standard says we always handle loading states.
 * One component, used everywhere, keeps the UX consistent.
 */

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <div className="w-6 h-6 border-2 border-[var(--color-canopy-border)] border-t-[var(--color-living-moss)] rounded-full animate-spin" />
      <p className="text-sm text-[var(--color-text-muted)]">{message}</p>
    </div>
  )
}
