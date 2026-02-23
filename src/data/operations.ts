import type { WorkbookData } from './types'

export const operationsData = {
  professionId: 'operations',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Operations Managers',
  heroDescription:
    'Streamline every process, document every workflow, and manage your team like clockwork. Real tools, proven systems, and copy-paste prompts for SOPs, vendor management, KPIs, and team coordination.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 9 AM and your inbox is already a war zone. A vendor missed a delivery window. Two team leads are asking about the same process - and getting different answers because nothing is documented. The quarterly KPI report is due Friday and the data lives in four different spreadsheets that nobody has updated since last month. Meanwhile, the CEO just pinged you about "streamlining operations" as if you had not been trying to do exactly that for the past six months.',
        'You are the person who keeps the engine running. When something breaks, they call you. When something needs to be built, they call you. When someone new joins and asks "how do we do things around here?" - they call you, because the answer lives in your head and nowhere else. You spend 70% of your day firefighting and the other 30% trying to build the systems that would prevent the fires in the first place.',
        'The irony is painful. You know exactly what needs to happen - documented processes, clean dashboards, vendor scorecards, standardized templates. But the work of creating all that takes time you do not have, because you are too busy doing the work that those systems would automate.',
      ],
      highlight:
        'What if you could build those systems in minutes instead of months?',
      closingParagraph:
        'Not by hiring a team of analysts. Not by working weekends. Just by using AI to turn your operational knowledge into documented, repeatable, scalable systems - at the speed your role actually demands.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to run your operations for you. It will not negotiate with vendors, sit in your standups, or magically fix a broken supply chain. It cannot read the room when two departments are clashing over resources. The judgment calls, the relationship management, the ability to prioritize under pressure - that stays with you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient operations analyst you have ever worked with. One who can take your messy process notes and turn them into a polished SOP in 2 minutes. Who can build a KPI dashboard narrative from raw numbers in 90 seconds. Who can draft vendor evaluation scorecards, team communication templates, and budget forecasts without ever needing a coffee break.',
            'Need to document 20 processes before the audit? AI structures them while you review. Need to compare three vendors on 15 criteria? AI builds the scorecard while you gather the data. Need a weekly team update that actually gets read? AI formats your bullet points into something clear and actionable.',
            'You bring the operational expertise, the institutional knowledge, and the judgment. AI brings the speed, the formatting, and the ability to produce polished outputs from rough inputs. Together, you build in a week what used to take a quarter.',
          ],
        },
      ],
      keyInsight:
        'Your operational knowledge + AI\'s speed = systems that actually get built. The ops manager who documents, tracks, and communicates with AI backing them up runs circles around the one still doing it all manually.',
    },

    ch3: {
      intro: 'Five tools that cover the full operations workflow. Start with two, add the rest when you are ready.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your process documentation and writing engine',
          description:
            'SOPs, team communications, vendor emails, budget narratives, workflow descriptions - any text-based operations task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-form documentation partner',
          description:
            'Complex process mapping, detailed vendor comparisons, policy documents, multi-step workflow analysis - excels at structured depth',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed docs',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your operational hub',
          description:
            'SOP libraries, project trackers, team wikis, meeting notes, process databases - your single source of truth with AI built in',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Perplexity',
          role: 'Your research and benchmarking assistant',
          description:
            'Vendor research, industry benchmarks, compliance requirements, best practice guides - sourced answers you can reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Canva AI',
          role: 'Your visual communication tool',
          description:
            'Process flow diagrams, team dashboards, presentation slides, infographics for operational reports and team training materials',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Visualize processes',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Notion AI. That combination covers documentation, analysis, and organization. Add Perplexity for vendor research and Canva for visuals when ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual operations workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'SOP and Process Documentation',
          before:
            'Processes live in people\'s heads. When someone asks "how do we handle X?" the answer depends on who you ask. New hires shadow someone for a week because there is nothing written down. You have been meaning to document everything for months, but writing one SOP takes 2-3 hours and you have 40 processes that need it.',
          after:
            'You brain-dump a process - even messily - and AI turns it into a clean, numbered SOP with purpose statements, step-by-step instructions, tool requirements, and common mistakes. Document 5 processes in the time it used to take to write one.',
          flow: [
            'Brain dump the process in rough notes or bullet points',
            'AI structures it into a formatted SOP with numbered steps',
            'Review for accuracy and add edge cases',
            'Store in Notion or your company wiki',
            'Share with the team and set a review schedule',
          ],
          timeSaved: { without: '2-3 hours per SOP', withAI: '15-20 minutes per SOP' },
        },
        {
          id: 2,
          name: 'Vendor Analysis and Management',
          before:
            'Evaluating a new vendor means weeks of back-and-forth emails, scattered notes in different documents, and a gut-feel decision because nobody built a proper comparison framework. Existing vendor performance is tracked informally if at all. Contract renewals sneak up on you.',
          after:
            'AI builds structured vendor scorecards with weighted criteria. It drafts evaluation frameworks, comparison matrices, and performance review templates. Vendor decisions become data-driven and documented instead of instinct-based.',
          flow: [
            'Define evaluation criteria and weight each factor',
            'AI generates a vendor scorecard template',
            'Input vendor data and AI scores each candidate',
            'Review the analysis and add qualitative notes',
            'Use the scorecard for presentations and decision documentation',
          ],
          timeSaved: { without: '1-2 days per evaluation', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'KPI Dashboard Creation',
          before:
            'KPI reporting means pulling numbers from five different tools, copying them into a spreadsheet, doing manual calculations, and then spending another hour trying to make it look presentable. By the time you finish, the data is already a week old and nobody reads the report anyway.',
          after:
            'You feed AI your raw metrics and it generates a narrative KPI report - with trends, highlights, concerns, and recommended actions. Reports go from data graveyards to decision-driving documents.',
          flow: [
            'Collect raw metrics from your tracking tools',
            'Paste numbers into AI with context about targets and periods',
            'AI generates a narrative report with analysis',
            'Review insights and adjust recommendations',
            'Distribute to stakeholders with action items highlighted',
          ],
          timeSaved: { without: '3-4 hours/week', withAI: '30-45 minutes' },
        },
        {
          id: 4,
          name: 'Workflow Optimization',
          before:
            'You know some processes are inefficient, but mapping them out takes time. When you finally sit down to analyze a workflow, you get pulled into three other things. Process improvements stay on the to-do list indefinitely.',
          after:
            'Describe any workflow to AI and it identifies bottlenecks, redundancies, and optimization opportunities. Get a proposed improved workflow with specific changes, estimated time savings, and implementation steps.',
          flow: [
            'Describe the current workflow step by step',
            'AI identifies inefficiencies, bottlenecks, and redundancies',
            'Review the proposed optimized workflow',
            'AI generates an implementation plan with milestones',
            'Track improvements against baseline metrics',
          ],
          timeSaved: { without: '1-2 weeks per process', withAI: '2-3 hours' },
        },
        {
          id: 5,
          name: 'Team Communication Templates',
          before:
            'Every team update, meeting agenda, and status report starts from scratch. Different people use different formats. Information gets lost between meetings. Follow-ups fall through the cracks because there is no standard structure.',
          after:
            'AI creates standardized templates for every communication type - weekly updates, meeting agendas, status reports, escalation notices, and handoff documents. Consistency across the entire team without micromanaging.',
          flow: [
            'Identify the communication type you need to standardize',
            'AI generates a template with sections and prompts',
            'Customize for your team\'s specific needs',
            'Distribute as the standard format',
            'AI helps draft actual communications using the template',
          ],
          timeSaved: { without: '45 min per communication', withAI: '10 minutes' },
        },
        {
          id: 6,
          name: 'Budget and Resource Planning',
          before:
            'Budget planning involves pulling historical data from multiple sources, making assumptions in your head, and building spreadsheets that take hours to create and minutes to break. Resource allocation is reactive - you move people and money when problems surface, not before.',
          after:
            'AI analyzes your historical spending data, identifies patterns, and generates budget forecasts with assumptions clearly stated. Resource allocation becomes proactive with scenario modeling that shows the impact of different decisions.',
          flow: [
            'Provide historical budget data and current constraints',
            'AI generates a forecast with stated assumptions',
            'Run scenario models for different allocation strategies',
            'Review recommendations and adjust for context',
            'Export into a presentation-ready format for leadership',
          ],
          timeSaved: { without: '2-3 days quarterly', withAI: '3-4 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - SOP and Process Documentation',
          prompts: [
            {
              id: 'op-p-1-1',
              title: 'Brain Dump to SOP',
              task: 'Turn messy process notes into a structured SOP',
              prompt: `Turn the following brain dump into a clean, professional SOP document.

Process name: [name of the process]
Department: [which team owns this]
Performed by: [role/title]
Frequency: [how often - daily, weekly, as needed]

Here is my rough description:
[Paste your messy notes, bullet points, or voice transcription of how the process works]

Format the SOP with:
- Purpose statement (1-2 sentences - why this process exists)
- Scope (who this applies to)
- Trigger (what initiates this process)
- Prerequisites (what needs to be in place before starting)
- Step-by-step instructions (numbered, clear enough for a new hire on day one)
- Tools and systems used
- Common mistakes and how to avoid them
- Escalation path (what to do if something goes wrong)
- Definition of done (how you know it is complete)
- Version and last updated date placeholder

Keep language simple and direct. No jargon unless necessary. If a step has sub-steps, use a, b, c.`,
              result:
                'A complete, formatted SOP ready to drop into your wiki or shared drive.',
              tip: 'Start with your most-asked-about process. That one will save you the most repeated explanations.',
            },
            {
              id: 'op-p-1-2',
              title: 'Process Audit Checklist',
              task: 'Create an audit checklist for existing processes',
              prompt: `Create a process audit checklist for reviewing and improving our existing operations.

Department: [department name]
Number of processes to audit: [approximate count]
Last audit: [when, or "never"]
Main concern: [efficiency / compliance / consistency / all of the above]

Generate a comprehensive audit checklist that covers:
1. Documentation status (is the process written down?)
2. Accuracy check (does the doc match what people actually do?)
3. Ownership clarity (who is responsible for each step?)
4. Tool dependencies (what breaks if a tool goes down?)
5. Bottleneck identification (where do things get stuck?)
6. Redundancy check (are any steps unnecessary?)
7. Handoff points (where does work pass between people?)
8. Error frequency (how often do mistakes happen and where?)
9. Time tracking (how long does each step actually take?)
10. Improvement opportunities (quick wins vs long-term fixes)

Format as a table with columns: Process Name | Status | Owner | Last Updated | Risk Level | Priority Action.

Include a scoring rubric: Green (documented, efficient, owned), Yellow (partially documented or needs improvement), Red (undocumented, broken, or high risk).`,
              result:
                'A reusable audit framework you can apply across all departments.',
              tip: 'Run this quarterly. Track the scores over time to show leadership how operational maturity is improving.',
            },
            {
              id: 'op-p-1-3',
              title: 'Onboarding Process Builder',
              task: 'Create a structured onboarding plan for new hires',
              prompt: `Build a detailed onboarding process for a new [role title] joining our [department] team.

Company context:
- Industry: [your industry]
- Team size: [number]
- Tools we use: [list main tools]
- Key processes they will own: [list 3-5 processes]

Create a 30-day onboarding plan with:

Week 1 - Foundation:
- Day-by-day schedule
- Systems access and tool setup checklist
- Key people to meet (with purpose of each meeting)
- Required reading and documentation

Week 2 - Learning:
- Process walkthroughs to observe
- Shadowing schedule
- First small tasks to complete independently

Week 3 - Practice:
- Processes to run with supervision
- Check-in meeting structure
- Knowledge gaps to address

Week 4 - Independence:
- Full process ownership handoffs
- 30-day review meeting agenda
- Success metrics for the first 90 days

Include a buddy/mentor assignment structure and a feedback mechanism.`,
              result:
                'A complete onboarding playbook that ensures consistency for every new hire.',
              tip: 'Build one for each role on your team. The 2 hours you invest now saves 2 weeks of chaotic onboarding every time.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Vendor Analysis and Management',
          prompts: [
            {
              id: 'op-p-2-1',
              title: 'Vendor Evaluation Scorecard',
              task: 'Build a weighted scorecard to compare vendors',
              prompt: `Create a vendor evaluation scorecard for selecting a [type of vendor/service].

Context:
- We need this vendor for: [what they will provide]
- Budget range: [range or "to be determined"]
- Contract length: [expected duration]
- Number of vendors being evaluated: [count]

Build a scorecard with these weighted categories:
1. Cost and pricing structure (weight: [X]%)
2. Quality of service/product (weight: [X]%)
3. Reliability and track record (weight: [X]%)
4. Scalability and flexibility (weight: [X]%)
5. Support and communication (weight: [X]%)
6. Contract terms and conditions (weight: [X]%)
7. Cultural fit and partnership potential (weight: [X]%)

For each category, provide:
- 3-5 specific evaluation criteria
- Scoring rubric (1-5 scale with descriptions for each score)
- Data sources (where to find this information)
- Red flags to watch for

Include a final scoring template with:
- Individual category scores
- Weighted total
- Qualitative notes section
- Recommendation tier: Preferred / Acceptable / Not Recommended

Format as a table I can reuse for every vendor evaluation.`,
              result:
                'A reusable vendor scorecard that turns gut-feel decisions into data-driven ones.',
              tip: 'Adjust the weights before each evaluation based on what matters most for that specific vendor type.',
            },
            {
              id: 'op-p-2-2',
              title: 'Vendor Performance Review',
              task: 'Create a quarterly vendor performance review template',
              prompt: `Create a quarterly vendor performance review template.

Vendor name: [name]
Service provided: [what they do for us]
Contract start date: [date]
Review period: [quarter and year]

Include these sections:

1. Service Level Agreement (SLA) Compliance
- List the agreed SLAs
- Actual performance vs target
- Any breaches and their impact

2. Quality Metrics
- Defect/error rate
- On-time delivery rate
- Response time to issues
- Resolution time for problems

3. Cost Analysis
- Budgeted vs actual spend
- Any unexpected charges
- Cost per unit/transaction trend
- Value for money assessment (1-5)

4. Relationship Assessment
- Communication quality (1-5)
- Proactiveness (1-5)
- Flexibility to changing needs (1-5)
- Escalation handling (1-5)

5. Risk Assessment
- Dependency level (what happens if they disappear?)
- Contract renewal considerations
- Market alternatives available
- Compliance and security status

6. Overall Rating and Recommendation
- Continue as-is / Continue with improvements / Renegotiate / Replace
- Specific action items with deadlines
- Topics for next review meeting

Format this as a clean document with scoring tables.`,
              result:
                'A vendor review template that drives accountability and better partnerships.',
              tip: 'Share a summary of this with the vendor. Transparent scorecards improve vendor performance more than complaints do.',
            },
            {
              id: 'op-p-2-3',
              title: 'Vendor Negotiation Prep Brief',
              task: 'Prepare a negotiation strategy for vendor discussions',
              prompt: `Prepare a vendor negotiation brief for an upcoming discussion.

Vendor: [name]
What we are negotiating: [new contract / renewal / price change / scope change]
Current annual spend: [amount]
Contract expiration: [date]
Our leverage: [what gives us negotiating power - volume, alternatives, etc.]
Their leverage: [what gives them power - switching costs, unique capability, etc.]

Generate:

1. Pre-Negotiation Research
- 3 market alternatives with rough pricing
- Industry standard pricing for this service type
- Recent market trends affecting pricing

2. Our Position
- Ideal outcome (best case)
- Acceptable outcome (walk-away minimum)
- Non-negotiable terms
- Nice-to-have concessions

3. Their Likely Position
- What they probably want
- Where they have flexibility
- Where they will push back

4. Negotiation Strategy
- Opening approach
- 5 specific talking points with supporting data
- Concessions we can offer (that cost us little)
- If-then scenarios (if they push back on X, we propose Y)

5. Decision Framework
- At what point do we accept?
- At what point do we walk away?
- What triggers escalation to leadership?

Keep this to 2 pages maximum.`,
              result:
                'A negotiation playbook that ensures you walk in prepared and walk out with a better deal.',
              tip: 'Run this through Perplexity first for market pricing data, then use ChatGPT or Claude for the strategy build.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - KPI Dashboard Creation',
          prompts: [
            {
              id: 'op-p-3-1',
              title: 'KPI Narrative Report',
              task: 'Turn raw metrics into a readable KPI report',
              prompt: `Turn these raw metrics into a clear, actionable KPI report.

Report period: [week/month/quarter]
Department: [name]
Report audience: [who reads this - leadership, team, board]

Metrics:
[Paste your raw numbers - for example:]
- Metric 1: [name] - This period: [X] | Last period: [Y] | Target: [Z]
- Metric 2: [name] - This period: [X] | Last period: [Y] | Target: [Z]
- Metric 3: [name] - This period: [X] | Last period: [Y] | Target: [Z]
[Add as many as needed]

Generate a report with:
1. Executive Summary (3 sentences - what is the headline?)
2. Performance Overview (table with RAG status for each metric)
3. Wins (what went well and why)
4. Concerns (what missed target and why)
5. Trend Analysis (what direction are we heading?)
6. Recommended Actions (3-5 specific next steps with owners)
7. Focus for Next Period (top 3 priorities)

Use plain language. Avoid vanity metrics. Highlight what requires attention, not just what looks good.`,
              result:
                'A KPI report that actually drives decisions instead of collecting dust.',
              tip: 'Keep a running doc where you paste metrics each period. AI can then also generate trend comparisons across multiple periods.',
            },
            {
              id: 'op-p-3-2',
              title: 'KPI Framework Builder',
              task: 'Design a KPI framework for a team or department',
              prompt: `Design a KPI framework for our [department/function].

Context:
- Team size: [number]
- Primary function: [what the team does]
- Business goals this quarter: [list 2-3 goals]
- Current tracking maturity: [nothing / basic spreadsheet / some dashboards]

Create a KPI framework with:

1. Strategic KPIs (3-4 metrics that leadership cares about)
- Metric name
- What it measures and why it matters
- How to calculate it (formula)
- Target setting approach
- Data source
- Reporting frequency

2. Operational KPIs (5-7 metrics for day-to-day management)
- Same structure as above
- Focus on leading indicators, not just lagging ones

3. Team KPIs (2-3 metrics per team member role)
- Aligned to operational KPIs
- Within the individual's control
- Clear enough for self-tracking

4. Reporting Structure
- Who reports what, to whom, how often
- Dashboard layout recommendation
- Escalation triggers (what metric levels require immediate action)

5. Anti-Metrics (what NOT to track and why)
- Common vanity metrics in this field
- Why they are misleading

Keep the total number under 15 metrics. More than that and nothing gets tracked.`,
              result:
                'A complete KPI framework that connects individual work to business outcomes.',
              tip: 'Start with 5 metrics maximum. Add more only after those 5 are consistently tracked and acted on.',
            },
            {
              id: 'op-p-3-3',
              title: 'Monthly Operations Review Deck',
              task: 'Generate talking points for an operations review meeting',
              prompt: `Generate talking points and a structured agenda for our monthly operations review.

Department: [name]
Review period: [month/year]
Attendees: [who will be there]

Data for this month:
[Paste your key metrics, highlights, and issues]

Build the review agenda:

1. Opening (2 min)
- One-sentence summary of the month
- Overall health score: Green / Yellow / Red

2. Metrics Review (10 min)
- Top 5 metrics with trend arrows
- What moved significantly (up or down) and why
- Forecast vs actual comparison

3. Wins and Completions (5 min)
- Projects or initiatives completed
- Process improvements implemented
- Cost savings achieved

4. Issues and Risks (10 min)
- Active issues ranked by impact
- Root cause for each
- Mitigation steps in progress
- Items needing leadership decision

5. Team and Resources (5 min)
- Capacity status
- Hiring needs
- Training gaps

6. Next Month Preview (5 min)
- Top 3 priorities
- Key deadlines and milestones
- Resources needed

7. Decisions Needed (3 min)
- List specific decisions with options and recommendations

For each section, provide talking points - not a script. Keep it conversational.`,
              result:
                'A structured review meeting that respects everyone\'s time and drives decisions.',
              tip: 'Record the decisions made in each review. Start the next review by checking if those actions were completed.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Workflow Optimization',
          prompts: [
            {
              id: 'op-p-4-1',
              title: 'Process Bottleneck Analyzer',
              task: 'Identify and resolve bottlenecks in a workflow',
              prompt: `Analyze this workflow for bottlenecks and improvement opportunities.

Process name: [name]
Purpose: [what this process achieves]
Current owner: [role]
Frequency: [how often it runs]

Current steps:
[List each step with:]
- Step [number]: [description]
- Who does it: [role]
- Time taken: [duration]
- Tools used: [tools]
- Handoff to: [next person, if any]

Known pain points:
[List any frustrations, delays, or common complaints]

Analyze and provide:

1. Bottleneck Identification
- Which steps take disproportionately long?
- Where do handoffs create delays?
- What dependencies cause waiting?

2. Redundancy Check
- Are any steps duplicating effort?
- Could any steps be combined?
- Are there approval steps that add time but not value?

3. Automation Opportunities
- Which steps could be partially or fully automated?
- What tools could replace manual work?
- Quick wins vs longer-term automation projects

4. Optimized Workflow
- Proposed new step-by-step process
- Estimated time savings per step
- Total time reduction (percentage and hours)

5. Implementation Plan
- Phase 1: Quick wins (this week)
- Phase 2: Medium effort (this month)
- Phase 3: Structural changes (this quarter)

Be specific. Generic advice like "streamline the process" is not helpful.`,
              result:
                'A concrete analysis with specific, actionable improvements and time savings.',
              tip: 'Start with your most time-consuming process. A 20% improvement on a daily process has more impact than a 50% improvement on a quarterly one.',
            },
            {
              id: 'op-p-4-2',
              title: 'Cross-Functional Workflow Map',
              task: 'Map a workflow that spans multiple teams',
              prompt: `Map a cross-functional workflow that involves multiple teams.

Workflow name: [name]
Purpose: [what it achieves]
Teams involved: [list all teams/departments]
Trigger: [what starts this workflow]
End state: [what "done" looks like]

Current understanding:
[Describe the workflow as you know it - even if incomplete]

Generate:

1. Workflow Map
- List every step sequentially
- For each step: who does it, what they do, what they produce, who they hand off to
- Mark decision points (where the flow branches)
- Mark waiting points (where someone is waiting on someone else)

2. RACI Matrix
- For each major step: who is Responsible, Accountable, Consulted, Informed
- Highlight any steps with unclear ownership

3. Communication Touchpoints
- Where does information need to flow between teams?
- What is the current method (email, Slack, meeting, etc.)?
- Where does information get lost or delayed?

4. SLA Recommendations
- Proposed time limits for each handoff
- Escalation paths when SLAs are missed
- How to track compliance

5. Improvement Opportunities
- Steps that could run in parallel instead of sequence
- Handoffs that could be eliminated
- Automation opportunities at team boundaries

Format as a structured document with clear sections. Include a simplified visual flow description using arrows.`,
              result:
                'A complete cross-functional workflow map that everyone can align on.',
              tip: 'Share the draft with one person from each team involved. You will discover steps nobody knew about.',
            },
            {
              id: 'op-p-4-3',
              title: 'Workflow Change Impact Assessment',
              task: 'Assess the impact of a proposed process change',
              prompt: `Assess the impact of a proposed process change before we implement it.

Current process: [brief description of how things work now]
Proposed change: [what we want to change and why]
Scope: [which teams, tools, or workflows are affected]

Analyze:

1. Direct Impact
- Which teams are affected and how?
- What tools or systems need to change?
- What training is required?
- Estimated time to implement

2. Downstream Effects
- What other processes depend on this one?
- Will the change break or improve downstream workflows?
- Data flow implications

3. Risk Assessment
- What could go wrong during transition?
- What is the worst-case scenario?
- How do we roll back if needed?
- Risk level: Low / Medium / High for each risk

4. Resource Requirements
- People needed (hours and roles)
- Tool or technology changes
- Budget impact (if any)
- Timeline for full adoption

5. Success Metrics
- How do we know the change worked?
- What metrics should improve?
- When do we measure (30/60/90 days)?

6. Communication Plan
- Who needs to know, what, and when
- Training schedule
- Feedback collection mechanism

7. Recommendation
- Go / Go with conditions / Delay / Do not proceed
- If "go with conditions," specify what needs to happen first

Keep the assessment to 2 pages. Decision-makers need clarity, not novels.`,
              result:
                'A structured impact assessment that prevents "we did not think of that" moments.',
              tip: 'Run this for any change that affects more than one team. The 30 minutes it takes prevents weeks of cleanup.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Team Communication Templates',
          prompts: [
            {
              id: 'op-p-5-1',
              title: 'Weekly Team Update',
              task: 'Create a structured weekly team update',
              prompt: `Write a weekly team update based on these inputs.

Team: [team name]
Week of: [date range]
Sent to: [audience - leadership, cross-functional peers, full team]

This week:
- Completed: [list what got done]
- In progress: [list what is underway]
- Blocked: [list blockers and what is needed to unblock]
- Metrics: [any key numbers from the week]
- Decisions made: [any decisions worth noting]
- Shoutouts: [anyone who went above and beyond]

Next week:
- Priorities: [top 3 focus areas]
- Key deadlines: [what is due]
- Help needed: [any asks from other teams]

Format rules:
- Keep it under 300 words
- Use bullet points, not paragraphs
- Lead with the most important item
- Bold anything that requires action from the reader
- End with a clear "Action Items" section with owners and deadlines
- Tone: professional but human, not corporate-speak`,
              result:
                'A concise team update that people actually read and act on.',
              tip: 'Send it at the same time every week. Consistency builds the habit of reading it.',
            },
            {
              id: 'op-p-5-2',
              title: 'Meeting Agenda and Follow-Up',
              task: 'Create a meeting agenda and post-meeting summary template',
              prompt: `Create two templates: a meeting agenda and a post-meeting follow-up.

Meeting type: [team standup / project review / cross-functional sync / leadership update]
Frequency: [daily / weekly / biweekly / monthly]
Duration: [minutes]
Attendees: [roles, not names]

TEMPLATE 1 - Meeting Agenda:
- Meeting purpose (1 sentence)
- Pre-read requirements (what attendees should review before)
- Time-boxed agenda sections with durations
- Discussion topics with owners
- Parking lot section for off-topic items
- Decisions needed (listed upfront so people come prepared)

TEMPLATE 2 - Post-Meeting Follow-Up:
- Meeting date and attendees
- Key decisions made (with rationale)
- Action items (task, owner, deadline - table format)
- Items tabled for next meeting
- Next meeting date and any prep required

Design rules:
- Total agenda sections should not exceed the meeting duration
- Every section has a clear owner and time box
- Include a "do we even need this meeting?" check - criteria for when to cancel
- Follow-up should be sendable within 5 minutes of meeting end`,
              result:
                'Two templates that make every meeting productive and accountable.',
              tip: 'The follow-up is more important than the agenda. Decisions without documentation are just conversations.',
            },
            {
              id: 'op-p-5-3',
              title: 'Escalation Communication Template',
              task: 'Create a template for escalating issues clearly',
              prompt: `Create an escalation communication template for operational issues.

Typical escalation scenarios in our team:
[List 2-3 examples, like "vendor delivery failure," "system outage," "missed deadline"]

Build an escalation template with:

1. Subject Line Formula
- [Severity Level] - [Issue Category] - [Brief Description]
- Example format to follow

2. Escalation Body Structure
- What happened (2-3 sentences max)
- When it happened (timeline)
- Who is affected (teams, customers, revenue)
- Impact level: Critical / High / Medium / Low (with definitions for each)
- What has been done so far
- What is needed from the reader (specific ask)
- Deadline for response/decision
- Point of contact for follow-up

3. Severity Level Definitions
- Critical: [define - e.g., revenue impact, customer-facing outage]
- High: [define - e.g., significant delay, major process failure]
- Medium: [define - e.g., workaround available but not sustainable]
- Low: [define - e.g., inconvenience, no immediate business impact]

4. Escalation Path
- Level 1: [who to contact first]
- Level 2: [if no response in X hours]
- Level 3: [executive escalation criteria]

5. Resolution Communication
- Template for "issue resolved" follow-up
- Root cause and prevention steps section

Keep the template simple enough that someone can fill it out in under 5 minutes during a crisis.`,
              result:
                'A standardized escalation framework that gets the right attention at the right speed.',
              tip: 'Train your team on severity levels. The biggest escalation problem is not format - it is people escalating everything as "critical."',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Budget and Resource Planning',
          prompts: [
            {
              id: 'op-p-6-1',
              title: 'Budget Forecast Narrative',
              task: 'Generate a budget forecast with analysis',
              prompt: `Generate a budget forecast narrative for next [quarter/year].

Department: [name]
Current period budget: [total amount]
Current period actual spend: [total amount]

Budget breakdown:
[List categories with current budget and actual spend]
- Category 1: Budget [X] | Actual [Y]
- Category 2: Budget [X] | Actual [Y]
- Category 3: Budget [X] | Actual [Y]
[Continue for all categories]

Known changes for next period:
[List any known changes - new hires, vendor changes, projects, etc.]

Generate:

1. Current Period Analysis
- Overall variance (under/over budget and by how much)
- Top 3 categories driving variance
- Explanation for each significant variance

2. Next Period Forecast
- Category-by-category projected spend
- Assumptions behind each projection
- New line items and justification

3. Risk Factors
- What could push costs higher than projected
- What could come in lower
- Confidence level for each category (High / Medium / Low)

4. Savings Opportunities
- 3-5 specific areas where costs could be reduced
- Estimated savings for each
- Effort required to realize savings

5. Executive Summary
- 3-sentence narrative for leadership
- Total forecast with range (optimistic to conservative)
- Top ask or concern

Format with tables where appropriate. Leadership should be able to read the executive summary in 30 seconds and the full report in 5 minutes.`,
              result:
                'A budget narrative that tells a story, not just a spreadsheet with numbers.',
              tip: 'Always include assumptions. A forecast without assumptions is just a guess that nobody can validate.',
            },
            {
              id: 'op-p-6-2',
              title: 'Resource Capacity Planner',
              task: 'Analyze team capacity and identify gaps',
              prompt: `Analyze our team's current capacity and identify gaps.

Team: [name]
Team members: [number]
Roles: [list each role and count]

Current workload:
[List major ongoing responsibilities]
- Responsibility 1: [hours/week] - handled by [role]
- Responsibility 2: [hours/week] - handled by [role]
- Responsibility 3: [hours/week] - handled by [role]
[Continue for all major work areas]

Upcoming demands:
[List planned projects or increases]
- Project/Change 1: estimated [hours/week] starting [when]
- Project/Change 2: estimated [hours/week] starting [when]

Analyze:

1. Current Capacity Map
- Total available hours per week (team-wide)
- Total committed hours per week
- Utilization rate (percentage)
- Buffer for unplanned work (should be 15-20%)

2. Capacity by Role
- Each role: committed hours vs available hours
- Identify over-allocated roles (over 85% utilization)
- Identify under-utilized roles (under 60% utilization)

3. Future Gap Analysis
- Overlay upcoming demands on current capacity
- Identify when and where gaps will emerge
- Quantify the gap in hours and FTEs

4. Recommendations
- Option A: Redistribute work (who shifts what)
- Option B: Hire (which role, when, part-time vs full-time)
- Option C: Outsource (which work, estimated cost)
- Option D: Deprioritize (what to stop or delay)

5. Decision Matrix
- Compare options on cost, speed, risk, and quality
- Clear recommendation with rationale

Present this as a 1-page summary with a detailed appendix.`,
              result:
                'A clear view of where your team stands and what needs to change before gaps become crises.',
              tip: 'Update this monthly. Capacity problems are obvious 2 months out but invisible 2 weeks out.',
            },
            {
              id: 'op-p-6-3',
              title: 'Cost-Benefit Analysis',
              task: 'Build a cost-benefit analysis for a proposed initiative',
              prompt: `Build a cost-benefit analysis for a proposed operational initiative.

Initiative: [what you are proposing]
Problem it solves: [current pain point]
Sponsor: [who is asking for this]
Timeline: [expected duration to implement]

Costs (provide what you know, estimate the rest):
- Implementation costs: [one-time costs]
- Ongoing costs: [monthly/annual recurring costs]
- People costs: [time investment in hours]
- Opportunity costs: [what you cannot do while doing this]

Expected Benefits:
[List the benefits you expect - even rough estimates]
- Benefit 1: [description and estimated value]
- Benefit 2: [description and estimated value]
- Benefit 3: [description and estimated value]

Generate:

1. Cost Summary (table)
- All costs categorized and totaled
- Year 1 total vs Year 2+ annual cost

2. Benefit Summary (table)
- Quantifiable benefits with dollar values or time savings
- Qualitative benefits (hard to measure but real)
- Conservative vs optimistic estimates

3. ROI Calculation
- Simple ROI percentage
- Payback period (months to break even)
- Net present value if applicable

4. Risk-Adjusted Analysis
- What if benefits are 50% of estimate?
- What if costs are 150% of estimate?
- Break-even scenario (minimum benefit needed to justify)

5. Recommendation
- Go / Conditional Go / No Go
- Key assumptions that must hold true
- Decision deadline

Keep it to 1-2 pages. This should help someone say yes or no in one meeting.`,
              result:
                'A clear, defensible cost-benefit analysis that supports decision-making.',
              tip: 'Always include the "do nothing" cost. Sometimes the cost of not acting is the strongest argument for the initiative.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your operations time is actually worth.',
      timeTable: [
        {
          task: 'SOP documentation',
          without: '2-3 hours per SOP',
          withAI: '15-20 minutes',
          saved: '2+ hrs each',
        },
        {
          task: 'Vendor evaluations',
          without: '1-2 days per vendor',
          withAI: '1-2 hours',
          saved: '6+ hrs each',
        },
        {
          task: 'KPI reporting',
          without: '3-4 hours/week',
          withAI: '30-45 minutes',
          saved: '3 hrs/week',
        },
        {
          task: 'Workflow optimization',
          without: '1-2 weeks analysis',
          withAI: '2-3 hours',
          saved: 'Days per project',
        },
        {
          task: 'Team communications',
          without: '45 min per update',
          withAI: '10 minutes',
          saved: '35 min each',
        },
        {
          task: 'Budget forecasting',
          without: '2-3 days quarterly',
          withAI: '3-4 hours',
          saved: '2 days/quarter',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'In 2026, operations managers using AI are building systems, documenting processes, and driving decisions at 3-4x the speed of those doing it manually. Same expertise, same judgment, same organizational knowledge - just dramatically less time spent on formatting, structuring, and writing.',
            'The gap is not about being smarter. It is about having the tools to turn what you already know into documented, actionable, scalable systems.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not get into operations to spend your days formatting SOPs and copying numbers into spreadsheets. You got into it to build systems that work. AI gives you back the time to actually do the strategic work that makes an operations team world-class.',
          ],
        },
      ],
      keyInsight:
        'Start with one SOP. Document one process today. That single action proves the value and builds the habit.',
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
            { id: 'op-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'op-1-2', label: 'Create a free Perplexity account' },
            { id: 'op-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Document Your First Process',
          duration: '20 min',
          items: [
            { id: 'op-2-1', label: 'Pick one process you explain to people repeatedly' },
            { id: 'op-2-2', label: 'Run the Brain Dump to SOP prompt with your real process notes' },
            { id: 'op-2-3', label: 'Review the output and save it where your team can find it' },
          ],
        },
        {
          day: 3,
          title: 'Build a KPI Report',
          duration: '20 min',
          items: [
            { id: 'op-3-1', label: 'Gather your current metrics from wherever they live' },
            { id: 'op-3-2', label: 'Run the KPI Narrative Report prompt with your real numbers' },
            { id: 'op-3-3', label: 'Compare the output to your current reporting format' },
          ],
        },
        {
          day: 4,
          title: 'Evaluate a Vendor',
          duration: '25 min',
          items: [
            { id: 'op-4-1', label: 'Pick a vendor you are evaluating or reviewing' },
            { id: 'op-4-2', label: 'Run the Vendor Evaluation Scorecard prompt' },
            { id: 'op-4-3', label: 'Score at least one vendor using the framework' },
          ],
        },
        {
          day: 5,
          title: 'Optimize a Workflow',
          duration: '25 min',
          items: [
            { id: 'op-5-1', label: 'Pick your most painful or time-consuming workflow' },
            { id: 'op-5-2', label: 'Run the Process Bottleneck Analyzer prompt' },
            { id: 'op-5-3', label: 'Identify one quick win you can implement this week' },
          ],
        },
        {
          day: 6,
          title: 'Standardize Team Communication',
          duration: '20 min',
          items: [
            { id: 'op-6-1', label: 'Run the Weekly Team Update prompt with your real data' },
            { id: 'op-6-2', label: 'Create one meeting agenda template for your most frequent meeting' },
            { id: 'op-6-3', label: 'Send the update to your team and note the time difference' },
          ],
        },
        {
          day: 7,
          title: 'Plan and Reflect',
          duration: '15 min',
          items: [
            { id: 'op-7-1', label: 'List which systems saved you the most time this week' },
            { id: 'op-7-2', label: 'Pick 2-3 prompts to make part of your weekly routine' },
            { id: 'op-7-3', label: 'Share this guide with a colleague who manages operations' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
