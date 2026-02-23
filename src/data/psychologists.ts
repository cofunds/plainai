import type { WorkbookData } from './types'

export const psychologistsData = {
  professionId: 'psychologists',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Psychologists & Therapists',
  heroDescription:
    'Everything you need to start using AI in your clinical practice - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You just finished your sixth session of the day. It is 5:30 PM and you have not written a single session note. There are two treatment plans due for insurance by Friday, an intake assessment to prepare for tomorrow morning, and a client who texted asking for a CBT worksheet you promised last week. Your research reading pile has not been touched in a month.',
        'You became a therapist to help people - to sit with them in their pain, guide them toward insight, and watch them grow. Instead, you spend 40% of your time on documentation that nobody reads the way it deserves to be read. The administrative side of clinical practice is quietly eating the parts of your work that actually matter.',
        'Burnout in mental health professionals is not a buzzword. It is an epidemic. And the biggest driver is not the emotional weight of the work - it is the paperwork that follows it.',
      ],
      highlight:
        'What if the documentation wrote itself - so you could focus on the humans in front of you?',
      closingParagraph:
        'AI will not replace your clinical intuition, your empathy, or your therapeutic relationship. But it can handle the administrative burden that is slowly burning you out - faster, more consistently, and without losing the nuance of your work.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it is NOT',
          paragraphs: [
            'AI is not a therapist. It cannot build rapport. It does not understand the silence that means a client just had a breakthrough. It will never replace the human connection that is the foundation of therapeutic change. And it should never be used to make clinical decisions without your professional judgment.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the world\'s most efficient clinical assistant. It has read thousands of treatment manuals, research papers, and clinical guidelines. It does not get behind on notes. It does not forget to update treatment plans. And it can draft documentation in your voice faster than you can type.',
            'Ask it to draft a session summary from your bullet points? Done in 30 seconds. Ask it to create a CBT thought record customized for a specific client presentation? 1 minute. Ask it to summarize the latest research on EMDR for complex trauma? 2 minutes with citations.',
            'The key is this: you are still the clinician. AI handles the busywork so you can focus on what you trained years to do - the clinical work itself.',
          ],
        },
      ],
      keyInsight:
        'Your clinical expertise + AI\'s efficiency = better care with less burnout. You bring the therapeutic judgment. AI removes the 3 hours of documentation standing between you and your evening.',
    },

    ch3: {
      intro: 'You do not need a dozen apps. You need these five.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your documentation assistant',
          description:
            'Session notes, treatment plans, psychoeducation materials, worksheet creation, intake prep',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - handles most clinical documentation tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your clinical writing partner',
          description:
            'Nuanced treatment plans, complex case conceptualizations, detailed intake assessments, research synthesis',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for longer, more nuanced clinical writing',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your practice organizer',
          description:
            'Client tracking templates, session note databases, treatment plan repositories, resource libraries',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Great for organizing your entire practice workflow',
          icon: 'notion',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Finding recent studies, checking treatment guidelines, evidence-based intervention summaries',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for sourced, evidence-based answers',
          icon: 'perplexity',
        },
        {
          name: 'Canva AI',
          role: 'Your handout designer',
          description:
            'Creating professional psychoeducation handouts, worksheets, infographics for clients',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Makes your handouts look polished without design skills',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for documentation. That alone saves hours per week. Add the rest when you are ready.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here is where they plug into your actual clinical practice. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Session Documentation',
          before:
            'You finish a session at 3:50 PM. Your next client arrives at 4:00 PM. You scribble three bullet points on a sticky note and tell yourself you will write it up tonight. Tonight turns into Saturday. Saturday turns into a backlog of 12 notes you batch-write while barely remembering what happened.',
          after:
            'You type or dictate 5-6 bullet points between sessions. AI turns them into a complete, formatted session note in your clinical voice in 30 seconds. You review, adjust, and save. Notes are done before you leave the office.',
          flow: [
            'Jot 5-6 bullet points during or immediately after session',
            'Paste into ChatGPT/Claude with your note template preferences',
            'AI generates a complete session note in your documentation style',
            'Review for accuracy - adjust clinical impressions as needed',
            'Copy into your EHR and move on',
          ],
          timeSaved: { without: '15-20 min/note', withAI: '3-5 min/note' },
        },
        {
          id: 2,
          name: 'Treatment Plan Creation',
          before:
            'Insurance wants an updated treatment plan. You pull up the template, stare at it, and try to translate complex clinical thinking into the rigid format they require. It takes 45 minutes per plan and you have three due this week.',
          after:
            'You give AI the client\'s presenting problems, goals, and your clinical approach. It generates a complete treatment plan formatted for insurance requirements in 2 minutes. You review, refine, and submit.',
          flow: [
            'List the client\'s presenting problems and diagnoses',
            'Describe your treatment approach and client goals',
            'AI drafts a complete treatment plan with measurable objectives',
            'Review and adjust goals, timeframes, and interventions',
            'Format for your specific insurance or EHR requirements',
          ],
          timeSaved: { without: '30-45 min/plan', withAI: '10 minutes' },
        },
        {
          id: 3,
          name: 'CBT/DBT Worksheet Design',
          before:
            'You want a thought record customized for your client who struggles with catastrophizing at work. You search online, find generic worksheets, and spend 30 minutes trying to modify one in Word. It still looks amateur.',
          after:
            'You describe the client presentation and the specific skill you are targeting. AI creates a customized worksheet with relevant examples, prompts, and psychoeducation - tailored to that specific client.',
          flow: [
            'Describe the therapeutic technique and client context',
            'Specify the skill or concept the worksheet should teach',
            'AI generates a complete worksheet with instructions and examples',
            'Review for clinical accuracy and client-appropriate language',
            'Design in Canva for a polished look or use as-is',
          ],
          timeSaved: { without: '30-45 minutes', withAI: '5-10 minutes' },
        },
        {
          id: 4,
          name: 'Intake Assessment Preparation',
          before:
            'A new client is coming in tomorrow. You know they were referred for anxiety and relationship issues. You pull out your standard intake form and hope you remember to ask about everything relevant. Sometimes you miss important areas and have to follow up later.',
          after:
            'AI generates a customized intake guide based on the referral information - specific questions for the presenting problem, screening areas to cover, and red flags to watch for. You walk in prepared.',
          flow: [
            'Enter the referral reason and any pre-intake information',
            'AI generates a targeted intake question guide',
            'Review and add any practice-specific screening requirements',
            'AI suggests relevant assessment measures to administer',
            'Prepare your intake documentation template',
          ],
          timeSaved: { without: '20-30 minutes', withAI: '5 minutes' },
        },
        {
          id: 5,
          name: 'Research Literature Review',
          before:
            'A client presents with a condition you have not treated before - maybe hoarding disorder or selective mutism. You know you need to review the current evidence base, but finding time to read 5-10 journal articles is impossible with a full caseload.',
          after:
            'You ask AI to summarize the current evidence base, recommended treatments, and key clinical considerations. In 5 minutes, you have a working knowledge of the literature that would have taken 3 hours to develop on your own.',
          flow: [
            'Ask Perplexity or Claude about current treatment guidelines',
            'Get a summary of evidence-based approaches with citations',
            'Ask follow-up questions about specific techniques or populations',
            'Identify key papers to read in full for deeper understanding',
            'Create a quick-reference clinical note for your files',
          ],
          timeSaved: { without: '2-4 hours', withAI: '15-20 minutes' },
        },
        {
          id: 6,
          name: 'Client Psychoeducation Materials',
          before:
            'You spend 10 minutes of every session explaining what the amygdala does, or how avoidance maintains anxiety, or what distress tolerance skills look like in practice. You wish you had a handout but never have time to make one.',
          after:
            'AI creates clear, client-friendly psychoeducation materials tailored to the reading level and specific concerns of each client. Explain the window of tolerance once in a handout - never again in session.',
          flow: [
            'Identify the concept your client needs to understand',
            'Specify reading level and any cultural considerations',
            'AI generates a clear, jargon-free explanation with examples',
            'Add relevant exercises or reflection questions',
            'Format as a take-home handout in Canva or print as-is',
          ],
          timeSaved: { without: '30-60 minutes', withAI: '5-10 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Session Documentation',
          prompts: [
            {
              id: 'ps-p-1-1',
              title: 'Session Note from Bullet Points',
              task: 'Turn quick notes into a complete session summary',
              prompt: `You are a clinical documentation assistant for a licensed therapist.

Convert the following bullet points into a professional session note.

Session details:
- Client: [initials or pseudonym]
- Session number: [X]
- Session type: [individual/couples/group]
- Modality: [CBT/DBT/psychodynamic/EMDR/integrative/etc.]

My bullet points:
[Paste your quick notes from the session]

Write the note with these sections:
1. Session focus and presenting concerns today
2. Interventions used and client response
3. Key themes, insights, or breakthroughs
4. Client affect and mental status observations
5. Progress toward treatment goals
6. Plan for next session

Tone: Professional but warm. Clinical language without being cold. Write in third person. Keep it under 300 words.`,
              result:
                'A complete, professional session note ready for your EHR.',
              tip: 'Create a version of this prompt with your specific documentation style and save it. Reuse it for every session.',
            },
            {
              id: 'ps-p-1-2',
              title: 'Progress Note with Clinical Reasoning',
              task: 'Write a detailed progress note that shows your clinical thinking',
              prompt: `Write a clinical progress note that includes my assessment and clinical reasoning.

Client context:
- Diagnosis: [primary and any secondary diagnoses]
- Treatment goals: [list 2-3 current goals]
- Current phase of treatment: [early/middle/termination]

Today's session:
[Describe what happened - topics discussed, interventions used, client responses]

Write the note including:
1. Subjective - what the client reported
2. Objective - behavioral observations, affect, engagement level
3. Assessment - clinical interpretation of today's session in the context of overall treatment
4. Plan - specific next steps, homework, adjustments to treatment approach

Include a brief risk assessment statement if relevant.

Professional clinical language. Write as the treating clinician. Under 400 words.`,
              result:
                'A thorough progress note that documents your clinical reasoning for insurance and continuity of care.',
              tip: 'Adjust the risk assessment section based on your practice requirements. Some settings require this in every note.',
            },
            {
              id: 'ps-p-1-3',
              title: 'Group Therapy Session Note',
              task: 'Document a group therapy session efficiently',
              prompt: `Write a group therapy session note.

Group details:
- Group name/type: [e.g., DBT skills group, grief support, anger management]
- Session topic: [today's focus]
- Number of members present: [X] out of [Y]

Session summary:
[Describe what was covered, key discussions, and group dynamics]

Write the note including:
1. Session topic and objectives
2. Activities and interventions used
3. Group dynamics and process observations
4. Individual member observations (use initials only):
   - Engagement level
   - Notable contributions or concerns
   - Any follow-up needed
5. Plan for next session

Keep each member observation to 2-3 sentences. Professional and concise. Under 500 words total.`,
              result:
                'A structured group note that captures both group process and individual participation.',
              tip: 'Keep a running template for each group. Only the individual observations change significantly week to week.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Treatment Plan Creation',
          prompts: [
            {
              id: 'ps-p-2-1',
              title: 'Comprehensive Treatment Plan',
              task: 'Generate a full treatment plan with measurable goals',
              prompt: `Create a comprehensive treatment plan for a therapy client.

Client information:
- Primary diagnosis: [diagnosis with DSM-5 code if known]
- Secondary diagnoses: [if any]
- Presenting problems: [list 3-5 main concerns]
- Client strengths: [list 2-3]
- Treatment modality: [CBT/DBT/EMDR/psychodynamic/integrative]

For each presenting problem, create:
1. Long-term goal (broad treatment outcome)
2. 2-3 short-term objectives that are SMART:
   - Specific (what exactly will change)
   - Measurable (how will we know - frequency, rating scale, behavioral indicator)
   - Achievable (realistic given client presentation)
   - Relevant (connected to the presenting problem)
   - Time-bound (target timeframe)
3. Planned interventions (specific techniques, not just "therapy")
4. How progress will be measured

Include estimated treatment duration and review dates.

Format for insurance submission. Clinical language.`,
              result:
                'An insurance-ready treatment plan with measurable objectives you can track.',
              tip: 'Customize the SMART goals based on what you discussed with your client. Treatment plans work best when they reflect collaborative goal-setting.',
            },
            {
              id: 'ps-p-2-2',
              title: 'Treatment Plan Update',
              task: 'Update an existing treatment plan based on progress',
              prompt: `Update the following treatment plan based on client progress.

Original plan summary:
[Paste current goals and objectives, or describe them]

Progress since last review:
- Goals met or partially met: [list]
- Goals not yet met: [list]
- New concerns that have emerged: [list]
- Changes in functioning: [describe]

Generate an updated treatment plan that:
1. Notes progress on each original objective (met/partial/not met)
2. Revises objectives that need adjusting
3. Adds new objectives for emerging concerns
4. Updates the intervention approach if needed
5. Adjusts the estimated treatment timeline
6. Includes a clinical justification for continued treatment

This is for an insurance review. Emphasize ongoing medical necessity.`,
              result:
                'An updated plan that documents progress and justifies continued treatment.',
              tip: 'Run this every 90 days or whenever insurance requires a review. Keep the previous version for your records.',
            },
            {
              id: 'ps-p-2-3',
              title: 'SMART Goal Generator for Specific Issues',
              task: 'Create therapy-specific measurable goals',
              prompt: `Generate SMART goals for a client working on [specific issue - e.g., social anxiety, emotional regulation, grief, relationship patterns].

Client context:
- Current severity: [mild/moderate/severe]
- Baseline functioning: [describe current state]
- Client's own stated goal: [what they want in their words]
- Treatment approach: [modality]

Create:
1. 3 short-term goals (4-6 weeks) with specific behavioral indicators
2. 2 medium-term goals (3-6 months) showing meaningful progress
3. 1 long-term goal (treatment completion) describing the target outcome

For each goal:
- The specific, measurable target
- How you will measure it (scale, frequency, behavioral observation)
- What success looks like in concrete terms
- A sample progress note statement for when the goal is met

Make the goals collaborative - they should sound like something a client would agree to, not clinical jargon imposed on them.`,
              result:
                'Ready-to-use treatment goals that satisfy insurance requirements while remaining client-centered.',
              tip: 'Share simplified versions of these goals with your client. Goals work better when the client owns them.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - CBT/DBT Worksheet Design',
          prompts: [
            {
              id: 'ps-p-3-1',
              title: 'Custom CBT Thought Record',
              task: 'Create a thought record tailored to a specific client',
              prompt: `Create a CBT thought record worksheet customized for a client dealing with [specific issue - e.g., catastrophizing at work, social anxiety, perfectionism].

Include:
1. A brief psychoeducation section at the top (3-4 sentences explaining the connection between thoughts, feelings, and behaviors - use simple, client-friendly language)

2. The thought record table with these columns:
   - Situation (what happened)
   - Automatic thought (what went through my mind)
   - Emotion and intensity (0-100)
   - Evidence for the thought
   - Evidence against the thought
   - Balanced alternative thought
   - New emotion and intensity (0-100)

3. Two completed example rows using scenarios relevant to [their specific issue]

4. Three common cognitive distortions relevant to this issue with plain-language definitions

5. A "Quick Check" section: 3 questions the client can ask themselves when they notice a strong emotional reaction

Write at a [grade level - e.g., 8th grade] reading level. Warm, encouraging tone.`,
              result:
                'A personalized thought record that is immediately useful for your specific client.',
              tip: 'Swap in new example scenarios for different clients. The structure stays the same - the examples make it personal.',
            },
            {
              id: 'ps-p-3-2',
              title: 'DBT Skills Worksheet',
              task: 'Create a DBT skills practice worksheet',
              prompt: `Create a DBT skills worksheet for [specific skill module - e.g., distress tolerance, emotion regulation, interpersonal effectiveness, mindfulness].

Focus on the skill: [specific skill - e.g., TIPP, DEAR MAN, Wise Mind, opposite action]

Include:
1. What this skill is and when to use it (2-3 sentences, plain language)
2. Step-by-step instructions for using the skill
3. Two real-life example scenarios showing the skill in action
4. A practice section where the client applies the skill to their own situation
5. A "Skills tracker" - a simple log to track when they used the skill this week:
   - Date and situation
   - What skill they used
   - Effectiveness rating (1-5)
   - What they noticed

6. Troubleshooting section: "If this skill is not working, try..."

Client-friendly language. No clinical jargon. Encouraging but not patronizing tone. Suitable for adults with [reading level] reading level.`,
              result:
                'A professional worksheet that teaches and tracks a specific DBT skill.',
              tip: 'Build a library of these for your most-used skills. Hand them out as homework between sessions.',
            },
            {
              id: 'ps-p-3-3',
              title: 'Behavioral Activation Planner',
              task: 'Create a behavioral activation worksheet for depression',
              prompt: `Create a behavioral activation worksheet for a client experiencing [mild/moderate/severe] depression.

Their specific barriers to activation: [e.g., low energy, anhedonia, social withdrawal, negative self-talk about "not feeling like it"]

Include:
1. Brief psychoeducation: why activity helps even when you do not feel like it (4-5 sentences, compassionate tone)

2. Activity menu organized by category:
   - Physical (5 options ranging from very easy to moderate)
   - Social (5 options from low-effort to higher engagement)
   - Accomplishment/mastery (5 small tasks that build confidence)
   - Pleasure/enjoyment (5 activities connected to their values)

3. Weekly planner: schedule one activity per day with:
   - Predicted mood before (0-10)
   - Actual mood after (0-10)
   - What I noticed

4. The "5-minute rule" explanation: commit to just 5 minutes and then decide

5. Compassionate reminder section: what to tell yourself when you do not follow through

Make activities realistic for someone with low energy. Start very small. No toxic positivity.`,
              result:
                'A depression-friendly activity planner that meets the client where they are.',
              tip: 'Co-create the activity menu with your client in session. Their ideas will stick better than a generic list.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Intake Assessment Preparation',
          prompts: [
            {
              id: 'ps-p-4-1',
              title: 'Custom Intake Question Guide',
              task: 'Prepare a targeted intake assessment',
              prompt: `I have a new client intake tomorrow. Here is what I know from the referral:

Referral reason: [presenting concern]
Client demographics: [age, relevant context]
Referral source: [self-referred, PCP, psychiatrist, etc.]

Generate a customized intake guide with:

1. Opening questions to build rapport (3-4 open-ended questions)
2. Targeted questions for their presenting concern (8-10 questions specific to [their issue])
3. Risk assessment questions (suicidality, self-harm, harm to others - sensitive but thorough)
4. Screening areas I should not miss:
   - Trauma history
   - Substance use
   - Medical conditions
   - Medication
   - Family mental health history
   - Social support system
   - Previous treatment history
5. Functional assessment: how is this affecting work, relationships, daily life?
6. Strengths and protective factors to ask about
7. Closing: expectations for treatment, goals in their own words

Organize from most to least rapport-building. Flag sensitive areas with suggested phrasing.`,
              result:
                'A comprehensive intake guide that ensures you do not miss anything important.',
              tip: 'Adapt this to your practice style. Some clinicians prefer a conversational intake, others prefer structured. Adjust accordingly.',
            },
            {
              id: 'ps-p-4-2',
              title: 'Intake Summary and Diagnostic Impression',
              task: 'Write up an intake assessment after the session',
              prompt: `Write an intake assessment summary based on the following information gathered during today's session.

Client: [initials], [age], [gender]
Referral reason: [presenting concern]

Information gathered:
[Paste your session notes, bullet points, or key findings from the intake]

Write a complete intake assessment including:
1. Identifying information and referral source
2. Presenting problem in the client's words and clinician's observation
3. History of present illness
4. Psychiatric history (previous treatment, hospitalizations, medications)
5. Medical history and current medications
6. Family history of mental health concerns
7. Social history (relationships, work, living situation, support)
8. Substance use history
9. Mental status examination
10. Risk assessment with current level
11. Diagnostic impression (DSM-5 diagnoses considered)
12. Case conceptualization (2-3 sentences - what is maintaining the problem)
13. Recommended treatment plan and frequency

Professional clinical language. Thorough but concise. Under 800 words.`,
              result:
                'A complete intake report ready for your records or to share with a referring provider.',
              tip: 'Always review the diagnostic impression carefully. AI can suggest, but the diagnosis is your clinical judgment.',
            },
            {
              id: 'ps-p-4-3',
              title: 'Assessment Measure Selector',
              task: 'Choose the right assessment tools for a new client',
              prompt: `Recommend appropriate clinical assessment measures for a new client presenting with [presenting concerns - e.g., depression and anxiety, PTSD, ADHD, eating disorder].

Client context:
- Age: [age]
- Presenting concerns: [list]
- Setting: [outpatient, inpatient, school, etc.]
- Purpose: [screening, baseline severity, treatment progress tracking]

For each recommended measure, tell me:
1. Name and abbreviation
2. What it measures
3. Number of items and time to complete
4. Is it free or requires purchase?
5. Psychometric properties in brief (is it well-validated?)
6. How to interpret the scores (cutoff points)
7. How often to re-administer for progress tracking

Recommend 3-5 measures. Prioritize free, validated, and clinically useful tools.

Also suggest a simple tracking method for monitoring progress across sessions without formal measures.`,
              result:
                'A curated list of validated assessment tools matched to your client.',
              tip: 'Build a go-to assessment toolkit for your most common presentations. Having your standard battery ready saves time.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Research Literature Review',
          prompts: [
            {
              id: 'ps-p-5-1',
              title: 'Evidence-Based Treatment Summary',
              task: 'Get up to speed on the best treatment for a specific condition',
              prompt: `Summarize the current evidence-based treatment approaches for [condition - e.g., complex PTSD, treatment-resistant depression, borderline personality disorder, OCD].

Include:
1. First-line recommended treatments (therapy modalities and why they are recommended)
2. Second-line approaches if first-line is not effective
3. Key findings from the 3-5 most influential studies or meta-analyses
4. Specific techniques or protocols within each approach
5. Average treatment duration and expected outcomes
6. Common challenges in treatment and how to address them
7. Special considerations for [specific population if relevant - e.g., adolescents, older adults, comorbid substance use]
8. Recent developments or emerging treatments (last 2-3 years)

Focus on practical clinical application, not just theory. What does this look like in the therapy room?

Cite specific studies or guidelines where possible.`,
              result:
                'A clinical briefing that gives you working knowledge of the evidence base in minutes.',
              tip: 'Use Perplexity for this prompt to get sourced answers. Then read the 1-2 most relevant papers in full.',
            },
            {
              id: 'ps-p-5-2',
              title: 'Journal Article Summary for Practice',
              task: 'Quickly extract clinically relevant information from a research paper',
              prompt: `Summarize this research article with a focus on what matters for clinical practice.

[Paste the abstract, or key sections of the paper]

Give me:
1. One-paragraph plain-language summary
2. Study design and sample (who was studied and how)
3. Key findings - the 3 most important results
4. Clinical implications - what does this mean for how I treat clients?
5. Limitations - what should make me cautious about these findings?
6. Practical takeaway - one specific thing I can do differently in my practice based on this
7. How this fits with what we already know

Keep it under 300 words. I need to extract the value from this paper in 5 minutes.`,
              result:
                'A practice-focused summary that tells you what to do with the findings.',
              tip: 'Start a "clinical pearls" document where you save one-line takeaways from each paper you review.',
            },
            {
              id: 'ps-p-5-3',
              title: 'Treatment Approach Comparison',
              task: 'Compare different therapeutic approaches for a specific issue',
              prompt: `Compare the following therapeutic approaches for treating [condition/issue]:

Approaches to compare: [e.g., CBT vs EMDR vs somatic experiencing for PTSD; or DBT vs schema therapy for BPD]

For each approach, provide:
1. Core theory and mechanism of change
2. Typical structure (session frequency, duration, phases)
3. Best evidence (key studies and effect sizes if available)
4. Ideal client profile - who responds best to this approach
5. Who it may not be best for
6. Training or certification needed to deliver it
7. Resources for learning more (books, training programs)

Then provide:
- A comparison table summarizing key differences
- Your recommendation for which to use when (based on client presentation)
- How to integrate elements of multiple approaches when appropriate

Keep it practical and clinician-focused.`,
              result:
                'A side-by-side comparison to help you choose the best approach for each client.',
              tip: 'This is great for case consultation prep. Bring the comparison to supervision or peer consultation.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Client Psychoeducation Materials',
          prompts: [
            {
              id: 'ps-p-6-1',
              title: 'Psychoeducation Handout Generator',
              task: 'Create a client-friendly handout on any mental health topic',
              prompt: `Create a psychoeducation handout for clients about [topic - e.g., the fight-flight-freeze response, what depression actually is, how EMDR works, attachment styles].

Requirements:
- Reading level: [8th grade / 6th grade / adjust as needed]
- Length: one page (about 400-500 words)
- Tone: warm, normalizing, validating - not clinical or textbook-like

Include:
1. What it is - explained simply with a relatable analogy
2. Why it matters for their life and healing
3. Common myths or misconceptions (2-3)
4. What they might notice in themselves (signs and symptoms in plain language)
5. 3 practical things they can do right now
6. A normalizing statement - "You are not broken, this is your brain doing..."

Do not use clinical jargon. Write as if you are explaining this to a smart friend who has no psychology background.

End with: "Questions to bring to your next session" - 2-3 reflection prompts.`,
              result:
                'A professional handout you can give to any client who needs to understand this topic.',
              tip: 'Build a library of 10-15 handouts for your most common psychoeducation topics. Hand them out in session or email afterward.',
            },
            {
              id: 'ps-p-6-2',
              title: 'Coping Skills Menu',
              task: 'Create a personalized coping skills reference for a client',
              prompt: `Create a personalized coping skills menu for a client dealing with [primary issue - e.g., panic attacks, emotional dysregulation, insomnia, chronic worry].

Client context:
- What has worked for them before: [list if known]
- What has not worked: [list if known]
- Their lifestyle/constraints: [e.g., busy parent, limited mobility, work-from-home]

Organize skills into categories:
1. In-the-moment crisis skills (when the intensity is 8-10 out of 10) - 5 options
2. Daily maintenance skills (prevention) - 5 options
3. Body-based skills (physical regulation) - 4 options
4. Thought-based skills (cognitive strategies) - 4 options
5. Connection-based skills (relational support) - 3 options

For each skill:
- Name it simply
- Explain it in 1-2 sentences
- When to use it
- Time needed (most should be under 5 minutes)

End with: "My top 3 go-to skills" - a section for the client to identify their favorites.

Realistic, practical, no toxic positivity. Include at least 3 skills that require zero materials or preparation.`,
              result:
                'A personalized coping toolkit your client can stick on their fridge or save on their phone.',
              tip: 'Practice 2-3 of these skills in session so the client knows what they actually feel like.',
            },
            {
              id: 'ps-p-6-3',
              title: 'Relapse Prevention Plan',
              task: 'Create a client-facing relapse prevention worksheet',
              prompt: `Create a relapse prevention plan worksheet for a client nearing the end of treatment for [issue - e.g., depression, anxiety, substance use, eating disorder].

Include these sections for the client to fill in:

1. My Warning Signs (early signs that things may be slipping):
   - Thoughts I start having
   - Feelings I notice
   - Behaviors that change
   - Physical symptoms

2. My Triggers (situations, people, or events that increase risk):
   - High-risk situations
   - Emotional triggers
   - Environmental triggers

3. My Coping Plan (what I will do when I notice warning signs):
   - Step 1: Immediate action
   - Step 2: Skills to use (reference their favorites from treatment)
   - Step 3: People to reach out to
   - Step 4: Professional support contacts

4. My Support Team:
   - Name, relationship, phone number (3-5 people)
   - Therapist contact for future sessions

5. My Strengths and Progress:
   - What I have learned in treatment
   - Evidence that I can handle hard things
   - My reasons to keep going

6. When to Seek Help Again:
   - Specific signs that mean I should schedule a session

Warm, empowering tone. This is a document of strength, not fear. Under 600 words.`,
              result:
                'A personalized safety net your client takes with them after treatment ends.',
              tip: 'Complete this together in the second-to-last session. Revisit it in the final session as part of termination.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let us do the math on what AI saves you in a typical week.',
      timeTable: [
        {
          task: 'Session documentation (20 notes/week)',
          without: '5-7 hours/week',
          withAI: '1-1.5 hours',
          saved: '4-5.5 hrs',
        },
        {
          task: 'Treatment plans (2-3/week)',
          without: '1.5-2 hours',
          withAI: '20-30 minutes',
          saved: '1-1.5 hrs',
        },
        {
          task: 'Worksheet creation',
          without: '30-45 min each',
          withAI: '5-10 minutes',
          saved: '20-35 min',
        },
        {
          task: 'Intake preparation',
          without: '20-30 minutes',
          withAI: '5 minutes',
          saved: '15-25 min',
        },
        {
          task: 'Literature review',
          without: '2-4 hours/month',
          withAI: '15-20 minutes',
          saved: '2-3 hrs/month',
        },
        {
          task: 'Psychoeducation handouts',
          without: '30-60 min each',
          withAI: '5-10 minutes',
          saved: '25-50 min',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '6-10 hrs/week',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Therapist burnout is at an all-time high. The clinicians who are thriving in 2026 are not working harder - they are using AI to reclaim the hours that paperwork stole. Same caseload, same quality of care, but they leave the office on time.',
            'The gap is not clinical skill. It is administrative efficiency.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not spend years in graduate school, practicum, and supervision to become a documentation specialist. You did it to help people heal. AI gives you back the time and energy to do exactly that - without sacrificing the quality of your records.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Write your next session note with AI. That single change can save you 4-5 hours this week.',
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
            { id: 'ps-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'ps-1-2', label: 'Create a free Perplexity account' },
            { id: 'ps-1-3', label: 'Bookmark this page for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'First Session Note',
          duration: '10 min',
          items: [
            {
              id: 'ps-2-1',
              label: 'After your next session, jot 5-6 bullet points and run the Session Note prompt',
            },
            {
              id: 'ps-2-2',
              label: 'Compare the AI-generated note to how long it normally takes you',
            },
          ],
        },
        {
          day: 3,
          title: 'Treatment Plan',
          duration: '15 min',
          items: [
            {
              id: 'ps-3-1',
              label: 'Pick a client who needs a treatment plan update',
            },
            {
              id: 'ps-3-2',
              label: 'Run the Comprehensive Treatment Plan prompt with their information',
            },
            {
              id: 'ps-3-3',
              label: 'Review and refine the SMART goals',
            },
          ],
        },
        {
          day: 4,
          title: 'Create a Worksheet',
          duration: '15 min',
          items: [
            {
              id: 'ps-4-1',
              label: 'Think of a client who could use a CBT thought record or DBT skills worksheet',
            },
            {
              id: 'ps-4-2',
              label: 'Run the appropriate worksheet prompt and customize for their situation',
            },
          ],
        },
        {
          day: 5,
          title: 'Research Something',
          duration: '15 min',
          items: [
            {
              id: 'ps-5-1',
              label: 'Pick a clinical question you have been meaning to look up',
            },
            {
              id: 'ps-5-2',
              label: 'Run the Evidence-Based Treatment Summary prompt',
            },
            {
              id: 'ps-5-3',
              label: 'Save the key takeaway to your clinical reference file',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore',
          duration: '15 min',
          items: [
            {
              id: 'ps-6-1',
              label: 'Try the Psychoeducation Handout Generator for a topic you explain frequently',
            },
            {
              id: 'ps-6-2',
              label: 'Experiment with any prompt or system you have not tried yet',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect',
          duration: '10 min',
          items: [
            {
              id: 'ps-7-1',
              label: 'How many hours did AI save you this week?',
            },
            {
              id: 'ps-7-2',
              label: 'Decide which 2-3 prompts to build into your daily workflow',
            },
            {
              id: 'ps-7-3',
              label: 'Share this with a colleague who is drowning in documentation',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
