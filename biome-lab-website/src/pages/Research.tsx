import { WaveDivider } from '../components/WaveDivider'

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
  { icon: '🌐', title: 'Forest Network', desc: 'Nature-enabled sensors studying ecological patterns across the property.' },
  { icon: '💾', title: 'Memory Reservoir', desc: 'Sovereign personal data systems. Your memories, your control.' },
  { icon: '🤝', title: 'Research Partnerships', desc: 'Building connections with universities and health organizations.' },
]

export function Research() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/eco-lab-yurt-solar.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-transparent" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl">
          <p className="text-glow-400 font-medium tracking-widest text-sm mb-4">RESEARCH</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 text-glow-strong mb-6">
            The Research Centre
          </h1>
          <p className="text-xl text-cream-200/90">Studying how nature heals.</p>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* Two Campuses */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-forest-900 mb-12">Two Campuses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campuses.map((c) => (
              <div key={c.name} className="bg-white rounded-3xl overflow-hidden shadow-lg card-glow">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center">
                    <span className="text-6xl">🌳</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">{c.name}</h3>
                  <p className="text-glow-400 text-sm font-medium mb-4">{c.location}</p>
                  <p className="text-forest-700/90">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d1f10" flip />

      {/* What We're Building */}
      <section className="bg-forest-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-cream-100 text-glow mb-12">What We're Building</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((p) => (
              <div key={p.title} className="text-center p-6">
                <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-sm">
                  <span className="text-3xl">{p.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-glow-400 mb-3">{p.title}</h3>
                <p className="text-cream-200/80 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <img
            src="/images/cattails-wetland.jpg"
            alt="Cattails at the water's edge in BIOME's wetland"
            className="img-organic w-full max-w-3xl mx-auto shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* The Question */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-forest-900 italic leading-relaxed">
            "Which nature system most aligns with what we are trying to do —
            and could Nature teach us a better way?"
          </blockquote>
          <div className="w-16 h-1 bg-glow-400 mx-auto mt-8 rounded-full" />
        </div>
      </section>
    </>
  )
}
