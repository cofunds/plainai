import type { WorkbookData } from './types'

export const journalistsData = {
  professionId: 'journalists',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Journalists',
  heroDescription:
    'Everything you need to start using AI in your journalism workflow - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'The editor wants the story by 4 PM. It is currently 11 AM and you have three tabs of conflicting sources, a half-transcribed interview, and a lead paragraph you have rewritten four times. Your phone has two missed calls from a source who can only talk at noon, and the Slack channel is blowing up about a breaking development that might change your angle entirely.',
        'You became a journalist because you believe in the power of truth. You love chasing a story, connecting dots nobody else sees, asking the questions that make powerful people uncomfortable. The craft of turning chaos into clarity - that is what drives you.',
        'But the reality of modern journalism looks different. Shrinking newsrooms mean one reporter covers what three used to. The research that should take a day gets compressed into an hour. You are expected to publish faster, with fewer resources, across more platforms, while maintaining the standards that make journalism matter.',
        'The stories you care about - the deep dives, the investigations, the pieces that actually change something - keep getting pushed aside by the daily grind of deadline pressure and production volume.',
      ],
      highlight:
        'What if AI could handle the research grunt work and production overhead - so you could focus on the journalism that actually matters?',
      closingParagraph:
        'Not writing your stories for you. Not replacing your news judgment. Just accelerating the background research, the interview prep, the draft structuring, and the fact-checking workflows - so you have more time for the reporting only a human can do.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not a journalist. It cannot cultivate sources, read body language in an interview, sense when someone is lying, or make the editorial judgment calls that distinguish good journalism from content. It does not replace reporting. It does not replace ethics. And it should never be used to fabricate or misrepresent.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the fastest research assistant you have ever worked with. It has read millions of articles, press releases, public records, and reports. It can synthesize background information, generate interview questions, structure article outlines, and help you fact-check claims - all at the speed of conversation.',
            'Need a background brief on a source before an interview? 90 seconds. Need to restructure a messy draft into a tight narrative? 2 minutes. Need 10 headline variations to A/B test? 30 seconds.',
            'The core principle: AI handles the production work. You do the reporting, the analysis, and the storytelling. It is a tool that makes a fast journalist faster and a thorough journalist more thorough.',
          ],
        },
      ],
      keyInsight:
        'Your news judgment + AI\'s research speed = better stories on tighter deadlines. You know what matters. AI removes the 3 hours of background research between assignment and first draft.',
    },

    ch3: {
      intro: 'You don\'t need fancy software. These five tools cover the full journalism workflow.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your all-purpose editorial assistant',
          description:
            'Draft structuring, headline generation, interview prep, content repurposing, and any text-based editorial task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for drafting and brainstorming',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form analyst and careful editor',
          description:
            'Analyzing long documents, synthesizing complex topics, nuanced editing, and detailed source analysis',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for analysis and long-form work',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your source-backed research engine',
          description:
            'Background research with citations, fact-checking claims against sources, finding recent data and reports',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your editorial planning hub',
          description:
            'Story tracking, source management, beat coverage planning, editorial calendars',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want to organize your beats',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual storytelling tool',
          description:
            'Social media graphics, data visualizations for articles, newsletter headers, promotional images',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Great for social and visual content',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers research, writing, and fact-checking. Add the rest when your workflow demands it.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual journalism workflow. Each system targets a core part of the reporting process. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Source Research and Verification',
          before:
            'You get assigned a story and spend the first two hours Googling the topic, reading old articles, scanning public records, and trying to figure out who the right people to talk to are. By the time you have enough background to start reporting, half your day is gone.',
          after:
            'AI compiles a background brief in minutes - key facts, timeline of events, relevant players, public statements, and potential sources to contact. You start reporting with context instead of spending hours building it from scratch.',
          flow: [
            'Define the story topic and what you need to know',
            'AI generates a structured background brief with key facts',
            'AI identifies potential sources and their relevance',
            'Verify key claims using Perplexity for source-backed confirmation',
            'Start reporting with a solid foundation instead of a blank page',
          ],
          timeSaved: { without: '2-4 hours', withAI: '15-20 minutes' },
        },
        {
          id: 2,
          name: 'Interview Preparation',
          before:
            'You have an interview in an hour. You skim the source\'s LinkedIn, read a couple of their past quotes, and jot down some generic questions. You know you could be better prepared, but there is no time. The interview ends with you wishing you had asked better follow-ups.',
          after:
            'AI researches the source, summarizes their public positions and past statements, and generates targeted interview questions based on your story angle. You walk into every interview prepared, with follow-up questions ready for different directions the conversation might go.',
          flow: [
            'Provide the source\'s name, role, and your story angle',
            'AI compiles a source profile from public information',
            'AI generates 10-15 tailored interview questions',
            'AI suggests follow-up questions for likely responses',
            'Review and prioritize - walk into the interview prepared',
          ],
          timeSaved: { without: '1-2 hours', withAI: '15-20 minutes' },
        },
        {
          id: 3,
          name: 'Article Drafting and Structure',
          before:
            'You have your notes, your quotes, your data. Now you need to turn it into a story. You stare at the lead for 20 minutes. You write 500 words, realize the structure is wrong, and reorganize. The draft takes two hours when the actual writing should take 45 minutes.',
          after:
            'AI structures your raw notes and quotes into an article outline, suggests lead options, and organizes information by narrative arc. You write the story - not the structure. The first draft comes together in half the time.',
          flow: [
            'Paste your notes, quotes, and key facts into AI',
            'Specify the article type, length, and publication',
            'AI generates 2-3 structural approaches with lead options',
            'Choose your structure and write from the outline',
            'AI helps tighten the draft on revision',
          ],
          timeSaved: { without: '2-3 hours', withAI: '45-60 minutes' },
        },
        {
          id: 4,
          name: 'Headline and Hook Testing',
          before:
            'You wrote the story. Now you need a headline. You write one, it is too long. You write another, it is bland. The editor wants options. You spend 20 minutes on something that should take 2 minutes, and you are never sure which version will actually get clicks.',
          after:
            'AI generates 10-15 headline variations in different styles - news, feature, provocative, SEO-optimized. You pick the best, test a couple, and move on. Same for social media hooks and email subject lines.',
          flow: [
            'Feed AI your article summary or lead paragraph',
            'AI generates 10-15 headline variations across styles',
            'AI generates social media hooks for different platforms',
            'Select your top 2-3 options',
            'A/B test when possible, or use editorial judgment to pick',
          ],
          timeSaved: { without: '20-30 minutes', withAI: '3-5 minutes' },
        },
        {
          id: 5,
          name: 'Fact-Checking Workflows',
          before:
            'You need to verify three claims, two statistics, and a timeline before publishing. Each one requires searching for the original source, cross-referencing, and documenting what you found. Thorough fact-checking takes hours - so under deadline pressure, it sometimes gets less attention than it should.',
          after:
            'AI helps structure your fact-checking workflow - identifying claims that need verification, finding potential source documents, flagging inconsistencies, and creating a verification checklist. You do the confirming, but AI does the organizing.',
          flow: [
            'Paste your draft into AI and ask it to flag claims needing verification',
            'AI generates a claim-by-claim verification checklist',
            'Use Perplexity to find source documents for each claim',
            'AI cross-references sources and flags inconsistencies',
            'Document your verification trail for editorial review',
          ],
          timeSaved: { without: '1-3 hours', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Beat Coverage Planning',
          before:
            'You cover a beat but rarely have time to step back and plan strategically. Your coverage is reactive - you write what happens. The enterprise stories, the trend pieces, the deeper analyses keep getting pushed to "when things slow down." Things never slow down.',
          after:
            'AI helps you map your beat, identify coverage gaps, track developing stories, and plan enterprise pieces in advance. You shift from purely reactive to strategically proactive coverage.',
          flow: [
            'Describe your beat and recent coverage focus',
            'AI analyzes coverage patterns and identifies gaps',
            'AI generates a quarterly beat coverage plan',
            'AI suggests enterprise story ideas based on emerging trends',
            'Review and build the plan into your editorial calendar',
          ],
          timeSaved: { without: 'Rarely done', withAI: '30-45 minutes/month' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts for journalism work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Source Research and Verification',
          prompts: [
            {
              id: 'jn-p-1-1',
              title: 'Background Research Brief',
              task: 'Generate a comprehensive background brief on a story topic',
              prompt: `Generate a background research brief for a journalism story.

Story topic: [the topic or event you are covering]
Publication type: [newspaper / magazine / digital / broadcast]
Audience: [general public / industry / local community]
My angle or focus: [what aspect you plan to cover]

Compile a brief that includes:
1. Topic overview:
   - What happened / what is happening (factual summary)
   - Timeline of key events
   - Key players and their roles
2. Context and background:
   - Historical context - how did we get here?
   - Related developments in the past 12 months
   - Relevant data, statistics, or research findings
3. Stakeholder map:
   - Who is affected and how
   - Who has power or influence over this issue
   - Who has spoken publicly and what they said
4. Source suggestions:
   - 5-7 types of sources who could provide insight
   - Specific organizations or experts to contact
   - Public records or documents that might be relevant
5. Story angles worth exploring:
   - 3-4 potential angles beyond the obvious narrative
   - Unanswered questions that could drive the story

Flag any claims that need independent verification. Mark where information may be outdated or unconfirmed.`,
              result:
                'A structured research brief that gives you a running start on any story.',
              tip: 'Run this in Perplexity for source-backed facts, then in Claude for deeper analysis and angle suggestions.',
            },
            {
              id: 'jn-p-1-2',
              title: 'Source Profile Builder',
              task: 'Compile a profile of a source before an interview or story',
              prompt: `Compile a profile of this person for journalism research purposes.

Name: [full name]
Known role: [their title, organization, relevance to the story]
Story context: [why you are researching them]

Based on publicly available information, compile:
1. Professional background:
   - Current role and organization
   - Career history (relevant positions)
   - Areas of expertise or authority
2. Public statements and positions:
   - Key quotes on relevant topics (with approximate dates)
   - Published op-eds, articles, or interviews
   - Known positions on the issue you are covering
3. Connections and affiliations:
   - Organizations, boards, or groups they are associated with
   - Notable professional relationships relevant to the story
   - Potential conflicts of interest to be aware of
4. Media history:
   - How they have interacted with media before
   - Notable interviews or controversies
   - Communication style observations
5. Preparation notes:
   - What they are likely to want to talk about
   - What they are likely to avoid
   - 3 things to ask about that could yield new information

Use ONLY publicly available information. Flag anything that could not be readily verified.`,
              result:
                'A source profile that helps you walk into any interview fully informed.',
              tip: 'Always independently verify key claims in the profile. AI compiles information but does not guarantee accuracy.',
            },
            {
              id: 'jn-p-1-3',
              title: 'Public Records and Data Locator',
              task: 'Identify relevant public records and data sources for a story',
              prompt: `Help me identify relevant public records and data sources for a journalism investigation.

Story topic: [what you are investigating]
Geographic scope: [local / state / federal / international]
Key entities involved: [people, organizations, agencies]
What I am trying to establish: [the specific facts or patterns you need to verify]

Identify:
1. Government records:
   - Federal databases and filings relevant to this topic
   - State-level records to check
   - Local government documents (meeting minutes, budgets, permits, etc.)
   - FOIA/public records request targets
2. Corporate and financial records:
   - SEC filings, corporate registrations
   - Tax records (if publicly available)
   - Lobbying disclosures
   - Contract or procurement records
3. Legal records:
   - Court filings and case records
   - Regulatory actions or complaints
   - Licensing records
4. Data sources:
   - Government statistical databases
   - Academic research datasets
   - Industry reports with relevant data
5. For each source:
   - What you are likely to find
   - How to access it (website, FOIA request, in-person)
   - Expected timeline to obtain
   - How it connects to your story

Prioritize by likely relevance and accessibility.`,
              result:
                'A roadmap of public records and data sources organized by relevance and accessibility.',
              tip: 'Use this as your starting checklist. The best investigative stories often come from connecting multiple records sources.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Interview Preparation',
          prompts: [
            {
              id: 'jn-p-2-1',
              title: 'Interview Question Set Generator',
              task: 'Generate targeted interview questions based on your story angle',
              prompt: `Generate interview questions for a journalism interview.

Source name: [who you are interviewing]
Their role: [their position and relevance]
Story topic: [what the story is about]
Your angle: [the specific focus of your story]
Interview type: [on-the-record / background / phone / in-person]
Time available: [estimated interview length]

What you already know: [key facts you have established]
What you need to find out: [specific gaps in your reporting]

Generate:
1. Opening questions (2-3):
   - Warm-up questions that establish rapport
   - Easy to answer, gets them talking
2. Core questions (8-10):
   - Directly address your story angle
   - Progress from factual to analytical to opinion
   - Include specific details that show you have done your homework
3. Accountability questions (2-3):
   - Questions about inconsistencies or difficult topics
   - Worded firmly but fairly
4. Follow-up question branches:
   - If they say X, ask Y
   - If they deflect, try this approach
   - If they reveal something unexpected, probe with these
5. Closing questions (2):
   - "What am I not asking that I should be?"
   - "Who else should I talk to?"

Order matters. Build the interview so harder questions come after trust is established.`,
              result:
                'A structured interview plan with questions, follow-ups, and strategic sequencing.',
              tip: 'Memorize your top 5 questions so you can maintain eye contact. Use the rest as a reference, not a script.',
            },
            {
              id: 'jn-p-2-2',
              title: 'Hostile Interview Prep',
              task: 'Prepare for a difficult or adversarial interview',
              prompt: `Help me prepare for a difficult interview with a hostile or evasive source.

Source: [who they are and their role]
Why this is difficult: [why they may be hostile, evasive, or defensive]
Story context: [what you are reporting and why they matter]
Key claims or allegations: [what you need to address]

What you have confirmed: [facts you can state with confidence]
What you need from them: [specific information or responses]

Generate:
1. Pre-interview strategy:
   - Best opening approach to minimize immediate defensiveness
   - What to establish before asking hard questions
   - Power dynamics to be aware of
2. Key questions rewritten multiple ways:
   - For each critical question, provide 3 phrasings:
     a) Direct approach
     b) Indirect approach (ask around the issue)
     c) "I already know" framing (when you have evidence)
3. Deflection responses:
   - Common deflection tactics and how to redirect
   - "That is not what I am asking" - polite but firm redirects
   - When they say "no comment" - 3 alternative approaches
4. Documentation strategy:
   - What to confirm on the record
   - What to note for background
   - How to handle off-the-record requests
5. Post-interview steps:
   - How to follow up if they end the interview early
   - What to document immediately after

Keep it ethical and professional. The goal is truth, not confrontation.`,
              result:
                'A strategic interview plan for difficult conversations that maintains journalistic integrity.',
              tip: 'Record everything you are legally allowed to record. In difficult interviews, exact quotes matter more than paraphrases.',
            },
            {
              id: 'jn-p-2-3',
              title: 'Expert Source Finder',
              task: 'Identify expert sources for a story topic',
              prompt: `Help me identify expert sources for a journalism story.

Story topic: [what you are covering]
Specific expertise needed: [what kind of expert perspective you need]
Geographic preference: [local / national / international]
Diversity goals: [perspectives you want to ensure are represented]

I need experts who can speak to:
1. [Aspect 1 of the story]
2. [Aspect 2 of the story]
3. [Aspect 3 of the story]

For each aspect, suggest:
1. Types of experts to look for (roles, fields, qualifications)
2. Specific organizations or institutions likely to have relevant experts
3. Academic departments or research centers to contact
4. Professional associations with media-friendly spokespeople
5. Think tanks or policy organizations with relevant analysts
6. How to find and reach them:
   - University media offices
   - Professional organization directories
   - Expert databases (ProfNet, HARO, etc.)
   - Social media approaches
7. Red flags:
   - Conflicts of interest to screen for
   - Signs of unreliable expertise
   - Industry-funded sources to disclose

Include a mix of institutional and independent voices. Note any potential biases.`,
              result:
                'A source list with expert types, organizations, and contact strategies.',
              tip: 'Always ask experts who ELSE you should talk to. The best sources come from other sources.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Article Drafting and Structure',
          prompts: [
            {
              id: 'jn-p-3-1',
              title: 'Article Outline Generator',
              task: 'Structure raw notes into an article outline',
              prompt: `Structure my raw reporting notes into an article outline.

Article type: [news / feature / investigative / analysis / opinion / profile]
Publication: [where this will run]
Target length: [word count]
Audience: [who reads this publication]
Deadline: [when this needs to be filed]

My notes and material:
[Paste your raw notes, quotes, facts, data points]

The story in one sentence: [your nutgraf - what this story is about and why it matters now]

Generate:
1. Three lead options:
   - Option A: Anecdotal lead (open with a person or scene)
   - Option B: News lead (straight to the most important fact)
   - Option C: Provocative lead (challenge an assumption or reveal a tension)
2. Article structure:
   - Section-by-section outline with:
     - Section purpose (what this part accomplishes)
     - Key information to include
     - Quotes to use (from my notes)
     - Data or evidence to reference
     - Transition to next section
3. Nutgraf placement - where the "so what" paragraph goes
4. Kicker - 2-3 options for the ending
5. Pacing notes - where to speed up, where to slow down
6. What is missing - information gaps I should fill before filing

Organize the story for maximum reader engagement while maintaining journalistic structure.`,
              result:
                'A complete article outline with lead options, structure, and pacing guidance.',
              tip: 'Write your lead first, then fill in the outline. If the lead is right, the rest flows. If you are fighting the structure, the lead might be wrong.',
            },
            {
              id: 'jn-p-3-2',
              title: 'Draft Tightener and Editor',
              task: 'Edit a draft for clarity, conciseness, and impact',
              prompt: `Edit this draft for clarity, conciseness, and journalistic impact.

Publication: [where this will run]
Style guide: [AP / Chicago / house style notes]
Target length: [word count]
Current length: [current word count]

Draft:
[Paste your draft]

Edit with these priorities:
1. Cut ruthlessly:
   - Remove redundant phrases and filler words
   - Eliminate passive voice where active is stronger
   - Cut any sentence that does not advance the story
   - Tighten quotes to their strongest phrases
2. Strengthen the writing:
   - Sharpen the lead if it can be stronger
   - Improve transitions between sections
   - Replace vague language with specific details
   - Ensure every paragraph earns its place
3. Check structure:
   - Does the story flow logically?
   - Is the most important information high enough?
   - Are quotes placed where they have maximum impact?
   - Does the ending resonate?
4. Style and accuracy flags:
   - AP style issues (numbers, titles, abbreviations)
   - Attribution clarity
   - Jargon that needs translation for general readers
5. Track changes: show what you cut and why (briefly)

Be aggressive. Good editing is subtractive. Do not add flowery language - journalism is clean prose.`,
              result:
                'A tighter, sharper version of your draft with tracked changes and editorial reasoning.',
              tip: 'Run this after your own first edit, not before. AI is a second pair of eyes, not a substitute for your editorial instinct.',
            },
            {
              id: 'jn-p-3-3',
              title: 'Content Repurposer',
              task: 'Repurpose an article across multiple platforms',
              prompt: `Repurpose this article for multiple platforms.

Original article:
[Paste the published article or final draft]

Generate versions for:
1. Social media post (Twitter/X):
   - 3 tweet-length versions highlighting different angles
   - Thread outline (5-7 tweets) if the story warrants it
2. Social media post (LinkedIn):
   - Professional angle version (200-300 words)
   - Hook + key insight + link format
3. Newsletter teaser:
   - 100-word summary that makes people click through
   - Subject line options (3 versions)
4. Social media graphic copy:
   - Quote card text (1-2 key quotes or stats)
   - Infographic data points (if data-driven story)
5. Follow-up story pitches:
   - 3 potential follow-up angles based on the original story
   - What new reporting each would require

Requirements:
- Each version should work standalone - not just a shortened version of the article
- Lead with the most compelling element for each platform
- Maintain accuracy - no claims that go beyond the original reporting
- Different hooks for different audiences`,
              result:
                'Platform-specific content that extends the reach of your original reporting.',
              tip: 'The best social posts from articles are not summaries - they are a single compelling detail or insight that makes people want the full story.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Headline and Hook Testing',
          prompts: [
            {
              id: 'jn-p-4-1',
              title: 'Headline A/B Variant Generator',
              task: 'Generate multiple headline options across different styles',
              prompt: `Generate headline options for my article.

Article summary: [2-3 sentence summary of the story]
Publication: [where this will run]
Audience: [who reads this]
Tone: [serious / conversational / urgent / analytical]
SEO keywords (if applicable): [key terms]

Generate 15 headline variations:
1. Straight news (3 versions):
   - Lead with the most newsworthy fact
   - Clear, direct, no cleverness
2. Feature style (3 versions):
   - More creative, narrative-driven
   - Evocative language that draws readers in
3. Question headlines (2 versions):
   - Pose a compelling question the article answers
4. Data-driven (2 versions):
   - Lead with the most striking number or statistic
5. Provocative/contrarian (2 versions):
   - Challenge conventional wisdom
   - Create tension or curiosity
6. SEO-optimized (3 versions):
   - Include target keywords naturally
   - Optimized for search while maintaining editorial quality

For each headline:
- Character count
- Why it works
- Best platform for this version (print, web, social, newsletter)

Also generate 5 subheadline/dek options that complement the top headlines.`,
              result:
                'A menu of headline options across styles with platform recommendations.',
              tip: 'Test your top 2-3 headlines on social media before the story publishes. Engagement signals tell you which will perform best.',
            },
            {
              id: 'jn-p-4-2',
              title: 'Social Media Hook Generator',
              task: 'Create engaging social media hooks for story promotion',
              prompt: `Create social media hooks to promote my article.

Article headline: [your headline]
Article summary: [2-3 sentences on what the story reveals]
Key facts or quotes: [the most shareable elements]
Publication: [where it was published]

Generate hooks for each platform:
1. Twitter/X (5 versions):
   - Under 280 characters each
   - Mix of: stat hook, quote hook, question hook, revelation hook, thread-starter hook
   - Include link placement
2. LinkedIn (3 versions):
   - Opening line that stops the scroll
   - 2-3 sentence setup before the link
   - Professional angle
3. Instagram/Threads (3 versions):
   - Visual-first thinking - describe what the accompanying image/graphic should be
   - Caption copy (under 150 words)
   - Relevant hashtags (5-7)
4. Newsletter/email (3 subject lines):
   - Under 50 characters each
   - Create urgency or curiosity
5. Push notification (2 versions):
   - Under 100 characters
   - Immediate, urgent, must-click

Requirements:
- Each hook should stand alone without needing to read the article
- Accuracy first - no clickbait that misrepresents the story
- Different angles for different platforms - not the same hook reformatted`,
              result:
                'Platform-specific promotional hooks that drive traffic while maintaining editorial integrity.',
              tip: 'Post the hook with the highest tension first. If people engage, the algorithm does the rest.',
            },
            {
              id: 'jn-p-4-3',
              title: 'Lead Paragraph Workshop',
              task: 'Generate multiple lead paragraph options for a story',
              prompt: `Write multiple lead paragraph options for my story.

Story type: [news / feature / investigative / profile / analysis]
Story summary: [what the story is about, key facts]
Key quote or detail: [the most compelling human element]
News peg: [why this story matters now]
Target length: [how many words for the lead paragraph]

Generate 5 lead options:
1. Anecdotal lead:
   - Open with a specific person, scene, or moment
   - Ground the reader in a concrete experience
   - Make them feel something before you tell them something
2. Hard news lead:
   - Most important fact first
   - Who, what, when, where, why in 30 words or fewer
   - No wasted words
3. Scene-setting lead:
   - Paint a picture that draws the reader in
   - Sensory details that create atmosphere
   - The scene that encapsulates the story's meaning
4. Revelatory lead:
   - Open with the most surprising or exclusive finding
   - Create a "wait, really?" reaction
   - Immediately establish the stakes
5. Contrast lead:
   - Juxtapose two facts, situations, or perspectives
   - The contrast IS the story
   - Let the tension pull the reader forward

For each lead:
- Why this approach works for this story
- What type of reader it is most likely to hook
- Natural transition to the nutgraf

All leads must be factually grounded in the material I provided.`,
              result:
                'Five distinct lead options that give you creative starting points for your story.',
              tip: 'Write your leads early. If none of the five work, it usually means you do not have your angle sharp enough yet - that is a reporting signal, not a writing problem.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Fact-Checking Workflows',
          prompts: [
            {
              id: 'jn-p-5-1',
              title: 'Claim Verification Framework',
              task: 'Build a structured fact-checking checklist for an article',
              prompt: `Build a fact-checking checklist for my article.

Article draft:
[Paste your draft or key claims]

For every factual claim in the article, generate:
1. Claim inventory:
   - List every factual claim (dates, numbers, attributions, events)
   - Categorize as: statistical / historical / attributed quote / characterization / legal
2. For each claim:
   - What needs to be verified
   - Suggested verification source (primary source preferred)
   - Where to find the source (database, document, contact)
   - Verification status: confirmed / unconfirmed / needs source
3. Attribution check:
   - Are all quotes attributed correctly?
   - Are characterizations of positions accurate and fair?
   - Are any statements taken out of context?
4. Data verification:
   - Are statistics from the original source (not secondhand)?
   - Are comparisons apples-to-apples?
   - Are numbers current or outdated?
5. Legal risk flags:
   - Statements that could be contested
   - Claims that need additional sourcing for legal safety
   - Areas where language should be hedged

Organize as a checklist I can work through systematically before filing.`,
              result:
                'A comprehensive fact-checking checklist organized by claim type and verification priority.',
              tip: 'Work through this checklist before every major story. It catches errors you would not notice reading your own draft.',
            },
            {
              id: 'jn-p-5-2',
              title: 'Statistical Claim Analyzer',
              task: 'Analyze statistical claims for accuracy and context',
              prompt: `Analyze these statistical claims from my article for accuracy and appropriate context.

Claims:
[Paste the statistical claims, data references, or numbers from your article]

Source information:
[If you have source documents, paste relevant excerpts]

For each statistical claim, analyze:
1. Source check:
   - Is this from a primary source or secondhand?
   - Is the source credible for this type of claim?
   - How current is the data?
2. Context check:
   - Is the number presented with appropriate context?
   - Are there important caveats the reader needs?
   - Could this number be misleading without additional context?
3. Comparison check:
   - If comparing numbers, are they comparable (same time periods, definitions, methodologies)?
   - Is the comparison fair or cherry-picked?
   - What would provide a more complete picture?
4. Interpretation check:
   - Does the article's characterization match what the data actually shows?
   - Is correlation being implied as causation?
   - Are there alternative explanations?
5. Recommendation:
   - Keep as is
   - Add context (specify what)
   - Rephrase for accuracy
   - Remove or replace (explain why)

I need rigorous analysis. Better to flag something that turns out to be fine than to miss something that is not.`,
              result:
                'A detailed analysis of every statistical claim with context recommendations.',
              tip: 'When in doubt about a number, go to the original source. If you cannot find the original, do not publish the claim.',
            },
            {
              id: 'jn-p-5-3',
              title: 'Timeline Verification Builder',
              task: 'Build and verify a chronological timeline for a story',
              prompt: `Help me build and verify a chronological timeline for my story.

Story topic: [what the story covers]
Time period: [when the events occurred]

Events and dates I have gathered:
[List the events and dates from your reporting]

Sources for these dates:
[List your sources if you have them]

Generate:
1. Organized timeline:
   - Chronological order of all events
   - Date precision level (exact date / approximate / month / quarter)
   - Source for each date where known
2. Consistency check:
   - Do any events create logical contradictions?
   - Are there suspicious gaps in the timeline?
   - Do any dates conflict with established facts?
3. Missing events:
   - Based on the narrative, are there events that should have happened between listed events?
   - Regulatory or procedural steps that would typically occur
   - Public events that overlapped and provide context
4. Verification priorities:
   - Which dates are most critical to the story?
   - Which dates are least well-sourced?
   - Suggested sources for confirming uncertain dates
5. Timeline narrative:
   - A 200-word chronological summary suitable for a sidebar or timeline graphic

Flag any date I provided that seems inconsistent with other known facts.`,
              result:
                'A verified, organized timeline with gaps identified and verification priorities set.',
              tip: 'Timelines are one of the most common fact-checking failures. If your dates do not hold up, neither does your story.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Beat Coverage Planning',
          prompts: [
            {
              id: 'jn-p-6-1',
              title: 'Beat Coverage Calendar',
              task: 'Create a quarterly beat coverage plan with story ideas',
              prompt: `Create a quarterly beat coverage plan for my journalism beat.

My beat: [what you cover]
Publication: [where you work]
Audience: [who reads you]
Recent coverage focus: [what you have been writing about lately]
Upcoming known events: [scheduled events, hearings, reports, deadlines on your beat]

Generate a quarterly plan:
1. Monthly story pipeline:
   For each month, suggest:
   - 2-3 news stories to anticipate (pegged to known events or cycles)
   - 1 enterprise/feature idea (deeper, self-directed)
   - 1 data or accountability story idea
   - 1 human interest or profile idea
2. Recurring coverage:
   - Regular events, meetings, or reports to cover
   - Seasonal patterns on this beat
   - Annual milestones or anniversaries
3. Enterprise story bank:
   - 5 evergreen enterprise ideas I can develop when time allows
   - What reporting each would require
   - Estimated timeline for each
4. Source development:
   - Types of sources I should be cultivating this quarter
   - Communities or groups to build relationships with
   - Expert sources to establish contact with
5. Coverage gaps:
   - Topics or perspectives that have been underrepresented
   - Communities on my beat that deserve more attention
   - Systemic issues worth sustained coverage

Make this plan realistic for a reporter managing daily deadlines while trying to do deeper work.`,
              result:
                'A strategic quarterly coverage plan that balances daily reporting with enterprise journalism.',
              tip: 'Block one day per week (or half-day) for enterprise reporting. Without protected time, the daily grind will consume everything.',
            },
            {
              id: 'jn-p-6-2',
              title: 'Trend and Pattern Spotter',
              task: 'Identify emerging trends and patterns in your beat area',
              prompt: `Identify emerging trends and patterns in my beat area.

My beat: [what you cover]
Geographic scope: [local / regional / national / international]
Recent stories I have covered: [list 5-10 recent pieces]
Topics I am tracking: [developing stories or issues]

Analyze and suggest:
1. Emerging trends:
   - 3-5 trends developing in this area that are not yet widely covered
   - For each: what is happening, why now, who is affected
   - Early indicators or data points that signal the trend
2. Pattern connections:
   - Stories or events that seem unrelated but share an underlying pattern
   - Systemic issues that individual stories point to
   - Policy, economic, or social patterns worth investigating
3. Under-covered angles:
   - Perspectives or communities missing from mainstream coverage
   - Data sources that could reveal untold stories
   - Questions nobody is asking publicly
4. Prediction:
   - Based on current trajectories, what stories will break in 3-6 months?
   - What should reporters be watching for?
   - Where should I be building sources now for future stories?
5. Story pitches:
   - 3 specific story ideas based on these trends
   - What each would require (sources, data, time)
   - Why each matters to readers

Think like an investigative editor. Look for what is hiding in plain sight.`,
              result:
                'A trend analysis with specific story ideas that position you ahead of the news cycle.',
              tip: 'Review this monthly. Compare AI predictions to what actually happened. It helps you calibrate your own news judgment over time.',
            },
            {
              id: 'jn-p-6-3',
              title: 'Source Network Mapper',
              task: 'Map and plan your source network for a beat',
              prompt: `Help me map and plan my source network for my beat.

My beat: [what you cover]
Current source types I rely on: [list the categories of sources you regularly contact]
Coverage gaps: [areas where you lack good sources]
Diversity goals: [perspectives you want to better represent]

Generate a source network plan:
1. Source categories and targets:
   - Officials and decision-makers: [who to cultivate]
   - Subject matter experts: [types and where to find them]
   - Community voices: [everyday people affected by this beat]
   - Watchdogs and advocates: [NGOs, activists, oversight bodies]
   - Insiders and whistleblowers: [how to make yourself accessible]
   - Data sources: [organizations that produce relevant data]
2. Relationship-building plan:
   - How to make initial contact with each source type
   - Follow-up cadence (how often to check in without a specific story)
   - Trust-building approaches for sensitive sources
3. Source diversity audit:
   - Who is overrepresented in my current sourcing?
   - Who is underrepresented?
   - Specific communities or organizations to build bridges with
4. Source management:
   - How to organize and track source relationships
   - Contact information system
   - Notes on what each source is most useful for
5. Red flags and ethics:
   - Signs a source has an agenda to watch for
   - When to disclose source affiliations to readers
   - How to handle off-the-record and background information systematically

A strong source network is a journalist's most valuable asset. This plan should help build one systematically.`,
              result:
                'A strategic source network plan that strengthens and diversifies your reporting foundation.',
              tip: 'The best sources are people you talk to when you do not need anything. Build relationships before you need them.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at the real time savings across your journalism workflow.',
      timeTable: [
        {
          task: 'Background research',
          without: '2-4 hours/story',
          withAI: '15-20 minutes',
          saved: '2-3.5 hrs',
        },
        {
          task: 'Interview preparation',
          without: '1-2 hours',
          withAI: '15-20 minutes',
          saved: '45-100 min',
        },
        {
          task: 'Article drafting',
          without: '2-3 hours',
          withAI: '45-60 minutes',
          saved: '1-2 hrs',
        },
        {
          task: 'Headline testing',
          without: '20-30 minutes',
          withAI: '3-5 minutes',
          saved: '15-25 min',
        },
        {
          task: 'Fact-checking workflows',
          without: '1-3 hours',
          withAI: '30-45 minutes',
          saved: '30 min-2 hrs',
        },
        {
          task: 'Beat coverage planning',
          without: 'Rarely done',
          withAI: '30-45 minutes/month',
          saved: 'Infinite - done',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '10-15 hrs/week',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Journalists who use AI are not doing less reporting. They are doing more of it. The time saved on research grunt work, draft structuring, and production tasks goes directly into more interviews, deeper investigations, and better stories.',
            'The gap is not about writing talent. It is about production speed.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a journalist to write headlines and reformat content for six platforms. You became a journalist to uncover truth and tell stories that matter. AI gives you the time to do the journalism only a human can do.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One tool. Run it on your next story. That is enough to see the difference.',
    },

    ch7: {
      intro:
        'Seven days. Fifteen minutes a day. By the end of the week, AI will be part of your journalism workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'jn-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'jn-1-2', label: 'Create a free Perplexity account for source-backed research' },
            { id: 'jn-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Research a Story',
          duration: '15 min',
          items: [
            {
              id: 'jn-2-1',
              label:
                'Pick a story you are currently working on or about to start',
            },
            {
              id: 'jn-2-2',
              label:
                'Run the Background Research Brief prompt and compare it to your usual research process',
            },
          ],
        },
        {
          day: 3,
          title: 'Prep an Interview',
          duration: '20 min',
          items: [
            {
              id: 'jn-3-1',
              label: 'Pick an upcoming interview or a past one you wish you had prepared better for',
            },
            {
              id: 'jn-3-2',
              label:
                'Run the Interview Question Set Generator and review the output',
            },
          ],
        },
        {
          day: 4,
          title: 'Test Your Headlines',
          duration: '15 min',
          items: [
            {
              id: 'jn-4-1',
              label: 'Take a recent article or one in progress',
            },
            {
              id: 'jn-4-2',
              label:
                'Run the Headline A/B Variant Generator and compare to your original headline',
            },
          ],
        },
        {
          day: 5,
          title: 'Fact-Check a Draft',
          duration: '20 min',
          items: [
            {
              id: 'jn-5-1',
              label: 'Take a draft you are working on',
            },
            {
              id: 'jn-5-2',
              label: 'Run the Claim Verification Framework prompt',
            },
            {
              id: 'jn-5-3',
              label: 'Work through the checklist - notice what you would have missed',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More Systems',
          duration: '15 min',
          items: [
            {
              id: 'jn-6-1',
              label: 'Try any system or prompt you have not explored yet',
            },
            {
              id: 'jn-6-2',
              label:
                'Identify which systems will save you the most time on deadline',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'jn-7-1',
              label: 'What worked? Which prompts will become part of your regular workflow?',
            },
            {
              id: 'jn-7-2',
              label:
                'Share this guide with a colleague in the newsroom who could use the help',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
