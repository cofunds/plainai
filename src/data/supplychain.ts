import type { WorkbookData } from './types'

export const supplychainData = {
  professionId: 'supplychain',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Supply Chain Managers',
  heroDescription:
    'Optimize every link in your supply chain. Real tools, proven systems, and copy-paste prompts for demand forecasting, vendor evaluation, logistics planning, inventory management, compliance, and cost analysis.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Tuesday and the forecast is wrong again. Last month you over-ordered on three SKUs and under-ordered on two. The warehouse is sitting on $200K of slow-moving inventory while your best-selling product is backordered for two weeks. A vendor in Southeast Asia missed their shipping window and nobody noticed until the container did not show up. Your logistics partner just raised rates by 12% and the CFO wants to know why freight costs are trending above budget.',
        'There are 47 open purchase orders across 15 vendors in 6 countries. Compliance documentation for the new EU regulation is due in 30 days and you are not sure you have all the certificates. The quarterly cost review meeting is Thursday and you need to present savings opportunities, but building the analysis means pulling data from four systems and three spreadsheets that were last reconciled sometime in the past.',
        'You got into supply chain management because you understand that moving the right product to the right place at the right time at the right cost is what separates companies that thrive from companies that scramble. But instead of spending your time on strategic sourcing, supply network design, and demand planning, you are buried in spreadsheets, email chains with vendors, and documentation that eats your week alive.',
      ],
      highlight:
        'What if the analysis, documentation, and planning that consumes your week could be compressed into hours?',
      closingParagraph:
        'Not by cutting corners on compliance. Not by skipping the evaluation work that prevents supply disruptions. Just by using AI to handle the data synthesis, document drafting, and analytical heavy lifting - so you can focus on the supplier relationships, strategic decisions, and risk management that no tool can replace.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to run your supply chain. It will not negotiate with a vendor who is holding firm on pricing, reroute a shipment stuck in customs, or make the judgment call on whether to dual-source a critical component. It cannot replace the relationships you have built with suppliers over years or the instinct that tells you when a delivery promise is optimistic. The human side of supply chain - the negotiations, the risk judgment, the crisis management - that stays with you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most capable supply chain analyst you have ever worked with. One who can analyze demand patterns and generate forecast narratives in 5 minutes. Who can build a vendor evaluation scorecard with weighted criteria while you are on a call. Who can draft compliance documentation, cost analysis reports, and logistics optimization proposals without needing to be told where the data is.',
            'Need to compare five vendors across 20 criteria? AI builds the scorecard and formats the analysis. Need to calculate reorder points for 50 SKUs? Feed it the data and get calculations with safety stock recommendations. Need to write a cost reduction proposal for leadership? AI structures the narrative with supporting data while you verify the numbers.',
            'You bring the supply chain expertise, the vendor relationships, and the strategic thinking. AI brings the analytical speed, the documentation capacity, and the ability to produce polished outputs from raw data. Together, you manage a supply chain with the analytical depth of a team three times your size.',
          ],
        },
      ],
      keyInsight:
        'Your supply chain expertise + AI\'s analytical speed = better forecasts, smarter sourcing, and faster decisions. The supply chain manager who shows up with data-backed analysis wins the budget conversation every time.',
    },

    ch3: {
      intro: 'Five tools that cover the full supply chain management workflow. Start with two, add the rest when you are ready.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your analysis and documentation engine',
          description:
            'Demand narratives, vendor communications, cost analyses, compliance documents, logistics plans - any text-heavy supply chain task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your deep analysis and reasoning partner',
          description:
            'Complex cost models, detailed vendor comparisons, multi-variable optimization analysis, long-form compliance documentation - excels at structured depth',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for complex analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your market intelligence assistant',
          description:
            'Supplier research, commodity pricing trends, regulatory updates, logistics benchmarks, industry best practices - sourced answers you can reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your supply chain knowledge base',
          description:
            'Vendor databases, compliance trackers, SOP libraries, meeting notes, procurement workflows - your single source of truth with AI built in',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual reporting tool',
          description:
            'Supply chain dashboards, cost analysis presentations, process flow diagrams, vendor comparison visuals for leadership and stakeholder reporting',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Visualize supply data',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That combination covers analysis, documentation, and market intelligence. Add Notion AI for organization and Canva for presentations when ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual supply chain workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Demand Forecasting Analysis',
          before:
            'Demand planning means pulling historical sales data from one system, adjusting for seasonality in your head, factoring in marketing promotions from a calendar someone may or may not have updated, and producing a forecast in a spreadsheet that is outdated the moment you finish it. When the forecast is wrong - and it always is - you either have excess inventory or stockouts.',
          after:
            'Feed AI your historical data, seasonality patterns, and known variables. It generates a forecast narrative with assumptions clearly stated, confidence ranges, and scenario models. Forecasting shifts from a gut-feel exercise to a documented, repeatable analysis.',
          flow: [
            'Compile historical demand data and known variables',
            'AI generates a forecast with assumptions and confidence ranges',
            'Review and adjust for factors AI cannot see (market shifts, promotions)',
            'AI produces scenario models (optimistic, baseline, conservative)',
            'Document the forecast rationale for future reference and accountability',
          ],
          timeSaved: { without: '1-2 days per forecast cycle', withAI: '2-3 hours' },
        },
        {
          id: 2,
          name: 'Vendor Evaluation and Selection',
          before:
            'Evaluating a new vendor means collecting proposals that all look different, trying to compare apples to oranges on pricing structures, making calls to check references, and building a comparison that is part spreadsheet and part gut feel. The decision is often made by whoever lobbied the hardest, not by who scored the best.',
          after:
            'AI builds structured vendor scorecards with weighted criteria, normalizes different pricing structures for comparison, and generates evaluation reports. Vendor selection becomes transparent, documented, and defensible.',
          flow: [
            'Define evaluation criteria and assign weights',
            'AI generates a standardized vendor scorecard',
            'Input vendor data from proposals and reference checks',
            'AI scores vendors and generates a comparison report',
            'Review analysis and make the final selection with documented rationale',
          ],
          timeSaved: { without: '1-2 weeks per evaluation', withAI: '1-2 days' },
        },
        {
          id: 3,
          name: 'Logistics Route Optimization',
          before:
            'Logistics planning relies on established routes and carrier relationships. When costs spike or delays occur, analyzing alternatives takes weeks of research, rate requests, and spreadsheet modeling. Route optimization happens annually if at all, and by the time you finish the analysis, conditions have changed.',
          after:
            'AI analyzes your current logistics setup, identifies cost and time inefficiencies, and generates optimization proposals with estimated savings. Route analysis that took weeks becomes a structured exercise you can update quarterly.',
          flow: [
            'Input current routes, carriers, costs, and transit times',
            'AI identifies inefficiencies and high-cost segments',
            'Generate alternative routing scenarios with cost comparisons',
            'Review feasibility and factor in service level requirements',
            'Build an implementation plan for approved changes',
          ],
          timeSaved: { without: '2-3 weeks per analysis', withAI: '2-3 days' },
        },
        {
          id: 4,
          name: 'Inventory Management',
          before:
            'Reorder points are set once and rarely updated. Safety stock calculations are either overly conservative (tying up capital) or too aggressive (causing stockouts). ABC analysis gets done annually at best. Slow-moving inventory piles up because nobody has time to review and act on the aging report.',
          after:
            'AI calculates optimal reorder points, safety stock levels, and EOQ based on your actual data. It identifies slow-moving inventory with liquidation recommendations and generates ABC analysis updates. Inventory optimization becomes a monthly routine instead of an annual project.',
          flow: [
            'Export inventory data - demand rates, lead times, costs',
            'AI calculates reorder points and safety stock for key SKUs',
            'Review recommendations against business context',
            'AI identifies aging inventory and suggests disposition strategies',
            'Update parameters in your inventory system',
          ],
          timeSaved: { without: '2-3 days per review cycle', withAI: '3-4 hours' },
        },
        {
          id: 5,
          name: 'Compliance and Documentation',
          before:
            'Compliance documentation is a constant background anxiety. Certificates expire, regulations change, and tracking which vendors have current documentation is a spreadsheet nightmare. When an audit happens, you spend days pulling together documentation that should be organized but never is.',
          after:
            'AI drafts compliance documentation, generates audit checklists, tracks certificate requirements, and creates regulatory summaries. Compliance shifts from a panic-inducing project to a manageable routine.',
          flow: [
            'Identify the compliance requirement or regulation',
            'AI generates a requirements checklist and documentation template',
            'Input your specific data and vendor information',
            'AI drafts compliance documents and identifies gaps',
            'Review, finalize, and store in your compliance tracking system',
          ],
          timeSaved: { without: '3-5 days per audit cycle', withAI: '1 day' },
        },
        {
          id: 6,
          name: 'Cost Reduction Analysis',
          before:
            'Cost reduction analysis requires pulling data from procurement, logistics, warehousing, and inventory systems. By the time you build the analysis, the numbers are stale. Presenting savings opportunities to leadership means building a business case from scratch every time. Quick wins get lost because nobody has time to find them.',
          after:
            'AI synthesizes cost data across supply chain functions, identifies savings opportunities, and generates business cases with ROI estimates. Cost reduction moves from a quarterly scramble to a continuous process.',
          flow: [
            'Compile cost data across procurement, logistics, and warehousing',
            'AI analyzes for savings opportunities by category',
            'Review and validate the most promising opportunities',
            'AI generates a business case for each recommendation',
            'Present to leadership with clear ROI and implementation timeline',
          ],
          timeSaved: { without: '1-2 weeks quarterly', withAI: '2-3 days' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Demand Forecasting',
          prompts: [
            {
              id: 'sc-p-1-1',
              title: 'Demand Forecast Narrative',
              task: 'Generate a demand forecast with analysis and assumptions',
              prompt: `Generate a demand forecast narrative based on this historical data.

Product/SKU: [name or category]
Forecast period: [next quarter / next 6 months / next year]
Industry: [your industry]

Historical demand data:
[Paste your data - monthly or weekly units sold]
- Month 1: [units]
- Month 2: [units]
- Month 3: [units]
[Continue for all available periods - the more data, the better]

Known variables:
- Seasonality patterns: [describe any known seasonal trends]
- Planned promotions: [upcoming marketing campaigns or sales events]
- Market changes: [new competitors, regulatory changes, economic conditions]
- Supply constraints: [any known supply limitations]
- Price changes: [any planned price adjustments]

Generate:

1. Demand Forecast
- Month-by-month forecast for the target period
- Confidence range for each month (optimistic / baseline / conservative)
- Year-over-year comparison where applicable

2. Trend Analysis
- Overall demand trend (growing, stable, declining) with growth rate
- Seasonal patterns identified in the data
- Anomalies or outliers that should be noted

3. Assumptions (this is critical)
- List every assumption the forecast is based on
- Sensitivity analysis: what happens if each assumption is wrong?
- Which assumptions carry the most risk?

4. Scenario Models
- Optimistic scenario: [X]% above baseline - when and why this could happen
- Baseline scenario: most likely outcome with rationale
- Conservative scenario: [X]% below baseline - when and why this could happen

5. Inventory Implications
- Recommended procurement quantities based on the forecast
- Key decision dates (when to commit to orders)
- Risk of stockout vs overstock for each scenario

6. Recommended Actions
- 3-5 specific actions to take based on this forecast
- Triggers that would require reforecasting (what changes should prompt an update)

Format for leadership review. Include the data, but lead with the narrative.`,
              result:
                'A documented, defensible demand forecast that goes beyond a spreadsheet of numbers.',
              tip: 'Always state your assumptions. A forecast without visible assumptions is just a guess that nobody can challenge or improve.',
            },
            {
              id: 'sc-p-1-2',
              title: 'Demand Variance Analysis',
              task: 'Analyze why actual demand differed from forecast',
              prompt: `Analyze the variance between our demand forecast and actual results.

Product/Category: [name]
Analysis period: [timeframe]

Forecast vs Actual:
[Provide the data]
- Period 1: Forecast [X] | Actual [Y] | Variance [Z]%
- Period 2: Forecast [X] | Actual [Y] | Variance [Z]%
[Continue for all periods]

Context:
- What happened in the market during this period: [events, competitor moves, economic changes]
- Internal changes: [pricing, promotions, product changes]
- Supply disruptions: [any stockouts that affected demand measurement]
- Weather or external factors: [anything unusual]

Analyze:

1. Variance Summary
- Total forecast accuracy (MAPE or other metric)
- Trend in accuracy (getting better or worse?)
- Systematic bias (consistently over or under forecasting?)

2. Root Cause Analysis
- For each significant variance: what caused it?
- Categorize causes: demand-side (market change) vs supply-side (stockout) vs process-side (bad data)
- Which causes were foreseeable vs unforeseeable?

3. Pattern Recognition
- Are certain products or categories consistently off?
- Are certain time periods consistently off (e.g., always wrong around holidays)?
- Is the error random or systematic?

4. Forecast Process Improvements
- What should change in our forecasting approach?
- Data sources to add or improve
- Assumptions to update for next cycle
- Variables we are underweighting or overweighting

5. Financial Impact
- Cost of forecast errors (excess inventory carrying cost, lost sales from stockouts)
- What accuracy improvement would save (10% better forecast = $X savings)

6. Next Forecast Adjustments
- Specific adjustments for the next forecast cycle
- New baseline assumptions
- Monitoring plan for key variables

Keep the analysis actionable. Understanding why we were wrong matters only if it makes us less wrong next time.`,
              result:
                'A root cause analysis that improves future forecast accuracy.',
              tip: 'Track forecast accuracy over time. Showing improvement in accuracy is one of the highest-value metrics for supply chain leadership.',
            },
            {
              id: 'sc-p-1-3',
              title: 'Seasonal Demand Planner',
              task: 'Build a seasonal demand planning document',
              prompt: `Build a seasonal demand plan for the upcoming period.

Product portfolio: [describe your products or categories]
Planning period: [which season - e.g., Q4 holiday, summer peak, back-to-school]
Historical seasonal data:
[Provide past seasonal performance]
- Same period last year: [units/revenue by category]
- Same period two years ago: [units/revenue by category]
- YTD trend this year vs last year: [percentage change]

Market context:
- Consumer confidence/spending trends: [up/down/stable]
- Competitor activity expected: [any known competitor launches or promotions]
- Channel mix changes: [shifts in where customers buy]
- Pricing strategy for the season: [any planned changes]

Generate:

1. Seasonal Demand Forecast
- Category-by-category forecast for the seasonal period
- Week-by-week or month-by-month breakdown
- Peak period identification

2. Procurement Plan
- What to order, how much, and when (order dates to meet lead times)
- Vendor allocation (which vendors for which products)
- Rush order contingency (what to do if demand exceeds forecast)
- Pre-season inventory positioning

3. Capacity Planning
- Warehouse space requirements during peak
- Staffing needs (temporary labor, overtime projections)
- Logistics capacity (carrier availability during peak)

4. Risk Mitigation
- Top 5 seasonal risks and contingency plans
- Buffer inventory recommendations by category
- Alternative supplier options for critical products
- Communication plan for vendor delays

5. Financial Projections
- Expected revenue by category
- Inventory investment required
- Logistics cost estimate
- Target margins and break-even volumes

6. Post-Season Plan
- Markdown and clearance strategy for excess inventory
- Lessons learned capture process
- Transition plan back to regular operations

This plan should be executable. No theory - just decisions and timelines.`,
              result:
                'A complete seasonal plan that covers procurement, logistics, and risk management.',
              tip: 'Start planning one full lead-time cycle before the season. If your average lead time is 8 weeks, start the plan 10-12 weeks out.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Vendor Evaluation',
          prompts: [
            {
              id: 'sc-p-2-1',
              title: 'Vendor Scorecard Builder',
              task: 'Build a weighted scorecard to evaluate and compare vendors',
              prompt: `Build a vendor evaluation scorecard for selecting a new [product/service type] supplier.

Context:
- What the vendor will supply: [describe the product/service]
- Annual volume: [estimated annual quantity or spend]
- Number of vendors being evaluated: [count]
- Key priority: [cost / quality / reliability / speed / all balanced]
- Industry: [your industry - affects compliance requirements]

Build a scorecard with weighted categories:

1. Quality and Consistency (weight: [X]%)
- Product quality control processes
- Defect rate / rejection rate history
- Quality certifications held
- Sample/prototype evaluation results
- Consistency across batches/orders

2. Cost Competitiveness (weight: [X]%)
- Unit pricing vs market benchmark
- Total cost of ownership (including freight, duties, handling)
- Volume discount structure
- Price stability and escalation terms
- Payment terms

3. Reliability and Delivery (weight: [X]%)
- On-time delivery track record
- Lead time consistency
- Capacity to meet demand spikes
- Communication quality during delays
- Backup plans for disruptions

4. Compliance and Risk (weight: [X]%)
- Regulatory compliance certifications
- Financial stability assessment
- Geographic risk (political, natural disaster, logistics)
- Insurance and liability coverage
- Environmental and labor compliance

5. Strategic Fit (weight: [X]%)
- Willingness to invest in partnership
- Innovation capability
- Scalability with our growth
- Cultural and communication fit
- Technology integration capability

For each sub-criterion:
- Scoring rubric (1-5 with descriptions for each score)
- Data source (where to find this information)
- Red flag indicators

Include:
- Final scoring template with weighted calculations
- Tier classification: Strategic Partner / Approved Vendor / Conditional / Not Recommended
- Decision documentation template

Format as a reusable framework.`,
              result:
                'A comprehensive vendor scorecard that makes sourcing decisions transparent and data-driven.',
              tip: 'Adjust the weights for each sourcing decision based on what matters most. A critical component needs higher reliability weighting than a commodity item.',
            },
            {
              id: 'sc-p-2-2',
              title: 'Vendor Performance Review',
              task: 'Create a quarterly vendor performance review',
              prompt: `Create a quarterly vendor performance review.

Vendor: [name]
Product/Service: [what they supply]
Review period: [quarter and year]
Contract value: [annual spend]
Relationship duration: [how long you have worked together]

Performance data:
- On-time delivery rate: [X]% (target: [Y]%)
- Quality acceptance rate: [X]% (target: [Y]%)
- Average lead time: [X days] (contracted: [Y days])
- Cost variance from contract: [+/- X]%
- Response time to issues: [average time]
- Number of quality incidents: [count]
- Number of delivery exceptions: [count]

Generate:

1. Performance Dashboard
- Metric-by-metric comparison vs targets (table format)
- RAG status for each metric
- Trend vs previous quarter

2. Strengths Assessment
- Top 3 areas where the vendor excels
- Specific examples and data points
- How these strengths benefit our operations

3. Improvement Areas
- Top 3 areas needing improvement
- Impact of current underperformance on our operations
- Specific improvement targets for next quarter
- Support we can provide to help them improve

4. Cost Analysis
- Total spend this quarter vs budget
- Price competitiveness vs market rates
- Hidden costs identified (expediting fees, quality holds, etc.)
- Savings opportunities

5. Risk Assessment
- Single-source dependency risk
- Financial health indicators (if available)
- Geopolitical or logistical risk changes
- Compliance status and upcoming requirements

6. Relationship Score (1-10)
- Communication quality
- Responsiveness
- Transparency
- Partnership mindset

7. Recommendation
- Continue and expand / Continue as-is / Continue with improvement plan / Reduce volume / Replace
- Specific action items with deadlines
- Topics for the quarterly review meeting

Keep this document factual and fair. Good vendor management is about partnership, not punishment.`,
              result:
                'A thorough vendor review that drives performance improvement through transparency.',
              tip: 'Share a summary of this with the vendor before the review meeting. Vendors improve faster when they can prepare for the conversation.',
            },
            {
              id: 'sc-p-2-3',
              title: 'Vendor Risk Assessment',
              task: 'Assess supply chain risk for a specific vendor',
              prompt: `Assess supply chain risk for a specific vendor or supplier.

Vendor: [name]
Location: [country/region]
Product/Service: [what they provide]
Our dependency level: [% of our supply that comes from this vendor]
Contract status: [active until date / in negotiation / no contract]

Known information:
- Vendor size/revenue: [if known]
- Years in business: [if known]
- Other major customers: [if known]
- Recent issues or concerns: [any known problems]

Assess risk across these dimensions:

1. Supply Continuity Risk
- Single-source dependency assessment
- Production capacity utilization (how close to their max?)
- Historical reliability data
- Vulnerability to demand spikes
- Risk score: 1-10

2. Geographic Risk
- Political stability of vendor\'s region
- Natural disaster exposure
- Logistics complexity (ports, routes, transit time)
- Regulatory environment and trade policy risks
- Risk score: 1-10

3. Financial Risk
- Indicators of financial health
- Dependency on our business (too much or too little?)
- Credit and payment history
- Insurance and liability adequacy
- Risk score: 1-10

4. Quality Risk
- Quality control maturity
- Certification status and validity
- History of quality incidents
- Process for handling quality failures
- Risk score: 1-10

5. Compliance Risk
- Regulatory compliance status
- Environmental compliance
- Labor practice concerns
- Data security and IP protection
- Risk score: 1-10

6. Overall Risk Profile
- Composite risk score
- Top 3 risks requiring immediate attention
- Risk trend (getting better or worse?)

7. Mitigation Plan
- For each high-risk area: specific mitigation actions
- Dual-sourcing strategy (if applicable)
- Monitoring plan and review frequency
- Escalation triggers (at what point do we activate contingency?)
- Exit strategy (if we need to replace this vendor, the plan and timeline)

Keep the assessment practical. Every identified risk should have a mitigation action.`,
              result:
                'A comprehensive vendor risk profile that enables proactive supply chain risk management.',
              tip: 'Conduct this assessment annually for all critical vendors and quarterly for your top 3. Risk profiles change - your assessment should too.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Logistics Optimization',
          prompts: [
            {
              id: 'sc-p-3-1',
              title: 'Route Analysis and Optimization',
              task: 'Analyze current logistics routes for cost and efficiency improvements',
              prompt: `Analyze our current logistics routes and identify optimization opportunities.

Current logistics setup:
- Origin points: [where products ship from - factories, warehouses]
- Destination points: [where products ship to - DCs, stores, customers]
- Modes of transport: [ocean, air, truck, rail, intermodal]
- Current carriers: [list primary carriers]

Route data:
[For each major route, provide:]
- Route 1: [Origin] to [Destination]
  - Mode: [transport mode]
  - Carrier: [name]
  - Cost: [per unit or per shipment]
  - Transit time: [days]
  - Volume: [monthly shipments or units]
  - On-time rate: [percentage]
  - Issues: [known problems]
[Continue for all major routes]

Annual logistics spend: [total]
Key pain points: [what frustrates you most about current logistics]

Analyze and generate:

1. Current State Assessment
- Total logistics cost breakdown by route and mode
- Cost per unit shipped by route
- Transit time analysis and variability
- Reliability scorecard by route and carrier

2. Inefficiency Identification
- Routes with above-average cost per unit
- Routes with poor on-time performance
- Underutilized capacity (partial shipments, LTL that could consolidate)
- Mode optimization opportunities (air to ocean, LTL to FTL, etc.)

3. Optimization Recommendations (ranked by savings potential)
- Recommendation 1: [specific change] - Estimated savings: [$X/year]
- Recommendation 2: [specific change] - Estimated savings: [$X/year]
[Continue for all recommendations]

4. Implementation Plan
- Quick wins (implementable in 30 days)
- Medium-term changes (60-90 days)
- Strategic shifts (6-12 months)
- For each: steps, resources needed, risks

5. Carrier Evaluation Triggers
- When to rebid routes
- Performance thresholds that trigger carrier review
- Market conditions that warrant rate renegotiation

Keep the analysis practical. Theoretical optimal routes that ignore service level requirements are not useful.`,
              result:
                'A data-driven logistics analysis with specific, implementable cost reduction opportunities.',
              tip: 'Start with your highest-volume or highest-cost routes. A 5% improvement on your top route saves more than a 50% improvement on a minor one.',
            },
            {
              id: 'sc-p-3-2',
              title: 'Freight Cost Comparison',
              task: 'Compare freight options for a specific shipping need',
              prompt: `Compare freight options for a specific shipping need.

Shipment details:
- Origin: [full origin address/port]
- Destination: [full destination address/port]
- Cargo: [product description, weight, dimensions, quantity]
- Commodity type: [general cargo, hazmat, temperature controlled, etc.]
- Required delivery date: [date or transit time requirement]
- Frequency: [one-time / weekly / monthly / ongoing]
- Special requirements: [insurance, tracking, customs, etc.]

Current approach: [how you ship this today and what it costs]

Compare these options:

1. Ocean Freight (FCL and LCL)
- Estimated cost range
- Transit time
- Pros and cons for this shipment
- Best suited when: [conditions]

2. Air Freight
- Estimated cost range
- Transit time
- Pros and cons for this shipment
- Best suited when: [conditions]

3. Intermodal (Rail + Truck)
- Estimated cost range
- Transit time
- Pros and cons for this shipment
- Best suited when: [conditions]

4. Expedited/Express Options
- Estimated cost range
- Transit time
- When this makes financial sense

For each option, also provide:
- Total landed cost estimate (freight + duties + handling + insurance)
- Risk factors (delays, damage, customs)
- Carbon footprint comparison (if relevant)
- Recommended carrier types to approach

Generate a comparison matrix:
- Rows: each option
- Columns: cost, transit time, reliability, flexibility, risk, carbon impact
- Highlight the recommended option with rationale

Include a decision framework: when to choose each option based on urgency, cost sensitivity, and volume.`,
              result:
                'A clear freight comparison that supports data-driven shipping decisions.',
              tip: 'Build these comparisons for your top 5 lanes. Having the analysis ready means you can switch modes quickly when conditions change.',
            },
            {
              id: 'sc-p-3-3',
              title: 'Logistics KPI Dashboard',
              task: 'Create a logistics performance dashboard',
              prompt: `Create a logistics performance dashboard based on our current data.

Report period: [month/quarter]
Scope: [domestic / international / both]

Logistics data:
[Provide whatever metrics you have]
- Total shipments: [count]
- On-time delivery rate: [%]
- Average transit time: [days]
- Total freight spend: [$]
- Damage/claim rate: [%]
- Cost per unit shipped: [$]
- Carrier performance: [by carrier if available]
- Mode split: [% by transport mode]
[Add any other metrics you track]

Previous period comparison:
[Same metrics for the previous period for trend analysis]

Generate:

1. Executive Dashboard (1 page)
- 5 headline metrics with trend arrows
- Overall logistics health: Green / Yellow / Red
- One-sentence summary of the period

2. Performance Deep Dive
- On-time delivery analysis (by lane, carrier, mode)
- Transit time trends and variability
- Cost trends and budget variance
- Damage and claims analysis

3. Cost Analysis
- Spend by carrier, mode, and lane
- Cost per unit trends
- Budget variance with explanations
- Opportunities for savings identified

4. Carrier Performance Report Card
- Scorecard for each major carrier
- Rankings by performance metrics
- Action items for underperforming carriers

5. Operational Issues
- Top 5 issues this period (delays, claims, cost overruns)
- Root cause for each
- Status of corrective actions

6. Forward Look
- Upcoming volume changes
- Carrier contract expirations
- Seasonal capacity concerns
- Rate trend outlook

7. Action Items
- Specific actions with owners and deadlines
- Carry-forward items from previous period
- Escalations needed

Format this so it can be presented to leadership in 10 minutes or sent as a standalone report.`,
              result:
                'A comprehensive logistics dashboard that drives accountability and improvement.',
              tip: 'Automate the data collection. If pulling the data takes longer than analyzing it, fix the data pipeline first.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Inventory Management',
          prompts: [
            {
              id: 'sc-p-4-1',
              title: 'Reorder Point Calculator',
              task: 'Calculate optimal reorder points and safety stock',
              prompt: `Calculate optimal reorder points and safety stock levels.

Product/SKU portfolio:
[For each item, provide:]
- SKU 1: [name/ID]
  - Average daily demand: [units]
  - Demand variability: [standard deviation if known, or "stable" / "moderate" / "variable"]
  - Lead time: [days from order to receipt]
  - Lead time variability: [consistent / sometimes delayed / highly variable]
  - Unit cost: [$]
  - Stockout impact: [critical / high / moderate / low]
  - Current reorder point: [if set]
  - Current safety stock: [if set]
[Continue for all SKUs - do at least 5-10 for a useful analysis]

Service level target: [e.g., 95%, 97%, 99% - what percentage of demand should be met from stock]
Carrying cost rate: [annual % of inventory value - typically 20-30%]

For each SKU, calculate:

1. Reorder Point (ROP)
- Formula used and calculation
- Recommended ROP in units
- Comparison to current ROP (if provided)

2. Safety Stock
- Formula used and calculation
- Recommended safety stock in units
- Safety stock in days of supply
- Annual carrying cost of recommended safety stock

3. Economic Order Quantity (EOQ)
- Optimal order quantity
- Order frequency (how often to order)
- Total annual cost at EOQ vs current ordering pattern

4. Summary Table
- SKU | Current ROP | Recommended ROP | Safety Stock | EOQ | Annual Carrying Cost
- Highlight significant changes from current settings

5. Financial Impact
- Total inventory investment change (up or down)
- Expected stockout reduction
- Carrying cost change
- Net financial impact

6. Implementation Priority
- Which SKUs to update first (based on impact and risk)
- Transition approach (phase in over weeks, not all at once)
- Monitoring plan (how to verify the new settings are working)

Show the formulas so the analysis can be verified and updated.`,
              result:
                'Data-driven reorder points that balance service levels with inventory investment.',
              tip: 'Recalculate quarterly. Demand patterns change, lead times shift, and your reorder points should reflect current reality - not last year\'s assumptions.',
            },
            {
              id: 'sc-p-4-2',
              title: 'Slow-Moving Inventory Analysis',
              task: 'Analyze slow-moving and excess inventory for action',
              prompt: `Analyze our slow-moving and excess inventory and recommend actions.

Inventory data:
[For each item or category with excess/slow-moving stock:]
- Item 1: [name/SKU]
  - Quantity on hand: [units]
  - Months of supply: [based on current demand rate]
  - Last sold/used: [date]
  - Unit cost: [original cost]
  - Current market value estimate: [if known]
  - Age of oldest units: [months/years]
  - Reason for excess: [overforecast / discontinued / seasonal leftover / quality hold / other]
[Continue for all items]

Total value of slow-moving inventory: [$]
Warehouse cost per pallet per month: [$]
Company margin targets: [gross margin %]

Analyze:

1. Inventory Aging Summary
- Categorize by age: 0-90 days / 91-180 days / 181-365 days / 365+ days
- Value in each category
- Carrying cost per category per month

2. Risk Classification
- Category A: Still has demand, just over-ordered (can sell through)
- Category B: Declining demand, needs promotional help
- Category C: No demand, must be liquidated or written off
- Category D: Obsolete or quality concern, requires disposal

3. Action Plan by Category
- Category A items:
  - Adjust reorder points downward
  - Expected sellthrough timeline
- Category B items:
  - Promotional pricing recommendations
  - Alternative channels to explore
  - Bundle or kit opportunities
- Category C items:
  - Liquidation channel recommendations (brokers, discount sites, donation)
  - Expected recovery value
  - Write-off timing recommendation
- Category D items:
  - Disposal plan and cost
  - Write-off amount

4. Financial Impact
- Total carrying cost of current excess inventory
- Projected recovery value if action plan is executed
- Net write-off or gain
- Cash flow timeline

5. Prevention Recommendations
- What process changes would have prevented this excess?
- Forecast improvements needed
- Procurement rule changes
- Reporting cadence to catch slow-moving inventory earlier

This should be presentable to finance as a recovery and prevention plan.`,
              result:
                'A structured plan to turn slow-moving inventory from a warehouse problem into recovered cash and better processes.',
              tip: 'Run this monthly. Inventory aging accelerates - what is Category B this month becomes Category C in 90 days.',
            },
            {
              id: 'sc-p-4-3',
              title: 'ABC Inventory Analysis',
              task: 'Conduct an ABC analysis of your inventory portfolio',
              prompt: `Conduct an ABC inventory analysis for my product portfolio.

Inventory data:
[Provide for each SKU or product category:]
- Item: [name/SKU]
- Annual units sold: [quantity]
- Unit cost: [$]
- Annual revenue: [$]
- Current inventory level: [units]
- Lead time: [days]
[Continue for all items - the more the better, but at least 15-20]

Business context:
- Total SKU count: [number]
- Total annual revenue: [$]
- Total inventory value: [$]
- Industry: [your industry]

Generate:

1. ABC Classification
- A Items: Top 20% of SKUs driving 80% of revenue
  - List each item with revenue contribution
  - Recommended inventory policy (high service level, frequent review)
- B Items: Next 30% driving 15% of revenue
  - List each item with revenue contribution
  - Recommended inventory policy (moderate controls)
- C Items: Bottom 50% driving 5% of revenue
  - Summary view (too many to list individually)
  - Recommended inventory policy (simplified, lower investment)

2. Classification Summary Table
- Category | SKU Count | % of SKUs | Revenue | % of Revenue | Inventory Value | % of Value

3. Policy Recommendations by Category
- A Items:
  - Review frequency: [daily/weekly]
  - Safety stock approach: [higher service level target]
  - Forecasting approach: [detailed, item-level]
  - Supplier strategy: [preferred suppliers, safety agreements]
- B Items:
  - Review frequency: [weekly/biweekly]
  - Safety stock approach: [standard levels]
  - Forecasting approach: [category-level acceptable]
- C Items:
  - Review frequency: [monthly]
  - Safety stock approach: [minimal]
  - Ordering approach: [batch ordering, higher MOQs]
  - Candidates for consolidation or elimination

4. Cross-Analysis
- XYZ overlay: demand variability by ABC class (if data supports it)
- Items that are C by revenue but critical for operations
- Items that are misclassified by current treatment

5. Action Items
- Top 10 items to adjust inventory policy immediately
- Items to consider discontinuing
- Items to consider safety stock increases
- Recommended re-classification review schedule

6. Financial Impact
- Estimated inventory reduction from applying ABC policies
- Service level impact (positive and negative)
- Working capital improvement estimate

This analysis should be refreshed semi-annually or when the product mix changes significantly.`,
              result:
                'A complete ABC analysis with differentiated inventory policies that optimize working capital.',
              tip: 'Do not treat all inventory the same. The whole point of ABC analysis is to focus your attention and investment on the items that drive your business.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Compliance and Documentation',
          prompts: [
            {
              id: 'sc-p-5-1',
              title: 'Customs Documentation Checklist',
              task: 'Generate a customs documentation checklist for an import shipment',
              prompt: `Generate a customs documentation checklist for an import shipment.

Shipment details:
- Origin country: [country]
- Destination country: [country]
- Product type: [description]
- HS Code: [if known, or describe the product for classification]
- Shipment value: [$]
- Incoterms: [e.g., FOB, CIF, DDP]
- Mode of transport: [ocean / air / ground]
- Frequency: [one-time / regular shipment]

Special considerations:
- Regulated product: [yes/no - if yes, what regulations]
- Free trade agreement applicable: [yes/no - which one]
- Special import program: [if any]
- Known restrictions: [any known import restrictions]

Generate:

1. Required Documents Checklist
For each document:
- Document name
- Who provides it (buyer, seller, carrier, broker, government)
- When it is needed (before shipment, at departure, at arrival, for clearance)
- Common mistakes to avoid
- Template or format requirements

Include at minimum:
- Commercial invoice
- Packing list
- Bill of lading / airway bill
- Certificate of origin
- Insurance certificate
- Import permits (if required)
- Phytosanitary / health certificates (if required)
- Customs declaration forms
- Product-specific certificates (safety, testing, compliance)

2. Timeline
- Document preparation timeline (what needs to happen by when)
- Critical path items (documents that will delay clearance if missing)

3. Cost Estimates
- Duty rate estimate based on HS code and origin
- Applicable taxes (VAT, GST, etc.)
- Broker fees estimate
- Government inspection fees (if applicable)
- Free trade agreement savings (if applicable)

4. Compliance Checklist
- Product marking and labeling requirements
- Country-of-origin marking requirements
- Safety and testing requirements
- Recordkeeping requirements and retention periods

5. Common Issues and How to Avoid Them
- Top 5 reasons shipments get held at customs
- How to prevent each one
- What to do if a shipment is held

6. Contacts and Resources
- Key contacts needed (broker, carrier, vendor compliance)
- Government resources for updated requirements
- Free trade agreement verification resources

This checklist should be usable as a step-by-step guide for each shipment.`,
              result:
                'A comprehensive customs checklist that prevents delays and compliance issues.',
              tip: 'Build one master checklist per origin/destination combination. Customize it for each shipment rather than starting from scratch.',
            },
            {
              id: 'sc-p-5-2',
              title: 'Compliance Audit Preparation',
              task: 'Prepare for a supply chain compliance audit',
              prompt: `Help me prepare for a supply chain compliance audit.

Audit type: [customs audit / supplier audit / internal quality audit / regulatory audit / ISO audit]
Auditing body: [who is conducting the audit]
Scope: [what areas are being audited]
Audit date: [when]
Last audit: [date and outcome]

Our current compliance status:
- Known gaps: [areas you know need work]
- Recent changes: [any process or regulatory changes since last audit]
- Open corrective actions: [from previous audits]

Generate:

1. Audit Preparation Checklist
- Documents to gather and organize (30-60 days before)
- Records to review and validate (14-30 days before)
- People to brief and prepare (7-14 days before)
- Physical spaces to organize (3-7 days before)
- Day-of logistics and setup

2. Document Readiness Matrix
- Document type | Required | Available | Status (Ready / Needs Update / Missing)
- Priority actions for any missing or outdated documents

3. Common Audit Findings (by audit type)
- Top 10 findings auditors look for in this type of audit
- For each: what they look for, where to check, how to fix it before the audit

4. Interview Preparation
- Questions auditors are likely to ask
- Who should answer each type of question
- Key talking points and evidence to reference
- Things to never say during an audit

5. Gap Remediation Plan
- For each known gap: remediation steps, owner, and deadline
- Priority: Fix before audit / Address during audit / Post-audit action plan
- Quick wins that can be completed before audit date

6. Audit Day Plan
- Schedule and logistics
- Roles and responsibilities
- Communication protocol during the audit
- Document management (how to provide requested documents quickly)
- Issue management (what to do if a finding surfaces real-time)

7. Post-Audit Actions
- Corrective action response template
- Timeline expectations for responses
- Follow-up documentation requirements

This should reduce audit anxiety and increase the likelihood of a clean result.`,
              result:
                'An audit preparation guide that turns compliance reviews from stressful events into manageable processes.',
              tip: 'Start preparation 60 days before the audit. The teams that pass audits cleanly are the ones that prepare early, not the ones that scramble.',
            },
            {
              id: 'sc-p-5-3',
              title: 'Supplier Compliance Documentation',
              task: 'Create a supplier compliance requirements package',
              prompt: `Create a supplier compliance requirements package.

Our company: [name and industry]
Applicable regulations: [list relevant regulations - e.g., FDA, EU REACH, conflict minerals, C-TPAT, CTPAT, etc.]
Supplier type: [raw material / component / finished goods / service provider]
Supplier location: [country/region]
Product category: [what they supply]

Generate:

1. Supplier Compliance Requirements Document
- Overview of our compliance expectations
- Regulatory requirements applicable to this supplier type
- Our code of conduct summary (key expectations)
- Quality requirements and standards
- Environmental requirements
- Labor and human rights requirements
- Security requirements (if applicable)

2. Required Certifications Checklist
- Certification | Required vs Recommended | Validity Period | Verification Method
- For each: what to check and what constitutes a valid certificate

3. Compliance Documentation Package (what we need from the vendor)
- Initial qualification documents
- Ongoing compliance documents (annual, per-shipment, per-change)
- Format and submission requirements
- Deadline for each document type

4. Self-Assessment Questionnaire
- 25-30 questions covering all compliance areas
- Scored responses (1-5 scale with descriptions)
- Minimum passing score
- Red-flag responses that trigger additional review

5. Audit Rights and Expectations
- Our right to audit (what the contract should include)
- Audit frequency and scope
- Pre-audit questionnaire
- Post-audit corrective action process

6. Non-Compliance Management
- Severity levels for compliance violations
- Corrective action process and timelines
- Escalation path
- Conditions for business suspension or termination
- Communication templates for compliance issues

7. Compliance Calendar
- Monthly/quarterly/annual compliance activities
- Document renewal tracking
- Regulatory update review schedule

Format this as a professional document that can be sent to vendors as part of onboarding or contract renewal.`,
              result:
                'A complete supplier compliance package that sets clear expectations and simplifies vendor management.',
              tip: 'Send this during vendor onboarding, not after a problem surfaces. Setting expectations upfront prevents most compliance issues.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Cost Reduction',
          prompts: [
            {
              id: 'sc-p-6-1',
              title: 'Cost-Saving Proposal Generator',
              task: 'Build a cost reduction proposal for leadership',
              prompt: `Build a cost reduction proposal for supply chain operations.

Current annual supply chain spend:
[Break down by category]
- Procurement/Materials: [$]
- Freight/Logistics: [$]
- Warehousing: [$]
- Labor (supply chain team): [$]
- Other: [$]
- Total: [$]

Context:
- Cost reduction target: [% or $ amount]
- Timeline: [by when]
- Constraints: [quality standards, service levels, contractual obligations]
- Previous cost reduction efforts: [what has already been done]

Generate:

1. Executive Summary
- Total savings opportunity identified: [$]
- Timeline to achieve
- Investment required (if any)
- Risk level: Low / Medium / High

2. Procurement Savings (3-5 opportunities)
For each:
- Opportunity description
- Current cost and proposed savings
- Implementation approach
- Timeline
- Risk and mitigation
- Confidence level

3. Logistics Savings (3-5 opportunities)
[Same format as above]

4. Inventory Savings (3-5 opportunities)
[Same format as above]

5. Process Efficiency Savings (2-3 opportunities)
[Same format as above]

6. Implementation Roadmap
- Phase 1: Quick wins (0-30 days) - savings and actions
- Phase 2: Medium-term (30-90 days) - savings and actions
- Phase 3: Strategic (90-365 days) - savings and actions
- Resource requirements for each phase
- Investment vs return timeline

7. Risk Assessment
- What could prevent savings from materializing?
- Dependencies and assumptions
- Contingency plans

8. Tracking Plan
- How savings will be measured and verified
- Reporting cadence
- Accountability structure
- Baseline definitions (how we calculate "savings")

Present this as a business case. Leadership wants to see the numbers, the plan, and the risks - in that order.`,
              result:
                'A comprehensive cost reduction proposal backed by data and ready for leadership presentation.',
              tip: 'Always include quick wins. Leadership is more likely to approve the bigger initiatives if they see early results from the easy ones.',
            },
            {
              id: 'sc-p-6-2',
              title: 'Make vs Buy Analysis',
              task: 'Analyze whether to make or buy a product/component',
              prompt: `Conduct a make vs buy analysis for a product or component.

Item: [what you are evaluating]
Current approach: [make in-house / buy from vendor]
Reason for analysis: [cost pressure / capacity issue / quality concern / strategic review]

If we MAKE (in-house):
- Direct materials cost per unit: [$]
- Direct labor cost per unit: [$]
- Overhead allocation per unit: [$]
- Capital investment required: [$]
- Current capacity: [units/period]
- Quality performance: [defect rate]
- Lead time: [days]

If we BUY (outsource):
- Vendor quoted price per unit: [$]
- Minimum order quantity: [units]
- Lead time: [days]
- Quality guarantee: [defect rate / warranty terms]
- Tooling/setup costs: [$]
- Shipping costs per unit: [$]

Annual volume: [units needed per year]

Analyze:

1. Cost Comparison (table format)
- Per-unit cost breakdown: make vs buy
- Annual total cost at projected volume
- Volume sensitivity (at what volume does the equation flip?)
- Total cost of ownership (include hidden costs)

2. Non-Cost Factors
- Quality control (which approach gives better quality?)
- Lead time and flexibility
- IP and confidentiality considerations
- Capacity and scalability
- Risk and dependency
- Strategic alignment

3. Risk Assessment
- Make risks: capacity constraints, quality variability, capital tied up
- Buy risks: supplier dependency, quality control, IP exposure, supply disruption
- Risk mitigation for each approach

4. Scenario Analysis
- Scenario A: Volume increases 50% - which approach scales better?
- Scenario B: Material costs rise 20% - how does each approach fare?
- Scenario C: Quality issue arises - which approach recovers faster?

5. Transition Plan (if switching)
- Steps to transition from current to recommended approach
- Timeline and milestones
- Risk mitigation during transition
- Parallel run period recommendation

6. Recommendation
- Make / Buy / Hybrid (make some, buy some)
- Clear rationale with supporting data
- Conditions that would change the recommendation
- Review schedule

Present both options fairly. The best decision is the informed one, not the predetermined one.`,
              result:
                'A thorough make vs buy analysis that goes beyond unit cost to total cost of ownership.',
              tip: 'Include opportunity cost. If making in-house ties up capacity that could produce higher-margin items, the "buy" option might win even at a higher per-unit cost.',
            },
            {
              id: 'sc-p-6-3',
              title: 'Total Cost of Ownership Model',
              task: 'Build a total cost of ownership model for a procurement decision',
              prompt: `Build a total cost of ownership (TCO) model for a procurement decision.

Item being procured: [product/component/service]
Annual spend: [$]
Number of vendors being compared: [count]
Contract period: [years]

For each vendor, provide what you know:
Vendor A: [name]
- Unit price: [$]
- MOQ: [minimum order quantity]
- Lead time: [days]
- Payment terms: [net 30, etc.]
- Location: [country/region]
- Known additional costs: [tooling, shipping, etc.]

Vendor B: [name]
[Same format]

Vendor C (if applicable): [name]
[Same format]

Build a TCO model that includes ALL costs:

1. Direct Costs
- Purchase price (unit cost x volume)
- Volume discounts or rebates
- Currency exchange impact (if applicable)

2. Logistics Costs
- Inbound freight (by mode)
- Customs duties and tariffs
- Insurance
- Handling and receiving costs
- Expedite fees (estimated based on reliability)

3. Quality Costs
- Incoming inspection costs
- Expected rejection/defect costs
- Warranty claim costs
- Rework costs

4. Inventory Costs
- Safety stock required (driven by lead time and variability)
- Carrying cost of pipeline inventory (in-transit)
- Carrying cost of safety stock
- Obsolescence risk

5. Administrative Costs
- Order processing
- Vendor management time
- Compliance and audit costs
- Communication and travel costs

6. Risk Costs (monetized)
- Supply disruption probability x estimated impact
- Quality failure probability x estimated impact
- Currency risk (if international)
- Geopolitical risk premium

7. TCO Comparison Table
- Cost category | Vendor A | Vendor B | Vendor C
- Total TCO per unit
- Total TCO annual
- TCO ranking

8. Sensitivity Analysis
- Which cost components swing the decision?
- At what unit price does the cheaper vendor become more expensive on TCO?
- Impact of volume changes on TCO ranking

9. Recommendation
- Recommended vendor based on TCO
- Conditions and assumptions behind the recommendation
- What to negotiate with the winning vendor to further reduce TCO

Show your work. Every number should have a stated assumption.`,
              result:
                'A complete TCO model that reveals the true cost of each sourcing option beyond the purchase price.',
              tip: 'The vendor with the lowest unit price rarely has the lowest TCO. This analysis is the most powerful tool for changing how procurement decisions get made.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your supply chain management time is actually worth.',
      timeTable: [
        {
          task: 'Demand forecasting',
          without: '1-2 days per cycle',
          withAI: '2-3 hours',
          saved: '1+ day/cycle',
        },
        {
          task: 'Vendor evaluations',
          without: '1-2 weeks per vendor',
          withAI: '1-2 days',
          saved: '3-8 days each',
        },
        {
          task: 'Logistics analysis',
          without: '2-3 weeks per review',
          withAI: '2-3 days',
          saved: '2 weeks/review',
        },
        {
          task: 'Inventory optimization',
          without: '2-3 days per review',
          withAI: '3-4 hours',
          saved: '2 days/review',
        },
        {
          task: 'Compliance documentation',
          without: '3-5 days per audit',
          withAI: '1 day',
          saved: '3+ days/audit',
        },
        {
          task: 'Cost analysis',
          without: '1-2 weeks quarterly',
          withAI: '2-3 days',
          saved: '1 week/quarter',
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
          heading: 'The Gap',
          paragraphs: [
            'In 2026, supply chain managers using AI run deeper analyses, evaluate vendors more rigorously, and respond to disruptions faster than those relying on spreadsheets and manual processes. Same industry knowledge, same supplier relationships, same strategic judgment - just dramatically more analytical horsepower.',
            'The gap is not about experience or expertise. It is about throughput. The supply chain manager who can produce a TCO analysis in hours instead of weeks makes better sourcing decisions because they actually have time to do the analysis.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not get into supply chain management to copy data between spreadsheets and format compliance documents. You got into it because you understand how to move products across the world efficiently, negotiate with suppliers, and build resilient supply networks. AI gives you back the time that administrative and analytical overhead stole from strategic supply chain leadership.',
          ],
        },
      ],
      keyInsight:
        'Start with one vendor scorecard. Evaluate one supplier with AI this week instead of manually. Notice how much more thorough the analysis is - and how much faster.',
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
            { id: 'sc-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'sc-1-2', label: 'Create a free Perplexity account' },
            { id: 'sc-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Build a Vendor Scorecard',
          duration: '25 min',
          items: [
            { id: 'sc-2-1', label: 'Pick a vendor you are currently evaluating or reviewing' },
            { id: 'sc-2-2', label: 'Run the Vendor Scorecard Builder prompt with your real criteria' },
            { id: 'sc-2-3', label: 'Score one vendor using the generated framework' },
          ],
        },
        {
          day: 3,
          title: 'Generate a Demand Forecast',
          duration: '25 min',
          items: [
            { id: 'sc-3-1', label: 'Gather historical demand data for a key product or category' },
            { id: 'sc-3-2', label: 'Run the Demand Forecast Narrative prompt with your real data' },
            { id: 'sc-3-3', label: 'Compare the output to your current forecasting approach' },
          ],
        },
        {
          day: 4,
          title: 'Optimize Inventory',
          duration: '25 min',
          items: [
            { id: 'sc-4-1', label: 'Pull data for your top 10 SKUs (demand, lead time, cost)' },
            { id: 'sc-4-2', label: 'Run the Reorder Point Calculator prompt' },
            { id: 'sc-4-3', label: 'Compare recommended levels to your current settings' },
          ],
        },
        {
          day: 5,
          title: 'Analyze Logistics',
          duration: '25 min',
          items: [
            { id: 'sc-5-1', label: 'Gather data on your top 3 shipping lanes' },
            { id: 'sc-5-2', label: 'Run the Route Analysis and Optimization prompt' },
            { id: 'sc-5-3', label: 'Identify one quick win for cost or time reduction' },
          ],
        },
        {
          day: 6,
          title: 'Build a Cost Case',
          duration: '25 min',
          items: [
            { id: 'sc-6-1', label: 'Run the Cost-Saving Proposal Generator with your real spend data' },
            { id: 'sc-6-2', label: 'Identify 2-3 quick wins from the output' },
            { id: 'sc-6-3', label: 'Format the proposal for your next leadership meeting' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Build Your Routine',
          duration: '15 min',
          items: [
            { id: 'sc-7-1', label: 'List which analyses saved you the most time this week' },
            { id: 'sc-7-2', label: 'Pick 2-3 prompts to integrate into your monthly workflow' },
            { id: 'sc-7-3', label: 'Share this guide with a supply chain colleague' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
