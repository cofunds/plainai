import type { WorkbookData } from './types'

export const realestateData = {
  professionId: 'realestate',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Real Estate Agents',
  heroDescription:
    'Win more listings, close faster, and never stare at a blank MLS description again. Real tools, proven workflows, and copy-paste prompts for every part of your real estate business.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s 7 AM and your phone is already buzzing. A seller wants to know why their listing hasn\'t gotten more showings. A buyer from last week\'s open house is asking for comps on three different neighborhoods. Your broker needs your market update by noon. And somewhere between the morning coffee and the first showing at 10, you need to write a listing description for that new property you signed yesterday.',
        'You pull up the MLS, stare at the description box, and type "Beautiful 3-bedroom home in a desirable neighborhood..." for the hundredth time. You know it\'s generic. You know buyers scroll past descriptions like this. But you have six other things demanding your attention, and wordsmithing a property description isn\'t what got you into real estate.',
        'Between listing appointments, buyer consultations, open houses, negotiations, and the mountain of follow-up emails that never seems to shrink - you spend more time on paperwork and writing than you do on the relationship-building that actually closes deals. You became an agent because you love helping people find their home. Instead, you spend 60% of your day on tasks that don\'t require your expertise.',
      ],
      highlight:
        'What if AI handled the writing, the research, and the follow-ups - so you could focus on the handshakes, the negotiations, and the closings?',
      closingParagraph:
        'Not replacing your local knowledge. Not generating robotic emails. Just a system that drafts your listing descriptions in 90 seconds, writes personalized follow-ups while you drive to your next showing, and turns raw MLS data into market analysis your clients actually understand.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace real estate agents. It can\'t walk a property and notice that the natural light in the living room is the real selling point. It can\'t sit across from a nervous first-time buyer and read their body language. It can\'t negotiate a counteroffer at midnight or calm down a seller who just got a lowball bid. The human side of real estate - trust, instinct, local expertise - that\'s irreplaceable.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the best assistant you\'ve ever had - one who writes compelling listing descriptions from a few bullet points, drafts personalized follow-up emails for every showing, and turns neighborhood data into guides that make you look like the local expert you already are.',
            'Need to write a listing description that actually sells? 90 seconds. Need to send 15 personalized showing follow-ups before your next appointment? Done while you drive. Need a market analysis narrative that explains the numbers in plain English? Two minutes.',
            'AI handles the blank-page problem. You handle the relationships that close deals.',
          ],
        },
      ],
      keyInsight:
        'Your local expertise + AI\'s writing speed = an unfair advantage. You know the neighborhoods, the school districts, the hidden gems. AI removes the 3 hours of writing between your knowledge and the finished client-facing output.',
    },

    ch3: {
      intro: 'Five tools that cover everything a modern real estate agent needs from AI.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your listing and email writing engine',
          description:
            'MLS descriptions, buyer/seller emails, market narratives, showing follow-ups, open house prep - any writing task in your business',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your analysis and long-form writing partner',
          description:
            'Detailed market analysis, neighborhood guides, complex client communications, CMA narratives - excels at nuanced, professional writing',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long-form content',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your marketing design studio',
          description:
            'Property flyers, social media graphics, open house invitations, just-listed announcements, neighborhood highlight reels',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Professional visuals fast',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your market research assistant',
          description:
            'Neighborhood data, school ratings, market trends, demographic info, comparable sales research - all with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your client and listing tracker',
          description:
            'Client databases, listing checklists, transaction timelines, showing notes, lead nurture pipelines - your entire business organized',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude + Perplexity. That covers listing descriptions, client emails, and market research. Add Canva when you want polished marketing materials.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual real estate workflows. Click each system to see the before/after and step-by-step process.',
      systems: [
        {
          id: 1,
          name: 'Listing Description Writing',
          before:
            'You stare at the MLS description box, copy-paste from a previous listing, swap out the details, and hope it doesn\'t sound as generic as it is. Every description takes 20-30 minutes. For a portfolio of 5-8 active listings, that\'s half a day of writing. And they all end up sounding the same.',
          after:
            'You feed AI the property details - bedrooms, bathrooms, square footage, standout features, neighborhood highlights - and get a compelling, unique description in 90 seconds. Each one highlights what actually makes the property special. Write descriptions for your entire portfolio in the time it used to take for one.',
          flow: [
            'Enter the property details and key selling points',
            'AI generates 2-3 description variations with different angles',
            'Pick your favorite, tweak any details for accuracy',
            'AI adjusts tone for MLS, Zillow, social media, or print',
            'Copy into MLS and marketing materials',
          ],
          timeSaved: { without: '20-30 min/listing', withAI: '3-5 min/listing' },
        },
        {
          id: 2,
          name: 'Client Communication Automation',
          before:
            'After every showing, you need to send a follow-up email to the buyer, an update to the seller, and a note to the buyer\'s agent. Each one should be personalized, but you\'re juggling 15 clients and it\'s already 8 PM. Half the follow-ups get sent late or never.',
          after:
            'You give AI a few bullet points about the showing - what the buyer liked, their concerns, next steps - and it drafts personalized emails for everyone in 60 seconds. You review, hit send, and move on. Every client feels like your only client.',
          flow: [
            'Jot quick notes after the showing or client interaction',
            'AI drafts personalized emails for buyer, seller, and agents',
            'Review and add any personal touches',
            'Send immediately or schedule for optimal timing',
            'AI generates follow-up reminders for 3, 7, and 14 days',
          ],
          timeSaved: { without: '15-20 min/client', withAI: '3-4 min/client' },
        },
        {
          id: 3,
          name: 'Market Analysis Reports',
          before:
            'A seller asks you for a market update for their neighborhood. You pull comps from the MLS, try to spot trends in a spreadsheet, and spend 2 hours turning raw data into something that looks professional and actually tells a story. Half the time, you skip the narrative and just send the numbers.',
          after:
            'You paste the raw data into AI and get a polished market analysis with trends, insights, and plain-English explanations in 5 minutes. Your clients understand exactly what the numbers mean, and you look like the expert you are.',
          flow: [
            'Pull comparable sales and market data from MLS',
            'Paste raw data into AI with the neighborhood and timeframe',
            'AI generates a narrative report with trends and insights',
            'Add your local expertise and personal commentary',
            'Export as a branded PDF or email to your client',
          ],
          timeSaved: { without: '2-3 hours/report', withAI: '15-20 minutes' },
        },
        {
          id: 4,
          name: 'Neighborhood and Area Guides',
          before:
            'A relocating buyer asks about the best neighborhoods for families with young kids. You know the answer from experience, but turning it into a polished guide means hours of writing and formatting. Most agents never create this content, even though it\'s the exact type of resource that builds trust and generates referrals.',
          after:
            'You give AI the neighborhood name and key attributes - schools, restaurants, commute times, vibe - and it builds a comprehensive guide in minutes. Create guides for every neighborhood in your market. Become the go-to local expert online and in person.',
          flow: [
            'Choose the neighborhood and target buyer profile',
            'AI pulls together a structured guide - schools, dining, parks, commute, lifestyle',
            'Add your personal recommendations and insider tips',
            'AI formats for web, email, or print distribution',
            'Publish to your website and share with relocation clients',
          ],
          timeSaved: { without: '3-4 hours/guide', withAI: '20-30 minutes' },
        },
        {
          id: 5,
          name: 'Open House and Showing Follow-ups',
          before:
            'After an open house with 20 visitors, you have a stack of sign-in sheets and a vague memory of who said what. Following up individually means spending Sunday evening writing the same email 20 different ways. Most agents send a generic blast or worse - nothing at all.',
          after:
            'You enter the visitor\'s name and any notes you jotted down, and AI drafts a personalized follow-up for each attendee. 20 personalized emails in 15 minutes instead of 2 hours. Every visitor gets a message that feels one-on-one.',
          flow: [
            'During the open house, jot brief notes for each visitor',
            'After the event, enter names and notes into AI',
            'AI generates personalized follow-up emails for each visitor',
            'Review and send - warm leads get phone call reminders',
            'AI creates a 7-day follow-up sequence for interested prospects',
          ],
          timeSaved: { without: '2-3 hours/event', withAI: '15-20 minutes' },
        },
        {
          id: 6,
          name: 'Lead Nurture Sequences',
          before:
            'You have 200 leads in your database from the past year. Some signed up on your website, some came from open houses, some are past clients. You know you should be staying in touch, but manually writing monthly emails to different segments feels impossible. So you send the same generic newsletter to everyone - or you send nothing.',
          after:
            'AI creates targeted email sequences for every lead segment - new buyers, past clients, investors, sellers thinking about listing. Each sequence feels personal and provides real value. Your database stays warm without you writing hundreds of emails.',
          flow: [
            'Define your lead segments and their goals',
            'AI generates a 6-12 email nurture sequence per segment',
            'Review and personalize with local market insights',
            'Load into your email platform or CRM',
            'AI creates seasonal and market-triggered messages to keep it fresh',
          ],
          timeSaved: { without: 'Rarely done', withAI: '1-2 hours setup' },
        },
      ],
    },

    ch5: {
      intro:
        'No prompt engineering degree required. Just copy, paste, fill in your details, and hit enter. Click each prompt to reveal it.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Listing Descriptions',
          prompts: [
            {
              id: 're-p-1-1',
              title: 'MLS Listing Description',
              task: 'Write a compelling MLS listing description',
              prompt: `Write a compelling MLS listing description for this property:

Property type: [single-family home / condo / townhouse / etc.]
Address/neighborhood: [neighborhood or area name]
Bedrooms: [X] | Bathrooms: [X] | Sq ft: [X]
Year built: [year]
Lot size: [if applicable]

Key features:
- [feature 1 - e.g., renovated kitchen with quartz countertops]
- [feature 2 - e.g., primary suite with walk-in closet]
- [feature 3 - e.g., large backyard with mature trees]
- [feature 4 - e.g., new HVAC system installed 2024]

Neighborhood highlights: [nearby schools, parks, restaurants, commute info]
Target buyer: [young family / empty nester / investor / first-time buyer]

Requirements:
- Under 250 words
- Lead with the strongest selling point, not the address
- Paint a picture of living there, not just listing specs
- Avoid cliches like "move-in ready" and "won't last long"
- End with a clear call to action

Write 2 versions - one warm and lifestyle-focused, one clean and feature-focused.`,
              result:
                'Two unique listing descriptions ready for MLS, Zillow, and marketing materials.',
              tip: 'Add "Write a 50-word version for social media" to get an Instagram/Facebook caption from the same details.',
            },
            {
              id: 're-p-1-2',
              title: 'Luxury Listing Narrative',
              task: 'Write an elevated description for a premium property',
              prompt: `Write a luxury listing narrative for this high-end property:

Property: [property type] in [neighborhood/community]
List price: [price range]
Bedrooms: [X] | Bathrooms: [X] | Sq ft: [X]

Luxury features:
- [feature 1 - e.g., chef's kitchen with Sub-Zero and Wolf appliances]
- [feature 2 - e.g., infinity pool with panoramic views]
- [feature 3 - e.g., home theater with acoustic treatment]
- [feature 4 - e.g., wine cellar with 500-bottle capacity]

Location appeal: [proximity to golf, waterfront, downtown, etc.]
Lifestyle angle: [entertaining, privacy, resort-style living, etc.]

Requirements:
- 200-300 words
- Sophisticated and aspirational tone without being stuffy
- Emphasize lifestyle over specs
- Evoke emotion - make the reader picture themselves living there
- No exclamation marks or salesy language`,
              result:
                'A polished narrative suitable for luxury property marketing, print brochures, and high-end listing platforms.',
              tip: 'Use Claude for luxury descriptions - it tends to produce more nuanced, elegant writing for premium properties.',
            },
            {
              id: 're-p-1-3',
              title: 'Listing Description Refresh',
              task: 'Rewrite a stale listing description to attract more interest',
              prompt: `This listing has been on the market for [X weeks/months] and needs a fresh description. Rewrite it to generate renewed interest.

Current description:
[Paste current MLS description]

Property details:
- Price: [current price, mention if recently reduced]
- What buyers who\'ve toured have liked: [feedback from showings]
- What objections buyers have raised: [common concerns]

Rewrite this description to:
1. Lead with a completely different angle than the original
2. Address the top buyer objection subtly (reframe it as a feature)
3. Highlight what showing visitors actually liked
4. Create urgency without being pushy
5. Stay under 200 words

Also give me:
- 3 new headline options for Zillow/Realtor.com
- A 2-sentence "agent remarks" version for the MLS`,
              result:
                'A refreshed listing description plus headline options to breathe new life into a stale listing.',
              tip: 'Run this every 3-4 weeks for listings that aren\'t getting traction. Fresh copy signals attention and care.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Client Communication',
          prompts: [
            {
              id: 're-p-2-1',
              title: 'Buyer Follow-up Email',
              task: 'Write a personalized follow-up after a showing',
              prompt: `Write a follow-up email to a buyer after a property showing.

Buyer info:
- Name: [buyer name]
- Looking for: [what they want - beds, baths, area, budget]
- This was showing #[X] with them

Property they just saw: [address or description]
What they seemed to like: [2-3 things you noticed]
Concerns they mentioned: [any hesitations]
Next steps: [another showing / thinking it over / making an offer]

Write the email to:
- Reference specific details from the showing (not generic)
- Acknowledge their concerns without being dismissive
- Suggest a clear next step
- Keep it under 150 words
- Warm and professional tone - like a trusted advisor, not a salesperson

Also write a shorter text message version (under 50 words) for quick follow-up.`,
              result:
                'A personalized follow-up email and text message that keeps the buyer engaged and moving forward.',
              tip: 'Send the email within 2 hours of the showing. Speed matters more than perfection.',
            },
            {
              id: 're-p-2-2',
              title: 'Seller Weekly Update',
              task: 'Write a weekly activity update for your listing client',
              prompt: `Write a weekly seller update email for my listing client.

Seller name: [name]
Property: [address]
Days on market: [X]
List price: [price]

This week's activity:
- Showings: [X] total
- Online views: [X] (Zillow/Realtor.com/MLS combined)
- Open house attendance: [X visitors, if applicable]
- Feedback highlights: [summarize buyer/agent feedback]
- Marketing actions taken: [new photos, social media posts, price adjustment, etc.]

Market context: [any relevant market shifts - new competing listings, interest rate changes, seasonal trends]

Recommendation for next week: [continue as is / adjust price / new marketing strategy / stage differently]

Requirements:
- Professional but empathetic tone
- Lead with the most positive data point
- Be honest about challenges without creating panic
- End with a specific plan for next week
- Under 200 words`,
              result:
                'A clear, professional seller update that keeps your client informed and confident in your strategy.',
              tip: 'Send these every Friday afternoon. Consistent communication prevents the "why haven\'t I heard from my agent?" calls.',
            },
            {
              id: 're-p-2-3',
              title: 'CMA Presentation Narrative',
              task: 'Turn raw comp data into a client-friendly CMA narrative',
              prompt: `Turn this comparable market analysis data into a clear narrative for my client.

Subject property: [address]
Client type: [seller wanting to price their home / buyer evaluating an offer]

Comparable sales:
1. [address] - Sold [price], [date], [beds/baths/sqft], [days on market]
2. [address] - Sold [price], [date], [beds/baths/sqft], [days on market]
3. [address] - Sold [price], [date], [beds/baths/sqft], [days on market]

Active competition:
1. [address] - Listed [price], [beds/baths/sqft], [days on market]
2. [address] - Listed [price], [beds/baths/sqft], [days on market]

Key differences from subject: [upgrades, lot size, location, condition]
Current market conditions: [seller's market / balanced / buyer's market, avg DOM, absorption rate]

Write a narrative that:
1. Explains what the comps tell us in plain English
2. Justifies a recommended price range of [range]
3. Addresses why certain comps are more relevant than others
4. Includes a section on market conditions and timing
5. Uses language a homeowner (not an agent) would understand

Keep it under 400 words. Professional but conversational.`,
              result:
                'A polished CMA narrative that explains pricing strategy in language your clients can understand and trust.',
              tip: 'Pair this with your visual CMA slides. The narrative goes in the email, the data goes in the presentation.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Market Analysis',
          prompts: [
            {
              id: 're-p-3-1',
              title: 'Monthly Market Report',
              task: 'Create a neighborhood market report for clients and social media',
              prompt: `Create a monthly market report for [neighborhood/city/zip code].

Data (paste from MLS or provide):
- Median sale price: [current] vs [last month] vs [same month last year]
- Average days on market: [current] vs [previous period]
- Active listings: [number]
- Closed sales this month: [number]
- List-to-sale price ratio: [percentage]
- New listings: [number]
- Price per square foot: [amount]

Write a market report that includes:
1. Executive summary (3 sentences - what\'s the headline?)
2. Price trends - what\'s happening and why it matters
3. Inventory analysis - buyer\'s or seller\'s market?
4. Days on market - are homes selling faster or slower?
5. What this means for buyers (2-3 bullet points)
6. What this means for sellers (2-3 bullet points)
7. Forecast for next month (based on trends)

Keep language accessible - a homeowner should understand every word.
Under 500 words. No jargon unless you explain it.`,
              result:
                'A complete market report you can email to clients, post on social media, or use in listing presentations.',
              tip: 'Run this monthly and build a library. After 3 months, you have trend data that makes your listing presentations unbeatable.',
            },
            {
              id: 're-p-3-2',
              title: 'Neighborhood Comparison',
              task: 'Compare neighborhoods for a relocating buyer',
              prompt: `A buyer is relocating to [city/region] and considering these neighborhoods:
1. [Neighborhood A]
2. [Neighborhood B]
3. [Neighborhood C]

Buyer profile:
- Budget: [range]
- Household: [single / couple / family with kids ages X]
- Priorities: [commute time, school quality, walkability, nightlife, etc.]
- Work location: [where they commute to]

For each neighborhood, provide:
- Median home price and typical property types
- School ratings (if relevant)
- Commute time to [work location]
- Walkability and nearby amenities
- Vibe and lifestyle (describe the feel)
- Pros and cons for this specific buyer
- Best streets or sub-areas to focus on

End with a clear recommendation: "Based on your priorities, I\'d suggest..."

Note: Use publicly available data. I\'ll verify specifics with my local MLS.`,
              result:
                'A personalized neighborhood comparison guide that positions you as the relocation expert.',
              tip: 'Run this in Perplexity for data-backed answers with sources, then polish the narrative in ChatGPT or Claude.',
            },
            {
              id: 're-p-3-3',
              title: 'Investment Property Analysis',
              task: 'Analyze a property\'s investment potential',
              prompt: `Analyze this property as a potential rental investment:

Property: [type] in [location]
Purchase price: [amount]
Down payment: [amount or percentage]
Estimated mortgage payment: [monthly, including taxes and insurance]
Current market rent for comparable units: [monthly amount]
HOA or condo fees: [if applicable]
Estimated annual maintenance: [amount]
Property tax: [annual amount]

Calculate and explain:
1. Monthly cash flow (income minus all expenses)
2. Cap rate
3. Cash-on-cash return
4. Break-even occupancy rate
5. 5-year appreciation estimate (use [X]% annual appreciation)

Then provide:
- Is this a good investment? Be direct.
- Top 3 risks for this specific property
- What rent would I need to hit a [X]% cash-on-cash return?
- One thing most new investors would miss about this deal

Show your math simply. Assume I\'m smart but not a finance person.`,
              result:
                'A clear investment analysis you can share with investor clients or use in your own portfolio decisions.',
              tip: 'Always verify the rent estimates with actual local data. AI can calculate ratios, but garbage in means garbage out on the inputs.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Neighborhood Guides',
          prompts: [
            {
              id: 're-p-4-1',
              title: 'Comprehensive Neighborhood Profile',
              task: 'Create a detailed neighborhood guide for your website or client packet',
              prompt: `Create a comprehensive neighborhood guide for [neighborhood name] in [city].

Target audience: [homebuyers considering this area]

Include these sections:
1. Overview - The feel and personality of the neighborhood (3-4 sentences)
2. Housing stock - Typical home types, styles, price ranges, lot sizes
3. Schools - Elementary, middle, and high school options with general ratings
4. Dining and shopping - Best restaurants, coffee shops, grocery stores
5. Parks and recreation - Green spaces, trails, sports facilities, community centers
6. Commute - Major routes, public transit options, drive times to [key destinations]
7. Family-friendliness - Kid activities, daycares, family-oriented events
8. Hidden gems - 3 things only locals know about
9. What to watch out for - Honest notes (traffic patterns, flood zones, noise, etc.)
10. Who this neighborhood is perfect for (and who should look elsewhere)

Tone: Knowledgeable local expert sharing honest advice with a friend.
Length: 600-800 words.
Add a "Quick Stats" box at the top with median price, avg sqft, school rating, walk score.

Note: I\'ll verify all specific business names and data points for accuracy.`,
              result:
                'A polished neighborhood guide for your website, buyer packets, and relocation clients.',
              tip: 'Create these for your top 5-10 neighborhoods. They\'re SEO gold for your website and invaluable for relocation referrals.',
            },
            {
              id: 're-p-4-2',
              title: 'Relocation Buyer Welcome Packet',
              task: 'Build a welcome guide for out-of-town buyers',
              prompt: `Create a relocation welcome guide for someone moving to [city/region].

The buyer is:
- Moving from: [current city]
- Reason for move: [job / family / lifestyle / retirement]
- Household: [describe]
- Budget: [range]
- Priorities: [top 3 - e.g., good schools, short commute, outdoor access]

Create a guide that covers:
1. Welcome overview - Why people love living here (3-4 key selling points)
2. Cost of living comparison vs [their current city]
3. Top 5 recommended neighborhoods with 2-sentence descriptions
4. Weather and seasons - What to actually expect
5. Job market highlights (if relevant)
6. Healthcare - Major hospital systems and medical facilities
7. Transportation - How people get around, highway access, airport info
8. Culture and entertainment - What weekends look like here
9. Practical move checklist - DMV, utilities, voter registration, etc.
10. My recommendation - "Based on what you told me, start looking at..."

Keep it warm and genuinely helpful. Under 800 words.
This should feel like getting advice from a trusted friend who knows the area inside out.`,
              result:
                'A personalized relocation guide that builds trust before the buyer even arrives for their first tour.',
              tip: 'Send this before their house-hunting trip. It positions you as a local expert and builds massive goodwill.',
            },
            {
              id: 're-p-4-3',
              title: 'School District Overview',
              task: 'Create a school-focused area guide for families',
              prompt: `Create a school district overview for families considering [neighborhood/school district].

Include:
1. District overview - Reputation, size, and general philosophy
2. Elementary schools - Top options with brief descriptions and strengths
3. Middle schools - Options and what parents say about them
4. High schools - Academic programs, extracurriculars, college prep stats
5. Private and charter alternatives in the area
6. Before/after school care options
7. Extracurricular highlights - Sports, arts, STEM programs
8. What parents love about schools here
9. What parents wish was different
10. Neighborhoods that feed into the best-rated schools

Add a "Quick Reference" section with:
- School rating range (e.g., 7-9 out of 10)
- Average class size
- Student-to-teacher ratio
- Annual spending per student (if available)

Tone: Helpful parent-to-parent conversation.
Note: I\'ll verify ratings and specific data points with current sources.`,
              result:
                'A family-focused school guide that helps parents make confident neighborhood decisions.',
              tip: 'Families choose neighborhoods based on schools more than any other factor. This guide closes listings.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Showing Follow-ups',
          prompts: [
            {
              id: 're-p-5-1',
              title: 'Open House Follow-up Batch',
              task: 'Generate personalized follow-ups for all open house visitors',
              prompt: `I held an open house today. Write personalized follow-up emails for each visitor.

Property: [address] - [brief description, price]

Visitors:
1. [Name] - [notes: what they liked, concerns, buyer type, timeline]
2. [Name] - [notes]
3. [Name] - [notes]
4. [Name] - [notes]
5. [Name] - [notes]

For each visitor, write:
- A personalized email (under 100 words) that:
  - References something specific they said or reacted to
  - Addresses any concern they raised naturally
  - Suggests a specific next step based on their interest level
  - Feels personal, not templated
- A text message version (under 40 words)

Categorize each visitor as:
- Hot (wants to see it again or make an offer)
- Warm (interested but has concerns or is comparing)
- Cool (browsing, not ready soon)

Then give me a priority follow-up order.`,
              result:
                'Personalized follow-ups for every visitor, categorized by lead temperature with priority ordering.',
              tip: 'Do this within 3 hours of the open house. Same-day follow-up converts 3x better than next-day.',
            },
            {
              id: 're-p-5-2',
              title: 'Showing Feedback Request',
              task: 'Request feedback from buyer\'s agents after showings',
              prompt: `Write showing feedback request emails for agents who showed my listing this week.

Listing: [address] - [price, brief description]
Days on market: [X]

Agents who showed:
1. [Agent name] - showed [date], buyer was [any info you have]
2. [Agent name] - showed [date]
3. [Agent name] - showed [date]

Write a feedback request email that:
- Thanks them for showing the property
- Asks 4 specific questions:
  1. What was your buyer\'s overall impression?
  2. How did the price feel compared to expectations?
  3. Was there anything that was a concern or turnoff?
  4. Is your buyer considering a second look or an offer?
- Makes it easy to reply (numbered questions, keep it short)
- Professional but collegial tone
- Under 120 words

Also write a gentle follow-up version for agents who haven\'t responded after 3 days.`,
              result:
                'Professional feedback request emails that get agent responses and help you advise your seller.',
              tip: 'Tracking this feedback systematically gives you powerful data for pricing discussions with your seller.',
            },
            {
              id: 're-p-5-3',
              title: 'Post-Closing Nurture Sequence',
              task: 'Create a post-closing follow-up sequence for past clients',
              prompt: `Create a 12-month post-closing email sequence for a client who just bought/sold a home.

Client: [name]
Transaction: [bought/sold] [property type] in [neighborhood]
Closing date: [date]
Personal details: [family situation, hobbies, why they moved, etc.]

Create 6 emails spaced across 12 months:

Email 1 (1 week post-close): Congratulations and settling-in tips
Email 2 (1 month): Checking in - how is the new home/neighborhood?
Email 3 (3 months): Seasonal home maintenance tips for [season]
Email 4 (6 months): Local events and neighborhood news roundup
Email 5 (9 months): Home value update - what their property is worth now
Email 6 (12 months): Happy home anniversary - review and referral ask

Each email should:
- Reference personal details to feel genuine, not automated
- Provide actual value (tips, info, insights)
- Be under 150 words
- Include a soft referral ask in emails 4-6
- Sound like it came from a real person, not a drip campaign`,
              result:
                'A 12-month nurture sequence that generates referrals and repeat business from past clients.',
              tip: 'Past clients are your #1 source of referrals. This sequence keeps you top-of-mind without being annoying.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Lead Nurture Sequences',
          prompts: [
            {
              id: 're-p-6-1',
              title: 'New Lead Welcome Drip',
              task: 'Create a welcome email sequence for new leads',
              prompt: `Create a 5-email welcome drip campaign for new real estate leads.

Lead source: [website sign-up / open house / referral / social media]
Market: [city/area]
My specialty: [first-time buyers / luxury / investment / general]

Email 1 (Day 0): Welcome - who I am, how I work, what to expect
Email 2 (Day 2): Market overview - what's happening in [area] right now
Email 3 (Day 5): Buyer/seller tip - one genuinely useful piece of advice
Email 4 (Day 8): Success story - brief client story with real results (I\'ll fill in details)
Email 5 (Day 12): Soft CTA - "When you\'re ready, here\'s how to start"

Each email should:
- Be under 150 words
- Have a compelling subject line
- Include one clear call-to-action
- Sound personal, not corporate
- Build trust progressively - don\'t sell in email 1

Also include:
- Recommended subject lines for each (2 options each)
- Best send times for real estate emails`,
              result:
                'A complete lead nurture sequence that converts cold leads into consultation calls.',
              tip: 'Segment by lead source. Someone from an open house needs different messaging than a website lead.',
            },
            {
              id: 're-p-6-2',
              title: 'Expired Listing Outreach',
              task: 'Write an outreach sequence for expired or withdrawn listings',
              prompt: `Write a 3-email outreach sequence for homeowners whose listing just expired or was withdrawn.

Market: [city/area]
My approach: [what I do differently - better marketing, pricing strategy, etc.]

Email 1 (Day 1 after expiration):
- Acknowledge the frustration without trash-talking their previous agent
- Offer one specific insight about why homes in [area] sit on the market
- No hard sell - just value and empathy

Email 2 (Day 4):
- Share a brief case study: a similar home I sold after it expired elsewhere
- Include a specific data point or strategy that made the difference
- Offer a free market analysis

Email 3 (Day 8):
- Market update for their specific neighborhood
- Position the fresh start as an opportunity, not a failure
- Clear but low-pressure CTA

Each email: under 150 words, empathetic tone, no negative language about their previous experience.
Include subject lines for each (nothing clickbaity - these sellers are already frustrated).`,
              result:
                'A thoughtful expired listing outreach sequence that opens doors without being pushy.',
              tip: 'Timing matters. Day 1 after expiration gets 5x the response rate of day 7. Have these ready to go.',
            },
            {
              id: 're-p-6-3',
              title: 'Seasonal Campaign Email',
              task: 'Create a seasonal market campaign for your database',
              prompt: `Write a seasonal real estate campaign email for my database.

Season: [spring / summer / fall / winter]
Market: [city/area]
Current market conditions: [brief summary - hot, cooling, balanced, etc.]
Target audience: [entire database / homeowners / renters / past clients]

The email should include:
1. A seasonal hook that connects the time of year to real estate decisions
2. 3 key market stats for [area] right now (I\'ll fill in actual numbers)
3. Seasonal home tip - one actually useful piece of advice
4. A "thinking about selling?" section with 2-sentence value prop
5. A "thinking about buying?" section with 2-sentence value prop
6. Local event or seasonal highlight (community connection)
7. Soft CTA - "Hit reply if you have questions about your home\'s value"

Requirements:
- Under 250 words
- Casual, neighborhood-expert tone
- Something the reader would actually enjoy reading
- Works as both email and social media post
- Include 2 subject line options`,
              result:
                'A seasonal campaign email that keeps your database engaged and generates conversations.',
              tip: 'Send these quarterly at minimum. The agents who stay visible win the listing when homeowners are finally ready to sell.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s look at how much time AI actually saves in a real estate business.',
      timeTable: [
        {
          task: 'Listing descriptions',
          without: '3-4 hours/week',
          withAI: '30 minutes',
          saved: '3 hrs/week',
        },
        {
          task: 'Client follow-up emails',
          without: '5-6 hours/week',
          withAI: '1 hour',
          saved: '4.5 hrs/week',
        },
        {
          task: 'Market analysis reports',
          without: '2-3 hours/report',
          withAI: '20 minutes',
          saved: '2.3 hrs/report',
        },
        {
          task: 'Neighborhood guides',
          without: '3-4 hours/guide',
          withAI: '25 minutes',
          saved: '3.2 hrs/guide',
        },
        {
          task: 'Open house follow-ups',
          without: '2-3 hours/event',
          withAI: '15 minutes',
          saved: '2.3 hrs/event',
        },
        {
          task: 'Lead nurture campaigns',
          without: 'Rarely done',
          withAI: '1-2 hours setup',
          saved: 'Infinite - done',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '12-18 hrs/week',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'In 2026, the agents using AI write better descriptions, respond faster, follow up more consistently, and produce market analysis that makes clients say "wow." Same market knowledge, same hustle, same license - just dramatically less time spent on the writing and admin that slows everyone down.',
            'The gap isn\'t talent or experience. It\'s who adopted the tools.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t get your license to write emails and format market reports. You got it to help people make the biggest financial decision of their lives. AI gives you back the hours to actually do that - more showings, more conversations, more closed deals.',
          ],
        },
      ],
      keyInsight:
        'Start with one listing description. See how fast it writes itself. That moment is when everything clicks.',
    },

    ch7: {
      intro:
        'Seven days to transform your real estate workflow. Follow the plan, check off each step, and watch the time come back.',
      days: [
        {
          day: 1,
          title: 'Get Set Up',
          duration: '15 min',
          items: [
            { id: 're-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 're-1-2', label: 'Create a free Perplexity account for market research' },
            { id: 're-1-3', label: 'Bookmark this guide for easy reference' },
          ],
        },
        {
          day: 2,
          title: 'Write Your First Listing',
          duration: '10 min',
          items: [
            {
              id: 're-2-1',
              label: 'Run the MLS Listing Description prompt with a real property',
            },
            {
              id: 're-2-2',
              label: 'Compare it to your usual descriptions - notice the difference',
            },
            {
              id: 're-2-3',
              label: 'Edit it and upload to your MLS',
            },
          ],
        },
        {
          day: 3,
          title: 'Automate Follow-ups',
          duration: '20 min',
          items: [
            {
              id: 're-3-1',
              label: 'Run the Buyer Follow-up Email prompt after your next showing',
            },
            {
              id: 're-3-2',
              label: 'Draft a Seller Weekly Update for your current listing',
            },
          ],
        },
        {
          day: 4,
          title: 'Build a Market Report',
          duration: '20 min',
          items: [
            {
              id: 're-4-1',
              label: 'Pull your market data and run the Monthly Market Report prompt',
            },
            {
              id: 're-4-2',
              label: 'Send it to your top 5 clients or post it on social media',
            },
          ],
        },
        {
          day: 5,
          title: 'Create a Neighborhood Guide',
          duration: '25 min',
          items: [
            {
              id: 're-5-1',
              label: 'Run the Neighborhood Profile prompt for your primary area',
            },
            {
              id: 're-5-2',
              label: 'Add your personal recommendations and local insights',
            },
            {
              id: 're-5-3',
              label: 'Save it for your website or client packets',
            },
          ],
        },
        {
          day: 6,
          title: 'Build Your Lead Machine',
          duration: '25 min',
          items: [
            {
              id: 're-6-1',
              label: 'Run the New Lead Welcome Drip prompt for your top lead source',
            },
            {
              id: 're-6-2',
              label: 'Set up the sequence in your email platform or CRM',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 're-7-1',
              label: 'Review what you built this week - which system saved the most time?',
            },
            {
              id: 're-7-2',
              label: 'Pick 2 systems to use consistently going forward',
            },
            {
              id: 're-7-3',
              label: 'Share this guide with a fellow agent who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
