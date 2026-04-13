import { Link } from 'react-router-dom'

export function BuildWithUs() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Connect</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">Let's build together.</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            BIOME is a forest-first intelligence laboratory — studying how nature heals
            and building the ecosystems that heal with it. If that resonates, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Campfire photo */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="/images/campfire-hammock.jpg"
          alt="Campfire with hammock strung between trees in the forest"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* What we're exploring */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-12">What We're Exploring</h2>
          <p className="text-lg text-ink leading-relaxed mb-8">
            We're working at the intersection of nature, intelligence, and technology — building sovereign AI systems,
            ecological sensor networks, digital twins, and nature-based programs. We're always interested in conversations
            with people and organizations who share our values.
          </p>
          <p className="text-lg text-ink leading-relaxed">
            Whether you're curious about our work, exploring a collaboration, or just want to talk about
            what the forest can teach us — reach out.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-forest-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white mb-4">Start a conversation.</h2>
          <p className="text-forest-200 mb-8">Tell us what you're thinking about. We'll tell you how nature would approach it.</p>
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
