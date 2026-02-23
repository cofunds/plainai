import type { WorkbookData } from './types'

export const professorsData = {
  professionId: 'professors',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Professors & Academics',
  heroDescription:
    'Everything you need to start using AI in your academic career - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 11 PM on a Sunday. You have 14 papers to review before the committee meeting on Tuesday. Three grant proposals need feedback by end of week. Tomorrow morning you are lecturing on a topic you have taught for years, but the slides need updating because the field moved again. Your inbox has 63 unread messages - half from students, half from administrators who need forms you forgot existed.',
        'You became an academic to push the boundaries of knowledge. To mentor the next generation. To ask questions nobody else is asking. Instead, you spend most of your waking hours on administrative overhead, repetitive writing tasks, and logistical coordination that has nothing to do with the reason you got your PhD.',
        'The publish-or-perish pressure has not let up. If anything, it has intensified. The grants are harder to get. The service obligations keep growing. And the students who need mentoring are competing for shrinking slices of your attention.',
        'Every professor knows the feeling: the research you actually care about gets pushed to "this weekend" - and this weekend never comes.',
      ],
      highlight:
        'What if AI could handle the repetitive 60% - so you could focus on the intellectual work that actually matters?',
      closingParagraph:
        'Not replacing your expertise. Not writing your papers for you. Just accelerating the mechanical parts - the first drafts, the literature scanning, the formatting, the administrative busywork - so your brain is free for the work only you can do.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to write your research for you. It is not a co-author. It does not understand your field the way you do, and it cannot replace the decades of domain expertise you bring to every paper, lecture, and grant proposal. It is not a shortcut to skip the hard thinking.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as a tireless research assistant who has read millions of papers, grant proposals, syllabi, and administrative documents. It can draft, summarize, restructure, and organize text at a speed no human can match.',
            'Need a first draft of your specific aims page? 90 seconds. Need to synthesize 20 abstracts into a literature overview? 3 minutes. Need to turn your scribbled lecture notes into a structured outline with learning objectives? 2 minutes.',
            'The key: AI handles the scaffolding. You provide the intellectual substance, the domain judgment, and the scholarly voice. It is a tool that amplifies your expertise - it does not replace it.',
          ],
        },
      ],
      keyInsight:
        'Your deep domain knowledge + AI\'s speed = more time for real scholarship. You know what matters in your field. AI removes the 5 hours of formatting, drafting, and organizing between your ideas and the finished output.',
    },

    ch3: {
      intro: 'You don\'t need a dozen subscriptions. These five tools cover everything an academic needs.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your all-purpose drafting and thinking partner',
          description:
            'Grant drafts, lecture outlines, recommendation letters, brainstorming, and any text-based academic task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for drafting',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-document analyst and careful editor',
          description:
            'Reviewing lengthy papers, synthesizing literature, detailed feedback on drafts, nuanced writing tasks',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long, detailed work',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research scout with citations',
          description:
            'Finding recent papers, fact-checking claims, exploring unfamiliar subfields with source links',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your academic command center',
          description:
            'Organizing research notes, tracking grant deadlines, managing course materials and committee tasks',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want to organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual content creator',
          description:
            'Conference posters, lecture slides, infographics for teaching, and visual abstracts',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Great for presentations and posters',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That handles 80% of academic tasks. Add Notion AI and Canva AI when you are ready to level up organization and visuals.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual academic workflow. Each system targets a specific area of your work. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Grant Proposal Writing',
          before:
            'You stare at a blank document for two hours trying to get the specific aims page right. The narrative structure takes days. You rewrite the broader impacts section four times. The whole proposal process stretches across weeks of fragmented effort, competing with teaching and service obligations for your attention.',
          after:
            'You feed AI your research question, preliminary data, and target agency. It generates a structured first draft of your specific aims, significance section, and broader impacts in minutes. You spend your time refining the science - not fighting the blank page.',
          flow: [
            'Define your research question and key hypotheses',
            'Feed AI your preliminary data summary and target funding agency',
            'AI generates a draft specific aims page with narrative structure',
            'Review and inject your domain expertise and unique angle',
            'Use AI to polish broader impacts and budget justification',
          ],
          timeSaved: { without: '40-60 hours/proposal', withAI: '15-20 hours' },
        },
        {
          id: 2,
          name: 'Lecture and Course Design',
          before:
            'You rebuild slides from scratch every semester. Writing learning objectives feels like a chore. Creating new assignments means hours of brainstorming, and updating course materials for a changing field is a project you keep putting off.',
          after:
            'AI drafts learning objectives aligned to Bloom\'s taxonomy, generates lecture outlines from your notes, creates discussion questions, and designs assignments - all in your course\'s context. You curate and refine instead of building from zero.',
          flow: [
            'Describe the course topic, level, and learning goals',
            'AI generates a structured lecture outline with key concepts',
            'Review and customize for your teaching style',
            'AI drafts discussion questions and assignment prompts',
            'Use AI to create rubrics and assessment criteria',
          ],
          timeSaved: { without: '8-12 hours/course prep', withAI: '2-3 hours' },
        },
        {
          id: 3,
          name: 'Research Paper Review',
          before:
            'You receive a paper to review and spend 3-4 hours reading it carefully, cross-referencing claims, checking methodology, and writing detailed feedback. Multiply that by the 15-20 review requests you get per year.',
          after:
            'AI pre-scans the paper and generates a structured summary - key claims, methodology overview, potential weaknesses, and questions worth probing. You start your review already oriented, spending your time on deep intellectual critique rather than initial parsing.',
          flow: [
            'Upload or paste the manuscript into Claude or ChatGPT',
            'AI generates a structured summary with methodology notes',
            'AI flags potential concerns - sample size, missing controls, logical gaps',
            'You do your deep expert read with a head start',
            'AI helps structure your review into standard format',
          ],
          timeSaved: { without: '3-4 hours/review', withAI: '1-1.5 hours' },
        },
        {
          id: 4,
          name: 'Literature Synthesis',
          before:
            'You have 40 papers saved in your reference manager. You know you need to synthesize them for your intro section or lit review, but actually reading, comparing, and weaving them together takes days. So it waits.',
          after:
            'You paste abstracts and key findings into AI. It identifies themes, contradictions, and gaps across the literature. You get a structured synthesis draft in minutes that you can refine into publication-quality prose.',
          flow: [
            'Collect abstracts and key passages from your papers',
            'Paste them into Claude with synthesis instructions',
            'AI identifies major themes, agreements, and contradictions',
            'AI generates a narrative synthesis organized by theme',
            'You refine, add your interpretation, and verify citations',
          ],
          timeSaved: { without: '2-3 days', withAI: '2-3 hours' },
        },
        {
          id: 5,
          name: 'Committee and Administrative Work',
          before:
            'Committee reports, program reviews, accreditation documents, meeting minutes - the administrative machinery of academia eats hours every week. None of it advances your research or teaching, but all of it is required.',
          after:
            'AI drafts committee reports from your notes, structures program review documents, generates meeting agendas, and turns messy minutes into clean summaries. The administrative load drops dramatically.',
          flow: [
            'Brain dump your notes from the committee meeting or review',
            'AI structures them into a proper report or document',
            'Review for accuracy and add policy-specific details',
            'AI generates action items and follow-up templates',
            'Store in your department\'s shared system',
          ],
          timeSaved: { without: '5-8 hours/week', withAI: '1-2 hours/week' },
        },
        {
          id: 6,
          name: 'Student Mentoring Support',
          before:
            'You care deeply about your students, but writing 15 recommendation letters, giving feedback on thesis drafts, and preparing mentoring meeting notes takes enormous time. Some students wait weeks for feedback because you are simply overwhelmed.',
          after:
            'AI drafts recommendation letters from your notes about each student. It generates structured feedback on thesis chapters. It prepares talking points for mentoring meetings. Your students get faster, more thorough support.',
          flow: [
            'Provide notes about the student - strengths, achievements, goals',
            'AI drafts a recommendation letter tailored to the opportunity',
            'For thesis feedback: paste the chapter and specify focus areas',
            'AI generates detailed, constructive comments',
            'Review, personalize, and send - hours saved per student',
          ],
          timeSaved: { without: '2-3 hours/letter', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts for academic work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Grant Proposal Writing',
          prompts: [
            {
              id: 'pf-p-1-1',
              title: 'Specific Aims Page Draft',
              task: 'Generate a structured specific aims page for a grant proposal',
              prompt: `I am writing a grant proposal for [NSF/NIH/other agency].

Research area: [your field and subfield]
Research question: [your central question]
Key hypothesis: [your main hypothesis]
Preliminary data: [brief summary of what you have so far]
Significance: [why this matters to the field]

Draft a Specific Aims page that includes:
1. An opening paragraph establishing the problem and significance
2. A knowledge gap statement
3. The long-term goal and overall objective
4. The central hypothesis and rationale
5. 2-3 specific aims with brief descriptions
6. A closing statement on expected outcomes and impact

Use formal academic tone. Keep it to one page worth of text. Follow [NSF/NIH] conventions.`,
              result:
                'A structured first draft of your specific aims page ready for expert refinement.',
              tip: 'Feed AI a successful aims page from a previous grant as a style reference. It will match the structure and tone.',
            },
            {
              id: 'pf-p-1-2',
              title: 'Broader Impacts Section',
              task: 'Draft the broader impacts section of an NSF proposal',
              prompt: `Help me write the Broader Impacts section for my NSF grant proposal.

Research topic: [your topic]
Target communities: [who benefits beyond academia]
Educational components: [any teaching or training plans]
Diversity and inclusion plans: [outreach to underrepresented groups]
Societal relevance: [real-world applications]
Institutional resources: [programs or centers you can leverage]

Draft a Broader Impacts section that:
1. Clearly connects the research to societal benefit
2. Includes specific, actionable outreach plans
3. Addresses training of next-generation scientists
4. Mentions partnerships or collaborations where relevant
5. Avoids vague generalities - be concrete

Keep it under 500 words. NSF reviewers want specifics, not platitudes.`,
              result:
                'A concrete broader impacts section with specific plans rather than generic statements.',
              tip: 'NSF reviewers consistently flag vague broader impacts. Ask AI to make each claim more specific with a follow-up prompt.',
            },
            {
              id: 'pf-p-1-3',
              title: 'Budget Justification Narrative',
              task: 'Write a budget justification for a grant proposal',
              prompt: `Write a budget justification narrative for my [NSF/NIH/other] grant proposal.

Project duration: [X years]
Personnel:
- PI: [% effort, salary basis]
- Co-PI: [% effort, salary basis]
- Graduate students: [number, stipend level]
- Postdoc: [number, salary]
- Undergrad assistants: [number, hourly rate]

Equipment: [list major items and costs]
Travel: [conferences, field work - list and costs]
Materials and supplies: [list categories and estimates]
Other costs: [participant support, subawards, etc.]

For each budget line, write a 2-3 sentence justification explaining:
- Why this cost is necessary for the project
- How the amount was determined
- How it connects to specific aims

Use clear, direct language. Avoid padding.`,
              result:
                'A complete budget justification narrative connecting every cost to the project\'s scientific goals.',
              tip: 'Run this through AI twice - once to draft, once to check that every line item connects back to a specific aim.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Lecture and Course Design',
          prompts: [
            {
              id: 'pf-p-2-1',
              title: 'Syllabus and Course Outline Generator',
              task: 'Design a complete course syllabus with learning objectives',
              prompt: `Design a course syllabus for the following:

Course title: [title]
Level: [undergraduate intro / upper-division / graduate]
Duration: [semester length, meeting frequency]
Field: [department and discipline]
Prerequisites: [if any]

I want students to leave this course able to:
[List 3-5 high-level goals in plain language]

Generate:
1. 5-7 course learning objectives aligned to Bloom's taxonomy (use specific verbs)
2. A week-by-week topic schedule for [X weeks]
3. Suggested readings or resource types per week
4. Assessment breakdown (exams, papers, participation, projects - with percentages)
5. 2-3 assignment ideas that test higher-order thinking
6. A course description paragraph (catalog-style, under 100 words)

Make it rigorous but realistic for [level] students.`,
              result:
                'A complete, structured syllabus framework ready for your customization.',
              tip: 'Paste your department\'s syllabus template requirements and ask AI to format the output to match.',
            },
            {
              id: 'pf-p-2-2',
              title: 'Lecture Outline from Notes',
              task: 'Turn rough lecture notes into a structured lecture plan',
              prompt: `Turn my rough notes into a structured 50-minute lecture outline.

Course: [course name and level]
Today's topic: [topic]
Where we left off last class: [brief context]
What comes next class: [brief context]

My rough notes and key points:
[Paste your messy notes, bullet points, or key concepts]

Generate:
1. A compelling opening (2-3 minutes) - hook or question to engage students
2. Main content blocks (3-4 sections, ~10 min each) with:
   - Key concept to convey
   - Example or illustration
   - Transition to next section
3. An active learning moment (5 minutes) - discussion question, think-pair-share, or quick exercise
4. Summary and preview of next class (3 minutes)
5. 2-3 discussion questions if time permits

Keep explanations clear enough for [level] students.`,
              result:
                'A structured lecture plan with timing, transitions, and engagement moments.',
              tip: 'After generating, ask AI to suggest 2-3 real-world examples specific to your discipline that illustrate the key concepts.',
            },
            {
              id: 'pf-p-2-3',
              title: 'Assignment and Rubric Creator',
              task: 'Design an assignment with a detailed grading rubric',
              prompt: `Design an assignment for my [level] course in [subject].

Topic/skill being assessed: [what you want to measure]
Assignment type: [essay / research paper / case study / project / presentation]
Desired length or scope: [pages, minutes, deliverables]
Learning objectives it addresses: [list 2-3 from your syllabus]

Generate:
1. Clear assignment prompt with specific instructions
2. A detailed rubric with 4-5 criteria, each scored on a 4-point scale (Excellent / Good / Developing / Inadequate)
3. For each rubric level, specific descriptors so students know exactly what earns each score
4. Submission requirements and formatting guidelines
5. One example of what an "Excellent" response would address (without writing the full answer)

The assignment should require critical thinking, not just recall.`,
              result:
                'A complete assignment with a transparent rubric students can use to self-assess.',
              tip: 'Share the rubric with students before they start. It reduces grading disputes and improves submission quality.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Research Paper Review',
          prompts: [
            {
              id: 'pf-p-3-1',
              title: 'Manuscript Pre-Scan',
              task: 'Get a structured summary of a paper before deep review',
              prompt: `I need to review this manuscript for [journal name]. Give me a structured pre-scan.

[Paste the manuscript text or abstract + methods + results sections]

Provide:
1. One-paragraph summary of the paper's central claim
2. Research question and hypothesis
3. Methodology overview - design, sample, analysis approach
4. Key findings (bullet points)
5. Stated limitations
6. 5 questions I should investigate during my detailed read:
   - 2 about methodology
   - 2 about interpretation of results
   - 1 about novelty or contribution to the field

Do not evaluate quality yet - just orient me for an efficient review.`,
              result:
                'A structured overview that lets you start your review already oriented to the key issues.',
              tip: 'Use this as a pre-reading step. It cuts your total review time significantly because you know what to focus on.',
            },
            {
              id: 'pf-p-3-2',
              title: 'Methodology Critique Framework',
              task: 'Generate a structured methodology assessment',
              prompt: `Analyze the methodology of this research paper and identify potential concerns.

Field: [discipline]
Study type: [experimental / observational / qualitative / mixed methods / computational]

Methods section:
[Paste the methods section]

For each of the following, rate as Strong / Adequate / Weak / Cannot Determine and explain why:
1. Research design appropriateness for the question
2. Sample size and selection method
3. Variable operationalization and measurement
4. Controls and confound management
5. Statistical analysis choices
6. Reproducibility - could someone replicate this?

Then list:
- Top 3 methodological strengths
- Top 3 methodological concerns
- 2 suggestions for strengthening the approach

Be specific. Reference actual details from the methods section.`,
              result:
                'A detailed methodology assessment you can integrate into your review.',
              tip: 'Cross-reference AI\'s assessment with your own expertise. AI catches structural issues well but may miss field-specific norms.',
            },
            {
              id: 'pf-p-3-3',
              title: 'Review Letter Structuring',
              task: 'Structure your review notes into a formal peer review',
              prompt: `Structure my review notes into a formal peer review letter for [journal name].

My overall assessment: [accept / minor revisions / major revisions / reject]

My notes and observations:
[Paste your rough notes, bullet points, and concerns]

Format into:
1. Summary paragraph - what the paper does and its potential contribution
2. Major concerns (numbered) - issues that must be addressed
3. Minor concerns (numbered) - suggestions for improvement
4. Specific line-by-line comments (if I provided any)
5. Overall recommendation with brief justification

Tone: constructive and respectful but honest. The goal is to help the authors improve their work.
Keep major concerns to the most important 3-5 issues. Do not nitpick.`,
              result:
                'A well-structured peer review letter ready for submission to the journal.',
              tip: 'Write your raw notes freely, then use this prompt to organize them. It separates the thinking from the formatting.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Literature Synthesis',
          prompts: [
            {
              id: 'pf-p-4-1',
              title: 'Systematic Review Summary',
              task: 'Synthesize multiple paper abstracts into a thematic overview',
              prompt: `Synthesize the following paper abstracts into a structured literature overview.

Research topic: [your topic]
Purpose: [introduction section / lit review chapter / grant background]
Number of papers: [X]

Abstracts:
[Paste abstracts, separated by "---"]

Generate:
1. Major themes across the literature (3-5 themes)
2. For each theme:
   - Key findings and consensus
   - Contradictions or debates
   - Notable methodological approaches
3. Identified gaps in the current literature
4. A narrative synthesis paragraph (200-300 words) weaving the themes together
5. Suggested structure for a literature review section

Do not fabricate citations. Only reference what appears in the abstracts I provided.`,
              result:
                'A thematic synthesis that gives you a head start on your literature review.',
              tip: 'Always verify that AI\'s synthesis accurately represents each paper. It can occasionally misinterpret nuances in abstracts.',
            },
            {
              id: 'pf-p-4-2',
              title: 'Research Gap Identifier',
              task: 'Identify gaps and opportunities in existing literature',
              prompt: `Based on the following literature summary, identify research gaps and opportunities.

Field: [your discipline]
Specific area: [your research focus]

Summary of what I know from the literature:
[Paste your notes on what has been studied, key findings, and existing approaches]

Identify:
1. Questions that remain unanswered based on this body of work
2. Methodological gaps - approaches that have not been tried
3. Population or context gaps - groups or settings not yet studied
4. Theoretical gaps - frameworks not yet applied to this problem
5. Contradictions that need resolution through new studies

For each gap, briefly explain:
- Why it matters
- What kind of study could address it
- How it connects to the broader significance of the field

Prioritize gaps that are both important and feasible for a [junior faculty / senior researcher / graduate student] to pursue.`,
              result:
                'A structured list of research opportunities grounded in existing literature.',
              tip: 'Use this output to strengthen the "gap statement" in your grant proposals and paper introductions.',
            },
            {
              id: 'pf-p-4-3',
              title: 'Citation Context Paragraph Writer',
              task: 'Draft a paragraph weaving multiple citations into a narrative',
              prompt: `Write a literature review paragraph that synthesizes these sources into a coherent narrative.

Topic of the paragraph: [the specific point this paragraph should make]
Position in the paper: [introduction / background / discussion]

Sources to weave in:
1. [Author(s), Year] - Key finding: [finding]
2. [Author(s), Year] - Key finding: [finding]
3. [Author(s), Year] - Key finding: [finding]
4. [Author(s), Year] - Key finding: [finding]
5. [Author(s), Year] - Key finding: [finding]

Requirements:
- Synthesize, don't just summarize each source sequentially
- Show how findings relate to, support, or contradict each other
- End with the implication or gap this paragraph establishes
- Use [Author, Year] citation format
- Academic tone appropriate for [journal type / dissertation]
- 150-250 words

Do not add any sources I did not provide.`,
              result:
                'A publication-ready paragraph that synthesizes rather than lists your sources.',
              tip: 'Generate this for each key paragraph in your lit review, then edit for your voice. It eliminates the "one source per sentence" trap.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Committee and Administrative Work',
          prompts: [
            {
              id: 'pf-p-5-1',
              title: 'Committee Report Draft',
              task: 'Turn meeting notes into a formal committee report',
              prompt: `Turn my committee meeting notes into a formal report.

Committee: [name and purpose]
Meeting date: [date]
Members present: [list]
Context: [what this committee oversees]

My rough notes:
[Paste your messy notes from the meeting]

Generate a report with:
1. Header with committee name, date, attendees
2. Meeting purpose / agenda summary
3. Key discussion points (organized by topic, not chronological)
4. Decisions made (clearly stated)
5. Action items with responsible parties and deadlines
6. Items tabled for next meeting
7. Next meeting date and planned agenda items

Tone: professional and concise. This will be shared with [department chair / dean / faculty senate].
Keep it under 2 pages.`,
              result:
                'A clean committee report ready for distribution, saving you the formatting struggle.',
              tip: 'Take rough notes during the meeting without worrying about structure. Let AI handle the formatting afterward.',
            },
            {
              id: 'pf-p-5-2',
              title: 'Program Review Document',
              task: 'Draft sections of a departmental program review',
              prompt: `Help me draft a section of our departmental program review.

Department: [department name]
Section needed: [curriculum overview / assessment results / student outcomes / resource needs / future directions]

Data and context:
- Enrollment trends: [numbers over past 3-5 years]
- Graduation rates: [data]
- Student outcomes: [employment, grad school placement, etc.]
- Curriculum changes: [recent updates]
- Faculty composition: [numbers, ranks]
- Challenges: [list key issues]
- Strengths: [list key strengths]

Draft this section with:
1. Clear narrative connecting data to program quality
2. Honest assessment of challenges with proposed solutions
3. Evidence-based arguments for resource requests
4. Alignment with institutional mission and strategic plan
5. Specific, measurable goals for improvement

Tone: confident but honest. Accreditors and administrators want evidence, not spin.
Length: 500-800 words for this section.`,
              result:
                'A data-driven program review section that makes a compelling case.',
              tip: 'Ask AI to generate a separate "evidence summary table" you can include as an appendix.',
            },
            {
              id: 'pf-p-5-3',
              title: 'Administrative Email Drafter',
              task: 'Draft professional academic administrative emails',
              prompt: `Draft a professional email for the following academic administrative situation.

From: [your role - professor / department chair / committee chair]
To: [recipient and their role]
Purpose: [what you need to communicate or request]
Context: [relevant background]
Tone: [diplomatic / direct / urgent / informational]
Key points to include:
[List the main things you need to say]

Requirements:
- Professional academic tone
- Clear and concise - under 200 words
- Specific ask or next step at the end
- Respectful of institutional hierarchy and norms
- No passive-aggressive undertones

Write 1 version. If this is a sensitive situation, flag anything I should reconsider before sending.`,
              result:
                'A polished administrative email that gets your point across professionally.',
              tip: 'For sensitive emails, ask AI to generate 2 versions - one more direct, one more diplomatic - so you can choose the right approach.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Student Mentoring Support',
          prompts: [
            {
              id: 'pf-p-6-1',
              title: 'Recommendation Letter Generator',
              task: 'Draft a strong recommendation letter for a student',
              prompt: `Draft a recommendation letter for my student.

Student name: [name]
Applying for: [graduate program / fellowship / job / award]
Institution or organization: [where they are applying]
Your relationship: [advisor / instructor / committee member]
Duration: [how long you have known them]

Student strengths and achievements:
- [Academic performance details]
- [Research contributions]
- [Notable projects or papers]
- [Personal qualities relevant to the application]
- [Specific anecdote or example that illustrates their abilities]

Comparison: This student is in the top [X]% of students I have [taught / mentored] in [time frame].

Any areas of growth: [optional - honest but constructive]

Write a letter that:
1. Opens with a strong, specific endorsement
2. Provides concrete evidence for each claim
3. Includes at least one specific anecdote
4. Addresses qualities relevant to [what they are applying for]
5. Closes with an unequivocal recommendation
6. Length: 400-600 words
7. Tone: genuinely enthusiastic but credible

Do not use generic praise. Every positive claim should connect to a specific example.`,
              result:
                'A detailed, personalized recommendation letter with specific evidence backing every claim.',
              tip: 'Keep a running file of notes on each student you might write for. Feed those notes to AI when it is time to write the letter.',
            },
            {
              id: 'pf-p-6-2',
              title: 'Thesis Chapter Feedback',
              task: 'Generate structured feedback on a student\'s thesis draft',
              prompt: `Provide detailed feedback on this thesis chapter draft.

Student level: [Master's / PhD]
Chapter type: [introduction / literature review / methodology / results / discussion]
Field: [discipline]
Stage: [first draft / revision / near-final]

Chapter text:
[Paste the chapter or a substantial excerpt]

Provide feedback in these categories:
1. Structure and organization - Is the argument logical and well-sequenced?
2. Clarity and writing quality - Are ideas expressed clearly?
3. Scholarly rigor - Are claims supported? Is the analysis thorough?
4. Engagement with literature - Is the relevant scholarship addressed?
5. Methodology concerns (if applicable)

For each category:
- 1-2 strengths to reinforce
- 1-2 specific areas for improvement with examples
- Concrete suggestions for revision

Overall assessment: What is the single most important thing this student should focus on in revision?

Tone: supportive but honest. This student needs to grow.`,
              result:
                'Structured, constructive feedback that helps your student improve efficiently.',
              tip: 'Use AI-generated feedback as a starting point. Add your own field-specific insights and personal observations on top.',
            },
            {
              id: 'pf-p-6-3',
              title: 'Mentoring Meeting Prep',
              task: 'Prepare talking points for a student mentoring meeting',
              prompt: `Prepare talking points for my upcoming mentoring meeting.

Student: [name, level - undergrad / Master's / PhD / postdoc]
Stage: [year in program, where they are in their work]
Meeting purpose: [regular check-in / milestone discussion / problem-solving / career planning]

Current situation:
- What they are working on: [brief description]
- Recent progress: [what they have accomplished]
- Challenges: [what they are struggling with]
- Upcoming deadlines or milestones: [list]
- Any concerns I have: [if applicable]

Generate:
1. 3-4 key discussion topics in priority order
2. For each topic: a guiding question to ask the student
3. Potential advice or resources to offer
4. Specific milestones or goals to set for next meeting
5. A follow-up email template summarizing decisions made

Keep it focused. A good mentoring meeting is 30 minutes, not 90.`,
              result:
                'A focused agenda that makes your mentoring meetings more productive for both of you.',
              tip: 'Send the follow-up email template within 24 hours of the meeting. It creates accountability and shows students you are invested.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at the real time savings across your academic workload.',
      timeTable: [
        {
          task: 'Grant proposal drafting',
          without: '40-60 hours/proposal',
          withAI: '15-20 hours',
          saved: '25-40 hrs',
        },
        {
          task: 'Course prep and design',
          without: '8-12 hours/course',
          withAI: '2-3 hours',
          saved: '6-9 hrs',
        },
        {
          task: 'Paper reviews',
          without: '3-4 hours/review',
          withAI: '1-1.5 hours',
          saved: '2-2.5 hrs',
        },
        {
          task: 'Literature synthesis',
          without: '2-3 days',
          withAI: '2-3 hours',
          saved: '12-20 hrs',
        },
        {
          task: 'Committee and admin work',
          without: '5-8 hours/week',
          withAI: '1-2 hours/week',
          saved: '4-6 hrs/week',
        },
        {
          task: 'Recommendation letters',
          without: '2-3 hours/letter',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/week',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Academics who adopt AI are not cutting corners. They are buying back the time that administrative and repetitive tasks have stolen from their scholarship. The professors getting grants funded, publishing consistently, and still having time to mentor students are increasingly the ones who use AI for the mechanical parts of their work.',
            'The gap is not about intelligence or work ethic. It is about tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not spend years earning a PhD to format committee reports and stare at blank grant templates. You did it to advance knowledge and shape the next generation of thinkers. AI gives you the time to actually do that.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One tool. Run it on something real this week. That is enough to see the difference.',
    },

    ch7: {
      intro:
        'Seven days. Fifteen minutes a day. By the end of the week, AI will be part of your academic workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'pf-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pf-1-2', label: 'Create a free Perplexity account' },
            { id: 'pf-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Try Your First Prompt',
          duration: '15 min',
          items: [
            {
              id: 'pf-2-1',
              label:
                'Run the Lecture Outline prompt with a real upcoming lecture topic',
            },
            {
              id: 'pf-2-2',
              label:
                'Compare the output to what it would have taken you to build from scratch',
            },
          ],
        },
        {
          day: 3,
          title: 'Tackle the Literature',
          duration: '20 min',
          items: [
            {
              id: 'pf-3-1',
              label: 'Collect 5-10 abstracts on a current research topic',
            },
            {
              id: 'pf-3-2',
              label:
                'Run the Systematic Review Summary prompt and review the synthesis',
            },
          ],
        },
        {
          day: 4,
          title: 'Write a Letter',
          duration: '15 min',
          items: [
            {
              id: 'pf-4-1',
              label: 'Pick a student who needs a recommendation letter',
            },
            {
              id: 'pf-4-2',
              label:
                'Run the Recommendation Letter prompt and refine the output',
            },
          ],
        },
        {
          day: 5,
          title: 'Clear the Admin Backlog',
          duration: '20 min',
          items: [
            {
              id: 'pf-5-1',
              label: 'Take your most recent committee meeting notes',
            },
            {
              id: 'pf-5-2',
              label: 'Run the Committee Report Draft prompt',
            },
            {
              id: 'pf-5-3',
              label: 'Send the finished report - notice how fast that was',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More Systems',
          duration: '15 min',
          items: [
            {
              id: 'pf-6-1',
              label: 'Try any system or prompt you have not explored yet',
            },
            {
              id: 'pf-6-2',
              label:
                'Identify which systems save you the most time and energy',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'pf-7-1',
              label: 'What worked? Which prompts will become part of your regular workflow?',
            },
            {
              id: 'pf-7-2',
              label:
                'Share this guide with a colleague who is drowning in admin work',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
