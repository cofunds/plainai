import type { WorkbookData } from './types'

export const productmanagersData = {
  professionId: 'productmanagers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Product Managers',
  heroDescription:
    'Ship better products faster. Real tools, proven systems, and copy-paste prompts for PRDs, user stories, competitive analysis, roadmap communication, feature prioritization, and customer feedback synthesis.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your day starts with a Slack message from engineering asking for clarification on a requirement you thought was crystal clear. The PRD you wrote last week has three open questions that nobody answered. There is a feature request from the biggest customer that sales escalated as "urgent" - again. The competitive landscape shifted because a rival launched something last night and the CEO wants your take by lunch.',
        'You have a roadmap review with the executive team on Thursday. The roadmap deck is two sprints out of date. The data from the last user research round is sitting in a spreadsheet that you have not had time to synthesize. There are 47 feature requests in the backlog that need to be prioritized, but you have not built a proper scoring framework because building a scoring framework takes time you do not have because you are too busy triaging feature requests.',
        'You got into product management because you love the intersection of user problems, business outcomes, and technology possibilities. You are the person who translates between engineers, designers, executives, and customers. But instead of spending your time on strategy, discovery, and decision-making, you are drowning in documentation, slide decks, and stakeholder alignment meetings that consume your week.',
      ],
      highlight:
        'What if the writing, analysis, and formatting work that eats your days could be compressed into minutes?',
      closingParagraph:
        'Not by skipping the work that matters. Not by shipping half-baked specs. Just by using AI to turn your product thinking into polished documents, frameworks, and analyses - at the speed your role actually demands.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to tell you what to build. It will not feel the user\'s pain, sense when a feature is being over-engineered, or know when to push back on a stakeholder who wants the wrong thing. It cannot replace the product intuition you have built from thousands of customer conversations, launches, and failures. The craft of product management - the judgment, the taste, the strategic thinking - that is all you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most capable product analyst you have ever worked with. One who can draft a PRD from your rough notes in 3 minutes. Who can generate 20 user stories with acceptance criteria while you finish your coffee. Who can tear down a competitor\'s product and give you a structured analysis before your next meeting.',
            'Need to turn 200 customer feedback entries into actionable themes? AI does it in 5 minutes instead of 2 days. Need to build a RICE scoring model for your backlog? AI creates the framework and scores the first batch. Need to write a roadmap narrative that explains the "why" behind every initiative? Feed it your priorities and get a compelling story back.',
            'You bring the product vision, the user empathy, and the strategic judgment. AI brings the writing speed, the analytical horsepower, and the ability to produce in minutes what used to take hours. Together, you operate like a PM with a full product ops team behind you.',
          ],
        },
      ],
      keyInsight:
        'Your product instinct + AI\'s execution speed = better specs, sharper analysis, and more time for the discovery and strategic work that actually drives outcomes. The PM who ships polished PRDs in 30 minutes has time to talk to customers.',
    },

    ch3: {
      intro: 'Five tools that cover the full product management workflow. Start with two, add the rest when you are ready.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and analysis workhorse',
          description:
            'PRDs, user stories, stakeholder emails, roadmap narratives, feature specs - any text-heavy product task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your deep analysis and reasoning partner',
          description:
            'Complex competitive analysis, detailed specs, strategic documents, long-form PRDs, nuanced trade-off evaluations - excels at depth and structured thinking',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for deep work',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your market intelligence engine',
          description:
            'Competitive research, market trends, industry data, technology evaluations - sourced answers you can reference in your analysis',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your product knowledge base',
          description:
            'Product specs, decision logs, roadmap documents, user research repositories, sprint tracking - your single source of truth with AI built in',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your presentation builder',
          description:
            'Roadmap presentations, stakeholder decks, product vision slides, launch announcements - professional visuals without a designer',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Visualize your roadmap',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That combination covers PRDs, competitive analysis, and stakeholder communication. Add Notion AI for organization and Canva for presentations when ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual product management workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'PRD and Spec Writing',
          before:
            'Writing a PRD takes half a day. You stare at a blank document, try to structure your thinking, go back and forth between user stories and requirements, realize the edge cases are not covered, and by the time engineering sees it, there are still gaps that surface during the first sprint.',
          after:
            'You feed AI your rough product thinking - even messy bullet points - and get a structured PRD draft in 5 minutes. Background, goals, user stories, requirements, edge cases, success metrics, and open questions. Your job shifts from writing to reviewing and refining.',
          flow: [
            'Brain dump your product thinking - problem, solution, audience',
            'AI generates a structured PRD with all standard sections',
            'Review and add your specific context and edge cases',
            'Ask AI to stress-test the spec for gaps and ambiguities',
            'Share with engineering for feedback and iterate',
          ],
          timeSaved: { without: '4-6 hours per PRD', withAI: '45 min-1 hour' },
        },
        {
          id: 2,
          name: 'User Story Creation',
          before:
            'Writing user stories is tedious but critical. You write 5-10, realize the acceptance criteria are inconsistent, go back and rewrite them, then discover during sprint planning that you missed stories for key flows. The backlog ends up with stories at different quality levels.',
          after:
            'Describe a feature and AI generates a complete set of user stories - with consistent acceptance criteria, edge cases considered, and dependencies flagged. What used to take an afternoon now takes 20 minutes.',
          flow: [
            'Describe the feature or epic at a high level',
            'AI generates user stories with acceptance criteria',
            'Review for completeness and add domain-specific details',
            'AI identifies missing stories and edge case scenarios',
            'Organize into your backlog with priority tags',
          ],
          timeSaved: { without: '2-3 hours per feature', withAI: '20-30 minutes' },
        },
        {
          id: 3,
          name: 'Competitive Analysis',
          before:
            'Competitive analysis means spending days scrolling through competitor websites, testing their products, reading their blog posts, checking review sites, and trying to organize it all into something useful. By the time you finish, the analysis is already getting stale.',
          after:
            'AI delivers a structured competitor teardown in minutes - positioning, pricing, feature comparison, strengths, weaknesses, and opportunity gaps. You go deeper on the parts that matter most instead of spending days on surface-level research.',
          flow: [
            'Identify competitors and what you want to analyze',
            'AI generates a structured competitive breakdown',
            'Use Perplexity for source-backed data and recent moves',
            'Review and add your firsthand product knowledge',
            'Export into a competitive intelligence doc for the team',
          ],
          timeSaved: { without: '1-2 days per analysis', withAI: '1-2 hours' },
        },
        {
          id: 4,
          name: 'Roadmap Communication',
          before:
            'The roadmap exists as a list of features in a tool, but explaining the "why" behind it to executives, customers, and the team requires different narratives. You spend hours crafting different versions of the roadmap story for different audiences. The deck is never up to date.',
          after:
            'AI takes your roadmap priorities and generates narrative explanations tailored to each audience. Strategic framing for the board, technical context for engineering, value propositions for customers. One set of inputs, multiple polished outputs.',
          flow: [
            'Input your roadmap initiatives with goals and timelines',
            'Specify the audience for each version needed',
            'AI generates tailored roadmap narratives',
            'Review each for tone, accuracy, and strategic framing',
            'Use for presentations, emails, and team alignment',
          ],
          timeSaved: { without: '3-5 hours/quarter', withAI: '30-45 minutes' },
        },
        {
          id: 5,
          name: 'Feature Prioritization Frameworks',
          before:
            'Prioritization is either gut-feel or a spreadsheet scoring exercise that takes forever to set up and nobody trusts. Stakeholders lobby for their features, engineers question the logic, and the prioritization meeting devolves into a negotiation rather than a data-informed discussion.',
          after:
            'AI builds prioritization frameworks - RICE, ICE, value vs effort, weighted scoring - and scores your features based on the data you provide. Prioritization becomes transparent, defensible, and fast.',
          flow: [
            'Choose a prioritization framework or let AI recommend one',
            'Input your features with available data for each',
            'AI scores and ranks features with reasoning',
            'Review the rankings and adjust based on strategic context',
            'Present the prioritized list with clear rationale',
          ],
          timeSaved: { without: '3-4 hours per cycle', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Customer Feedback Synthesis',
          before:
            'Customer feedback lives everywhere - support tickets, NPS surveys, sales call notes, user interviews, app reviews, social media. Synthesizing it means reading hundreds of data points and trying to spot patterns manually. Most PMs have a "feedback backlog" they never get through.',
          after:
            'Paste in raw feedback from any source and AI identifies themes, sentiment patterns, feature requests, pain points, and actionable insights. What used to take days of reading becomes a 15-minute analysis.',
          flow: [
            'Collect feedback from all sources into one document',
            'Paste into AI with context about your product and audience',
            'AI categorizes feedback into themes and sentiment',
            'Review themes and extract product implications',
            'Feed insights into roadmap planning and prioritization',
          ],
          timeSaved: { without: '1-2 days per analysis', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - PRD and Spec Writing',
          prompts: [
            {
              id: 'pd-p-1-1',
              title: 'Full PRD Generator',
              task: 'Generate a complete PRD from rough product thinking',
              prompt: `Generate a complete PRD based on the following product thinking.

Product/Feature: [name]
Problem: [what user problem does this solve?]
Target user: [who is this for?]
Context: [any relevant background - why now, what triggered this]

My rough thinking:
[Paste your notes, bullet points, or brain dump about what this should be and do]

Generate a PRD with these sections:

1. Background and Context
- Problem statement (user\'s perspective)
- Business context (why this matters to the company)
- Current state (how users solve this today)

2. Goals and Success Metrics
- Primary goal
- Secondary goals
- Success metrics with specific targets (how we measure if this worked)
- Anti-goals (what this is explicitly NOT trying to do)

3. User Stories
- 5-8 core user stories in "As a [user], I want to [action], so that [benefit]" format
- Acceptance criteria for each

4. Requirements
- Must-have (P0) requirements
- Should-have (P1) requirements
- Nice-to-have (P2) requirements
- Out of scope (explicitly listed)

5. Edge Cases and Error States
- 5-7 edge cases with expected behavior
- Error states and fallback behavior

6. Dependencies and Risks
- Technical dependencies
- Cross-team dependencies
- Key risks and mitigation approaches

7. Open Questions
- 5-7 questions that need answers before or during development
- Who should answer each question

8. Timeline Considerations
- Suggested phasing if applicable
- MVP vs full vision distinction

Keep language clear and specific. Engineers should be able to build from this without guessing your intent.`,
              result:
                'A comprehensive PRD draft that covers all the sections engineering expects.',
              tip: 'The messier your input, the more you should review the output. AI will fill gaps with reasonable assumptions - make sure those match your intent.',
            },
            {
              id: 'pd-p-1-2',
              title: 'PRD Stress Test',
              task: 'Review a PRD for gaps, ambiguities, and missing requirements',
              prompt: `Review this PRD for gaps, ambiguities, and missing requirements.

[Paste your PRD here]

Act as a senior engineer and a critical product reviewer. Analyze this PRD and provide:

1. Ambiguity Check
- List every statement that could be interpreted in more than one way
- For each: what the ambiguity is and a suggestion for making it specific

2. Missing Requirements
- What scenarios are not covered?
- What happens at the boundaries (limits, empty states, first-time use)?
- What about permissions, accessibility, localization?

3. Technical Feasibility Questions
- What would an engineer flag as unclear or potentially expensive?
- Are there technical constraints not mentioned?
- Integration points that need definition

4. Edge Cases Not Addressed
- 5-8 edge cases the spec does not cover
- Expected behavior recommendation for each

5. Success Metric Gaps
- Can the proposed metrics actually be measured?
- Are there better or additional metrics to consider?
- What is the baseline for comparison?

6. Stakeholder Gaps
- What would sales ask about this?
- What would customer support need to know?
- What would legal or compliance flag?

7. Overall Assessment
- Readiness score (1-10) for engineering handoff
- Top 3 items to address before sharing with the team
- Suggested priority order for resolving issues

Be direct and specific. Vague feedback like "needs more detail" is not helpful.`,
              result:
                'A thorough review that catches the issues before engineering does.',
              tip: 'Run this on every PRD before sharing it. It is much better to find gaps yourself than to discover them in sprint planning.',
            },
            {
              id: 'pd-p-1-3',
              title: 'Technical Spec Companion',
              task: 'Generate a technical context document to accompany a PRD',
              prompt: `Generate a technical context document to accompany this PRD.

PRD summary: [paste the key sections or a brief summary of the feature]
Tech stack: [your main technologies]
Architecture: [monolith, microservices, serverless, etc.]
Key systems involved: [which services or databases are touched]

Generate a technical context document with:

1. System Impact Analysis
- Which systems and services are affected?
- What data models need to change?
- What APIs need to be created or modified?
- What third-party integrations are involved?

2. Technical Requirements
- Performance expectations (load, latency, throughput)
- Security considerations
- Data privacy implications
- Backward compatibility requirements

3. Suggested Technical Approach
- High-level architecture for this feature
- Data flow description
- Key technical decisions that need to be made
- Trade-offs to consider (speed vs quality, build vs buy)

4. Testing Strategy
- Types of testing needed (unit, integration, e2e, performance)
- Key test scenarios
- Acceptance criteria from a technical perspective

5. Migration and Rollout
- Feature flag strategy
- Rollout phases
- Rollback plan
- Data migration needs (if any)

6. Open Technical Questions
- Questions for the engineering team
- Spike or investigation work needed before estimation

This is a starting point for engineering, not a final technical design. Keep it at a level that facilitates discussion, not prescribes implementation.`,
              result:
                'A technical companion document that helps engineering engage with the PRD faster.',
              tip: 'Even if you are not technical, this gives engineers a starting point for their design discussion. It shows you have thought about the engineering side.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - User Story Creation',
          prompts: [
            {
              id: 'pd-p-2-1',
              title: 'User Story Batch Generator',
              task: 'Generate a complete set of user stories for a feature',
              prompt: `Generate a complete set of user stories for this feature.

Feature: [name and brief description]
Target users: [primary and secondary users]
Core user flow: [describe the main happy path]

Context:
[Any relevant context - what exists today, what is changing, constraints]

Generate:

1. Epic Description
- Epic title
- Epic goal (one sentence)
- User persona(s) involved

2. Core User Stories (8-12 stories covering the main flow)
For each story:
- Title
- User story: "As a [user type], I want to [action], so that [benefit]"
- Acceptance criteria (3-5 specific, testable criteria using Given/When/Then format)
- Story size estimate: S / M / L
- Dependencies (other stories this depends on)

3. Edge Case Stories (3-5 stories)
- Error handling scenarios
- Empty states and first-time experiences
- Boundary conditions

4. Non-Functional Stories (2-3 stories)
- Performance requirements
- Accessibility requirements
- Analytics and tracking

5. Story Map
- Organize all stories by user journey phase
- Mark which stories are MVP vs future
- Identify the critical path (minimum stories needed for a usable feature)

6. Missing Coverage Check
- Flows or scenarios not yet covered by a story
- Questions to resolve before stories are complete

Use consistent formatting. Each acceptance criterion should be specific enough that QA can write a test for it.`,
              result:
                'A complete, well-structured story set ready for sprint planning.',
              tip: 'Share the generated stories with one engineer before the planning meeting. Their early feedback helps catch technical gaps.',
            },
            {
              id: 'pd-p-2-2',
              title: 'Acceptance Criteria Refiner',
              task: 'Improve acceptance criteria for existing user stories',
              prompt: `Improve the acceptance criteria for these user stories.

[Paste your existing user stories with their current acceptance criteria]

For each story:

1. Review Current Criteria
- Are they specific and testable?
- Do they cover happy path, error cases, and edge cases?
- Are they written from the user's perspective?

2. Rewrite Criteria Using Given/When/Then Format
- Given [precondition]
- When [action]
- Then [expected result]

3. Add Missing Criteria
- What edge cases are not covered?
- What about empty states, loading states, error states?
- What about different user permissions or roles?
- What about data validation and limits?

4. Add Non-Functional Criteria
- Performance: response time expectations
- Accessibility: keyboard navigation, screen reader compatibility
- Browser/device requirements
- Analytics events to track

5. Flag Ambiguities
- Point out any criteria that could be interpreted differently
- Suggest specific wording to remove ambiguity

6. Testability Check
- For each criterion: could a QA engineer write an automated test from this?
- If not, what needs to change?

Output the refined stories with improved acceptance criteria. Highlight what changed and why.`,
              result:
                'Polished acceptance criteria that prevent the "that is not what I meant" conversation during QA.',
              tip: 'Good acceptance criteria are the single biggest predictor of smooth sprint execution. This prompt pays for itself many times over.',
            },
            {
              id: 'pd-p-2-3',
              title: 'Story Splitting Assistant',
              task: 'Split a large user story into smaller, deliverable pieces',
              prompt: `Help me split this large user story into smaller, independently deliverable stories.

Large story: [paste the story with description and acceptance criteria]
Current estimate: [story points or T-shirt size]
Sprint capacity context: [how much your team can typically deliver]

Split the story using these principles:
- Each split story should be independently deliverable (it provides value on its own)
- Each should be testable on its own
- Avoid technical splits (don't split into "build backend" / "build frontend")
- Prefer workflow-based splits (different user scenarios)

Generate:

1. Recommended Split
- Split story A: [user story format with acceptance criteria]
  - Estimate: [relative size]
  - Delivers: [what value does this provide on its own?]
- Split story B: [same format]
- Split story C: [same format]
[Continue as needed]

2. Splitting Strategy Used
- Explain which splitting pattern was used (by workflow, by data variation, by operation, by interface, etc.)
- Why this split was chosen over alternatives

3. Dependency Order
- Which split stories can be done in parallel?
- Which must be done in sequence?
- Recommended sprint allocation

4. Completeness Check
- Do the split stories combined cover everything in the original?
- Is anything lost or added in the split?
- Acceptance criteria mapping from original to splits

5. Alternative Splits
- One alternative splitting approach
- Pros and cons vs the recommended approach

The goal is stories small enough to complete in 1-3 days each while still being independently meaningful.`,
              result:
                'A large story broken into sprint-sized pieces without losing coherence.',
              tip: 'If a story cannot be split into pieces that each deliver value, it might be that the feature is genuinely atomic - and that is fine.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Competitive Analysis',
          prompts: [
            {
              id: 'pd-p-3-1',
              title: 'Competitor Teardown',
              task: 'Run a deep competitive teardown on a specific competitor',
              prompt: `Run a deep competitive teardown on [competitor name].

My product: [your product and what it does]
Competitor: [their product and what it does]
Our overlap: [where we compete directly]

Analyze:

1. Positioning and Messaging
- How do they describe themselves? (tagline, hero copy, about page)
- Who are they targeting? (personas, company sizes, industries)
- What is their core value proposition?
- How does their positioning differ from ours?

2. Product Analysis
- Core features and capabilities
- Unique features we do not have
- Features we have that they do not
- UX and design approach (from what is publicly visible)
- Platform/integration ecosystem

3. Pricing and Business Model
- Pricing tiers and structure
- Free tier or trial offering
- How pricing compares to ours
- Any pricing trends (have they changed recently?)

4. Go-to-Market Strategy
- Primary acquisition channels (visible from outside)
- Content strategy (blog, social, community)
- Partnership and integration strategy
- Recent launches or announcements

5. Strengths (Top 5)
- What they do well that we should respect

6. Weaknesses (Top 5)
- Where they fall short or underinvest

7. Opportunities for Us
- 3-5 specific gaps or weaknesses we could exploit
- Features or positioning moves that would differentiate us
- Underserved segments they are ignoring

8. Threat Assessment
- What they could do next that would hurt us most
- How to prepare for that

Keep the analysis factual and specific. Link to evidence where possible.`,
              result:
                'A thorough competitive teardown that drives strategic product decisions.',
              tip: 'Run this in Perplexity first for sourced data, then use Claude or ChatGPT to synthesize the strategic implications.',
            },
            {
              id: 'pd-p-3-2',
              title: 'Competitive Landscape Map',
              task: 'Map the competitive landscape across multiple competitors',
              prompt: `Map the competitive landscape for my product category.

My product: [name and description]
Category: [product category]
Competitors to include:
- [Competitor 1]
- [Competitor 2]
- [Competitor 3]
- [Competitor 4]
- [Competitor 5] (add more if needed)

Generate:

1. Market Position Map (described as a 2x2 matrix)
- Axis 1: [suggest an appropriate axis - e.g., enterprise vs SMB]
- Axis 2: [suggest an appropriate axis - e.g., breadth vs depth]
- Place each competitor and us on the map with brief rationale

2. Feature Comparison Matrix (table format)
- Rows: 15-20 key features for this category
- Columns: each competitor + us
- Cells: Has it / Partial / Does not have / Unknown
- Highlight our unique advantages and gaps

3. Pricing Comparison (table format)
- Entry price point
- Mid-tier price point
- Enterprise price point
- Free tier availability
- Pricing model (per seat, per usage, flat rate)

4. Target Audience Comparison
- Primary persona for each competitor
- Company size sweet spot
- Industry focus (if any)
- Geographic focus

5. Trend Analysis
- Where is the category heading?
- Which competitors are gaining vs losing momentum?
- Emerging players to watch
- Potential disruptors from adjacent categories

6. Strategic Implications for Us
- Our strongest competitive position
- Our most vulnerable position
- 3 strategic moves to consider based on the landscape

Format for easy reference and sharing with the product team and leadership.`,
              result:
                'A comprehensive competitive landscape view that informs product strategy.',
              tip: 'Update this quarterly. The competitive landscape shifts faster than most teams realize.',
            },
            {
              id: 'pd-p-3-3',
              title: 'Win/Loss Analysis Framework',
              task: 'Analyze why you are winning or losing against competitors',
              prompt: `Help me analyze our win/loss data against competitors.

Our product: [name]
Period: [timeframe of the data]

Win/Loss data:
[Paste whatever you have - sales notes, CRM data, customer interviews, etc.]

If you do not have structured data, provide:
- Recent wins: [who we won and what you know about why]
- Recent losses: [who we lost to, what competitor, and what you know about why]
- Deals in progress: [competitive situations you are currently in]

Analyze:

1. Win Pattern Analysis
- Top 3 reasons we win (with evidence from the data)
- Which competitor do we win against most and why?
- Which buyer personas do we win with most?
- What deal characteristics predict a win?

2. Loss Pattern Analysis
- Top 3 reasons we lose (with evidence from the data)
- Which competitor do we lose to most and why?
- Which buyer personas do we lose with most?
- What deal characteristics predict a loss?

3. Feature Gap Impact
- Which missing features are cited in losses?
- Which features are cited in wins?
- Feature priority recommendations based on win/loss impact

4. Positioning Gaps
- Where is our messaging not landing?
- What objections come up repeatedly?
- Messaging adjustments recommended

5. Competitive Playbooks
- For each major competitor: 3 talking points that help us win
- Objection handling for their top strengths
- Questions to ask that expose their weaknesses

6. Action Items
- Product changes that would improve win rate (ranked by impact)
- Messaging changes (quick wins)
- Enablement needs (what sales needs from product)

This analysis should be shareable with product, sales, and marketing.`,
              result:
                'A data-driven win/loss analysis that turns anecdotes into actionable strategy.',
              tip: 'Even if your data is messy and incomplete, running this analysis surfaces patterns you would not spot otherwise.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Roadmap Communication',
          prompts: [
            {
              id: 'pd-p-4-1',
              title: 'Roadmap Narrative Generator',
              task: 'Create a compelling roadmap narrative for different audiences',
              prompt: `Create roadmap narratives for different audiences based on my product roadmap.

Roadmap initiatives:
[List your planned initiatives]
- Initiative 1: [name] | Goal: [what it achieves] | Timeline: [when] | Priority: [P0/P1/P2]
- Initiative 2: [name] | Goal: [what it achieves] | Timeline: [when] | Priority: [P0/P1/P2]
[Continue for all initiatives]

Strategic themes: [2-3 overarching themes these initiatives support]
Key context: [market changes, customer feedback, business goals driving the roadmap]

Generate three versions:

VERSION 1 - Executive/Board Audience
- Lead with business impact and strategic alignment
- Connect initiatives to company objectives and revenue
- Highlight investment areas and expected returns
- Include competitive positioning implications
- Maximum 1 page, big-picture language
- Focus on "why" and "what impact," not "what features"

VERSION 2 - Engineering/Design Audience
- Lead with technical themes and architectural direction
- Connect initiatives to technical improvement goals
- Highlight complexity, dependencies, and phasing
- Include resource and capacity implications
- Practical and detailed, with honest sizing context

VERSION 3 - Customer/External Audience
- Lead with customer problems being solved
- Focus on outcomes and value, not features
- No internal jargon or specific dates (use "soon," "next quarter," etc.)
- Build excitement without overpromising
- Include what was recently shipped to show momentum

Each version should tell a coherent story, not just list features.`,
              result:
                'Three roadmap narratives tailored to the people who need to hear the story differently.',
              tip: 'Save these audience profiles. Every quarter when the roadmap updates, you can regenerate narratives in minutes.',
            },
            {
              id: 'pd-p-4-2',
              title: 'Roadmap FAQ and Objection Handler',
              task: 'Prepare for roadmap questions and pushback',
              prompt: `Help me prepare for roadmap questions and pushback.

Current roadmap: [paste or summarize your roadmap]
Recent changes: [anything added, removed, or reprioritized recently]
Known tensions: [stakeholders pushing for different priorities, customer escalations, etc.]

Generate:

1. Anticipated Questions from Executives
- 5-7 questions they are likely to ask
- Suggested answer for each (concise, data-supported)
- Key talking points to emphasize

2. Anticipated Questions from Sales/CS
- 5-7 questions from customer-facing teams
- "When will feature X be available?" response strategy
- How to handle "but the customer needs it now" pressure

3. Anticipated Questions from Engineering
- 5-7 questions from the technical team
- How to address feasibility concerns
- How to explain prioritization decisions

4. Pushback Scenarios
- Scenario 1: "Why are we building X instead of Y?"
  - Framework for responding
  - Data points to reference
- Scenario 2: "The competitor just launched this, why are we behind?"
  - Framework for responding
- Scenario 3: "This timeline is too aggressive/too slow"
  - Framework for responding

5. Deflection to Data
- For each common pushback: the data or framework that supports your decision
- When to hold firm vs when to acknowledge and revisit

6. One-Liners
- 10 concise responses to common roadmap challenges
- Memorizable, professional, and firm without being dismissive

Keep this practical. This is a prep sheet, not a presentation.`,
              result:
                'A roadmap defense kit that helps you navigate the hardest stakeholder conversations.',
              tip: 'Review this before every roadmap review meeting. Being prepared for pushback is what separates confident PMs from defensive ones.',
            },
            {
              id: 'pd-p-4-3',
              title: 'Release Notes and Changelog',
              task: 'Write release notes for different audiences',
              prompt: `Write release notes for our latest release.

Release: [version or name]
Date: [release date]

Changes included:
[List all changes with details]
- Change 1: [what changed, why, user impact]
- Change 2: [what changed, why, user impact]
- Change 3: [what changed, why, user impact]
[Continue for all changes]

Bug fixes:
[List bug fixes]

Generate:

1. Customer-Facing Release Notes
- Lead with the most impactful changes for users
- Use benefit-focused language (what users can now do, not what you built)
- Group by theme if possible
- Include any breaking changes prominently
- End with a feedback invitation
- Tone: helpful, clear, and excited without being hypey

2. Internal Release Notes (for CS, Sales, Support)
- Include customer-facing notes plus additional context
- For each change: what it is, why it matters, who benefits
- Common questions customers might ask with suggested answers
- Known issues and workarounds
- Talking points for customer conversations

3. Technical Changelog
- Concise, factual list of all changes
- Include technical details for developer audience
- Breaking changes with migration instructions
- API changes with before/after examples
- Performance improvements with metrics

4. Social/Marketing Announcement
- A brief, engaging announcement for social media or email
- Focus on the headline feature
- Link to full release notes
- 2-3 variations for different channels (Twitter-length, LinkedIn, email)

Maintain consistent information across all versions - just different depth and framing.`,
              result:
                'Release notes for every audience from one set of inputs.',
              tip: 'Write release notes before the release ships. It helps catch issues ("wait, that is not ready") and gives marketing time to prepare.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Feature Prioritization',
          prompts: [
            {
              id: 'pd-p-5-1',
              title: 'RICE Scoring Framework',
              task: 'Score features using the RICE prioritization framework',
              prompt: `Score these features using the RICE prioritization framework.

Context:
- Product: [your product]
- Prioritization period: [quarter or timeframe]
- Team capacity: [how many features can realistically be built]
- Strategic goals this period: [list 2-3 goals]

Features to score:
[List each feature with whatever data you have]
- Feature 1: [name] - [description] - [any known data points]
- Feature 2: [name] - [description] - [any known data points]
- Feature 3: [name] - [description] - [any known data points]
[Continue for all features]

For each feature, score using RICE:

Reach: How many users/accounts will this impact per [quarter]?
- Provide estimate and reasoning

Impact: How much will this move the needle for those users? (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- Provide reasoning tied to user outcomes

Confidence: How confident are we in reach and impact estimates? (100%=high, 80%=medium, 50%=low)
- State what data supports the estimate vs what is assumption

Effort: How many person-months to build? (include design, engineering, QA)
- Provide rough estimate and key assumptions

Calculate: RICE Score = (Reach x Impact x Confidence) / Effort

Present as:
1. Scoring Table (all features with individual scores and final RICE score)
2. Ranked List (highest RICE score to lowest)
3. Analysis Notes
   - Where scores are close and strategic judgment should break the tie
   - Where confidence is low and more data would change the ranking
   - Features that score low on RICE but might still matter for strategic reasons
4. Recommendation
   - Which features to build this period
   - Which to defer and why
   - What data to collect for low-confidence items`,
              result:
                'A transparent, defensible prioritization backed by a recognized framework.',
              tip: 'Be honest about confidence levels. A feature with a high RICE score but 50% confidence needs validation, not just building.',
            },
            {
              id: 'pd-p-5-2',
              title: 'Prioritization Decision Document',
              task: 'Create a decision document for a contentious prioritization call',
              prompt: `Create a decision document for a prioritization call that has competing opinions.

The decision: [What needs to be decided - e.g., "Should we build Feature A or Feature B next quarter?"]

Option A: [Feature/Initiative A]
- Description: [what it is]
- Champion: [who wants this and why]
- Supporting data: [any metrics, customer feedback, market data]
- Estimated effort: [rough sizing]

Option B: [Feature/Initiative B]
- Description: [what it is]
- Champion: [who wants this and why]
- Supporting data: [any metrics, customer feedback, market data]
- Estimated effort: [rough sizing]

Option C (if applicable): [a third option or a hybrid approach]

Generate:

1. Decision Context
- Why this decision matters
- What happens if we delay it
- Deadline for the decision

2. Evaluation Criteria
- 5-7 criteria for making this decision (aligned to company goals)
- Weight each criterion
- Score each option against each criterion

3. Pros and Cons Matrix
- For each option: top 3 pros and top 3 cons
- Risks unique to each option
- Reversibility: how easy is it to change course later?

4. Stakeholder Impact
- How each option affects different teams
- Customer impact comparison
- Revenue impact comparison (if quantifiable)

5. The Case for Each Option
- Best possible argument for Option A
- Best possible argument for Option B
- Where the two sides actually agree

6. Recommendation
- Recommended option with clear rationale
- What must be true for this recommendation to hold
- Proposed next steps if approved
- What the "losing" option should become (killed, deferred, modified)

This document should make the decision meeting productive, not contentious. Present options fairly.`,
              result:
                'A fair, structured decision document that drives alignment instead of debate.',
              tip: 'Present both sides honestly. PMs who are seen as fair arbiters of prioritization earn more trust than those who push their own preference.',
            },
            {
              id: 'pd-p-5-3',
              title: 'Feature Request Triage Template',
              task: 'Create a system for triaging incoming feature requests',
              prompt: `Create a feature request triage system for my product.

Product: [name]
Current strategic priorities: [list 2-3]
Average feature requests per month: [approximate]
Current process: [how requests come in and how they are handled now]

Generate:

1. Intake Form Template
- Fields to capture for every request:
  - Requester and source (customer, sales, internal, etc.)
  - Problem statement (not the proposed solution)
  - User impact (who and how many affected)
  - Business impact (revenue, retention, expansion)
  - Urgency level and reasoning
  - Any proposed solution (optional)

2. Quick Triage Scoring (under 2 minutes per request)
- 5 quick-score questions with 1-5 scale:
  - [Question about alignment to strategy]
  - [Question about user impact breadth]
  - [Question about business impact]
  - [Question about effort estimate]
  - [Question about urgency/timeliness]
- Total score ranges: Investigate (20-25) / Consider (13-19) / Backlog (5-12)

3. Response Templates
- Template A: "Yes, this is on our radar" (with expected timeline)
- Template B: "Interesting - we need more data" (with what data you need)
- Template C: "Not right now - here is why" (honest, respectful, with alternative)
- Template D: "This exists already" (pointing to existing functionality)

4. Aggregation Framework
- How to group related requests into themes
- When individual requests become a pattern worth acting on
- Monthly review cadence and process

5. Feedback Loop
- How to close the loop with requesters
- Status update cadence
- Template for "we built it" notification

Keep the system lightweight. A triage process that takes longer than the feature requests is not helping.`,
              result:
                'A scalable system for handling feature requests without drowning in them.',
              tip: 'The best thing about a triage system is saying no faster and more kindly. That frees up time for the features that actually matter.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Customer Feedback Synthesis',
          prompts: [
            {
              id: 'pd-p-6-1',
              title: 'Feedback Theme Extractor',
              task: 'Extract themes and insights from raw customer feedback',
              prompt: `Analyze this customer feedback and extract themes and insights.

Product: [name]
Feedback source: [NPS surveys, support tickets, user interviews, app reviews, etc.]
Period: [timeframe]
Number of data points: [approximate count]

Raw feedback:
[Paste the feedback - as much as you have, in whatever format]

Analyze and generate:

1. Theme Analysis (ranked by frequency)
- Theme 1: [name] - mentioned by [X]% of respondents
  - Summary of what people are saying
  - Representative quotes (3-5)
  - Sentiment: Positive / Negative / Mixed
  - Product implication
- Theme 2: [same format]
[Continue for all themes, minimum 5]

2. Sentiment Breakdown
- Overall sentiment: Positive [X]% / Neutral [X]% / Negative [X]%
- Sentiment by theme
- Sentiment trends (if multiple time periods provided)

3. Feature Requests (ranked by frequency)
- Request 1: [what they want] - [how many mentioned it] - [exact quotes]
- Request 2: [same format]
[Continue for top 10]

4. Pain Points (ranked by severity)
- Pain point 1: [the problem] - [impact on users] - [quotes]
- Pain point 2: [same format]
[Continue for top 10]

5. Surprise Insights
- 2-3 things in the data that are unexpected or underappreciated
- Signals that might indicate future trends

6. Actionable Recommendations
- Quick wins (things we could address this sprint)
- Medium-term (things to plan for next quarter)
- Strategic (things that should inform product direction)

Be data-driven. Every insight should reference specific feedback.`,
              result:
                'A structured analysis that turns a pile of feedback into actionable product insights.',
              tip: 'Run this monthly. The most valuable insights come from seeing how themes change over time, not from any single analysis.',
            },
            {
              id: 'pd-p-6-2',
              title: 'User Interview Synthesis',
              task: 'Synthesize insights from user interview transcripts',
              prompt: `Synthesize insights from these user interview transcripts.

Product: [name]
Interview context: [what you were investigating - a specific feature, general satisfaction, new use cases, etc.]
Number of interviews: [count]
User type: [persona or segment]

Interview notes or transcripts:
[Paste your notes from each interview. Even rough notes work.]

Generate:

1. Key Findings (Top 5-7)
- For each finding:
  - Insight summary (1 sentence)
  - Supporting evidence (which interviews, what was said)
  - Confidence level (High - heard from many / Medium - heard from some / Low - heard from one but notable)
  - Product implication

2. User Journey Insights
- Where do users experience the most friction?
- What delights them?
- What workarounds are they using?
- What jobs are they hiring the product to do?

3. Quotes Worth Saving
- 8-10 powerful quotes that capture key sentiments
- For each: the context and what it reveals

4. Persona Refinements
- Based on these interviews, how should we update our understanding of this user?
- Are there sub-segments within this group?
- Unmet needs we did not know about

5. Opportunities
- Features or changes that would address the biggest pain points
- Opportunities that users articulated vs ones implied by their behavior
- Ranked by impact and frequency

6. What We Still Do Not Know
- Questions these interviews raised but did not answer
- Recommended next research steps

Present in a format that can be shared with the product team and referenced in future planning.`,
              result:
                'A research synthesis that transforms interview hours into actionable product intelligence.',
              tip: 'Send the synthesis to interview participants for validation. It builds trust and sometimes surfaces additional insights.',
            },
            {
              id: 'pd-p-6-3',
              title: 'NPS and Survey Analysis',
              task: 'Analyze NPS or survey results for product insights',
              prompt: `Analyze our NPS/survey results and generate product insights.

Survey type: [NPS / CSAT / product feedback survey / other]
Period: [timeframe]
Response count: [number]
Overall score: [NPS score or average rating]

Data:
[Paste survey results - scores and open-ended responses]

If NPS, provide:
- Promoters (9-10): [count] - [percentage]
- Passives (7-8): [count] - [percentage]
- Detractors (0-6): [count] - [percentage]

Analyze:

1. Score Analysis
- Overall score assessment and benchmark comparison
- Score distribution analysis
- Trends vs previous period (if provided)
- Segment breakdowns (if data available)

2. Promoter Analysis
- What promoters love most (themes from their comments)
- What would make them love us even more
- Referral and expansion opportunities
- Representative quotes

3. Detractor Analysis
- Top reasons for dissatisfaction (themes)
- Which issues are fixable vs structural
- Churn risk assessment
- Representative quotes
- Specific actions to address the top 3 complaints

4. Passive Analysis (often overlooked)
- What would tip passives to promoters?
- What risks tipping them to detractors?
- The specific gap between "fine" and "great"

5. Product Implications
- Features to invest in (what drives promoter scores up)
- Features to fix (what drives detractor scores down)
- Quick wins vs longer-term improvements
- Priority ranking based on score impact potential

6. Communication Recommendations
- How to close the loop with respondents
- What to share internally
- What to act on immediately

Include specific numbers and quotes to support every recommendation.`,
              result:
                'A deep NPS analysis that connects scores to specific product actions.',
              tip: 'Focus on passives. Moving passives to promoters is usually easier than converting detractors - and has a bigger impact on the NPS number.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your product management time is actually worth.',
      timeTable: [
        {
          task: 'PRD writing',
          without: '4-6 hours per PRD',
          withAI: '45 min-1 hour',
          saved: '4+ hrs each',
        },
        {
          task: 'User story creation',
          without: '2-3 hours/feature',
          withAI: '20-30 minutes',
          saved: '2 hrs/feature',
        },
        {
          task: 'Competitive analysis',
          without: '1-2 days',
          withAI: '1-2 hours',
          saved: '1+ day each',
        },
        {
          task: 'Roadmap narratives',
          without: '3-5 hours/quarter',
          withAI: '30-45 minutes',
          saved: '3 hrs/quarter',
        },
        {
          task: 'Feature prioritization',
          without: '3-4 hours/cycle',
          withAI: '30-45 minutes',
          saved: '3 hrs/cycle',
        },
        {
          task: 'Feedback synthesis',
          without: '1-2 days',
          withAI: '30-45 minutes',
          saved: '1+ day each',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '20-30 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'In 2026, product managers using AI ship better specs, respond faster to competitive moves, and make more data-informed decisions - all while spending less time on the documentation and analysis overhead that slows most PMs down. Same product instinct, same user empathy, same strategic thinking - just radically faster execution.',
            'The gap is not about product sense. It is about throughput. The PM who produces a polished PRD in an hour has time to talk to three more customers this week. That compounds.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a product manager to write documents. You became one because you understand users, you see opportunities in markets, and you know how to translate that into products people love. AI gives you back the time to do the work that actually makes great products.',
          ],
        },
      ],
      keyInsight:
        'Start with one PRD. Write your next spec with AI instead of from scratch. Notice how much faster you get to the thinking instead of the formatting.',
    },

    ch7: {
      intro:
        'The plan is simple. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'pd-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pd-1-2', label: 'Create a free Perplexity account' },
            { id: 'pd-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Write Your First AI-Assisted PRD',
          duration: '25 min',
          items: [
            { id: 'pd-2-1', label: 'Pick a feature you need to spec next' },
            { id: 'pd-2-2', label: 'Run the Full PRD Generator prompt with your real product context' },
            { id: 'pd-2-3', label: 'Run the PRD Stress Test on the output' },
          ],
        },
        {
          day: 3,
          title: 'Generate User Stories',
          duration: '20 min',
          items: [
            { id: 'pd-3-1', label: 'Run the User Story Batch Generator for the feature you specced' },
            { id: 'pd-3-2', label: 'Refine the acceptance criteria using the Refiner prompt' },
            { id: 'pd-3-3', label: 'Add the stories to your backlog' },
          ],
        },
        {
          day: 4,
          title: 'Run a Competitive Analysis',
          duration: '25 min',
          items: [
            { id: 'pd-4-1', label: 'Run the Competitor Teardown on your top competitor' },
            { id: 'pd-4-2', label: 'Use Perplexity to verify key claims with sources' },
            { id: 'pd-4-3', label: 'Save the analysis for your next strategy discussion' },
          ],
        },
        {
          day: 5,
          title: 'Prioritize Your Backlog',
          duration: '25 min',
          items: [
            { id: 'pd-5-1', label: 'Run the RICE Scoring Framework on your top 10 features' },
            { id: 'pd-5-2', label: 'Review the rankings and adjust based on strategic context' },
            { id: 'pd-5-3', label: 'Share the scored list with your team for discussion' },
          ],
        },
        {
          day: 6,
          title: 'Synthesize Customer Feedback',
          duration: '20 min',
          items: [
            { id: 'pd-6-1', label: 'Collect recent customer feedback from any source' },
            { id: 'pd-6-2', label: 'Run the Feedback Theme Extractor prompt' },
            { id: 'pd-6-3', label: 'Connect the insights to your roadmap priorities' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Build Your Routine',
          duration: '15 min',
          items: [
            { id: 'pd-7-1', label: 'List which prompts accelerated your work the most this week' },
            { id: 'pd-7-2', label: 'Build a PM workflow using your top 3-4 prompts' },
            { id: 'pd-7-3', label: 'Share this guide with another product manager' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
