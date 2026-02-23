import type { WorkbookData } from './types'

export const projectmanagersData = {
  professionId: 'projectmanagers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Project Managers',
  heroDescription:
    'Deliver projects faster with less overhead. Real tools, proven systems, and copy-paste prompts for status reports, risk management, stakeholder updates, sprint planning, and resource allocation.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Monday morning and you are already behind. Three projects need status updates by end of day. Your biggest initiative has a risk that surfaced Friday afternoon and nobody flagged it until the client asked. The sprint planning meeting is in two hours and you have not had time to review last sprint\'s velocity data. Your calendar is a wall of back-to-back meetings, and somewhere between them you need to actually manage the projects.',
        'You have 14 open action items across four projects. Stakeholders want updates in different formats - the VP wants a one-pager, the client wants a detailed Gantt view, the dev team wants a Jira board summary. The retrospective from two weeks ago had great insights that nobody acted on because the follow-ups were never formalized. Resource conflicts are brewing between two project teams and both leads think their project is the priority.',
        'You became a project manager because you are good at making order out of chaos. You see dependencies others miss, anticipate risks before they become fires, and keep teams aligned when everything wants to fly apart. But the administrative overhead of the role - the status reports, the slide decks, the meeting notes, the risk logs - consumes so much time that you barely get to do the strategic project leadership that actually moves the needle.',
      ],
      highlight:
        'What if the reporting, documentation, and planning work took 20 minutes instead of half your day?',
      closingParagraph:
        'Not by cutting corners. Not by skipping the documentation that keeps projects on track. Just by using AI to handle the structured writing, analysis, and formatting - so you can focus on the leadership, judgment, and stakeholder relationships that no tool can replace.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to manage your projects for you. It will not navigate stakeholder politics, make the call to cut scope when timelines slip, or figure out why your lead developer is disengaged. It cannot replace the soft skills that separate a great PM from a task tracker. The human judgment, the relationship building, the ability to read a room and adjust your approach - that is all you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient PMO analyst you have ever worked with. One who can generate a status report from raw bullet points in 90 seconds. Who can build a risk register with mitigation strategies while you are on a call. Who can turn your messy retrospective notes into a structured improvement plan before the meeting room empties.',
            'Need to write three different stakeholder updates in three different formats? AI drafts all three while you make coffee. Need a sprint planning document with story breakdowns and capacity calculations? Feed it last sprint\'s data and your backlog priorities. Need a resource allocation model showing conflicts across projects? Give it the inputs and get a clear picture back.',
            'You bring the project knowledge, the stakeholder relationships, and the decision-making. AI brings the speed, the formatting, and the ability to transform raw information into polished, structured documents. Together, you manage five projects as smoothly as you used to manage two.',
          ],
        },
      ],
      keyInsight:
        'Your project instincts + AI\'s speed = projects that stay on track with half the administrative overhead. The PM who delivers polished updates, thorough risk assessments, and clear plans - without burning out doing it - earns trust faster and delivers better.',
    },

    ch3: {
      intro: 'Five tools that cover the full project management workflow. Start with two, add the rest when you are ready.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your reporting and planning engine',
          description:
            'Status reports, risk assessments, stakeholder emails, sprint plans, retrospective summaries - any text-heavy PM task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-form documentation partner',
          description:
            'Complex risk analysis, detailed project plans, scope documents, post-mortems, multi-stakeholder communications - excels at depth and nuance',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for deep analysis',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your project knowledge base',
          description:
            'Meeting notes, decision logs, sprint boards, project wikis, action item tracking - your single source of truth with AI built in',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Industry benchmarks, methodology comparisons, tool evaluations, best practice research - sourced answers you can reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Canva AI',
          role: 'Your visual communication tool',
          description:
            'Project timelines, stakeholder presentations, team dashboards, process flow visuals - professional graphics without a designer',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Visualize project data',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Notion AI. That combination covers reporting, planning, and documentation. Add Perplexity for research and Canva for presentations when needed.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual PM workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Status Report Generation',
          before:
            'Every week you spend 1-2 hours per project pulling data from Jira, Slack messages, meeting notes, and your own memory. You format it differently for each stakeholder. By the time you finish the third report, the first one is already outdated.',
          after:
            'You paste in your raw bullet points - tasks completed, blockers, upcoming work - and AI generates a formatted status report in 2 minutes. Need it as an executive summary? A detailed breakdown? A Slack-friendly update? Same input, three outputs.',
          flow: [
            'Collect raw updates from your project tools and team',
            'Paste bullet points into AI with the audience context',
            'AI generates a formatted status report',
            'Review for accuracy and add judgment calls',
            'Send or paste into your project management tool',
          ],
          timeSaved: { without: '1-2 hours/project/week', withAI: '15-20 minutes' },
        },
        {
          id: 2,
          name: 'Risk Assessment and Mitigation',
          before:
            'Risk management is something you know you should be doing more of. The risk register has not been updated in three sprints. When risks surface, you react instead of anticipate. The format is inconsistent and half the risks are documented as vague one-liners.',
          after:
            'Describe your project context and AI generates a comprehensive risk assessment - with likelihood, impact, mitigation strategies, and contingency plans. Risk management goes from a dreaded chore to a 20-minute exercise.',
          flow: [
            'Describe your project scope, timeline, and team',
            'AI identifies potential risks across categories',
            'Review and add project-specific risks you know about',
            'AI generates mitigation and contingency plans for each',
            'Update your risk register and set review cadence',
          ],
          timeSaved: { without: '2-3 hours/month', withAI: '20-30 minutes' },
        },
        {
          id: 3,
          name: 'Stakeholder Communication',
          before:
            'Different stakeholders want different things. The executive wants a 3-line summary. The client wants details with timelines. The engineering lead wants technical specifics. You end up writing 4 versions of the same update, each taking 20-30 minutes.',
          after:
            'One set of raw inputs, multiple tailored outputs. AI adapts your project information to each stakeholder\'s level, format preference, and concerns. Four updates from one input in under 10 minutes.',
          flow: [
            'Compile your project updates as raw bullet points',
            'Specify each stakeholder and their communication preferences',
            'AI generates tailored updates for each audience',
            'Review each for tone and accuracy',
            'Send through the appropriate channels',
          ],
          timeSaved: { without: '2-3 hours/week', withAI: '20-30 minutes' },
        },
        {
          id: 4,
          name: 'Sprint and Milestone Planning',
          before:
            'Sprint planning takes half a day. You review the backlog, estimate capacity, break down stories, negotiate scope, and document everything. By the end, everyone is tired and the plan is "good enough." Milestone planning is even worse - nobody wants to sit through another 3-hour session.',
          after:
            'AI helps you pre-build the sprint plan - story breakdowns, capacity calculations, dependency maps, and scope recommendations. The planning meeting becomes a review and decision session instead of a building session. Cut planning time in half.',
          flow: [
            'Feed AI your backlog priorities and team capacity',
            'AI generates a draft sprint plan with story breakdowns',
            'Review capacity allocation and flag conflicts',
            'Use the draft as the starting point for the planning meeting',
            'AI documents the final plan and action items',
          ],
          timeSaved: { without: '3-4 hours/sprint', withAI: '1-1.5 hours' },
        },
        {
          id: 5,
          name: 'Retrospective Facilitation',
          before:
            'Retros follow the same pattern: sticky notes, same feedback, vague action items that never get followed up on. The team is retro-fatigued. The insights are good but the follow-through is poor because nobody turns the discussion into a structured improvement plan.',
          after:
            'AI helps you prepare fresh retro formats, synthesize feedback into themes, generate specific action items with owners, and track improvements across sprints. Retros become genuinely useful instead of ceremonial.',
          flow: [
            'AI suggests a fresh retrospective format to avoid fatigue',
            'Collect team feedback during the session',
            'Paste raw feedback into AI for theme analysis',
            'AI generates categorized insights and specific action items',
            'Track action items and reference them in the next retro',
          ],
          timeSaved: { without: '1.5-2 hours total', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Resource and Capacity Planning',
          before:
            'Resource allocation lives in your head and a spreadsheet that is always slightly wrong. When two projects compete for the same developer, you discover the conflict in a standup. Capacity planning is reactive - you find out people are overloaded when deadlines slip, not before.',
          after:
            'AI builds resource allocation models, identifies conflicts before they happen, and generates capacity reports that make trade-off discussions productive. Resource planning goes from gut feel to data-informed decisions.',
          flow: [
            'Input team members, their allocations, and availability',
            'AI maps resources across projects and identifies conflicts',
            'Review allocation and flag over-committed team members',
            'AI generates scenario models for different allocation options',
            'Present capacity data to leadership for priority decisions',
          ],
          timeSaved: { without: '3-5 hours/month', withAI: '45 minutes-1 hour' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Status Reports',
          prompts: [
            {
              id: 'pm-p-1-1',
              title: 'Weekly Status Report',
              task: 'Generate a formatted weekly status report',
              prompt: `Generate a weekly status report for my project.

Project: [project name]
Report period: [week of dates]
Audience: [who reads this - executive, client, team, steering committee]
Overall status: [Green / Yellow / Red]

Raw updates:
- Completed this week: [list tasks and deliverables]
- In progress: [list active work items and % complete]
- Blocked: [list blockers with what is needed to resolve]
- Risks surfaced: [any new risks or changes to existing ones]
- Key decisions made: [any decisions worth noting]
- Upcoming next week: [planned work]

Key metrics:
- Schedule: [on track / X days behind / ahead]
- Budget: [on track / X% over/under]
- Scope: [stable / change requested]
- Team morale: [optional but useful]

Format the report with:
1. Executive summary (3 sentences max - the headline)
2. RAG status with brief justification
3. Accomplishments (bullet points)
4. Upcoming work (bullet points with owners)
5. Blockers and risks (with required actions and owners)
6. Decisions needed from stakeholders
7. Key dates in the next 2 weeks

Keep it under 1 page. Bold anything that requires action. Use plain language, not PM jargon.`,
              result:
                'A professional status report that communicates clearly and drives action.',
              tip: 'Keep a running notes doc throughout the week. Friday afternoon, paste the notes in and get a report in 2 minutes.',
            },
            {
              id: 'pm-p-1-2',
              title: 'Executive Summary Generator',
              task: 'Create a concise executive summary for leadership',
              prompt: `Turn this detailed project information into an executive summary.

Project: [name]
Sponsor: [executive sponsor name]
Timeline: [start date] to [end date]
Current phase: [phase]

Detailed status:
[Paste your full status report or detailed notes - as much context as available]

Create an executive summary that:
- Opens with the single most important thing leadership needs to know
- Covers schedule, budget, and scope status in one sentence each
- Highlights the top risk and what is being done about it
- Lists any decisions needed from leadership (with recommended options)
- Closes with the next major milestone and date

Rules:
- Maximum 200 words
- No technical jargon
- No project management acronyms
- Write for someone who has 90 seconds to read this
- If there is a problem, lead with the problem and your proposed solution
- Do not bury bad news`,
              result:
                'A tight executive summary that respects leadership\'s time and builds trust.',
              tip: 'Executives remember the PM who gives them clear, honest updates - not the one who writes 3-page reports nobody reads.',
            },
            {
              id: 'pm-p-1-3',
              title: 'Multi-Project Portfolio Update',
              task: 'Create a portfolio-level update across multiple projects',
              prompt: `Create a portfolio-level status update across my active projects.

Portfolio owner: [your name/role]
Report period: [date range]
Audience: [PMO / leadership / steering committee]

Projects:
[For each project, provide:]
- Project 1: [name] | Status: [G/Y/R] | Phase: [phase] | Key update: [one line]
- Project 2: [name] | Status: [G/Y/R] | Phase: [phase] | Key update: [one line]
- Project 3: [name] | Status: [G/Y/R] | Phase: [phase] | Key update: [one line]
[Continue for all projects]

Cross-project concerns:
[List any resource conflicts, shared dependencies, or cascading risks]

Generate:

1. Portfolio Health Dashboard (table format)
- Project name | Phase | Status | Schedule | Budget | Key Risk

2. Highlights (top 3 wins across all projects)

3. Attention Areas (items requiring leadership awareness or action)

4. Resource Conflicts (where teams are competing for the same people)

5. Upcoming Milestones (next 30 days across all projects)

6. Decisions Needed (with context and recommendation for each)

Keep the portfolio view to 1-2 pages. Drill-down details should be in individual project reports, not here.`,
              result:
                'A portfolio view that gives leadership the big picture without drowning in details.',
              tip: 'Send this weekly even when there is nothing dramatic to report. Consistent communication builds more trust than crisis updates.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Risk Management',
          prompts: [
            {
              id: 'pm-p-2-1',
              title: 'Risk Register Builder',
              task: 'Create a comprehensive risk register for a project',
              prompt: `Create a comprehensive risk register for my project.

Project: [name]
Type: [software development / infrastructure / product launch / organizational change / other]
Timeline: [duration]
Team size: [number]
Budget: [range]
Key dependencies: [external vendors, other teams, technology, etc.]

Known risks (if any):
[List any risks you already know about]

Generate a risk register with 12-15 risks across these categories:
1. Schedule risks (timeline slippage, dependency delays)
2. Resource risks (key person dependency, skill gaps, turnover)
3. Technical risks (technology failures, integration issues)
4. Scope risks (scope creep, unclear requirements)
5. External risks (vendor delays, market changes, regulatory)
6. Communication risks (stakeholder misalignment, information gaps)

For each risk, provide:
- Risk ID (R-001 format)
- Category
- Description (specific, not vague)
- Probability: High / Medium / Low
- Impact: High / Medium / Low
- Risk score (Probability x Impact)
- Mitigation strategy (what we do to prevent it)
- Contingency plan (what we do if it happens)
- Owner (which role should own this)
- Status: Open / Monitoring / Mitigated / Closed

Format as a table. Sort by risk score (highest first).

Also provide:
- Top 3 risks that need immediate attention
- Recommended review frequency`,
              result:
                'A complete risk register that transforms risk management from reactive to proactive.',
              tip: 'Review the top 5 risks weekly. Update the full register biweekly. A risk register that is not reviewed is just a document.',
            },
            {
              id: 'pm-p-2-2',
              title: 'Risk Mitigation Action Plan',
              task: 'Create a detailed mitigation plan for a specific risk',
              prompt: `Create a detailed mitigation plan for a specific project risk.

Risk: [describe the risk in detail]
Project context: [brief project description]
Current probability: [High / Medium / Low]
Current impact: [High / Medium / Low]
When it could materialize: [timeline]
Who is affected: [teams, stakeholders, deliverables]

Generate a mitigation plan with:

1. Risk Analysis
- Root causes (why could this happen? List 2-3 causes)
- Early warning indicators (how will we know it is about to happen?)
- Blast radius (what gets impacted if this risk materializes?)

2. Prevention Strategy
- 3-5 specific actions to reduce probability
- Owner for each action
- Timeline for each action
- Cost or effort required

3. Contingency Plan
- If the risk materializes despite prevention, what do we do?
- Step-by-step response plan
- Communication plan (who gets told, in what order)
- Decision authority (who can make calls in the moment)

4. Monitoring Plan
- What metrics or signals to watch
- How often to check
- Trigger thresholds (at what point do we activate contingency)

5. Escalation Criteria
- When to escalate to project sponsor
- When to escalate to steering committee
- What information to include in escalation

Keep the plan to 1 page. During a crisis, nobody reads a 10-page risk response document.`,
              result:
                'A practical mitigation plan you can execute under pressure.',
              tip: 'Build these for your top 3 risks before they happen. Having the plan ready cuts response time from days to hours.',
            },
            {
              id: 'pm-p-2-3',
              title: 'Project Pre-Mortem',
              task: 'Run a pre-mortem to identify risks before the project starts',
              prompt: `Run a project pre-mortem analysis.

Project: [name]
Start date: [date]
Deadline: [date]
Team: [size and key roles]
Budget: [amount]
Objective: [what success looks like]

The exercise: Imagine it is [deadline date]. The project has failed. It was delivered late, over budget, or did not meet expectations. Work backward to figure out why.

Generate:

1. The 10 Most Likely Reasons This Project Could Fail
- For each: what went wrong, why it happened, and when in the timeline it started going sideways
- Rank by likelihood

2. Early Warning Signs
- For each failure mode: what would you see in Week 2, Week 4, and the halfway point that signals this is happening?

3. Prevention Actions
- For each of the top 5 failure modes: one specific action to take in the first 2 weeks of the project to reduce the risk
- Owner and deadline for each

4. The "We Ignored This" List
- 3-5 common project management blind spots that teams always say "we knew about but did not address"
- How to build accountability for addressing them

5. Success Safeguards
- 5 specific practices to build into the project rhythm that prevent the most common failures
- Weekly, biweekly, and monthly checkpoints

This should be completed before the project kicks off. Share the output with the team.`,
              result:
                'A pre-mortem that catches failures before they happen instead of analyzing them after.',
              tip: 'Run this with your team, not alone. Different perspectives surface different risks. AI gives you the framework, your team fills in the reality.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Stakeholder Communication',
          prompts: [
            {
              id: 'pm-p-3-1',
              title: 'Stakeholder Update Email',
              task: 'Draft tailored stakeholder update emails',
              prompt: `Draft stakeholder update emails for my project.

Project: [name]
Current status: [G/Y/R and why]

Raw project updates:
[Paste your bullet points - what happened, what is coming, any issues]

I need updates tailored for these stakeholders:

Stakeholder 1: [name/role - e.g., "VP of Engineering"]
- What they care about: [e.g., "technical risks, team utilization, delivery dates"]
- Their communication preference: [detailed / summary / just-the-headlines]
- Tone: [formal / conversational / direct]

Stakeholder 2: [name/role - e.g., "Client project sponsor"]
- What they care about: [e.g., "deliverable quality, timeline, budget"]
- Their communication preference: [e.g., "detailed with metrics"]
- Tone: [e.g., "professional, reassuring"]

Stakeholder 3: [name/role - e.g., "CEO"]
- What they care about: [e.g., "is it on track? do you need anything?"]
- Their communication preference: [e.g., "3 lines maximum"]
- Tone: [e.g., "confident, brief"]

For each email:
- Subject line
- Body (tailored to their preferences)
- Clear CTA if any action is needed from them
- Do not bury bad news - lead with it if there is a problem`,
              result:
                'Multiple tailored updates from one set of inputs. Same information, different lenses.',
              tip: 'Save these stakeholder profiles. Reuse them every week so AI knows exactly how to write for each person.',
            },
            {
              id: 'pm-p-3-2',
              title: 'Scope Change Request Communication',
              task: 'Communicate a scope change to stakeholders',
              prompt: `Help me communicate a scope change to project stakeholders.

Project: [name]
Original scope: [brief description of what was agreed]
Requested change: [what is being added, removed, or modified]
Who requested it: [stakeholder or team]
Reason for change: [why this is being proposed]

Impact assessment:
- Timeline impact: [how many days/weeks this adds or removes]
- Budget impact: [cost implications]
- Resource impact: [additional people or effort needed]
- Risk impact: [new risks introduced]
- Quality impact: [any effect on deliverable quality]

Generate three documents:

1. Scope Change Request Form
- Formal documentation of the change
- Impact analysis summary
- Options: Accept as-is / Accept with trade-offs / Reject
- For each option: what happens
- Recommendation with rationale

2. Stakeholder Communication Email
- Clear explanation of the change request
- Why it matters
- What the options are
- What you recommend
- What you need from them (decision and by when)

3. Team Communication
- What the team needs to know
- How it affects their work
- What changes immediately vs what is pending approval
- FAQ section (anticipate their questions)

Keep all three concise. Scope change communications should clarify, not confuse.`,
              result:
                'A complete scope change communication package - formal documentation, stakeholder email, and team update.',
              tip: 'Never present a scope change without options. Stakeholders want to make a choice, not just receive bad news.',
            },
            {
              id: 'pm-p-3-3',
              title: 'Project Kickoff Communication',
              task: 'Create a project kickoff communication package',
              prompt: `Create a project kickoff communication package.

Project: [name]
Objective: [what this project will deliver, in one sentence]
Sponsor: [who is sponsoring this]
PM: [you]
Timeline: [start] to [end]
Team: [list key roles and names if known]
Budget: [if shareable]

Generate:

1. Kickoff Email to the Team
- Welcome and project overview
- Why this project matters
- Team roles and responsibilities
- Key dates and milestones
- How communication will work (tools, cadence, norms)
- First action items for each team member
- Kickoff meeting details

2. Kickoff Meeting Agenda (60 minutes)
- Time-boxed sections
- Icebreaker (optional, 5 min)
- Project overview and objectives (10 min)
- Scope and out-of-scope (10 min)
- Timeline and milestones (10 min)
- Roles and responsibilities (10 min)
- Communication plan and tools (5 min)
- Risks and concerns discussion (5 min)
- Questions and next steps (5 min)

3. Stakeholder Announcement
- Brief announcement for broader stakeholders not on the core team
- What the project is, why it matters, who to contact
- Expected impact on their work (if any)

4. Project Charter One-Pager
- Objective, scope, timeline, team, success criteria, constraints
- All on one page for quick reference

Keep each document focused and free of unnecessary filler.`,
              result:
                'Everything you need to launch a project with clarity and confidence.',
              tip: 'A strong kickoff sets the tone for the entire project. Invest the time here and you save multiples of it later.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Sprint and Milestone Planning',
          prompts: [
            {
              id: 'pm-p-4-1',
              title: 'Sprint Planning Document',
              task: 'Create a sprint planning document',
              prompt: `Create a sprint planning document.

Sprint: [sprint number or name]
Duration: [X weeks, start date to end date]
Team capacity: [total available person-days this sprint]
Sprint goal: [one sentence - what must be true at the end of this sprint]

Last sprint review:
- Velocity: [story points or tasks completed]
- Carryover items: [anything that did not finish]
- Lessons learned: [key takeaway affecting this sprint]

Backlog items for this sprint:
[List the items with priority and rough size]
- Item 1: [title] | Priority: [High/Med/Low] | Estimate: [points/days]
- Item 2: [title] | Priority: [High/Med/Low] | Estimate: [points/days]
[Continue for all items]

Generate:

1. Sprint Plan Summary
- Sprint goal (refined if needed)
- Total committed work vs available capacity
- Capacity buffer (should be 15-20% for unplanned work)

2. Item Breakdown
- For each backlog item: acceptance criteria, key tasks, dependencies, assigned to
- Flag any items that are underestimated or have hidden complexity

3. Dependency Map
- Which items depend on each other?
- Which items depend on external teams or inputs?
- Critical path through the sprint

4. Risk Flags
- Items most likely to not finish (and why)
- Capacity concerns
- Dependency risks

5. Definition of Done
- Sprint-level: what must be complete to call this sprint successful
- Item-level: standard definition of done for each item

6. Daily Standup Focus Questions
- 3 questions tailored to this sprint's risks and goals`,
              result:
                'A sprint plan that sets the team up for success instead of optimistic overcommitment.',
              tip: 'Bring this draft to sprint planning as a starting point. The meeting should refine it, not build it from scratch.',
            },
            {
              id: 'pm-p-4-2',
              title: 'Milestone Planning Template',
              task: 'Build a milestone plan for a project phase',
              prompt: `Build a milestone plan for my project.

Project: [name]
Phase: [current phase or full project]
Start date: [date]
Target end date: [date]
Key deliverables: [list the major deliverables]

Constraints:
- Hard deadlines: [any non-negotiable dates]
- Dependencies: [external inputs or approvals needed]
- Resource constraints: [limited availability, shared resources]

Generate:

1. Milestone Timeline
- List 8-12 key milestones from start to finish
- For each: milestone name, target date, deliverable, owner, dependencies
- Mark which are hard deadlines vs flexible targets

2. Critical Path
- Which milestones are on the critical path?
- What is the total float (slack time)?
- Where are the schedule risk points?

3. Decision Gates
- Points where go/no-go decisions must be made
- What information is needed for each decision
- Who has decision authority

4. Buffer Strategy
- Where is buffer built into the schedule?
- What gets cut if the schedule slips?
- Escalation trigger points (how far behind before raising a flag)

5. Milestone Tracking Approach
- How to report milestone status
- Leading indicators (how to predict a milestone will be missed before the date arrives)
- Cadence for milestone review meetings

Format as a table with visual timeline indicators. This should be presentable to stakeholders as-is.`,
              result:
                'A milestone plan that balances ambition with realistic scheduling.',
              tip: 'Build buffer into the milestones that have the most uncertainty, not evenly across all of them.',
            },
            {
              id: 'pm-p-4-3',
              title: 'Release Planning Document',
              task: 'Create a release planning document',
              prompt: `Create a release planning document.

Release: [version or name]
Target date: [date]
Type: [major release / minor update / hotfix / feature release]
Audience: [internal / external / both]

Features and changes included:
[List what is in this release]
- Feature 1: [description] | Status: [done / in progress / at risk]
- Feature 2: [description] | Status: [done / in progress / at risk]
[Continue for all items]

Generate:

1. Release Overview
- What is in this release and why it matters
- What is NOT in this release (explicitly called out)
- Success criteria (how we know the release went well)

2. Release Checklist
- Pre-release tasks (code freeze, testing, approvals)
- Release day tasks (deployment steps, verification)
- Post-release tasks (monitoring, communication, support readiness)
- Each task with owner and deadline

3. Risk Assessment
- What could go wrong during release?
- Rollback plan (step by step)
- Go/no-go criteria (what must be true to proceed)

4. Communication Plan
- Pre-release: who needs to know and when
- Release day: announcement plan
- Post-release: follow-up and feedback collection
- Templates for each communication

5. Support Readiness
- Known issues and workarounds
- FAQ for support team
- Escalation path for release-related issues

Keep this practical. It should be usable as a checklist on release day, not just a planning artifact.`,
              result:
                'A release plan that covers preparation, execution, and follow-up.',
              tip: 'Run through the checklist with the team 2 days before release. Surprises on release day are preventable with a dry run.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Retrospective Facilitation',
          prompts: [
            {
              id: 'pm-p-5-1',
              title: 'Sprint Retrospective Framework',
              task: 'Design and run a sprint retrospective',
              prompt: `Design a sprint retrospective for my team.

Sprint: [number]
Team size: [number]
Duration: [how long for the retro - 45 min / 60 min / 90 min]
Team energy level: [high / neutral / low / frustrated]
Previous retro format: [what you did last time]

Sprint context:
- Sprint goal achieved: [yes / partially / no]
- Highlights: [what went well]
- Frustrations: [what was painful]
- Velocity: [compared to target]
- Carryover: [items that did not finish]

Generate:

1. Retro Format Recommendation
- A format different from last time (to keep it fresh)
- Suggested format with instructions
- Why this format works for the team's current energy level
- Time allocation for each section

2. Opening Question
- An icebreaker or opening prompt to get people talking
- Should relate to the sprint without being heavy

3. Discussion Prompts
- 5-7 targeted questions based on the sprint context provided
- Mix of celebrating wins and addressing challenges
- Questions that drive toward actionable outcomes, not just venting

4. Action Item Framework
- Template for capturing action items
- Each action: what, who, by when, how we measure success
- Maximum 3-5 actions (more than that and nothing gets done)
- Accountability mechanism for follow-up

5. Closing
- A way to end the retro on a constructive note
- Quick team pulse check (1-5 scale, how are you feeling?)
- Preview of what changes will be visible next sprint

Keep the facilitation guide conversational. This is for a PM running a meeting, not a formal ceremony.`,
              result:
                'A fresh, engaging retrospective format with targeted prompts that drive real improvement.',
              tip: 'Start every retro by reviewing action items from the last one. If nothing changed, the team will stop taking retros seriously.',
            },
            {
              id: 'pm-p-5-2',
              title: 'Retro Feedback Synthesizer',
              task: 'Synthesize raw retrospective feedback into themes and actions',
              prompt: `Synthesize this retrospective feedback into themes and action items.

Sprint: [number]
Team: [name]
Number of participants: [count]

Raw feedback collected during the retro:
[Paste all the feedback - sticky notes, comments, chat messages, whatever format]

Analyze and generate:

1. Theme Analysis
- Group the feedback into 4-6 themes
- For each theme: summary, how many people mentioned it, representative quotes
- Rank themes by frequency and severity

2. What is Working (Keep Doing)
- Top 3 things the team should continue
- Why they matter
- How to protect them from eroding

3. What Needs to Change (Start/Stop)
- Top 3 things that need action
- Root cause for each (not just the symptom)
- Specific change proposed

4. Action Items (Maximum 3)
- Action 1: [specific, measurable action]
  - Owner: [role]
  - Deadline: [when]
  - Success metric: [how we know it worked]
- Action 2: [same format]
- Action 3: [same format]

5. Trends Over Time
- Based on this feedback, what themes are recurring vs new?
- Are previous action items having an impact?
- Suggested focus for next sprint

Format as a clean document you can share with the team within 30 minutes of the retro ending.`,
              result:
                'A structured retro summary that turns discussion into documented improvement.',
              tip: 'Share this summary within 24 hours. The longer you wait, the less the team believes the retro matters.',
            },
            {
              id: 'pm-p-5-3',
              title: 'Project Post-Mortem Report',
              task: 'Create a comprehensive project post-mortem',
              prompt: `Create a project post-mortem report.

Project: [name]
Duration: [start to end date]
Original scope: [what was planned]
Delivered scope: [what was actually delivered]
Budget: Original [X] | Final [Y]
Timeline: Original [X] | Final [Y]
Team: [size and key roles]

Outcome: [successful / partially successful / failed / mixed]

Provide this context:
- What went well: [list]
- What went poorly: [list]
- Surprises: [things nobody expected]
- Key decisions that shaped the outcome: [list]

Generate:

1. Executive Summary
- One paragraph: what happened, what the outcome was, and the single biggest lesson

2. Objective vs Outcome
- Side-by-side comparison: what was planned vs what was delivered
- Schedule analysis: where time was gained or lost
- Budget analysis: where money was saved or overspent

3. Root Cause Analysis (for issues)
- For each major issue: what happened, why it happened, and what would have prevented it
- Use the "5 Whys" approach for the top 3 issues

4. Wins Worth Repeating
- What went well and why
- How to replicate these successes in future projects

5. Lessons Learned (Top 10)
- Specific, actionable lessons
- Categorized by: Process, People, Technology, Communication
- For each: the lesson and the recommendation

6. Recommendations for Future Projects
- 5 specific changes to make for similar projects
- Process improvements to implement
- Tools or practices to adopt or stop using

Keep this to 3-4 pages. Long enough to be thorough, short enough to actually be read.`,
              result:
                'A post-mortem that captures real lessons and drives organizational improvement.',
              tip: 'Run the post-mortem within 2 weeks of project completion. Wait longer and the memories fade and the lessons lose their sharpness.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Resource and Capacity Planning',
          prompts: [
            {
              id: 'pm-p-6-1',
              title: 'Resource Allocation Model',
              task: 'Build a resource allocation model across projects',
              prompt: `Build a resource allocation model for my project portfolio.

Team members:
[List each person with their role and total available hours per week]
- [Name 1]: [Role] - [X] hours/week available
- [Name 2]: [Role] - [X] hours/week available
[Continue for all team members]

Active projects:
[List each project with resource needs]
- Project 1: [name] - Needs: [X hours/week of Role A, Y hours/week of Role B]
- Project 2: [name] - Needs: [X hours/week of Role A, Y hours/week of Role B]
[Continue for all projects]

Upcoming projects (next 30-60 days):
[List planned projects and their resource needs]

Generate:

1. Current Allocation Matrix (table)
- Rows: team members
- Columns: projects
- Cells: hours per week allocated
- Total row: total allocation per person (highlight if over 85%)

2. Conflict Identification
- Which people are over-allocated?
- Which projects are under-resourced?
- Where are skill gaps (needed role not available)?

3. Utilization Analysis
- Team utilization rate (average and per person)
- Buffer capacity for unplanned work
- Risk of burnout (anyone over 90% for 3+ weeks)

4. Scenario Models
- Scenario A: Current state continues (what breaks?)
- Scenario B: Redistribute within team (proposed reallocation)
- Scenario C: Add resources (what roles and when)
- Scenario D: Deprioritize a project (which one and impact)

5. Recommendations
- Immediate actions (this week)
- Short-term adjustments (this month)
- Strategic needs (this quarter)

Present as a visual-friendly table. This needs to be shareable with leadership.`,
              result:
                'A clear resource model that makes allocation visible and trade-off discussions productive.',
              tip: 'Update this biweekly. Resource conflicts are obvious 4 weeks out but invisible 1 week out.',
            },
            {
              id: 'pm-p-6-2',
              title: 'Capacity Planning Report',
              task: 'Generate a capacity planning report for upcoming work',
              prompt: `Generate a capacity planning report for the next [quarter / 3 months].

Current team:
[List roles and headcount]
- [Role A]: [X] people
- [Role B]: [X] people
[Continue]

Current committed work:
[List ongoing projects and their resource consumption]

Planned new work:
[List upcoming initiatives with estimated resource needs and start dates]

Constraints:
- Planned time off: [any known absences]
- Training or non-project time: [hours/week per person]
- Hiring pipeline: [any approved positions and expected start dates]

Generate:

1. Capacity Overview
- Total team capacity per month (hours or FTEs)
- Committed capacity per month
- Available capacity per month
- Capacity utilization trend graph description

2. Demand Forecast
- Month-by-month resource demand based on planned work
- Peak periods identified
- Skills needed vs skills available

3. Gap Analysis
- Where demand exceeds supply (by role and month)
- Severity: Critical (cannot deliver) / Concerning (at risk) / Manageable (tight but possible)
- Impact on project timelines if gaps are not addressed

4. Mitigation Options
- For each gap: 3 options (hire, contract, redistribute, delay)
- Cost and timeline for each option
- Recommendation

5. Decision Points
- Decisions needed and by when
- What happens if we delay the decision
- Who needs to make each decision

Format for a leadership presentation. Include the data, but lead with the narrative.`,
              result:
                'A forward-looking capacity report that prevents resource crises before they hit.',
              tip: 'Present capacity with a narrative, not just numbers. "We will miss the Q3 launch without one more developer starting by March" is more powerful than a spreadsheet.',
            },
            {
              id: 'pm-p-6-3',
              title: 'Team Velocity and Throughput Analysis',
              task: 'Analyze team velocity trends and predict future capacity',
              prompt: `Analyze our team's velocity and throughput to forecast future capacity.

Team: [name]
Sprint duration: [X weeks]
Methodology: [Scrum / Kanban / hybrid]

Historical data (last 6-8 sprints):
[List sprint data]
- Sprint [N]: Committed [X] points | Completed [Y] points | Carryover [Z] points
- Sprint [N-1]: Committed [X] | Completed [Y] | Carryover [Z]
[Continue for all available sprints]

Team changes during this period:
[List any additions, departures, or role changes]

Analyze:

1. Velocity Trend
- Average velocity across all sprints
- Trend direction (improving, stable, declining)
- Variance and predictability score
- Outlier sprints and why (if context provided)

2. Commitment Accuracy
- Average commitment vs delivery ratio
- Are we consistently over-committing or under-committing?
- Recommended commitment target for next sprint

3. Throughput Analysis
- Average items completed per sprint
- Lead time trends (if data available)
- Cycle time patterns

4. Capacity Forecast
- Predicted velocity for next 3 sprints (with confidence range)
- Adjusted for any known team changes
- Adjusted for holidays or planned absences

5. Improvement Recommendations
- 3 specific suggestions to improve predictability
- 2 suggestions to improve throughput
- Warning signs to watch for

6. Team Health Indicators
- Signs of overwork or burnout based on the data
- Sustainability assessment
- Recommended actions if the pace is not sustainable

Present with clear charts described in text (averages, trends, ranges). Keep analysis factual - let the data speak.`,
              result:
                'A data-driven analysis that helps the team plan better and leadership set realistic expectations.',
              tip: 'Share velocity data transparently with the team. Teams that see their own data make better commitments.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your project management time is actually worth.',
      timeTable: [
        {
          task: 'Status reports',
          without: '1-2 hrs/project/week',
          withAI: '15-20 minutes',
          saved: '1-1.5 hrs/project',
        },
        {
          task: 'Risk assessments',
          without: '2-3 hours/month',
          withAI: '20-30 minutes',
          saved: '2 hrs/month',
        },
        {
          task: 'Stakeholder updates',
          without: '2-3 hours/week',
          withAI: '20-30 minutes',
          saved: '2 hrs/week',
        },
        {
          task: 'Sprint planning',
          without: '3-4 hours/sprint',
          withAI: '1-1.5 hours',
          saved: '2 hrs/sprint',
        },
        {
          task: 'Retrospectives',
          without: '1.5-2 hours total',
          withAI: '30-45 minutes',
          saved: '1 hr/sprint',
        },
        {
          task: 'Resource planning',
          without: '3-5 hours/month',
          withAI: '45 min-1 hour',
          saved: '3 hrs/month',
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
            'In 2026, project managers using AI deliver more polished outputs, catch risks earlier, and communicate more effectively - all while spending less time on administrative overhead. Same project knowledge, same leadership skills, same stakeholder relationships - just dramatically less time spent writing, formatting, and compiling.',
            'The gap is not about certification or methodology. It is about velocity. The PM who produces a comprehensive risk register in 20 minutes has time to actually manage the risks. The one who spends 3 hours building it is already behind.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a project manager to write status reports. You became one because you see the whole picture, you keep teams aligned, and you make sure important things get done. AI gives you back the time that administrative overhead stole from actual project leadership.',
          ],
        },
      ],
      keyInsight:
        'Start with one status report. Use AI to generate it this week instead of writing it from scratch. Notice how much time you get back.',
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
            { id: 'pm-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pm-1-2', label: 'Create a free Perplexity account' },
            { id: 'pm-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Generate Your First Status Report',
          duration: '15 min',
          items: [
            { id: 'pm-2-1', label: 'Pick your most active project' },
            { id: 'pm-2-2', label: 'Run the Weekly Status Report prompt with your real data' },
            { id: 'pm-2-3', label: 'Compare the output to what you normally write manually' },
          ],
        },
        {
          day: 3,
          title: 'Build a Risk Register',
          duration: '20 min',
          items: [
            { id: 'pm-3-1', label: 'Run the Risk Register Builder prompt for your current project' },
            { id: 'pm-3-2', label: 'Review the risks - add any AI missed and remove any that do not apply' },
            { id: 'pm-3-3', label: 'Save the risk register where your team can access it' },
          ],
        },
        {
          day: 4,
          title: 'Tailor Stakeholder Updates',
          duration: '20 min',
          items: [
            { id: 'pm-4-1', label: 'Run the Stakeholder Update Email prompt for your key stakeholders' },
            { id: 'pm-4-2', label: 'Review each version for tone and accuracy' },
            { id: 'pm-4-3', label: 'Send the updates and notice the time difference' },
          ],
        },
        {
          day: 5,
          title: 'Plan a Sprint',
          duration: '25 min',
          items: [
            { id: 'pm-5-1', label: 'Run the Sprint Planning Document prompt with your backlog' },
            { id: 'pm-5-2', label: 'Use the output as a starting point for your next planning session' },
            { id: 'pm-5-3', label: 'Note which parts of planning AI accelerated the most' },
          ],
        },
        {
          day: 6,
          title: 'Run a Retrospective',
          duration: '20 min',
          items: [
            { id: 'pm-6-1', label: 'Run the Sprint Retrospective Framework prompt' },
            { id: 'pm-6-2', label: 'Try the suggested format with your team' },
            { id: 'pm-6-3', label: 'Use the Retro Feedback Synthesizer on the collected feedback' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Build Your Routine',
          duration: '15 min',
          items: [
            { id: 'pm-7-1', label: 'List which prompts saved you the most time this week' },
            { id: 'pm-7-2', label: 'Build a weekly PM routine using your top 3-4 prompts' },
            { id: 'pm-7-3', label: 'Share this guide with another PM who could use it' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
