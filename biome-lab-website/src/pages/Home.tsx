import { Link } from 'react-router-dom'

const pillars = [
  { to: '/eco-lab', icon: '🌲', title: 'The Eco-Lab', desc: 'Where we grow.' },
  { to: '/intelligence', icon: '🧠', title: 'Intelligence', desc: 'How we think.' },
  { to: '/living-question', icon: '✨', title: 'The Living Question', desc: 'Why we exist.' },
]

const capabilities = [
  'Sovereign AI',
  'Digital Twins',
  'Memory Reservoirs',
  'Eco-Networks',
  'Reclamation Services',
  'Off-Grid Social',
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-forest-900 overflow-hidden">
        {/* Gradient overlay simulating forest canopy light */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 via-forest-800/70 to-forest-700/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-400/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-6 animate-fade-in-up">
            Bio-Intelligent Organic and Machine Ecosystems
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            A forest-first<br />
            intelligence laboratory.
          </h1>
          <p className="text-forest-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Studying how nature heals.<br />
            Building the ecosystems that heal with it.
          </p>
          <p className="text-gold-300 text-lg italic mt-8 animate-fade-in-up animate-breathe" style={{ animationDelay: '0.45s' }}>
            How does nature heal?
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
            We look at the Intelligent Universe and study it — always asking which nature system most aligns
            with what we are trying to do, and whether Nature could teach us a better way. Then we build the
            digital ecosystems and interfaces where nature, intelligence, and spirit converge. For ourselves.
            And for others.
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

      {/* What We Build */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">What We Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap} className="bg-white border border-soil-100 rounded-xl px-6 py-5">
                <span className="text-forest-600 font-medium">{cap}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/build-with-us"
              className="inline-flex items-center gap-2 bg-gold-400 text-white px-8 py-3 rounded-lg
                         font-medium no-underline hover:bg-gold-500 transition-colors"
            >
              Build with us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-24 px-6 bg-forest-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-forest-200 text-lg md:text-xl leading-relaxed italic">
            "Before building any system, BIOME asks: Which nature system most aligns with what we are trying to do —
            and could Nature teach us a better way?"
          </p>
          <div className="mt-8 flex justify-center gap-8 text-forest-400 text-sm font-mono">
            <span>Mycelium → Decentralized intelligence</span>
          </div>
          <div className="flex justify-center gap-8 text-forest-400 text-sm font-mono mt-2">
            <span>Trees → Resource sharing</span>
          </div>
          <div className="flex justify-center gap-8 text-forest-400 text-sm font-mono mt-2">
            <span>Forests → Resilience patterns</span>
          </div>
        </div>
      </section>
    </>
  )
}
