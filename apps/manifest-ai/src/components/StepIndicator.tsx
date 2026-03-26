/**
 * StepIndicator — numbered circles at the top, one per template.
 *
 * WHY: Visual navigation across the 8 conversations.
 * Filled with template color + checkmark when complete.
 * Clicking a circle jumps to that template.
 */

import { TEMPLATES } from '../data/templates'

interface StepIndicatorProps {
  currentStep: number
  completedSteps: boolean[]
  onStepClick: (step: number) => void
}

export function StepIndicator({ currentStep, completedSteps, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {TEMPLATES.map((template, i) => {
        const isComplete = completedSteps[i]
        const isCurrent = i === currentStep

        return (
          <button
            key={template.id}
            onClick={() => onStepClick(i)}
            className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: isComplete ? template.color : isCurrent ? `${template.color}20` : 'transparent',
              border: `2px solid ${isCurrent || isComplete ? template.color : 'var(--color-dry-moss)'}`,
              color: isComplete ? '#FFFFFF' : isCurrent ? template.color : 'var(--color-lichen)',
            }}
            aria-label={`Step ${template.id}: ${template.title}${isComplete ? ' (complete)' : ''}`}
          >
            {isComplete ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              template.id
            )}
          </button>
        )
      })}
    </div>
  )
}
