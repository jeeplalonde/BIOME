export interface Field {
  key: string
  label: string
  hint: string
}

export interface Template {
  num: string
  title: string
  subtitle: string
  color: string
  fields: Field[]
}

export const templates: Template[] = [
  {
    num: '01',
    title: 'The Spark',
    subtitle: 'Why this matters to you',
    color: '#1D9E75',
    fields: [
      {
        key: 'mission',
        label: 'The coffee shop pitch',
        hint: 'If you bumped into a friend at a coffee shop and they asked "so what are you building?" — what would you say?',
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
        hint: 'Finish this sentence honestly: "I can\'t NOT build this because..."',
      },
    ],
  },
  {
    num: '02',
    title: 'Your Non-Negotiables',
    subtitle: "The lines you won't cross",
    color: '#534AB7',
    fields: [
      {
        key: 'values',
        label: "Hills you'd die on",
        hint: "Someone offers you a huge deal, but it means cutting a corner you believe in. What's the corner you'd walk away over?",
      },
      {
        key: 'principles',
        label: 'Your patterns',
        hint: 'If someone worked with you for a week, what patterns would they notice in how you make decisions?',
      },
      {
        key: 'constraints',
        label: 'Off the table',
        hint: 'What will you NEVER do, even if a competitor does it and wins?',
      },
    ],
  },
  {
    num: '03',
    title: 'Your Story',
    subtitle: 'The life that led you here',
    color: '#D85A30',
    fields: [
      {
        key: 'motivation',
        label: 'The moment',
        hint: 'What happened in your life that made you the person who HAD to build this?',
      },
      {
        key: 'advantages',
        label: "What can't be copied",
        hint: 'What do you know from lived experience that your competitors had to read in a book?',
      },
      {
        key: 'background',
        label: 'The proof',
        hint: 'If someone doubted you could pull this off, what three things from your past would shut them up?',
      },
    ],
  },
  {
    num: '04',
    title: 'Your Person',
    subtitle: "The human you're building this for",
    color: '#378ADD',
    fields: [
      {
        key: 'target_audience',
        label: 'Their Tuesday morning',
        hint: "Picture one specific person you want to help. Give them a name. What's their job?",
      },
      {
        key: 'persona_seed',
        label: 'Their 2am thoughts',
        hint: 'What keeps this person up at 2am? What do they secretly wish someone would just FIX?',
      },
      {
        key: 'context_map',
        label: 'Their world',
        hint: 'Where does this person hang out? What do they Google at work? What apps are already open?',
      },
    ],
  },
  {
    num: '05',
    title: 'The Broken Thing',
    subtitle: 'What hurts right now',
    color: '#A32D2D',
    fields: [
      {
        key: 'problem_statement',
        label: 'The story of when it goes wrong',
        hint: "Go back to your person. What's the most frustrating part of their day?",
      },
      {
        key: 'pain_points',
        label: 'The 5-minute vent',
        hint: 'If your person could vent to you with no filter, what would they say?',
      },
      {
        key: 'urgency',
        label: 'The ticking clock',
        hint: "What just changed in the world that means this problem can't be ignored anymore?",
      },
    ],
  },
  {
    num: '06',
    title: 'The Magic Wand',
    subtitle: 'What changes for your person',
    color: '#639922',
    fields: [
      {
        key: 'core_concept',
        label: 'Their new Tuesday',
        hint: "Wave a magic wand. What's different about their day tomorrow?",
      },
      {
        key: 'differentiator',
        label: 'The "no, it\'s different" moment',
        hint: 'When your person explains your thing to a friend, what makes them say "no, it\'s different because..."?',
      },
      {
        key: 'insight_statement',
        label: 'The hidden truth',
        hint: 'What does everyone in your industry assume is true that you know is wrong?',
      },
    ],
  },
  {
    num: '07',
    title: 'The Landscape',
    subtitle: "What your person does when they can't find you",
    color: '#BA7517',
    fields: [
      {
        key: 'market_gap',
        label: 'Life without you',
        hint: "When your person has this problem today and you don't exist yet — what do they do?",
      },
      {
        key: 'competitor_set',
        label: 'The closest things',
        hint: 'What exists already? What do they get right? Where do they drop the ball?',
      },
      {
        key: 'market_size',
        label: 'How many people like yours',
        hint: 'A hundred people with a massive problem, or a million with a small annoyance?',
      },
    ],
  },
  {
    num: '08',
    title: 'The Destination',
    subtitle: 'What makes you say "it\'s working"',
    color: '#D4537E',
    fields: [
      {
        key: 'success_criteria',
        label: 'The text to your best friend',
        hint: 'A year from now, what would make you text your best friend and say "holy shit, it\'s actually working"?',
      },
      {
        key: 'strategic_horizon',
        label: 'The road trip',
        hint: 'Where are you stopping for lunch (3 months), sleeping tonight (12 months), and final destination (3 years)?',
      },
      {
        key: 'win_definition',
        label: 'The message from your person',
        hint: 'Imagine your person sends you a message. What does it say?',
      },
    ],
  },
]
