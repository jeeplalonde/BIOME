/**
 * ErrorState — standard error display for failed operations.
 *
 * WHY: BIOME standard says we always handle error states.
 * Clear message, optional retry. No silent failures.
 */

interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <div className="w-8 h-8 rounded-full bg-[var(--color-status-error)]/10 flex items-center justify-center">
        <span className="text-[var(--color-status-error)] text-lg">!</span>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-xs text-[var(--color-living-moss)] hover:text-[var(--color-new-growth)] transition-colors cursor-pointer"
        >
          Try again
        </button>
      )}
    </div>
  )
}
