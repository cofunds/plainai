import type { WorkbookData } from './types'

export const brandmanagerData = {
  professionId: 'brandmanager',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Brand Managers',
  heroDescription:
    'Everything you need to use AI for brand strategy, campaign oversight, and consumer insights - with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You start Monday with a brand audit that was due Friday. The creative agency sent over three concepts for the spring campaign, but none of them feel on-brand. You pull up the brand guidelines PDF - the one nobody reads - and try to articulate exactly what feels off. Meanwhile, your social team posted something with the wrong hex code again.',
        'By 10am, you have a competitive report to review, a consumer insights deck to prepare for leadership, and a product team asking if they can "just tweak" the logo for a co-branded launch. Your inbox has 23 unread messages from the agency, two internal stakeholders asking for brand approvals, and a Slack thread about whether your brand voice should sound "more human" on TikTok.',
        'You became a brand manager to build something people connect with. Instead, you spend most of your time policing fonts, rewriting briefs that missed the mark, and manually scanning social feeds to see if anyone is talking about your brand.',
        'The strategic thinking - the work that actually builds brand equity - keeps getting pushed to "next week." Next week never comes.',
      ],
      highlight:
        'What if you could automate the monitoring, the first drafts, and the repetitive approvals - and focus on the strategy that actually builds your brand?',
      closingParagraph:
        'Not replacing your taste or judgment. Just removing the 5 hours of manual work that sits between your brand vision and its execution.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace your creative instinct. It won\'t understand your brand the way you do. It can\'t feel the difference between "close enough" and "exactly right." And it definitely won\'t replace the relationship-building you do with agencies, consumers, and internal teams.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as a brand intelligence system that never sleeps. It can scan thousands of social mentions in seconds, draft campaign briefs in your brand voice, analyze competitor positioning overnight, and turn raw consumer feedback into structured insights - all before you finish your morning coffee.',
            'Need to check if ad copy matches your brand guidelines? AI can flag inconsistencies. Want to understand how consumers feel about your latest launch? AI can analyze 500 reviews in 2 minutes. Need 10 headline options for a campaign? AI gives you a starting point in 30 seconds.',
            'The key: AI handles the volume. You handle the vision. It produces the first 80%. You refine the final 20% that actually matters.',
          ],
        },
        {
          heading: 'Why brand managers have a unique advantage',
          paragraphs: [
            'You already think in systems - brand guidelines, tone of voice documents, campaign frameworks. AI thrives on structure. Feed it your brand guidelines and it becomes a tireless enforcer. Give it your positioning and it generates on-brand copy at scale. Share your competitive landscape and it monitors changes automatically.',
            'Brand management is one of the highest-leverage roles for AI because the rules already exist. You just need a system that follows them faster than any human team can.',
          ],
        },
      ],
      keyInsight:
        'Your brand intuition + AI\'s speed = consistency at scale. You set the standard. AI helps you enforce it across every touchpoint, every channel, every day.',
    },

    ch3: {
      intro: 'You don\'t need a dozen subscriptions. These five tools cover 90% of what brand managers need from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your brand strategist and copywriter',
          description:
            'Campaign strategy, brand voice copy, creative briefs, positioning statements, and brainstorming',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for strategy and copy',
          icon: 'chatgpt',
        },
        {
          name: 'Canva AI',
          role: 'Your brand asset creator',
          description:
            'Social graphics, presentation decks, brand templates, quick visual mockups',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for visual brand assets',
          icon: 'canva',
        },
        {
          name: 'Brandwatch',
          role: 'Your social listening command center',
          description:
            'Brand mentions, sentiment tracking, competitor monitoring, trend detection across social platforms',
          cost: 'free-tier',
          difficulty: 'medium',
          verdict: 'Essential for brand health tracking',
          icon: 'brandwatch',
        },
        {
          name: 'Perplexity',
          role: 'Your competitive research analyst',
          description:
            'Competitor brand audits, market positioning research, industry trend scanning with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Claude',
          role: 'Your brand voice writer and editor',
          description:
            'Long-form brand copy, guideline documents, detailed analysis, tone-of-voice calibration',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for nuanced brand writing',
          icon: 'claude',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for strategy and copy, plus Perplexity for research. Add Canva for visuals and Brandwatch for listening when you\'re ready.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual brand management workflow. Each system replaces hours of manual work. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Brand Voice Consistency',
          before:
            'You send brand guidelines to every agency, freelancer, and internal team. Nobody reads them fully. Copy comes back off-brand. You spend hours rewriting or giving feedback that says "this doesn\'t sound like us." Repeat weekly.',
          after:
            'AI learns your brand voice from examples and guidelines. It checks copy against your voice standards, flags inconsistencies, and even rewrites off-brand content to match your tone. Every piece of copy gets a brand-voice check before it goes live.',
          flow: [
            'Feed AI your brand voice guidelines and 5-10 examples of on-brand copy',
            'Paste any draft copy into AI for a brand-voice audit',
            'AI flags what\'s off and suggests on-brand alternatives',
            'Review and approve the refined version',
            'Build a library of approved examples over time',
          ],
          timeSaved: { without: '5-8 hours/week', withAI: '30 minutes/week' },
        },
        {
          id: 2,
          name: 'Campaign Brief Creation',
          before:
            'You start every campaign brief from scratch or copy-paste from the last one and forget to update half the fields. The agency receives a brief that\'s missing context, objectives are vague, and the creative team has to schedule a "brief the brief" call.',
          after:
            'AI generates a structured campaign brief from your inputs - target audience, objectives, key messages, channels, budget parameters, and success metrics. Complete, consistent, and ready for the agency in 10 minutes.',
          flow: [
            'Answer AI\'s structured questions about the campaign',
            'AI generates a complete creative brief',
            'Review and add your strategic nuance',
            'Share directly with agency or creative team',
            'Use the same format every time for consistency',
          ],
          timeSaved: { without: '3-4 hours/brief', withAI: '20 minutes' },
        },
        {
          id: 3,
          name: 'Consumer Insight Analysis',
          before:
            'Customer feedback lives across surveys, social comments, reviews, and support tickets. You spend days pulling data, reading through hundreds of comments, and trying to find patterns. The insights deck is always late.',
          after:
            'Paste raw feedback into AI. It categorizes sentiment, identifies recurring themes, pulls representative quotes, and structures everything into a presentation-ready insights summary. From raw data to actionable insights in 15 minutes.',
          flow: [
            'Collect feedback from all channels (reviews, surveys, social, support)',
            'Paste raw data into AI with your analysis prompt',
            'AI categorizes by theme, sentiment, and urgency',
            'Review the structured insights and pull key findings',
            'Export into your monthly insights report',
          ],
          timeSaved: { without: '1-2 days/month', withAI: '30 minutes' },
        },
        {
          id: 4,
          name: 'Competitive Brand Monitoring',
          before:
            'You check competitor websites, social feeds, and press releases manually. Maybe quarterly. Often you miss a rebrand, a new campaign, or a positioning shift until someone else points it out.',
          after:
            'AI scans competitor brands systematically - messaging changes, campaign launches, positioning shifts, visual identity updates. You get a structured competitive report without spending a full day on it.',
          flow: [
            'List your top 3-5 competitors and what to monitor',
            'Run the competitive audit prompt weekly or monthly',
            'AI analyzes positioning, messaging, and campaigns',
            'Compare against your own brand positioning',
            'Flag opportunities and threats for your strategy',
          ],
          timeSaved: { without: '6-8 hours/quarter', withAI: '20 minutes' },
        },
        {
          id: 5,
          name: 'Social Listening Reports',
          before:
            'You scroll through social feeds, set up basic keyword alerts, and manually compile mentions into a report. The report takes half a day and is outdated by the time you present it.',
          after:
            'AI processes social mentions, categorizes sentiment, identifies influencer mentions, and spots emerging conversations about your brand. Your weekly social listening report writes itself.',
          flow: [
            'Gather social mentions and brand conversations',
            'AI categorizes by sentiment, topic, and platform',
            'Get a summary of volume trends and key conversations',
            'Identify top positive and negative mentions',
            'Generate a leadership-ready report in minutes',
          ],
          timeSaved: { without: '4-6 hours/week', withAI: '15 minutes' },
        },
        {
          id: 6,
          name: 'Brand Guideline Documentation',
          before:
            'Your brand guidelines are a 60-page PDF from two years ago. Nobody reads it. When someone asks about tone for a new channel, you answer from memory. Updates happen "when we get to it." You never get to it.',
          after:
            'AI helps you create, update, and maintain living brand guidelines. Need to add TikTok voice guidelines? Social media specs? Sub-brand rules? AI drafts them in your existing format in minutes.',
          flow: [
            'Share your existing guidelines with AI',
            'Describe what needs updating or adding',
            'AI generates new sections matching your existing format',
            'Review, refine, and approve',
            'Keep guidelines current without a major project',
          ],
          timeSaved: { without: 'Never updated', withAI: '30 min per update' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every brand management task. Click to reveal, copy, and paste. Fill in the brackets with your specifics.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Brand Voice',
          prompts: [
            {
              id: 'bm-p-1-1',
              title: 'Brand Voice Audit',
              task: 'Check if copy matches your brand voice',
              prompt: `You are a brand voice auditor. Here are my brand voice guidelines:

Brand personality: [e.g., confident, approachable, expert but not condescending]
Tone: [e.g., conversational, warm, direct]
We always: [e.g., use active voice, speak like a trusted advisor, use plain language]
We never: [e.g., use jargon, sound corporate, use exclamation marks excessively]

Here are 3 examples of our best on-brand copy:
[Paste example 1]
[Paste example 2]
[Paste example 3]

Now audit this draft copy:
[Paste the copy to check]

For each paragraph:
1. Rate it 1-5 for brand voice alignment
2. Flag specific words or phrases that feel off-brand
3. Suggest a rewrite that matches our voice
4. Explain what you changed and why`,
              result: 'A detailed brand voice audit with specific rewrites for off-brand sections.',
              tip: 'Save your brand voice description as a reusable template. Start every AI conversation with it for consistent results.',
            },
            {
              id: 'bm-p-1-2',
              title: 'Brand Voice Guide Creator',
              task: 'Create a brand voice guide from scratch or examples',
              prompt: `I need to create a brand voice guide for [brand name].

About the brand:
- Industry: [industry]
- Target audience: [who they are, age, mindset]
- Brand positioning: [how we want to be perceived]
- Competitors we want to sound different from: [competitor names]

Here are 5-10 pieces of content we love the tone of:
[Paste examples - can be our own content or aspirational examples from other brands]

Create a brand voice guide with:
1. Brand personality (3-5 personality traits with descriptions)
2. Tone spectrum (where we sit on formal-casual, serious-playful, etc.)
3. Voice do's and don'ts (10 of each, with specific examples)
4. Vocabulary guide (words we use vs. words we avoid)
5. Channel-specific adjustments (how voice flexes for social, email, website, ads)
6. 3 before/after examples showing off-brand vs. on-brand copy`,
              result: 'A complete, actionable brand voice guide your whole team can use.',
              tip: 'Share this guide with every agency and freelancer before they write a single word.',
            },
            {
              id: 'bm-p-1-3',
              title: 'Copy Rewrite in Brand Voice',
              task: 'Rewrite off-brand copy to match your voice',
              prompt: `Rewrite the following copy to match our brand voice.

Our brand voice:
- Personality: [e.g., bold, witty, empathetic]
- Tone: [e.g., conversational but credible]
- Rules: [e.g., short sentences, no jargon, active voice, contractions OK]

Copy to rewrite:
[Paste the off-brand copy]

Requirements:
- Keep the core message and information intact
- Match our voice exactly
- Maintain the same approximate length
- Highlight what you changed and why in a brief note after the rewrite

Provide 2 versions - one closer to the original structure, one that takes more creative liberty.`,
              result: 'Two on-brand rewrites with explanations of changes.',
              tip: 'Use version 1 when the original structure is solid. Use version 2 when you want fresh creative direction.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Campaign Briefs',
          prompts: [
            {
              id: 'bm-p-2-1',
              title: 'Full Campaign Brief Generator',
              task: 'Generate a complete creative brief for a campaign',
              prompt: `Create a comprehensive creative brief for an upcoming campaign.

Brand: [brand name]
Product/Service: [what we're promoting]
Campaign objective: [awareness / consideration / conversion / loyalty]
Target audience: [demographics, psychographics, behaviors]
Key insight: [the consumer truth this campaign taps into]
Key message: [the one thing we want people to take away]
Proof points: [why they should believe us]
Tone: [how this campaign should feel]
Channels: [where this will run - social, OOH, digital, TV, etc.]
Budget tier: [low / medium / high]
Timeline: [launch date and duration]
Competitive context: [what competitors are doing in this space]

Generate a brief with:
1. Campaign overview (2-3 sentences)
2. Objectives and KPIs (specific, measurable)
3. Target audience profile (detailed)
4. Strategic approach
5. Key messages (primary + 2-3 supporting)
6. Creative considerations
7. Channel strategy with role of each channel
8. Mandatories and constraints
9. Success metrics
10. Timeline with key milestones`,
              result: 'A complete, agency-ready creative brief.',
              tip: 'Run this early in campaign planning, then refine with your team before sharing with the agency.',
            },
            {
              id: 'bm-p-2-2',
              title: 'Campaign Naming Workshop',
              task: 'Generate campaign name options',
              prompt: `I need campaign name options for [brand name].

Campaign context:
- What we're launching/promoting: [details]
- Campaign theme: [the big idea or territory]
- Target audience: [who this is for]
- Tone: [playful / bold / emotional / sophisticated / etc.]
- Must align with brand positioning: [your positioning]

Generate 15 campaign name options across these categories:
- 5 descriptive names (clearly communicate the campaign idea)
- 5 evocative names (capture the feeling or emotion)
- 5 wordplay/clever names (memorable, shareable)

For each name:
- The name itself
- A one-line tagline that pairs with it
- Why it works for this campaign
- Any potential risks or concerns (cultural sensitivity, trademark issues)

Then recommend your top 3 with reasoning.`,
              result: '15 campaign name options organized by type with taglines and recommendations.',
              tip: 'Run a quick trademark search on your favorites before getting attached to any name.',
            },
            {
              id: 'bm-p-2-3',
              title: 'Campaign Performance Debrief',
              task: 'Structure a campaign post-mortem',
              prompt: `Help me structure a campaign performance debrief.

Campaign: [campaign name]
Brand: [brand name]
Duration: [dates]
Channels: [where it ran]
Budget: [total spend]

Results:
- Reach/Impressions: [number] vs. target [number]
- Engagement: [rate/numbers] vs. target
- Conversions: [number] vs. target
- Brand lift: [any survey data]
- Earned media: [PR, social sharing, etc.]
- Top performing creative: [describe]
- Underperforming creative: [describe]

Create a debrief document with:
1. Executive summary (3-4 sentences)
2. Objective vs. results scorecard
3. What worked and why (top 3 wins)
4. What didn't work and why (top 3 misses)
5. Audience insights learned
6. Channel performance breakdown
7. Creative performance analysis
8. Budget efficiency analysis
9. Recommendations for next campaign (5 specific actions)
10. One-page summary for leadership`,
              result: 'A thorough campaign debrief document with actionable next steps.',
              tip: 'Run this within two weeks of campaign end while data and context are fresh.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Consumer Insights',
          prompts: [
            {
              id: 'bm-p-3-1',
              title: 'Consumer Feedback Analyzer',
              task: 'Analyze raw consumer feedback into structured insights',
              prompt: `Analyze the following consumer feedback for [brand name].

Context: This feedback is from [source: reviews / surveys / social comments / support tickets / focus groups].
Product/Service: [what product or service this relates to]
Time period: [when this feedback was collected]

Feedback data:
[Paste all raw feedback]

Provide:
1. Overall sentiment breakdown (% positive, neutral, negative)
2. Top 5 themes with frequency count and representative quotes
3. Top 3 things consumers love (with direct quotes)
4. Top 3 pain points or complaints (with direct quotes)
5. Unexpected insights - anything surprising in the data
6. Brand perception - how consumers describe the brand in their own words
7. Competitive mentions - any references to competitors and context
8. Actionable recommendations (3-5 specific things to do based on this data)
9. Quotes to share with leadership (3 powerful quotes that tell the story)`,
              result: 'Structured consumer insights ready for a stakeholder presentation.',
              tip: 'Run this monthly with fresh data to track sentiment shifts over time.',
            },
            {
              id: 'bm-p-3-2',
              title: 'Consumer Persona Builder',
              task: 'Build detailed consumer personas from data',
              prompt: `Build a detailed consumer persona for [brand name].

What we know about our customers:
- Demographics: [age range, gender, location, income]
- How they find us: [channels, referral sources]
- Why they buy: [motivations, needs]
- Common objections: [what holds them back]
- Usage patterns: [how they use our product/service]

Customer data or feedback to analyze:
[Paste any customer data, survey results, or feedback]

Create a persona with:
1. Name, age, occupation, location (fictional but representative)
2. A day in their life (2-3 paragraph narrative)
3. Goals and aspirations
4. Frustrations and pain points
5. Media consumption habits
6. Brand relationship - how they interact with our brand
7. Purchase journey - from awareness to loyalty
8. What would make them switch to a competitor
9. What would make them recommend us
10. A defining quote that captures their mindset
11. Top 3 messages that would resonate with this persona`,
              result: 'A vivid, actionable consumer persona for campaign targeting and messaging.',
              tip: 'Create 2-3 personas to cover your key segments. Use them in every brief.',
            },
            {
              id: 'bm-p-3-3',
              title: 'Social Sentiment Deep Dive',
              task: 'Analyze brand sentiment across social conversations',
              prompt: `Analyze the following social media conversations about [brand name].

Platform: [Twitter/X, Instagram, TikTok, Reddit, etc.]
Time period: [dates]
Context: [any recent campaign, launch, or event that may be driving conversation]

Social mentions/comments:
[Paste social media mentions, comments, or conversations]

Provide:
1. Sentiment split (positive / neutral / negative with percentages)
2. Volume trend - is conversation increasing or decreasing?
3. Key conversation topics (top 5 with example posts)
4. Influencer or high-reach mentions (any notable accounts)
5. Brand associations - words and phrases people pair with our brand
6. Emoji and tone analysis - how people emotionally react
7. Competitive comparisons - where people mention competitors alongside us
8. Emerging narratives - any new conversations forming
9. Risk alerts - anything that could become a PR issue
10. Opportunities - positive conversations to amplify`,
              result: 'A social listening summary with sentiment data and strategic opportunities.',
              tip: 'Flag any risk alerts immediately - don\'t wait for the monthly report.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Competitive Monitoring',
          prompts: [
            {
              id: 'bm-p-4-1',
              title: 'Competitive Brand Audit',
              task: 'Run a full competitive brand analysis',
              prompt: `Run a competitive brand audit for [brand name] against these competitors: [competitor 1], [competitor 2], [competitor 3].

Industry: [industry]
Our positioning: [how we position ourselves]

For each competitor, analyze:
1. Brand positioning - who they target and how they describe themselves
2. Visual identity - look, feel, color palette, design style
3. Brand voice - how they sound (formal/casual, playful/serious)
4. Key messaging - their main value propositions
5. Campaign activity - recent campaigns or launches
6. Social presence - platform focus, content strategy, engagement levels
7. Strengths - what they do well from a brand perspective
8. Weaknesses - where their brand falls short
9. Differentiation from us - how they're similar/different

Then provide:
- A competitive positioning map (describe where each brand sits)
- 3 white space opportunities our brand could own
- 1 threat to watch from each competitor`,
              result: 'A comprehensive competitive brand audit with strategic recommendations.',
              tip: 'Run this quarterly. Compare audits over time to spot competitor strategy shifts.',
            },
            {
              id: 'bm-p-4-2',
              title: 'Competitor Campaign Tracker',
              task: 'Track and analyze competitor campaign activity',
              prompt: `Analyze the following competitor campaign for [competitor name].

Campaign details (what you've observed):
[Paste any campaign creative, messaging, URLs, or descriptions you've collected]

Analyze:
1. Campaign objective (what are they trying to achieve?)
2. Target audience (who is this aimed at?)
3. Key message and value proposition
4. Creative approach and tone
5. Channels being used
6. Estimated investment level (low / medium / high based on visibility)
7. What's working (strengths of this campaign)
8. What's not working (weaknesses or missed opportunities)
9. How this compares to their previous campaigns
10. Implications for our brand - should we respond, ignore, or learn from this?

Provide 3 specific takeaways for our next campaign.`,
              result: 'A structured competitive campaign analysis with strategic implications.',
              tip: 'Screenshot or save competitor campaigns when you spot them. Evidence makes this prompt more powerful.',
            },
            {
              id: 'bm-p-4-3',
              title: 'Brand Positioning Gap Analysis',
              task: 'Find positioning gaps in your competitive landscape',
              prompt: `Analyze the positioning landscape for [your industry/category].

Our brand: [brand name] - [one-line positioning]
Competitors:
1. [Competitor 1] - [their positioning as you understand it]
2. [Competitor 2] - [their positioning]
3. [Competitor 3] - [their positioning]
4. [Competitor 4] - [their positioning]

Current market dynamics:
[Any relevant trends, consumer shifts, or industry changes]

Provide:
1. A positioning map - where each brand sits on relevant dimensions (e.g., premium vs. accessible, traditional vs. innovative)
2. Clusters - which brands are competing in the same space
3. White space - positioning territories nobody owns
4. At-risk positions - where we might be vulnerable
5. Recommended positioning moves - 3 strategic options with pros and cons for each
6. One bold recommendation with reasoning`,
              result: 'A positioning gap analysis with actionable strategic options.',
              tip: 'Bring this to your next brand strategy session. The white space analysis drives the best discussions.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Social Listening',
          prompts: [
            {
              id: 'bm-p-5-1',
              title: 'Weekly Social Listening Report',
              task: 'Generate a weekly social listening summary',
              prompt: `Create a weekly social listening report for [brand name].

Week of: [date range]
Platforms monitored: [list platforms]

This week's mentions/conversations:
[Paste social mentions, comments, and conversations from the week]

Generate a report with:
1. Executive summary (3 sentences - the headline story this week)
2. Volume overview - total mentions, comparison to previous week
3. Sentiment breakdown - positive/neutral/negative with shift from last week
4. Top conversations (5 most significant mentions or threads)
5. Positive highlights - best things people said about us (with quotes)
6. Negative alerts - complaints or issues to address (with quotes)
7. Influencer mentions - any notable accounts talking about us
8. Trending topics connected to our brand
9. Competitor comparison - how our share of voice compares
10. Recommended actions for next week (3 specific steps)

Keep it under 1 page. Leadership needs to scan this in 2 minutes.`,
              result: 'A concise weekly social listening report ready for leadership.',
              tip: 'Set a recurring time to pull data and run this prompt every Monday morning.',
            },
            {
              id: 'bm-p-5-2',
              title: 'Crisis Sentiment Monitor',
              task: 'Quickly assess brand sentiment during a crisis or issue',
              prompt: `Urgent: Analyze the current conversation around [brand name] regarding [the issue/crisis].

Context: [What happened - product issue, PR problem, social media incident, etc.]
When it started: [date/time]

Current mentions and conversations:
[Paste all relevant social mentions, news coverage, comments]

Provide immediately:
1. Severity assessment (1-10 scale with reasoning)
2. Conversation volume - how fast is this spreading?
3. Sentiment breakdown of current conversation
4. Key narratives forming (what stories are people telling?)
5. Most influential voices driving the conversation
6. Is mainstream media picking this up?
7. Comparison to similar brand crises (how did they play out?)
8. Recommended immediate response (within 1 hour)
9. Recommended 24-hour action plan
10. Messaging framework - what to say and what NOT to say
11. Stakeholders to brief immediately`,
              result: 'A rapid crisis assessment with recommended response strategy.',
              tip: 'Speed matters in a crisis. Run this prompt the moment you spot an issue and update hourly.',
            },
            {
              id: 'bm-p-5-3',
              title: 'Brand Health Tracker',
              task: 'Track overall brand health metrics from social data',
              prompt: `Create a monthly brand health report from social data for [brand name].

Month: [month/year]
Data sources: [platforms and data types you're including]

This month's data:
[Paste aggregated social data, mention counts, sentiment scores, engagement metrics]

Previous month's benchmarks (if available):
[Paste last month's key numbers for comparison]

Generate a brand health report with:
1. Brand Health Score (create a composite 1-100 score based on the data)
2. Awareness indicators - mention volume trends
3. Perception indicators - sentiment trends and brand associations
4. Engagement indicators - how people interact with our brand content
5. Advocacy indicators - shares, recommendations, user-generated content
6. Category comparison - our share of voice vs. competitors
7. Month-over-month changes (up/down arrows with percentage change)
8. Bright spots - where brand health is improving
9. Watch areas - where brand health is declining
10. 3 strategic recommendations for next month`,
              result: 'A comprehensive monthly brand health scorecard.',
              tip: 'Track this consistently month-over-month. The trends tell a more important story than any single data point.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Brand Guidelines',
          prompts: [
            {
              id: 'bm-p-6-1',
              title: 'Brand Guidelines Section Writer',
              task: 'Write or update a section of your brand guidelines',
              prompt: `Write a new section for [brand name]'s brand guidelines.

Section topic: [e.g., Social media voice, Email tone, Sub-brand usage, Photography style, etc.]

Existing brand context:
- Brand personality: [traits]
- Overall tone: [description]
- Existing guidelines format: [describe how current doc is structured]

Specific requirements for this section:
[What needs to be covered in this new section]

Write this section with:
1. Section title and purpose (why this section exists)
2. Core principles for this area (3-5 rules)
3. Do's and Don'ts (5 of each with specific examples)
4. Before/After examples (3 pairs showing wrong vs. right)
5. Channel or context-specific variations if applicable
6. Quick reference checklist (for someone reviewing work in this area)

Match the tone and format of a professional brand guidelines document. Make it scannable with headers and bullet points.`,
              result: 'A complete, formatted brand guidelines section ready to add to your document.',
              tip: 'Build guidelines incrementally. One section per week adds up to a comprehensive guide within a month.',
            },
            {
              id: 'bm-p-6-2',
              title: 'Channel-Specific Voice Adapter',
              task: 'Adapt brand voice guidelines for a specific channel',
              prompt: `Create channel-specific brand voice guidelines for [brand name] on [channel: TikTok / Instagram / LinkedIn / Email / Customer Support / etc.].

Our core brand voice:
- Personality: [traits]
- Tone: [description]
- Key rules: [list]

Channel context:
- Our audience on this channel: [who follows us here]
- Content types: [what we post here]
- Engagement style: [how people interact on this channel]
- Competitor behavior on this channel: [what others do]

Create guidelines that include:
1. How our core voice adapts for this channel (what stays, what flexes)
2. Channel-specific tone guidelines (e.g., more casual on TikTok, more professional on LinkedIn)
3. Content format rules (length, structure, hashtag usage, emoji usage)
4. Language do's and don'ts for this channel (10 of each)
5. 5 example posts in the correct voice for this channel
6. Common mistakes to avoid on this channel
7. Response guidelines (how to reply to comments and DMs)`,
              result: 'Channel-specific voice guidelines that keep your brand consistent while fitting each platform.',
              tip: 'Create one of these for every channel you\'re active on. It saves endless back-and-forth with your social team.',
            },
            {
              id: 'bm-p-6-3',
              title: 'Brand Messaging Architecture',
              task: 'Create a structured messaging architecture for your brand',
              prompt: `Create a brand messaging architecture for [brand name].

About the brand:
- What we do: [one sentence]
- Who we serve: [primary audience]
- Category: [industry/category]
- Key differentiators: [what makes us different]
- Brand values: [core values]

Competitive context:
- Main competitors and their key messages: [list]

Create a messaging architecture with:
1. Brand purpose statement (one sentence - why we exist)
2. Brand promise (one sentence - what we guarantee)
3. Positioning statement (standard format: For [target], [brand] is the [category] that [key benefit] because [reason to believe])
4. Value propositions (3-4 key value props with supporting points)
5. Elevator pitch (30-second version)
6. Boilerplate (100-word company description)
7. Key proof points for each value proposition
8. Messaging by audience (how messaging shifts for different segments)
9. Messaging hierarchy (what to lead with in different contexts)
10. Words and phrases to own (5-10 terms we want associated with our brand)`,
              result: 'A complete messaging architecture document for consistent brand communication.',
              tip: 'This becomes your single source of truth for every piece of brand communication. Update it annually.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at how much time AI actually saves you as a brand manager.',
      timeTable: [
        {
          task: 'Brand voice reviews',
          without: '5-8 hours/week',
          withAI: '30 minutes',
          saved: '5+ hrs/week',
        },
        {
          task: 'Campaign brief creation',
          without: '3-4 hours/brief',
          withAI: '20 minutes',
          saved: '3 hrs/brief',
        },
        {
          task: 'Consumer insight analysis',
          without: '1-2 days/month',
          withAI: '30 minutes',
          saved: '7+ hrs/month',
        },
        {
          task: 'Competitive monitoring',
          without: '6-8 hours/quarter',
          withAI: '20 minutes',
          saved: '6 hrs/quarter',
        },
        {
          task: 'Social listening reports',
          without: '4-6 hours/week',
          withAI: '15 minutes',
          saved: '4+ hrs/week',
        },
        {
          task: 'Brand guideline updates',
          without: 'Never happens',
          withAI: '30 min per section',
          saved: 'Finally gets done',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/week',
      },
      sections: [
        {
          heading: 'The Brand Advantage',
          paragraphs: [
            'Brand managers who use AI don\'t just work faster - they work at a different level. While others are still compiling last month\'s social listening report, you\'re already acting on next month\'s strategy.',
            'The gap between brands that use AI and those that don\'t is widening every quarter. It\'s not about budget anymore. It\'s about speed and consistency.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a brand manager to rewrite agency copy for the third time or manually compile social mentions into a spreadsheet. You did it to build brands people love. AI gives you back the time to focus on the creative and strategic work that actually builds brand equity.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Run one prompt today. See how much time it saves. Then build from there.',
    },

    ch7: {
      intro:
        'Seven days, one step at a time. Follow the plan, check off each task, and by the end of the week you\'ll have AI built into your brand workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'bm-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'bm-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'bm-1-3', label: 'Bookmark this guide for quick access' },
          ],
        },
        {
          day: 2,
          title: 'Define Your Brand Voice in AI',
          duration: '20 min',
          items: [
            { id: 'bm-2-1', label: 'Gather 5 examples of your best on-brand copy' },
            { id: 'bm-2-2', label: 'Run the Brand Voice Guide Creator prompt' },
            { id: 'bm-2-3', label: 'Save the output as your AI brand voice reference' },
          ],
        },
        {
          day: 3,
          title: 'Audit Your Current Copy',
          duration: '15 min',
          items: [
            { id: 'bm-3-1', label: 'Pick a recent piece of copy that felt off-brand' },
            { id: 'bm-3-2', label: 'Run the Brand Voice Audit prompt on it' },
            { id: 'bm-3-3', label: 'Compare the AI rewrite to your manual approach' },
          ],
        },
        {
          day: 4,
          title: 'Run a Competitive Scan',
          duration: '20 min',
          items: [
            { id: 'bm-4-1', label: 'Run the Competitive Brand Audit prompt with your top 3 competitors' },
            { id: 'bm-4-2', label: 'Save the output to your strategy files' },
          ],
        },
        {
          day: 5,
          title: 'Analyze Consumer Feedback',
          duration: '20 min',
          items: [
            { id: 'bm-5-1', label: 'Collect recent consumer feedback from any source' },
            { id: 'bm-5-2', label: 'Run the Consumer Feedback Analyzer prompt' },
            { id: 'bm-5-3', label: 'Pull 3 key insights for your next team meeting' },
          ],
        },
        {
          day: 6,
          title: 'Create a Campaign Brief',
          duration: '20 min',
          items: [
            { id: 'bm-6-1', label: 'Pick an upcoming campaign or project' },
            { id: 'bm-6-2', label: 'Run the Full Campaign Brief Generator prompt' },
            { id: 'bm-6-3', label: 'Refine and share with your team or agency' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Build Habits',
          duration: '10 min',
          items: [
            { id: 'bm-7-1', label: 'Review which systems saved you the most time' },
            { id: 'bm-7-2', label: 'Set up a weekly recurring task for social listening with AI' },
            { id: 'bm-7-3', label: 'Share this guide with a colleague who manages brand work' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
