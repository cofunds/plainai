import type { WorkbookData } from './types'

export const dataanalystsData = {
  professionId: 'dataanalysts',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Data Analysts',
  heroDescription:
    'Write faster SQL, build better reports, and turn data into stories that drive decisions. Real tools, proven workflows, and copy-paste prompts for queries, dashboards, stakeholder presentations, and ad-hoc analysis.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your Slack has 14 unread messages. Eight of them are data requests. Marketing wants to know why conversion dropped last Tuesday. The VP of Sales needs a pipeline report by end of day. Someone from product asked for a "quick analysis" that is actually a three-table join with window functions. Your manager forwarded an email from the CFO asking for a revenue breakdown by cohort that "should be simple" - it is not simple.',
        'You have a dashboard refresh that has been broken since last Thursday because someone changed a column name upstream. There is a quarterly business review next week and your deck is half done. The data cleaning script you wrote last month needs to run again but you cannot remember which edge cases you handled and which ones you left as TODOs. And somewhere in your backlog is a data validation task that keeps getting bumped because everything else is "urgent."',
        'You became a data analyst because you love turning messy information into clear answers. You see patterns where others see spreadsheets. You translate numbers into narratives that help people make better decisions. But instead of spending your time on the insight work that actually matters, you are drowning in SQL debugging, report formatting, and ad-hoc requests that never stop coming.',
      ],
      highlight:
        'What if AI wrote the first draft of every query, report, and presentation - so you could focus on the analysis that actually changes decisions?',
      closingParagraph:
        'Not replacing your analytical judgment. Not automating your domain knowledge. Just eliminating the 4 hours of syntax, formatting, and boilerplate between your insight and the finished output.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace the analyst who understands the business. It cannot tell you that last Tuesday\'s conversion drop happened because the marketing team accidentally paused a campaign at 2pm. It will not know that the revenue numbers look weird because finance reclassified a product line last quarter. The domain context that makes analysis meaningful - that is human. AI does not have it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most productive junior analyst you have ever worked with. One who can write complex SQL in seconds, generate report narratives from data summaries, build dashboard documentation while you focus on the insights, and turn your bullet-point findings into a polished stakeholder presentation.',
            'Need a multi-table join with CTEs and window functions? Describe what you want in plain English and AI writes the query. Need to explain a dashboard to a non-technical stakeholder? AI generates an annotation guide. Need to turn 50 rows of data into an executive narrative? AI drafts the story while you verify the numbers.',
            'You bring the business context, the analytical intuition, and the "does this number make sense" check. AI brings the speed, the syntax, and the first draft. Together, you clear your backlog in half the time.',
          ],
        },
      ],
      keyInsight:
        'Your analytical judgment + AI\'s production speed = more requests handled, deeper analysis delivered, and stakeholders who actually understand what the data means.',
    },

    ch3: {
      intro: 'Five tools that cover the full data analysis workflow. Start with two, add from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your SQL and writing engine',
          description:
            'SQL generation, report narratives, data explanations, stakeholder emails, documentation - any text or code task in your workflow',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your complex analysis and long-form partner',
          description:
            'Complex SQL with detailed logic, lengthy report narratives, data validation scripts, nuanced analysis write-ups that require depth and precision',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for complex queries',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research and benchmarking assistant',
          description:
            'Industry benchmarks, best practices for metrics, methodology research, tool comparisons - all with sources you can reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for benchmarks',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your documentation hub',
          description:
            'Query libraries, analysis playbooks, metric definitions, onboarding docs, runbook maintenance, team knowledge base',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your presentation designer',
          description:
            'Stakeholder presentations, data story slides, executive report visuals, infographic-style summaries for non-technical audiences',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Make data visual',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for SQL and writing. Add Perplexity when you need benchmarks. The combination covers 80% of what slows you down.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual data analysis workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'SQL Query Generation',
          before:
            'You get a data request, open your SQL editor, and start building. The basic query is fine, but then you need to add a CTE for the date filtering, a window function for the running total, a CASE statement for the segmentation, and a subquery for the comparison period. Debugging takes twice as long as writing. A "simple" query takes 30-45 minutes. A complex one takes 2 hours.',
          after:
            'You describe the analysis in plain English - tables involved, relationships, filters, aggregations, and output format. AI writes the query in under a minute. You review it, adjust for your specific schema, run it, and move on. Complex multi-join queries with window functions that used to take an hour take 5 minutes.',
          flow: [
            'Describe the data request in plain language with table names',
            'AI generates the SQL query with comments explaining each section',
            'Review the logic and adjust for your specific schema and naming',
            'Run the query and validate the output against known benchmarks',
            'Save to your query library for future reuse',
          ],
          timeSaved: { without: '30-120 min/query', withAI: '5-15 minutes' },
        },
        {
          id: 2,
          name: 'Report Narrative Writing',
          before:
            'The numbers are ready but the narrative is not. You stare at a spreadsheet full of data and need to write an executive summary that tells the story. What is the headline? What context does the reader need? Which trends matter and which are noise? Writing the narrative takes almost as long as the analysis itself. And every stakeholder wants a different level of detail.',
          after:
            'You feed AI your key data points, trends, and context. It drafts a narrative that tells the data story clearly - headline, context, insights, and recommended actions. Need a version for the C-suite and a different one for the ops team? AI adapts the same analysis for multiple audiences in minutes.',
          flow: [
            'Summarize your key findings, data points, and context',
            'AI drafts a complete report narrative with headline and insights',
            'Review for accuracy and add domain-specific context',
            'Request audience-specific versions if needed',
            'Finalize and distribute',
          ],
          timeSaved: { without: '1-3 hours/report', withAI: '15-30 minutes' },
        },
        {
          id: 3,
          name: 'Dashboard Documentation',
          before:
            'Your dashboards are live but nobody knows how to read them. New team members stare at charts and guess what the filters do. Stakeholders misinterpret metrics because there is no documentation explaining the calculation logic. You answer the same questions about the same dashboards every month.',
          after:
            'AI generates comprehensive dashboard documentation - metric definitions, calculation logic, filter explanations, interpretation guides, and FAQ sections. Every dashboard comes with a user guide. New team members onboard themselves. Stakeholder questions drop by 80%.',
          flow: [
            'Describe the dashboard - metrics, charts, filters, data sources',
            'AI generates a complete documentation guide with sections for each element',
            'Review metric definitions and calculation descriptions for accuracy',
            'AI adds FAQ section based on common misunderstandings',
            'Publish alongside the dashboard for self-serve reference',
          ],
          timeSaved: { without: '2-4 hours/dashboard', withAI: '20-30 minutes' },
        },
        {
          id: 4,
          name: 'Stakeholder Communication',
          before:
            'You finish the analysis but now you need to present it. The CFO wants an executive summary. The marketing director wants the detail behind the numbers. The product team wants to know what to do about it. You end up writing three versions of the same analysis at three different levels. Each presentation takes 2-3 hours to build.',
          after:
            'AI transforms your analysis into stakeholder-ready content - executive slides with key takeaways, detailed appendix for the detail-oriented audience, and action-oriented summaries for the operational teams. Same analysis, multiple outputs, a fraction of the time.',
          flow: [
            'Input your analysis findings and key data points',
            'AI generates an executive summary with top-level insights',
            'Request a detailed version for technical stakeholders',
            'AI creates presentation slides with visualizations described',
            'Review each version for audience-appropriate framing',
          ],
          timeSaved: { without: '2-4 hours/presentation', withAI: '30-45 minutes' },
        },
        {
          id: 5,
          name: 'Data Cleaning Workflows',
          before:
            'Data cleaning is the unglamorous 80% of the job. Duplicate detection, null handling, format standardization, outlier identification, cross-source reconciliation - each dataset needs its own cleaning logic. You write scripts, test them, find edge cases, fix them, and repeat. A single cleaning pipeline can take a full day.',
          after:
            'AI generates data cleaning scripts based on your description of the issues. Duplicate detection logic, null handling strategies, format standardization rules, outlier flagging criteria - all written in minutes. You review the logic, adjust thresholds, and run the pipeline. A day of scripting becomes an hour of review.',
          flow: [
            'Describe the data issues - duplicates, nulls, format problems, outliers',
            'AI generates a cleaning script with step-by-step logic',
            'Review each cleaning rule and adjust thresholds',
            'Run the script on a sample and validate the output',
            'Apply to the full dataset with confidence',
          ],
          timeSaved: { without: '4-8 hours/dataset', withAI: '1-2 hours' },
        },
        {
          id: 6,
          name: 'Ad-hoc Analysis Frameworks',
          before:
            'Every ad-hoc request feels like starting from scratch. Someone asks "why did churn spike?" and you need to figure out the right approach, the right data, and the right structure every time. There is no standard playbook. Some analyses take 2 hours. Similar ones take 6 hours because you approached them differently. The inconsistency is frustrating.',
          after:
            'AI helps you build reusable analysis frameworks for common request types. Churn analysis? There is a template. Funnel breakdown? There is a template. Cohort analysis, A/B test evaluation, revenue decomposition - each has a structured approach you can deploy in minutes and customize for the specific question.',
          flow: [
            'Describe the analysis request and business question',
            'AI suggests a structured framework based on the analysis type',
            'Customize the framework for your specific data and context',
            'AI generates the SQL queries and analysis scaffolding',
            'Save the framework as a reusable template for future requests',
          ],
          timeSaved: { without: '2-6 hours/analysis', withAI: '30-60 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every data analysis scenario. Copy, paste, fill in the brackets, and get results in minutes.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - SQL Queries',
          prompts: [
            {
              id: 'da-p-1-1',
              title: 'Complex SQL Query Generator',
              task: 'Generate a complex SQL query from a plain-English description',
              prompt: `Write a SQL query for the following analysis request.

Database type: [PostgreSQL / MySQL / BigQuery / Snowflake / Redshift / other]

Schema context:
- Table 1: [table_name] - columns: [list key columns and types]
- Table 2: [table_name] - columns: [list key columns and types]
- Table 3: [table_name] - columns: [list key columns and types]
- Relationships: [how tables connect - foreign keys]

Analysis request:
[Describe in plain English exactly what you need. Be specific about:
- What metrics or values to calculate
- Time period and date filters
- Grouping and segmentation
- Sorting and ordering
- Any conditions or exclusions
- Output format expected]

Example output rows (if helpful): [describe what the result should look like]

Requirements:
1. Use CTEs for readability (no deeply nested subqueries)
2. Add comments explaining each section of the query
3. Handle NULLs explicitly
4. Include appropriate date formatting
5. Optimize for performance where possible
6. Add a row count check at the end

Also provide:
- An explanation of the query logic in plain English
- 3 common pitfalls or edge cases to watch for with this type of query
- A simpler version I can run first to validate the base data before running the full query`,
              result:
                'A production-ready SQL query with documentation and validation guidance.',
              tip: 'Always run the simpler validation query first. Catching a bad join early saves hours of debugging.',
            },
            {
              id: 'da-p-1-2',
              title: 'Executive Report SQL Suite',
              task: 'Generate a set of SQL queries for an executive report',
              prompt: `Generate a complete set of SQL queries for an executive report.

Database type: [PostgreSQL / MySQL / BigQuery / Snowflake / other]
Reporting period: [date range]
Comparison period: [previous period for comparison]

Key tables:
[List your main tables with relevant columns]

The report needs these sections:

1. Summary Metrics
   - [Metric 1 - e.g., total revenue]: how to calculate
   - [Metric 2 - e.g., active users]: how to calculate
   - [Metric 3 - e.g., conversion rate]: how to calculate
   - Each with period-over-period comparison (absolute and percentage change)

2. Trend Analysis
   - Daily/weekly/monthly trend for [key metric]
   - Moving average (7-day and 30-day)
   - Year-over-year comparison if data is available

3. Segmentation
   - Break down [key metric] by [segment 1 - e.g., region]
   - Break down [key metric] by [segment 2 - e.g., product]
   - Cross-segment analysis (segment 1 x segment 2)

4. Top/Bottom Analysis
   - Top 10 [entities] by [metric]
   - Bottom 10 [entities] by [metric]
   - Biggest movers (highest change from last period)

5. Anomaly Detection
   - Flag any [metric] values more than 2 standard deviations from the mean
   - Identify sudden changes week-over-week

For each query:
- Add comments explaining the logic
- Handle NULL values and edge cases
- Include a validation check
- Note any assumptions made

Format as a numbered set of queries I can run sequentially.`,
              result:
                'A complete SQL suite that powers an executive report from raw data.',
              tip: 'Save this as a parameterized template. Change the date variables and rerun monthly with zero extra effort.',
            },
            {
              id: 'da-p-1-3',
              title: 'Data Validation Script',
              task: 'Write SQL queries to validate data quality',
              prompt: `Write a comprehensive data validation script for this table/dataset.

Database type: [PostgreSQL / MySQL / BigQuery / Snowflake / other]
Table: [table_name]
Key columns: [list columns with expected types and business rules]
Expected row count range: [approximate - e.g., 10K-50K rows daily]
Data freshness requirement: [how recent should the latest data be]

Generate validation queries for:

1. Completeness Checks
   - NULL rate per column (flag if above threshold)
   - Row count vs. expected range
   - Date coverage (any missing dates in the range)
   - Required fields that should never be NULL

2. Uniqueness Checks
   - Primary key uniqueness verification
   - Business key duplicate detection
   - Unexpected duplicate patterns

3. Referential Integrity
   - Foreign key validation (orphan records)
   - Cross-table consistency checks
   - Lookup table coverage

4. Value Range Checks
   - Numeric columns within expected bounds
   - Date columns within valid ranges
   - Categorical columns against allowed values
   - Negative values where they should not exist

5. Business Logic Checks
   - [Business rule 1 - e.g., order total should equal sum of line items]
   - [Business rule 2 - e.g., end date should be after start date]
   - [Business rule 3 - e.g., status transitions should follow valid paths]

6. Freshness Checks
   - Latest data timestamp vs. current time
   - Gap detection in time-series data
   - Load completion verification

7. Summary Report
   - A final query that combines all checks into a pass/fail summary table
   - Include the check name, status, detail, and severity (Critical/Warning/Info)

Make each check independent so they can run in parallel. Include the expected "healthy" result for each check.`,
              result:
                'A comprehensive data validation suite you can schedule to run daily.',
              tip: 'Run this before every major report or dashboard refresh. Catching data issues before stakeholders do builds trust.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Report Narratives',
          prompts: [
            {
              id: 'da-p-2-1',
              title: 'Executive Report Summary Writer',
              task: 'Write an executive summary from data analysis results',
              prompt: `Write an executive report summary from my data analysis results.

Report type: [weekly / monthly / quarterly business review]
Audience: [C-suite / VP-level / department heads / board]
Company/team context: [what the business does, what matters most right now]

Key metrics this period:
- [Metric 1]: [value] (vs. [last period value], [% change])
- [Metric 2]: [value] (vs. [last period value], [% change])
- [Metric 3]: [value] (vs. [last period value], [% change])
- [Metric 4]: [value] (vs. [last period value], [% change])

Notable findings:
[List 3-5 key observations from your analysis]

Known context:
[Any external factors the audience should know - seasonality, campaigns, incidents, market changes]

Generate:

1. Headline (one sentence that captures the most important takeaway)

2. Executive Summary (3-4 paragraphs)
   - The big picture: what happened this period
   - The key wins and positive trends
   - The concerns or areas needing attention
   - Forward-looking: what to watch next period

3. Metric Highlights (for each metric)
   - Current value with context (good/bad/neutral and why)
   - Trend description (improving, declining, stable)
   - Comparison to target or benchmark if available

4. Key Insights (3-5 insights)
   - Insight statement (one clear sentence)
   - Supporting data
   - Implication for the business
   - Recommended action

5. Risks and Watch Items
   - What could deteriorate if not addressed
   - Early warning signals to monitor

6. Recommended Actions (3-5)
   - Action, owner suggestion, urgency level

Write for a busy executive. Lead with the answer, support with data, close with actions.`,
              result:
                'A polished executive summary that turns raw data into a compelling business narrative.',
              tip: 'Always lead with the most surprising or important finding. Executives remember the first thing they read.',
            },
            {
              id: 'da-p-2-2',
              title: 'Data Story Narrative',
              task: 'Turn a data analysis into a compelling data story',
              prompt: `Turn this data analysis into a compelling data story.

Analysis topic: [what question you were investigating]
Business context: [why this analysis matters]
Audience: [who will read/hear this]
Audience data literacy: [high / medium / low]

Data findings:
[Paste your key data points, trends, comparisons, and observations]

Generate a data story with:

1. The Hook
   - An opening statement that makes the audience care
   - Frame it as a question, a surprise, or a business impact

2. The Setup
   - What we looked at and why
   - Methodology in plain language (no jargon)
   - Time period and scope

3. The Journey (3-4 key findings in narrative order)
   For each finding:
   - The insight in one clear sentence
   - The data that supports it (specific numbers)
   - Why it matters for the business
   - A relatable analogy or comparison if the audience is non-technical

4. The Turning Point
   - The most surprising or important discovery
   - What it challenges or confirms about existing assumptions

5. The Resolution
   - What this means for the business
   - Specific recommendations based on the data
   - What would happen if we act vs. if we do not

6. The Next Chapter
   - What questions this analysis raises
   - What data we need next
   - Proposed follow-up analysis

Write in a conversational but professional tone. No jargon unless the audience is technical. Every number should be contextualized - never state a number without explaining what it means.`,
              result:
                'A narrative data story that makes analysis memorable and actionable.',
              tip: 'Test your data story on someone outside the project. If they cannot repeat the key insight after hearing it once, simplify.',
            },
            {
              id: 'da-p-2-3',
              title: 'Dashboard Annotation Guide',
              task: 'Write annotations and interpretation guides for a dashboard',
              prompt: `Write a comprehensive annotation guide for this dashboard.

Dashboard name: [name]
Tool: [Tableau / Looker / Power BI / Metabase / other]
Purpose: [what business question it answers]
Primary users: [who looks at this and how often]
Data source: [where the data comes from]
Refresh frequency: [how often data updates]

Dashboard elements:
[Describe each chart, table, and filter on the dashboard]

Generate:

1. Dashboard Overview
   - What this dashboard shows and why it exists
   - Who should use it and when
   - How to access it and how often to check

2. Metric Definitions
   For each metric displayed:
   - Name and plain-English definition
   - Exact calculation formula
   - Data source and any transformations
   - What "good" looks like (benchmark or target)
   - Common misinterpretations to avoid

3. Chart-by-Chart Guide
   For each visualization:
   - What it shows and how to read it
   - What the axes/dimensions represent
   - How to interpret trends, colors, and sizes
   - What to look for (signals of good/bad performance)
   - Interactive features (filters, drill-downs, tooltips)

4. Filter Guide
   For each filter:
   - What it controls
   - Default setting and why
   - When to change it
   - How filters interact with each other

5. FAQ Section
   - "Why does [metric] look different from [other report]?" (reconciliation notes)
   - "The numbers changed since yesterday - why?" (refresh and data lag explanations)
   - "How do I export this data?" (step-by-step)
   - Add 5-7 more common questions specific to this dashboard

6. Troubleshooting
   - Data looks stale: what to check
   - Numbers seem wrong: validation steps
   - Who to contact for issues

Write for the least technical person who will use this dashboard.`,
              result:
                'A complete dashboard user guide that eliminates repeated questions from stakeholders.',
              tip: 'Link this guide from the dashboard itself. Most stakeholders will not search for documentation separately.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Dashboard Documentation',
          prompts: [
            {
              id: 'da-p-3-1',
              title: 'Metric Definition Document',
              task: 'Create a centralized metric definition document',
              prompt: `Create a centralized metric definition document for my team or organization.

Team/company: [name]
Domain: [marketing / sales / product / finance / operations / other]
Current pain point: [people define the same metric differently / no single source of truth / new hires cannot find definitions]

Key metrics to define:
[List 10-15 metrics your team tracks regularly]

For each metric, generate:

1. Metric Card
   - Name (official, standardized)
   - Also known as (alternative names people use)
   - Category (growth / engagement / revenue / efficiency / other)
   - Definition (plain English - one sentence)
   - Formula (exact calculation with variable definitions)
   - Data source (table and column references)
   - Grain (what level is this measured at - daily, per user, per transaction)
   - Dimensions (what can you segment this by - region, product, channel)
   - Filters/exclusions (what is excluded from the calculation and why)
   - Target/benchmark (current goal or industry benchmark)
   - Owner (who is responsible for this metric)
   - Related metrics (what metrics move with this one)

2. Interpretation Guide
   - What "good" looks like for this metric
   - What a sudden change might indicate
   - Seasonality patterns to expect
   - Common misinterpretations

3. Metric Relationships Map
   - Show how metrics relate to each other (leading vs. lagging)
   - Which metrics are inputs to others
   - Conflicting metrics to be aware of (where improving one may hurt another)

4. Governance
   - Who can change metric definitions
   - How to propose a new metric
   - Review cadence for existing definitions
   - Versioning (how to handle definition changes over time)

Format as a reference document that is easy to search and browse. Include a table of contents.`,
              result:
                'A single source of truth for metric definitions that eliminates confusion across the organization.',
              tip: 'Get stakeholder sign-off on definitions before publishing. Metrics without agreed definitions cause more arguments than no metrics at all.',
            },
            {
              id: 'da-p-3-2',
              title: 'Dashboard Design Brief',
              task: 'Create a design brief for a new dashboard',
              prompt: `Create a design brief for a new dashboard I need to build.

Requester: [who asked for this dashboard]
Business question: [what they need to answer]
Audience: [who will look at this regularly]
Current state: [how they get this information now]
Tool: [Tableau / Looker / Power BI / Metabase / other]

Requirements gathered:
[Paste any notes from your conversation with the requester]

Generate a complete dashboard design brief:

1. Purpose Statement
   - What this dashboard exists to answer (one sentence)
   - What it is NOT for (scope boundaries)

2. User Stories
   - "As a [role], I want to see [metric/view] so that I can [decision/action]"
   - Create 5-7 user stories covering the key use cases

3. Metrics Specification
   For each metric to include:
   - Name and definition
   - Calculation logic
   - Source table and columns
   - Time grain (daily, weekly, monthly)
   - Comparison type (period-over-period, vs target, vs benchmark)

4. Layout Recommendation
   - Page 1: Executive overview (top-level KPIs and trends)
   - Page 2-N: Detail pages (one per theme)
   - Filter panel design (global filters vs. page-level)
   - Recommended chart types for each metric

5. Data Architecture
   - Source tables needed
   - Joins and relationships
   - Calculated fields required
   - Performance considerations (pre-aggregation needs)

6. Interaction Design
   - Drill-down paths (what happens when someone clicks)
   - Filter behaviors and defaults
   - Cross-filter interactions
   - Mobile/tablet considerations

7. Acceptance Criteria
   - How to test that the dashboard is correct
   - Edge cases to validate
   - Performance benchmarks (load time expectations)
   - Sign-off process

This brief should be detailed enough that someone else could build the dashboard from it.`,
              result:
                'A comprehensive dashboard design brief that prevents rework and misaligned expectations.',
              tip: 'Review this brief with the requester before building anything. Rework from unclear requirements costs more than the time to write the brief.',
            },
            {
              id: 'da-p-3-3',
              title: 'Dashboard Changelog and Release Notes',
              task: 'Write release notes for a dashboard update',
              prompt: `Write release notes for a dashboard update or new dashboard launch.

Dashboard: [name]
Version: [new / update v2.0 / minor update]
Date: [release date]
Audience for release notes: [dashboard users - describe their roles]

Changes made:
[List everything that changed - new metrics, removed metrics, changed calculations, new filters, visual changes, data source changes, bug fixes]

Generate:

1. Release Summary
   - One paragraph overview of what changed and why
   - Impact level: Major / Minor / Maintenance

2. What is New
   For each new feature or metric:
   - What was added
   - Why it was added (what user need it addresses)
   - How to use it
   - Where to find it on the dashboard

3. What Changed
   For each modification:
   - What was changed
   - Why (the reason for the change)
   - Before vs. after comparison
   - Impact on existing workflows or reports that reference this dashboard

4. What Was Removed
   For each removal:
   - What was removed
   - Why (the reason for deprecation)
   - Alternative (where to find this information now)

5. Bug Fixes
   For each fix:
   - What the issue was
   - What was affected
   - How it was resolved
   - Any data corrections needed for historical periods

6. Known Limitations
   - Current known issues that are not yet fixed
   - Workarounds if available
   - Expected fix timeline

7. Migration Guide (if applicable)
   - What users need to do differently
   - Saved views or bookmarks that may need updating
   - Training resources available

Keep it concise but thorough. Users should understand what changed and what they need to do about it.`,
              result:
                'Professional release notes that keep dashboard users informed and reduce confusion.',
              tip: 'Send release notes before the update goes live. Surprise changes to dashboards erode trust faster than anything.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Stakeholder Communication',
          prompts: [
            {
              id: 'da-p-4-1',
              title: 'Insight Presentation Builder',
              task: 'Build a stakeholder presentation from analysis findings',
              prompt: `Build a stakeholder presentation from my analysis findings.

Analysis topic: [what you analyzed]
Audience: [C-suite / VP / department leads / cross-functional team]
Their data literacy: [high / medium / low]
Meeting duration: [minutes]
Desired outcome: [decision, alignment, awareness, action]

Key findings:
[Paste your analysis results, key numbers, trends, and insights]

Generate a presentation:

Slide 1: Title and Key Takeaway
- Analysis title
- The single most important finding (one sentence)
- Date and analyst name

Slide 2: Context and Approach
- Why this analysis was done
- What data was examined
- Methodology in 2-3 bullet points (plain language)

Slides 3-7: Key Findings (one finding per slide)
For each:
- Finding headline (action-oriented sentence)
- The data point or visualization description
- Why it matters for this audience
- What it means for their goals or KPIs
- Speaker notes with deeper context

Slide 8: Synthesis
- How the findings connect to each other
- The overall story the data tells
- What has changed vs. last period or expectation

Slide 9: Recommendations
- 3-5 specific actions based on the data
- Each with expected impact and effort level
- Priority order with suggested owners

Slide 10: Next Steps and Questions
- Decisions needed from this group
- Follow-up analyses proposed
- Open questions for discussion

For non-technical audiences: replace every data term with plain English and add a "what this means" sentence after every number.`,
              result:
                'A stakeholder-ready presentation that translates data into decisions.',
              tip: 'For low data-literacy audiences, start with the recommendation and work backward to the evidence. They care about "what should we do" more than "what happened."',
            },
            {
              id: 'da-p-4-2',
              title: 'Analysis Request Clarifier',
              task: 'Clarify a vague data request before starting work',
              prompt: `Help me clarify this data analysis request before I start working on it.

Original request: [paste the exact request as received - usually vague]
Requester: [name and role]
Context I know: [any background about why they might need this]
My initial interpretation: [what I think they actually want]

Generate:

1. Request Interpretation
   - What I think they are asking for (restate clearly)
   - What they probably actually need (the real business question)
   - Potential misalignment between what was asked and what would be useful

2. Clarification Questions (5-8 questions to send back)
   For each question:
   - The question itself (clear and specific)
   - Why I need this answer (what it affects in the analysis)
   - Default assumption if they do not answer (what I will do if they say "just figure it out")

3. Scope Definition
   - Proposed scope (what I will include)
   - Explicit exclusions (what I will not include and why)
   - Time period and granularity assumptions
   - Output format recommendation (dashboard, report, one-off query, presentation)

4. Effort Estimate
   - If the scope is as I interpreted: [estimated hours]
   - If they want the expanded version: [estimated hours]
   - Quick alternative: [a faster way to get them 80% of the answer]

5. Draft Response to Requester
   - A professional reply email that:
     - Confirms what I understood
     - Asks the critical clarification questions
     - Proposes a timeline
     - Sets expectations on output format

Tone: collaborative and helpful, not defensive or gatekeeping.`,
              result:
                'A clear scope definition and professional response that prevents wasted work on misunderstood requests.',
              tip: 'Always send the clarification before starting. Thirty minutes of scoping saves 3 hours of rework.',
            },
            {
              id: 'da-p-4-3',
              title: 'Stakeholder Email - Insights Delivery',
              task: 'Write a stakeholder email summarizing analysis findings',
              prompt: `Write an email to deliver analysis findings to a stakeholder.

Recipient: [name and role]
Their communication preference: [brief / detailed / visual / data-heavy]
Relationship: [regular requestor / executive / new stakeholder]
Urgency: [FYI / action needed / escalation]

Analysis completed:
- Question answered: [the business question]
- Key finding: [the most important result]
- Supporting data: [2-3 additional data points]
- Recommendation: [what you think they should do]
- Caveats: [any limitations or assumptions]

Generate 3 email versions:

Version A: Executive Brief (under 150 words)
- Subject line that states the key finding
- 3-4 sentence summary
- One clear recommendation
- Link to full analysis

Version B: Detailed Summary (300-500 words)
- Subject line with the key finding
- Context paragraph (why this was analyzed)
- Findings section (3-5 key data points with interpretation)
- Recommendation with supporting logic
- Next steps and open questions
- Attached detailed report

Version C: Action-Oriented (under 200 words)
- Subject line with the action needed
- One sentence on what was found
- The recommended action in bold
- Why it matters (one sentence with supporting number)
- Timeline for action
- Offer to discuss live

Each version should feel natural and professional. Avoid data jargon for non-technical recipients. Include the numbers but always explain what they mean.`,
              result:
                'Three email options tailored to different stakeholder communication styles.',
              tip: 'Match the version to the person, not the analysis complexity. A VP who prefers brief emails wants Version A even for complex findings.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Data Cleaning',
          prompts: [
            {
              id: 'da-p-5-1',
              title: 'Data Cleaning Script Generator',
              task: 'Generate a data cleaning script for a messy dataset',
              prompt: `Generate a data cleaning script for this dataset.

Language: [SQL / Python / R]
Data source: [describe the table or file]
Row count: [approximate]
Known issues:
- Duplicates: [describe - e.g., same email appearing multiple times]
- NULL values: [which columns have NULLs that need handling]
- Format inconsistencies: [e.g., dates in mixed formats, phone numbers with/without dashes]
- Outliers: [any suspected data quality issues]
- Invalid values: [values that should not exist - e.g., negative ages, future dates]

Business rules:
- [Rule 1 - e.g., if status is "active," last_login cannot be more than 90 days ago]
- [Rule 2 - e.g., revenue must be positive]
- [Rule 3 - e.g., email must be valid format]

Generate:

1. Data Profiling Queries (run these first)
   - Row count and unique key count
   - NULL rate per column
   - Distinct value counts for categorical columns
   - Min/max/mean/median for numeric columns
   - Date range validation

2. Cleaning Script (step by step)
   - Step 1: Remove exact duplicates (with dedup logic)
   - Step 2: Handle NULLs (fill, flag, or exclude with reasoning for each column)
   - Step 3: Standardize formats (dates, strings, categories)
   - Step 4: Apply business rule validations
   - Step 5: Flag outliers (with statistical method)
   - Step 6: Create cleaned output table/file

3. Quarantine Logic
   - Records that fail validation go to a quarantine table
   - Include the reason for quarantine
   - Review process for quarantined records

4. Before/After Validation
   - Queries to verify the cleaning worked correctly
   - Record count reconciliation
   - Spot-check comparisons

5. Documentation
   - What was cleaned and why
   - Records affected by each step
   - Decisions made and rationale

Add comments throughout. Every cleaning decision should be traceable.`,
              result:
                'A complete, documented data cleaning pipeline ready to run and audit.',
              tip: 'Never overwrite the original data. Always create the cleaned version as a new table or file. You will need the original for validation.',
            },
            {
              id: 'da-p-5-2',
              title: 'Data Quality Monitoring Framework',
              task: 'Build an ongoing data quality monitoring framework',
              prompt: `Build a data quality monitoring framework for my key data tables.

Environment: [data warehouse / database / data lake]
Tables to monitor:
- [Table 1]: [description and importance]
- [Table 2]: [description and importance]
- [Table 3]: [description and importance]

Current pain points: [describe data quality issues you have experienced]
Stakeholder impact: [what breaks when data quality is bad]

Generate:

1. Data Quality Dimensions
   For each dimension, define checks and thresholds:
   - Completeness: NULL rates and required field coverage
   - Accuracy: Value range checks and business rule validation
   - Consistency: Cross-table consistency and referential integrity
   - Timeliness: Data freshness and load latency
   - Uniqueness: Duplicate detection and key integrity
   - Validity: Format checks and allowed value validation

2. Monitoring Queries (for each table)
   - Daily checks (run every day - fast, critical)
   - Weekly checks (run weekly - deeper, less time-sensitive)
   - Monthly checks (comprehensive - trend analysis of quality over time)

3. Alert Thresholds
   For each check:
   - Warning threshold (investigate when possible)
   - Critical threshold (stop and fix immediately)
   - Escalation path (who gets notified at each level)

4. Quality Scorecard
   - How to calculate an overall quality score per table
   - How to trend quality over time
   - Dashboard design for monitoring (what to show)

5. Incident Response
   - What to do when a quality check fails
   - Investigation checklist
   - Communication template for stakeholders
   - Root cause analysis template

6. Governance
   - Who owns data quality for each table
   - Review cadence for thresholds and checks
   - How to add new checks as issues are discovered

Include all SQL queries needed. Make them parameterized for easy scheduling.`,
              result:
                'A complete data quality monitoring system that catches issues before stakeholders do.',
              tip: 'Start with 5 critical checks per table. You can always add more. A monitoring system that is too complex never gets maintained.',
            },
            {
              id: 'da-p-5-3',
              title: 'Data Reconciliation Script',
              task: 'Write a reconciliation script to compare two data sources',
              prompt: `Write a data reconciliation script to compare two data sources.

Language: [SQL / Python]
Source A: [name, description, and how to access]
Source B: [name, description, and how to access]
Join key: [how to match records between sources]
Comparison columns: [list columns that should match]
Expected discrepancy tolerance: [exact match / within X% / within X units]
Business context: [why these sources should match and what it means if they do not]

Generate:

1. Pre-Reconciliation Checks
   - Row counts from each source
   - Date range coverage comparison
   - Key completeness check (any keys in A missing from B and vice versa)
   - Data type compatibility validation

2. Reconciliation Script
   - Full outer join on the matching key
   - For each comparison column:
     - Side-by-side comparison (value from A, value from B)
     - Absolute difference
     - Percentage difference
     - Match status: Exact Match / Within Tolerance / Discrepancy
   - Summary statistics: total records, matches, mismatches, missing

3. Discrepancy Analysis
   - Records only in Source A (not in B)
   - Records only in Source B (not in A)
   - Records in both but with discrepancies
   - For discrepant records: group by discrepancy type and magnitude
   - Top 10 largest discrepancies for investigation

4. Root Cause Indicators
   - Common patterns in discrepancies (timing, segment, type)
   - Likely causes based on discrepancy patterns
   - Investigation suggestions for each pattern

5. Reconciliation Report
   - Summary table: source, total records, matched, unmatched, discrepancy rate
   - Overall status: Reconciled / Partially Reconciled / Investigation Needed
   - Action items based on findings

Make the script reusable. It should accept date range parameters so it can run for any period.`,
              result:
                'A reusable reconciliation pipeline that identifies and categorizes discrepancies between data sources.',
              tip: 'Run reconciliation after every major data pipeline change. It is the fastest way to catch regressions.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Ad-hoc Analysis',
          prompts: [
            {
              id: 'da-p-6-1',
              title: 'Ad-hoc Analysis Template Generator',
              task: 'Create a reusable analysis template for a common request type',
              prompt: `Create a reusable analysis template for this common request type.

Analysis type: [churn analysis / funnel analysis / cohort analysis / A/B test evaluation / revenue decomposition / customer segmentation / other]
How often this type comes up: [weekly / monthly / quarterly]
Typical requester: [marketing / product / sales / executive / other]
Database type: [PostgreSQL / MySQL / BigQuery / Snowflake / other]

Key tables typically used:
[List your main tables and relevant columns]

Generate a complete analysis template:

1. Request Intake Checklist
   - Questions to ask before starting
   - Required inputs from the requester
   - Scope definition template
   - Default assumptions to use

2. Analysis Framework
   - Step 1: Define the question precisely
   - Step 2: Identify the right data and time period
   - Step 3: Build the base dataset (SQL template)
   - Step 4: Run the core analysis (SQL template with parameterized inputs)
   - Step 5: Validate the results (sanity checks)
   - Step 6: Interpret and contextualize

3. SQL Templates (parameterized)
   - Base data extraction query
   - Core analysis query (the main calculation)
   - Comparison query (vs. prior period, benchmark, or cohort)
   - Segmentation query (break results by key dimensions)
   - Validation query (check the numbers add up)

4. Output Template
   - Standard format for presenting results of this analysis type
   - Key metrics to always include
   - Recommended visualizations
   - Narrative template with fill-in-the-blank sections

5. Common Variations
   - Variation A: [lighter version - 1 hour]
   - Variation B: [standard version - 2-3 hours]
   - Variation C: [deep dive version - full day]

6. Quality Checklist
   - Pre-delivery validation steps
   - Common errors to check for
   - Peer review prompts

This template should cut a 4-hour analysis down to 1 hour of execution plus review.`,
              result:
                'A reusable analysis template that turns recurring requests into a streamlined, repeatable process.',
              tip: 'Build one template per analysis type. After 3-4 templates, your team handles 80% of ad-hoc requests twice as fast.',
            },
            {
              id: 'da-p-6-2',
              title: 'Root Cause Analysis Framework',
              task: 'Structure a root cause investigation for a metric change',
              prompt: `Help me structure a root cause investigation for an unexpected metric change.

Metric that changed: [metric name and definition]
What happened: [describe the change - e.g., "conversion rate dropped from 3.2% to 2.1% last week"]
When it happened: [date range or specific date]
Magnitude: [absolute and percentage change]
Who noticed: [who reported this and their concern level]
Initial hypotheses: [any early guesses about what caused it]

Database type: [PostgreSQL / MySQL / BigQuery / Snowflake / other]
Key tables: [list relevant tables with key columns]

Generate:

1. Investigation Framework
   - Decomposition tree: break the metric into its component parts
   - For each component: what to check and what a "normal" value looks like
   - Priority order for investigation (most likely causes first)

2. SQL Investigation Queries
   Query 1: Metric decomposition (break the aggregate into dimensions)
   Query 2: Time-series analysis (when exactly did the change start)
   Query 3: Segment analysis (which segments are affected)
   Query 4: Upstream data check (did the input data change)
   Query 5: Comparison to baseline (how does each segment compare to the prior period)
   Query 6: Anomaly detection (flag the specific records driving the change)

3. Hypothesis Testing Plan
   For each common cause:
   - Hypothesis statement
   - How to test it (specific query or check)
   - What the result would look like if this is the cause
   - What to do if this hypothesis is confirmed

4. Root Causes Checklist
   - Data quality issue (upstream data problem)
   - Definition change (someone changed how the metric is calculated)
   - External event (seasonality, marketing campaign, incident)
   - Product change (feature launch, bug, A/B test)
   - Sampling or population change (the denominator shifted)
   - Genuine business change (actual performance change)

5. Findings Template
   - How to document what you found
   - Communication template for stakeholders
   - Recommended actions based on root cause type

Generate all queries ready to run. This is time-sensitive - structure for speed.`,
              result:
                'A systematic investigation framework with queries that leads to root cause identification in hours, not days.',
              tip: 'Always check the denominator first. Half the time, the metric "changed" because the population shifted, not the rate.',
            },
            {
              id: 'da-p-6-3',
              title: 'Analysis Handoff Document',
              task: 'Write a handoff document for an analysis someone else will maintain',
              prompt: `Write a handoff document for an analysis, report, or dashboard that someone else will maintain.

What is being handed off: [analysis name, report name, or dashboard]
Current owner: [your name]
New owner: [name and role]
Reason for handoff: [role change, reorg, etc.]

Details:
- Purpose: [what this analysis/report does]
- Stakeholders: [who uses the output and how often]
- Frequency: [how often it runs or refreshes]
- Data sources: [tables, APIs, files involved]
- Tools used: [SQL editor, BI tool, scripts, etc.]
- Location of assets: [where code, queries, and files live]

Generate a comprehensive handoff document:

1. Overview
   - What this is and why it exists
   - Who depends on it and what they do with the output
   - How critical it is (what breaks if it does not run)

2. Architecture
   - Data flow diagram (described in text)
   - Source tables and their refresh schedules
   - Transformations applied (step by step)
   - Output destinations (dashboards, emails, shared drives)

3. Execution Guide
   - Step-by-step: how to run this from start to finish
   - Parameters to update each cycle (dates, filters, etc.)
   - Expected run time
   - How to verify the output is correct

4. Code and Query Reference
   - Where each query or script lives
   - What each one does (purpose and dependencies)
   - Order of execution
   - Which parts are parameterized vs. hardcoded

5. Troubleshooting Guide
   - Common issues and how to fix them
   - Error messages and what they mean
   - When to escalate and to whom
   - Data source contacts if upstream issues occur

6. Stakeholder Context
   - What each stakeholder cares about most
   - How they prefer to receive the output
   - Known preferences and sensitivities
   - History of requests and customizations

7. Improvement Opportunities
   - Known technical debt
   - Features stakeholders have requested but not yet built
   - Potential for automation

Write this so that someone with no context could maintain this asset independently within a week.`,
              result:
                'A comprehensive handoff document that ensures continuity and prevents knowledge loss.',
              tip: 'Do a live walkthrough with the new owner using this document. Written handoffs alone miss the tacit knowledge that makes things run smoothly.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves you in a typical data analysis month.',
      timeTable: [
        {
          task: 'SQL query writing',
          without: '30-120 min/query',
          withAI: '5-15 minutes',
          saved: '5+ hrs/week',
        },
        {
          task: 'Report narrative writing',
          without: '1-3 hours/report',
          withAI: '15-30 minutes',
          saved: '3 hrs/report',
        },
        {
          task: 'Dashboard documentation',
          without: '2-4 hours/dashboard',
          withAI: '20-30 minutes',
          saved: '3 hrs/dashboard',
        },
        {
          task: 'Stakeholder presentations',
          without: '2-4 hours each',
          withAI: '30-45 minutes',
          saved: '3 hrs/presentation',
        },
        {
          task: 'Data cleaning scripts',
          without: '4-8 hours/dataset',
          withAI: '1-2 hours',
          saved: '5 hrs/dataset',
        },
        {
          task: 'Ad-hoc analysis scoping',
          without: '2-6 hours/analysis',
          withAI: '30-60 minutes',
          saved: '3 hrs/analysis',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '30-50 hrs/month',
      },
      sections: [
        {
          heading: 'The Analyst Edge',
          paragraphs: [
            'In 2026, the data analyst using AI clears their ad-hoc queue in half the time. They deliver reports with polished narratives, documented dashboards, and validated queries - every single time. Their counterpart is still debugging a window function at 6pm. Same analytical skill, same domain knowledge, radically different throughput.',
            'The gap is not ability. It is leverage.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a data analyst to spend your days fighting SQL syntax and formatting slides. You became one because you see stories in numbers that others miss. AI gives you back the time to find those stories - instead of wrestling with the mechanics of telling them.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. SQL query generation is the fastest win. You will feel the difference after your first AI-generated complex query.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI will be part of your data workflow. Follow along and check each step.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'da-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'da-1-2', label: 'Create a free Perplexity account' },
            { id: 'da-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Generate Your First Query',
          duration: '20 min',
          items: [
            {
              id: 'da-2-1',
              label: 'Run the Complex SQL Query Generator with a real analysis request',
            },
            {
              id: 'da-2-2',
              label: 'Test the generated query against your database',
            },
            {
              id: 'da-2-3',
              label: 'Compare: how long would writing this query have taken manually?',
            },
          ],
        },
        {
          day: 3,
          title: 'Write a Report Narrative',
          duration: '20 min',
          items: [
            {
              id: 'da-3-1',
              label: 'Use the Executive Report Summary Writer with your latest analysis',
            },
            {
              id: 'da-3-2',
              label: 'Turn the same findings into a Data Story Narrative',
            },
          ],
        },
        {
          day: 4,
          title: 'Document a Dashboard',
          duration: '20 min',
          items: [
            {
              id: 'da-4-1',
              label: 'Run the Dashboard Annotation Guide for your most-used dashboard',
            },
            {
              id: 'da-4-2',
              label: 'Create a Metric Definition Document for your team\'s key metrics',
            },
          ],
        },
        {
          day: 5,
          title: 'Communicate to Stakeholders',
          duration: '20 min',
          items: [
            {
              id: 'da-5-1',
              label: 'Build an Insight Presentation from a recent analysis',
            },
            {
              id: 'da-5-2',
              label: 'Draft a stakeholder delivery email using the Insights Delivery prompt',
            },
            {
              id: 'da-5-3',
              label: 'Use the Analysis Request Clarifier on a vague request in your backlog',
            },
          ],
        },
        {
          day: 6,
          title: 'Clean and Validate Data',
          duration: '25 min',
          items: [
            {
              id: 'da-6-1',
              label: 'Generate a Data Validation Script for a critical table',
            },
            {
              id: 'da-6-2',
              label: 'Build a Data Cleaning Script for a known messy dataset',
            },
            {
              id: 'da-6-3',
              label: 'Start a Data Quality Monitoring Framework for your top 3 tables',
            },
          ],
        },
        {
          day: 7,
          title: 'Build Reusable Templates',
          duration: '20 min',
          items: [
            {
              id: 'da-7-1',
              label: 'Create an Ad-hoc Analysis Template for your most common request type',
            },
            {
              id: 'da-7-2',
              label: 'Identify which AI system saved you the most time this week',
            },
            {
              id: 'da-7-3',
              label: 'Share this guide with a data analyst colleague who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
