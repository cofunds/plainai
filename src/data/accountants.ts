import type { WorkbookData } from './types'

export const accountantsData = {
  professionId: 'accountants',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Accountants & CPAs',
  heroDescription:
    'Streamline tax research, client communications, financial analysis, and audit prep with practical AI tools, workflows, and prompts built specifically for accounting professionals.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 7 AM during tax season. You have 23 client returns in progress, 8 pending review, and 4 extension requests that need to go out this week. A client just emailed asking about the tax implications of selling a rental property - you know the answer involves Section 1031 and depreciation recapture, but writing a clear explanation they will actually understand takes 45 minutes. Your draft engagement letters for three new advisory clients have been sitting in your to-do list for two weeks.',
        'Between the compliance work, the client questions, the bookkeeping catch-ups, and the staff reviews, you barely have time to think about the advisory services you keep telling yourself you will build. Every client memo is written from scratch. Every financial analysis starts with a blank spreadsheet. Every audit prep checklist gets rebuilt because last year\'s version is outdated.',
        'You did not become a CPA to spend your days reformatting workpapers and writing the same client email for the fifteenth time. You have deep expertise - in tax planning, in financial analysis, in business advisory. But the administrative weight of the profession keeps pulling you back into document production instead of client strategy.',
      ],
      highlight:
        'What if AI handled the first draft of every memo, every analysis, and every client communication - so you could focus on the advisory work that clients actually value?',
      closingParagraph:
        'Not replacing your professional judgment. Not signing off on returns. Just eliminating the hours of blank-page-to-first-draft work that keeps you stuck in production mode instead of advisory mode.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not preparing tax returns. It is not making judgment calls about revenue recognition. It is not auditing financial statements or signing engagement letters. The professional expertise, ethical obligations, and regulatory knowledge that define the accounting profession - AI does not replace any of that. Every output needs your review, your judgment, and your professional stamp.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most knowledgeable staff accountant you have ever worked with - one who reads tax code updates overnight, drafts client memos in 60 seconds, and never forgets a step on a checklist. This staff accountant has studied thousands of engagement letters, audit procedures, financial analyses, and client communications. The first draft appears instantly. Your job is to review, refine, and apply professional judgment.',
            'Need to research the tax implications of a complex transaction? AI gives you a structured summary with relevant code sections in 2 minutes. Need a client-friendly explanation of their financial statements? First draft in 90 seconds. Need an audit prep checklist tailored to a specific client? Done before you finish your morning coffee.',
            'The key principle: AI drafts, you decide. Every output is a starting point that needs your expertise to become final work product.',
          ],
        },
      ],
      keyInsight:
        'Your professional expertise + AI\'s drafting speed = more time for advisory, less time on document production. The accountant who uses AI for first drafts spends their time on judgment and strategy instead of formatting and rewriting.',
    },

    ch3: {
      intro: 'Five tools that cover the core needs of modern accounting professionals.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and analysis engine',
          description:
            'Client memos, tax scenario summaries, engagement letters, financial analysis narratives, email drafts - any text-based accounting task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-document specialist',
          description:
            'Detailed tax research summaries, complex engagement letters, audit documentation, multi-page client reports - excels at accuracy and nuance in longer content',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed work',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your tax and regulatory research assistant',
          description:
            'Tax code lookups, regulatory updates, industry benchmarking, salary surveys, IRS guidance - all with cited sources you can verify',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your practice management knowledge base',
          description:
            'Client files, engagement tracking, procedure templates, staff training materials, practice documentation - organized and searchable',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize your practice',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your client presentation builder',
          description:
            'Advisory reports, financial summaries, tax planning visuals, client-facing presentations - professional design without a graphic designer',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Elevate client deliverables',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting everything. Add Perplexity when you need research with verifiable sources. Notion AI and Canva come in when you are ready to organize your practice and elevate client presentations.',
    },

    ch4: {
      intro:
        'Here is where AI fits into your actual accounting workflows. Click each system to see the before, after, and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Tax Research and Planning',
          before:
            'A client asks about the tax implications of a complex transaction. You spend 45 minutes searching the IRC, reading IRS publications, checking recent rulings, and cross-referencing with your tax software. Then you spend another 30 minutes writing a memo explaining it in plain English so the client actually understands.',
          after:
            'You describe the transaction to AI and get a structured summary - relevant code sections, key considerations, potential strategies, and plain-language explanations. Your 75-minute research-and-write process becomes a 15-minute review-and-refine process. The memo to the client is clear, thorough, and done before lunch.',
          flow: [
            'Describe the client scenario and the specific tax question',
            'AI generates a research summary with relevant code sections',
            'Review the analysis for accuracy against your knowledge and current guidance',
            'AI drafts a client-friendly explanation of the findings',
            'Refine, apply your professional judgment, and send',
          ],
          timeSaved: { without: '1-2 hours/question', withAI: '15-20 minutes' },
        },
        {
          id: 2,
          name: 'Client Memo and Advisory Writing',
          before:
            'Every client memo starts from scratch or from a template that is three years old. You write the same explanations repeatedly - depreciation rules, estimated tax payments, entity selection considerations. Each memo takes 30-60 minutes because you want the language to be precise, clear, and client-appropriate.',
          after:
            'AI drafts client memos tailored to the specific situation - with the right level of technical detail for each audience. The partner gets the detailed analysis. The small business owner gets the plain-English version. First drafts appear in 90 seconds instead of 45 minutes.',
          flow: [
            'Input the client context, topic, and audience (technical vs. plain language)',
            'AI generates a structured memo with appropriate detail level',
            'Review for technical accuracy and client-specific nuances',
            'Adjust tone and add personal recommendations',
            'Save the template for similar future situations',
          ],
          timeSaved: { without: '30-60 min/memo', withAI: '10 minutes' },
        },
        {
          id: 3,
          name: 'Financial Statement Analysis',
          before:
            'You pull the financial statements, open a calculator, and start computing ratios one by one. Then you write a narrative explaining what the numbers mean - current ratio, debt-to-equity, profit margins, trend analysis. The whole process takes 2-3 hours per client. For monthly advisory clients, it is a recurring time sink.',
          after:
            'You input the key financial data and AI generates a complete analysis - ratios computed, trends identified, and narrative explanations written in language appropriate for the client. The 2-hour analysis becomes a 20-minute review-and-customize process.',
          flow: [
            'Input key financial statement data (or describe the business and its numbers)',
            'AI computes relevant ratios and identifies trends',
            'AI drafts a narrative analysis explaining what the numbers mean',
            'Review for accuracy and add your professional insights',
            'Format into a client-ready report',
          ],
          timeSaved: { without: '2-3 hours/client', withAI: '20-30 minutes' },
        },
        {
          id: 4,
          name: 'Audit Preparation',
          before:
            'Audit prep means rebuilding checklists, gathering documentation, reviewing prior-year workpapers, and making sure nothing falls through the cracks. The prep phase alone takes days. Every engagement feels like you are reinventing the process from scratch because last year\'s checklist was informal and incomplete.',
          after:
            'AI generates comprehensive audit prep checklists tailored to the client type and engagement. It identifies documentation requirements, suggests testing procedures, and creates a structured timeline. Your prep time drops from days to hours.',
          flow: [
            'Input the client type, industry, engagement scope, and prior-year issues',
            'AI generates a tailored audit preparation checklist',
            'AI suggests specific testing procedures and documentation requirements',
            'Review and adjust based on your knowledge of the client',
            'Use as a living document throughout the engagement',
          ],
          timeSaved: { without: '2-3 days/engagement', withAI: '3-4 hours' },
        },
        {
          id: 5,
          name: 'Bookkeeping Workflow Optimization',
          before:
            'You or your team spend hours each month on reconciliations, categorizations, and catch-up bookkeeping. The procedures are in your head. When a new staff member takes over a client, the transition takes weeks because nothing is documented. Errors get caught during review instead of being prevented by process.',
          after:
            'AI helps you build standardized bookkeeping procedures, reconciliation checklists, and quality control steps. It creates documentation that new staff can follow independently. The focus shifts from catching errors after the fact to preventing them with better processes.',
          flow: [
            'Describe your current bookkeeping workflow for a client type',
            'AI generates a standardized procedure with quality checkpoints',
            'AI creates reconciliation checklists with common error flags',
            'Review and customize for specific client needs',
            'Store procedures in Notion for team access and training',
          ],
          timeSaved: { without: 'Ad hoc, error-prone', withAI: '30 min to systematize' },
        },
        {
          id: 6,
          name: 'Client Communication',
          before:
            'You write every client email from scratch. The quarterly update, the document request, the engagement letter follow-up, the "your extension has been filed" notification. Each one takes 15-30 minutes because the tone needs to be professional, clear, and sometimes delicate. Multiply by 50 clients and communication eats your entire week.',
          after:
            'AI drafts client communications tailored to the situation and the client relationship. From quarterly financial summaries to sensitive billing conversations, first drafts appear in seconds. You review, personalize, and send in the time it used to take to write the opening paragraph.',
          flow: [
            'Define the communication type, client context, and key message',
            'AI generates a draft with appropriate tone and structure',
            'Review and add client-specific details and personal touches',
            'Send and save the template for future similar communications',
            'Build a library of templates for recurring communications',
          ],
          timeSaved: { without: '15-30 min/email', withAI: '3-5 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste prompts for every core accounting workflow. Click to reveal, then hit Copy. Fill in the brackets with your details. Always review AI output for technical accuracy before using.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Tax Research and Planning',
          prompts: [
            {
              id: 'ac-p-1-1',
              title: 'Tax Scenario Analysis',
              task: 'Analyze the tax implications of a client scenario',
              prompt: `Analyze the tax implications of this scenario:

Client type: [individual / partnership / S-corp / C-corp / trust]
State: [state]
Tax year: [year]
Filing status (if individual): [status]
Approximate income level: [range]

Scenario:
[Describe the transaction, event, or planning question in detail]

Provide:
1. Relevant IRC sections and regulations that apply
2. Federal tax implications:
   - Income recognition and timing
   - Applicable deductions or credits
   - Capital gains considerations (if applicable)
   - AMT implications (if relevant)
3. State tax considerations for [state]
4. Key planning opportunities:
   - Strategies to minimize tax liability legally
   - Timing considerations
   - Entity structure implications
5. Common pitfalls to watch for
6. Documentation requirements
7. A plain-language summary I can share with the client (3-4 paragraphs, no jargon)

Important: This is for research and drafting purposes. Flag any areas where recent legislation, rulings, or guidance may have changed the analysis. I will verify all code sections and apply my professional judgment before advising the client.`,
              result:
                'A structured tax research summary that cuts your analysis time by 70% while maintaining thoroughness.',
              tip: 'Always verify code sections and check for recent updates. AI is excellent for structuring the analysis but may not reflect the most recent IRS guidance or court rulings.',
            },
            {
              id: 'ac-p-1-2',
              title: 'Tax Planning Strategy Memo',
              task: 'Draft a tax planning strategy for a client',
              prompt: `Draft a tax planning strategy memo for this client:

Client: [name or description]
Entity type: [individual / business type]
Current year estimated income: [range]
Prior year tax liability: [amount]
State: [state]
Key financial events this year: [list - e.g., property sale, business expansion, retirement distributions]
Client goals: [minimize current year taxes / plan for succession / optimize entity structure / etc.]

Generate a strategy memo with:

1. Current situation summary (2-3 paragraphs):
   - Key facts affecting tax position
   - Estimated tax liability under current plan

2. Recommended strategies (3-5 strategies):
   For each strategy:
   - What it is (plain language)
   - How it works (technical summary)
   - Estimated tax savings
   - Implementation steps
   - Deadline for implementation
   - Risks or limitations

3. Comparison table:
   - Current projected liability vs. liability after each strategy
   - Net savings from implementing all recommendations

4. Action items:
   - What the client needs to do (with deadlines)
   - What we need to do (with timeline)
   - Documents or information needed from the client

5. Disclaimers:
   - Standard language about estimates and assumptions
   - Note that this is planning guidance, not a guarantee

Write the memo at two levels:
- Section for the client: plain language, focused on action and outcomes
- Section for our file: technical detail with code references

Make it professional, clear, and actionable.`,
              result:
                'A comprehensive planning memo that demonstrates advisory value and drives client action.',
              tip: 'Send the client-facing section first to drive the conversation. Keep the technical section in the file for documentation and staff reference.',
            },
            {
              id: 'ac-p-1-3',
              title: 'Entity Selection Analysis',
              task: 'Compare entity types for a client starting or restructuring a business',
              prompt: `Analyze entity options for this client:

Client: [name or description]
Business type: [what the business does]
Expected annual revenue: [range]
Expected annual net income: [range]
Number of owners: [number]
State of formation: [state]
Key considerations:
- Self-employment tax concerns: [yes/no]
- Plans to raise outside investment: [yes/no]
- Plans to distribute profits regularly: [yes/no]
- Liability protection importance: [high/medium/low]
- Succession or exit plans: [if any]

Compare these entity types:
1. Sole Proprietorship / Single-Member LLC (disregarded)
2. Partnership / Multi-Member LLC
3. S-Corporation
4. C-Corporation

For each entity:
- Tax treatment summary
- Self-employment tax impact
- Estimated annual tax liability (use the income figures provided)
- Flexibility for growth and investors
- Compliance requirements and costs
- Pros and cons specific to this client's situation

Recommendation:
- Best fit entity with reasoning
- Implementation steps and timeline
- Estimated cost of formation and ongoing compliance
- When to revisit this decision (triggers for re-evaluation)

Format as a comparison table followed by a recommendation narrative. Make the client-facing sections free of jargon.`,
              result:
                'A clear entity comparison that helps clients make informed decisions about business structure.',
              tip: 'Include the estimated tax difference between the top two options. Clients make decisions faster when they see the dollar impact side by side.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Client Memo and Advisory Writing',
          prompts: [
            {
              id: 'ac-p-2-1',
              title: 'Engagement Letter',
              task: 'Draft a client engagement letter for accounting services',
              prompt: `Draft an engagement letter for:

Firm name: [your firm]
Client name: [client name]
Client type: [individual / business / nonprofit]

Services to be provided:
1. [Service 1 - e.g., annual tax preparation (1040 with Schedules C, D, E)]
2. [Service 2 - e.g., quarterly estimated tax calculations]
3. [Service 3 - e.g., monthly bookkeeping]
4. [Service 4 - e.g., annual financial statement compilation]

Fee structure:
- Fixed fee: [amount] for [services], OR
- Hourly rate: [rate] for [services]
- Payment terms: [net 30 / due upon completion / monthly retainer]

Engagement period: [dates]

Include these sections:
1. Services scope - exactly what is included (and what is NOT included)
2. Client responsibilities - documents and information they must provide, and deadlines
3. Firm responsibilities - what we commit to delivering and when
4. Fee schedule and payment terms
5. Communication expectations (how we communicate, expected response times)
6. Limitation of liability and disclaimers
7. Confidentiality and data security statement
8. Termination clause
9. Signature and acceptance lines

Tone: professional and clear. The client should understand exactly what they are getting, what it costs, and what is expected of them.

Flag any sections that should be reviewed by legal counsel for state-specific requirements.`,
              result:
                'A professional engagement letter that sets clear expectations and protects both parties.',
              tip: 'Update your engagement letter template at the start of each year. Fee structures, service scopes, and liability language should reflect current practice standards.',
            },
            {
              id: 'ac-p-2-2',
              title: 'Advisory Report for Business Client',
              task: 'Write a financial advisory report for a business client',
              prompt: `Write a financial advisory report for:

Client: [business name]
Industry: [industry]
Report period: [month/quarter/year]
Client relationship level: [new / established / long-term]
Audience: [owner only / owner and partners / board / external stakeholders]

Financial highlights:
- Revenue: [amount] (prior period: [amount])
- Net income: [amount] (prior period: [amount])
- Cash position: [amount]
- Accounts receivable aging: [summary]
- Key expenses of note: [any significant variances]

Issues or opportunities to address:
1. [Issue 1 - e.g., rising COGS, declining margins]
2. [Issue 2 - e.g., cash flow timing, AR collections]
3. [Issue 3 - e.g., tax planning opportunity, expansion considerations]

Generate the advisory report:

1. Executive summary (3-4 sentences - the "so what" of this period)
2. Financial performance review:
   - Revenue analysis with trends
   - Profitability analysis
   - Cash flow assessment
   - Key ratio highlights (relevant to their industry)
3. Observations and concerns:
   - What the numbers are telling us
   - Early warning signals (if any)
   - Comparison to industry benchmarks (where available)
4. Recommendations (3-5 specific, actionable items):
   - What to do, why, and expected impact
   - Priority ranking
   - Timeline for action
5. Looking ahead:
   - What to watch next period
   - Upcoming deadlines or planning opportunities

Write at the appropriate level for the audience. Business owners want insights and actions, not accounting jargon.`,
              result:
                'An advisory report that demonstrates the value of proactive accounting beyond compliance.',
              tip: 'The executive summary is the only section many clients read. Make it sharp, specific, and action-oriented. If they read nothing else, they should know the three most important things.',
            },
            {
              id: 'ac-p-2-3',
              title: 'Client FAQ Document',
              task: 'Create a FAQ document for common client questions',
              prompt: `Create a FAQ document for my accounting clients:

Firm type: [tax-focused / full-service / advisory / bookkeeping]
Client mix: [individuals / small businesses / both]
Most common client questions I answer repeatedly:
1. [Question 1 - e.g., "When are estimated taxes due?"]
2. [Question 2 - e.g., "What expenses can I deduct?"]
3. [Question 3 - e.g., "Should I be an LLC or S-Corp?"]
4. [Question 4 - e.g., "What documents do I need for tax prep?"]
5. [Question 5 - e.g., "Why is my tax bill higher this year?"]

Generate a comprehensive FAQ document:

For each question:
- Clear, plain-language answer (no jargon - explain as if talking to someone with zero accounting knowledge)
- A brief example or scenario that illustrates the answer
- A "when to call us" note (situations where generic guidance is not enough)

Additional FAQ sections to include:
- Tax deadlines and extensions (current year)
- Document checklist for tax preparation
- How our billing works (explain fees in a friendly way)
- How to reach us and expected response times
- What to do if you receive an IRS notice

Format with clear headers and short paragraphs. This should be something I can send to every client at the start of the year and link from my website.

Include a note at the top: "This is general guidance. Your specific situation may differ. Contact us for personalized advice."`,
              result:
                'A client-facing FAQ that reduces repetitive questions and demonstrates your expertise.',
              tip: 'Add this to your client portal and reference it in your engagement letter. Clients who read the FAQ ask better questions and come more prepared.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Financial Statement Analysis',
          prompts: [
            {
              id: 'ac-p-3-1',
              title: 'Financial Ratio Analysis Narrative',
              task: 'Generate a ratio analysis with plain-language explanations',
              prompt: `Perform a financial ratio analysis and write a narrative report:

Company: [name]
Industry: [industry]
Period: [month/quarter/year]

Financial data:
Revenue: [amount]
Cost of goods sold: [amount]
Gross profit: [amount]
Operating expenses: [amount]
Net income: [amount]
Total assets: [amount]
Total liabilities: [amount]
Total equity: [amount]
Current assets: [amount]
Current liabilities: [amount]
Cash: [amount]
Accounts receivable: [amount]
Inventory: [amount, if applicable]

Prior period comparison:
[Provide same data points for prior period, or say "not available"]

Calculate and explain:
1. Profitability ratios:
   - Gross profit margin
   - Net profit margin
   - Return on assets
   - Return on equity

2. Liquidity ratios:
   - Current ratio
   - Quick ratio
   - Cash ratio

3. Efficiency ratios:
   - Accounts receivable turnover and days sales outstanding
   - Inventory turnover (if applicable)
   - Asset turnover

4. Leverage ratios:
   - Debt-to-equity ratio
   - Debt-to-assets ratio

For each ratio:
- The calculated number
- What it means in plain English
- Whether it is healthy (compare to general industry benchmarks)
- Trend direction (if prior period data provided)

Write a narrative summary (1 page) suitable for a business owner:
- What is going well
- What needs attention
- 3 specific recommendations based on the numbers

Include a note about limitations of ratio analysis and that industry-specific benchmarks should be verified.`,
              result:
                'A complete ratio analysis with explanations that clients can actually understand and act on.',
              tip: 'Build a template with your most common client types. Once you have the framework, updating it monthly takes 10 minutes instead of starting from scratch.',
            },
            {
              id: 'ac-p-3-2',
              title: 'Variance Analysis Report',
              task: 'Explain budget-to-actual variances for a client',
              prompt: `Write a variance analysis report:

Company: [name]
Period: [month/quarter]

Budget vs. Actual:
Revenue: Budget [amount] vs. Actual [amount]
COGS: Budget [amount] vs. Actual [amount]
Payroll: Budget [amount] vs. Actual [amount]
Rent/occupancy: Budget [amount] vs. Actual [amount]
Marketing: Budget [amount] vs. Actual [amount]
[Add other significant line items]
Net income: Budget [amount] vs. Actual [amount]

Known factors:
[List anything you already know about why variances occurred - e.g., "lost a major client," "hired 2 new employees," "ran a promotional campaign"]

Generate:
1. Variance summary table:
   - Line item, budget, actual, variance ($), variance (%)
   - Flag significant variances (over 10% or a material dollar threshold)

2. For each significant variance:
   - Likely cause (based on the known factors and common business patterns)
   - Whether it is a one-time event or a trend to watch
   - Impact on year-end projections
   - Recommended action (if any)

3. Overall assessment:
   - Is the business performing above, at, or below plan?
   - What are the 2-3 most important takeaways?
   - Do any variances require immediate action?

4. Questions to ask the client:
   - 3-5 specific questions about unexplained variances
   - These should help you get the information needed for a complete picture

Write the report for a business owner who wants to understand their numbers, not an accountant. Use clear, direct language.`,
              result:
                'A variance report that turns raw numbers into actionable insights for the client.',
              tip: 'Send variance reports with specific questions for the client. It turns a one-way report into a two-way conversation and positions you as a strategic advisor.',
            },
            {
              id: 'ac-p-3-3',
              title: 'Cash Flow Analysis and Forecast',
              task: 'Analyze cash flow and project future cash position',
              prompt: `Analyze cash flow and create a forecast:

Company: [name]
Industry: [industry]
Current cash position: [amount]
Monthly revenue (average): [amount]
Monthly expenses (average): [amount]

Cash flow details:
- Average collection period: [days]
- Average payment terms to vendors: [days]
- Upcoming large expenses: [list with amounts and timing]
- Seasonal patterns: [describe any seasonality]
- Outstanding receivables: [total and aging summary]
- Outstanding payables: [total and aging summary]

Generate:
1. Current cash flow assessment:
   - Cash flow from operations analysis
   - Working capital position
   - Key cash flow drivers (what is helping and what is hurting)
   - Cash burn rate and runway (if applicable)

2. 6-month cash flow projection:
   - Month-by-month forecast with assumptions stated
   - Highlight any months where cash may be tight
   - Identify the minimum cash reserve needed

3. Cash management recommendations:
   - Quick wins for improving cash flow (AR collection, AP timing)
   - Medium-term strategies (pricing, payment terms, expense management)
   - Warning signs to monitor monthly

4. Scenario analysis:
   - Best case: what happens if revenue grows 10%
   - Base case: current trajectory
   - Worst case: what happens if a major client delays payment or revenue drops 15%

5. Client summary (1 paragraph):
   - Where they stand, what to watch, and the single most important action

Write this for a business owner who understands their business but not financial modeling.`,
              result:
                'A cash flow analysis and forecast that helps clients manage their most critical asset: cash.',
              tip: 'Cash flow forecasts are the single best tool for converting compliance clients into advisory clients. When you help a business avoid a cash crunch, they never forget it.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Audit Preparation',
          prompts: [
            {
              id: 'ac-p-4-1',
              title: 'Audit Preparation Checklist',
              task: 'Generate a tailored audit prep checklist for a client',
              prompt: `Create an audit preparation checklist for:

Client: [name]
Entity type: [corporation / partnership / nonprofit / government]
Industry: [industry]
Audit type: [financial statement audit / compliance audit / review / compilation]
Fiscal year end: [date]
Accounting framework: [GAAP / IFRS / tax basis / cash basis]
Prior year issues: [list any findings, adjustments, or management letter points from last year]

Staff assigned: [names and experience levels]
Planned fieldwork dates: [date range]

Generate a comprehensive checklist:

1. Pre-engagement phase:
   - Engagement letter confirmation
   - Independence documentation
   - Prior year file review tasks
   - Planning meeting agenda items

2. Planning phase:
   - Risk assessment procedures
   - Materiality calculations
   - Internal control evaluation areas
   - Analytical procedures to perform

3. Documentation requests for the client:
   - Complete list of documents needed (organized by financial statement area)
   - Deadlines for each document
   - Format preferences
   - A client-ready version of this request list

4. Testing procedures by area:
   - Cash and bank reconciliations
   - Accounts receivable (confirmations, aging, allowance)
   - Inventory (observation, valuation, cutoff)
   - Fixed assets (additions, disposals, depreciation)
   - Accounts payable and accrued liabilities
   - Revenue recognition
   - Payroll and benefits
   - [Add any industry-specific areas]

5. Completion phase:
   - Subsequent events review
   - Going concern evaluation
   - Management representation letter
   - Financial statement review checklist
   - Report drafting timeline

6. Quality control:
   - Review checkpoints by staff level
   - Common errors to watch for in this industry
   - Prior year issues requiring follow-up

Format as a checklist with assignee and deadline columns. Make it usable as a living tracking document.`,
              result:
                'A comprehensive, reusable audit checklist that ensures nothing falls through the cracks.',
              tip: 'Customize this once per client type (nonprofit, small business, etc.) and reuse it. Update annually based on new standards and prior-year lessons.',
            },
            {
              id: 'ac-p-4-2',
              title: 'Audit Client Document Request',
              task: 'Generate a professional document request list for an audit client',
              prompt: `Generate an audit document request list for:

Client: [name]
Entity type: [type]
Fiscal year: [year]
Audit scope: [full financial statement audit / specific area]
Industry-specific items: [any unique documentation needs]

Create a professional document request organized by category:

General:
- Financial statements (trial balance, general ledger, supporting schedules)
- Minutes of board meetings and shareholder meetings
- Contracts and agreements (new or modified during the year)
- Insurance policies
- Legal correspondence

Cash and investments:
- Bank statements and reconciliations (all accounts, year-end)
- Investment statements
- Debt agreements and amortization schedules

Receivables and revenue:
- Aged accounts receivable listing
- Revenue detail by month and product/service line
- Sales contracts for significant new customers

Payables and expenses:
- Aged accounts payable listing
- Credit card statements (year-end)
- Expense reports over [threshold]

Payroll:
- Payroll registers
- W-2 summaries
- Benefits documentation

Fixed assets:
- Fixed asset listing with additions and disposals
- Lease agreements (new or modified)

Tax:
- Prior year tax returns
- Estimated tax payment records
- Tax notices received

For each item:
- Clear description of what is needed
- Format preference (PDF, Excel, access to system)
- Deadline for submission
- Priority level (critical / important / if available)

Include a cover letter to the client that:
- Explains the purpose of the request
- Sets the timeline
- Identifies the primary contact for questions
- Thanks them in advance

Professional but friendly tone. This is the first communication that sets the tone for the engagement.`,
              result:
                'A thorough, organized document request that minimizes back-and-forth during fieldwork.',
              tip: 'Send this request 4-6 weeks before fieldwork begins. Follow up at 2 weeks and 1 week. Clients who prepare early make the audit faster for everyone.',
            },
            {
              id: 'ac-p-4-3',
              title: 'Management Letter Points',
              task: 'Draft management letter observations and recommendations',
              prompt: `Draft management letter points for:

Client: [name]
Audit period: [year]
Entity type: [type]

Issues identified during the audit:
1. [Issue 1 - describe the finding]
   - Severity: [material weakness / significant deficiency / other matter]
   - Financial statement area affected: [area]

2. [Issue 2 - describe the finding]
   - Severity: [level]
   - Financial statement area affected: [area]

3. [Issue 3 - describe the finding]
   - Severity: [level]
   - Financial statement area affected: [area]

Prior year issues still outstanding:
[List any repeat findings]

For each finding, generate:

1. Condition:
   - What we observed (factual, specific)

2. Criteria:
   - What should be happening (the standard or best practice)

3. Cause:
   - Why the condition exists (root cause, not symptoms)

4. Effect:
   - The impact or potential impact on the financial statements or operations

5. Recommendation:
   - Specific, actionable steps to remediate
   - Timeline for implementation
   - Resources needed

6. Management response section (leave blank for client to complete)

Also generate:
- An executive summary for the board or ownership (1 paragraph per finding, non-technical)
- A prioritized action plan showing all findings ranked by severity
- A comparison to prior year (which issues are new, which are repeat, which are resolved)

Write in a professional but constructive tone. The goal is to help the client improve, not to lecture them.`,
              result:
                'Well-structured management letter points that drive real improvements in client operations.',
              tip: 'Present findings in person before sending the written letter. Walk through each point, explain the impact, and discuss the recommendations. It shows you care about their success, not just checking boxes.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Bookkeeping Workflow Optimization',
          prompts: [
            {
              id: 'ac-p-5-1',
              title: 'Reconciliation Procedure',
              task: 'Create a standardized reconciliation procedure',
              prompt: `Create a standardized reconciliation procedure for:

Account type: [bank account / credit card / AR sub-ledger / AP sub-ledger / intercompany / payroll]
Client: [name or client type - e.g., "small business with 3 bank accounts"]
Accounting software: [QuickBooks / Xero / Sage / NetSuite / other]
Frequency: [monthly / weekly]
Who performs: [staff level - junior bookkeeper / senior bookkeeper / accountant]

Generate a complete reconciliation procedure:

1. Preparation checklist:
   - Documents and reports to gather before starting
   - System access needed
   - Prior period reconciliation to reference

2. Step-by-step reconciliation process:
   - Numbered steps with clear, specific instructions
   - Screenshots-level detail (someone new should be able to follow this)
   - Where to find each report in [accounting software]
   - How to handle common discrepancies

3. Common issues and how to resolve them:
   - Timing differences
   - Missing transactions
   - Duplicate entries
   - Unrecorded fees or charges
   - Foreign currency differences (if applicable)

4. Quality control checkpoints:
   - What to verify before marking complete
   - Red flags that require escalation
   - Tolerance thresholds for immaterial differences

5. Documentation requirements:
   - What to save and where
   - How to note resolved items
   - Sign-off process

6. Troubleshooting guide:
   - "If the reconciliation does not balance" - step-by-step resolution
   - When to stop trying and escalate

Format as a procedure document a new team member can follow on Day 1.`,
              result:
                'A standardized reconciliation procedure that ensures consistency and catches errors early.',
              tip: 'Have a staff member follow the procedure while you watch. Every step they get confused about needs clearer instructions. The procedure is not done until someone new can complete it without asking questions.',
            },
            {
              id: 'ac-p-5-2',
              title: 'Month-End Close Checklist',
              task: 'Build a month-end close checklist for a client',
              prompt: `Create a month-end close checklist for:

Client: [name or type]
Entity type: [type]
Industry: [industry]
Accounting software: [software]
Number of bank accounts: [number]
Number of credit cards: [number]
Payroll frequency: [weekly / bi-weekly / semi-monthly / monthly]
Sales tax: [yes/no, states if yes]
Inventory: [yes/no]

Generate a day-by-day close schedule (assuming 5 business days to close):

Day 1 - Data gathering:
- Reports to pull
- Statements to download
- Cut-off procedures

Day 2 - Reconciliations:
- Bank reconciliations
- Credit card reconciliations
- AR and AP reconciliations
- Intercompany reconciliations (if applicable)

Day 3 - Adjustments and accruals:
- Standard monthly journal entries
- Depreciation and amortization
- Prepaid expense amortization
- Accrued expenses
- Revenue recognition adjustments
- Inventory adjustments (if applicable)

Day 4 - Review and analysis:
- Trial balance review
- Unusual balance investigation
- Month-over-month variance review
- Budget-to-actual comparison
- Sales tax reconciliation and filing prep

Day 5 - Finalize and report:
- Final trial balance
- Financial statement preparation
- Management report preparation
- File documentation
- Communicate completion to client

For each task:
- Assigned to (role/person)
- Estimated time
- Dependencies (what must be done first)
- Status checkbox

Include a "close quality score" checklist at the end - 10 yes/no questions to validate the close is complete and accurate.`,
              result:
                'A structured close process that gets books closed in 5 days, consistently.',
              tip: 'Track how long each step takes for the first 3 months. You will find bottlenecks you did not know existed. Optimizing the slowest step improves the entire close cycle.',
            },
            {
              id: 'ac-p-5-3',
              title: 'Chart of Accounts Review',
              task: 'Audit and optimize a client\'s chart of accounts',
              prompt: `Review and optimize this chart of accounts:

Client: [name]
Industry: [industry]
Entity type: [type]
Accounting software: [software]
Number of current accounts: [approximate]
Primary issue: [too many accounts / inconsistent naming / missing key accounts / needs restructuring for growth]

Current chart of accounts:
[Paste the current chart of accounts or describe the structure]

Generate:
1. Assessment:
   - Redundant or duplicate accounts that should be merged
   - Missing accounts that are standard for this industry
   - Accounts that are misclassified (e.g., asset listed as expense)
   - Naming inconsistencies to fix

2. Recommended optimized chart of accounts:
   - Standard numbering system (with room for growth)
   - Clear, consistent naming conventions
   - Organized by: Assets, Liabilities, Equity, Revenue, COGS, Operating Expenses, Other Income/Expense
   - Sub-accounts where appropriate for detailed tracking without clutter
   - Department or location tags (if multi-division)

3. Mapping document:
   - Old account to new account mapping for migration
   - Accounts to close with suggested destination for historical balances

4. Implementation plan:
   - When to make the switch (best time of year)
   - How to handle historical data
   - Steps to update in [accounting software]
   - Team communication and training needed

5. Account coding guide:
   - A reference document for staff showing what types of transactions go to which account
   - 3-5 common coding mistakes and the correct treatment

Make the chart of accounts clean enough for reporting and detailed enough for management decisions - but not so detailed that data entry becomes a guessing game.`,
              result:
                'A clean, industry-appropriate chart of accounts that makes reporting accurate and efficient.',
              tip: 'Do this at the start of a new fiscal year. Restructuring mid-year creates a messy transition. Plan the change, implement on January 1 (or the fiscal year start), and train the team.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Client Communication',
          prompts: [
            {
              id: 'ac-p-6-1',
              title: 'Quarterly Client Update Email',
              task: 'Draft a quarterly update email for a business client',
              prompt: `Draft a quarterly client update email:

Client: [business name]
Contact: [name, their role]
Quarter: [Q1/Q2/Q3/Q4] [year]
Relationship: [new client / established / long-term]

Key topics to address:
1. Financial performance summary: [brief notes on how they did this quarter]
2. Tax planning items: [any actions needed before next quarter]
3. Upcoming deadlines: [list relevant deadlines]
4. Advisory observation: [one insight or recommendation based on what you see in their numbers]

Generate:
1. Email subject line:
   - Clear, specific to the quarter and their business
   - Not generic ("Important update" is terrible)

2. Email body:
   - Opening: Personal touch (reference something specific to their business)
   - Financial snapshot: 3-4 key numbers with brief context (up/down from last quarter, what it means)
   - Tax planning: What they need to do or think about before next quarter
   - Upcoming deadlines: Clear list with dates
   - Advisory insight: One specific observation that shows you are thinking about their business beyond compliance
   - Action items: What you need from them (if anything)
   - Closing: Offer to schedule a call to discuss

3. One-page financial snapshot attachment outline:
   - Revenue trend (quarterly)
   - Profit margin trend
   - Cash position
   - One key metric specific to their industry
   - Visual-friendly format (describe what charts to include)

Tone: professional but warm. This is a relationship touchpoint, not a form letter. Make the client feel like their accountant is paying attention.`,
              result:
                'A quarterly touchpoint that strengthens the client relationship and demonstrates proactive advisory value.',
              tip: 'Send this within 2 weeks of quarter-end, before the client asks for an update. Being proactive is the single biggest differentiator between a compliance accountant and an advisor.',
            },
            {
              id: 'ac-p-6-2',
              title: 'Tax Document Request Email',
              task: 'Send a tax preparation document request to clients',
              prompt: `Write a tax document request email for:

Client type: [individual / small business / partnership / S-corp / C-corp]
Tax year: [year]
Filing deadline: [date]
Relationship: [new / returning client]

Specific documents needed based on their situation:
[List known items - e.g., "W-2s, 1099s, mortgage interest statement, rental property income/expenses"]

Generate:
1. Email with document checklist:
   - Friendly opening (not "it's that time of year again" - be original)
   - Clear deadline for submitting documents
   - Organized checklist by category:
     - Income documents
     - Deduction documents
     - Investment documents
     - Business documents (if applicable)
     - Life changes (new home, marriage, children, job change, etc.)
   - Secure upload instructions
   - FAQ section addressing the top 3 questions clients ask at this stage

2. Reminder email (to send 1 week before deadline):
   - Short and direct
   - List only the missing documents (leave a bracket for personalization)
   - Friendly urgency without being annoying

3. Final reminder (to send 2 days before deadline):
   - Very short
   - Clear consequence of missing the deadline (extension, delayed filing)
   - Offer to schedule a quick call if they have questions

For returning clients:
- Reference their prior year situation to show continuity
- Note any new forms or requirements for this tax year

For new clients:
- Include a brief "how our process works" section
- Set expectations for timeline from document receipt to filing

Tone: helpful and organized. Make the document gathering process feel manageable, not overwhelming.`,
              result:
                'A complete tax season communication sequence that gets documents in on time.',
              tip: 'Send the initial request in early January for individual clients. Every week you wait adds a week to your busy season crunch.',
            },
            {
              id: 'ac-p-6-3',
              title: 'Difficult Client Conversation Prep',
              task: 'Prepare for a difficult conversation with a client',
              prompt: `Help me prepare for a difficult client conversation:

Situation: [e.g., fee increase, scope creep discussion, late payment, audit findings, bad financial news, engagement termination]

Client: [name, relationship length, temperament - e.g., "John, 5-year client, tends to push back on fees"]
Context: [what led to this situation]
Desired outcome: [what you want to happen after the conversation]
Biggest concern: [what you are worried about - e.g., losing the client, the conversation getting emotional]

Generate:
1. Conversation script (talking points, not word-for-word):
   - Opening: how to start the conversation (direct but respectful)
   - Key message: the core point delivered clearly
   - Supporting points: 2-3 facts or reasons that back up your position
   - Anticipated objections and responses:
     - "That's too expensive" - response
     - "We've been with you for years" - response
     - "Other firms charge less" - response
     - [Add situation-specific objections]
   - Closing: next steps and how to end on a positive note

2. Email follow-up template (to send after the conversation):
   - Summary of what was discussed
   - Agreed-upon actions and timeline
   - Reaffirmation of the relationship
   - Clear next steps

3. Preparation notes:
   - Mindset: how to approach this emotionally
   - What NOT to say (common mistakes in these conversations)
   - Body language and tone tips
   - When to schedule it (best timing for difficult conversations)
   - How to recover if the conversation goes sideways

4. If the client threatens to leave:
   - Response that is professional, not desperate
   - When to fight to keep them vs. when to let them go gracefully
   - Transition plan if they do leave

Be direct and practical. I need to have this conversation with confidence.`,
              result:
                'A preparation framework that helps you handle difficult client conversations with professionalism and confidence.',
              tip: 'Practice the opening 3 sentences out loud before the meeting. How you start sets the tone for the entire conversation.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves an accounting professional in a typical month.',
      timeTable: [
        {
          task: 'Tax research and planning memos',
          without: '1-2 hours/question',
          withAI: '15-20 minutes',
          saved: '1-1.5 hrs per question',
        },
        {
          task: 'Client memos and advisory reports',
          without: '30-60 min/memo',
          withAI: '10 minutes',
          saved: '30 min per memo',
        },
        {
          task: 'Financial statement analysis',
          without: '2-3 hours/client',
          withAI: '20-30 minutes',
          saved: '2 hrs per client',
        },
        {
          task: 'Audit preparation',
          without: '2-3 days/engagement',
          withAI: '3-4 hours',
          saved: '1-2 days per engagement',
        },
        {
          task: 'Bookkeeping procedures',
          without: 'Ad hoc, undocumented',
          withAI: '30 min to systematize',
          saved: 'Hours of training time',
        },
        {
          task: 'Client communications',
          without: '15-30 min/email',
          withAI: '3-5 minutes',
          saved: '15-20 min per email',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '20-35 hrs/month',
      },
      sections: [
        {
          heading: 'The Accounting Professional\'s Edge',
          paragraphs: [
            'In 2026, the accountant using AI delivers a client advisory report in 30 minutes instead of 3 hours. They respond to complex tax questions the same day instead of next week. Their audit prep is structured and comprehensive before fieldwork begins. The accountant without AI is still writing memos from scratch and rebuilding checklists every engagement.',
            'Same expertise. Same credentials. Radically different throughput and client experience.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not earn your CPA to spend your career formatting workpapers and rewriting engagement letters. You earned it to advise clients, interpret complex regulations, and help businesses make better financial decisions. AI gives you back the time to actually be the advisor your clients need.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Client communication is the fastest win - draft your next client email with AI and notice how much time you just saved.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI is part of your accounting workflow. Follow along and check each step off.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'ac-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'ac-1-2', label: 'Create a free Perplexity account for tax research' },
            { id: 'ac-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Research a Tax Question',
          duration: '15 min',
          items: [
            {
              id: 'ac-2-1',
              label: 'Pick a real client tax question you need to answer',
            },
            {
              id: 'ac-2-2',
              label: 'Run the Tax Scenario Analysis prompt with the details',
            },
            {
              id: 'ac-2-3',
              label: 'Review the output - verify code sections and apply your judgment',
            },
          ],
        },
        {
          day: 3,
          title: 'Draft Client Communications',
          duration: '20 min',
          items: [
            {
              id: 'ac-3-1',
              label: 'Run the Quarterly Client Update prompt for a business client',
            },
            {
              id: 'ac-3-2',
              label: 'Draft a tax document request using the template prompt',
            },
            {
              id: 'ac-3-3',
              label: 'Notice how long the first draft takes vs. your usual process',
            },
          ],
        },
        {
          day: 4,
          title: 'Analyze Financial Statements',
          duration: '20 min',
          items: [
            {
              id: 'ac-4-1',
              label: 'Pull financial data for a client and run the Ratio Analysis prompt',
            },
            {
              id: 'ac-4-2',
              label: 'Review the narrative - add your professional insights',
            },
            {
              id: 'ac-4-3',
              label: 'Save the output as a template for similar clients',
            },
          ],
        },
        {
          day: 5,
          title: 'Build Audit Prep Materials',
          duration: '20 min',
          items: [
            {
              id: 'ac-5-1',
              label: 'Run the Audit Preparation Checklist for an upcoming engagement',
            },
            {
              id: 'ac-5-2',
              label: 'Generate the document request list for the client',
            },
            {
              id: 'ac-5-3',
              label: 'Customize both for the specific client and save as templates',
            },
          ],
        },
        {
          day: 6,
          title: 'Systematize Bookkeeping',
          duration: '15 min',
          items: [
            {
              id: 'ac-6-1',
              label: 'Run the Reconciliation Procedure prompt for your most common account type',
            },
            {
              id: 'ac-6-2',
              label: 'Create a month-end close checklist for a client',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'ac-7-1',
              label: 'Which system saved you the most time this week?',
            },
            {
              id: 'ac-7-2',
              label: 'Draft an engagement letter for your next new client using the prompt',
            },
            {
              id: 'ac-7-3',
              label: 'Share this guide with a colleague at your firm',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
