import type { WorkbookData } from './types'

export const eventplannersData = {
  professionId: 'eventplanners',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Event Planners',
  heroDescription:
    'Plan faster, coordinate better, and never start a proposal from scratch again. Real tools, proven workflows, and copy-paste prompts for every stage of event planning.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s Tuesday morning and you have three events in various stages of production. The corporate gala is in 12 days and the caterer just changed their minimum headcount. The wedding couple from Saturday wants timeline revisions by end of day. And the nonprofit fundraiser client needs a revised budget after the venue added a cleaning fee nobody mentioned during the walkthrough.',
        'Your inbox has 27 unread messages - vendor confirmations, client questions, venue logistics, and a florist asking which of the three centerpiece options was approved. Somewhere in a folder on your desktop is a half-finished proposal for a new client who inquired last week. You know if you don\'t send it today, they\'ll go with someone else. But writing a custom proposal from scratch takes 2-3 hours you don\'t have.',
        'You became an event planner because you love creating experiences that people remember. The creative vision, the problem-solving, the moment when everything comes together and the client\'s face lights up - that\'s why you do this. But between the proposals, the budgets, the vendor emails, the timelines, the runsheets, and the post-event reports, you spend more time on documents than on the creative work that makes events special.',
      ],
      highlight:
        'What if AI handled the proposals, the budgets, the timelines, and the coordination emails - so you could focus on the creative vision and client relationships that make you irreplaceable?',
      closingParagraph:
        'Not replacing your creative eye or your vendor relationships. Not generating cookie-cutter events. Just a system that turns your ideas into polished proposals in 15 minutes, builds minute-by-minute runsheets from your notes, and drafts vendor coordination emails while you focus on what actually makes events extraordinary.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to plan events for you. It can\'t walk into a venue and feel whether the acoustics work for a live band. It can\'t charm a difficult vendor into giving you a better rate. It can\'t read the room at a tasting and know the bride hates the salmon even though she\'s smiling politely. The human side of event planning - creativity, instinct, relationships, problem-solving under pressure - that\'s irreplaceable.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most organized, fastest-typing assistant you\'ve ever had. One who drafts beautiful proposals from your bullet points, builds detailed timelines from a conversation, creates budget spreadsheets with line items you might forget, and writes professional vendor emails in your voice.',
            'Need a custom proposal for a prospect? 15 minutes instead of 3 hours. Need a minute-by-minute day-of runsheet? Built from your notes in 5 minutes. Need to compare three venue options in a structured format for your client? Done before lunch.',
            'AI handles the documents and coordination. You handle the vision and relationships that turn good events into unforgettable ones.',
          ],
        },
      ],
      keyInsight:
        'Your creative vision + AI\'s document speed = more events, better proposals, and happier clients. The planner who responds fastest and presents most professionally wins the booking.',
    },

    ch3: {
      intro: 'Five tools that cover everything a modern event planner needs from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your proposal and communication engine',
          description:
            'Client proposals, vendor emails, timelines, runsheets, marketing copy, budget narratives - any text-based planning task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your detailed planning and analysis partner',
          description:
            'Complex budget analysis, detailed proposals, vendor comparison matrices, post-event reports, contract review summaries',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed documents',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your event marketing design studio',
          description:
            'Event invitations, social media graphics, signage, programs, mood boards, day-of materials - professional design without a designer',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Professional visuals fast',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your vendor and market research assistant',
          description:
            'Venue research, vendor pricing benchmarks, industry trends, competitor analysis, local regulations - all with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your event operations hub',
          description:
            'Client databases, event timelines, vendor contact lists, budget trackers, checklists, templates - your entire business organized',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers proposals, timelines, budgets, and vendor research. Add Canva when you need polished event marketing materials.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual event planning workflows. Click each system to see the before/after and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Client Proposal Creation',
          before:
            'A new prospect wants a proposal for their corporate holiday party. You open a blank document, pull up a previous proposal to reference, and spend 2-3 hours customizing it - rewriting the intro, adjusting the scope, building a rough budget, describing your approach, and formatting everything to look professional. By the time you send it, 2 days have passed and the prospect is already talking to your competitor.',
          after:
            'You enter the event details - type, guest count, budget range, client preferences, venue ideas - and AI generates a polished, custom proposal in 15 minutes. You review it, add your creative vision and personal touches, and send it same-day. The prospect is impressed by your speed and professionalism.',
          flow: [
            'Gather event details from the client inquiry or consultation call',
            'AI generates a complete proposal with scope, timeline, and budget estimate',
            'Add your creative vision, unique ideas, and portfolio references',
            'AI formats it professionally with sections and branded structure',
            'Review, personalize, and send same-day',
          ],
          timeSaved: { without: '2-3 hours/proposal', withAI: '20-30 minutes' },
        },
        {
          id: 2,
          name: 'Vendor Coordination and Management',
          before:
            'You have 8 vendors for one event. Each needs a different email - the caterer needs the final headcount, the florist needs the color palette confirmed, the DJ needs the timeline, the photographer needs the shot list. Writing 8 detailed, professional coordination emails takes an hour. Multiply by 3 active events and vendor communication alone is a part-time job.',
          after:
            'You enter each vendor\'s name, role, and what they need to know. AI drafts all 8 emails in 10 minutes - each one specific, professional, and clear about deadlines and deliverables. You review, hit send, and move on to creative work.',
          flow: [
            'List all vendors and what each needs from you right now',
            'AI drafts specific coordination emails for each vendor',
            'Review for accuracy - confirm dates, quantities, and requirements',
            'AI generates follow-up reminders for outstanding items',
            'Send all communications in one focused batch',
          ],
          timeSaved: { without: '45-60 min/event', withAI: '10-15 minutes' },
        },
        {
          id: 3,
          name: 'Timeline and Runsheet Building',
          before:
            'Building a day-of timeline means mapping every minute from setup to teardown. You\'re cross-referencing vendor arrival times, ceremony or program order, meal service windows, entertainment cues, and dozens of logistics. A detailed runsheet takes 2-3 hours to build and another hour to revise when things change - which they always do.',
          after:
            'You give AI the event structure - start time, key moments, vendor details, program elements - and it builds a minute-by-minute runsheet in 10 minutes. When the client wants changes, updating the entire timeline takes 5 minutes instead of an hour.',
          flow: [
            'Enter event start/end time and key milestones',
            'List all vendor arrival and setup requirements',
            'AI builds a minute-by-minute runsheet with responsibilities assigned',
            'Review and adjust for realistic timing and buffer periods',
            'AI generates vendor-specific timeline extracts for each team',
          ],
          timeSaved: { without: '2-3 hours/event', withAI: '15-25 minutes' },
        },
        {
          id: 4,
          name: 'Budget Planning and Tracking',
          before:
            'The client wants a detailed budget breakdown. You open a spreadsheet, start listing categories from memory, research typical costs, build formulas, and try to remember every line item from similar past events. You always forget something - rentals, gratuities, overtime fees, permit costs. The budget takes 2 hours to build and looks different every time because there\'s no standard template.',
          after:
            'You tell AI the event type, guest count, and budget range. It generates a comprehensive budget with every category and common line items - including the ones you\'d normally forget. Building a detailed budget goes from a 2-hour spreadsheet exercise to a 15-minute review and customize task.',
          flow: [
            'Enter event type, guest count, location, and total budget',
            'AI generates a detailed budget template with standard line items',
            'Customize pricing based on your vendor quotes and local rates',
            'AI flags items where you\'re over or under typical benchmarks',
            'Export to your tracking tool and update as quotes come in',
          ],
          timeSaved: { without: '1.5-2 hours/event', withAI: '15-20 minutes' },
        },
        {
          id: 5,
          name: 'Marketing and Promotion',
          before:
            'Your client needs marketing materials for their event - social media posts, email invitations, a landing page description, and maybe a press release. You\'re an event planner, not a copywriter. Each piece takes 30-45 minutes of struggling with words, and the results are adequate but never as polished as you\'d like.',
          after:
            'You give AI the event details and target audience. It generates social media captions, email invitation copy, a landing page description, and press release text in 15 minutes. Each piece is on-brand, on-message, and ready to use or hand to the client\'s marketing team.',
          flow: [
            'Enter event details, target audience, and key selling points',
            'AI generates copy for social media, email, web, and press',
            'Adjust tone and messaging for the client\'s brand voice',
            'AI creates variations for different platforms and audiences',
            'Review and distribute to the appropriate channels',
          ],
          timeSaved: { without: '2-3 hours/event', withAI: '20-30 minutes' },
        },
        {
          id: 6,
          name: 'Post-Event Reporting',
          before:
            'The event went great. Now the client wants a recap - attendance numbers, budget variance, vendor performance, highlights, and recommendations for next year. You know all of this, but turning it into a polished report takes 3-4 hours. For corporate clients who need ROI analysis, it\'s even longer. Most planners either skip the report or send a bare-bones email.',
          after:
            'You enter the key data - attendance, actual vs. budget costs, client feedback, highlights, issues - and AI generates a comprehensive post-event report in 20 minutes. For corporate clients, it includes ROI analysis. The report makes you look thorough, professional, and worth rehiring.',
          flow: [
            'Compile your event data - attendance, costs, feedback, highlights',
            'AI generates a structured post-event report with analysis',
            'Add photos, testimonials, and your professional observations',
            'AI calculates budget variance and ROI metrics',
            'Deliver to client with recommendations for future events',
          ],
          timeSaved: { without: '3-4 hours/report', withAI: '25-35 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'No prompt engineering needed. Just copy, paste, fill in your details, and hit enter. Click each prompt to reveal it.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Client Proposals',
          prompts: [
            {
              id: 'ep-p-1-1',
              title: 'Custom Event Proposal',
              task: 'Create a professional event proposal for a prospective client',
              prompt: `Create a professional event proposal for a prospective client.

Client: [name / company]
Event type: [corporate gala / wedding / fundraiser / product launch / conference / holiday party / etc.]
Date: [target date or range]
Guest count: [expected attendance]
Venue: [confirmed venue or "venue TBD - recommendations needed"]
Budget range: [client's stated budget]
Client's vision: [what they described wanting - theme, vibe, must-haves]
Special requirements: [dietary needs, accessibility, AV, entertainment preferences]

Create a proposal that includes:

1. Executive summary - Capture their vision back to them (show you listened)
2. Event concept - Theme, aesthetic direction, and experience flow
3. Scope of services - What you will manage and deliver
4. Proposed timeline - Key planning milestones from now to event day
5. Budget overview - Category breakdown with estimated ranges:
   - Venue and rentals
   - Catering and beverages
   - Entertainment and AV
   - Decor and florals
   - Photography/videography
   - Coordination and staffing
   - Miscellaneous and contingency (10-15%)
6. Why work with me - Your approach and what sets you apart (I'll customize)
7. Next steps - Clear action items to move forward

Tone: Professional, creative, and confident. This should feel exciting, not transactional.
Length: 600-800 words.`,
              result:
                'A polished, comprehensive event proposal ready to customize and send.',
              tip: 'Send proposals within 24 hours of the consultation. Speed wins bookings. AI makes same-day turnaround easy.',
            },
            {
              id: 'ep-p-1-2',
              title: 'Wedding Proposal Package',
              task: 'Create a detailed wedding planning proposal',
              prompt: `Create a detailed wedding planning proposal for a couple.

Couple: [names]
Wedding date: [date]
Venue: [venue name or type they're considering]
Guest count: [expected]
Budget: [range]
Style/vision: [rustic / modern / classic / bohemian / cultural / etc.]
Must-haves: [what they specifically mentioned wanting]
Concerns: [what they're worried about - budget, logistics, family dynamics, etc.]

Create a proposal with:

1. Personal opening - Reference something specific from our conversation
2. "Your wedding, as I see it" - Paint a picture of their day from start to finish (150 words)
3. Planning packages offered:
   - Full planning - What's included, ideal for whom
   - Partial planning - What's included, ideal for whom
   - Day-of coordination - What's included, ideal for whom
4. My recommended package for them and why
5. Detailed budget estimate for their vision:
   - Venue and site fees
   - Catering (per person estimate)
   - Bar and beverages
   - Florals and decor
   - Photography and videography
   - Music and entertainment
   - Attire and beauty (estimate)
   - Stationery and invitations
   - Transportation
   - Planner fee
   - Contingency fund (10%)
6. Planning timeline - Month-by-month milestones
7. 3 testimonials placeholders (I'll add real ones)
8. How to book - Clear next steps with deadline for booking rate

Warm, personal, exciting tone. This is one of the biggest decisions of their lives.`,
              result:
                'A beautiful wedding proposal that makes the couple feel understood and excited to book.',
              tip: 'Include the "Your wedding, as I see it" narrative section. It\'s the #1 thing that converts proposals to bookings - couples want to feel seen.',
            },
            {
              id: 'ep-p-1-3',
              title: 'Corporate Event Pitch',
              task: 'Create a pitch deck outline for a corporate event contract',
              prompt: `Create a corporate event pitch for [company name].

Event type: [annual conference / team retreat / product launch / awards ceremony / client appreciation / holiday party]
Audience: [who's attending - employees, clients, executives, partners]
Company industry: [industry]
Objectives: [what the company wants to achieve - team bonding, brand awareness, client retention, etc.]
Budget: [range, if known]
Previous events: [what they've done before, if known]

Create a pitch that includes:

1. Understanding their goals - Show you get what they need beyond just a party
2. Creative concept - A theme or approach that ties to their brand and objectives
3. Experience design - What attendees will feel, not just what they'll see:
   - Arrival experience
   - Key moments and highlights
   - Interactive or engagement elements
   - Closing experience
4. Logistics overview - Venue recommendations, timeline, capacity planning
5. ROI framework - How we'll measure event success against their objectives:
   - Attendee satisfaction
   - Engagement metrics
   - Business outcomes (if applicable)
6. Budget framework - Tiered options:
   - Essential package (core needs met)
   - Elevated package (premium experience)
   - Signature package (everything possible)
7. Case study placeholder - Similar event we produced (I'll fill in)
8. Our process - What working with us looks like week by week
9. Next steps with timeline

Tone: Strategic and creative. Corporate clients need to justify the spend to leadership.
This should read like a business case, not just an event description.`,
              result:
                'A strategic corporate event pitch that speaks to business objectives and justifies the investment.',
              tip: 'Corporate buyers need internal ammunition. Give them an ROI framework they can present to their boss.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Vendor Coordination',
          prompts: [
            {
              id: 'ep-p-2-1',
              title: 'Vendor Comparison Matrix',
              task: 'Create a structured comparison of vendor options for your client',
              prompt: `Create a vendor comparison matrix for my client.

Service needed: [catering / photography / florals / DJ / venue / rentals / etc.]
Event: [type and date]
Budget for this vendor category: [amount]
Client priorities: [what matters most - price, style, experience, flexibility, etc.]

Vendor A: [Name]
- Price quote: [amount]
- What's included: [list specifics]
- What's extra: [add-on costs]
- Style/portfolio: [describe their aesthetic or approach]
- Availability: [confirmed / pending]
- Reviews/reputation: [what you know]
- Pros: [your professional opinion]
- Cons: [honest assessment]

Vendor B: [Name]
[Same format]

Vendor C: [Name]
[Same format]

Create:
1. A clean comparison table with all key factors side by side
2. A "winner by category" summary (best value, best quality, best fit for event)
3. A 100-word recommendation paragraph for the client
4. Questions the client should ask each vendor before deciding
5. Red flags to watch for with this vendor type

This should be professional enough to email directly to the client.`,
              result:
                'A structured vendor comparison that helps clients make confident decisions faster.',
              tip: 'Clients who receive structured comparisons book faster and trust your judgment more. The effort to create this pays back 10x.',
            },
            {
              id: 'ep-p-2-2',
              title: 'Vendor Coordination Emails',
              task: 'Draft coordination emails for all vendors on an event',
              prompt: `Draft coordination emails for all vendors on my upcoming event.

Event: [type] on [date] at [venue]
Client: [name]
Guest count: [number]

Vendors needing communication:

1. [Vendor name] - [role: caterer/florist/DJ/photographer/etc.]
   What they need to know: [specific details, deadlines, requirements]
   Outstanding questions: [what you need from them]

2. [Vendor name] - [role]
   What they need to know: [details]
   Outstanding questions: [what you need]

3. [Vendor name] - [role]
   What they need to know: [details]
   Outstanding questions: [what you need]

4. [Vendor name] - [role]
   What they need to know: [details]
   Outstanding questions: [what you need]

For each vendor, write an email that:
- Opens with a friendly but professional greeting
- Provides the specific information they need clearly
- Asks outstanding questions with deadlines for response
- Confirms next deliverables and dates
- Under 120 words each

Also create a "vendor status tracker" - a simple table showing each vendor, their confirmation status, and outstanding items.`,
              result:
                'A complete set of vendor emails plus a status tracker to keep everything on schedule.',
              tip: 'Batch your vendor communications. Send all emails in one 15-minute session instead of scattered throughout the day.',
            },
            {
              id: 'ep-p-2-3',
              title: 'Vendor Brief Document',
              task: 'Create a detailed brief for a specific vendor',
              prompt: `Create a detailed vendor brief for [vendor type] on my upcoming event.

Event overview:
- Type: [event type]
- Date: [date]
- Venue: [name and location]
- Guest count: [number]
- Theme/style: [description]
- Client: [name, relevant preferences]

For this vendor ([vendor type]):
- Budget allocated: [amount]
- Service window: [setup time to breakdown time]
- Specific requirements: [detailed list of what we need]
- Style references: [describe the look/feel/vibe we're going for]
- Must-haves: [non-negotiables]
- Nice-to-haves: [if budget allows]
- Restrictions: [venue rules, allergies, noise limits, etc.]

Create a vendor brief that includes:
1. Event overview (so they understand the bigger picture)
2. Their specific scope and deliverables
3. Detailed timeline for their involvement (setup, service, breakdown)
4. Style and aesthetic direction with clear descriptions
5. Contact information and decision-making authority
6. Logistics - loading dock, elevator access, parking, power, etc.
7. Coordination points with other vendors (who they need to sync with)
8. Deadline for final confirmations and details

Keep it clear and actionable. This should prevent 90% of the "I didn't know that" problems.`,
              result:
                'A comprehensive vendor brief that prevents miscommunication and day-of surprises.',
              tip: 'Send vendor briefs 2 weeks before the event. It\'s the single best investment to prevent day-of problems.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Timelines and Runsheets',
          prompts: [
            {
              id: 'ep-p-3-1',
              title: 'Minute-by-Minute Runsheet',
              task: 'Build a detailed day-of timeline and runsheet',
              prompt: `Build a detailed day-of runsheet for my event.

Event: [type]
Date: [date]
Venue: [name]
Venue access time: [when we can start setup]
Event start time: [time]
Event end time: [time]
Venue must be cleared by: [time]

Key program elements (in rough order):
1. [element] - [approximate duration]
2. [element] - [approximate duration]
3. [element] - [approximate duration]
4. [element] - [approximate duration]
5. [element] - [approximate duration]

Vendors and their setup needs:
- [Vendor/team] - needs [X minutes] for setup, arrives at [time]
- [Vendor/team] - needs [X minutes] for setup, arrives at [time]
- [Vendor/team] - needs [X minutes] for setup, arrives at [time]

Special logistics:
- [Any specific requirements - AV checks, rehearsals, VIP arrivals, etc.]

Create a minute-by-minute runsheet that includes:
1. Pre-event setup timeline (who arrives when, setup order)
2. Guest arrival and registration flow
3. Program timeline with exact times for every transition
4. Behind-the-scenes cues (when to signal the caterer, when to dim lights, etc.)
5. Buffer times between segments (minimum 5-10 minutes)
6. Breakdown and load-out timeline
7. A "key contacts" box with names and phone numbers (I'll fill in numbers)
8. A "what if" column - backup plan for each time-sensitive moment

Format as a table: Time | Activity | Who's Responsible | Notes/Cues`,
              result:
                'A professional runsheet that keeps your entire team synchronized on event day.',
              tip: 'Print copies for every team lead and vendor captain. Digital is great for planning; paper is essential for execution.',
            },
            {
              id: 'ep-p-3-2',
              title: 'Wedding Day Timeline',
              task: 'Create a comprehensive wedding day timeline',
              prompt: `Create a comprehensive wedding day timeline.

Wedding details:
- Date: [date]
- Venue: [ceremony venue] and [reception venue, if different]
- Ceremony time: [time]
- Reception start: [time]
- Reception end: [time]
- Guest count: [number]
- Wedding party size: [number of bridesmaids/groomsmen]

Key moments:
- Getting ready location: [where]
- First look: [yes/no, if yes - time and location]
- Pre-ceremony photos: [plan]
- Ceremony duration: [estimated]
- Cocktail hour: [yes/no, location]
- Dinner style: [plated / buffet / family style]
- Speeches: [how many, who]
- First dance and special dances: [list]
- Entertainment/dancing: [DJ / band, start time]
- Special traditions: [bouquet toss, cake cutting, send-off, etc.]
- Vendor meal timing: [when vendors eat]

Create:
1. Couple's timeline - Starting from when they wake up
2. Wedding party timeline - When they need to be where
3. Vendor timeline - Arrival, setup, and key cue times
4. Guest experience timeline - What guests see and when
5. Behind-the-scenes coordinator timeline - All the invisible logistics

Include 15-minute buffers before ceremony and between major transitions.
Add a "sunrise/sunset" note for photo timing.
Format each timeline as its own section - they'll be distributed to different people.`,
              result:
                'A complete set of wedding day timelines for every stakeholder - couple, party, vendors, and coordinator.',
              tip: 'Send the couple a simplified "your day" version. They don\'t need to see the logistics sausage being made.',
            },
            {
              id: 'ep-p-3-3',
              title: 'Multi-Day Event Schedule',
              task: 'Build a schedule for a conference or multi-day event',
              prompt: `Build a multi-day event schedule.

Event: [conference / retreat / festival / multi-day wedding / etc.]
Duration: [number of days]
Venue: [name, with room/space names if applicable]
Attendees: [number and type]
Theme or focus: [what the event is about]

Day-by-day overview:
Day 1: [main focus and key activities]
Day 2: [main focus and key activities]
Day 3: [main focus and key activities, if applicable]

Spaces available:
- [Main room/ballroom] - capacity [X]
- [Breakout room 1] - capacity [X]
- [Breakout room 2] - capacity [X]
- [Outdoor space] - capacity [X]

Meals included: [breakfast, lunch, dinner, breaks]
Entertainment/social: [networking reception, gala dinner, team activity, etc.]

Create:
1. Master schedule - All days, all rooms, all activities in one grid view
2. Attendee-facing schedule - Clean version guests will see (by day)
3. Production schedule - Setup, transitions, AV needs, staff positions
4. Meal and break schedule with headcounts and dietary note reminders
5. Room assignment matrix - Which space is used for what and when
6. Transition notes - What needs to happen between sessions (room flips, AV changes)
7. Daily staff briefing template - What to cover each morning

Format the master schedule as: Time | Room A | Room B | Room C | Notes`,
              result:
                'A complete multi-day event production package with schedules for every audience.',
              tip: 'Create a shared digital version that updates in real-time. For multi-day events, things always shift - a static PDF won\'t cut it.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Budget Planning',
          prompts: [
            {
              id: 'ep-p-4-1',
              title: 'Detailed Event Budget',
              task: 'Build a comprehensive event budget with all line items',
              prompt: `Build a comprehensive event budget.

Event type: [corporate event / wedding / fundraiser / conference / party]
Guest count: [number]
Location/region: [city or region - for pricing context]
Client budget: [total amount available]
Event style: [casual / upscale / luxury / theme-specific]

Create a detailed budget with these categories and typical line items:

1. Venue - Rental fee, overtime charges, security deposit, insurance
2. Catering - Food (per person), beverages, service staff, gratuity, cake/dessert
3. Beverages - Bar package, specialty drinks, non-alcoholic options, bartenders
4. Decor and florals - Centerpieces, ceremony decor, lounge areas, lighting, linens
5. Entertainment - DJ/band, MC, special performances, AV equipment
6. Photography/Video - Photographer, videographer, photo booth, prints
7. Rentals - Tables, chairs, dinnerware, glassware, specialty items, tents
8. Stationery - Invitations, programs, signage, place cards, menus
9. Transportation - Shuttles, valet, limousine, parking
10. Staffing - Event coordinator, day-of assistants, security, coat check
11. Miscellaneous - Favors, welcome bags, permits, tips, emergency supplies
12. Contingency - 10-15% of total budget

For each line item, provide:
- Estimated cost (range appropriate for [location])
- Per-unit cost where applicable
- Priority: must-have / nice-to-have / optional

Include a summary showing: Total estimated, budget remaining, and areas to cut if over budget.`,
              result:
                'A comprehensive budget template that catches every expense and helps clients make informed trade-offs.',
              tip: 'Always include the contingency line. Events without a contingency budget end up over budget. Events with one usually come in under.',
            },
            {
              id: 'ep-p-4-2',
              title: 'Budget Variance Report',
              task: 'Create a budget vs. actual comparison report',
              prompt: `Create a budget vs. actual variance report for a completed event.

Event: [type] - [date]
Client: [name]
Original budget: [total]
Actual spend: [total]

Category breakdown:
1. [Category] - Budgeted: [amount] - Actual: [amount]
2. [Category] - Budgeted: [amount] - Actual: [amount]
3. [Category] - Budgeted: [amount] - Actual: [amount]
4. [Category] - Budgeted: [amount] - Actual: [amount]
5. [Category] - Budgeted: [amount] - Actual: [amount]
6. [Category] - Budgeted: [amount] - Actual: [amount]

Major variances to explain:
- [Over budget item] - Why: [reason]
- [Under budget item] - Why: [reason]
- [Unexpected expense] - What happened: [explanation]

Create a report that includes:
1. Executive summary - One paragraph on overall budget performance
2. Variance table - Category, budgeted, actual, variance ($), variance (%)
3. Explanation of significant variances (over 10% in either direction)
4. Savings achieved - Where we came in under and why
5. Overages explained - Where we went over and whether it was justified
6. Lessons learned - What to budget differently next time
7. Recommendations for future events

Tone: Transparent and professional. If we went over, explain it honestly.
This should reassure the client that their money was managed responsibly.`,
              result:
                'A professional budget report that demonstrates fiscal responsibility and builds trust for future bookings.',
              tip: 'Send this within 1 week of the event. Proactive financial transparency is the #1 driver of repeat corporate business.',
            },
            {
              id: 'ep-p-4-3',
              title: 'Budget Reduction Options',
              task: 'Create smart cost-cutting alternatives when a client is over budget',
              prompt: `My client's event vision is over their budget. Create smart alternatives to bring costs down without killing the experience.

Event: [type]
Guest count: [number]
Original vision budget: [what it would cost to do everything they want]
Actual budget: [what they can spend]
Gap: [how much we need to cut]

Categories where we might save:
1. [Category] - Current plan: [what they want] - Cost: [amount]
2. [Category] - Current plan: [what they want] - Cost: [amount]
3. [Category] - Current plan: [what they want] - Cost: [amount]
4. [Category] - Current plan: [what they want] - Cost: [amount]

Non-negotiables (client won't compromise on these):
- [Item 1]
- [Item 2]

For each category, provide:
1. Option A - Minimal change: Small tweak that saves [amount]
2. Option B - Smart alternative: Different approach, similar impact, saves [amount]
3. Option C - Major pivot: Significant change, still beautiful, saves [amount]

For each option, explain:
- What the guest experience difference would actually be
- Whether guests would notice the change (honestly)
- What we gain or lose

End with: "Recommended cuts to reach budget" - Your best combination to save [gap amount] with the least impact on guest experience.`,
              result:
                'A structured menu of cost-cutting options that empowers clients to make trade-offs they feel good about.',
              tip: 'Never say "we can\'t afford that." Say "here are three ways to achieve a similar impact at a different price point." Same outcome, better relationship.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Event Marketing',
          prompts: [
            {
              id: 'ep-p-5-1',
              title: 'Event Marketing Copy Package',
              task: 'Create marketing copy for event promotion across all channels',
              prompt: `Create a marketing copy package for an upcoming event.

Event: [name and type]
Date: [date]
Venue: [name and location]
Target audience: [who should attend]
Key selling points: [what makes this event worth attending]
Ticket price / registration: [cost or "free"]
RSVP deadline: [date]
Client's brand voice: [formal / fun / corporate / creative / elegant]

Create:

1. Email invitation (150 words):
   - Compelling subject line (3 options)
   - Hook that creates excitement or FOMO
   - Key details (what, when, where, why)
   - Clear CTA with deadline

2. Social media posts:
   - Instagram caption (under 150 words + 10 hashtags)
   - LinkedIn post (under 200 words, professional tone)
   - Facebook event description (under 200 words)
   - X/Twitter post (under 280 characters)

3. Website/landing page copy (200 words):
   - Headline that stops the scroll
   - Sub-headline with key value prop
   - 3-4 bullet points: what attendees will experience
   - Speaker/entertainment highlights (if applicable)
   - Registration CTA

4. Reminder email (75 words):
   - For 1 week before the event
   - Create urgency without being spammy

All copy should be consistent in tone and messaging across channels.`,
              result:
                'A complete event marketing package ready to deploy across email, social media, and web.',
              tip: 'Start promoting 4-6 weeks before the event. Use the email for the initial push, social media for momentum, and the reminder to close registrations.',
            },
            {
              id: 'ep-p-5-2',
              title: 'Sponsorship Proposal',
              task: 'Create a sponsorship package proposal for potential event sponsors',
              prompt: `Create a sponsorship proposal for [event name].

Event details:
- Type: [gala / conference / festival / charity event / etc.]
- Date: [date]
- Expected attendance: [number]
- Audience demographics: [who attends - industry, seniority, interests]
- Previous sponsors: [if any - demonstrates credibility]
- Media coverage: [expected press, social reach, content creation]

Create sponsorship tiers:

1. Title/Presenting Sponsor - [highest amount]:
   - Exclusive naming rights
   - [List premium benefits - logo placement, speaking slot, VIP access, etc.]

2. Gold Sponsor - [amount]:
   - [Benefits list - slightly less than title]

3. Silver Sponsor - [amount]:
   - [Benefits list]

4. Community/In-Kind Sponsor - [product/service contribution]:
   - [Benefits for non-cash sponsors]

For each tier, include:
- Clear benefit list with specifics (not vague "logo placement" - where exactly?)
- Estimated impressions/reach for each benefit
- Exclusivity details (how many sponsors per tier)
- Deadline for commitment

Also include:
- A one-paragraph "why sponsor this event" section
- Audience data that sponsors care about (purchasing power, decision-makers, etc.)
- Custom sponsorship option note

Tone: Confident and value-focused. This is a business proposition, not a donation request.`,
              result:
                'A professional sponsorship proposal that clearly articulates value and makes the investment easy to justify.',
              tip: 'Customize the audience data for each prospect. A tech sponsor cares about different demographics than a luxury brand.',
            },
            {
              id: 'ep-p-5-3',
              title: 'Event Recap for Social Media',
              task: 'Write post-event content to showcase your work',
              prompt: `Write post-event recap content to showcase this event on my portfolio and social media.

Event: [name and type]
Client: [name, with permission to share]
Guest count: [number]
Venue: [name]
Theme/style: [description]
Highlights: [3-5 standout moments]
Challenges overcome: [any problems you solved that show your value]
Client feedback: [a quote or paraphrase of what they said]

Create:

1. Instagram carousel caption (for 8-10 photo carousel):
   - Hook that stops the scroll
   - Brief story of the event
   - 1-2 behind-the-scenes details that show expertise
   - Client testimonial
   - CTA for inquiries
   - 15 relevant hashtags

2. LinkedIn case study post (250 words):
   - Professional framing
   - Challenge, approach, and result
   - Specific numbers (guests, timeline, budget management)
   - Lesson or insight for fellow planners
   - Booking CTA

3. Portfolio write-up (200 words):
   - For your website portfolio page
   - Focus on the experience created, not logistics
   - Photo placement suggestions

4. Client thank-you post (100 words):
   - Tag-friendly social post thanking client and vendors
   - Genuine, not performative`,
              result:
                'A complete post-event content package that showcases your work and generates new inquiries.',
              tip: 'Post within 48 hours while the event is still fresh. Tag every vendor - they\'ll share your post, multiplying your reach.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Post-Event Reporting',
          prompts: [
            {
              id: 'ep-p-6-1',
              title: 'ROI Analysis Report',
              task: 'Create a return on investment analysis for a corporate event',
              prompt: `Create an ROI analysis report for a corporate event.

Event: [name and type]
Client: [company name]
Event objectives: [what they wanted to achieve]
Total investment: [amount spent]

Results data:
- Attendance: [actual] vs [expected]
- Registration/ticket revenue: [if applicable]
- Sponsorship revenue: [if applicable]
- Leads generated: [number]
- Media impressions: [social media reach, press coverage]
- Attendee satisfaction: [survey results, if available]
- Social media engagement: [posts, shares, mentions, hashtags used]
- New connections/partnerships formed: [any known]
- Sales or deals closed at/after event: [if known]

Create a report that includes:

1. Executive summary - 3 sentences on event success
2. Objectives vs. outcomes - Did we hit the goals? (table format)
3. Financial analysis:
   - Total investment breakdown
   - Direct revenue generated
   - Cost per attendee
   - Cost per lead (if applicable)
   - Revenue-to-cost ratio
4. Engagement metrics:
   - Attendance rate (actual vs. invited)
   - Social media performance
   - Survey highlights
5. Qualitative wins - Stories, quotes, moments that mattered
6. Areas for improvement - Honest assessment
7. Recommendations for next year - 3 specific suggestions
8. Appendix - Raw data tables

Tone: Data-driven but readable. The CEO should understand it in 5 minutes.`,
              result:
                'A comprehensive ROI report that justifies the investment and secures the contract for next year.',
              tip: 'The ROI report is your best sales tool for next year\'s event. Invest the time to make it compelling.',
            },
            {
              id: 'ep-p-6-2',
              title: 'Post-Event Client Summary',
              task: 'Write a post-event summary for the client',
              prompt: `Write a post-event summary for my client.

Event: [name and type]
Date: [date]
Client: [name]
Guest count: [actual attendance]

Event highlights:
- [Highlight 1 - a moment that worked perfectly]
- [Highlight 2 - guest reaction or standout experience]
- [Highlight 3 - logistic win or creative success]

Challenges and solutions:
- [Issue that came up] - How we handled it: [solution]
- [Another issue, if any] - How we handled it: [solution]

Vendor performance:
- [Vendor] - [brief assessment: excellent / good / needs improvement]
- [Vendor] - [brief assessment]
- [Vendor] - [brief assessment]

Budget summary:
- Total budget: [amount]
- Total actual: [amount]
- Over/under: [amount and %]

Client feedback received: [any comments from the client or guests]

Create a post-event summary that includes:
1. Warm opening - Congratulate them on a great event
2. Highlights recap - What went well (celebrate the wins)
3. By the numbers - Key metrics in a clean format
4. Challenges handled - Show your value through problem-solving
5. Vendor report card - Brief performance notes for their records
6. Budget summary - Clean and transparent
7. Recommendations for next time - 3 specific improvements
8. Thank you and next steps

Under 500 words. Professional, warm, and forward-looking.`,
              result:
                'A polished post-event summary that closes the project professionally and opens the door for rebooking.',
              tip: 'The post-event summary is your final impression. Make it excellent and it becomes your first step toward next year\'s contract.',
            },
            {
              id: 'ep-p-6-3',
              title: 'Attendee Survey Template',
              task: 'Create a post-event survey for attendees',
              prompt: `Create a post-event attendee survey for [event type].

Event: [name]
Audience: [who attended]
Event goals: [what we wanted attendees to experience]
Survey timing: [sending within X days of event]

Create a survey with:

Section 1: Overall experience (3 questions)
- Overall satisfaction rating (1-10 scale)
- Net Promoter Score question: "How likely are you to recommend this event?"
- One-word description: "Describe the event in one word"

Section 2: Specific elements (5 questions - multiple choice or rating)
- Venue and facilities
- Food and beverage
- Programming/entertainment
- Networking opportunities
- Event organization and flow

Section 3: Content/value (3 questions)
- What was the most valuable part of the event?
- What was missing or could be improved?
- Would you attend again next year?

Section 4: Open feedback (2 questions)
- What was the highlight of your experience?
- Any additional comments or suggestions?

Section 5: Optional demographics (2 questions)
- Role/industry (helps us understand our audience)
- How did you hear about this event?

Requirements:
- Under 3 minutes to complete (12-15 questions max)
- Mix of quantitative (for data) and qualitative (for insights)
- Include a thank-you message at the end with a small incentive mention (if applicable)
- Add instructions for setting this up in Google Forms or Typeform`,
              result:
                'A comprehensive but quick survey that generates actionable insights for future events.',
              tip: 'Send within 24 hours while the experience is fresh. Response rates drop 50% after 48 hours.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at what AI saves across a typical event planning business.',
      timeTable: [
        {
          task: 'Client proposals',
          without: '2-3 hours each',
          withAI: '20-30 minutes',
          saved: '2+ hrs/proposal',
        },
        {
          task: 'Vendor coordination',
          without: '45-60 min/event',
          withAI: '10-15 minutes',
          saved: '35-45 min/event',
        },
        {
          task: 'Timelines and runsheets',
          without: '2-3 hours/event',
          withAI: '15-25 minutes',
          saved: '2+ hrs/event',
        },
        {
          task: 'Budget building',
          without: '1.5-2 hours/event',
          withAI: '15-20 minutes',
          saved: '1.5 hrs/event',
        },
        {
          task: 'Marketing copy',
          without: '2-3 hours/event',
          withAI: '20-30 minutes',
          saved: '2+ hrs/event',
        },
        {
          task: 'Post-event reports',
          without: '3-4 hours/report',
          withAI: '25-35 minutes',
          saved: '3 hrs/report',
        },
      ],
      totalRow: {
        task: 'Conservative total per event',
        without: '-',
        withAI: '-',
        saved: '10-15 hours',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'In 2026, event planners using AI send proposals same-day, produce professional runsheets faster, and deliver post-event reports that make clients say "wow." Same creativity, same vendor relationships, same attention to detail - just dramatically less time lost to documents and formatting.',
            'The gap isn\'t talent or taste. It\'s who adopted the tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become an event planner to write emails and format spreadsheets. You did it to create experiences that people remember. AI gives you back the hours to focus on the creative, human side of events - the part that actually makes you irreplaceable.',
          ],
        },
      ],
      keyInsight:
        'Start with one proposal. See how fast AI turns your consultation notes into a polished document. That moment changes everything.',
    },

    ch7: {
      intro:
        'Seven days to transform your event planning workflow. Follow the plan, check off each step, and reclaim your creative time.',
      days: [
        {
          day: 1,
          title: 'Get Set Up',
          duration: '15 min',
          items: [
            { id: 'ep-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'ep-1-2', label: 'Create a free Perplexity account for vendor research' },
            { id: 'ep-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Write a Proposal',
          duration: '20 min',
          items: [
            {
              id: 'ep-2-1',
              label: 'Run the Custom Event Proposal prompt for a real or upcoming inquiry',
            },
            {
              id: 'ep-2-2',
              label: 'Compare the speed and quality to your usual process',
            },
            {
              id: 'ep-2-3',
              label: 'Customize and send it - or save it as a template',
            },
          ],
        },
        {
          day: 3,
          title: 'Build a Runsheet',
          duration: '20 min',
          items: [
            {
              id: 'ep-3-1',
              label: 'Run the Minute-by-Minute Runsheet prompt for your next event',
            },
            {
              id: 'ep-3-2',
              label: 'Adjust timing and responsibilities to match reality',
            },
          ],
        },
        {
          day: 4,
          title: 'Create a Budget',
          duration: '20 min',
          items: [
            {
              id: 'ep-4-1',
              label: 'Run the Detailed Event Budget prompt for a current project',
            },
            {
              id: 'ep-4-2',
              label: 'Update with your actual vendor quotes and local pricing',
            },
          ],
        },
        {
          day: 5,
          title: 'Draft Vendor Emails',
          duration: '15 min',
          items: [
            {
              id: 'ep-5-1',
              label: 'Run the Vendor Coordination Emails prompt for your current event',
            },
            {
              id: 'ep-5-2',
              label: 'Review, personalize, and send all vendor emails in one batch',
            },
          ],
        },
        {
          day: 6,
          title: 'Market an Event',
          duration: '20 min',
          items: [
            {
              id: 'ep-6-1',
              label: 'Run the Event Marketing Copy Package prompt for an upcoming event',
            },
            {
              id: 'ep-6-2',
              label: 'Post the social media content or share with your client\'s marketing team',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'ep-7-1',
              label: 'Review what you built this week - which system saved the most time?',
            },
            {
              id: 'ep-7-2',
              label: 'Pick 2-3 systems to use consistently for every event',
            },
            {
              id: 'ep-7-3',
              label: 'Share this guide with a fellow planner who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
