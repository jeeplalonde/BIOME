/**
 * StorySummary — the payoff. "View your story" brings everything together.
 *
 * WHY: After 8 conversations, the client needs to see their story
 * reflected back to them as a cohesive whole. This is the moment
 * they realize what they've articulated. It should feel like a mirror.
 */

import { TEMPLATES } from '../data/templates'
import type { FieldValues } from '../hooks/useDiscovery'

interface StorySummaryProps {
  values: FieldValues
  onBack: () => void
  onEditStep: (step: number) => void
}

export function StorySummary({ values, onBack, onEditStep }: StorySummaryProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-content)] text-[var(--color-forest-floor)] mb-2">
          Your story
        </h1>
        <p className="text-base font-[family-name:var(--font-content)] text-[var(--color-fern)]">
          Everything you said, in one place
        </p>
      </div>

      {/* Templates */}
      {TEMPLATES.map((template, i) => {
        const hasAnyContent = template.fields.some(f => (values[f.key] ?? '').trim().length > 0)

        return (
          <div key={template.id} className="bg-[var(--color-birch-bark)] rounded-xl p-5 sm:p-7">
            {/* Template header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: template.color }}
                >
                  {template.id}
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-content)] text-[var(--color-forest-floor)]">
                    {template.title}
                  </h2>
                  <p className="text-xs font-[family-name:var(--font-content)] text-[var(--color-lichen)]">
                    {template.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onEditStep(i)}
                className="text-xs font-[family-name:var(--font-ui)] px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                style={{
                  color: template.color,
                  backgroundColor: `${template.color}10`,
                }}
              >
                Edit
              </button>
            </div>

            {/* Fields */}
            {hasAnyContent ? (
              <div className="space-y-4">
                {template.fields.map(field => {
                  const val = (values[field.key] ?? '').trim()
                  if (!val) return null

                  return (
                    <div key={field.key}>
                      <h3 className="text-sm font-[family-name:var(--font-content)] font-medium text-[var(--color-deep-canopy)] mb-1">
                        {field.label}
                      </h3>
                      <p className="text-sm font-[family-name:var(--font-ui)] text-[var(--color-forest-floor)] leading-relaxed whitespace-pre-wrap">
                        {val}
                      </p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm italic text-[var(--color-lichen)]">
                No responses yet — tap Edit to start this conversation.
              </p>
            )}
          </div>
        )
      })}

      {/* Back button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2.5 text-sm font-[family-name:var(--font-ui)] text-[var(--color-fern)] bg-[var(--color-birch-bark)] border border-[var(--color-dry-moss)] rounded-lg hover:bg-[var(--color-dry-moss)] transition-colors cursor-pointer"
        >
          Back to editing
        </button>
      </div>
    </div>
  )
}
