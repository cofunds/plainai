import type { WorkbookData } from './types'

export const medstudentsData = {
  professionId: 'medstudents',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Medical Students',
  heroDescription:
    'Everything you need to start using AI in medical school - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 6 AM. Your alarm goes off and you are already behind. There is an anatomy lecture at 8 that covers the brachial plexus - again - because last time it did not stick. Between classes, you have 200 Anki cards overdue, a clinical rotation starting next week that you have not prepped for, and somewhere in your inbox is a research paper your PI wants feedback on by Friday.',
        'You open First Aid and stare at the same page you highlighted three times. Your study group wants to do a practice case tonight, but you still have not finished reviewing the renal physiology block. Board exams are looming. Everyone around you seems to have it figured out. You do not.',
        'Here is the truth: nobody does. Medical school is not a knowledge problem - it is a time problem. There is more material than any human can absorb in the hours you are given. The students who thrive are not smarter. They are more efficient.',
      ],
      highlight:
        'What if you could study smarter, prep cases faster, and actually have time to sleep?',
      closingParagraph:
        'AI will not replace your clinical judgment or your years of training. But it can collapse hours of busywork into minutes - so you spend more time learning and less time drowning.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it is NOT',
          paragraphs: [
            'AI is not a shortcut to skip learning. It is not a replacement for understanding pathophysiology. It will not pass your boards for you. And it is absolutely not a tool you should use to diagnose real patients without supervision.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the world\'s most patient tutor. It has read every medical textbook, every research paper, every board review book. It does not get tired of explaining the Krebs cycle for the fifth time. It does not judge you for forgetting the difference between nephrotic and nephritic syndromes.',
            'Ask it to explain a concept at different levels of complexity? Done. Ask it to generate practice questions on a specific topic? 30 seconds. Ask it to summarize a 40-page research paper? 2 minutes. Ask it to walk you through a differential diagnosis? It will do it step by step.',
            'The catch is the same as always: garbage in, garbage out. A vague question gets a vague answer. A specific, well-structured question gets something genuinely useful.',
          ],
        },
      ],
      keyInsight:
        'Your medical knowledge + AI\'s speed = an unfair advantage. You know what to learn. AI helps you learn it faster, practice it more, and retain it longer.',
    },

    ch3: {
      intro: 'You do not need a dozen apps. You need these five.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your all-purpose study partner',
          description:
            'Explaining concepts, generating practice questions, case discussions, rewriting notes in simpler language',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - handles 80% of study tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Anki + AI',
          role: 'Your spaced repetition engine',
          description:
            'Creating high-yield flashcards from lecture notes, auto-generating cloze deletions, optimizing review schedules',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential for long-term retention',
          icon: 'chatgpt',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant with sources',
          description:
            'Finding recent studies, checking clinical guidelines, fact-checking with citations',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best when you need sourced answers',
          icon: 'perplexity',
        },
        {
          name: 'Claude',
          role: 'Your deep-thinking study partner',
          description:
            'Long-form explanations, nuanced clinical reasoning, analyzing complex cases, summarizing dense papers',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for complex reasoning tasks',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your knowledge organizer',
          description:
            'Organizing study notes, summarizing lecture content, building a personal medical wiki',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want a system for your notes',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT + Perplexity. That covers studying, research, and practice questions. Add the rest when you are ready.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here is where they plug into your actual study life. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Study Session Optimization',
          before:
            'You sit down to study renal physiology. You reread the textbook chapter. You highlight things. You watch a 45-minute lecture video at 1.5x speed. Two hours later, you can sort of explain the nephron but you are not sure you could answer board-style questions about it.',
          after:
            'You paste your lecture notes into AI and ask for a structured summary with key testable concepts. It generates 20 practice questions ranked by difficulty. You study actively from the start and finish in half the time with better retention.',
          flow: [
            'Paste lecture notes or textbook section into ChatGPT/Claude',
            'Ask for a structured summary with key concepts and clinical correlations',
            'Generate 15-20 practice questions at board-exam difficulty',
            'Work through questions and ask AI to explain anything you got wrong',
            'Generate Anki cards from the concepts you struggled with',
          ],
          timeSaved: { without: '3-4 hours', withAI: '1-1.5 hours' },
        },
        {
          id: 2,
          name: 'Clinical Case Analysis',
          before:
            'A patient presents with shortness of breath and bilateral leg swelling. You know it is probably heart failure but the attending asks you to walk through the full differential. You freeze. You know the pieces but cannot assemble them under pressure.',
          after:
            'You have practiced dozens of case presentations with AI. It gives you a patient scenario, you work through it step by step, and it corrects your reasoning in real time. When the attending asks, you walk through it confidently.',
          flow: [
            'Ask AI to generate a clinical vignette for a specific topic',
            'Work through history, physical exam, and differential diagnosis',
            'AI provides feedback on your reasoning and what you missed',
            'Practice presenting the case in SOAP format',
            'Repeat with variations until the pattern clicks',
          ],
          timeSaved: { without: '2 hours per case', withAI: '30-45 minutes' },
        },
        {
          id: 3,
          name: 'Board Exam Preparation',
          before:
            'You have a question bank with 3,000 questions. You grind through them randomly. When you get one wrong, you read the explanation, nod, and move on. Two weeks later, you get the same concept wrong again.',
          after:
            'AI identifies your weak areas and generates targeted practice questions. When you get something wrong, it does not just give you the answer - it teaches you the underlying concept and gives you three more questions to lock it in.',
          flow: [
            'Tell AI your weak topics and exam timeline',
            'Generate a focused study plan with daily targets',
            'Run practice blocks with board-style questions',
            'For wrong answers, ask AI to explain the concept and generate follow-ups',
            'Weekly review of weak areas with spaced repetition',
          ],
          timeSaved: { without: '6-8 hours/week', withAI: '3-4 hours/week' },
        },
        {
          id: 4,
          name: 'Research Paper Summarization',
          before:
            'Your PI sends you a 30-page paper on novel immunotherapy targets. You spend two hours reading it, most of which is spent rereading the methods section. You walk into journal club and hope nobody asks you a hard question.',
          after:
            'You paste the paper into AI and get a structured summary in 3 minutes - background, methods, key findings, limitations, and clinical relevance. You spend your time understanding the implications instead of decoding dense prose.',
          flow: [
            'Paste the paper (or key sections) into Claude or ChatGPT',
            'Ask for a structured summary with methods, results, and limitations',
            'Ask specific follow-up questions about anything unclear',
            'Generate 3-5 discussion points for journal club',
            'Use Perplexity to find related studies for context',
          ],
          timeSaved: { without: '2-3 hours', withAI: '20-30 minutes' },
        },
        {
          id: 5,
          name: 'Patient Note Practice',
          before:
            'Your attending asks you to write a SOAP note for the patient you just saw. You stare at the blank screen. You know what happened in the encounter but translating it into a proper clinical note feels like writing in a foreign language.',
          after:
            'You have practiced writing SOAP notes with AI feedback dozens of times. AI gives you a scenario, you write the note, and it tells you what you missed, what was redundant, and how to make it more concise. Your notes now read like a resident wrote them.',
          flow: [
            'Ask AI to give you a patient encounter scenario',
            'Write your SOAP note from scratch',
            'Paste it back and ask for detailed feedback',
            'AI highlights missing elements, formatting issues, and clinical gaps',
            'Rewrite and compare to an ideal version',
          ],
          timeSaved: { without: '45-60 minutes', withAI: '15-20 minutes' },
        },
        {
          id: 6,
          name: 'Lab Result Interpretation',
          before:
            'A set of labs comes back and you see the abnormal values flagged in red. You know some of them matter but you are not sure which pattern they form together. You Google each value individually and try to piece together the clinical picture.',
          after:
            'You paste the full lab panel into AI and it identifies the pattern immediately - metabolic acidosis with an elevated anion gap pointing toward diabetic ketoacidosis. It walks you through the reasoning and tells you what to order next.',
          flow: [
            'Paste the lab values into ChatGPT or Claude',
            'Ask AI to identify patterns and the most likely diagnosis',
            'Request a step-by-step walkthrough of the reasoning',
            'Ask what additional labs or imaging to order',
            'Generate practice scenarios with similar lab patterns',
          ],
          timeSaved: { without: '30-45 minutes', withAI: '5-10 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Study Session Optimization',
          prompts: [
            {
              id: 'ms-p-1-1',
              title: 'Lecture Note Transformer',
              task: 'Turn messy lecture notes into a structured study guide',
              prompt: `I am a medical student studying [topic/system - e.g., cardiac physiology].

Here are my lecture notes:
[Paste your notes]

Turn these into a structured study guide with:
1. Key concepts organized by subtopic
2. Important clinical correlations for each concept
3. High-yield facts likely to appear on board exams
4. Common misconceptions students have about this topic
5. A "rapid review" section with one-line summaries

Format it so I can review it quickly before an exam.`,
              result:
                'A clean, organized study guide you can review in 15 minutes instead of re-reading for an hour.',
              tip: 'Add your exam date and AI will prioritize the highest-yield material first.',
            },
            {
              id: 'ms-p-1-2',
              title: 'Active Recall Question Generator',
              task: 'Generate board-style practice questions from any topic',
              prompt: `Generate 15 USMLE Step 1 style practice questions on [specific topic - e.g., glomerular diseases].

Requirements:
- Mix of easy (5), medium (5), and hard (5)
- Each question should have 5 answer choices (A-E)
- Include a clinical vignette for each question
- After all questions, provide detailed explanations for each answer
- Explain why each wrong answer is wrong, not just why the right answer is right

Focus on commonly tested concepts and classic presentations.`,
              result:
                'A targeted practice set that mimics real board questions.',
              tip: 'After completing the set, ask AI to generate 5 more questions on the concepts you got wrong.',
            },
            {
              id: 'ms-p-1-3',
              title: 'Concept Explainer at Multiple Levels',
              task: 'Understand a difficult concept from basics to advanced',
              prompt: `Explain [difficult concept - e.g., the renin-angiotensin-aldosterone system] at three levels:

1. ELI5 (explain like I am five) - simple analogy
2. Medical student level - the textbook explanation with mechanisms
3. Clinical application - how this shows up in real patients and on boards

For each level, include:
- A clear explanation
- One helpful analogy or memory device
- One clinical scenario where this matters

End with the 3 most commonly tested board questions about this concept.`,
              result:
                'A layered explanation that builds understanding from simple to complex.',
              tip: 'Use the ELI5 version to check if you truly understand the concept. If you cannot explain it simply, you do not fully get it.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Clinical Case Analysis',
          prompts: [
            {
              id: 'ms-p-2-1',
              title: 'Case Presentation Simulator',
              task: 'Practice presenting a clinical case like on rounds',
              prompt: `Act as an attending physician on rounds. Present me with a clinical case involving [system/condition - e.g., a patient with chest pain].

Give me:
- Patient demographics and chief complaint
- Brief history of present illness
- Relevant past medical history and medications
- Vital signs and key physical exam findings

Then STOP and let me work through:
1. My differential diagnosis (I will list mine, then you critique it)
2. What workup I would order
3. My assessment and plan

After each of my responses, give me specific feedback:
- What I got right
- What I missed
- What a strong answer would include

Do not give away the diagnosis until I have worked through it.`,
              result:
                'A realistic case practice session with attending-level feedback.',
              tip: 'Practice 2-3 cases per week on your weakest topics. This builds the pattern recognition attendings are looking for.',
            },
            {
              id: 'ms-p-2-2',
              title: 'Differential Diagnosis Builder',
              task: 'Build a systematic differential for any presentation',
              prompt: `A patient presents with [chief complaint - e.g., acute onset severe headache].

Help me build a systematic differential diagnosis:

1. List the differential organized by:
   - Most common causes
   - Most dangerous "cannot miss" causes
   - Less common but important causes

2. For each diagnosis, give me:
   - The 2-3 key features that would point toward it
   - The one test that would confirm or rule it out
   - Red flags that make it more likely

3. Create a decision tree: "If the patient also has [X], think [Y]"

4. What is the most important next step in management?

Keep it clinically practical, not just textbook lists.`,
              result:
                'A structured approach to differential diagnosis you can internalize and use on rotations.',
              tip: 'Practice this with common chief complaints until the framework becomes automatic.',
            },
            {
              id: 'ms-p-2-3',
              title: 'Physical Exam Findings Reviewer',
              task: 'Review clinical signs and their significance',
              prompt: `I am preparing for my [clinical rotation - e.g., cardiology rotation].

Give me a comprehensive review of key physical exam findings:

1. List the 10 most important physical exam findings I need to recognize
2. For each finding:
   - What it looks like or sounds like (describe precisely)
   - What it indicates (pathophysiology connection)
   - What conditions it is associated with
   - How to differentiate it from similar findings
   - Classic board question setup involving this finding

3. Common mistakes students make during this exam
4. A quick checklist for a systematic [system] exam

Format as a reference card I can review before clinic.`,
              result:
                'A practical rotation prep guide focused on what attendings will ask about.',
              tip: 'Review this the morning before each clinic day during that rotation.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Board Exam Preparation',
          prompts: [
            {
              id: 'ms-p-3-1',
              title: 'USMLE Weak Area Analyzer',
              task: 'Create a targeted study plan for your weakest topics',
              prompt: `I am preparing for USMLE Step [1/2] and my exam is in [timeframe].

My weak areas based on practice tests:
[List your weak topics - e.g., immunology, biostatistics, renal pathology]

My strong areas:
[List topics you are confident in]

Create a focused study plan that:
1. Prioritizes my weak areas by how heavily they are tested
2. Gives me a daily study schedule for [X weeks]
3. Includes specific subtopics to focus on within each weak area
4. Suggests the best resources for each topic
5. Builds in review days for previously covered material
6. Includes 2 practice question blocks per day with specific targets

Be realistic about what can be covered. Quality over quantity.`,
              result:
                'A personalized study plan that targets exactly where you need the most improvement.',
              tip: 'Update your weak areas weekly as you improve and AI will adjust the plan.',
            },
            {
              id: 'ms-p-3-2',
              title: 'High-Yield Rapid Fire Review',
              task: 'Quick review of the most tested facts for a topic',
              prompt: `Give me a rapid-fire high-yield review for [topic - e.g., pharmacology: antibiotics].

Format:
- 30 rapid-fire facts (one line each, most testable first)
- 10 classic "buzzword to diagnosis" associations
- 5 commonly confused pairs with how to tell them apart
- 5 must-know mechanisms of action
- 3 classic board question stems I should recognize immediately

This is for last-minute review. Keep everything to one line where possible. No fluff.`,
              result:
                'A concentrated review sheet for quick pre-exam cramming.',
              tip: 'Print this out or save it to your phone for review during commutes or waiting rooms.',
            },
            {
              id: 'ms-p-3-3',
              title: 'Wrong Answer Deep Dive',
              task: 'Learn deeply from practice questions you got wrong',
              prompt: `I got this practice question wrong:

Question: [Paste the question]
My answer: [What you chose]
Correct answer: [What it should have been]

Help me learn from this mistake:
1. Why is the correct answer right? Explain the underlying concept.
2. Why is my answer wrong? What was the flaw in my reasoning?
3. What should have tipped me off to the correct answer?
4. What is the general rule or principle I should remember?
5. Give me a memory device or one-liner to lock this in.
6. Generate 3 similar questions that test the same concept from different angles.

I want to never get this type of question wrong again.`,
              result:
                'A deep understanding of why you were wrong and how to get it right next time.',
              tip: 'Keep a running document of your "wrong answer deep dives" and review it weekly.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Research Paper Summarization',
          prompts: [
            {
              id: 'ms-p-4-1',
              title: 'Paper Summary for Journal Club',
              task: 'Summarize a research paper for journal club presentation',
              prompt: `Summarize the following research paper for a medical student journal club:

[Paste the paper abstract and key sections, or the full text]

Give me:
1. One-paragraph plain language summary (what did they do and find?)
2. Study design and methodology (strengths and weaknesses)
3. Key results with the most important numbers
4. Clinical significance - does this change practice?
5. Limitations the authors mentioned and ones they did not
6. 3 discussion questions to bring to journal club
7. How this connects to what we already know about this topic

Keep it concise. I need to present this in 10 minutes.`,
              result:
                'A presentation-ready summary that shows you actually understood the paper.',
              tip: 'Use Perplexity to find 2-3 related papers that support or contradict the findings.',
            },
            {
              id: 'ms-p-4-2',
              title: 'Statistics Decoder',
              task: 'Understand the statistics in a research paper',
              prompt: `I am reading a research paper and I do not fully understand the statistics.

Here are the statistical methods and results sections:
[Paste the relevant sections]

Explain to me:
1. What statistical tests were used and why they were appropriate
2. What the key numbers mean in plain language (p-values, confidence intervals, odds ratios, etc.)
3. Whether the results are clinically significant, not just statistically significant
4. Any red flags in how the statistics were done or reported
5. What I should say if asked "are these results convincing?" at journal club

Explain it like I understand basic stats but am not a statistician.`,
              result:
                'A clear explanation of what the numbers actually mean for clinical practice.',
              tip: 'This is great for learning biostatistics too - ask AI to quiz you on the statistical concepts afterward.',
            },
            {
              id: 'ms-p-4-3',
              title: 'Research Topic Deep Dive',
              task: 'Quickly get up to speed on an unfamiliar research area',
              prompt: `I need to get up to speed on [research topic - e.g., CAR-T cell therapy in hematologic malignancies] for [reason - class, rotation, research project].

Give me:
1. Background - what is this and why does it matter? (3-4 paragraphs)
2. Timeline of key developments (5-7 milestones)
3. Current state of the field - what works, what does not
4. Major ongoing debates or controversies
5. Key papers I should read (list 5 landmark studies with one-line summaries)
6. Where the field is heading in the next 3-5 years
7. A glossary of specialized terms I will encounter

I have 30 minutes to become conversant in this topic.`,
              result:
                'A comprehensive but efficient briefing on any research area.',
              tip: 'Follow up with Perplexity to verify the key papers and find the most recent publications.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Patient Note Practice',
          prompts: [
            {
              id: 'ms-p-5-1',
              title: 'SOAP Note Generator and Grader',
              task: 'Practice writing SOAP notes with expert feedback',
              prompt: `Give me a patient encounter scenario for a [setting - e.g., internal medicine outpatient visit].

Include:
- Patient demographics and chief complaint
- History of present illness details
- Past medical history, medications, allergies
- Social and family history
- Review of systems
- Vital signs and physical exam findings
- Relevant lab or imaging results

After providing the scenario, let me write my SOAP note. Then grade it on:
1. Subjective - did I capture the relevant history?
2. Objective - did I organize the exam and data correctly?
3. Assessment - is my differential reasonable and prioritized?
4. Plan - is my plan specific and addresses each problem?
5. Overall - conciseness, medical language, and clinical reasoning

Score each section out of 10 and give specific improvement suggestions.`,
              result:
                'Real practice writing clinical notes with detailed feedback.',
              tip: 'Do this 2-3 times per week during clinical years to build the habit before rotations.',
            },
            {
              id: 'ms-p-5-2',
              title: 'Admission History and Physical Template',
              task: 'Practice writing an H&P for a new admission',
              prompt: `Act as a senior resident reviewing my admission H&P.

Here is the clinical scenario:
[Describe the patient or paste case details]

I will write my full History and Physical, including:
- Chief complaint
- History of present illness
- Past medical/surgical history
- Medications and allergies
- Social and family history
- Review of systems
- Physical examination
- Assessment with differential diagnosis
- Plan organized by problem

Review my H&P and give me feedback on:
1. Completeness - what did I miss?
2. Organization - is it structured correctly?
3. Relevance - did I include unnecessary information?
4. Clinical reasoning - does my assessment make sense?
5. Plan quality - is it specific and actionable?

Show me what an excellent H&P would look like for this case.`,
              result:
                'Side-by-side comparison of your H&P against an ideal version.',
              tip: 'Focus on one section per session if the whole H&P feels overwhelming.',
            },
            {
              id: 'ms-p-5-3',
              title: 'Progress Note Efficiency Trainer',
              task: 'Learn to write concise daily progress notes',
              prompt: `I am on my [rotation - e.g., surgery] rotation and need to write daily progress notes.

Here is today's patient update:
[Paste or describe what happened overnight, vitals, exam changes, lab results, and plan changes]

Help me write a concise progress note that:
1. Follows the standard format for [specialty] progress notes
2. Includes only relevant overnight events
3. Updates the assessment based on new data
4. Has a specific, actionable plan for today
5. Is under [X] lines - brevity matters

Then show me the difference between:
- A bloated, copy-paste note (what not to do)
- A focused, useful note (what to aim for)

Give me 3 rules for writing better progress notes.`,
              result:
                'A practical template and principles for writing notes that attendings actually want to read.',
              tip: 'Save your best notes as templates. Modify instead of starting from scratch each time.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Lab Result Interpretation',
          prompts: [
            {
              id: 'ms-p-6-1',
              title: 'Lab Panel Pattern Recognition',
              task: 'Identify the clinical pattern from a set of lab results',
              prompt: `Here is a set of lab results for a patient:

[Paste lab values - e.g., BMP, CBC, LFTs, urinalysis, ABG, etc.]

Patient context: [Age, sex, chief complaint if relevant]

Analyze these labs:
1. Flag all abnormal values and categorize as mildly, moderately, or severely abnormal
2. Identify the overall pattern - what diagnosis or condition do these labs suggest?
3. Walk me through your reasoning step by step
4. What additional labs would you order to confirm?
5. What is the most important value to act on immediately?
6. Create a one-line summary I could present on rounds

Teach me to see the pattern, not just the individual numbers.`,
              result:
                'A systematic approach to reading labs that builds pattern recognition.',
              tip: 'Practice with real lab sets from case studies. The goal is to recognize patterns instantly on rounds.',
            },
            {
              id: 'ms-p-6-2',
              title: 'ABG Interpretation Trainer',
              task: 'Master arterial blood gas interpretation',
              prompt: `I need to master ABG interpretation. Give me 5 ABG practice scenarios.

For each scenario:
- Patient context (one sentence)
- ABG values: pH, pCO2, HCO3, pO2
- Any additional labs (anion gap, lactate, etc.)

Let me work through each one using this framework:
1. Is the pH acidotic or alkalotic?
2. Is the primary disorder respiratory or metabolic?
3. Is there appropriate compensation?
4. If metabolic acidosis - what is the anion gap?
5. Are there mixed disorders?

After I answer, tell me:
- If I got it right
- What I missed
- The clinical scenario this represents
- What treatment would address the underlying cause

Start with easier cases and increase difficulty.`,
              result:
                'Systematic ABG interpretation practice with clinical context.',
              tip: 'ABGs are tested heavily on boards and asked about daily on medicine rotations. Do this drill weekly.',
            },
            {
              id: 'ms-p-6-3',
              title: 'Lab Values Clinical Correlator',
              task: 'Connect lab abnormalities to clinical presentations',
              prompt: `Create a clinical correlation exercise for [lab panel - e.g., liver function tests].

For each value in the panel:
1. Normal range and units
2. What an elevated value means (top 3 causes)
3. What a decreased value means (top 3 causes)
4. Classic patterns:
   - Which values move together and what that pattern means
   - Which combinations are "classic" for specific diagnoses
5. One clinical vignette where this lab value is the key to the diagnosis

Then give me 5 mini-cases where I have to identify the diagnosis based on lab patterns alone.

End with a quick reference card of the most high-yield lab correlations for boards.`,
              result:
                'A comprehensive lab review that connects numbers to clinical meaning.',
              tip: 'Make Anki cards from the classic patterns. These show up repeatedly on boards.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let us do the math on what your time is actually worth as a medical student.',
      timeTable: [
        {
          task: 'Study session prep and review',
          without: '3-4 hours/session',
          withAI: '1-1.5 hours',
          saved: '2 hrs/session',
        },
        {
          task: 'Case analysis practice',
          without: '2 hours/case',
          withAI: '30-45 minutes',
          saved: '1.25 hrs',
        },
        {
          task: 'Board exam question review',
          without: '6-8 hours/week',
          withAI: '3-4 hours/week',
          saved: '3-4 hrs/week',
        },
        {
          task: 'Research paper reading',
          without: '2-3 hours/paper',
          withAI: '20-30 minutes',
          saved: '2 hrs/paper',
        },
        {
          task: 'Clinical note writing',
          without: '45-60 minutes',
          withAI: '15-20 minutes',
          saved: '30 min/note',
        },
        {
          task: 'Lab interpretation study',
          without: '30-45 minutes',
          withAI: '5-10 minutes',
          saved: '25 min',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '10-15 hrs/week',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Medical school has the same amount of material it had 10 years ago - but the students who are using AI are covering it in half the time. Same brain, same curriculum, same exams. The difference is efficiency.',
            'The gap is not intelligence. It is method.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not go to medical school to spend 4 hours decoding a research paper or 45 minutes writing a note that nobody reads. You went to become a great doctor. AI gives you back the hours to actually learn medicine - deeply, not just desperately.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One study session. That is enough to feel the difference.',
    },

    ch7: {
      intro:
        'The plan is simple. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up',
          duration: '15 min',
          items: [
            { id: 'ms-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'ms-1-2', label: 'Create a free Perplexity account' },
            { id: 'ms-1-3', label: 'Bookmark this page for quick access' },
          ],
        },
        {
          day: 2,
          title: 'First Study Session',
          duration: '20 min',
          items: [
            {
              id: 'ms-2-1',
              label: 'Pick a topic you are currently studying and run the Lecture Note Transformer prompt',
            },
            {
              id: 'ms-2-2',
              label: 'Generate 15 practice questions on that topic',
            },
            {
              id: 'ms-2-3',
              label: 'Notice how much faster active recall is than rereading',
            },
          ],
        },
        {
          day: 3,
          title: 'Practice a Case',
          duration: '25 min',
          items: [
            {
              id: 'ms-3-1',
              label: 'Run the Case Presentation Simulator for a topic from your current block',
            },
            {
              id: 'ms-3-2',
              label: 'Work through the full differential and plan without peeking',
            },
          ],
        },
        {
          day: 4,
          title: 'Board Prep',
          duration: '20 min',
          items: [
            {
              id: 'ms-4-1',
              label: 'Identify your 3 weakest topics from recent practice tests',
            },
            {
              id: 'ms-4-2',
              label: 'Run the High-Yield Rapid Fire Review for your weakest topic',
            },
            {
              id: 'ms-4-3',
              label: 'Save the output as a quick-review reference sheet',
            },
          ],
        },
        {
          day: 5,
          title: 'Research and Notes',
          duration: '25 min',
          items: [
            {
              id: 'ms-5-1',
              label: 'Summarize a research paper using the Paper Summary prompt',
            },
            {
              id: 'ms-5-2',
              label: 'Practice writing a SOAP note and get AI feedback',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore',
          duration: '15 min',
          items: [
            {
              id: 'ms-6-1',
              label: 'Try any system or prompt you have not used yet',
            },
            {
              id: 'ms-6-2',
              label: 'Run the ABG Interpretation Trainer or Lab Panel exercise',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect',
          duration: '10 min',
          items: [
            {
              id: 'ms-7-1',
              label: 'What saved you the most time this week?',
            },
            {
              id: 'ms-7-2',
              label: 'Build AI into your daily study routine going forward',
            },
            {
              id: 'ms-7-3',
              label: 'Share this page with a classmate who is drowning in material',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
