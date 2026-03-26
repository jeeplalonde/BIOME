/**
 * ProgressBar — shows how many of the 25 fields are answered.
 *
 * WHY: Gives the client a sense of momentum. Seeing progress
 * keeps people moving forward through all 8 conversations.
 */

interface ProgressBarProps {
  filled: number
  total: number
}

export function ProgressBar({ filled, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((filled / total) * 100) : 0

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-[family-name:var(--font-ui)] text-[var(--color-fern)]">
          {filled} of {total} fields answered
        </span>
        <span className="text-xs font-[family-name:var(--font-ui)] text-[var(--color-lichen)]">
          {pct}%
        </span>
      </div>
      <div className="w-full h-2 bg-[var(--color-dry-moss)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-new-growth)] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
