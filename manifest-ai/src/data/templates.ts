/**
 * Discovery Templates — the 8 conversations that shape everything you build.
 *
 * WHY: This is the SSOT for all template content. Every label, hint,
 * and color lives here. The UI reads from this, never hardcodes content.
 */

export interface TemplateField {
  key: string
  label: string
  hint: string
}

export interface Template {
  id: number
  slug: string
  title: string
  subtitle: string
  color: string
  fields: TemplateField[]
}

export const TEMPLATES: Template[] = [
  {
    id: 1,
    slug: 'the-spark',
    title: 'The spark',
    subtitle: 'Why this matters to you',
    color: '#1D9E75',
    fields: [
      {
        key: 'mission',
        label: 'The coffee shop pitch',
        hint: "If you bumped into a friend at a coffee shop and they asked 'so what are you building?' — what would you say?",
      },
      {
        key: 'vision',
        label: 'The future you see',
        hint: "Close your eyes. It's 5 years from now and everything worked. What does the world look like for the people you helped?",
      },
      {
        key: 'intent',
        label: 'The deeper shift',
        hint: "What's the deeper thing you're trying to change? Not the product — the shift you want to see in how people work, live, or think.",
      },
      {
        key: 'why_statement',
        label: 'The fire',
        hint: "Finish this sentence honestly: 'I can't NOT build this because...'",
      },
    ],
  },
  {
    id: 2,
    slug: 'your-non-negotiables',
    title: 'Your non-negotiables',
    subtitle: "The lines you won't cross",
    color: '#534AB7',
    fields: [
      {
        key: 'values',
        label: "Hills you'd die on",
        hint: "Someone offers you a huge deal, but it means cutting a corner you believe in. What's the corner you'd walk away over? Name up to 5 hills you'd die on.",
      },
      {
        key: 'principles',
        label: 'Your patterns',
        hint: "If someone worked with you for a week, what patterns would they notice in how you make decisions? What rules do you live by even when nobody's watching?",
      },
      {
        key: 'constraints',
        label: 'Off the table',
        hint: "What will you NEVER do, even if a competitor does it and wins? What's off the table, full stop?",
      },
    ],
  },
  {
    id: 3,
    slug: 'your-story',
    title: 'Your story',
    subtitle: 'The life that led you here',
    color: '#D85A30',
    fields: [
      {
        key: 'motivation',
        label: 'The moment',
        hint: "What happened in your life that made you the person who HAD to build this? What's the story — the moment, the frustration, the experience that lit this fire?",
      },
      {
        key: 'advantages',
        label: "What can't be copied",
        hint: "What do you know — from lived experience — that your competitors had to read in a book? What can't be copied because it came from YOUR path?",
      },
      {
        key: 'background',
        label: 'The proof',
        hint: 'If someone doubted you could pull this off, what three things from your past would shut them up?',
      },
    ],
  },
  {
    id: 4,
    slug: 'your-person',
    title: 'Your person',
    subtitle: "The human you're building this for",
    color: '#378ADD',
    fields: [
      {
        key: 'target_audience',
        label: 'Their Tuesday morning',
        hint: "Picture one specific person you want to help. Give them a name. What's their job? What does their Tuesday morning look like?",
      },
      {
        key: 'persona_seed',
        label: 'Their 2am thoughts',
        hint: 'What keeps this person up at 2am? What do they complain about to their partner over dinner? What do they secretly wish someone would just FIX for them?',
      },
      {
        key: 'context_map',
        label: 'Their world',
        hint: 'Where does this person hang out? What do they Google at work? Who do they trust for advice? What apps are already open on their screen?',
      },
    ],
  },
  {
    id: 5,
    slug: 'the-broken-thing',
    title: 'The broken thing',
    subtitle: 'What hurts right now',
    color: '#A32D2D',
    fields: [
      {
        key: 'problem_statement',
        label: 'The story of when it goes wrong',
        hint: "Go back to your person. What's the most frustrating part of their day that you could fix? Tell me the story of when it goes wrong for them.",
      },
      {
        key: 'pain_points',
        label: 'The 5-minute vent',
        hint: 'If your person could vent to you for 5 minutes with no filter, what would they say? What makes them feel stupid, frustrated, or stuck?',
      },
      {
        key: 'urgency',
        label: 'The ticking clock',
        hint: "What just changed in the world that means this problem can't be ignored anymore? What's the ticking clock?",
      },
    ],
  },
  {
    id: 6,
    slug: 'the-magic-wand',
    title: 'The magic wand',
    subtitle: 'What changes for your person',
    color: '#639922',
    fields: [
      {
        key: 'core_concept',
        label: 'Their new Tuesday',
        hint: "If you could wave a magic wand for your person, what's different about their day tomorrow? Walk me through their Tuesday morning AFTER they have your solution.",
      },
      {
        key: 'differentiator',
        label: "The 'no, it's different' moment",
        hint: "When your person tries to explain your thing to a friend, what's the one sentence they'd use? What makes them say 'no, it's different because...'?",
      },
      {
        key: 'insight_statement',
        label: 'The hidden truth',
        hint: "What's the thing everyone in your industry assumes is true — that you know is wrong? The hidden truth your solution is built on.",
      },
    ],
  },
  {
    id: 7,
    slug: 'the-landscape',
    title: 'The landscape',
    subtitle: "What your person does when they can't find you",
    color: '#BA7517',
    fields: [
      {
        key: 'market_gap',
        label: 'Life without you',
        hint: "When your person has this problem today and you don't exist yet — what do they do? Spreadsheets? Ask a colleague? Hire a consultant? Just suffer?",
      },
      {
        key: 'competitor_set',
        label: 'The closest things',
        hint: "What are the closest things to your solution that already exist? What do they get right? And where do they drop the ball — the moment your person thinks 'ugh, I wish this could just...'?",
      },
      {
        key: 'market_size',
        label: 'How many people like yours',
        hint: 'How many people like your person are out there? Is this a hundred people with a massive problem, or a million people with a small annoyance? Where is the energy?',
      },
    ],
  },
  {
    id: 8,
    slug: 'the-destination',
    title: 'The destination',
    subtitle: "What makes you say 'it's working'",
    color: '#D4537E',
    fields: [
      {
        key: 'success_criteria',
        label: 'The text to your best friend',
        hint: "A year from now, what would make you text your best friend and say 'holy shit, it's actually working'? What do you see, hear, or feel that tells you this is real?",
      },
      {
        key: 'strategic_horizon',
        label: 'The road trip',
        hint: "If this journey is a road trip, where are you stopping for lunch (3 months), where are you sleeping tonight (12 months), and where's the final destination (3 years)?",
      },
      {
        key: 'win_definition',
        label: 'The message from your person',
        hint: 'Imagine your person sends you a message. What does it say? What would they tell you that means you actually made a difference in their life?',
      },
    ],
  },
]

/** Total number of fields across all templates */
export const TOTAL_FIELDS = TEMPLATES.reduce((sum, t) => sum + t.fields.length, 0)
