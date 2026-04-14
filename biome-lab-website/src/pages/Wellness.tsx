import { Link } from 'react-router-dom'
import { WaveDivider } from '../components/WaveDivider'

const offerings = [
  {
    title: 'Forest Immersion Walks',
    desc: 'Guided experiences in the forest designed to slow the nervous system and reconnect with the natural world.',
  },
  {
    title: 'Recovery & Renewal Programs',
    desc: 'Multi-day retreats for those recovering from burnout, grief, or life transitions.',
  },
  {
    title: 'Leadership in the Forest',
    desc: 'Executive programs that use nature as a mirror for reflection, clarity, and renewed purpose.',
  },
  {
    title: 'Corporate Wellness',
    desc: 'Team experiences designed to reduce stress, build connection, and restore collective energy.',
  },
]

export function Wellness() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lake-moonrise.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-transparent" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl">
          <p className="text-glow-400 font-medium tracking-widest text-sm mb-4">WELLNESS</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 text-glow mb-6">
            Forest Therapy Programs
          </h1>
          <p className="text-xl text-cream-200/90">Where healing meets the forest.</p>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* The Practice */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-forest-900 mb-6">The Practice</h2>
              <p className="text-forest-700/90 text-lg leading-relaxed mb-4">
                Forest therapy — rooted in the Japanese practice of shinrin-yoku — is the art of being
                present in the forest. Not hiking. Not exercising. Arriving.
              </p>
              <p className="text-forest-700/90 text-lg leading-relaxed">
                At BIOME, we combine this practice with research-informed methods and a deep respect for
                the land. Our programs are nature-based, human-centred, and designed for people who are
                ready to heal — not perform.
              </p>
            </div>
            <div>
              <img
                src="/images/lake-kayak-sunset.jpg"
                alt="Kayaking through lily pads at sunset on BIOME's lake"
                className="img-organic w-full shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d1f10" flip />

      {/* What We Offer */}
      <section className="bg-forest-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-cream-100 text-glow mb-12">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((o) => (
              <div key={o.title} className="bg-forest-800/50 p-8 rounded-2xl border border-forest-700/30 card-glow">
                <h3 className="font-serif text-xl text-glow-400 mb-3">{o.title}</h3>
                <p className="text-cream-200/80">{o.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <img
              src="/images/campfire-hammock.jpg"
              alt="Campfire with hammock strung between trees in the forest"
              className="img-organic w-full max-w-2xl mx-auto shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* CTA */}
      <section className="bg-cream-100 py-20 px-6 text-center">
        <h2 className="font-serif text-3xl text-forest-900 mb-6">Ready to begin?</h2>
        <p className="text-forest-700/80 text-lg mb-8 max-w-xl mx-auto">
          Every journey into the forest starts with a conversation.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-700 text-cream-100 px-8 py-4 rounded-full font-medium
                     btn-glow hover:bg-forest-600 transition-colors no-underline"
        >
          Reach us
        </Link>
      </section>
    </>
  )
}
