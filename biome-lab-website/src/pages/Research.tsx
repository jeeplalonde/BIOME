const campuses = [
  {
    name: 'Biome Campus',
    location: "L'Ange-Gardien, QC",
    desc: '12-acre lakefront property. Off-grid eco-lab. Forest Network sensor deployment. Nature-based research and retreat space.',
    image: '/images/property-aerial.jpg',
    imageAlt: "Aerial view of BIOME's 12-acre forest property",
  },
  {
    name: 'Grove Campus',
    location: 'Ottawa, ON',
    desc: 'Urban operations hub. Digital ecosystem development. Training and workshops.',
  },
]

const projects = [
  {
    title: 'Forest Network',
    desc: 'Nature-enabled sensors studying ecological patterns across the property. Real-time data on soil, water, air, and canopy health.',
  },
  {
    title: 'Memory Reservoir',
    desc: 'Sovereign personal data systems. Your memories, your control. Digital archives that belong to you — not a platform.',
  },
  {
    title: 'Research Partnerships',
    desc: 'Building connections with universities and health organizations to study the measurable effects of forest therapy.',
  },
]

export function Research() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 px-6 bg-forest-800 overflow-hidden">
        <img
          src="/images/eco-lab-yurt-solar.jpg"
          alt="BIOME eco-lab yurt with solar panels in a forest clearing"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Research</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">The Research Centre</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            Studying how nature heals.
          </p>
        </div>
      </section>

      {/* Two Campuses */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">Two Campuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campuses.map((c) => (
              <div key={c.name} className="bg-white border border-soil-100 rounded-2xl overflow-hidden">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-8">
                  <h3 className="text-xl text-forest-700 mb-1">{c.name}</h3>
                  <p className="text-gold-500 text-sm font-medium mb-4">{c.location}</p>
                  <p className="text-ink-light leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">What We're Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="border-t-2 border-forest-300 pt-6">
                <h3 className="text-lg text-forest-700 mb-3">{p.title}</h3>
                <p className="text-ink-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cattails accent */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="/images/cattails-wetland.jpg"
          alt="Cattails at the water's edge in BIOME's wetland"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* The Question */}
      <section className="py-24 px-6 bg-forest-800">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-forest-200 text-lg md:text-xl leading-relaxed italic mb-8">
            "Which nature system most aligns with what we are trying to do —
            and could Nature teach us a better way?"
          </blockquote>
          <p className="text-forest-300 leading-relaxed">
            Every BIOME project begins with this question. We study the patterns of forests, wetlands, and ecosystems —
            then ask whether nature's solutions can inform how we build systems for human health and wellbeing.
          </p>
        </div>
      </section>
    </>
  )
}
