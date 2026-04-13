import { Link } from 'react-router-dom'

const services = [
  {
    tier: 'Entry',
    title: 'Keynotes & Workshops',
    desc: 'AI adoption, human-centred technology, nature-based leadership.',
    price: '$2,500 — $10,000 per engagement',
  },
  {
    tier: 'Core',
    title: 'Human-Centred AI Adoption Program',
    desc: 'Level 1: Basic AI Productivity. Level 2: Advanced AI Analysis. Level 3: AI Maximalist — Product & Ecosystem Development.',
    price: 'Per-person or per-cohort pricing',
  },
  {
    tier: 'Core',
    title: 'Consulting & Advisory',
    desc: 'AI strategy, digital transformation, product governance.',
    price: '$200 — $350/hour or project retainers',
  },
  {
    tier: 'Premium',
    title: 'Manifest AI — Innovation Lab',
    desc: 'Concept-to-production innovation lab service. Level 3 as a service.',
    price: 'Discovery Sprint: $10K–$20K | Full Lab: $40K–$80K | Partnership: $80K–$150K+',
  },
]

const customBuilds = [
  'Sovereign AI deployments',
  'Digital twin architecture',
  'Memory Reservoir systems',
  'Off-grid network design',
  'Social media reclamation services',
  'Smart home ecosystem design',
]

const retreats = [
  { name: 'Leadership in the Forest', duration: '2-3 days' },
  { name: 'AI + Nature Workshop Retreat', duration: '3-5 days' },
  { name: 'Recovery & Renewal', duration: '5-7 days' },
]

export function BuildWithUs() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Build With Us</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">What we build for you.</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            Everything we build for ourselves, we build for others. The eco-networks, the sovereign AI,
            the memory reservoirs, the intelligence platforms — they are all available as services to
            organizations and individuals who share our values.
          </p>
        </div>
      </section>

      {/* Service Lines */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-soil-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                  s.tier === 'Entry' ? 'bg-forest-50 text-forest-600' :
                  s.tier === 'Core' ? 'bg-gold-400/10 text-gold-500' :
                  'bg-forest-700 text-white'
                }`}>
                  {s.tier}
                </span>
                <h3 className="text-xl text-forest-700 m-0">{s.title}</h3>
              </div>
              <p className="text-ink-light leading-relaxed mb-4">{s.desc}</p>
              <p className="text-sm font-mono text-ink-muted">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Ecosystem Builds */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-forest-700 mb-8">Custom Ecosystem Builds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customBuilds.map((b) => (
              <div key={b} className="bg-soil-50 border border-soil-100 rounded-xl px-6 py-4">
                <span className="text-ink">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Retreats */}
      <section className="py-24 px-6 bg-forest-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-2">Biome Campus</h2>
          <h2 className="text-2xl text-forest-700 mb-8">Immersive Retreats</h2>
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src="/images/campfire-hammock.jpg"
              alt="Campfire with hammock strung between trees in the forest"
              className="w-full h-64 md:h-80 object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retreats.map((r) => (
              <div key={r.name} className="bg-white border border-soil-100 rounded-xl p-6 text-center">
                <h3 className="text-lg text-forest-700 mb-2">{r.name}</h3>
                <p className="text-sm text-ink-muted font-mono">{r.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-forest-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white mb-4">Ready to build?</h2>
          <p className="text-forest-200 mb-8">Tell us about your project. We'll tell you how nature would approach it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 text-white px-8 py-3 rounded-lg
                       font-medium no-underline hover:bg-gold-500 transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
