import type { WorkbookData } from './types'

export const insuranceData = {
  professionId: 'insurance',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Insurance Agents',
  heroDescription:
    'Write better policy comparisons, follow up faster, and never struggle with claims documentation again. Real tools, proven workflows, and copy-paste prompts built for insurance professionals.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s Monday morning and your inbox has 34 emails. Five clients need policy renewal quotes by Wednesday. A claims adjuster wants additional documentation on a case you filed last month. Two prospects from last week\'s networking event need personalized follow-ups. And your agency manager wants the compliance audit checklist updated before the end of the quarter.',
        'You pull up the first renewal. The client has auto, home, and an umbrella policy across two carriers. Comparing the options, checking coverage gaps, and writing a recommendation that the client can actually understand takes 45 minutes. You have four more to go. That\'s half your day on renewals alone - and you haven\'t touched prospecting yet.',
        'You got into insurance because you genuinely care about protecting people. You\'re good at understanding risk, building trust, and explaining complex products in human terms. But the writing - the endless policy comparisons, the claims narratives, the compliance documentation, the outreach emails that need to sound personal but you\'re sending to 50 people - that\'s what eats your day. The paperwork is winning.',
      ],
      highlight:
        'What if AI handled the comparisons, the writing, and the documentation - so you could focus on the conversations that build trust and close policies?',
      closingParagraph:
        'Not a robot replacing your expertise. Not generic templates that sound like every other agent. Just a system that turns your knowledge into polished client-facing materials in minutes instead of hours - so you can spend your day advising, not typing.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace insurance agents. It can\'t sit across from a family and understand the worry behind their questions about life insurance. It can\'t read the hesitation in a business owner\'s voice when they realize they\'re underinsured. It can\'t build the relationship that makes someone trust you with their financial protection for the next 20 years. The human side of insurance - empathy, judgment, trust - that\'s irreplaceable.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient back-office assistant you\'ve ever had. One who reads policy documents in seconds, compares coverage options side by side, drafts claims narratives from your bullet points, and writes renewal emails that sound like you - not a form letter.',
            'Need to compare three carriers\' coverage options and write a recommendation? Five minutes instead of forty-five. Need to draft claims documentation from scattered notes? Done in two minutes. Need a 6-email renewal campaign for 200 clients? Built in an hour.',
            'AI handles the writing and documentation. You handle the advising and relationship-building that no algorithm can replicate.',
          ],
        },
      ],
      keyInsight:
        'Your product knowledge + AI\'s writing speed = clients who understand their coverage, respond to your outreach, and renew without shopping around. The agent who communicates clearly wins.',
    },

    ch3: {
      intro: 'Five tools that cover everything a modern insurance agent needs from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and comparison engine',
          description:
            'Policy comparisons, client emails, claims narratives, renewal campaigns, product explainers - any text-based insurance task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and documentation partner',
          description:
            'Complex policy analysis, compliance documentation, long-form client education materials, detailed claims support writing',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Carrier comparisons, regulatory updates, industry trends, product research - all with cited sources you can reference',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your client and policy tracker',
          description:
            'Client databases, renewal calendars, claims tracking, compliance checklists, agency SOPs - your operations hub',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your marketing design studio',
          description:
            'Client education graphics, social media posts, policy comparison infographics, open enrollment flyers, agency branding materials',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Professional visuals fast',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers policy comparisons, client emails, claims writing, and research. Add Canva when you need polished marketing materials.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual insurance workflows. Click each system to see the before/after and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Policy Comparison and Recommendation',
          before:
            'A client wants to know which of three carrier options is best for their situation. You pull up each quote, open the policy documents, and spend 45 minutes comparing coverage limits, deductibles, exclusions, and pricing. Then you spend another 30 minutes writing an email that explains it clearly. By the time you send it, half the day is gone for one client.',
          after:
            'You input the key details from each carrier - coverage, limits, deductibles, exclusions, price - and AI generates a clear side-by-side comparison with a plain-English recommendation in 5 minutes. Your client gets a professional, easy-to-understand analysis the same day they asked for it.',
          flow: [
            'Enter policy details from each carrier option',
            'AI generates a side-by-side comparison table',
            'AI writes a recommendation narrative explaining the best fit',
            'Review for accuracy and add your professional judgment',
            'Send the branded comparison to your client',
          ],
          timeSaved: { without: '45-75 min/comparison', withAI: '10-15 minutes' },
        },
        {
          id: 2,
          name: 'Client Outreach and Prospecting',
          before:
            'You know you should be reaching out to more prospects, but writing personalized emails is slow. You draft one, tweak it, send it, then start over for the next person. After 3 emails, you\'re mentally drained and switch to something easier. Your prospecting pipeline stays thin because the writing is a bottleneck.',
          after:
            'You give AI the prospect\'s industry, situation, and what you can help with. It drafts a personalized outreach email in 60 seconds. Write 20 personalized prospecting emails in the time it used to take to write 3. Your pipeline stays full without burning your creative energy.',
          flow: [
            'Identify prospect and their likely insurance needs',
            'AI drafts a personalized outreach email highlighting relevant risks',
            'Review and add personal touches or mutual connection references',
            'AI generates a 3-email follow-up sequence',
            'Track responses and adjust messaging for what resonates',
          ],
          timeSaved: { without: '20-30 min/prospect', withAI: '3-5 min/prospect' },
        },
        {
          id: 3,
          name: 'Claims Documentation Support',
          before:
            'A client files a claim and you need to document the incident, compile supporting materials, and write a narrative that\'s clear enough for the adjuster to process quickly. You spend an hour turning scattered details into a coherent claims submission. Complex claims can take half a day.',
          after:
            'You enter the key facts - what happened, when, where, damages, parties involved - and AI drafts a structured claims narrative with all the right sections. You review for accuracy, attach supporting documents, and submit. An hour of writing becomes 10 minutes of editing.',
          flow: [
            'Gather the facts from your client - incident details, timeline, damages',
            'AI generates a structured claims narrative with proper formatting',
            'Review for accuracy and completeness',
            'AI creates a supporting document checklist for this claim type',
            'Submit the polished documentation to the carrier',
          ],
          timeSaved: { without: '1-3 hours/claim', withAI: '15-30 minutes' },
        },
        {
          id: 4,
          name: 'Renewal Campaign Management',
          before:
            'Renewal season hits and you have 150 policies expiring in the next 60 days. Each client needs a personalized touchpoint - ideally a review of their current coverage, any recommended changes, and a reminder to renew. Most agents send a generic "your policy is renewing" email or just hope the auto-renewal catches them. Clients who feel ignored start shopping around.',
          after:
            'AI generates personalized renewal emails for each client segment - homeowners, auto-only, commercial, bundled policies - with specific talking points about coverage changes, market conditions, and why staying matters. Your retention rate goes up because every client feels seen.',
          flow: [
            'Segment your renewals by policy type and client profile',
            'AI generates personalized renewal emails per segment',
            'Add individual notes for high-value clients',
            'AI creates a 3-touch sequence: reminder, review offer, final notice',
            'Track open rates and follow up personally with non-responders',
          ],
          timeSaved: { without: '2-3 min/client (often skipped)', withAI: '30 sec/client' },
        },
        {
          id: 5,
          name: 'Compliance and Documentation',
          before:
            'Compliance documentation is the task everyone dreads. You need to ensure your disclosures are current, your documentation meets state requirements, and your processes are audit-ready. It\'s tedious, time-consuming, and the consequence of getting it wrong is serious. So you put it off until the last possible moment.',
          after:
            'AI generates compliance checklists tailored to your state and lines of business, drafts disclosure language, and creates documentation templates that meet regulatory requirements. Your compliance goes from "scramble before the audit" to "always ready."',
          flow: [
            'Specify your state, lines of business, and compliance area',
            'AI generates a tailored compliance checklist',
            'AI drafts disclosure language and documentation templates',
            'Review with your compliance officer or E&O guidelines',
            'Store in your agency management system for easy access',
          ],
          timeSaved: { without: '4-6 hours/quarter', withAI: '1 hour/quarter' },
        },
        {
          id: 6,
          name: 'Product Education Materials',
          before:
            'A client asks you to explain the difference between term and whole life insurance. You know it cold, but writing it down in a way that\'s clear, accurate, and doesn\'t sound like a textbook takes 30 minutes. Creating educational content for your website, social media, or client packets feels like a never-ending project you never start.',
          after:
            'You tell AI the product and the audience. It creates a clear, jargon-free explainer in 3 minutes. Build an entire library of client education materials in an afternoon. Position yourself as the agent who makes insurance actually understandable.',
          flow: [
            'Choose the product or concept to explain',
            'Specify the audience - first-time buyers, business owners, retirees, etc.',
            'AI generates a clear, jargon-free explainer',
            'Review for accuracy and compliance',
            'Format for email, social media, website, or print',
          ],
          timeSaved: { without: '30-45 min/piece', withAI: '5-10 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'No prompt engineering required. Just copy, paste, fill in your details, and hit enter. Click each prompt to reveal it.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Policy Comparison',
          prompts: [
            {
              id: 'in-p-1-1',
              title: 'Coverage Comparison Summary',
              task: 'Compare coverage options from multiple carriers',
              prompt: `Compare these insurance policy options for my client and write a recommendation.

Client profile:
- Name: [client name]
- Type: [individual / family / business]
- Current coverage: [brief description of existing policy, if any]
- Key concerns: [what matters most - price, coverage breadth, deductible, specific risks]

Option A - [Carrier name]:
- Premium: [annual/monthly amount]
- Coverage limits: [key limits]
- Deductible: [amount]
- Notable inclusions: [what's covered that others might not have]
- Notable exclusions: [what's NOT covered]

Option B - [Carrier name]:
[Same format]

Option C - [Carrier name]:
[Same format]

Create:
1. A side-by-side comparison table (coverage, limits, deductible, premium, key differences)
2. A "winner by category" summary (best price, best coverage, best for [client concern])
3. A 150-word recommendation paragraph written for the client - plain English, no jargon
4. One coverage gap or risk the client should know about regardless of which option they choose

Keep it clear enough that someone who knows nothing about insurance would understand.`,
              result:
                'A professional comparison with recommendation ready to send to your client.',
              tip: 'Always add your own professional judgment to the AI recommendation. Your expertise in reading between the lines of policy language is what clients are paying for.',
            },
            {
              id: 'in-p-1-2',
              title: 'Coverage Gap Analysis',
              task: 'Identify gaps in a client\'s current coverage',
              prompt: `Analyze my client's current insurance coverage and identify potential gaps.

Client profile:
- Type: [individual / family / small business / etc.]
- Life stage: [young professional / growing family / pre-retirement / business owner]
- Location: [state - for regulatory context]
- Income/revenue: [range]
- Assets: [home, vehicles, business equipment, etc.]

Current policies:
1. [Policy type] - [carrier] - [coverage limit] - [deductible]
2. [Policy type] - [carrier] - [coverage limit] - [deductible]
3. [Policy type] - [carrier] - [coverage limit] - [deductible]

Analyze for:
1. Coverage gaps - what risks are completely unprotected?
2. Underinsurance - where are limits too low for their asset level?
3. Overlap - are they paying for duplicate coverage anywhere?
4. Missing policies - what should someone in their situation typically carry?
5. Deductible assessment - are deductibles appropriate for their financial situation?

For each gap or issue found:
- Explain the risk in plain English
- Rate the urgency: critical / important / nice-to-have
- Suggest a specific solution with estimated cost range

Write it as a client-facing document, not an internal memo.`,
              result:
                'A thorough gap analysis that demonstrates your value and opens cross-selling conversations naturally.',
              tip: 'This is your most powerful sales tool disguised as a service. Every gap is a conversation about protection, not a pitch.',
            },
            {
              id: 'in-p-1-3',
              title: 'Policy Renewal Review',
              task: 'Create a renewal review summary for a client meeting',
              prompt: `Create a policy renewal review summary for my upcoming client meeting.

Client: [name]
Policies up for renewal:
1. [Policy type] - Current premium: [amount] - Renewal premium: [amount] - Change: [+/- %]
2. [Policy type] - Current premium: [amount] - Renewal premium: [amount] - Change: [+/- %]

Changes since last renewal:
- Life changes: [new home, new car, new family member, business growth, etc.]
- Claims filed: [any claims in the past year]
- Market conditions: [rates going up/down, carrier changes, new products]

Create a meeting-ready summary that includes:
1. Overview of all policies and renewal changes
2. Why premiums changed (explain in client-friendly terms)
3. Recommended adjustments based on life changes
4. Potential savings opportunities (bundling, higher deductibles, loyalty discounts)
5. Questions I should ask the client during the review
6. A clear action item list for after the meeting

Keep it under 400 words. Professional but conversational - this is a talking guide, not a script.`,
              result:
                'A structured renewal review guide that makes your meeting productive and builds client confidence.',
              tip: 'Send a 2-sentence preview email before the meeting: "I reviewed your policies and have 3 recommendations. Looking forward to discussing Tuesday."',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Client Outreach',
          prompts: [
            {
              id: 'in-p-2-1',
              title: 'Cold Outreach Email',
              task: 'Write a personalized prospecting email for a new lead',
              prompt: `Write a cold outreach email for an insurance prospect.

Prospect info:
- Name: [name]
- Type: [individual / business owner / HR director / etc.]
- Industry: [if business]
- Likely insurance needs: [based on their situation]
- How I found them: [referral, networking event, LinkedIn, local business, etc.]
- Connection point: [anything personal - mutual contact, same event, local community, etc.]

My specialty: [lines of business I focus on]
My differentiator: [what makes my agency different - local, independent, specialized, etc.]

Write an outreach email that:
- Opens with the connection point, not a sales pitch
- Identifies one specific risk or concern relevant to their situation
- Positions me as a resource, not a salesperson
- Includes a soft CTA (15-minute call, free review, coffee meeting)
- Under 120 words - respect their time
- Subject line that gets opened (not "insurance quote" - something relevant to them)

Write 2 versions: one for email, one shorter for LinkedIn message (under 60 words).`,
              result:
                'A personalized prospecting message that opens conversations instead of getting deleted.',
              tip: 'The best cold emails don\'t sell insurance. They sell the conversation. Keep it about them, not your products.',
            },
            {
              id: 'in-p-2-2',
              title: 'Referral Request Email',
              task: 'Ask a satisfied client for referrals naturally',
              prompt: `Write a referral request email for a client I have a strong relationship with.

Client: [name]
Relationship: [how long, what policies, any claims I helped with]
Recent positive interaction: [what just happened - renewal, claim resolved, good review, etc.]
Who I'd like referrals to: [business owners, homeowners in [area], young families, etc.]

Write an email that:
- Starts by referencing our recent positive interaction
- Expresses genuine appreciation (not formulaic)
- Makes the ask specific: "Do you know anyone who [specific situation]?"
- Makes it easy: "Just reply with their name and I'll take it from there"
- Offers something in return (but not a bribe - maybe a gift card, a charitable donation in their name, or just genuine gratitude)
- Under 120 words
- Warm, personal tone - this is someone who trusts me

Also write a 30-second voicemail script version of the same ask.`,
              result:
                'A natural referral request that doesn\'t feel awkward or transactional.',
              tip: 'Send referral requests within 48 hours of a positive interaction. The goodwill is highest right after you\'ve delivered value.',
            },
            {
              id: 'in-p-2-3',
              title: 'Event Follow-up Sequence',
              task: 'Create follow-up emails for networking event contacts',
              prompt: `I attended [networking event / chamber meeting / community event] and met several prospects. Create follow-up emails for each.

Event: [name and type of event]
My role there: [attendee / sponsor / speaker / booth]

Contacts:
1. [Name] - [title/company] - [what we discussed] - [their likely insurance need]
2. [Name] - [title/company] - [what we discussed] - [their likely insurance need]
3. [Name] - [title/company] - [what we discussed] - [their likely insurance need]

For each contact, write:
- Email 1 (Day 1): Reference our conversation, provide one valuable insight related to what we discussed, suggest a follow-up meeting
- Email 2 (Day 5): Share a relevant resource (article, tip, market update), gentle reminder
- Email 3 (Day 10): Final touch - specific value prop, clear CTA, easy to say yes or no

Each email: under 100 words, reference the event naturally, no hard sell in email 1.
Include subject lines for each.`,
              result:
                'A complete event follow-up sequence that turns networking contacts into clients.',
              tip: 'Send email 1 within 24 hours. Every day you wait, the connection fades. Speed beats perfection.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Claims Documentation',
          prompts: [
            {
              id: 'in-p-3-1',
              title: 'Claims Narrative Writing',
              task: 'Draft a claims narrative from raw incident details',
              prompt: `Draft a claims narrative from the following incident details.

Claim type: [auto accident / property damage / liability / workers comp / etc.]
Policy number: [for reference]
Date of incident: [date]
Location: [where it happened]

What happened:
[Paste your raw notes, client's description, or bullet points about the incident]

Parties involved:
- Insured: [name, role in incident]
- Other parties: [names, roles]
- Witnesses: [if any]

Damages:
- Property damage: [description and estimated amount]
- Injuries: [description, if applicable]
- Other losses: [business interruption, temporary housing, etc.]

Documentation available: [photos, police report, medical records, repair estimates, etc.]

Write a structured claims narrative that includes:
1. Summary of incident (3-4 sentences)
2. Detailed chronological account
3. Description of damages with estimated values
4. List of supporting documentation (with status: attached / pending / requested)
5. Recommended next steps for the adjuster

Use professional, objective language. State facts, not opinions. If details are unclear, note them as "pending verification."`,
              result:
                'A professional claims narrative ready for submission to the carrier.',
              tip: 'AI writes the structure and language. You verify every fact. Never submit AI-generated claims documentation without thorough review.',
            },
            {
              id: 'in-p-3-2',
              title: 'Client Claims Guide',
              task: 'Create a step-by-step claims guide for your client',
              prompt: `Create a claims process guide for my client who just experienced [type of loss/incident].

Incident type: [auto accident / home damage / business interruption / theft / etc.]
Client name: [name]
Policy type: [what they're insured for]
Key concern: [what they're most worried about]

Write a client-friendly guide that covers:
1. "What happens next" - The claims process in 5 simple steps
2. What the client needs to do right now (specific action items)
3. Documents and evidence to gather (checklist format)
4. What to expect from the insurance company (timeline, adjuster visit, etc.)
5. What NOT to do (common mistakes that can hurt their claim)
6. How I will help them through this process
7. Estimated timeline from filing to resolution
8. FAQ - 5 questions clients always ask about this type of claim

Keep the tone calm and reassuring. This person just had something bad happen.
Under 500 words. Use simple language - no insurance jargon.`,
              result:
                'A reassuring, practical claims guide that reduces client anxiety and sets clear expectations.',
              tip: 'Send this within 1 hour of learning about the claim. In a stressful moment, being the agent who provides clarity builds lifetime loyalty.',
            },
            {
              id: 'in-p-3-3',
              title: 'Claims Appeal Letter',
              task: 'Draft an appeal for a denied or underpaid claim',
              prompt: `Draft a claims appeal letter for a denied or underpaid claim.

Claim details:
- Claim number: [number]
- Policy type: [type]
- Date of loss: [date]
- Original claim amount: [amount]
- Amount paid: [amount, if partial payment]
- Reason for denial/underpayment: [what the carrier cited]

Why we believe the claim should be paid/adjusted:
- [Reason 1 - e.g., the exclusion cited doesn't apply because...]
- [Reason 2 - e.g., additional documentation shows...]
- [Reason 3 - e.g., policy language supports coverage under...]

Supporting evidence:
- [Document 1]
- [Document 2]
- [Document 3]

Write a professional appeal letter that:
1. States the claim number and policy details clearly
2. Acknowledges the carrier's position without agreeing with it
3. Presents our counter-argument logically, point by point
4. References specific policy language where applicable
5. Lists attached supporting evidence
6. Requests a specific resolution (full payment, re-evaluation, etc.)
7. Sets a reasonable response timeline

Tone: Firm but professional. We want resolution, not confrontation.
Under 500 words.`,
              result:
                'A structured appeal letter that presents a compelling case for claim reconsideration.',
              tip: 'Always reference specific policy language and section numbers. Adjusters respond to documentation, not emotion.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Renewal Campaigns',
          prompts: [
            {
              id: 'in-p-4-1',
              title: 'Renewal Reminder Sequence',
              task: 'Create a multi-touch renewal reminder campaign',
              prompt: `Create a 4-email renewal reminder sequence for a specific policy segment.

Segment: [auto / home / commercial / life / health / bundled]
Typical client in this segment: [brief profile]
Average renewal timeline: [when policies in this segment typically expire]
Common reason clients don't renew: [price shopping / forgot / life changes / etc.]

Email 1 (60 days before renewal):
- Heads up that renewal is coming
- Mention any positive changes (new discounts, improved coverage)
- Offer a free policy review

Email 2 (30 days before renewal):
- Renewal details and what to expect
- Address the #1 reason clients in this segment leave
- Include a comparison: "Here's what you're getting vs. starting over"

Email 3 (14 days before renewal):
- Create gentle urgency without pressure
- Personal touch - reference their claims history or tenure
- Clear CTA: "Call me to review before [date]"

Email 4 (3 days before renewal):
- Final reminder
- Make it easy: "Reply YES to renew, or call me at [number]"
- Thank them for their loyalty

Each email: under 120 words, personalization fields in [brackets], subject lines included.`,
              result:
                'A complete renewal campaign that retains more clients through proactive, personalized communication.',
              tip: 'Clients who receive 3+ touchpoints before renewal renew at 2x the rate of those who get one generic notice.',
            },
            {
              id: 'in-p-4-2',
              title: 'Win-Back Campaign',
              task: 'Create an outreach sequence for clients who left',
              prompt: `Write a 3-email win-back sequence for clients who didn't renew their policy.

Client segment: [type of policy they had]
How long ago they left: [timeframe]
Common reasons clients leave: [price / service / life change / competitor offer]
What's changed since they left: [new products, better rates, improved service, etc.]

Email 1 (Opening):
- Acknowledge they left - no guilt, no pressure
- Share one genuine change or improvement since they left
- Offer a no-obligation comparison with their current coverage
- Under 100 words

Email 2 (1 week later):
- Lead with value - share a relevant insurance tip or market insight
- Mention a specific benefit they might be missing
- Soft CTA: "Want me to run a quick comparison?"
- Under 100 words

Email 3 (2 weeks later):
- Final friendly touch
- Share a client success story (someone who came back and saved/gained)
- Make it easy to say yes: "Reply or call - 10-minute conversation"
- Under 100 words

Include subject lines for each. Tone: confident but humble. We want them back, but we\'re not desperate.`,
              result:
                'A professional win-back sequence that re-opens conversations with former clients.',
              tip: 'Win-back campaigns convert at 10-20% when timed right. Run them 3-6 months after departure, when buyer\'s remorse kicks in.',
            },
            {
              id: 'in-p-4-3',
              title: 'Cross-Sell Campaign',
              task: 'Create a campaign to introduce additional coverage to existing clients',
              prompt: `Create a cross-sell campaign email for existing clients who could benefit from additional coverage.

Current policy: [what they already have]
Recommended add-on: [what you want to introduce - umbrella, life, commercial, etc.]
Why this add-on matters: [the risk it covers, the gap it fills]
Client segment: [who these clients are - homeowners, business owners, families, etc.]

Write 2 emails:

Email 1 (Education-first):
- Start with a scenario or story that illustrates the risk
- Explain the coverage gap in plain English
- Don't mention price - just awareness
- End with: "Want to know if this applies to you? Takes 5 minutes to find out."
- Under 150 words

Email 2 (Sent 5 days later to those who didn't respond):
- Lead with a specific stat about this type of claim
- Brief explanation of coverage and typical cost range
- Social proof: "Most of my [segment] clients add this for around [amount/month]"
- Clear CTA: free 10-minute coverage check
- Under 120 words

Include subject lines. Tone: educational, not pushy. You're protecting them, not upselling.`,
              result:
                'An educational cross-sell campaign that increases policy count while genuinely protecting clients.',
              tip: 'Cross-selling to existing clients costs 5x less than acquiring new ones. Focus here first.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Compliance',
          prompts: [
            {
              id: 'in-p-5-1',
              title: 'Compliance Checklist Generator',
              task: 'Generate a compliance checklist for your agency',
              prompt: `Generate a compliance checklist for my insurance agency.

State: [state]
Lines of business: [personal lines / commercial / life & health / all]
Agency type: [independent / captive / MGA / etc.]
Areas of concern: [new hire onboarding / annual audit / E&O prevention / state-specific requirements]

Create a comprehensive compliance checklist covering:

1. Licensing and appointments
   - Agent licenses current for all producers
   - Carrier appointments up to date
   - CE requirements on track

2. Documentation standards
   - Required disclosures for each line of business
   - Record retention requirements and timelines
   - Client file documentation minimums

3. Sales practices
   - Needs analysis documentation
   - Suitability requirements (especially life/annuities)
   - Disclosure requirements at point of sale

4. Data and privacy
   - Client data protection procedures
   - Breach notification requirements
   - Document disposal protocols

5. Complaints and errors
   - Complaint tracking and response procedures
   - E&O incident documentation
   - Carrier notification requirements

Format as a checkable list with:
- The requirement
- Frequency (annual / quarterly / per transaction / ongoing)
- Who's responsible
- Where documentation is stored

Flag anything specific to [state] that agents commonly miss.`,
              result:
                'A comprehensive compliance checklist tailored to your state and lines of business.',
              tip: 'Review this quarterly. Compliance isn\'t a once-a-year event - it\'s an ongoing system. This checklist makes it manageable.',
            },
            {
              id: 'in-p-5-2',
              title: 'E&O Prevention Documentation',
              task: 'Create documentation templates for E&O risk reduction',
              prompt: `Create E&O prevention documentation templates for my agency.

Lines of business: [what you sell]
State: [state]
Common E&O claims in my space: [failure to offer coverage, misrepresentation, late binding, etc.]

Generate templates for:

1. Coverage declination form
   - When a client declines recommended coverage
   - Clear language stating what was offered and refused
   - Client signature line
   - Date and agent information

2. Needs analysis documentation
   - Questions to ask during every client consultation
   - Space to record client responses
   - Recommendations made based on responses
   - Client acknowledgment section

3. Policy change request documentation
   - Clear record of what was requested
   - Confirmation of changes made
   - Potential impact of changes explained to client
   - Client acknowledgment

4. Communication log template
   - Date, time, method of communication
   - Summary of discussion
   - Action items and responsible parties
   - Follow-up required

Each template should:
- Be clear enough for any agent in the agency to use
- Include all fields needed for E&O defense
- Use plain language (not legalese)
- Be completable in under 3 minutes`,
              result:
                'Ready-to-use E&O prevention templates that protect your agency and document your diligence.',
              tip: 'The best E&O defense is documentation. These templates take 3 minutes to complete but could save you 3 years of litigation.',
            },
            {
              id: 'in-p-5-3',
              title: 'Regulatory Update Summary',
              task: 'Summarize regulatory changes and their impact on your agency',
              prompt: `Summarize recent regulatory changes affecting insurance agents in [state].

My lines of business: [personal lines / commercial / life & health / all]
Time period: [current quarter / past 6 months / upcoming changes]

For each relevant change, provide:
1. What changed - Plain English summary (no legal language)
2. Effective date
3. Who it affects - Which agents, which products, which clients
4. What I need to do - Specific action items for my agency
5. Deadline - When do I need to be compliant?
6. Risk if I don't comply - Consequences in real terms
7. Resources - Where to find the full regulation or guidance

Also include:
- Any upcoming changes I should prepare for in the next 6 months
- Industry trends that might become regulations
- One thing most agents in [state] are overlooking right now

Format as a brief per change - scannable, not dense.
Note: I'll verify all regulatory details with my compliance resources. Use this as a research starting point.`,
              result:
                'A clear regulatory update brief that keeps you ahead of compliance requirements.',
              tip: 'Run this in Perplexity for sourced regulatory information, then have your compliance officer verify before acting on it.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Product Education',
          prompts: [
            {
              id: 'in-p-6-1',
              title: 'Product Explainer Script',
              task: 'Create a client-friendly explanation of an insurance product',
              prompt: `Create a client-friendly explainer for [insurance product type].

Product: [term life / whole life / umbrella / commercial general liability / cyber insurance / etc.]
Target audience: [who this is for - first-time buyers, small business owners, families, etc.]
Common misconceptions: [what people get wrong about this product]
Typical client objection: [the main reason people say no]

Write an explainer that includes:

1. "What it is" - One sentence a 10-year-old could understand
2. "Why you need it" - A real scenario that makes the need obvious
3. "How it works" - 3-step simplified explanation
4. "What it costs" - Typical range for this audience (I'll adjust to local rates)
5. "Common myths" - 3 misconceptions debunked in one sentence each
6. "The bottom line" - One paragraph summary of why it matters

Requirements:
- Zero jargon (or define it immediately if unavoidable)
- Under 300 words
- Write it like you're explaining to a smart friend over coffee
- Include one analogy that makes the concept click

Also create a 50-word social media version of the same explainer.`,
              result:
                'A clear product explainer you can use in client meetings, on your website, and on social media.',
              tip: 'Build a library of these for every product you sell. They become your go-to educational content and save you from re-explaining the basics in every meeting.',
            },
            {
              id: 'in-p-6-2',
              title: 'Industry Risk Profile',
              task: 'Create an insurance needs overview for a specific industry',
              prompt: `Create an insurance needs overview for [industry/business type].

Business type: [restaurant / contractor / tech startup / retail store / medical practice / etc.]
Typical size: [revenue range or employee count]
Location context: [state or region, if relevant]

Write a guide that covers:

1. Essential coverage (must-have):
   - What they need and why
   - Typical coverage limits for this business size
   - Estimated cost range

2. Strongly recommended coverage:
   - What it protects against
   - Why businesses in this industry specifically need it
   - Real example of a claim scenario

3. Optional but smart coverage:
   - Emerging risks for this industry
   - When to add these (revenue thresholds, employee counts, etc.)

4. Top 3 claims in this industry:
   - What happens most often
   - Average claim cost
   - How to prevent or mitigate

5. Coverage mistakes this industry makes:
   - 3 common gaps or errors
   - The consequences of each

Keep it under 500 words. This should be valuable enough that a business owner would save it.
Write it as a client-facing document, not an agent resource.`,
              result:
                'An industry-specific insurance guide that positions you as a specialist and opens commercial accounts.',
              tip: 'Create these for your top 3-5 target industries. Send them to prospects in that space. Instant credibility.',
            },
            {
              id: 'in-p-6-3',
              title: 'FAQ Content for Clients',
              task: 'Generate FAQ content for your website or client communications',
              prompt: `Generate FAQ content for my insurance agency's clients.

Topic: [general insurance / specific product line / claims process / etc.]
Audience: [personal lines clients / commercial clients / specific demographic]
Tone: [professional but approachable / conversational / authoritative]

Create 10 frequently asked questions with answers:

Format for each:
- Question: [Written the way a real client would ask it]
- Short answer: [1-2 sentences - the quick version]
- Detailed answer: [3-4 sentences - the full explanation]
- Pro tip: [One insider insight that adds genuine value]

Cover questions about:
- How insurance actually works (the basics people are embarrassed to ask)
- What affects their rates and how to save
- Claims process demystified
- When and why to review their coverage
- Common mistakes to avoid
- What to look for in an agent (position yourself naturally)

Requirements:
- Each answer under 80 words
- Zero jargon without explanation
- Actually helpful - not marketing disguised as education
- Include 2 questions that naturally lead to a conversation with an agent`,
              result:
                'Ready-to-publish FAQ content for your website, email newsletters, and social media.',
              tip: 'Post one FAQ per week on social media. Educational content builds trust faster than any sales pitch.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s see what AI actually saves in an insurance agent\'s week.',
      timeTable: [
        {
          task: 'Policy comparisons',
          without: '45-75 min each',
          withAI: '10-15 minutes',
          saved: '35-60 min each',
        },
        {
          task: 'Client outreach emails',
          without: '20-30 min/prospect',
          withAI: '3-5 minutes',
          saved: '20+ min/prospect',
        },
        {
          task: 'Claims documentation',
          without: '1-3 hours/claim',
          withAI: '15-30 minutes',
          saved: '1-2.5 hrs/claim',
        },
        {
          task: 'Renewal campaigns',
          without: '2-3 min/client (often skipped)',
          withAI: '30 sec/client',
          saved: '2+ min/client',
        },
        {
          task: 'Compliance documentation',
          without: '4-6 hours/quarter',
          withAI: '1 hour',
          saved: '4+ hrs/quarter',
        },
        {
          task: 'Product education content',
          without: '30-45 min/piece',
          withAI: '5-10 minutes',
          saved: '25-35 min/piece',
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
            'In 2026, agents using AI respond faster, document better, communicate more clearly, and retain more clients through consistent outreach. Same product knowledge, same licenses, same carriers - just dramatically less time spent on the writing and admin.',
            'The gap isn\'t experience or expertise. It\'s who adopted the tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t get licensed to format compliance checklists and write renewal emails. You did it to protect people and build a business. AI gives you back the hours to do more of what actually grows your book - advising clients and building relationships.',
          ],
        },
      ],
      keyInsight:
        'Start with one policy comparison. See how fast AI turns raw data into a client-ready recommendation. That\'s your proof of concept.',
    },

    ch7: {
      intro:
        'Seven days to transform your insurance workflow. Follow the plan, check off each step, and see the results immediately.',
      days: [
        {
          day: 1,
          title: 'Get Set Up',
          duration: '15 min',
          items: [
            { id: 'in-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'in-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'in-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Your First Comparison',
          duration: '15 min',
          items: [
            {
              id: 'in-2-1',
              label: 'Run the Coverage Comparison Summary prompt with a real client case',
            },
            {
              id: 'in-2-2',
              label: 'Compare the output to how you usually write comparisons',
            },
            {
              id: 'in-2-3',
              label: 'Edit it and send to your client',
            },
          ],
        },
        {
          day: 3,
          title: 'Fix Your Outreach',
          duration: '20 min',
          items: [
            {
              id: 'in-3-1',
              label: 'Run the Cold Outreach Email prompt for 3 real prospects',
            },
            {
              id: 'in-3-2',
              label: 'Personalize and send each one',
            },
          ],
        },
        {
          day: 4,
          title: 'Streamline Claims',
          duration: '20 min',
          items: [
            {
              id: 'in-4-1',
              label: 'Run the Claims Narrative Writing prompt on a current or recent claim',
            },
            {
              id: 'in-4-2',
              label: 'Create a Client Claims Guide for the most common claim type you handle',
            },
          ],
        },
        {
          day: 5,
          title: 'Build Retention',
          duration: '25 min',
          items: [
            {
              id: 'in-5-1',
              label: 'Run the Renewal Reminder Sequence prompt for your largest policy segment',
            },
            {
              id: 'in-5-2',
              label: 'Load the sequence into your CRM or email platform',
            },
          ],
        },
        {
          day: 6,
          title: 'Create Education Content',
          duration: '20 min',
          items: [
            {
              id: 'in-6-1',
              label: 'Run the Product Explainer prompt for your most-sold product',
            },
            {
              id: 'in-6-2',
              label: 'Post the social media version or add it to your website',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'in-7-1',
              label: 'Review what you built this week - which system saved the most time?',
            },
            {
              id: 'in-7-2',
              label: 'Pick 2 systems to use consistently going forward',
            },
            {
              id: 'in-7-3',
              label: 'Share this guide with a fellow agent who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
