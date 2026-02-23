import type { WorkbookData } from './types'

export const teachersData = {
  professionId: 'teachers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Teachers',
  heroDescription:
    'Everything you need to start using AI in your classroom - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Sunday night and you are sitting at the kitchen table with your laptop, lesson planning for the week. Monday needs a new lesson on fractions because half the class did not get it last Thursday. Tuesday needs differentiated materials because you have students reading at three different levels. Wednesday is the quiz you still need to write. And you owe four parents email responses that have been sitting in your inbox since Thursday.',
        'Your rubric for the persuasive essay unit needs updating because the old one did not clearly distinguish between a B and a C. You have a stack of 28 journals that need written feedback - meaningful feedback, not just "good job" - and report card comments are due in two weeks. The IEP meeting on Tuesday requires modified materials you have not had time to create.',
        'You became a teacher because you love watching students learn. You live for that moment when a concept clicks and a student\'s face lights up. But the job has become more about planning, grading, emailing, and documenting than actually teaching. The creative, human work of education gets squeezed into whatever time is left after the administrative mountain.',
      ],
      highlight:
        'What if AI could handle the first draft of your lesson plans, generate your quizzes, and write your parent emails - so you could spend your time where it matters most: with your students?',
      closingParagraph:
        'Not replacing your teaching instincts. Not doing your job for you. Just eliminating the 10-15 hours of planning, grading, and administrative work that steals your evenings and weekends.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not a teacher. It does not know your students, their quirks, their home situations, or what makes them tick. It cannot read the room when a lesson is falling flat. It will not replace the relationship you build with a student who needs someone to believe in them. And it should never be used to generate anything you would not review carefully before giving to students or parents.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most helpful teaching assistant you have ever worked with. One who has read every textbook, knows every state standard, and can generate materials at any reading level. It never calls in sick. It never complains about making copies. And it produces a first draft of almost anything in 30 seconds.',
            'Need a lesson plan aligned to a specific standard? Done in 2 minutes. Need that same content adapted for three different reading levels? 3 minutes. Need a 20-question quiz with an answer key? 1 minute. Need a parent email that is professional but warm? 30 seconds.',
            'The essential rule: AI gives you the starting point. You bring the knowledge of your students, your teaching style, and your professional judgment. Every AI output needs your review and your personal touch before it reaches a student or parent.',
          ],
        },
        {
          heading: 'Why teachers benefit enormously',
          paragraphs: [
            'Teaching is one of the most planning-intensive professions that exists. Every lesson, every assessment, every communication needs to be crafted carefully. AI does not change what you do - it changes how fast you can do it. The lesson plan that took 45 minutes takes 10. The parent email that took 20 minutes takes 3.',
            'The teachers who adopt AI are not working less - they are working better. They are spending less time at their kitchen table on Sunday nights and more time on the creative, relational work that drew them to teaching in the first place.',
          ],
        },
      ],
      keyInsight:
        'Your teaching expertise + AI\'s speed = better materials, faster. You know your students. AI eliminates the hours of production work between your teaching idea and the finished lesson, quiz, or email.',
    },

    ch3: {
      intro: 'You do not need expensive software. These five free and low-cost tools cover what teachers need from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your lesson planning and content creator',
          description:
            'Lesson plans, quiz generation, differentiated materials, rubrics, parent emails, and student feedback writing',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for everything',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your thoughtful writing partner',
          description:
            'Detailed rubrics, nuanced student feedback, complex lesson narratives, IEP-related materials, and careful content adaptation',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for nuanced, detailed content',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your visual classroom designer',
          description:
            'Worksheets, presentation slides, infographics, classroom posters, interactive materials, and visual aids',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Makes everything look professional',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Background research on topics, finding primary sources for lessons, current events for classroom discussion, and fact-checking',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for finding source-backed information',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your classroom organizer',
          description:
            'Curriculum mapping, unit planning, assignment tracking, parent communication logs, and resource libraries',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize your entire classroom in one place',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude - they handle 80% of what you need. Add Canva when you want polished visual materials. Everything else can wait until you are comfortable.',
    },

    ch4: {
      intro:
        'Here is where AI fits into your actual teaching workflow. Each system replaces hours of planning, creating, and grading time. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Lesson Plan Creation',
          before:
            'You sit down to plan a lesson. You check the standards, think about what worked last year, browse Pinterest or Teachers Pay Teachers for ideas, write the objectives, outline the activities, create the materials, and hope it all fits into 45 minutes. One solid lesson plan takes 30-60 minutes. A full week of planning takes your entire Sunday.',
          after:
            'You tell AI the standard, the grade level, and what you want students to learn. It generates a complete lesson plan with objectives, activities, materials list, timing, and assessment in 2 minutes. You customize it for your class and your teaching style. Five lesson plans in the time it used to take to write one.',
          flow: [
            'Specify the standard, grade level, and learning objective',
            'AI generates a complete lesson plan with activities and timing',
            'Review and adapt for your specific students and teaching style',
            'AI creates supporting materials (worksheets, discussion questions)',
            'Save to your lesson plan library for future use',
          ],
          timeSaved: { without: '30-60 min/lesson', withAI: '10 min/lesson' },
        },
        {
          id: 2,
          name: 'Assessment and Rubric Design',
          before:
            'You write quiz questions one at a time, trying to balance difficulty levels and cover the key concepts. Building a rubric means defining performance levels for every criterion, writing descriptors that distinguish between scores, and making sure it actually measures what you taught. A good rubric takes an hour.',
          after:
            'AI generates quizzes aligned to your standards with the right difficulty mix. It builds rubrics with clear, specific descriptors for every performance level. You review, adjust the difficulty, and ensure the assessment matches what you actually taught. Quality assessments in a fraction of the time.',
          flow: [
            'Specify the content, standards, and assessment type',
            'AI generates questions, answer keys, and scoring rubrics',
            'Review for alignment with what you actually taught',
            'Adjust difficulty and add your own questions',
            'Generate multiple versions for different class periods if needed',
          ],
          timeSaved: { without: '1-2 hours/assessment', withAI: '15-20 minutes' },
        },
        {
          id: 3,
          name: 'Parent and Guardian Communication',
          before:
            'Every parent email requires careful wording. Positive updates need to feel genuine. Concern emails need to be honest but diplomatic. Conference follow-ups need specific action items. You draft, re-read, edit, and second-guess every email. Five parent emails can take an entire prep period.',
          after:
            'AI drafts parent emails in the right tone - warm for good news, professional and sensitive for concerns, structured for conference follow-ups. You review, add the personal details only you know, and send. Five emails in 15 minutes instead of an hour.',
          flow: [
            'Describe the situation and the message you need to convey',
            'AI drafts the email in the appropriate tone',
            'Add personal details about the student',
            'Review for accuracy and sensitivity',
            'Send with confidence that the tone is right',
          ],
          timeSaved: { without: '15-20 min/email', withAI: '3-5 min/email' },
        },
        {
          id: 4,
          name: 'Differentiated Instruction Materials',
          before:
            'You have one lesson but students at three reading levels, two with IEPs, and one English language learner. Creating modified materials for each group means rewriting the same content multiple times with different vocabulary, scaffolding, and support structures. Most weeks, differentiation gets cut because there is not enough time.',
          after:
            'AI takes your lesson content and generates versions at different reading levels, with built-in scaffolding, visual supports, and modified assessments. True differentiation becomes practical instead of aspirational. Every student gets materials that meet them where they are.',
          flow: [
            'Provide the original lesson content and student needs',
            'AI generates versions for each instructional level',
            'Review each version for appropriateness',
            'AI adds scaffolding, visual supports, and sentence starters as needed',
            'Print or distribute the right version to each student group',
          ],
          timeSaved: { without: '45-90 min/lesson', withAI: '10-15 minutes' },
        },
        {
          id: 5,
          name: 'Quiz and Test Generation',
          before:
            'You need a 20-question quiz by Friday. Writing each question takes a few minutes. You need a mix of question types - multiple choice, short answer, matching. The answer key needs to be accurate. You want to avoid questions that are too easy, too tricky, or ambiguous. The whole process takes 1-2 hours.',
          after:
            'AI generates quizzes with the exact mix of question types you want, aligned to the specific content you taught. It creates the answer key automatically. You review for accuracy, adjust difficulty, and you are done. A quiz that took 90 minutes takes 10.',
          flow: [
            'Specify the content, question types, difficulty level, and number of questions',
            'AI generates the quiz with an answer key',
            'Review every question for accuracy and clarity',
            'Adjust difficulty or replace questions as needed',
            'Generate a second version for make-up quizzes',
          ],
          timeSaved: { without: '1-2 hours/quiz', withAI: '10-15 minutes' },
        },
        {
          id: 6,
          name: 'Student Feedback Writing',
          before:
            'You have 28 essays to return with feedback. Meaningful feedback means reading each one carefully, identifying strengths and areas for growth, and writing comments that are specific enough to be actionable. At 10 minutes per essay, that is nearly 5 hours. So many papers get a grade and a "nice work" instead of the feedback students deserve.',
          after:
            'AI helps you generate specific, constructive feedback based on the rubric criteria and student performance. You review each comment, add your personal observations, and every student gets the detailed feedback that helps them grow. Better feedback in a fraction of the time.',
          flow: [
            'Define the rubric criteria and performance expectations',
            'For each student, note the key strengths and areas for growth',
            'AI generates specific, constructive feedback comments',
            'Add your personal observations and encouragement',
            'Deliver feedback that is specific, actionable, and encouraging',
          ],
          timeSaved: { without: '8-10 min/student', withAI: '3-4 min/student' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every teaching task. Click to reveal, copy, and paste. Fill in the brackets with your specifics. Always review AI output before using it with students.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Lesson Planning',
          prompts: [
            {
              id: 'tc-p-1-1',
              title: 'Standards-Aligned Lesson Plan',
              task: 'Create a complete lesson plan aligned to a specific standard',
              prompt: `Create a detailed lesson plan for the following.

Grade level: [grade]
Subject: [subject]
Standard: [paste the specific standard - e.g., CCSS.MATH.CONTENT.4.NF.A.1 or your state standard]
Topic: [specific topic within the standard]
Class period length: [minutes]
Number of students: [approximate]
Prior knowledge: [what students already know about this topic]

Create a lesson plan with:

1. Learning Objective (student-facing, "I can" statement)
2. Materials Needed (realistic - things a teacher actually has)
3. Lesson Sequence with timing:
   - Warm-up/Hook ([X] minutes) - engaging opening that connects to prior knowledge
   - Direct instruction ([X] minutes) - teacher-led explanation with examples
   - Guided practice ([X] minutes) - students practice with support
   - Independent practice ([X] minutes) - students apply learning on their own
   - Closure ([X] minutes) - summarize learning, exit ticket
4. Key Questions to Ask (5 questions at different Bloom's levels)
5. Formative Assessment - how to check understanding during the lesson
6. Differentiation:
   - Support for struggling learners
   - Extension for advanced learners
   - ELL accommodations
7. Common Misconceptions to watch for
8. Homework or follow-up assignment (optional)

Keep activities practical and engaging. No activities that require expensive materials or advanced technology. Think real classroom, real students.`,
              result: 'A complete, standards-aligned lesson plan ready to teach.',
              tip: 'Generate plans for the whole week at once by running this prompt five times. Customize each one for your class and your students will never know you did not spend hours planning.',
            },
            {
              id: 'tc-p-1-2',
              title: 'Engaging Lesson Hook Generator',
              task: 'Create engaging lesson openers and hooks',
              prompt: `Generate 5 engaging lesson hooks/openers for the following lesson.

Grade level: [grade]
Subject: [subject]
Topic: [specific topic]
Learning objective: [what students should learn]
Student interests: [what this age group cares about - e.g., gaming, sports, social media, animals]

For each hook, provide:
1. The hook activity (detailed enough to execute - 3-5 minutes)
2. How it connects to the lesson topic
3. Why it is engaging for this age group
4. Materials or setup needed
5. Transition sentence to move into the main lesson

Types to include:
- One real-world connection (why this topic matters in their life)
- One mystery or puzzle (make them curious)
- One visual or multimedia hook (something to look at or watch)
- One movement or interactive hook (get them out of their seats)
- One storytelling hook (a short narrative that sets up the concept)

Each hook should take no more than 5 minutes and require minimal setup. I need to be able to use these tomorrow with no special materials.`,
              result: 'Five engaging, ready-to-use lesson openers.',
              tip: 'Save hooks that work well. Build a library organized by topic. A great hook is reusable year after year.',
            },
            {
              id: 'tc-p-1-3',
              title: 'Unit Plan Overview',
              task: 'Design a multi-week unit plan with lesson sequence',
              prompt: `Design a [X]-week unit plan for the following.

Grade level: [grade]
Subject: [subject]
Unit topic: [the big topic or theme]
Standards covered: [list all standards this unit addresses]
Total number of class periods: [number]
Class period length: [minutes]

Create a unit plan with:

1. Unit Overview:
   - Essential question(s) students will explore
   - Enduring understandings (big takeaways)
   - Key vocabulary (10-15 terms)

2. Lesson Sequence (one row per class period):
   - Day number
   - Lesson focus
   - Activity type (direct instruction, lab, discussion, project work, assessment)
   - Brief activity description
   - Standard addressed
   - Materials needed

3. Assessment Plan:
   - Formative assessments (where and how during the unit)
   - Summative assessment description (what format, what it covers)
   - Rubric overview for the summative assessment

4. Differentiation Strategy:
   - How the unit supports struggling learners throughout
   - How the unit challenges advanced learners throughout
   - Key ELL support strategies for the unit

5. Pacing Notes:
   - Which days have flexibility (can be extended or shortened)
   - Natural breakpoints if you fall behind
   - "Must teach" vs. "nice to have" lessons

Keep it realistic. This should feel like a plan you could actually follow, not an idealized version of teaching.`,
              result: 'A complete unit plan with daily lesson sequence and assessment strategy.',
              tip: 'Use the unit plan as a backbone, but stay flexible. Some lessons will take longer than planned - the pacing notes help you adjust without losing the essential content.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Assessments and Rubrics',
          prompts: [
            {
              id: 'tc-p-2-1',
              title: 'Rubric Creator',
              task: 'Create a detailed assessment rubric',
              prompt: `Create a detailed rubric for the following assignment.

Assignment: [describe the assignment - e.g., persuasive essay, science lab report, historical analysis, book report, oral presentation]
Grade level: [grade]
Subject: [subject]
Standards assessed: [which standards this measures]
Point scale: [e.g., 4-point, 5-point, or percentage-based]

Create a rubric with:

1. Criteria (4-6 assessment categories relevant to this assignment):
   For each criterion:
   - Criterion name and weight (percentage of total grade)
   - Description of what this criterion measures
   - Performance level descriptors:
     - Exceeds expectations [highest score]: specific, observable behaviors
     - Meets expectations [target score]: specific, observable behaviors
     - Approaching expectations: specific, observable behaviors
     - Below expectations [lowest score]: specific, observable behaviors

2. Requirements:
   - Descriptors should use student-friendly language
   - Each level must be clearly distinguishable from the next
   - Include specific examples where helpful (e.g., "uses 3+ pieces of evidence")
   - Avoid vague words like "good" or "adequate" - use measurable descriptors

3. Also provide:
   - A student-facing version (simplified language, formatted for handout)
   - 3 tips for students on how to earn the top score
   - A brief teacher scoring guide with common edge cases

The rubric should make grading consistent and fair, and help students understand exactly what success looks like.`,
              result: 'A detailed, clear rubric with both teacher and student versions.',
              tip: 'Share the rubric with students before they start the assignment. When students know exactly what you are looking for, the quality of their work goes up.',
            },
            {
              id: 'tc-p-2-2',
              title: 'Assessment Item Generator',
              task: 'Create assessment questions at multiple difficulty levels',
              prompt: `Generate assessment items for the following content.

Grade level: [grade]
Subject: [subject]
Topic/Standard: [specific content being assessed]
Content covered: [list the key concepts, skills, or knowledge to assess]

Generate:

Multiple Choice (8 questions):
- 2 recall/knowledge level (remembering facts)
- 3 application level (using knowledge in a new context)
- 2 analysis level (breaking down or comparing)
- 1 evaluation level (making judgments or arguments)
- For each: the question, 4 answer choices, correct answer, and common misconception addressed by each distractor

Short Answer (4 questions):
- Questions that require explanation or application
- Include a model answer for each
- Include a scoring guide (what earns full credit, partial credit, no credit)

Extended Response (2 questions):
- Questions requiring multi-step reasoning or writing
- Include a sample exemplary response
- Include scoring criteria (3-4 key elements to look for)

Matching Section (1 set of 6 items):
- Terms or concepts matched to definitions or examples

For all questions:
- Avoid trick questions or unnecessarily confusing language
- Use age-appropriate vocabulary
- Ensure questions are culturally inclusive
- Provide an answer key with explanations`,
              result: 'A complete assessment bank with multiple question types and an answer key.',
              tip: 'Generate more questions than you need and select the best ones. Save extras for review activities, homework, or make-up assessments.',
            },
            {
              id: 'tc-p-2-3',
              title: 'Exit Ticket and Formative Assessment Pack',
              task: 'Create quick formative assessments for daily use',
              prompt: `Create a set of formative assessments for the following unit.

Grade level: [grade]
Subject: [subject]
Unit topic: [unit name or topic]
Number of days in the unit: [number]
Key concepts taught each day:
[Day 1: concept]
[Day 2: concept]
[Day 3: concept]
[Continue for each day]

For each day, create:

1. Exit Ticket (3-5 minutes):
   - 2-3 quick questions that check understanding of today's content
   - One should be recall, one should be application
   - Include answer key
   - Scoring: quick check (got it / getting there / not yet)

2. Quick Check Options (choose-one alternatives):
   - Think-Pair-Share question (with expected student responses)
   - Thumbs up/down statement (true/false about the concept)
   - One-sentence summary prompt

3. For the mid-unit point, create:
   - A 5-question mini-quiz covering concepts taught so far
   - Answer key
   - Re-teaching suggestions for each question students commonly miss

Requirements:
- Keep exit tickets on one half-sheet of paper (printable)
- Questions should take students 3-5 minutes maximum
- Include a mix of formats to keep things interesting
- Make them quick to grade (1-2 minutes per student)

These should be easy to implement and fast to assess. I need data, not more grading.`,
              result: 'A complete set of daily formative assessments for the entire unit.',
              tip: 'Use exit ticket data to adjust the next day\'s lesson. If 60% of students miss a question, re-teach that concept before moving on.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Parent Communication',
          prompts: [
            {
              id: 'tc-p-3-1',
              title: 'Parent Conference Email',
              task: 'Draft a parent email for conference scheduling or follow-up',
              prompt: `Draft a parent email for the following situation.

Purpose: [conference request / conference follow-up / progress update / concern / positive update]
Student grade level: [grade]
Subject: [if applicable]
Parent name: [name]
Student name: [name]

Situation details:
[Describe the specific situation - what is happening, what prompted this email]

Positive observations about the student:
[List 1-2 genuine strengths or positive observations]

Concern or topic to address (if applicable):
[Describe the concern specifically]

Action items or next steps:
[What you want to happen after this email]

Write the email with:
1. Warm, professional greeting
2. Lead with something positive about the student
3. Address the main topic clearly and specifically
4. Use concrete examples (not vague statements like "needs to try harder")
5. Suggest specific next steps or action items
6. Offer collaboration ("Here is how we can work together on this")
7. Invitation for response or meeting
8. Warm closing

Tone: [Warm and encouraging / Professionally concerned / Celebratory / Urgent but calm]
Length: Under 250 words. Parents do not read long emails.

Never blame the student or parent. Frame concerns as opportunities for growth. Use "we" language - we are a team supporting this student.`,
              result: 'A professional, warm parent email ready to personalize and send.',
              tip: 'Keep a folder of parent email templates organized by type. Personalize each one - parents can tell when an email is generic.',
            },
            {
              id: 'tc-p-3-2',
              title: 'Classroom Newsletter',
              task: 'Create a weekly or monthly classroom newsletter for parents',
              prompt: `Create a classroom newsletter for parents.

Grade level: [grade]
Class/Teacher: [your name]
Newsletter period: [week of / month of]
School name: [name]

Content to include:
- What we learned this week/month: [list topics by subject]
- Upcoming events or dates: [list]
- Homework or project reminders: [list]
- Classroom celebrations or achievements: [describe]
- Volunteer or supply needs: [if any]
- Tips for parents to support learning at home: [subject area]

Create a newsletter with:
1. Welcoming header with class name and date
2. "What We Are Learning" section (brief, exciting descriptions - make learning sound fun)
3. "Important Dates" section (clear, scannable list)
4. "How You Can Help at Home" section (2-3 specific, easy activities parents can do)
5. "Classroom Spotlight" section (celebrate a class achievement - not individual students)
6. Reminders section
7. Your contact information and best way to reach you

Requirements:
- Positive, enthusiastic tone
- Under one page (parents will not read more)
- Jargon-free (no education acronyms like PBL, SEL, etc. without explanation)
- Include a fun fact or joke appropriate for the grade level
- Bilingual-friendly (simple language that translates well)

This should make parents feel informed, connected, and glad their child is in your class.`,
              result: 'A professional, warm classroom newsletter ready to customize and send.',
              tip: 'Send it on the same day each week so parents expect it. Consistency builds trust and keeps families engaged.',
            },
            {
              id: 'tc-p-3-3',
              title: 'Report Card Comment Generator',
              task: 'Generate personalized report card comments for students',
              prompt: `Generate report card comments for the following student.

Student first name: [name]
Grade level: [grade]
Reporting period: [quarter/trimester/semester]
Use pronouns: [he/him, she/her, they/them]

Academic performance by subject:
[Subject 1]: [grade or performance level] - [brief note on strengths and areas for growth]
[Subject 2]: [grade or performance level] - [brief note]
[Subject 3]: [grade or performance level] - [brief note]

Behavioral/Social observations:
[Describe the student's effort, participation, social interactions, and behavior]

Specific strengths:
[List 2-3 specific things this student does well]

Areas for growth:
[List 1-2 specific areas where the student needs to improve]

Generate report card comments that:
1. Open with a genuine positive observation (specific, not generic)
2. Address each academic area briefly (1-2 sentences per subject)
3. Acknowledge effort and growth, not just achievement
4. Address areas for growth constructively (frame as "next steps" not "problems")
5. Include one specific recommendation for how the student can improve
6. Close with an encouraging statement

Requirements:
- 150-200 words total (fit in the report card comment box)
- Use the student's name at least twice
- Be specific - avoid phrases like "doing well" or "needs improvement" without context
- Balance honesty with encouragement
- Avoid comparing to other students
- Tone: caring, professional, hopeful

Generate 2 versions so I can choose the one that fits best.`,
              result: 'Two personalized report card comment options ready to finalize.',
              tip: 'Generate comments for your entire class in one session. It goes much faster in batches. Always add at least one personal detail that only you would know about the student.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Differentiated Instruction',
          prompts: [
            {
              id: 'tc-p-4-1',
              title: 'Tiered Assignment Creator',
              task: 'Create the same assignment at multiple difficulty levels',
              prompt: `Create a tiered assignment at three levels for the following content.

Grade level: [grade]
Subject: [subject]
Topic/Standard: [what the assignment covers]
Assignment type: [worksheet, writing prompt, project, problem set]
Original assignment description: [describe or paste the original assignment]

Create three versions:

Tier 1 - Approaching Grade Level:
- Simplified vocabulary and sentence structure
- Additional scaffolding (sentence starters, word banks, graphic organizers)
- Fewer items but same core concepts
- Built-in examples and models
- Visual supports where helpful
- Modified expectations (what earns full credit at this tier)

Tier 2 - At Grade Level:
- Standard grade-level vocabulary and complexity
- Some scaffolding available but not required
- Full number of items
- Clear instructions with examples
- Standard expectations

Tier 3 - Above Grade Level:
- Advanced vocabulary and increased complexity
- Open-ended elements that require deeper thinking
- Extension questions or challenge problems
- Connections to other concepts or real-world applications
- Higher-order thinking requirements (analysis, evaluation, creation)

For all tiers:
- The core learning objective stays the same
- The format should look similar (students should not feel singled out)
- Include answer keys or exemplars for each tier
- Note which tier is appropriate for ELL students with modifications

All three versions should be printable and ready to use.`,
              result: 'Three differentiated versions of the same assignment.',
              tip: 'Label the tiers with colors or shapes instead of numbers so students do not feel ranked. Same learning goal, different pathways.',
            },
            {
              id: 'tc-p-4-2',
              title: 'Reading Level Adapter',
              task: 'Adapt a text passage to multiple reading levels',
              prompt: `Adapt the following text to three different reading levels while preserving the key content.

Original text:
[Paste the text passage]

Subject: [subject area]
Key concepts that must be preserved: [list the essential information]
Grade level range: [e.g., 3rd-5th grade classroom]

Create three versions:

Below Grade Level (Lexile [target range]):
- Shorter sentences (under 12 words average)
- Common, high-frequency vocabulary
- Simple sentence structures (subject-verb-object)
- Key vocabulary bolded with brief definitions in parentheses
- Break long paragraphs into shorter ones
- Add a "Key Words" box at the top
- Include 2 comprehension questions at the end

At Grade Level (Lexile [target range]):
- Standard sentence length and vocabulary for the grade
- Content presented clearly with appropriate complexity
- Key vocabulary bolded
- Include 3 comprehension questions at the end

Above Grade Level (Lexile [target range]):
- More sophisticated vocabulary and sentence structures
- Additional context and depth
- Connections to broader concepts
- Include 3 higher-order comprehension questions (analysis/evaluation)

For all versions:
- The core facts and information must be identical
- Preserve the same paragraph structure where possible
- Include the same headings or section breaks
- Make them look similar when printed (no student should feel they got the "easy" version)`,
              result: 'Three reading-level versions of the same content.',
              tip: 'Have the different versions ready before class. Distribute without drawing attention to levels - just hand each student the right version.',
            },
            {
              id: 'tc-p-4-3',
              title: 'IEP Accommodation Material Modifier',
              task: 'Modify materials to meet IEP accommodation requirements',
              prompt: `Modify the following assignment to meet these IEP accommodations.

Original assignment:
[Paste or describe the original assignment]

Grade level: [grade]
Subject: [subject]

Required accommodations:
[List the specific IEP accommodations - e.g., reduced number of items, extended time, simplified directions, visual supports, read-aloud option, word bank provided, modified response format, graphic organizers]

Student strengths: [what this student is good at]
Student challenges: [what this student struggles with]
Student interests: [optional - for engagement]

Create a modified version that:
1. Meets every listed accommodation precisely
2. Maintains the same learning objective as the original
3. Preserves the student's dignity (looks like a regular assignment, not a "baby" version)
4. Uses the student's strengths as an entry point where possible
5. Removes barriers without removing the challenge
6. Includes any required supports (word banks, sentence frames, graphic organizers, visual cues)

Also provide:
- Teacher notes on how to present this modification naturally
- Data collection points (what to observe for IEP progress monitoring)
- How to assess whether the student met the learning objective with these modifications

The goal is access to the same content, not a different curriculum.`,
              result: 'An IEP-compliant modified assignment ready to use.',
              tip: 'Keep a file of modified materials organized by student. It saves time when creating similar modifications for future assignments.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Quiz Generation',
          prompts: [
            {
              id: 'tc-p-5-1',
              title: 'Multiple Choice Quiz Generator',
              task: 'Generate a multiple choice quiz with answer key',
              prompt: `Generate a multiple choice quiz for the following content.

Grade level: [grade]
Subject: [subject]
Topic: [specific topic being assessed]
Content covered: [list the specific concepts, facts, or skills to test]
Number of questions: [number]
Difficulty distribution: [e.g., 40% easy, 40% medium, 20% challenging]

For each question:
1. Clear, unambiguous question stem
2. Four answer choices (A, B, C, D)
3. One correct answer
4. Three plausible distractors (common misconceptions, not obviously wrong)
5. Difficulty level: Easy / Medium / Challenging

Also provide:
- Answer key with the correct answer for each question
- For each question, a brief explanation of why the correct answer is correct
- For each distractor, the misconception it represents

Formatting requirements:
- Number questions sequentially
- Bold the question stem
- Letter each answer choice
- Age-appropriate vocabulary throughout
- Avoid "all of the above" and "none of the above" (they are poor assessment practice)
- Avoid negative questions ("Which is NOT...") unless specifically testing that skill
- Ensure answer distribution is roughly even (not all answers are B)

Make this printable on a single page if possible (double-sided is acceptable for longer quizzes).`,
              result: 'A complete multiple choice quiz with answer key and explanations.',
              tip: 'Generate two versions (same content, different question order) so students sitting next to each other have different quizzes.',
            },
            {
              id: 'tc-p-5-2',
              title: 'Mixed Format Test Builder',
              task: 'Create a comprehensive test with multiple question types',
              prompt: `Create a comprehensive test for the following unit.

Grade level: [grade]
Subject: [subject]
Unit: [unit name or topic]
All content to assess: [list every key concept, skill, and standard covered in this unit]
Test length target: [time students should need - e.g., 30 minutes, 45 minutes, one class period]

Create a test with the following sections:

Section 1 - Vocabulary/Matching ([number] items):
- Key terms matched to definitions or examples
- Include 1-2 extra answer choices to prevent process of elimination

Section 2 - Multiple Choice ([number] questions):
- Mix of recall, application, and analysis questions
- Four answer choices each
- At least 2 questions that require applying knowledge to a new situation

Section 3 - Short Answer ([number] questions):
- Questions requiring 2-3 sentence responses
- Include what a complete answer should contain (for grading consistency)
- Allocate point values

Section 4 - Extended Response (1-2 questions):
- Higher-order thinking questions
- Include a rubric or scoring guide
- Suggest a time allocation for students

Provide:
- Complete answer key for all sections
- Point values for each section and question
- Total points possible
- Grading scale suggestion
- Estimated completion time per section

Format for easy printing. Include a test header with name, date, and period lines.`,
              result: 'A complete, balanced test with answer key and grading guide.',
              tip: 'Review the test for balance - make sure the point distribution matches the emphasis you placed on each topic during instruction.',
            },
            {
              id: 'tc-p-5-3',
              title: 'Review Game and Activity Creator',
              task: 'Create engaging review activities before an assessment',
              prompt: `Create review activities for the day before a test.

Grade level: [grade]
Subject: [subject]
Topics to review: [list all topics on the upcoming test]
Class period length: [minutes]
Number of students: [approximate]
Available materials: [whiteboard, paper, devices, projector - list what you have]

Create a review session plan with:

1. Quick Review Warm-Up (5 minutes):
   - A fast activity that touches on all major topics
   - Gets students in review mode

2. Game Activity (15-20 minutes):
   - A competitive or collaborative review game
   - 15-20 questions covering all test topics
   - Clear rules and scoring system
   - Works with the available materials listed above
   - Engaging for this age group

3. Practice Problems Station Rotation (15 minutes):
   - 3-4 stations, each covering a different topic area
   - 2-3 problems per station
   - Answer keys at each station for self-checking
   - Rotation instructions and timing

4. Individual Review Time (5-10 minutes):
   - A study guide or review sheet students can use
   - Key formulas, vocabulary, or concepts in one-page format
   - 5 "If you only study one thing" priority items

5. Closing Confidence Check (3 minutes):
   - A quick self-assessment for students to identify what they still need to study
   - Format that helps them create a study plan for tonight

All questions should be formatted as game-ready cards or slides I can use immediately. Include answer keys for everything.`,
              result: 'A complete review day plan with games, activities, and study materials.',
              tip: 'Review games are some of the most productive class periods of the year. Students engage more when there is a game element, and you get real data on what they know.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Student Feedback',
          prompts: [
            {
              id: 'tc-p-6-1',
              title: 'Constructive Feedback Template',
              task: 'Generate specific, growth-oriented feedback for student work',
              prompt: `Generate constructive feedback for a student's work.

Student first name: [name]
Grade level: [grade]
Assignment: [what the assignment was]
Rubric criteria: [list the criteria the work is assessed on]
Use pronouns: [he/him, she/her, they/them]

Student performance:
- Strengths observed: [list 2-3 specific things the student did well]
- Areas needing improvement: [list 1-2 specific areas]
- Effort level: [high / moderate / low]
- Score/Grade: [what they earned]
- Previous performance context: [improving / consistent / declining]

Generate feedback that:
1. Opens with a specific, genuine strength ("Your use of [specific example] showed strong understanding of...")
2. Acknowledges effort where genuine (do not praise effort that was not there)
3. Identifies the most important area for improvement with a specific example from their work
4. Provides a concrete "next step" - exactly what to do differently next time
5. Connects to the rubric so the student understands their score
6. Ends with encouragement that feels authentic, not generic

Requirements:
- 3-5 sentences total (students do not read long feedback)
- Age-appropriate language
- Focus on the work, not the student as a person
- Growth mindset framing ("not yet" rather than "wrong")
- Include one specific action the student can take to improve
- Avoid: "good job," "needs improvement," "try harder" - be specific

Generate 2 versions so I can choose the one that matches my voice best.`,
              result: 'Two specific, growth-oriented feedback options for the student.',
              tip: 'The most effective feedback is timely and specific. Use AI to generate feedback the same day students submit work, while it is still fresh.',
            },
            {
              id: 'tc-p-6-2',
              title: 'Batch Feedback Generator',
              task: 'Generate feedback for multiple students at once',
              prompt: `Generate individualized feedback for the following students on [assignment name].

Assignment: [describe the assignment]
Rubric criteria: [list the criteria]
Grade level: [grade]

Student performance data (copy this format for each student):

Student 1: [first name]
- Score: [score]
- Strengths: [what they did well]
- Growth area: [what needs improvement]
- Notes: [any specific observations]

Student 2: [first name]
- Score: [score]
- Strengths: [what they did well]
- Growth area: [what needs improvement]
- Notes: [any specific observations]

[Continue for each student - paste as many as needed]

For each student, generate:
1. A 3-4 sentence personalized feedback comment
2. The comment should mention their specific strength by name
3. One clear next step for improvement
4. An encouraging closing that feels authentic to that student's situation

Requirements:
- Each comment should be unique (no copy-paste feeling)
- Match the language to the student's performance level
- For high performers: challenge them to go deeper
- For struggling students: acknowledge effort and provide clear, achievable next step
- For middle students: help them see the path from good to great
- Keep each comment under 75 words

Format the output as: Student name followed by their feedback, ready to copy into my gradebook.`,
              result: 'Individualized feedback comments for every student in the batch.',
              tip: 'Process your whole class in 2-3 batches. Review each comment and add one personal detail. Students will think you spent hours on feedback.',
            },
            {
              id: 'tc-p-6-3',
              title: 'Self-Assessment and Reflection Prompt',
              task: 'Create a student self-assessment tool',
              prompt: `Create a student self-assessment and reflection tool for the following.

Grade level: [grade]
Assignment or unit: [what students are reflecting on]
Learning objectives: [what students were supposed to learn]
Skills practiced: [what skills this assignment developed]

Create a self-assessment with:

1. "I Can" Checklist (5-7 items):
   - Based on the learning objectives
   - Student rates themselves: "I can do this confidently" / "I can do this with some help" / "I need more practice"
   - Written in student-friendly language

2. Reflection Questions (choose 3 format):
   Students pick 3 of these 6 questions to answer in 2-3 sentences each:
   - What is one thing you learned that you did not know before?
   - What was the most challenging part and how did you handle it?
   - If you could redo one part of this assignment, what would you change?
   - What strategy helped you the most?
   - How does what you learned connect to something in your life?
   - What question do you still have about this topic?

3. Goal Setting:
   - "One thing I will do differently next time is..."
   - "One thing I want to get better at is..."
   - "To improve, I will..." (specific action step)

4. Feedback to the Teacher:
   - "The part of this unit that helped me learn the most was..."
   - "I wish we had spent more time on..."

Requirements:
- Fits on one page (front only)
- Age-appropriate language and format
- Takes students 10-15 minutes to complete thoughtfully
- Can be used for student-led conferences with parents

Include a brief teacher guide: how to use the data from these self-assessments to inform instruction.`,
              result: 'A complete student self-assessment tool with teacher guide.',
              tip: 'Use self-assessment data in parent conferences. It shows families that their child is developing metacognitive skills and taking ownership of their learning.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what AI saves you in actual hours - the hours that come from your evenings and weekends.',
      timeTable: [
        {
          task: 'Lesson planning',
          without: '30-60 min/lesson',
          withAI: '10 minutes',
          saved: '25+ min/lesson',
        },
        {
          task: 'Assessment creation',
          without: '1-2 hours/assessment',
          withAI: '15-20 minutes',
          saved: '1+ hr/assessment',
        },
        {
          task: 'Parent emails',
          without: '15-20 min/email',
          withAI: '3-5 minutes',
          saved: '12 min/email',
        },
        {
          task: 'Differentiated materials',
          without: '45-90 min/lesson',
          withAI: '10-15 minutes',
          saved: '45+ min/lesson',
        },
        {
          task: 'Quiz and test writing',
          without: '1-2 hours/quiz',
          withAI: '10-15 minutes',
          saved: '1+ hr/quiz',
        },
        {
          task: 'Student feedback',
          without: '8-10 min/student',
          withAI: '3-4 min/student',
          saved: '5 min/student',
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
          heading: 'The Teaching Gap',
          paragraphs: [
            'Teachers who use AI are not cutting corners. They are creating better materials, providing more thorough feedback, and actually differentiating instruction instead of just talking about it. The lesson plans are more detailed. The assessments are better aligned. The feedback is more specific.',
            'The gap is not about teaching quality - it is about time. AI does not make you a better teacher. It gives you the time to be the teacher you already know how to be.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a teacher to spend your Sunday nights writing quiz questions and formatting rubrics. You became a teacher for the moments when a struggling student finally gets it, when a shy student raises their hand for the first time, when your lesson sparks something real. AI gives you back the hours so you can be fully present for those moments.',
          ],
        },
      ],
      keyInsight:
        'Start with one lesson plan. Generate one quiz. Write one parent email. See how much time it saves. Then build from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your teaching workflow. One step at a time. Check off each task as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'tc-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'tc-1-2', label: 'Create a free Canva for Education account' },
            { id: 'tc-1-3', label: 'Bookmark this guide on your school computer' },
          ],
        },
        {
          day: 2,
          title: 'Plan a Lesson',
          duration: '15 min',
          items: [
            { id: 'tc-2-1', label: 'Pick a lesson you need to plan this week' },
            { id: 'tc-2-2', label: 'Run the Standards-Aligned Lesson Plan prompt with your real standard' },
            { id: 'tc-2-3', label: 'Customize the output for your students and teach it' },
          ],
        },
        {
          day: 3,
          title: 'Create an Assessment',
          duration: '15 min',
          items: [
            { id: 'tc-3-1', label: 'Pick a quiz or test you need to create' },
            { id: 'tc-3-2', label: 'Run the Multiple Choice Quiz Generator prompt' },
            { id: 'tc-3-3', label: 'Review every question for accuracy and use it' },
          ],
        },
        {
          day: 4,
          title: 'Write Parent Emails',
          duration: '10 min',
          items: [
            { id: 'tc-4-1', label: 'Pick 2-3 parent emails you have been putting off' },
            { id: 'tc-4-2', label: 'Run the Parent Conference Email prompt for each' },
            { id: 'tc-4-3', label: 'Personalize, review, and send' },
          ],
        },
        {
          day: 5,
          title: 'Differentiate a Lesson',
          duration: '15 min',
          items: [
            { id: 'tc-5-1', label: 'Pick a lesson that needs differentiated materials' },
            { id: 'tc-5-2', label: 'Run the Tiered Assignment Creator prompt' },
            { id: 'tc-5-3', label: 'Review the tiers and use them in class' },
          ],
        },
        {
          day: 6,
          title: 'Give Better Feedback',
          duration: '20 min',
          items: [
            { id: 'tc-6-1', label: 'Take a set of student work you need to return' },
            { id: 'tc-6-2', label: 'Run the Batch Feedback Generator for your class' },
            { id: 'tc-6-3', label: 'Add personal touches and return the work to students' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan Forward',
          duration: '10 min',
          items: [
            { id: 'tc-7-1', label: 'Review which AI tasks saved you the most time this week' },
            { id: 'tc-7-2', label: 'Plan which prompts you will use every week going forward' },
            { id: 'tc-7-3', label: 'Share this guide with a teacher friend who needs their weekends back' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
