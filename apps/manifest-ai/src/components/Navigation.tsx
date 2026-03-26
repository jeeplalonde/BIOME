/**
 * Navigation — Previous / Next buttons with step counter.
 *
 * WHY: Simple, clear movement through the 8 conversations.
 * "View your story" on the last template — the moment of payoff.
 */

interface NavigationProps {
  currentStep: number
  totalSteps: number
  isFirst: boolean
  isLast: boolean
  onPrev: () => void
  onNext: () => void
  templateColor: string
}

export function Navigation({
  currentStep,
  totalSteps,
  isFirst,
  isLast,
  onPrev,
  onNext,
  templateColor,
}: NavigationProps) {
  return (
    <div className="flex items-center justify-between pt-8">
      {/* Previous */}
      {!isFirst ? (
        <button
          onClick={onPrev}
          className="px-5 py-2.5 text-sm font-[family-name:var(--font-ui)] text-[var(--color-fern)] bg-[var(--color-birch-bark)] border border-[var(--color-dry-moss)] rounded-lg hover:bg-[var(--color-dry-moss)] transition-colors cursor-pointer"
        >
          Previous
        </button>
      ) : (
        <div />
      )}

      {/* Step counter */}
      <span className="text-sm font-[family-name:var(--font-ui)] text-[var(--color-lichen)]">
        {currentStep + 1} of {totalSteps}
      </span>

      {/* Next / View your story */}
      <button
        onClick={onNext}
        className="px-5 py-2.5 text-sm font-[family-name:var(--font-ui)] text-white rounded-lg transition-all cursor-pointer hover:opacity-90"
        style={{ backgroundColor: templateColor }}
      >
        {isLast ? 'View your story' : 'Next'}
      </button>
    </div>
  )
}
