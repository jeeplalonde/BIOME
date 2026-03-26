import { Link } from 'react-router-dom'
import { templates } from '../data/templates'
import { useDiscovery } from '../context/DiscoveryContext'

export function HomePage() {
  const { getCompletedCount, loading, saving, error } = useDiscovery()

  // Total progress across all 25 fields
  const allKeys = templates.flatMap((t) => t.fields.map((f) => f.key))
  const totalCompleted = getCompletedCount(allKeys)
  const totalFields = allKeys.length

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-fern font-sans text-lg">Loading your discovery...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Error banner */}
      {error && (
        <div className="mb-6 px-4 py-3 bg-template-05/10 border border-template-05/30 rounded-lg text-template-05 text-sm font-sans">
          {error}
        </div>
      )}

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl mb-2">Manifest</h1>
          {saving && (
            <span className="text-lichen text-xs font-sans">Saving...</span>
          )}
        </div>
        <p className="text-fern text-lg font-sans">
          Discovery — 8 conversations that turn your idea into a foundation.
        </p>

        {/* Overall progress */}
        {totalCompleted > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm font-sans text-lichen mb-1">
              <span>{totalCompleted} of {totalFields} fields completed</span>
              <span>{Math.round((totalCompleted / totalFields) * 100)}%</span>
            </div>
            <div className="h-2 bg-moss-dry rounded-full overflow-hidden">
              <div
                className="h-full bg-new-growth rounded-full transition-all duration-500"
                style={{ width: `${(totalCompleted / totalFields) * 100}%` }}
              />
            </div>
          </div>
        )}
      </header>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((t) => {
          const fieldKeys = t.fields.map((f) => f.key)
          const completed = getCompletedCount(fieldKeys)
          const total = t.fields.length
          const done = completed === total

          return (
            <Link
              key={t.num}
              to={`/template/${t.num}`}
              className="bg-birch border border-moss-dry rounded-xl p-6
                         hover:border-living-moss transition-colors no-underline group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-clean-air text-xs font-sans font-semibold px-2 py-1 rounded-md"
                  style={{ backgroundColor: t.color }}
                >
                  {t.num}
                </span>
                <h2 className="text-xl m-0 group-hover:text-deep-canopy transition-colors">
                  {t.title}
                </h2>
              </div>
              <p className="text-fern text-sm font-sans mb-3">{t.subtitle}</p>

              {/* Per-template progress */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-moss-dry rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(completed / total) * 100}%`,
                      backgroundColor: t.color,
                    }}
                  />
                </div>
                <span className="text-xs font-sans text-lichen whitespace-nowrap">
                  {done ? 'Complete' : `${completed}/${total}`}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-lichen text-sm font-sans">
        BIOME Inc. — Manifest AI Discovery
      </footer>
    </div>
  )
}
