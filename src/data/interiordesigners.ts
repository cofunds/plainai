import type { WorkbookData } from './types'

export const interiordesignersData = {
  professionId: 'interiordesigners',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Interior Designers',
  heroDescription:
    'Everything you need to start using AI in your interior design practice - with real tools, workflows, and prompts for client briefs, materials, space planning, and presentations.',

  chapters: {
    ch1: {
      paragraphs: [
        'You walk into the Monday morning with a client consultation at 10am, a mood board due by Wednesday for a different project, a material sample order that should have gone out last week, and a contractor asking why the tile spec changed. Your inbox has 23 unread emails. Twelve of them are vendor quotes you requested but have not had time to compare.',
        'The 10am client wants to "completely reimagine" their living room but cannot describe what they want beyond "something fresh but timeless." You pull out your laptop and start scrolling Pinterest with them for 45 minutes, trying to decode their taste from a collection of contradictory images. By the end of the meeting you have a vague direction and a long list of follow-up work.',
        'Back at your desk, you start the mood board for Wednesday. Two hours in, you have a concept but the material palette does not feel cohesive. You need to source a specific fabric, but three vendors have similar options at different price points and lead times. Comparing them properly takes another hour. The FF&E schedule for the downtown project is overdue. The timeline for the renovation has slipped and nobody has updated the client.',
        'You became an interior designer because you see potential in every space - you understand how light, texture, color, and proportion create environments where people feel something. Instead, you spend most of your day on logistics, documentation, and chasing down product information.',
      ],
      highlight:
        'What if the research, documentation, and coordination took half the time - and you spent those hours on the creative work that actually transforms spaces?',
      closingParagraph:
        'Not replacing your eye or your instinct. Just eliminating the hours of admin work that sit between your vision and its execution.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to develop your design eye. It will not feel the way natural light hits a linen curtain at 4pm or know that a client who says "modern" actually means "transitional with clean lines." It cannot walk a space and understand its proportions the way you do. And it will never replace the relationship-building that turns a first project into a lifelong client.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most organized, fastest-researching design assistant you have ever worked with. It has read every material catalog, every finish specification, every design blog, and every project management guide. It never loses a vendor contact. It never forgets a lead time.',
            'Need to compare five countertop materials across cost, durability, and aesthetics? AI creates the comparison table in 60 seconds. Need a client brief organized from scattered meeting notes? Done in 2 minutes. Need an FF&E schedule template populated with your selections? AI structures it while you move on to the next creative decision.',
            'The pattern is simple: you make the design decisions. AI handles the documentation, research, and coordination that turns those decisions into deliverables.',
          ],
        },
        {
          heading: 'Why interior designers have a unique advantage',
          paragraphs: [
            'You already think in layers - spatial planning, material selection, color theory, lighting, and client psychology all at once. That multidimensional thinking makes you exceptionally good at directing AI. You know exactly what output you need because you understand every layer of the project.',
            'When non-designers use AI for interiors, they get generic suggestions. When interior designers use AI, they use it as a research and documentation engine that frees up creative bandwidth. The result is better projects delivered faster with less burnout.',
          ],
        },
      ],
      keyInsight:
        'Your design sensibility + AI\'s research and documentation speed = more time for the creative work that clients actually hire you for. AI handles the spreadsheets. You handle the spaces.',
    },

    ch3: {
      intro: 'Five tools that cover everything an interior designer needs from AI. Start with the first two and add others as your workflow develops.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your design assistant and writing partner',
          description:
            'Client briefs, material research, FF&E schedules, project timelines, vendor emails, and design concept descriptions',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for all text-based tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Canva AI',
          role: 'Your mood board and presentation builder',
          description:
            'Mood boards, client presentations, material boards, social media content, and project portfolios',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for visual presentations',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your product and material researcher',
          description:
            'Material specifications, vendor sourcing, price comparisons, product availability, and trade resource lookups with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for sourcing and research',
          icon: 'perplexity',
        },
        {
          name: 'Claude',
          role: 'Your long-form document writer',
          description:
            'Detailed project proposals, comprehensive FF&E schedules, design narratives, contract language, and scope documents',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for detailed documents',
          icon: 'claude',
        },
        {
          name: 'Notion AI',
          role: 'Your project management hub',
          description:
            'Project trackers, client communication logs, vendor databases, task management, and team coordination',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when managing multiple projects',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT for writing and research tasks and Canva AI for visual presentations. Add Perplexity for deep product sourcing. Claude and Notion AI are excellent additions when your project load grows.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual interior design workflow. Each system eliminates hours of research and documentation. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Client Brief and Mood Board Creation',
          before:
            'After the initial consultation, you spend 2-3 hours organizing your notes, researching the client\'s style references, sourcing inspiration images, and assembling a mood board that captures the direction. Half the time you are second-guessing whether the board actually reflects what the client described.',
          after:
            'You feed AI your consultation notes and it generates a structured client brief with style direction, color palette recommendations, material categories, and a mood board text framework. You use that as the skeleton for a visual board in Canva AI. Total time from consultation to mood board: 1 hour.',
          flow: [
            'Record or take detailed notes during the client consultation',
            'Feed the notes to AI with the client brief prompt',
            'AI generates a structured brief with style analysis and recommendations',
            'Use the brief to guide your mood board creation in Canva AI',
            'Present the brief and board to the client for feedback',
          ],
          timeSaved: { without: '3-5 hours', withAI: '1-1.5 hours' },
        },
        {
          id: 2,
          name: 'Material and Finish Research',
          before:
            'A client wants a durable, low-maintenance countertop that looks like natural stone but fits a mid-range budget. You spend hours browsing manufacturer websites, comparing quartz brands, checking price ranges, reading reviews, and trying to remember which vendor had the best trade pricing. By the end, you have tabs open across six browser windows.',
          after:
            'You describe the requirements and AI generates a comparison of suitable materials with specifications, price ranges, pros and cons, and maintenance requirements. You pick the top 3 options, request samples from your vendors, and move on with your day.',
          flow: [
            'Define the material requirements - application, performance, budget, aesthetic',
            'Run the material comparison prompt',
            'AI generates a structured comparison with specifications and pricing',
            'Select your top options and cross-reference with preferred vendors',
            'Order samples and present recommendations to the client',
          ],
          timeSaved: { without: '2-4 hours per material category', withAI: '20-30 minutes' },
        },
        {
          id: 3,
          name: 'Space Planning Documentation',
          before:
            'You have the space plan figured out in your head, but the client needs a written explanation of why you placed the dining table there and not by the window. You also need furniture dimensions documented, traffic flow described, and adjacency rationale explained. Writing all of that takes longer than the actual space planning.',
          after:
            'You describe your space plan decisions and AI writes a space planning document with room-by-room rationale, furniture placement logic, traffic flow descriptions, and adjacency analysis. The client gets a professional document that explains your thinking.',
          flow: [
            'Sketch or describe your space plan decisions',
            'Feed the layout details and rationale to AI',
            'AI generates a space planning document with professional descriptions',
            'Review and adjust the language to match your design intent',
            'Include in your client presentation package',
          ],
          timeSaved: { without: '2-3 hours', withAI: '30-45 minutes' },
        },
        {
          id: 4,
          name: 'Project Timeline Management',
          before:
            'You know the renovation will take about 12 weeks, but creating a detailed timeline with milestones, lead times for custom pieces, contractor coordination dates, and client approval windows takes a full afternoon. Updating it when things change takes another hour each time.',
          after:
            'AI generates a detailed project timeline with milestones, dependencies, lead time calculations, and buffer periods. When things shift, you describe the change and AI updates the entire timeline in minutes.',
          flow: [
            'Define the project scope, start date, and key constraints',
            'Run the project timeline prompt with your project details',
            'AI generates a phased timeline with milestones and dependencies',
            'Review and adjust dates based on your contractor relationships',
            'Share with the client and update as the project progresses',
          ],
          timeSaved: { without: '3-5 hours initial + 1 hour per update', withAI: '30 min + 10 min updates' },
        },
        {
          id: 5,
          name: 'Vendor Coordination',
          before:
            'You need quotes from four tile vendors, lead time confirmations from two furniture manufacturers, and installation availability from your contractor. Writing individual emails, following up, comparing responses, and keeping it all organized consumes an entire morning every week.',
          after:
            'AI drafts all your vendor emails - RFQs, follow-ups, order confirmations, and comparison summaries. You review, personalize, and send. Vendor coordination goes from a half-day task to 45 minutes.',
          flow: [
            'List the items you need quoted or confirmed',
            'Run the vendor RFQ prompt with your specifications',
            'AI generates professional emails for each vendor',
            'Review, personalize with vendor-specific details, and send',
            'When quotes come back, use AI to create a comparison summary',
          ],
          timeSaved: { without: '3-4 hours/week', withAI: '45 minutes/week' },
        },
        {
          id: 6,
          name: 'Client Presentation Preparation',
          before:
            'You have all the design decisions made, but presenting them to the client requires organizing everything into a cohesive story - concept narrative, material selections with rationale, budget summary, and next steps. Building the presentation takes almost as long as the design work itself.',
          after:
            'AI writes your presentation script, organizes your design selections into a narrative flow, and creates talking points for each design decision. You focus on the visual layout in Canva AI while AI handles the words.',
          flow: [
            'List your design decisions, material selections, and key talking points',
            'Run the presentation script prompt',
            'AI generates a structured presentation narrative with section-by-section talking points',
            'Build the visual presentation in Canva AI using the narrative as your guide',
            'Practice the presentation using AI-generated talking points',
          ],
          timeSaved: { without: '3-5 hours', withAI: '1-1.5 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every core interior design task. Click to reveal, fill in the brackets, and let AI handle the first draft.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Client Briefs & Mood Boards',
          prompts: [
            {
              id: 'id-p-1-1',
              title: 'Design Concept from Consultation Notes',
              task: 'Turn client consultation notes into a structured design concept',
              prompt: `Turn the following client consultation notes into a structured interior design brief and concept direction.

Client notes:
[Paste your raw notes from the consultation - messy is fine]

Project details:
- Space type: [e.g., living room, full home, restaurant, office]
- Square footage: [approximate]
- Budget range: [total budget or per-room budget]
- Timeline: [when they want it done]
- Location: [city/region - affects material availability and style context]

Generate:
1. Client profile summary - who they are, how they live, what matters to them
2. Style direction - the design style that matches their preferences with specific characteristics
3. Color palette recommendation - primary, secondary, and accent colors with rationale
4. Material direction - categories of materials that fit the style and budget (not specific products yet)
5. Key design priorities ranked - what matters most based on what they said
6. Mood board text brief - a 150-word description that a designer could use to source images
7. Potential challenges - things the client said (or did not say) that could cause friction later
8. Questions to ask before proceeding - gaps in information you need to fill

Flag any contradictions in the client's preferences (e.g., wanting "minimal" but also "cozy and layered") and suggest how to resolve them.`,
              result: 'A structured client brief that transforms vague consultation notes into an actionable design direction.',
              tip: 'Voice-record your consultations (with permission) and paste the transcript. Clients reveal their real preferences in casual conversation more than in direct questions.',
            },
            {
              id: 'id-p-1-2',
              title: 'Mood Board Description Generator',
              task: 'Generate a detailed mood board description for visual sourcing',
              prompt: `Write a detailed mood board description I can use to source images and materials.

Design concept: [describe the concept in 2-3 sentences]
Style: [e.g., modern farmhouse, Japandi, maximalist eclectic, coastal contemporary]
Color palette: [list primary, secondary, and accent colors]
Room type: [what space this is for]
Client personality: [describe who this is for - their lifestyle and taste]

Generate:
1. Mood board narrative (200 words) - describe the feeling and atmosphere of the space as if you are walking through it
2. Image sourcing list - 12-15 specific image types to find:
   - Architectural details to include
   - Material textures to show
   - Furniture silhouettes to reference
   - Lighting qualities to capture
   - Color moments to highlight
   - Lifestyle scenes that capture the mood
3. Material palette description:
   - Primary material (the dominant surface)
   - Secondary material (the supporting texture)
   - Accent material (the surprise element)
   - Metal finish direction
   - Textile direction (patterns, textures, weights)
4. Three "anchor pieces" - describe three statement items that would define this mood board
5. What does NOT belong - 5 things to specifically avoid that could derail the concept

Format this so I can use it as a sourcing checklist while building the board.`,
              result: 'A comprehensive mood board brief that guides your image sourcing and material selection.',
              tip: 'Use the "what does NOT belong" section to stay disciplined. It is easy to let a mood board drift when you find beautiful but off-concept images.',
            },
            {
              id: 'id-p-1-3',
              title: 'Style Comparison for Client Decision',
              task: 'Compare design styles to help a client choose a direction',
              prompt: `Create a design style comparison to help my client choose a direction.

Client preferences (from consultation):
[Paste what they said they liked and did not like]

Space: [room type and approximate size]
Budget: [range]
Lifestyle factors: [kids, pets, entertaining frequency, work-from-home, etc.]

Compare these styles for their space:
- Style 1: [e.g., Modern Minimalist]
- Style 2: [e.g., Warm Contemporary]
- Style 3: [e.g., Transitional]

For each style, provide:
1. Visual description - what the room would look and feel like in 3-4 sentences
2. Key characteristics - furniture shapes, material palette, color approach
3. Sample material palette - specific types (not brands) for flooring, upholstery, case goods, lighting
4. Budget implications - how this style aligns with their budget (lower, mid, higher end of range)
5. Lifestyle fit - how well this style works for how they actually live
6. Maintenance reality - how much effort to keep it looking like the inspiration photos
7. Longevity score - how well this style will age over 5-10 years

Then provide:
- Your recommendation with rationale based on everything the client told you
- A hybrid option if two styles could be blended effectively
- 3 questions to ask the client to narrow the decision

Format as a side-by-side comparison the client can review.`,
              result: 'A clear style comparison that helps clients make confident design decisions.',
              tip: 'Clients who struggle to choose a style usually need to see how each option fits their daily life, not just how it looks. The lifestyle and maintenance sections are often the deciding factors.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Material Research',
          prompts: [
            {
              id: 'id-p-2-1',
              title: 'Material Comparison Matrix',
              task: 'Compare materials across performance, cost, and aesthetics',
              prompt: `Create a detailed material comparison for [application - e.g., kitchen countertop, bathroom flooring, living room upholstery fabric].

Requirements:
- Application: [where this material will be used]
- Performance needs: [durability, water resistance, stain resistance, heat resistance, etc.]
- Aesthetic direction: [what it should look and feel like]
- Budget: [per SF, per yard, or total budget for this material]
- Maintenance tolerance: [low - they want zero effort / medium / high - they enjoy caring for materials]
- Household factors: [kids, pets, high traffic, direct sunlight, humidity, etc.]

Compare [4-6] material options. For each:
1. Material name and type
2. Price range (per unit)
3. Durability rating (1-10) with explanation
4. Maintenance requirements - realistic daily and periodic care
5. Aesthetic qualities - color range, texture, finish options, how it ages
6. Installation considerations - subfloor requirements, lead time, installer skill level
7. Environmental impact - sustainability certifications, VOC levels, recyclability
8. Pros and cons for this specific application
9. Best for - which client type this material suits

Then provide:
- Top recommendation for this client with full rationale
- Runner-up option
- One "stretch" option if they could increase budget by 20%

Format as a comparison table followed by your recommendation narrative.`,
              result: 'A comprehensive material comparison that makes selection decisions faster and more informed.',
              tip: 'Always check the maintenance column against what the client actually said about their lifestyle. The most beautiful material is the wrong choice if the client will not maintain it.',
            },
            {
              id: 'id-p-2-2',
              title: 'Finish Schedule Builder',
              task: 'Generate a finish schedule for a project',
              prompt: `Generate a finish schedule for the following interior design project.

Project: [project name and type]
Spaces to include: [list every room - e.g., living room, kitchen, primary bedroom, bathroom 1, bathroom 2, entry, hallway]
Design style: [overall style direction]
Budget level: [builder grade, mid-range, high-end, luxury]

For each space, provide:
1. Flooring - material, color/finish, pattern (if applicable)
2. Wall finish - paint color family, wallpaper, tile, paneling (specify which walls)
3. Ceiling finish - paint, detail (coffered, beams, etc.)
4. Trim and millwork - profile style, finish
5. Countertops (where applicable) - material, color, edge profile
6. Backsplash (where applicable) - material, pattern, grout color
7. Cabinet finish (where applicable) - door style, color/stain, hardware finish
8. Plumbing fixtures - finish family (brushed nickel, matte black, etc.)
9. Lighting fixture style - type and finish for each fixture location
10. Hardware - style and finish

Then provide:
- Finish palette summary - the 5-7 finishes that tie the whole project together
- Transition details - how materials meet between adjacent rooms
- Consistency notes - which elements should match across rooms and which can vary

Format as a room-by-room table with a project-wide summary.`,
              result: 'A complete finish schedule that documents every surface and finish decision in the project.',
              tip: 'Fill this out after your material selections are confirmed. It becomes the single reference document for you, the contractor, and the client.',
            },
            {
              id: 'id-p-2-3',
              title: 'Material Sourcing Email',
              task: 'Draft a vendor email requesting material samples and pricing',
              prompt: `Draft a professional email to a vendor requesting material information.

Vendor type: [tile showroom, fabric house, furniture manufacturer, lighting rep, etc.]
Relationship: [new contact, existing relationship, trade account]
Your firm: [name and brief description]
Project context: [brief project description - do not share client name]

Items needed:
[List each item with specifications:]
- Item 1: [description, size, color/finish, quantity needed]
- Item 2: [description, size, color/finish, quantity needed]
- Item 3: [description, size, color/finish, quantity needed]

Write an email that:
1. Introduces you and the project context (if new contact)
2. Clearly lists each item needed with specifications
3. Requests for each item:
   - Trade pricing
   - Lead time from order to delivery
   - Sample availability and cost
   - Minimum order quantities
   - Return policy
4. Asks about current promotions or discontinued items in similar styles
5. Provides your timeline for making decisions
6. Requests a showroom appointment or virtual consultation if applicable

Tone: Professional, efficient, and respectful of their time. Show you know what you want.

Also write a follow-up email template for if they do not respond within 5 business days.`,
              result: 'A professional vendor email that gets you complete information in one response instead of three back-and-forth exchanges.',
              tip: 'Include specific dimensions and quantities in your first email. Vendors respond faster and more completely when they can see you are a serious buyer, not just browsing.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Space Planning',
          prompts: [
            {
              id: 'id-p-3-1',
              title: 'Space Planning Rationale Document',
              task: 'Write a professional space planning rationale for client review',
              prompt: `Write a space planning rationale document for the following layout.

Space: [room type and dimensions - length x width, with ceiling height]
Function: [how the space will be used - daily routines, entertaining, work, etc.]
Occupants: [who uses this space and how]
Existing conditions: [windows, doors, fixed elements like fireplaces or columns]

My layout decisions:
[Describe your space plan - where you placed each piece and zone]
- Seating area: [describe placement and pieces]
- Dining/work area: [if applicable]
- Storage: [where and what type]
- Traffic flow: [primary paths through the space]
- Focal point: [what the room is oriented around]

Generate:
1. Space planning narrative (300-400 words):
   - Why this arrangement works for how the client lives
   - Traffic flow logic - how people move through the space
   - Zone descriptions - what each area of the room is for
   - Sight lines - what you see when you enter and from key seated positions
   - Natural light utilization - how the layout works with window placement
   - Flexibility - how the space can adapt for different uses

2. Furniture placement rationale:
   - For each major piece: why it is placed where it is
   - Clearance dimensions between pieces (verify against accessibility minimums)
   - Scale relationships - how furniture proportions relate to the room

3. Potential concerns:
   - Any tight clearances or compromises
   - Seasonal light changes that affect the layout
   - Acoustic considerations

Format as a professional document suitable for including in a client presentation package.`,
              result: 'A polished space planning document that explains and justifies your layout decisions.',
              tip: 'Clients rarely question layouts that come with clear rationale. This document prevents "can we move the sofa to the other wall?" conversations because you have already explained why it is where it is.',
            },
            {
              id: 'id-p-3-2',
              title: 'FF&E Schedule Generator',
              task: 'Create a furniture, fixtures, and equipment schedule',
              prompt: `Create an FF&E (Furniture, Fixtures & Equipment) schedule for the following project.

Project: [name and scope]
Rooms to include: [list every room]
Budget: [total FF&E budget or per-room budgets]
Style: [design direction]
Timeline: [when items need to be ordered by and delivered by]

For each room, generate an FF&E schedule table with:
1. Item number (sequential)
2. Item description (e.g., "Primary sofa - 3-seat")
3. Room location
4. Quantity
5. Dimensions (W x D x H)
6. Material/finish description
7. Manufacturer (leave as [TBD] or fill with common trade sources for this style)
8. Model/SKU (leave as [TBD])
9. Unit cost estimate (based on budget level)
10. Extended cost (quantity x unit cost)
11. Lead time estimate
12. Status (specify, order, received, installed)

Then provide:
- Budget summary by room
- Budget summary by category (seating, tables, lighting, textiles, accessories)
- Items with longest lead times flagged
- Total FF&E budget vs. allocated budget
- Procurement priority list - what to order first based on lead times

Format as a professional schedule. Include notes column for special instructions (COM fabric, custom dimensions, etc.).`,
              result: 'A comprehensive FF&E schedule that tracks every item from specification through installation.',
              tip: 'Start this schedule at the beginning of the project and update it continuously. It is the single most important project management document in interior design.',
            },
            {
              id: 'id-p-3-3',
              title: 'Room Layout Options Comparison',
              task: 'Generate and compare multiple layout options for a space',
              prompt: `Generate 3 different layout options for the following space and compare them.

Room: [type and function]
Dimensions: [length x width, ceiling height]
Fixed elements: [doors with swing direction, windows with sizes, fireplace, columns, built-ins, etc.]
Required pieces: [list furniture and equipment that must fit]
Primary function: [main use of the space]
Secondary functions: [other uses]
Client priorities: [what matters most - conversation, TV viewing, natural light, storage, flexibility, etc.]

For each of the 3 layout options:
1. Layout description - where each piece is placed and why
2. Zone map - what area of the room serves what function
3. Traffic flow description - primary and secondary paths
4. Pros of this layout
5. Cons of this layout
6. Best for - which lifestyle or use pattern this layout serves best
7. Furniture dimensions needed - if this layout requires specific sizes

Then provide:
- Side-by-side comparison summary
- Your recommendation with rationale based on the client's priorities
- Hybrid possibility - can elements from different options be combined?
- Key dimensions to verify before committing to a layout

This will be used alongside sketched floor plans for the client to review.`,
              result: 'Three distinct layout options with clear pros, cons, and a professional recommendation.',
              tip: 'Always present at least two options to clients. It gives them agency in the decision while keeping both options within your design vision. Never present an option you would not want to execute.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Project Timelines',
          prompts: [
            {
              id: 'id-p-4-1',
              title: 'Project Timeline Generator',
              task: 'Create a detailed project timeline with milestones and dependencies',
              prompt: `Create a detailed interior design project timeline.

Project: [name and scope - e.g., full home renovation, single room redesign, commercial buildout]
Start date: [date]
Target completion: [date]
Scope: [list what is included - design, procurement, construction/installation]
Complexity: [simple refresh, moderate renovation, major renovation, ground-up]
Custom items: [any pieces with extended lead times - e.g., custom upholstery, imported tile, custom millwork]

Generate a phased timeline:

Phase 1 - Design Development:
- Client consultation and brief finalization
- Concept development and mood board approval
- Space planning and layout approval
- Material and finish selection
- FF&E specification

Phase 2 - Documentation:
- Construction drawings (if applicable)
- Finish schedule finalization
- FF&E schedule completion
- Procurement package preparation

Phase 3 - Procurement:
- Custom item orders (longest lead times first)
- Stock item orders
- Sample approvals
- Delivery coordination

Phase 4 - Implementation:
- Demolition and prep (if applicable)
- Construction milestones
- Installation sequence
- Punch list and styling
- Final photography

For each milestone:
- Date (calculated from start date)
- Duration
- Dependencies (what must be done before this can start)
- Client action required (approvals, decisions)
- Buffer time built in

Flag the critical path - the sequence of tasks that determines the project end date. Highlight decisions that need to happen by specific dates to keep the timeline on track.`,
              result: 'A detailed project timeline that keeps everyone aligned and identifies critical decisions.',
              tip: 'Add 2 weeks of buffer for custom items and 1 week for client decisions. Timelines slip most often at approval stages and custom order confirmations.',
            },
            {
              id: 'id-p-4-2',
              title: 'Gantt Chart Outline',
              task: 'Create a Gantt chart outline for project management',
              prompt: `Create a Gantt chart outline for the following interior design project.

Project: [name and type]
Duration: [estimated weeks]
Start date: [date]
Team: [who is involved - designer, assistant, contractor, vendors]

List every task in this format for import into project management software:

Task Category | Task Name | Start Week | Duration (weeks) | Dependencies | Assigned To | Notes

Categories to include:
1. Client Management - meetings, presentations, approval milestones
2. Design - concept, space planning, material selection, documentation
3. Procurement - ordering, tracking, receiving, inspecting
4. Construction - demo, rough-in, finishes, millwork, paint
5. Installation - furniture delivery, fixture installation, accessory placement, styling
6. Project Close - punch list, photography, final walkthrough

Requirements:
- Show parallel tasks that can happen simultaneously
- Identify the critical path with asterisks
- Note which tasks require client input or approval
- Include buffer periods at key handoff points
- Flag tasks with high schedule risk

Provide:
- The full task list in the table format above
- A weekly summary showing what is happening each week
- Key dates the client needs to have in their calendar
- A "schedule risk" section identifying the 3 most likely causes of delay

Format so it can be easily transferred into Notion, Asana, Monday.com, or a spreadsheet.`,
              result: 'A comprehensive Gantt chart outline ready for import into any project management tool.',
              tip: 'Share the client-facing milestones immediately. When clients know their decision deadlines upfront, they are far more likely to respond on time.',
            },
            {
              id: 'id-p-4-3',
              title: 'Project Status Update Email',
              task: 'Draft a client-facing project status update',
              prompt: `Write a professional project status update email to my client.

Project: [name]
Current phase: [where we are in the project]
Client name: [first name]

What happened since last update:
[List completed tasks and milestones]

What is happening now:
[List items currently in progress]

What is coming next:
[List upcoming milestones]

Issues or decisions needed:
[List any problems, delays, or decisions the client needs to make]

Write an email that includes:
1. Warm but professional opening
2. Progress summary - 3-5 bullet points of what was accomplished
3. Current status - what is actively being worked on
4. Upcoming milestones - what is next with target dates
5. Action items for the client - clearly marked with deadlines
6. Budget update (if applicable) - [on track / adjustment needed / note]
7. Any changes to the timeline
8. Positive note or preview of something exciting coming up

Tone: Confident, organized, and reassuring. The client should feel that the project is in good hands and know exactly what they need to do.

Keep it under 300 words. Clients do not read long project emails.`,
              result: 'A professional status update that keeps clients informed and clearly identifies their action items.',
              tip: 'Send these weekly during active project phases. Consistent communication prevents 90% of client anxiety. Clients worry most when they do not hear from you.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Vendor Coordination',
          prompts: [
            {
              id: 'id-p-5-1',
              title: 'Vendor RFQ Generator',
              task: 'Create a request for quotes to send to multiple vendors',
              prompt: `Generate a professional Request for Quote (RFQ) for the following items.

Project context: [brief description without client name]
My firm: [name]
Trade account status: [existing trade account / applying / retail inquiry]
Decision timeline: [when I need to make a selection]

Items to quote:
[For each item, provide as much detail as possible:]
1. Item: [description]
   - Specifications: [material, size, color/finish, grade]
   - Quantity: [number]
   - Location in project: [where it will be installed/placed]

2. Item: [description]
   - Specifications: [material, size, color/finish, grade]
   - Quantity: [number]
   - Location in project: [where it will be installed/placed]

3. Item: [description]
   - Specifications: [material, size, color/finish, grade]
   - Quantity: [number]
   - Location in project: [where it will be installed/placed]

For each item, request:
- Trade pricing (or best pricing available)
- Lead time from order placement
- Shipping cost to [location]
- Sample availability and cost
- Minimum order quantities
- Return/exchange policy
- Warranty information
- Any comparable alternatives at a lower price point

Write the RFQ email in a format I can send to 3-4 different vendors. Professional, specific, and structured so they can respond quickly.

Also create a quote comparison table template I can fill in when responses come back.`,
              result: 'A professional RFQ email and a comparison template for evaluating vendor responses.',
              tip: 'Send the same RFQ to at least 3 vendors. Even if you have a preferred source, competitive quotes give you negotiating power and ensure you are getting fair trade pricing.',
            },
            {
              id: 'id-p-5-2',
              title: 'Purchase Order Summary',
              task: 'Generate a purchase order summary for client approval',
              prompt: `Create a purchase order summary for client review and approval.

Project: [name]
Client: [name]
Order batch: [what this group of orders covers - e.g., "Living room furniture" or "Phase 1 materials"]

Items to order:
[For each item:]
1. Item: [description]
   - Vendor: [name]
   - Product: [specific product name/number]
   - Finish/Color: [specification]
   - Quantity: [number]
   - Unit price: [cost]
   - Lead time: [weeks from order]
   - Notes: [COM fabric, custom size, etc.]

Generate:
1. Purchase order summary table with:
   - Item description
   - Vendor
   - Quantity
   - Unit cost
   - Extended cost
   - Shipping cost
   - Lead time
   - Expected delivery date
   - Room/location

2. Cost summary:
   - Subtotal by vendor
   - Total shipping
   - Tax estimate
   - Grand total
   - Comparison to budget allocation for these items
   - Variance (over/under budget)

3. Approval section:
   - What the client is approving
   - Non-refundable deposit amounts
   - Cancellation policies for each vendor
   - Statement that orders will be placed upon approval

4. Next steps:
   - What happens after approval
   - Expected delivery sequence
   - Storage arrangements if items arrive before installation

Write a brief cover note to the client explaining this order batch and requesting approval by [date].`,
              result: 'A complete purchase order summary package ready for client sign-off.',
              tip: 'Always highlight non-refundable deposits and cancellation policies before the client signs. Transparency about financial commitments builds trust and prevents disputes.',
            },
            {
              id: 'id-p-5-3',
              title: 'Vendor Follow-Up Templates',
              task: 'Create follow-up email templates for common vendor situations',
              prompt: `Create email templates for common vendor follow-up situations in interior design.

My firm: [name]
My role: [principal designer, project manager, etc.]

Write templates for these scenarios:

1. Quote follow-up (no response after 5 business days):
   - Polite, assumes they are busy
   - Restates the specific items and urgency

2. Order confirmation request:
   - Confirm order details, pricing, and lead time
   - Request order acknowledgment with estimated ship date

3. Lead time check-in (order is approaching expected ship date):
   - Professional check on production status
   - Request updated delivery timeline

4. Delivery coordination:
   - Confirm delivery date and time window
   - Provide delivery instructions and site access details
   - Note any special handling requirements

5. Damage or issue report:
   - Professional documentation of the problem
   - Request for resolution (replacement, credit, repair)
   - Include photo reference placeholders

6. Positive feedback and referral offer:
   - Thank them for great service
   - Mention specific things that went well
   - Offer to refer or leave a review

For each template:
- Subject line
- Full email body with [brackets] for customization
- Keep under 150 words each
- Professional but warm tone

These will be saved as templates for repeated use across projects.`,
              result: 'A complete set of vendor email templates that cover every common communication scenario.',
              tip: 'Save these with your standard project templates. Consistent, professional vendor communication builds relationships that get you better service, better pricing, and priority attention on rush orders.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Client Presentations',
          prompts: [
            {
              id: 'id-p-6-1',
              title: 'Design Presentation Script',
              task: 'Write a presentation script for a client design reveal',
              prompt: `Write a presentation script for a client design presentation.

Project: [name and scope]
Client: [name and what you know about their communication style]
Presentation type: [concept presentation, material selection, final design, etc.]
Format: [in-person at studio, on-site, virtual meeting]
Duration: [how long you have]

What you are presenting:
- Design concept: [summary]
- Key spaces: [list rooms or areas]
- Material selections: [major selections to present]
- Furniture selections: [key pieces]
- Budget status: [on track, adjustments needed]

Write a presentation script with:
1. Opening - set the mood and connect to the client's original vision (2 minutes)
2. Concept overview - the big idea and how it ties everything together (3 minutes)
3. Room-by-room walkthrough:
   - For each room: lead with the feeling, then materials, then specific products
   - Connect each decision back to something the client said they wanted
   - Address potential concerns before the client raises them
4. Material and finish presentation - how the palette works as a whole (3 minutes)
5. Budget overview - where things stand, any adjustments (2 minutes)
6. Next steps - what needs to happen and by when (2 minutes)
7. Questions and feedback time

For each section:
- What to say (scripted talking points)
- What to show (which boards, samples, or slides to reference)
- Transition phrase to the next section
- Anticipated client question and how to handle it

Tone: Confident, enthusiastic, and client-centered. Make them feel like every decision was made with their life in mind.`,
              result: 'A polished presentation script that turns your design decisions into a compelling story for the client.',
              tip: 'Lead with the feeling, not the product name. "This is where you will have your morning coffee with the light streaming in" is more powerful than "This is a Restoration Hardware oak dining table."',
            },
            {
              id: 'id-p-6-2',
              title: 'Design Rationale Document',
              task: 'Create a written design rationale for client records',
              prompt: `Create a design rationale document that explains and justifies the design decisions for this project.

Project: [name and scope]
Design concept: [summary of the overall design direction]

For each room/space in the project, document:

Room: [name]
1. Design intent - what this space should feel like and why
2. Layout rationale - why the furniture is arranged this way
3. Color choices - specific colors selected and the reasoning
4. Material selections with rationale:
   - Flooring: [selection] - why this was chosen
   - Walls: [selection] - why this was chosen
   - Key surfaces: [selection] - why this was chosen
5. Key furniture pieces with rationale:
   - [Piece 1]: why this specific piece, how it serves the space
   - [Piece 2]: why this specific piece, how it serves the space
6. Lighting strategy - ambient, task, and accent lighting decisions with reasoning
7. How this room connects to adjacent spaces

Then provide:
- Project-wide design thread - the 3-5 elements that create cohesion across rooms
- Budget allocation rationale - where money was invested and where it was saved, and why
- Maintenance and longevity notes - how this design is built to last

This document serves as a permanent record of design intent for the client, for any contractors working on the project, and for your portfolio.`,
              result: 'A comprehensive design rationale document that justifies every major decision in the project.',
              tip: 'This document saves hours of explaining decisions to clients, contractors, and future maintenance teams. Write it once and reference it whenever someone asks "why did you choose that?"',
            },
            {
              id: 'id-p-6-3',
              title: 'Social Media Project Showcase',
              task: 'Write social media content to showcase a completed project',
              prompt: `Write social media content to showcase a completed interior design project.

Project: [name - use a creative project name if the client prefers anonymity]
Scope: [what was designed]
Style: [design direction]
Standout features: [2-3 things that make this project special]
Before/after available: [yes/no]
Photography style: [professional shots / styled vignettes / both]
Your brand voice: [describe your firm's social media tone]

Generate content for:

1. Instagram carousel (5-7 slides):
   - Slide 1: Hook caption (what stops the scroll)
   - Slides 2-6: Caption for each photo with design detail callouts
   - Final slide: Call to action
   - Full caption (150-250 words)
   - 15-20 hashtags organized by category (design, location, style, industry)

2. Instagram Reel script (30-60 seconds):
   - Opening hook (first 3 seconds)
   - Room-by-room or detail-by-detail flow
   - Closing CTA
   - Audio/music suggestion

3. LinkedIn project feature:
   - Professional narrative about the project and your process
   - Lessons learned or design philosophy highlighted
   - 300-400 words

4. Pinterest pin descriptions (5 pins):
   - SEO-optimized descriptions for different rooms or details
   - Include relevant keywords for interior design search

Tone should match your brand voice throughout but adapt to each platform's culture.`,
              result: 'A complete social media content package for showcasing your project across platforms.',
              tip: 'Post completed project content in batches over 2-3 weeks, not all at once. Each room or detail can be its own post. One project can fuel a month of content.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what changes when AI handles the research and documentation in your interior design practice.',
      timeTable: [
        {
          task: 'Client brief and mood board',
          without: '3-5 hours',
          withAI: '1-1.5 hours',
          saved: '2-3.5 hrs',
        },
        {
          task: 'Material research per category',
          without: '2-4 hours',
          withAI: '20-30 minutes',
          saved: '2-3 hrs',
        },
        {
          task: 'Space planning documentation',
          without: '2-3 hours',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs',
        },
        {
          task: 'Project timeline creation',
          without: '3-5 hours',
          withAI: '30 minutes',
          saved: '2.5-4.5 hrs',
        },
        {
          task: 'Vendor coordination emails',
          without: '3-4 hours/week',
          withAI: '45 minutes/week',
          saved: '2-3 hrs/week',
        },
        {
          task: 'Client presentation prep',
          without: '3-5 hours',
          withAI: '1-1.5 hours',
          saved: '2-3.5 hrs',
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
          heading: 'The Design Time Gap',
          paragraphs: [
            'Interior designers who use AI for research and documentation spend 60% more time on actual design work. Same talent, same eye, same client relationships - just less time buried in spreadsheets, emails, and material catalogs.',
            'The gap is not design skill. It is how much creative energy you have left after the administrative work is done.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become an interior designer to write vendor emails and build FF&E spreadsheets. You became a designer because you see beauty and function in spaces that other people walk past without noticing. AI gives you back the hours to do the creative work that clients actually hire you for.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One task that always eats more time than it should. That is enough to transform your workflow.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your interior design practice. Each day introduces one new capability. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'id-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'id-1-2', label: 'Create a free Perplexity account for product research' },
            { id: 'id-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Transform Consultation Notes',
          duration: '15 min',
          items: [
            { id: 'id-2-1', label: 'Take notes from a recent or upcoming client consultation' },
            { id: 'id-2-2', label: 'Run the Design Concept from Consultation Notes prompt' },
            { id: 'id-2-3', label: 'Compare the output to what you would have written manually' },
          ],
        },
        {
          day: 3,
          title: 'Research a Material',
          duration: '20 min',
          items: [
            { id: 'id-3-1', label: 'Pick a material decision you are currently working on' },
            { id: 'id-3-2', label: 'Run the Material Comparison Matrix prompt' },
            { id: 'id-3-3', label: 'Use the output to narrow your selections and request samples' },
          ],
        },
        {
          day: 4,
          title: 'Document a Space Plan',
          duration: '20 min',
          items: [
            { id: 'id-4-1', label: 'Run the Space Planning Rationale prompt for a current project layout' },
            { id: 'id-4-2', label: 'Run the FF&E Schedule Generator prompt for the same project' },
            { id: 'id-4-3', label: 'Add both to your client presentation package' },
          ],
        },
        {
          day: 5,
          title: 'Build a Project Timeline',
          duration: '20 min',
          items: [
            { id: 'id-5-1', label: 'Run the Project Timeline Generator for an active project' },
            { id: 'id-5-2', label: 'Draft vendor emails using the RFQ Generator prompt' },
            { id: 'id-5-3', label: 'Notice how much coordination work AI handles in the first draft' },
          ],
        },
        {
          day: 6,
          title: 'Prepare a Presentation',
          duration: '20 min',
          items: [
            { id: 'id-6-1', label: 'Run the Design Presentation Script prompt for an upcoming meeting' },
            { id: 'id-6-2', label: 'Practice presenting with the generated talking points' },
            { id: 'id-6-3', label: 'Explore any prompt you have not tried yet' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systematize',
          duration: '10 min',
          items: [
            { id: 'id-7-1', label: 'Review which prompts saved you the most time this week' },
            { id: 'id-7-2', label: 'Save your top prompts with project-specific defaults filled in' },
            { id: 'id-7-3', label: 'Share this guide with a designer friend who is buried in admin work' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
