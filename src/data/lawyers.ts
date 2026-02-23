import type { WorkbookData } from './types'

export const lawyersData = {
  professionId: 'lawyers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Lawyers',
  heroDescription:
    'Everything you need to start using AI in your legal practice - explained simply, with real tools, workflows, and prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 9am and your desk already looks like a disaster zone. There are three motions due this week, a contract review that should have been done yesterday, and a client who keeps calling for an update you have not had time to prepare. The research memo for the Smith case is half-finished. You know the case law you need exists somewhere, but finding it means another four hours buried in databases.',
        'Your billing entries from last week are incomplete because you spent so long on non-billable administrative work that the actual billable hours blurred together. A new client intake form just came in, but onboarding takes time you do not have. The associate asked you to review their brief draft, and you can already tell from the first paragraph it needs a full rewrite.',
        'You went to law school to practice law - to advocate, to counsel, to solve complex legal problems. Instead, you spend most of your week on research that takes too long, drafts that need too many revisions, and administrative tasks that pile up faster than you can clear them.',
      ],
      highlight:
        'What if AI could handle the first draft, the initial research, and the routine communications - so you could focus on the legal strategy that actually wins cases?',
      closingParagraph:
        'Not replacing your judgment. Not practicing law for you. Just compressing the 6 hours of research and drafting between identifying an issue and having a polished work product - down to 45 minutes.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not a lawyer. It cannot give legal advice. It will not replace the judgment calls you make based on decades of case experience, client relationships, and courtroom instincts. It does not understand privilege, confidentiality nuances, or the politics of a particular judge\'s courtroom. And it definitely should not be cited without verification - we all saw what happened with that ChatGPT hallucination in a federal brief.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most well-read research assistant you have ever worked with. It has read millions of legal documents, contracts, briefs, and opinions. It never sleeps. It does not bill hours. And it produces a first draft in 30 seconds that would take a junior associate 3 hours.',
            'Ask it to find relevant case law on a specific issue? It gives you a starting point in 90 seconds. Ask it to draft a motion to compel? First draft in 2 minutes. Ask it to review a 40-page contract and flag problematic clauses? Done in 5 minutes.',
            'The critical rule: AI gives you the first 80%. You provide the legal judgment, verification, and strategic thinking for the final 20%. Every output needs your review. Every citation needs verification. But the hours of grunt work between the question and the polished answer shrink dramatically.',
          ],
        },
        {
          heading: 'Why lawyers have a unique advantage',
          paragraphs: [
            'Legal work is highly structured - contracts follow patterns, motions have standard formats, research follows established methodologies. AI thrives on structure. Feed it a template and it produces consistent output at scale. Give it your firm\'s brief format and it follows it every time.',
            'The lawyers who adopt AI first will handle more matters, serve clients faster, and spend their time on high-value strategic work instead of research that a machine can accelerate by 10x.',
          ],
        },
      ],
      keyInsight:
        'Your legal expertise + AI\'s speed = better outcomes for clients. You know the law, the strategy, and the courtroom. AI removes the hours of manual work between your legal insight and the finished work product.',
    },

    ch3: {
      intro: 'You do not need a dozen subscriptions. These five tools cover the core of what lawyers need from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and analysis partner',
          description:
            'Brief drafting, contract review, legal research summaries, client communication, and brainstorming legal strategy',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for drafting and analysis',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form legal writer',
          description:
            'Complex legal memos, lengthy contract analysis, nuanced research summaries, and detailed brief drafting - excels at longer documents',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long-form legal writing',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your legal research scout',
          description:
            'Quick case law lookups, statutory research, regulatory updates, and fact-checking with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your case management brain',
          description:
            'Case files, client notes, research organization, meeting summaries, and matter tracking',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize your practice',
          icon: 'notion',
        },
        {
          name: 'Casetext',
          role: 'Your AI-powered legal research platform',
          description:
            'CoCounsel AI assistant for case law research, document review, deposition preparation, and legal analysis built specifically for attorneys',
          cost: 'paid',
          difficulty: 'easy-medium',
          verdict: 'Purpose-built for legal work',
          icon: 'casetext',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting plus Perplexity for quick research. That covers 80% of your AI needs. Add Casetext when you want a legal-specific platform.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual legal workflow. Each system replaces hours of manual work. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Legal Research Acceleration',
          before:
            'You spend 4-6 hours in legal databases, reading dozens of cases, chasing citations down rabbit holes, and trying to find the one opinion that perfectly supports your argument. Half the cases you pull end up being irrelevant. The research memo takes another 2 hours to write up.',
          after:
            'You describe your legal issue and jurisdiction. AI identifies relevant case law, statutes, and legal theories in minutes. You still verify everything in official databases, but your starting point is 90% there instead of 10%.',
          flow: [
            'Describe your legal issue, jurisdiction, and what you need to prove',
            'AI identifies relevant case law and statutory authority',
            'Review AI output and verify citations in official databases',
            'Ask follow-up questions to narrow or deepen the research',
            'Export organized research into your memo template',
          ],
          timeSaved: { without: '4-6 hours', withAI: '45 minutes' },
        },
        {
          id: 2,
          name: 'Contract Review and Drafting',
          before:
            'You read through a 50-page contract line by line, flagging problematic clauses, comparing against your standard terms, and making redline notes. It takes an entire afternoon. Drafting a new contract from scratch means pulling from old templates and customizing every section.',
          after:
            'AI reviews the contract in minutes, flags non-standard terms, identifies missing clauses, and highlights risk areas. For drafting, you provide the key terms and AI produces a solid first draft following your preferred structure.',
          flow: [
            'Upload or paste the contract into AI',
            'AI flags problematic clauses, missing provisions, and risk areas',
            'Review each flagged item and apply your legal judgment',
            'For new contracts - provide key terms and structure preferences',
            'AI generates a first draft you refine and finalize',
          ],
          timeSaved: { without: '3-5 hours', withAI: '30-45 minutes' },
        },
        {
          id: 3,
          name: 'Brief and Motion Writing',
          before:
            'The blank page stares back at you. You know the arguments you want to make, but structuring the brief, writing the statement of facts, weaving in case citations, and polishing the prose takes a full day or more. Revisions add another day.',
          after:
            'You outline your arguments and key facts. AI drafts a structured brief with proper legal formatting, persuasive language, and placeholder citations for you to verify and replace. The first draft arrives in 5 minutes instead of 5 hours.',
          flow: [
            'Outline your arguments, key facts, and relevant law',
            'AI drafts the complete brief with structure and citations',
            'Verify every citation in official databases',
            'Refine the legal arguments and add your strategic nuance',
            'Polish the final version for filing',
          ],
          timeSaved: { without: '6-10 hours', withAI: '1-2 hours' },
        },
        {
          id: 4,
          name: 'Client Communication',
          before:
            'You owe five clients status updates. Each one requires summarizing complex legal developments in plain language. Writing a single client letter takes 30-45 minutes because you need to be accurate but accessible. So the updates get pushed to next week. Again.',
          after:
            'You give AI the case developments and it drafts client-friendly updates in minutes. Professional tone, plain language, nothing that creates liability. You review, personalize, and send. Five updates in the time one used to take.',
          flow: [
            'Note the key developments and what the client needs to know',
            'AI drafts a client update in clear, non-technical language',
            'Review for accuracy and add personal touches',
            'Adjust tone based on client relationship and preferences',
            'Send the update and log the communication',
          ],
          timeSaved: { without: '30-45 min/email', withAI: '5-10 min/email' },
        },
        {
          id: 5,
          name: 'Case Analysis and Strategy',
          before:
            'You sit with a case file trying to map out the strengths, weaknesses, and likely outcomes. It requires reviewing every document, identifying the key facts, anticipating opposing arguments, and developing a theory of the case. This mental work is critical but takes hours of uninterrupted focus.',
          after:
            'AI helps you organize case facts, identify strengths and weaknesses, anticipate counterarguments, and develop strategic options. It does not replace your judgment but it accelerates the analysis so you reach strategic clarity faster.',
          flow: [
            'Feed AI the key facts, claims, and relevant evidence',
            'AI structures a strengths and weaknesses analysis',
            'Ask it to anticipate opposing arguments',
            'Review and refine the strategic assessment',
            'Use the analysis to guide your case strategy',
          ],
          timeSaved: { without: '3-5 hours', withAI: '30-60 minutes' },
        },
        {
          id: 6,
          name: 'Document Review and Discovery',
          before:
            'Thousands of documents to review. You and your team read through them one by one, tagging relevance, privilege, and responsiveness. A single document review project can eat weeks. Important documents get buried in the volume.',
          after:
            'AI pre-screens documents, identifies potentially relevant and privileged materials, and surfaces key documents that need attorney review. You still make the final call on every document, but the initial triage happens in a fraction of the time.',
          flow: [
            'Define your review criteria and key search terms',
            'AI scans documents and categorizes by relevance',
            'Review AI-flagged documents requiring attorney judgment',
            'AI summarizes key findings across the document set',
            'Generate a document review summary report',
          ],
          timeSaved: { without: '2-4 weeks', withAI: '2-4 days' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every legal task. Click to reveal, copy, and paste. Fill in the brackets with your case specifics. Always verify AI-generated citations.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Legal Research',
          prompts: [
            {
              id: 'lw-p-1-1',
              title: 'Case Law Research Query',
              task: 'Find relevant case law on a specific legal issue',
              prompt: `I am researching a legal issue in [jurisdiction - e.g., federal, state name].

Issue: [describe the specific legal question]
Area of law: [e.g., contract law, employment law, constitutional law]
My client's position: [what you need to prove or defend against]
Key facts: [2-3 relevant facts that affect the analysis]

Identify:
1. The leading cases on this issue (name, citation if you can, and holding)
2. The current legal standard or test applied by courts
3. How courts have ruled on similar fact patterns
4. Any circuit splits or conflicting authority
5. Recent developments or trend in how courts are deciding this issue

Important: Flag any citations you are not confident about. I will verify all citations independently. Accuracy matters more than volume.`,
              result: 'A structured research starting point with cases to verify in official databases.',
              tip: 'Always verify every citation in Westlaw, LexisNexis, or Casetext. AI can hallucinate case names and holdings. Use this as a research map, not a finished product.',
            },
            {
              id: 'lw-p-1-2',
              title: 'Statutory and Regulatory Analysis',
              task: 'Analyze a statute or regulation and its implications',
              prompt: `Analyze the following statute/regulation for my client's situation.

Statute/Regulation: [cite the specific provision - e.g., 42 U.S.C. 1983 or state statute]
Jurisdiction: [federal/state]
Client situation: [describe the relevant facts in 3-5 sentences]

Provide:
1. Plain language summary of what the statute requires or prohibits
2. Key elements that must be proven or satisfied
3. Relevant definitions within the statute
4. Any exceptions or safe harbors that may apply to my client
5. Key interpretive case law that shapes how courts apply this provision
6. Potential arguments for and against application to my facts
7. Any pending amendments or regulatory changes to be aware of

Flag any uncertainty. I need accuracy over comprehensiveness.`,
              result: 'A statutory analysis framework you can build your legal argument on.',
              tip: 'Run this in Perplexity for source-backed answers. Cross-reference the statute text directly to confirm AI\'s interpretation.',
            },
            {
              id: 'lw-p-1-3',
              title: 'Research Memo Outline',
              task: 'Structure a legal research memo from your findings',
              prompt: `Help me structure a legal research memo on the following issue.

Question presented: [state the legal question clearly]
Brief answer: [your preliminary conclusion - even if tentative]
Jurisdiction: [where this will be litigated or applied]

Key facts:
[List the material facts, 5-10 bullet points]

Research I have gathered so far:
[Paste your notes, case names, or findings - even if messy]

Create a structured research memo outline with:
1. Question Presented (refined and precise)
2. Brief Answer (2-3 sentences)
3. Statement of Facts (organized chronologically)
4. Discussion section outline with:
   - Legal standard/rule statement for each issue
   - Application of law to facts
   - Counterarguments to address
5. Conclusion with practical recommendation

Write the discussion section headers and a 2-3 sentence summary of what each section should cover. Make it clear enough that a junior associate could draft from this outline.`,
              result: 'A complete research memo outline ready for drafting.',
              tip: 'Use this outline as a roadmap, then draft each section individually using AI for speed.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Contract Review',
          prompts: [
            {
              id: 'lw-p-2-1',
              title: 'Contract Clause Analyzer',
              task: 'Analyze specific clauses for risk and enforceability',
              prompt: `Review the following contract clause(s) and provide a legal analysis.

Contract type: [e.g., SaaS agreement, employment contract, NDA, lease]
My client is the: [party A / party B - e.g., the vendor, the employee, the landlord]
Jurisdiction: [governing law]

Clause(s) to analyze:
[Paste the specific clause or clauses]

For each clause, provide:
1. Plain language explanation of what it means
2. Who this clause favors and why
3. Potential risks for my client
4. Enforceability concerns (any issues under [jurisdiction] law?)
5. Standard market terms - is this typical, aggressive, or unusual?
6. Suggested redline language that better protects my client
7. Negotiation talking points if the other side pushes back

Rate each clause: Acceptable / Needs Revision / High Risk.`,
              result: 'A clause-by-clause risk analysis with suggested revisions.',
              tip: 'Paste multiple clauses at once for a comprehensive review. Always validate enforceability analysis against your jurisdiction\'s specific case law.',
            },
            {
              id: 'lw-p-2-2',
              title: 'Contract Comparison',
              task: 'Compare a contract against your standard terms',
              prompt: `Compare the following contract against our standard terms and identify all deviations.

Our standard terms:
[Paste your standard contract or key standard provisions]

Their proposed contract:
[Paste the other party's contract or redlined version]

Contract type: [e.g., vendor agreement, licensing deal, partnership agreement]
My client is: [which party]

Provide:
1. A table showing each material deviation between their terms and ours
2. For each deviation:
   - What our standard says
   - What their version says
   - Risk level: Low / Medium / High
   - Whether to accept, negotiate, or reject
3. Missing clauses - provisions in our standard that are absent from their draft
4. Added clauses - provisions in their draft that are not in our standard
5. A prioritized list of the top 5 issues to address in negotiation

Keep the analysis practical. I need to know what to push back on and what to let go.`,
              result: 'A clear deviation analysis with negotiation priorities.',
              tip: 'This works best when you paste both full documents. For very long contracts, break them into sections.',
            },
            {
              id: 'lw-p-2-3',
              title: 'Contract Drafting from Term Sheet',
              task: 'Draft a contract from key terms and deal points',
              prompt: `Draft a [contract type] based on the following agreed terms.

Parties:
- Party A: [name, role - e.g., "Acme Corp, the service provider"]
- Party B: [name, role - e.g., "Beta Inc, the client"]

Jurisdiction/Governing law: [state/country]

Agreed key terms:
[List each deal point - e.g., scope of services, payment terms, term length, termination provisions, IP ownership, confidentiality requirements, liability caps, indemnification]

Additional requirements:
- My client is [Party A/B] - draft to protect their interests
- Include standard boilerplate: [list any specific boilerplate - e.g., force majeure, assignment, severability, entire agreement]
- Follow this formatting preference: [e.g., numbered sections, defined terms capitalized]

Draft a complete, professional contract. Flag any areas where I need to make a business decision or where additional terms should be discussed.`,
              result: 'A complete first draft contract ready for your review and refinement.',
              tip: 'Always review AI-drafted contracts against your jurisdiction\'s requirements. Some provisions need specific statutory language to be enforceable.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Brief Writing',
          prompts: [
            {
              id: 'lw-p-3-1',
              title: 'Motion Draft Generator',
              task: 'Draft a motion with supporting arguments',
              prompt: `Draft a [motion type - e.g., Motion to Compel, Motion for Summary Judgment, Motion to Dismiss] for the following case.

Case: [case name]
Court: [court name and jurisdiction]
Judge: [if known - helps tailor the tone]

Facts:
[Summarize the relevant facts in 5-10 bullet points]

Legal basis:
- Rule/statute: [cite the procedural or substantive rule]
- Key arguments: [list your 2-4 main arguments]
- Supporting authority: [list any cases or statutes you want cited]

Opposing party's likely response:
[What you expect them to argue]

Draft the motion with:
1. Caption and introduction (2-3 compelling sentences)
2. Statement of relevant facts
3. Legal standard
4. Argument section (organized by issue, with case support)
5. Response to anticipated counterarguments
6. Conclusion with specific relief requested

Tone: [Persuasive but professional / Aggressive / Measured and diplomatic]
Length target: [e.g., under 15 pages, under 25 pages]

Important: Flag any citations you generate. I will verify and replace with confirmed authority.`,
              result: 'A complete motion draft with structure, arguments, and placeholder citations.',
              tip: 'Use this as a first draft to build from. The structure and argument flow save the most time. Always replace AI citations with verified ones.',
            },
            {
              id: 'lw-p-3-2',
              title: 'Statement of Facts Writer',
              task: 'Write a persuasive statement of facts from case materials',
              prompt: `Write a persuasive Statement of Facts for [motion type / brief type].

Case: [case name]
My client: [who you represent and their role]
Forum: [court]

Key facts (in rough chronological order):
[List all material facts with dates where available, even if messy]

Key documents/evidence:
[List the exhibits or evidence supporting each fact]

Our theory of the case: [one sentence - what story do we want the facts to tell?]

Write a Statement of Facts that:
1. Presents facts chronologically and clearly
2. Subtly emphasizes facts favorable to our position
3. Addresses unfavorable facts honestly but minimizes their impact
4. References specific evidence (use "[Exhibit X]" placeholders)
5. Uses precise, concrete language - no vague or conclusory statements
6. Tells a coherent narrative that makes the judge want to rule for us
7. Stays under [word count] words

Do not make legal arguments in the facts section. Let the facts speak persuasively on their own.`,
              result: 'A polished, persuasive statement of facts ready for your brief.',
              tip: 'The statement of facts often wins or loses a motion. Spend extra time refining this section. AI gives you a great starting structure.',
            },
            {
              id: 'lw-p-3-3',
              title: 'Opposition Brief Analyzer',
              task: 'Analyze opposing counsel\'s brief and develop counter-arguments',
              prompt: `Analyze the following brief/motion filed by opposing counsel and help me prepare our response.

Our position: [what we are defending or arguing for]
Their filing:
[Paste the opposing brief or summarize their key arguments]

Provide:
1. Summary of their core arguments (numbered)
2. The strongest points they make - what should concern us
3. The weakest points - where their argument has gaps
4. Factual assertions we can challenge or dispute
5. Legal authority they cite - is it accurately applied? Any distinguishable cases?
6. Arguments they did NOT make that we should be prepared for
7. For each of their arguments, suggest our best counter-argument
8. Recommended structure for our response brief
9. Tone recommendation based on the strength of their filing

Be candid about where they have strong arguments. I need to know the real risks, not just reassurance.`,
              result: 'A strategic analysis of the opposition with ready-to-use counter-arguments.',
              tip: 'This is one of the highest-value uses of AI in litigation. Feed it the full opposing brief for the best analysis.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Client Communication',
          prompts: [
            {
              id: 'lw-p-4-1',
              title: 'Client Status Update Email',
              task: 'Draft a professional client update on case progress',
              prompt: `Draft a client status update email for the following matter.

Client: [client name]
Matter: [case or matter description]
Client sophistication: [individual/unsophisticated, business person, in-house counsel, sophisticated]

Recent developments:
[List what has happened since last update]

Next steps:
[What is coming up and when]

Any decisions needed from client:
[List any questions or approvals needed]

Budget/billing note (if applicable):
[Any billing updates to communicate]

Write the email with:
1. Warm but professional opening
2. Clear summary of developments in plain language
3. What these developments mean for the client's case
4. Specific next steps with timeline
5. Any action items or decisions needed from the client
6. Professional closing

Tone: [Reassuring / Matter-of-fact / Urgent / Cautiously optimistic]
Length: Keep it concise - under 300 words. Clients do not read long emails.

Avoid legal jargon unless the client is sophisticated counsel. Never create attorney-client privilege issues.`,
              result: 'A professional client update ready to review and send.',
              tip: 'Customize the tone for each client. Some want every detail. Some just want the bottom line. AI adapts to whatever you specify.',
            },
            {
              id: 'lw-p-4-2',
              title: 'Engagement Letter Drafter',
              task: 'Draft a client engagement letter for a new matter',
              prompt: `Draft an engagement letter for a new client matter.

Firm: [firm name]
Attorney: [your name and title]
Client: [client name]
Matter type: [e.g., litigation defense, contract negotiation, corporate formation]

Scope of representation:
[Describe what you will and will not be handling]

Fee arrangement:
- Type: [hourly / flat fee / contingency / hybrid]
- Rates: [hourly rates by timekeeper, or flat fee amount, or contingency percentage]
- Retainer: [amount, if applicable]
- Billing frequency: [monthly, upon completion, etc.]

Additional terms to include:
- Conflict waiver needed: [yes/no - describe if yes]
- File retention policy: [your firm's policy]
- Communication preferences: [email, phone, portal]

Draft a complete engagement letter with:
1. Description of the matter and scope
2. Responsibilities of the firm
3. Responsibilities of the client
4. Fee arrangement with clear terms
5. Expense provisions
6. Termination provisions
7. Conflict disclosures if applicable
8. Signature blocks

Follow [jurisdiction] bar requirements for engagement letters.`,
              result: 'A complete engagement letter draft ready for review.',
              tip: 'Always check your state bar\'s specific requirements for engagement letters. Some jurisdictions mandate specific disclosures.',
            },
            {
              id: 'lw-p-4-3',
              title: 'Legal Concept Explainer',
              task: 'Explain a complex legal concept to a client in plain language',
              prompt: `Explain the following legal concept to my client in plain, non-technical language.

Legal concept: [e.g., summary judgment, indemnification clause, statute of limitations, discovery process]
Context: [why this is relevant to their case or matter]
Client type: [individual with no legal background / business owner / in-house team]

Write an explanation that:
1. Opens with a one-sentence, jargon-free definition
2. Uses a real-world analogy to make it concrete
3. Explains why this matters for their specific situation
4. Describes what happens next and what they should expect
5. Answers the question they are probably thinking but not asking
6. Closes with reassurance or a clear next step

Keep it under 200 words. Use short sentences. Avoid words like "pursuant," "hereinafter," "notwithstanding," or any other legalese. Write like you are explaining it to a smart friend over coffee.`,
              result: 'A plain-language explanation ready to share with your client.',
              tip: 'Clients who understand what is happening are calmer, more cooperative, and more likely to refer others. This prompt saves you the mental effort of translating legalese on the fly.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Case Analysis',
          prompts: [
            {
              id: 'lw-p-5-1',
              title: 'Case Timeline Constructor',
              task: 'Build a chronological case timeline from documents and facts',
              prompt: `Build a detailed chronological timeline for the following case.

Case: [case name or description]
Type: [litigation, transaction, regulatory matter]
Key parties: [list the main parties and their roles]

Facts and events (in any order - I will dump everything here):
[Paste all facts, dates, events, document references - can be messy]

Create a timeline that:
1. Lists every event in chronological order with dates
2. Identifies the source or evidence for each event (where possible)
3. Flags gaps - periods where something important likely happened but we have no information
4. Highlights the 5-10 most critical events that will drive the outcome
5. Notes which facts favor our client and which favor the opposing party
6. Identifies any statute of limitations or deadline issues
7. Suggests additional facts or documents we should try to obtain

Format as a clean, numbered timeline I can share with the litigation team. Mark uncertain dates with "[approx.]" and missing information with "[need to confirm]."`,
              result: 'A structured case timeline with strategic annotations.',
              tip: 'Build the timeline early and update it throughout the case. It becomes the backbone of your factual presentation.',
            },
            {
              id: 'lw-p-5-2',
              title: 'Strengths and Weaknesses Assessment',
              task: 'Conduct a candid case assessment',
              prompt: `Provide a candid strengths and weaknesses assessment for the following case.

Case type: [e.g., breach of contract, employment discrimination, personal injury]
My client: [who you represent]
Opposing party: [who they are]
Forum: [court and jurisdiction]

Our claims/defenses:
[List what we are asserting or defending]

Key facts:
[List the material facts, favorable and unfavorable]

Evidence available:
[What evidence do we have? What might we be missing?]

Provide a brutally honest assessment:
1. Our 3 strongest arguments and why they work
2. Our 3 weakest points and what makes them vulnerable
3. Opposing counsel's best arguments against us
4. Key factual disputes that could go either way
5. Credibility factors - whose story is more believable?
6. Likely outcome range if this goes to trial
7. Settlement value range with reasoning
8. Top 3 risks we need to mitigate
9. Evidence we need to strengthen our position
10. Recommended strategy: settle, litigate aggressively, or something else?

Do not sugarcoat. I need to see this case as a judge or jury would.`,
              result: 'A candid case assessment for strategic planning.',
              tip: 'Run this before every major strategic decision - mediation, settlement discussions, or trial prep. Share with your team for discussion.',
            },
            {
              id: 'lw-p-5-3',
              title: 'Deposition Preparation Guide',
              task: 'Prepare deposition questions and strategy',
              prompt: `Help me prepare for a deposition in the following case.

Case: [case name]
Deponent: [who is being deposed and their role]
Deposition purpose: [what we need to establish or discover]
My client is: [plaintiff/defendant]

Key issues to explore:
[List the topics and facts you need to develop]

Documents to reference:
[List key documents you plan to use as exhibits]

What we already know about the deponent:
[Any prior statements, testimony, or background]

Generate:
1. Opening questions to establish foundation and set the tone (5 questions)
2. Topic-by-topic question sequences (5-7 questions per topic area)
3. Document-specific questions (questions to pair with each key exhibit)
4. Impeachment questions if prior inconsistent statements exist
5. "Lock-in" questions to pin down testimony for trial
6. Follow-up questions for likely evasive answers
7. Closing questions to preserve the record

For each question, note:
- What you are testing for
- What a helpful answer looks like
- How to follow up if they dodge

Keep questions simple, one-fact-per-question. Leading where appropriate.`,
              result: 'A comprehensive deposition outline with strategic questioning sequences.',
              tip: 'Adapt these questions based on what you learn during the deposition. Use the structure as a guide, not a rigid script.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Document Review',
          prompts: [
            {
              id: 'lw-p-6-1',
              title: 'Document Summary Generator',
              task: 'Summarize a lengthy legal document quickly',
              prompt: `Summarize the following legal document for efficient review.

Document type: [e.g., contract, deposition transcript, expert report, pleading, correspondence]
Context: [what matter this relates to and why I am reviewing it]

Document:
[Paste the document or relevant portions]

Provide:
1. One-paragraph executive summary (what this document is and why it matters)
2. Key provisions or findings (bulleted, 5-10 most important points)
3. Defined terms to be aware of
4. Obligations and deadlines mentioned
5. Risk areas or concerning language
6. How this document affects our client's position
7. Specific sections that require deeper attorney review (cite section numbers)
8. Any inconsistencies with other documents or known facts

If this is a deposition transcript: highlight the 5 most important exchanges, any admissions, and any testimony that contradicts prior statements.

Keep the summary under 500 words. I need to understand this document in 3 minutes.`,
              result: 'A concise document summary highlighting what matters most.',
              tip: 'Use this for initial triage during document review. It helps you prioritize which documents need deep reading versus a quick scan.',
            },
            {
              id: 'lw-p-6-2',
              title: 'Privilege Review Assist',
              task: 'Screen documents for potential privilege issues',
              prompt: `Review the following document(s) for potential attorney-client privilege and work product issues.

Matter: [case name]
Our client: [client name]
Attorneys of record: [list attorneys on the matter]
Time period of litigation/anticipated litigation: [dates]

Document(s) to review:
[Paste the document or describe its contents]

Analyze for:
1. Attorney-client privilege indicators:
   - Communication between attorney and client?
   - Seeking or providing legal advice?
   - Intended to be confidential?
   - Any waiver risks (third parties copied, forwarded, etc.)?

2. Work product doctrine indicators:
   - Prepared in anticipation of litigation?
   - Reflects attorney mental impressions or strategies?
   - Fact work product vs. opinion work product?

3. Privilege risks:
   - Was the communication shared with non-privileged parties?
   - Does the crime-fraud exception potentially apply?
   - Business advice vs. legal advice - which is this?

4. Recommendation: Privileged / Potentially Privileged / Not Privileged / Needs Attorney Review

Important: This is a screening tool only. Final privilege determinations require attorney judgment. Flag any close calls for manual review.`,
              result: 'A privilege screening analysis to accelerate document review.',
              tip: 'Never rely solely on AI for privilege calls. Use this to triage and flag, then have an attorney make final determinations on anything flagged as potentially privileged.',
            },
            {
              id: 'lw-p-6-3',
              title: 'Discovery Response Drafter',
              task: 'Draft responses to discovery requests',
              prompt: `Draft responses to the following discovery requests.

Case: [case name]
Requesting party: [who sent these]
Our client: [who we represent]
Type: [interrogatories / requests for production / requests for admission]

Discovery requests:
[Paste the numbered discovery requests]

For each request, draft a response that includes:
1. Standard objections where applicable:
   - Overly broad or unduly burdensome
   - Vague and ambiguous
   - Not reasonably calculated to lead to discoverable information
   - Attorney-client privilege or work product
   - Proportionality concerns
2. Subject to and without waiving objections, a substantive response where appropriate
3. For document requests - description of documents to be produced or basis for withholding

Guidelines:
- Preserve all valid objections even when providing substantive responses
- Flag any requests where we need client input before responding
- Identify requests that may require a privilege log
- Note any requests where we should consider a protective order
- Follow [jurisdiction] discovery rules and local court rules

Mark each response: Straightforward / Needs Client Input / Needs Strategic Discussion.`,
              result: 'Draft discovery responses with objections and substantive answers.',
              tip: 'Customize objections based on your jurisdiction\'s standards. Some courts are strict about boilerplate objections. Always verify the applicable rules.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what AI saves you in actual billable and non-billable time each month.',
      timeTable: [
        {
          task: 'Legal research',
          without: '4-6 hours/matter',
          withAI: '45 minutes',
          saved: '4+ hrs/matter',
        },
        {
          task: 'Contract review',
          without: '3-5 hours/contract',
          withAI: '30-45 minutes',
          saved: '3 hrs/contract',
        },
        {
          task: 'Brief/motion drafting',
          without: '6-10 hours/brief',
          withAI: '1-2 hours',
          saved: '6+ hrs/brief',
        },
        {
          task: 'Client communications',
          without: '30-45 min/email',
          withAI: '5-10 minutes',
          saved: '25 min/email',
        },
        {
          task: 'Case analysis',
          without: '3-5 hours',
          withAI: '30-60 minutes',
          saved: '3+ hrs/case',
        },
        {
          task: 'Document review triage',
          without: '2-4 weeks',
          withAI: '2-4 days',
          saved: 'Weeks per project',
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
          heading: 'The Access Gap',
          paragraphs: [
            'Lawyers who use AI are not cutting corners. They are delivering better work product faster. The research is more thorough because AI surfaces cases a manual search might miss. The briefs are tighter because the first draft arrives in minutes, leaving more time for strategic refinement.',
            'The gap is not about talent or experience. It is about who has the tools to turn their expertise into output at the speed clients now expect.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not go to law school to spend half your day on formatting, boilerplate, and research that a machine can accelerate by 10x. You went to law school to argue, to counsel, to solve complex problems. AI gives you back the time to do exactly that.',
          ],
        },
      ],
      keyInsight:
        'Start with one prompt. Run one research query. See the output quality. That is all it takes to understand how AI fits into your practice.',
    },

    ch7: {
      intro:
        'Seven days to integrate AI into your legal practice. One step at a time. Check off each task as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'lw-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'lw-1-2', label: 'Create a free Perplexity account for legal research' },
            { id: 'lw-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Run Your First Research Query',
          duration: '15 min',
          items: [
            { id: 'lw-2-1', label: 'Pick a legal issue you are currently researching' },
            { id: 'lw-2-2', label: 'Run the Case Law Research Query prompt with your real facts' },
            { id: 'lw-2-3', label: 'Verify the citations in your official research database' },
          ],
        },
        {
          day: 3,
          title: 'Review a Contract',
          duration: '20 min',
          items: [
            { id: 'lw-3-1', label: 'Take a contract you need to review this week' },
            { id: 'lw-3-2', label: 'Run the Contract Clause Analyzer prompt on key sections' },
            { id: 'lw-3-3', label: 'Compare AI\'s flags against your own review' },
          ],
        },
        {
          day: 4,
          title: 'Draft a Client Update',
          duration: '10 min',
          items: [
            { id: 'lw-4-1', label: 'Pick a client who needs a status update' },
            { id: 'lw-4-2', label: 'Run the Client Status Update Email prompt' },
            { id: 'lw-4-3', label: 'Personalize, review, and send' },
          ],
        },
        {
          day: 5,
          title: 'Analyze a Case',
          duration: '20 min',
          items: [
            { id: 'lw-5-1', label: 'Pick an active case that needs strategic assessment' },
            { id: 'lw-5-2', label: 'Run the Strengths and Weaknesses Assessment prompt' },
            { id: 'lw-5-3', label: 'Use the output to guide your next strategic decision' },
          ],
        },
        {
          day: 6,
          title: 'Draft Something',
          duration: '25 min',
          items: [
            { id: 'lw-6-1', label: 'Pick a motion or brief section you need to write' },
            { id: 'lw-6-2', label: 'Run the Motion Draft Generator or Statement of Facts Writer prompt' },
            { id: 'lw-6-3', label: 'Refine the output and verify all citations' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            { id: 'lw-7-1', label: 'Review which tasks AI accelerated the most' },
            { id: 'lw-7-2', label: 'Identify 2-3 workflows you will use AI for consistently' },
            { id: 'lw-7-3', label: 'Share this guide with a colleague at your firm' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
