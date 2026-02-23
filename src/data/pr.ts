import type { WorkbookData } from './types'

export const prData = {
  professionId: 'pr',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for PR Professionals',
  heroDescription:
    'Everything you need to start using AI in public relations - with real tools, workflows, and prompts for press releases, media pitches, crisis comms, and more.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your Monday starts with a product launch press release due by noon. Three journalists emailed over the weekend asking for comments on an industry development. Your client wants updated media lists by end of day. The CEO needs talking points for a podcast recording tomorrow. And somewhere in your inbox is a half-finished crisis communication plan that was supposed to be done last week.',
        'You open your media monitoring dashboard and see 47 new mentions - most irrelevant, a few important, and one that could be a problem. You start triaging, but a Slack message interrupts: "Can you draft a pitch for that new reporter at TechCrunch? She covers our space." You tab back to the press release. Delete the first paragraph. Rewrite it. Delete it again.',
        'By 3pm, the press release is still in draft, the media list is half done, two journalists are waiting on follow-ups, and the talking points haven\'t been touched. You love the strategy side of PR - building narratives, shaping perception, landing stories that matter. But most of your day is spent on the production side - drafting, formatting, monitoring, and chasing deadlines.',
        'The irony is that PR professionals are communicators by nature. You know how to craft a message. You know what makes a story land. But there\'s so much volume that the craft gets buried under the grind.',
      ],
      highlight:
        'What if the first draft of every press release, pitch, and brief was already written - and you just had to make it great?',
      closingParagraph:
        'Not outsourced to a junior who doesn\'t know the beat. Not generic templates that read like every other pitch. Just solid first drafts, built from your strategy and context, ready for your editorial eye to shape.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace the relationship you have with a journalist who trusts you. It won\'t replace your instinct for what makes a story newsworthy, your ability to read a room during a crisis, or the strategic judgment that comes from years of experience. And it\'s definitely not going to send a pitch that lands in the right inbox at the right time with the right angle - that\'s still you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the fastest, most well-read junior PR associate you\'ve ever worked with. It has read millions of press releases, media pitches, crisis statements, and talking points. It knows the structure, the conventions, and the patterns. Give it context, and it produces a first draft in seconds.',
            'Need a press release for a product launch? AI writes the first draft in 30 seconds. Need 10 personalized pitch angles for different journalists? 2 minutes. Need a crisis holding statement while you figure out the full response? 60 seconds. Need talking points for a CEO interview? Done before your coffee gets cold.',
            'The model is straightforward: AI handles the first 80% - the structure, the boilerplate, the variations. You handle the 20% that makes it actually work - the angle, the relationship context, the strategic framing, and the human judgment that separates a good pitch from a great one.',
          ],
        },
        {
          heading: 'Why PR professionals have a unique advantage',
          paragraphs: [
            'You already know what a strong press release looks like. You can spot a pitch that will get ignored versus one that will get opened. You understand news cycles, journalist preferences, and narrative timing. Most people using AI don\'t have this filter.',
            'When non-PR people use AI for media outreach, they accept whatever comes out. When you use AI, you use it as raw material that your expertise shapes into something that actually moves the needle. The result is better output, faster turnaround, and more time for the strategic work that clients pay a premium for.',
          ],
        },
      ],
      keyInsight:
        'AI doesn\'t replace your PR instincts - it removes the production bottleneck. You spend less time writing first drafts and more time building relationships, shaping narratives, and thinking strategically.',
    },

    ch3: {
      intro: 'Five tools that cover the full PR workflow. Start with the first two and add others as you get comfortable.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and brainstorming partner',
          description:
            'Press releases, pitch drafts, talking points, brainstorming angles, and rapid content variations',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for speed and versatility',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form writer and strategic thinker',
          description:
            'Crisis communication plans, in-depth media briefs, nuanced messaging documents, and tone-sensitive drafts',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long-form and sensitive communications',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research and monitoring assistant',
          description:
            'Journalist research, media outlet analysis, competitor PR tracking, and fact-checking with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research with citations',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your PR operations hub',
          description:
            'Media lists, campaign trackers, press kit organization, editorial calendars, and team collaboration docs',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Great for organizing PR workflows',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual content creator',
          description:
            'Press kit visuals, event materials, social media graphics for PR campaigns, and branded templates',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Essential for visual PR assets',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting + Perplexity for research. That covers 80% of your daily PR work. Add Notion AI and Canva AI when you need organization and visuals.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here\'s where they plug into your actual PR work. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Press Release Writing',
          before:
            'You stare at a blank document, pull up three old press releases for reference, and spend 90 minutes crafting a draft. Then you rewrite the headline four times. Then your client wants a different angle. Another 45 minutes. The whole process eats half your day for a single announcement.',
          after:
            'You give AI the who, what, when, where, and why. In 60 seconds you have a structured press release draft with headline options, boilerplate, and quotes. You spend 15 minutes refining the angle and polishing the language. Done.',
          flow: [
            'Gather key facts - announcement details, quotes, company context',
            'Run the press release prompt in ChatGPT or Claude',
            'Review the draft - adjust angle, tighten language, verify facts',
            'Generate 5-10 headline variations',
            'Final polish and distribute',
          ],
          timeSaved: { without: '2-3 hours', withAI: '25-30 minutes' },
        },
        {
          id: 2,
          name: 'Media Pitch Personalization',
          before:
            'You craft a generic pitch, then manually tweak it for each journalist. You open their recent articles, figure out what angle resonates, and rewrite the first paragraph 15 times for 15 different contacts. It takes all morning for a single campaign.',
          after:
            'AI researches each journalist\'s recent coverage and generates personalized pitch angles. You review, add your relationship context, and send. 15 personalized pitches in the time it used to take to write 3.',
          flow: [
            'Define your story angle and key message',
            'Feed AI the journalist name and beat',
            'AI generates a personalized pitch with relevant hook',
            'Review and add personal context or relationship notes',
            'Send and track responses',
          ],
          timeSaved: { without: '3-4 hours', withAI: '30-45 minutes' },
        },
        {
          id: 3,
          name: 'Crisis Communication Planning',
          before:
            'A crisis hits and you scramble. The holding statement takes 45 minutes because every word matters. The Q&A document takes another 2 hours. By the time the full response plan is ready, the narrative has already been shaped by others.',
          after:
            'AI drafts a holding statement in 60 seconds. You refine the tone while AI generates the Q&A document. The full crisis response framework is ready in 30 minutes, giving you time to focus on strategy and stakeholder calls.',
          flow: [
            'Define the situation - what happened, who is affected, current status',
            'AI generates holding statement immediately',
            'Run the crisis Q&A prompt for anticipated questions',
            'AI drafts stakeholder-specific messaging (media, customers, employees)',
            'Review all materials, align with legal, and execute response plan',
          ],
          timeSaved: { without: '4-6 hours', withAI: '45-60 minutes' },
        },
        {
          id: 4,
          name: 'Media Monitoring and Reporting',
          before:
            'You manually check Google Alerts, social media, and industry sites every morning. You copy-paste mentions into a spreadsheet. The monthly media report takes a full day to compile - gathering clips, calculating reach estimates, and writing the summary narrative.',
          after:
            'You paste raw mentions into AI and get an organized coverage report with sentiment analysis, key themes, and reach estimates. Monthly reports that took a full day now take an hour.',
          flow: [
            'Collect media mentions from monitoring tools',
            'Paste coverage into AI for analysis and categorization',
            'AI generates coverage summary with sentiment and themes',
            'Review AI-generated insights and add strategic commentary',
            'Export formatted report for client or leadership',
          ],
          timeSaved: { without: '6-8 hours/month', withAI: '1-2 hours/month' },
        },
        {
          id: 5,
          name: 'Talking Points and Messaging',
          before:
            'The CEO has an interview in two hours. You need talking points that cover the company narrative, anticipated tough questions, and bridge statements. You spend 90 minutes writing, then another 30 minutes prepping the spokesperson. Rinse and repeat for every media opportunity.',
          after:
            'AI generates comprehensive talking points with key messages, tough question prep, and bridge statements in 5 minutes. You spend your time coaching the spokesperson on delivery instead of writing documents from scratch.',
          flow: [
            'Define the interview context - outlet, journalist, topic, format',
            'Run the talking points prompt with company messaging',
            'AI generates key messages, bridge statements, and Q&A prep',
            'Review and prioritize the top 3-5 talking points',
            'Brief the spokesperson with the polished document',
          ],
          timeSaved: { without: '2 hours per interview', withAI: '30 minutes' },
        },
        {
          id: 6,
          name: 'Event PR Coordination',
          before:
            'An event is three weeks out and the PR plan is still in your head. You need a press kit, media invitations, day-of logistics for press, post-event coverage tracking, and a follow-up plan. Each piece gets done last-minute because there\'s always something more urgent.',
          after:
            'AI generates the full event PR toolkit - press kit copy, media invitations, day-of run sheet, and follow-up templates. You customize and execute instead of creating everything from scratch.',
          flow: [
            'Define event details - date, venue, speakers, news angle',
            'AI generates press kit content and media invitation',
            'AI creates day-of media logistics document',
            'Execute outreach and manage on-site press',
            'AI generates post-event follow-up templates and coverage report',
          ],
          timeSaved: { without: '8-10 hours', withAI: '2-3 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Press Release Writing',
          prompts: [
            {
              id: 'pr-p-1-1',
              title: 'Full Press Release Draft',
              task: 'Draft a complete press release from key facts',
              prompt: `Write a press release for the following announcement:

Company: [company name]
Industry: [industry]
Announcement: [what is being announced]
Key details: [date, location, relevant numbers or facts]
Quote from: [spokesperson name and title]
Quote angle: [what the quote should convey - excitement, vision, impact]
Boilerplate: [one sentence about the company, or say "generate one"]

Format:
- Headline (punchy, newsworthy, under 12 words)
- Subheadline (supporting detail)
- Dateline and lead paragraph (who, what, when, where, why)
- 2-3 body paragraphs with supporting details
- Quote from spokesperson
- Closing paragraph with next steps or availability
- Boilerplate
- Media contact info placeholder

Write in AP style. Keep it under 500 words. Lead with the most newsworthy element.`,
              result:
                'A publication-ready press release draft you can refine and distribute.',
              tip: 'Generate 5 headline variations separately, then pick the strongest. Headlines make or break whether a journalist reads the rest.',
            },
            {
              id: 'pr-p-1-2',
              title: 'Press Release Headline Variations',
              task: 'Generate multiple headline options for a press release',
              prompt: `I need headline options for a press release.

The announcement: [one sentence summary]
The company: [company name, what they do]
The target audience: [who should care about this news]
The tone: [authoritative / exciting / understated / bold]

Give me 10 headline variations:
- 3 straightforward news headlines
- 3 benefit-driven headlines (why this matters)
- 2 data-driven headlines (leading with a number or stat)
- 2 bold or unexpected headlines

For each, include a one-line subheadline.
Keep headlines under 12 words. Make each one distinct.`,
              result:
                'A range of headline options from safe to bold, so you can pick the right tone.',
              tip: 'Pick your top 3, then ask AI: "Which of these would a tech reporter at a major outlet be most likely to click? Why?"',
            },
            {
              id: 'pr-p-1-3',
              title: 'Press Release for Product Launch',
              task: 'Write a product launch press release with feature focus',
              prompt: `Write a product launch press release.

Product name: [name]
Company: [company name]
What it does: [2-3 sentences explaining the product]
Key features: [list 3-5 main features]
Who it's for: [target audience]
Problem it solves: [the pain point]
Availability: [when and where it's available]
Pricing: [pricing info or "contact for pricing"]
Spokesperson: [name and title]

Write a press release that:
- Leads with the problem, not the product
- Makes a journalist understand why this matters in the first paragraph
- Includes a quote that sounds like a real person, not a corporate statement
- Mentions one specific customer result or use case if possible
- Ends with clear availability and next steps

AP style. Under 500 words. Newsworthy tone, not marketing brochure.`,
              result:
                'A launch press release that reads like news, not an ad.',
              tip: 'The best product launch press releases answer one question immediately: "Why should anyone care right now?" Make sure your lead paragraph does this.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Media Pitch Personalization',
          prompts: [
            {
              id: 'pr-p-2-1',
              title: 'Journalist-Specific Pitch Email',
              task: 'Write a personalized pitch for a specific journalist',
              prompt: `Write a media pitch email for the following:

My story: [one paragraph summary of the news/angle]
Target journalist: [name]
Their outlet: [publication name]
Their beat: [what they typically cover]
Recent article they wrote: [title or topic of a recent piece]
Why this is relevant to their audience: [one sentence]

Write a pitch email that:
- Opens with a reference to their recent work (genuine, not forced)
- Gets to the point in the first two sentences
- Explains the story in 3-4 sentences max
- Includes one specific data point or surprising fact
- Offers something concrete: an exclusive, an interview, early access, data
- Closes with a clear ask and your availability
- Subject line that would make a busy journalist open this email

Keep it under 150 words. Journalists delete long pitches.`,
              result:
                'A personalized pitch that feels researched, not mass-blasted.',
              tip: 'Always verify the journalist reference is accurate. AI may hallucinate article titles. Double-check before sending.',
            },
            {
              id: 'pr-p-2-2',
              title: 'Pitch Angle Generator',
              task: 'Generate multiple pitch angles for a single story',
              prompt: `I have a story and need different pitch angles for different journalists.

The news: [what happened or what you want covered]
The company/person: [who this is about]
Industry: [your industry]

Generate 8 pitch angles:
- 2 for industry/trade reporters (insider angle)
- 2 for business reporters (market/revenue angle)
- 2 for tech reporters (innovation/product angle)
- 2 for lifestyle/culture reporters (human interest angle)

For each angle:
- The hook (one sentence that makes it interesting)
- Suggested subject line
- The "so what" - why their specific audience cares
- One supporting data point or quote to include

Make each angle genuinely different, not just the same story reworded.`,
              result:
                'Eight distinct angles you can match to your media list.',
              tip: 'The best pitches feel like you wrote them for one person. Use these angles as starting points, then add journalist-specific context.',
            },
            {
              id: 'pr-p-2-3',
              title: 'Pitch Follow-Up Sequence',
              task: 'Create a follow-up sequence for an unanswered pitch',
              prompt: `Write a 3-email follow-up sequence for a media pitch that hasn't gotten a response.

Original pitch topic: [summary of what you pitched]
Journalist: [name and outlet]
Days since original pitch: [number]
Any new developments since: [new data, coverage by others, timeline urgency]

Write:
1. First follow-up (3-5 days after original) - brief, adds one new detail
2. Second follow-up (7-10 days after original) - different angle or new hook
3. Final follow-up (14 days after original) - closing the loop gracefully

Rules:
- Each under 75 words
- Never guilt-trip or say "just checking in"
- Each must add value - new info, new angle, or a time-sensitive reason
- Maintain professional tone without being pushy
- Include subject lines that reference the thread`,
              result:
                'A professional follow-up sequence that stays helpful without becoming annoying.',
              tip: 'If three follow-ups get no response, the answer is no. Move on. Persistence is good; pestering burns bridges.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Crisis Communication',
          prompts: [
            {
              id: 'pr-p-3-1',
              title: 'Crisis Holding Statement',
              task: 'Draft an immediate holding statement during a crisis',
              prompt: `Write a crisis holding statement for the following situation:

Organization: [company/organization name]
What happened: [brief description of the incident]
Who is affected: [customers, employees, public, specific group]
Current status: [what you know right now]
What you're doing: [immediate actions being taken]
Spokesperson: [name and title]

Write a holding statement that:
- Acknowledges the situation directly (no corporate evasion)
- Expresses appropriate concern for those affected
- States what is currently known (without speculation)
- Outlines immediate actions being taken
- Commits to providing updates with specific timeline
- Keeps the door open without making promises you can't keep

Tone: calm, direct, empathetic. Under 150 words.
Also provide 3 things NOT to say in this situation.`,
              result:
                'A holding statement you can issue within minutes while the full response is being developed.',
              tip: 'Speed matters in a crisis. Issue the holding statement fast, then build the full response. Silence is never a strategy.',
            },
            {
              id: 'pr-p-3-2',
              title: 'Crisis Q&A Document',
              task: 'Build a comprehensive Q&A for crisis response',
              prompt: `Build a crisis Q&A document for the following situation:

Situation: [describe what happened]
Organization: [company name]
Key stakeholders: [media, customers, employees, investors, regulators]
Known facts: [what you know for certain]
Unknown/developing: [what you don't know yet]
Actions taken: [what you've done so far]
Company position: [your stance or response philosophy]

Generate 20 anticipated questions organized by:
- General media questions (5)
- Customer-facing questions (5)
- Employee-facing questions (5)
- Difficult/hostile questions (5)

For each question provide:
- The recommended answer (honest, clear, concise)
- A bridge statement to redirect if needed
- One thing to avoid saying in the answer

Flag any questions where the answer should be "we're still investigating" rather than speculating.`,
              result:
                'A comprehensive Q&A document that prepares your team for any question.',
              tip: 'Share this with everyone who might get asked questions - reception staff, salespeople, customer support. Everyone needs the same script.',
            },
            {
              id: 'pr-p-3-3',
              title: 'Crisis Response Plan Template',
              task: 'Create a crisis response framework for a specific scenario',
              prompt: `Create a crisis response plan for the following scenario:

Organization: [company name]
Crisis type: [data breach / product recall / executive misconduct / negative press / social media backlash / other]
Severity estimate: [low / medium / high / critical]
Stakeholders to notify: [list all affected groups]

Build a response plan that includes:
1. First 60 minutes: immediate actions and team activation
2. First 4 hours: holding statement, internal communication, stakeholder notification
3. First 24 hours: full public response, media Q&A, monitoring plan
4. First week: ongoing communication cadence, recovery messaging
5. Post-crisis: review, lessons learned, policy changes

For each phase include:
- Who is responsible (by role, not name)
- Key messages for that stage
- Channels to use (media, social, email, internal)
- Common mistakes to avoid at that stage

Keep it actionable. This needs to work under pressure.`,
              result:
                'A phased crisis plan your team can execute when time is critical.',
              tip: 'Customize this template for your top 3 most likely crisis scenarios before a crisis ever happens. Preparation wins.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Media Monitoring and Reporting',
          prompts: [
            {
              id: 'pr-p-4-1',
              title: 'Media Coverage Analysis',
              task: 'Analyze a batch of media coverage for insights',
              prompt: `Analyze the following media coverage for [company/campaign name]:

Coverage period: [date range]
Context: [what was the PR activity that generated this coverage - launch, announcement, campaign]

[Paste media mentions, headlines, article summaries, or full clips]

Provide:
1. Coverage summary: total mentions, outlets by tier (top-tier, mid-tier, trade)
2. Sentiment breakdown: positive, neutral, negative with percentage estimate
3. Key messages that landed (which talking points appeared in coverage)
4. Key messages that were missed (talking points journalists ignored)
5. Top 3 strongest placements and why they worked
6. Any negative or off-message coverage and what drove it
7. Share of voice vs competitors if mentioned
8. Recommendations for the next round of outreach

Format as a client-ready report with clear sections and bullet points.`,
              result:
                'A structured coverage report you can share with clients or leadership.',
              tip: 'Run this weekly during active campaigns. The pattern recognition gets more valuable over time.',
            },
            {
              id: 'pr-p-4-2',
              title: 'Monthly PR Report',
              task: 'Generate a comprehensive monthly PR performance report',
              prompt: `Generate a monthly PR performance report.

Month: [month and year]
Client/Company: [name]
PR objectives this month: [list 2-3 goals]

Activities completed:
- Press releases issued: [number and topics]
- Media pitches sent: [number]
- Interviews secured: [number and outlets]
- Events: [any PR events or press opportunities]

Coverage received:
[Paste or summarize media mentions]

Provide:
1. Executive summary (3-4 sentences - the TL;DR for busy executives)
2. Activity recap with metrics
3. Coverage highlights with links or descriptions
4. Sentiment and message analysis
5. Media relationship development (new contacts, strengthened relationships)
6. What worked and what didn't (honest assessment)
7. Recommendations for next month
8. Key metrics dashboard (total mentions, estimated reach, sentiment ratio)

Professional but readable. Use bullet points. Under 2 pages equivalent.`,
              result:
                'A monthly report that demonstrates PR value clearly and concisely.',
              tip: 'Always lead with the result that matters most to your client. If they care about leads, lead with coverage that drove traffic. If they care about reputation, lead with sentiment.',
            },
            {
              id: 'pr-p-4-3',
              title: 'Competitor PR Tracking Brief',
              task: 'Analyze competitor PR activity and media presence',
              prompt: `Analyze the PR and media presence of these competitors:

My company: [your company name and what you do]
Competitors: [competitor 1], [competitor 2], [competitor 3]
Industry: [your industry]
Time period: [last month / last quarter]

For each competitor, analyze:
1. Recent media coverage: what stories are they getting placed?
2. Key narratives: what messages are they pushing?
3. Media relationships: which journalists and outlets cover them regularly?
4. PR tactics: product launches, thought leadership, data reports, events?
5. Gaps: what stories are they NOT telling that you could own?

Then provide:
- Side-by-side comparison table
- 3 opportunities where you can differentiate or outmaneuver
- 2 defensive recommendations (narratives to protect)
- Suggested counter-positioning strategy

Be specific and strategic, not just observational.`,
              result:
                'A competitive PR intelligence brief for strategic planning.',
              tip: 'Run this quarterly. Track competitor narratives over time to spot shifts before they become trends.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Talking Points and Messaging',
          prompts: [
            {
              id: 'pr-p-5-1',
              title: 'Spokesperson Prep Document',
              task: 'Prepare a spokesperson for a media interview',
              prompt: `Prepare a spokesperson briefing document.

Interview details:
- Outlet: [publication/show name]
- Journalist/Host: [name]
- Format: [phone, video, in-studio, podcast, panel]
- Topic: [what they want to discuss]
- Duration: [estimated length]
- Audience: [who reads/watches this outlet]

Spokesperson: [name, title]
Company: [name, what you do]
Key announcement or hook: [why this interview is happening]

Generate:
1. Top 3 key messages (the three things they must communicate)
2. 5 likely questions with recommended answers
3. 3 tough or hostile questions with bridge statements
4. Sound bites - 3 memorable, quotable one-liners
5. Topics to avoid and how to redirect
6. Opening statement (15-20 seconds)
7. Closing statement (10-15 seconds)

Make the answers sound natural, not scripted. Real humans don't speak in bullet points.`,
              result:
                'A complete interview prep document that makes any spokesperson feel confident.',
              tip: 'Practice the bridge statements out loud. The transition from a tough question to your key message should feel seamless, not evasive.',
            },
            {
              id: 'pr-p-5-2',
              title: 'Key Messaging Framework',
              task: 'Build a comprehensive messaging framework',
              prompt: `Build a key messaging framework for [company/product/initiative].

Context:
- Company: [name and what you do]
- Target audiences: [list 2-4 audience segments]
- Current perception: [how people currently see you]
- Desired perception: [how you want to be seen]
- Competitive landscape: [key competitors and their positioning]
- Proof points: [data, achievements, differentiators]

Create:
1. Master narrative (3-4 sentences - the core story)
2. Elevator pitch (30-second version)
3. Headline message (one sentence)
4. Three message pillars with:
   - Pillar statement
   - Supporting proof points (2-3 each)
   - Audience-specific variation for each segment
5. Phrases to use (branded language, preferred terms)
6. Phrases to avoid (competitor language, outdated terms, jargon)
7. FAQ section with 5 common questions and approved answers

This should work across PR, marketing, sales, and executive communications.`,
              result:
                'A messaging framework that keeps everyone on the same page across all communications.',
              tip: 'Test your master narrative by reading it out loud. If it sounds like a press release, simplify it. If it sounds like a conversation, you nailed it.',
            },
            {
              id: 'pr-p-5-3',
              title: 'Talking Points for Tough Topics',
              task: 'Prepare talking points for sensitive or controversial topics',
              prompt: `Write talking points for a sensitive topic.

Situation: [describe the topic - layoffs, controversy, policy change, bad quarter, etc.]
Spokesperson: [name and title]
Audience: [who will hear this - media, employees, customers, investors]
Company position: [your honest stance on this]
Known concerns: [what people are worried about or angry about]
Facts you can share: [what is public and confirmed]
Facts you cannot share: [what is confidential or undecided]

Generate:
1. Opening statement (acknowledges the situation directly)
2. 3 key talking points with supporting details
3. 5 anticipated tough questions with answers that are:
   - Honest without being reckless
   - Empathetic without over-promising
   - Clear about what you know and don't know
4. Bridge statements for redirecting hostile questioning
5. Phrases that show empathy without admitting liability
6. 3 things to absolutely never say in this context

Tone: human, direct, accountable. Not defensive or corporate.`,
              result:
                'Talking points that handle difficult topics with credibility and composure.',
              tip: 'The hardest part of tough topics is staying calm when pressed. These talking points give you an anchor. Practice them until the answers feel natural.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Event PR Coordination',
          prompts: [
            {
              id: 'pr-p-6-1',
              title: 'Event Press Kit Generator',
              task: 'Create a complete press kit for an event',
              prompt: `Create a press kit for the following event:

Event name: [name]
Date: [date]
Location: [venue and city]
Organizer: [company/organization]
What it is: [conference, product launch, fundraiser, summit, etc.]
Key speakers/attendees: [names and titles]
News angle: [why media should cover this]
Expected attendance: [number]

Generate a press kit that includes:
1. Press release announcing the event (under 400 words)
2. Fact sheet (one page - key details at a glance)
3. Speaker/VIP bios (3-4 sentences each)
4. Suggested interview opportunities and story angles
5. Event schedule highlights (media-relevant sessions only)
6. Logistics for press (registration, parking, press room, wifi)
7. Media contact information placeholder
8. Suggested social media hashtags and handles

Make it professional but easy to scan. Journalists skim press kits - put the most important information first in every section.`,
              result:
                'A complete, journalist-friendly press kit ready for distribution.',
              tip: 'Send the press kit 2-3 weeks before the event. Follow up 1 week before with a personalized note highlighting the angle most relevant to each journalist.',
            },
            {
              id: 'pr-p-6-2',
              title: 'Media Invitation Email',
              task: 'Write a compelling media invitation for an event',
              prompt: `Write a media invitation email for the following event:

Event: [name and type]
Date and time: [when]
Location: [where]
Host: [company/organization]
News hook: [why this is worth covering]
Exclusive offerings: [interviews, early access, demos, data reveals]
RSVP deadline: [date]

Write two versions:
1. For journalists who know us (warm relationship)
2. For journalists who don't cover us yet (cold outreach)

Each version should:
- Have a compelling subject line
- Lead with the news value, not the logistics
- Explain what the journalist gets (story, access, exclusives)
- Keep logistics in a clean block at the bottom
- Include a clear RSVP call-to-action
- Be under 200 words

Make it feel like an opportunity, not a request.`,
              result:
                'Two versions of a media invitation optimized for warm and cold contacts.',
              tip: 'Follow up with a phone call for your top-tier targets. Email gets their attention; a call gets their commitment.',
            },
            {
              id: 'pr-p-6-3',
              title: 'Post-Event Coverage Follow-Up',
              task: 'Create follow-up templates and post-event coverage strategy',
              prompt: `Create a post-event PR follow-up plan.

Event: [name]
Date: [when it happened]
Key highlights: [3-5 notable moments, announcements, or outcomes]
Coverage received during event: [any real-time coverage or social mentions]
Journalists who attended: [list if available]
Journalists who didn't attend but should know about it: [list]
Photo/video assets available: [what you have]

Generate:
1. Thank-you email for journalists who attended (short, warm, includes assets)
2. Recap pitch for journalists who missed it (what they need to know)
3. Post-event press release (results, highlights, what's next)
4. Social media recap content (3-5 posts with different angles)
5. Internal report template (what worked, media metrics, lessons learned)
6. 30-day follow-up plan for sustaining coverage momentum

Each piece should build on the event's success without being self-congratulatory.`,
              result:
                'A complete post-event follow-up system that extends coverage beyond the event itself.',
              tip: 'The 48 hours after an event are the highest-leverage window for follow-up. Send materials while the experience is fresh.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your time is actually worth as a PR professional.',
      timeTable: [
        {
          task: 'Press release drafting',
          without: '2-3 hours each',
          withAI: '25-30 minutes',
          saved: '2 hrs',
        },
        {
          task: 'Media pitch personalization',
          without: '3-4 hours per campaign',
          withAI: '30-45 minutes',
          saved: '3 hrs',
        },
        {
          task: 'Crisis communication prep',
          without: '4-6 hours',
          withAI: '45-60 minutes',
          saved: '4 hrs',
        },
        {
          task: 'Media monitoring and reporting',
          without: '6-8 hours/month',
          withAI: '1-2 hours/month',
          saved: '5.5 hrs',
        },
        {
          task: 'Talking points and messaging',
          without: '2 hours per interview',
          withAI: '30 minutes',
          saved: '1.5 hrs',
        },
        {
          task: 'Event PR coordination',
          without: '8-10 hours',
          withAI: '2-3 hours',
          saved: '6.5 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '20-25 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'PR is moving faster than ever. News cycles are measured in hours, not days. Journalists receive hundreds of pitches weekly. The professionals who respond fastest, pitch smartest, and monitor closest are the ones landing coverage.',
            'The gap isn\'t talent or relationships. It\'s operational speed. AI closes that gap.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t get into PR to spend your days formatting press releases and compiling coverage spreadsheets. You got into it to shape narratives, build reputations, and land stories that matter. AI gives you back the hours to do exactly that.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One press release. See how it feels. Then expand.',
    },

    ch7: {
      intro:
        'Seven days to transform your PR workflow. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'pr-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pr-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'pr-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Draft Your First Press Release',
          duration: '20 min',
          items: [
            {
              id: 'pr-2-1',
              label: 'Run the Full Press Release Draft prompt with a real announcement',
            },
            {
              id: 'pr-2-2',
              label: 'Generate 5 headline variations and pick the strongest',
            },
            {
              id: 'pr-2-3',
              label: 'Compare the AI draft to how long it normally takes you',
            },
          ],
        },
        {
          day: 3,
          title: 'Personalize Your Pitches',
          duration: '20 min',
          items: [
            {
              id: 'pr-3-1',
              label: 'Run the Journalist-Specific Pitch prompt for 3 real journalists',
            },
            {
              id: 'pr-3-2',
              label: 'Generate pitch angles for an upcoming story using the Angle Generator',
            },
          ],
        },
        {
          day: 4,
          title: 'Build Your Crisis Toolkit',
          duration: '25 min',
          items: [
            {
              id: 'pr-4-1',
              label: 'Create a crisis holding statement template for your most likely scenario',
            },
            {
              id: 'pr-4-2',
              label: 'Run the Crisis Q&A prompt to prepare for tough questions',
            },
          ],
        },
        {
          day: 5,
          title: 'Streamline Reporting',
          duration: '20 min',
          items: [
            {
              id: 'pr-5-1',
              label: 'Paste recent media coverage into the Coverage Analysis prompt',
            },
            {
              id: 'pr-5-2',
              label: 'Generate a monthly report using real data from the last 30 days',
            },
          ],
        },
        {
          day: 6,
          title: 'Prepare a Spokesperson',
          duration: '15 min',
          items: [
            {
              id: 'pr-6-1',
              label: 'Run the Spokesperson Prep prompt for an upcoming interview or hypothetical',
            },
            {
              id: 'pr-6-2',
              label: 'Build a messaging framework for a current initiative',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan Ahead',
          duration: '10 min',
          items: [
            {
              id: 'pr-7-1',
              label: 'Which prompts saved you the most time this week?',
            },
            {
              id: 'pr-7-2',
              label: 'Pick 2-3 systems to build into your weekly PR routine',
            },
            {
              id: 'pr-7-3',
              label: 'Share this guide with a PR colleague who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
