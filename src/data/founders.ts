import type { WorkbookData } from './types'

export const foundersData = {
  professionId: 'founders',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Founders',
  heroDescription:
    'Everything you need to start using AI in your startup - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You wake up to 47 unread emails. Three are urgent. One investor wants an update by noon. Your head of marketing quit last week and you\'re now also the head of marketing. There\'s a product decision that needs your input, a hiring pipeline that hasn\'t moved in two weeks, and somewhere in your notes app is a strategy doc you started last month and never finished.',
        'You\'re the CEO, the recruiter, the copywriter, the strategist, and the firefighter. You built this company to create something meaningful. Instead, you spend 80% of your day on work that keeps the lights on but doesn\'t move the needle.',
      ],
      highlight:
        'What if 60% of that work didn\'t need to be you?',
      closingParagraph:
        'Not outsourced. Not ignored. Just handled - faster, better, and without burning your most valuable resource: your own attention.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'Let\'s kill the noise first. AI is not a robot that\'s coming for your job. It\'s not the Terminator. It\'s not some mystical technology that only engineers understand. And it\'s definitely not "cheating."',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the world\'s fastest, most well-read intern. This intern has read millions of documents, articles, reports, and conversations. It never sleeps. It never gets bored. It doesn\'t need coffee breaks. And it does exactly what you tell it to do.',
            'Ask it to research your competitors? Done in 90 seconds. Ask it to write an investor update? First draft in 30 seconds. Ask it to turn your messy notes into a clean SOP? 2 minutes.',
            'The catch? It\'s only as good as your instructions. Vague input = vague output. Clear input = surprisingly useful output.',
          ],
        },
      ],
      keyInsight:
        'Your expertise + AI\'s speed = unfair advantage. You know your market, your customers, your strategy. AI removes the 5 hours of grunt work between your idea and the finished output.',
    },

    ch3: {
      intro: 'You don\'t need 50 tools. You need these.',
      tools: [
        {
          name: 'ChatGPT / Claude',
          role: 'This is your thinking partner',
          description:
            'Strategy, writing, analysis, brainstorming - any text-based task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: '\u{1F916}',
        },
        {
          name: 'Perplexity',
          role: 'This is your research assistant',
          description:
            'Market research, competitor intel, fact-checking with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: '\u{1F50D}',
        },
        {
          name: 'Gamma',
          role: 'This is your deck builder',
          description:
            'Investor decks, team presentations, board reports',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Skip PowerPoint',
          icon: '\u{1F3A8}',
        },
        {
          name: 'Notion AI',
          role: 'This is your operating system',
          description:
            'SOPs, meeting notes, docs, project management',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when ready',
          icon: '\u{1F4CB}',
        },
        {
          name: 'Zapier / Make',
          role: 'This is your automation layer',
          description:
            'Connecting tools, automating repetitive workflows',
          cost: 'freemium',
          difficulty: 'medium',
          verdict: 'Add when ready',
          icon: '\u{26A1}',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers 80% of what you need. Add the rest when you\'re ready.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here\'s where they plug into your actual work. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Market & Competitor Research',
          before:
            'You spend half a day Googling competitors, jumping between websites, reading blog posts, piecing together pricing pages, and copying data into a messy spreadsheet. By the end, you\'re not even sure you found everything.',
          after:
            'You give AI your industry, your competitors\' names, and what you want to know. In 2 minutes, you have a structured breakdown - positioning, pricing, strengths, weaknesses, and gaps you can exploit.',
          flow: [
            'Open ChatGPT/Claude or Perplexity',
            'Run the competitor analysis prompt',
            'Review the output - flag anything off',
            'Ask follow-up questions for depth',
            'Export into your strategy doc',
          ],
          timeSaved: { without: '4-6 hours', withAI: '15 minutes' },
        },
        {
          id: 2,
          name: 'Hiring & Team Building',
          before:
            'You write a generic job description by looking at 10 other JDs on LinkedIn. 200 resumes come in. You spend hours scanning them. The whole process takes weeks.',
          after:
            'AI writes a JD that actually attracts the right people. It screens resumes by scoring against your criteria. It generates role-specific interview questions. From 200 applicants to a shortlist in an afternoon.',
          flow: [
            'Describe the role and what great looks like',
            'AI generates compelling job description',
            'Paste resumes \u2192 AI scores and ranks',
            'AI generates 10 tailored interview questions',
            'After interviews \u2192 AI compares candidates',
          ],
          timeSaved: { without: '2-3 weeks', withAI: '2-3 focused days' },
        },
        {
          id: 3,
          name: 'Investor & Stakeholder Communication',
          before:
            'You stare at a blank doc every month for the investor update. The pitch deck hasn\'t been touched since last raise. Board prep is a panic session the night before.',
          after:
            'AI drafts your monthly update in your voice. It structures pitch deck narratives. Board meeting agendas with talking points. Stakeholder emails go from 45 minutes to 10.',
          flow: [
            'Feed AI your metrics, wins, and challenges',
            'It drafts a complete investor update',
            'Review, add personal color, send',
            'For decks: give your story \u2192 structured narrative',
            'For board prep: agenda \u2192 discussion points',
          ],
          timeSaved: { without: '3-5 hours/month', withAI: '30-45 minutes' },
        },
        {
          id: 4,
          name: 'Operations & SOPs',
          before:
            'Your processes live in your head. When someone asks "how do we do X?" the answer is "ask the founder." Nothing is documented. Onboarding is chaos.',
          after:
            'You describe any process - even messily - and AI turns it into a clean, step-by-step SOP. Build a company playbook without spending weeks on documentation.',
          flow: [
            'Brain dump your process (text or voice transcription)',
            'AI structures into numbered SOP',
            'Review and adjust for accuracy',
            'Store in Notion or company wiki',
            'Repeat for every core process',
          ],
          timeSaved: { without: 'Never happens', withAI: '15 min per SOP' },
        },
        {
          id: 5,
          name: 'Content & Founder Brand',
          before:
            'You know you should post on LinkedIn. Every time you sit down, you stare at a blank screen for 20 minutes, write something mediocre, and either post reluctantly or delete it.',
          after:
            'Share a rough idea with AI. It turns it into a polished post in your voice. Write 5 posts in the time it used to take to agonize over 1.',
          flow: [
            'Jot down a rough idea (one sentence is enough)',
            'AI expands into full post - hook, body, CTA',
            'Edit for your voice and personal touch',
            'Schedule or post',
            'Repurpose into X threads, newsletter, etc.',
          ],
          timeSaved: {
            without: '45 min/post (or never)',
            withAI: '10 min/post',
          },
        },
        {
          id: 6,
          name: 'Customer & Market Understanding',
          before:
            'Customer feedback lives in scattered emails, support tickets, survey responses. You have a vague sense of what customers want. Actual analysis? Someday. Someday never comes.',
          after:
            'Paste in feedback and AI identifies patterns, sentiments, and insights. Understand your customers in 10 minutes instead of "eventually."',
          flow: [
            'Collect feedback (paste raw emails, reviews, surveys)',
            'AI analyzes sentiment and themes',
            'Get summary: top loves, pain points, feature requests',
            'Use insights for product and marketing decisions',
            'Run monthly to track changes',
          ],
          timeSaved: { without: 'Rarely done', withAI: '10-15 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Research',
          prompts: [
            {
              id: 'f-p-1-1',
              title: 'Full Competitor Analysis',
              task: 'Run a complete competitor analysis',
              prompt: `I'm the founder of a [company type] in the [industry] space.
My product/service: [one sentence about what you do]
My top competitors are: [name 1], [name 2], [name 3]

For each competitor, give me:
1. Their positioning (who they target and how they describe themselves)
2. Their pricing model (if publicly available)
3. Top 3 strengths
4. Top 3 weaknesses
5. One gap or opportunity they're missing

Format as a comparison table. Be specific. If you're unsure about something, say so rather than guessing.`,
              result:
                'A structured comparison table you can drop into your strategy doc.',
              tip: 'Run this in Perplexity for source-backed answers, or Claude/ChatGPT for deeper analysis.',
            },
            {
              id: 'f-p-1-2',
              title: 'Market Sizing',
              task: 'Estimate your market size',
              prompt: `Help me estimate the market size for [your product/service].

My target customer is: [describe them]
The problem I solve: [one sentence]
Geography: [where you operate]

Give me:
- TAM (Total Addressable Market)
- SAM (Serviceable Addressable Market)
- SOM (Serviceable Obtainable Market)
- Your assumptions for each number
- 3 data points or trends that support growth in this space`,
              result:
                'A rough but structured market sizing for pitch decks and planning.',
              tip: 'Always ask AI to show its assumptions - this helps you validate or correct the numbers.',
            },
            {
              id: 'f-p-1-3',
              title: 'Trend & Opportunity Scan',
              task: 'Scan for emerging trends',
              prompt: `What are the top 5 emerging trends in [your industry] that will matter in the next 12-18 months?

For each trend:
- What's happening and why
- Who benefits most
- How a [your company type] could capitalize on it
- One risk to watch

Keep it practical. I'm a founder, not an analyst.`,
              result: 'A forward-looking brief to stay ahead.',
              tip: 'Run this quarterly. Compare outputs over time to track trend evolution.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Hiring',
          prompts: [
            {
              id: 'f-p-2-1',
              title: 'Job Description Generator',
              task: 'Generate a compelling job description',
              prompt: `Write a job description for [role title] at my company.

Company context:
- We're a [stage] [company type] in [industry]
- Team size: [X] people
- What we do: [one sentence]
- Our culture: [2-3 words]

For this role:
- Key responsibilities: [list 3-5 things]
- Must-have skills: [list]
- Nice-to-haves: [list]

Write it conversational and honest. Avoid corporate jargon. Make someone excited to apply. Include salary range: [range] and location: [type].`,
              result:
                'A JD that attracts the right people, not generic applicants.',
              tip: 'Add "Include a section called \'This role is NOT for you if...\' to filter wrong fits"',
            },
            {
              id: 'f-p-2-2',
              title: 'Resume Screener',
              task: 'Screen and rank resumes',
              prompt: `I'm hiring for [role] at [company type]. Here's what I'm looking for:
- Must-haves: [list]
- Nice-to-haves: [list]
- Red flags: [list any]

Below are resumes. For each, give me:
- Score out of 10
- Top 2 strengths for this role
- Top concern or gap
- Recommendation: Interview / Maybe / Pass

[Paste resumes]`,
              result: 'A scored shortlist with clear reasoning.',
              tip: 'Do in batches of 5-10. Always make the final call yourself.',
            },
            {
              id: 'f-p-2-3',
              title: 'Interview Questions',
              task: 'Generate role-specific interview questions',
              prompt: `Generate 10 interview questions for a [role title] at a [stage] [company type].

Mix of:
- 3 behavioral questions (past experience)
- 3 technical/skill questions (specific to role)
- 2 culture-fit questions (aligned with [your values])
- 2 scenario questions ("What would you do if...")

For each: what you're testing for, and what a strong answer looks like.`,
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Investor Comms',
          prompts: [
            {
              id: 'f-p-3-1',
              title: 'Monthly Investor Update',
              task: 'Draft an investor update',
              prompt: `Write a monthly investor update for my startup.

Company: [name], [what you do]
Stage: [stage]

This month:
- Revenue: [number] (vs [last month])
- Key metric: [metric] - [number] (vs [last month])
- Cash in bank: [number]
- Runway: [X months]

Wins: [win 1], [win 2]
Challenges: [challenge 1]
Focus next month: [focus]
Asks from investors: [any intros or help needed]

Confident but honest tone. Under 500 words. Short paragraphs. Lead with most important update.`,
            },
            {
              id: 'f-p-3-2',
              title: 'Pitch Deck Narrative',
              task: 'Structure a pitch deck',
              prompt: `Help me structure a pitch deck for my startup.

What we do: [2-3 sentences]
The problem: [pain point]
Our solution: [how you solve it]
Target customer: [who]
Business model: [how you make money]
Traction: [key numbers]
Team: [founder backgrounds, 1 line each]
Raising: [amount] for [what]

Give me:
- The narrative arc (what story should the deck tell?)
- Slide-by-slide outline (12-15 slides)
- The one sentence to open with
- The one sentence to close with`,
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Operations',
          prompts: [
            {
              id: 'f-p-4-1',
              title: 'Brain Dump to SOP',
              task: 'Turn a messy process into a clean SOP',
              prompt: `Turn the following brain dump into a clean, step-by-step SOP.

Process name: [what this is for]
Who does this: [role]
How often: [frequency]

Here's my rough description:
[Paste messy notes, bullet points, or voice transcription]

Format with:
- Purpose (1 sentence)
- When to use (trigger)
- Step-by-step instructions (numbered, clear enough for a new hire)
- Tools needed
- Common mistakes to avoid
- What "done" looks like`,
            },
            {
              id: 'f-p-4-2',
              title: 'Decision Framework',
              task: 'Build a reusable decision framework',
              prompt: `Build a decision-making framework for [decision type].
Example: "whether to pursue a partnership" or "when to hire vs outsource"

Context: I'm a [role] at [company type]. I face this [frequency].

Give me:
- 5-7 key criteria to evaluate
- Simple scoring system (1-5 each)
- Red flags (automatic no)
- Green flags (automatic yes)
- One-page template I can reuse`,
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Content',
          prompts: [
            {
              id: 'f-p-5-1',
              title: 'LinkedIn Post from Idea',
              task: 'Turn a rough idea into a LinkedIn post',
              prompt: `Turn this rough idea into a LinkedIn post:

My idea: [one sentence or bullet points]

Requirements:
- Hook in the first line that stops the scroll
- Short paragraphs (1-2 lines each)
- Under 1200 characters
- Conversational - sounds like a real person
- End with a question or CTA
- Add 3-5 hashtags at the bottom

Write 2 versions so I can pick.`,
            },
            {
              id: 'f-p-5-2',
              title: 'Content Idea Generator',
              task: 'Generate content ideas',
              prompt: `I'm a founder in [industry]. My LinkedIn audience is [describe them]. I want to be known for [2-3 topics].

Give me 15 post ideas:
- 5 "lesson learned" posts (founder journey)
- 5 "tactical how-to" posts (actionable advice)
- 5 "hot take" posts (contrarian or strong POV)

For each: the hook (first line) and 2-sentence summary.`,
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Customer Understanding',
          prompts: [
            {
              id: 'f-p-6-1',
              title: 'Feedback Analyzer',
              task: 'Analyze customer feedback',
              prompt: `Analyze the following customer feedback:

1. Top 3 things customers love (with quotes)
2. Top 3 pain points or complaints (with quotes)
3. Top 3 feature requests (with quotes)
4. Overall sentiment: Positive / Mixed / Negative
5. One insight I should pay attention to

Feedback:
[Paste reviews, surveys, tickets, emails]`,
            },
            {
              id: 'f-p-6-2',
              title: 'User Persona Builder',
              task: 'Build a user persona from customer data',
              prompt: `Build a detailed user persona from this customer data:

My product: [what you do]
My customers are typically: [rough description]

Include:
- Name (fictional), age, role
- Daily frustrations and goals
- How they found us / why they chose us
- What they use our product for most
- What would make them leave
- What would make them recommend us
- A quote capturing their mindset

Data:
[Paste customer data, feedback, or notes]`,
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your time is actually worth.',
      timeTable: [
        {
          task: 'Competitor research',
          without: '4-6 hours/month',
          withAI: '15 minutes',
          saved: '3.75 hrs',
        },
        {
          task: 'Hiring (JD + screening)',
          without: '10 hours/hire',
          withAI: '2 hours',
          saved: '8 hrs',
        },
        {
          task: 'Investor updates',
          without: '3 hours/month',
          withAI: '30 minutes',
          saved: '2.5 hrs',
        },
        {
          task: 'Writing SOPs',
          without: 'Never happens',
          withAI: '15 min each',
          saved: '\u221E \u2192 done',
        },
        {
          task: 'Content creation',
          without: '4 hours/month',
          withAI: '45 minutes',
          saved: '3.25 hrs',
        },
        {
          task: 'Customer analysis',
          without: 'Eventually',
          withAI: '15 minutes',
          saved: '\u221E \u2192 done',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-20 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'This isn\'t about early adopters anymore. In 2026, founders using AI operate at 2-3x the speed of those who don\'t. Same brain, same experience, same market - just more time to think, build, and lead.',
            'The gap isn\'t talent. It\'s tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t start a company to write investor emails and screen resumes. You started it to build something. AI gives you back the time to actually do that.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One tool. That\'s enough.',
    },

    ch7: {
      intro:
        'The plan is simple. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up',
          duration: '15 min',
          items: [
            { id: 'f-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'f-1-2', label: 'Create a free Perplexity account' },
            { id: 'f-1-3', label: 'Bookmark this page' },
          ],
        },
        {
          day: 2,
          title: 'First Prompt',
          duration: '10 min',
          items: [
            {
              id: 'f-2-1',
              label:
                'Run the Competitor Analysis prompt with your real competitors',
            },
            {
              id: 'f-2-2',
              label:
                'Read the output - notice how long that would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Go Deeper',
          duration: '20 min',
          items: [
            {
              id: 'f-3-1',
              label: 'Run the Market Sizing and Trend Scan prompts',
            },
            {
              id: 'f-3-2',
              label:
                'Save the outputs - this is your research foundation',
            },
          ],
        },
        {
          day: 4,
          title: 'Write Something',
          duration: '15 min',
          items: [
            {
              id: 'f-4-1',
              label: 'Run the LinkedIn Post prompt with a real idea',
            },
            {
              id: 'f-4-2',
              label: 'Edit it, make it yours, and post it',
            },
          ],
        },
        {
          day: 5,
          title: 'Systemize Something',
          duration: '20 min',
          items: [
            {
              id: 'f-5-1',
              label: 'Pick one process you do repeatedly',
            },
            {
              id: 'f-5-2',
              label: 'Run the Brain Dump to SOP prompt',
            },
            {
              id: 'f-5-3',
              label: 'Save the SOP where your team can find it',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore',
          duration: '15 min',
          items: [
            {
              id: 'f-6-1',
              label: 'Try any system or prompt you haven\'t yet',
            },
            {
              id: 'f-6-2',
              label:
                'Notice what saves the most time - lean into it',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect',
          duration: '10 min',
          items: [
            {
              id: 'f-7-1',
              label: 'What worked? What will you keep using?',
            },
            {
              id: 'f-7-2',
              label:
                'Share this page with one founder friend who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
