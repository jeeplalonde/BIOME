const sections = [
  {
    title: 'Sovereign AI',
    content: [
      'AI that belongs to you. No cloud dependency. No data extraction.',
      'Local-first architecture. Your data stays on your hardware.',
      'BIOME Firewall — optional air-gapped operation.',
    ],
  },
  {
    title: 'Digital Ecosystems for the Home',
    content: [
      'Intelligent systems inside your living space.',
      'Privacy-first smart home infrastructure.',
      'Organic and digital systems working together.',
    ],
  },
  {
    title: 'Personal Memory Reservoirs',
    content: [
      'Persistent, sovereign knowledge bases.',
      'Your life, your memories, your intelligence — stored and growing.',
      'Digital twin services for individuals and families.',
    ],
  },
  {
    title: 'BIOME Transcript Intelligence (BTI)',
    content: [
      'Sovereign AI intelligence platform.',
      'Transform unstructured content into structured, searchable knowledge.',
      'FINTRAC-inspired entity resolution.',
      'Knowledge graphs that grow over time.',
    ],
  },
  {
    title: 'Memory Reclamation',
    content: [
      'Capture what social platforms took from you.',
      'Restore content within your personal biome.',
      'Memories are a human right, not a commodity.',
    ],
  },
  {
    title: 'The Off-Grid Social Network',
    content: [
      'Zero data capitalism.',
      'Share skills, knowledge, and connection — without selling your soul.',
      'Human-centred AI mindset.',
      'A place to learn and grow together.',
    ],
  },
]

export function Intelligence() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 bg-forest-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Intelligence</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">How we think.</h1>
          <p className="text-forest-200 text-lg max-w-2xl leading-relaxed">
            BIOME is an intelligence and knowledge company with advanced capabilities.
            We build sovereign systems that learn, connect, and grow — just like the ecosystems we study.
          </p>
        </div>
      </section>

      {/* Capability sections */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((s, i) => (
            <div key={s.title} className={`${i % 2 === 0 ? '' : 'md:pl-16'}`}>
              <div className="border-l-2 border-forest-300 pl-8">
                <h2 className="text-2xl text-forest-700 mb-6">{s.title}</h2>
                <ul className="space-y-4">
                  {s.content.map((line) => (
                    <li key={line} className="text-ink-light leading-relaxed text-lg">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nature's Intelligence */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/lake-kayak-sunset.jpg"
          alt="Kayaking through lily pads at sunset on BIOME's lake"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      {/* Closing */}
      <section className="py-24 px-6 bg-forest-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-ink leading-relaxed italic">
            Inspired by the Intelligent Universe — the idea that intelligence isn't exclusive to brains or machines.
            It exists in ecosystems, in fungi, in the patterns of starlings in flight.
          </p>
        </div>
      </section>
    </>
  )
}
