import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { WaveDivider } from '../components/WaveDivider'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const { error: insertErr } = await supabase
        .from('contact_submissions')
        .insert({ name, email, message })

      if (insertErr) throw new Error(insertErr.message)
      setSubmitted(true)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/moon-clouds-night.jpg')" }}
        />
        <div className="absolute inset-0 bg-forest-950/70" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl py-16">
          <p className="text-glow-400 font-medium tracking-widest text-sm mb-4">CONNECT</p>
          <h1 className="font-serif text-5xl text-cream-100 text-glow">
            Let's talk
          </h1>
        </div>
      </section>

      <WaveDivider fillColor="#FAF8F3" />

      {/* Form + Info */}
      <section className="bg-cream-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-white border border-forest-200 rounded-2xl p-8 text-center shadow-md">
                  <p className="text-4xl mb-4">🌲</p>
                  <h3 className="font-serif text-2xl text-forest-900 mb-2">Message received</h3>
                  <p className="text-forest-700/80">
                    Thank you. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-forest-900 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-forest-200 bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-forest-900 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-forest-200 bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-forest-900 font-medium mb-2">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-forest-200 bg-white resize-y transition-all"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-glow-400 text-forest-950 px-8 py-4 rounded-full font-medium
                               btn-glow hover:bg-glow-300 transition-colors border-0 cursor-pointer
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-forest-900 mb-4">Locations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-forest-900">Biome Campus</p>
                    <p className="text-forest-700/80">L'Ange-Gardien, QC</p>
                    <p className="text-forest-700/60 text-sm">By appointment</p>
                  </div>
                  <div>
                    <p className="font-medium text-forest-900">Grove Campus</p>
                    <p className="text-forest-700/80">Ottawa, ON</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-forest-900 mb-4">Email</h3>
                <a
                  href="mailto:jeeplalonde@gmail.com"
                  className="text-glow-400 hover:text-forest-700 transition-colors no-underline"
                >
                  jeeplalonde@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-forest-900 mb-4">Connect</h3>
                <a
                  href="https://linkedin.com/in/jean-paullalonde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-glow-400 hover:text-forest-700 transition-colors no-underline"
                >
                  LinkedIn &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
