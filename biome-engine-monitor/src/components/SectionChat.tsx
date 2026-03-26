import { useState, useRef, useEffect } from 'react'
import type { Capability, HealthStatus } from '../data/capabilities'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface SectionChatProps {
  capability: Capability
  values: Record<string, { value: unknown; status: HealthStatus }>
  projectNames: string[]
  supabaseUrl: string
}

export function SectionChat({ capability, values, projectNames, supabaseUrl }: SectionChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Build context summary for the system prompt
  function buildContext(): string {
    const projectLines = projectNames.map((name) => {
      const entry = values[name]
      if (!entry) return `  ${name}: no data`
      const val = typeof entry.value === 'boolean'
        ? (entry.value ? 'Yes' : 'No')
        : typeof entry.value === 'number'
          ? `${entry.value}%`
          : String(entry.value)
      return `  ${name}: ${val} (${entry.status})`
    }).join('\n')

    return [
      `Capability: ${capability.name}`,
      `Category: ${capability.category}`,
      ``,
      `Description: ${capability.description}`,
      ``,
      `Why it matters: ${capability.whyItMatters}`,
      ``,
      `Industry standard: ${capability.industryStandard}`,
      ``,
      `Metric: ${capability.metric}`,
      ``,
      `Current health across BIOME projects:`,
      projectLines,
    ].join('\n')
  }

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: Message = { role: 'user', content: text }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/capability-advisor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          context: buildContext(),
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(errText || `HTTP ${response.status}`)
      }

      const data = await response.json()
      setMessages([...newMessages, { role: 'assistant', content: data.response }])
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Starter prompts specific to the capability
  const starters = getStarters(capability.id)

  return (
    <div className="mt-4 border-t border-moss-dry pt-4">
      <h4 className="text-sm font-sans font-semibold text-forest-floor m-0 mb-3">
        Ask about {capability.name}
      </h4>

      {/* Starter prompts — only show when no messages yet */}
      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {starters.map((starter, i) => (
            <button
              key={i}
              onClick={() => { setInput(starter); inputRef.current?.focus() }}
              className="px-3 py-1.5 text-xs font-sans bg-hearthstone border border-moss-dry
                         rounded-full cursor-pointer hover:border-living-moss transition-colors
                         text-fern"
            >
              {starter}
            </button>
          ))}
        </div>
      )}

      {/* Message history */}
      {messages.length > 0 && (
        <div className="max-h-64 overflow-y-auto mb-3 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm font-sans leading-relaxed rounded-lg px-3 py-2 ${
                msg.role === 'user'
                  ? 'bg-hearthstone text-forest-floor ml-8'
                  : 'bg-clean-air text-deep-canopy mr-4'
              }`}
            >
              <div className="text-xs text-lichen mb-1 font-semibold">
                {msg.role === 'user' ? 'You' : 'Advisor'}
              </div>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          ))}
          {loading && (
            <div className="bg-clean-air text-lichen text-sm font-sans rounded-lg px-3 py-2 mr-4">
              <div className="text-xs text-lichen mb-1 font-semibold">Advisor</div>
              Thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-xs text-health-red font-sans mb-2 px-1">
          {error}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder={`Ask about ${capability.name.toLowerCase()}...`}
          className="flex-1 bg-clean-air border border-moss-dry rounded-lg px-3 py-2
                     text-sm font-sans text-forest-floor resize-none
                     focus:outline-none focus:ring-2 focus:ring-living-moss focus:border-transparent"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-4 py-2 text-sm font-sans bg-deep-canopy text-clean-air
                     rounded-lg cursor-pointer hover:opacity-90 transition-opacity
                     disabled:opacity-40 disabled:cursor-not-allowed border-0"
        >
          Send
        </button>
      </div>
    </div>
  )
}

// Contextual starter prompts per capability
function getStarters(capId: string): string[] {
  const starters: Record<string, string[]> = {
    rls_coverage: [
      'What happens if a table has no RLS?',
      'How do I add RLS to a new table?',
      'Can RLS slow down queries?',
    ],
    rls_policy_count: [
      'Why is my policy count below 100%?',
      'What policies does a typical table need?',
      'How do I test RLS policies?',
    ],
    audit_log_standard: [
      'How does the BIOME audit log pattern work?',
      'Should I auto-populate the audit log with triggers?',
      'What should I store in the reason field?',
    ],
    updated_at_triggers: [
      'Why doesn\'t Postgres auto-update timestamps?',
      'How does set_updated_at() work?',
      'What breaks if timestamps are stale?',
    ],
    database_health: [
      'What causes database connection failures?',
      'How do I monitor uptime on Supabase?',
      'What\'s a healthy response time?',
    ],
    table_count: [
      'How many tables is too many?',
      'When should I split vs combine tables?',
      'How do I audit unused tables?',
    ],
    total_rows: [
      'What are Supabase storage limits?',
      'When should I start archiving data?',
      'How accurate are row estimates?',
    ],
    uuid_standard: [
      'What\'s the difference between the two UUID functions?',
      'Can I migrate from uuid_generate_v4 safely?',
      'Why does consistency matter here?',
    ],
    biome_function_standard: [
      'What shared functions should every BIOME project have?',
      'How do I add a new BIOME standard function?',
      'What happens if a project is missing set_updated_at?',
    ],
  }
  return starters[capId] ?? ['Tell me more about this capability']
}
