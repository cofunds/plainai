import type { WorkbookData } from './types'

export const grantwritersData = {
  professionId: 'grantwriters',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Grant Writers',
  heroDescription:
    'Research funders faster, write stronger proposals, and never start a budget narrative from scratch again. Real tools, proven workflows, and copy-paste prompts for every stage of grant writing.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s 9 AM and the deadline is Friday. You have a 15-page proposal due for a federal grant, a Letter of Intent for a foundation that opened their cycle last week, and a progress report for a grant you received six months ago. Your program director just sent over the impact data - in a format that makes no sense - and the finance team still hasn\'t finalized the budget numbers you requested two weeks ago.',
        'You open the proposal draft you started last week. The needs statement is half-written. The logic model is a rough sketch. You know the narrative needs to connect the data to the community impact, but turning statistics into a compelling story takes concentration you don\'t have when you\'re juggling three deadlines. And every funder wants a slightly different format, different language, different emphasis.',
        'You became a grant writer because you believe in the missions you fund. Connecting organizations with the resources they need to do their work - that\'s meaningful. But the reality is that 70% of your time goes to formatting, researching funders, wrestling with budget justifications, and rewriting the same organizational capacity section for the fifteenth time. The writing that should be your superpower has become a bottleneck.',
      ],
      highlight:
        'What if AI handled the research, the first drafts, and the formatting - so you could focus on the strategy, the storytelling, and the relationships that actually win grants?',
      closingParagraph:
        'Not replacing your expertise in grant strategy. Not generating generic proposals that funders see through in 30 seconds. Just a system that produces strong first drafts from your notes, researches funders in minutes instead of hours, and turns raw data into compelling impact narratives - so you can apply for more grants and win more of them.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to write winning grants by itself. It doesn\'t understand your community\'s specific needs, your organization\'s unique theory of change, or the subtle signals in a funder\'s guidelines that tell you what they really want. It can\'t build the relationships with program officers that turn a good proposal into a funded one. The human side of grant writing - strategy, authenticity, relationships, mission alignment - that\'s irreplaceable.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most productive research assistant and first-draft writer you\'ve ever worked with. One who scans funder databases and surfaces matches in minutes, produces solid first drafts of needs statements from your data points, builds budget narratives from your line items, and formats proposals to match any funder\'s requirements.',
            'Need to research 50 foundations for a new program? Narrowed to your top 10 in 20 minutes. Need a needs statement that weaves together five data sources? First draft in 5 minutes. Need a budget justification for a complex multi-year grant? Structured and written in 10 minutes.',
            'AI handles the blank-page problem and the research grind. You handle the strategy, the authentic voice, and the funder relationships that close the deal.',
          ],
        },
      ],
      keyInsight:
        'Your grant strategy + AI\'s research and drafting speed = more applications submitted, stronger narratives, and better win rates. The writer who applies to 20 aligned funders beats the one who only has time for 8.',
    },

    ch3: {
      intro: 'Five tools that cover everything a modern grant writer needs from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and narrative engine',
          description:
            'Needs statements, proposal narratives, budget justifications, logic models, reporting drafts - any grant writing task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-form writing partner',
          description:
            'Complex proposal narratives, detailed budget justifications, nuanced impact statements, funder analysis - excels at depth and accuracy',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long-form proposals',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your funder and data research assistant',
          description:
            'Funder research, community data, demographic statistics, evidence-based practice citations, policy context - all with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your grant management system',
          description:
            'Deadline tracking, funder databases, proposal drafts, boilerplate library, reporting calendars, team collaboration',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual design tool',
          description:
            'Logic model graphics, infographics for proposals, impact reports, one-page summaries, funder presentations',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Professional visuals fast',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers proposal writing, funder research, and data sourcing. Add Notion when you need to manage multiple grants and deadlines.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual grant writing workflows. Click each system to see the before/after and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Funder Research and Matching',
          before:
            'You have a new program that needs funding. You spend 2-3 days searching foundation databases, reading annual reports, checking 990s, and building a prospect list. For each potential funder, you\'re checking giving priorities, geographic focus, typical grant size, and past grantees. By the time you have a solid list of 15-20 prospects, a week has passed.',
          after:
            'You describe your program, budget, and geography to AI. It generates a structured funder prospect list with alignment ratings, typical grant sizes, deadlines, and key contacts in 30 minutes. You verify and refine the list in another 30 minutes. A week of research becomes a morning.',
          flow: [
            'Describe your program, budget need, and geographic focus',
            'AI generates an initial funder prospect list with key details',
            'Verify funder information against current databases and 990s',
            'AI rates alignment strength and suggests cultivation approach',
            'Prioritize your list and build an outreach calendar',
          ],
          timeSaved: { without: '2-3 days', withAI: '1-2 hours' },
        },
        {
          id: 2,
          name: 'Proposal Narrative Writing',
          before:
            'You stare at the blank needs statement section. You know the data, you know the community, but turning it into a compelling narrative that satisfies both the heart and the head takes hours. The organizational capacity section? You\'ve written it 50 times but each funder wants it framed differently. A full proposal draft takes 15-25 hours of focused writing time.',
          after:
            'You feed AI your data points, program description, and funder priorities. It produces a solid first draft of each section in minutes. You spend your time refining the narrative, adding authentic voice, and ensuring strategic alignment instead of fighting the blank page. Total drafting time drops by 60%.',
          flow: [
            'Outline the proposal sections and key points for each',
            'Feed AI your data, program details, and funder language',
            'AI generates first drafts of each section',
            'Revise for voice, accuracy, and strategic alignment',
            'AI helps polish transitions and ensure consistency across sections',
          ],
          timeSaved: { without: '15-25 hours/proposal', withAI: '6-10 hours' },
        },
        {
          id: 3,
          name: 'Budget Narrative Development',
          before:
            'The budget spreadsheet is done but the narrative - the part that justifies every line item and connects spending to outcomes - is the part everyone dreads. You\'re translating numbers into a story about why each expense is necessary, reasonable, and aligned with the program design. For complex grants, this alone takes 3-5 hours.',
          after:
            'You paste your budget line items into AI with program context. It generates a structured budget narrative that justifies each expense, connects costs to activities, and uses the language funders expect. Three hours of writing becomes 30 minutes of reviewing and refining.',
          flow: [
            'Enter your budget categories and line items',
            'Add program context - what each cost supports',
            'AI generates justification paragraphs for each budget category',
            'Review for accuracy - verify numbers and calculations',
            'AI ensures the narrative aligns with the proposal goals section',
          ],
          timeSaved: { without: '3-5 hours', withAI: '30-45 minutes' },
        },
        {
          id: 4,
          name: 'Impact Measurement and Statements',
          before:
            'Funders want to know how you\'ll measure success. Building a logic model, defining outcomes, selecting indicators, and writing an evaluation plan requires clear thinking about cause and effect. You know your program works, but articulating the measurement framework in funder language takes hours of careful writing.',
          after:
            'You describe your program activities and intended outcomes. AI builds a logic model framework, suggests evidence-based indicators, and drafts an evaluation plan that connects activities to measurable results. The thinking is still yours - AI just structures it faster.',
          flow: [
            'Describe program activities, target population, and intended changes',
            'AI generates a logic model: inputs, activities, outputs, outcomes, impact',
            'Select the most meaningful and measurable indicators',
            'AI drafts an evaluation plan with data collection methods',
            'Review and align with your organization\'s actual capacity to measure',
          ],
          timeSaved: { without: '3-4 hours', withAI: '45-60 minutes' },
        },
        {
          id: 5,
          name: 'Grant Reporting',
          before:
            'The interim report is due in two weeks. You need to pull data from three different tracking systems, compile success stories from program staff, write a narrative that explains both the wins and the challenges, and present it in the funder\'s required format. Every report takes 4-6 hours, and you have six active grants with different reporting schedules.',
          after:
            'You enter your data points, milestones, and story highlights. AI drafts a complete report narrative in 15 minutes - organized by the funder\'s sections, connecting data to outcomes, and framing challenges as learning opportunities. You review, add specifics, and submit. Six hours becomes one.',
          flow: [
            'Gather data - outputs, outcomes, financials, milestones',
            'Enter key results and any notable stories or challenges',
            'AI drafts the report narrative organized by funder sections',
            'Review for accuracy and add specific examples and quotes',
            'AI generates a financial summary table matching reported data',
          ],
          timeSaved: { without: '4-6 hours/report', withAI: '1-1.5 hours' },
        },
        {
          id: 6,
          name: 'Funder Relationship Management',
          before:
            'You know you should be staying in touch with funders between grant cycles - sharing updates, sending thank-you notes, inviting them to events. But between writing proposals and managing reports, relationship-building gets pushed to "when I have time." The result: cold applications to funders who barely know your organization.',
          after:
            'AI drafts personalized update letters, thank-you communications, and impact stories for your funder list. Maintaining 30 funder relationships goes from impossible to manageable. When you apply for the next grant, the program officer already knows and trusts your work.',
          flow: [
            'List your active and prospective funder relationships',
            'AI generates quarterly update templates tailored to each funder\'s interests',
            'Review and add personal touches and specific milestones',
            'AI creates a funder communication calendar',
            'Track touchpoints and engagement in your relationship database',
          ],
          timeSaved: { without: 'Rarely done', withAI: '2-3 hours/quarter' },
        },
      ],
    },

    ch5: {
      intro:
        'No prompt engineering required. Just copy, paste, fill in your details, and hit enter. Click each prompt to reveal it.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Funder Research',
          prompts: [
            {
              id: 'gw-p-1-1',
              title: 'Funder Prospect List',
              task: 'Generate a list of potential funders for a specific program',
              prompt: `Help me identify potential funders for this program.

Organization: [your org name and type - nonprofit, university, government agency, etc.]
Program/project: [describe what needs funding in 2-3 sentences]
Funding need: [total amount needed]
Grant size range seeking: [minimum to maximum per grant]
Geographic focus: [where the program operates]
Population served: [who benefits]
Issue areas: [education, health, environment, housing, arts, etc.]
Program stage: [planning / pilot / expansion / established]

Generate a list of 15-20 potential funders including:

For each funder:
1. Funder name and type (foundation, corporate, government, etc.)
2. Why they're a match (specific alignment with our program)
3. Typical grant range for this type of work
4. Geographic focus alignment
5. Application type (LOI first, open application, invitation only)
6. Typical deadline cycle (if known)
7. Alignment strength: Strong / Moderate / Worth Exploring

Organize the list by alignment strength - strongest matches first.

Also provide:
- 3 search strategies I should use to find additional funders
- 2 types of funders I might be overlooking for this program
- Red flags that a funder is NOT a good match despite surface-level alignment

Note: I will verify all funder details against current databases and websites. Use this as a research starting point, not a final list.`,
              result:
                'A structured funder prospect list with alignment ratings to jumpstart your research.',
              tip: 'Run this in Perplexity for the most current data with sources. Then verify every detail on the funder\'s own website and in their 990s.',
            },
            {
              id: 'gw-p-1-2',
              title: 'Funder Alignment Analysis',
              task: 'Analyze how well your program aligns with a specific funder',
              prompt: `Analyze the alignment between my program and this specific funder.

My program:
- Name: [program name]
- Mission: [one sentence]
- What we do: [2-3 sentence description]
- Population served: [who and where]
- Outcomes: [key outcomes we achieve]
- Annual budget: [amount]
- Grant request amount: [amount]

The funder:
- Name: [funder name]
- Their stated priorities: [paste from their website or guidelines]
- Geographic focus: [where they fund]
- Typical grant size: [range]
- What they've funded recently: [list a few recent grants if known]
- Application requirements: [what they ask for]

Analyze:
1. Areas of strong alignment (where we clearly match their priorities)
2. Areas of moderate alignment (where we connect but need to frame it carefully)
3. Potential misalignment (where we might not fit and should address proactively)
4. Language analysis - Key words and phrases from their guidelines we should mirror
5. Strategic framing - How to position our program to resonate with their priorities
6. Differentiation - What makes our approach stand out from other applicants
7. Red flags - Reasons this might not be the right funder despite surface alignment
8. Recommendation: Strong fit / Worth pursuing / Probably not the right match

Be honest. It\'s better to know now than to waste time on a misaligned application.`,
              result:
                'A strategic alignment analysis that helps you decide whether to invest time in this application and how to frame your proposal.',
              tip: 'Run this before you start writing. A 15-minute alignment check saves you from spending 20 hours on a proposal that never had a chance.',
            },
            {
              id: 'gw-p-1-3',
              title: 'Funder Landscape Summary',
              task: 'Map the funding landscape for a specific issue area',
              prompt: `Map the funding landscape for [issue area] in [geographic region].

Issue area: [education equity / mental health / climate / affordable housing / arts / etc.]
Geographic scope: [local / state / regional / national]
Organization type: [what kind of organizations typically get funded in this space]

Create a landscape summary that includes:

1. Major funders in this space (top 10-15):
   - Name and type
   - Annual giving in this area (approximate)
   - What specifically they fund within this issue
   - How competitive they are (applications received vs funded)

2. Funding trends:
   - Is funding for this issue growing or shrinking?
   - What approaches are funders prioritizing right now?
   - What language and frameworks are trending in proposals?
   - Any major shifts in the past 12-18 months?

3. Underutilized funding sources:
   - Government grants most organizations miss
   - Corporate funders entering this space
   - Community foundations and local sources
   - Collaborative or pooled funding opportunities

4. Strategic insights:
   - What separates funded proposals from rejected ones in this space
   - Common proposal weaknesses funders report seeing
   - The current "it" approach or framework funders are excited about

5. Recommended research resources:
   - Databases to use
   - Newsletters or alerts to subscribe to
   - Networks or associations to join

Note: I will verify all specific data points. Use this as an orientation to the landscape.`,
              result:
                'A comprehensive landscape map that positions you strategically before you write a single proposal.',
              tip: 'Update this quarterly. The funding landscape shifts faster than most grant writers realize. Staying current is a competitive advantage.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Proposal Narratives',
          prompts: [
            {
              id: 'gw-p-2-1',
              title: 'Needs Statement',
              task: 'Write a compelling needs statement for a grant proposal',
              prompt: `Write a needs statement for a grant proposal.

Program: [what the program does]
Population served: [who benefits - demographics, location, characteristics]
The problem: [what issue exists that the program addresses]
Geographic context: [where this is happening]

Data points to weave in:
1. [Statistic 1 - e.g., "42% of students in [district] read below grade level"]
2. [Statistic 2 - e.g., "The county has 1 mental health provider per 5,000 residents"]
3. [Statistic 3 - e.g., "Unemployment in the target area is 2.3x the state average"]
4. [Statistic 4 - additional data point]

Community voice: [any quotes, survey results, or direct input from the community]

Funder's language/priorities: [key phrases from their guidelines that signal what they care about]

Write a needs statement that:
1. Opens with a human moment - ground the data in a real experience
2. Presents the problem with escalating specificity (national, state, local)
3. Uses data to support the narrative without reading like a data dump
4. Incorporates community voice to show the need is community-identified
5. Connects to systemic factors (root causes, not just symptoms)
6. Creates urgency without despair - this is a solvable problem
7. Naturally transitions toward your solution (without describing it yet)
8. Mirrors the funder's language and priorities naturally

Length: 500-700 words.
Tone: Compelling but professional. Evidence-based but human.

Note: I will verify all data citations for accuracy before submission.`,
              result:
                'A strong needs statement draft that balances data, narrative, and community voice.',
              tip: 'The needs statement is where most proposals are won or lost. Spend extra time refining this section - it sets the emotional and logical foundation for everything that follows.',
            },
            {
              id: 'gw-p-2-2',
              title: 'Organizational Capacity Section',
              task: 'Write the organizational capacity section of a proposal',
              prompt: `Write the organizational capacity section for a grant proposal.

Organization:
- Name: [name]
- Type: [nonprofit, university, government, etc.]
- Founded: [year]
- Mission: [mission statement]
- Annual budget: [amount]
- Staff size: [number]
- Service area: [geographic]

Track record:
- Key programs: [list 2-3 relevant programs with brief descriptions]
- Outcomes achieved: [2-3 specific results with numbers]
- Previous grants received: [list relevant funders to show track record]
- Awards or recognition: [if any]

For this specific grant:
- Key staff: [name, title, qualifications - for 2-3 people leading this work]
- Partners: [organizations you're collaborating with]
- Infrastructure: [relevant facilities, technology, systems]
- Financial health: [clean audits, reserves, diversified funding]

Funder priorities for this section: [what their guidelines say about organizational capacity]

Write an organizational capacity narrative that:
1. Demonstrates deep experience with this population and issue
2. Highlights specific, measurable past results
3. Shows the team has the expertise to deliver
4. Presents partnerships as genuine collaborations, not name-dropping
5. Addresses financial stability and sustainability
6. Connects your history directly to your readiness for this project
7. Avoids generic language - every claim is backed by a specific example

Length: 400-600 words.
Tone: Confident but not arrogant. Let the track record speak.`,
              result:
                'A compelling organizational capacity section that builds funder confidence in your ability to deliver.',
              tip: 'Keep a "boilerplate bank" of organizational capacity paragraphs. AI can customize the base version for each funder in minutes.',
            },
            {
              id: 'gw-p-2-3',
              title: 'Program Design Section',
              task: 'Write the program design and methodology section',
              prompt: `Write the program design section for a grant proposal.

Program: [name]
Problem being addressed: [brief - reference the needs statement]
Target population: [who, how many, how recruited]

Program design:
- Theory of change: [what you believe will create the change and why]
- Evidence base: [research or models this approach is based on]
- Key activities:
  1. [Activity 1] - [description, frequency, who delivers it]
  2. [Activity 2] - [description, frequency, who delivers it]
  3. [Activity 3] - [description, frequency, who delivers it]
- Timeline: [program duration and key phases]
- Dosage: [how much service each participant receives]

Innovation or unique approach: [what makes this different from standard approaches]
Cultural responsiveness: [how the program is designed to serve this specific community]
Participant recruitment and retention: [how you'll engage and keep participants]
Partnerships in implementation: [who else is involved and what they do]

Funder priorities: [specific things from the RFP about program design]

Write a program design section that:
1. Clearly connects the need to the solution (logical thread from needs statement)
2. Grounds the approach in evidence or proven models
3. Describes activities with enough detail that a reviewer can picture the program
4. Shows thoughtful cultural responsiveness, not tokenism
5. Addresses scalability or sustainability
6. Acknowledges potential challenges and how you'll address them
7. Uses the funder's language for program components where appropriate

Length: 600-800 words.
Tone: Clear, specific, and confident. Show you've thought this through deeply.`,
              result:
                'A detailed program design section that demonstrates a well-thought-out, evidence-based approach.',
              tip: 'Reviewers read dozens of proposals. Specificity is what stands out. "Weekly 90-minute group sessions for cohorts of 12" beats "regular programming for participants."',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Budget Narratives',
          prompts: [
            {
              id: 'gw-p-3-1',
              title: 'Budget Justification Section',
              task: 'Write budget justification narratives for each line item',
              prompt: `Write budget justification narratives for my grant proposal.

Grant amount requested: [total]
Program: [name and brief description]
Grant period: [start to end date]

Budget categories and line items:

Personnel:
- [Position 1]: [salary amount] - [% time on grant] - [total charged]
- [Position 2]: [salary amount] - [% time on grant] - [total charged]
- Fringe benefits: [rate %] - [total]

Contractual/Consultants:
- [Consultant/service]: [rate] x [hours/units] = [total]

Travel:
- [Purpose]: [# trips] x [cost per trip] = [total]

Supplies:
- [Category]: [description] - [total]

Equipment:
- [Item]: [cost] - [justification needed if over threshold]

Other:
- [Item 1]: [cost]
- [Item 2]: [cost]

Indirect costs: [rate %] - [total]

For each line item, write a justification that:
1. Explains what the cost is for (specifically)
2. Connects it to a program activity described in the narrative
3. Shows the cost is reasonable (how was the amount determined?)
4. Demonstrates it's necessary for program success
5. Uses calculation language funders expect (e.g., "$X per hour x Y hours = $Z")

Also provide:
- A cost-effectiveness statement (cost per participant or per outcome)
- A paragraph on how the budget reflects efficient use of funds

Keep each justification to 2-3 sentences. Clear, factual, and aligned with the narrative.`,
              result:
                'Complete budget justification narratives that connect every dollar to program outcomes.',
              tip: 'Every line item should trace back to a specific activity in your program design section. If you can\'t connect a cost to an activity, either the budget or the narrative needs revision.',
            },
            {
              id: 'gw-p-3-2',
              title: 'Multi-Year Budget Narrative',
              task: 'Write a budget narrative for a multi-year grant proposal',
              prompt: `Write a multi-year budget narrative for a grant proposal.

Program: [name]
Grant period: [total years]
Total request: [amount across all years]

Year-by-year budget:
Year 1: [amount] - Focus: [what this year is about - startup, pilot, etc.]
Year 2: [amount] - Focus: [what this year is about - expansion, full implementation, etc.]
Year 3: [amount] - Focus: [what this year is about - sustainability, scale, etc.]

Key budget changes across years:
- [What increases and why - e.g., "staff time increases as enrollment grows"]
- [What decreases and why - e.g., "startup equipment costs are Year 1 only"]
- [What stays the same and why]

Cost escalation assumptions:
- Salary increases: [% per year]
- Supply/material inflation: [% per year]
- Other assumptions: [any]

Sustainability plan:
- What happens after the grant ends?
- Other funding sources being pursued
- Revenue generation potential
- Cost reductions over time

Write a multi-year budget narrative that:
1. Tells the financial story of the program's growth
2. Explains why costs change from year to year
3. Shows the progression from startup to sustainability
4. Justifies cost escalation assumptions
5. Demonstrates fiscal responsibility and long-term thinking
6. Addresses the "what happens when the grant ends?" question proactively
7. Includes cost-per-participant-per-year calculations

Length: 500-700 words.
Tone: Strategic and transparent. Show you've planned beyond the grant period.`,
              result:
                'A strategic multi-year budget narrative that demonstrates financial planning and sustainability thinking.',
              tip: 'Funders worry about dependency. Address sustainability early and specifically. "We will seek continued funding" is weak. "Our earned revenue model will cover 60% of costs by Year 3" is strong.',
            },
            {
              id: 'gw-p-3-3',
              title: 'Matching Funds Documentation',
              task: 'Document matching funds and cost-sharing for a grant application',
              prompt: `Document matching funds and cost-sharing for a grant application.

Grant request: [amount]
Match requirement: [percentage or amount required]
Match type required: [cash only / cash and in-kind / any combination]

Cash match sources:
1. [Source] - Amount: [amount] - Status: [committed / pending / anticipated]
2. [Source] - Amount: [amount] - Status: [committed / pending / anticipated]

In-kind contributions:
1. [Description] - Valued at: [amount] - How calculated: [basis for valuation]
2. [Description] - Valued at: [amount] - How calculated: [basis for valuation]
3. [Description] - Valued at: [amount] - How calculated: [basis for valuation]

Volunteer time (if applicable):
- [Role]: [hours] x [rate] = [value]

Total match available: [amount]
Match ratio: [e.g., "1:1" or "25% of total project cost"]

Write a matching funds narrative that:
1. Clearly states total match amount and how it meets or exceeds the requirement
2. Details each source with commitment status
3. Explains how in-kind values were calculated (using appropriate rates)
4. Demonstrates organizational investment and community support
5. Shows match funds are directly relevant to the project, not unrelated overhead
6. Addresses any pending commitments with timeline for confirmation
7. Includes a match budget table: Source | Type | Amount | Status

Also create:
- A commitment letter template for each match source to sign
- A brief paragraph on how match demonstrates community buy-in

Keep the narrative under 400 words. Clear, specific, and confidence-building.`,
              result:
                'A complete matching funds package with narrative, documentation strategy, and commitment letter templates.',
              tip: 'Over-match when possible. Coming in at 35% when 25% is required signals organizational strength and community investment.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Impact Statements',
          prompts: [
            {
              id: 'gw-p-4-1',
              title: 'Logic Model',
              task: 'Build a logic model framework for a program',
              prompt: `Build a logic model for my program.

Program: [name and brief description]
Target population: [who the program serves]
Core problem: [what we're addressing]
Theory of change: [our belief about how change happens - even a rough version]

Program components:
1. [Activity/component 1] - [brief description]
2. [Activity/component 2] - [brief description]
3. [Activity/component 3] - [brief description]

Resources available:
- Staff: [key positions]
- Funding: [current sources]
- Facilities: [what you have]
- Partnerships: [key partners]

Build a logic model with:

1. Inputs (Resources):
   - What we invest in the program

2. Activities:
   - What we do with those resources

3. Outputs (Direct products):
   - The countable, immediate products of activities
   - Include specific numbers/targets where possible

4. Short-term outcomes (1-6 months):
   - Changes in knowledge, attitudes, skills, awareness

5. Medium-term outcomes (6-18 months):
   - Changes in behavior, practice, decision-making

6. Long-term outcomes / Impact (18+ months):
   - Changes in conditions, systems, community-level indicators

For each outcome level:
- State the outcome clearly and specifically
- Suggest 1-2 measurable indicators
- Identify a data source for measurement

Also include:
- Key assumptions underlying the model
- External factors that could influence results
- A narrative paragraph that walks through the logic chain in plain English

Format both as a visual table/flow and as a written narrative.`,
              result:
                'A complete logic model with measurable indicators and a narrative explanation of the change pathway.',
              tip: 'The best logic models tell a story you can walk someone through in 2 minutes. If you can\'t explain the chain verbally, simplify it.',
            },
            {
              id: 'gw-p-4-2',
              title: 'Evaluation Plan',
              task: 'Write an evaluation plan for a grant proposal',
              prompt: `Write an evaluation plan for a grant proposal.

Program: [name]
Program duration: [timeline]
Key outcomes from logic model:
1. [Outcome 1] - Indicator: [how measured]
2. [Outcome 2] - Indicator: [how measured]
3. [Outcome 3] - Indicator: [how measured]

Evaluation capacity:
- Who will lead evaluation: [internal staff / external evaluator / university partner]
- Data systems available: [what you currently use to track data]
- Budget for evaluation: [amount or percentage of total]

Funder requirements: [any specific evaluation expectations from the RFP]

Write an evaluation plan that includes:

1. Evaluation purpose and questions:
   - 3-4 key questions the evaluation will answer

2. Evaluation design:
   - Process evaluation (are we doing what we said we'd do?)
   - Outcome evaluation (is change happening?)
   - Methods: [surveys, interviews, pre/post tests, records review, etc.]

3. Data collection plan:
   - For each outcome: What data, collected how, from whom, how often
   - Data collection timeline aligned with program timeline

4. Data analysis approach:
   - How quantitative data will be analyzed
   - How qualitative data will be analyzed
   - How you'll determine if outcomes were achieved

5. Use of findings:
   - How evaluation results will inform program improvement
   - How results will be shared with stakeholders and the funder
   - Continuous improvement feedback loops

6. Evaluation timeline and milestones

Length: 500-700 words.
Tone: Rigorous but practical. Show you take measurement seriously without over-promising.`,
              result:
                'A thorough evaluation plan that demonstrates commitment to accountability and learning.',
              tip: 'Match your evaluation to your capacity. A realistic evaluation you actually implement impresses funders more than an ambitious one you can\'t execute.',
            },
            {
              id: 'gw-p-4-3',
              title: 'Impact Statement',
              task: 'Write a compelling impact statement connecting data to mission',
              prompt: `Write a compelling impact statement for [purpose: grant proposal / annual report / funder update / website].

Organization: [name]
Program: [name, if specific program]

Impact data:
- [Number] [people/families/youth/etc.] served in [time period]
- [Outcome 1]: [specific result with numbers - e.g., "87% of participants improved reading scores by 1+ grade level"]
- [Outcome 2]: [specific result with numbers]
- [Outcome 3]: [specific result with numbers]
- [Systemic impact, if any]: [e.g., "Policy change adopted by city council"]

Client story (optional):
[Brief story of one person/family whose life changed - I'll anonymize as needed]

Community context:
[Brief description of the community challenge these results address]

Write an impact statement that:
1. Leads with the most compelling outcome (not the number served)
2. Connects individual stories to data (qualitative + quantitative)
3. Shows progress toward the bigger mission, not just program outputs
4. Acknowledges remaining challenges honestly
5. Creates a sense of momentum - progress is real and accelerating
6. Uses active, human language - not "clients were served" but "families found stability"
7. Ends with a forward-looking vision statement

Length: 300-400 words.
Tone: Proud but grounded. Celebrate results without over-claiming.

Write 2 versions:
- Version 1: For a grant proposal (formal, evidence-focused)
- Version 2: For a website or annual report (narrative, accessible)`,
              result:
                'Two impact statement versions - one for proposals and one for general audiences - that make your results come alive.',
              tip: 'The best impact statements make the funder feel something. Lead with a human moment, support with data, close with vision.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Grant Reporting',
          prompts: [
            {
              id: 'gw-p-5-1',
              title: 'Progress Report Draft',
              task: 'Draft an interim or final progress report for a funder',
              prompt: `Draft a progress report for [funder name].

Grant details:
- Grant number/name: [ID]
- Program funded: [program name]
- Reporting period: [dates]
- Grant amount: [total]
- Amount spent this period: [amount]
- Report type: [interim / annual / final]

Progress against goals:
1. Goal: [stated goal from proposal]
   - Target: [what you said you'd achieve]
   - Actual: [what you actually achieved]
   - Status: [on track / ahead / behind / completed]
   - Explanation: [brief context]

2. Goal: [stated goal]
   - Target: [target]
   - Actual: [actual]
   - Status: [status]
   - Explanation: [context]

3. Goal: [stated goal]
   - Target: [target]
   - Actual: [actual]
   - Status: [status]
   - Explanation: [context]

Key accomplishments this period:
- [Accomplishment 1]
- [Accomplishment 2]
- [Accomplishment 3]

Challenges encountered:
- [Challenge 1] - How addressed: [what you did]
- [Challenge 2] - How addressed: [what you did]

Success story: [brief anecdote demonstrating impact]

Budget status: [on budget / under / over - with explanation]

Plans for next period: [what's coming]

Write a progress report that:
1. Opens with a confident summary of progress
2. Reports honestly on all goals - celebrate wins, explain gaps
3. Frames challenges as learning opportunities with solutions
4. Includes specific numbers and data, not vague statements
5. Tells at least one compelling story of impact
6. Shows good stewardship of funds
7. Ends with forward momentum - what's next
8. Follows a professional report structure with clear sections

Length: 600-800 words.
Tone: Transparent, professional, and forward-looking.`,
              result:
                'A complete progress report draft that satisfies funder requirements while showcasing your program\'s impact.',
              tip: 'Never hide bad news in a report. Funders respect honesty and problem-solving far more than unrealistic perfection. "We fell short on X, learned Y, and adjusted by doing Z" builds trust.',
            },
            {
              id: 'gw-p-5-2',
              title: 'Financial Report Narrative',
              task: 'Write the narrative section of a financial report for a grant',
              prompt: `Write the narrative section of a grant financial report.

Grant: [funder and program name]
Reporting period: [dates]
Total grant budget: [amount]
Total spent this period: [amount]
Total spent to date: [amount]
Remaining balance: [amount]

Budget vs. actual by category:
1. [Category] - Budgeted: [amount] - Spent: [amount] - Variance: [amount]
2. [Category] - Budgeted: [amount] - Spent: [amount] - Variance: [amount]
3. [Category] - Budgeted: [amount] - Spent: [amount] - Variance: [amount]
4. [Category] - Budgeted: [amount] - Spent: [amount] - Variance: [amount]

Significant variances to explain:
- [Variance 1]: Why it happened and what it means
- [Variance 2]: Why it happened and what it means

Budget modifications requested (if any):
- [Modification]: Moving [amount] from [category] to [category] because [reason]

Write a financial narrative that:
1. Summarizes overall spending status (on track, ahead, behind, adjusted)
2. Explains every variance over 10% in either direction
3. Connects spending patterns to program activities
4. Addresses any underspending (is the program behind schedule or being efficient?)
5. Explains any budget modification requests with clear rationale
6. Projects whether the grant will be fully expended by end date
7. Demonstrates responsible financial stewardship

Length: 300-400 words.
Tone: Transparent and precise. Numbers should match exactly. Explanations should be honest.`,
              result:
                'A clear financial narrative that explains spending patterns and demonstrates fiscal responsibility.',
              tip: 'Underspending worries funders as much as overspending. If you\'re behind on spending, proactively explain the timeline and plan to fully utilize funds.',
            },
            {
              id: 'gw-p-5-3',
              title: 'Final Grant Report',
              task: 'Write a comprehensive final report for a completed grant',
              prompt: `Write a comprehensive final grant report.

Grant details:
- Funder: [name]
- Program: [name]
- Grant period: [start to end]
- Total grant: [amount]
- Total spent: [amount]

Original goals and final results:
1. Goal: [stated] - Result: [achieved] - % of target: [X%]
2. Goal: [stated] - Result: [achieved] - % of target: [X%]
3. Goal: [stated] - Result: [achieved] - % of target: [X%]

Total people served: [number]
Total activities/sessions delivered: [number]

Top 3 accomplishments:
1. [Accomplishment with specific data]
2. [Accomplishment with specific data]
3. [Accomplishment with specific data]

Lessons learned:
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]

Sustainability:
- Will the program continue? [yes/no/modified]
- Funding secured for continuation: [sources and amounts]
- What has changed in the organization because of this grant: [lasting impact]

Best success story: [narrative about one person or outcome that captures the impact]

Write a final report that includes:
1. Executive summary (150 words)
2. Program overview and context
3. Goals, activities, and outcomes (detailed section with data)
4. Impact narrative - What difference did this grant make?
5. Lessons learned and adaptations
6. Financial summary with brief narrative
7. Sustainability plan and next steps
8. Acknowledgment of the funder's role in this impact
9. Appendix notes (data tables, testimonials, photos I'll add)

Length: 800-1000 words.
Tone: Reflective, grateful, and evidence-based. This is both a report and a relationship-builder for future funding.`,
              result:
                'A comprehensive final report that celebrates impact, demonstrates accountability, and positions you for future funding.',
              tip: 'The final report is your audition tape for the next grant. Treat it as both a close-out document and an investment in the future relationship.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Funder Relationships',
          prompts: [
            {
              id: 'gw-p-6-1',
              title: 'Thank-You and Update Letter',
              task: 'Write a funder thank-you letter with impact update',
              prompt: `Write a funder thank-you and impact update letter.

Funder: [name of foundation/organization]
Contact person: [program officer name, if known]
Grant received: [amount] for [program name]
Grant date: [when awarded]
Current program status: [early implementation / mid-grant / nearing completion]

Recent highlights to share:
- [Highlight 1 - specific accomplishment with data]
- [Highlight 2 - a story or milestone]
- [Highlight 3 - community response or media coverage]

A brief story: [one participant story that brings the impact to life]

Write a letter that:
1. Opens with genuine gratitude (not formulaic)
2. Provides a brief program update with specific results
3. Includes one compelling story that illustrates the impact
4. Connects results back to the funder's stated mission
5. Mentions something specific about why this funder's support matters (not just the money)
6. Closes with forward-looking excitement about what's next
7. Invites engagement: visit, event attendance, or a brief call

Length: 250-350 words.
Format: Professional letter format.
Tone: Warm, genuine, and specific. This should feel like a real update, not a form letter.

Also create a shorter email version (150 words) for a less formal touchpoint.`,
              result:
                'A personalized funder update letter and email that strengthens the relationship between grant cycles.',
              tip: 'Send unsolicited updates 2-3 times per year. Program officers remember the organizations that communicate proactively. When renewal time comes, you\'re not starting cold.',
            },
            {
              id: 'gw-p-6-2',
              title: 'Letter of Intent',
              task: 'Draft a Letter of Intent for a new grant opportunity',
              prompt: `Draft a Letter of Intent (LOI) for a new grant opportunity.

Funder: [name]
LOI deadline: [date]
Funder's focus areas: [what they fund and care about]
Grant range: [typical grant size]

Our organization: [name, type, brief mission]
The program: [what we want funded]
Amount requesting: [amount]
Program duration: [timeline]
Population served: [who and how many]
Geographic area: [where]

Key program elements:
- The need: [2-3 sentences on the problem]
- Our approach: [2-3 sentences on the solution]
- Expected outcomes: [2-3 specific outcomes]
- Why we're positioned to do this: [2-3 sentences on capacity]
- Budget overview: [total budget and what this grant would cover]

Write an LOI that:
1. Opens with a clear, compelling statement of what you're requesting and why
2. States the need concisely with 1-2 key data points
3. Describes the program approach clearly and specifically
4. Highlights organizational credibility in 2-3 sentences
5. Presents expected outcomes with measurable targets
6. Includes a brief budget summary
7. Closes with a strong statement of alignment with the funder's priorities
8. Is structured exactly as the funder requests (if they have a specific format)

Length: [funder's requirement, or 2 pages / 500-700 words if unspecified]
Tone: Confident, concise, and compelling. Every sentence should earn its place.

This is a first impression. Make every word count.`,
              result:
                'A tight, compelling Letter of Intent that earns an invitation to submit a full proposal.',
              tip: 'The LOI is a filter - funders use it to decide who gets invited to apply. Be specific and strategic. Generic LOIs get generic rejections.',
            },
            {
              id: 'gw-p-6-3',
              title: 'Funder Meeting Prep',
              task: 'Prepare for a meeting with a program officer or funder',
              prompt: `Help me prepare for a meeting with a funder.

Funder: [name]
Contact person: [name and title]
Meeting type: [introductory / cultivation / pre-application / site visit / check-in]
Date: [date]
Duration: [expected length]

Our relationship history:
- [Previous interactions, grants, conversations, if any]
- [How this meeting came about]

What I know about this funder:
- Their priorities: [key focus areas]
- Recent grants they've made: [any patterns or notable grants]
- Their giving style: [hands-on / hands-off / requires specific outcomes / etc.]

What I want from this meeting:
- Primary goal: [what you hope to walk away with]
- Secondary goal: [bonus outcome]

What I plan to present:
- Organization overview: [brief]
- Program/project: [what you want to discuss]
- Ask: [specific or just relationship-building]

Create a meeting prep package:

1. Talking points (5-7 key messages, prioritized):
   - Each point: the message, why it matters to this funder, supporting data

2. Questions to ask them (5-7):
   - Questions that demonstrate preparation and genuine interest
   - Questions that help you understand their priorities better
   - At least one question about their experience and perspective

3. Anticipated questions they'll ask me (5-7):
   - For each: the likely question and a strong, concise answer

4. Meeting flow recommendation:
   - How to open (first 2 minutes)
   - Key conversation arc
   - How to close and determine next steps

5. Follow-up plan:
   - What to send within 24 hours
   - What to send within 1 week

One page max for talking points. This is a conversation guide, not a script.`,
              result:
                'A complete meeting preparation package that helps you walk in confident and walk out with next steps.',
              tip: 'The best funder meetings feel like conversations, not presentations. Prepare thoroughly so you can be relaxed and genuine. The prep is invisible - the connection is what they remember.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s see what AI actually saves in a grant writer\'s workflow.',
      timeTable: [
        {
          task: 'Funder research',
          without: '2-3 days',
          withAI: '1-2 hours',
          saved: '1.5-2.5 days',
        },
        {
          task: 'Proposal narrative drafting',
          without: '15-25 hours',
          withAI: '6-10 hours',
          saved: '10-15 hours',
        },
        {
          task: 'Budget narratives',
          without: '3-5 hours',
          withAI: '30-45 minutes',
          saved: '3-4 hours',
        },
        {
          task: 'Impact statements and logic models',
          without: '3-4 hours',
          withAI: '45-60 minutes',
          saved: '2-3 hours',
        },
        {
          task: 'Grant reporting',
          without: '4-6 hours/report',
          withAI: '1-1.5 hours',
          saved: '3-4.5 hours',
        },
        {
          task: 'Funder communications',
          without: 'Rarely done',
          withAI: '2-3 hours/quarter',
          saved: 'Infinite - done',
        },
      ],
      totalRow: {
        task: 'Conservative total per proposal',
        without: '-',
        withAI: '-',
        saved: '15-25 hours',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'In 2026, grant writers using AI submit more applications, write stronger narratives, and maintain funder relationships that others let go cold. Same grant writing expertise, same mission alignment, same strategic thinking - just dramatically less time lost to blank pages and repetitive documentation.',
            'The gap isn\'t skill or passion. It\'s who adopted the tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a grant writer to format budgets and search databases. You did it because you believe in the missions you fund. AI gives you back the hours to focus on strategy, storytelling, and relationship-building - the things that actually win grants.',
          ],
        },
      ],
      keyInsight:
        'Start with one needs statement. See how fast AI turns your data points into a compelling narrative. That\'s the moment everything changes.',
    },

    ch7: {
      intro:
        'Seven days to transform your grant writing workflow. Follow the plan, check off each step, and see the results immediately.',
      days: [
        {
          day: 1,
          title: 'Get Set Up',
          duration: '15 min',
          items: [
            { id: 'gw-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'gw-1-2', label: 'Create a free Perplexity account for funder research' },
            { id: 'gw-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Research Funders',
          duration: '20 min',
          items: [
            {
              id: 'gw-2-1',
              label: 'Run the Funder Prospect List prompt for a program that needs funding',
            },
            {
              id: 'gw-2-2',
              label: 'Verify the top 5 results against actual funder websites',
            },
            {
              id: 'gw-2-3',
              label: 'Notice how long this would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Write a Needs Statement',
          duration: '20 min',
          items: [
            {
              id: 'gw-3-1',
              label: 'Run the Needs Statement prompt with real program data',
            },
            {
              id: 'gw-3-2',
              label: 'Refine the draft with your authentic voice and local knowledge',
            },
          ],
        },
        {
          day: 4,
          title: 'Build a Budget Narrative',
          duration: '20 min',
          items: [
            {
              id: 'gw-4-1',
              label: 'Run the Budget Justification prompt with a current or upcoming grant budget',
            },
            {
              id: 'gw-4-2',
              label: 'Review for accuracy - verify every number matches your spreadsheet',
            },
          ],
        },
        {
          day: 5,
          title: 'Create a Logic Model',
          duration: '25 min',
          items: [
            {
              id: 'gw-5-1',
              label: 'Run the Logic Model prompt for your flagship program',
            },
            {
              id: 'gw-5-2',
              label: 'Refine the outcomes and indicators based on what you can actually measure',
            },
            {
              id: 'gw-5-3',
              label: 'Save it as a foundation for future proposals',
            },
          ],
        },
        {
          day: 6,
          title: 'Draft a Report or LOI',
          duration: '25 min',
          items: [
            {
              id: 'gw-6-1',
              label: 'Run the Progress Report or Letter of Intent prompt for a real deadline',
            },
            {
              id: 'gw-6-2',
              label: 'Edit, polish, and submit or save for final review',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'gw-7-1',
              label: 'Review what you built this week - which system saved the most time?',
            },
            {
              id: 'gw-7-2',
              label: 'Pick 2-3 systems to integrate into your regular grant writing process',
            },
            {
              id: 'gw-7-3',
              label: 'Share this guide with a fellow grant writer or nonprofit colleague',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
