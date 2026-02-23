import type { WorkbookData } from './types'

export const consultantsData = {
  professionId: 'consultants',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Consultants',
  heroDescription:
    'Win more proposals, deliver faster, and build frameworks that scale. Real tools, proven workflows, and copy-paste prompts for proposals, deliverables, presentations, and knowledge management.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Sunday night and you are staring at a blank proposal. The client wants it by Tuesday morning. You have the expertise - you have done this kind of engagement a dozen times - but the writing takes forever. The executive summary alone will eat two hours. The scope section needs to be precise but not overwhelming. The pricing model needs to feel custom even though you have used a similar structure before. And somewhere between all of this, you need to make the whole thing sound like it was written specifically for this client, not recycled from the last one.',
        'Meanwhile, three active engagements need attention. One client is expecting a deliverable deck by Thursday. Another wants a RACI matrix for a new workstream. Your associate sent over a draft that needs heavy editing. There is a stakeholder alignment meeting tomorrow that you have not prepped for, and a lessons learned document from the last engagement that you promised to write two weeks ago.',
        'You got into consulting because you are the person who walks into a room and sees what others miss. You diagnose problems, design solutions, and guide organizations through change. But instead of spending your time on the strategic thinking and client relationships that create real value, you are buried in document production, slide formatting, and administrative deliverables that eat your weeks alive.',
      ],
      highlight:
        'What if AI handled the writing, the formatting, and the first draft of every deliverable - so you could focus on the thinking that clients actually pay for?',
      closingParagraph:
        'Not replacing your expertise. Not automating your judgment. Just compressing the 6 hours between having the answer in your head and getting it into a polished document - down to 45 minutes.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace the consultant in the room. It cannot read a CEO\'s body language during a steering committee meeting. It will not sense the political dynamics between two SVPs who both think they should own the transformation. The ability to diagnose the real problem underneath the stated problem - that is human. AI does not have it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most capable analyst you have ever managed. One who can draft a 20-page proposal overnight, build a strategic framework while you are on a client call, structure a deliverable deck from your messy bullet points, and turn your post-meeting notes into a clean stakeholder communication in minutes.',
            'Need to write a statement of work with precise scope boundaries? AI drafts it in 5 minutes. Need to build a change management framework tailored to a specific industry? First version in 3 minutes. Need to turn 40 interview transcripts into a findings deck? AI pulls the themes while you are still organizing the files.',
            'You bring the expertise, the client relationship, and the strategic judgment. AI brings the speed, the structure, and the production capacity. Together, you deliver like a team twice your size.',
          ],
        },
      ],
      keyInsight:
        'Your consulting expertise + AI\'s production speed = more proposals won, faster deliverables, and clients who think you have a bigger team than you do.',
    },

    ch3: {
      intro: 'Five tools that cover the full consulting workflow. Start with two, add from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your proposal and writing engine',
          description:
            'Proposals, SOWs, deliverable drafts, frameworks, stakeholder emails - any text-heavy consulting task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your deep analysis and long-form partner',
          description:
            'Complex frameworks, lengthy deliverables, nuanced strategy documents, detailed analysis reports that require depth and precision',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long documents',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research and benchmarking assistant',
          description:
            'Industry research, competitive benchmarking, market data, best practice sourcing - all with citations you can reference in deliverables',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your knowledge management system',
          description:
            'Engagement tracking, methodology libraries, lessons learned databases, reusable templates, project documentation',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Gamma',
          role: 'Your presentation builder',
          description:
            'Client deliverable decks, executive presentations, workshop materials, steering committee slides - professional decks from text in minutes',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Skip PowerPoint',
          icon: 'gamma',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That combination covers proposals, deliverables, research, and frameworks. Add Gamma when you need decks fast.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual consulting workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Proposal and SOW Writing',
          before:
            'You open the last proposal you wrote and start copying sections, swapping client names, adjusting scope language, and rewriting the executive summary. It takes 4-8 hours to produce something that feels tailored. SOWs take another 2-3 hours because every deliverable, milestone, and assumption needs to be precise. For competitive bids, the pressure makes it worse - you rewrite the approach section three times.',
          after:
            'You give AI the client context, engagement type, and key requirements. In 10 minutes, you have a complete proposal draft with executive summary, approach, scope, timeline, team structure, and pricing framework. SOWs generate with deliverable tables, milestones, assumptions, and exclusions. You spend your time refining the strategy, not producing the document.',
          flow: [
            'Input client context, pain points, and engagement scope',
            'AI generates a complete proposal draft with all sections',
            'Review and refine the approach and methodology sections',
            'Generate the SOW with deliverables, milestones, and assumptions',
            'Final review for accuracy and client-specific tailoring',
          ],
          timeSaved: { without: '6-10 hours', withAI: '1-2 hours' },
        },
        {
          id: 2,
          name: 'Framework and Methodology Development',
          before:
            'Building a new framework means hours of research, whiteboarding, structuring, and iterating. You pull from memory, past engagements, and industry best practices - but synthesizing it into something coherent and client-ready takes a full day. Adapting an existing methodology to a new industry or context adds another half day.',
          after:
            'AI synthesizes industry best practices, your input, and established methodologies into a structured framework in minutes. Need a change management framework for healthcare? A digital transformation maturity model for manufacturing? AI builds the skeleton while you refine the substance.',
          flow: [
            'Define the framework purpose, audience, and context',
            'AI researches best practices and generates an initial structure',
            'Review the framework logic and adjust based on your expertise',
            'AI adds supporting detail, examples, and implementation guidance',
            'Export into client deliverable format',
          ],
          timeSaved: { without: '1-2 days', withAI: '2-3 hours' },
        },
        {
          id: 3,
          name: 'Client Deliverable Creation',
          before:
            'Every deliverable starts with a blank page or an old template. Analysis reports, findings decks, recommendations documents, interview summaries - each one requires organizing your thinking, writing clearly, formatting properly, and making it presentable. A single deliverable can take a full day.',
          after:
            'You feed AI your raw analysis, interview notes, or key findings. It structures everything into a polished deliverable - executive summary, analysis, findings, recommendations, and next steps. You focus on ensuring the insights are sharp and the recommendations are sound, not on writing paragraphs and formatting slides.',
          flow: [
            'Gather your raw inputs - notes, data, analysis, findings',
            'AI structures into a complete deliverable draft',
            'Review findings and sharpen the recommendations',
            'AI generates executive summary and next steps',
            'Format and deliver to client',
          ],
          timeSaved: { without: '4-8 hours/deliverable', withAI: '1-2 hours' },
        },
        {
          id: 4,
          name: 'Presentation Deck Building',
          before:
            'Slide decks are the consulting tax. Every engagement produces them, every client expects them, and they always take longer than they should. You fight with formatting, reorganize the narrative flow three times, and spend an hour on the executive summary slide alone. Workshop decks, steering committee presentations, and final readout decks eat entire days.',
          after:
            'AI generates slide-by-slide content with key messages, supporting points, and speaker notes. You define the narrative arc and audience. AI builds the content. Gamma turns it into a polished deck. A presentation that used to take 6 hours takes 1.',
          flow: [
            'Define the audience, objective, and key messages',
            'AI generates the narrative structure and slide outline',
            'Generate content for each slide with talking points',
            'Build the deck in Gamma or your presentation tool',
            'Review, refine visuals, and rehearse key transitions',
          ],
          timeSaved: { without: '4-8 hours/deck', withAI: '45-90 minutes' },
        },
        {
          id: 5,
          name: 'Stakeholder Management',
          before:
            'Stakeholder communications are constant and time-consuming. Status updates, meeting summaries, escalation emails, alignment documents, RACI matrices - they are essential but they drain your productive hours. A single steering committee meeting requires an hour of prep and another hour of follow-up documentation.',
          after:
            'AI drafts status updates from your bullet points, turns meeting notes into clean summaries with action items, generates RACI matrices from project descriptions, and writes stakeholder-appropriate communications for different audiences. Your stakeholder management runs on autopilot.',
          flow: [
            'Input meeting notes or project status bullet points',
            'AI generates formatted communications for each stakeholder group',
            'Review and adjust tone for specific relationships',
            'AI creates RACI matrices and alignment documents as needed',
            'Send with confidence - faster turnaround, better consistency',
          ],
          timeSaved: { without: '5-8 hours/week', withAI: '1-2 hours/week' },
        },
        {
          id: 6,
          name: 'Knowledge Management',
          before:
            'After every engagement, you tell yourself you will document the lessons learned, save the useful templates, and update the methodology library. It never happens. Institutional knowledge lives in individual laptops and email threads. When a similar engagement comes up months later, you start from scratch because nobody can find what was built before.',
          after:
            'AI transforms your engagement artifacts into reusable knowledge - lessons learned documents, methodology updates, template libraries, and searchable case studies. Every engagement makes the next one faster. Your knowledge compounds instead of disappearing.',
          flow: [
            'At engagement close, feed AI the key artifacts and outcomes',
            'AI generates a structured lessons learned document',
            'Extract reusable templates, frameworks, and methodologies',
            'AI creates a searchable engagement summary and case study',
            'Store in your knowledge base for future reference',
          ],
          timeSaved: { without: 'Rarely done', withAI: '30 minutes/engagement' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every consulting scenario. Copy, paste, fill in the brackets, and get results in minutes.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Proposals and SOWs',
          prompts: [
            {
              id: 'cn-p-1-1',
              title: 'Consulting Proposal Generator',
              task: 'Write a complete consulting proposal',
              prompt: `Write a consulting proposal for a new engagement.

My firm: [firm name] - [what you specialize in]
Client: [client name] - [their industry and size]
Client\'s stated problem: [what they asked for help with]
The real underlying problem (your diagnosis): [what you think the actual issue is]
Engagement type: [strategy / operations / transformation / advisory / other]
Expected duration: [weeks/months]
Team: [who you would staff on this]

Generate a complete proposal with these sections:

1. Executive Summary
   - Open with the client\'s challenge in their language
   - Your diagnosis of the root cause
   - Your proposed approach in 3-4 sentences
   - Expected outcomes and timeline

2. Situation Assessment
   - What you understand about their current state
   - Key challenges and pain points
   - What happens if nothing changes

3. Proposed Approach
   - Phase breakdown with objectives for each phase
   - Key activities and methods
   - How you will engage with their team

4. Deliverables
   - Specific outputs for each phase
   - Format (report, deck, workshop, etc.)

5. Timeline and Milestones
   - Week-by-week or phase-by-phase view
   - Key decision points and checkpoints

6. Team and Qualifications
   - Why your firm is the right fit
   - Relevant experience (2-3 similar engagements)

7. Investment
   - Fee structure and payment terms
   - What is included vs. out of scope

Tone: confident, specific, and client-focused. Avoid generic consulting jargon. Every paragraph should answer "why should this client choose us?"`,
              result:
                'A complete, tailored proposal ready for final review and submission.',
              tip: 'Feed AI a previous winning proposal as a style reference. It will match the tone and structure while customizing the content.',
            },
            {
              id: 'cn-p-1-2',
              title: 'Statement of Work Builder',
              task: 'Generate a detailed statement of work',
              prompt: `Generate a detailed Statement of Work for this consulting engagement.

Client: [client name]
Engagement: [project name/description]
Duration: [start date] to [end date]
Agreed scope: [high-level scope from the proposal]

Generate a SOW with:

1. Project Overview
   - Purpose and objectives (3-5 bullet points)
   - Background context (2-3 sentences)

2. Scope of Work
   - In-scope activities (detailed and specific)
   - Out-of-scope items (explicit exclusions to prevent scope creep)
   - Assumptions (10-15 key assumptions the engagement depends on)

3. Deliverables Table
   - Deliverable name, description, format, and due date for each
   - Acceptance criteria for each deliverable

4. Project Timeline
   - Phase breakdown with start/end dates
   - Key milestones and decision gates
   - Client review periods built in

5. Team and Responsibilities
   - Consultant team roles and time allocation
   - Client team requirements (who we need from their side)
   - RACI for major deliverables

6. Governance
   - Meeting cadence (status calls, steering committee)
   - Escalation process
   - Change request procedure

7. Commercial Terms
   - Fee structure and payment schedule
   - Expense policy
   - Termination clause
   - Intellectual property ownership

Be precise. Every deliverable should be measurable. Every assumption should protect against scope creep.`,
              result:
                'A comprehensive SOW that protects both parties and sets clear expectations.',
              tip: 'The assumptions section is your best defense against scope creep. Be thorough - list everything the client needs to provide.',
            },
            {
              id: 'cn-p-1-3',
              title: 'Executive Summary Writer',
              task: 'Write a compelling executive summary for a proposal',
              prompt: `Write a compelling executive summary for a consulting proposal.

Client: [name and industry]
Their challenge: [what they are struggling with - be specific]
Our solution: [our proposed approach in 2-3 sentences]
Expected outcomes: [what success looks like for them]
Investment: [fee range or structure]
Timeline: [duration]

Write 3 versions of the executive summary:

Version A: Problem-led
- Open with the cost of their current problem
- Show the gap between where they are and where they need to be
- Position your approach as the bridge
- Close with expected ROI or outcomes

Version B: Vision-led
- Open with what success looks like after the engagement
- Contrast with where they are today
- Your approach as the path to that vision
- Close with timeline and confidence

Version C: Evidence-led
- Open with a relevant data point or industry benchmark
- Connect it to their specific situation
- Your approach grounded in proven methodology
- Close with similar client results

Each version under 250 words. Tone: authoritative but not arrogant. Every sentence should earn the next sentence.`,
              result:
                'Three executive summary options to choose from or combine.',
              tip: 'Version A works best for cost-reduction engagements. Version B for transformation. Version C when competing against other firms.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Frameworks and Methodologies',
          prompts: [
            {
              id: 'cn-p-2-1',
              title: 'Strategic Framework Builder',
              task: 'Build a custom strategic framework',
              prompt: `Build a strategic framework for a consulting engagement.

Framework purpose: [what business question or challenge it addresses]
Client industry: [industry]
Client context: [stage, size, current situation]
Audience: [who will use this framework - executives, managers, team leads]

Generate a complete framework with:

1. Framework Name
   - A clear, memorable name that communicates the purpose

2. Framework Overview
   - The problem this framework solves (2-3 sentences)
   - When to use it and when not to use it
   - Visual structure (describe the diagram - matrix, pyramid, cycle, or flow)

3. Components
   - 4-6 pillars, dimensions, or stages
   - For each component:
     - Name and one-sentence definition
     - Key questions it answers
     - 3-5 assessment criteria
     - Maturity levels (basic, developing, advanced, leading)
     - Common pitfalls

4. Assessment Tool
   - Scoring rubric for each component (1-5 scale with descriptions)
   - Overall score interpretation guide
   - Priority matrix: where to focus based on scores

5. Implementation Roadmap
   - Quick wins (first 30 days)
   - Foundation building (30-90 days)
   - Sustained improvement (90-180 days)
   - Advanced optimization (180+ days)

6. Case Application
   - Walk through how to apply this framework to a hypothetical client scenario in [industry]

Make it rigorous enough for a strategy engagement but simple enough to explain in 5 minutes.`,
              result:
                'A professional strategic framework ready for client workshops and deliverables.',
              tip: 'Great frameworks are memorable. If the client cannot recall the components from memory after one meeting, simplify.',
            },
            {
              id: 'cn-p-2-2',
              title: 'Maturity Model Designer',
              task: 'Design a maturity model for a client assessment',
              prompt: `Design a maturity model for assessing [capability/function/process] in [industry].

Purpose: [why the client needs this assessment]
Current hypothesis: [what you think you will find]
Stakeholders: [who will be assessed and who sees the results]

Build a maturity model with:

1. Model Overview
   - What it measures and why it matters
   - The business case for moving up the maturity curve

2. Dimensions (5-7 assessment areas)
   For each dimension:
   - Name and definition
   - Why it matters for [capability]
   - Level 1 - Initial: characteristics, evidence, risks
   - Level 2 - Developing: characteristics, evidence, indicators
   - Level 3 - Defined: characteristics, evidence, benchmarks
   - Level 4 - Managed: characteristics, evidence, metrics
   - Level 5 - Optimizing: characteristics, evidence, outcomes

3. Assessment Questionnaire
   - 3-4 diagnostic questions per dimension
   - Scoring criteria for each question
   - Evidence to look for during interviews

4. Output Template
   - Spider/radar chart description (dimensions as axes)
   - Current state profile with narrative
   - Gap analysis: where they are vs. where they need to be
   - Prioritized improvement roadmap

5. Benchmarking Reference
   - Typical maturity levels by industry
   - What "good" looks like at each level
   - Expected timeline to move one level up per dimension

Make this client-ready - professional enough to present to a C-suite audience.`,
              result:
                'A complete maturity model with assessment tools, scoring rubric, and output template.',
              tip: 'Run the assessment as a workshop, not a survey. You get richer insights from discussion than checkbox responses.',
            },
            {
              id: 'cn-p-2-3',
              title: 'Methodology Adapter',
              task: 'Adapt an existing methodology to a new context',
              prompt: `Adapt a consulting methodology for a new client context.

Original methodology: [name or describe the approach you typically use]
Original context: [the industry/situation it was designed for]
New client industry: [new industry]
New client context: [their specific situation, size, maturity]
Key differences: [what makes this client different from your usual engagements]

Generate:

1. Methodology Comparison
   - What stays the same (core principles that transfer)
   - What needs to change (elements that do not apply or need modification)
   - What is new (elements to add for this specific context)

2. Adapted Methodology
   - Revised phase structure with objectives
   - Modified activities and tools for each phase
   - Industry-specific considerations and terminology
   - Adjusted timelines and resource requirements

3. Risk Assessment
   - What could go wrong when applying this methodology in the new context
   - Mitigation strategies for each risk
   - Early warning signs to watch for

4. Stakeholder Adjustments
   - How engagement style needs to change for this audience
   - Communication and reporting modifications
   - Cultural or organizational considerations

5. Validation Plan
   - How to test whether the adapted methodology is working
   - Checkpoints for adjustment
   - Feedback mechanisms to build in

Keep the core methodology intact but make it feel native to the new context. The client should never feel like they are getting a recycled approach.`,
              result:
                'An adapted methodology that feels tailored to the new client while preserving proven principles.',
              tip: 'Always adapt the language first. Using industry-native terminology signals that you understand their world.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Client Deliverables',
          prompts: [
            {
              id: 'cn-p-3-1',
              title: 'Analysis Report Generator',
              task: 'Create a structured analysis report from raw findings',
              prompt: `Create a structured analysis report from my consulting engagement findings.

Client: [name and industry]
Engagement: [project type and objective]
Analysis type: [current state assessment / gap analysis / opportunity analysis / risk assessment]

Raw findings:
[Paste your notes, interview summaries, data points, observations]

Generate a professional analysis report with:

1. Executive Summary (1 page)
   - Purpose of the analysis
   - Key findings (top 5, prioritized by impact)
   - Critical recommendations (top 3)
   - Immediate next steps

2. Methodology
   - How the analysis was conducted
   - Data sources and inputs
   - Limitations and caveats

3. Detailed Findings
   - Organize into 4-6 thematic areas
   - For each theme:
     - Finding statement (one clear sentence)
     - Supporting evidence (data, quotes, observations)
     - Impact assessment (High/Medium/Low with reasoning)
     - Root cause (why this exists)

4. Analysis and Implications
   - Cross-cutting patterns and themes
   - Interdependencies between findings
   - What these findings mean for the client\'s strategic goals

5. Recommendations
   - Prioritized list with rationale
   - For each: effort level, expected impact, timeline, owner
   - Quick wins vs. strategic investments
   - Dependencies and sequencing

6. Appendix
   - Detailed data tables
   - Interview summary grid
   - Glossary of terms

Tone: analytical and objective. Let the evidence lead. Flag when a recommendation is based on judgment vs. data.`,
              result:
                'A polished analysis report ready for client review and steering committee presentation.',
              tip: 'Put the most surprising or important finding first. Clients remember the opening finding disproportionately.',
            },
            {
              id: 'cn-p-3-2',
              title: 'Executive Presentation Builder',
              task: 'Build an executive-ready presentation from engagement findings',
              prompt: `Build an executive presentation from my consulting engagement work.

Client: [name]
Audience: [C-suite / VP level / steering committee / board]
Objective: [what you want them to decide or approve after this presentation]
Time slot: [how many minutes you have]
Presentation context: [status update / final readout / decision meeting / workshop]

Key content to include:
[Paste your findings, recommendations, analysis, or talking points]

Generate a slide-by-slide presentation:

For each slide provide:
- Slide title (action-oriented - states the takeaway)
- Key message (the one thing the audience should remember)
- Content (3-5 bullet points or data visualization description)
- Speaker notes (what to say, including transitions)
- Backup detail (for questions)

Structure:
1. Context and objectives (1 slide)
2. Approach summary (1 slide)
3. Key findings (3-5 slides - one per major finding)
4. Analysis and implications (1-2 slides)
5. Recommendations (2-3 slides)
6. Roadmap and next steps (1-2 slides)
7. Discussion and decision needed (1 slide)

Total: 12-15 slides maximum.

Rules:
- One message per slide
- No slide with more than 5 bullet points
- Every slide title should be a complete sentence that states the insight
- Data visualization descriptions where numbers are involved
- Anticipate one likely question per slide and prepare the answer`,
              result:
                'A complete slide deck outline with content, speaker notes, and backup detail for every slide.',
              tip: 'For C-suite audiences, put the recommendation on slide 3. They want to know where you landed before they will engage with the evidence.',
            },
            {
              id: 'cn-p-3-3',
              title: 'Recommendations Document',
              task: 'Write a standalone recommendations document',
              prompt: `Write a standalone recommendations document for a consulting engagement.

Client: [name and industry]
Engagement: [what you were brought in to do]
Key findings summary: [3-5 main findings from your analysis]
Client constraints: [budget, timeline, organizational capacity, political dynamics]
Client goals: [what they want to achieve in the next 6-12 months]

Generate a recommendations document with:

1. Recommendation Overview
   - Total number of recommendations
   - How they are organized (by theme, by priority, by timeline)
   - How to read this document

2. Priority Matrix
   - Plot all recommendations on Impact vs. Effort
   - Quadrant labels: Quick Wins, Strategic Bets, Fill-ins, Deprioritize

3. Detailed Recommendations (8-12 total)
   For each recommendation:
   - Title (action-oriented, starting with a verb)
   - Rationale (why this matters - tie to findings)
   - Description (what specifically to do)
   - Expected impact (quantified where possible)
   - Effort and resources required
   - Timeline (when to start and expected duration)
   - Dependencies (what needs to happen first)
   - Risks (what could go wrong)
   - Success metrics (how to know it is working)
   - Owner suggestion (which role should lead this)

4. Implementation Roadmap
   - Phase 1: Quick Wins (0-3 months)
   - Phase 2: Foundation (3-6 months)
   - Phase 3: Transformation (6-12 months)
   - Phase 4: Optimization (12+ months)

5. Investment Summary
   - Total estimated investment by phase
   - Expected ROI timeline
   - Resource requirements

Write with authority but acknowledge complexity. Consultants who pretend everything is simple lose credibility.`,
              result:
                'A comprehensive recommendations document that gives the client a clear roadmap for action.',
              tip: 'Start with 2-3 quick wins that require minimal investment. Early visible progress builds credibility for the bigger recommendations.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Presentation Decks',
          prompts: [
            {
              id: 'cn-p-4-1',
              title: 'Workshop Deck Creator',
              task: 'Build a facilitated workshop deck',
              prompt: `Build a workshop facilitation deck for a consulting engagement.

Workshop purpose: [what you are trying to achieve]
Client: [name and industry]
Participants: [who is in the room - roles and number of people]
Duration: [total time]
Key outcome: [what should be decided, aligned on, or produced by the end]

Generate a complete workshop deck:

1. Welcome and Context (5 min)
   - Why we are here (1 slide)
   - Agenda and ground rules (1 slide)
   - Where we are in the overall engagement (1 slide)

2. Framing (10 min)
   - Current state summary (1-2 slides)
   - Key data or findings to ground the discussion (1-2 slides)
   - The question we need to answer today (1 slide)

3. Working Sessions (bulk of time)
   - Activity 1: [describe exercise]
     - Instructions slide
     - Working template slide
     - Share-out/discussion slide
   - Activity 2: [describe exercise]
     - Same structure
   - Activity 3: [describe exercise]
     - Same structure

4. Synthesis and Decisions (15 min)
   - What we heard (capture slide)
   - Key decisions or alignments (decision slide)
   - Open items and parking lot (1 slide)

5. Next Steps and Close (5 min)
   - Action items with owners and dates
   - What happens next in the engagement
   - Feedback on the session

For each slide: content, facilitator notes, time allocation, and potential challenges to anticipate.
Include 3 energizer questions to use if the group loses momentum.`,
              result:
                'A complete workshop deck with facilitation guides and timing for every section.',
              tip: 'Build in 20% buffer time. Workshops always run long. The best facilitators know which sections to compress on the fly.',
            },
            {
              id: 'cn-p-4-2',
              title: 'Steering Committee Deck',
              task: 'Create a steering committee presentation',
              prompt: `Create a steering committee presentation for an active consulting engagement.

Client: [name]
Engagement: [project name]
Reporting period: [week/month/phase]
Steering committee members: [roles attending]
Meeting duration: [minutes]

Status this period:
- Overall status: [Green / Yellow / Red]
- Key accomplishments: [list 3-5]
- Upcoming milestones: [list 2-3]
- Risks and issues: [list any active ones]
- Decisions needed: [list any]
- Budget status: [on track / over / under]

Generate a steering committee deck:

Slide 1: Executive Dashboard
- Overall RAG status
- 3-4 key metrics at a glance
- One-sentence project health summary

Slide 2: Accomplishments This Period
- What was completed
- Impact or progress metrics
- How it connects to overall objectives

Slide 3: Upcoming Plan
- Next period priorities
- Key milestones and dates
- Resource allocation

Slide 4: Risks and Issues
- Active risks with probability and impact
- Mitigation actions and owners
- Issues requiring escalation or decisions

Slide 5: Decisions Needed
- Decision description
- Options with pros/cons
- Recommendation
- Timeline for decision

Slide 6: Budget and Timeline
- Budget tracking (planned vs. actual)
- Timeline view with progress markers
- Forecast for remaining engagement

For each slide: key message, supporting data, and the question the committee is most likely to ask.`,
              result:
                'A concise steering committee deck that respects executive time and drives decisions.',
              tip: 'Send the deck 24 hours before the meeting. Steering committee members who read ahead ask better questions and make faster decisions.',
            },
            {
              id: 'cn-p-4-3',
              title: 'Client Pitch Deck',
              task: 'Build a pitch deck for a consulting capability or service line',
              prompt: `Build a pitch deck for our consulting firm or service line.

Firm: [name and specialization]
Service we are pitching: [specific capability or service line]
Target client: [industry, size, typical buyer role]
Competitive differentiation: [what makes us different from other firms]
Key proof points: [notable clients, results, or case studies]

Generate a pitch deck:

Slide 1: Title - firm name, service name, tagline
Slide 2: The problem - the challenge your target clients face (with data)
Slide 3: The cost of inaction - what happens if they do nothing (quantified)
Slide 4: Our approach - your methodology in a visual framework
Slide 5: How it works - phase-by-phase breakdown (3-4 phases)
Slide 6: What makes us different - 3-4 differentiators with evidence
Slide 7: Case study 1 - client challenge, approach, results (with metrics)
Slide 8: Case study 2 - different industry or scenario
Slide 9: Our team - key people and their relevant expertise
Slide 10: Engagement options - how clients can work with you (packages or tiers)
Slide 11: Expected outcomes - what they can expect with timelines
Slide 12: Next steps - clear CTA and what happens after this meeting

For each slide: exact content, one key visual or data point to include, and the transition to the next slide.

Rules: No slide with more than 30 words of body text. Lead with insights, not capabilities. Show results, not process.`,
              result:
                'A persuasive pitch deck that leads with client value rather than firm credentials.',
              tip: 'Open every pitch meeting by asking about their situation first. Adapt the narrative in real time based on what they share.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Stakeholder Management',
          prompts: [
            {
              id: 'cn-p-5-1',
              title: 'RACI Matrix Generator',
              task: 'Generate a RACI matrix for a consulting engagement',
              prompt: `Generate a RACI matrix for this consulting engagement.

Engagement: [project name and description]
Phase: [current phase or overall engagement]

Key activities/deliverables:
[List 10-15 major activities or deliverables]

Stakeholder roles:
- Consulting team: [list roles - Partner, Manager, Analyst, etc.]
- Client team: [list roles - Sponsor, Project Lead, SMEs, etc.]

Generate a complete RACI matrix:

1. Matrix Table
   - Rows: each activity/deliverable
   - Columns: each role
   - Cells: R (Responsible), A (Accountable), C (Consulted), I (Informed)

2. Rules Applied
   - Only one A per row
   - At least one R per row
   - Flag any role that is overloaded (too many R's)
   - Flag any activity with no clear accountability

3. Role Summaries
   For each role:
   - Total R assignments
   - Total A assignments
   - Potential capacity concerns
   - Key handoff points with other roles

4. Governance Notes
   - Escalation path when roles are unclear
   - How to handle scope additions (who updates the RACI)
   - Review cadence (when to revisit the matrix)

5. Common Pitfalls
   - 3-5 RACI mistakes to avoid in this type of engagement
   - Warning signs that the RACI is not working

Format as a clean table that can be copied into a project document.`,
              result:
                'A clear, actionable RACI matrix with governance guidance and role balance analysis.',
              tip: 'Review the RACI with both the consulting and client teams in the same room. Misaligned expectations surface immediately.',
            },
            {
              id: 'cn-p-5-2',
              title: 'Stakeholder Communication Plan',
              task: 'Build a stakeholder communication plan',
              prompt: `Build a stakeholder communication plan for a consulting engagement.

Engagement: [project name]
Duration: [total timeline]
Key stakeholder groups:
- Executive sponsors: [names/roles]
- Project team: [names/roles]
- Impacted teams: [names/roles]
- External stakeholders: [if any]

Political dynamics to consider: [any known tensions, competing priorities, or sensitivities]

Generate:

1. Stakeholder Map
   For each stakeholder:
   - Name and role
   - Influence level: High / Medium / Low
   - Interest level: High / Medium / Low
   - Current stance: Supporter / Neutral / Resistant
   - Key concern or motivation
   - Communication preference (email, in-person, formal reports, quick updates)

2. Communication Matrix
   - What: type of communication (status update, decision request, FYI, etc.)
   - Who: which stakeholders receive it
   - When: frequency and timing
   - How: channel and format
   - Owner: who sends it

3. Key Messages by Audience
   - Executive sponsors: what they need to hear and how to frame it
   - Project team: what they need to know and how to keep them engaged
   - Impacted teams: how to manage change and reduce resistance
   - External stakeholders: what to share and what to protect

4. Escalation Protocol
   - When to escalate and to whom
   - How to frame escalation communications
   - Template for escalation emails

5. Risk Communication Plan
   - How to communicate bad news
   - Template for risk/issue notifications
   - How to maintain trust when things go sideways`,
              result:
                'A comprehensive stakeholder communication plan that prevents surprises and builds trust.',
              tip: 'Identify the one stakeholder who can derail the project. Build the communication plan around keeping them aligned.',
            },
            {
              id: 'cn-p-5-3',
              title: 'Meeting Summary and Action Items',
              task: 'Turn meeting notes into a professional summary with action items',
              prompt: `Turn these meeting notes into a professional summary with action items.

Meeting type: [steering committee / working session / stakeholder alignment / client check-in]
Date: [date]
Attendees: [list names and roles]
Duration: [how long]
Context: [what phase of the engagement, what has been discussed previously]

Raw notes:
[Paste your meeting notes - messy is fine]

Generate:

1. Meeting Summary (3-5 sentences)
   - Purpose of the meeting
   - Key topics discussed
   - Decisions made
   - Overall tone and sentiment

2. Key Discussion Points
   For each major topic:
   - Topic heading
   - Summary of discussion (3-4 sentences)
   - Different perspectives shared (if applicable)
   - Resolution or conclusion reached

3. Decisions Made
   - Decision statement
   - Rationale
   - Who made the decision
   - Impact on the engagement

4. Action Items Table
   - Action item description (specific and measurable)
   - Owner
   - Due date
   - Priority (High / Medium / Low)
   - Dependencies

5. Open Items / Parking Lot
   - Items raised but not resolved
   - Proposed timing for resolution
   - Who needs to be involved

6. Next Meeting
   - Proposed date and agenda items
   - Preparation needed from each party

Format for email distribution. Professional but concise.`,
              result:
                'A clean meeting summary ready to distribute within an hour of the meeting ending.',
              tip: 'Send the summary within 2 hours of the meeting. Speed builds trust and prevents "I thought we agreed to..." misunderstandings.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Knowledge Management',
          prompts: [
            {
              id: 'cn-p-6-1',
              title: 'Lessons Learned Document',
              task: 'Create a lessons learned document from an engagement',
              prompt: `Create a lessons learned document from a completed consulting engagement.

Engagement: [project name]
Client: [name and industry]
Duration: [start to end]
Engagement type: [strategy / operations / transformation / advisory]
Team: [who worked on it]
Overall outcome: [successful / partially successful / challenged]

Raw reflections:
[Paste your notes on what went well, what did not, what you would do differently]

Generate a structured lessons learned document:

1. Engagement Summary
   - Client and context (3-4 sentences)
   - Objectives and what was delivered
   - Overall assessment

2. What Went Well (5-7 items)
   For each:
   - The practice or approach
   - Why it worked
   - How to replicate in future engagements
   - Applicable engagement types

3. What Could Be Improved (5-7 items)
   For each:
   - What happened
   - Root cause (why it went sideways)
   - What we would do differently
   - Early warning signs to watch for

4. Client Relationship Insights
   - What the client valued most
   - What frustrated them
   - Communication preferences that emerged
   - Stakeholder management lessons

5. Methodology and Tools
   - Frameworks that worked well (save for reuse)
   - Tools or approaches that fell flat
   - Modifications to standard methodology worth adopting

6. Reusable Assets
   - Templates worth saving (list with descriptions)
   - Frameworks to add to the library
   - Research or data to archive

7. Recommendations for Similar Engagements
   - Top 5 "if I could tell myself one thing before starting" items
   - Staffing and team composition advice
   - Timeline and scoping guidance

Format for internal knowledge base. Searchable and scannable.`,
              result:
                'A structured lessons learned document that makes every future engagement benefit from this one.',
              tip: 'Do this within a week of engagement close while memory is fresh. A month later, you will have forgotten the nuance.',
            },
            {
              id: 'cn-p-6-2',
              title: 'Case Study Writer',
              task: 'Write an internal or external case study from an engagement',
              prompt: `Write a case study from a completed consulting engagement.

Version: [internal (detailed) / external (marketing-ready) / both]
Client: [name - use real name for internal, anonymize for external]
Industry: [industry]
Engagement type: [what you were hired to do]
Duration: [timeline]
Results: [key outcomes and metrics]

Generate:

Internal Version (if applicable):
1. Engagement context and client background
2. The problem as stated vs. the real problem diagnosed
3. Our approach (detailed methodology)
4. Team structure and why it worked
5. Key challenges during the engagement and how we handled them
6. Deliverables produced (list with descriptions)
7. Results and impact (quantified)
8. Client feedback
9. Lessons for future engagements
10. Reusable assets and frameworks

External Version (if applicable):
1. The Challenge (2-3 sentences - relatable industry problem)
2. The Approach (3-4 sentences - methodology without giving away IP)
3. The Results (3-5 bullet points with metrics)
4. Client Quote (draft a plausible testimonial based on the engagement)
5. Key Takeaway (one insight readers can apply to their own situation)

External version should be under 500 words. No jargon. Tell a story that makes prospects think "I have the same problem."`,
              result:
                'Professional case studies for knowledge sharing and business development.',
              tip: 'Get client approval for external case studies before publishing. Offer to let them review the final version.',
            },
            {
              id: 'cn-p-6-3',
              title: 'Methodology Library Entry',
              task: 'Document a methodology or framework for your knowledge library',
              prompt: `Document a consulting methodology or framework for our internal knowledge library.

Methodology name: [name]
Category: [strategy / operations / change management / digital / analytics / other]
Origin: [was this developed internally, adapted from an existing model, or created for a specific client?]
Created by: [team or individual]
Last used: [engagement where it was most recently applied]

Generate a knowledge library entry:

1. Overview
   - Purpose (what business problem it solves)
   - Best use cases (engagement types and client contexts)
   - Limitations (when not to use it)
   - Time to deploy (how long it takes to apply)

2. Methodology Description
   - Visual framework (describe the diagram or model)
   - Core principles (3-5 guiding principles)
   - Phase breakdown with detailed steps
   - Key tools and templates needed at each phase

3. Application Guide
   - Step-by-step: how to apply this from Day 1 of an engagement
   - Client-facing materials needed
   - Internal prep work required
   - Common customization points (what to adjust per client)

4. Templates Package
   - List all associated templates with descriptions
   - How each template connects to the methodology
   - Customization guidelines for each

5. Track Record
   - Engagements where this was used (list with brief context)
   - Results achieved
   - Modifications made per engagement

6. Tips from Practitioners
   - 5 "things I wish I knew" from consultants who have used this
   - Common mistakes and how to avoid them
   - Client reactions and how to handle them

7. Tags and Keywords
   - Industry tags
   - Capability tags
   - Engagement type tags
   - Search keywords

Format for easy browsing and searchability. Include version number and last-updated date.`,
              result:
                'A complete methodology entry that makes your intellectual capital accessible and reusable.',
              tip: 'Assign an owner to each methodology. Without ownership, knowledge libraries decay within 6 months.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves you in a typical consulting month.',
      timeTable: [
        {
          task: 'Proposal and SOW writing',
          without: '6-10 hours/proposal',
          withAI: '1-2 hours',
          saved: '6 hrs/proposal',
        },
        {
          task: 'Framework development',
          without: '1-2 days',
          withAI: '2-3 hours',
          saved: '8+ hrs',
        },
        {
          task: 'Client deliverables',
          without: '4-8 hours each',
          withAI: '1-2 hours',
          saved: '5 hrs/deliverable',
        },
        {
          task: 'Presentation decks',
          without: '4-8 hours/deck',
          withAI: '45-90 minutes',
          saved: '5 hrs/deck',
        },
        {
          task: 'Stakeholder communications',
          without: '5-8 hours/week',
          withAI: '1-2 hours/week',
          saved: '5 hrs/week',
        },
        {
          task: 'Knowledge management',
          without: 'Rarely done',
          withAI: '30 min/engagement',
          saved: 'Infinite - done',
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
          heading: 'The Consulting Edge',
          paragraphs: [
            'In 2026, the consultant using AI submits proposals in 2 hours instead of 2 days. They show up to client meetings with polished decks, structured frameworks, and comprehensive analysis - every single time. Their competitor is still formatting slides at midnight. Same expertise, same experience, radically different output velocity.',
            'The gap is not talent. It is leverage.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a consultant to spend your days writing SOWs and formatting PowerPoint. You became a consultant because you solve problems others cannot. AI gives you back the time to actually think, advise, and create value - instead of producing documents.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Proposal writing is the fastest win. You will feel the difference after your first AI-drafted proposal.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI will be part of your consulting workflow. Follow along and check each step.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'cn-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'cn-1-2', label: 'Create a free Perplexity account' },
            { id: 'cn-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Draft a Proposal',
          duration: '25 min',
          items: [
            {
              id: 'cn-2-1',
              label: 'Run the Consulting Proposal Generator for a real or upcoming engagement',
            },
            {
              id: 'cn-2-2',
              label: 'Generate a SOW using the Statement of Work Builder prompt',
            },
            {
              id: 'cn-2-3',
              label: 'Compare: how long would this have taken from scratch?',
            },
          ],
        },
        {
          day: 3,
          title: 'Build a Framework',
          duration: '20 min',
          items: [
            {
              id: 'cn-3-1',
              label: 'Use the Strategic Framework Builder for a real client challenge',
            },
            {
              id: 'cn-3-2',
              label: 'Save the framework output to your methodology library',
            },
          ],
        },
        {
          day: 4,
          title: 'Create a Deliverable',
          duration: '25 min',
          items: [
            {
              id: 'cn-4-1',
              label: 'Run the Analysis Report Generator with real engagement findings',
            },
            {
              id: 'cn-4-2',
              label: 'Generate an executive presentation using the Executive Presentation Builder',
            },
          ],
        },
        {
          day: 5,
          title: 'Manage Stakeholders',
          duration: '20 min',
          items: [
            {
              id: 'cn-5-1',
              label: 'Generate a RACI matrix for your current engagement',
            },
            {
              id: 'cn-5-2',
              label: 'Turn your last meeting notes into a professional summary',
            },
            {
              id: 'cn-5-3',
              label: 'Build a stakeholder communication plan',
            },
          ],
        },
        {
          day: 6,
          title: 'Capture Knowledge',
          duration: '20 min',
          items: [
            {
              id: 'cn-6-1',
              label: 'Write a lessons learned document for a recent engagement',
            },
            {
              id: 'cn-6-2',
              label: 'Create a case study from your best recent project',
            },
            {
              id: 'cn-6-3',
              label: 'Document one methodology for your knowledge library',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systematize',
          duration: '15 min',
          items: [
            {
              id: 'cn-7-1',
              label: 'Which system saved you the most time this week?',
            },
            {
              id: 'cn-7-2',
              label: 'Set up a recurring workflow for your top 2 AI use cases',
            },
            {
              id: 'cn-7-3',
              label: 'Share this guide with a consulting colleague who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
