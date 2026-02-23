import type { WorkbookData } from './types'

export const hrData = {
  professionId: 'hr',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for HR Professionals',
  heroDescription:
    'Streamline every part of your HR workflow - from job descriptions and interviews to onboarding, policies, and performance reviews - with practical AI tools, systems, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Monday morning and your inbox already has 34 messages. Two hiring managers need updated job descriptions by end of day. A new hire starts Wednesday and their onboarding packet is half-finished. Three employees sent questions about the PTO policy you updated last quarter - apparently the latest version never made it to the handbook. There is a performance review cycle kicking off next week and you still need to build the templates.',
        'You got into HR because you care about people. You wanted to build great teams, shape company culture, and help employees grow. Instead, you spend most of your day writing documents, chasing approvals, answering the same policy questions, and formatting spreadsheets. The strategic work - the work that actually changes the company - keeps getting pushed to "next week."',
        'Every JD takes an hour. Every onboarding checklist is rebuilt from scratch. Every policy update means rewriting 15 pages. The performance review cycle alone eats two full weeks of your quarter. And through all of it, you are the bottleneck - because everything runs through you.',
      ],
      highlight:
        'What if AI handled the first draft of every document, every template, and every communication - so you could focus on the human side of HR?',
      closingParagraph:
        'Not replacing your judgment. Not automating away the empathy and nuance that makes great HR. Just eliminating the 5 hours of blank-screen-to-first-draft work that slows you down every single day.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not making hiring decisions for you. It is not evaluating employee potential, reading the room in a sensitive conversation, or deciding who gets promoted. The human judgment, emotional intelligence, and ethical reasoning that define great HR work - AI does not touch any of that.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient HR coordinator you have ever worked with. This coordinator has read thousands of job descriptions, onboarding guides, employee handbooks, and performance frameworks. It drafts documents in seconds. It never forgets a section. And it works at 2 AM when you are prepping for tomorrow\'s orientation.',
            'Need a job description for a role you have never hired for? First draft in 60 seconds. Need to rewrite your remote work policy? Structured draft in 2 minutes. Need 20 behavioral interview questions tailored to a specific role? Done before your coffee gets cold.',
            'The catch is the same as any tool - the output is only as good as your input. Give it vague instructions and you get generic boilerplate. Give it specific context about your company, culture, and needs, and you get drafts that are 80% ready to use.',
          ],
        },
      ],
      keyInsight:
        'Your HR expertise + AI\'s drafting speed = more time for the work that actually matters. You know what good looks like. AI removes the hours between "I need this document" and "here is the first draft."',
    },

    ch3: {
      intro: 'Five tools that cover 90% of what HR professionals need from AI right now.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and brainstorming engine',
          description:
            'Job descriptions, interview questions, policy drafts, employee communications, performance templates - any text-based HR task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-document specialist',
          description:
            'Employee handbooks, detailed policy rewrites, nuanced communications, complex onboarding guides - excels at longer, more structured content',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for policies and handbooks',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your HR knowledge base',
          description:
            'Onboarding wikis, policy libraries, meeting notes, process documentation - keeps everything organized and searchable',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Perplexity',
          role: 'Your compliance and research assistant',
          description:
            'Labor law updates, benefits benchmarking, salary research, industry best practices - all with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Canva AI',
          role: 'Your visual communications builder',
          description:
            'Onboarding presentations, culture decks, benefits guides, internal announcements - professional design without a designer',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Make it look professional',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting everything. Add Perplexity when you need research with sources. Notion AI and Canva come in when you are ready to organize and present.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual HR workflows. Click each system to see the before, after, and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Job Description Writing',
          before:
            'You open a blank document or copy an old JD from two years ago. You check LinkedIn and Indeed for similar roles, borrow language from three different postings, try to make it sound like your company, and spend an hour getting the responsibilities, qualifications, and tone right. Then the hiring manager sends edits. Another 30 minutes.',
          after:
            'You give AI the role, team context, must-haves, and company culture in a few bullet points. In 90 seconds you have a polished JD with clear responsibilities, realistic qualifications, and language that actually attracts the right candidates. Hiring manager edits take 10 minutes because the foundation is solid.',
          flow: [
            'Gather role details from the hiring manager (title, responsibilities, must-haves)',
            'Feed the context into ChatGPT or Claude with your company culture notes',
            'AI generates a complete JD with all standard sections',
            'Review, adjust tone and qualifications for accuracy',
            'Send to hiring manager for final approval',
          ],
          timeSaved: { without: '1-2 hours/JD', withAI: '15 minutes' },
        },
        {
          id: 2,
          name: 'Interview Process Design',
          before:
            'You Google "behavioral interview questions for [role]" and pick a few that seem relevant. The hiring manager adds some technical questions. There is no scoring rubric. Every interviewer asks whatever they feel like. Feedback is inconsistent. Comparing candidates is guesswork.',
          after:
            'AI generates role-specific questions mapped to the competencies that actually matter - behavioral, technical, situational, and culture-fit. Each question comes with what a strong answer looks like and a scoring rubric. Every interviewer is aligned. Every candidate is evaluated consistently.',
          flow: [
            'Define the role, key competencies, and team values',
            'AI generates 15-20 tailored interview questions by category',
            'AI creates a scoring rubric with signal definitions',
            'Share the question set and rubric with all interviewers',
            'After interviews, use AI to compile and compare feedback',
          ],
          timeSaved: { without: '2-3 hours/role', withAI: '20 minutes' },
        },
        {
          id: 3,
          name: 'Onboarding Documentation',
          before:
            'Every new hire gets a slightly different onboarding experience. The checklist from last time is outdated. The welcome email is copied from whoever joined before. IT setup instructions are scattered across three Slack threads. By week two, the new hire is still asking "where do I find X?"',
          after:
            'AI builds a complete onboarding package - welcome email, day-by-day schedule, role-specific checklist, tools and access guide, key contacts, and 30-60-90 day milestones. Consistent, comprehensive, and ready before the new hire\'s first morning.',
          flow: [
            'Input the role, department, start date, and team structure',
            'AI generates a complete onboarding checklist and timeline',
            'AI drafts the welcome email and first-week schedule',
            'Review and customize for the specific hire',
            'Store in Notion or your HR system for reuse and iteration',
          ],
          timeSaved: { without: '3-4 hours/hire', withAI: '30 minutes' },
        },
        {
          id: 4,
          name: 'Policy and Handbook Drafting',
          before:
            'Updating the employee handbook is a project you have been putting off for six months. Every policy change means rewriting sections, checking for consistency, making sure the legal language is right, and reformatting the whole document. It takes days. So it never gets done.',
          after:
            'You describe the policy change or new section you need. AI drafts it in the tone and structure of your existing handbook. It flags areas that might need legal review. A full policy rewrite that used to take two days takes an afternoon.',
          flow: [
            'Describe the policy topic, scope, and any company-specific rules',
            'AI generates a structured policy draft with standard sections',
            'Review for accuracy, compliance, and company-specific nuances',
            'Flag sections that need legal counsel review',
            'Update the handbook and communicate changes to employees',
          ],
          timeSaved: { without: '4-8 hours/policy', withAI: '45 minutes' },
        },
        {
          id: 5,
          name: 'Employee Communication Templates',
          before:
            'You write every email from scratch. The promotion announcement, the benefits enrollment reminder, the org change memo, the difficult conversation follow-up. Each one takes 30-45 minutes because the tone has to be exactly right. You rewrite the opening line four times.',
          after:
            'AI drafts communications that match your company voice - professional, empathetic, clear. You review and personalize instead of starting from zero. The all-hands talking points, the change management memo, the sensitive HR communication - first drafts appear in seconds.',
          flow: [
            'Define the communication type, audience, and key message',
            'Specify the tone (celebratory, neutral, sensitive, urgent)',
            'AI generates a complete draft with appropriate structure',
            'Review, personalize, and adjust for context',
            'Save templates in your library for future reuse',
          ],
          timeSaved: { without: '30-45 min/email', withAI: '5-10 minutes' },
        },
        {
          id: 6,
          name: 'Performance Review Frameworks',
          before:
            'Review season is chaos. You need to create templates, coach managers on giving feedback, compile self-assessments, and keep the whole process on track. The templates from last year do not reflect the updated competencies. Managers write vague feedback because they do not have structure. The whole cycle drags on for weeks.',
          after:
            'AI builds review templates tied to role-specific competencies. It helps managers turn vague observations into specific, actionable feedback. It generates self-assessment prompts that employees actually find useful. The entire framework is ready before the cycle even starts.',
          flow: [
            'Define the review period, competency framework, and rating scale',
            'AI generates role-specific review templates with guided questions',
            'AI creates self-assessment prompts for employees',
            'Share templates and coaching tips with managers',
            'Use AI to summarize themes across reviews for leadership',
          ],
          timeSaved: { without: '2-3 weeks/cycle', withAI: '2-3 days' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste prompts for every core HR workflow. Click to reveal, then hit Copy. Fill in the brackets with your details.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Job Description Writing',
          prompts: [
            {
              id: 'hr-p-1-1',
              title: 'Complete Job Description',
              task: 'Generate a polished, role-specific job description',
              prompt: `Write a job description for the following role:

Role title: [title]
Department: [department]
Reports to: [manager title]
Location: [on-site / hybrid / remote]

Company context:
- Company name: [name]
- Industry: [industry]
- Size: [number of employees]
- Culture in 3 words: [e.g., collaborative, fast-paced, transparent]
- One thing that makes us different: [unique selling point as an employer]

Role details:
- Primary purpose of this role: [one sentence]
- Key responsibilities: [list 4-6 main duties]
- Must-have qualifications: [list]
- Nice-to-have qualifications: [list]
- Salary range: [range]

Write the JD with these sections:
1. A compelling opening paragraph (why this role matters, not generic boilerplate)
2. What you will do (responsibilities as bullet points)
3. What you bring (qualifications - separate must-haves from nice-to-haves)
4. What we offer (benefits and culture highlights)
5. A "This role is NOT for you if..." section (to filter wrong fits)

Tone: conversational and honest. Avoid corporate jargon. Make someone excited to apply.`,
              result:
                'A complete, compelling JD ready for posting with minimal edits.',
              tip: 'Add your company voice guidelines if you have them. The more context AI has about your culture, the better the tone matches.',
            },
            {
              id: 'hr-p-1-2',
              title: 'JD Audit and Improvement',
              task: 'Review and improve an existing job description',
              prompt: `Review this job description and improve it:

[Paste the current JD here]

Evaluate and fix:
1. Clarity: Are responsibilities specific or vague? Rewrite any that are generic.
2. Inclusivity: Flag any language that might discourage diverse candidates. Suggest alternatives.
3. Realism: Are the qualifications reasonable or is this a "unicorn" listing? Flag if the must-haves list is too long.
4. Tone: Does it sound like a real company or corporate boilerplate? Make it human.
5. Structure: Is it easy to scan? Reorganize if needed.
6. Missing sections: Add anything important that is missing (salary transparency, growth path, team context).

Give me:
- A bulleted list of issues found
- The rewritten JD with all improvements applied
- A note on any qualifications that might be screening out good candidates unnecessarily`,
              result:
                'An improved JD that attracts better candidates and filters out poor fits.',
              tip: 'Run every JD through this audit before posting. It catches bias and jargon you stop noticing after writing dozens of JDs.',
            },
            {
              id: 'hr-p-1-3',
              title: 'JD from Hiring Manager Notes',
              task: 'Turn rough hiring manager notes into a structured JD',
              prompt: `A hiring manager sent me these rough notes about a role they want to fill. Turn this into a polished job description.

Hiring manager's notes:
[Paste their email, Slack message, or bullet points here]

Additional context:
- Department: [department]
- Team size: [current team size]
- Why the role is open: [new headcount / backfill / restructure]
- Salary budget: [range if known]
- Start date target: [timeline]

Generate:
1. A complete job description following best practices
2. A list of clarifying questions I should ask the hiring manager before posting (things that were unclear or missing from their notes)
3. Suggested interview stages for this role (phone screen, technical, culture fit, etc.)

Keep the tone consistent with a [startup / mid-size / enterprise] company culture.`,
              result:
                'A structured JD from messy notes, plus smart follow-up questions for the hiring manager.',
              tip: 'Send the clarifying questions back to the hiring manager before posting. It saves revision cycles and shows you are thorough.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Interview Process Design',
          prompts: [
            {
              id: 'hr-p-2-1',
              title: 'Behavioral Interview Questions',
              task: 'Generate behavioral questions mapped to competencies',
              prompt: `Generate behavioral interview questions for this role:

Role: [title]
Department: [department]
Key competencies we are evaluating:
1. [Competency 1 - e.g., problem-solving]
2. [Competency 2 - e.g., cross-functional collaboration]
3. [Competency 3 - e.g., ownership and accountability]
4. [Competency 4 - e.g., adaptability]

For each competency, give me:
- 3 behavioral questions (using the "Tell me about a time when..." format)
- What each question is really testing for
- What a strong answer includes (specific signals to listen for)
- What a weak answer looks like (red flags)

Also include:
- 2 situational questions ("What would you do if...")
- 2 culture-fit questions aligned with our values: [list 2-3 values]

Format as an interview guide I can hand directly to interviewers.`,
              result:
                'A structured interview guide with questions, scoring signals, and red flags for every competency.',
              tip: 'Share this guide with interviewers 24 hours before the interview. Consistent questions lead to consistent, comparable evaluations.',
            },
            {
              id: 'hr-p-2-2',
              title: 'Interview Scoring Rubric',
              task: 'Create a standardized scoring rubric for interviews',
              prompt: `Create an interview scoring rubric for:

Role: [title]
Interview stage: [phone screen / technical / culture fit / final]

Competencies to evaluate:
1. [Competency 1]
2. [Competency 2]
3. [Competency 3]
4. [Competency 4]
5. [Competency 5]

For each competency, create a 1-5 scoring scale:
- 1 (Does not meet): What this looks like
- 2 (Partially meets): What this looks like
- 3 (Meets expectations): What this looks like
- 4 (Exceeds expectations): What this looks like
- 5 (Exceptional): What this looks like

Also include:
- An overall recommendation framework (Strong Yes / Yes / Neutral / No / Strong No)
- Space for specific examples and quotes from the interview
- 3 red flags that should be an automatic "no" regardless of other scores
- A notes section for gut-feel observations that do not fit the rubric

Format as a clean scorecard I can distribute to the interview panel.`,
              result:
                'A standardized scorecard that makes candidate comparison objective and defensible.',
              tip: 'Calibrate the rubric with your interview panel before the first candidate. Spend 10 minutes aligning on what a "3" vs a "5" actually looks like.',
            },
            {
              id: 'hr-p-2-3',
              title: 'Interview Debrief Template',
              task: 'Structure interview debriefs for better hiring decisions',
              prompt: `Create an interview debrief framework for our hiring process.

Context:
- Typical interview panel size: [number of interviewers]
- Interview stages: [list your stages - e.g., phone screen, technical, culture fit, hiring manager]
- How debriefs currently happen: [informal Slack chat / scheduled meeting / written feedback]
- Biggest problem with current debriefs: [e.g., anchoring bias, loudest voice wins, vague feedback]

Generate:
1. A structured debrief agenda (30 minutes max)
   - How to prevent anchoring bias (who speaks first matters)
   - Time allocation per interviewer
   - Discussion format that surfaces disagreements productively

2. A feedback form each interviewer fills out BEFORE the debrief:
   - Competency scores from the rubric
   - Top 2 strengths with specific examples
   - Top concern with specific evidence
   - Recommendation with confidence level
   - One question they wish they had asked

3. A decision framework:
   - How to handle split decisions
   - When to add another interview round vs. make a call
   - How to document the final decision and reasoning

4. A template for communicating the decision to rejected candidates (respectful, specific, and timely)

This should be something we can implement this week without any new tools.`,
              result:
                'A complete debrief system that leads to better, faster, more equitable hiring decisions.',
              tip: 'The single biggest improvement: require written feedback before the debrief meeting. It prevents groupthink and anchoring.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Onboarding Documentation',
          prompts: [
            {
              id: 'hr-p-3-1',
              title: 'Complete Onboarding Checklist',
              task: 'Build a role-specific onboarding checklist',
              prompt: `Create a comprehensive onboarding checklist for:

New hire role: [title]
Department: [department]
Start date: [date]
Manager: [name]
Work arrangement: [on-site / hybrid / remote]

Company context:
- Company size: [number of employees]
- Key tools we use: [list main tools - e.g., Slack, Google Workspace, Jira, etc.]
- Onboarding buddy system: [yes/no]

Generate a day-by-day checklist:

Pre-start (before Day 1):
- IT and access setup tasks
- Welcome materials to prepare
- Manager and team preparation tasks

Week 1 (day by day):
- Day 1: Welcome, orientation, setup
- Day 2: Team introductions, tool walkthroughs
- Day 3: Role-specific training begins
- Day 4: First small task or project
- Day 5: Week 1 check-in with manager

Week 2-4 (weekly milestones):
- Key meetings to schedule
- Training modules to complete
- People to meet (cross-functional intros)
- First deliverables expected

30-60-90 day milestones:
- What success looks like at each stage
- Check-in cadence with manager
- Feedback touchpoints

Format as a checklist with clear owners (HR, manager, IT, buddy, new hire) for each item.`,
              result:
                'A complete onboarding checklist you can reuse and customize for every new hire.',
              tip: 'Save this as a template in Notion or your HRIS. Duplicate and customize for each new hire rather than rebuilding.',
            },
            {
              id: 'hr-p-3-2',
              title: 'Welcome Email and First-Day Guide',
              task: 'Draft the welcome email and Day 1 guide for a new hire',
              prompt: `Write a welcome email and first-day guide for a new hire:

New hire name: [first name]
Role: [title]
Start date: [date]
Manager: [manager name]
Onboarding buddy: [buddy name, if applicable]
First day logistics: [office address / remote login details]

Part 1 - Welcome email (sent 3-5 days before start):
- Warm, excited tone (not corporate template)
- What to expect on Day 1 (time, where to go, who to ask for)
- What to bring or prepare
- Links to key tools and resources
- A brief "about the team" section
- Contact info for questions before Day 1

Part 2 - Day 1 schedule:
- Hour-by-hour schedule for the first day
- Include breaks and buffer time (do not over-schedule)
- Mix of admin tasks, team introductions, and something engaging
- End the day with a casual team welcome (coffee, lunch, or virtual hangout)

Part 3 - "Your First Week" quick reference:
- Key Slack channels to join
- Important recurring meetings to add to calendar
- Where to find company policies and documentation
- Who to contact for IT issues, HR questions, and role-specific help

Make the whole thing feel like the new hire is joining somewhere that has its act together and genuinely cares about their experience.`,
              result:
                'A polished welcome package that sets the tone for a great employee experience from Day 0.',
              tip: 'Personalize the welcome email with something specific - reference a hobby from the interview or a shared interest. Small touches make a big impression.',
            },
            {
              id: 'hr-p-3-3',
              title: '30-60-90 Day Plan',
              task: 'Create a structured ramp-up plan for a new hire',
              prompt: `Create a 30-60-90 day plan for:

Role: [title]
Department: [department]
Manager: [manager name]
Key priorities for this role: [list the top 3-4 things this person needs to accomplish]
Team size: [number of people on the team]
Biggest challenge they will face: [what makes this role hard in the first 90 days]

Generate a structured plan:

Days 1-30 (Learn):
- What they should understand about the company, team, and role
- Key people to meet and why
- Documents, processes, and tools to learn
- Small wins they should aim for
- Questions they should be asking
- Check-in cadence and format

Days 31-60 (Contribute):
- First meaningful projects or responsibilities
- Expected level of independence
- Skills or knowledge gaps to address
- Collaboration expectations (who they should be working with regularly)
- Milestones that indicate they are on track
- Mid-point check-in agenda for manager

Days 61-90 (Own):
- Full responsibilities they should be handling independently
- First major deliverable or project to lead
- Areas where they should be suggesting improvements
- How success is measured at the 90-day mark
- 90-day review format and criteria

Include a self-assessment template the new hire can fill out at each milestone.`,
              result:
                'A clear ramp-up plan that sets expectations and accelerates time-to-productivity.',
              tip: 'Share this plan on Day 1. Employees who know what is expected of them ramp up 40% faster than those who are figuring it out on their own.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Policy and Handbook Drafting',
          prompts: [
            {
              id: 'hr-p-4-1',
              title: 'Company Policy Draft',
              task: 'Draft a new company policy from scratch',
              prompt: `Draft a company policy for:

Policy topic: [e.g., remote work, PTO, expense reimbursement, code of conduct]
Company name: [name]
Company size: [number of employees]
Industry: [industry]
Work arrangement: [on-site / hybrid / remote / mixed]

Policy details:
- What this policy covers: [scope]
- Key rules or guidelines: [list the main points you want included]
- Who it applies to: [all employees / specific departments / contractors]
- Exceptions: [any known exceptions]
- Approval authority: [who approves requests under this policy]

Generate the policy with these sections:
1. Purpose - Why this policy exists (2-3 sentences)
2. Scope - Who it applies to
3. Policy statement - The actual rules, clearly written
4. Procedures - How to follow the policy step by step
5. Responsibilities - What employees, managers, and HR each need to do
6. Exceptions - How to request an exception
7. Compliance - Consequences of policy violations
8. Effective date and review schedule

Tone: clear and professional but not legalistic. An employee should understand this without needing an HR interpreter.

Flag any areas that should be reviewed by legal counsel before publishing.`,
              result:
                'A structured, clear policy draft ready for legal review and employee distribution.',
              tip: 'Always flag the draft for legal review before publishing, especially for policies around leave, accommodations, and termination.',
            },
            {
              id: 'hr-p-4-2',
              title: 'Employee Handbook Section',
              task: 'Write or rewrite a section of the employee handbook',
              prompt: `Write a section for our employee handbook on:

Topic: [e.g., benefits overview, workplace conduct, leave policies, diversity and inclusion]

Current version (if updating):
[Paste existing section here, or write "new section" if creating from scratch]

Company context:
- Company name: [name]
- Handbook tone: [formal / professional-casual / startup-casual]
- Any specific rules, benefits, or practices to include: [list]
- State/country: [for compliance context]

Requirements:
1. Write in plain language - avoid legal jargon where possible
2. Use headers and bullet points for easy scanning
3. Include practical examples where helpful (e.g., "For example, if you need to request PTO...")
4. Flag any statements that may need state-specific legal review
5. End with a "Questions?" section pointing to the right contact

If updating an existing section:
- Show what changed (highlight additions and removals)
- Suggest a change communication email to notify employees

Keep it concise. Employees do not read 10-page policies - make it scannable and clear.`,
              result:
                'A handbook section that employees will actually read and understand.',
              tip: 'The best handbooks use examples and scenarios. "You get 15 PTO days" is fine, but "Here is how Sarah in engineering requested her PTO last quarter" makes it stick.',
            },
            {
              id: 'hr-p-4-3',
              title: 'Policy Update Communication',
              task: 'Communicate a policy change to employees',
              prompt: `Write a company-wide communication about a policy change:

Policy being changed: [policy name]
What changed: [describe the specific changes]
Why it changed: [business reason, compliance update, employee feedback, etc.]
Who is affected: [all employees / specific groups]
Effective date: [date]
What employees need to do: [any action required]

Generate:
1. An email to all employees:
   - Subject line that is clear, not alarming
   - Brief explanation of what changed and why (under 200 words)
   - What stays the same (to reduce anxiety)
   - What is new (specific and clear)
   - Effective date and any transition period
   - FAQ section (anticipate the top 5 questions employees will ask)
   - Who to contact for questions

2. A Slack/Teams message (shorter version for company channel):
   - 3-4 sentences max
   - Link to the full policy
   - Friendly tone

3. A manager talking points document:
   - Key messages to communicate to their teams
   - Answers to likely pushback or concerns
   - What managers should NOT say (to avoid miscommunication)

Tone: transparent, respectful, and direct. Employees should feel informed, not surprised.`,
              result:
                'A multi-channel communication plan that reduces confusion and builds trust.',
              tip: 'Give managers the talking points 24 hours before the company-wide announcement. They should never be blindsided by policy changes alongside their teams.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Employee Communication Templates',
          prompts: [
            {
              id: 'hr-p-5-1',
              title: 'All-Hands Talking Points',
              task: 'Prepare talking points for a company all-hands meeting',
              prompt: `Prepare talking points for our upcoming all-hands meeting:

Meeting context:
- Company name: [name]
- Frequency: [weekly / monthly / quarterly]
- Audience: [all employees / specific group]
- Meeting length: [duration]

Topics to cover:
1. [Topic 1 - e.g., quarterly results]
2. [Topic 2 - e.g., new product launch]
3. [Topic 3 - e.g., org changes]
4. [Topic 4 - e.g., upcoming events or milestones]

Company mood right now: [positive / uncertain / recovering from something / high-energy]
Any sensitive topics to address: [layoffs, restructuring, missed targets, etc.]

Generate:
1. Opening remarks (set the tone - 2-3 sentences)
2. Talking points for each topic:
   - Key message (one sentence)
   - Supporting details (3-4 bullet points)
   - Transition to the next topic
3. Q&A preparation:
   - 5 likely questions employees will ask
   - Suggested answers for each
   - How to handle questions you cannot answer yet
4. Closing remarks (forward-looking, motivating, honest)

Keep it conversational. These are talking points, not a script to read word-for-word.`,
              result:
                'Structured talking points that make all-hands meetings focused, transparent, and useful.',
              tip: 'Always open with the topic people care most about. If there is an elephant in the room, address it in the first 3 minutes.',
            },
            {
              id: 'hr-p-5-2',
              title: 'Sensitive HR Communication',
              task: 'Draft a communication for a sensitive HR situation',
              prompt: `Draft a communication for the following sensitive situation:

Situation: [e.g., employee departure, team restructuring, performance-related conversation follow-up, workplace incident response, benefits reduction]

Context:
- Who is the audience: [individual / team / all-company]
- What happened: [brief, factual summary]
- What the company is doing about it: [actions being taken]
- What employees need to know: [key information]
- What employees should do: [any required action]
- Legal considerations: [anything flagged by legal, if applicable]

Generate the communication with:
1. A clear, calm opening (acknowledge the situation directly)
2. The facts - what is happening and why (no corporate doublespeak)
3. What this means for the audience (be specific)
4. What the company is doing (show action, not just words)
5. What employees can expect next (timeline and follow-up)
6. Resources available (EAP, HR office hours, manager conversations)
7. Closing that is empathetic and forward-looking

Tone guidelines:
- Empathetic but not dramatic
- Direct but not cold
- Honest about what you can share and transparent about what you cannot
- Never dismissive of employee concerns

Also flag any phrases or commitments I should run by legal before sending.`,
              result:
                'A thoughtful, well-structured communication that handles sensitivity with professionalism.',
              tip: 'Read it out loud before sending. If any sentence sounds like something a lawyer wrote instead of a human, rewrite it.',
            },
            {
              id: 'hr-p-5-3',
              title: 'Employee Milestone Communications',
              task: 'Create templates for employee milestones and celebrations',
              prompt: `Create communication templates for employee milestones:

Company name: [name]
Company tone: [formal / professional-casual / casual]
Channels used: [email / Slack / company intranet / all-hands shoutout]

Generate templates for each milestone:

1. Work anniversary (1 year, 3 years, 5 years, 10+ years):
   - A personalized message template (with blanks for specific contributions)
   - A Slack/Teams announcement for the team channel
   - Suggested celebration ideas for each tenure milestone

2. Promotion announcement:
   - Internal email to the team/department
   - Company-wide announcement (for senior roles)
   - What to include and what NOT to include (salary, previous performance issues, etc.)

3. New team member welcome:
   - Team channel announcement template
   - Fun facts format for the new hire to fill out
   - First-week introduction schedule

4. Departing employee farewell:
   - Tasteful departure announcement (for voluntary departures)
   - Team transition communication (who takes over what)
   - What to say vs. what not to say for different departure types

Each template should feel genuine, not like a form letter. Leave room for personalization.`,
              result:
                'A library of milestone templates that make employees feel recognized and valued.',
              tip: 'The best recognition is specific. "Great job this year" means nothing. "Your work on the Q3 benefits redesign saved us $40K and made enrollment 10x easier" - that lands.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Performance Review Frameworks',
          prompts: [
            {
              id: 'hr-p-6-1',
              title: 'Performance Review Template',
              task: 'Build a role-specific performance review template',
              prompt: `Create a performance review template for:

Role: [title]
Department: [department]
Review period: [dates]
Review type: [annual / semi-annual / quarterly]
Company values: [list 3-5 values]

Competencies to evaluate:
1. [Competency 1 - e.g., technical skills]
2. [Competency 2 - e.g., communication]
3. [Competency 3 - e.g., leadership/initiative]
4. [Competency 4 - e.g., collaboration]
5. [Competency 5 - e.g., goal achievement]

Generate the review template with:

Section 1 - Goal review:
- Format for listing goals set at the start of the period
- Achievement status (exceeded / met / partially met / not met)
- Space for evidence and specific examples

Section 2 - Competency assessment:
- For each competency: description, 1-5 rating scale with behavioral anchors
- Space for specific examples (require at least one per competency)
- Both manager assessment and self-assessment columns

Section 3 - Values alignment:
- How the employee demonstrated each company value
- Specific examples required

Section 4 - Development:
- Strengths to leverage
- Areas for growth (framed constructively)
- Development goals for next period
- Resources or support needed

Section 5 - Overall:
- Summary rating with clear criteria for each level
- Key accomplishments (top 3)
- Forward-looking priorities
- Employee comments section

Make the template guide managers toward specific, evidence-based feedback rather than vague generalizations.`,
              result:
                'A comprehensive review template that produces consistent, actionable feedback across the organization.',
              tip: 'Require managers to include at least one specific example per competency. "Good communicator" is useless feedback. "Led three cross-functional syncs that resolved the Q2 integration blockers" is actionable.',
            },
            {
              id: 'hr-p-6-2',
              title: 'Self-Assessment Prompts',
              task: 'Create guided self-assessment questions for employees',
              prompt: `Create self-assessment questions for our performance review cycle:

Review period: [dates]
Company values: [list values]
Target audience: [all employees / specific level - e.g., individual contributors / managers]

Generate self-assessment prompts organized by section:

Accomplishments:
- 5 questions that help employees articulate their wins with specific impact
- Prompt them to quantify results where possible
- Include a question about contributions others might not have seen

Challenges and growth:
- 3 questions about obstacles they faced and how they handled them
- 2 questions about skills they developed during this period
- A question about their biggest learning moment

Collaboration and values:
- 3 questions about how they lived the company values
- 2 questions about how they supported teammates
- A question about feedback they received and acted on

Looking forward:
- 3 questions about goals for the next period
- 2 questions about development areas they want to work on
- A question about what support they need from their manager

Instructions to include at the top:
- How long this should take (target: 45-60 minutes)
- Tips for writing strong self-assessments
- Common mistakes to avoid (being too modest, being too vague, forgetting contributions)

Make the questions specific enough to generate thoughtful answers, not generic enough to get one-line responses.`,
              result:
                'Self-assessment prompts that help employees advocate for themselves and give managers useful context.',
              tip: 'Share these questions 2 weeks before the self-assessment deadline. Employees write significantly better reviews when they have time to reflect.',
            },
            {
              id: 'hr-p-6-3',
              title: 'Manager Feedback Coaching Guide',
              task: 'Help managers write better performance feedback',
              prompt: `Create a coaching guide to help managers write better performance reviews.

Context:
- Number of managers: [approximate]
- Biggest issue with current reviews: [e.g., vague feedback, all ratings clustered at "meets expectations," feedback focuses only on recent events, uncomfortable giving constructive feedback]
- Review tool: [the system or format you use]

Generate a coaching guide that includes:

1. The "before you write" checklist:
   - How to prepare (gather data, review notes, check goals)
   - How to avoid recency bias (techniques for remembering the full review period)
   - How to calibrate ratings honestly

2. A feedback formula:
   - How to write strength-based feedback (Situation - Behavior - Impact format)
   - How to write constructive feedback without being harsh or vague
   - 5 examples of vague feedback rewritten as specific, actionable feedback
   - How to balance positive and constructive feedback

3. Common mistakes and how to avoid them:
   - The "halo effect" (one thing colors everything)
   - The "recency effect" (only remembering the last month)
   - Rating inflation (everyone gets a 4 out of 5)
   - The "feedback sandwich" problem (why it does not work)

4. Templates for difficult feedback:
   - Underperformance
   - Attitude or behavior issues
   - Great technical work but poor collaboration
   - Strong performer who is not growing

5. A "final check" before submitting:
   - Would you be comfortable if the employee shared this review with their next manager?
   - Does every rating have at least one specific example?
   - Is the development plan actionable, not just "keep improving"?

Keep it practical. Managers will not read a 20-page guide. Make it scannable and useful.`,
              result:
                'A coaching resource that immediately improves the quality of feedback across the organization.',
              tip: 'Run a 30-minute calibration session with managers before reviews are due. Walk through examples of strong vs. weak feedback using this guide.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves an HR professional in a typical month.',
      timeTable: [
        {
          task: 'Job description writing',
          without: '1-2 hours/JD',
          withAI: '15 minutes',
          saved: '1-1.5 hrs per JD',
        },
        {
          task: 'Interview prep and question design',
          without: '2-3 hours/role',
          withAI: '20 minutes',
          saved: '2 hrs per role',
        },
        {
          task: 'Onboarding documentation',
          without: '3-4 hours/hire',
          withAI: '30 minutes',
          saved: '3 hrs per hire',
        },
        {
          task: 'Policy drafting and updates',
          without: '4-8 hours/policy',
          withAI: '45 minutes',
          saved: '5 hrs per policy',
        },
        {
          task: 'Employee communications',
          without: '30-45 min/email',
          withAI: '5-10 minutes',
          saved: '25 min per email',
        },
        {
          task: 'Performance review cycle',
          without: '2-3 weeks',
          withAI: '2-3 days',
          saved: '7-12 days per cycle',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '20-30 hrs/month',
      },
      sections: [
        {
          heading: 'The HR Professional\'s Edge',
          paragraphs: [
            'In 2026, the HR team using AI processes job descriptions in 15 minutes, builds onboarding packets before the offer letter is signed, and runs performance review cycles in days instead of weeks. The team without AI is still copying last year\'s JD template and rebuilding onboarding checklists from scratch.',
            'Same expertise. Same care for people. Radically different output and speed.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not get into HR to spend your days formatting documents and rewriting policies. You got into HR to build great teams and create workplaces where people thrive. AI gives you back the time to actually do that - to have the conversations, design the programs, and think strategically about your people.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Job description writing is the fastest win - you will feel the difference after your first AI-assisted JD.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI is woven into your HR workflow. Follow along and check each step off.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'hr-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'hr-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'hr-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Write Your First JD',
          duration: '15 min',
          items: [
            {
              id: 'hr-2-1',
              label: 'Pick a role you need to hire for (or one you recently posted)',
            },
            {
              id: 'hr-2-2',
              label: 'Run the Complete Job Description prompt with real details',
            },
            {
              id: 'hr-2-3',
              label: 'Compare the output to what you would have written manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Build an Interview Guide',
          duration: '20 min',
          items: [
            {
              id: 'hr-3-1',
              label: 'Run the Behavioral Interview Questions prompt for an open role',
            },
            {
              id: 'hr-3-2',
              label: 'Create a scoring rubric with the Interview Scoring Rubric prompt',
            },
            {
              id: 'hr-3-3',
              label: 'Share the guide with your next interviewer panel',
            },
          ],
        },
        {
          day: 4,
          title: 'Create an Onboarding Package',
          duration: '20 min',
          items: [
            {
              id: 'hr-4-1',
              label: 'Run the Complete Onboarding Checklist for your next new hire',
            },
            {
              id: 'hr-4-2',
              label: 'Draft the welcome email using the Welcome Email prompt',
            },
            {
              id: 'hr-4-3',
              label: 'Save both as templates for future hires',
            },
          ],
        },
        {
          day: 5,
          title: 'Draft a Policy',
          duration: '20 min',
          items: [
            {
              id: 'hr-5-1',
              label: 'Pick a policy that needs updating or creating',
            },
            {
              id: 'hr-5-2',
              label: 'Run the Company Policy Draft prompt with your details',
            },
            {
              id: 'hr-5-3',
              label: 'Review the output and flag sections for legal review',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore Communications',
          duration: '15 min',
          items: [
            {
              id: 'hr-6-1',
              label: 'Try the All-Hands Talking Points prompt for your next meeting',
            },
            {
              id: 'hr-6-2',
              label: 'Build milestone templates for your team recognition program',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'hr-7-1',
              label: 'Which system saved you the most time this week?',
            },
            {
              id: 'hr-7-2',
              label: 'Start the Performance Review Template for your next review cycle',
            },
            {
              id: 'hr-7-3',
              label: 'Share this guide with a fellow HR professional',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
