/**
 * TemplateForm — renders one template's fields with hints and textareas.
 *
 * WHY: Each template is a conversation. The hints are the questions
 * a good coach would ask. The textarea is where the client finds their truth.
 * Georgia serif for the human voice. White inputs on cream. Warm and inviting.
 */

import type { Template } from '../data/templates'
import type { FieldValues } from '../hooks/useDiscovery'

interface TemplateFormProps {
  template: Template
  values: FieldValues
  onFieldChange: (key: string, value: string) => void
}

export function TemplateForm({ template, values, onFieldChange }: TemplateFormProps) {
  return (
    <div className="space-y-8">
      {/* Template header */}
      <div className="text-center mb-10">
        <div
          className="inline-block text-xs font-[family-name:var(--font-ui)] uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{
            color: template.color,
            backgroundColor: `${template.color}12`,
          }}
        >
          Conversation {template.id} of 8
        </div>
        <h1
          className="text-3xl sm:text-4xl font-[family-name:var(--font-content)] mb-2"
          style={{ color: 'var(--color-forest-floor)' }}
        >
          {template.title}
        </h1>
        <p className="text-base font-[family-name:var(--font-content)] text-[var(--color-fern)]">
          {template.subtitle}
        </p>
      </div>

      {/* Fields */}
      {template.fields.map(field => (
        <div
          key={field.key}
          className="bg-[var(--color-birch-bark)] rounded-xl p-5 sm:p-7"
        >
          <label
            htmlFor={field.key}
            className="block text-lg sm:text-xl font-[family-name:var(--font-content)] text-[var(--color-forest-floor)] mb-2"
          >
            {field.label}
          </label>
          <p className="text-sm font-[family-name:var(--font-content)] italic text-[var(--color-fern)] mb-4 leading-relaxed">
            {field.hint}
          </p>
          <textarea
            id={field.key}
            value={values[field.key] ?? ''}
            onChange={e => onFieldChange(field.key, e.target.value)}
            placeholder="Write what's true, not what sounds good..."
            rows={4}
            className="w-full px-4 py-3 bg-[var(--color-clean-air)] border border-[var(--color-dry-moss)] rounded-lg text-[var(--color-forest-floor)] font-[family-name:var(--font-ui)] text-sm leading-relaxed placeholder:text-[var(--color-lichen)] placeholder:italic resize-y transition-colors duration-200 outline-none"
            style={{
              // @ts-expect-error CSS custom property for focus color
              '--tw-ring-color': template.color,
            }}
            onFocus={e => {
              e.target.style.borderColor = template.color
              e.target.style.boxShadow = `0 0 0 3px ${template.color}20`
            }}
            onBlur={e => {
              e.target.style.borderColor = 'var(--color-dry-moss)'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>
      ))}
    </div>
  )
}
