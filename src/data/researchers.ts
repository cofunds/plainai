import type { WorkbookData } from './types'

export const researchersData = {
  professionId: 'researchers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Researchers',
  heroDescription:
    'Everything you need to start using AI in your research workflow - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You have 47 tabs open. Three are different versions of your methods section. One is a statistical output you have been trying to narrate for an hour. Another is the grant portal with a deadline that moved up by two weeks. Somewhere in that chaos is the literature review you promised your advisor three weeks ago.',
        'You became a researcher because you are curious about how things work. You love the moment when data tells a story nobody expected. The thrill of a clean result, a novel finding, a contribution that moves the field forward - that is why you do this.',
        'But the reality is different. You spend most of your time on the writing that surrounds the science - not the science itself. Literature reviews that take weeks. Methods sections that feel like you are describing the same procedures for the hundredth time. Grant proposals where the formatting requirements alone eat a full day. Conference abstracts squeezed in between everything else.',
        'The research itself is exciting. The production work around it is a grind. And the pressure to publish, present, and secure funding means that grind never stops.',
      ],
      highlight:
        'What if AI could handle the mechanical writing - so you could focus on the science that actually matters?',
      closingParagraph:
        'Not doing your research for you. Not analyzing your data. Just accelerating the writing, organizing, and formatting tasks that eat 60% of your time - so your brain is free for the intellectual breakthroughs only you can make.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to design your study, interpret your results, or replace your expertise. It does not understand the nuances of your field the way you do. It is not a shortcut to skip the thinking, and it is definitely not something you use without disclosure when required by your institution or journal.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the fastest, most well-read research assistant you have ever had. It has processed millions of papers, grant proposals, methods descriptions, and statistical narratives. It never gets tired. It never forgets a formatting requirement. And it works at the speed of conversation.',
            'Need a first draft of your methods section from your protocol notes? 2 minutes. Need to synthesize 30 abstracts into a thematic literature overview? 5 minutes. Need to turn your statistical output into a narrative results paragraph? 90 seconds.',
            'The key insight: AI handles the scaffolding - the structure, the first drafts, the formatting. You bring the scientific judgment, the domain expertise, and the intellectual rigor. It is a tool that amplifies your research productivity without compromising your standards.',
          ],
        },
      ],
      keyInsight:
        'Your deep expertise + AI\'s drafting speed = more publications, faster grants, less burnout. You know your field. AI just removes the hours of blank-page staring between your ideas and the finished manuscript.',
    },

    ch3: {
      intro: 'You don\'t need a complex tech stack. These five tools cover the full research writing workflow.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your all-purpose research writing assistant',
          description:
            'Methods sections, abstracts, grant drafts, conference submissions, and any research writing task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for drafting',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-document analyst and detailed editor',
          description:
            'Literature synthesis, detailed paper reviews, grant narrative refinement, nuanced scientific writing',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long, careful work',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your literature scout with citations',
          description:
            'Finding recent papers, verifying claims, exploring adjacent fields, source-backed research',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed searches',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your research project organizer',
          description:
            'Organizing literature notes, tracking projects, managing deadlines, storing protocol templates',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want centralized organization',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual presentation creator',
          description:
            'Conference posters, presentation slides, graphical abstracts, figures for publications',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Great for posters and presentations',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That handles 80% of research writing tasks. Add Notion AI for organization and Canva AI for visuals when you are ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual research workflow. Each system targets a core part of the research process. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Literature Review Acceleration',
          before:
            'You have 60 papers in your reference manager. You know you need to read, synthesize, and weave them into a coherent narrative. But the sheer volume is paralyzing. You read a few, take notes, lose the thread, start over. A solid lit review takes weeks of fragmented effort.',
          after:
            'You paste abstracts and key findings into AI. It identifies themes, maps the landscape of findings, spots contradictions, and drafts a structured synthesis. You go from raw papers to a thematic overview in hours, not weeks. Your job becomes refining and adding your expert interpretation.',
          flow: [
            'Collect abstracts and key excerpts from your papers',
            'Paste into Claude with your research question and synthesis goals',
            'AI identifies major themes, agreements, and contradictions',
            'AI drafts a thematic narrative synthesis',
            'You refine, verify citations, and add your expert interpretation',
          ],
          timeSaved: { without: '2-4 weeks', withAI: '2-3 days' },
        },
        {
          id: 2,
          name: 'Methodology Documentation',
          before:
            'Writing the methods section feels like describing the same procedures you have done dozens of times, but in slightly different ways for different papers. It is tedious, detail-heavy, and somehow still takes hours every time. You keep thinking you should have a template. You never make one.',
          after:
            'You feed AI your protocol, design parameters, and analysis plan. It drafts a complete methods section following standard conventions for your field. You review for accuracy, add specifics, and move on. What used to take a full day takes an hour.',
          flow: [
            'Describe your study design, sample, procedures, and analyses',
            'Specify the target journal and formatting conventions',
            'AI drafts a complete methods section with appropriate detail',
            'Review for accuracy and field-specific conventions',
            'AI formats references to instruments, software, and standards',
          ],
          timeSaved: { without: '6-10 hours', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'Data Analysis Narrative Writing',
          before:
            'You have the statistical output. The numbers are in front of you. But translating them into a coherent results narrative - with proper formatting, effect sizes, confidence intervals, and clear language - takes surprisingly long. And you do this for every analysis, every paper.',
          after:
            'You paste your statistical output and AI drafts a narrative results section with proper formatting, appropriate language for your field, and clear organization. You verify the numbers match, adjust the interpretation, and move on.',
          flow: [
            'Run your analyses and copy the statistical output',
            'Paste into AI with context about variables and hypotheses',
            'AI drafts a narrative results section with proper formatting',
            'Verify all numbers match your output exactly',
            'Add your interpretation and connect to hypotheses',
          ],
          timeSaved: { without: '4-8 hours/paper', withAI: '1-2 hours' },
        },
        {
          id: 4,
          name: 'Grant Application Support',
          before:
            'Grant writing is a massive time investment with no guaranteed return. The specific aims page alone can take days. The narrative has to be perfect. The budget justification is tedious. And the formatting requirements change with every agency. You spend more time on the proposal than on the research it would fund.',
          after:
            'AI drafts your specific aims, significance section, and budget justification from your research summary. It formats to agency specifications. You spend your time on the science and strategy - not fighting blank pages and formatting guides.',
          flow: [
            'Summarize your research question, significance, and approach',
            'Specify the funding agency and mechanism',
            'AI drafts specific aims, significance, and innovation sections',
            'Review and inject your unique scientific perspective',
            'AI drafts budget justification and other administrative sections',
          ],
          timeSaved: { without: '60-100 hours/proposal', withAI: '25-40 hours' },
        },
        {
          id: 5,
          name: 'Paper Drafting and Editing',
          before:
            'The first draft is always the hardest. You know what you want to say, but getting it from your head onto the page in a structured, publishable format takes forever. Then there is the editing - tightening prose, fixing transitions, checking consistency. Each round takes hours.',
          after:
            'AI generates a structured first draft from your outline and notes. It handles the scaffolding - section structure, transitions, topic sentences. You focus on the content, the argument, and the scientific precision. Editing rounds with AI catch issues you would miss after staring at the same text for days.',
          flow: [
            'Create a detailed outline with key points per section',
            'AI drafts each section based on your outline and notes',
            'Review and rewrite for scientific accuracy and your voice',
            'AI edits for clarity, consistency, and flow',
            'Final polish - AI checks formatting against journal guidelines',
          ],
          timeSaved: { without: '40-80 hours/paper', withAI: '15-30 hours' },
        },
        {
          id: 6,
          name: 'Conference Presentation Prep',
          before:
            'The conference is in two weeks. You need to turn your paper into a 15-minute talk with slides that actually engage an audience. Or worse, you need a poster that condenses months of work into a readable format. Both tasks get pushed to the last minute because they feel like separate projects on top of your existing workload.',
          after:
            'AI transforms your paper or results into a structured presentation outline, generates speaker notes, and creates poster content. You focus on delivery practice and visual design instead of staring at blank slides.',
          flow: [
            'Feed AI your paper, abstract, or key results',
            'Specify the format - talk length, poster dimensions, audience',
            'AI generates a presentation outline with key messages per slide',
            'AI drafts speaker notes for each slide',
            'For posters: AI structures content into poster sections with word limits',
          ],
          timeSaved: { without: '8-15 hours', withAI: '2-4 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts for research work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Literature Review Acceleration',
          prompts: [
            {
              id: 'rs-p-1-1',
              title: 'Literature Search Strategy Builder',
              task: 'Develop a systematic literature search strategy',
              prompt: `Help me develop a systematic literature search strategy.

Research question: [your specific question]
Field: [your discipline]
Databases I will search: [PubMed, PsycINFO, Web of Science, Scopus, etc.]
Time frame: [how far back to search]
Language: [English only or multilingual]

Generate:
1. Key search terms organized by concept:
   - Concept 1: [primary terms] + synonyms + related terms
   - Concept 2: [primary terms] + synonyms + related terms
   - Concept 3: [primary terms] + synonyms + related terms
2. Boolean search strings for each database (adjust syntax per platform)
3. MeSH terms or subject headings where applicable
4. Inclusion criteria (5-7 specific criteria)
5. Exclusion criteria (5-7 specific criteria)
6. A PRISMA-style flow diagram description
7. Estimated search scope - how many results to expect

Make the strategy comprehensive enough for a systematic review, or tell me how to narrow it for a narrative review.`,
              result:
                'A complete search strategy with Boolean strings ready to paste into your databases.',
              tip: 'Run the search strings in Perplexity first to test scope. If results are too broad, AI can help you add narrowing terms.',
            },
            {
              id: 'rs-p-1-2',
              title: 'Abstract Batch Synthesizer',
              task: 'Synthesize multiple paper abstracts into thematic clusters',
              prompt: `Synthesize the following paper abstracts into a structured thematic overview.

Research area: [your topic]
Purpose: [lit review section / grant background / scoping review]
Number of abstracts: [count]

Abstracts (separated by "---"):
[Paste all abstracts]

Generate:
1. Thematic clusters (3-6 themes based on what emerges from the data)
2. For each theme:
   - Theme name and description
   - Which papers fall under this theme (reference by first author)
   - Consensus findings within the theme
   - Points of disagreement or contradiction
   - Methodological patterns (common designs, samples, measures)
3. Cross-theme connections - how themes relate to each other
4. Gaps identified - what is missing from this body of literature
5. A 300-word narrative synthesis weaving the themes together
6. Suggested organizational structure for a literature review section

Do NOT fabricate any findings. Only reference what appears in the abstracts provided.`,
              result:
                'A thematic analysis of your literature that gives you a clear structure for your review.',
              tip: 'Process abstracts in batches of 15-25 for best results. Too many at once can dilute the synthesis quality.',
            },
            {
              id: 'rs-p-1-3',
              title: 'Literature Gap and Future Directions Generator',
              task: 'Identify research gaps and frame future research directions',
              prompt: `Based on my literature review findings, identify gaps and frame future research directions.

Field: [discipline]
Research area: [specific topic]

What the literature shows:
[Paste your summary of major findings, themes, and patterns]

Known limitations of existing studies:
[List common limitations you have identified]

Generate:
1. Methodological gaps:
   - Designs not yet used for this question
   - Populations or samples underrepresented
   - Measurement approaches not yet explored
   - Analytical techniques that could add insight
2. Conceptual gaps:
   - Theoretical frameworks not yet applied
   - Constructs not yet examined in this context
   - Mechanisms that remain unexplained
3. Applied gaps:
   - Practical implications not yet tested
   - Settings or contexts not yet studied
   - Interventions not yet developed or evaluated
4. For each gap:
   - A specific research question that addresses it
   - A brief methodological suggestion
   - Why it matters to the field
5. A "Future Directions" paragraph (200-300 words) suitable for a paper's discussion section

Prioritize gaps that are both important and feasible.`,
              result:
                'A structured gap analysis that can anchor your discussion section or motivate a new study.',
              tip: 'Use this output directly in your "Future Directions" sections and grant proposals. Reviewers value clearly articulated gaps.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Methodology Documentation',
          prompts: [
            {
              id: 'rs-p-2-1',
              title: 'Methods Section Draft',
              task: 'Draft a complete methods section from your study protocol',
              prompt: `Draft a methods section for my research paper.

Field: [discipline]
Target journal: [journal name and style - APA, AMA, Vancouver, etc.]
Study type: [experimental / quasi-experimental / observational / qualitative / mixed methods / computational]

Study details:
- Participants/sample: [who, how many, how recruited, inclusion/exclusion criteria]
- Design: [describe the overall design]
- Procedures: [step-by-step what happened]
- Measures/instruments: [what you measured and with what tools]
- Intervention (if applicable): [what was done]
- Analysis plan: [statistical or analytical approach]
- Software used: [list with versions]
- Ethical approval: [IRB/ethics board details]

Generate a complete methods section with:
1. Participants/Sample subsection
2. Design subsection
3. Procedures subsection
4. Measures/Instruments subsection
5. Data Analysis subsection
6. Ethical Considerations statement

Follow [journal style] conventions. Include enough detail for replication. Use past tense and passive voice where conventional for [field].`,
              result:
                'A complete methods section draft structured for your target journal.',
              tip: 'Always verify that AI\'s description matches your actual protocol exactly. Review instrument names, version numbers, and analysis specifications carefully.',
            },
            {
              id: 'rs-p-2-2',
              title: 'Analysis Plan Narrative',
              task: 'Write a data analysis plan for a grant proposal or pre-registration',
              prompt: `Write a data analysis plan for my [grant proposal / pre-registration / methods section].

Research questions:
1. [RQ1]
2. [RQ2]
3. [RQ3 if applicable]

Variables:
- Independent/Predictor: [list with types - continuous, categorical, etc.]
- Dependent/Outcome: [list with types]
- Covariates: [list]
- Moderators/Mediators (if applicable): [list]

Sample size: [planned N]
Design: [describe]

For each research question, generate:
1. The specific analysis (e.g., hierarchical regression, ANOVA, SEM, thematic analysis)
2. Rationale for choosing this analysis
3. Assumptions to test and how you will test them
4. How you will handle violations of assumptions
5. Effect size measure you will report
6. Missing data strategy
7. Sensitivity analyses planned

Also include:
- Power analysis description (justify your sample size)
- Alpha level and correction for multiple comparisons
- Software and packages to be used

Write in future tense for proposals, past tense for papers.`,
              result:
                'A detailed analysis plan that covers every question a reviewer would ask about your statistical approach.',
              tip: 'Reviewers frequently flag incomplete analysis plans. This prompt ensures you address assumptions, missing data, and sensitivity analyses upfront.',
            },
            {
              id: 'rs-p-2-3',
              title: 'Instrument and Measure Description',
              task: 'Write standardized descriptions of research instruments and measures',
              prompt: `Write standardized descriptions of the instruments and measures used in my study.

Instruments:
1. [Instrument name] - measures [construct], [number] items, [response format]
   - Original citation: [reference]
   - Reliability in original study: [alpha or other metric]
   - Reliability in my sample: [if available]
   - Subscales: [list if applicable]
   - Sample item: [one example item]

2. [Repeat for each instrument]

Behavioral measures:
- [Describe any behavioral or observational measures]

Physiological measures (if applicable):
- [Equipment, calibration, recording parameters]

For each measure, generate:
1. A 2-3 sentence description following [APA / AMA / journal] style
2. Scoring description - how items are scored and what higher scores mean
3. Psychometric properties statement
4. Justification for choosing this measure over alternatives
5. Any modifications made to the original instrument and rationale

Organize in the order they were administered. Use consistent formatting throughout.`,
              result:
                'Publication-ready instrument descriptions with consistent formatting and complete psychometric information.',
              tip: 'Create a personal library of instrument descriptions you can reuse across papers. Update reliability values for each new sample.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Data Analysis Narrative Writing',
          prompts: [
            {
              id: 'rs-p-3-1',
              title: 'Statistical Results Narrator',
              task: 'Turn statistical output into a narrative results section',
              prompt: `Turn my statistical output into a narrative results section.

Field: [discipline]
Journal style: [APA / AMA / Vancouver / other]
Analysis type: [regression / ANOVA / t-test / chi-square / SEM / mixed models / other]

Statistical output:
[Paste your statistical output - from R, SPSS, Stata, Python, etc.]

Context:
- Research question this addresses: [your RQ]
- Hypothesis: [what you predicted]
- Variables involved: [IV, DV, covariates]

Generate a results narrative that:
1. Opens with preliminary analyses (descriptive statistics, assumption checks)
2. Reports main findings with proper statistical notation:
   - Test statistic, degrees of freedom, p-value
   - Effect size with confidence interval
   - Proper formatting for [journal style]
3. Describes the direction and magnitude of effects in plain language
4. Reports whether each hypothesis was supported
5. Includes any post-hoc analyses or follow-up tests
6. References tables and figures by number (I will create them)

Use past tense. Be precise with numbers. Do not interpret - just report. Save interpretation for the discussion.`,
              result:
                'A properly formatted results narrative ready for your paper.',
              tip: 'ALWAYS verify every number against your original output. AI can occasionally transpose digits or misformat statistical notation.',
            },
            {
              id: 'rs-p-3-2',
              title: 'Results Table Formatter',
              task: 'Format statistical results into publication-ready tables',
              prompt: `Format my statistical results into publication-ready tables.

Journal style: [APA / AMA / other]
Analysis type: [describe]

Raw results:
[Paste your statistical output]

Generate:
1. A descriptive statistics table:
   - Variable names (cleaned up)
   - M, SD (or Mdn, IQR for non-normal data)
   - Range
   - N per variable
2. A correlation matrix (if applicable):
   - Pearson/Spearman correlations
   - Significance indicators
   - Means and SDs in the diagonal or margins
3. Main analysis table:
   - Predictor/factor labels
   - Coefficients (B, beta, OR - whatever applies)
   - Standard errors
   - Test statistics
   - p-values
   - Confidence intervals
   - Effect sizes
4. A table note explaining abbreviations, significance levels, and any formatting conventions

Format all tables in [APA / journal] style with proper column alignment. Use three horizontal lines only (top, header separator, bottom) per APA convention.`,
              result:
                'Publication-ready tables formatted to your target journal\'s specifications.',
              tip: 'Generate the table structure in AI, then recreate it in your word processor. Double-check every number against your output.',
            },
            {
              id: 'rs-p-3-3',
              title: 'Qualitative Findings Narrator',
              task: 'Structure qualitative findings into a coherent narrative',
              prompt: `Structure my qualitative findings into a coherent results narrative.

Methodology: [grounded theory / thematic analysis / phenomenology / content analysis / other]
Data source: [interviews / focus groups / observations / documents / open-ended survey]
Number of participants/sources: [count]
Analysis approach: [how you coded and analyzed]

My themes and findings:
[Paste your themes, sub-themes, and supporting evidence/codes]

Generate a results narrative that:
1. Opens with an overview of themes identified and their relationships
2. For each major theme:
   - Theme name and definition
   - Description of what the theme captures
   - 2-3 participant quotes that illustrate the theme (I will insert real quotes)
   - Sub-themes if applicable
   - How prevalent this theme was across participants
3. Cross-theme connections and patterns
4. A thematic map description (relationships between themes)
5. Deviant cases or alternative perspectives

Style requirements:
- Balance description with participant voice
- Use [Author, Year] in-text citation style
- Maintain participant confidentiality (use pseudonyms)
- [Word limit if applicable]

Present findings, not interpretation. Save interpretation for the discussion.`,
              result:
                'A structured qualitative results section that balances narrative coherence with participant voice.',
              tip: 'Replace placeholder quotes with real participant quotes. The structure AI provides is the framework - your data is the substance.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Grant Application Support',
          prompts: [
            {
              id: 'rs-p-4-1',
              title: 'Specific Aims Page Builder',
              task: 'Draft a specific aims page for a federal grant proposal',
              prompt: `Draft a specific aims page for my [NIH / NSF / DOE / other] grant proposal.

Research area: [field and subfield]
Mechanism: [R01 / R21 / NSF CAREER / other]
Research question: [your central question]
Long-term goal: [your lab's broader research direction]
Preliminary data: [brief summary of what you have]
Innovation: [what is new about your approach]

Target structure:
1. Opening paragraph:
   - Establish the problem and its significance
   - State what is known and the critical knowledge gap
   - How your work addresses this gap
2. Overall objective and central hypothesis
3. Rationale paragraph - why your approach will work
4. Specific Aims (2-3):
   - Aim [1]: [title] - brief description, hypothesis, approach
   - Aim [2]: [title] - brief description, hypothesis, approach
   - Aim [3]: [title] - brief description, hypothesis, approach
5. Closing paragraph:
   - Expected outcomes
   - Impact on the field
   - How this advances your long-term research direction

Keep to exactly one page. Every sentence should serve a purpose. Use active voice where possible.
Follow [agency] conventions and culture.`,
              result:
                'A one-page specific aims draft structured to agency expectations.',
              tip: 'Have three colleagues read your aims page before submission. If they cannot summarize your project in one sentence after reading it, the narrative needs tightening.',
            },
            {
              id: 'rs-p-4-2',
              title: 'Significance and Innovation Sections',
              task: 'Draft the significance and innovation sections of a grant proposal',
              prompt: `Draft the Significance and Innovation sections for my grant proposal.

Research topic: [your topic]
Funding agency: [agency and mechanism]
Field context: [what is currently known]
Knowledge gap: [what is missing]
Your approach: [how you will address the gap]
Preliminary data: [what you have that supports feasibility]

Significance section (1-1.5 pages):
1. Establish the importance of the problem
2. Summarize the current state of knowledge (cite key works - I will add references)
3. Identify the critical gap this proposal addresses
4. Explain how filling this gap will advance the field
5. Describe the potential impact - scientific, clinical, societal

Innovation section (0.5-1 page):
1. What is conceptually novel about your approach
2. What is technically novel about your methods
3. How this advances beyond current approaches
4. Why existing approaches are insufficient

Requirements:
- Use subheadings where appropriate
- Bold key statements for skimming reviewers
- Avoid overclaiming - be ambitious but credible
- Write for a study section that includes non-specialists in your exact area`,
              result:
                'Compelling significance and innovation sections that make a clear case for your research.',
              tip: 'Reviewers decide significance in the first paragraph. Lead with the strongest, most concrete statement of why this matters.',
            },
            {
              id: 'rs-p-4-3',
              title: 'Budget Justification for Research Grants',
              task: 'Write a detailed budget justification connecting costs to specific aims',
              prompt: `Write a budget justification for my research grant proposal.

Funding agency: [agency]
Project duration: [years]
Specific Aims:
- Aim 1: [title and brief description]
- Aim 2: [title and brief description]
- Aim 3: [title and brief description]

Budget items:
Personnel:
- PI: [% effort, salary basis]
- Co-I(s): [% effort, salary basis, role]
- Postdoc(s): [number, salary, role]
- Graduate students: [number, stipend, role]
- Research assistants: [number, hourly rate, role]
- Technicians: [number, salary, role]

Equipment: [list with costs and purpose]
Supplies: [categories and estimates]
Travel: [conferences, fieldwork, collaborator visits]
Participant costs: [if applicable]
Other: [subawards, consultants, etc.]

For each line item, write a 2-4 sentence justification that:
1. States why this cost is essential to the project
2. Connects it to a specific aim
3. Explains how the amount was determined
4. Demonstrates cost-effectiveness

Follow [agency] budget conventions. Be specific and transparent.`,
              result:
                'A complete budget justification that ties every dollar to your scientific objectives.',
              tip: 'Budget reviewers look for alignment between aims and costs. If a personnel line does not connect to a specific aim, it raises questions.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Paper Drafting and Editing',
          prompts: [
            {
              id: 'rs-p-5-1',
              title: 'Abstract Writing Assistant',
              task: 'Draft a structured abstract for a journal submission',
              prompt: `Draft a structured abstract for my research paper.

Target journal: [journal name]
Abstract format: [structured with headings / unstructured paragraph / other]
Word limit: [count]

Paper details:
- Background/problem: [1-2 sentences on why this matters]
- Objective/purpose: [what you set out to do]
- Methods: [design, sample, key procedures, analysis]
- Results: [main findings with key numbers]
- Conclusions: [what this means and why it matters]
- Keywords needed: [number required]

Generate:
1. A complete abstract within the word limit
2. Structured with appropriate headings if required
3. Key findings stated with specific numbers (not vague language)
4. A final sentence on implications or significance
5. [Number] keywords optimized for database indexing

Requirements:
- Every sentence must carry information - no filler
- Use past tense for methods and results
- Use present tense for established facts and conclusions
- Do not overstate findings
- Match the tone and conventions of [journal name]

Also generate a second version that is 10% shorter for conferences with tighter limits.`,
              result:
                'Two abstract versions - one for your target journal and one shorter version for conferences.',
              tip: 'Write the abstract last, after your paper is complete. Then use AI to tighten it. A strong abstract determines whether anyone reads your paper.',
            },
            {
              id: 'rs-p-5-2',
              title: 'Discussion Section Scaffolder',
              task: 'Draft the discussion section of a research paper',
              prompt: `Draft the discussion section of my research paper.

Field: [discipline]
Target journal: [journal name]

Key findings:
1. [Finding 1 - brief description]
2. [Finding 2 - brief description]
3. [Finding 3 - brief description]

How findings relate to existing literature:
[Paste your notes on how your results compare to prior work]

Unexpected findings: [anything surprising]
Limitations: [list your study limitations]
Implications: [practical and theoretical significance]

Generate a discussion section with:
1. Opening paragraph - restate main findings and their significance (no statistics)
2. Finding-by-finding analysis (one paragraph each):
   - Restate the finding
   - Compare to existing literature (support or contradict)
   - Explain possible mechanisms or reasons
   - Note implications
3. Integration paragraph - how findings fit together into a larger picture
4. Limitations paragraph - honest but not self-defeating
5. Future directions paragraph - what should be studied next
6. Concluding paragraph - the take-home message

Do not simply repeat the results. Interpret, explain, and contextualize. Use hedging language appropriately ("suggests," "may indicate") - do not overclaim.`,
              result:
                'A structured discussion section that interprets your findings in context.',
              tip: 'The discussion is where reviewers decide if your paper makes a contribution. Invest time in the interpretation paragraphs - they are your argument for significance.',
            },
            {
              id: 'rs-p-5-3',
              title: 'Manuscript Consistency Checker',
              task: 'Check a manuscript for internal consistency and common errors',
              prompt: `Review my manuscript for internal consistency and common errors.

[Paste your full manuscript or specific sections]

Check for:
1. Number consistency:
   - Do sample sizes match between methods and results?
   - Do percentages add up?
   - Are all referenced tables and figures present?
   - Do table/figure numbers match in-text references?
2. Terminology consistency:
   - Are terms used consistently throughout? (no switching between synonyms)
   - Are abbreviations defined on first use?
   - Are variable names consistent between text and tables?
3. Logic consistency:
   - Does the introduction set up the research questions tested?
   - Do methods describe everything needed to produce the results?
   - Does the discussion address all findings reported in results?
   - Are conclusions supported by the reported results?
4. Formatting:
   - Citation format consistency
   - Heading level consistency
   - Table and figure formatting consistency
5. Common errors:
   - Tense inconsistencies
   - Hedging language issues (overclaiming or underclaiming)
   - Missing information that reviewers commonly flag

List every issue found with its location and a specific fix.`,
              result:
                'A detailed consistency check that catches errors before reviewers do.',
              tip: 'Run this check on your near-final draft. It catches the issues that emerge from writing sections at different times over weeks or months.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Conference Presentation Prep',
          prompts: [
            {
              id: 'rs-p-6-1',
              title: 'Conference Talk Outline and Speaker Notes',
              task: 'Convert a paper into a conference presentation outline',
              prompt: `Convert my research paper into a conference presentation outline.

Presentation format: [oral / lightning talk / symposium]
Time limit: [minutes, including Q&A time]
Audience: [specialists in your area / mixed discipline / general academic]
Conference: [name, if relevant]

Paper summary:
[Paste your abstract or a brief summary of the paper]

Key results:
[List the 3-5 most important findings]

Generate:
1. Slide-by-slide outline:
   - Slide title
   - Key message for that slide (one sentence)
   - Content bullet points (3-4 max per slide)
   - Visual suggestion (graph type, image, diagram)
   - Time allocation
2. Speaker notes for each slide:
   - What to say (conversational, not read-from-script)
   - Transition to next slide
   - Anticipated audience questions for key slides
3. Opening: a compelling first 30 seconds that hooks the audience
4. Closing: a memorable final statement
5. Q&A preparation: 5 likely questions with draft answers

Rules:
- One message per slide
- No walls of text
- The talk should be understandable if someone missed any single slide
- Total slides: [time in minutes minus Q&A] slides maximum`,
              result:
                'A complete presentation outline with speaker notes and Q&A preparation.',
              tip: 'Practice with a timer. If you are running long, cut slides from the middle (methods detail) - never rush the opening or conclusions.',
            },
            {
              id: 'rs-p-6-2',
              title: 'Conference Poster Content Generator',
              task: 'Generate content for a research conference poster',
              prompt: `Generate content for a research conference poster.

Research topic: [title]
Conference: [name]
Poster dimensions: [standard 48x36 or specify]
Audience: [who will be walking by]

Paper or results summary:
[Paste your abstract and key results]

Generate poster content with strict word limits:
1. Title: compelling, under 15 words
2. Introduction/Background: 100-120 words
   - Problem statement
   - Why it matters
   - Research question
3. Methods: 80-100 words
   - Design, sample, key procedures
   - Use bullet points for scannability
4. Results: 100-150 words
   - Key findings with specific numbers
   - Suggest figure types for each finding
5. Discussion/Conclusions: 80-100 words
   - What findings mean
   - Implications
   - Future directions
6. Key takeaway: one sentence in large font
7. References: 5-8 most important (abbreviated format)
8. QR code suggestion: link to full paper or supplementary materials

Design principles:
- Total text should be readable from 4 feet away
- Visual-to-text ratio should be 60:40 or higher
- Flow should be intuitive (columns or numbered sections)`,
              result:
                'Poster content with strict word limits that keeps your poster readable and engaging.',
              tip: 'The key takeaway sentence is the most important element. If someone spends 10 seconds at your poster, that is what they should read.',
            },
            {
              id: 'rs-p-6-3',
              title: 'Elevator Pitch for Research',
              task: 'Create a 60-second elevator pitch for your research',
              prompt: `Create a 60-second elevator pitch for my research.

Research topic: [your topic]
Field: [discipline]
Key finding or contribution: [your main result or argument]
Why it matters: [real-world or theoretical significance]
Audience: [fellow researchers / funding agency / general public / potential collaborator]

Generate:
1. The pitch (150-180 words, approximately 60 seconds when spoken):
   - Hook: start with a surprising fact, question, or relatable scenario
   - Problem: what gap or issue your research addresses
   - Your approach: what you did (one sentence)
   - Key finding: what you discovered (one sentence with specific result)
   - Impact: why this matters to [audience]
   - Close: a memorable final sentence
2. Three variations:
   - Version A: for an expert in your field (more technical)
   - Version B: for a scientist outside your field (accessible)
   - Version C: for a non-scientist (no jargon)

Requirements:
- No jargon in versions B and C
- Use concrete language - not "we investigated the relationship between X and Y"
- Make it feel like a conversation, not a presentation
- Include one specific number or fact that sticks`,
              result:
                'Three versions of a 60-second pitch tailored to different audiences.',
              tip: 'Practice your pitch out loud. If you stumble on a sentence, simplify it. The best pitches sound natural, not rehearsed.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at the real time savings across your research workflow.',
      timeTable: [
        {
          task: 'Literature review',
          without: '2-4 weeks',
          withAI: '2-3 days',
          saved: '8-17 days',
        },
        {
          task: 'Methods section writing',
          without: '6-10 hours',
          withAI: '1-2 hours',
          saved: '5-8 hrs',
        },
        {
          task: 'Results narration',
          without: '4-8 hours/paper',
          withAI: '1-2 hours',
          saved: '3-6 hrs',
        },
        {
          task: 'Grant proposal drafting',
          without: '60-100 hours',
          withAI: '25-40 hours',
          saved: '35-60 hrs',
        },
        {
          task: 'Paper drafting',
          without: '40-80 hours',
          withAI: '15-30 hours',
          saved: '25-50 hrs',
        },
        {
          task: 'Conference presentations',
          without: '8-15 hours',
          withAI: '2-4 hours',
          saved: '6-11 hrs',
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
            'Researchers who use AI for the mechanical parts of their work are publishing faster, submitting more grants, and presenting more often - not because they are smarter, but because they spend less time on production work and more time on actual science.',
            'The gap is not about research quality. It is about production efficiency.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not pursue a research career to spend your days formatting methods sections and fighting with budget justification templates. You did it to discover something new. AI gives you back the time for discovery.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One tool. Run it on your current project this week. That is enough to see the difference.',
    },

    ch7: {
      intro:
        'Seven days. Fifteen minutes a day. By the end of the week, AI will be part of your research workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'rs-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'rs-1-2', label: 'Create a free Perplexity account for literature searching' },
            { id: 'rs-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Try Literature Synthesis',
          duration: '15 min',
          items: [
            {
              id: 'rs-2-1',
              label:
                'Collect 5-10 abstracts from your current research project',
            },
            {
              id: 'rs-2-2',
              label:
                'Run the Abstract Batch Synthesizer prompt and review the thematic output',
            },
          ],
        },
        {
          day: 3,
          title: 'Draft a Methods Section',
          duration: '20 min',
          items: [
            {
              id: 'rs-3-1',
              label: 'Take your most recent study protocol or completed analysis',
            },
            {
              id: 'rs-3-2',
              label:
                'Run the Methods Section Draft prompt and compare to what you would have written',
            },
          ],
        },
        {
          day: 4,
          title: 'Narrate Your Results',
          duration: '15 min',
          items: [
            {
              id: 'rs-4-1',
              label: 'Grab a statistical output from a recent analysis',
            },
            {
              id: 'rs-4-2',
              label:
                'Run the Statistical Results Narrator prompt and verify the numbers match',
            },
          ],
        },
        {
          day: 5,
          title: 'Write an Abstract',
          duration: '20 min',
          items: [
            {
              id: 'rs-5-1',
              label: 'Take a paper in progress or recently completed',
            },
            {
              id: 'rs-5-2',
              label: 'Run the Abstract Writing Assistant prompt',
            },
            {
              id: 'rs-5-3',
              label: 'Edit to match your voice and submit or save',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More Systems',
          duration: '15 min',
          items: [
            {
              id: 'rs-6-1',
              label: 'Try any system or prompt you have not explored yet',
            },
            {
              id: 'rs-6-2',
              label:
                'Identify which systems will save you the most time on your current projects',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'rs-7-1',
              label: 'What worked? Which prompts will you integrate into your regular workflow?',
            },
            {
              id: 'rs-7-2',
              label:
                'Share this guide with a colleague or grad student who could use the help',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
