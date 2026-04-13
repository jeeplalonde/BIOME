const campuses = [
  {
    name: 'Biome Campus',
    location: "L'Ange-Gardien, QC",
    features: [
      'Lakefront, off-grid eco-lab',
      'Forest Network sensor deployment',
      'Nature-based research and prototyping',
      'Retreat and immersion space',
    ],
  },
  {
    name: 'Grove Campus',
    location: 'Ottawa, ON',
    features: [
      'Urban operations hub',
      'Digital ecosystem development',
      'Client-facing consulting',
      'Training and workshops',
    ],
  },
]

const pillars = [
  {
    title: 'AI & Natural Ecosystems',
    desc: 'Sensors, drones, environmental intelligence — reading the forest in real time.',
  },
  {
    title: 'Human Wellbeing Through Nature',
    desc: 'Recovery, retreats, healing — what the forest teaches us about restoration.',
  },
  {
    title: 'Nature-Tech Science & Prototyping',
    desc: 'Grow environments, energy systems, biomimicry — building with nature, not against it.',
  },
]

export function EcoLab() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">The Eco-Lab</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">Where we grow.</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            Nature-enabled sensor networks. Off-grid infrastructure. Ecological intelligence gathering.
            This is how we study the Intelligent Universe.
          </p>
        </div>
      </section>

      {/* Campus Photo */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/eco-lab-yurt-solar.jpg"
          alt="BIOME eco-lab yurt with solar panels in a forest clearing"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* Two Campuses */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">Two Campuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campuses.map((c) => (
              <div key={c.name} className="bg-white border border-soil-100 rounded-2xl p-8">
                <h3 className="text-xl text-forest-700 mb-1">{c.name}</h3>
                <p className="text-gold-500 text-sm font-medium mb-6">{c.location}</p>
                <ul className="space-y-3">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink-light">
                      <span className="text-forest-400 mt-1">&#9679;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Aerial */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="/images/property-aerial.jpg"
          alt="Aerial view of BIOME's 12-acre forest property"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* Research Pillars */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">Research Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-forest-300 pt-6">
                <h3 className="text-lg text-forest-700 mb-3">{p.title}</h3>
                <p className="text-ink-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
