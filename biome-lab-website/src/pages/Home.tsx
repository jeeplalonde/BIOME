import { Link } from 'react-router-dom'

const pillars = [
  { to: '/wellness', icon: '🌿', title: 'Forest Therapy', desc: 'Nature-based programs for healing and renewal.' },
  { to: '/research', icon: '🔬', title: 'The Research Centre', desc: "Studying how nature heals — two campuses, one question." },
  { to: '/about', icon: '🌲', title: 'About Us', desc: 'Our story, our team, our approach.' },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-forest-900 overflow-hidden">
        <img
          src="/images/hero-aerial.jpg"
          alt="Aerial view of BIOME's lakefront campus surrounded by forest"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-800/50 to-forest-700/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-400/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8 animate-fade-in-up">
            How does nature heal?
          </h1>
          <p className="text-forest-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            A mental health wellness and forest therapy<br />
            research centre in the Gatineau Hills.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-breathe">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-300">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-ink leading-relaxed">
            BIOME is a forest-first research centre and wellness space in the Gatineau Hills.
            We study how nature heals — and build the programs, systems, and spaces where
            that healing happens.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group block bg-soil-50 border border-soil-100 rounded-2xl p-8 no-underline
                           hover:border-forest-200 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="text-xl text-forest-700 mb-2 group-hover:text-forest-600 transition-colors">{p.title}</h3>
                <p className="text-ink-muted">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Panorama divider */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="/images/panorama-forest-lake.jpg"
          alt="Panoramic view of forest and lake at BIOME"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* First Principle */}
      <section className="py-24 px-6 bg-forest-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-forest-200 text-lg md:text-xl leading-relaxed italic">
            "Before building any system, BIOME asks: Which nature system most aligns with what we are trying to do —
            and could Nature teach us a better way?"
          </p>
        </div>
      </section>
    </>
  )
}
