import { useDiscovery } from '../context/DiscoveryContext'
import type { Field } from '../data/templates'

interface FieldInputProps {
  field: Field
  accentColor: string
}

export function FieldInput({ field, accentColor }: FieldInputProps) {
  const { getField, setField } = useDiscovery()
  const value = getField(field.key)
  const filled = value.trim().length > 0

  return (
    <div className="mb-8">
      <label className="block mb-1">
        <span
          className="font-serif text-lg text-forest-floor font-semibold"
          style={{ color: filled ? accentColor : undefined }}
        >
          {field.label}
        </span>
      </label>
      <p className="text-fern text-sm mb-3 font-sans leading-relaxed">
        {field.hint}
      </p>
      <textarea
        value={value}
        onChange={(e) => setField(field.key, e.target.value)}
        rows={4}
        className="w-full bg-clean-air border border-moss-dry rounded-lg px-4 py-3
                   text-forest-floor font-serif leading-relaxed
                   focus:outline-none focus:ring-2 focus:border-transparent
                   resize-y transition-shadow"
        style={{ '--tw-ring-color': accentColor } as React.CSSProperties}
        placeholder="Start writing..."
      />
    </div>
  )
}
