import { Link } from 'react-router-dom'
import { WaveDivider } from '../components/WaveDivider'

const pillars = [
  { to: '/wellness', icon: '🌲', title: 'Forest Therapy', desc: 'Nature-based programs for healing and renewal.' },
  { to: '/research', icon: '🔬', title: 'The Research Centre', desc: 'Studying how nature heals — two campuses, one question.' },
  { to: '/about', icon: '✨', title: 'About Us', desc: 'Our story, our team, our approach.' },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-aerial.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/40 to-forest-900/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-100 text-glow-strong mb-6">
            How does nature heal?
          </h1>
          <p className="text-xl md:text-2xl text-cream-200/90 font-light max-w-2xl mx-auto">
            A mental health wellness and forest therapy<br />
            research centre in the Gatineau Hills.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-glow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* Three Pillars */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group card-glow bg-white p-8 rounded-3xl no-underline"
              >
                <div className="w-12 h-12 bg-forest-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-glow-400/20 transition-colors">
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="font-serif text-2xl text-forest-900 mb-3">{p.title}</h3>
                <p className="text-forest-700/80">{p.desc}</p>
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
      <section className="py-24 px-6 bg-forest-900">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-cream-200/90 italic leading-relaxed">
            "Before building any system, BIOME asks: Which nature system most aligns with what we are trying to do —
            and could Nature teach us a better way?"
          </blockquote>
          <div className="w-16 h-1 bg-glow-400 mx-auto mt-8 rounded-full" />
        </div>
      </section>
    </>
  )
}
