import type { WorkbookData } from './types'

export const studentsData = {
  professionId: 'students',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Students & Job Applicants',
  heroDescription:
    'Study smarter, build a standout resume, ace interviews, and land opportunities - with free AI tools and ready-to-use prompts.',

  chapters: {
    ch1: {
      paragraphs: [
        'You\'re sitting in your room with 14 Chrome tabs open. Three are job listings you\'ve been staring at for 20 minutes. One is a resume template you\'re not sure about. Another is a LinkedIn profile you\'ve been "meaning to update" for two months.',
        'Your professor assigned a paper due Thursday. You have a group project that nobody in the group is doing. You know you should be applying to jobs or internships, but every application feels like starting from scratch - a new cover letter, a new tailored resume, a new round of Googling "what does this company even do?"',
        'Meanwhile, your classmate somehow has a polished LinkedIn, a portfolio, and three interviews lined up. You\'re wondering what they know that you don\'t.',
      ],
      highlight: 'Here\'s the secret: they probably just know how to use AI.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not cheating. Let\'s get that out of the way first. Using AI is not plagiarism. It\'s not cutting corners. It\'s not "letting a robot do your homework." (Unless you literally copy-paste without reading - that\'s just being lazy, not using AI.)',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Imagine you have a study buddy who has read every textbook ever written, can explain quantum physics using pizza analogies, writes your first draft in 30 seconds so you can spend time making it great, practices interview questions with you at 2 AM without complaining, and knows what every company in the world does.',
            'That\'s AI. It\'s the most patient, most knowledgeable tutor you\'ve ever had - and it\'s free.',
          ],
        },
      ],
      keyInsight:
        'AI doesn\'t do the work FOR you. It does the boring parts so you can focus on the parts that actually matter. It writes the first draft - you make it yours. It researches the company - you show up prepared.',
    },

    ch3: {
      intro: 'Every tool here has a free tier. Total cost: $0.',
      tools: [
        {
          name: 'ChatGPT / Claude',
          role: 'Your everything buddy',
          description:
            'Writing, studying, prep, brainstorming - literally everything',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: '\u{1F916}',
        },
        {
          name: 'Perplexity',
          role: 'Your research engine',
          description:
            'Company research, fact-finding, citations for papers',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: '\u{1F50D}',
        },
        {
          name: 'Canva AI',
          role: 'Your design studio',
          description:
            'Resumes, presentations, portfolio pieces',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Makes you look pro',
          icon: '\u{1F3A8}',
        },
        {
          name: 'Notion AI',
          role: 'Your study planner',
          description:
            'Notes, to-dos, project tracking, organization',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Stay organized',
          icon: '\u{1F4CB}',
        },
        {
          name: 'Grammarly',
          role: 'Your writing polisher',
          description:
            'Emails, cover letters, essays - catches what you miss',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Always on',
          icon: '\u{270D}\u{FE0F}',
        },
      ],
      footer:
        'All free. Zero excuses. Set these up in 10 minutes and you\'re ready.',
    },

    ch4: {
      intro:
        'Click each system to see the before/after and exact workflow.',
      systems: [
        {
          id: 1,
          name: 'Learning & Studying Smarter',
          before:
            'You re-read the textbook chapter for the third time. It still doesn\'t make sense. You highlight everything, which means you\'ve highlighted nothing. You make flashcards by hand. The night before the exam, you panic.',
          after:
            'You paste the chapter into AI and say "explain this like I\'m 8." Suddenly it clicks. You generate flashcards in 30 seconds. You ask AI to quiz you. You walk into the exam actually understanding the material.',
          flow: [
            'Paste lecture notes or textbook into ChatGPT/Claude',
            'Ask for a simplified explanation',
            'Generate flashcards and practice questions',
            'Take the AI-generated quiz',
            'Ask follow-ups on anything you got wrong',
          ],
          timeSaved: {
            without: '3-4 hours of re-reading',
            withAI: '45 minutes of real understanding',
          },
        },
        {
          id: 2,
          name: 'Resume & LinkedIn That Stand Out',
          before:
            'You Google "resume template," spend 2 hours fitting experience into bullet points. Your LinkedIn bio is from freshman year. You apply with the same resume everywhere.',
          after:
            'AI tailors your resume for each job in 5 minutes. It turns "I did stuff" into achievement-focused bullet points. Your LinkedIn reads like you know what you\'re doing.',
          flow: [
            'Feed AI your experience (raw and messy is fine)',
            'AI structures into achievement-focused bullets',
            'For each app: paste JD \u2192 AI tailors your resume',
            'AI rewrites LinkedIn headline, about, experience',
            'Review, personalize, publish',
          ],
          timeSaved: {
            without: '2 hours per application',
            withAI: '15 minutes per application',
          },
        },
        {
          id: 3,
          name: 'Job Search & Applications',
          before:
            'You scroll LinkedIn Jobs for an hour. Find 3 roles that "kind of" match. Spend 45 minutes on each cover letter. Half the time you don\'t even click submit.',
          after:
            'AI researches companies in minutes, writes personalized cover letters that reference what the company actually does, and you apply to more roles with better applications.',
          flow: [
            'Find a job listing',
            'Paste JD \u2192 get company summary and role analysis',
            'AI writes a cover letter tailored to THAT role',
            'Review, add something only YOU know, submit',
            'Track applications',
          ],
          timeSaved: {
            without: '1-2 hours per application',
            withAI: '20 minutes per quality application',
          },
        },
        {
          id: 4,
          name: 'Interview Prep That Actually Works',
          before:
            'You Google "common interview questions." Practice in your head (meaning you don\'t practice). Walk in nervous, ramble through answers, leave thinking "I should have said..."',
          after:
            'AI generates questions specific to YOUR role and company. It structures STAR answers. It role-plays as the interviewer. You walk in having "been through" the interview 3 times.',
          flow: [
            'Paste job description \u2192 AI generates likely questions',
            'For each: AI structures a STAR answer from your experience',
            'Mock interview with AI (it asks, you answer, it gives feedback)',
            'Company-specific prep ("Why us?" etc.)',
            'Walk in prepared',
          ],
          timeSaved: {
            without: 'Anxiety + winging it',
            withAI: 'Prepared + confident',
          },
        },
        {
          id: 5,
          name: 'Projects & Portfolio',
          before:
            'Your portfolio is... your resume. Maybe a class project. You want to build something but don\'t know where to start.',
          after:
            'AI helps turn classwork into polished portfolio pieces. It brainstorms project ideas for your target role. It writes case study narratives that show your thinking.',
          flow: [
            'Tell AI your target role and skills',
            'Get project ideas that impress hiring managers',
            'For existing work: AI writes case study narrative',
            'Use Canva AI to make it look professional',
            'Publish on LinkedIn or portfolio site',
          ],
          timeSaved: {
            without: '"I\'ll do it someday"',
            withAI: 'A real portfolio in one weekend',
          },
        },
        {
          id: 6,
          name: 'Networking Without the Cringe',
          before:
            'Networking feels fake. You draft a LinkedIn message, rewrite it 7 times, then don\'t send it because "they probably won\'t reply."',
          after:
            'AI writes messages that sound human and get replies. It finds the right people. It writes follow-ups that aren\'t awkward. You actually build relationships.',
          flow: [
            'Identify someone to connect with',
            'AI researches their profile and activity',
            'AI writes a personalized, short message',
            'You send it (yes, actually send it)',
            'AI writes follow-up if no response',
          ],
          timeSaved: {
            without: 'Overthinking + not sending',
            withAI: '2 minutes per message',
          },
        },
      ],
    },

    ch5: {
      intro:
        'Click each to reveal the prompt, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Studying',
          prompts: [
            {
              id: 's-p-1-1',
              title: 'ELI8 - Explain Like I\'m 8',
              task: 'Get a simple explanation of any concept',
              prompt: `Explain the following concept like I'm 8 years old. Use simple words, everyday examples, and analogies. No jargon. If the concept has multiple parts, break each one down separately.

The concept: [paste the concept, paragraph, or topic here]

After explaining, give me 3 simple questions to check if I understood it correctly.`,
              result:
                'A clear, simple explanation that actually makes sense.',
              tip: 'Works for ANY subject - physics, economics, philosophy, code.',
            },
            {
              id: 's-p-1-2',
              title: 'Instant Flashcards',
              task: 'Turn notes into study flashcards',
              prompt: `Turn the following notes into flashcards.

Format each as:
Q: [question]
A: [concise answer]

Make 15-20 flashcards covering the most important concepts. Mix factual recall, conceptual understanding, and application questions.

Content:
[Paste notes, textbook sections, or lecture slides]`,
              result: '15-20 study flashcards in seconds.',
            },
            {
              id: 's-p-1-3',
              title: 'Practice Quiz',
              task: 'Create a practice quiz from study material',
              prompt: `Create a practice quiz based on the following material.

Include:
- 5 multiple choice questions
- 3 short answer questions
- 2 "explain this concept" questions

Difficulty: [easy / medium / hard]
Don't show answers until I ask for them.

Material:
[Paste study material]`,
              result:
                'A custom quiz to test yourself before the real test.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Resume & LinkedIn',
          prompts: [
            {
              id: 's-p-2-1',
              title: 'Resume Bullet Point Transformer',
              task: 'Transform raw experience into resume bullet points',
              prompt: `I'm a [year] [major] student applying for [target role] positions.

Here's my experience in plain language:
[Paste raw experience - "I worked at X and did Y" is fine]

Transform each into 2-3 resume bullet points that:
- Start with strong action verbs
- Include quantifiable results where possible
- Are tailored for [target role]
- Follow: "[Action verb] + [what you did] + [result/impact]"

Flag any gaps and suggest how to address them.`,
            },
            {
              id: 's-p-2-2',
              title: 'Resume Tailor Per Job',
              task: 'Tailor your resume for a specific job',
              prompt: `Here's my base resume:
[Paste resume]

Here's the job description:
[Paste JD]

Tailor my resume:
1. Reorder bullets to prioritize what matters for this role
2. Adjust wording to mirror JD keywords (for ATS)
3. Suggest additions or removals
4. Rate my fit: Strong / Moderate / Stretch

Do NOT fabricate experience. Only use what I provided.`,
            },
            {
              id: 's-p-2-3',
              title: 'LinkedIn Profile Rewrite',
              task: 'Rewrite your LinkedIn profile',
              prompt: `Rewrite my LinkedIn profile for a [year] [major] student targeting [target role/industry].

Current headline: [paste or leave blank]
Current about: [paste or leave blank]
Experience: [paste descriptions]
Skills: [list]

Give me:
1. Headline - specific and searchable (not "Aspiring professional")
2. About section - under 200 words, tells my story
3. Experience descriptions with action verbs and results

Tone: Confident but genuine. Not corporate. Not cringe.`,
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Job Search',
          prompts: [
            {
              id: 's-p-3-1',
              title: 'Company Research Brief',
              task: 'Research a company before applying',
              prompt: `Give me a brief on [company name] for a job application.

Include:
1. What they do (simple explanation)
2. Mission and values
3. Recent news (last 6-12 months)
4. Culture vibe
5. Competitors
6. Why a [target role] matters there
7. One thoughtful interview question that shows I researched them`,
              tip: 'Run in Perplexity for sourced, up-to-date info.',
            },
            {
              id: 's-p-3-2',
              title: 'Cover Letter Generator',
              task: 'Write a tailored cover letter',
              prompt: `Write a cover letter for:

Job: [title] at [company]
Key requirements: [paste highlights from JD]

About me:
- [year] [major] student at [school]
- Relevant experience: [1-2 sentences]
- Why this company: [be specific]
- Key strength: [1 sentence]

Requirements:
- Under 250 words
- Specific to THIS role (not a template)
- Show personality
- Connect my experience to their needs
- End with enthusiasm, not desperation`,
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Interview Prep',
          prompts: [
            {
              id: 's-p-4-1',
              title: 'Role-Specific Questions',
              task: 'Generate interview questions for a specific role',
              prompt: `I'm interviewing for [role] at [company].

Generate:
- 5 behavioral questions (with what they test)
- 5 technical/skill questions for [field]
- 3 company-specific questions
- 2 curveball questions

For each: one-line tip on what a strong answer looks like.`,
            },
            {
              id: 's-p-4-2',
              title: 'STAR Answer Builder',
              task: 'Build a STAR-format answer',
              prompt: `Help me build a STAR answer for:

Question: "[paste question]"
My experience: [describe what happened - rough is fine]

Structure as:
- Situation: [2 sentences]
- Task: [1-2 sentences]
- Action: [3-4 sentences, specific steps YOU took]
- Result: [outcome with numbers if possible]

Under 2 minutes spoken. Sound like me, not a script.`,
            },
            {
              id: 's-p-4-3',
              title: 'Mock Interview',
              task: 'Run a mock interview session',
              prompt: `You are an interviewer at [company] hiring for [role]. Conduct a mock interview.

Rules:
- One question at a time
- Wait for my answer
- Brief feedback after each (strong points + improvements)
- Mix behavioral and role-specific
- After 6-8 questions: overall rating + top 3 things to improve

Start with the first question.`,
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Portfolio',
          prompts: [
            {
              id: 's-p-5-1',
              title: 'Portfolio Project Ideas',
              task: 'Get project ideas for your portfolio',
              prompt: `I'm a [major] student targeting [target role].

Skills: [list]
Tools I know: [list]
Time available: [estimate]

Suggest 5 portfolio projects that:
- A hiring manager would be impressed by
- I can complete with current skills
- Show thinking AND execution

For each: name, 2-line description, skills shown, time estimate.`,
            },
            {
              id: 's-p-5-2',
              title: 'Case Study Writer',
              task: 'Write a portfolio case study',
              prompt: `Write a portfolio case study:

Project: [name]
What I did: [rough description]
Tools/skills: [list]
Result: [outcome]

Structure:
1. The Problem (challenge)
2. My Approach (thinking)
3. The Process (steps, decisions)
4. The Result (outcome + learning)

Readable in 2 minutes. Professional but human.`,
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Networking',
          prompts: [
            {
              id: 's-p-6-1',
              title: 'Cold Outreach Message',
              task: 'Write a LinkedIn outreach message',
              prompt: `Write a LinkedIn message to a [person's role, e.g., Product Manager at Google].

Context:
- I'm a [year] [major] student interested in [field]
- Found them because: [how - mutual connection, their post, etc.]
- I want: [coffee chat / advice / referral]

Requirements:
- Under 75 words
- Mention something specific about them
- Clear, easy ask
- Sound human, not robotic

Write 2 versions.`,
            },
            {
              id: 's-p-6-2',
              title: 'Follow-Up Message',
              task: 'Write a follow-up message',
              prompt: `I messaged a [role] [X days] ago asking for [what]. No response.

Write a follow-up that:
- Acknowledges they're busy
- Restates ask briefly
- Easy out ("Totally understand if timing doesn't work")
- Under 50 words
- Not pushy, not guilt-trippy, just human`,
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at the actual numbers.',
      timeTable: [
        {
          task: 'Studying for an exam',
          without: '4-5 hours re-reading',
          withAI: '1-2 hours real learning',
          saved: '3 hrs',
        },
        {
          task: 'Tailoring 1 resume',
          without: '1-2 hours',
          withAI: '15 minutes',
          saved: '1.5 hrs',
        },
        {
          task: 'Writing 1 cover letter',
          without: '45-60 minutes',
          withAI: '10 minutes',
          saved: '45 min',
        },
        {
          task: 'Interview prep',
          without: '2-3 hours Googling',
          withAI: '45 minutes real prep',
          saved: '2 hrs',
        },
        {
          task: 'Building portfolio piece',
          without: '"Someday" (never)',
          withAI: 'One weekend',
          saved: '\u221E',
        },
        {
          task: 'Networking messages',
          without: 'Drafting + deleting + anxiety',
          withAI: '5 min per message',
          saved: 'Hours',
        },
      ],
      totalRow: {
        task: '10 job applications/month',
        without: '-',
        withAI: '-',
        saved: '20+ hours saved',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Your classmate with the polished LinkedIn and three interviews? They\'re probably using ChatGPT. Not because they\'re smarter. Because they stopped doing things the slow way.',
            'In 2026, AI literacy is a job skill. Companies want people who work smart. Showing up AI-fluent is like showing up bilingual.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'This isn\'t about gaming the system. AI writes your first draft - you make it yours. AI formats your resume - you bring the experience. AI preps you - you show up and deliver.',
          ],
        },
      ],
      keyInsight:
        'The work is still yours. You just stopped wasting time on the parts that don\'t require you.',
    },

    ch7: {
      intro: 'Follow it day by day. Check off each step.',
      days: [
        {
          day: 1,
          title: 'Set Up',
          duration: '10 min',
          items: [
            { id: 's-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 's-1-2', label: 'Create a free Perplexity account' },
            { id: 's-1-3', label: 'Bookmark this page' },
          ],
        },
        {
          day: 2,
          title: 'Study Smarter',
          duration: '15 min',
          items: [
            {
              id: 's-2-1',
              label: 'Pick something you\'re currently studying',
            },
            {
              id: 's-2-2',
              label: 'Run the ELI8 prompt on the hardest concept',
            },
            {
              id: 's-2-3',
              label: 'Feel the "oh, THAT\'s what it means" moment',
            },
          ],
        },
        {
          day: 3,
          title: 'Fix Your Resume',
          duration: '20 min',
          items: [
            {
              id: 's-3-1',
              label:
                'Run the Resume Bullet Point Transformer with your real experience',
            },
            {
              id: 's-3-2',
              label: 'Update your actual resume with the results',
            },
          ],
        },
        {
          day: 4,
          title: 'Update LinkedIn',
          duration: '15 min',
          items: [
            {
              id: 's-4-1',
              label: 'Run the LinkedIn Profile Rewrite prompt',
            },
            {
              id: 's-4-2',
              label:
                'Update your headline and about section - publish it',
            },
          ],
        },
        {
          day: 5,
          title: 'Apply to Something',
          duration: '20 min',
          items: [
            {
              id: 's-5-1',
              label: 'Find 1 job listing you want',
            },
            {
              id: 's-5-2',
              label: 'Run Company Research + Cover Letter prompts',
            },
            {
              id: 's-5-3',
              label: 'Actually submit the application',
            },
          ],
        },
        {
          day: 6,
          title: 'Prep for Something',
          duration: '20 min',
          items: [
            {
              id: 's-6-1',
              label:
                'Run the Interview Questions prompt for a role you\'re interested in',
            },
            {
              id: 's-6-2',
              label:
                'Do a mock interview with the Mock Interview prompt',
            },
          ],
        },
        {
          day: 7,
          title: 'Reach Out',
          duration: '10 min',
          items: [
            {
              id: 's-7-1',
              label: 'Find 1 person you\'d love to connect with',
            },
            {
              id: 's-7-2',
              label:
                'Run the Cold Outreach prompt and write the message',
            },
            {
              id: 's-7-3',
              label: 'Hit send - yes, actually send it',
            },
            {
              id: 's-7-4',
              label:
                'Share this page with a friend who\'s job hunting',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
