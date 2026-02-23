import type { WorkbookData } from './types'

export const healthcareadminData = {
  professionId: 'healthcareadmin',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Healthcare Administrators',
  heroDescription:
    'A practical guide to using AI in healthcare administration - from policy drafting to quality metrics, with real tools, workflows, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Monday morning and your inbox already has 23 emails marked urgent. The state just updated its infection control regulations and every policy in your manual needs review. The CFO wants the Q1 budget variance report by Wednesday. Three departments submitted scheduling change requests over the weekend, and two nurses called in sick on the same floor.',
        'By 10 AM, you are in your first meeting - a compliance review where the auditor flags that four of your procedural documents reference outdated CMS guidelines. You make a note to update them, adding it to the list of 37 other policy documents that need the same treatment. After the meeting, you draft a response to a patient complaint that came through the satisfaction survey, trying to be thorough but empathetic while also documenting everything properly.',
        'After lunch, you pull up the monthly quality metrics dashboard. Patient readmission rates ticked up by 2%. HCAHPS scores dipped in two units. You need to analyze the data, identify root causes, create an action plan, and present it to the quality committee on Thursday. The raw data is spread across three different systems, none of which talk to each other.',
        'Between the compliance gaps, scheduling puzzles, budget spreadsheets, and quality reports, there is also the daily operational reality - vendor contracts to review, staff orientation materials to update, incident reports to process, and a Joint Commission survey prep that is perpetually on your horizon.',
        'You went into healthcare administration to make organizations run better and improve patient outcomes. Instead, you spend most of your time producing documents, reconciling data, and chasing compliance deadlines that leave no room for strategic thinking.',
      ],
      highlight:
        'What if AI could draft the policies, crunch the data, and generate the reports - so you could focus on the decisions and strategy that actually improve care?',
      closingParagraph:
        'Not by replacing your institutional knowledge. Not by making compliance decisions for you. By handling the drafting, analysis, and formatting tasks that consume your days - so you have time for the leadership work that keeps organizations running well.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is an administrative accelerator, not a decision maker',
          paragraphs: [
            'Healthcare administration requires judgment that AI cannot provide - understanding organizational culture, navigating politics, balancing competing priorities, and knowing which regulatory nuances matter most for your specific facility. That is your expertise and it is irreplaceable.',
            'What AI handles well is the information processing and document production that takes up 60-70% of your week. It can draft policy documents from your outline, analyze budget data and highlight variances, structure quality reports from raw metrics, and generate scheduling models. These are tasks where the bottleneck is time, not judgment.',
          ],
        },
        {
          heading: 'Where AI fits in healthcare administration',
          paragraphs: [
            'Think of AI as a highly capable administrative analyst who has read every CMS regulation, every Joint Commission standard, and every best-practice guide in healthcare operations - but has never walked your halls. It processes information fast and produces solid first drafts, but it needs your institutional knowledge to make the output relevant to your organization.',
            'You describe a policy need and AI produces a structured draft following your organization\'s template. You paste in budget data and it calculates variances with explanations. You share quality metrics and it identifies trends and suggests investigation areas. Every output is a starting point for your review and refinement.',
            'The administrators gaining the most from AI are using it to eliminate the document-heavy bottlenecks that keep them from strategic work. Less time formatting policies, more time improving operations.',
          ],
        },
      ],
      keyInsight:
        'Your institutional knowledge + your operational experience + AI\'s processing speed = better administration in less time. AI handles the drafting and analysis. You handle the strategy and decisions.',
    },

    ch3: {
      intro: 'Five tools that cover the core healthcare administration workflow. Practical, compliant-ready, no unnecessary complexity.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your policy and documentation partner',
          description:
            'Draft policies, create compliance checklists, analyze data, generate reports, and work through operational scenarios. Best for interactive document creation and administrative problem-solving across all healthcare admin tasks.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - best all-rounder',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-document specialist',
          description:
            'Excels at processing lengthy regulatory documents, writing detailed policy manuals, analyzing complex data sets, and producing comprehensive reports. Handles very large context - paste entire regulatory updates or budget spreadsheets for thorough analysis.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long documents and deep analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your regulatory research assistant',
          description:
            'Search current CMS regulations, Joint Commission updates, state health department requirements, and industry benchmarks with source citations. Real-time access means you always get the most current regulatory information.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for regulatory research with sources',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your administrative knowledge hub',
          description:
            'Organize policies, procedures, compliance calendars, meeting notes, and project trackers. AI-powered search across your entire document library. Build a centralized admin hub that your whole team can access.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want centralized document management',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your presentation and visual report builder',
          description:
            'Create professional dashboards, quality reports, staff training materials, and board presentations. AI-assisted design makes it easy to turn data into polished visuals without a design background.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for visual reports and presentations',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for policy drafting and analysis, plus Perplexity for regulatory research. Add Notion AI for document management and Canva AI for presentations and dashboards. That combination covers policy, compliance, analysis, and reporting.',
    },

    ch4: {
      intro:
        'Six systems that map directly to the work you do every week as a healthcare administrator. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'Policy and Procedure Drafting',
          before:
            'A regulation changes and you need to update the corresponding policy. You pull up the old document, read through the new regulation, cross-reference with your organization\'s practices, and rewrite sections while maintaining proper formatting. A single policy update can take 2-3 hours. Your backlog of policies needing revision keeps growing.',
          after:
            'You provide AI with the old policy, the new regulation, and your organization\'s context. It produces a revised draft with tracked changes, updated references, and proper formatting in 10 minutes. You review, adjust for your facility, and finalize in a fraction of the time.',
          flow: [
            'Identify the policy needing update and the triggering regulation change',
            'Paste the current policy and new regulatory language into AI',
            'AI generates a revised draft with changes highlighted',
            'Review for organizational accuracy and compliance completeness',
            'Route through your approval workflow',
          ],
          timeSaved: { without: '2-3 hours per policy', withAI: '30-45 minutes' },
        },
        {
          id: 2,
          name: 'Compliance Documentation',
          before:
            'Compliance audits and surveys require assembling evidence packages - pulling policies, training records, incident logs, and corrective action plans from multiple systems. You spend days compiling, cross-referencing, and formatting documentation. The night before a survey, you are still filling gaps.',
          after:
            'AI helps you create compliance checklists mapped to specific standards, draft corrective action plans from findings, generate HIPAA training summaries, and structure evidence packages. Preparation that took days now takes hours.',
          flow: [
            'Identify the compliance framework or audit standard',
            'Run the compliance checklist prompt for your specific requirements',
            'AI generates a gap analysis with documentation needs',
            'Use AI to draft any missing documents or corrective action plans',
            'Compile the final evidence package with AI-organized structure',
          ],
          timeSaved: { without: '2-3 days of prep', withAI: '4-6 hours' },
        },
        {
          id: 3,
          name: 'Budget Analysis and Reporting',
          before:
            'Monthly budget reviews mean downloading data from multiple systems, building pivot tables, calculating variances, writing explanations for every line item that is off, and formatting it into a presentation the CFO can digest. A thorough budget report takes a full day.',
          after:
            'Paste your budget data into AI and get variance calculations, trend analysis, and narrative explanations generated automatically. The analysis that took all day now takes 90 minutes, with better commentary and clearer visualizations.',
          flow: [
            'Export budget actuals vs. plan data from your financial system',
            'Run the budget variance analysis prompt with the data',
            'AI calculates variances and generates narrative explanations',
            'Review accuracy and add context only you know',
            'Format into your standard reporting template',
          ],
          timeSaved: { without: '6-8 hours monthly', withAI: '90 minutes' },
        },
        {
          id: 4,
          name: 'Staff Scheduling Optimization',
          before:
            'Creating schedules that account for patient census, staff preferences, required ratios, overtime limits, and skill mix requirements is like solving a puzzle with 50 pieces that keep changing. Shift swaps, call-outs, and census fluctuations mean you are constantly reworking the schedule.',
          after:
            'AI analyzes your staffing parameters - census data, ratio requirements, staff availability, and overtime thresholds - and generates optimized schedule drafts. You still make the final calls, but the initial model that took hours now takes minutes.',
          flow: [
            'Input your staffing parameters (ratios, census, availability, constraints)',
            'AI generates an optimized schedule draft balancing all factors',
            'Review for practical considerations AI cannot see (team dynamics, training needs)',
            'Adjust and finalize the schedule',
            'Use AI to quickly model what-if scenarios for call-outs and census changes',
          ],
          timeSaved: { without: '3-4 hours per schedule', withAI: '45-60 minutes' },
        },
        {
          id: 5,
          name: 'Quality Metrics Tracking',
          before:
            'Monthly quality reporting means pulling data from the EMR, patient safety system, and satisfaction surveys. You calculate rates, compare to benchmarks, identify outliers, write up findings, and prepare a presentation for the quality committee. The whole process takes most of a week every month.',
          after:
            'Feed AI your raw metrics and it calculates rates, identifies trends, compares against benchmarks, and drafts the narrative summary. The quality report that consumed three days now comes together in a morning.',
          flow: [
            'Export quality metrics data from your various systems',
            'Run the quality dashboard analysis prompt with raw data',
            'AI identifies trends, outliers, and areas needing investigation',
            'Add your institutional context and root cause insights',
            'Generate the committee presentation with AI-drafted talking points',
          ],
          timeSaved: { without: '2-3 days monthly', withAI: '3-4 hours' },
        },
        {
          id: 6,
          name: 'Patient Experience Improvement',
          before:
            'Patient satisfaction data comes in as hundreds of survey responses - numerical scores and free-text comments. Reading through every comment takes hours. Identifying themes requires manual categorization. Turning findings into actionable improvement plans takes another round of analysis.',
          after:
            'AI processes all survey responses in minutes - categorizing comments by theme, calculating sentiment scores, identifying the top drivers of satisfaction and dissatisfaction, and drafting improvement recommendations. You go from raw data to action plan in an afternoon.',
          flow: [
            'Export patient satisfaction survey data including free-text comments',
            'Run the patient survey analysis prompt with the full dataset',
            'AI categorizes themes and identifies satisfaction drivers',
            'Review findings and select priority improvement areas',
            'Use AI to draft specific improvement action plans with timelines',
          ],
          timeSaved: { without: '1-2 days quarterly', withAI: '2-3 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts for healthcare administration. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Policy and Procedure Drafting',
          prompts: [
            {
              id: 'ha-p-1-1',
              title: 'Policy Document Template',
              task: 'Draft a new policy or update an existing one from regulatory requirements',
              prompt: `I am a healthcare administrator and I need to draft/update a policy document.

Policy topic: [e.g., infection control, patient rights, medication administration]
Triggering change: [new regulation, audit finding, organizational change]
Facility type: [hospital, clinic, long-term care, etc.]
Current policy text (if updating): [paste current version]
New regulatory requirement: [paste or describe the new requirement]

Draft a complete policy document with these sections:
1. Policy title and number
2. Purpose statement
3. Scope - who this applies to
4. Definitions of key terms
5. Policy statements (numbered, clear, and specific)
6. Procedure steps (detailed enough for staff to follow)
7. Responsibilities - who does what
8. References to applicable regulations and standards
9. Revision history placeholder
10. Approval signature block

Use professional healthcare policy language. Be specific enough to be actionable but broad enough to allow operational flexibility. Highlight any sections where I need to insert facility-specific details.`,
              result:
                'A complete policy document draft ready for facility-specific customization and approval routing.',
              tip: 'Keep a master list of regulatory triggers that require policy updates. Run this prompt as soon as a regulation changes rather than letting updates pile up.',
            },
            {
              id: 'ha-p-1-2',
              title: 'Policy Gap Analysis',
              task: 'Identify gaps between current policies and regulatory requirements',
              prompt: `Conduct a policy gap analysis for my healthcare facility.

Regulatory framework: [Joint Commission, CMS CoPs, state regulations, OSHA, etc.]
Area of focus: [department or topic area]
Summary of current policies in this area: [list policy titles and brief descriptions]

Analyze and provide:
1. Required policies or standards for this regulatory framework
2. Map each requirement to my existing policies (covered, partially covered, or missing)
3. Gaps - requirements that have no corresponding policy
4. Partial coverage - policies that exist but need updating or expansion
5. Redundancies - overlapping policies that could be consolidated
6. Priority ranking of gaps based on regulatory risk
7. Recommended timeline for addressing each gap
8. Template outline for each missing policy

Format as a gap analysis matrix I can present to leadership for resource allocation.`,
              result:
                'A structured gap analysis matrix with prioritized action items for policy development.',
              tip: 'Run this before survey prep season. Identifying gaps early gives you time to address them instead of scrambling.',
            },
            {
              id: 'ha-p-1-3',
              title: 'Standard Operating Procedure Writer',
              task: 'Convert a process description into a formal SOP',
              prompt: `Convert the following process description into a formal standard operating procedure (SOP).

Process name: [what this procedure covers]
Department: [which department owns this]
Current description: [paste your notes, workflow, or informal process description]
Compliance requirements: [any regulatory standards this must satisfy]

Create a formal SOP with:
1. SOP number and title
2. Effective date and review date
3. Purpose - why this procedure exists
4. Scope - who must follow it
5. Prerequisites - what must be in place before starting
6. Step-by-step procedure (numbered, each step is one clear action)
7. Decision points - where staff need to make judgment calls (include criteria)
8. Documentation requirements - what needs to be recorded and where
9. Quality checks - how to verify the procedure was done correctly
10. Troubleshooting - common issues and how to resolve them
11. Related documents and references

Write clearly enough that a new employee could follow it after training. Flag any steps that require specific credentials or certifications.`,
              result:
                'A formal SOP document ready for departmental review and approval.',
              tip: 'Have the people who actually do the work review the SOP. AI gets the structure right but may miss practical nuances.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Compliance Documentation',
          prompts: [
            {
              id: 'ha-p-2-1',
              title: 'HIPAA Compliance Checklist',
              task: 'Generate a comprehensive HIPAA compliance review checklist',
              prompt: `Create a comprehensive HIPAA compliance checklist for my healthcare facility.

Facility type: [hospital, clinic, long-term care, etc.]
Size: [number of employees, patient volume]
Focus area: [Privacy Rule, Security Rule, Breach Notification, or comprehensive]
Last audit date: [when was the last compliance review]
Known issues: [any previously identified gaps]

Generate a detailed checklist covering:
1. Administrative safeguards (policies, training, access management)
2. Physical safeguards (facility access, workstation security, device controls)
3. Technical safeguards (access controls, audit logs, transmission security)
4. Privacy Rule requirements (NPP, patient rights, minimum necessary)
5. Breach notification procedures
6. Business associate agreement inventory
7. Training and awareness program status
8. Documentation and record retention compliance
9. Risk assessment requirements

For each item:
- Compliance requirement (cite the specific HIPAA provision)
- What evidence demonstrates compliance
- Common deficiency findings
- Priority level (critical, high, medium, low)

Format as a printable audit checklist with checkboxes.`,
              result:
                'A comprehensive HIPAA compliance checklist with evidence requirements and priority levels.',
              tip: 'Use this as a pre-audit self-assessment. Run it quarterly to catch gaps before external auditors find them.',
            },
            {
              id: 'ha-p-2-2',
              title: 'Corrective Action Plan',
              task: 'Draft a corrective action plan from audit findings',
              prompt: `Draft a corrective action plan (CAP) based on the following audit or survey findings.

Source of findings: [Joint Commission, CMS, state survey, internal audit]
Date of findings: [date]
Findings:
[List each finding with its citation/standard reference]

For each finding, create a corrective action entry with:
1. Finding number and description
2. Root cause analysis (why this gap exists)
3. Corrective action steps (specific, measurable actions)
4. Responsible party for each action
5. Target completion date
6. Evidence of completion (what documentation will prove it is fixed)
7. Sustainability plan (how you will prevent recurrence)
8. Monitoring method and frequency

Then provide:
- An executive summary of all findings and overall response
- A Gantt-style timeline showing all actions and deadlines
- Resource requirements (staff time, budget, system changes)
- A 90-day follow-up assessment plan

Format professionally for submission to the surveying body.`,
              result:
                'A complete corrective action plan ready for leadership review and regulatory submission.',
              tip: 'Be specific with root causes. Vague root causes like "staff not trained" lead to weak corrective actions. Ask "why" five times.',
            },
            {
              id: 'ha-p-2-3',
              title: 'Compliance Training Summary',
              task: 'Create compliance training materials and competency documentation',
              prompt: `Create compliance training materials for the following topic.

Training topic: [HIPAA, infection control, workplace safety, patient rights, etc.]
Target audience: [all staff, clinical staff, new hires, leadership]
Regulatory requirement: [which regulation requires this training]
Training format: [in-service, online module outline, quick reference guide]

Create:
1. Learning objectives (3-5 measurable outcomes)
2. Key content areas with bullet-point summaries
3. Real-world scenarios relevant to healthcare settings (3-4 scenarios)
4. Common mistakes and how to avoid them
5. Quick reference card (one page) with the most critical points
6. Assessment questions (10 questions with answer key)
7. Competency documentation template (sign-off sheet)
8. Training evaluation form for participant feedback

Write at a level appropriate for the target audience. Use healthcare-specific examples. Keep the tone professional but engaging - not condescending.`,
              result:
                'Complete training materials package with assessment and documentation tools.',
              tip: 'Create scenario-based questions rather than recall questions. Staff remember what to do in situations, not policy numbers.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Budget Analysis and Reporting',
          prompts: [
            {
              id: 'ha-p-3-1',
              title: 'Budget Variance Report',
              task: 'Analyze budget data and generate a variance report with narrative',
              prompt: `Analyze the following budget data and create a variance report.

Department/Facility: [name]
Reporting period: [month/quarter]
Budget data:
[Paste line items with: category, budgeted amount, actual amount]

Generate a budget variance report including:
1. Variance calculations for each line item (dollar amount and percentage)
2. Classification of each variance (favorable/unfavorable)
3. Narrative explanation for significant variances (over 5% or over $[threshold])
4. Trend analysis - is this variance a one-time event or a pattern
5. Impact assessment - how does this affect the annual forecast
6. Recommended actions for unfavorable variances
7. Executive summary (3-4 sentences capturing the key takeaways)
8. Visual-ready data summary (formatted for easy chart creation)

Flag any line items that need immediate attention. Suggest which variances require deeper investigation vs. which are explainable.

Tone should be factual and analytical - this is for the CFO and leadership.`,
              result:
                'A complete budget variance report with narrative explanations and recommendations.',
              tip: 'Add your institutional context to the AI-generated narratives. You know why census was up or why that vendor contract changed.',
            },
            {
              id: 'ha-p-3-2',
              title: 'Cost Reduction Analysis',
              task: 'Identify cost reduction opportunities from operational data',
              prompt: `Analyze the following operational and financial data to identify cost reduction opportunities.

Facility type: [hospital, clinic, etc.]
Annual operating budget: [approximate]
Data provided:
[Paste relevant data - supply costs, staffing ratios, vendor contracts, utilization rates, etc.]

Areas to analyze:
1. Supply chain optimization - bulk purchasing, vendor consolidation, waste reduction
2. Staffing efficiency - overtime trends, agency usage, skill mix optimization
3. Revenue cycle improvement - denial rates, days in A/R, charge capture
4. Operational efficiency - length of stay, throughput, capacity utilization
5. Energy and facility costs - utility trends, maintenance schedules
6. Contract review - vendor pricing benchmarks, renegotiation opportunities

For each opportunity:
- Current cost
- Estimated savings (conservative and optimistic)
- Implementation complexity (easy, moderate, complex)
- Timeline to realize savings
- Required investment (if any)
- Risk or trade-off to consider

Prioritize by ROI and feasibility. Give me a "quick wins" list and a "strategic initiatives" list.`,
              result:
                'A prioritized cost reduction roadmap with estimated savings and implementation timelines.',
              tip: 'Start with the quick wins. Early savings build credibility for larger strategic initiatives.',
            },
            {
              id: 'ha-p-3-3',
              title: 'Annual Budget Justification',
              task: 'Build a budget justification narrative for a department or initiative',
              prompt: `Help me build a budget justification for the following request.

Request type: [new position, equipment, program, department budget increase]
Amount requested: [dollar amount]
Department: [name]
Current year budget: [amount]

Context:
- Why this is needed: [describe the business case]
- What happens without it: [consequences of not funding]
- Supporting data: [volume trends, benchmark comparisons, regulatory requirements]

Create a budget justification document with:
1. Executive summary (2-3 sentences)
2. Current state assessment - what exists today
3. Gap or need identification - what is missing and why
4. Proposed solution with detailed cost breakdown
5. Expected return - cost savings, revenue impact, quality improvement, or compliance risk reduction
6. ROI calculation (if applicable)
7. Implementation timeline and milestones
8. Alternatives considered and why this option is recommended
9. Risk of inaction
10. Appendix suggestions - what supporting data to attach

Write persuasively but factually. This needs to convince finance leadership.`,
              result:
                'A compelling budget justification document ready for leadership presentation.',
              tip: 'Lead with the "risk of inaction" angle for compliance-related requests. Lead with ROI for efficiency investments.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Staff Scheduling Optimization',
          prompts: [
            {
              id: 'ha-p-4-1',
              title: 'Optimized Schedule Model',
              task: 'Generate an optimized staff schedule based on constraints',
              prompt: `Help me create an optimized staff schedule for the following unit.

Unit details:
- Department: [name]
- Number of staff: [count by role type]
- Shift types: [8-hour, 12-hour, etc.]
- Coverage requirements: [minimum staff per shift by role]
- Patient census: [average and range]

Constraints:
- Overtime limit: [hours per pay period]
- Maximum consecutive days: [limit]
- Required days off between shifts: [minimum hours]
- Staff preferences or restrictions: [any known constraints]
- Weekend requirements: [every other, every third, etc.]

Generate:
1. A schedule template for a [2-week/4-week] cycle
2. Daily coverage matrix showing role coverage vs. requirements
3. Overtime projections for each staff member
4. Weekend distribution equity check
5. Float or call-in triggers - which days are most vulnerable to call-outs
6. Suggested adjustments if census drops below or exceeds average

Format as a grid: rows are staff members, columns are days. Show shift assignments (D, E, N, OFF) with a coverage summary row at the bottom.`,
              result:
                'An optimized schedule template with coverage analysis and vulnerability identification.',
              tip: 'Use this as a starting template, then adjust for the human factors AI cannot see - who works well together, who is in training, etc.',
            },
            {
              id: 'ha-p-4-2',
              title: 'Call-Out Impact Analyzer',
              task: 'Model the impact of staff call-outs and identify coverage solutions',
              prompt: `I have a staffing gap and need to find the best coverage solution quickly.

Situation:
- Date and shift affected: [date, shift]
- Who called out: [role type]
- Current staffing for that shift without them: [list who is working]
- Minimum required coverage: [staffing requirement]
- Available options: [list available staff - name, role, overtime status, last shift worked]

Analyze and recommend:
1. Is coverage legally required based on minimum staffing ratios?
2. Which available staff members are the best fit (considering overtime, fatigue, skill mix)?
3. Rank the options from best to least ideal with rationale
4. If no single replacement is available, suggest split-shift or partial coverage models
5. Calculate overtime cost for each option
6. Flag any options that would create compliance issues (consecutive hours, required rest)
7. Draft a text/call script for reaching out to available staff

Also suggest:
- Preventive measures if this unit has recurring call-out patterns
- Whether census allows a safe reduction in coverage instead of replacement`,
              result:
                'A ranked list of coverage options with cost and compliance analysis.',
              tip: 'Build a historical call-out tracker. AI can identify patterns - certain days, seasons, or events that predict higher call-out rates.',
            },
            {
              id: 'ha-p-4-3',
              title: 'Staffing Benchmark Comparison',
              task: 'Compare your staffing model against industry benchmarks',
              prompt: `Help me evaluate our staffing model against industry benchmarks.

Facility details:
- Type: [hospital, clinic, long-term care]
- Bed count or patient volume: [number]
- Region: [for regional labor market context]

Current staffing data:
[List departments with: FTE count by role, patient-to-staff ratios, overtime percentage, agency/contract usage percentage]

Analyze:
1. Compare our ratios to published benchmarks for our facility type and size
2. Identify departments that appear overstaffed or understaffed relative to benchmarks
3. Calculate our labor cost per patient day or per visit vs. industry median
4. Evaluate our skill mix (RN vs. LPN vs. CNA ratios, etc.)
5. Assess agency and overtime reliance - are we above normal?
6. Project impact of census growth or decline on staffing needs
7. Recommend adjustments with estimated cost impact

Provide the data sources or benchmarks you are referencing. Flag where our model differs significantly from best practices.`,
              result:
                'A benchmarking report with specific staffing optimization recommendations.',
              tip: 'Benchmarks are starting points, not targets. Your patient acuity, facility layout, and care model all affect what staffing is right for you.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Quality Metrics Tracking',
          prompts: [
            {
              id: 'ha-p-5-1',
              title: 'Quality Dashboard Analysis',
              task: 'Analyze quality metrics and generate a committee-ready report',
              prompt: `Analyze the following quality metrics data and create a report for the quality committee.

Reporting period: [month/quarter]
Facility: [name and type]

Metrics data:
[Paste metrics - e.g., readmission rates, fall rates, infection rates, HCAHPS scores, mortality indices, core measures compliance, etc.]

Previous period data for comparison: [if available]
National/state benchmarks: [if known]

Generate a quality report including:
1. Executive summary - overall quality performance in 3-4 sentences
2. Scorecard - each metric with current value, trend, and benchmark comparison
3. Metrics meeting or exceeding targets (celebrate wins)
4. Metrics below target with trend analysis (improving, stable, or worsening)
5. Root cause hypotheses for declining metrics
6. Recommended focus areas for the next period
7. Suggested improvement initiatives with expected impact
8. Data limitations or collection issues to note

Format professionally for a committee presentation. Use precise language and avoid vague statements like "needs improvement" - specify what, by how much, and what to investigate.`,
              result:
                'A committee-ready quality report with trend analysis and actionable recommendations.',
              tip: 'Pair declining metrics with specific departments or units so the committee can direct resources effectively.',
            },
            {
              id: 'ha-p-5-2',
              title: 'Core Measures Compliance Tracker',
              task: 'Track and analyze core measures performance',
              prompt: `Help me analyze our core measures compliance and identify improvement opportunities.

Core measure sets we report:
[List applicable measure sets - e.g., AMI, HF, PN, SCIP, VTE, stroke, ED throughput]

Current compliance data:
[For each measure: measure ID, description, numerator, denominator, compliance rate, target]

Analyze:
1. Overall compliance rate by measure set
2. Individual measures that are below target (rank by gap size)
3. Trend over the last 4 reporting periods (improving, stable, declining)
4. Common failure reasons or exclusion patterns
5. Interdependencies - are failures in one measure linked to another
6. Comparison to state and national averages where known
7. Impact on value-based purchasing or reimbursement
8. Priority improvement recommendations

For the bottom 5 performing measures:
- Most common reason for failure
- Suggested process change to address it
- Responsible department or role
- Expected improvement timeline

Format as a performance improvement action plan.`,
              result:
                'A core measures performance analysis with a targeted improvement action plan.',
              tip: 'Focus on the measures that affect reimbursement. Connect quality improvement to financial impact for leadership buy-in.',
            },
            {
              id: 'ha-p-5-3',
              title: 'Incident Trend Analysis',
              task: 'Analyze safety incident data for patterns and improvement opportunities',
              prompt: `Analyze the following safety incident and event report data for patterns and improvement opportunities.

Reporting period: [timeframe]
Data:
[Paste incident data - event type, date, unit/department, severity, brief description, contributing factors]

Perform the following analysis:
1. Volume trends - total incidents by month, trending up or down
2. Category breakdown - incidents by type (falls, medication errors, skin integrity, etc.)
3. Hot spots - departments or units with highest incident rates
4. Severity distribution - near-miss vs. minor vs. moderate vs. serious
5. Time patterns - incidents by shift, day of week, or time of day
6. Contributing factor themes - staffing, communication, equipment, process
7. Repeat events - any patterns suggesting systemic issues
8. Comparison to previous period

Recommendations:
- Top 3 systemic issues to address (with evidence from the data)
- Suggested interventions for each
- Leading indicators to monitor
- Staff education topics indicated by the data

Format as a patient safety committee report with data tables and narrative analysis.`,
              result:
                'A comprehensive incident trend analysis with data-driven safety improvement recommendations.',
              tip: 'Look for the near-misses - they predict the serious events. A rise in near-misses in a category often precedes a sentinel event.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Patient Experience Improvement',
          prompts: [
            {
              id: 'ha-p-6-1',
              title: 'Patient Survey Analysis',
              task: 'Analyze patient satisfaction survey data and identify improvement priorities',
              prompt: `Analyze the following patient satisfaction survey results.

Survey type: [HCAHPS, Press Ganey, custom survey, etc.]
Reporting period: [timeframe]
Number of responses: [count]
Response rate: [percentage]

Quantitative data:
[Paste scores by domain - e.g., communication with nurses, communication with doctors, responsiveness, pain management, cleanliness, discharge information, overall rating]

Free-text comments:
[Paste patient comments - positive and negative]

Provide:
1. Domain-by-domain performance summary with percentile rankings
2. Top 3 strengths (highest scoring or most improved areas)
3. Top 3 opportunities (lowest scoring or declining areas)
4. Sentiment analysis of free-text comments - categorize by theme
5. Specific patient quotes that illustrate key themes (positive and negative)
6. Correlation analysis - which domains most strongly predict overall satisfaction
7. Comparison to previous period and benchmark
8. Three actionable improvement recommendations with rationale

Format as an executive brief for leadership and a detailed appendix for operational managers.`,
              result:
                'A complete patient satisfaction analysis with executive summary and operational recommendations.',
              tip: 'Read the negative comments yourself - do not rely only on AI categorization. Individual patient stories often reveal what numbers miss.',
            },
            {
              id: 'ha-p-6-2',
              title: 'Patient Experience Improvement Plan',
              task: 'Create a structured improvement plan for a specific patient experience domain',
              prompt: `Create a patient experience improvement plan for the following area.

Area of focus: [e.g., nurse communication, discharge process, wait times, pain management]
Current performance: [score and percentile]
Target: [desired score or percentile]
Timeline: [when you need to achieve the target]
Resources available: [budget, staff time, existing tools]

Previous improvement attempts: [what has been tried and what happened]

Build an improvement plan with:
1. Root cause analysis - why is performance low in this area
2. Evidence-based interventions (what has worked at other facilities)
3. Quick wins - changes that can be implemented within 2 weeks
4. Medium-term initiatives - changes requiring 1-3 months
5. Structural changes - longer-term process or system redesign
6. Staff engagement strategy - how to get frontline buy-in
7. Patient communication changes - scripts, signage, rounding protocols
8. Measurement plan - how you will track progress and how often
9. Accountability structure - who owns what
10. Celebration plan - how to recognize progress

Make this practical and specific. Generic advice like "improve communication" is not helpful. Give me exact scripts, protocols, and process changes.`,
              result:
                'A detailed improvement plan with specific interventions, timelines, and accountability structures.',
              tip: 'Start with the quick wins. Visible early progress builds momentum and staff confidence for the harder changes.',
            },
            {
              id: 'ha-p-6-3',
              title: 'Patient Complaint Response',
              task: 'Draft a professional and empathetic response to a patient complaint',
              prompt: `Draft a response to the following patient complaint.

Complaint summary: [describe the patient's complaint]
How it was received: [letter, email, phone call, survey comment, grievance form]
Investigation findings: [what you found when you looked into it]
Corrective action taken: [what was done or will be done]
Patient context: [any relevant history - longtime patient, vulnerable population, etc.]

Write a response that:
1. Acknowledges the patient's experience with genuine empathy
2. Thanks them for bringing it to your attention
3. Summarizes what you found in your review (without being defensive)
4. Explains what actions have been taken or will be taken
5. Provides a direct contact for further concerns
6. Maintains appropriate confidentiality (do not name staff members)
7. Invites continued feedback
8. Closes with a commitment to their care experience

Tone: Professional, warm, accountable. Not corporate or dismissive. Not overly apologetic to the point of admitting liability.

Length: Under 400 words for letters, under 200 for email responses.`,
              result:
                'A professional, empathetic complaint response ready for your review and personalization.',
              tip: 'Always add a personal touch. Mention something specific from their complaint so they know a real person read it carefully.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what your time savings look like when AI handles the drafting and analysis.',
      timeTable: [
        {
          task: 'Policy drafting and updates',
          without: '2-3 hours per policy',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs each',
        },
        {
          task: 'Compliance documentation',
          without: '2-3 days of prep',
          withAI: '4-6 hours',
          saved: '1-2 days',
        },
        {
          task: 'Budget variance reports',
          without: '6-8 hours monthly',
          withAI: '90 minutes',
          saved: '4.5-6.5 hrs',
        },
        {
          task: 'Staff scheduling',
          without: '3-4 hours per schedule',
          withAI: '45-60 minutes',
          saved: '2-3 hrs each',
        },
        {
          task: 'Quality metrics reports',
          without: '2-3 days monthly',
          withAI: '3-4 hours',
          saved: '1-2 days',
        },
        {
          task: 'Patient survey analysis',
          without: '1-2 days quarterly',
          withAI: '2-3 hours',
          saved: '6-13 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '40-60 hrs/month',
      },
      sections: [
        {
          heading: 'The Shift',
          paragraphs: [
            'Healthcare administration is drowning in documentation. Between regulatory requirements, quality reporting, and operational management, most administrators spend the majority of their time producing documents rather than leading improvement. AI does not eliminate the documentation - it eliminates the hours spent creating it.',
            'The administrators who adopt AI are not cutting corners. They are producing better documentation faster, which gives them time for the strategic work that actually moves the needle on quality and efficiency.',
          ],
        },
        {
          heading: 'The Opportunity',
          paragraphs: [
            'Every hour saved on report generation and policy drafting is an hour available for process improvement, staff development, and strategic planning. Those are the activities that differentiate good healthcare organizations from great ones. AI is the leverage that makes it possible.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Draft one policy or analyze one report with AI this week. See the difference in quality and time. Build from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your administrative workflow. Follow the plan, check off each step, and by the end of the week you will have a faster way to handle the work on your desk.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'ha-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'ha-1-2', label: 'Create a free Perplexity account' },
            { id: 'ha-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Draft Your First Policy',
          duration: '20 min',
          items: [
            {
              id: 'ha-2-1',
              label: 'Pick one policy that needs updating from your backlog',
            },
            {
              id: 'ha-2-2',
              label: 'Run the Policy Document Template prompt with your real policy and regulation',
            },
            {
              id: 'ha-2-3',
              label: 'Compare the draft quality and time to your usual process',
            },
          ],
        },
        {
          day: 3,
          title: 'Tackle a Report',
          duration: '20 min',
          items: [
            {
              id: 'ha-3-1',
              label: 'Run the Budget Variance Report prompt with your actual financial data',
            },
            {
              id: 'ha-3-2',
              label: 'Review the output and add your institutional context',
            },
          ],
        },
        {
          day: 4,
          title: 'Compliance Check',
          duration: '15 min',
          items: [
            {
              id: 'ha-4-1',
              label: 'Run the HIPAA Compliance Checklist prompt for one area of your facility',
            },
            {
              id: 'ha-4-2',
              label: 'Note any gaps you had not previously identified',
            },
          ],
        },
        {
          day: 5,
          title: 'Quality Analysis',
          duration: '20 min',
          items: [
            {
              id: 'ha-5-1',
              label: 'Run the Quality Dashboard Analysis prompt with your current metrics',
            },
            {
              id: 'ha-5-2',
              label: 'Use the output as a starting point for your next quality committee report',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More',
          duration: '15 min',
          items: [
            {
              id: 'ha-6-1',
              label: 'Try the scheduling optimization or patient survey analysis prompts',
            },
            {
              id: 'ha-6-2',
              label: 'Identify which system saves you the most time this week',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'ha-7-1',
              label: 'What worked? Which prompts will become part of your regular workflow?',
            },
            {
              id: 'ha-7-2',
              label: 'Share this guide with a colleague in administration',
            },
            {
              id: 'ha-7-3',
              label: 'Pick one system to fully integrate this month',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
