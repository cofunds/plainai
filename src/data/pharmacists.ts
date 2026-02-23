import type { WorkbookData } from './types'

export const pharmacistsData = {
  professionId: 'pharmacists',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Pharmacists',
  heroDescription:
    'A practical guide to using AI in your pharmacy practice - from drug interactions to patient counseling, with real tools, workflows, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 9:14 AM and you already have a line of six patients waiting at the counter. A physician just called in a new prescription for a patient on warfarin, metformin, and lisinopril - and the new drug has three potential interaction flags. You pull up your reference database, cross-check each combination, read through the clinical significance ratings, and try to determine whether this is a hard stop or a manageable interaction. Fifteen minutes gone. The line is now eight people.',
        'Between verifications, a patient approaches with questions about their new statin. They want to know the side effects, what foods to avoid, and whether it is safe with their current supplements. You explain it clearly - but the conversation takes ten minutes because the patient needs reassurance, not just facts. Behind them, another patient needs help navigating a prior authorization rejection for their insulin.',
        'After lunch, you need to reconcile inventory discrepancies. Three controlled substances are off by small counts. You pull transaction logs, cross-reference dispensing records, and document everything for compliance. Then there are the compounding calculations for a pediatric suspension that the prescriber wants in a non-standard concentration. You triple-check the math by hand.',
        'By 3 PM, you still have not started the medication therapy management reviews that were due yesterday. Five patients with complex polypharmacy regimens need comprehensive assessments - each one requiring a deep dive into their medication lists, identifying duplications, interactions, and adherence gaps. Each review takes 30-45 minutes when done thoroughly.',
        'You became a pharmacist to be a medication expert and patient advocate. Instead, you spend most of your day on paperwork, calculations, and administrative tasks that keep you from the clinical work that actually improves patient outcomes.',
      ],
      highlight:
        'What if AI could handle the research lookups, draft the patient materials, and process the administrative paperwork - so you could focus on clinical judgment and patient care?',
      closingParagraph:
        'Not by replacing your expertise. Not by making clinical decisions. By handling the time-consuming information processing, documentation, and drafting tasks - so you spend your hours on the work that truly requires a pharmacist.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is a research accelerator, not a clinical authority',
          paragraphs: [
            'Let\'s be clear about the boundaries. AI will not replace your clinical judgment. It will not make dispensing decisions. It will not override your professional responsibility to verify every interaction, dose, and contraindication. Pharmacy is a field where precision matters and errors have real consequences.',
            'What AI does well is process large amounts of information quickly. It can summarize drug interaction data, draft patient-friendly explanations, structure MTM review notes, and generate first drafts of prior authorization letters. These are tasks that consume 50-60% of your day - and AI handles the initial legwork in minutes, giving you a starting point to verify and refine.',
          ],
        },
        {
          heading: 'Where AI fits in the pharmacy workflow',
          paragraphs: [
            'Think of AI as a well-read pharmacy intern who has studied every drug monograph, every FDA label, and every clinical guideline - but has never worked behind the counter. It can pull together information and organize it, but it needs your experience to interpret what matters for each specific patient.',
            'You paste in a medication list and AI flags potential interactions with clinical significance ratings. You describe a patient scenario and it drafts a counseling script you can customize. You provide prescription details and it generates a prior authorization letter with the right clinical justification language. The output is always your starting point, never your final answer.',
            'The pharmacists gaining the most from AI are using it to eliminate the manual research and documentation overhead that keeps them stuck behind a screen instead of engaging with patients and providers.',
          ],
        },
      ],
      keyInsight:
        'Your clinical expertise + your patient knowledge + AI\'s information processing speed = better patient care in less time. AI handles the data gathering. You handle the clinical decisions.',
    },

    ch3: {
      intro: 'Five tools that cover the core pharmacy workflow. Practical, accessible, no unnecessary complexity.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drug information and drafting partner',
          description:
            'Summarize drug interactions, draft patient counseling materials, generate prior authorization letters, and work through clinical scenarios. Best for interactive research and content generation across all pharmacy tasks.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - best all-rounder',
          icon: 'chatgpt',
        },
        {
          name: 'Perplexity',
          role: 'Your clinical research assistant',
          description:
            'Search current drug information, clinical guidelines, and FDA updates with source citations. Pulls from real-time sources - ideal for checking recent drug recalls, new interaction data, and updated prescribing guidelines.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed drug research',
          icon: 'perplexity',
        },
        {
          name: 'Claude',
          role: 'Your documentation and analysis specialist',
          description:
            'Excels at processing long medication lists, writing detailed MTM assessments, drafting comprehensive clinical reviews, and analyzing complex polypharmacy regimens. Handles large amounts of context - paste full patient profiles for thorough analysis.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long-form clinical documents',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your pharmacy knowledge base',
          description:
            'Organize protocols, standard counseling scripts, compounding formulas, and reference materials. AI-powered search across your pharmacy documentation. Build a team knowledge base that grows over time.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when you want a structured knowledge hub',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your patient education material creator',
          description:
            'Design professional patient handouts, medication guides, wellness infographics, and pharmacy marketing materials. AI-assisted templates make it easy to create polished visuals without design skills.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for patient-facing materials',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drug research and drafting, plus Perplexity for source-verified clinical lookups. Add Notion AI for organizing your knowledge base and Canva AI for patient materials. That combination covers research, documentation, and patient education.',
    },

    ch4: {
      intro:
        'Six systems that map directly to the tasks you handle every day in pharmacy practice. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'Drug Interaction Research',
          before:
            'A new prescription comes in for a patient on multiple medications. You open your drug interaction database, check each pair individually, read through monographs for clinical significance, and try to piece together the full picture. Complex regimens with 8-10 medications can take 20-30 minutes to thoroughly review.',
          after:
            'You paste the full medication list into AI and get a structured interaction summary in under two minutes - flagged by severity, with clinical significance notes and recommended actions. You verify the critical flags against your database and make your clinical decision in a fraction of the time.',
          flow: [
            'Collect the patient\'s full medication list including OTCs and supplements',
            'Paste into ChatGPT or Claude with the interaction analysis prompt',
            'Review the flagged interactions sorted by severity',
            'Cross-verify high-severity flags in your clinical database',
            'Document findings and contact prescriber if needed',
          ],
          timeSaved: { without: '20-30 min per complex review', withAI: '5-8 minutes' },
        },
        {
          id: 2,
          name: 'Patient Counseling Scripts',
          before:
            'Each patient needs a personalized explanation of their medication - how to take it, side effects to watch for, food interactions, what to do if they miss a dose. You explain this verbally, repeating similar information dozens of times a day, with no written takeaway for the patient.',
          after:
            'AI generates a patient-friendly counseling script customized to the specific medication, patient age, and health literacy level. You review it in 30 seconds, personalize it, and either use it as talking points or print it as a take-home reference.',
          flow: [
            'Enter the medication name, dose, and patient context',
            'AI generates a plain-language counseling script',
            'Review for accuracy and add patient-specific notes',
            'Use as verbal talking points or print for the patient',
            'Save to your counseling script library for reuse',
          ],
          timeSaved: { without: '8-10 min per new medication', withAI: '2-3 minutes' },
        },
        {
          id: 3,
          name: 'Medication Therapy Management',
          before:
            'MTM reviews require analyzing a patient\'s complete medication regimen - checking for duplications, interactions, adherence issues, cost optimization opportunities, and therapeutic gaps. Each comprehensive review takes 30-45 minutes of focused analysis, and you have a backlog of five or more waiting.',
          after:
            'Paste the patient\'s medication list and health conditions into AI. It produces a structured MTM assessment draft with flagged issues, recommended changes, and clinical justifications. You review, apply your clinical judgment, and finalize in 15 minutes instead of 45.',
          flow: [
            'Gather patient medication list, diagnoses, and lab values',
            'Run the MTM analysis prompt with all relevant data',
            'Review AI-generated findings for therapeutic issues',
            'Apply your clinical judgment to each recommendation',
            'Document the final assessment and action plan',
          ],
          timeSaved: { without: '30-45 min per review', withAI: '12-15 minutes' },
        },
        {
          id: 4,
          name: 'Prior Authorization Support',
          before:
            'Insurance denials come in and you need to write clinical justification letters. Each one requires pulling patient history, documenting failed therapies, citing formulary exceptions, and using the right clinical language to maximize approval chances. A single letter can take 20-30 minutes.',
          after:
            'Feed AI the patient details, denied medication, reason for denial, and clinical history. It drafts a comprehensive prior authorization appeal letter with proper clinical justification language, relevant diagnosis codes, and documentation of medical necessity. You review and submit.',
          flow: [
            'Collect denial details, patient history, and clinical rationale',
            'Run the prior authorization prompt with all context',
            'Review the drafted appeal letter for accuracy',
            'Add any missing patient-specific clinical details',
            'Submit through the insurance portal or fax system',
          ],
          timeSaved: { without: '20-30 min per letter', withAI: '5-8 minutes' },
        },
        {
          id: 5,
          name: 'Inventory Analysis',
          before:
            'Monthly inventory review means pulling dispensing data, identifying slow-moving stock, checking expiration dates across hundreds of items, calculating reorder points, and reconciling controlled substance counts. It is a full afternoon of spreadsheet work.',
          after:
            'Export your dispensing data and paste it into AI. It identifies trends, flags items approaching expiration, suggests reorder quantities based on usage patterns, and highlights discrepancies in controlled substance counts. The analysis that took an afternoon now takes 30 minutes.',
          flow: [
            'Export dispensing data and current inventory counts',
            'Run the inventory optimization prompt with the data',
            'Review flagged items - expirations, slow movers, fast movers',
            'Adjust reorder points based on AI recommendations',
            'Document controlled substance reconciliation findings',
          ],
          timeSaved: { without: '3-4 hours monthly', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Continuing Education',
          before:
            'Staying current with new drugs, guideline updates, and clinical research means reading through lengthy journal articles, FDA announcements, and CE materials. You bookmark things to read later, but later rarely comes. Studying for recertification happens in stressful cramming sessions.',
          after:
            'AI summarizes new drug approvals, creates study guides from clinical guidelines, generates practice questions from pharmacology topics, and distills journal articles into key takeaways. You stay current in 15 minutes a day instead of falling behind.',
          flow: [
            'Identify the topic or guideline you need to review',
            'Run the CE study guide prompt for structured learning material',
            'AI generates summaries, key points, and practice questions',
            'Test yourself with the generated questions',
            'Track completed topics toward your CE requirements',
          ],
          timeSaved: { without: '2-3 hours per topic', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts for pharmacy work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Drug Interaction Research',
          prompts: [
            {
              id: 'ph-p-1-1',
              title: 'Comprehensive Interaction Check',
              task: 'Analyze a full medication list for interactions',
              prompt: `I am a pharmacist reviewing a patient's medication regimen for drug interactions.

Patient medications:
[List all medications with doses - include prescription, OTC, and supplements]

Patient context:
- Age: [age]
- Key diagnoses: [list conditions]
- Relevant lab values: [if available - renal function, liver function, etc.]

For each identified interaction:
1. Drug pair involved
2. Severity rating (major, moderate, minor)
3. Clinical significance - what could actually happen
4. Mechanism of the interaction
5. Recommended action (monitor, adjust dose, avoid, or alternative)

Sort by severity - major interactions first. Flag any interactions that require immediate prescriber contact.`,
              result:
                'A structured interaction summary sorted by clinical severity with actionable recommendations.',
              tip: 'Always verify major interaction flags against your clinical database before contacting prescribers. AI is a starting point, not a final authority.',
            },
            {
              id: 'ph-p-1-2',
              title: 'Patient-Friendly Interaction Explanation',
              task: 'Explain a drug interaction in simple terms for a patient',
              prompt: `I need to explain a drug interaction to a patient in plain, simple language.

The interaction:
- Drug 1: [medication name and what it is for]
- Drug 2: [medication name and what it is for]
- What happens: [brief clinical description of the interaction]

Write an explanation that:
- Uses everyday language (6th grade reading level)
- Explains why these two medications can cause problems together
- Describes warning signs the patient should watch for
- Tells them exactly what to do if they notice symptoms
- Reassures them without minimizing the risk
- Is under 200 words

Avoid medical jargon. Use "you" and "your" throughout.`,
              result:
                'A clear, empathetic patient explanation you can use verbally or print as a handout.',
              tip: 'Customize the reading level based on your patient. Add specific contact instructions for your pharmacy.',
            },
            {
              id: 'ph-p-1-3',
              title: 'New Drug Interaction Profile',
              task: 'Build a quick reference for a newly approved drug\'s interaction profile',
              prompt: `I need a concise interaction reference for a drug I am less familiar with.

Drug name: [generic and brand name]
Drug class: [therapeutic class]
Primary indication: [what it treats]

Create a quick-reference interaction profile:
1. Major drug classes that interact (list the class and why)
2. Specific high-risk combinations to watch for
3. Food and beverage interactions
4. Supplement and OTC interactions
5. Effect on common lab values
6. Key pharmacokinetic details relevant to interactions (CYP enzymes, protein binding, renal clearance)
7. Special populations - elderly, pediatric, renal impairment, hepatic impairment

Format as a reference card I can keep at my workstation. Concise bullet points, not paragraphs.`,
              result:
                'A workstation-ready reference card for a new drug\'s interaction profile.',
              tip: 'Run this in Perplexity for the most current data, especially for recently approved medications.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Patient Counseling Scripts',
          prompts: [
            {
              id: 'ph-p-2-1',
              title: 'New Medication Counseling Script',
              task: 'Generate a complete counseling script for a new prescription',
              prompt: `Create a patient counseling script for a new prescription.

Medication: [drug name, strength, form]
Directions: [sig code or plain directions]
Indication: [what the prescriber is treating]
Patient: [age range, any relevant context like first-time user or switching medications]

The counseling script should cover:
1. What this medication is and what it does (simple terms)
2. Exactly how to take it (timing, with or without food, special instructions)
3. How long until they should expect it to work
4. Common side effects and which ones are normal vs. concerning
5. Side effects that require immediate medical attention
6. Missed dose instructions
7. Storage requirements
8. Things to avoid (foods, alcohol, driving, sun exposure, etc.)
9. Interactions with common OTC medications they might take
10. One reassuring closing statement

Write in conversational tone. Use "you" language. Keep each section to 2-3 sentences maximum.`,
              result:
                'A complete, patient-friendly counseling script covering all essential points.',
              tip: 'Save your most common scripts in Notion. Over time you build a library that covers 80% of your daily counseling.',
            },
            {
              id: 'ph-p-2-2',
              title: 'Chronic Condition Medication Guide',
              task: 'Create a take-home guide for patients managing a chronic condition',
              prompt: `Create a patient-friendly medication guide for managing a chronic condition.

Condition: [diabetes, hypertension, asthma, etc.]
Current medications for this condition: [list with doses]
Patient context: [newly diagnosed, medication change, adherence issues, etc.]

The guide should include:
1. A simple explanation of the condition (2-3 sentences)
2. Each medication - what it does and why it matters (plain language)
3. A daily medication schedule formatted as a simple table
4. Lifestyle tips that support the medications (diet, exercise, monitoring)
5. Warning signs that mean "call your pharmacist" vs. "go to the ER"
6. Common questions patients ask about this condition and medications
7. When to schedule follow-up with their doctor

Write at a 6th grade reading level. Keep it to one printable page. Use bullet points and short sentences.`,
              result:
                'A printable one-page chronic condition medication guide for patient take-home.',
              tip: 'Pair this with Canva AI to turn the text into a professionally designed handout with your pharmacy branding.',
            },
            {
              id: 'ph-p-2-3',
              title: 'Pediatric Medication Explanation for Parents',
              task: 'Explain a child\'s medication to a worried parent',
              prompt: `I need to explain a pediatric medication to a parent or caregiver.

Medication: [drug name, strength, form - liquid, chewable, etc.]
Child's age: [age]
Condition being treated: [what the child has]
Dosing: [dose and frequency]

Write a parent-friendly explanation that covers:
1. What this medication does in the child's body (very simple terms)
2. Exact dosing instructions (measuring tips for liquids, what to do if the child spits it out)
3. Tips for getting a child this age to take the medication
4. Side effects that are normal and expected
5. Side effects that mean you should call the doctor
6. How long the full course lasts and why finishing it matters (if applicable)
7. Storage and handling
8. Can it be mixed with food or drink

Tone should be reassuring but thorough. Parents worry - acknowledge that while being informative.`,
              result:
                'A parent-friendly medication explanation that addresses both clinical and practical concerns.',
              tip: 'Adjust the tone based on the parent. First-time parents need more reassurance. Experienced parents want efficiency.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Medication Therapy Management',
          prompts: [
            {
              id: 'ph-p-3-1',
              title: 'Comprehensive MTM Review',
              task: 'Conduct a full medication therapy management assessment',
              prompt: `I am conducting a comprehensive medication therapy management review.

Patient profile:
- Age: [age], Sex: [sex]
- Diagnoses: [list all known conditions]
- Current medications: [list all with doses and frequencies]
- Allergies: [list]
- Recent lab values: [A1C, creatinine, lipid panel, etc. if available]
- Adherence concerns: [any known issues]

Perform a structured MTM assessment:
1. Medication appropriateness - is each medication indicated for a documented condition?
2. Untreated conditions - any diagnoses without corresponding therapy?
3. Drug-drug interactions (flag by severity)
4. Drug-disease interactions
5. Duplicate therapy check
6. Dose optimization - any doses that seem too high or low for the patient profile
7. Cost optimization - any generic or therapeutic alternatives that could reduce cost
8. Adherence barriers - complexity of regimen, timing conflicts, side effect burden
9. Monitoring needs - labs or follow-ups that should be scheduled
10. Top 3 priority recommendations with clinical justification

Format as a clinical assessment document I can include in the patient record.`,
              result:
                'A structured MTM assessment document with prioritized clinical recommendations.',
              tip: 'Always apply your own clinical judgment to the recommendations. AI catches patterns but does not know the patient the way you do.',
            },
            {
              id: 'ph-p-3-2',
              title: 'Polypharmacy Simplification Plan',
              task: 'Develop a plan to simplify a complex medication regimen',
              prompt: `Help me develop a polypharmacy simplification plan for a patient on too many medications.

Current medication list:
[List all medications with doses, frequencies, and indications]

Patient context:
- Age: [age]
- Cognitive status: [any concerns]
- Physical limitations: [dexterity, vision, swallowing issues]
- Caregiver involvement: [self-managing or assisted]
- Insurance/cost concerns: [any known issues]

Analyze and recommend:
1. Medications that may be candidates for deprescribing (with rationale)
2. Combination products that could replace multiple individual drugs
3. Dosing schedule simplification - can anything move to once daily?
4. Therapeutic duplications that could be consolidated
5. Medications that may no longer be indicated based on current guidelines
6. A simplified medication schedule showing the optimized regimen
7. Tapering plan for any medications that should not be stopped abruptly
8. Monitoring plan during the simplification process

Be conservative. Flag which changes need prescriber approval and which are pharmacist-level interventions.`,
              result:
                'A detailed simplification plan with tapering schedules and monitoring checkpoints.',
              tip: 'Present this as recommendations, not directives. Collaborate with the prescriber on the final plan.',
            },
            {
              id: 'ph-p-3-3',
              title: 'MTM Follow-Up Documentation',
              task: 'Document an MTM follow-up and track progress',
              prompt: `Document an MTM follow-up visit and create a progress tracking note.

Patient: [age, key conditions]
Previous MTM date: [date]
Previous recommendations: [list what was recommended last time]

Current visit findings:
- Medications changed since last visit: [any additions, removals, dose changes]
- Adherence update: [what the patient reports]
- Lab values since last visit: [if available]
- Patient concerns: [what they brought up]
- Clinical observations: [anything you noticed]

Create a follow-up note that includes:
1. Brief summary of previous recommendations and their status (implemented, pending, declined)
2. Updated assessment based on current findings
3. New or revised recommendations
4. Patient education provided during this visit
5. Goals for next follow-up
6. Recommended follow-up timeframe
7. Communications needed with prescriber(s)

Format as a clinical documentation note with clear section headers.`,
              result:
                'A complete MTM follow-up note ready for the patient record.',
              tip: 'Build a template library for common follow-up scenarios. Over time, documentation becomes faster as you refine your templates.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Prior Authorization Support',
          prompts: [
            {
              id: 'ph-p-4-1',
              title: 'Prior Authorization Appeal Letter',
              task: 'Draft a clinical appeal letter for a denied prior authorization',
              prompt: `Draft a prior authorization appeal letter for a medication denial.

Patient information:
- Age: [age], Sex: [sex]
- Diagnosis: [ICD-10 code and description]
- Denied medication: [drug name, strength, quantity]
- Insurance: [plan name]
- Denial reason: [what the insurance company stated]

Clinical justification:
- Previous therapies tried and failed: [list medications, duration, and reason for failure]
- Why this specific medication is needed: [clinical rationale]
- Supporting lab values or clinical data: [if available]
- Relevant clinical guidelines supporting this choice: [if known]

Write a professional appeal letter that:
1. Opens with the patient identifier and denied claim reference
2. States the medical necessity clearly and concisely
3. Documents the step therapy or formulary exception justification
4. References clinical guidelines or evidence where applicable
5. Includes a clear ask - approval for [specific duration and quantity]
6. Closes with urgency if the patient is at risk without the medication

Tone should be professional, evidence-based, and assertive without being adversarial.`,
              result:
                'A polished prior authorization appeal letter ready for submission after your review.',
              tip: 'Keep a file of successful appeal letters organized by drug class. Patterns emerge in what language gets approvals.',
            },
            {
              id: 'ph-p-4-2',
              title: 'Step Therapy Exception Request',
              task: 'Build a case for a step therapy exception',
              prompt: `Help me build a step therapy exception request.

Situation:
- Prescribed medication: [drug name and class]
- Insurance requires trying first: [step therapy requirements]
- Why the patient cannot or should not try the step therapy drugs:
  [clinical reason - allergy, contraindication, previous failure, condition severity, etc.]

Patient clinical details:
- Diagnoses: [relevant conditions]
- Medication history: [relevant prior medications]
- Allergies: [relevant allergies]
- Lab values: [if relevant]

Create a structured exception request that includes:
1. Clear statement of which step therapy requirement is being excepted
2. Clinical rationale for each required step that has been tried or cannot be tried
3. Evidence that the prescribed medication is the appropriate choice
4. Risk to the patient if forced to comply with step therapy
5. Supporting references from clinical guidelines
6. Timeline urgency if applicable

Keep it factual and clinical. Insurance medical directors respond to evidence, not emotion.`,
              result:
                'A structured step therapy exception document with clinical justification.',
              tip: 'Include specific guideline citations when possible. Reference ADA, AHA, or specialty-specific guidelines by name.',
            },
            {
              id: 'ph-p-4-3',
              title: 'Prior Auth Status Tracker Summary',
              task: 'Create a summary of pending prior authorizations for follow-up',
              prompt: `Help me organize and summarize my pending prior authorization cases for follow-up.

Here are my current pending cases:
[List each case with: patient name/ID, medication, date submitted, insurance, current status]

For each case, create a tracking summary:
1. Days since submission
2. Expected turnaround based on the insurance plan
3. Whether it is past due for a response
4. Recommended next action (call insurance, resubmit, escalate, contact prescriber)
5. Priority level (urgent - patient without medication, standard, low)

Then give me:
- A prioritized follow-up list for today
- Any cases that need escalation
- Template language for follow-up calls to insurance ("I am calling about...")
- Cases where I should proactively contact the patient with an update

Format as a checklist I can work through during my follow-up block.`,
              result:
                'A prioritized follow-up checklist with action items and call scripts.',
              tip: 'Run this weekly to stay on top of pending authorizations. Patients notice when you proactively follow up.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Inventory Analysis',
          prompts: [
            {
              id: 'ph-p-5-1',
              title: 'Monthly Inventory Optimization',
              task: 'Analyze dispensing data and optimize inventory levels',
              prompt: `Analyze the following pharmacy dispensing and inventory data to optimize stock levels.

Data:
[Paste dispensing report data - drug name, quantity dispensed per month, current stock, reorder point, unit cost]

Analyze and provide:
1. Fast movers - top 20 medications by volume with trend (increasing, stable, decreasing)
2. Slow movers - items with less than 2 dispenses in the past 3 months
3. Overstocked items - current stock exceeds 3 months of average usage
4. Understocked items - current stock is below 2 weeks of average usage
5. Expiration risk - items likely to expire before being dispensed based on usage rate
6. Cost optimization - high-cost items where usage does not justify current stock levels
7. Recommended reorder quantities for the next ordering cycle
8. Suggested return-to-wholesaler candidates

Format as a table with columns: Drug Name, Monthly Usage, Current Stock, Months on Hand, Recommended Action.`,
              result:
                'A data-driven inventory optimization report with specific reorder recommendations.',
              tip: 'Export data from your pharmacy system as a CSV or table. The cleaner your input data, the more accurate the analysis.',
            },
            {
              id: 'ph-p-5-2',
              title: 'Controlled Substance Reconciliation',
              task: 'Structure a controlled substance inventory reconciliation',
              prompt: `Help me structure a controlled substance inventory reconciliation report.

Controlled substance data:
[List each: drug name, schedule, expected count based on records, actual physical count, discrepancy if any]

For each discrepancy found:
1. Calculate the exact variance (positive or negative)
2. Suggest possible legitimate explanations (partial fills, returns, waste documentation)
3. Flag which discrepancies require investigation vs. likely documentation errors
4. Identify what records need to be pulled to resolve each discrepancy
5. Note which variances must be reported based on DEA regulations

Then create:
- A summary table of all controlled substances with their reconciliation status
- A list of action items to resolve open discrepancies
- Documentation language for your reconciliation log
- A checklist for preventing common reconciliation errors going forward

Format for regulatory compliance documentation.`,
              result:
                'A complete controlled substance reconciliation report with investigation action items.',
              tip: 'Run this on a consistent schedule. Patterns in discrepancies often point to process issues rather than diversion.',
            },
            {
              id: 'ph-p-5-3',
              title: 'Seasonal Demand Forecasting',
              task: 'Predict seasonal inventory needs based on historical patterns',
              prompt: `Help me forecast seasonal inventory needs for the upcoming period.

Context:
- Pharmacy type: [retail, hospital outpatient, long-term care, etc.]
- Upcoming season/period: [flu season, allergy season, back-to-school, etc.]
- Geographic region: [for regional disease patterns]

Historical data if available:
[Paste previous year dispensing data for the relevant period, or describe trends you have observed]

Provide:
1. Categories of medications likely to see increased demand
2. Specific drugs to stock up on with estimated volume increase (percentage)
3. OTC items that typically surge during this period
4. Vaccines and supplies to ensure adequate stock
5. Medications that typically decrease during this period (reduce orders)
6. Recommended timeline - when to start increasing orders
7. Budget estimate for the seasonal inventory adjustment
8. Contingency plan for unexpected shortages

Keep recommendations practical for a [pharmacy type] pharmacy. I need a specific ordering action plan, not general advice.`,
              result:
                'A seasonal demand forecast with a specific ordering timeline and quantity recommendations.',
              tip: 'Compare AI predictions against your actual data each season to refine future forecasts.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Continuing Education',
          prompts: [
            {
              id: 'ph-p-6-1',
              title: 'Clinical Guideline Study Guide',
              task: 'Create a study guide from a clinical guideline or drug topic',
              prompt: `Create a study guide for the following pharmacy topic.

Topic: [e.g., "2024 ADA Standards of Care updates", "new SGLT2 inhibitor evidence", "pediatric dosing for common antibiotics"]

Study guide should include:
1. Key concepts summary (bullet points, not paragraphs)
2. What changed from previous guidelines (if applicable)
3. Critical numbers to remember (doses, thresholds, lab targets)
4. Clinical pearls - practical application tips
5. Common exam-style questions with answers (5-10 questions)
6. Drug comparison table if multiple agents are involved
7. Patient counseling points related to this topic
8. One-page cheat sheet version for quick reference

Write for a licensed pharmacist audience. Be clinically precise but concise. I am studying, not reading a textbook.`,
              result:
                'A focused study guide with practice questions and a quick-reference cheat sheet.',
              tip: 'Use Perplexity to find the most current guideline version before generating the study guide.',
            },
            {
              id: 'ph-p-6-2',
              title: 'New Drug Approval Summary',
              task: 'Summarize a newly approved drug for clinical readiness',
              prompt: `Summarize the following newly approved drug so I am clinically ready when prescriptions come in.

Drug: [generic name (brand name)]
FDA approval date: [if known]
Indication: [what it was approved for]

Create a clinical readiness summary:
1. Mechanism of action (2-3 sentences, clear and practical)
2. Place in therapy - where does it fit vs. existing options
3. Dosing and administration key points
4. Major side effects and black box warnings
5. Key drug interactions to watch for
6. Monitoring requirements (labs, vital signs, symptoms)
7. Storage and handling requirements
8. Insurance and formulary expectations (likely tier, PA requirements)
9. Patient counseling highlights (top 5 things to tell patients)
10. How it compares to the closest competitor in the same class

Format as a one-page reference I can keep at my verification station.`,
              result:
                'A workstation-ready new drug reference card covering clinical and practical details.',
              tip: 'Create these proactively for drugs in late-stage pipeline so you are prepared before the first prescription arrives.',
            },
            {
              id: 'ph-p-6-3',
              title: 'Pharmacology Review Flashcards',
              task: 'Generate review flashcards for a therapeutic area',
              prompt: `Generate pharmacology review flashcards for the following therapeutic area.

Therapeutic area: [e.g., cardiology, endocrinology, infectious disease, psychiatry]
Focus on: [specific drug classes or topics within the area]
Level: [NAPLEX prep, board review, CE refresher, clinical update]

Create 15 flashcards with:
- Front: A clinical question or scenario
- Back: The answer with a brief explanation

Mix the question types:
- 5 mechanism/pharmacology questions
- 5 clinical application questions (patient scenarios)
- 3 drug interaction or contraindication questions
- 2 patient counseling questions

Make the scenarios realistic. Use actual drug names, doses, and clinical parameters. Include the kind of details that distinguish a good pharmacist from an average one.`,
              result:
                'A set of 15 clinically relevant flashcards for study and review.',
              tip: 'Study these in short sessions - 5 cards at a time is more effective than cramming all 15.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what your time savings actually look like when AI handles the legwork.',
      timeTable: [
        {
          task: 'Drug interaction research',
          without: '20-30 min per review',
          withAI: '5-8 minutes',
          saved: '15-22 min each',
        },
        {
          task: 'Patient counseling prep',
          without: '8-10 min per medication',
          withAI: '2-3 minutes',
          saved: '6-7 min each',
        },
        {
          task: 'MTM reviews',
          without: '30-45 min per patient',
          withAI: '12-15 minutes',
          saved: '18-30 min each',
        },
        {
          task: 'Prior authorization letters',
          without: '20-30 min per letter',
          withAI: '5-8 minutes',
          saved: '15-22 min each',
        },
        {
          task: 'Monthly inventory analysis',
          without: '3-4 hours',
          withAI: '30-45 minutes',
          saved: '2.5-3 hrs',
        },
        {
          task: 'CE study and review',
          without: '2-3 hours per topic',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '8-12 hrs/week',
      },
      sections: [
        {
          heading: 'The Shift',
          paragraphs: [
            'Pharmacy is evolving from a dispensing-focused role to a clinical services role. The pharmacists who thrive in 2026 and beyond are the ones who can provide MTM, medication reconciliation, immunizations, and patient education at scale - not the ones buried in paperwork and phone holds with insurance companies.',
            'AI does not make you a better pharmacist. It gives you back the time to be the pharmacist you were trained to be.',
          ],
        },
        {
          heading: 'The Opportunity',
          paragraphs: [
            'Every hour saved on administrative work is an hour you can spend on clinical services that improve patient outcomes and generate revenue. MTM billing, clinical consultations, and expanded services are where pharmacy is heading. AI is how you get there without burning out.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Try the drug interaction research prompt with your next complex patient. See how it feels. Build from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your pharmacy workflow. Follow the plan, check off each step, and by the end of the week you will have a new way of working.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'ph-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'ph-1-2', label: 'Create a free Perplexity account' },
            { id: 'ph-1-3', label: 'Bookmark this guide for quick access' },
          ],
        },
        {
          day: 2,
          title: 'First Interaction Check',
          duration: '15 min',
          items: [
            {
              id: 'ph-2-1',
              label:
                'Pick a complex patient with 5 or more medications',
            },
            {
              id: 'ph-2-2',
              label:
                'Run the Comprehensive Interaction Check prompt with their real medication list',
            },
            {
              id: 'ph-2-3',
              label:
                'Compare the output to what you would have found manually - notice the time difference',
            },
          ],
        },
        {
          day: 3,
          title: 'Patient Counseling',
          duration: '15 min',
          items: [
            {
              id: 'ph-3-1',
              label: 'Run the New Medication Counseling Script prompt for your next new prescription',
            },
            {
              id: 'ph-3-2',
              label: 'Use the script during your next patient counseling session',
            },
          ],
        },
        {
          day: 4,
          title: 'Tackle a Review',
          duration: '20 min',
          items: [
            {
              id: 'ph-4-1',
              label: 'Run the Comprehensive MTM Review prompt for a real patient',
            },
            {
              id: 'ph-4-2',
              label: 'Review the AI output against your clinical judgment',
            },
            {
              id: 'ph-4-3',
              label: 'Note how much faster the initial assessment came together',
            },
          ],
        },
        {
          day: 5,
          title: 'Handle a Prior Auth',
          duration: '15 min',
          items: [
            {
              id: 'ph-5-1',
              label: 'Use the Prior Authorization Appeal Letter prompt for your next denial',
            },
            {
              id: 'ph-5-2',
              label: 'Review, customize, and submit the letter',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore More',
          duration: '20 min',
          items: [
            {
              id: 'ph-6-1',
              label: 'Try the inventory analysis or CE study guide prompts',
            },
            {
              id: 'ph-6-2',
              label: 'Identify which system saves you the most time and lean into it',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'ph-7-1',
              label: 'What worked this week? Which prompts will you keep using?',
            },
            {
              id: 'ph-7-2',
              label: 'Share this guide with a colleague who could benefit',
            },
            {
              id: 'ph-7-3',
              label: 'Pick one system to master this month',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
