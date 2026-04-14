import { WaveDivider } from '../components/WaveDivider'

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-forest-900">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 to-forest-800" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl py-20">
          <p className="text-glow-400 font-medium tracking-widest text-sm mb-4">ABOUT</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 text-glow">
            About Us
          </h1>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* The Story */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-forest-900 mb-8">The Story</h2>

          <p className="text-forest-700/90 text-lg leading-relaxed mb-6">
            BIOME began with burnout. After 20 years building digital systems for the Canadian federal
            government, JP Lalonde hit a wall. Grief, exhaustion, the weight of years spent in systems
            that moved fast but rarely asked why.
          </p>
          <p className="text-forest-700/90 text-lg leading-relaxed mb-6">
            The forest at L'Ange-Gardien became the answer — not as escape, but as laboratory.
            Walking the trails, sitting by the lake, watching the ecosystem do what ecosystems do:
            heal, adapt, regenerate. A question emerged:
          </p>

          <blockquote className="font-serif text-3xl text-glow-400 italic my-12 pl-8 border-l-4 border-glow-400">
            How does nature heal?
          </blockquote>

          <p className="text-forest-700/90 text-lg leading-relaxed mb-6">
            BIOME was born from that question. Not as a tech company. Not as a wellness brand.
            As a place where the question could be studied, lived, and shared.
          </p>

          {/* Forest Guardian */}
          <div className="mt-12">
            <img
              src="/images/forest-guardian-dog.jpg"
              alt="BIOME's forest guardian on the yurt deck"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-lg"
              style={{ objectFit: 'cover', objectPosition: 'center 25%', height: '400px' }}
              loading="lazy"
            />
          </div>

          {/* Career Arc */}
          <div className="border-l-2 border-forest-200 pl-8 space-y-6 my-16">
            <div>
              <p className="text-sm text-forest-700/60 font-mono mb-1">1994 — 1996</p>
              <p className="text-forest-700/90">Electronic Engineering Technology — Radio College of Canada</p>
            </div>
            <div>
              <p className="text-sm text-forest-700/60 font-mono mb-1">Career</p>
              <p className="text-forest-700/90">
                Hewlett Packard Enterprise &rarr; CMHC (13 years) &rarr; NSERC &rarr;
                DigitalPlan Consulting &rarr; IAAC &rarr; FINTRAC &rarr; BIOME
              </p>
            </div>
            <div>
              <p className="text-sm text-forest-700/60 font-mono mb-1">Impact</p>
              <p className="text-forest-700/90">
                Built innovation labs. Led AI strategy. Transformed organizations.
                Keynoted at TechWeek Singapore, CIOCan Peer Forum, Canada School of Public Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d1f10" flip />

      {/* How We Work */}
      <section className="bg-forest-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-cream-100 text-glow mb-8">How We Work</h2>
          <p className="text-cream-200/90 text-lg leading-relaxed mb-6">
            BIOME operates as a living ecosystem — a small team supported by AI-enabled systems
            we call our "fairy staff." Each brings specialized expertise: strategy, communications,
            product development, research.
          </p>
          <p className="text-cream-200/90 text-lg leading-relaxed">
            This isn't about replacing people with technology. It's about working the way nature works —
            distributed, collaborative, adaptive. Every system we build mirrors the patterns we study
            in the forest.
          </p>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* Speaking & Workshops */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-forest-900 mb-8">Speaking & Workshops</h2>

          <p className="text-forest-700/90 text-lg leading-relaxed mb-8">
            JP delivers keynotes and workshops on human-centred AI adoption, nature-based leadership,
            and the intersection of technology and wellness. Past engagements include TechWeek Singapore,
            CIOCan Peer Forum, and the Canada School of Public Service.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-forest-700/90 italic mb-4">
              "JP delivered exactly what we needed — practical frameworks, not theory. His 3-level AI
              adoption model gave our team a clear path forward."
            </p>
            <p className="text-forest-900 font-medium">— Phil Johnston, TEC Canada</p>
            <p className="text-glow-400">Rating: 9.5/10</p>
          </div>

          {/* Interests */}
          <div className="mt-16">
            <h3 className="text-sm font-mono text-forest-700/60 tracking-widest uppercase mb-8">Interests That Shape the Work</h3>
            <ul className="space-y-3">
              {[
                'Bushcraft & birding (Merlin/Cornell Lab)',
                'Indigenous wisdom & traditional knowledge',
                'SAND (Science and Nonduality)',
                'Yoga & contemplative practice',
                'Homesteading & off-grid living',
              ].map((interest) => (
                <li key={interest} className="flex items-center gap-3 text-forest-700/90">
                  <span className="text-glow-400">&#9679;</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
