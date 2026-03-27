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
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">About JP</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">Who walks this path.</h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-ink leading-relaxed mb-8">
            JP Lalonde is the founder and CEO of BIOME Laboratories. His journey from electronic engineering
            technology to the forest floor is the story of a man who spent 20 years building digital systems
            for the Canadian federal government — and then went looking for what nature could teach him about
            building better ones.
          </p>

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

          {/* The Program */}
          <div className="bg-forest-50 rounded-2xl p-8 my-16">
            <h3 className="text-xl text-forest-700 mb-4">The Human-Centred AI Adoption Program</h3>
            <blockquote className="text-ink italic border-l-4 border-gold-400 pl-6 mb-6">
              AI is a business capability to be learned, not a technology to replace people.
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-forest-600 mb-1">Level 1</p>
                <p className="text-ink-muted">Basic AI Productivity</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-forest-600 mb-1">Level 2</p>
                <p className="text-ink-muted">Advanced AI Analysis</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-forest-600 mb-1">Level 3</p>
                <p className="text-ink-muted">AI Maximalist</p>
              </div>
            </div>
          </div>

          {/* The Turn */}
          <div className="my-16">
            <h3 className="text-xl text-forest-700 mb-6">The Turn</h3>
            <p className="text-lg text-ink leading-relaxed mb-6">
              Burnout, grief, healing — not as weakness but as the doorway to BIOME.
            </p>
            <p className="text-lg text-ink leading-relaxed mb-6">
              The forest at L'Ange-Gardien became the laboratory. The question emerged:
            </p>
            <p className="text-2xl text-gold-500 italic">
              How does nature heal?
            </p>
            <p className="text-lg text-ink leading-relaxed mt-6">
              BIOME was born from that question.
            </p>
          </div>

          {/* Interests */}
          <div className="my-16">
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
