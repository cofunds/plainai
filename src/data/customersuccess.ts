import type { WorkbookData } from './types'

export const customersuccessData = {
  professionId: 'customersuccess',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Customer Success Managers',
  heroDescription:
    'Retain more customers, drive expansion, and run QBRs that actually impress. Real tools, proven workflows, and copy-paste prompts for onboarding, renewals, health scores, and churn prevention.',

  chapters: {
    ch1: {
      paragraphs: [
        'You open your CRM to 47 accounts. Twelve renewals are coming up in the next 60 days. Three are at risk - you can feel it, but you have not had time to build the data case yet. There is a QBR next Tuesday for your largest account and the deck is nowhere close to done. The new customer who signed last month still has not completed onboarding because the kickoff call kept getting rescheduled and now you are worried about time-to-value.',
        'Your inbox has an NPS detractor response that needs a personal follow-up. A champion at one of your mid-market accounts just left the company and you need a re-engagement plan before the new stakeholder questions the contract. Product shipped a feature last week that two of your accounts have been asking about for months, but you have not had time to build the enablement message. And somewhere in your task list is an expansion opportunity you identified three weeks ago that keeps getting bumped.',
        'You became a CSM because you genuinely care about helping customers succeed. You are part advisor, part project manager, part relationship builder, and part revenue driver. But instead of spending your time on the strategic conversations and proactive outreach that actually prevent churn and drive growth, you are buried in QBR prep, email writing, data gathering, and administrative tasks that consume your week.',
      ],
      highlight:
        'What if AI handled the prep work, the writing, and the analysis - so you could focus on the customer relationships that actually drive retention and expansion?',
      closingParagraph:
        'Not replacing your empathy. Not automating your relationships. Just compressing the 5 hours of preparation between identifying a risk or opportunity and being ready to act on it - down to 30 minutes.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to build trust with your customers. It cannot sense the frustration behind a polite email or tell when an executive is losing confidence in your product. It will not know that the real reason an account is at risk is because their internal champion got passed over for a promotion and is disengaging. The relationship intelligence that separates great CSMs from average ones - that is human. AI does not have it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most organized, data-savvy CSM assistant you could imagine. One who can build a QBR deck overnight, draft a personalized onboarding email sequence in 5 minutes, analyze usage data and flag churn risks before you see them, and write renewal conversation talking points tailored to each account\'s specific situation.',
            'Need to prepare for a renewal conversation with 6 months of context? AI summarizes the relationship history and builds talking points in minutes. Need to create a health score framework? AI designs the model while you validate the weights. Need to turn a detractor response into a recovery plan? AI drafts the outreach while you think through the relationship strategy.',
            'You bring the customer empathy, the relationship context, and the strategic thinking. AI brings the speed, the data synthesis, and the document production. Together, you manage a book of business that would normally require a team of three.',
          ],
        },
      ],
      keyInsight:
        'Your relationship skills + AI\'s prep speed = more proactive outreach, better-prepared conversations, and customers who feel like they are your only account.',
    },

    ch3: {
      intro: 'Five tools that cover the full customer success workflow. Start with two, add from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and strategy engine',
          description:
            'Email sequences, QBR content, renewal scripts, churn analysis, customer communication - any text-heavy CS task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your deep analysis and planning partner',
          description:
            'Complex account analysis, health score frameworks, detailed playbooks, nuanced customer communication that requires depth and context',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for planning',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Customer industry research, competitor moves, market trends affecting your accounts, benchmarking best practices for CS metrics',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your account intelligence hub',
          description:
            'Account plans, meeting notes, playbook libraries, onboarding trackers, renewal calendars, team knowledge base',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your presentation designer',
          description:
            'QBR decks, executive business reviews, customer training materials, onboarding guides, and visual reports for non-technical stakeholders',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Make QBRs visual',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing and analysis. Add Perplexity when you need customer industry context. That combination covers 80% of your prep work.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual customer success workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Customer Onboarding Automation',
          before:
            'Every new customer gets a slightly different onboarding experience depending on how busy you are that week. The kickoff email takes 30 minutes to write. The onboarding plan lives in your head. Milestone check-ins get missed because there is no structured follow-up sequence. Time-to-value stretches because nobody is tracking the critical early steps consistently.',
          after:
            'AI generates a customized onboarding plan based on the customer\'s use case, size, and goals. It writes the entire email sequence - welcome, kickoff prep, milestone check-ins, and early success celebration. Every customer gets a consistent, personalized experience, and your onboarding time-to-value drops dramatically.',
          flow: [
            'Input customer details - company, use case, goals, team size, plan tier',
            'AI generates a tailored onboarding plan with milestones and timelines',
            'AI creates a complete email sequence for each onboarding phase',
            'Review and personalize based on your knowledge of the customer',
            'Schedule the sequence and track milestone completion',
          ],
          timeSaved: { without: '3-5 hours/customer', withAI: '30-45 minutes' },
        },
        {
          id: 2,
          name: 'QBR Preparation and Delivery',
          before:
            'QBR prep is a two-day affair. You pull usage data from one system, support ticket history from another, and revenue data from a third. Then you build the deck from scratch every time - value delivered, adoption metrics, support summary, success plan update, and recommendations. The whole process feels like it takes longer than the meeting itself.',
          after:
            'You feed AI the account data and context. It generates a complete QBR deck - executive summary, value delivered with metrics, adoption analysis, support review, strategic recommendations, and a success plan update. You spend your prep time thinking about the conversation strategy, not producing slides.',
          flow: [
            'Gather account data - usage metrics, support history, revenue, goals',
            'AI generates a complete QBR slide deck with all sections',
            'Review the data presentation and sharpen the strategic recommendations',
            'AI creates executive talking points and anticipated questions',
            'Customize for the specific stakeholders in the room',
          ],
          timeSaved: { without: '4-8 hours/QBR', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'Churn Risk Analysis',
          before:
            'You know some accounts are at risk but your evidence is anecdotal. Low engagement here, a frustrated support ticket there, a champion who stopped responding. Building a data-driven case for intervention takes hours of pulling metrics and cross-referencing signals. By the time you finish the analysis, the at-risk window has narrowed.',
          after:
            'AI analyzes the risk signals - usage trends, engagement patterns, support sentiment, stakeholder changes, and renewal timeline. It generates a risk assessment with a severity score, contributing factors, and a recommended intervention playbook. You act in hours instead of weeks.',
          flow: [
            'Input account signals - usage data, support tickets, engagement history, stakeholder changes',
            'AI generates a churn risk assessment with severity scoring',
            'Review the risk factors and add relationship context AI cannot see',
            'AI creates an intervention playbook tailored to the risk type',
            'Execute the playbook and track recovery progress',
          ],
          timeSaved: { without: '2-4 hours/account', withAI: '20-30 minutes' },
        },
        {
          id: 4,
          name: 'Renewal and Expansion Playbooks',
          before:
            'Renewal conversations happen reactively - 30 days before expiry, you scramble to build the business case. Expansion opportunities get identified but not pursued because building the proposal takes too long. Each renewal and upsell conversation requires custom preparation that competes with your daily firefighting.',
          after:
            'AI builds renewal preparation packages months in advance - value summaries, ROI calculations, risk assessments, and conversation scripts. For expansion, AI identifies signals from usage data and generates tailored proposals. You walk into every renewal and expansion conversation fully prepared.',
          flow: [
            'Input account history - contract terms, usage, value delivered, relationship health',
            'AI generates a renewal readiness assessment and value summary',
            'For expansion: AI identifies opportunities from usage patterns and goals',
            'AI creates conversation scripts and objection handling guides',
            'Review and add personal relationship context before outreach',
          ],
          timeSaved: { without: '3-6 hours/renewal', withAI: '45-60 minutes' },
        },
        {
          id: 5,
          name: 'Customer Health Scoring',
          before:
            'Your health score is a gut feeling. You know which accounts are happy and which are struggling, but there is no framework. When leadership asks "how healthy is the book?" you give a qualitative answer that lacks credibility. Building a real health scoring model would take weeks of analysis you do not have.',
          after:
            'AI helps you design a health scoring framework tailored to your product and customer base. It defines the inputs, weights, scoring logic, and thresholds for Red/Yellow/Green. You validate the model against your intuition, adjust the weights, and have a quantified health view of your entire book within a day.',
          flow: [
            'Define your customer segments and what "healthy" looks like for each',
            'AI designs a health scoring model with weighted inputs and thresholds',
            'Review the model logic and adjust weights based on your experience',
            'AI generates the scoring rubric and implementation guide',
            'Apply to your book and validate against known healthy/unhealthy accounts',
          ],
          timeSaved: { without: '2-4 weeks to build', withAI: '2-3 hours' },
        },
        {
          id: 6,
          name: 'Feedback Loop Management',
          before:
            'NPS responses sit in a spreadsheet. Support ticket trends are in another system. Product feedback from customer calls lives in your notes. Feature requests are scattered across emails. None of it is synthesized. When product asks "what do customers want?" you give an anecdotal answer based on the last three conversations you had.',
          after:
            'AI synthesizes feedback from all sources - NPS, CSAT, support tickets, call notes, and feature requests. It identifies themes, sentiment trends, and prioritized insights. You deliver a data-backed voice-of-the-customer report that product and leadership actually use for planning.',
          flow: [
            'Collect feedback from all sources - surveys, tickets, call notes, emails',
            'AI analyzes sentiment, themes, and patterns across all inputs',
            'Review the synthesis and add context from direct customer relationships',
            'AI generates a voice-of-the-customer report with prioritized insights',
            'Share with product, leadership, and cross-functional partners',
          ],
          timeSaved: { without: 'Rarely done well', withAI: '1-2 hours/month' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every customer success scenario. Copy, paste, fill in the brackets, and get results in minutes.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Customer Onboarding',
          prompts: [
            {
              id: 'cu-p-1-1',
              title: 'Onboarding Email Sequence',
              task: 'Create a complete onboarding email sequence for a new customer',
              prompt: `Create a complete onboarding email sequence for a new customer.

Product: [your product name and what it does]
Customer: [company name, size, industry]
Plan tier: [free / starter / professional / enterprise]
Primary use case: [why they bought your product]
Key stakeholders: [champion name/role, executive sponsor name/role, end users]
Onboarding timeline: [expected days/weeks to full adoption]
Key milestones: [what "success" looks like at each stage]

Generate a [7/10/14]-email onboarding sequence:

Email 1: Welcome (Day 0)
- Warm, personal welcome from their CSM
- What to expect in the onboarding journey
- One easy first action to take today
- Link to kickoff scheduling

Email 2: Kickoff Prep (Day 1-2)
- What to prepare for the kickoff call
- Team members to invite
- Initial configuration checklist

Email 3: Post-Kickoff (Day 3)
- Summary of kickoff decisions
- Immediate next steps with owners
- Links to relevant resources

Email 4: First Milestone Check (Day 5-7)
- Check on progress toward first milestone
- Troubleshooting offer
- Quick tip for a common early blocker

Email 5: Value Moment (Day 10-14)
- Celebrate first value delivered
- Share a relevant success story from a similar customer
- Introduce the next milestone

Email 6: Adoption Check (Day 21)
- Usage check-in with specific adoption metrics
- Address any gaps in team adoption
- Advanced feature introduction

Email 7: Onboarding Complete (Day 30)
- Celebrate successful onboarding
- Transition to ongoing success plan
- Introduce the regular check-in cadence
- NPS or satisfaction pulse check

For each email: subject line, body text, CTA, and internal notes on when to escalate if there is no engagement.
Tone: helpful, proactive, and human. Never robotic.`,
              result:
                'A complete onboarding email sequence that guides every new customer to value consistently.',
              tip: 'Customize Email 5 (Value Moment) the most. This is where the customer decides if your product was worth buying.',
            },
            {
              id: 'cu-p-1-2',
              title: 'Onboarding Plan Builder',
              task: 'Create a structured onboarding plan with milestones',
              prompt: `Create a structured onboarding plan for a new customer.

Product: [your product name]
Customer: [company name]
Industry: [their industry]
Company size: [number of users/seats]
Use case: [their primary goal with your product]
Technical complexity: [low / medium / high - any integrations needed?]
Stakeholders: [who is involved from their side]
Timeline expectation: [when they need to be live/productive]

Generate a complete onboarding plan:

1. Onboarding Overview
   - Objective (what success looks like at onboarding completion)
   - Timeline (phase-by-phase breakdown)
   - Team (who is involved from both sides)
   - Communication cadence (meeting frequency during onboarding)

2. Phase 1: Setup and Configuration (Week 1)
   - Tasks with owners and deadlines
   - Technical requirements and prerequisites
   - Configuration decisions needed from the customer
   - Risk factors and contingency plans

3. Phase 2: Training and Enablement (Week 2-3)
   - Training sessions with topics and attendees
   - Self-serve resources to share
   - Role-specific enablement materials
   - Adoption goals for this phase

4. Phase 3: Go-Live and Early Adoption (Week 3-4)
   - Go-live checklist
   - Support plan for the first week of active use
   - Success metrics to track daily
   - Escalation triggers

5. Phase 4: Optimization and Handoff (Week 4-6)
   - Adoption review against targets
   - Advanced features and next-level training
   - Transition from onboarding to ongoing success
   - First QBR scheduling

6. Success Milestones
   - Milestone 1: [first value moment - define specifically]
   - Milestone 2: [team adoption threshold]
   - Milestone 3: [business outcome achieved]
   - For each: definition, target date, measurement method, escalation if missed

7. Risk Register
   - Top 5 onboarding risks for this type of customer
   - Early warning signs
   - Mitigation strategies

Format as a project plan that can be shared with the customer.`,
              result:
                'A professional onboarding plan that sets expectations and drives consistent time-to-value.',
              tip: 'Share this plan with the customer in the kickoff call. Customers who see the full path to success are more likely to stay engaged through the hard parts.',
            },
            {
              id: 'cu-p-1-3',
              title: 'Kickoff Call Agenda and Script',
              task: 'Create a kickoff call agenda with talking points',
              prompt: `Create a kickoff call agenda with talking points for a new customer.

Product: [your product name]
Customer: [company name and what they do]
Why they bought: [the problem they are solving or goal they are pursuing]
Contract value: [ARR/deal size - for internal context]
Attendees from customer: [names, roles]
Attendees from our team: [names, roles]
Duration: [30 / 45 / 60 minutes]
Known context: [anything learned during the sales process]

Generate:

1. Pre-Call Preparation
   - Research to do on the customer before the call
   - Internal alignment needed (notes from sales handoff)
   - Materials to prepare and share in advance

2. Call Agenda (with time allocation)
   - Welcome and introductions (X min)
   - Goals and success criteria alignment (X min)
   - Onboarding plan walkthrough (X min)
   - Technical setup discussion (X min)
   - Communication preferences and cadence (X min)
   - Q&A and next steps (X min)

3. Talking Points for Each Section
   - Key questions to ask the customer
   - Information to share proactively
   - Landmine topics to avoid or handle carefully
   - How to steer if the conversation goes off track

4. Discovery Questions (10-12 questions)
   - Business goals and success metrics
   - Team structure and decision-making process
   - Current workflows and pain points
   - Previous tool experience (what worked, what did not)
   - Timeline pressures and dependencies
   - Internal champion and executive sponsor dynamics

5. Post-Call Follow-Up Template
   - Summary email with decisions and next steps
   - Onboarding plan (attached or linked)
   - Action items with owners and dates
   - Calendar invites for upcoming milestones

Tone: confident, organized, and customer-focused. Set the tone for a trusted advisor relationship from day one.`,
              result:
                'A professional kickoff call structure that builds trust and sets the engagement up for success.',
              tip: 'Spend 60% of the kickoff listening. The more you learn about their goals in the first call, the better every future interaction will be.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - QBR Preparation',
          prompts: [
            {
              id: 'cu-p-2-1',
              title: 'QBR Slide Content Generator',
              task: 'Generate complete QBR presentation content',
              prompt: `Generate complete QBR presentation content for a customer account.

Customer: [company name]
Industry: [their industry]
Contract: [plan tier, ARR, contract start/renewal date]
CSM: [your name]
QBR date: [date]
Attendees: [who will be in the room from their side]

Account data this quarter:
- Usage metrics: [key product usage numbers]
- Adoption: [percentage of team actively using, new features adopted]
- Support: [number of tickets, resolution time, satisfaction]
- Value delivered: [specific outcomes or ROI data]
- Engagement: [meeting attendance, response times, NPS/CSAT]

Goals from last QBR: [what was agreed as priorities]
Progress against goals: [status update for each goal]

Generate a QBR deck:

Slide 1: Executive Summary
- Overall account health (Green/Yellow/Red with reasoning)
- Top 3 highlights from this quarter
- Top priority for next quarter

Slide 2: Value Delivered
- Specific outcomes tied to their original goals
- ROI metrics where quantifiable
- Comparison to benchmarks or similar customers

Slide 3: Adoption and Usage
- Key usage trends with quarter-over-quarter comparison
- Feature adoption highlights
- Areas of underutilization with recommendations

Slide 4: Support Review
- Ticket volume and trends
- Resolution metrics
- Key issues resolved and their impact
- Proactive improvements made

Slide 5: Goal Progress
- Status of each goal from last QBR
- Evidence of progress or blockers
- Adjusted timeline if needed

Slide 6: Strategic Recommendations
- 3-4 recommendations for next quarter
- Expected impact of each
- Resource requirements from their side

Slide 7: Success Plan Update
- Updated goals for next quarter
- Milestones and measurement criteria
- Action items with owners

Slide 8: Open Discussion
- Questions for the customer
- Feedback request
- Topics they want to discuss

For each slide: content, key talking point, and the question most likely to come up.`,
              result:
                'A complete QBR deck that demonstrates value and drives strategic conversation.',
              tip: 'Share the deck 48 hours before the QBR. Customers who review in advance engage more deeply in the meeting.',
            },
            {
              id: 'cu-p-2-2',
              title: 'QBR Executive Summary Writer',
              task: 'Write an executive summary for a QBR',
              prompt: `Write an executive summary for a Quarterly Business Review.

Customer: [company name]
Executive attending: [name and role of the senior-most person from the customer]
Account health: [Green / Yellow / Red]
Relationship context: [any personal dynamics, recent changes, or sensitivities]

Quarter highlights:
- Win 1: [describe with data]
- Win 2: [describe with data]
- Win 3: [describe with data]

Quarter challenges:
- Challenge 1: [describe with status and plan]
- Challenge 2: [describe with status and plan]

Key metric: [the one number that best represents value this quarter]
Comparison: [vs. last quarter and vs. their goal]

Generate 3 versions of the executive summary:

Version A: Value-Led (for executives focused on ROI)
- Open with the key business outcome delivered
- Quantify the impact in their language (revenue, efficiency, cost savings)
- Frame challenges as investments in long-term success
- Close with the opportunity ahead

Version B: Partnership-Led (for relationship-focused executives)
- Open with the strength of the partnership
- Highlight collaborative achievements
- Address challenges with shared ownership language
- Close with the vision for the next phase

Version C: Growth-Led (for executives interested in expansion)
- Open with the trajectory and momentum
- Show adoption growth and expanding use cases
- Identify untapped potential with specific examples
- Close with expansion opportunity and next steps

Each version under 200 words. Tone: strategic advisor, not account manager. Speak to their business goals, not your product features.`,
              result:
                'Three executive summary options tailored to different stakeholder priorities.',
              tip: 'Choose the version that matches the executive\'s communication style. If you are unsure, Version A (Value-Led) is the safest bet.',
            },
            {
              id: 'cu-p-2-3',
              title: 'QBR Follow-Up Email',
              task: 'Write a QBR follow-up email with action items',
              prompt: `Write a QBR follow-up email with action items.

Customer: [company name]
QBR date: [date]
Attendees: [list names and roles]
Overall tone of the meeting: [positive / mixed / tense / productive]

Key decisions made:
[List 3-5 decisions from the meeting]

Action items agreed:
[List all action items with preliminary owners]

Open items:
[List anything unresolved]

Next steps discussed:
[List what was agreed for the next quarter]

Generate:

1. Follow-Up Email (send within 24 hours)
   - Subject line that reinforces the positive momentum
   - Thank the attendees by name
   - 2-3 sentence recap of the meeting highlights
   - Decisions made (bulleted, clear)
   - Action items table (action, owner, due date)
   - Open items with proposed resolution path
   - Next meeting date and preliminary agenda
   - Warm closing that reinforces the partnership

2. Internal Debrief Notes
   - Account health assessment post-QBR
   - Relationship dynamics observed
   - Risks or concerns that surfaced
   - Expansion signals identified
   - Competitive mentions (if any)
   - Internal action items (things we need to do that we did not commit to the customer)
   - Talking points for your manager/leadership

3. Success Plan Update
   - Updated goals based on QBR discussion
   - Revised milestones and timelines
   - New success metrics agreed upon
   - Changes to the engagement cadence

Tone: professional, warm, and action-oriented. The follow-up email sets the tone for the next quarter.`,
              result:
                'A comprehensive QBR follow-up package - external email, internal debrief, and updated success plan.',
              tip: 'Send the follow-up within 4 hours of the QBR. Speed demonstrates that you take the partnership seriously.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Churn Prevention',
          prompts: [
            {
              id: 'cu-p-3-1',
              title: 'Churn Risk Assessment',
              task: 'Run a churn risk assessment on an account',
              prompt: `Run a churn risk assessment on this customer account.

Customer: [company name]
Industry: [their industry]
Contract: [plan tier, ARR, renewal date]
Tenure: [how long they have been a customer]
CSM: [your name]

Current signals:
- Usage trend: [increasing / stable / declining - with specifics]
- Engagement: [responsive / mixed / declining - details on meeting attendance, email response]
- Support: [ticket volume trend, sentiment of recent tickets]
- NPS/CSAT: [latest score and trend]
- Champion status: [engaged / distracted / leaving / left]
- Executive sponsor: [engaged / absent / changed]
- Product fit: [strong / adequate / weakening - any emerging gaps]
- Payment: [on time / late / disputed]

Recent events:
[List any recent changes - reorgs, budget cuts, new competitors, product issues]

Generate:

1. Risk Score: [1-10 scale with reasoning]
   - Critical risk factors (weighted by impact)
   - Protective factors (what is still working)
   - Overall assessment: Low Risk / Moderate Risk / High Risk / Critical

2. Risk Factor Breakdown
   For each risk signal:
   - What the data shows
   - Why it matters
   - How serious it is (1-5)
   - Historical context (is this new or ongoing)

3. Root Cause Hypothesis
   - Most likely reason for the risk (primary hypothesis)
   - Alternative explanations (what else could explain these signals)
   - What information you need to confirm the root cause

4. Intervention Playbook
   - Immediate actions (this week)
   - Short-term plan (next 30 days)
   - Long-term recovery strategy (30-90 days)
   - Escalation triggers (when to involve leadership)

5. Save Conversation Script
   - Opening: acknowledge the situation without being defensive
   - Discovery: questions to understand their perspective
   - Response: how to address their specific concerns
   - Commitment: what you can offer to rebuild confidence
   - Next steps: specific, time-bound actions

6. Internal Escalation Summary
   - Summary for your manager in 5 sentences
   - What support you need from internal teams
   - Financial impact if this account churns`,
              result:
                'A comprehensive churn risk assessment with intervention strategy and conversation scripts.',
              tip: 'Act on moderate risk before it becomes critical. By the time an account reaches critical risk, your chances of saving it have dropped by 60%.',
            },
            {
              id: 'cu-p-3-2',
              title: 'Win-Back Campaign Builder',
              task: 'Create a win-back campaign for a churned or churning customer',
              prompt: `Create a win-back campaign for a customer who has churned or given notice.

Customer: [company name]
Reason for churn: [cost / competitor / product gap / poor experience / business change / other]
Contract end date: [date]
ARR being lost: [amount]
Decision maker: [name and role]
Relationship history: [brief summary of the CSM relationship]
What we have done so far: [any save attempts already made]

Generate:

1. Win-Back Strategy
   - Assessment: is this account recoverable? (yes / maybe / unlikely)
   - Key leverage points (what could change their mind)
   - Deal-breakers (what we cannot solve and should not promise)
   - Optimal timing for the win-back attempt

2. Personalized Outreach Sequence (5 touches over 30 days)

   Touch 1 (Day 1): The Honest Conversation
   - Acknowledge the situation without blame
   - Express genuine interest in understanding
   - Ask for a 15-minute conversation

   Touch 2 (Day 7): The Value Reminder
   - Share a specific result or outcome they achieved
   - Reference the original problem they came to solve
   - Subtle reminder of what they are walking away from

   Touch 3 (Day 14): The Improvement Message
   - Share what has changed since their decision (new features, improvements, process changes)
   - Address their specific concern with concrete evidence
   - Offer a trial or reduced commitment to rebuild trust

   Touch 4 (Day 21): The Peer Story
   - Share a story of a similar customer who faced the same issue and stayed/returned
   - Include specific outcomes they achieved
   - Low-pressure ask for reconsideration

   Touch 5 (Day 30): The Door Stays Open
   - Graceful close if no response
   - Genuine well-wishes
   - Clear offer: if circumstances change, we are here
   - Leave a personal connection point

3. Concession Framework
   - What we can offer (discount, extended trial, dedicated support, feature priority)
   - What we should not offer (and why)
   - Approval process for each concession level

4. Internal Communication
   - Summary for leadership on win-back plan and probability
   - Support needed from product/engineering/leadership
   - Timeline and checkpoints`,
              result:
                'A structured win-back campaign with messaging, concession framework, and internal alignment.',
              tip: 'The most powerful win-back message is evidence that you fixed the thing they left over. If you cannot show that, focus on maintaining the relationship for a future return.',
            },
            {
              id: 'cu-p-3-3',
              title: 'At-Risk Account Playbook',
              task: 'Build a playbook for a specific at-risk scenario',
              prompt: `Build a playbook for this specific at-risk customer scenario.

Scenario: [choose one]
- Champion departure
- Executive sponsor change
- Budget cut announcement
- Competitive evaluation started
- Product outage or major bug impact
- Team restructuring at customer
- Usage drop of [X]% in the last [timeframe]
- Negative NPS response from key stakeholder

Account context:
- Customer: [name, industry, ARR]
- Tenure: [how long a customer]
- Current health: [before this event]
- Key relationships: [who you know and how strong]
- Contract status: [months until renewal]

Generate a scenario-specific playbook:

1. Situation Assessment
   - Why this scenario is dangerous
   - How quickly you need to act
   - Probability of churn if unaddressed (estimated)

2. Immediate Response (48 hours)
   - Actions to take right now (specific and ordered)
   - Who to contact first and what to say
   - Internal teams to alert
   - Information to gather urgently

3. Stabilization Plan (Week 1-2)
   - Steps to secure the relationship
   - New stakeholders to engage and how
   - Value reinforcement tactics
   - Communication cadence during the crisis

4. Recovery Plan (Week 3-8)
   - How to rebuild confidence/momentum
   - New success metrics to establish
   - Engagement model adjustments
   - Executive alignment activities

5. Communication Templates
   - Initial outreach message for this scenario
   - Follow-up after first conversation
   - Stakeholder update (internal)
   - Escalation request (if needed)

6. Success Criteria
   - How to know the risk has been mitigated
   - Metrics to track during recovery
   - Timeline for returning to "healthy" status

This playbook should be actionable enough to execute immediately when this scenario hits.`,
              result:
                'A ready-to-execute playbook for a specific churn risk scenario.',
              tip: 'Build playbooks for your top 5 risk scenarios before they happen. Having a plan cuts response time from days to hours.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Renewals and Expansion',
          prompts: [
            {
              id: 'cu-p-4-1',
              title: 'Renewal Conversation Script',
              task: 'Create a renewal conversation script with talking points',
              prompt: `Create a renewal conversation script for this account.

Customer: [company name]
Contract details: [plan tier, ARR, renewal date, contract length]
Account health: [Green / Yellow / Red]
Key decision maker for renewal: [name and role]
Champion: [name and role]
Competitive landscape: [are they evaluating alternatives?]

Account summary:
- Value delivered: [specific outcomes with data]
- Usage highlights: [adoption metrics]
- Relationship quality: [strong / good / needs attention]
- Open issues: [any unresolved problems]
- Expansion opportunity: [any upsell potential]

Generate:

1. Pre-Conversation Prep
   - Research to do before the call
   - Data to have ready
   - Internal alignment needed (pricing, concessions, executive support)
   - Likely objections and how to handle each

2. Conversation Script

   Opening (2 min):
   - How to set the tone
   - Transition from relationship to business discussion

   Value Recap (5 min):
   - Top 3 outcomes delivered (with specific data)
   - ROI statement in their business language
   - Comparison to where they were before

   Forward Look (5 min):
   - New goals and how you support them
   - Upcoming product roadmap highlights relevant to them
   - Vision for the next year of the partnership

   Renewal Discussion (5 min):
   - How to introduce the renewal terms
   - Pricing conversation approach
   - Multi-year option if applicable

   Objection Handling:
   - "We need to reduce our budget" - response
   - "We are looking at alternatives" - response
   - "We are not using it enough to justify the cost" - response
   - "The price is too high" - response
   - "We need to involve procurement" - response

   Close (2 min):
   - How to ask for the commitment
   - Next steps and timeline
   - What to do if they need more time

3. Follow-Up Actions
   - Post-conversation email template
   - Internal update for your manager
   - Escalation plan if renewal is at risk`,
              result:
                'A complete renewal conversation guide with value framing, objection handling, and follow-up plans.',
              tip: 'Start the renewal conversation 90 days out. Bringing it up 30 days before expiry puts you in a reactive position.',
            },
            {
              id: 'cu-p-4-2',
              title: 'Expansion Opportunity Proposal',
              task: 'Build an expansion proposal for an existing customer',
              prompt: `Build an expansion proposal for an existing customer.

Customer: [company name]
Current plan: [tier and ARR]
Expansion opportunity: [what you want to sell - more seats, higher tier, new product, additional services]
Expansion value: [additional ARR]
Business case: [why this expansion makes sense for them]
Champion: [who internally supports this]
Budget holder: [who approves the spend]
Timing: [when you want to close this]

Generate:

1. Opportunity Assessment
   - Why this expansion makes sense now
   - Signals that indicate readiness (usage data, requests, team growth)
   - Potential blockers and how to address them

2. Value Proposition (tailored to this specific customer)
   - What the expansion enables that they cannot do today
   - Quantified impact (time saved, revenue enabled, risk reduced)
   - Comparison to cost of the expansion

3. Proposal Document
   - Executive summary (3 sentences)
   - Current state: what they have today and what it delivers
   - Future state: what the expansion adds
   - Investment: pricing with clear breakdown
   - ROI projection: expected return and timeline
   - Implementation plan: how we get them live on the expanded scope
   - Success metrics: how we measure the expansion\'s impact

4. Internal Champion Enablement
   - Talking points for your champion to sell internally
   - One-page executive brief they can forward to the budget holder
   - Anticipated questions from procurement and answers

5. Conversation Guide
   - How to introduce the expansion opportunity naturally
   - How to tie it to their stated goals
   - How to handle "we are happy with what we have"
   - How to create urgency without being pushy

6. Pricing Options
   - Option A: Standard expansion pricing
   - Option B: Expansion with multi-year commitment discount
   - Option C: Phased expansion (start smaller, grow)
   - Recommendation on which to present first`,
              result:
                'A complete expansion proposal package with business case, champion enablement, and conversation strategy.',
              tip: 'Frame the expansion around their goals, not your product features. "This helps you hit your Q3 target" beats "this feature does X."',
            },
            {
              id: 'cu-p-4-3',
              title: 'Renewal Risk Mitigation Plan',
              task: 'Create a mitigation plan for a renewal that is at risk',
              prompt: `Create a mitigation plan for this at-risk renewal.

Customer: [company name]
ARR at risk: [amount]
Renewal date: [date]
Days until renewal: [number]
Risk factors: [list everything contributing to the risk]
Current health score: [Red / Yellow]
Decision maker: [name and role]
Our champion: [name, role, and their current stance]
Competitive threat: [any known alternatives they are evaluating]
Internal escalation status: [who on our side knows about this risk]

Generate:

1. Risk Assessment Matrix
   - Each risk factor scored on likelihood (1-5) and impact (1-5)
   - Overall risk severity: Moderate / High / Critical
   - Probability of renewal at current trajectory: [%]

2. Stakeholder Strategy
   - Who we need to influence and in what order
   - Current relationship map (supporters, neutrals, detractors)
   - Specific approach for each key stakeholder
   - Executive engagement plan (do we need exec-to-exec outreach?)

3. Value Reinforcement Campaign (next 30-60 days)
   - Week 1: [specific actions and communications]
   - Week 2: [specific actions and communications]
   - Week 3-4: [specific actions and communications]
   - Week 5-8: [specific actions and communications]
   - Each with specific talking points and deliverables

4. Concession Strategy
   - What we can offer to save the deal (ordered by cost to us)
   - When to introduce each concession (do not lead with discounts)
   - Walk-away threshold (minimum acceptable terms)
   - Approval chain for each concession level

5. Competitive Response
   - How to position against the specific alternative they are evaluating
   - Switching cost analysis to share with the customer
   - Risk of change narrative (what they lose by leaving)
   - Where we genuinely win vs. the competitor

6. Internal Alignment
   - Who needs to be involved from our side (sales, product, executive)
   - Specific asks for each internal partner
   - Weekly check-in cadence until renewal is secured
   - Escalation triggers and timeline

7. Save Probability Assessment
   - If we execute this plan: estimated save probability
   - Best case scenario outcome
   - Worst case scenario and contingency plan`,
              result:
                'A comprehensive renewal save plan that coordinates stakeholders, messaging, and concessions.',
              tip: 'Start with value reinforcement before any concession discussion. Many at-risk renewals are not about price - they are about perceived value.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Health Scoring',
          prompts: [
            {
              id: 'cu-p-5-1',
              title: 'Customer Health Score Framework',
              task: 'Design a customer health scoring model',
              prompt: `Design a customer health scoring model for my customer base.

Product: [what your product does]
Customer segments: [enterprise / mid-market / SMB - or describe your segments]
Average contract value: [range]
Typical customer lifecycle: [how long customers stay on average]
Current churn rate: [approximate]
Data available: [list the data points you can access - usage, support, engagement, NPS, etc.]

Generate a complete health scoring framework:

1. Health Score Components (6-8 weighted inputs)
   For each component:
   - Name (e.g., "Product Adoption", "Stakeholder Engagement")
   - What it measures
   - Data source
   - Scoring criteria:
     - Green (81-100): what this looks like with specific thresholds
     - Yellow (51-80): what this looks like with specific thresholds
     - Red (0-50): what this looks like with specific thresholds
   - Weight in overall score (must total 100%)
   - Why this weight (reasoning for the importance)

2. Overall Score Interpretation
   - 81-100: Healthy - expected actions and engagement cadence
   - 61-80: Needs Attention - recommended interventions
   - 41-60: At Risk - escalation and intervention playbook
   - 0-40: Critical - immediate action plan

3. Segment Adjustments
   - How weights should differ by customer segment
   - Different thresholds for enterprise vs. SMB
   - Lifecycle stage adjustments (new customer vs. mature customer)

4. Trending Analysis
   - How to track score changes over time
   - Significant change thresholds (when does a change matter)
   - Leading indicators (which components predict future churn)

5. Operationalization
   - How often to calculate scores
   - How to display and distribute scores
   - Alert triggers and notification rules
   - Quarterly calibration process (how to validate the model)

6. Action Framework
   - For each score band: specific CSM actions and cadence
   - Escalation rules by score and trend
   - Resource allocation guidance based on portfolio health distribution

Make this implementable with commonly available CS tools. Avoid complexity that requires custom engineering.`,
              result:
                'A complete health scoring framework you can implement and operationalize within a week.',
              tip: 'Start with 4-5 components and add complexity later. A simple score that everyone trusts is better than a complex one that nobody uses.',
            },
            {
              id: 'cu-p-5-2',
              title: 'Account Health Review Template',
              task: 'Create a structured account health review document',
              prompt: `Create a structured account health review for this customer.

Customer: [company name]
Segment: [enterprise / mid-market / SMB]
CSM: [your name]
Review date: [date]
Last review date: [date]

Current data:
- Usage: [key usage metrics and trends]
- Engagement: [meeting attendance, email response, champion activity]
- Support: [ticket volume, sentiment, resolution satisfaction]
- Financial: [ARR, payment status, expansion/contraction]
- NPS/CSAT: [latest scores]
- Product adoption: [features used vs. available]
- Stakeholder map: [key contacts and their engagement levels]

Generate:

1. Health Dashboard
   - Overall health score with component breakdown
   - Trend: Improving / Stable / Declining (with evidence)
   - Previous quarter comparison

2. Component Deep-Dive
   For each health component:
   - Current score and trend
   - Key data points supporting the assessment
   - Comparison to last review
   - Comparison to segment average

3. Risk and Opportunity Analysis
   - Top 3 risks (what could go wrong)
   - Top 3 opportunities (where can we grow value or expand)
   - Competitive threats (any signals of evaluation)

4. Relationship Map Status
   - Champion: strength and engagement trend
   - Executive sponsor: involvement level
   - End users: adoption and satisfaction
   - New stakeholders to engage
   - Relationships that have weakened

5. Action Plan
   - Immediate actions (this week)
   - This month priorities
   - This quarter goals
   - Success metrics for each action

6. CSM Notes
   - Qualitative assessment (the gut-feel context that data does not capture)
   - Concerns not reflected in the data
   - Positive signals not reflected in the data
   - Ask from manager or team

Format for a 10-minute review with your CS manager. Data-driven but include the human context.`,
              result:
                'A structured account health review that combines data and relationship intelligence.',
              tip: 'Do this monthly for your top 20% of accounts (by ARR). Quarterly for the rest. The discipline of regular reviews catches drift early.',
            },
            {
              id: 'cu-p-5-3',
              title: 'Portfolio Health Report',
              task: 'Create a portfolio-level health report for CS leadership',
              prompt: `Create a portfolio-level health report for CS leadership review.

CSM: [your name]
Portfolio size: [number of accounts]
Total ARR managed: [amount]
Reporting period: [quarter/month]

Portfolio summary:
- Green accounts: [number and % of ARR]
- Yellow accounts: [number and % of ARR]
- Red accounts: [number and % of ARR]
- New accounts this period: [number]
- Churned accounts this period: [number and ARR lost]

Key metrics:
- Net retention rate: [%]
- Gross retention rate: [%]
- Expansion revenue: [amount]
- NPS average: [score]
- Average health score: [score]

Generate:

1. Executive Summary
   - Portfolio health in 3-4 sentences
   - Biggest win this period
   - Biggest concern this period
   - Outlook for next quarter

2. Portfolio Overview
   - Health distribution chart description (pie/bar)
   - ARR by health band
   - Trend vs. last period
   - Benchmark vs. team/company average

3. Account Highlights
   - Top 3 success stories (account, what happened, impact)
   - Top 3 at-risk accounts (account, risk factors, mitigation plan)
   - Top 3 expansion opportunities (account, opportunity, next step)

4. Renewal Pipeline
   - Renewals coming in next 90 days
   - Confidence level for each (committed / likely / at risk)
   - ARR at risk and mitigation status

5. Key Themes
   - Common patterns across healthy accounts (what is working)
   - Common patterns across unhealthy accounts (what is failing)
   - Product feedback trends from customers
   - Competitive mentions and trends

6. Resource and Support Needs
   - Where you need help from product, engineering, or leadership
   - Accounts that need executive engagement
   - Process improvements that would help the portfolio

7. Goals for Next Period
   - Specific, measurable targets
   - Focus areas and priority accounts
   - Personal development goals

Format for a 15-minute leadership review. Lead with outcomes, support with data.`,
              result:
                'A leadership-ready portfolio health report that demonstrates strategic management of your book of business.',
              tip: 'Include the "themes" section. Leadership cares about patterns across accounts as much as individual account status.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Feedback Management',
          prompts: [
            {
              id: 'cu-p-6-1',
              title: 'NPS Follow-Up Template Generator',
              task: 'Create personalized NPS follow-up communications',
              prompt: `Create personalized NPS follow-up communications.

Product: [your product]
Survey type: [NPS / CSAT / CES]
Response received: [Promoter (9-10) / Passive (7-8) / Detractor (0-6)]
Score given: [specific number]
Verbatim feedback: [paste the customer's open-ended response]
Customer: [company name]
Respondent: [name and role]
Account health: [current health status]
CSM relationship with this person: [strong / developing / limited]

Generate personalized follow-up for each scenario:

If Promoter (9-10):
1. Thank you email
   - Genuine appreciation (not generic)
   - Reference their specific feedback
   - Ask if they would be willing to:
     - Serve as a reference
     - Join a case study
     - Leave a G2/review site rating
     - Speak at an event or webinar
   - Subtle expansion or referral ask
   - Make it easy to say yes (one-click links)

If Passive (7-8):
1. Engagement email
   - Acknowledge the rating honestly
   - Ask what would make it a 9 or 10
   - Share one specific improvement made recently
   - Offer a brief call to understand their experience
   - Include a specific value-add (training, best practices, feature tip)

If Detractor (0-6):
1. Recovery email
   - Acknowledge the feedback with empathy (no defensiveness)
   - Take ownership of the experience
   - Specific reference to their verbatim feedback
   - Concrete action you are taking in response
   - Ask for a 15-minute call to listen and understand
   - Escalation to management if score is 0-3

2. Internal Escalation Note
   - Summary of the detractor response for your manager
   - Root cause hypothesis
   - Proposed recovery plan
   - Risk to the account
   - Support needed

3. 30-Day Follow-Up
   - Update on actions taken since their feedback
   - Evidence of improvement
   - Request for updated assessment

Tone: personal, genuine, and action-oriented. Never feel automated.`,
              result:
                'Personalized NPS follow-up communications for every score band.',
              tip: 'Follow up on detractors within 24 hours. Speed of response is the single biggest factor in whether a detractor becomes a promoter.',
            },
            {
              id: 'cu-p-6-2',
              title: 'Voice of Customer Report',
              task: 'Synthesize customer feedback into a voice-of-customer report',
              prompt: `Synthesize customer feedback into a voice-of-customer report.

Reporting period: [month / quarter]
Number of customers represented: [count]
Data sources included:
- NPS responses: [count and average score]
- CSAT responses: [count and average score]
- Support tickets: [count and themes]
- QBR notes: [count of QBRs conducted]
- CSM call notes: [approximate number of conversations]
- Feature requests: [count]
- Churn reasons: [if any churned, reasons given]

Raw feedback data:
[Paste representative feedback quotes, themes, and patterns you have observed]

Generate:

1. Executive Summary
   - Customer sentiment this period in 3-4 sentences
   - Trend vs. last period
   - The one thing leadership needs to know

2. Sentiment Analysis
   - Overall sentiment: Positive / Mixed / Negative (with distribution)
   - Sentiment by segment
   - Sentiment by tenure
   - Sentiment trend over the last 3 periods

3. Theme Analysis (ranked by frequency and impact)
   For each theme:
   - Theme name
   - Frequency (how many customers mentioned it)
   - Sentiment (positive / negative / mixed)
   - Representative quotes (3-5 actual customer words)
   - Business impact assessment
   - Recommended response

4. Product Feedback
   - Top 5 feature requests (with customer count and revenue weight)
   - Top 5 product complaints (with severity and frequency)
   - Competitive mentions (what customers are comparing us to)
   - Product satisfaction trends

5. Service Feedback
   - What customers appreciate about their CS experience
   - Where we are falling short
   - Specific improvement suggestions

6. Churn and Risk Intelligence
   - Common language that precedes churn decisions
   - Early warning phrases to watch for
   - Unspoken concerns (what customers mean vs. what they say)

7. Recommendations
   - For product team: top 3 priorities based on customer feedback
   - For CS team: top 3 process improvements
   - For leadership: strategic decisions needed

Include enough actual customer quotes to make this report feel grounded in real voices, not abstract analysis.`,
              result:
                'A comprehensive voice-of-customer report that drives cross-functional action.',
              tip: 'Share this with product leadership monthly. CS teams that systematically channel customer voice into product decisions have higher retention rates.',
            },
            {
              id: 'cu-p-6-3',
              title: 'Feature Request Prioritization Brief',
              task: 'Organize and prioritize customer feature requests for product',
              prompt: `Organize and prioritize customer feature requests for the product team.

Product: [your product]
Reporting period: [month / quarter]
Total feature requests collected: [count]

Feature request data:
[List each request with: description, requesting customers (names/segments), frequency, urgency, revenue attached, competitive pressure]

Generate:

1. Request Summary Dashboard
   - Total unique requests
   - Requests by category (UX, functionality, integration, performance, other)
   - New requests vs. recurring asks
   - Trend vs. last period

2. Prioritized Feature Request List
   For each request (top 15):
   - Feature description (standardized)
   - Customer demand score (based on frequency and revenue weight)
   - Business impact: retention risk if not built / expansion enabled if built
   - Competitive pressure: are customers leaving for this feature elsewhere?
   - Effort estimate: small / medium / large (your best guess)
   - Priority recommendation: Critical / High / Medium / Low
   - Representative customer quotes

3. Revenue Impact Analysis
   - Total ARR requesting the top 5 features
   - Churn risk if top 3 requests are not addressed
   - Expansion revenue unlocked if top 3 requests are built
   - Competitive loss analysis (features customers cite when choosing alternatives)

4. Customer Stories
   For each top 5 request, a brief customer story:
   - Who is asking and why
   - How they work around it today
   - What it would enable for their business
   - What happens if we do not build it

5. Recommendation to Product
   - Top 3 "build now" with business justification
   - Top 3 "build next quarter" with reasoning
   - Requests to decline with alternative solutions for customers
   - Requests that need more investigation

Format this as a document the product team will actually read and reference during sprint planning.`,
              result:
                'A structured feature request brief that translates customer needs into product priorities.',
              tip: 'Attach revenue numbers to every request. Product teams prioritize differently when they see the ARR behind a feature ask.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves you in a typical customer success month.',
      timeTable: [
        {
          task: 'Customer onboarding plans',
          without: '3-5 hours/customer',
          withAI: '30-45 minutes',
          saved: '3 hrs/customer',
        },
        {
          task: 'QBR preparation',
          without: '4-8 hours/QBR',
          withAI: '1-2 hours',
          saved: '5 hrs/QBR',
        },
        {
          task: 'Churn risk analysis',
          without: '2-4 hours/account',
          withAI: '20-30 minutes',
          saved: '3 hrs/account',
        },
        {
          task: 'Renewal preparation',
          without: '3-6 hours/renewal',
          withAI: '45-60 minutes',
          saved: '4 hrs/renewal',
        },
        {
          task: 'Health score framework',
          without: '2-4 weeks to build',
          withAI: '2-3 hours',
          saved: 'Weeks - done',
        },
        {
          task: 'Feedback synthesis',
          without: 'Rarely done well',
          withAI: '1-2 hours/month',
          saved: 'Infinite - done',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '25-40 hrs/month',
      },
      sections: [
        {
          heading: 'The CS Edge',
          paragraphs: [
            'In 2026, the CSM using AI shows up to every QBR with a polished deck, tailored talking points, and data-backed recommendations. They catch churn signals weeks earlier. They prepare for renewals months in advance. Their counterpart is still scrambling to pull usage data the night before a QBR. Same customer empathy, same relationship skills, radically different preparation.',
            'The gap is not caring. It is capacity.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a CSM to spend your days building QBR decks and writing status updates. You became one because you help customers succeed - and that success drives the business forward. AI gives you back the time to be proactive, strategic, and present for your customers instead of buried in prep work.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. QBR preparation is the fastest win. You will feel the difference after your first AI-prepared review.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI will be part of your customer success workflow. Follow along and check each step.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'cu-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'cu-1-2', label: 'Create a free Perplexity account' },
            { id: 'cu-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Automate Onboarding',
          duration: '25 min',
          items: [
            {
              id: 'cu-2-1',
              label: 'Run the Onboarding Email Sequence prompt for a real new customer',
            },
            {
              id: 'cu-2-2',
              label: 'Generate an Onboarding Plan Builder for the same customer',
            },
            {
              id: 'cu-2-3',
              label: 'Compare: how long would building these from scratch have taken?',
            },
          ],
        },
        {
          day: 3,
          title: 'Prepare a QBR',
          duration: '25 min',
          items: [
            {
              id: 'cu-3-1',
              label: 'Use the QBR Slide Content Generator for an upcoming review',
            },
            {
              id: 'cu-3-2',
              label: 'Write an executive summary using the QBR Executive Summary Writer',
            },
          ],
        },
        {
          day: 4,
          title: 'Assess Churn Risk',
          duration: '20 min',
          items: [
            {
              id: 'cu-4-1',
              label: 'Run a Churn Risk Assessment on your most at-risk account',
            },
            {
              id: 'cu-4-2',
              label: 'Build an At-Risk Account Playbook for a scenario you face often',
            },
          ],
        },
        {
          day: 5,
          title: 'Prepare for Renewals',
          duration: '25 min',
          items: [
            {
              id: 'cu-5-1',
              label: 'Create a Renewal Conversation Script for your next upcoming renewal',
            },
            {
              id: 'cu-5-2',
              label: 'Build an Expansion Opportunity Proposal for an account with growth potential',
            },
            {
              id: 'cu-5-3',
              label: 'Draft a Renewal Risk Mitigation Plan if any renewals are at risk',
            },
          ],
        },
        {
          day: 6,
          title: 'Build Your Health Framework',
          duration: '25 min',
          items: [
            {
              id: 'cu-6-1',
              label: 'Design a Customer Health Score Framework for your customer base',
            },
            {
              id: 'cu-6-2',
              label: 'Run an Account Health Review for your largest account',
            },
            {
              id: 'cu-6-3',
              label: 'Create a Portfolio Health Report for your manager',
            },
          ],
        },
        {
          day: 7,
          title: 'Close the Feedback Loop',
          duration: '20 min',
          items: [
            {
              id: 'cu-7-1',
              label: 'Generate NPS Follow-Up Templates for recent survey responses',
            },
            {
              id: 'cu-7-2',
              label: 'Identify which AI system saved you the most time this week',
            },
            {
              id: 'cu-7-3',
              label: 'Share this guide with a fellow CSM who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
