import type { WorkbookData } from './types'

export const salesData = {
  professionId: 'sales',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Sales Professionals',
  heroDescription:
    'Close more deals with less busywork. Real tools, proven workflows, and copy-paste prompts for prospecting, outreach, follow-ups, and pipeline management.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s 8:15 AM. You open your CRM and see 23 leads that need follow-up, 8 prospects you haven\'t researched yet, and a pipeline review at 2 PM that you\'re not ready for. Your inbox has 4 replies from yesterday\'s cold outreach - two are "not interested," one is "send me more info," and one is a bounce.',
        'You need to prep for a demo at 11. The prospect\'s company just raised a Series B but you haven\'t had time to read the press release. You also owe a proposal to that deal from last Thursday, and your manager wants the Q1 forecast updated by end of day. Somewhere on your to-do list is "build outreach sequence for new ICP" - it\'s been there for three weeks.',
        'You got into sales because you\'re great with people. You can read a room, handle objections on the fly, and close when the moment is right. But lately, you spend 70% of your day on the work around the work - researching, writing, updating, formatting - instead of actually selling.',
      ],
      highlight:
        'What if AI handled the research, the writing, and the admin - so you could spend your day doing what you do best: talking to people and closing deals?',
      closingParagraph:
        'Not a robot selling for you. Not generic templates that sound like everyone else. Just a system that does the 3-hour research sprint in 10 minutes and writes the first draft of everything - so you can focus on the human part of sales.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to make sales calls for you. It won\'t read the room during a negotiation. It can\'t sense when a prospect is bluffing or when they\'re one question away from saying yes. The human side of sales - empathy, timing, relationships - that\'s irreplaceable. AI doesn\'t touch it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the best sales assistant you\'ve ever had. One who researches every prospect before your call. One who writes personalized outreach that doesn\'t sound like a mail merge. One who drafts your proposals, updates your CRM notes, preps your discovery questions, and never forgets a follow-up.',
            'Need to research a prospect\'s company in 2 minutes instead of 30? Done. Need 10 personalized cold email variations instead of copy-pasting the same template? Done. Need to turn your messy call notes into a clean CRM update with next steps? 60 seconds.',
            'AI handles the prep work and paperwork. You handle the conversations that close deals.',
          ],
        },
      ],
      keyInsight:
        'Your sales instinct + AI\'s speed = more conversations, better prep, faster follow-ups. The rep who shows up researched and personalized wins against the one sending generic templates.',
    },

    ch3: {
      intro: 'These five tools cover 90% of what a modern sales rep needs from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your outreach and research engine',
          description:
            'Cold emails, follow-ups, prospect research, objection handling scripts, proposal drafts - any text-based sales task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Apollo',
          role: 'Your prospecting database',
          description:
            'Find verified contact info, build prospect lists, enrich lead data, track buying signals',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential for outbound',
          icon: 'apollo',
        },
        {
          name: 'Lavender',
          role: 'Your email coach',
          description:
            'Real-time email scoring, subject line suggestions, personalization tips - AI that grades your outreach before you send',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Better emails instantly',
          icon: 'lavender',
        },
        {
          name: 'Notion AI',
          role: 'Your deal tracker and note-taker',
          description:
            'CRM notes, meeting summaries, deal tracking, playbooks, SOPs for your sales process',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Perplexity',
          role: 'Your prospect research assistant',
          description:
            'Company research, industry trends, competitor intel, news monitoring - all with cited sources you can reference in conversations',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
      ],
      footer:
        'Start with ChatGPT + Perplexity. That\'s free and covers research, outreach, and follow-ups. Add Apollo when you need prospecting at scale.',
    },

    ch4: {
      intro:
        'Here\'s where AI fits into your actual sales day. Click each system to see the workflow.',
      systems: [
        {
          id: 1,
          name: 'Prospect Research',
          before:
            'You Google the company, skim their website, check LinkedIn, look for recent news, try to find their tech stack, and piece together a picture of who you\'re talking to. Per prospect: 20-30 minutes. For a list of 20 prospects, that\'s a full day of research before you send a single email.',
          after:
            'You give AI the company name and prospect\'s role. In 2 minutes you have: company overview, recent news, likely pain points, tech stack clues, and personalization angles you can use in your outreach. Research 20 prospects in the time it used to take to research 2.',
          flow: [
            'Enter company name and prospect\'s role/title',
            'AI generates company brief with recent news and key facts',
            'Identify 2-3 personalization angles for outreach',
            'AI suggests likely pain points based on role and industry',
            'Save research to your CRM or deal notes',
          ],
          timeSaved: { without: '20-30 min/prospect', withAI: '2-3 min/prospect' },
        },
        {
          id: 2,
          name: 'Cold Outreach Personalization',
          before:
            'You have a template. You swap the name and company. Maybe you add a line about something you found on their LinkedIn. It takes 10 minutes per email if you actually personalize it. Most reps give up and blast the same template. Reply rates: 1-3%.',
          after:
            'AI takes your prospect research and generates genuinely personalized outreach - referencing specific company details, role-relevant pain points, and timely triggers. Each email sounds like you spent 15 minutes on it. You actually spent 90 seconds reviewing and tweaking.',
          flow: [
            'Feed AI the prospect research from System 1',
            'Choose your outreach angle (pain point, trigger event, mutual connection)',
            'AI generates a personalized cold email with subject line',
            'Review and add your personal touch',
            'AI generates 2-3 follow-up emails in the same thread',
          ],
          timeSaved: { without: '10-15 min/email', withAI: '2 min/email' },
        },
        {
          id: 3,
          name: 'Follow-up Sequencing',
          before:
            'You send the first email and then... forget. Or you remember 8 days later and send a generic "just checking in" follow-up. Your follow-up game is inconsistent, and most deals die in the silence between touchpoints.',
          after:
            'AI builds complete follow-up sequences that escalate value with each touch. Different angles, different proof points, increasing urgency - all written before you send email one. You never lose a deal because you forgot to follow up.',
          flow: [
            'Define the prospect, their pain point, and your value prop',
            'AI generates a 4-5 email follow-up sequence with timing',
            'Each email adds new value (case study, insight, offer)',
            'Review the sequence and adjust timing to your sales cycle',
            'Load into your outreach tool and let it run',
          ],
          timeSaved: { without: '30-45 min/sequence', withAI: '5 minutes' },
        },
        {
          id: 4,
          name: 'Demo Preparation',
          before:
            'You glance at the prospect\'s website 10 minutes before the call. You use the same slide deck as last time. Your discovery questions are generic. The demo feels one-size-fits-all, and the prospect can tell.',
          after:
            'AI gives you a complete pre-call brief: company context, likely objections, role-specific pain points, tailored discovery questions, and a customized talk track. You walk in sounding like you\'ve studied their business for hours.',
          flow: [
            'Enter the prospect company, contact role, and deal context',
            'AI generates a pre-call research brief',
            'Review tailored discovery questions for this specific prospect',
            'AI creates a customized talk track hitting their pain points',
            'After the call: AI turns your notes into a summary with next steps',
          ],
          timeSaved: { without: '30-60 min/demo', withAI: '10 minutes' },
        },
        {
          id: 5,
          name: 'Proposal Writing',
          before:
            'You open last quarter\'s proposal and start swapping names and numbers. The formatting breaks. The pricing section doesn\'t match the new offer. It takes 2-3 hours to get something presentable. For big deals, half a day.',
          after:
            'AI generates a custom proposal from your deal notes - executive summary, problem statement, proposed solution, pricing, timeline, and next steps. Tailored to the specific prospect\'s pain points and language. First draft in 10 minutes.',
          flow: [
            'Input deal details: prospect, pain points, solution, pricing',
            'AI generates a complete proposal draft with all sections',
            'Review and customize the executive summary and pricing',
            'AI formats it with professional structure',
            'Export and send - or request revisions from AI',
          ],
          timeSaved: { without: '2-4 hours/proposal', withAI: '20-30 minutes' },
        },
        {
          id: 6,
          name: 'Pipeline Analysis',
          before:
            'Your pipeline review is tomorrow. You spend 2 hours scrolling through your CRM, trying to remember the status of each deal, making optimistic guesses about close dates, and building a forecast that\'s more fiction than fact.',
          after:
            'AI analyzes your pipeline data and flags risks: deals that have stalled, accounts with no recent activity, optimistic close dates with no next steps scheduled. Your forecast gets honest and your manager gets useful data.',
          flow: [
            'Export or describe your current pipeline deals',
            'AI categorizes deals by health: strong, at risk, stalled',
            'Get specific recommendations for each at-risk deal',
            'AI generates a forecast summary with confidence levels',
            'Identify the 3-5 deals most likely to close this month with actions',
          ],
          timeSaved: { without: '2-3 hours/week', withAI: '20 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy these. Paste them. Use them. Every prompt is designed for real sales situations you face every day.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Prospect Research',
          prompts: [
            {
              id: 'sl-p-1-1',
              title: 'Prospect Company Brief',
              task: 'Research a prospect\'s company before outreach',
              prompt: `Research this company for a sales outreach:

Company: [company name]
Website: [URL if available]
My product/service: [what you sell in one sentence]
Prospect's role: [their title]

Give me:
1. Company overview (what they do, size estimate, stage/funding)
2. Recent news or developments (last 6 months)
3. Likely business challenges based on their industry and size
4. Their probable tech stack or tools (educated guess based on similar companies)
5. 3 personalization angles I can use in my cold email
6. The #1 pain point someone in [prospect's role] at this type of company probably has

Be specific. No generic filler. If you're unsure about something, say "likely" or "estimated" rather than guessing.`,
              result:
                'A one-page prospect brief that makes your outreach 10x more relevant.',
              tip: 'Run this in Perplexity for source-backed facts, then use ChatGPT to generate the personalization angles.',
            },
            {
              id: 'sl-p-1-2',
              title: 'Industry Pain Point Map',
              task: 'Map common pain points for a target industry',
              prompt: `I sell [your product/service] to [target industry] companies.

My typical buyer is: [role/title]
Company size: [range]
Geography: [region]

Map out:
1. Top 5 pain points for this buyer persona right now (be specific to 2025-2026)
2. How each pain point shows up in their daily work
3. What they're currently doing about it (status quo)
4. Why the status quo falls short
5. How my product/service addresses each pain point
6. The trigger events that make these pain points urgent (new hire, funding round, quarter end, etc.)

I want to use this to personalize my outreach and discovery calls.`,
              result:
                'A pain point map that makes every conversation more relevant.',
              tip: 'Update this quarterly. Pain points shift with market conditions and your product evolves.',
            },
            {
              id: 'sl-p-1-3',
              title: 'LinkedIn Profile Analyzer',
              task: 'Extract outreach angles from a LinkedIn profile',
              prompt: `Analyze this prospect's LinkedIn profile summary and give me outreach angles:

Name: [name]
Title: [title]
Company: [company]
LinkedIn summary/about:
[Paste their LinkedIn About section]

Recent posts or activity (if any):
[Paste any relevant posts or comments]

Give me:
1. What this person likely cares about based on their profile
2. Their probable priorities in their current role
3. 3 personalization hooks I can use in my outreach (reference specific things from their profile)
4. A suggested opening line for a cold email
5. A suggested LinkedIn connection request message (under 300 characters)
6. Topics to bring up if I get them on a call

Make the outreach feel like I've done my homework, not like I ran them through a template.`,
              result:
                'Personalized outreach angles that stand out from generic prospecting.',
              tip: 'Even a brief skim of their last 3 LinkedIn posts gives you gold for personalization.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Cold Outreach',
          prompts: [
            {
              id: 'sl-p-2-1',
              title: 'Personalized Cold Email',
              task: 'Write a cold email that gets replies',
              prompt: `Write a cold email to this prospect:

Prospect: [name], [title] at [company]
What their company does: [one sentence]
What I sell: [one sentence]
Key pain point I'm targeting: [the specific problem]
Personalization detail: [something specific about them or their company - news, LinkedIn post, company milestone]

Requirements:
- Subject line: under 6 words, curiosity-driven, no spam triggers
- Opening line: personalized reference (NOT "I hope this finds you well")
- Body: under 100 words total
- Connect their pain point to my solution in 1-2 sentences
- Social proof: one specific result (number or outcome)
- CTA: one clear, low-friction ask (not "Let me know when you're free for 30 minutes")
- Tone: peer-to-peer, not salesy

Write 3 versions:
Version A: Pain-point led
Version B: Trigger event led
Version C: Social proof led`,
              result:
                'Three email versions you can test to see which angle resonates best.',
              tip: 'The best cold emails are under 80 words. Shorter emails consistently get higher reply rates.',
            },
            {
              id: 'sl-p-2-2',
              title: 'LinkedIn Connection Message',
              task: 'Write LinkedIn outreach that gets accepted',
              prompt: `Write LinkedIn outreach messages for this prospect:

Prospect: [name], [title] at [company]
Personalization detail: [what you know about them]
My goal: [book a call / start a conversation / share a resource]

Generate:
1. Connection request message (under 300 characters - this is LinkedIn's limit)
   - No pitch in the connection request
   - Reference something genuine about their profile or company

2. First follow-up message (sent after they accept, day 1):
   - Acknowledge the connection
   - Share something valuable (insight, resource, observation)
   - Soft open to conversation

3. Second follow-up message (day 3-5):
   - Reference a specific pain point or challenge
   - Brief mention of how you've helped similar companies
   - Clear CTA for a conversation

4. Third follow-up message (day 7-10):
   - Final touch, different angle
   - Keep it short and genuine
   - Easy out if not interested

Tone: human, not robotic. No "I'd love to pick your brain" or "synergies."`,
              result:
                'A complete LinkedIn outreach sequence from connection to conversation.',
              tip: 'Engage with their content before sending a connection request. It warms the intro significantly.',
            },
            {
              id: 'sl-p-2-3',
              title: 'Multi-Channel Outreach Sequence',
              task: 'Build a multi-channel prospecting sequence',
              prompt: `Build a multi-channel outreach sequence for this prospect:

Prospect: [name], [title] at [company]
Industry: [their industry]
My offer: [what I sell and the key benefit]
Personalization: [2-3 details about them or their company]
Sales cycle length: [short / medium / long]

Create a 14-day sequence across channels:
Day 1: Email 1 (cold intro)
Day 2: LinkedIn connection request
Day 3: LinkedIn - engage with their content
Day 5: Email 2 (follow-up with new value)
Day 7: LinkedIn follow-up message
Day 9: Email 3 (case study or social proof)
Day 11: LinkedIn voice note script (15 seconds)
Day 14: Email 4 (breakup email)

For each touchpoint, give me the exact copy. Each message should:
- Add new information (never just "checking in")
- Reference previous touchpoints naturally
- Build on the same narrative without repeating

The sequence should tell a story from first touch to last.`,
              result:
                'A complete multi-channel sequence you can load into your outreach tool.',
              tip: 'The breakup email often gets the highest reply rate. People respond when they think the opportunity is ending.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Follow-up Sequences',
          prompts: [
            {
              id: 'sl-p-3-1',
              title: 'Post-Demo Follow-up',
              task: 'Write a follow-up email after a demo or discovery call',
              prompt: `Write a post-demo follow-up email:

Prospect: [name], [title]
Company: [company]
Demo date: [when]
What we discussed:
- Their pain points: [list what they shared]
- Our solution fit: [how we address their needs]
- Objections raised: [any concerns they mentioned]
- Next steps discussed: [what was agreed]
- Other stakeholders mentioned: [names/roles if any]

Write a follow-up email that:
1. Recaps the conversation briefly (shows you listened)
2. Addresses the #1 objection they raised
3. Includes one relevant case study or result
4. Restates the agreed next step with a specific date
5. Keeps it under 200 words
6. Professional but warm tone

Also generate:
- A subject line that references something specific from the call
- A suggested internal Slack/CRM note summarizing the call and deal status`,
              result:
                'A follow-up that reinforces your value and keeps the deal moving forward.',
              tip: 'Send this within 2 hours of the call. Speed signals professionalism and interest.',
            },
            {
              id: 'sl-p-3-2',
              title: 'Stalled Deal Re-engagement',
              task: 'Re-engage a prospect who went silent',
              prompt: `Write a re-engagement email for a stalled deal:

Prospect: [name], [title] at [company]
Last contact: [date and what happened]
Deal stage: [where it stalled]
Original pain point: [why they were interested]
What I think happened: [went dark, internal priorities shifted, budget review, etc.]

Write 3 re-engagement emails I can send over 2 weeks:

Email 1 (Day 0): The "new value" approach
- Don't ask "are you still interested?" - share something new and relevant
- Industry insight, new feature, relevant case study, or a piece of content
- Light CTA to re-open the conversation

Email 2 (Day 5): The "honest check-in" approach
- Acknowledge the silence directly but without guilt-tripping
- Ask a genuine question about their priorities
- Offer a no-pressure out

Email 3 (Day 12): The "close the loop" approach
- Final touch before you pause outreach
- Give them permission to say "not now" or "not ever"
- Leave the door open for the future

Each email under 100 words. No desperation. No "just following up."`,
              result:
                'A sequence to revive stalled deals without burning the relationship.',
              tip: 'The "close the loop" email has the highest response rate. People reply when there is a clear ending.',
            },
            {
              id: 'sl-p-3-3',
              title: 'Objection Response Templates',
              task: 'Prepare responses to common sales objections',
              prompt: `I sell [product/service] to [target buyer]. Here are the top objections I hear:

1. "[Objection 1 - e.g., 'Too expensive']"
2. "[Objection 2 - e.g., 'We already have a solution']"
3. "[Objection 3 - e.g., 'Not a priority right now']"
4. "[Objection 4 - e.g., 'Need to talk to my team']"
5. "[Objection 5 - e.g., 'Send me some info']"

For each objection, give me:
- What they're really saying (the underlying concern)
- A response for a live call (conversational, 2-3 sentences)
- A response for email (professional, under 75 words)
- A follow-up question that reframes the conversation
- A relevant proof point or case study angle to reference

Tone: empathetic, not pushy. Acknowledge their concern before redirecting.`,
              result:
                'A complete objection-handling playbook you can reference before any call.',
              tip: 'Practice these out loud. The best objection handling sounds natural, not scripted.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Demo Preparation',
          prompts: [
            {
              id: 'sl-p-4-1',
              title: 'Pre-Call Research Brief',
              task: 'Prepare a comprehensive brief before a sales call',
              prompt: `Prepare a pre-call brief for my upcoming sales meeting:

Prospect: [name], [title]
Company: [company name]
Industry: [industry]
Company size: [employees/revenue if known]
Source: [how they came in - inbound, outbound, referral]
What I know so far: [any context from previous interactions]
My product: [what I sell in one sentence]

Generate:
1. Company snapshot: what they do, recent news, growth signals
2. Role analysis: what a [their title] typically cares about
3. Likely pain points (top 3, specific to their industry and role)
4. 10 discovery questions ranked by importance
   - 5 situation questions (understand their current state)
   - 3 pain questions (uncover specific challenges)
   - 2 impact questions (quantify the cost of the problem)
5. Potential objections and how to handle each
6. Competitor they're most likely evaluating (and how we differ)
7. Ideal next step to propose at the end of the call`,
              result:
                'A complete pre-call prep sheet that makes you the most prepared person on the call.',
              tip: 'Review this 15 minutes before the call, not the night before. Fresh context leads to better conversations.',
            },
            {
              id: 'sl-p-4-2',
              title: 'Custom Demo Talk Track',
              task: 'Create a tailored demo script for a specific prospect',
              prompt: `Create a custom demo talk track for this prospect:

Prospect: [name], [title] at [company]
Their pain points (from discovery): [list what you learned]
Features most relevant to them: [list 3-4]
Their current solution: [what they use now]
Decision criteria they mentioned: [price, ease of use, integrations, etc.]
Other stakeholders involved: [roles and their likely concerns]

Generate a demo flow:
1. Opening (2 min): Recap their pain points to show you listened
2. "Before" scenario: Paint a picture of their current situation (make it specific to them)
3. Feature walkthrough (10 min): For each relevant feature:
   - The problem it solves (in their words)
   - What to show (specific actions)
   - The "aha moment" to highlight
   - Transition sentence to the next feature
4. Social proof: Which customer story to reference (most similar to them)
5. ROI framing: How to quantify the value for their specific situation
6. Closing: Handling likely objections and proposing next steps

Keep the talk track conversational. These are talking points, not a script to read.`,
              result:
                'A demo that feels customized because it actually is.',
              tip: 'Ask the prospect to share their screen showing their current process. Then show how your solution improves it.',
            },
            {
              id: 'sl-p-4-3',
              title: 'Discovery Call Question Framework',
              task: 'Build a discovery question framework for your ICP',
              prompt: `Build a discovery call question framework for selling [product/service] to [target buyer].

My typical prospect: [role, industry, company size]
My product solves: [core problem in one sentence]
Average deal size: [range]
Average sales cycle: [length]

Create a structured discovery framework:

Opening (build rapport):
- 2 conversation starters that don't feel like sales questions

Situation questions (understand their world):
- 5 questions to map their current process and tools

Pain questions (uncover challenges):
- 5 questions to identify specific frustrations and gaps

Impact questions (quantify the problem):
- 3 questions that help them realize the cost of the status quo

Vision questions (paint the future):
- 3 questions that get them excited about a better way

Budget and timeline:
- 3 questions to qualify without being awkward about money

For each question: what you're really trying to learn, and how to naturally follow up based on their answer.`,
              result:
                'A discovery framework that uncovers real needs instead of just checking boxes.',
              tip: 'Listen more than you talk. The best discovery calls are 70% prospect and 30% rep.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Proposal Writing',
          prompts: [
            {
              id: 'sl-p-5-1',
              title: 'Sales Proposal Generator',
              task: 'Draft a complete sales proposal',
              prompt: `Draft a sales proposal for this deal:

Prospect: [company name]
Contact: [name, title]
Industry: [their industry]
Their pain points: [list 2-3 key challenges from discovery]
Our solution: [product/service and how it addresses each pain point]
Pricing: [your pricing structure]
Timeline: [implementation/delivery timeline]
Competitors they're considering: [if known]

Generate a proposal with these sections:
1. Executive summary (3-4 sentences - why us, for them)
2. Understanding your challenges (reflect their pain points back)
3. Proposed solution (map features to their specific needs)
4. Expected outcomes (quantified where possible)
5. Investment (pricing with clear breakdown)
6. Implementation timeline (phased approach)
7. Why [your company] (3 differentiators relevant to this prospect)
8. Case study summary (similar company, specific results)
9. Next steps (clear and specific)

Tone: confident but not arrogant. Consultative, not salesy. Every section should answer "why should [prospect company] care?"`,
              result:
                'A proposal that reads like it was written specifically for them because it was.',
              tip: 'Send the proposal within 24 hours of the call where pricing was discussed. Speed wins deals.',
            },
            {
              id: 'sl-p-5-2',
              title: 'Business Case Builder',
              task: 'Build an ROI business case for a prospect',
              prompt: `Build a business case / ROI analysis for this deal:

Prospect: [company name]
Their current situation:
- Process: [how they do it now]
- Tools: [what they currently use]
- Team size involved: [how many people]
- Time spent: [hours per week/month on this process]
- Current cost: [if known - tools, labor, opportunity cost]

Our solution:
- Product: [what we offer]
- Pricing: [annual cost]
- Expected time savings: [estimate]
- Expected outcome improvements: [more revenue, fewer errors, faster delivery, etc.]

Generate:
1. Current state cost analysis (hard costs + soft costs + opportunity cost)
2. Future state with our solution (new costs and projected savings)
3. Net ROI calculation (payback period, annual savings, 3-year value)
4. Risk of inaction (what it costs to do nothing for 12 more months)
5. A one-slide summary I can share with their CFO or decision-maker
6. 3 conservative assumptions I'm making (shows credibility)

Use real math. Be conservative - understated ROI is more credible than inflated.`,
              result:
                'A financial business case that helps your champion sell internally.',
              tip: 'Ask the prospect to validate your assumptions. It turns the ROI from your number into their number.',
            },
            {
              id: 'sl-p-5-3',
              title: 'Mutual Action Plan',
              task: 'Create a mutual close plan with the prospect',
              prompt: `Create a mutual action plan (MAP) for closing this deal:

Deal: [product/service] for [prospect company]
Expected close date: [date]
Decision-makers: [list roles involved]
Champion: [name and role]
Key requirements: [what they need before saying yes]
Blockers: [known obstacles - legal review, budget approval, technical evaluation, etc.]

Generate a reverse-engineered timeline from the close date:
- Week-by-week milestones working backward from the close date
- Who owns each action item (us vs. them)
- Dependencies (what must happen before the next step)
- Risk flags (where deals like this typically stall)

Include:
1. Technical evaluation steps and timeline
2. Legal/security review process
3. Budget approval workflow
4. Internal champion enablement (what to give your champion to sell internally)
5. Final negotiation and contract review
6. Go-live / onboarding kickoff

Format as a clean, shareable table. This should be something I can email to the champion and say "Does this timeline work for your team?"`,
              result:
                'A shared plan that creates accountability and momentum toward a close date.',
              tip: 'Share this after the second or third call. It signals professionalism and keeps both sides on track.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Pipeline Analysis',
          prompts: [
            {
              id: 'sl-p-6-1',
              title: 'Pipeline Health Check',
              task: 'Analyze your pipeline for risks and opportunities',
              prompt: `Analyze my sales pipeline and give me an honest health check:

My quota: [amount] for [time period]
Current pipeline:

Deal 1: [company] - [amount] - [stage] - [last activity date] - [expected close]
Deal 2: [company] - [amount] - [stage] - [last activity date] - [expected close]
Deal 3: [company] - [amount] - [stage] - [last activity date] - [expected close]
[Add more deals]

For each deal, tell me:
- Health status: Green (on track), Yellow (at risk), Red (stalled)
- Why you flagged it that way
- One specific action to take this week

Overall pipeline analysis:
1. Total pipeline value vs. quota (is it enough at typical win rates?)
2. Stage distribution (is the pipeline top-heavy, bottom-heavy, or balanced?)
3. Velocity concerns (any deals sitting in one stage too long?)
4. Coverage ratio (do I have enough pipeline to hit my number?)
5. Top 3 deals most likely to close and why
6. Top 3 deals most at risk and what to do about them
7. Gap: if current pipeline won't cover quota, how many new opps do I need?`,
              result:
                'An honest pipeline assessment with specific actions for every deal.',
              tip: 'Run this every Monday. It takes 5 minutes and gives you clarity on where to focus your week.',
            },
            {
              id: 'sl-p-6-2',
              title: 'Win/Loss Analysis',
              task: 'Analyze patterns in your wins and losses',
              prompt: `Analyze my recent wins and losses to find patterns:

Recent wins (last quarter):
1. [Company] - [deal size] - [sales cycle length] - [key factor in winning]
2. [Company] - [deal size] - [sales cycle length] - [key factor in winning]
3. [Company] - [deal size] - [sales cycle length] - [key factor in winning]

Recent losses (last quarter):
1. [Company] - [deal size] - [stage lost] - [reason given]
2. [Company] - [deal size] - [stage lost] - [reason given]
3. [Company] - [deal size] - [stage lost] - [reason given]

Analyze and give me:
1. Common traits of deals I win (company type, deal size, buyer role, sales cycle)
2. Common traits of deals I lose (where and why they fall apart)
3. My ideal customer profile based on win patterns
4. The stage where I lose the most deals and why
5. 3 specific changes to my process that could improve my win rate
6. Objections I should be addressing earlier in the process
7. My estimated win rate and how it compares to industry benchmarks`,
              result:
                'A clear picture of what works, what doesn\'t, and what to change.',
              tip: 'Be brutally honest in the "reason given" fields. The real reason is more useful than the polite reason.',
            },
            {
              id: 'sl-p-6-3',
              title: 'Forecast Narrative',
              task: 'Generate a forecast summary for your manager',
              prompt: `Generate a sales forecast summary I can share with my manager:

Period: [month/quarter]
Quota: [amount]

Commit deals (90%+ confidence):
[Deal 1] - [amount] - [close date] - [why it's commit]
[Deal 2] - [amount] - [close date] - [why it's commit]

Best case deals (50-89% confidence):
[Deal 3] - [amount] - [close date] - [risk factor]
[Deal 4] - [amount] - [close date] - [risk factor]

Upside deals (25-49% confidence):
[Deal 5] - [amount] - [close date] - [what needs to happen]

Generate:
1. Forecast summary: commit, best case, and upside totals
2. Confidence assessment: am I on track to hit quota?
3. Risk factors: what could go wrong and with which deals
4. Actions needed: what I'm doing this week to de-risk the forecast
5. Support needed: any deals where I need manager or exec involvement
6. Pipeline generation: am I building enough pipeline for next quarter?

Write this like a brief I'd share in a 1:1. Honest, specific, no fluff.`,
              result:
                'A forecast summary that builds credibility with your manager.',
              tip: 'Under-promise and over-deliver. Conservative forecasts that you consistently hit build more trust than optimistic misses.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here\'s the math on what AI saves you in a typical sales week.',
      timeTable: [
        {
          task: 'Prospect research',
          without: '3-5 hours/week',
          withAI: '30 minutes/week',
          saved: '3-4 hrs',
        },
        {
          task: 'Writing cold outreach',
          without: '4-6 hours/week',
          withAI: '45 minutes/week',
          saved: '4-5 hrs',
        },
        {
          task: 'Follow-up sequences',
          without: '2-3 hours/week',
          withAI: '20 minutes/week',
          saved: '2 hrs',
        },
        {
          task: 'Demo preparation',
          without: '2-3 hours/week',
          withAI: '30 minutes/week',
          saved: '2 hrs',
        },
        {
          task: 'Proposal writing',
          without: '3-4 hours/proposal',
          withAI: '30 minutes',
          saved: '3 hrs',
        },
        {
          task: 'Pipeline review and CRM updates',
          without: '2-3 hours/week',
          withAI: '20 minutes',
          saved: '2 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '15-20 hrs/week',
      },
      sections: [
        {
          heading: 'The Sales Rep\'s Edge',
          paragraphs: [
            'In 2026, the rep using AI sends 50 personalized emails in the time it takes the other rep to send 10 generic ones. One shows up to demos knowing the prospect\'s recent funding round, their competitive landscape, and their likely pain points. The other wings it. The results compound over every quarter.',
            'Same skill set. Same territory. Radically different output.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t get into sales to spend 4 hours a day on research and admin. You got into sales because you\'re great with people. AI gives you back the time to do what makes you money: having conversations and closing deals.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Prospect research is the fastest win. You will feel the difference after your first AI-prepped call.',
    },

    ch7: {
      intro:
        'One system a day. By end of week, AI is baked into your sales workflow. Follow along and check each step off.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'sl-1-1', label: 'Create a free ChatGPT account (or log in)' },
            { id: 'sl-1-2', label: 'Create a free Perplexity account' },
            { id: 'sl-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Research a Real Prospect',
          duration: '15 min',
          items: [
            {
              id: 'sl-2-1',
              label: 'Pick a prospect you need to contact this week',
            },
            {
              id: 'sl-2-2',
              label: 'Run the Prospect Company Brief prompt with their details',
            },
            {
              id: 'sl-2-3',
              label: 'Compare: how long would that research have taken manually?',
            },
          ],
        },
        {
          day: 3,
          title: 'Write Personalized Outreach',
          duration: '20 min',
          items: [
            {
              id: 'sl-3-1',
              label: 'Use the Personalized Cold Email prompt for that prospect',
            },
            {
              id: 'sl-3-2',
              label: 'Generate a LinkedIn Connection Message as well',
            },
            {
              id: 'sl-3-3',
              label: 'Send the outreach - notice the quality vs. your usual templates',
            },
          ],
        },
        {
          day: 4,
          title: 'Prep for a Demo or Call',
          duration: '15 min',
          items: [
            {
              id: 'sl-4-1',
              label: 'Run the Pre-Call Research Brief for your next meeting',
            },
            {
              id: 'sl-4-2',
              label: 'Review the discovery questions and objection prep',
            },
            {
              id: 'sl-4-3',
              label: 'Use the Custom Demo Talk Track if you have a demo this week',
            },
          ],
        },
        {
          day: 5,
          title: 'Build a Follow-up System',
          duration: '20 min',
          items: [
            {
              id: 'sl-5-1',
              label: 'Write a post-demo follow-up for your most recent call',
            },
            {
              id: 'sl-5-2',
              label: 'Run the Stalled Deal prompt for a deal that went quiet',
            },
            {
              id: 'sl-5-3',
              label: 'Build objection response templates for your top 5 objections',
            },
          ],
        },
        {
          day: 6,
          title: 'Write a Proposal',
          duration: '25 min',
          items: [
            {
              id: 'sl-6-1',
              label: 'Run the Sales Proposal Generator for an active deal',
            },
            {
              id: 'sl-6-2',
              label: 'Build a business case with the ROI analysis prompt',
            },
            {
              id: 'sl-6-3',
              label: 'Create a mutual action plan for your biggest deal',
            },
          ],
        },
        {
          day: 7,
          title: 'Analyze and Plan',
          duration: '15 min',
          items: [
            {
              id: 'sl-7-1',
              label: 'Run the Pipeline Health Check on your current pipeline',
            },
            {
              id: 'sl-7-2',
              label: 'Generate a forecast narrative for your manager',
            },
            {
              id: 'sl-7-3',
              label: 'Identify which AI system saved you the most time this week',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
