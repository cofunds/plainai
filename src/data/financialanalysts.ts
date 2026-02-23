import type { WorkbookData } from './types'

export const financialanalystsData = {
  professionId: 'financialanalysts',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Financial Analysts',
  heroDescription:
    'Accelerate market research, model documentation, investment memos, earnings analysis, and report writing with practical AI tools, workflows, and prompts built for financial analysts.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 6:30 AM and earnings season is in full swing. You have three company reports to analyze before the 9 AM team meeting. The portfolio manager wants your updated thesis on a semiconductor position by noon. There is a board presentation due Friday that you have not started because you have been buried in quarterly data all week. Your model for the new coverage name needs documentation - the assumptions are in your head and a partner asked for the write-up two days ago.',
        'Between the earnings calls, the data pulls, the model updates, and the report writing, your actual analysis time keeps shrinking. You spend 2 hours formatting a monthly performance report that should take 20 minutes. You rewrite the same macro overview paragraph every week because there is no template. The investment memo you drafted last month took 4 hours - half of that was structuring the argument, not thinking about the thesis.',
        'You got into finance because you love markets. You love finding the signal in the noise, building a thesis, and making a case for or against a position. But the job has become more about document production than investment thinking. The best ideas in your head never make it to paper because you are too busy formatting the ideas from last month.',
      ],
      highlight:
        'What if AI handled the first draft of every memo, every report, and every analysis summary - so you could spend your time on the thinking that actually drives returns?',
      closingParagraph:
        'Not replacing your market judgment. Not running your models. Just eliminating the hours of writing, formatting, and research aggregation that sit between your insight and a finished deliverable.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not making investment decisions. It is not building your financial models, predicting stock prices, or replacing the pattern recognition that comes from years of studying markets. The judgment, intuition, and analytical rigor that define great financial analysis - AI does not touch any of that. Every output needs your review and your expertise before it becomes actionable.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most productive junior analyst you have ever worked with. This analyst reads every earnings transcript overnight, summarizes industry reports in minutes, drafts investment memos from your bullet points, and formats presentations without being asked twice. The research is gathered. The first draft is written. Your job is to sharpen the analysis and add the insight that only experience provides.',
            'Need to summarize a 90-minute earnings call into key takeaways? Done in 2 minutes. Need to document your model assumptions for the team? Structured write-up from your notes in 3 minutes. Need a market overview for the board presentation? First draft with data points in 5 minutes.',
            'AI handles the writing and structuring. You handle the thinking and the judgment calls.',
          ],
        },
      ],
      keyInsight:
        'Your market expertise + AI\'s drafting speed = more time for analysis, less time on document production. The analyst who uses AI for first drafts spends their day thinking about markets instead of formatting reports.',
    },

    ch3: {
      intro: 'Five tools that cover the core needs of financial analysts working with AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and analysis engine',
          description:
            'Investment memos, earnings summaries, market overviews, presentation outlines, email drafts - any text-based financial analysis task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-document specialist',
          description:
            'Detailed research reports, complex investment theses, model documentation, multi-page analysis - excels at nuance and structured reasoning in longer content',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for deep analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your market research assistant',
          description:
            'Industry data, company research, macro trends, competitor analysis, regulatory developments - all with cited sources you can verify and reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your research and knowledge management hub',
          description:
            'Investment notes, coverage universe tracking, meeting notes, research libraries, process documentation - organized and searchable',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize your research',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your presentation builder',
          description:
            'Board decks, investor presentations, market overview slides, performance summaries - professional design without spending hours in PowerPoint',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Skip PowerPoint formatting',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing and analysis. Add Perplexity when you need research with verifiable sources. Notion AI and Canva come in when you are ready to organize your workflow and build presentations faster.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual analyst workflows. Click each system to see the before, after, and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Market Research and Analysis',
          before:
            'You open 15 browser tabs. Bloomberg terminal. Industry reports. News feeds. Competitor filings. You spend 2-3 hours reading, highlighting, and trying to synthesize it all into a coherent market overview. By the time you finish, you have a draft that is 80% data aggregation and 20% actual insight.',
          after:
            'AI aggregates and synthesizes research from multiple angles in minutes. You describe the industry, the question, or the thesis you are exploring, and AI delivers a structured overview with key data points, trends, and competitive dynamics. You spend your time on the 20% that matters - the insight and the implications.',
          flow: [
            'Define the research question or industry/sector to analyze',
            'AI generates a structured market overview with key data points',
            'Use Perplexity for source-backed data and recent developments',
            'AI synthesizes findings into a narrative with your analytical framework',
            'Review, add your perspective, and incorporate into your work product',
          ],
          timeSaved: { without: '2-4 hours/report', withAI: '30-45 minutes' },
        },
        {
          id: 2,
          name: 'Financial Model Documentation',
          before:
            'Your model works. You know every assumption, every driver, every sensitivity. But the documentation does not exist. When a colleague opens the file, they spend an hour figuring out what you built. When you come back to it after 3 months, even you need 30 minutes to remember the logic. Writing model docs has been on your to-do list for weeks.',
          after:
            'You describe your model structure and key assumptions to AI. It generates clean documentation - assumption tables, driver definitions, methodology notes, and a user guide. What would take 2-3 hours of writing happens in 15 minutes of reviewing and refining.',
          flow: [
            'Describe the model structure, key drivers, and assumptions',
            'AI generates a structured documentation template',
            'Review and adjust for accuracy and completeness',
            'AI formats into a user-friendly guide with an assumptions table',
            'Save alongside the model file for team access',
          ],
          timeSaved: { without: '2-3 hours (or never done)', withAI: '20 minutes' },
        },
        {
          id: 3,
          name: 'Investment Memo Writing',
          before:
            'You have the thesis in your head. The data supports it. But turning it into a structured, persuasive investment memo takes 3-5 hours. The outline, the narrative flow, the data presentation, the risk analysis, the conclusion - each section requires careful writing. And every memo feels like you are starting from scratch.',
          after:
            'AI drafts the full memo from your thesis and key data points. Executive summary, investment thesis, financial analysis, valuation, risks, and recommendation - all structured and written in 5 minutes. You spend your time sharpening the argument and adding the proprietary insights that make it yours.',
          flow: [
            'Input your thesis, key data points, and investment rationale',
            'AI generates a complete memo draft with all standard sections',
            'Review the structure and refine the argument flow',
            'Add proprietary analysis, model outputs, and your conviction level',
            'Finalize with risk factors and recommendation',
          ],
          timeSaved: { without: '3-5 hours/memo', withAI: '45-60 minutes' },
        },
        {
          id: 4,
          name: 'Earnings and Company Analysis',
          before:
            'An earnings call drops. You listen to the 60-90 minute call (or read the transcript), take notes, pull the key numbers, compare to estimates, and write a summary. Per company, this takes 2-3 hours. During earnings season with 10-15 names to cover, you are drowning.',
          after:
            'AI processes the earnings transcript and generates a structured summary - key metrics vs. estimates, management commentary highlights, guidance changes, and notable quotes. Your 2-hour process becomes a 20-minute review where you add your interpretation and flag what matters for the portfolio.',
          flow: [
            'Input or paste the earnings transcript or key financial data',
            'AI generates a structured earnings summary with beats/misses',
            'AI highlights management commentary on key topics',
            'Review and add your interpretation and portfolio implications',
            'Format into your standard earnings note template',
          ],
          timeSaved: { without: '2-3 hours/company', withAI: '20-30 minutes' },
        },
        {
          id: 5,
          name: 'Presentation and Deck Creation',
          before:
            'The board presentation is due in 48 hours. You spend 4 hours in PowerPoint fighting with formatting, alignment, and chart placement. The content itself takes 2 hours. The total: 6 hours for a 15-slide deck, and half of that time was wasted on design rather than substance.',
          after:
            'AI outlines the presentation structure, writes the content for each slide, and suggests data visualizations. You use Canva AI to build the deck in a fraction of the time. The 6-hour process becomes a 90-minute focused session where most of your time goes to content, not formatting.',
          flow: [
            'Define the presentation purpose, audience, and key messages',
            'AI generates a slide-by-slide outline with content and talking points',
            'Review the narrative arc and adjust the story flow',
            'Build slides in Canva AI or use AI-generated content in your deck tool',
            'Add charts, data, and your analytical commentary',
          ],
          timeSaved: { without: '4-6 hours/deck', withAI: '60-90 minutes' },
        },
        {
          id: 6,
          name: 'Report Generation',
          before:
            'The monthly performance report is due. You pull the numbers, compute the attribution, write the narrative, format the tables, and send it out. The same report, with the same structure, every month. It takes 2-3 hours of work that feels entirely mechanical but cannot be skipped.',
          after:
            'AI takes your performance data and generates the complete report - narrative, attribution commentary, market context, and outlook. The structure is consistent month over month. You review, add your perspective on positioning and outlook, and the report is done in 30 minutes.',
          flow: [
            'Input performance data, benchmarks, and key portfolio changes',
            'AI generates the monthly report with narrative and commentary',
            'Review attribution analysis and market context for accuracy',
            'Add your forward-looking commentary and positioning thoughts',
            'Format and distribute to stakeholders',
          ],
          timeSaved: { without: '2-3 hours/report', withAI: '30-40 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste prompts for every core analyst workflow. Click to reveal, then hit Copy. Fill in the brackets with your details. Always verify data and apply your professional judgment.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Market Research and Analysis',
          prompts: [
            {
              id: 'fa-p-1-1',
              title: 'Industry Analysis',
              task: 'Generate a structured industry analysis for a sector or sub-sector',
              prompt: `Generate an industry analysis for:

Industry/sector: [e.g., cloud infrastructure, specialty chemicals, digital payments]
Geography: [global / US / Europe / specific region]
Time horizon: [current state + next 12-24 months]
Purpose: [investment research / coverage initiation / portfolio review / client presentation]

Provide a structured analysis:

1. Industry overview:
   - Market size (current and projected)
   - Growth rate and key growth drivers
   - Industry structure (fragmented vs. consolidated, key players and market share)
   - Value chain overview (who makes money and where)

2. Competitive dynamics:
   - Top 5-10 players with brief positioning summary
   - Barriers to entry
   - Pricing power and margin trends across the industry
   - Disruptive threats (new entrants, technology shifts, regulatory changes)

3. Key trends and catalysts:
   - 3-5 secular trends driving the industry
   - Upcoming catalysts (regulatory, technological, macroeconomic)
   - What the consensus is getting wrong or underestimating

4. Risk factors:
   - Cyclical risks
   - Regulatory risks
   - Technology disruption risks
   - Concentration risks

5. Investment implications:
   - Which segments are best positioned?
   - Where are margins expanding vs. compressing?
   - Key metrics to track for this industry
   - Names to watch (public companies with specific relevance)

6. Data gaps:
   - What data I should look up to validate this analysis
   - Key reports or sources for deeper research

Write this in an analytical tone appropriate for an investment research audience. Be specific with data where possible and flag estimates clearly.`,
              result:
                'A structured industry analysis that serves as the foundation for investment research.',
              tip: 'Run this in Perplexity for source-backed data, then use Claude or ChatGPT to structure the narrative. Cross-reference market size estimates against at least one industry report.',
            },
            {
              id: 'fa-p-1-2',
              title: 'Competitive Positioning Map',
              task: 'Map competitive positioning for companies in a sector',
              prompt: `Create a competitive positioning analysis for:

Sector: [sector]
Companies to analyze:
1. [Company 1]
2. [Company 2]
3. [Company 3]
4. [Company 4]
5. [Company 5]

For each company, analyze:
1. Market position:
   - Revenue and market share (most recent data)
   - Revenue growth rate (3-year CAGR)
   - Geographic mix
   - Customer concentration

2. Financial profile:
   - Gross margins
   - EBITDA margins
   - Free cash flow generation
   - Balance sheet strength (net debt, leverage ratios)
   - Capital allocation priorities

3. Strategic positioning:
   - Core competitive advantage (what they do better than anyone)
   - Key differentiator vs. peers
   - Growth strategy (organic vs. M&A, new markets vs. existing)
   - R&D intensity and innovation pipeline

4. Valuation snapshot:
   - Current EV/Revenue and EV/EBITDA multiples
   - How current valuation compares to historical range
   - Premium or discount to peer average and why

5. Competitive threats:
   - Who is gaining share and why
   - Who is losing share and why
   - Potential new entrants or disruptors

Generate:
- A comparison table with key metrics side by side
- A 2x2 positioning matrix (suggest the best axes for this industry)
- A one-paragraph summary identifying the strongest competitive position
- 3 questions an analyst should be asking about this competitive landscape

Flag any data points that should be verified against filings or data providers.`,
              result:
                'A comprehensive competitive map that frames the investment landscape for a sector.',
              tip: 'Update this quarterly. The competitive map is a living document - shifts in market share and margin trends tell you more than any single quarter of earnings.',
            },
            {
              id: 'fa-p-1-3',
              title: 'Macro Environment Briefing',
              task: 'Generate a macro overview relevant to portfolio positioning',
              prompt: `Generate a macro environment briefing for portfolio positioning:

Portfolio focus: [equity / fixed income / multi-asset / alternatives]
Geography: [US / global / EM / specific regions]
Key sectors in the portfolio: [list top 3-5 sectors]
Current macro concerns: [list what you are watching - e.g., inflation trajectory, rate path, credit conditions, geopolitical risk]
Time horizon: [next 3 months / 6 months / 12 months]

Generate:

1. Macro dashboard:
   - GDP growth (current and forecast)
   - Inflation trajectory (headline and core, direction)
   - Interest rate path (central bank guidance and market pricing)
   - Employment trends
   - Consumer spending and confidence
   - Credit conditions (spreads, lending standards)
   - Currency and commodity trends

2. Key themes and implications:
   For each theme:
   - What is happening
   - Why it matters for the portfolio
   - Which sectors benefit and which are at risk
   - What would change the thesis (upside and downside triggers)

3. Scenario analysis:
   - Base case (60% probability): description and portfolio implications
   - Bull case (20%): what needs to go right and positioning
   - Bear case (20%): what could go wrong and hedges

4. Sector implications:
   For each key portfolio sector:
   - How current macro conditions affect the sector
   - Key macro variable to watch
   - Positioning recommendation (overweight / neutral / underweight) with reasoning

5. Calendar of upcoming events:
   - Economic data releases that matter most
   - Central bank meetings
   - Geopolitical events with market implications
   - Earnings dates for key bellwethers

Write this in a concise, analytical style. Focus on what is actionable for portfolio positioning, not textbook macro descriptions.`,
              result:
                'A macro briefing that directly connects economic conditions to portfolio positioning decisions.',
              tip: 'Run this weekly during volatile periods, monthly during stable ones. The calendar of upcoming events alone is worth the 5 minutes it takes to generate.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Financial Model Documentation',
          prompts: [
            {
              id: 'fa-p-2-1',
              title: 'Model Assumptions Documentation',
              task: 'Document the key assumptions behind a financial model',
              prompt: `Document the key assumptions in my financial model:

Company: [name]
Model type: [DCF / LBO / comparable company / merger model / three-statement]
Base currency: [currency]
Forecast period: [years]

Key assumptions I need to document:

Revenue assumptions:
- [Revenue driver 1 - e.g., "volume growth based on industry forecast of X%"]
- [Revenue driver 2 - e.g., "pricing increases of X% annually based on historical trend"]
- [Revenue driver 3 - if applicable]

Cost assumptions:
- [COGS assumption - e.g., "gross margin of X% based on management guidance"]
- [OpEx assumption - e.g., "SGA growing at X% of revenue"]
- [Other cost assumptions]

Balance sheet assumptions:
- [Working capital - e.g., "DSO of X days based on 3-year average"]
- [CapEx - e.g., "X% of revenue, declining to Y% as the business scales"]
- [Depreciation and amortization approach]

Valuation assumptions (if applicable):
- [Discount rate / WACC components]
- [Terminal growth rate or exit multiple]
- [Comparable company selection criteria]

Generate:
1. Assumptions table:
   - Each assumption in a row
   - Current value, source/justification, sensitivity range
   - Last updated date

2. Methodology notes:
   - How each major line item is forecasted
   - Key interdependencies between assumptions
   - Where management guidance vs. analyst estimate vs. historical trend is used
   - Any adjustments to reported numbers (one-time items, accounting changes)

3. Sensitivity analysis guide:
   - Which 3-5 assumptions have the most impact on the output
   - Suggested sensitivity ranges for each
   - Key scenarios to run (bull/base/bear)

4. Model user guide:
   - How to navigate the model (tab structure)
   - How to update key inputs
   - Common mistakes to avoid
   - Output interpretation guide

Write this so a colleague can understand and use the model without asking you any questions.`,
              result:
                'Complete model documentation that makes your work reproducible and your assumptions transparent.',
              tip: 'Document as you build, not after. Spend 2 minutes per assumption when the logic is fresh in your mind. It is 10x harder to reconstruct your reasoning 3 months later.',
            },
            {
              id: 'fa-p-2-2',
              title: 'Model Audit Checklist',
              task: 'Create a checklist for auditing a financial model',
              prompt: `Create an audit checklist for reviewing a financial model:

Model type: [DCF / LBO / three-statement / merger / comps]
Built by: [yourself / colleague / external advisor]
Purpose: [investment decision / board presentation / deal evaluation / internal analysis]
Complexity: [simple / moderate / complex]

Generate a comprehensive audit checklist:

1. Structural checks:
   - Is the model flow logical (inputs > calculations > outputs)?
   - Are all tabs consistently formatted?
   - Are there any hardcoded numbers in formula cells (should be in assumptions)?
   - Is there a clear separation between inputs, calculations, and outputs?
   - Are units consistent (millions, thousands, per share)?
   - Does the balance sheet balance in every period?

2. Formula checks:
   - Are formulas consistent across time periods (no one-off overrides)?
   - Are circular references present and handled appropriately?
   - Do all lookup functions have proper error handling?
   - Are there any broken links to external files?

3. Assumption validation:
   - Is every assumption sourced or justified?
   - Are assumptions within reasonable ranges for the industry?
   - Do historical periods tie to reported financials?
   - Are management guidance assumptions current?
   - Are there any stale assumptions from a previous version?

4. Output validation:
   - Do the outputs make intuitive sense?
   - Is the implied valuation within a reasonable range?
   - Do margins and growth rates converge to sustainable levels in the terminal period?
   - Does the cash flow statement reconcile with income statement and balance sheet movements?

5. Scenario and sensitivity:
   - Are bull/base/bear scenarios defined with distinct assumptions?
   - Do the sensitivity tables capture the most impactful variables?
   - Are edge cases handled (negative growth, margin compression, liquidity stress)?

6. Presentation and usability:
   - Can someone unfamiliar with the model find the key inputs and outputs?
   - Is there a summary dashboard or output page?
   - Is the print area set correctly for key pages?
   - Are there version control notes?

Format as a checklist with pass/fail and notes columns.`,
              result:
                'A systematic model review process that catches errors before they reach decision-makers.',
              tip: 'Run this checklist on every model before it goes to a portfolio manager or client. The 30 minutes you spend auditing will save hours of credibility repair if an error is found later.',
            },
            {
              id: 'fa-p-2-3',
              title: 'Model Update Memo',
              task: 'Write a memo documenting changes to a financial model',
              prompt: `Write a model update memo:

Company: [name]
Model type: [type]
Date of update: [date]
Reason for update: [earnings release / guidance change / sector re-rating / thesis revision / new data]

Changes made:

Revenue assumptions:
- Previous: [old assumption]
- Updated: [new assumption]
- Rationale: [why the change]

Margin assumptions:
- Previous: [old assumption]
- Updated: [new assumption]
- Rationale: [why the change]

Valuation assumptions:
- Previous: [old assumption]
- Updated: [new assumption]
- Rationale: [why the change]

Other changes:
[List any additional changes]

Generate:
1. Model update summary:
   - One-paragraph overview of what changed and why
   - Impact on target price / valuation output
   - Whether the investment recommendation changes

2. Change log table:
   - Line item, previous value, new value, source, impact on output

3. Impact analysis:
   - New base case valuation vs. previous
   - What drove the biggest change in output
   - Revised sensitivity range

4. Key risks to the updated thesis:
   - What would invalidate the new assumptions
   - Upcoming catalysts that could prove or disprove the thesis
   - Scenarios where the model breaks

5. Distribution note (for the team):
   - Summary email sharing the update (3-4 sentences)
   - Key takeaway for the portfolio manager
   - Action recommended (if any)

Keep this concise and focused on what changed and what it means for the investment decision.`,
              result:
                'A clear model update record that maintains an audit trail and communicates changes effectively.',
              tip: 'Write the update memo within an hour of making the changes. Your reasoning is sharpest immediately after the work. Save these memos alongside the model - they become invaluable for year-end attribution and portfolio reviews.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Investment Memo Writing',
          prompts: [
            {
              id: 'fa-p-3-1',
              title: 'Investment Thesis Memo',
              task: 'Draft a complete investment thesis memo',
              prompt: `Draft an investment thesis memo for:

Company: [name]
Ticker: [ticker]
Current price: [price]
Target price: [your target]
Recommendation: [buy / hold / sell / initiate coverage]
Time horizon: [months/years]

Company overview:
- What they do: [one paragraph]
- Market cap: [amount]
- Key financial metrics: [revenue, EBITDA, FCF, growth rate, margins]

Investment thesis:
- Core argument in one sentence: [your thesis]
- Key pillar 1: [first leg of the thesis with data]
- Key pillar 2: [second leg with data]
- Key pillar 3: [third leg with data]

Valuation:
- Methodology: [DCF / comps / sum-of-parts / other]
- Key inputs: [discount rate, growth rate, multiple]
- Target price derivation: [brief]

Risks:
1. [Risk 1]
2. [Risk 2]
3. [Risk 3]

Generate the investment memo:

1. Executive summary (half page):
   - The recommendation and conviction level
   - The thesis in 3 sentences
   - Key numbers: current price, target, upside/downside

2. Company overview (half page):
   - Business description
   - Revenue breakdown by segment and geography
   - Key competitive advantages

3. Investment thesis (1-2 pages):
   - Each pillar fully developed with supporting data
   - Why the market is mispricing this opportunity
   - What you see that consensus is missing

4. Financial analysis (1 page):
   - Key metrics and trends
   - Margin analysis
   - Cash flow generation and capital allocation
   - Balance sheet assessment

5. Valuation (half page):
   - Methodology and key assumptions
   - Valuation range (bull, base, bear)
   - How current valuation compares to historical and peers

6. Risks and mitigants (half page):
   - Each risk with probability assessment
   - What would cause you to exit the position
   - Downside scenario quantified

7. Catalysts and timeline:
   - Near-term catalysts (next 3-6 months)
   - Medium-term catalysts (6-18 months)
   - Monitoring metrics (what you will track)

Write in a persuasive but balanced analytical style. This should be convincing enough for a portfolio manager to act on and rigorous enough for a research committee.`,
              result:
                'A complete investment memo that articulates your thesis clearly and persuasively.',
              tip: 'Write the executive summary last, after the full memo is drafted. The best summaries distill the entire argument into the clearest possible form - that is easier to do when the detail is already written.',
            },
            {
              id: 'fa-p-3-2',
              title: 'Investment Thesis Update',
              task: 'Update an existing investment thesis after new information',
              prompt: `Update an investment thesis based on new information:

Company: [name / ticker]
Current position: [long / short / no position]
Original thesis date: [when the thesis was initiated]
Original target: [price]
Current price: [price]

Original thesis summary:
[2-3 sentences summarizing the original investment case]

New information:
- [Event 1 - e.g., earnings report, guidance change, management change, M&A, regulatory development]
- [Event 2 - if applicable]
- Key data points: [relevant numbers]

Questions to address:
1. Does the new information strengthen, weaken, or change the thesis?
2. Are the original thesis pillars still intact?
3. Has the risk/reward shifted?

Generate:
1. Thesis status assessment:
   - Original thesis: still valid / needs revision / invalidated
   - Each thesis pillar: confirmed / uncertain / challenged
   - Overall conviction: increased / unchanged / decreased

2. Impact of new information:
   - What the new data tells us
   - How it changes the financial outlook
   - Impact on valuation (new target range)
   - Change to expected timeline for catalysts

3. Updated recommendation:
   - Revised target price and methodology
   - Position sizing recommendation (add / hold / trim / exit)
   - Updated risk factors

4. Monitoring plan:
   - Key metrics to watch going forward
   - Events that would trigger the next review
   - Price levels that would change the recommendation

5. Communication to the team:
   - 3-4 sentence summary for the portfolio manager
   - Urgency level (act now / discuss at next meeting / informational only)

Be direct about whether the thesis is working or not. Intellectual honesty is more valuable than confirmation bias.`,
              result:
                'A disciplined thesis review that prevents both premature exits and stubborn holds.',
              tip: 'Set a calendar reminder to run this prompt for every position after each earnings report. Systematic thesis reviews prevent the most common portfolio management mistake: ignoring deteriorating fundamentals because you fell in love with the original idea.',
            },
            {
              id: 'fa-p-3-3',
              title: 'Short Thesis Memo',
              task: 'Write a short thesis for a potential sell or underweight position',
              prompt: `Write a short/sell thesis memo for:

Company: [name / ticker]
Current price: [price]
Your target: [downside target]
Current market sentiment: [bullish / neutral / bearish]
Why the market is wrong: [one sentence]

Bear case arguments:
1. [Argument 1 - e.g., deteriorating fundamentals, competitive threat, valuation stretch]
2. [Argument 2]
3. [Argument 3]

Key data supporting the bear case:
- [Data point 1]
- [Data point 2]
- [Data point 3]

Generate the short thesis memo:

1. Executive summary:
   - The core contrarian argument
   - Downside target and magnitude
   - Catalyst for re-rating

2. Why the consensus is wrong:
   - What the bull case assumes
   - Why those assumptions are flawed or at risk
   - The question the market is not asking

3. Fundamental deterioration (or risk thereof):
   - Financial analysis supporting the bear case
   - Trend analysis showing early warning signs
   - Comparable historical examples (other companies that faced similar dynamics)

4. Valuation analysis:
   - Why current valuation is unsustainable
   - What the stock should trade at under realistic assumptions
   - Downside scenario with quantified target

5. Risks to the short thesis (be honest):
   - What could go right for the company
   - Short squeeze or technical risks
   - Scenarios where the bull case prevails
   - Position sizing given the risk

6. Catalyst timeline:
   - What will cause the market to reprice
   - Expected timing
   - Monitoring metrics

Write this with intellectual rigor. The best short theses are not just "the stock is expensive" - they identify a specific fundamental misperception that the market will eventually recognize.`,
              result:
                'A rigorous short thesis that articulates the contrarian case with specific catalysts and defined risk.',
              tip: 'Short theses require more rigorous risk management than long theses. Always define your stop-loss before writing the memo. If you cannot articulate when you would exit, the position is not sized correctly.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Earnings and Company Analysis',
          prompts: [
            {
              id: 'fa-p-4-1',
              title: 'Earnings Call Summary',
              task: 'Summarize an earnings call transcript into actionable takeaways',
              prompt: `Summarize this earnings call transcript:

Company: [name / ticker]
Quarter: [fiscal quarter and year]
Date: [earnings date]
Consensus expectations: Revenue [amount], EPS [amount]

Transcript or key sections:
[Paste the transcript or the most important sections - prepared remarks and Q&A highlights]

Generate a structured earnings summary:

1. Results vs. expectations:
   - Revenue: reported vs. consensus, beat/miss magnitude
   - EPS: reported vs. consensus, beat/miss magnitude
   - Key segment performance vs. expectations
   - Any notable non-recurring items

2. Management commentary highlights:
   - 3-5 most important statements from the prepared remarks
   - Notable changes in language vs. prior quarter
   - Forward-looking statements and qualifiers used

3. Guidance:
   - Full-year and next-quarter guidance (if given)
   - How guidance compares to consensus
   - Any changes to previously issued guidance
   - Key assumptions behind guidance

4. Q&A takeaways:
   - Top 3 themes from analyst questions
   - Most revealing management answer (verbatim quote)
   - Questions management deflected or answered vaguely

5. Key metrics and KPIs:
   - Table of reported KPIs vs. prior quarter and prior year
   - Trends to watch

6. Investment implications:
   - Does this change the thesis? (strengthen / weaken / neutral)
   - Estimate revisions needed (up / down / unchanged)
   - Catalysts confirmed or delayed
   - Stock reaction context (if post-market move is known)

7. Action items:
   - Model updates needed
   - Follow-up research required
   - Portfolio recommendation (if any)

Write this in a concise, analytical style. Prioritize signal over noise - tell me what matters, not a play-by-play of the entire call.`,
              result:
                'A focused earnings summary that highlights what matters for the investment decision.',
              tip: 'Process the transcript through AI before listening to the full call. The structured summary helps you listen with context - you will catch nuances in management tone that the text alone misses.',
            },
            {
              id: 'fa-p-4-2',
              title: 'Company Deep Dive',
              task: 'Generate a comprehensive company analysis for coverage initiation',
              prompt: `Generate a comprehensive company analysis for:

Company: [name / ticker]
Industry: [industry/sector]
Purpose: [coverage initiation / portfolio consideration / client request / competitive research]

Provide a deep dive:

1. Business overview:
   - What the company does (explain to a non-specialist)
   - Revenue model and key revenue streams (with approximate % mix)
   - Customer base and go-to-market
   - Geographic presence and expansion strategy

2. Competitive position:
   - Market share and ranking in key segments
   - Sustainable competitive advantages (moats)
   - Key competitors and how this company differentiates
   - Threats to competitive position

3. Financial profile:
   - 5-year revenue and earnings growth trajectory
   - Margin structure and trends (gross, operating, net)
   - Cash flow generation and conversion quality
   - Capital allocation track record (dividends, buybacks, M&A, R&D)
   - Balance sheet strength and debt maturity profile

4. Management assessment:
   - CEO and CFO background and tenure
   - Track record of execution vs. guidance
   - Compensation structure alignment with shareholders
   - Insider ownership and recent transactions
   - Management credibility score (based on guidance accuracy)

5. Growth drivers:
   - Near-term catalysts (0-12 months)
   - Medium-term growth levers (1-3 years)
   - Long-term secular tailwinds

6. Risk factors:
   - Fundamental risks (ranked by probability and impact)
   - Regulatory and political risks
   - ESG considerations
   - Key-person risk

7. Valuation context:
   - Current trading multiples vs. 5-year history
   - How the company trades vs. peers
   - What the market is currently pricing in

8. Open questions:
   - 5 things I should investigate further before forming a view
   - Data sources to consult for deeper analysis

Flag all data points that need verification against filings and data providers.`,
              result:
                'A comprehensive company profile that serves as the foundation for an investment opinion.',
              tip: 'Use this as a starting framework, then layer in proprietary research - channel checks, expert calls, and field work. The AI gives you the foundation in 15 minutes that used to take a day, freeing your time for the differentiated research that generates alpha.',
            },
            {
              id: 'fa-p-4-3',
              title: 'Estimate Revision Tracker',
              task: 'Track and document estimate changes across a coverage universe',
              prompt: `Create an estimate revision summary for my coverage universe:

Companies in coverage:
1. [Company 1 / ticker] - Current estimates: Rev [X], EPS [X]
   Recent event: [e.g., Q3 earnings beat, guidance raised]
   Estimate change: Rev [old to new], EPS [old to new]

2. [Company 2 / ticker] - Current estimates: Rev [X], EPS [X]
   Recent event: [e.g., in-line quarter, guidance maintained]
   Estimate change: [no change / describe change]

3. [Company 3 / ticker] - Current estimates: Rev [X], EPS [X]
   Recent event: [e.g., miss, guidance lowered]
   Estimate change: Rev [old to new], EPS [old to new]

[Add more companies as needed]

Generate:
1. Estimate revision summary table:
   - Company, metric, old estimate, new estimate, % change, direction (up/down/unchanged)
   - Sorted by magnitude of revision

2. Themes and patterns:
   - Are revisions broadly positive or negative across the coverage?
   - Any sector-specific trends driving revisions?
   - Which companies had the most surprising results?
   - Consensus estimates vs. actual: overall accuracy assessment

3. Relative positioning:
   - Which names have the most upside to estimates?
   - Which names have the most downside risk?
   - Where is consensus most out of line with reality?

4. Portfolio implications:
   - Recommended actions based on revision trends
   - Conviction ranking after latest revisions
   - Names to watch for potential position changes

5. Communication:
   - Team update email summarizing the revision cycle
   - Key talking points for the portfolio review meeting

Write concisely. This is a reference document that should be scannable in 5 minutes.`,
              result:
                'A systematic estimate tracking framework that helps identify trends and opportunities across coverage.',
              tip: 'Maintain this as a running document updated after every earnings season. Over time, the pattern of revisions tells you more about fundamental trends than any single quarter of results.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Presentation and Deck Creation',
          prompts: [
            {
              id: 'fa-p-5-1',
              title: 'Board Presentation Outline',
              task: 'Create a board-level investment presentation outline',
              prompt: `Create a board-level presentation outline:

Purpose: [quarterly portfolio review / investment committee / client review / strategy presentation]
Audience: [board of directors / investment committee / institutional clients / internal team]
Length: [number of slides]
Presentation time: [minutes]

Key content to include:
- Portfolio performance: [summary of returns and attribution]
- Market overview: [key macro and market themes]
- Key positions to discuss: [list 3-5 positions]
- Outlook and positioning: [forward-looking view]
- Risks and hedges: [current risk management]

Generate:
1. Slide-by-slide outline:
   For each slide:
   - Slide title
   - Key message (one sentence)
   - Content to include (bullet points and data)
   - Suggested visual (chart type, table, or graphic)
   - Talking points (what to say, not what to show)

2. Narrative arc:
   - How the presentation tells a story from start to finish
   - Opening slide: what grabs attention
   - Closing slide: what you want them to remember

3. Data slides:
   - Performance table format
   - Attribution waterfall structure
   - Market dashboard layout
   - Position summary format

4. Discussion slides:
   - Key position deep dives (one slide each)
   - Risk dashboard
   - Outlook summary

5. Appendix suggestions:
   - Detailed performance data
   - Individual position summaries
   - Market data tables
   - Methodology notes

6. Preparation checklist:
   - Data to pull and verify before building slides
   - Charts to create
   - Who needs to review before the meeting
   - Handout vs. screen presentation considerations

Tailor the depth and language to the audience. Board members want strategy and outcomes. Research committees want methodology and conviction.`,
              result:
                'A complete presentation framework that turns raw content into a compelling narrative.',
              tip: 'Build the outline in AI, then create the slides. Never start in PowerPoint without an outline - you will spend hours rearranging slides that should not exist.',
            },
            {
              id: 'fa-p-5-2',
              title: 'Market Commentary Slide Content',
              task: 'Write market commentary for a client or internal presentation',
              prompt: `Write market commentary for a presentation:

Time period: [month / quarter / year-to-date]
Audience: [clients / board / internal team]
Tone: [institutional / conversational / academic]

Market performance:
- S&P 500: [return for period]
- Other relevant indices: [list with returns]
- Fixed income: [summary]
- Key commodities or currencies: [if relevant]

Key themes during the period:
1. [Theme 1 - e.g., AI rally, rate expectations, geopolitical tension]
2. [Theme 2]
3. [Theme 3]

Portfolio performance vs. benchmark:
- Portfolio return: [X%]
- Benchmark return: [X%]
- Key contributors: [top 3 positive]
- Key detractors: [top 3 negative]

Generate:
1. Market overview narrative (one page):
   - What happened and why (not just what the numbers were, but the story behind them)
   - Key drivers of market returns during the period
   - Sector and style performance context
   - What mattered most and what was noise

2. Performance attribution narrative (half page):
   - Why the portfolio performed as it did (in plain language)
   - What worked and what did not (with specific position references)
   - Whether outperformance or underperformance was driven by stock selection or allocation

3. Forward-looking commentary (half page):
   - Current positioning and rationale
   - Key risks on the radar
   - Opportunities being evaluated
   - What would cause a significant repositioning

4. Slide-ready bullet points:
   - 4-5 bullets for the "Market Overview" slide
   - 4-5 bullets for the "Performance Summary" slide
   - 3-4 bullets for the "Outlook" slide

Write with conviction but acknowledge uncertainty. Clients respect honesty about what you know and what you do not know.`,
              result:
                'Polished market commentary that connects performance to positioning and outlook.',
              tip: 'Write the forward-looking section with specific triggers, not vague hedges. "We will increase equity exposure if the 10Y breaks below 4%" is better than "we remain cautiously optimistic."',
            },
            {
              id: 'fa-p-5-3',
              title: 'Investment Pitch Deck',
              task: 'Structure a pitch deck for a specific investment idea',
              prompt: `Structure a pitch deck for an investment idea:

Company: [name / ticker]
Recommendation: [buy / sell / overweight / underweight]
Target price: [price] (upside/downside: [%])
Conviction: [high / medium / low]
Time horizon: [months/years]
Audience: [portfolio manager / investment committee / client]

Thesis in one sentence: [your core argument]

Key data:
- Current valuation: [multiples]
- Peer valuation: [multiples]
- Key financials: [revenue, growth, margins, FCF]
- Catalyst: [the event that will drive re-rating]

Generate a pitch deck structure (10-12 slides):

Slide 1 - Title and recommendation:
- Company, ticker, price target, conviction level
- The thesis in one sentence

Slide 2 - Investment thesis summary:
- 3 thesis pillars as bullet points
- Key chart that supports the thesis

Slide 3 - Company overview:
- What they do, revenue mix, competitive position
- One visual (suggested)

Slide 4-6 - Thesis pillar deep dives (one slide per pillar):
- Supporting data and analysis for each pillar
- Charts or data tables suggested

Slide 7 - Financial summary:
- Key financial metrics and projections
- Growth and margin trajectory

Slide 8 - Valuation:
- Methodology and output
- Comparison to peers and historical range
- Upside/downside scenario analysis

Slide 9 - Risks:
- Top 3 risks with probability and impact
- Mitigants for each
- What would make you wrong

Slide 10 - Catalysts and timeline:
- Near-term and medium-term catalysts
- Key dates and events

Slide 11 - Recommendation:
- Position sizing recommendation
- Entry point and price targets
- Exit criteria

For each slide: title, key message, content, suggested visual, and talking points.`,
              result:
                'A structured pitch deck that presents your investment idea clearly and persuasively.',
              tip: 'Lead with the most contrarian or surprising element of your thesis. Investment committees hear dozens of pitches - the ones that challenge consensus get the most engagement.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Report Generation',
          prompts: [
            {
              id: 'fa-p-6-1',
              title: 'Monthly Performance Report',
              task: 'Generate a monthly portfolio performance report',
              prompt: `Generate a monthly performance report:

Fund/Portfolio: [name]
Period: [month, year]
Benchmark: [benchmark name]

Performance:
- Portfolio return (month): [%]
- Benchmark return (month): [%]
- Portfolio return (YTD): [%]
- Benchmark return (YTD): [%]
- Portfolio return (since inception): [%]
- Benchmark return (since inception): [%]

Attribution (top contributors and detractors):
Top 3 contributors:
1. [Position] - [contribution in bps] - [why it worked]
2. [Position] - [contribution in bps] - [why it worked]
3. [Position] - [contribution in bps] - [why it worked]

Top 3 detractors:
1. [Position] - [contribution in bps] - [why it underperformed]
2. [Position] - [contribution in bps] - [why it underperformed]
3. [Position] - [contribution in bps] - [why it underperformed]

Portfolio changes during the month:
- New positions: [list]
- Exited positions: [list]
- Significant increases: [list]
- Significant decreases: [list]

Generate:
1. Executive summary (3-4 sentences):
   - How we performed vs. benchmark
   - What drove the performance
   - Positioning going into next month

2. Performance table:
   - Monthly, QTD, YTD, 1-year, 3-year, since inception
   - Portfolio vs. benchmark side by side
   - Excess return in each period

3. Attribution narrative:
   - Why top contributors worked (specific, not "it went up")
   - Why detractors underperformed (honest assessment)
   - Whether the attribution reflects thesis-driven outcomes or market noise

4. Portfolio activity narrative:
   - Why positions were added or removed
   - How the portfolio is positioned vs. last month
   - Current sector and geographic allocation vs. benchmark

5. Outlook section:
   - Current view on markets and the portfolio
   - Key themes being expressed in positioning
   - Risks being monitored

6. Statistical summary:
   - Risk metrics (volatility, Sharpe ratio, max drawdown)
   - Exposure summary (gross, net, long, short if applicable)
   - Concentration metrics (top 10 holdings weight)

Write in a professional, institutional tone appropriate for client distribution.`,
              result:
                'A complete monthly report that communicates performance clearly and builds client confidence.',
              tip: 'Write the attribution narrative honestly. Clients can tell when you attribute winners to skill and losers to bad luck. Intellectual honesty in reporting builds long-term trust.',
            },
            {
              id: 'fa-p-6-2',
              title: 'Weekly Market Wrap',
              task: 'Generate a weekly market summary for the team or clients',
              prompt: `Generate a weekly market wrap:

Week ending: [date]
Audience: [internal team / clients / both]

Market performance:
- S&P 500: [weekly return]
- NASDAQ: [weekly return]
- Russell 2000: [weekly return]
- 10Y Treasury yield: [level and change]
- VIX: [level and change]
- [Other relevant indices or assets]

Key events this week:
1. [Event 1 - e.g., Fed meeting, major earnings, economic data]
2. [Event 2]
3. [Event 3]

Sector performance:
- Best performing: [sector, return]
- Worst performing: [sector, return]
- Notable sector rotation themes

Generate:
1. Week in review (one paragraph):
   - What happened, why, and what mattered most
   - Narrative tone, not just data recitation

2. Key themes:
   - 3 themes from the week with brief analysis
   - What they mean for portfolios

3. Earnings highlights (if earnings season):
   - Key reports and takeaways
   - Trends across reporting companies
   - Surprises (positive and negative)

4. Economic data recap:
   - Data released this week vs. expectations
   - What it means for monetary policy and growth

5. Week ahead preview:
   - Key events, data releases, and earnings to watch
   - What could move markets
   - Positioning considerations

6. Chart of the week:
   - Suggest one chart or data visualization that captures the most important theme
   - Description of what the chart shows and why it matters

Keep it concise and actionable. This should be readable in 5 minutes.`,
              result:
                'A consistent weekly summary that keeps the team and clients informed and aligned.',
              tip: 'Send this Friday afternoon or Sunday evening. Consistency matters more than perfection - clients value the reliable touchpoint even when markets are quiet.',
            },
            {
              id: 'fa-p-6-3',
              title: 'Quarterly Investment Review',
              task: 'Compile a comprehensive quarterly investment review',
              prompt: `Compile a quarterly investment review:

Fund/Portfolio: [name]
Quarter: [Q1/Q2/Q3/Q4] [year]
Benchmark: [name]

Quarterly performance: Portfolio [%] vs. Benchmark [%]
YTD performance: Portfolio [%] vs. Benchmark [%]
Since inception: Portfolio [%] vs. Benchmark [%]

Top contributors (quarter):
[List with contribution in bps and rationale]

Top detractors (quarter):
[List with contribution in bps and rationale]

Portfolio changes during the quarter:
[Summary of adds, exits, and significant position changes]

Current positioning:
- Top 10 holdings: [list with weights]
- Sector allocation: [summary]
- Cash position: [%]

Generate a comprehensive quarterly review:

1. Letter to investors / stakeholders (1 page):
   - Conversational but professional tone
   - What happened, what we did, and how we think about the road ahead
   - Honest assessment of what went right and wrong
   - Forward-looking conviction level

2. Performance review (1-2 pages):
   - Detailed attribution analysis
   - Comparison to relevant benchmarks
   - Risk-adjusted return metrics
   - What drove alpha (or underperformance) specifically

3. Portfolio review:
   - Current positioning rationale
   - Key changes and why they were made
   - Sector and style exposures with commentary

4. Market outlook (1 page):
   - Macro view and implications for portfolio
   - Key themes being expressed
   - Risks and hedges in place

5. Position highlights:
   - 2-3 position deep dives (best idea, newest position, or most interesting thesis)
   - For each: thesis summary, why now, and expected path

6. Appendix:
   - Detailed performance tables
   - Full holdings list (if appropriate for the audience)
   - Risk statistics
   - Disclosures

Write this with the understanding that it reflects the fund's track record and credibility. Every sentence should demonstrate thoughtfulness and professionalism.`,
              result:
                'A comprehensive quarterly review that demonstrates investment process discipline and builds stakeholder confidence.',
              tip: 'Start the letter with the single most important thing that happened during the quarter - not with "markets were volatile" or performance numbers. Lead with insight, not data.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves a financial analyst in a typical month.',
      timeTable: [
        {
          task: 'Market research and industry analysis',
          without: '2-4 hours/report',
          withAI: '30-45 minutes',
          saved: '2-3 hrs per report',
        },
        {
          task: 'Model documentation',
          without: '2-3 hours (or never)',
          withAI: '20 minutes',
          saved: '2 hrs per model',
        },
        {
          task: 'Investment memo writing',
          without: '3-5 hours/memo',
          withAI: '45-60 minutes',
          saved: '3 hrs per memo',
        },
        {
          task: 'Earnings call analysis',
          without: '2-3 hours/company',
          withAI: '20-30 minutes',
          saved: '2 hrs per company',
        },
        {
          task: 'Presentations and decks',
          without: '4-6 hours/deck',
          withAI: '60-90 minutes',
          saved: '3-4 hrs per deck',
        },
        {
          task: 'Monthly performance reports',
          without: '2-3 hours/report',
          withAI: '30-40 minutes',
          saved: '2 hrs per report',
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
          heading: 'The Analyst\'s Edge',
          paragraphs: [
            'In 2026, the analyst using AI processes 15 earnings transcripts in the time it takes the other analyst to process 3. One delivers the investment memo the same day the thesis forms. The other delivers it a week later, after the window has moved. The cumulative advantage over a year of research cycles is enormous.',
            'Same markets. Same data access. Radically different throughput and speed to insight.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a financial analyst to spend your career formatting reports and writing the same macro overview paragraph every month. You became an analyst because you see patterns others miss and you build theses that generate returns. AI gives you back the time to do the work that actually creates value - the thinking, the analysis, and the conviction.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Earnings call analysis is the fastest win - process your next transcript with AI and feel the difference immediately.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI is part of your analyst workflow. Follow along and check each step off.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'fa-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'fa-1-2', label: 'Create a free Perplexity account for market research' },
            { id: 'fa-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Research a Sector',
          duration: '20 min',
          items: [
            {
              id: 'fa-2-1',
              label: 'Pick an industry or sector you are covering or evaluating',
            },
            {
              id: 'fa-2-2',
              label: 'Run the Industry Analysis prompt with real details',
            },
            {
              id: 'fa-2-3',
              label: 'Cross-reference the output against your existing knowledge and data sources',
            },
          ],
        },
        {
          day: 3,
          title: 'Document a Model',
          duration: '20 min',
          items: [
            {
              id: 'fa-3-1',
              label: 'Pick your most-used model that lacks documentation',
            },
            {
              id: 'fa-3-2',
              label: 'Run the Model Assumptions Documentation prompt',
            },
            {
              id: 'fa-3-3',
              label: 'Save the documentation alongside the model file',
            },
          ],
        },
        {
          day: 4,
          title: 'Write an Investment Memo',
          duration: '25 min',
          items: [
            {
              id: 'fa-4-1',
              label: 'Pick a position or idea you have been meaning to write up',
            },
            {
              id: 'fa-4-2',
              label: 'Run the Investment Thesis Memo prompt with your thesis and data',
            },
            {
              id: 'fa-4-3',
              label: 'Refine the output and add your proprietary analysis',
            },
          ],
        },
        {
          day: 5,
          title: 'Analyze Earnings',
          duration: '20 min',
          items: [
            {
              id: 'fa-5-1',
              label: 'Take a recent earnings transcript from your coverage universe',
            },
            {
              id: 'fa-5-2',
              label: 'Run the Earnings Call Summary prompt',
            },
            {
              id: 'fa-5-3',
              label: 'Compare the AI summary to your manual notes - notice the time difference',
            },
          ],
        },
        {
          day: 6,
          title: 'Build a Presentation',
          duration: '25 min',
          items: [
            {
              id: 'fa-6-1',
              label: 'Run the Board Presentation Outline for your next meeting',
            },
            {
              id: 'fa-6-2',
              label: 'Generate market commentary using the slide content prompt',
            },
            {
              id: 'fa-6-3',
              label: 'Build the deck using the AI-generated outline as your guide',
            },
          ],
        },
        {
          day: 7,
          title: 'Generate a Report and Reflect',
          duration: '15 min',
          items: [
            {
              id: 'fa-7-1',
              label: 'Draft a monthly performance report using the report prompt',
            },
            {
              id: 'fa-7-2',
              label: 'Note which system saved you the most time this week',
            },
            {
              id: 'fa-7-3',
              label: 'Share this guide with a colleague on your team',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
