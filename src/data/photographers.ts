import type { WorkbookData } from './types'

export const photographersData = {
  professionId: 'photographers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Photographers',
  heroDescription:
    'Everything you need to start using AI in your photography business - with real tools, workflows, and prompts for proposals, shot planning, SEO, social media, and client communication.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is Sunday night and you are still culling photos from Saturday\'s wedding. There are 2,400 images on the memory card. You need to deliver a sneak peek gallery by Tuesday, the full edited gallery by next Friday, and the album design proof by the end of the month. Your editing queue has three other sessions stacked behind this one.',
        'Between editing sessions, you need to respond to 6 inquiry emails, send a proposal for a corporate headshot package, update your website portfolio with last month\'s work, write Instagram captions for this week, and figure out why your website does not show up when someone Googles "wedding photographer" in your city. Your booking calendar for next season is open and you have not had time to market.',
        'A potential client asks for your pricing and you realize your pricing guide has not been updated in 8 months. Another client wants to reschedule their family session and you spend 15 minutes finding the right email thread. Your second shooter invoiced you last week and you still have not processed it.',
        'You became a photographer because you see the world differently - you notice light, composition, and fleeting moments that other people walk past. Instead, you spend 60% of your working hours on emails, admin, social media, and business operations that have nothing to do with making images.',
      ],
      highlight:
        'What if the proposals, emails, captions, and business documents wrote themselves - and you spent that time behind the camera or in the edit?',
      closingParagraph:
        'Not replacing your creative vision or your eye for light. Just eliminating the business administration that keeps you from the work that clients actually hire you for.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to take better photos for you. It will not see the light shifting on a bride\'s face, anticipate the moment a toddler laughs, or know that moving two feet to the left transforms the composition. It does not understand your editing style, your artistic vision, or the relationship you build with clients that makes them relax in front of the camera. And it certainly will not replace the years of practice that let you nail focus in low light.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as your business manager, copywriter, and marketing assistant rolled into one - except it works instantly and never needs a lunch break. It has read every photography pricing guide, every SEO strategy, every client email template, and every Instagram caption formula.',
            'Need a proposal for a corporate headshot package? AI drafts it in 2 minutes. Need Instagram captions for 10 portfolio images? Done in 5 minutes. Need alt text for 50 portfolio images to improve your SEO? AI generates them while you import your next session.',
            'The pattern is clear: you handle the photography and the creative editing. AI handles the writing, marketing, and business documentation that grows your business while you focus on the craft.',
          ],
        },
        {
          heading: 'Why photographers have a unique advantage',
          paragraphs: [
            'You already understand visual storytelling - composition, sequence, mood, and narrative. That storytelling instinct makes you excellent at directing AI because you know what a good client proposal should feel like, what an engaging caption should accomplish, and what a portfolio needs to communicate.',
            'When non-photographers use AI for business tasks, they produce generic output. When photographers use AI, they add the specificity that comes from understanding their craft and their clients. The result is professional business communication that reflects the quality of your actual work.',
          ],
        },
      ],
      keyInsight:
        'Your creative eye + AI\'s business writing speed = a photography business that runs as professionally as it shoots. AI handles the admin. You handle the art.',
    },

    ch3: {
      intro: 'Five tools that cover everything a photographer needs from AI. Start with the first two and add others as your business grows.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your business writing partner',
          description:
            'Client proposals, email templates, pricing guides, Instagram captions, blog posts, and business planning',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for all text-based business tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form content writer',
          description:
            'Detailed proposals, blog posts for SEO, comprehensive guides, contract language, and client communication sequences',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed documents and SEO content',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your marketing design tool',
          description:
            'Social media templates, pricing guide layouts, client welcome packets, gift certificates, and marketing materials',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for visual marketing materials',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your research engine',
          description:
            'Location scouting, venue research, SEO keyword analysis, competitor research, and equipment comparisons',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for sourced research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your business operations hub',
          description:
            'Client management, session trackers, booking workflows, invoice logs, equipment inventories, and business dashboards',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when ready to systematize your business',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for all the writing your photography business requires. Add Canva AI for marketing materials and Perplexity for research. Notion AI is a powerful addition when you want to systematize your entire workflow.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual photography business. Each system eliminates hours of writing and admin work. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Client Proposal Writing',
          before:
            'A potential client emails asking about your wedding photography packages. You open your last proposal, realize half of it is outdated, and spend 2 hours customizing it - rewriting the packages, updating pricing, adjusting the timeline, and trying to sound professional but personable. You send it at 11pm and hope they have not already booked someone else.',
          after:
            'You enter the client details and event specifics. AI generates a complete, polished proposal with customized packages, a timeline, investment details, and a warm personal note. You review, adjust pricing, and send it in 30 minutes. Same quality, fraction of the time.',
          flow: [
            'Gather client details from the inquiry email',
            'Run the proposal prompt with your pricing and packages',
            'AI generates a complete proposal tailored to their event',
            'Review, adjust pricing and personal details',
            'Send same day while the lead is warm',
          ],
          timeSaved: { without: '2-3 hours', withAI: '20-30 minutes' },
        },
        {
          id: 2,
          name: 'Shot List and Planning',
          before:
            'The wedding is next Saturday. You need a shot list that covers the getting-ready shots, ceremony, formals, reception, and all the detail shots the planner mentioned. You pull up your generic list, customize it for this venue, add the special requests, and try to remember if this is the family that has a complicated divorce situation for the group photos.',
          after:
            'AI generates a comprehensive shot list customized to the event, venue, timeline, and family dynamics. It includes timing estimates, equipment notes, and creative shot suggestions you might not have thought of. You review and bring a printed checklist to the shoot.',
          flow: [
            'Enter the event details, timeline, venue, and special requests',
            'Run the shot list prompt with all client-specific information',
            'AI generates a detailed, sequenced shot list',
            'Add your creative ideas and personal shot priorities',
            'Print and bring to the shoot as a reference',
          ],
          timeSaved: { without: '1-2 hours', withAI: '15-20 minutes' },
        },
        {
          id: 3,
          name: 'Portfolio SEO Optimization',
          before:
            'Your website has beautiful images but no one finds it through Google. You know you need alt text, meta descriptions, blog posts, and location-specific keywords, but writing SEO content for a photography website feels like a foreign language. You have been meaning to "work on SEO" for two years.',
          after:
            'AI generates optimized alt text for every portfolio image, writes SEO-friendly blog post drafts, creates location-specific landing page copy, and provides a keyword strategy. You implement it over a few sessions and start seeing organic traffic within weeks.',
          flow: [
            'Describe your photography niche, location, and target clients',
            'Run the SEO prompt to generate alt text, meta descriptions, and keywords',
            'AI produces optimized content for your portfolio pages',
            'Implement the alt text and meta descriptions on your website',
            'Use the blog post outlines to create SEO content over time',
          ],
          timeSaved: { without: 'Never done properly', withAI: '2-3 hours for full site optimization' },
        },
        {
          id: 4,
          name: 'Social Media Captioning',
          before:
            'You have 10 gorgeous images ready to post but you have been staring at the caption field for 15 minutes. You want something that sounds like you, tells a story, and encourages engagement - not generic "link in bio" content. Writing captions takes so long that you often just post without one, or skip posting entirely.',
          after:
            'AI generates platform-specific captions for all 10 images in 5 minutes. Each caption tells a story, includes relevant hashtags, and ends with an engagement prompt. You pick your favorites, add a personal touch, and schedule the whole week in one sitting.',
          flow: [
            'Describe the images you want to post and any backstory',
            'Run the caption prompt with your brand voice details',
            'AI generates captions with hashtags and engagement prompts',
            'Edit for your personal voice and add client tags (with permission)',
            'Schedule across platforms',
          ],
          timeSaved: { without: '15-20 min per post or skipped entirely', withAI: '3-5 min per post' },
        },
        {
          id: 5,
          name: 'Client Communication Automation',
          before:
            'You have 4 clients at different stages - one just inquired, one is booked and needs a welcome packet, one is coming up on their session date, and one is waiting for their gallery. Each needs a different email with different information. Writing individual emails eats an hour of your morning before you even open Lightroom.',
          after:
            'AI generates email templates for every stage of your client journey - inquiry response, booking confirmation, session prep, gallery delivery, and follow-up. You customize each once, save them, and what used to take an hour takes 10 minutes.',
          flow: [
            'Map your client journey stages (inquiry to follow-up)',
            'Run the email template prompt for each stage',
            'AI generates professional emails for every touchpoint',
            'Customize with your voice and branding',
            'Save as templates in your email or CRM system',
          ],
          timeSaved: { without: '1-2 hours/week', withAI: '15-20 minutes/week' },
        },
        {
          id: 6,
          name: 'Business Operations',
          before:
            'You know you need a pricing guide, a contract review, a workflow document, and an equipment tracking system. But every time you sit down to work on the business side, a more urgent creative task pulls you back. The business infrastructure stays permanently "in progress."',
          after:
            'AI generates your pricing guide, reviews contract language, writes workflow documentation, and creates equipment tracking templates. The business documents that have been on your to-do list for months get done in an afternoon.',
          flow: [
            'Pick the business document you have been avoiding',
            'Run the relevant prompt with your business specifics',
            'AI generates a complete first draft',
            'Customize for your brand and market',
            'Implement and move to the next document',
          ],
          timeSaved: { without: 'Never happens', withAI: '30-60 min per document' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every core photography business task. Click to reveal, fill in the brackets, and get back to making images.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Client Proposals',
          prompts: [
            {
              id: 'pg-p-1-1',
              title: 'Wedding/Event Proposal Generator',
              task: 'Create a polished proposal for a wedding or event photography inquiry',
              prompt: `Create a complete photography proposal for a wedding or event.

Inquiry details:
- Client name(s): [names]
- Event type: [wedding, engagement, corporate event, etc.]
- Event date: [date]
- Venue: [name and location]
- Guest count: [approximate]
- How they found you: [referral, Instagram, Google, wedding platform]
- What they mentioned wanting: [any specific requests from their inquiry]
- Budget indicator: [if they mentioned a budget range]

My photography business:
- Business name: [name]
- Style: [describe your photography style in 2-3 words]
- Experience: [years shooting, number of weddings/events]
- Location: [where you are based]

My packages:
- Package 1: [name, hours, deliverables, price]
- Package 2: [name, hours, deliverables, price]
- Package 3: [name, hours, deliverables, price]
- Add-ons: [list any - second shooter, engagement session, album, prints, etc.]

Generate a proposal with:
1. Personal opening - reference something specific from their inquiry
2. About section - brief, warm introduction to you and your approach
3. Packages presented clearly with what is included in each
4. Recommended package - which one fits what they described and why
5. Investment summary - presented confidently, not apologetically
6. What happens next - clear steps to book
7. Timeline - what the process looks like from booking to final delivery
8. FAQ section - 5 questions they are probably thinking but did not ask
9. Warm closing - excitement about their event

Tone: Professional, warm, and confident. They should feel that hiring you would be a wonderful experience, not just a transaction. Under 800 words.`,
              result: 'A complete, personalized proposal ready to send to a potential client.',
              tip: 'Send proposals within 24 hours of inquiry. Speed is one of the biggest factors in booking - the first photographer to respond with a professional proposal often gets the job.',
            },
            {
              id: 'pg-p-1-2',
              title: 'Corporate/Commercial Proposal',
              task: 'Create a proposal for corporate or commercial photography',
              prompt: `Create a photography proposal for a corporate or commercial client.

Client details:
- Company name: [name]
- Contact person: [name and title]
- Project type: [headshots, product, event, brand, real estate, food, etc.]
- Scope: [number of subjects, products, locations, etc.]
- Usage: [how the photos will be used - website, social, print, advertising]
- Deadline: [when they need the final images]
- Location: [on-site, studio, on-location]

My rates and services:
- Session fee: [$X per hour or half-day/full-day rate]
- Includes: [what is included in the base rate]
- Editing: [what is included vs. extra]
- Licensing: [your standard usage license]
- Additional services: [retouching, rush delivery, etc.]

Generate a proposal with:
1. Professional introduction - position yourself as the solution to their need
2. Understanding of the project - show you listened to their requirements
3. Scope of work - detailed description of what you will deliver
4. Production plan:
   - Pre-shoot planning (mood boards, shot lists, logistics)
   - Shoot day(s) - schedule, equipment, assistants
   - Post-production - editing, retouching, delivery timeline
5. Deliverables - exactly what they receive (number of images, format, resolution)
6. Investment - clear pricing broken out by component
7. Usage license - what they can and cannot do with the images
8. Timeline - from booking to final delivery
9. Terms - payment schedule, cancellation, reshoot policy
10. About you - brief credibility section (clients, industries, experience)

Tone: Business-professional but approachable. Position photography as a business investment, not an expense.`,
              result: 'A corporate-ready proposal that positions your photography as professional and valuable.',
              tip: 'Corporate clients care about process and reliability as much as artistic quality. The production plan section shows them you are organized and will not waste their time on shoot day.',
            },
            {
              id: 'pg-p-1-3',
              title: 'Mini Session or Marketing Campaign Proposal',
              task: 'Create a proposal for a mini session event or marketing campaign',
              prompt: `Create a proposal for a photography mini session event.

Event details:
- Session type: [holiday minis, spring portraits, back-to-school, pet portraits, brand headshots, etc.]
- Date(s): [when]
- Location: [where]
- Session length: [minutes per client]
- Number of sessions: [how many slots]
- Price per session: [$X]

Deliverables per session:
- Number of edited images: [X]
- Gallery delivery method: [online gallery, download, USB]
- Delivery timeline: [days/weeks after the session]
- Print products available: [if any add-ons]

Marketing goal: [fill the calendar, attract new clients, generate album sales, etc.]

Generate:
1. Client-facing mini session page/flyer copy:
   - Compelling headline
   - What is included
   - Price and booking information
   - FAQ (5 common questions)
   - Urgency element (limited spots)

2. Email announcement to existing clients:
   - Subject line (3 options)
   - Body copy with early access or loyalty discount

3. Social media announcement:
   - Instagram caption with booking CTA
   - Instagram Stories text sequence (5 slides)
   - Facebook event description

4. Booking confirmation email:
   - What to expect
   - How to prepare (clothing, timing, parking)
   - What to bring
   - Cancellation/reschedule policy

5. Session prep guide for clients:
   - Clothing recommendations
   - Arrival instructions
   - What the session will look like
   - Managing kids/pets tips (if applicable)

All copy should match the tone: [fun and casual / warm and professional / luxury and elevated].`,
              result: 'A complete mini session marketing and communication package - from announcement to booking confirmation.',
              tip: 'Mini sessions sell out fastest when you create genuine scarcity. Offer 8-12 slots and promote early access to your email list first. FOMO is real.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Shot Planning',
          prompts: [
            {
              id: 'pg-p-2-1',
              title: 'Location Scout Notes Generator',
              task: 'Create location scout notes for a photo shoot',
              prompt: `Create detailed location scout notes for a photo shoot.

Shoot type: [wedding, portrait, commercial, real estate, etc.]
Location: [venue name, address, or description]
Time of day for the shoot: [morning, afternoon, golden hour, evening]
Season: [time of year]
Number of subjects: [how many people or products]
Key shots needed: [list the most important images to capture]

Research and generate:

1. Location overview:
   - Description of the space and its photographic potential
   - Access and parking information
   - Contact information: [TBD]
   - Permit requirements: [TBD if unknown]

2. Lighting analysis:
   - Sun position and direction at the shoot time
   - Natural light quality (direct, diffused, shade)
   - Best spots for natural light portraits
   - Areas to avoid (harsh shadows, backlit without fill)
   - Artificial lighting needs (what to bring)

3. Background options (list 5-8):
   - Description of each background
   - Best for: [individual, group, detail, wide]
   - Lens recommendation for each
   - Time-of-day sweet spot for each

4. Shot sequence plan:
   - Recommended shooting order based on light movement
   - Time allocation per location/setup
   - Walking distances between spots

5. Logistics:
   - Best area for client to get ready or wait
   - Gear staging area
   - Weather backup options
   - Nearest restroom
   - Cell service quality

6. Creative opportunities:
   - Unique architectural or natural features
   - Reflective surfaces, leading lines, framing elements
   - Seasonal elements to incorporate

7. Potential problems:
   - Crowds or public access issues
   - Construction or temporary obstructions
   - Noise for video (if applicable)
   - Restrictive rules about photography

Include a packing checklist based on this specific location.`,
              result: 'Comprehensive location scout notes that prepare you for every scenario on shoot day.',
              tip: 'Visit the location at the same time of day as the scheduled shoot. Light at 2pm and light at 5pm are completely different. If you cannot visit, use sun position apps to plan.',
            },
            {
              id: 'pg-p-2-2',
              title: 'Wedding/Event Shot List',
              task: 'Create a detailed shot list for a wedding or event',
              prompt: `Create a detailed photography shot list for a wedding or event.

Event details:
- Event type: [wedding, engagement party, bar mitzvah, corporate gala, etc.]
- Venue: [name and brief description]
- Timeline:
  [List the day's schedule - e.g.:]
  - [2:00pm - Getting ready]
  - [3:30pm - First look]
  - [4:00pm - Ceremony]
  - [4:45pm - Family formals]
  - [5:30pm - Cocktail hour]
  - [6:30pm - Reception]

- Special requests from client: [list anything specific they asked for]
- VIP list: [key family members, honored guests, etc.]
- Family dynamics: [any divorced parents, step-families, or sensitivities to note]
- Vendors to photograph: [florist, cake, DJ, etc. - for vendor referrals]
- Second shooter: [yes/no]
- Detail items: [rings, shoes, invitation, bouquet, venue decor, etc.]

Generate a shot list organized by timeline phase:

For each phase:
1. Must-have shots (non-negotiable - these define the event)
2. Standard shots (expected and professional)
3. Creative shots (elevate the gallery - unique angles, moments, details)
4. Candid moments to watch for (emotional moments that happen naturally)

For each shot:
- Description
- Subject(s)
- Estimated time needed
- Lighting note (natural, flash, video light)
- Lens suggestion (wide, normal, telephoto)
- Priority (must-have / nice-to-have)

Then provide:
- Family formal grouping list (organized for efficiency - largest group first)
- Equipment checklist for this specific event
- Timeline risk notes (where you might fall behind schedule and how to recover)
- Backup plans for weather-sensitive shots

Format as a printable checklist with checkbox squares.`,
              result: 'A comprehensive, timeline-based shot list that ensures you capture every important moment.',
              tip: 'Print this and give a copy to your second shooter. Review it with the wedding planner or coordinator the week before. The family formal grouping list alone will save you 20 minutes of awkward shuffling.',
            },
            {
              id: 'pg-p-2-3',
              title: 'Portrait Session Prep Guide',
              task: 'Create a session preparation guide for portrait clients',
              prompt: `Create a client preparation guide for a portrait photography session.

Session type: [family, newborn, senior, maternity, couples, headshots, branding, etc.]
Location: [studio, outdoor, client's home, office, etc.]
Season/time of year: [affects clothing and lighting advice]
Duration: [session length]
Number of subjects: [how many people, ages]
Client experience level: [first time being photographed professionally, experienced, nervous]

Generate a preparation guide covering:

1. What to wear:
   - Color palette recommendations (what looks best on camera)
   - Patterns and textures (what to choose and avoid)
   - Outfit coordination for groups (how to match without matching)
   - Specific items to avoid (logos, neon colors, busy patterns)
   - Accessory suggestions
   - Shoe recommendations
   - Number of outfits to bring: [X]
   - Example outfit combinations for this session type

2. How to prepare:
   - Timeline: what to do 1 week before, day before, day of
   - Hair and makeup tips (professional recommended or DIY guidance)
   - Skin preparation (moisturize, avoid new products, etc.)
   - Rest and hydration
   - For kids: nap schedule, snack strategy, toy to bring

3. What to expect during the session:
   - Step-by-step walkthrough of the session flow
   - How posing works (you will be guided, no modeling experience needed)
   - How to look natural (tips for camera-shy clients)
   - How long each portion takes
   - What happens if kids are uncooperative or weather changes

4. What to bring:
   - Checklist of items specific to this session type
   - Props (if applicable)
   - Personal items with sentimental value

5. Logistics:
   - Where to meet
   - Where to park
   - What time to arrive (earlier than session start for setup)
   - Contact information for day-of questions

6. After the session:
   - When to expect the gallery
   - How the selection process works
   - Print and product options

Tone: Warm, reassuring, and professional. Clients should feel prepared and excited, not overwhelmed.`,
              result: 'A comprehensive client prep guide that leads to better photos and happier clients.',
              tip: 'Send this 7-10 days before the session. Well-prepared clients are more relaxed, look better in photos, and need fewer retakes. This guide does the prep work for you.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Portfolio SEO',
          prompts: [
            {
              id: 'pg-p-3-1',
              title: 'Portfolio Alt Text and Metadata Generator',
              task: 'Generate SEO-optimized alt text and metadata for portfolio images',
              prompt: `Generate SEO-optimized alt text and metadata for my photography portfolio images.

My photography niche: [wedding, portrait, commercial, real estate, food, etc.]
My location: [city, state]
Target clients: [who I want to attract]
My website platform: [Squarespace, WordPress, Showit, SmugMug, etc.]

Images to optimize:
[Describe each image briefly:]
1. [e.g., "Bride and groom first dance at The Estate venue, warm indoor lighting"]
2. [e.g., "Family of four on the beach at sunset, casual poses"]
3. [e.g., "Corporate headshot of woman in navy blazer, gray background"]
4. [e.g., "Close-up of wedding rings on invitation suite"]
5. [Continue for as many images as needed...]

For each image, generate:
1. Alt text (125 characters max):
   - Descriptive, includes relevant keywords naturally
   - Accessible for screen readers
   - Includes location when relevant

2. Image file name:
   - SEO-friendly format (lowercase, hyphens between words)
   - Includes photography type and location

3. Image title tag:
   - Keyword-rich but readable

4. Caption (for blog or gallery context):
   - 1-2 sentences that add context and include keywords

5. Pinterest description (if applicable):
   - Keyword-rich, 150-300 characters, includes location

Then provide:
- A keyword list specific to your niche and location
- File naming convention to use going forward
- Website page title and meta description templates for gallery pages
- 5 blog post ideas that could link to these portfolio images for additional SEO value`,
              result: 'SEO-optimized metadata for every portfolio image plus an ongoing optimization strategy.',
              tip: 'Rename and add alt text to every image on your website. It takes one afternoon and has more SEO impact than almost anything else a photographer can do. Google cannot see your photos - it can only read the text around them.',
            },
            {
              id: 'pg-p-3-2',
              title: 'Location-Specific SEO Page',
              task: 'Write an SEO-optimized landing page for a specific photography market',
              prompt: `Write an SEO-optimized landing page for my photography services in a specific location.

Photography type: [wedding, portrait, headshot, real estate, etc.]
Location: [specific city or area]
Secondary locations: [surrounding towns or neighborhoods you serve]
Target client: [describe your ideal client]
Unique selling proposition: [what makes you different from other photographers in this area]
Popular venues or locations in the area: [list 3-5 if applicable]

Write a landing page that includes:

1. H1 headline:
   - Include "[photography type] photographer in [city]"
   - Make it compelling, not just keyword-stuffed

2. Opening section (150 words):
   - Speak to the target client directly
   - Include 2-3 location-specific references naturally
   - Emotional connection - why this location matters for photography

3. About your approach (150 words):
   - Your style and what clients can expect
   - Include photography-specific and location-specific keywords naturally
   - Mention experience with local venues or settings

4. What is included section:
   - Your services relevant to this market
   - Formatted as a scannable list

5. Venue or location highlights (100 words):
   - Mention popular local venues or photography spots
   - Brief note on what makes each special for photos
   - Internal linking opportunities

6. Testimonials section:
   - Template for inserting 2-3 client quotes
   - Include [city] or [venue] in the testimonial context

7. FAQ section (5 questions):
   - Common questions specific to this location and photography type
   - Include long-tail keywords naturally in answers

8. CTA section:
   - Clear next step to inquire or book
   - Include phone number and email template

Also provide:
- Meta title (under 60 characters)
- Meta description (under 155 characters)
- 10 target keywords for this page
- Internal linking suggestions to other pages on your site`,
              result: 'A complete SEO-optimized landing page that helps you rank for photography searches in your target market.',
              tip: 'Create one of these pages for every city and photography type combination you want to rank for. A "Boston wedding photographer" page and a "Boston headshot photographer" page target completely different search intents.',
            },
            {
              id: 'pg-p-3-3',
              title: 'Blog Post for SEO',
              task: 'Write an SEO-focused blog post about a real session or project',
              prompt: `Write an SEO-optimized blog post about a recent photography session.

Session details:
- Session type: [wedding, portrait, corporate, etc.]
- Location/venue: [name and city]
- What made this session special: [2-3 unique elements]
- Client name (or pseudonym): [first name, with permission]
- Season and time of day: [when it happened]
- Number of images to include: [how many you will embed in the post]

SEO targets:
- Primary keyword: [e.g., "Beacon Hill engagement photos" or "Boston corporate headshot photographer"]
- Secondary keywords: [2-3 related terms]
- Location to target: [city/area]

Write a blog post with:
1. SEO-friendly title (include primary keyword, under 60 characters)
2. Opening paragraph - hook the reader and include the primary keyword naturally
3. Session story (400-600 words):
   - How the session came together
   - The location and why it was chosen
   - Key moments and what made them special
   - Your approach and any challenges overcome
   - Client's reaction or feedback quote
4. Image placement notes - where in the text to insert each photo with alt text
5. Vendor credits (if applicable - great for backlinks)
6. Related session links - suggest links to similar sessions on your blog
7. CTA - invitation to book a similar session

Rules:
- Include primary keyword 3-5 times naturally
- Include secondary keywords 1-2 times each
- Use H2 and H3 subheadings with keywords
- Keep paragraphs short (2-3 sentences)
- Write for real people first, search engines second
- Include location names specifically and naturally

Also provide:
- Meta title and description
- Image alt text for each photo placement
- Social media caption to promote the blog post
- Pinterest pin description for the feature image`,
              result: 'A complete SEO-optimized blog post with metadata, alt text, and social promotion copy.',
              tip: 'Blog every session you are proud of. Each post is a new page Google can index for your target keywords. Over time, your blog becomes the most powerful SEO asset in your business.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Social Media',
          prompts: [
            {
              id: 'pg-p-4-1',
              title: 'Instagram Caption Generator',
              task: 'Write Instagram captions for photography portfolio posts',
              prompt: `Write Instagram captions for the following photography images.

My photography brand:
- Niche: [wedding, portrait, commercial, etc.]
- Brand voice: [describe your Instagram tone - warm, witty, editorial, storytelling, etc.]
- Location: [where you are based]
- Target follower: [who you want to attract]

Images to caption:
[Describe each image:]
1. [e.g., "Couple laughing during golden hour at the vineyard, candid moment"]
2. [e.g., "Detail shot of wedding rings on an antique book"]
3. [e.g., "Family running on the beach, kids in front, parents behind"]
4. [e.g., "Moody portrait in a downtown alley with neon reflections"]
5. [Continue for as many images as needed...]

For each image, write:
1. Caption option A - Storytelling (tell a brief story about the moment)
2. Caption option B - Educational (share a photography tip related to the image)
3. Caption option C - Personal connection (relate the image to a broader life observation)

Each caption should include:
- A scroll-stopping opening line
- Body text (50-150 words depending on the approach)
- Engagement prompt (question or CTA at the end)
- 20-25 hashtags organized by category:
  - Photography style (5)
  - Location-specific (5)
  - Subject-specific (5)
  - Community/industry (5)
  - Niche hashtags under 100K posts (5)

Also provide:
- Best posting times for photography content
- Suggested carousel vs. single post vs. Reel for each image
- One Reel concept that could feature these images with trending audio`,
              result: 'Multiple caption options for every image with hashtag strategy and content format recommendations.',
              tip: 'Alternate between storytelling, educational, and personal posts. Followers connect with the photographer behind the camera as much as the photos. Your personality is part of your brand.',
            },
            {
              id: 'pg-p-4-2',
              title: 'Social Media Content Calendar',
              task: 'Plan a month of social media content for a photography business',
              prompt: `Create a monthly social media content calendar for my photography business.

My niche: [wedding, portrait, commercial, etc.]
My platforms: [Instagram, Facebook, Pinterest, TikTok, LinkedIn - list which you use]
Booking season: [when is your busy season]
Current marketing goal: [book more weddings, attract corporate clients, grow following, etc.]
Content available: [how many recent sessions you can share, any behind-the-scenes content]

Generate a 4-week content calendar:

For each week, plan 4-5 posts:

Content mix:
- 40% portfolio (your best recent work)
- 20% behind-the-scenes (process, gear, editing, shoot day)
- 15% educational (tips for clients - what to wear, how to prepare, etc.)
- 15% personal/relatable (your story, day in the life, industry thoughts)
- 10% promotional (booking CTA, seasonal offers, testimonials)

For each post:
1. Day and platform
2. Content type (carousel, single image, Reel, Story)
3. Topic
4. Caption direction (2-3 sentence summary)
5. Hashtag category to use
6. CTA for this post

Also provide:
- 4 Instagram Story ideas per week (polls, Q&A, behind-the-scenes, client prep tips)
- 2 Reel concepts per week with trending format suggestions
- 1 Pinterest batch pin session guide (how many pins to create and from what content)
- Key dates or holidays relevant to photography marketing this month
- Which posts should be boosted with paid promotion and why

Include notes on repurposing - how one shoot can create multiple posts across different content types.`,
              result: 'A complete monthly content calendar with post ideas, captions, and platform-specific strategy.',
              tip: 'Batch your content creation. Spend one morning per month planning and writing captions for the whole month. The calendar prevents the "what should I post today" paralysis.',
            },
            {
              id: 'pg-p-4-3',
              title: 'Client Testimonial Social Post',
              task: 'Turn a client review into social media content',
              prompt: `Turn the following client testimonial into social media content.

Client review:
[Paste the full review/testimonial]

Client name: [first name and last initial, or full name if they gave permission]
Session type: [what you photographed for them]
Key images from their session: [describe 1-3 photos you can pair with this post]

Generate:

1. Instagram carousel post (5-7 slides):
   - Slide 1: Pull the most powerful quote (text overlay on image)
   - Slides 2-5: Individual sentences or phrases from the review (text overlay)
   - Final slide: Your CTA (booking link, DM to inquire)
   - Caption: Context about the session, gratitude, engagement question
   - Hashtags: testimonial and niche-specific

2. Instagram Story sequence:
   - 4-5 Story slides with the review broken into impactful segments
   - Interactive elements (poll, question sticker, link)

3. Facebook post:
   - Full review with your commentary
   - Tag the client (if appropriate)
   - CTA for inquiries

4. Google Business review response:
   - Professional thank you that also includes keywords for your SEO

5. Website testimonial format:
   - Pull quote (one powerful sentence)
   - Full testimonial
   - Client attribution

6. Portfolio presentation:
   - How to introduce this testimonial when presenting to new clients

Tone: Grateful, professional, and authentic. Let the client's words do the heavy lifting.`,
              result: 'A complete content package built around a single client testimonial.',
              tip: 'One great testimonial can produce a week of content. Ask every client for a review - make it easy by sending a direct link. The best time to ask is right after they receive their gallery and are most excited.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Client Communication',
          prompts: [
            {
              id: 'pg-p-5-1',
              title: 'Booking Confirmation Email Sequence',
              task: 'Create a series of automated client emails from booking to delivery',
              prompt: `Create a client email sequence for my photography business - from booking confirmation to gallery delivery.

My business name: [name]
My photography type: [wedding, portrait, commercial, etc.]
My brand voice: [warm, professional, fun, editorial, etc.]
Gallery delivery platform: [Pixieset, ShootProof, Pic-Time, etc.]

Write emails for each stage:

1. Booking confirmation:
   - Thank them for booking
   - Confirm date, time, location
   - Outline next steps
   - Attach/link to contract and invoice information
   - Express genuine excitement

2. 30 days before session (prep reminder):
   - What to prepare (clothing, props, logistics)
   - Link to your session prep guide
   - Encourage questions
   - Build anticipation

3. 1 week before session:
   - Final details and logistics
   - Meeting point and time
   - What to bring
   - Weather plan (if outdoor)
   - Day-of contact information

4. Day after session:
   - Thank them for a wonderful session
   - Share a teaser (1-2 sneak peek images)
   - Set expectations for gallery timeline
   - Express what made their session special

5. Gallery delivery:
   - Exciting reveal of the full gallery
   - How to view, download, and share
   - Ordering instructions for prints or products
   - Gallery expiration date (if applicable)
   - Social media sharing guidelines and tagging request

6. 2 weeks after delivery (follow-up):
   - Check in on their experience
   - Ask for a review (with direct link)
   - Mention print products or albums if not yet ordered
   - Referral mention

7. 6 months after session (nurture):
   - Warm check-in
   - Seasonal mini session or special offer
   - Invitation to follow on social media
   - Referral incentive reminder

For each email: subject line, preview text, and body copy. Keep each under 200 words. Warm, genuine, and professional throughout.`,
              result: 'A complete client email sequence that automates communication and creates an exceptional client experience.',
              tip: 'Set these up in your CRM or email platform once and they run automatically for every client. This sequence alone can transform your client experience and generate more referrals.',
            },
            {
              id: 'pg-p-5-2',
              title: 'Inquiry Response Templates',
              task: 'Create templates for responding to different types of photography inquiries',
              prompt: `Create inquiry response email templates for common photography client scenarios.

My business: [name and niche]
My booking link or next step: [what you want inquiries to do - book a call, fill out a form, view pricing]
My response time goal: [within X hours]

Write response templates for:

1. General inquiry ("How much do you charge?"):
   - Warm greeting
   - Brief introduction to your approach (not just a price list)
   - Guide them to the next step (questionnaire, call, pricing guide)
   - Create excitement about working together

2. Detailed inquiry (they shared event details):
   - Reference specific details they shared
   - Show you read their message carefully
   - Answer their questions directly
   - Recommend a package or next step
   - Provide a clear CTA to move forward

3. Date check ("Are you available on [date]?"):
   - If available: confirm and build urgency
   - If not available: graceful decline with referral offer and alternative dates
   - Both versions

4. Price objection follow-up ("That's more than we budgeted"):
   - Empathetic acknowledgment
   - Reframe the value (what they get, not what they spend)
   - Offer alternative if you have a lower-tier option
   - Graceful close if it is genuinely not a fit

5. Ghosted inquiry follow-up (no response after your initial reply):
   - Day 3 follow-up: gentle check-in
   - Day 7 follow-up: add value (share a helpful resource)
   - Day 14 final follow-up: warm close with open door

6. Referral inquiry ("Friend recommended you"):
   - Extra warmth for referred clients
   - Reference the mutual connection
   - Make them feel special

For each template: subject line and body. Keep under 150 words each. Professional, warm, and action-oriented.`,
              result: 'A complete library of inquiry response templates for every common scenario.',
              tip: 'Speed wins bookings. With these templates saved, you can respond to any inquiry in under 5 minutes. Personalize the opening and closing, keep the middle standardized.',
            },
            {
              id: 'pg-p-5-3',
              title: 'Client Feedback and Review Request',
              task: 'Create a system for collecting client reviews and feedback',
              prompt: `Create a client review collection system for my photography business.

My business: [name]
Review platforms I want reviews on: [Google, Yelp, The Knot, WeddingWire, Facebook, etc.]
My most common client type: [describe]
When I deliver galleries: [typical timeline]

Generate:

1. Review request email (sent 1-2 weeks after gallery delivery):
   - Subject line (3 options)
   - Warm personal opening referencing their session
   - Why their review matters (help other families/couples find great photography)
   - Direct link placement for your preferred review platform
   - Suggested prompts if they do not know what to write:
     - What was the experience like?
     - How did you feel about your photos?
     - Would you recommend [business name]? Why?
   - No pressure - keep it gracious

2. Quick review option (for clients who are short on time):
   - 5-question survey format they can complete in 2 minutes
   - Star ratings plus one open-ended question
   - Permission to use their responses as testimonials

3. Follow-up for non-responders (2 weeks after first request):
   - Shorter, lighter version
   - Offer an alternative (text a quick sentence, leave a Google star rating)

4. Thank you response (after they leave a review):
   - Personalized thank you
   - Small gesture of appreciation (print credit, referral bonus, social feature)

5. Review response templates:
   - Positive review response (public, for Google/Yelp)
   - Mixed review response (professional, empathetic, solution-focused)
   - Negative review response (calm, professional, takes conversation offline)

6. Testimonial usage:
   - Permission request template (can I use your review on my website and social media?)
   - How to format testimonials for maximum impact

Tone: Grateful, genuine, and never pushy. Clients should feel that sharing their experience is a gift, not an obligation.`,
              result: 'A complete review collection system that generates a steady stream of social proof for your business.',
              tip: 'The best reviews come from clients who are still emotionally connected to their images. Send the request while they are actively sharing photos with friends and family - not months later.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Business Operations',
          prompts: [
            {
              id: 'pg-p-6-1',
              title: 'Pricing Guide Generator',
              task: 'Create a professional pricing guide for your photography business',
              prompt: `Create a professional pricing guide for my photography business.

My business: [name]
Photography type: [wedding, portrait, commercial, etc.]
Market: [city/region]
Experience level: [emerging, established, luxury/premium]
Brand aesthetic: [minimal, warm, editorial, playful, etc.]

My current offerings:
- Package 1: [name, what is included, price]
- Package 2: [name, what is included, price]
- Package 3: [name, what is included, price]
- Add-ons: [list each with price]
- Print products: [albums, prints, canvases, etc. with pricing]

Write a pricing guide that includes:

1. Welcome page:
   - Brief, warm introduction
   - Your approach and what makes you different
   - What the photography experience is like

2. The experience section:
   - Step-by-step client journey from booking to delivery
   - What they can expect at every stage
   - How you make the process easy and enjoyable

3. Package presentation:
   - Each package named and described compellingly
   - Clear list of what is included
   - Investment presented with confidence
   - Visual suggestion notes for layout

4. Add-on menu:
   - Additional services with brief descriptions and pricing
   - Recommendations for what pairs well with each package

5. Print and product section:
   - Album options with starting prices
   - Print sizes and pricing
   - Wall art and canvas options
   - Why printed photos matter (brief value statement)

6. FAQ section (8-10 questions):
   - Common questions about booking, deposits, timeline, etc.
   - Answers that build confidence and address hesitation

7. Next steps:
   - How to book
   - What they need to do first
   - Contact information
   - Seasonal availability note

Tone: [Match your brand - warm and inviting, clean and editorial, fun and approachable, luxury and refined]. The pricing guide should feel like a natural extension of your brand, not a spreadsheet.`,
              result: 'A complete, professional pricing guide that positions your services and simplifies the booking conversation.',
              tip: 'Design this in Canva AI with your branding and portfolio images. The visual presentation of your pricing guide is as important as the content. Send it as a beautiful PDF, not a text email.',
            },
            {
              id: 'pg-p-6-2',
              title: 'Contract Language Review',
              task: 'Review and improve your photography contract language',
              prompt: `Review and improve the following photography contract sections. I want clear, professional language that protects both me and my clients.

My current contract text:
[Paste your current contract or the sections you want improved]

If you do not have a contract yet, generate template language for:

1. Services and deliverables:
   - What you are providing (be specific)
   - Number of edited images
   - Delivery method and timeline
   - What is NOT included

2. Investment and payment:
   - Total fee and payment schedule
   - Retainer/deposit amount and when it is due
   - Payment methods accepted
   - Late payment terms

3. Cancellation and rescheduling:
   - Client cancellation policy (timeline and refund terms)
   - Photographer illness or emergency clause
   - Rescheduling terms (weather, circumstances)
   - Force majeure clause

4. Image rights and usage:
   - What the client can do with their images
   - What they cannot do (edit, remove watermarks, use commercially)
   - Your portfolio and marketing usage rights
   - Social media sharing guidelines

5. Liability:
   - Equipment failure clause
   - Limitation of liability
   - Image backup and storage policy
   - Indemnification

6. Creative approach:
   - Artistic discretion clause
   - Editing style consistency
   - Number of revision requests (if any)

7. Cooperation clause:
   - Client responsibility to provide timeline, access, and cooperation
   - Impact of delays or restrictions on deliverables

8. Dispute resolution:
   - Governing law
   - Mediation before litigation

Write in plain language that non-lawyers can understand while still being legally sound. Flag any sections where I should consult a local attorney.

Note: This is template language for review - always have your contract reviewed by a licensed attorney in your jurisdiction.`,
              result: 'Professional contract language that protects your business while being clear and client-friendly.',
              tip: 'This is a starting point, not legal advice. Have a local attorney review your contract before using it. The cost of a contract review is tiny compared to the cost of a dispute without proper protection.',
            },
            {
              id: 'pg-p-6-3',
              title: 'Year-End Business Review',
              task: 'Create a year-end business review and planning document',
              prompt: `Help me create a year-end review and next-year plan for my photography business.

This year's data:
- Total sessions/events: [number]
- Total revenue: [$X]
- Average booking value: [$X]
- Most profitable session type: [type]
- Inquiry-to-booking conversion rate: [X% or estimate]
- Biggest referral source: [where most clients came from]
- Client satisfaction: [general sense - excellent, good, mixed]
- Hours worked per week average: [estimate]

Expenses (approximate):
- Equipment: [$X]
- Software and subscriptions: [$X]
- Marketing: [$X]
- Education: [$X]
- Insurance: [$X]
- Other: [$X]

What went well: [list 3-5 things]
What was challenging: [list 3-5 things]
What I want to change: [list 2-3 things]

Generate:

1. Year in review analysis:
   - Revenue breakdown and profit margin estimate
   - Average revenue per working hour
   - Client acquisition cost estimate
   - Most and least profitable service lines
   - Capacity analysis (were you overbooked, underbooked, or balanced?)

2. Key insights:
   - What the numbers tell you about your business
   - Where you are leaving money on the table
   - Where you are spending time without return

3. Next year goals (SMART format):
   - Revenue target with justification
   - Session volume target
   - Average booking value target
   - Marketing goals
   - Personal/lifestyle goals

4. Action plan by quarter:
   - Q1: [planning and preparation tasks]
   - Q2: [growth and marketing tasks]
   - Q3: [peak season strategy]
   - Q4: [wrap-up and planning tasks]

5. Pricing review:
   - Should you raise prices? By how much?
   - Which packages need adjustment?
   - New offerings to consider

6. Marketing plan:
   - Top 3 marketing channels to focus on
   - Content strategy summary
   - Networking and referral strategy
   - Budget allocation

Keep it actionable and specific. A plan you will actually follow, not a wish list.`,
              result: 'A comprehensive business review and strategic plan for the coming year.',
              tip: 'Do this in December before you set next year\'s pricing. The numbers often tell a different story than your gut feeling. Many photographers discover they are undercharging or spending too much time on low-value work.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what changes when AI handles the business side of your photography practice.',
      timeTable: [
        {
          task: 'Client proposals',
          without: '2-3 hours each',
          withAI: '20-30 minutes',
          saved: '1.5-2.5 hrs',
        },
        {
          task: 'Shot list creation',
          without: '1-2 hours',
          withAI: '15-20 minutes',
          saved: '45-90 min',
        },
        {
          task: 'Portfolio SEO optimization',
          without: 'Never done properly',
          withAI: '2-3 hours total',
          saved: 'From zero to done',
        },
        {
          task: 'Social media captions (10 posts)',
          without: '2-3 hours or skipped',
          withAI: '30 minutes',
          saved: '1.5-2.5 hrs',
        },
        {
          task: 'Client emails (weekly)',
          without: '1-2 hours/week',
          withAI: '15-20 minutes/week',
          saved: '1-1.5 hrs/week',
        },
        {
          task: 'Business documents',
          without: 'Never happens',
          withAI: '30-60 min each',
          saved: 'From zero to done',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '10-20 hrs/month',
      },
      sections: [
        {
          heading: 'The Photographer\'s Gap',
          paragraphs: [
            'Photographers who use AI for business operations spend dramatically more time on what they do best - making images and connecting with clients. Same creative talent, same eye for light, same ability to capture moments - just less time drowning in emails, proposals, and marketing.',
            'The gap is not photography skill. It is how much energy you have left for shooting and editing after the business admin is done.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not pick up a camera to write pricing guides and Instagram captions. You picked up a camera because you see the world in a way that stops people in their tracks. AI gives you back the hours to pursue that vision - and build the business that supports it.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One business task that has been on your to-do list for months. That is enough to change how your photography business runs.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your photography business. Each day introduces one new capability. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'pg-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pg-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'pg-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Write a Client Proposal',
          duration: '15 min',
          items: [
            { id: 'pg-2-1', label: 'Take a recent or upcoming inquiry' },
            { id: 'pg-2-2', label: 'Run the Wedding/Event Proposal or Corporate Proposal prompt' },
            { id: 'pg-2-3', label: 'Customize the output and send it to the client' },
          ],
        },
        {
          day: 3,
          title: 'Optimize Your Portfolio SEO',
          duration: '25 min',
          items: [
            { id: 'pg-3-1', label: 'Run the Alt Text and Metadata Generator for 10 portfolio images' },
            { id: 'pg-3-2', label: 'Update the alt text and file names on your website' },
            { id: 'pg-3-3', label: 'Run the Location-Specific SEO Page prompt for your primary market' },
          ],
        },
        {
          day: 4,
          title: 'Tackle Social Media',
          duration: '20 min',
          items: [
            { id: 'pg-4-1', label: 'Run the Instagram Caption Generator for 5 recent images' },
            { id: 'pg-4-2', label: 'Schedule the posts for the week' },
            { id: 'pg-4-3', label: 'Notice how much faster captioning becomes with AI' },
          ],
        },
        {
          day: 5,
          title: 'Build Your Email Templates',
          duration: '20 min',
          items: [
            { id: 'pg-5-1', label: 'Run the Booking Confirmation Email Sequence prompt' },
            { id: 'pg-5-2', label: 'Run the Inquiry Response Templates prompt' },
            { id: 'pg-5-3', label: 'Save the templates in your email system or CRM' },
          ],
        },
        {
          day: 6,
          title: 'Upgrade Your Business Documents',
          duration: '20 min',
          items: [
            { id: 'pg-6-1', label: 'Run the Pricing Guide Generator for your current offerings' },
            { id: 'pg-6-2', label: 'Try the Shot List prompt for your next upcoming session' },
            { id: 'pg-6-3', label: 'Explore any prompt you have not tried yet' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systematize',
          duration: '10 min',
          items: [
            { id: 'pg-7-1', label: 'Review which prompts saved you the most time this week' },
            { id: 'pg-7-2', label: 'Save your top prompts with your business details pre-filled' },
            { id: 'pg-7-3', label: 'Share this guide with a photographer friend who needs more hours in the day' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
