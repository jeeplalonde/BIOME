import { Link } from 'react-router-dom'

const offerings = [
  {
    title: 'Forest Immersion Walks',
    desc: 'Guided walks through the BIOME property, grounded in shinrin-yoku practice. Slow, intentional contact with the forest — listening, breathing, being present.',
  },
  {
    title: 'Recovery & Renewal Programs',
    desc: 'Multi-day stays at the lakefront campus for individuals navigating burnout, grief, or transition. Nature-based, research-informed, deeply human.',
  },
  {
    title: 'Leadership in the Forest',
    desc: 'Retreat experiences for leaders who need to step away from the noise and reconnect with clarity. The forest teaches a different kind of leadership.',
  },
  {
    title: 'Corporate Wellness',
    desc: 'Nature-based wellness programming for teams and organizations. Designed to restore, not just "recharge."',
  },
]

export function Wellness() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 px-6 bg-forest-900 overflow-hidden">
        <img
          src="/images/lake-moonrise.jpg"
          alt="Moon rising over the lake with reflections on still water"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Wellness</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">Forest Therapy Programs</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            Where healing meets the forest.
          </p>
        </div>
      </section>

      {/* The Practice */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">The Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-ink leading-relaxed mb-6">
                Forest therapy — rooted in the Japanese practice of shinrin-yoku — is the art of being
                present in the forest. Not hiking. Not exercising. Arriving.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                At BIOME, we combine this practice with research-informed methods and a deep respect for
                the land. Our programs are nature-based, human-centred, and designed for people who are
                ready to heal — not perform.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/lake-kayak-sunset.jpg"
                alt="Kayaking through lily pads at sunset on BIOME's lake"
                className="w-full h-64 md:h-80 object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">What We Offer</h2>

          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/campfire-hammock.jpg"
              alt="Campfire with hammock strung between trees in the forest"
              className="w-full h-64 md:h-80 object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((o) => (
              <div key={o.title} className="border-t-2 border-forest-300 pt-6">
                <h3 className="text-lg text-forest-700 mb-3">{o.title}</h3>
                <p className="text-ink-muted leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-forest-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white mb-4">Ready to begin?</h2>
          <p className="text-forest-200 mb-8">
            Every journey into the forest starts with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 text-white px-8 py-3 rounded-lg
                       font-medium no-underline hover:bg-gold-500 transition-colors"
          >
            Reach us &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
