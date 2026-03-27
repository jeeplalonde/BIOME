const categories = ['Nature-Tech', 'Intelligence', 'Spirit', 'Eco-Lab', 'Field Notes']

export function Journal() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Journal</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">What we're learning.</h1>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 border-b border-soil-100">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          <button className="px-4 py-1.5 text-sm bg-forest-600 text-white rounded-full border-0 cursor-pointer">
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 text-sm bg-soil-50 text-ink-muted border border-soil-100
                         rounded-full cursor-pointer hover:border-forest-200 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Empty state */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border border-soil-100 rounded-2xl p-16">
            <p className="text-3xl mb-4">🌱</p>
            <h3 className="text-xl text-forest-700 mb-2">Growing season</h3>
            <p className="text-ink-muted max-w-md mx-auto">
              The journal is taking root. Posts are being cultivated and will appear here soon.
              In the meantime, follow JP on{' '}
              <a
                href="https://linkedin.com/in/jean-paullalonde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 no-underline hover:text-gold-400 transition-colors"
              >
                LinkedIn
              </a>
              {' '}for the latest from the biome.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
