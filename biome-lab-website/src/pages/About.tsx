const interests = [
  'Bushcraft & birding (Merlin/Cornell Lab)',
  'Indigenous wisdom & traditional knowledge',
  'SAND (Science and Nonduality)',
  'Yoga & contemplative practice',
  'Homesteading & off-grid living',
]

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">About</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">About Us</h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">The Story</h2>

          <p className="text-lg text-ink leading-relaxed mb-8">
            BIOME began with burnout. After 20 years building digital systems for the Canadian federal
            government, JP Lalonde hit a wall. Grief, exhaustion, the weight of years spent in systems
            that moved fast but rarely asked why.
          </p>
          <p className="text-lg text-ink leading-relaxed mb-8">
            The forest at L'Ange-Gardien became the answer — not as escape, but as laboratory.
            Walking the trails, sitting by the lake, watching the ecosystem do what ecosystems do:
            heal, adapt, regenerate. A question emerged:
          </p>
          <p className="text-2xl text-gold-500 italic mb-8">
            How does nature heal?
          </p>
          <p className="text-lg text-ink leading-relaxed mb-8">
            BIOME was born from that question. Not as a tech company. Not as a wellness brand.
            As a place where the question could be studied, lived, and shared.
          </p>

          {/* Forest Guardian */}
          <div className="my-16 rounded-2xl overflow-hidden">
            <img
              src="/images/forest-guardian-dog.jpg"
              alt="BIOME's forest guardian dog on the yurt deck overlooking the property"
              className="w-full h-64 md:h-80 object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Career Arc */}
          <div className="border-l-2 border-forest-200 pl-8 space-y-6 my-16">
            <div>
              <p className="text-sm text-ink-muted font-mono mb-1">1994 — 1996</p>
              <p className="text-ink">Electronic Engineering Technology — Radio College of Canada</p>
            </div>
            <div>
              <p className="text-sm text-ink-muted font-mono mb-1">Career</p>
              <p className="text-ink">
                Hewlett Packard Enterprise &rarr; CMHC (13 years) &rarr; NSERC &rarr;
                DigitalPlan Consulting &rarr; IAAC &rarr; FINTRAC &rarr; BIOME
              </p>
            </div>
            <div>
              <p className="text-sm text-ink-muted font-mono mb-1">Impact</p>
              <p className="text-ink">
                Built innovation labs. Led AI strategy. Transformed organizations.
                Keynoted at TechWeek Singapore, CIOCan Peer Forum, Canada School of Public Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">How We Work</h2>
          <p className="text-lg text-ink leading-relaxed mb-8">
            BIOME operates as a living ecosystem — a small team supported by AI-enabled systems
            we call our "fairy staff." Each brings specialized expertise: strategy, communications,
            product development, research.
          </p>
          <p className="text-lg text-ink leading-relaxed">
            This isn't about replacing people with technology. It's about working the way nature works —
            distributed, collaborative, adaptive. Every system we build mirrors the patterns we study
            in the forest.
          </p>
        </div>
      </section>

      {/* Speaking & Workshops */}
      <section className="py-24 px-6 bg-forest-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">Speaking & Workshops</h2>
          <div className="bg-white rounded-2xl p-8 mb-8">
            <blockquote className="text-ink italic border-l-4 border-gold-400 pl-6 mb-6">
              AI is a business capability to be learned, not a technology to replace people.
            </blockquote>
            <p className="text-ink-light leading-relaxed">
              JP delivers keynotes and workshops on human-centred AI adoption, nature-based leadership,
              and the intersection of technology and wellness. Past engagements include TechWeek Singapore,
              CIOCan Peer Forum, and the Canada School of Public Service.
            </p>
          </div>

          {/* Interests */}
          <div className="mt-16">
            <h3 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-8">Interests That Shape the Work</h3>
            <ul className="space-y-3">
              {interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3 text-ink">
                  <span className="text-forest-400">&#9679;</span>
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
