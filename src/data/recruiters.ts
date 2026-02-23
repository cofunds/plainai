import type { WorkbookData } from './types'

export const recruitersData = {
  professionId: 'recruiters',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Recruiters',
  heroDescription:
    'Source better candidates, write outreach that gets replies, and manage your pipeline with less busywork. Real tools, proven workflows, and copy-paste prompts built for recruiters.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 9 AM and you have 6 roles open. The engineering manager wants an update on the senior backend search - you have been sourcing for three weeks and only two candidates made it past the phone screen. The VP of Sales pinged you last night asking why the SDR pipeline is empty. There is a req from the product team that dropped yesterday and you have not even looked at it yet.',
        'Your inbox has 40 unread messages. Half are candidate replies - most saying "not interested right now." Three are from hiring managers asking for status updates. You have 12 InMails drafted but unsent because you have not had time to personalize them beyond swapping the name and company. Your ATS has 200 applicants for a role that closed last week - none of them were screened because you were busy filling the other five positions.',
        'You became a recruiter because you love connecting people with opportunities. You are good at reading talent, building relationships, and selling a vision. But 70% of your day is spent on sourcing research, writing outreach, updating spreadsheets, and generating reports that no one reads. The actual recruiting - the conversations, the relationship building, the closing - gets squeezed into whatever time is left.',
      ],
      highlight:
        'What if AI handled the research, the writing, and the reporting - so you could spend your entire day doing what fills roles: talking to great candidates?',
      closingParagraph:
        'Not a bot blasting generic InMails. Not an algorithm making hiring decisions. Just a system that does the 4-hour sourcing sprint in 20 minutes and writes the first draft of everything - so you can focus on the human side of recruiting.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace recruiters. It cannot read body language on a video call, sense when a candidate is genuinely excited versus politely interested, or know when to push on compensation versus when to back off. The relationship skills, intuition, and judgment that make great recruiters - AI does not have any of that.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most productive sourcing coordinator you have ever worked with. This coordinator builds boolean search strings in seconds, writes personalized outreach at scale, creates screening rubrics from job descriptions, and generates pipeline reports on demand. It never gets tired. It never forgets to follow up.',
            'Need to source 50 candidates for a niche role? AI builds the search strings and identifies target companies in 5 minutes. Need personalized InMails for each? Done in the time it takes to write one manually. Need a screening rubric that hiring managers actually agree with? First draft in 90 seconds.',
            'AI handles the prep work and the paperwork. You handle the conversations that fill roles.',
          ],
        },
      ],
      keyInsight:
        'Your recruiting instinct + AI\'s speed = more candidates in the pipeline, better outreach, faster time-to-fill. The recruiter who shows up with personalized research wins over the one sending copy-paste templates.',
    },

    ch3: {
      intro: 'Five tools that cover everything a recruiter needs from AI right now.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your outreach and content engine',
          description:
            'InMail drafts, job posts, screening criteria, candidate summaries, offer letters - any text-based recruiting task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your detailed analysis partner',
          description:
            'Screening rubrics, complex job descriptions, candidate comparison matrices, offer negotiation scripts - excels at longer, structured content',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed work',
          icon: 'claude',
        },
        {
          name: 'LinkedIn Recruiter',
          role: 'Your sourcing platform',
          description:
            'Candidate search, InMail outreach, pipeline tracking, talent pool building - the primary sourcing channel for most recruiters',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential for sourcing',
          icon: 'linkedin',
        },
        {
          name: 'Perplexity',
          role: 'Your market research assistant',
          description:
            'Salary benchmarking, company research, industry hiring trends, competitor talent mapping - all with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your recruiting operations hub',
          description:
            'Pipeline trackers, interview guides, candidate notes, process documentation, hiring playbooks - everything organized in one place',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing everything. Add Perplexity when you need market data with sources. LinkedIn Recruiter and Notion round out the stack when you are ready to scale.',
    },

    ch4: {
      intro:
        'Here is where AI fits into your actual recruiting day. Click each system to see the workflow.',
      systems: [
        {
          id: 1,
          name: 'Candidate Sourcing Research',
          before:
            'You spend 2-3 hours building boolean search strings by trial and error. You manually browse LinkedIn profiles, company websites, and GitHub repos trying to find candidates who match. Your search strings miss good people because the boolean logic is imperfect. By the end, you have 30 profiles that still need individual review.',
          after:
            'AI builds optimized boolean search strings for any role in 30 seconds. It identifies target companies, suggests alternative job titles, and helps you find candidates in non-obvious talent pools. Your sourcing coverage doubles while your search time drops by 80%.',
          flow: [
            'Share the role requirements and ideal candidate profile with AI',
            'AI generates multiple boolean search strings for different angles',
            'AI suggests target companies and alternative job titles to search',
            'Run the searches on LinkedIn and other platforms',
            'AI helps review and prioritize the results',
          ],
          timeSaved: { without: '2-3 hours/role', withAI: '20-30 minutes' },
        },
        {
          id: 2,
          name: 'Outreach Message Personalization',
          before:
            'You have one InMail template. You swap the name and company. Maybe you add a line about their current role. It takes 5-10 minutes per message if you actually personalize it. Most days you send the same template to everyone. Response rates: 10-15% on a good day.',
          after:
            'AI takes each candidate\'s background and generates genuinely personalized outreach - referencing their specific experience, recent projects, or career trajectory. Each message sounds like you spent 10 minutes researching them. You actually spent 60 seconds reviewing the draft. Response rates climb to 25-40%.',
          flow: [
            'Paste the candidate\'s LinkedIn profile or resume summary',
            'Define the role, key selling points, and company pitch',
            'AI generates a personalized InMail with specific hooks',
            'Review and add your personal touch',
            'AI generates 2-3 follow-up messages in the sequence',
          ],
          timeSaved: { without: '5-10 min/message', withAI: '1-2 min/message' },
        },
        {
          id: 3,
          name: 'Screening Criteria Development',
          before:
            'The hiring manager says "find someone great." You push for specifics. They give you a vague list. You screen candidates based on gut feel and pattern matching. Different recruiters on the same role screen differently. Hiring managers reject candidates you thought were strong fits because the criteria were never aligned.',
          after:
            'AI turns the job description and hiring manager input into a structured screening rubric with must-haves, nice-to-haves, and clear scoring criteria. You and the hiring manager align before a single resume is reviewed. Screening becomes consistent, fast, and defensible.',
          flow: [
            'Input the job description and hiring manager\'s requirements',
            'AI generates a screening rubric with weighted criteria',
            'Review with the hiring manager and calibrate together',
            'Use the rubric to score incoming candidates consistently',
            'AI helps summarize top candidates with rubric scores',
          ],
          timeSaved: { without: '1-2 hours/role', withAI: '15 minutes' },
        },
        {
          id: 4,
          name: 'Job Posting Optimization',
          before:
            'You write the job post once and copy it to every board. The language is generic. You have no idea which version performs better. Two weeks later, you have 200 applicants but only 5% are qualified because the post attracted the wrong people.',
          after:
            'AI generates multiple versions of the same job post optimized for different audiences and platforms. It writes compelling hooks, removes exclusionary language, and highlights what candidates actually care about. You A/B test and double the qualified applicant rate.',
          flow: [
            'Share the job description and target candidate profile',
            'AI generates 3 versions: conversational, professional, and concise',
            'AI audits for inclusivity and removes bias-triggering language',
            'Post different versions on different platforms to A/B test',
            'After 1 week, compare performance and double down on what works',
          ],
          timeSaved: { without: '1-2 hours/posting', withAI: '15-20 minutes' },
        },
        {
          id: 5,
          name: 'Offer Letter and Negotiation',
          before:
            'You pull up the last offer letter template and start filling in blanks. The compensation section needs updating. The benefits language is from last year. When the candidate negotiates, you go back and forth between the hiring manager and the candidate, rewriting the same email three times.',
          after:
            'AI drafts offer letters with current compensation details, personalized language, and a clear structure. When negotiation happens, AI generates response options for different scenarios - counter-offer, competing offer, timeline extension - so you respond quickly and confidently.',
          flow: [
            'Input candidate details, compensation package, and role information',
            'AI generates a complete offer letter with all sections',
            'If the candidate negotiates, describe the scenario',
            'AI generates response options with different concession strategies',
            'Finalize the offer and AI generates the acceptance follow-up',
          ],
          timeSaved: { without: '1-2 hours/offer', withAI: '15-20 minutes' },
        },
        {
          id: 6,
          name: 'Pipeline Reporting',
          before:
            'Every Monday, the hiring manager wants a pipeline update. You spend an hour pulling data from your ATS, formatting it into a readable summary, adding commentary on each candidate, and guessing at timeline projections. By the time you send it, the data is already a day old.',
          after:
            'AI takes your raw pipeline data and generates a clear, structured report - candidate status, stage breakdown, bottleneck analysis, and projected timeline. What used to take an hour takes 10 minutes, and the output is actually more useful.',
          flow: [
            'Export or describe your current pipeline data',
            'AI generates a formatted report with key metrics',
            'Review candidate status summaries and timeline projections',
            'AI flags bottlenecks and suggests actions for stalled candidates',
            'Share with hiring managers with your commentary added',
          ],
          timeSaved: { without: '1-2 hours/week', withAI: '10-15 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste prompts for every core recruiting workflow. Click to reveal, then hit Copy. Fill in the brackets with your details.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Candidate Sourcing Research',
          prompts: [
            {
              id: 'rc-p-1-1',
              title: 'Boolean Search String Builder',
              task: 'Generate optimized boolean search strings for any role',
              prompt: `Build boolean search strings for sourcing candidates:

Role: [title]
Industry: [industry]
Location: [location or "remote"]
Seniority: [junior / mid / senior / lead / director]

Must-have skills: [list]
Nice-to-have skills: [list]
Years of experience: [range]
Target companies (examples of where ideal candidates work now): [list 3-5]

Generate:
1. A primary boolean search string for LinkedIn Recruiter
2. An alternative string using different job titles and synonyms
3. A "hidden talent pool" string that finds candidates with transferable skills from adjacent industries
4. A string optimized for GitHub/Stack Overflow (if technical role)
5. A list of 10 alternative job titles this person might use on their profile
6. 15 target companies to search based on the profile

For each string:
- Explain the logic behind the operators used
- Note what to adjust if results are too broad or too narrow

Keep the strings practical - these need to work in LinkedIn Recruiter\'s search bar.`,
              result:
                'Multiple search angles that find candidates your competitors are missing.',
              tip: 'Run all three LinkedIn strings separately and compare results. The "hidden talent pool" string often surfaces the best candidates because fewer recruiters are searching for them.',
            },
            {
              id: 'rc-p-1-2',
              title: 'Talent Market Map',
              task: 'Map the talent landscape for a hard-to-fill role',
              prompt: `Create a talent market map for this role:

Role: [title]
Location: [location or "remote - specify timezone/region"]
Industry: [primary industry]
Key skills required: [list]
Compensation range: [range]

Generate a market analysis:

1. Talent supply overview:
   - Estimated number of qualified candidates in this market
   - Where they currently work (top companies and industries)
   - What titles they typically hold
   - Their likely compensation expectations based on market data

2. Competitor analysis:
   - Which companies are hiring for similar roles right now?
   - What are they offering (compensation, perks, remote policy)?
   - How does our role compare?

3. Sourcing strategy:
   - Top 3 channels to find this talent (beyond LinkedIn)
   - Communities, conferences, or meetups where they gather
   - Adjacent roles that could be a fit with slight upskilling
   - Diversity sourcing strategies for this specific talent pool

4. Challenges and recommendations:
   - Why this role is hard to fill (be honest)
   - 3 changes that would make the role more attractive to candidates
   - Realistic timeline to fill based on market conditions

This should be something I can share with the hiring manager to set expectations and align on strategy.`,
              result:
                'A market intelligence brief that helps you and the hiring manager hire smarter.',
              tip: 'Run this in Perplexity for data-backed insights with sources. Share it with the hiring manager before sourcing begins - it prevents the "why is this taking so long?" conversation.',
            },
            {
              id: 'rc-p-1-3',
              title: 'Candidate Profile Analyzer',
              task: 'Quickly assess a candidate profile against role requirements',
              prompt: `Analyze this candidate profile against our role requirements:

Role we are hiring for: [title]
Must-have requirements:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]
4. [Requirement 4]

Nice-to-have requirements:
1. [Nice-to-have 1]
2. [Nice-to-have 2]

Candidate profile:
[Paste LinkedIn summary, resume text, or profile notes]

Give me:
1. Match score: X/10 with breakdown by requirement
2. Strengths: Top 3 reasons this candidate could be a fit
3. Gaps: What is missing or unclear from their profile
4. Risk factors: Anything that could be a concern (job hopping, career shift, overqualified, etc.)
5. Outreach angle: If we reach out, what is the best hook based on their background?
6. Interview focus areas: What to dig into if they move forward
7. Verdict: Reach out / Maybe / Pass - with reasoning

Be direct. I need to make fast sourcing decisions across 50+ profiles.`,
              result:
                'A quick assessment that helps you prioritize who to contact first.',
              tip: 'Batch process 5-10 profiles at a time by pasting them all in. Speed up your sourcing review from 30 minutes to 5.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Outreach Message Personalization',
          prompts: [
            {
              id: 'rc-p-2-1',
              title: 'Personalized InMail Template',
              task: 'Write personalized recruiting InMails that get replies',
              prompt: `Write a personalized recruiting InMail for this candidate:

Candidate: [name]
Current title: [title] at [company]
Background highlights: [2-3 notable things from their profile - projects, companies, skills, achievements]
Years of experience: [approximate]

Role I am recruiting for:
- Title: [title]
- Company: [company name]
- Key selling points: [what makes this role/company compelling - growth, mission, tech, leadership, comp]
- Location: [location or remote]

Generate 3 InMail versions:

Version A - Career growth angle:
- Hook: Reference something specific in their career trajectory
- Body: Connect their experience to the opportunity
- CTA: Low-friction ask (15-min chat, not a full interview)

Version B - Project/skill angle:
- Hook: Reference a specific skill, project, or achievement
- Body: Show how this role builds on what they have already done
- CTA: Curiosity-driven (share more details)

Version C - Mutual connection/culture angle:
- Hook: Reference company culture, mission, or team
- Body: Why someone with their background would thrive here
- CTA: Conversational (would love your perspective)

Requirements for all versions:
- Subject line under 6 words (curiosity-driven)
- Under 150 words total (people skim InMails on mobile)
- No generic phrases ("exciting opportunity," "perfect fit," "I came across your profile")
- Sound like a human, not a recruiting template`,
              result:
                'Three InMail versions tailored to the candidate, ready to send.',
              tip: 'Version C typically gets the highest response rate. Leading with culture and mission performs better than leading with the role spec.',
            },
            {
              id: 'rc-p-2-2',
              title: 'Follow-up Sequence for Passive Candidates',
              task: 'Build a multi-touch follow-up sequence for unresponsive candidates',
              prompt: `Build a follow-up sequence for a passive candidate who has not responded:

Candidate: [name], [title] at [company]
Initial outreach: [what you sent and when]
Role: [title at your company]
Why this candidate is worth pursuing: [what makes them a top target]

Generate a 4-message follow-up sequence:

Message 1 (Day 5 after initial):
- Different angle than the first message
- Add new value (company news, team update, relevant industry insight)
- Keep it under 75 words
- No "just following up" or "bumping this"

Message 2 (Day 10):
- Share something genuinely useful (article, insight, salary data for their market)
- Briefly reconnect to the opportunity
- Ask a question that invites a response even if they are not interested in the role

Message 3 (Day 17):
- Reference a specific reason the timing might be right (market shift, their company news, quarter change)
- Include social proof - who else from their world has joined your company
- Shorter than the previous messages

Message 4 (Day 25 - final touch):
- Acknowledge you have been persistent
- Give a graceful out ("if the timing is not right, no hard feelings")
- Leave the door open for the future
- Under 50 words

Each message should stand alone - do not reference "my last email."`,
              result:
                'A complete follow-up sequence that stays professional and adds value at every touch.',
              tip: 'The best follow-ups share something useful even if the candidate never responds. It builds your reputation as a recruiter worth replying to.',
            },
            {
              id: 'rc-p-2-3',
              title: 'Outreach A/B Testing Kit',
              task: 'Generate outreach variants to test what resonates',
              prompt: `Generate outreach message variants for A/B testing:

Role: [title]
Company: [your company name]
Target candidate profile: [seniority, industry, current role type]
Top 3 selling points of this role:
1. [Selling point 1]
2. [Selling point 2]
3. [Selling point 3]

Generate 6 InMail variants testing different angles:

Variant 1 - Lead with compensation/equity
Variant 2 - Lead with the technical challenge or problem to solve
Variant 3 - Lead with the team/manager they would work with
Variant 4 - Lead with company mission and impact
Variant 5 - Lead with career growth and title progression
Variant 6 - Lead with a provocative question about their current work

For each variant:
- Subject line
- Opening hook (first 2 sentences)
- Body (under 100 words)
- CTA

Also give me:
- A tracking plan: how to measure which variant performs best
- Suggested sample size per variant before drawing conclusions
- How to iterate based on results (which metrics matter most: open rate, reply rate, or positive reply rate)

Keep all messages under 150 words. Mobile-friendly formatting.`,
              result:
                'A testing framework that systematically improves your outreach performance.',
              tip: 'Test one variable at a time. Changing both the subject line and the body makes it impossible to know what caused the difference in performance.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Screening Criteria Development',
          prompts: [
            {
              id: 'rc-p-3-1',
              title: 'Screening Rubric Generator',
              task: 'Build a structured screening rubric from a job description',
              prompt: `Create a screening rubric from this job description:

[Paste the full job description here]

Hiring manager's top priorities (in order):
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

Team context: [team size, what they are working on, why the role is open]
Dealbreakers: [anything that is an automatic no]

Generate:
1. A weighted screening rubric:
   - Must-have criteria (weighted heavily - these are pass/fail)
   - Strong-to-have criteria (weighted moderately)
   - Nice-to-have criteria (bonus points)
   - For each criterion: what to look for on the resume, what a "strong" vs "weak" signal looks like

2. A resume red flag checklist:
   - Patterns that warrant closer inspection (not automatic rejection)
   - Context for each flag (why it matters for this specific role)

3. Phone screen questions (15-minute format):
   - 5 essential questions that validate the must-have criteria
   - What a strong answer sounds like for each
   - What should move someone to the next round vs. stop here

4. A candidate summary template:
   - Format for presenting screened candidates to the hiring manager
   - Include: match score, strengths, concerns, and recommendation

This should be something I can hand to a junior recruiter and get consistent results.`,
              result:
                'A complete screening system that produces consistent, defensible candidate evaluations.',
              tip: 'Review this rubric with the hiring manager before screening begins. 10 minutes of alignment saves hours of re-screening rejected candidates.',
            },
            {
              id: 'rc-p-3-2',
              title: 'Technical Screening Guide',
              task: 'Create screening criteria for a technical or specialized role',
              prompt: `Build a technical screening guide for:

Role: [title - e.g., Senior Backend Engineer, Data Scientist, DevOps Lead]
Tech stack: [list specific technologies]
Team: [what the team builds and how they work]
Seniority expectations: [what level of depth and autonomy is expected]

I am not a technical expert in this field. Help me screen effectively.

Generate:
1. Key technical skills to evaluate (in plain language):
   - What each skill means in practice
   - How to identify it on a resume (keywords, project types, certifications)
   - Questions I can ask on a phone screen without being technical myself

2. Experience signals:
   - What good experience looks like for this role (not just years - types of work)
   - Companies or environments that produce strong candidates for this role
   - Portfolio, GitHub, or project signals that indicate quality

3. Phone screen script (20 minutes):
   - 3 questions about their technical experience (phrased for a non-technical screener)
   - 2 questions about how they work (collaboration, communication, problem-solving)
   - 1 question about what they are looking for (to assess fit and interest level)
   - What answers should excite me vs. concern me

4. Handoff template for the technical interview:
   - What to share with the technical interviewer about the candidate
   - Suggested areas for the technical round to focus on

Make this recruiter-friendly. I need to sound credible without pretending to be an engineer.`,
              result:
                'A screening guide that helps you evaluate technical talent confidently.',
              tip: 'Ask the hiring manager to spend 15 minutes walking you through the tech stack in plain language. Your screening gets 3x better when you understand the basics.',
            },
            {
              id: 'rc-p-3-3',
              title: 'Candidate Comparison Matrix',
              task: 'Compare shortlisted candidates side by side',
              prompt: `Create a candidate comparison matrix for the hiring manager:

Role: [title]
Key criteria (in priority order):
1. [Criterion 1 - e.g., technical depth in Python]
2. [Criterion 2 - e.g., leadership experience]
3. [Criterion 3 - e.g., startup environment fit]
4. [Criterion 4 - e.g., communication skills]
5. [Criterion 5 - e.g., relevant domain experience]

Candidates:
Candidate A: [Name] - [Current title at company] - [Key highlights from screening]
Candidate B: [Name] - [Current title at company] - [Key highlights from screening]
Candidate C: [Name] - [Current title at company] - [Key highlights from screening]

For each candidate, generate:
1. Score on each criterion (1-5) with a one-line justification
2. Top strength for this specific role
3. Biggest risk or gap
4. Compensation expectations vs. our budget
5. Likelihood of accepting an offer (based on their situation)
6. Recommended interview focus areas

Summary:
- Ranking with reasoning
- Which candidate is the "safe" choice vs. the "high upside" choice
- Any concerns that apply to all candidates (indicating a sourcing issue)

Format as a clean comparison table the hiring manager can review in 5 minutes.`,
              result:
                'A structured comparison that helps hiring managers make faster, better-informed decisions.',
              tip: 'Present the comparison in the hiring manager meeting rather than sending it by email. Walking through the trade-offs together leads to faster decisions.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Job Posting Optimization',
          prompts: [
            {
              id: 'rc-p-4-1',
              title: 'Job Post A/B Variants',
              task: 'Generate multiple job post versions for A/B testing',
              prompt: `Generate 3 job post variants for A/B testing:

Role: [title]
Department: [department]
Location: [on-site / hybrid / remote]
Salary range: [range]

Company context:
- Company name: [name]
- Industry: [industry]
- Team size: [number]
- What makes this company a great place to work: [2-3 selling points]

Role details:
- Primary purpose: [one sentence]
- Key responsibilities: [list 4-6]
- Must-haves: [list]
- Nice-to-haves: [list]

Generate 3 versions:

Version A - "The Story" (narrative-driven):
- Opens with a compelling paragraph about the role's impact
- Reads like a blog post about why this job matters
- Best for: LinkedIn, company career page

Version B - "The Scannable" (structured and concise):
- Bullet-point heavy, easy to skim in 30 seconds
- Leads with compensation and top benefits
- Best for: Job boards (Indeed, Glassdoor)

Version C - "The Challenge" (problem-focused):
- Opens with the hard problem this person will solve
- Appeals to candidates motivated by impact and challenge
- Best for: Niche communities, Slack groups, referrals

For all versions:
- Audit for inclusive language (flag and fix any exclusionary phrases)
- Include a "This role is NOT for you if..." section
- End with a clear, simple application process
- Keep each version under 600 words`,
              result:
                'Three tested job post formats that attract different types of qualified candidates.',
              tip: 'Post Version A on LinkedIn, Version B on Indeed, and Version C in relevant Slack communities. Track which source produces the most qualified applicants, not just the most applicants.',
            },
            {
              id: 'rc-p-4-2',
              title: 'Job Post Inclusivity Audit',
              task: 'Audit a job post for bias and exclusionary language',
              prompt: `Audit this job posting for bias and inclusivity:

[Paste the full job posting here]

Analyze and report:

1. Gendered language:
   - Flag any words or phrases that research shows discourage certain demographics
   - Suggest neutral alternatives for each

2. Unnecessary requirements:
   - Which qualifications might be screening out capable candidates unnecessarily?
   - Which "must-haves" could be "nice-to-haves"?
   - Is the years-of-experience requirement realistic or inflated?

3. Cultural bias:
   - Language that assumes a specific background (e.g., "top-tier university")
   - Phrases that may not translate across cultures
   - Assumptions about availability or lifestyle

4. Accessibility:
   - Is the posting readable at a high school reading level?
   - Is the structure clear for screen readers?
   - Are there accommodations mentioned for the application process?

5. Candidate experience:
   - Is the application process clear?
   - Is compensation transparent?
   - Does the posting give enough information for a candidate to self-select in or out?

Give me:
- A flagged version with issues highlighted
- A rewritten version with all issues fixed
- A summary of the 5 most impactful changes and why they matter`,
              result:
                'A bias-free job posting that attracts a wider, more diverse candidate pool.',
              tip: 'Run every job post through this audit before publishing. Small language changes can increase female applicants by 30-40% according to research.',
            },
            {
              id: 'rc-p-4-3',
              title: 'Employer Brand Copy',
              task: 'Write compelling employer brand content for job posts',
              prompt: `Write employer brand copy for our job postings:

Company: [name]
Industry: [industry]
Size: [employees]
Stage: [startup / growth / enterprise]
Location policy: [on-site / hybrid / remote]

What makes us different as an employer:
1. [Differentiator 1 - e.g., 4-day work week]
2. [Differentiator 2 - e.g., transparent salaries]
3. [Differentiator 3 - e.g., meaningful mission]
Employee demographics: [anything notable about team culture or diversity]
Notable perks: [list benefits and perks]

Generate:
1. "About Us" section for job postings (150 words max):
   - Compelling but honest
   - Sounds like a real person, not a PR team
   - Highlights what employees actually love, not corporate buzzwords

2. "Why join us" section (100 words max):
   - 5 bullet points that make candidates stop scrolling
   - Specific and concrete, not vague ("unlimited PTO" vs. "average team member takes 25 days off/year")

3. "Our team" section (100 words max):
   - What the day-to-day culture actually feels like
   - Who thrives here and who does not

4. Culture snippet for LinkedIn posts:
   - 3 short posts (under 200 words each) that showcase culture
   - Based on real scenarios, not stock-photo vibes

5. Glassdoor/career page blurb:
   - Honest, specific, no fluff
   - Address the #1 concern candidates have about companies your size

Make it real. Candidates can spot corporate BS from a mile away.`,
              result:
                'Employer brand copy that attracts candidates who genuinely fit your culture.',
              tip: 'Pull quotes from actual employee surveys or reviews. Real voices are more compelling than anything AI or marketing writes.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Offer Letter and Negotiation',
          prompts: [
            {
              id: 'rc-p-5-1',
              title: 'Offer Letter Draft',
              task: 'Generate a complete offer letter',
              prompt: `Draft an offer letter for:

Candidate name: [name]
Role: [title]
Department: [department]
Manager: [hiring manager name and title]
Start date: [proposed date]
Location: [on-site / hybrid / remote]

Compensation:
- Base salary: [amount]
- Bonus: [structure and target, if applicable]
- Equity: [details, if applicable]
- Sign-on bonus: [amount, if applicable]

Benefits highlights:
- Health insurance: [summary]
- PTO: [policy]
- Retirement: [401k match, etc.]
- Other notable benefits: [list]

Employment details:
- Employment type: [full-time / contract / part-time]
- At-will statement: [yes/no based on state]
- Background check required: [yes/no]
- Non-compete or NDA: [yes/no]

Generate:
1. A professional offer letter with all sections:
   - Congratulations and role overview
   - Compensation breakdown (clear, no ambiguity)
   - Benefits summary
   - Start date and logistics
   - Conditions of employment
   - Acceptance deadline and instructions

2. A warm, informal email to send alongside the letter:
   - From the recruiter, expressing genuine excitement
   - Personal touch about why they were chosen
   - Clear next steps and timeline
   - Contact info for questions

3. An internal Slack note for the hiring team:
   - Offer details summary
   - Timeline for candidate response
   - Backup plan if declined

Tone: professional and exciting. This person just got the job - make them feel it.`,
              result:
                'A complete offer package that closes candidates with professionalism and warmth.',
              tip: 'Call the candidate before sending the written offer. Hearing the news verbally creates an emotional high that makes the written details feel like a formality.',
            },
            {
              id: 'rc-p-5-2',
              title: 'Negotiation Response Playbook',
              task: 'Prepare responses for common offer negotiation scenarios',
              prompt: `Build a negotiation response playbook for this offer:

Role: [title]
Our offer: [base salary, bonus, equity summary]
Our budget ceiling: [maximum we can go]
Candidate's likely leverage: [competing offers, current compensation, market demand]

Generate responses for these negotiation scenarios:

Scenario 1 - "I need more base salary":
- When to accommodate and when to hold firm
- Alternative offers (sign-on bonus, earlier review, title adjustment)
- Script for the conversation (what to say)

Scenario 2 - "I have a competing offer":
- How to respond without panic
- What to ask to evaluate if it is real
- When to match vs. when to walk away
- Script for the conversation

Scenario 3 - "I need more equity/stock":
- How to explain the current equity structure
- Creative alternatives if more equity is not possible
- Script for the conversation

Scenario 4 - "I need a higher title":
- When title changes are possible
- How to frame a title path (e.g., "Senior in 6 months after hitting milestones")
- Script for the conversation

Scenario 5 - "I need more time to decide":
- How long to extend
- What to say to keep momentum
- When to create urgency vs. give space

For each scenario:
- What the candidate is really asking for (underlying motivation)
- Your opening response
- A backup option if the first response does not work
- A line you should never cross`,
              result:
                'A playbook that helps you negotiate confidently and close offers faster.',
              tip: 'Always ask "What would make this a clear yes for you?" before counter-offering. It prevents multiple rounds of negotiation and shows you want to work together.',
            },
            {
              id: 'rc-p-5-3',
              title: 'Offer Decline Recovery',
              task: 'Handle an offer decline and salvage the relationship',
              prompt: `A candidate has declined our offer. Help me handle it:

Candidate: [name]
Role they declined: [title]
Reason given: [what they said]
Suspected real reason: [what you think, if different]
Where they are going instead: [if known]
Relationship quality: [strong / neutral / strained]

Generate:
1. Immediate response email (gracious, professional):
   - Acknowledge their decision with respect
   - No guilt-tripping or pressure
   - Keep the door open for the future
   - Ask one specific question (to learn from the experience)

2. Internal debrief template:
   - What happened at each stage of the process
   - Where we might have lost them
   - What we could do differently next time
   - Whether the comp, process, or role itself was the issue

3. Hiring manager communication:
   - How to deliver the news (clear, with next steps already in mind)
   - Backup candidates to move forward with
   - Process adjustments for the next offer

4. Talent pipeline message (send 2-3 months later):
   - A genuine check-in that does not feel like recruiting
   - Reconnect on a human level
   - Plant the seed for future opportunities

5. Feedback request:
   - 3 questions to understand what drove their decision
   - Framed as "help us improve" not "tell us what we did wrong"

Losing a candidate does not mean losing the relationship.`,
              result:
                'A professional response that maintains the relationship for future opportunities.',
              tip: 'The 2-3 month follow-up is where magic happens. Many candidates who declined realize within 90 days that the grass is not greener. Stay in touch.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Pipeline Reporting',
          prompts: [
            {
              id: 'rc-p-6-1',
              title: 'Pipeline Health Report',
              task: 'Generate a pipeline report for hiring managers',
              prompt: `Generate a pipeline health report:

Role: [title]
Days open: [number]
Target fill date: [date]
Sourcing channels: [where candidates are coming from]

Current pipeline:
Stage 1 - Sourced: [number]
Stage 2 - Contacted: [number]
Stage 3 - Phone Screen: [number]
Stage 4 - Interview: [number]
Stage 5 - Final Round: [number]
Stage 6 - Offer: [number]

Top candidates:
1. [Name] - Stage [X] - [one-line summary] - [timeline]
2. [Name] - Stage [X] - [one-line summary] - [timeline]
3. [Name] - Stage [X] - [one-line summary] - [timeline]

Generate:
1. Pipeline summary:
   - Total candidates at each stage
   - Conversion rates between stages
   - Comparison to benchmarks (are conversion rates healthy?)

2. Health assessment:
   - Is the pipeline on track to fill by the target date?
   - Where is the biggest bottleneck?
   - What is the drop-off rate and where?

3. Risk flags:
   - Candidates at risk of dropping out (been in stage too long, competing offers, etc.)
   - Sourcing velocity: are we adding enough new candidates at the top?
   - Stages where we are losing good candidates

4. Recommendations:
   - 3 specific actions to improve pipeline health this week
   - Whether to adjust the sourcing strategy or continue current approach
   - Timeline projection: realistic fill date based on current velocity

5. Summary for the hiring manager (3-4 sentences, no jargon):
   - Where we stand
   - What is working
   - What needs attention
   - Projected next steps

Format as a clean report that a hiring manager can read in 2 minutes.`,
              result:
                'A structured pipeline report that turns data into actionable insights.',
              tip: 'Send this every Monday morning. Consistent reporting builds trust and reduces "where are we on this?" messages throughout the week.',
            },
            {
              id: 'rc-p-6-2',
              title: 'Recruiting Metrics Dashboard',
              task: 'Build a metrics summary across all open roles',
              prompt: `Create a recruiting metrics summary across my open roles:

Open roles:
1. [Role 1] - [days open] - [pipeline size] - [stage of lead candidate]
2. [Role 2] - [days open] - [pipeline size] - [stage of lead candidate]
3. [Role 3] - [days open] - [pipeline size] - [stage of lead candidate]
4. [Role 4] - [days open] - [pipeline size] - [stage of lead candidate]

My targets:
- Average time-to-fill goal: [X days]
- Average cost-per-hire budget: [if known]
- Outreach response rate target: [X%]
- Interview-to-offer ratio target: [X:1]

Generate:
1. Portfolio overview:
   - All roles ranked by urgency (considering days open, pipeline health, business impact)
   - Which roles are on track and which need intervention

2. Key metrics across all roles:
   - Average days open
   - Total candidates in pipeline
   - Outreach response rates by channel
   - Interview-to-offer conversion rates
   - Source effectiveness (where are the best candidates coming from?)

3. Time allocation recommendation:
   - Where I should spend my sourcing hours this week (ranked by ROI)
   - Which roles need more pipeline and which need faster conversion

4. Weekly action items:
   - Top 5 specific actions ranked by impact
   - Which candidates need follow-up this week
   - Any hiring manager meetings to schedule

5. Trends:
   - What is getting better vs. worse month over month
   - Early warning signs for roles that might stall

Format this as an executive summary I could share with my recruiting manager.`,
              result:
                'A comprehensive metrics view that helps you prioritize across multiple open roles.',
              tip: 'Block 30 minutes every Friday to run this report. It turns Monday from "where was I on everything?" into "here is exactly what I am doing this week."',
            },
            {
              id: 'rc-p-6-3',
              title: 'Quarterly Recruiting Review',
              task: 'Compile a quarterly recruiting performance review',
              prompt: `Generate a quarterly recruiting performance review:

Quarter: [Q1/Q2/Q3/Q4] [year]

Roles filled this quarter:
1. [Role] - [days to fill] - [source] - [offer acceptance rate]
2. [Role] - [days to fill] - [source] - [offer acceptance rate]
3. [Role] - [days to fill] - [source] - [offer acceptance rate]

Roles still open:
1. [Role] - [days open] - [status]

Offers extended: [number]
Offers accepted: [number]
Offers declined: [number and reasons]
Candidates sourced: [total]
Outreach messages sent: [total]
Response rate: [%]

Generate:
1. Quarterly scorecard:
   - Key metrics vs. targets (time-to-fill, cost-per-hire, quality, diversity)
   - What improved vs. last quarter
   - What declined vs. last quarter

2. Channel analysis:
   - Which sourcing channels produced the most hires?
   - Cost and efficiency by channel
   - Recommendations for next quarter's channel mix

3. Process analysis:
   - Where candidates drop out of the funnel most
   - Average time spent at each stage
   - Bottlenecks that slowed hiring

4. Wins and learnings:
   - Top 3 recruiting wins this quarter
   - Top 3 lessons learned (with specific examples)
   - Process changes that worked

5. Next quarter plan:
   - Anticipated headcount needs
   - Capacity planning (can the current team handle the volume?)
   - Process improvements to implement
   - Tools or resources needed

Write this in a format suitable for sharing with leadership.`,
              result:
                'A professional quarterly review that demonstrates recruiting impact and drives continuous improvement.',
              tip: 'Connect recruiting metrics to business outcomes. "Filled 12 roles" is fine. "Filled 12 roles, enabling the product team to ship the Q3 roadmap on time" shows strategic impact.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves a recruiter in a typical week.',
      timeTable: [
        {
          task: 'Candidate sourcing and research',
          without: '3-5 hours/role',
          withAI: '30 minutes',
          saved: '3-4 hrs per role',
        },
        {
          task: 'Writing outreach messages',
          without: '5-10 min/message',
          withAI: '1-2 min/message',
          saved: '4 hrs/week at 50 msgs',
        },
        {
          task: 'Building screening criteria',
          without: '1-2 hours/role',
          withAI: '15 minutes',
          saved: '1.5 hrs per role',
        },
        {
          task: 'Job post creation',
          without: '1-2 hours/post',
          withAI: '15-20 minutes',
          saved: '1 hr per post',
        },
        {
          task: 'Offer letters and negotiation prep',
          without: '1-2 hours/offer',
          withAI: '15-20 minutes',
          saved: '1.5 hrs per offer',
        },
        {
          task: 'Pipeline reporting',
          without: '1-2 hours/week',
          withAI: '10-15 minutes',
          saved: '1.5 hrs/week',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '12-18 hrs/week',
      },
      sections: [
        {
          heading: 'The Recruiter\'s Edge',
          paragraphs: [
            'In 2026, the recruiter using AI sources 50 personalized candidates in the time it takes the other recruiter to source 10. One sends InMails that reference specific projects and career moves. The other sends "I came across your profile and was impressed." The response rates tell the story.',
            'Same network. Same candidate pool. Radically different results.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a recruiter to spend 4 hours a day writing boolean strings and formatting pipeline reports. You became a recruiter because you are great at connecting people with opportunities. AI gives you back the time to do what actually fills roles: building relationships and closing candidates.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Outreach personalization is the fastest win - you will see the response rate difference after your first batch.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI is embedded in your recruiting workflow. Follow along and check each step off.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'rc-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'rc-1-2', label: 'Create a free Perplexity account for market research' },
            { id: 'rc-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Source Smarter',
          duration: '20 min',
          items: [
            {
              id: 'rc-2-1',
              label: 'Pick your hardest-to-fill open role',
            },
            {
              id: 'rc-2-2',
              label: 'Run the Boolean Search String Builder with real requirements',
            },
            {
              id: 'rc-2-3',
              label: 'Compare the results to your current sourcing approach',
            },
          ],
        },
        {
          day: 3,
          title: 'Personalize Outreach',
          duration: '20 min',
          items: [
            {
              id: 'rc-3-1',
              label: 'Pick 5 candidates from yesterday\'s sourcing results',
            },
            {
              id: 'rc-3-2',
              label: 'Run the Personalized InMail prompt for each',
            },
            {
              id: 'rc-3-3',
              label: 'Send the messages and track response rates vs. your usual templates',
            },
          ],
        },
        {
          day: 4,
          title: 'Build Screening Criteria',
          duration: '15 min',
          items: [
            {
              id: 'rc-4-1',
              label: 'Run the Screening Rubric Generator for an open role',
            },
            {
              id: 'rc-4-2',
              label: 'Share the rubric with the hiring manager for alignment',
            },
            {
              id: 'rc-4-3',
              label: 'Screen 5 candidates using the new rubric and compare to your gut assessment',
            },
          ],
        },
        {
          day: 5,
          title: 'Optimize Job Posts',
          duration: '20 min',
          items: [
            {
              id: 'rc-5-1',
              label: 'Run the Job Post A/B Variants prompt for a current opening',
            },
            {
              id: 'rc-5-2',
              label: 'Audit the posts for inclusivity using the audit prompt',
            },
            {
              id: 'rc-5-3',
              label: 'Post different versions on different channels',
            },
          ],
        },
        {
          day: 6,
          title: 'Streamline Offers',
          duration: '15 min',
          items: [
            {
              id: 'rc-6-1',
              label: 'Draft an offer letter using the Offer Letter prompt',
            },
            {
              id: 'rc-6-2',
              label: 'Build your negotiation playbook for common scenarios',
            },
          ],
        },
        {
          day: 7,
          title: 'Report and Reflect',
          duration: '15 min',
          items: [
            {
              id: 'rc-7-1',
              label: 'Generate a pipeline health report for your top hiring manager',
            },
            {
              id: 'rc-7-2',
              label: 'Note which AI system saved you the most time this week',
            },
            {
              id: 'rc-7-3',
              label: 'Share this guide with a fellow recruiter',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
