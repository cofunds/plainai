import type { WorkbookData } from './types'

export const bizdevData = {
  professionId: 'bizdev',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Business Development',
  heroDescription:
    'Win more partnerships and close bigger deals. Real tools, proven workflows, and copy-paste prompts for market research, partner outreach, competitive intelligence, and strategic planning.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your calendar looks like a jigsaw puzzle. Three partner calls today, a pitch deck due tomorrow, and a competitive landscape analysis the CEO asked for "when you get a chance" - which means yesterday. You have a warm intro to a Fortune 500 VP sitting in your inbox from last Wednesday that you still haven\'t followed up on because you wanted to "do it right."',
        'There\'s a market expansion opportunity your team identified last month. The research doc is half-finished. You need to size the market, map potential partners, analyze the competitive dynamics, and build a business case - but every time you sit down to work on it, another urgent request pulls you away. The partnership pipeline spreadsheet hasn\'t been updated in two weeks because updating it takes an hour you don\'t have.',
        'You got into business development because you see opportunities where others see obstacles. You build relationships that become revenue. You connect dots across industries, markets, and organizations. But instead of spending your time on the strategic thinking and relationship building that creates real value, you\'re buried in research, slide decks, and administrative work that eats your week alive.',
      ],
      highlight:
        'What if AI handled the research, the writing, and the analysis - so you could focus on the relationships and strategy that actually close deals?',
      closingParagraph:
        'Not replacing your deal instincts. Not automating your relationships. Just compressing the 6 hours of prep work between identifying an opportunity and being ready to act on it - down to 30 minutes.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to build relationships for you. It won\'t read the room during a partnership negotiation. It can\'t tell when a potential partner is genuinely interested or just being polite. The instinct for spotting the right deal at the right time - that\'s human. AI doesn\'t have it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the best strategic analyst you\'ve ever worked with. One who can research a new market in 10 minutes, build a competitive brief overnight, draft a partnership proposal while you\'re on another call, and turn your messy notes from a partner meeting into a clean deal memo with next steps.',
            'Need to understand a new market segment before a meeting? AI delivers a structured brief with market size, key players, trends, and entry strategies - in 5 minutes. Need to tailor a pitch deck for a specific partner? AI restructures your narrative around their priorities. Need to analyze whether a deal makes financial sense? AI builds the model while you\'re still finding the spreadsheet.',
            'You bring the relationships, the strategic vision, and the deal instinct. AI brings the speed, the research depth, and the execution capacity. Together, you operate like a team of five.',
          ],
        },
      ],
      keyInsight:
        'Your strategic vision + AI\'s research speed = more opportunities found, evaluated, and acted on. The biz dev pro who shows up with deeper research and sharper pitches wins the partnership.',
    },

    ch3: {
      intro: 'Five tools that cover the full biz dev workflow. Start with two, add from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your strategy and writing engine',
          description:
            'Partnership proposals, deal memos, pitch narratives, email outreach, strategic analysis - any text-heavy biz dev task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Perplexity',
          role: 'Your market intelligence analyst',
          description:
            'Market research, competitive analysis, industry trends, company deep-dives - all with cited sources you can reference in your materials',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Gamma',
          role: 'Your presentation builder',
          description:
            'Partnership pitch decks, board presentations, market analysis slides - professional decks from text input in minutes',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Skip PowerPoint',
          icon: 'gamma',
        },
        {
          name: 'Notion AI',
          role: 'Your deal tracking system',
          description:
            'Partnership pipeline, meeting notes, deal memos, relationship tracking, strategic planning docs',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-form writing partner',
          description:
            'Complex market analysis, lengthy proposals, strategic documents, nuanced competitive briefs - excels at depth and reasoning',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for deep analysis',
          icon: 'claude',
        },
      ],
      footer:
        'Start with ChatGPT + Perplexity. That combination covers market research, outreach, proposals, and competitive analysis. Add Gamma when you need decks.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual biz dev workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Market Opportunity Research',
          before:
            'You spend 2 days piecing together market data from analyst reports, news articles, LinkedIn posts, and industry blogs. The numbers are scattered, the sources are inconsistent, and by the time you compile something presentable, the CEO has already moved to the next priority.',
          after:
            'You give AI your target market and questions. In 15 minutes, you have a structured market brief - size, growth rate, key players, trends, entry barriers, and opportunity gaps. Sourced, organized, and ready to present or drop into a strategy doc.',
          flow: [
            'Define the market segment and key questions to answer',
            'AI generates a structured market overview with data points',
            'Review for accuracy and flag anything that needs verification',
            'AI identifies specific opportunities and entry strategies',
            'Export into your strategy doc or presentation',
          ],
          timeSaved: { without: '1-2 days', withAI: '30-45 minutes' },
        },
        {
          id: 2,
          name: 'Partner Outreach',
          before:
            'You draft a partnership email, rewrite it four times, ask a colleague to review it, and send it two days after you intended. For each new partner prospect, you start from scratch. The follow-up cadence is inconsistent, and warm intros go cold because you took too long.',
          after:
            'AI researches the partner company, identifies alignment points, and drafts a tailored outreach message highlighting mutual value - in 5 minutes. Follow-up sequences are pre-built. You spend your time on the relationship, not the writing.',
          flow: [
            'Enter the partner company and your strategic goal',
            'AI researches the company and identifies partnership angles',
            'Generate a personalized outreach email with mutual value props',
            'AI creates a 3-email follow-up sequence',
            'Review, personalize, and send',
          ],
          timeSaved: { without: '45-60 min/partner', withAI: '10 minutes' },
        },
        {
          id: 3,
          name: 'Competitive Intelligence',
          before:
            'Competitor analysis is something you do once a quarter - if you\'re lucky. You check their website, skim their blog, look at their LinkedIn, maybe find a press release. The resulting doc is surface-level, and it\'s outdated within weeks.',
          after:
            'AI builds a comprehensive competitive brief - positioning, pricing, partnerships, product changes, leadership moves, and strategic direction. Run it monthly to track shifts. You always know what the competition is doing.',
          flow: [
            'List your competitors and what you need to know',
            'AI generates a competitive landscape overview',
            'Deep-dive into each competitor\'s strategy and recent moves',
            'AI identifies gaps and vulnerabilities you can exploit',
            'Update the brief monthly with new data',
          ],
          timeSaved: { without: '1-2 days/quarter', withAI: '30 minutes/month' },
        },
        {
          id: 4,
          name: 'Pitch Deck Creation',
          before:
            'You open an old deck, start moving slides around, and spend 3 hours fighting with formatting. The narrative doesn\'t flow. You\'re not sure what order to present things. The design looks dated. For high-stakes pitches, it\'s an all-day affair.',
          after:
            'AI structures your pitch narrative, generates slide-by-slide content, and suggests the story arc that lands with your specific audience. You focus on the strategic message. Gamma turns the content into a polished deck. Total time: under an hour.',
          flow: [
            'Define your audience, partnership goal, and key selling points',
            'AI structures the pitch narrative and slide outline',
            'Generate content for each slide with talking points',
            'Build the deck in Gamma from the AI-generated content',
            'Review, customize visuals, and rehearse',
          ],
          timeSaved: { without: '4-8 hours/deck', withAI: '45-60 minutes' },
        },
        {
          id: 5,
          name: 'Deal Analysis',
          before:
            'Someone brings you a potential deal. You need to evaluate it - strategic fit, financial impact, risks, resource requirements. The analysis takes a week of back-and-forth with finance, legal, and product. By the time you have a recommendation, the window has narrowed.',
          after:
            'AI builds a deal analysis framework, runs the financial model based on your assumptions, identifies risks and dependencies, and generates an executive summary with a clear recommendation. Your evaluation takes hours, not weeks.',
          flow: [
            'Input deal parameters: partner, terms, strategic rationale',
            'AI evaluates strategic fit against your company priorities',
            'Generate financial impact analysis with scenario modeling',
            'AI flags risks, dependencies, and negotiation leverage points',
            'Export deal memo with executive summary and recommendation',
          ],
          timeSaved: { without: '3-5 days', withAI: '2-3 hours' },
        },
        {
          id: 6,
          name: 'Strategic Planning',
          before:
            'Your annual biz dev strategy takes weeks to put together. You need market data, competitive insights, pipeline analysis, resource planning, and a narrative that ties it all together. It\'s a massive document that exhausts everyone involved.',
          after:
            'AI helps you build the strategy piece by piece - market analysis, competitive landscape, opportunity prioritization, resource allocation, and a clear roadmap. Each section takes 30 minutes instead of half a day. The full strategy document comes together in days, not weeks.',
          flow: [
            'Define strategic priorities and planning period',
            'AI generates market analysis and opportunity map',
            'Build competitive landscape and positioning recommendations',
            'AI creates a prioritized opportunity pipeline with scoring',
            'Generate the full strategy document with timeline and milestones',
          ],
          timeSaved: { without: '2-4 weeks', withAI: '3-5 focused days' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every biz dev scenario. Copy, paste, fill in the brackets, and get results in minutes.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Market Research',
          prompts: [
            {
              id: 'bd-p-1-1',
              title: 'Market Opportunity Assessment',
              task: 'Evaluate a new market opportunity',
              prompt: `I'm evaluating a market opportunity for my company.

My company: [company name] - [what you do in one sentence]
Target market: [the market segment you're exploring]
Geography: [region/country]
Current footprint: [where you already operate or sell]

Give me a structured market assessment:
1. Market size: TAM, SAM, SOM with assumptions for each
2. Growth rate and trajectory (is this market growing, stable, or declining?)
3. Key players: top 5 companies in this space with their approximate market share
4. Customer segments: who buys in this market and what drives their decisions
5. Entry barriers: what makes it hard to enter and how to overcome each
6. Timing analysis: why now is the right (or wrong) time to enter
7. 3 potential go-to-market strategies ranked by speed-to-revenue
8. Risks and unknowns: what could go wrong and what you need to validate

Be specific and data-driven where possible. Flag assumptions clearly.`,
              result:
                'A structured market assessment ready for a leadership presentation or strategy document.',
              tip: 'Run this in Perplexity first for sourced data, then use Claude to build the strategic analysis on top.',
            },
            {
              id: 'bd-p-1-2',
              title: 'Market Sizing Deep-Dive',
              task: 'Build a detailed market sizing model',
              prompt: `Build a detailed market sizing model for this opportunity:

Product/service: [what you'd offer in this market]
Target buyer: [who specifically would buy - role, company type, size]
Geography: [where]
Price point: [expected pricing or range]

Build the model using two approaches:

Top-down approach:
- Start with the broadest relevant market number
- Apply logical filters to narrow to your addressable market
- Show each step and the assumption behind it

Bottom-up approach:
- Start with the number of potential customers
- Multiply by expected penetration rate
- Factor in average deal size and purchase frequency
- Show each variable and its assumption

Then:
1. Compare the two approaches and explain any gap
2. Give me a conservative, moderate, and aggressive scenario
3. Identify the 3 assumptions that matter most (sensitivity analysis)
4. Estimate the timeline to capture 1%, 3%, and 5% market share
5. Flag any data points I should verify with primary research

I need this to be credible enough for a board presentation.`,
              result:
                'A dual-approach market sizing model with scenarios you can defend to leadership.',
              tip: 'Always present the conservative scenario as your baseline. Credibility matters more than big numbers.',
            },
            {
              id: 'bd-p-1-3',
              title: 'Industry Trend Scanner',
              task: 'Scan for trends shaping a target industry',
              prompt: `Scan for the most important trends in [target industry] that will shape business development opportunities in the next 12-24 months.

My company: [what you do]
Our strategic interest: [why this industry matters to you]
Current partnerships or presence: [any existing activity in this space]

Give me:
1. Top 5 macro trends reshaping this industry
   - What's changing and why
   - Who wins and who loses
   - Timeline: is this happening now or in 2-3 years?

2. Top 3 technology trends creating new opportunities
   - What's becoming possible that wasn't before
   - Partnership opportunities these create

3. Top 3 regulatory or market shifts to watch
   - What's changing in the rules of the game
   - How this affects deal structures and partnerships

4. Emerging players to watch
   - 5 companies disrupting this space (not the obvious incumbents)
   - What makes each one interesting for a potential partnership

5. For each trend: one specific biz dev play we could make

Keep it strategic. I need this for planning, not a news summary.`,
              result:
                'A trend-informed strategy brief that identifies where the opportunities are heading.',
              tip: 'Run this quarterly. Comparing outputs over time reveals which trends are accelerating.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Partner Outreach',
          prompts: [
            {
              id: 'bd-p-2-1',
              title: 'Partnership Proposal Email',
              task: 'Write a compelling partnership outreach email',
              prompt: `Write a partnership outreach email:

My company: [name] - [what you do, one sentence]
Target partner: [company name] - [what they do]
Contact: [name], [title]
How I got their info: [referral, event, LinkedIn, research]

Strategic rationale for this partnership:
- What we bring: [our strengths, audience, capabilities]
- What they bring: [their strengths, audience, capabilities]
- Mutual benefit: [how both sides win]
- End customer benefit: [how the customer wins]

Write 3 versions:

Version A: Strategic vision approach
- Lead with the big picture opportunity
- Paint the "what if we combined forces" vision
- Ask for an exploratory conversation

Version B: Specific opportunity approach
- Lead with a concrete, defined partnership idea
- Include one data point or example showing the opportunity
- Propose a small pilot or first step

Version C: Warm referral approach
- Lead with the mutual connection or shared context
- Briefly explain why you think there's alignment
- Low-pressure ask for 20 minutes

Each under 150 words. Tone: strategic peer, not vendor pitch. No "synergies" or "leverage."`,
              result:
                'Three outreach approaches tailored to your partnership target.',
              tip: 'Version B with a specific, concrete idea gets the highest response rate. Abstract "let\'s explore" emails get ignored.',
            },
            {
              id: 'bd-p-2-2',
              title: 'Partner Follow-up Sequence',
              task: 'Build a follow-up sequence for partner outreach',
              prompt: `Build a follow-up sequence for a partnership outreach:

Partner company: [name]
Contact: [name], [title]
Initial outreach sent: [date] - [brief summary of what you proposed]
Response so far: [no reply / interested but busy / asked for more info]

Create a 4-touch follow-up sequence:

Touch 1 (Day 5): Add new value
- Share a relevant insight, data point, or article about their market
- Brief reminder of the partnership angle
- No pressure, just value

Touch 2 (Day 12): Social proof
- Reference a similar partnership that worked well
- Include a specific result or outcome
- Restate the opportunity concisely

Touch 3 (Day 20): New angle
- Approach the partnership from a different angle than your original pitch
- Maybe a smaller starting point or different use case
- Show you've been thinking about their business

Touch 4 (Day 30): Close the loop
- Acknowledge the silence directly
- Make it easy to say "not now" or "not the right fit"
- Leave the door open without being pushy

Each under 100 words. Professional but human.`,
              result:
                'A complete follow-up sequence that keeps the door open without being annoying.',
              tip: 'The "new angle" email on Day 20 often gets the reply. It shows persistence and creative thinking.',
            },
            {
              id: 'bd-p-2-3',
              title: 'Partnership One-Pager',
              task: 'Create a one-pager for a partnership proposal',
              prompt: `Create a partnership one-pager I can share with a potential partner:

My company: [name]
What we do: [2-3 sentences]
Our audience/market: [who we serve]
Our scale: [key numbers - users, revenue, market presence]

Proposed partner: [name]
What they do: [2-3 sentences]
Their audience/market: [who they serve]

Partnership concept: [describe the partnership idea]

Generate a one-pager with these sections:
1. The Opportunity (2-3 sentences on the market gap or customer need)
2. Partnership Overview (what we'd do together - be specific)
3. What [Partner] Brings (3-4 bullet points of their unique value)
4. What [My Company] Brings (3-4 bullet points of our unique value)
5. Customer Impact (how end users benefit)
6. Revenue Model (how both sides make money - be specific about the split or structure)
7. Proposed First Step (a small, low-risk pilot to prove the concept)
8. Key Metrics to Track (how we'd measure success)
9. Timeline (from agreement to launch)

Keep it to one page. Use bullet points. Every sentence should answer "why should they care?"`,
              result:
                'A professional partnership one-pager you can email or present in a meeting.',
              tip: 'Send this after your first call, not before. Tailor it based on what they told you matters most.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Competitive Intelligence',
          prompts: [
            {
              id: 'bd-p-3-1',
              title: 'Competitive Landscape Brief',
              task: 'Build a comprehensive competitive analysis',
              prompt: `Build a competitive landscape brief for my company:

My company: [name] - [what we do]
Our market: [industry/segment]
Our differentiators: [what makes us unique - 2-3 points]

Key competitors to analyze:
1. [Competitor 1]
2. [Competitor 2]
3. [Competitor 3]
4. [Competitor 4]

For each competitor, analyze:
1. Positioning: how they describe themselves and who they target
2. Product/service offering: what they sell and key features
3. Pricing model: how they charge (if publicly available)
4. Key partnerships: who they've partnered with recently
5. Recent moves: funding, hires, launches, market expansion
6. Strengths: top 3 things they do well
7. Weaknesses: top 3 vulnerabilities or gaps
8. Threat level to us: High / Medium / Low with reasoning

Then synthesize:
- Overall market positioning map (where each player sits)
- White space: opportunities nobody is addressing
- Emerging threats: companies or trends that could disrupt the landscape
- Our strategic advantages and how to amplify them
- Our vulnerabilities and how to address them`,
              result:
                'A boardroom-ready competitive brief that informs strategy and partnership decisions.',
              tip: 'Run this monthly with a focus on "recent moves." Competitive dynamics shift fast.',
            },
            {
              id: 'bd-p-3-2',
              title: 'Competitor Partnership Tracker',
              task: 'Track and analyze competitor partnerships',
              prompt: `Analyze competitor partnership activity in my space:

My company: [name]
My industry: [industry]
Key competitors: [list 3-5]

For each competitor, research and document:
1. Recent partnerships announced (last 12 months)
   - Partner name and what they do
   - Partnership type (integration, co-sell, distribution, joint venture)
   - Strategic rationale (why they did this deal)

2. Partnership ecosystem
   - Technology partners (integrations)
   - Channel partners (resellers, referrals)
   - Strategic partners (co-development, joint GTM)

3. Partnership gaps
   - Categories where they lack partnerships
   - Types of partners they haven't engaged yet

Then give me:
1. Pattern analysis: what partnership strategy are competitors following?
2. Counter-moves: partnerships we should pursue to stay competitive
3. Poach opportunities: partners who might be underserved by competitors
4. Unique partnerships: alliance ideas that no competitor has tried yet
5. Priority ranking: which 3 partnerships would give us the biggest strategic advantage?`,
              result:
                'A competitive partnership map that reveals strategic moves and counter-opportunities.',
              tip: 'Check competitor press releases and LinkedIn announcements monthly. Partnership announcements often signal strategic direction.',
            },
            {
              id: 'bd-p-3-3',
              title: 'Competitive Battle Card',
              task: 'Create a battle card for a specific competitor',
              prompt: `Create a competitive battle card for internal use:

Our company: [name] - [what we do]
Competitor: [competitor name] - [what they do]
Where we compete: [deals, partnerships, market segments]

Build a battle card with:

Overview:
- Competitor snapshot (what they do, size, funding, key customers)
- Their positioning statement vs. ours

Head-to-head comparison:
- Feature/capability comparison table (ours vs. theirs)
- Pricing comparison (if available)
- Target customer comparison

When we WIN against them:
- Top 3 reasons customers choose us over them
- Proof points and customer quotes to reference
- The one thing we do that they can't match

When we LOSE to them:
- Top 3 reasons customers choose them over us
- How to counter each advantage
- When to walk away (deals where they're a better fit)

Objection handling:
- "Why not go with [competitor]?" - 3 responses
- "[Competitor] is cheaper" - response with value framing
- "[Competitor] has [feature we lack]" - honest response with workaround

Landmines to set:
- 3 questions to ask prospects that expose competitor weaknesses
- Topics that shift the conversation to our strengths

Keep it to 2 pages. This needs to be scannable before a meeting.`,
              result:
                'A practical battle card your team can use to win competitive deals.',
              tip: 'Update this after every win and loss. Real competitive intelligence comes from deal experience, not just research.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Pitch Decks',
          prompts: [
            {
              id: 'bd-p-4-1',
              title: 'Partnership Pitch Narrative',
              task: 'Structure a compelling pitch narrative for a partnership meeting',
              prompt: `Structure a partnership pitch deck narrative:

My company: [name] - [what we do]
Our strengths: [key capabilities, audience, scale]
Target partner: [company name] - [what they do]
Partnership goal: [what we want to build together]
Meeting audience: [roles of people in the room]
Meeting goal: [what outcome you want from this meeting]

Build a pitch narrative with:

1. Opening hook: A market insight or customer pain point that both companies care about
2. The opportunity: Size the opportunity with data - what's at stake
3. Why now: What's changed in the market that makes this partnership timely
4. Our company: Quick credibility (3 slides max - what we do, traction, relevant capabilities)
5. The partnership vision: What we'd build or do together - be specific
6. Customer impact: How end customers benefit (with example scenario)
7. Business model: How both sides make money
8. Proof of concept: A proposed pilot or first step (low risk, fast results)
9. Why us: 3 reasons we're the right partner (not just any company in our space)
10. The ask: Clear next step

For each section:
- The key message (one sentence)
- Supporting points (2-3 bullets)
- Suggested visual or data to include
- Transition to the next section

The narrative should answer: "Why should [partner] care about this, and why should they do it with us?"`,
              result:
                'A complete pitch narrative with story arc, key messages, and slide-by-slide guidance.',
              tip: 'Open with their problem, not your solution. The first 3 minutes determine whether they lean in or check out.',
            },
            {
              id: 'bd-p-4-2',
              title: 'Board Presentation Outline',
              task: 'Create a biz dev update for the board or leadership',
              prompt: `Create a business development board presentation outline:

Reporting period: [quarter/year]
Company: [name]

Biz dev results this period:
- New partnerships closed: [list with deal value/impact]
- Pipeline: [number of active partnership discussions]
- Revenue from partnerships: [if applicable]
- Key milestones: [integration launches, pilot results, etc.]

Strategic context:
- Market trends affecting our partnership strategy: [list]
- Competitive partnership moves: [what competitors did]
- Changes to our strategic priorities: [if any]

Build a presentation outline:
1. Executive summary slide (3-4 bullet points covering the whole story)
2. Key wins this period (with specific outcomes and metrics)
3. Pipeline overview (deals in progress, expected close dates, strategic value)
4. Competitive landscape update (what's changed, what we need to watch)
5. Market opportunity update (new opportunities identified, sizing)
6. Strategy status (are we on track with our annual biz dev plan?)
7. Challenges and risks (what's not working and what we're doing about it)
8. Priorities for next period (top 3 with expected outcomes)
9. Resource needs (any asks from the board)

For each slide: key message, supporting data points, and what question from the board to prepare for.`,
              result:
                'A boardroom-ready biz dev presentation outline with executive-level framing.',
              tip: 'Lead with outcomes (revenue, strategic value), not activity (meetings held, emails sent). Boards care about results.',
            },
            {
              id: 'bd-p-4-3',
              title: 'Custom Pitch Deck Content',
              task: 'Generate tailored pitch deck content for a specific partner',
              prompt: `Generate customized pitch deck content for this specific partner meeting:

My company: [name and what we do]
Partner: [company name and what they do]
What I know about them:
- Their recent focus: [new products, market expansion, challenges]
- Their audience: [who they serve]
- Their stated priorities: [from public statements, earnings calls, or conversations]
- Decision-makers in the meeting: [names and roles]

Our partnership idea: [specific proposal]

Generate content for each slide:

Slide 1 - Title: Partnership concept name and both logos
Slide 2 - The Hook: One stat or insight that frames the opportunity
Slide 3 - Market Context: The trend driving this opportunity (with data)
Slide 4 - The Gap: What customers need that neither company fully delivers alone
Slide 5 - The Vision: What the partnership looks like to the end customer
Slide 6 - Our Capabilities: What we bring (tailored to what they care about)
Slide 7 - Their Capabilities: What they bring (acknowledge their strengths)
Slide 8 - Combined Value: 1+1=3 - what's possible together that isn't alone
Slide 9 - Business Model: Revenue split, pricing, or commercial terms framework
Slide 10 - Pilot Proposal: A 90-day proof of concept with clear success metrics
Slide 11 - Timeline: Key milestones from today to launch
Slide 12 - The Ask: Exactly what you want them to agree to today

For each slide: exact text, bullet points, and speaker notes.`,
              result:
                'Complete slide content ready to paste into Gamma or your presentation tool.',
              tip: 'Spend 70% of prep time on slides 2-5 (the hook and problem). If they don\'t buy the problem, the solution doesn\'t matter.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Deal Analysis',
          prompts: [
            {
              id: 'bd-p-5-1',
              title: 'Deal Memo Generator',
              task: 'Write a deal memo for a partnership opportunity',
              prompt: `Write a deal memo for this partnership opportunity:

Partner: [company name]
Partnership type: [integration / co-sell / distribution / joint venture / licensing / other]
Deal champion: [your name]
Date: [today's date]

Deal overview:
- What the partnership involves: [describe the arrangement]
- Strategic rationale: [why this matters for our company]
- Financial terms: [revenue share, licensing fee, or commercial structure]
- Exclusivity: [exclusive / non-exclusive / exclusive for a period]
- Duration: [proposed term length]

Generate a deal memo with:
1. Executive summary (5 sentences max)
2. Partner overview (what they do, size, reputation, strategic fit)
3. Strategic rationale (why this deal, why now, why this partner)
4. Financial analysis
   - Expected revenue impact (year 1, year 2, year 3)
   - Costs and resource requirements
   - Break-even timeline
   - Comparison to alternative options (build vs. buy vs. partner)
5. Risk assessment
   - Top 3 risks and mitigation strategies
   - Dependencies (what has to go right)
   - Downside scenario (what if it doesn't work)
6. Competitive impact (how this affects our competitive position)
7. Resource requirements (people, technology, budget)
8. Recommendation: Proceed / Proceed with conditions / Pass
9. Next steps with timeline

Write this for a leadership audience. Balanced, data-informed, and clear on the recommendation.`,
              result:
                'A comprehensive deal memo ready for leadership review and approval.',
              tip: 'Include the "pass" scenario analysis. Showing you considered walking away makes the "proceed" recommendation more credible.',
            },
            {
              id: 'bd-p-5-2',
              title: 'Partnership Financial Model',
              task: 'Build a financial model for a partnership deal',
              prompt: `Build a financial analysis for this partnership deal:

Partnership: [company name] - [type of deal]
Our expected investment:
- Upfront costs: [development, legal, onboarding - estimate]
- Ongoing costs: [monthly/annual - team, tools, support]

Revenue model:
- Revenue type: [revenue share / referral fee / licensing / co-sell]
- Expected deal flow: [how many deals/customers per month, with ramp]
- Average deal value: [per transaction or per customer]
- Our share: [percentage or fixed amount]

Generate:
1. Monthly forecast for Year 1 (month by month)
   - Revenue, costs, and net contribution
   - Cumulative revenue and break-even point

2. Annual forecast for Years 1-3
   - Conservative scenario (50% of expected deal flow)
   - Base scenario (expected deal flow)
   - Optimistic scenario (150% of expected deal flow)

3. Key metrics:
   - Break-even point (months)
   - Year 1 ROI
   - 3-year NPV at 10% discount rate
   - Payback period

4. Sensitivity analysis:
   - If deal flow is 50% lower, what happens?
   - If average deal value drops 30%, what happens?
   - What's the minimum deal flow to justify the investment?

5. Comparison: partnership ROI vs. building in-house vs. doing nothing

Present this as a clear table with totals. Conservative assumptions throughout.`,
              result:
                'A financial model that justifies (or challenges) the partnership investment.',
              tip: 'Use conservative numbers in your base case. It is easier to argue for a deal that pencils out even with cautious assumptions.',
            },
            {
              id: 'bd-p-5-3',
              title: 'Deal Negotiation Prep',
              task: 'Prepare for a partnership negotiation',
              prompt: `Prepare me for a partnership negotiation:

Deal: [describe the partnership]
Partner: [company name]
Their size relative to ours: [larger / similar / smaller]
Who's at the table: [their team's roles and our team's roles]
Stage of negotiation: [initial terms / back-and-forth / final terms]

Our priorities (rank 1-5):
- [Priority 1 - e.g., revenue share percentage]
- [Priority 2 - e.g., exclusivity terms]
- [Priority 3 - e.g., launch timeline]
- [Priority 4 - e.g., data sharing]
- [Priority 5 - e.g., contract duration]

Generate:
1. Our ideal terms (what we want)
2. Our walk-away terms (minimum we'd accept)
3. Their likely priorities (what they probably care about most)
4. BATNA analysis (our best alternative to this deal)
5. 5 concessions we can offer that cost us little but matter to them
6. 5 things to ask for that cost them little but matter to us
7. Potential deal-breakers to watch for
8. Anchoring strategy: what number or term to put on the table first
9. If they say X, we respond with Y (5 scenario-response pairs)
10. The one thing we absolutely should not concede and why

Frame this as a prep document I can review 30 minutes before the meeting.`,
              result:
                'A negotiation playbook that gives you confidence and clarity walking into the room.',
              tip: 'Know your walk-away point before you enter the room. The person most willing to leave has the most leverage.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Strategic Planning',
          prompts: [
            {
              id: 'bd-p-6-1',
              title: 'Annual Biz Dev Strategy',
              task: 'Build an annual business development strategy',
              prompt: `Build an annual business development strategy for [year]:

Company: [name] - [what we do]
Current stage: [startup / growth / enterprise]
Annual revenue: [range]
Existing partnerships: [list key current partnerships]
Biz dev team size: [number of people]
Company strategic priorities: [list top 3 company goals]

Generate a comprehensive biz dev strategy:

1. Market landscape assessment
   - Key market trends affecting partnership opportunities
   - Competitive partnership landscape (who's doing what)

2. Partnership categories to pursue (ranked by priority):
   - Technology partnerships (integrations)
   - Channel partnerships (distribution, resellers)
   - Strategic partnerships (co-development, joint GTM)
   - Content/marketing partnerships (co-marketing, events)

3. For each category:
   - Goal (what success looks like)
   - Target partner profile (ideal partner characteristics)
   - Top 5 target partners (specific company names)
   - Expected revenue or strategic impact
   - Resources required

4. Quarterly milestones:
   - Q1: [focus and targets]
   - Q2: [focus and targets]
   - Q3: [focus and targets]
   - Q4: [focus and targets]

5. KPIs and metrics to track monthly
6. Budget requirements
7. Risk factors and contingency plans

This should fit in a 10-page strategy doc. Actionable, not theoretical.`,
              result:
                'A complete annual strategy document that aligns biz dev with company goals.',
              tip: 'Review and adjust quarterly. The best strategies are living documents, not annual PDFs.',
            },
            {
              id: 'bd-p-6-2',
              title: 'Opportunity Prioritization Framework',
              task: 'Score and rank partnership opportunities',
              prompt: `Build a prioritization framework for these partnership opportunities:

Our strategic priorities: [list top 3]
Available resources: [team size, budget range]
Time horizon: [when we need results by]

Opportunity 1: [Partner name] - [deal type] - [brief description]
Opportunity 2: [Partner name] - [deal type] - [brief description]
Opportunity 3: [Partner name] - [deal type] - [brief description]
Opportunity 4: [Partner name] - [deal type] - [brief description]
Opportunity 5: [Partner name] - [deal type] - [brief description]

Score each opportunity on these criteria (1-10 scale):
1. Strategic alignment (does it support our top priorities?)
2. Revenue potential (expected financial impact in 12 months)
3. Speed to value (how quickly can we see results?)
4. Resource requirements (how much effort does it need?)
5. Partner readiness (how willing and able is the partner?)
6. Competitive advantage (does this strengthen our position?)
7. Risk level (what could go wrong?)

For each opportunity:
- Total weighted score
- Top reason to pursue
- Top reason to pass
- Recommended timeline
- Resource estimate

Then rank all opportunities and recommend: which to pursue now, which to defer, and which to pass on. Explain the reasoning.`,
              result:
                'A scored ranking of opportunities with clear recommendations on where to focus.',
              tip: 'Share this with your team and manager. Aligned prioritization prevents the "everything is a priority" trap.',
            },
            {
              id: 'bd-p-6-3',
              title: 'Strategic Partnership Roadmap',
              task: 'Map out the long-term vision for a key partnership',
              prompt: `Build a 12-month strategic roadmap for this partnership:

Our company: [name and what we do]
Partner: [name and what they do]
Partnership status: [new / early stage / established]
Current scope: [what we do together today, if anything]
Ultimate vision: [what this partnership could become in 2-3 years]

Build a phased roadmap:

Phase 1 - Foundation (Months 1-3):
- Objectives and quick wins
- Integration or setup requirements
- Team alignment and governance
- Success metrics for this phase

Phase 2 - Growth (Months 4-6):
- Expanded scope and new use cases
- Joint marketing or GTM activities
- Performance benchmarks to hit
- Decision point: expand or adjust?

Phase 3 - Scale (Months 7-9):
- Full partnership execution
- Revenue targets and milestones
- New market or segment expansion
- Resource scaling plan

Phase 4 - Optimize (Months 10-12):
- Partnership review and renewal discussion
- Next-year planning
- Innovation opportunities (what's next?)
- Long-term strategic alignment check

For each phase:
- Key deliverables (who does what)
- Resources needed from both sides
- Risk factors and mitigation
- Review cadence and governance

Include a quarterly business review (QBR) template outline for tracking progress.`,
              result:
                'A structured partnership roadmap both teams can align on and execute against.',
              tip: 'Share this with the partner early. Joint ownership of the roadmap creates shared accountability.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here\'s the math on what AI saves you in a typical biz dev month.',
      timeTable: [
        {
          task: 'Market research and analysis',
          without: '2-3 days/project',
          withAI: '2-3 hours',
          saved: '12+ hrs',
        },
        {
          task: 'Partner outreach and follow-ups',
          without: '45-60 min/partner',
          withAI: '10 minutes',
          saved: '8 hrs/month',
        },
        {
          task: 'Competitive intelligence',
          without: '1-2 days/quarter',
          withAI: '30 min/month',
          saved: '10+ hrs/quarter',
        },
        {
          task: 'Pitch deck creation',
          without: '4-8 hours/deck',
          withAI: '45-60 minutes',
          saved: '5 hrs/deck',
        },
        {
          task: 'Deal analysis and memos',
          without: '3-5 days/deal',
          withAI: '2-3 hours',
          saved: '20+ hrs/deal',
        },
        {
          task: 'Strategic planning docs',
          without: '2-4 weeks',
          withAI: '3-5 days',
          saved: '5-15 days',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '30-50 hrs/month',
      },
      sections: [
        {
          heading: 'The Biz Dev Edge',
          paragraphs: [
            'In 2026, the biz dev professional using AI evaluates 5 market opportunities in the time it takes the other to research 1. One shows up to partnership meetings with a tailored pitch, financial model, and competitive brief. The other shows up with a recycled deck and good intentions. The difference compounds with every deal.',
            'Same network. Same instincts. Radically different preparation.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t get into business development to spend days building spreadsheets and rewriting pitch decks. You got into it because you see connections others miss and you build relationships that create value. AI gives you back the time to do the strategic, relationship-driven work that actually closes partnerships.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Market research is the fastest win. You will feel the difference after your first AI-powered opportunity assessment.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI will be part of your biz dev process. Follow along and check each step.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'bd-1-1', label: 'Create a free ChatGPT account (or log in)' },
            { id: 'bd-1-2', label: 'Create a free Perplexity account' },
            { id: 'bd-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Research a Market Opportunity',
          duration: '20 min',
          items: [
            {
              id: 'bd-2-1',
              label: 'Run the Market Opportunity Assessment for a real target market',
            },
            {
              id: 'bd-2-2',
              label: 'Use the Industry Trend Scanner for your focus area',
            },
            {
              id: 'bd-2-3',
              label: 'Compare: how long would this research have taken manually?',
            },
          ],
        },
        {
          day: 3,
          title: 'Build a Competitive Brief',
          duration: '20 min',
          items: [
            {
              id: 'bd-3-1',
              label: 'Run the Competitive Landscape Brief for your top 3-4 competitors',
            },
            {
              id: 'bd-3-2',
              label: 'Create a battle card for your biggest competitor',
            },
          ],
        },
        {
          day: 4,
          title: 'Reach Out to a Partner',
          duration: '20 min',
          items: [
            {
              id: 'bd-4-1',
              label: 'Pick a real partnership prospect from your pipeline',
            },
            {
              id: 'bd-4-2',
              label: 'Run the Partnership Proposal Email prompt',
            },
            {
              id: 'bd-4-3',
              label: 'Build a follow-up sequence and queue it up',
            },
          ],
        },
        {
          day: 5,
          title: 'Build a Pitch Deck',
          duration: '25 min',
          items: [
            {
              id: 'bd-5-1',
              label: 'Run the Partnership Pitch Narrative prompt for a real opportunity',
            },
            {
              id: 'bd-5-2',
              label: 'Generate Custom Pitch Deck Content for the slides',
            },
            {
              id: 'bd-5-3',
              label: 'Build the deck in Gamma or your presentation tool',
            },
          ],
        },
        {
          day: 6,
          title: 'Analyze a Deal',
          duration: '25 min',
          items: [
            {
              id: 'bd-6-1',
              label: 'Run the Deal Memo Generator for an active opportunity',
            },
            {
              id: 'bd-6-2',
              label: 'Build a financial model with the Partnership Financial Model prompt',
            },
            {
              id: 'bd-6-3',
              label: 'Use the Opportunity Prioritization Framework to rank your pipeline',
            },
          ],
        },
        {
          day: 7,
          title: 'Plan Strategically',
          duration: '20 min',
          items: [
            {
              id: 'bd-7-1',
              label: 'Start your annual biz dev strategy outline with AI',
            },
            {
              id: 'bd-7-2',
              label: 'Build a strategic roadmap for your most important partnership',
            },
            {
              id: 'bd-7-3',
              label: 'Identify which AI system saved you the most time this week',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
