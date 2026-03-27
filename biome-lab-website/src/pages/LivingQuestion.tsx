const showsUp = [
  'Our AI agent team is modeled on a biome (fairy ecosystem)',
  'Our intelligence platform uses mycelium-inspired networking',
  'Our campuses are forest-first, not office-first',
  'Our social network refuses to sell human memory',
  'Our healing programs are nature-based, not clinical',
]

export function LivingQuestion() {
  return (
    <>
      {/* Hero — this page breathes differently */}
      <section className="py-32 md:py-40 px-6 bg-forest-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-6">The Living Question</p>
          <h1 className="text-4xl md:text-5xl text-white font-light leading-tight mb-12">Why we exist.</h1>
          <div className="space-y-6 text-forest-200 text-lg leading-relaxed">
            <p>
              Before BIOME was a company, it was a question.
            </p>
            <p>
              Before it was a laboratory, it was a walk in the forest.
            </p>
            <p>
              Before it was intelligence, it was wonder.
            </p>
          </div>
          <p className="text-gold-300 text-2xl italic mt-16 animate-breathe">
            How does nature heal?
          </p>
        </div>
      </section>

      {/* Philosophical Foundation */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">The Philosophical Foundation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl text-forest-700 mb-4">SAND</h3>
              <p className="text-ink-light leading-relaxed">
                Science and Nonduality — exploring the intersection of consciousness and the nature of reality.
                Where science asks "how" and spirit asks "why," BIOME sits at the convergence.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-forest-700 mb-4">Indigenous Wisdom</h3>
              <p className="text-ink-light leading-relaxed">
                Traditional knowledge, land-based learning, reciprocity. The original intelligence network
                predates every technology we've ever built.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-forest-700 mb-4">Contemplative Practice</h3>
              <p className="text-ink-light leading-relaxed">
                Yoga, meditation, presence. The practice of being still enough to hear what the forest
                is actually saying.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-forest-700 mb-4">The Intelligent Universe</h3>
              <p className="text-ink-light leading-relaxed">
                The idea that intelligence isn't exclusive to brains or machines. It exists in ecosystems,
                in fungi, in the patterns of starlings in flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-forest-700 mb-8">The First Principle</h2>
          <blockquote className="text-xl text-ink leading-relaxed italic border-l-4 border-gold-400 pl-8 text-left">
            Which nature system most aligns with what we are trying to do — and could Nature teach us a better way?
          </blockquote>
        </div>
      </section>

      {/* How This Shows Up */}
      <section className="py-24 px-6 bg-forest-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">How This Shows Up</h2>
          <ul className="space-y-6">
            {showsUp.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-gold-400 text-lg mt-0.5">&#9830;</span>
                <p className="text-ink leading-relaxed text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
