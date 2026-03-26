import { useParams, useNavigate, Link } from 'react-router-dom'
import { templates } from '../data/templates'
import { useDiscovery } from '../context/DiscoveryContext'
import { FieldInput } from '../components/FieldInput'

export function TemplatePage() {
  const { num } = useParams<{ num: string }>()
  const navigate = useNavigate()
  const { getCompletedCount, saving } = useDiscovery()

  const index = templates.findIndex((t) => t.num === num)
  const template = templates[index]

  if (!template) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl mb-4">Template not found</h1>
        <Link to="/" className="text-living-moss underline">Back to home</Link>
      </div>
    )
  }

  const prev = index > 0 ? templates[index - 1] : null
  const next = index < templates.length - 1 ? templates[index + 1] : null
  const fieldKeys = template.fields.map((f) => f.key)
  const completed = getCompletedCount(fieldKeys)
  const total = template.fields.length

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-fern text-sm font-sans mb-8 hover:text-deep-canopy transition-colors no-underline"
      >
        &larr; All templates
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-clean-air text-xs font-sans font-semibold px-2.5 py-1 rounded-md"
            style={{ backgroundColor: template.color }}
          >
            {template.num}
          </span>
          <span className="text-lichen text-sm font-sans">
            {completed} of {total} answered
            {saving && ' — saving...'}
          </span>
        </div>
        <h1 className="text-3xl mb-1">{template.title}</h1>
        <p className="text-fern text-lg font-sans">{template.subtitle}</p>

        {/* Progress bar */}
        <div className="mt-4 h-1.5 bg-moss-dry rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${(completed / total) * 100}%`,
              backgroundColor: template.color,
            }}
          />
        </div>
      </header>

      {/* Fields */}
      {template.fields.map((field) => (
        <FieldInput key={field.key} field={field} accentColor={template.color} />
      ))}

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 mt-8 border-t border-moss-dry">
        {prev ? (
          <button
            onClick={() => navigate(`/template/${prev.num}`)}
            className="flex items-center gap-2 px-4 py-2 text-fern font-sans text-sm
                       bg-birch border border-moss-dry rounded-lg
                       hover:border-living-moss transition-colors cursor-pointer"
          >
            &larr; {prev.num} {prev.title}
          </button>
        ) : (
          <div />
        )}

        {next ? (
          <button
            onClick={() => navigate(`/template/${next.num}`)}
            className="flex items-center gap-2 px-4 py-2 text-clean-air font-sans text-sm
                       rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: next.color }}
          >
            {next.num} {next.title} &rarr;
          </button>
        ) : (
          <Link
            to="/"
            className="px-4 py-2 text-clean-air font-sans text-sm
                       bg-deep-canopy rounded-lg hover:opacity-90 transition-opacity no-underline"
          >
            Back to overview
          </Link>
        )}
      </nav>
    </div>
  )
}
