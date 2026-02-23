import type { WorkbookData } from './types'

export const paralegalsData = {
  professionId: 'paralegals',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Paralegals',
  heroDescription:
    'Everything you need to start using AI in your paralegal work - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your Monday starts with a stack of documents that need to be reviewed, organized, and summarized before the attorney meeting at 2pm. The case timeline for the Henderson matter is due by Wednesday, and you have not even started pulling the dates from the 200-page file. There are three court filings that need preparation this week, each with different formatting requirements and deadlines you cannot miss.',
        'A new client intake form came in Friday afternoon. The information needs to be entered into the case management system, conflicts checked, and a preliminary file opened. The attorney wants a research memo on a jurisdictional question by Thursday. Your calendar shows six depositions to schedule across three different matters, and the court just moved a hearing date which means refiling a motion.',
        'You became a paralegal because you are organized, detail-oriented, and passionate about the legal process. You keep the wheels turning in every case. But instead of using your skills on substantive legal work, you spend most of your time on tasks that are critical but repetitive - tasks that could be done in a fraction of the time with the right tools.',
      ],
      highlight:
        'What if AI could handle the first pass of document review, draft your timelines, and prepare your filing checklists - so you could focus on the substantive paralegal work that attorneys depend on?',
      closingParagraph:
        'Not replacing your attention to detail. Not doing your job for you. Just removing the 4-5 hours of manual processing that sits between receiving a task and delivering a polished work product.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not a replacement for paralegals. It cannot catch the filing detail that experience taught you to double-check. It will not remember that Judge Martinez requires a particular caption format or that the Henderson file has a confidentiality order affecting every document. And it absolutely cannot replace the organizational instinct that keeps complex multi-party litigation running smoothly.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most tireless assistant you have ever worked with. It can read a 100-page document and summarize it in 2 minutes. It can pull dates from scattered records and organize them into a chronological timeline. It can draft a research memo outline that would take you an hour to structure from scratch.',
            'Need to summarize a deposition transcript? AI does it in 3 minutes. Need to create a filing checklist for a new jurisdiction? AI generates a starting point in 30 seconds. Need to turn messy intake notes into a structured client profile? 2 minutes.',
            'The rule: AI handles the heavy lifting on the first pass. You provide the quality control, the institutional knowledge, and the precision that makes the final product reliable.',
          ],
        },
        {
          heading: 'Why paralegals benefit the most',
          paragraphs: [
            'Paralegal work is inherently structured - document organization follows patterns, timelines follow chronology, filings follow rules, and research follows established methodologies. AI excels at structured tasks. It takes the pattern you know by heart and applies it at machine speed.',
            'The paralegals who adopt AI first will handle heavier caseloads with less stress, deliver work product faster, and spend their time on the high-judgment tasks that make them indispensable to their attorneys.',
          ],
        },
      ],
      keyInsight:
        'Your organizational skills + AI\'s processing speed = better work product delivered faster. You know the process and the details that matter. AI eliminates the hours of manual processing between the task and the deliverable.',
    },

    ch3: {
      intro: 'You do not need expensive subscriptions. These five tools cover the essentials of AI-assisted paralegal work.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and analysis workhorse',
          description:
            'Document summaries, research memo drafts, timeline creation, client communications, and general legal writing tasks',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for most tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long document processor',
          description:
            'Lengthy document review, detailed summaries, complex research organization, and careful analysis of multi-page filings',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long documents',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Court rules lookups, jurisdictional requirements, procedural research, and quick fact-checking with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your case organization system',
          description:
            'Case file management, task tracking, deadline calendars, document indexes, and collaborative case notes',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything in one place',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual presentation builder',
          description:
            'Case timelines, trial exhibits, presentation boards, and visual aids for attorney meetings and court presentations',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Great for visual case materials',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for document work plus Perplexity for research. That handles 80% of your AI needs. Add Notion for organization when you are ready.',
    },

    ch4: {
      intro:
        'Here is where AI fits into your daily paralegal workflow. Each system replaces hours of manual processing. Click each one to explore.',
      systems: [
        {
          id: 1,
          name: 'Document Review and Organization',
          before:
            'You receive a box of documents - physical or digital. Each one needs to be read, categorized, indexed, and summarized. A 500-document production takes days of reading, tagging, and creating a document index. Important documents get buried in the volume.',
          after:
            'AI reads and categorizes documents in minutes. It generates summaries, identifies key documents, and creates a structured index. You review the AI output, verify accuracy, and focus your deep reading on the documents that actually matter.',
          flow: [
            'Upload or paste documents into AI for initial review',
            'AI categorizes by type, relevance, and subject matter',
            'Review AI-generated summaries for each document',
            'Create a document index with AI-assisted descriptions',
            'Flag key documents for detailed attorney review',
          ],
          timeSaved: { without: '2-3 days', withAI: '3-4 hours' },
        },
        {
          id: 2,
          name: 'Case Timeline Creation',
          before:
            'You pull dates from scattered documents - complaints, medical records, correspondence, contracts. Each date gets manually entered into a timeline. Cross-referencing takes hours. Missing a date means going back through everything again.',
          after:
            'AI extracts dates and events from documents and organizes them chronologically. You verify, add context, and fill in gaps the AI might miss. A timeline that took a full day now takes an hour.',
          flow: [
            'Paste or upload case documents with dates and events',
            'AI extracts every date and event mentioned',
            'Review the chronological output for accuracy',
            'Add context and source references for each entry',
            'Export the polished timeline for the case file',
          ],
          timeSaved: { without: '4-8 hours', withAI: '45-60 minutes' },
        },
        {
          id: 3,
          name: 'Filing Preparation',
          before:
            'Every court has different rules. You check the local rules, format the caption correctly, verify page limits, confirm service requirements, and create a filing checklist from memory or old files. Missing one requirement means a rejected filing and a bad day.',
          after:
            'AI generates jurisdiction-specific filing checklists, formats documents to court specifications, and flags potential issues before you file. You still verify everything, but the checklist catches what you might miss under deadline pressure.',
          flow: [
            'Specify the court, jurisdiction, and filing type',
            'AI generates a filing preparation checklist',
            'Review and customize based on your knowledge of local practice',
            'Use the checklist to prepare the filing package',
            'Final review before submission',
          ],
          timeSaved: { without: '1-2 hours/filing', withAI: '15-20 minutes' },
        },
        {
          id: 4,
          name: 'Legal Research Memos',
          before:
            'The attorney needs a research memo on a procedural question. You spend hours in databases, reading cases and statutes, then another hour organizing your findings into a coherent memo format. The whole process takes half a day or more.',
          after:
            'AI helps you organize your research into a structured memo, summarize the key authorities, and format your findings clearly. You still do the substantive research and verify everything, but the memo comes together in half the time.',
          flow: [
            'Define the research question and jurisdiction',
            'Gather your research from legal databases',
            'Feed findings to AI for organization and memo drafting',
            'Review and verify all citations and analysis',
            'Polish and deliver the finished memo',
          ],
          timeSaved: { without: '3-5 hours', withAI: '1-2 hours' },
        },
        {
          id: 5,
          name: 'Client Intake Processing',
          before:
            'A new client fills out an intake form. You manually enter the information into the case management system, run a conflicts check, open a new matter file, draft the engagement letter, and create initial task lists. The whole onboarding process takes 2-3 hours per client.',
          after:
            'AI processes the intake form, extracts key information, generates a structured client profile, and drafts initial documents. You verify everything and handle the judgment calls, but the data entry and document drafting happen automatically.',
          flow: [
            'Upload or paste the completed intake form',
            'AI extracts and organizes all client information',
            'Review the structured profile for accuracy',
            'AI drafts initial matter setup documents',
            'Complete the intake with your quality checks',
          ],
          timeSaved: { without: '2-3 hours/client', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Calendar and Deadline Management',
          before:
            'Court orders, filing deadlines, statute of limitations dates, discovery cutoffs, deposition schedules - they all live in different places. You manually calculate deadlines by counting days from trigger events, checking for holidays and weekends, and entering everything into the calendar system. One missed deadline can end a case.',
          after:
            'AI helps you extract deadlines from court orders, calculate filing dates, generate deadline reports, and create comprehensive case calendars. You verify every date, but the initial extraction and calculation happen in minutes instead of hours.',
          flow: [
            'Paste court orders or scheduling documents into AI',
            'AI extracts all deadlines and trigger dates',
            'Review and verify every calculated deadline',
            'Generate a master deadline report for the matter',
            'Set up calendar entries and reminder schedules',
          ],
          timeSaved: { without: '1-2 hours/order', withAI: '15-20 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every paralegal task. Click to reveal, copy, and paste. Fill in the brackets with your specifics. Always verify AI output before finalizing.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Document Review',
          prompts: [
            {
              id: 'pl-p-1-1',
              title: 'Document Summary Generator',
              task: 'Summarize a legal document quickly and accurately',
              prompt: `Summarize the following legal document for case file review.

Document type: [e.g., contract, deposition transcript, medical record, correspondence, pleading]
Case: [case name or matter number]
What I need to know: [specific questions or focus areas]

Document:
[Paste the document text]

Provide:
1. Document overview - what this is and who created it (2-3 sentences)
2. Key facts and information (bulleted list, 5-10 most important points)
3. Dates mentioned (listed chronologically)
4. Names and parties referenced (with their roles)
5. Financial amounts or terms mentioned
6. Obligations, deadlines, or action items
7. How this document relates to the case (if context was provided)
8. Anything unusual or noteworthy that the attorney should see
9. Sections requiring deeper review (with page or paragraph references)

Keep the summary under 400 words. Prioritize facts over interpretation. Flag anything you are uncertain about.`,
              result: 'A concise document summary for the case file.',
              tip: 'Process documents in batches of 3-5 for efficiency. Save the summaries in your case management system for quick reference.',
            },
            {
              id: 'pl-p-1-2',
              title: 'Document Index Creator',
              task: 'Create a categorized index of case documents',
              prompt: `Create a document index for the following set of case documents.

Case: [case name]
Document set: [e.g., initial production, client file, medical records]

Documents to index (list each with basic info):
[For each document, provide: document title or description, date, author/source, number of pages]

Create an index with:
1. Document number (sequential)
2. Date
3. Document type (categorize: correspondence, pleading, contract, medical record, financial record, etc.)
4. Author/Source
5. Recipient (if applicable)
6. Brief description (one sentence)
7. Key topics covered
8. Privilege flag (potentially privileged / not privileged / needs review)
9. Relevance rating: High / Medium / Low

Then provide:
- Summary statistics (total documents by category)
- Chronological overview of the document set
- Gaps identified (missing dates or expected documents not present)
- Recommended priority order for detailed review

Format as a clean table I can paste into a spreadsheet or case management system.`,
              result: 'A structured document index ready for the case file.',
              tip: 'Update this index as new documents come in. It becomes an invaluable reference throughout the case.',
            },
            {
              id: 'pl-p-1-3',
              title: 'Deposition Transcript Digest',
              task: 'Create a summary digest of deposition testimony',
              prompt: `Create a deposition digest from the following transcript.

Case: [case name]
Deponent: [name and role in the case]
Date of deposition: [date]
Taken by: [which side took the deposition]

Transcript (full or relevant portions):
[Paste the transcript text]

Create a digest with:
1. Deponent background (as established in the deposition)
2. Key testimony by topic area:
   - Topic heading
   - Summary of testimony on that topic
   - Significant quotes (with page and line references)
   - Admissions or damaging testimony
3. Documents referenced during testimony (exhibit numbers and descriptions)
4. Contradictions or inconsistencies within the testimony
5. Statements that contradict other evidence or testimony in the case
6. Areas where the deponent was evasive or non-responsive
7. Follow-up questions that should have been asked
8. Key takeaways for case strategy (3-5 bullet points)

Organize by topic, not chronologically. Include page:line citations for every significant statement.`,
              result: 'A comprehensive deposition digest organized by topic.',
              tip: 'Create these digests immediately after receiving the transcript while the testimony is fresh. They are essential for trial prep.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Case Timelines',
          prompts: [
            {
              id: 'pl-p-2-1',
              title: 'Chronological Case Timeline',
              task: 'Build a detailed case timeline from multiple sources',
              prompt: `Build a chronological case timeline from the following information.

Case: [case name]
Type: [e.g., personal injury, breach of contract, employment dispute]
Key parties: [list all parties and their roles]

Source material (paste everything - dates, facts, events from any source):
[Paste all available information - can be from multiple documents, notes, and records. Include dates wherever available.]

Create a timeline with:
1. Date (exact if available, approximate with "[approx.]" if estimated)
2. Event description (clear, factual, one sentence)
3. Source document (where this information comes from)
4. Parties involved in the event
5. Category: [e.g., key event, communication, filing, medical, financial]
6. Significance: High / Medium / Low

Additional requirements:
- Flag any date conflicts (same event, different dates in different sources)
- Identify gaps - periods where we expect events but have no information
- Note which events have documentary support vs. testimony only
- Highlight statute of limitations trigger events
- Mark any deadlines or future dates

End with a summary: total events, date range covered, top 5 most significant events, and identified gaps to investigate.`,
              result: 'A comprehensive, sourced case timeline.',
              tip: 'Build the timeline early in the case and update it as new information comes in. Share it with the attorney for strategic discussions.',
            },
            {
              id: 'pl-p-2-2',
              title: 'Medical Records Timeline',
              task: 'Create a chronological timeline from medical records',
              prompt: `Create a medical records timeline for the following case.

Case: [case name]
Patient/Client: [name]
Injuries/Conditions at issue: [what this case is about medically]
Date of incident: [if applicable]

Medical records information:
[Paste dates, providers, treatments, diagnoses - can be from summaries or records]

Create a medical timeline with:
1. Date of visit/treatment
2. Provider name and facility
3. Type of visit (ER, follow-up, surgery, therapy, etc.)
4. Chief complaint or reason for visit
5. Diagnosis or findings
6. Treatment provided
7. Medications prescribed or changed
8. Restrictions or limitations noted
9. Follow-up instructions
10. Notable quotes from provider notes

Also provide:
- Pre-incident medical history summary (if included in records)
- Gap analysis - periods without treatment (potential defense argument)
- Total treatment costs by provider (if billing records included)
- Summary of current status and prognosis
- Outstanding medical questions the attorney should discuss with the client

Flag any records that seem inconsistent with each other.`,
              result: 'A detailed medical records timeline for case evaluation.',
              tip: 'Medical timelines are critical in personal injury and workers comp cases. Flag any gaps - opposing counsel will.',
            },
            {
              id: 'pl-p-2-3',
              title: 'Transaction Timeline',
              task: 'Create a timeline for a business transaction or deal',
              prompt: `Create a transaction timeline for the following matter.

Matter: [description of the deal or transaction]
Parties: [list all parties involved]
Transaction type: [e.g., M&A, real estate closing, financing, corporate formation]

Transaction documents and events:
[Paste all available information about the deal - dates, documents, communications, milestones]

Create a timeline with:
1. Date
2. Event/Document description
3. Parties involved
4. Document reference (if a specific document exists)
5. Status: Completed / Pending / Overdue
6. Category: [negotiation, due diligence, regulatory, closing, post-closing]

Additional requirements:
- Identify all conditions precedent and their status
- Track all document versions and key changes between drafts
- Note regulatory filings and their deadlines
- Flag upcoming deadlines and deliverables
- Identify dependencies (what must happen before what)
- List outstanding items that could delay closing

End with: Current status summary, next 5 critical milestones, and any risk items.`,
              result: 'A complete transaction timeline with status tracking.',
              tip: 'Keep this updated in real time during active transactions. It becomes the go-to reference for status calls with all parties.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Filing Preparation',
          prompts: [
            {
              id: 'pl-p-3-1',
              title: 'Court Filing Checklist',
              task: 'Generate a jurisdiction-specific filing checklist',
              prompt: `Generate a filing preparation checklist for the following court submission.

Court: [court name - e.g., U.S. District Court for the Southern District of New York]
Filing type: [e.g., complaint, motion, answer, discovery responses, appeal brief]
Case number: [if existing case]
Filing deadline: [date]

Generate a detailed checklist covering:

Document Preparation:
- Caption format requirements for this court
- Page limits and formatting rules (margins, font, spacing, line numbering)
- Table of contents and table of authorities requirements
- Certificate of service requirements
- Signature block requirements
- Exhibit formatting and labeling rules

Filing Logistics:
- Electronic filing system requirements (CM/ECF, state e-filing, etc.)
- File format requirements (PDF specifications, file size limits)
- Filing fee amount and payment method
- Number of copies needed (if paper filing required)
- Judge-specific requirements or standing orders

Service Requirements:
- Who must be served
- Method of service permitted
- Proof of service format
- Service deadline relative to filing

Final Checks:
- Redaction requirements (personal identifiers, etc.)
- Confidentiality/sealing requirements
- Any local rules unique to this court

Note: Verify all requirements against current local rules. Courts update their rules regularly.`,
              result: 'A comprehensive filing checklist specific to your court and filing type.',
              tip: 'Save checklists for courts you file in regularly. Customize them over time as you learn each court\'s preferences.',
            },
            {
              id: 'pl-p-3-2',
              title: 'Service of Process Tracker',
              task: 'Create a service of process tracking document',
              prompt: `Create a service of process tracking document for the following case.

Case: [case name and number]
Court: [court name]
Filing date of complaint/petition: [date]

Parties to be served:
[List each defendant/respondent with:
- Name
- Type (individual, corporation, government entity, etc.)
- Known address
- Registered agent (if applicable)]

For each party, generate:
1. Service method required under [jurisdiction] rules
2. Deadline to complete service (calculate from filing date)
3. Requirements for valid service (who can serve, what must be delivered)
4. Alternative service options if standard service fails
5. Proof of service document requirements
6. Status tracking fields: Attempted / Served / Need Alternative / Deadline Extension Needed

Also include:
- Summary of [jurisdiction]'s service rules for each party type
- What happens if service deadline is missed
- How to request an extension of time for service
- Requirements for service by publication (if applicable)

Format as a tracking sheet I can update throughout the service process.`,
              result: 'A complete service tracking document with jurisdiction-specific requirements.',
              tip: 'Update this tracker immediately after each service attempt. It becomes your proof that you met all requirements.',
            },
            {
              id: 'pl-p-3-3',
              title: 'Filing Error Prevention Review',
              task: 'Review a filing package for common errors before submission',
              prompt: `Review the following filing package for errors before I submit it to the court.

Court: [court name]
Filing type: [what is being filed]
Filing deadline: [date and time]

Filing documents:
[List each document in the filing package with basic description]

Key information to verify:
- Case caption: [paste the caption]
- Case number: [number]
- Judge assigned: [name]
- Parties as listed: [names as they appear in the filing]

Check for these common filing errors:
1. Caption accuracy - correct court, parties, case number, judge
2. Consistency - are party names spelled the same throughout?
3. Date accuracy - are all dates referenced correct?
4. Page numbering - continuous and correct?
5. Formatting compliance - margins, font, spacing per local rules
6. Certificate of service - present, accurate, and properly dated?
7. Signature block - correct attorney name, bar number, firm information?
8. Exhibit references - do all references match actual exhibits?
9. Cross-references - do all internal references point to correct sections?
10. Redactions - are all required personal identifiers redacted?
11. Filing fee - correct amount noted/paid?
12. Word or page count compliance - within limits?

Flag any issues found and rate each: Critical (will cause rejection) / Important (should fix) / Minor (cosmetic).`,
              result: 'A pre-filing error check to catch issues before submission.',
              tip: 'Run this check as your second-to-last step before filing. Your final step should always be a personal review of the complete package.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Research Memos',
          prompts: [
            {
              id: 'pl-p-4-1',
              title: 'Research Memo Draft',
              task: 'Draft a legal research memo from your research findings',
              prompt: `Draft a legal research memo based on the following research.

To: [attorney name]
From: [your name]
Date: [date]
Re: [matter name] - [specific research question]

Research question:
[State the question the attorney asked you to research]

Research findings (paste your notes - can be messy):
[Paste all your research notes, case summaries, statute references, etc.]

Jurisdiction: [applicable jurisdiction]

Draft a memo with:
1. Question Presented (precise legal question, one paragraph)
2. Brief Answer (direct answer in 2-3 sentences)
3. Relevant Facts (organized from the case file)
4. Discussion:
   - Applicable legal standard or rule
   - Key authorities supporting our position
   - Key authorities that cut against us
   - Application of law to our facts
   - Analysis of likely outcome
5. Conclusion and Recommendation

Formatting requirements:
- Formal memo format with headers
- Citations in [Bluebook / state citation format]
- Under [page limit] pages
- Clear topic sentences for each paragraph

Important: I will verify all citations before submitting. Flag any authority you are not confident about.`,
              result: 'A structured research memo draft ready for your review and the attorney.',
              tip: 'Do your research first in official databases, then use AI to help organize and draft. This produces the most reliable result.',
            },
            {
              id: 'pl-p-4-2',
              title: 'Procedural Research Quick Reference',
              task: 'Research procedural rules for a specific court action',
              prompt: `Research the procedural requirements for the following action.

Action: [e.g., filing a motion for summary judgment, removing a case to federal court, serving a subpoena, filing an appeal]
Jurisdiction: [state and/or federal]
Court: [specific court if known]

Provide a quick reference covering:
1. Applicable rule(s) and statute(s) (cite specific provisions)
2. Prerequisites - what must happen before this action can be taken
3. Timing requirements - when must this be filed/served
4. Notice requirements - who must be notified and how far in advance
5. Required supporting documents (declarations, exhibits, proposed orders, etc.)
6. Formatting requirements specific to this type of action
7. Fee requirements
8. Opposition/Response timeline - how long does the other side have to respond
9. Hearing requirements - is a hearing automatic or must one be requested
10. Common pitfalls - mistakes that result in denial or rejection

Format as a one-page quick reference sheet I can keep in the case file.

Note: I will verify all rules against the current version of the applicable rules.`,
              result: 'A procedural quick reference for your case file.',
              tip: 'Build a library of these for common actions in your jurisdiction. Update them when rules change.',
            },
            {
              id: 'pl-p-4-3',
              title: 'Case Law Summary Table',
              task: 'Organize case law research into a comparison table',
              prompt: `Organize the following case law research into a structured comparison table.

Research topic: [the legal issue these cases address]
Jurisdiction: [where these cases are from]

Cases to organize:
[Paste your case summaries, citations, and notes - can be rough]

Create a table with columns:
1. Case name and citation
2. Court and year
3. Key facts (2-3 sentences)
4. Holding (what the court decided)
5. Legal standard or test applied
6. Favorable to us? (Yes / No / Mixed)
7. Key quote (one sentence from the opinion)
8. Distinguishing factors (how is this case different from ours?)

After the table, provide:
- Summary of the legal trend (which way are courts leaning?)
- The 3 strongest cases for our position and why
- The 2 most dangerous cases against us and how to distinguish them
- Gaps in the research (areas where we need more authority)
- Recommended next research steps

Format the table cleanly so it can be pasted into a memo or printed for reference.`,
              result: 'An organized case law comparison table with strategic analysis.',
              tip: 'This table becomes a quick reference during brief writing. Keep it updated as you find new authority.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Client Intake',
          prompts: [
            {
              id: 'pl-p-5-1',
              title: 'Intake Form Analyzer',
              task: 'Process and organize client intake information',
              prompt: `Process the following client intake form and create a structured new matter profile.

Intake form information:
[Paste the completed intake form responses]

Create a structured matter profile with:

Client Information:
- Full legal name
- Contact information (address, phone, email)
- Preferred communication method
- Date of birth
- Employer (if relevant)
- Emergency contact

Matter Information:
- Type of matter: [extracted from intake]
- Summary of the issue (3-5 sentences, based on client's description)
- Key dates and deadlines (statute of limitations, upcoming court dates, etc.)
- Opposing party information
- Related matters or prior representation
- Documents the client mentioned or provided

Preliminary Assessment:
- Key legal issues identified
- Information still needed from the client
- Documents to request from the client
- Potential conflicts to check (list all parties and related entities)
- Urgency level: Immediate / Standard / Low priority

Next Steps Checklist:
- Items to complete before the initial attorney consultation
- Questions for the attorney to address at the first meeting

Flag any red flags in the intake (statute of limitations concerns, jurisdictional issues, potential conflict indicators).`,
              result: 'A structured new matter profile ready for the case management system.',
              tip: 'Create a standard intake processing template and use it for every new client. Consistency helps catch issues early.',
            },
            {
              id: 'pl-p-5-2',
              title: 'Conflict Check Report',
              task: 'Generate a comprehensive conflict check from intake data',
              prompt: `Generate a conflict check report based on the following new matter information.

New client: [client name]
Matter type: [type of case]
Opposing party: [name]

All parties and entities to check (extract from intake):
[List every name, company, and entity mentioned in the intake]

Related individuals:
[List any family members, business partners, co-defendants, witnesses mentioned]

Create a conflict check report with:

1. Parties to search:
   - Full names (including alternative spellings and maiden names)
   - Business entities (including DBAs and parent companies)
   - Related individuals

2. Search variations for each name:
   - Common misspellings
   - Abbreviations
   - Maiden names or former names noted
   - Business name variations

3. Relationships to check:
   - Adverse parties in current matters
   - Former clients in related matters
   - Business relationships between parties
   - Family or personal relationships noted

4. Recommended search strategy:
   - Exact name matches
   - Partial name matches to review
   - Related entity searches

5. Report template:
   - Date of search
   - Searcher name
   - Systems searched
   - Results (match / potential match / no match)
   - Attorney review needed (yes/no for each result)

Flag any obvious potential conflicts based on the information provided.`,
              result: 'A thorough conflict check report template with search guidance.',
              tip: 'Always run conflicts before the attorney-client relationship is formed. Document every search performed and its results.',
            },
            {
              id: 'pl-p-5-3',
              title: 'Client Welcome Package Drafter',
              task: 'Draft a client welcome package for a new matter',
              prompt: `Draft a client welcome package for a new matter.

Firm: [firm name]
Client: [client name]
Matter type: [type of case - e.g., personal injury, family law, business litigation]
Assigned attorney: [name]
Assigned paralegal: [your name]

Create a welcome package including:

1. Welcome Letter:
   - Professional greeting
   - Brief description of the matter and what to expect
   - Introduction to the team (attorney and paralegal)
   - How to reach us and expected response times
   - Reassuring but not promising tone

2. What We Need From You:
   - List of documents to gather (specific to this matter type)
   - Information questionnaire topics
   - Deadlines for providing information
   - How to send documents securely

3. What to Expect:
   - Overview of the legal process for this type of matter
   - Typical timeline (in plain language)
   - Key milestones they will experience
   - How often they will hear from us

4. Important Guidelines:
   - Do not discuss the case on social media
   - Preserve all relevant documents and communications
   - How to handle contact from the opposing party
   - How to handle contact from insurance companies (if applicable)

5. Contact Information:
   - Attorney contact details
   - Paralegal contact details
   - After-hours emergency procedures
   - Firm address and office hours

Write in warm, accessible language. No legal jargon. Make the client feel confident they are in good hands.`,
              result: 'A complete client welcome package ready to customize and send.',
              tip: 'Create one template per practice area. Customize for each new client - the personal touches make the difference.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Calendar Management',
          prompts: [
            {
              id: 'pl-p-6-1',
              title: 'Deadline Extraction Report',
              task: 'Extract all deadlines from a court order or scheduling order',
              prompt: `Extract all deadlines and important dates from the following court order.

Case: [case name and number]
Court: [court name]
Judge: [judge name]
Order type: [e.g., scheduling order, case management order, trial setting order]
Order date: [date the order was entered]

Order text:
[Paste the full text of the court order]

Extract and organize:
1. Every deadline mentioned with:
   - Due date (exact date if stated, or calculated from the order)
   - Task or requirement
   - Who is responsible (plaintiff, defendant, both, the court)
   - Category: [discovery, motions, trial prep, ADR, other]
   - Consequence of missing this deadline (if stated)

2. Calculated deadlines:
   - If the order uses relative dates (e.g., "30 days from entry"), calculate the actual date
   - Show your calculation (start date + days = due date)
   - Account for weekends and federal holidays if applicable under the rules

3. Key dates summary:
   - Discovery cutoff
   - Expert disclosure deadlines
   - Motion filing deadlines
   - Mediation/ADR deadline
   - Pretrial conference date
   - Trial date

4. Recommended internal deadlines:
   - Suggest earlier internal deadlines (e.g., 1 week before court deadline) for review time

Flag any ambiguous deadlines where the calculation could be interpreted differently.`,
              result: 'A complete deadline report extracted from the court order.',
              tip: 'Always double-check calculated dates manually. Calendar calculation errors are one of the most common - and most costly - paralegal mistakes.',
            },
            {
              id: 'pl-p-6-2',
              title: 'Statute of Limitations Calculator',
              task: 'Calculate statute of limitations deadlines for a case',
              prompt: `Calculate the statute of limitations deadline(s) for the following matter.

Jurisdiction: [state and/or federal]
Claim type(s): [list each potential claim - e.g., breach of contract, negligence, fraud]
Date of incident/breach: [date the cause of action accrued]
Date client first knew of the issue: [if different from incident date - for discovery rule analysis]
Client type: [individual, minor, corporation, government entity]

For each potential claim, provide:
1. Applicable statute of limitations period
2. Statutory citation
3. Trigger date (when the clock starts)
4. Raw deadline (before adjustments)
5. Adjustments to consider:
   - Discovery rule (does it apply?)
   - Tolling provisions (minority, incapacity, absence from jurisdiction, etc.)
   - Equitable tolling arguments
   - COVID-related extensions (if applicable for the time period)
   - Does the deadline fall on a weekend or holiday?
6. Final calculated deadline
7. Recommended filing deadline (at least 30 days before expiration)

Also note:
- Related claims with different limitation periods
- Shorter notice requirements (government claims, etc.)
- Any contractual limitation periods that might apply
- Whether this deadline has already passed and potential arguments to revive it

IMPORTANT: Verify all calculations against current statutes. Statute of limitations errors are malpractice risks.`,
              result: 'A statute of limitations analysis with calculated deadlines.',
              tip: 'Run this immediately at intake and put the earliest deadline on the calendar that day. Never wait to calculate limitations periods.',
            },
            {
              id: 'pl-p-6-3',
              title: 'Weekly Deadline Report',
              task: 'Generate a weekly deadline and task report for the attorney',
              prompt: `Generate a weekly deadline and task report for the attorney.

Week of: [date range]
Attorney: [attorney name]
Matters covered: [list active matters]

Current deadlines and tasks:
[Paste your calendar entries, task lists, and deadline tracking for the week]

Create a weekly report with:

1. Critical Deadlines This Week:
   - Date | Matter | Deadline | Status (on track / at risk / overdue)
   - Sorted by date, most urgent first

2. Upcoming Deadlines (Next 2 Weeks):
   - Same format as above
   - Flag anything that needs attorney attention now to meet the deadline

3. Tasks Completed This Week:
   - Brief description of completed items by matter

4. Pending Items Awaiting Attorney Action:
   - List of items you have prepared that need attorney review or signature
   - How long each has been waiting

5. Pending Items Awaiting Third Parties:
   - Items waiting on opposing counsel, court, clients, or vendors
   - Expected resolution date

6. Matter Status Summary:
   - One-line status update for each active matter

7. Calendar Conflicts or Concerns:
   - Scheduling conflicts identified
   - Resource concerns for upcoming deadlines

Keep it scannable. The attorney should be able to read this in 3 minutes and know exactly where everything stands.`,
              result: 'A professional weekly status report for the attorney.',
              tip: 'Send this every Monday morning. It sets the tone for the week and shows the attorney you have everything under control.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the real time savings AI brings to your paralegal workflow each month.',
      timeTable: [
        {
          task: 'Document review and indexing',
          without: '2-3 days/production',
          withAI: '3-4 hours',
          saved: '10+ hrs/production',
        },
        {
          task: 'Case timeline creation',
          without: '4-8 hours',
          withAI: '45-60 minutes',
          saved: '4+ hours',
        },
        {
          task: 'Filing preparation',
          without: '1-2 hours/filing',
          withAI: '15-20 minutes',
          saved: '1 hr/filing',
        },
        {
          task: 'Research memo drafting',
          without: '3-5 hours',
          withAI: '1-2 hours',
          saved: '2-3 hours',
        },
        {
          task: 'Client intake processing',
          without: '2-3 hours/client',
          withAI: '30-45 minutes',
          saved: '1.5 hrs/client',
        },
        {
          task: 'Deadline extraction and calendaring',
          without: '1-2 hours/order',
          withAI: '15-20 minutes',
          saved: '1 hr/order',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/month',
      },
      sections: [
        {
          heading: 'The Paralegal Advantage',
          paragraphs: [
            'Paralegals who use AI do not just work faster - they handle more matters with less stress. When document review takes hours instead of days, and timelines build themselves from your source material, you have time for the substantive work that makes you invaluable.',
            'The firms that equip their paralegals with AI tools are already outpacing those that do not. The advantage is not talent - it is tooling.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a paralegal to manually type dates into a spreadsheet or format captions for the hundredth time. You became one because you are organized, thorough, and essential to the legal process. AI gives you back the time to do the work that actually requires your skill and judgment.',
          ],
        },
      ],
      keyInsight:
        'Start with one task. Summarize one document. Build one timeline. See the difference. Then expand from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your paralegal workflow. One step at a time. Check off each task as you complete it.',
      days: [
        {
          day: 1,
          title: 'Get Set Up',
          duration: '15 min',
          items: [
            { id: 'pl-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pl-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'pl-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Summarize a Document',
          duration: '10 min',
          items: [
            { id: 'pl-2-1', label: 'Pick a document you need to review this week' },
            { id: 'pl-2-2', label: 'Run the Document Summary Generator prompt' },
            { id: 'pl-2-3', label: 'Compare the AI summary to your manual review' },
          ],
        },
        {
          day: 3,
          title: 'Build a Timeline',
          duration: '20 min',
          items: [
            { id: 'pl-3-1', label: 'Gather facts and dates from a current case' },
            { id: 'pl-3-2', label: 'Run the Chronological Case Timeline prompt' },
            { id: 'pl-3-3', label: 'Verify dates and add to your case file' },
          ],
        },
        {
          day: 4,
          title: 'Prepare a Filing',
          duration: '15 min',
          items: [
            { id: 'pl-4-1', label: 'Pick an upcoming filing for one of your cases' },
            { id: 'pl-4-2', label: 'Run the Court Filing Checklist prompt for your jurisdiction' },
            { id: 'pl-4-3', label: 'Customize and use the checklist for your filing' },
          ],
        },
        {
          day: 5,
          title: 'Draft a Research Memo',
          duration: '25 min',
          items: [
            { id: 'pl-5-1', label: 'Take a research question you have been working on' },
            { id: 'pl-5-2', label: 'Run the Research Memo Draft prompt with your findings' },
            { id: 'pl-5-3', label: 'Review, verify citations, and polish the draft' },
          ],
        },
        {
          day: 6,
          title: 'Process an Intake or Extract Deadlines',
          duration: '15 min',
          items: [
            { id: 'pl-6-1', label: 'Run the Intake Form Analyzer or Deadline Extraction prompt' },
            { id: 'pl-6-2', label: 'Verify all information and add to your systems' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            { id: 'pl-7-1', label: 'Review which AI tasks saved you the most time' },
            { id: 'pl-7-2', label: 'Pick 2-3 workflows to use AI for every week' },
            { id: 'pl-7-3', label: 'Share this guide with another paralegal who could benefit' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
