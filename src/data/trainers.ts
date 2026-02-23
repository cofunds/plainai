import type { WorkbookData } from './types'

export const trainersData = {
  professionId: 'trainers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Corporate Trainers',
  heroDescription:
    'Everything you need to start using AI in corporate training - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You have three new training programs to build this quarter. The leadership team wants a compliance module updated by Friday. HR just sent over 200 feedback surveys from last month\'s workshop and asked for "key insights" by end of week. Your LMS content library is overdue for a refresh, and the stakeholder presentation on training ROI is in ten days.',
        'You became a trainer because you believe in people development. You love the moment something clicks for a learner. You are great in the room. But the room is maybe 20% of your job. The other 80% is building decks, writing facilitator guides, designing assessments, analyzing feedback, formatting content for the LMS, and reporting metrics to justify your department\'s existence.',
        'The irony is real: you spend so much time building training that you barely have time to deliver it well. And the more programs you launch, the more admin stacks up behind you.',
        'Every corporate trainer knows the Sunday evening dread of realizing you still have not built the activity guide for Monday morning\'s session.',
      ],
      highlight:
        'What if you could cut the build time in half - and spend that time actually making your training better?',
      closingParagraph:
        'Not replacing your facilitation skills. Not generating cookie-cutter content. Just handling the scaffolding - the first drafts, the formatting, the data analysis - so you can focus on the human side of learning.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace a skilled corporate trainer. It cannot read a room, adjust on the fly when energy drops, tell a perfectly timed story, or build the trust that makes people open up in a workshop. Those are human skills and they are your competitive advantage.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as your most efficient instructional design assistant. It has studied thousands of training programs, assessment frameworks, facilitation guides, and learning models. It can draft, structure, and format at a speed that frees you to do the creative and interpersonal work.',
            'Need a set of learning objectives for a new module? 60 seconds. Need to turn a content dump into a structured facilitator guide? 3 minutes. Need to analyze 200 survey responses for themes? 2 minutes.',
            'The pattern is simple: AI handles the production work. You bring the expertise, the empathy, and the facilitation magic that makes training actually land.',
          ],
        },
      ],
      keyInsight:
        'Your training expertise + AI\'s production speed = more programs, better quality, less burnout. You know what great training looks like. AI just gets you there faster.',
    },

    ch3: {
      intro: 'You don\'t need a wall of tools. These five will cover your entire training workflow.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your content creation workhorse',
          description:
            'Training modules, learning objectives, quiz questions, facilitator scripts, and any text-based training task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for content creation',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your detailed analysis and writing partner',
          description:
            'Long-form facilitator guides, detailed feedback analysis, nuanced assessment design, policy-sensitive content',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for detailed, long-form work',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your visual training material designer',
          description:
            'Training decks, infographics, handouts, certificates, and visual job aids',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Great for visual materials',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your research and benchmarking assistant',
          description:
            'Industry training benchmarks, best practices research, compliance requirement lookups with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research with citations',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your training operations hub',
          description:
            'Program tracking, content libraries, feedback databases, facilitator resource management',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want centralized organization',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Canva AI. That covers content creation and visuals. Add the rest when your workflow demands it.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual training workflow. Each system maps to a core part of your job. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Training Module Development',
          before:
            'Building a new training module means hours of staring at a blank PowerPoint. You outline, draft, restructure, rewrite. You hunt for case studies and examples. A single 60-minute module can take 20-30 hours to develop from scratch.',
          after:
            'You define the learning objectives and audience. AI generates a structured module outline, key content points, case study suggestions, and activity ideas in minutes. You spend your time curating and improving - not starting from zero.',
          flow: [
            'Define learning objectives, audience, and time constraints',
            'AI generates a structured module outline with content flow',
            'Review and inject your domain expertise and real examples',
            'AI drafts facilitator notes and participant activities',
            'Polish, brand, and load into your delivery format',
          ],
          timeSaved: { without: '20-30 hours/module', withAI: '8-12 hours' },
        },
        {
          id: 2,
          name: 'Assessment and Evaluation Design',
          before:
            'Writing quiz questions that actually test understanding - not just recall - takes time. Creating pre/post assessments, designing evaluation rubrics, and building knowledge checks throughout a module is tedious work that you often rush through.',
          after:
            'AI generates assessment questions at multiple cognitive levels, designs evaluation rubrics with clear criteria, and creates pre/post tests aligned to your learning objectives. You curate the best questions and ensure quality.',
          flow: [
            'Share your learning objectives and module content',
            'AI generates questions at recall, application, and analysis levels',
            'Select and refine the strongest questions',
            'AI designs scoring rubrics and evaluation criteria',
            'Compile into your assessment format and LMS',
          ],
          timeSaved: { without: '4-6 hours/assessment', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'Facilitator Guide Creation',
          before:
            'A good facilitator guide is the difference between a training that works and one that falls flat when someone else delivers it. But writing detailed timing, talking points, activity instructions, and transition scripts takes forever.',
          after:
            'AI drafts a comprehensive facilitator guide from your module outline - complete with timing cues, talking points, activity instructions, troubleshooting tips, and transition scripts. You add your personal facilitation wisdom.',
          flow: [
            'Feed AI your module outline and key content',
            'AI generates a minute-by-minute facilitator guide',
            'Review and add facilitation tips from your experience',
            'AI adds troubleshooting notes for common delivery challenges',
            'Format and distribute to your facilitation team',
          ],
          timeSaved: { without: '6-10 hours/guide', withAI: '2-3 hours' },
        },
        {
          id: 4,
          name: 'Learner Feedback Analysis',
          before:
            'After every program, you collect feedback. Level 1 surveys, open-ended comments, follow-up assessments. The data sits in spreadsheets and survey tools. Analyzing it takes hours - so you often just skim the ratings and move on.',
          after:
            'You paste the raw feedback into AI. It identifies themes, sentiment patterns, specific improvement suggestions, and quantifies qualitative responses. In 5 minutes you have insights that would have taken a full afternoon.',
          flow: [
            'Export feedback data from your survey tool',
            'Paste raw responses into Claude or ChatGPT',
            'AI analyzes sentiment, themes, and patterns',
            'AI generates an insight summary with specific quotes',
            'Use insights to refine your next iteration',
          ],
          timeSaved: { without: '3-5 hours/program', withAI: '20-30 minutes' },
        },
        {
          id: 5,
          name: 'LMS Content Optimization',
          before:
            'Your LMS content library has grown organically. Some modules are outdated. The formatting is inconsistent. Micro-learning versions do not exist for most courses. Updating everything feels like a massive project you will never start.',
          after:
            'AI audits your existing content, flags outdated material, reformats for consistency, and creates micro-learning versions of full-length modules. The library refresh that felt impossible becomes a manageable project.',
          flow: [
            'Feed AI your existing module content',
            'AI flags outdated information and inconsistencies',
            'AI restructures content into micro-learning chunks (5-10 min)',
            'Review and approve each micro-module',
            'Upload refreshed content to your LMS',
          ],
          timeSaved: { without: '40+ hours/library audit', withAI: '10-15 hours' },
        },
        {
          id: 6,
          name: 'Training ROI Reporting',
          before:
            'Stakeholders want to know if training is "working." You know it is, but translating learning metrics into business impact language is hard. Reports take hours, and you are never sure if you are telling the right story.',
          after:
            'AI takes your training data - completion rates, assessment scores, feedback ratings, behavioral indicators - and drafts a stakeholder report that connects learning metrics to business outcomes in language executives understand.',
          flow: [
            'Compile your training metrics and data points',
            'Feed AI the data with business context',
            'AI drafts a stakeholder report with key findings',
            'AI translates learning metrics into business impact language',
            'Review, add context, and present with confidence',
          ],
          timeSaved: { without: '6-8 hours/report', withAI: '1-2 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts for training work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Training Module Development',
          prompts: [
            {
              id: 'tr-p-1-1',
              title: 'Learning Objectives Generator',
              task: 'Create measurable learning objectives for a training module',
              prompt: `Create learning objectives for a corporate training module.

Topic: [training topic]
Audience: [job roles, experience level]
Module duration: [length in minutes/hours]
Business goal: [what outcome the organization wants]
Current skill level: [beginner / intermediate / advanced]

Generate:
1. 4-6 measurable learning objectives using Bloom's taxonomy action verbs
2. For each objective:
   - The specific verb (e.g., "analyze," "demonstrate," "evaluate")
   - What learners will be able to do
   - How it will be measured or observed
   - Which Bloom's level it targets
3. One overarching module goal statement
4. A suggested assessment method for each objective

Objectives should be specific and measurable - not vague statements like "understand" or "appreciate."
Align everything to the business goal I described.`,
              result:
                'A set of measurable, Bloom-aligned learning objectives ready to anchor your module design.',
              tip: 'Start every module build with objectives. It prevents scope creep and keeps your content focused.',
            },
            {
              id: 'tr-p-1-2',
              title: 'Module Content Outline',
              task: 'Generate a structured content outline for a training module',
              prompt: `Create a structured content outline for a corporate training module.

Topic: [training topic]
Duration: [total time]
Audience: [who is taking this]
Learning objectives:
[Paste your objectives or let AI reference the ones generated above]

Format: [instructor-led / virtual / self-paced / blended]

Generate a module outline with:
1. Opening hook (2-3 minutes) - engagement activity or provocative question
2. Content sections (3-5 sections) - each with:
   - Section title and duration
   - Key concepts to cover (3-5 per section)
   - One real-world example or case study idea
   - One learner activity (discussion, practice, reflection)
   - Transition to next section
3. Practice activity (10-15 minutes) - hands-on application
4. Summary and key takeaways (5 minutes)
5. Assessment or knowledge check approach
6. Suggested pre-work and post-session reinforcement

Balance content delivery with active learning. No section should be pure lecture for more than 10 minutes.`,
              result:
                'A complete module outline with content flow, activities, and timing.',
              tip: 'Share this outline with a subject matter expert for validation before you start building slides.',
            },
            {
              id: 'tr-p-1-3',
              title: 'Case Study Creator',
              task: 'Generate a realistic case study for a training scenario',
              prompt: `Create a realistic case study for a corporate training module.

Training topic: [topic]
Industry: [the learners' industry]
Audience role: [their job function]
Learning objective it supports: [which objective this addresses]
Complexity level: [simple / moderate / complex]

Generate:
1. Scenario background (3-4 paragraphs) - realistic business situation
2. Key characters with roles and motivations
3. The core challenge or decision point
4. Relevant data or facts learners need to analyze
5. 4-5 discussion questions that progress from recall to analysis to evaluation
6. Facilitator notes:
   - Key insights learners should arrive at
   - Common wrong answers and how to redirect
   - Debrief talking points
7. Optional: two variations for different skill levels

Make it feel real. Use situations they would actually encounter, not textbook abstractions.`,
              result:
                'A ready-to-use case study with discussion questions and facilitator notes.',
              tip: 'Change names and details, but base scenarios on real situations from the client organization when possible.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Assessment and Evaluation Design',
          prompts: [
            {
              id: 'tr-p-2-1',
              title: 'Multi-Level Quiz Designer',
              task: 'Design quiz questions at multiple cognitive levels',
              prompt: `Design a quiz for a corporate training module.

Topic: [training topic]
Learning objectives:
[List the objectives this quiz covers]

Generate 12 questions:
- 4 Knowledge/Recall questions (multiple choice)
- 4 Application questions (scenario-based multiple choice)
- 4 Analysis/Evaluation questions (short scenario with best-answer selection)

For each question:
1. The question text
2. 4 answer options (A-D)
3. Correct answer with explanation of why it is correct
4. Why each wrong answer is wrong (brief)
5. Which learning objective it assesses
6. Cognitive level (recall / application / analysis)

Ensure distractors are plausible, not obviously wrong. Avoid trick questions. Scenarios should reflect real workplace situations.`,
              result:
                'A 12-question assessment that tests understanding at multiple levels, not just recall.',
              tip: 'Use the analysis-level questions as discussion starters in live training. They generate better conversation than simple recall questions.',
            },
            {
              id: 'tr-p-2-2',
              title: 'Pre/Post Assessment Builder',
              task: 'Create aligned pre and post assessments to measure learning gains',
              prompt: `Create a pre/post assessment pair for a training program.

Training topic: [topic]
Duration of training: [length]
Key learning objectives:
[List 4-6 objectives]

Generate:
1. Pre-assessment (8-10 questions):
   - Mix of multiple choice and self-rating scales
   - Covers baseline knowledge and confidence
   - Takes no more than 10 minutes to complete
   - Includes 2-3 scenario questions to test existing skill

2. Post-assessment (8-10 questions):
   - Parallel to pre-assessment for valid comparison
   - Same topics but different question phrasing
   - Adds 2-3 application questions testing new skills
   - Includes a confidence rating scale for each objective

3. Comparison framework:
   - How to calculate knowledge gain per objective
   - How to interpret confidence shift
   - What a "successful" program looks like in the data
   - Red flags that suggest the training needs revision

Make both assessments feel purposeful, not tedious.`,
              result:
                'Aligned pre/post assessments with a framework for measuring actual learning gains.',
              tip: 'Share aggregate pre/post results in your stakeholder reports. Hard data on knowledge gain is the strongest evidence of training impact.',
            },
            {
              id: 'tr-p-2-3',
              title: 'Evaluation Rubric Designer',
              task: 'Design evaluation rubrics for skills-based training assessments',
              prompt: `Design an evaluation rubric for a skills-based training assessment.

Skill being assessed: [specific skill or competency]
Assessment method: [role play / simulation / presentation / written exercise / on-the-job observation]
Audience: [learner role and level]
Context: [when and how this assessment will be used]

Generate a rubric with:
1. 5-6 evaluation criteria directly linked to the skill
2. 4 performance levels for each criterion:
   - Exemplary: exceeds expectations
   - Proficient: meets expectations
   - Developing: partially meets expectations
   - Needs improvement: does not yet meet expectations
3. Specific, observable behavioral descriptors for each level
4. Scoring weights (not all criteria need equal weight)
5. Overall scoring guide with clear thresholds
6. Evaluator instructions: what to watch for, how to score consistently

Descriptors should be observable behaviors, not subjective judgments. An evaluator should be able to score consistently without guessing.`,
              result:
                'A rubric with clear, observable criteria that any evaluator can apply consistently.',
              tip: 'Calibrate rubrics with your facilitation team by scoring the same mock performance independently, then comparing.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Facilitator Guide Creation',
          prompts: [
            {
              id: 'tr-p-3-1',
              title: 'Facilitator Script Generator',
              task: 'Create a detailed facilitator script with timing and cues',
              prompt: `Create a detailed facilitator script for a training session.

Module title: [title]
Duration: [total time]
Format: [in-person / virtual / hybrid]
Audience: [who, how many]
Module outline:
[Paste your content outline or key sections]

Generate a facilitator script that includes:
1. Pre-session checklist (room setup, materials, tech check)
2. For each content section:
   - Timing (start time and duration)
   - Key talking points (not word-for-word script, but clear guidance)
   - Slide references or visual cues
   - Activity instructions with step-by-step facilitation notes
   - Transition sentences to the next section
3. Energy management cues (when to take breaks, when to shift format)
4. Contingency notes:
   - "If running behind" - what to cut
   - "If group is quiet" - engagement backup plan
   - "If question goes off-topic" - redirect language
5. Closing script with key message reinforcement

Write it so a competent facilitator who did NOT design this module could deliver it well.`,
              result:
                'A facilitator script that makes your training deliverable by anyone on your team.',
              tip: 'The best facilitator guides include "what to say if..." notes for tricky moments. AI handles these well when you describe common challenges.',
            },
            {
              id: 'tr-p-3-2',
              title: 'Activity Design with Instructions',
              task: 'Design an interactive training activity with full facilitation details',
              prompt: `Design an interactive training activity for a corporate learning session.

Training topic: [topic]
Learning objective it supports: [specific objective]
Activity type: [group discussion / role play / simulation / gallery walk / case study / brainstorm / practice exercise]
Time available: [minutes]
Group size: [number of participants]
Format: [in-person / virtual]

Generate:
1. Activity name and purpose (one sentence)
2. Materials needed
3. Setup instructions for the facilitator
4. Step-by-step participant instructions (clear enough to display on screen)
5. Facilitator script:
   - How to introduce the activity
   - What to do while participants work
   - Monitoring cues - what to watch for
   - How to debrief (3-4 debrief questions)
6. Timing breakdown for each step
7. Variations:
   - Simplified version for less experienced groups
   - Advanced version for experienced groups
   - Virtual adaptation (if designed for in-person)

The activity should require active thinking, not just passive completion.`,
              result:
                'A complete activity design with full facilitation instructions.',
              tip: 'Test new activities with a small group first. AI designs solid structures, but timing and energy flow need real-world testing.',
            },
            {
              id: 'tr-p-3-3',
              title: 'Virtual Facilitation Playbook',
              task: 'Create a virtual facilitation guide with engagement strategies',
              prompt: `Create a virtual facilitation playbook for an online training session.

Session topic: [topic]
Duration: [length]
Platform: [Zoom / Teams / WebEx / other]
Audience size: [number]
Engagement challenges: [what you typically struggle with in virtual delivery]

Generate a playbook covering:
1. Pre-session engagement plan:
   - Welcome message and expectation-setting
   - Pre-work or teaser activity
   - Tech check instructions for participants
2. Engagement rhythm:
   - Interaction every [X] minutes - specify the type
   - Chat prompt ideas (10 ready-to-use prompts)
   - Poll questions (5 ready-to-use polls)
   - Breakout room activities with clear instructions
3. Energy management:
   - When to take breaks and how to bring energy back
   - Camera-on vs camera-optional guidance
   - Movement or stretch break activities
4. Troubleshooting:
   - Dead silence responses
   - Technical difficulty pivots
   - Off-topic tangent redirects
5. Virtual closing that feels complete, not abrupt

Assume participants will be distracted. Design to earn and keep attention every 5-7 minutes.`,
              result:
                'A virtual facilitation playbook that keeps remote learners engaged and active.',
              tip: 'The first 3 minutes of a virtual session set the tone. Use a strong opening activity - not housekeeping - to establish engagement norms.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Learner Feedback Analysis',
          prompts: [
            {
              id: 'tr-p-4-1',
              title: 'Feedback Survey Analyzer',
              task: 'Analyze training feedback surveys for actionable insights',
              prompt: `Analyze the following training feedback data and give me actionable insights.

Training program: [name]
Number of respondents: [count]
Date: [when]

Raw feedback data:
[Paste survey responses - ratings, comments, open-ended answers]

Analyze and provide:
1. Quantitative summary:
   - Average ratings by category (if applicable)
   - Distribution of ratings (how many 5s, 4s, 3s, etc.)
   - Highest and lowest rated aspects
2. Qualitative themes:
   - Top 3 things participants valued most (with representative quotes)
   - Top 3 areas for improvement (with representative quotes)
   - Unexpected or surprising feedback patterns
3. Sentiment breakdown:
   - Percentage positive / neutral / negative
   - Sentiment by topic
4. Actionable recommendations:
   - 3 things to keep doing (with evidence)
   - 3 things to change (with specific suggestions)
   - 1 thing to investigate further
5. One-paragraph executive summary suitable for a stakeholder email

Be specific. "Improve engagement" is not useful. "Add more hands-on practice in module 3" is.`,
              result:
                'A structured feedback analysis with specific, actionable improvement recommendations.',
              tip: 'Run this after every program. Over time, you build a data-driven picture of what works and what does not.',
            },
            {
              id: 'tr-p-4-2',
              title: 'Open-Ended Response Coder',
              task: 'Code and categorize open-ended feedback responses',
              prompt: `Code and categorize these open-ended training feedback responses.

Training program: [name]
Question asked: [the open-ended question]
Number of responses: [count]

Responses:
[Paste all open-ended responses]

Perform qualitative coding:
1. Identify 5-8 emergent themes across all responses
2. For each theme:
   - Theme name and definition
   - Number of responses mentioning this theme
   - Percentage of total responses
   - 2-3 representative quotes
   - Whether sentiment is primarily positive, negative, or mixed
3. Create a frequency table: theme, count, percentage, sentiment
4. Identify outlier responses - insights mentioned by only 1-2 people that are still worth noting
5. Cross-theme patterns - themes that commonly appear together
6. Summary paragraph: "If these responses had one voice, they would say..."

This should look like the output of a proper qualitative analysis, not a casual summary.`,
              result:
                'A rigorous qualitative analysis of open-ended responses that surfaces patterns you would miss in a quick read.',
              tip: 'Use the frequency table in stakeholder presentations. It turns qualitative data into credible, visual evidence.',
            },
            {
              id: 'tr-p-4-3',
              title: 'Longitudinal Feedback Trend Report',
              task: 'Compare feedback across multiple program iterations',
              prompt: `Compare feedback data across multiple iterations of the same training program.

Program name: [name]
Iterations:
- [Date 1]: [summary of ratings and key themes]
- [Date 2]: [summary of ratings and key themes]
- [Date 3]: [summary of ratings and key themes]
[Add more if available]

Analyze:
1. Rating trends - are scores improving, declining, or flat?
2. Persistent themes - what keeps coming up across iterations?
3. Resolved issues - what has improved since earlier iterations?
4. Emerging concerns - new themes that were not present before
5. Facilitator impact - if different facilitators, any patterns?
6. Audience composition impact - do different groups respond differently?

Generate:
- A trend summary (3-5 bullet points)
- A "what is working" list with evidence
- A "still needs attention" list with evidence
- Specific recommendations for the next iteration
- A one-paragraph narrative for your quarterly training report

Format as a report that a training director or VP of L&D would find credible.`,
              result:
                'A longitudinal analysis showing how your training program is evolving based on real data.',
              tip: 'This report is gold for demonstrating continuous improvement to stakeholders. Run it quarterly.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - LMS Content Optimization',
          prompts: [
            {
              id: 'tr-p-5-1',
              title: 'Micro-Learning Module Creator',
              task: 'Convert a full training module into micro-learning segments',
              prompt: `Convert this full-length training module into micro-learning segments.

Original module topic: [topic]
Original duration: [length]
Key content:
[Paste the module content, outline, or key points]

Target micro-learning format: [video script / interactive text / quiz-based / scenario-based]
Target duration per segment: [3-5 minutes / 5-7 minutes / 7-10 minutes]

Generate:
1. Number of micro-modules needed and rationale for the split
2. For each micro-module:
   - Title (engaging, specific)
   - One learning objective
   - Content outline (what to cover in the time limit)
   - One knowledge check question
   - One action item or application prompt
   - How it connects to the next micro-module
3. Suggested sequence and any dependencies between modules
4. A completion pathway - what "finishing" looks like
5. Spacing recommendations - how to schedule these for optimal retention

Each segment should be self-contained enough to be useful alone, but build toward the complete learning experience.`,
              result:
                'A complete micro-learning series that breaks your content into digestible, focused segments.',
              tip: 'Micro-learning works best when each segment ends with an action item the learner can try immediately.',
            },
            {
              id: 'tr-p-5-2',
              title: 'Content Refresh Audit',
              task: 'Audit and update existing LMS content for accuracy and relevance',
              prompt: `Audit this existing training content for accuracy, relevance, and engagement.

Content title: [title]
Original creation date: [when it was built]
Content:
[Paste the existing content]

Industry/context: [the business context]
Current date context: [any recent changes in the field, regulations, or best practices]

Evaluate:
1. Accuracy check:
   - Flag any outdated statistics, references, or best practices
   - Identify claims that need current source verification
   - Note any terminology that has evolved
2. Relevance check:
   - Is the content still aligned with current business needs?
   - Are the examples still relatable to today's learners?
   - Are there missing topics that are now important?
3. Engagement check:
   - Is the language engaging or dry?
   - Are there enough interactive elements?
   - Does the pacing work for self-paced learners?
4. Recommended updates:
   - Must-fix items (accuracy issues)
   - Should-update items (relevance gaps)
   - Nice-to-have improvements (engagement boosts)
5. Rewritten sections for anything flagged as must-fix

Prioritize changes by impact on learner experience.`,
              result:
                'A prioritized audit report with specific content updates ready to implement.',
              tip: 'Schedule quarterly content audits using this prompt. It keeps your library current without requiring a massive overhaul.',
            },
            {
              id: 'tr-p-5-3',
              title: 'LMS Description and Metadata Writer',
              task: 'Write compelling LMS course descriptions and metadata',
              prompt: `Write LMS course descriptions and metadata for the following training modules.

Modules:
1. [Module title] - [brief topic description]
2. [Module title] - [brief topic description]
3. [Module title] - [brief topic description]
[Add more as needed]

Target audience: [who these are for]
Platform: [your LMS name]

For each module, generate:
1. Course title (clear, concise, benefit-oriented)
2. Short description (50 words) - for catalog browsing
3. Long description (100-150 words) - for the course detail page
4. Learning objectives (3-4 bullet points)
5. Prerequisites (if any)
6. Duration estimate
7. Difficulty level
8. Tags/keywords for search (5-8)
9. Completion criteria

Write descriptions that make learners want to enroll, not just understand what the course covers. Lead with the benefit, not the topic.

Avoid corporate jargon. Write like a human, not a policy document.`,
              result:
                'Polished LMS listings that increase voluntary enrollment and make courses easy to find.',
              tip: 'A/B test different descriptions for the same course to see which gets higher enrollment. Small wording changes matter.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Training ROI Reporting',
          prompts: [
            {
              id: 'tr-p-6-1',
              title: 'Training Effectiveness Report',
              task: 'Generate a training effectiveness report for stakeholders',
              prompt: `Generate a training effectiveness report for stakeholders.

Program name: [name]
Date(s): [when delivered]
Participants: [number, roles, departments]

Data available:
- Completion rate: [%]
- Assessment scores: [average pre/post or pass rate]
- Satisfaction ratings: [average and breakdown]
- Feedback themes: [key positives and negatives]
- Behavioral indicators: [any post-training observations, manager feedback, performance data]
- Business metrics: [any relevant KPIs before and after]

Generate a report with:
1. Executive summary (3-4 sentences)
2. Program overview (who, what, when, why)
3. Results by Kirkpatrick level:
   - Level 1 (Reaction): satisfaction data
   - Level 2 (Learning): knowledge gain data
   - Level 3 (Behavior): application indicators
   - Level 4 (Results): business impact indicators
4. Key findings (3-5 bullet points)
5. Recommendations for next iteration
6. One data visualization suggestion (what chart would tell this story best)

Write for executives who have 5 minutes. Lead with impact, support with data.`,
              result:
                'A stakeholder-ready training effectiveness report that speaks the language of business impact.',
              tip: 'Even partial data is better than no report. Use whatever you have and note what you plan to measure next time.',
            },
            {
              id: 'tr-p-6-2',
              title: 'ROI Calculator Narrative',
              task: 'Calculate and narrate training ROI for leadership',
              prompt: `Help me calculate and narrate the ROI of a training program.

Program: [name]
Total cost of training:
- Design and development: [cost]
- Facilitator time: [cost]
- Participant time (opportunity cost): [hours x average hourly rate]
- Materials and technology: [cost]
- Travel (if applicable): [cost]
- Total investment: [sum]

Measurable benefits (provide what you have):
- Productivity improvement: [estimate or data]
- Error reduction: [estimate or data]
- Time savings per participant: [estimate or data]
- Turnover reduction: [estimate or data]
- Revenue impact: [estimate or data]
- Compliance risk reduction: [estimate or data]

Generate:
1. ROI calculation: (Benefits - Costs) / Costs x 100
2. Break-even analysis: at what point does the program pay for itself?
3. Conservative, moderate, and optimistic ROI scenarios
4. A narrative paragraph translating the numbers into business language
5. Caveats and assumptions to include for credibility
6. Comparison benchmarks - typical training ROI by industry

Show your math. Stakeholders trust transparent calculations.`,
              result:
                'A credible ROI analysis with multiple scenarios that justifies your training investment.',
              tip: 'Use the conservative scenario in presentations. Underpromise and overdeliver builds trust with leadership.',
            },
            {
              id: 'tr-p-6-3',
              title: 'Quarterly L&D Dashboard Summary',
              task: 'Create a quarterly summary of all training activities and outcomes',
              prompt: `Create a quarterly L&D dashboard summary for leadership.

Quarter: [Q1/Q2/Q3/Q4] [Year]

Training activities this quarter:
[List each program with: name, type, participants, completion rate, satisfaction score]

Key metrics:
- Total training hours delivered: [number]
- Total participants trained: [number]
- Average satisfaction score: [number]
- Average assessment pass rate: [number]
- Programs launched: [number]
- Programs retired or updated: [number]

Notable achievements: [list]
Challenges: [list]
Upcoming priorities: [list]

Generate:
1. Dashboard summary (one page, executive-friendly)
2. Program performance table (sortable format)
3. Quarter-over-quarter trend narrative (if previous data available)
4. Top 3 wins with evidence
5. Top 3 areas for improvement with action plans
6. Resource utilization summary
7. Next quarter preview and priorities

This should take a VP of HR 3 minutes to read and feel confident about the L&D function.`,
              result:
                'A polished quarterly summary that positions L&D as a strategic function, not a cost center.',
              tip: 'Consistency is key. Deliver this same format every quarter and stakeholders learn to trust and use it.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at the real time savings across your training workflow.',
      timeTable: [
        {
          task: 'Module development',
          without: '20-30 hours/module',
          withAI: '8-12 hours',
          saved: '12-18 hrs',
        },
        {
          task: 'Assessment design',
          without: '4-6 hours/assessment',
          withAI: '1-2 hours',
          saved: '3-4 hrs',
        },
        {
          task: 'Facilitator guide creation',
          without: '6-10 hours/guide',
          withAI: '2-3 hours',
          saved: '4-7 hrs',
        },
        {
          task: 'Feedback analysis',
          without: '3-5 hours/program',
          withAI: '20-30 minutes',
          saved: '3-4.5 hrs',
        },
        {
          task: 'LMS content updates',
          without: '40+ hours/audit',
          withAI: '10-15 hours',
          saved: '25-30 hrs',
        },
        {
          task: 'ROI reporting',
          without: '6-8 hours/report',
          withAI: '1-2 hours',
          saved: '5-6 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '20-30 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Corporate trainers who use AI are not producing lower-quality work. They are producing more work at higher quality because the mechanical parts - the drafting, formatting, analyzing - take a fraction of the time. That freed-up time goes into facilitation prep, stakeholder relationships, and program innovation.',
            'The gap is not about training expertise. It is about production speed.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a trainer to spend your days formatting slides and copying survey data into spreadsheets. You became a trainer to develop people. AI gives you the time to actually do that.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One tool. Run it on your next training build. That is enough to see the difference.',
    },

    ch7: {
      intro:
        'Seven days. Fifteen minutes a day. By the end of the week, AI will be part of your training workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'tr-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'tr-1-2', label: 'Create a free Canva AI account for visual materials' },
            { id: 'tr-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Build Your First Module Outline',
          duration: '15 min',
          items: [
            {
              id: 'tr-2-1',
              label:
                'Run the Learning Objectives prompt for an upcoming training program',
            },
            {
              id: 'tr-2-2',
              label:
                'Follow up with the Module Content Outline prompt using those objectives',
            },
          ],
        },
        {
          day: 3,
          title: 'Design an Assessment',
          duration: '20 min',
          items: [
            {
              id: 'tr-3-1',
              label: 'Run the Multi-Level Quiz Designer prompt for your module topic',
            },
            {
              id: 'tr-3-2',
              label:
                'Review the questions - notice how much faster that was than writing from scratch',
            },
          ],
        },
        {
          day: 4,
          title: 'Analyze Some Feedback',
          duration: '15 min',
          items: [
            {
              id: 'tr-4-1',
              label: 'Grab feedback data from your most recent training program',
            },
            {
              id: 'tr-4-2',
              label:
                'Run the Feedback Survey Analyzer prompt and review the insights',
            },
          ],
        },
        {
          day: 5,
          title: 'Create a Facilitator Guide',
          duration: '20 min',
          items: [
            {
              id: 'tr-5-1',
              label: 'Take a module you have already built',
            },
            {
              id: 'tr-5-2',
              label: 'Run the Facilitator Script Generator prompt',
            },
            {
              id: 'tr-5-3',
              label: 'Review and add your personal facilitation tips',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More Systems',
          duration: '15 min',
          items: [
            {
              id: 'tr-6-1',
              label: 'Try any system or prompt you have not explored yet',
            },
            {
              id: 'tr-6-2',
              label:
                'Identify which systems save you the most time in your workflow',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'tr-7-1',
              label: 'What worked? Which prompts will become part of your regular workflow?',
            },
            {
              id: 'tr-7-2',
              label:
                'Share this guide with a fellow trainer who could use the help',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
