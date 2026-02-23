import type { WorkbookData } from './types'

export const complianceData = {
  professionId: 'compliance',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Compliance Officers',
  heroDescription:
    'Everything you need to start using AI in your compliance work - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your morning starts with a regulatory alert. A new rule was proposed last week that could affect three different business units, and nobody has flagged it yet because nobody has time to read the 200-page Federal Register notice. The annual audit is in six weeks and your preparation checklist from last year is outdated because five policies were revised since then. You are not sure all the revisions were communicated to the teams who need them.',
        'There is a training session due for 300 employees by the end of the quarter. The materials from last year reference regulations that have been superseded. Your risk assessment matrix has not been updated since Q2, and the board wants a compliance dashboard by Friday. Meanwhile, an employee just reported a potential policy violation that needs to be documented, investigated, and tracked.',
        'You became a compliance officer because you believe in doing business the right way. You protect the organization from risk, keep it on the right side of regulations, and build the frameworks that make ethical operations possible. But instead of spending your time on strategy and risk management, you are drowning in policy updates, training logistics, and documentation that never seems to end.',
      ],
      highlight:
        'What if AI could draft your policies, build your audit checklists, and summarize regulatory changes - so you could focus on the strategic risk management that actually protects the organization?',
      closingParagraph:
        'Not replacing your regulatory expertise. Not making compliance decisions for you. Just compressing the 20 hours of manual research, drafting, and documentation into 3-4 hours of focused, high-quality work.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not a compliance officer. It cannot make judgment calls about regulatory risk. It does not understand the political dynamics within your organization that affect how policies get implemented. It will not replace the relationships you have built with regulators, auditors, and business leaders. And it should never be the sole basis for a compliance decision - regulations are too nuanced and the stakes are too high.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as a compliance research and drafting engine that never sleeps. It can read a 200-page regulation and summarize the key requirements in 5 minutes. It can draft a compliance policy from your outline in 10 minutes instead of 10 hours. It can generate audit checklists, training outlines, and risk assessment frameworks at the speed you think of them.',
            'Need to understand a new regulation and how it affects your organization? AI gives you a structured summary in minutes. Need to update a policy to reflect new requirements? AI drafts the revision and highlights what changed. Need to create training materials for a new compliance requirement? AI generates the outline and content you can refine.',
            'The principle: AI does the heavy drafting, research organization, and document creation. You provide the regulatory knowledge, the organizational context, and the professional judgment that makes it all work.',
          ],
        },
        {
          heading: 'Why compliance officers benefit enormously',
          paragraphs: [
            'Compliance work is inherently document-heavy and framework-driven. Policies follow templates. Audits follow checklists. Risk assessments follow matrices. Training follows outlines. AI excels at generating structured documents from frameworks - which is exactly what compliance officers do all day.',
            'The compliance officers who adopt AI first will be more responsive to regulatory changes, more thorough in their audit preparation, and more effective at building a culture of compliance - because they will have the time to focus on what matters instead of drowning in paperwork.',
          ],
        },
      ],
      keyInsight:
        'Your regulatory expertise + AI\'s processing speed = stronger compliance with less burnout. You know the regulations and the risks. AI eliminates the hours of drafting and documentation between identifying an issue and having a solution in place.',
    },

    ch3: {
      intro: 'You do not need specialized compliance software to start. These five tools cover the core of what compliance officers need from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your policy drafter and training creator',
          description:
            'Policy drafting, training material creation, audit checklists, risk assessments, and regulatory plain-language summaries',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for drafting and analysis',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your regulatory analyst and long-form writer',
          description:
            'Lengthy regulation analysis, comprehensive policy documents, detailed risk frameworks, and careful document comparison',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for complex regulatory analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your regulatory research assistant',
          description:
            'Regulatory updates, enforcement action tracking, industry benchmarking, and fact-checking with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed regulatory research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your compliance management hub',
          description:
            'Policy libraries, audit tracking, training schedules, incident logs, and compliance calendars',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize your compliance program',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your compliance training designer',
          description:
            'Training presentations, compliance infographics, policy summary one-pagers, and visual risk dashboards',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Make training materials people actually read',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting plus Perplexity for regulatory research. That covers 80% of your AI needs. Add Canva when you need to make training materials engaging.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your compliance workflow. Each system replaces hours of manual work. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Policy Drafting and Updates',
          before:
            'A new regulation requires a policy update. You pull the current policy, read the new regulation, draft revisions, route for legal review, incorporate feedback, finalize, and distribute. The whole cycle takes 2-4 weeks. Multiply by the dozen policies that need updating each year.',
          after:
            'AI reads the regulation, identifies what needs to change in your existing policy, drafts the revision with tracked changes, and generates the distribution communication. You review, apply your judgment, and route for approval. From weeks to days.',
          flow: [
            'Provide AI with the current policy and the new regulatory requirement',
            'AI identifies gaps and drafts the updated policy language',
            'Review the draft against the actual regulation',
            'Route for legal and stakeholder review',
            'Finalize, distribute, and update the policy library',
          ],
          timeSaved: { without: '2-4 weeks/policy', withAI: '2-3 days' },
        },
        {
          id: 2,
          name: 'Regulatory Research',
          before:
            'A new proposed rule drops. You read the full text, identify the provisions that affect your organization, compare it against your current program, and prepare a summary for leadership. The Federal Register notice alone takes half a day to read carefully.',
          after:
            'AI summarizes the regulation, extracts the provisions relevant to your industry, identifies the gaps in your current program, and drafts an impact assessment. Your half-day of reading becomes 30 minutes of review.',
          flow: [
            'Paste or describe the new regulation or proposed rule',
            'AI provides a structured summary with key requirements',
            'Review the summary against your current compliance program',
            'AI drafts a gap analysis and impact assessment',
            'Prepare your briefing for leadership',
          ],
          timeSaved: { without: '4-8 hours', withAI: '30-60 minutes' },
        },
        {
          id: 3,
          name: 'Audit Preparation and Checklists',
          before:
            'Audit season approaches and you start building checklists from memory, last year\'s audit, and the current regulatory framework. Cross-referencing requirements against evidence takes days. You always worry you are missing something.',
          after:
            'AI generates comprehensive audit checklists based on the applicable regulations, your policies, and the specific audit scope. It cross-references requirements with the evidence you need to collect. Gaps are identified before the auditor walks in.',
          flow: [
            'Define the audit scope, applicable regulations, and time period',
            'AI generates a detailed audit checklist by requirement area',
            'Review and customize based on your organizational specifics',
            'AI identifies documentation gaps and evidence needed',
            'Track completion status as you prepare',
          ],
          timeSaved: { without: '2-3 days', withAI: '3-4 hours' },
        },
        {
          id: 4,
          name: 'Training Material Creation',
          before:
            'You need to train 300 employees on a new compliance requirement. Creating the training deck takes a week. Half the employees will not read it anyway because it is 45 slides of dense regulatory language. Making it engaging takes design skills you do not have.',
          after:
            'AI generates training content that is clear, engaging, and accurate. It creates presentation outlines, quiz questions, scenario-based exercises, and plain-language summaries. You review for accuracy and customize for your audience.',
          flow: [
            'Define the training topic, audience, and key learning objectives',
            'AI generates a training outline with content for each section',
            'Review for regulatory accuracy and organizational context',
            'AI creates quiz questions and scenario exercises',
            'Package into your training delivery format',
          ],
          timeSaved: { without: '1-2 weeks', withAI: '2-3 hours' },
        },
        {
          id: 5,
          name: 'Risk Assessment Frameworks',
          before:
            'The annual risk assessment requires identifying risks across the organization, scoring them for likelihood and impact, developing mitigation strategies, and documenting everything in a matrix that makes sense to the board. The process takes weeks and involves dozens of meetings.',
          after:
            'AI helps you build the risk assessment framework, generate initial risk inventories based on your industry and regulations, draft scoring criteria, and create the documentation. You focus on the judgment calls - validating risks, scoring them accurately, and designing the right mitigations.',
          flow: [
            'Define the assessment scope, industry, and regulatory framework',
            'AI generates an initial risk inventory and scoring criteria',
            'Review and validate the risk inventory with stakeholders',
            'AI builds the risk matrix and drafts mitigation strategies',
            'Finalize the assessment and prepare the board presentation',
          ],
          timeSaved: { without: '3-4 weeks', withAI: '1 week' },
        },
        {
          id: 6,
          name: 'Incident Documentation',
          before:
            'An employee reports a potential compliance violation. You need to document the report, plan the investigation, conduct interviews, gather evidence, write findings, and recommend corrective action. The documentation alone takes hours for each incident.',
          after:
            'AI helps you structure incident reports, generate investigation plans, draft interview questions, organize findings, and create corrective action recommendations. You focus on the actual investigation while AI handles the documentation framework.',
          flow: [
            'Input the initial incident details and report information',
            'AI generates a structured incident report and investigation plan',
            'Conduct the investigation with AI-generated interview guides',
            'AI organizes your findings into a structured report',
            'Draft corrective action recommendations and track resolution',
          ],
          timeSaved: { without: '4-6 hours/incident', withAI: '1-2 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every compliance task. Click to reveal, copy, and paste. Fill in the brackets with your specifics. Always verify AI output against the actual regulatory text.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Policy Drafting',
          prompts: [
            {
              id: 'co-p-1-1',
              title: 'Compliance Policy Template',
              task: 'Draft a new compliance policy from scratch',
              prompt: `Draft a compliance policy for [topic - e.g., anti-bribery and corruption, data privacy, conflicts of interest, whistleblower protection].

Organization: [company name and type]
Industry: [industry]
Applicable regulations: [list the specific regulations this policy must address - e.g., FCPA, GDPR, SOX]
Workforce size: [approximate number of employees]
Geographic scope: [where you operate]

Draft a policy with the following sections:
1. Purpose and Scope - why this policy exists and who it applies to
2. Definitions - key terms defined in plain language
3. Policy Statement - the core requirements (clear, specific, actionable)
4. Roles and Responsibilities - who does what (board, management, employees, compliance team)
5. Prohibited Conduct - specific examples of what is not allowed
6. Required Conduct - specific steps employees must take
7. Reporting Procedures - how to report violations (include anonymous options)
8. Investigation Process - what happens after a report is made
9. Consequences of Non-Compliance - disciplinary actions
10. Training Requirements - who gets trained and how often
11. Record Keeping - what records must be maintained and for how long
12. Review and Updates - how often the policy is reviewed
13. Approval and Effective Date

Tone: Professional but accessible. An employee without a legal background should understand every provision.
Length: Comprehensive but not bloated. Aim for 5-8 pages.`,
              result: 'A complete, professional compliance policy draft ready for your review.',
              tip: 'Always have legal counsel review the final policy before distribution. AI gives you the 90% draft - your expertise and legal review provide the final 10%.',
            },
            {
              id: 'co-p-1-2',
              title: 'Policy Gap Analysis',
              task: 'Compare an existing policy against regulatory requirements',
              prompt: `Analyze the following compliance policy against current regulatory requirements and identify gaps.

Current policy:
[Paste the existing policy text]

Applicable regulation(s):
[List the specific regulations this policy should address, or paste key regulatory provisions]

Industry: [your industry]
Last policy update: [date]

Analyze for:
1. Coverage gaps - regulatory requirements not addressed in the current policy
2. Outdated provisions - sections that reference superseded regulations or outdated practices
3. Vague language - provisions that are too general to be enforceable or actionable
4. Missing procedures - required processes that are not documented
5. Inconsistencies - provisions that contradict each other or conflict with the regulation
6. Best practice gaps - areas where the policy meets minimum requirements but falls short of industry best practices
7. Enforcement gaps - requirements without defined consequences or accountability

For each gap found:
- What is missing or inadequate
- Which specific regulation or requirement it relates to
- Recommended language to close the gap
- Priority: Critical / Important / Recommended

Provide a summary: total gaps found by priority level and recommended update timeline.`,
              result: 'A detailed gap analysis with specific recommendations for policy updates.',
              tip: 'Run this annually for every major policy. It is faster than a manual review and catches gaps you might miss.',
            },
            {
              id: 'co-p-1-3',
              title: 'Policy Update Drafter',
              task: 'Draft policy updates based on new regulatory requirements',
              prompt: `Draft updates to the following compliance policy based on new regulatory requirements.

Current policy:
[Paste the existing policy text]

New requirement:
[Describe the new regulation, guidance, or requirement that necessitates the update]

Effective date of new requirement: [date]

Draft the updated policy with:
1. Tracked changes format - clearly mark what is added, removed, or modified
2. For each change:
   - Section affected
   - Old language
   - New language
   - Reason for the change (cite the specific regulatory requirement)
3. Any new sections that need to be added
4. Sections that may need review even if not directly affected by this change
5. Updated definitions (if new terms are introduced)
6. Transition provisions - how to handle the gap between old and new requirements

Also provide:
- A plain-language summary of changes (for distribution to employees)
- Training implications - does the workforce need to be retrained?
- Implementation timeline recommendation
- Communication plan outline (who needs to know, by when, through what channel)

Mark any areas where you need my input on organizational specifics.`,
              result: 'A complete policy update package with tracked changes and communication materials.',
              tip: 'Use the plain-language summary as the basis for your internal communication. Nobody reads a full policy update - they will read a one-page summary.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Regulatory Research',
          prompts: [
            {
              id: 'co-p-2-1',
              title: 'Regulation Summary',
              task: 'Summarize a regulation and its key requirements',
              prompt: `Summarize the following regulation for our compliance team.

Regulation: [name and citation - e.g., GDPR, CCPA, SOX Section 404, HIPAA Privacy Rule]
Our organization: [company type and industry]
Our role: [how we interact with this regulation - e.g., data controller, covered entity, reporting company]

Provide:
1. One-paragraph plain-language overview (what this regulation does)
2. Who it applies to (and confirm whether it applies to us)
3. Key requirements (numbered list, 5-10 most important provisions)
4. Prohibited actions (what we cannot do)
5. Required actions (what we must do)
6. Reporting and disclosure obligations
7. Record-keeping requirements
8. Penalty provisions (what happens if we violate it)
9. Enforcement agency and recent enforcement trends
10. Key deadlines or compliance dates

Also include:
- How this regulation interacts with other regulations we should know about
- Recent amendments or proposed changes
- 3 most common compliance failures in our industry
- Recommended compliance program elements

Write for a compliance professional - knowledgeable but not necessarily an expert on this specific regulation.`,
              result: 'A comprehensive but accessible regulation summary for your compliance files.',
              tip: 'Run this for every major regulation that affects your organization. Build a library of summaries for quick reference.',
            },
            {
              id: 'co-p-2-2',
              title: 'Enforcement Action Analyzer',
              task: 'Analyze recent enforcement actions for compliance lessons',
              prompt: `Analyze the following enforcement action(s) and extract compliance lessons for our organization.

Enforcement action details:
[Paste press releases, settlement orders, or describe the enforcement action]
OR
[Ask AI to research recent enforcement actions in your regulatory area]

Regulatory body: [e.g., SEC, DOJ, FTC, CFPB, state AG]
Our industry: [industry]
Our organization size: [small / mid / large]

Analyze:
1. What happened - factual summary of the violation
2. What went wrong - the compliance failure that led to enforcement
3. Penalty imposed (financial and non-financial)
4. Aggravating factors - what made it worse
5. Mitigating factors - what would have reduced the penalty
6. Regulatory expectations revealed - what the regulator specifically criticized
7. Program elements the regulator praised (in settlements with cooperation credit)
8. Lessons for our organization:
   - Could this happen to us? Why or why not
   - What controls would prevent this specific violation
   - What changes should we consider making
9. Self-assessment questions to ask about our own program
10. Action items to present to leadership

Format as a one-page compliance alert suitable for distribution to senior management.`,
              result: 'An enforcement action analysis with actionable lessons for your organization.',
              tip: 'Tracking enforcement trends is one of the most valuable things you can do. Run this monthly for actions in your regulatory space.',
            },
            {
              id: 'co-p-2-3',
              title: 'Regulatory Change Impact Assessment',
              task: 'Assess the impact of a proposed or new regulatory change',
              prompt: `Assess the impact of the following regulatory change on our organization.

Regulatory change: [describe the new rule, proposed rule, or guidance]
Regulatory body: [who issued it]
Status: [proposed / final / effective immediately]
Effective date: [when it takes effect]
Comment period deadline: [if proposed rule]

Our organization:
- Type: [company type]
- Industry: [industry]
- Size: [employees, revenue range]
- Current compliance program: [brief description of relevant existing controls]

Assess:
1. Direct impact - which specific operations, departments, or processes are affected
2. Compliance gaps - where our current program falls short of the new requirements
3. Cost impact estimate:
   - One-time implementation costs (new systems, training, legal review)
   - Ongoing compliance costs (monitoring, reporting, staffing)
4. Timeline - what needs to happen by when
5. Resource requirements - who needs to be involved in implementation
6. Risk if we do not comply - penalties, enforcement likelihood, reputational impact
7. Implementation roadmap:
   - Phase 1: Immediate actions (first 30 days)
   - Phase 2: Core implementation (30-90 days)
   - Phase 3: Full compliance (90 days to effective date)
8. Stakeholders to brief and when
9. Whether we should submit a comment (if proposed rule)

Provide an executive summary (5 sentences) suitable for a board-level briefing.`,
              result: 'A comprehensive impact assessment with implementation roadmap.',
              tip: 'Present the executive summary first to leadership, with the full assessment available for those who want details.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Audit Preparation',
          prompts: [
            {
              id: 'co-p-3-1',
              title: 'Audit Workpaper Generator',
              task: 'Generate audit preparation workpapers and evidence checklists',
              prompt: `Generate audit preparation workpapers for the following audit.

Audit type: [e.g., internal audit, regulatory exam, external audit, SOX assessment]
Audit scope: [what areas or requirements are being audited]
Applicable regulations/standards: [list specific regulations]
Audit period: [date range being audited]
Auditor: [internal team, external firm, regulatory examiner]

Generate:
1. Audit preparation checklist by requirement area:
   - Requirement description
   - Evidence needed to demonstrate compliance
   - Where that evidence is located
   - Who is responsible for providing it
   - Status: Ready / In Progress / Not Started

2. Document request list:
   - Anticipated documents the auditor will request
   - Format requirements (original, copies, electronic)
   - Preparation needed before providing

3. Key personnel interview prep:
   - Likely interviewees and their areas
   - Common questions auditors ask for each area
   - Recommended talking points (factual, not evasive)

4. Gap assessment:
   - Areas where compliance evidence may be weak
   - Recommended remediation before the audit
   - How to address gaps honestly if asked

5. Timeline:
   - Pre-audit preparation tasks with deadlines
   - Audit week logistics
   - Post-audit response timeline

Flag any areas where I should expect auditor scrutiny based on current enforcement trends.`,
              result: 'Complete audit preparation workpapers with evidence checklists.',
              tip: 'Start preparation at least 6 weeks before the audit. The earlier you identify gaps, the more time you have to address them.',
            },
            {
              id: 'co-p-3-2',
              title: 'Controls Testing Checklist',
              task: 'Create a controls testing checklist for compliance monitoring',
              prompt: `Create a controls testing checklist for our compliance monitoring program.

Compliance area: [e.g., anti-money laundering, data privacy, trade compliance, financial reporting]
Applicable regulation: [specific regulation]
Control environment: [brief description of existing controls]

For each control area, generate a testing checklist with:

1. Control description - what the control is designed to prevent or detect
2. Control type: Preventive / Detective / Corrective
3. Test procedure - step-by-step instructions for testing this control
4. Sample size recommendation - how many transactions or instances to test
5. Evidence to collect during testing
6. Expected result - what a passing test looks like
7. Common findings - typical deficiencies found in this area
8. Rating criteria:
   - Effective: Control operating as designed
   - Partially effective: Control exists but has gaps
   - Ineffective: Control is not operating or does not exist
9. Remediation guidance - what to do if the control fails testing

After the checklist, provide:
- Recommended testing frequency for each control
- Risk-based prioritization (which controls to test first)
- Documentation template for test results
- Escalation criteria (when to report findings to management or the board)

Design for a compliance officer who will perform the testing - clear, step-by-step, and practical.`,
              result: 'A comprehensive controls testing program you can implement immediately.',
              tip: 'Test your highest-risk controls quarterly and everything else at least annually. Document every test result - even passing tests.',
            },
            {
              id: 'co-p-3-3',
              title: 'Audit Finding Response',
              task: 'Draft a response to audit findings',
              prompt: `Draft a management response to the following audit finding(s).

Audit finding:
[Paste the finding as written by the auditor]

Finding severity: [critical / major / minor / observation]
Area affected: [department, process, or regulation]
Our understanding of the root cause: [why this happened]
Remediation already in progress (if any): [what we have started doing]

Draft a management response that includes:
1. Acknowledgment - accept the finding professionally (do not be defensive)
2. Root cause analysis - explain why the deficiency occurred
3. Corrective action plan:
   - Specific actions to address the finding (numbered)
   - Responsible party for each action
   - Target completion date for each action
   - Resources required
4. Preventive measures - what we will do to prevent recurrence
5. Interim measures - what we are doing right now to mitigate risk until the permanent fix is in place
6. Monitoring plan - how we will verify the corrective actions are working

Tone: Responsive, accountable, and action-oriented. Show that we take this seriously without being alarmist.

If applicable, include any mitigating factors the auditor should consider (but do not excuse the finding - just provide context).`,
              result: 'A professional audit finding response with a clear corrective action plan.',
              tip: 'Respond promptly and honestly. A strong corrective action plan demonstrates program maturity. Track every action item to completion.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Training Materials',
          prompts: [
            {
              id: 'co-p-4-1',
              title: 'Compliance Training Outline',
              task: 'Create a training module outline for a compliance topic',
              prompt: `Create a compliance training module for the following topic.

Topic: [e.g., anti-bribery, data privacy, insider trading, workplace harassment, information security]
Audience: [who is being trained - all employees, managers, specific department, board]
Audience size: [approximate number]
Required by: [which regulation or policy requires this training]
Delivery format: [in-person, virtual, e-learning, video, written materials]
Duration target: [e.g., 30 minutes, 1 hour, 2 hours]

Create a training module with:

1. Learning objectives (3-5 specific, measurable objectives)
2. Module outline with timing:
   - Introduction and why this matters (not just "because the law says so")
   - Key concepts explained in plain language
   - Real-world scenarios relevant to this audience
   - What employees must do (specific actions)
   - What employees must not do (with consequences)
   - How to report concerns
   - Resources and contacts
3. Scenario-based exercises (3 realistic scenarios with discussion questions)
4. Key takeaways (5 bullet points an employee should remember)
5. Quiz questions (10 questions - mix of multiple choice, true/false, and scenario-based)
6. Answer key with explanations

Make it engaging and practical. Avoid regulatory jargon. Use examples that feel real to this audience. People should leave knowing exactly what to do and what not to do.`,
              result: 'A complete training module outline with exercises and assessment.',
              tip: 'The best compliance training uses real scenarios from your industry. Replace the generic examples with anonymized versions of actual incidents when possible.',
            },
            {
              id: 'co-p-4-2',
              title: 'Training Scenario Creator',
              task: 'Create realistic compliance training scenarios',
              prompt: `Create realistic compliance training scenarios for [compliance topic].

Industry: [your industry]
Audience: [who is being trained]
Regulation: [applicable regulation]
Common violations in our industry: [list any you are aware of]

Generate 5 detailed training scenarios:

For each scenario:
1. Setup (2-3 paragraphs describing a realistic situation an employee might face)
2. The dilemma (what decision does the employee need to make?)
3. Option A - the wrong action (and why it is wrong)
4. Option B - the right action (and why it is right)
5. Option C - the gray area action (and how to navigate it)
6. The correct answer with explanation
7. Red flags the employee should have spotted
8. What to do after identifying the issue (reporting steps)
9. Real-world consequence if this were mishandled (reference actual enforcement actions if possible)

Requirements:
- Make the scenarios genuinely ambiguous - not obvious right/wrong answers
- Include scenarios at different severity levels (minor issue to major violation)
- Include at least one scenario involving pressure from a manager
- Include at least one scenario involving a third party (vendor, customer, agent)
- Make the characters and situations feel real to the audience

These should generate discussion, not just check a box.`,
              result: 'Five detailed, discussion-worthy compliance training scenarios.',
              tip: 'The gray-area scenarios generate the best discussions. Use them in live training sessions for maximum impact.',
            },
            {
              id: 'co-p-4-3',
              title: 'Training Effectiveness Survey',
              task: 'Create a post-training effectiveness assessment',
              prompt: `Create a post-training effectiveness assessment for our [compliance topic] training.

Training topic: [what was covered]
Audience: [who was trained]
Training date: [when it was delivered]
Training format: [how it was delivered]
Key learning objectives: [what they should have learned]

Create a training effectiveness assessment with:

1. Knowledge Check (10 questions):
   - 5 concept questions (do they understand the rules?)
   - 3 application questions (can they apply rules to realistic situations?)
   - 2 judgment questions (can they identify the right course of action in gray areas?)
   - Include the answer key

2. Confidence Assessment:
   - 5 statements rated on a 1-5 scale (strongly disagree to strongly agree)
   - Focus on ability to identify issues, know where to report, and feel supported

3. Behavior Assessment (for managers to complete 30 days post-training):
   - Observable behaviors that indicate the training is being applied
   - Checklist format for easy completion

4. Feedback Questions:
   - What was the most valuable part of this training?
   - What was unclear or needs more explanation?
   - What real situations would you like covered in future training?
   - How can we make this training more effective?

5. Metrics to Track:
   - Pass rate target for knowledge check
   - Benchmark scores for confidence assessment
   - How to use the data to improve future training

Make it short enough that people actually complete it - no more than 10 minutes.`,
              result: 'A multi-level training effectiveness assessment ready to deploy.',
              tip: 'Track scores over time. Declining scores signal that training needs refreshing. Rising report rates after training is actually a good sign - it means people know how to report.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Risk Assessment',
          prompts: [
            {
              id: 'co-p-5-1',
              title: 'Risk Matrix Builder',
              task: 'Build a compliance risk assessment matrix',
              prompt: `Build a compliance risk assessment matrix for our organization.

Organization: [company type and industry]
Regulatory environment: [key regulations we operate under]
Operations scope: [domestic, international, specific regions]
Recent changes: [any new products, markets, regulations, or organizational changes]

Create a risk matrix with:

1. Risk Inventory (identify 15-20 compliance risks):
   For each risk:
   - Risk description
   - Regulatory source
   - Business area affected
   - Likelihood score (1-5, with criteria for each level)
   - Impact score (1-5, with criteria for each level)
   - Inherent risk rating (likelihood x impact)
   - Current controls in place
   - Residual risk rating (after controls)
   - Risk owner (which role is responsible)

2. Scoring Criteria:
   - Likelihood scale definitions (1 = rare, 5 = almost certain)
   - Impact scale definitions (1 = negligible, 5 = catastrophic)
   - Risk rating categories: Low (1-6), Medium (7-12), High (13-19), Critical (20-25)

3. Heat Map:
   - Visual matrix layout showing where each risk falls
   - Color coding: Green / Yellow / Orange / Red

4. Action Requirements by Risk Level:
   - Critical: Immediate action required, board notification
   - High: Mitigation plan within 30 days
   - Medium: Monitor quarterly, enhance controls as resources allow
   - Low: Annual review, maintain current controls

5. Top 5 Risks requiring immediate attention with recommended actions

Tailor the risks to our specific industry and regulatory environment.`,
              result: 'A complete risk assessment matrix ready for refinement and presentation.',
              tip: 'Validate this with stakeholders across the organization. Compliance risk is not just a compliance department issue - every business unit owns their risks.',
            },
            {
              id: 'co-p-5-2',
              title: 'Third-Party Risk Assessment',
              task: 'Create a third-party compliance risk assessment framework',
              prompt: `Create a third-party compliance risk assessment framework for evaluating vendors, agents, and business partners.

Organization: [company type]
Industry: [industry]
Key regulations: [e.g., FCPA, GDPR, sanctions, AML]
Third-party types we use: [vendors, distributors, agents, consultants, joint venture partners, etc.]

Build an assessment framework with:

1. Risk Tiering Criteria:
   - What makes a third party high/medium/low risk
   - Factors: location, government interaction, transaction volume, data access, industry
   - Automatic high-risk triggers (e.g., government-connected, sanctioned country, cash-intensive)

2. Due Diligence Requirements by Tier:
   - Low risk: [minimum checks required]
   - Medium risk: [standard due diligence]
   - High risk: [enhanced due diligence]

3. Due Diligence Questionnaire (20 key questions):
   - Ownership and control
   - Government affiliations
   - Compliance program maturity
   - Litigation and enforcement history
   - Subcontractor usage
   - Financial stability indicators

4. Red Flags Checklist (15 red flags that require escalation):
   - Examples specific to our regulatory environment

5. Ongoing Monitoring Requirements:
   - Monitoring frequency by tier
   - Trigger events requiring re-assessment
   - Annual certification requirements

6. Approval and Documentation Requirements:
   - Who approves each tier
   - What must be documented and retained
   - Record retention period

Make this practical enough to implement without a dedicated third-party risk management platform.`,
              result: 'A complete third-party risk framework ready to implement.',
              tip: 'Start by assessing your highest-risk third parties first. You can build out the full program over time, but high-risk relationships need immediate attention.',
            },
            {
              id: 'co-p-5-3',
              title: 'Board Risk Report',
              task: 'Create a board-level compliance risk report',
              prompt: `Create a quarterly compliance risk report for the board of directors.

Reporting period: [quarter and year]
Organization: [company name and type]

Current compliance program data:
[Paste any data you have - incident reports, training completion rates, audit findings, regulatory changes, investigations, policy updates]

Create a board-ready report with:

1. Executive Summary (half page maximum):
   - Overall compliance program health assessment
   - Top 3 items requiring board attention
   - Key metric changes from last quarter

2. Risk Dashboard:
   - Top 5 compliance risks with current status (improved, stable, worsening)
   - Any new risks identified this quarter
   - Risks that have been resolved or mitigated

3. Key Metrics (with quarter-over-quarter trends):
   - Training completion rate
   - Hotline/reporting activity (volume, types, resolution time)
   - Policy violations identified and resolved
   - Audit findings open/closed
   - Regulatory changes tracked and implemented

4. Regulatory Landscape Update:
   - New regulations or guidance affecting us
   - Enforcement trends in our industry
   - Upcoming compliance deadlines

5. Program Activities This Quarter:
   - Policies updated
   - Training delivered
   - Assessments completed
   - Investigations conducted (anonymized)

6. Resource and Budget Update:
   - Current vs. planned spend
   - Resource needs for next quarter

7. Recommended Board Actions:
   - Decisions or approvals needed
   - Areas requiring board oversight

Keep it visual where possible. Board members scan - they do not read 20-page reports.`,
              result: 'A professional board-level compliance report ready for presentation.',
              tip: 'Send the report 48 hours before the board meeting so members can review. Prepare talking points for the top 3 items.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Incident Documentation',
          prompts: [
            {
              id: 'co-p-6-1',
              title: 'Incident Investigation Report',
              task: 'Structure an internal investigation report',
              prompt: `Structure an investigation report for the following compliance incident.

Incident type: [e.g., policy violation, fraud allegation, data breach, harassment complaint, regulatory violation]
Date reported: [date]
Date(s) of alleged incident: [date range]
Reported by: [anonymous / named - do not include actual names in the prompt]
Subject of investigation: [role, not name]
Business area: [department or unit]

Investigation details:
[Summarize what was reported, what you investigated, and what you found - use roles, not names]

Create an investigation report with:

1. Report Header:
   - Investigation number
   - Date initiated and date completed
   - Investigator(s)
   - Classification: [confirmed violation / substantiated / unsubstantiated / inconclusive]

2. Executive Summary (half page):
   - What was reported
   - Key finding in one sentence
   - Recommended action in one sentence

3. Allegation Details:
   - How the report was received
   - Specific allegations
   - Applicable policies and regulations

4. Investigation Methodology:
   - Documents reviewed
   - Interviews conducted
   - Systems or data analyzed
   - Timeline of investigation steps

5. Findings of Fact:
   - Chronological presentation of evidence
   - Corroborating and contradicting evidence
   - Credibility assessments

6. Analysis:
   - Application of policy/regulation to facts
   - Determination for each allegation (substantiated / not substantiated / inconclusive)

7. Root Cause Analysis:
   - Why this happened
   - Contributing factors

8. Recommendations:
   - Disciplinary action (if warranted)
   - Corrective actions
   - Preventive measures
   - Policy or process changes needed

9. Confidentiality and Distribution:
   - Who receives this report
   - Document retention requirements

Write in a factual, objective tone. No conclusions beyond what the evidence supports.`,
              result: 'A structured, professional investigation report framework.',
              tip: 'Keep investigation reports factual and evidence-based. Avoid legal conclusions unless directed by counsel. Always have legal review the final report.',
            },
            {
              id: 'co-p-6-2',
              title: 'Incident Tracking Dashboard Builder',
              task: 'Design an incident tracking and reporting system',
              prompt: `Design an incident tracking system for our compliance program.

Organization size: [number of employees]
Incident types we handle: [list the types - e.g., policy violations, fraud, data breaches, safety incidents, discrimination complaints]
Current tracking method: [spreadsheet, software, paper, nothing]
Reporting needs: [who needs reports and how often]

Design a tracking system with:

1. Incident Intake Form Fields:
   - Date reported and date of incident
   - Reporting method (hotline, email, in-person, web form)
   - Reporter information (if not anonymous)
   - Incident type and category
   - Business unit and location
   - Description of the incident
   - Urgency level: Critical / High / Standard / Low
   - Immediate actions taken

2. Investigation Tracking Fields:
   - Assigned investigator
   - Investigation status (new, in progress, pending review, closed)
   - Key dates (opened, interviews completed, report drafted, closed)
   - Finding (substantiated, unsubstantiated, inconclusive)
   - Corrective actions assigned

3. Dashboard Metrics:
   - Total incidents by type and period
   - Average time to close by severity
   - Incidents by business unit/location
   - Trend analysis (month over month)
   - Open vs. closed incidents
   - Corrective action completion rate
   - Repeat offender tracking

4. Reporting Templates:
   - Weekly status report for compliance leadership
   - Monthly summary for senior management
   - Quarterly board report
   - Annual trend analysis

5. Escalation Rules:
   - What incidents escalate automatically and to whom
   - Time-based escalation (if not addressed within X days)
   - Severity-based escalation criteria

Make this implementable in Notion, a spreadsheet, or simple case management tool.`,
              result: 'A complete incident tracking system design ready to implement.',
              tip: 'Start simple and add complexity as you need it. A consistent spreadsheet is better than a sophisticated system nobody uses.',
            },
            {
              id: 'co-p-6-3',
              title: 'Corrective Action Plan Template',
              task: 'Create a corrective action plan for a compliance violation',
              prompt: `Create a corrective action plan for the following compliance issue.

Issue identified: [describe the violation or deficiency]
How it was identified: [audit finding, incident report, self-assessment, regulatory exam]
Severity: [critical / major / minor]
Business area affected: [department or process]
Root cause: [why this happened]
Regulatory requirement: [which regulation or policy was violated]

Create a corrective action plan with:

1. Issue Description:
   - Clear, factual description of the deficiency
   - Regulatory or policy requirement not met
   - Business impact (actual or potential)

2. Root Cause Analysis:
   - Primary root cause
   - Contributing factors
   - Was this a people, process, technology, or oversight failure?

3. Immediate Actions (within 48 hours):
   - Steps to stop the bleeding
   - Notifications required
   - Interim controls

4. Corrective Actions (30-60 days):
   - Specific action | Responsible person | Target date | Status
   - [List 5-10 specific actions]

5. Preventive Actions (60-90 days):
   - Changes to prevent recurrence
   - Policy updates needed
   - Training required
   - System or process changes

6. Monitoring and Validation:
   - How we will verify the corrective actions are working
   - Testing plan and frequency
   - Metrics to track
   - Duration of enhanced monitoring

7. Reporting:
   - Status update frequency
   - Who receives updates
   - Criteria for closing the corrective action plan

8. Sign-Off:
   - Plan owner
   - Approver
   - Date approved
   - Next review date

Make each action SMART: Specific, Measurable, Assigned, Realistic, Time-bound.`,
              result: 'A detailed corrective action plan ready for implementation.',
              tip: 'Track every action to completion and verify effectiveness. A corrective action plan that is written but not executed is worse than no plan at all.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what AI actually saves you in compliance program management each month.',
      timeTable: [
        {
          task: 'Policy drafting and updates',
          without: '2-4 weeks/policy',
          withAI: '2-3 days',
          saved: '1-3 weeks/policy',
        },
        {
          task: 'Regulatory research and summaries',
          without: '4-8 hours/regulation',
          withAI: '30-60 minutes',
          saved: '4+ hours/regulation',
        },
        {
          task: 'Audit preparation',
          without: '2-3 days',
          withAI: '3-4 hours',
          saved: '1-2 days',
        },
        {
          task: 'Training material creation',
          without: '1-2 weeks',
          withAI: '2-3 hours',
          saved: '1+ week',
        },
        {
          task: 'Risk assessment',
          without: '3-4 weeks',
          withAI: '1 week',
          saved: '2-3 weeks',
        },
        {
          task: 'Incident documentation',
          without: '4-6 hours/incident',
          withAI: '1-2 hours',
          saved: '3+ hours/incident',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '20-40 hrs/month',
      },
      sections: [
        {
          heading: 'The Compliance Advantage',
          paragraphs: [
            'Compliance officers who use AI are not cutting corners - they are building stronger programs. When you can draft a policy in days instead of weeks, you respond to regulatory changes faster. When you can generate audit checklists in hours instead of days, your preparation is more thorough.',
            'The organizations with AI-equipped compliance teams are not just faster. They are more responsive, more thorough, and more proactive. The gap is widening every quarter.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a compliance officer to spend weeks formatting policy documents or building training decks from scratch. You did it to protect the organization and build a culture of doing business the right way. AI gives you back the time to focus on the strategic, human work that actually builds a compliance culture.',
          ],
        },
      ],
      keyInsight:
        'Start with one policy update or one audit checklist. See how much time it saves. Then build AI into your entire compliance workflow.',
    },

    ch7: {
      intro:
        'Seven days to integrate AI into your compliance program. One step at a time. Check off each task as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'co-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'co-1-2', label: 'Create a free Perplexity account for regulatory research' },
            { id: 'co-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Summarize a Regulation',
          duration: '15 min',
          items: [
            { id: 'co-2-1', label: 'Pick a regulation that affects your organization' },
            { id: 'co-2-2', label: 'Run the Regulation Summary prompt' },
            { id: 'co-2-3', label: 'Compare the output to your own understanding' },
          ],
        },
        {
          day: 3,
          title: 'Update a Policy',
          duration: '25 min',
          items: [
            { id: 'co-3-1', label: 'Pick a policy that needs updating' },
            { id: 'co-3-2', label: 'Run the Policy Gap Analysis prompt' },
            { id: 'co-3-3', label: 'Use the results to draft updates' },
          ],
        },
        {
          day: 4,
          title: 'Build an Audit Checklist',
          duration: '20 min',
          items: [
            { id: 'co-4-1', label: 'Identify an upcoming audit or assessment' },
            { id: 'co-4-2', label: 'Run the Audit Workpaper Generator prompt' },
            { id: 'co-4-3', label: 'Customize the checklist for your organization' },
          ],
        },
        {
          day: 5,
          title: 'Create Training Content',
          duration: '20 min',
          items: [
            { id: 'co-5-1', label: 'Pick a compliance topic that needs training' },
            { id: 'co-5-2', label: 'Run the Compliance Training Outline prompt' },
            { id: 'co-5-3', label: 'Review the scenarios and quiz questions for accuracy' },
          ],
        },
        {
          day: 6,
          title: 'Assess a Risk',
          duration: '20 min',
          items: [
            { id: 'co-6-1', label: 'Run the Risk Matrix Builder prompt for your organization' },
            { id: 'co-6-2', label: 'Validate the risk inventory against your knowledge' },
            { id: 'co-6-3', label: 'Identify your top 3 risks that need attention' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            { id: 'co-7-1', label: 'Review which AI tasks saved you the most time' },
            { id: 'co-7-2', label: 'Identify 2-3 compliance workflows to automate with AI going forward' },
            { id: 'co-7-3', label: 'Share this guide with a compliance colleague' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
