import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'

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
      <section className="py-24 md:py-32 px-6 bg-forest-700">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm font-mono tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">Enter the biome.</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-forest-50 border border-forest-200 rounded-2xl p-8 text-center">
                <p className="text-2xl mb-4">🌲</p>
                <h3 className="text-xl text-forest-700 mb-2">Message received</h3>
                <p className="text-ink-muted">
                  Thank you. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white border border-soil-100 rounded-lg px-4 py-3
                               text-ink focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-soil-100 rounded-lg px-4 py-3
                               text-ink focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-white border border-soil-100 rounded-lg px-4 py-3
                               text-ink resize-y focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent"
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-gold-400 text-white px-8 py-3 rounded-lg font-medium
                             cursor-pointer hover:bg-gold-500 transition-colors border-0
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-4">Locations</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-forest-700">Biome Campus</p>
                  <p className="text-ink-muted">L'Ange-Gardien, QC</p>
                </div>
                <div>
                  <p className="font-medium text-forest-700">Grove Campus</p>
                  <p className="text-ink-muted">Ottawa, ON</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-4">Email</h3>
              <a
                href="mailto:jeeplalonde@gmail.com"
                className="text-gold-500 no-underline hover:text-gold-400 transition-colors"
              >
                jeeplalonde@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-mono text-ink-muted tracking-widest uppercase mb-4">Connect</h3>
              <a
                href="https://linkedin.com/in/jean-paullalonde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 no-underline hover:text-gold-400 transition-colors"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
