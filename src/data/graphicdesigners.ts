import type { WorkbookData } from './types'

export const graphicdesignersData = {
  professionId: 'graphicdesigners',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Graphic Designers',
  heroDescription:
    'A practical guide to using AI in your design business - from client briefs to portfolio writing, with real tools, systems, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'The client email arrived at 7 PM last night. "We need a full brand refresh - logo, business cards, social templates, and a style guide. The brief is attached. Can you have initial concepts by Friday?" You open the brief. It is two paragraphs long. The words "modern," "clean," and "premium" appear three times each. There is no mention of target audience, competitive landscape, or brand values beyond "trustworthy." You have four days to turn this into something meaningful.',
        'While you start the brand project, three other clients are waiting. One needs revisions on a packaging design - round four. They keep changing the color palette and adding "just one more" element to the label. Another client wants social media templates for the month, which means twelve unique graphics sized for Instagram feed, stories, and LinkedIn. The third client asked for "a few changes" to their brochure, which turned out to be a full rewrite of the copy and a new layout.',
        'Between client work, there is the business side. Your portfolio has not been updated in months. The case studies for your last three projects exist only as screenshots on your desktop with no written context. Your Instagram has not been posted to in three weeks because creating content about design while doing design feels like an impossible time loop.',
        'You also need to name and organize the 847 files from last month\'s projects. The folder labeled "Client_X_Final_v3_FINAL_updated_REAL_FINAL" is not an exaggeration - it is Tuesday. And somewhere in your project queue is a brand guidelines document that was due last week, sitting at 30% complete because writing out all the specifications for color usage, typography rules, and logo clearspace takes longer than designing the identity itself.',
        'You became a graphic designer because you love solving visual problems and creating beautiful, functional work. Instead, you spend half your time interpreting vague briefs, managing revision cycles, writing copy for deliverables, and doing the administrative work that keeps a design business running.',
      ],
      highlight:
        'What if AI could expand the vague briefs, draft the case studies, generate the social copy, and organize the files - so you could spend your time on the creative work that clients actually pay for?',
      closingParagraph:
        'Not by designing for you. Not by replacing your creative eye. By handling the writing, organizing, and communicating that surrounds the design work - so you can stay in the creative zone where you do your best thinking.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is a creative operations tool, not a creative replacement',
          paragraphs: [
            'Here is the truth about AI and graphic design. AI cannot replicate your aesthetic sensibility. It cannot understand why that particular shade of green works for this specific brand. It cannot feel the tension between two typefaces and choose the one that serves the concept. It cannot look at a layout and know instinctively that moving one element 12 pixels to the left makes everything click. That is your craft and it is irreplaceable.',
            'What AI handles well is the text-based work that surrounds the creative work. Expanding vague client briefs into actionable creative directions. Writing the case studies that showcase your portfolio. Generating social media copy to accompany your templates. Drafting the brand guidelines document that explains your design decisions. These tasks consume 30-40% of a designer\'s week and AI can handle the first draft in minutes.',
          ],
        },
        {
          heading: 'Where AI fits in the design business',
          paragraphs: [
            'Think of AI as a creative copywriter and project coordinator who understands design language and can articulate visual concepts in words - but has never opened Illustrator. It can write about design eloquently and organize creative processes efficiently, but it cannot create the visuals.',
            'You receive a vague brief and AI expands it into a comprehensive creative direction with target audience insights, competitive context, and visual style exploration questions. You design the identity and AI writes the brand guidelines document. You finish a project and AI drafts the portfolio case study. The creative decisions are yours - AI handles the words around them.',
            'The designers gaining the most from AI are using it to close the gap between finishing the design work and delivering the complete package. Less time writing specs, more time designing. Less time on admin, more time in the creative zone.',
          ],
        },
      ],
      keyInsight:
        'Your creative eye + your design expertise + AI\'s writing and organizing speed = a more professional and efficient design business. AI handles the words and the logistics. You handle the visuals and the vision.',
    },

    ch3: {
      intro: 'Five tools that cover the core graphic design workflow. Practical, creative-focused, no bloat.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your creative brief and copywriting partner',
          description:
            'Expand client briefs, write case studies, generate social media copy, draft brand guidelines, and work through creative direction. Best for turning design thinking into written deliverables and client communication.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - best all-rounder',
          icon: 'chatgpt',
        },
        {
          name: 'Midjourney',
          role: 'Your visual exploration and mood board tool',
          description:
            'Generate concept imagery, mood board visuals, texture references, and color palette inspiration. Not for final deliverables, but invaluable for visual exploration and client presentation of creative directions.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Best for visual concept exploration',
          icon: 'midjourney',
        },
        {
          name: 'Canva AI',
          role: 'Your template and production accelerator',
          description:
            'AI-powered layout suggestions, background removal, text-to-image for quick mockups, and template variations. Speeds up production work for social media assets and marketing collateral.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for fast social and marketing assets',
          icon: 'canva',
        },
        {
          name: 'Claude',
          role: 'Your long-form writing and documentation specialist',
          description:
            'Excels at writing detailed brand guidelines, comprehensive case studies, project proposals, and client presentations. Handles long context well - paste entire briefs and project histories for thorough documentation.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for brand guidelines and case studies',
          icon: 'claude',
        },
        {
          name: 'Figma AI',
          role: 'Your design system and layout assistant',
          description:
            'AI features within Figma for generating design variations, auto-layout assistance, and component organization. Helpful for creating systematic design deliverables and maintaining consistency across assets.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential for systematic design work',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for brief expansion and copywriting, plus Midjourney for visual exploration. Add Canva AI for production speed and Figma AI for systematic design work. That combination covers concept, production, documentation, and communication.',
    },

    ch4: {
      intro:
        'Six systems that map directly to the work you do every week as a graphic designer. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'Client Brief Expansion',
          before:
            'A client sends a two-paragraph brief using words like "modern," "clean," and "professional." You spend an hour asking follow-up questions by email, waiting for responses, and trying to fill in the gaps yourself. Half the time you start designing based on assumptions and end up revising when those assumptions were wrong.',
          after:
            'Paste the client\'s brief into AI and get a comprehensive creative direction - expanded audience analysis, competitive context, visual style questions to ask the client, and potential creative approaches. You go into the kickoff call with informed questions instead of guesses.',
          flow: [
            'Receive the client brief and paste it into ChatGPT or Claude',
            'AI expands the brief with audience insights and creative direction options',
            'Review and select the questions worth asking the client',
            'Use the expanded brief in your kickoff call or follow-up email',
            'Refine the creative direction based on client responses',
          ],
          timeSaved: { without: '1-2 hours of back and forth', withAI: '15-20 minutes' },
        },
        {
          id: 2,
          name: 'Concept and Mood Board Development',
          before:
            'Before opening any design software, you need to establish a visual direction. You browse Pinterest, Dribbble, and Behance for hours collecting reference images. Then you try to articulate why each image matters to the concept - the color relationships, the typography choices, the compositional approach. Presenting a mood board without context usually leads to "I like this but not that" feedback that misses the point.',
          after:
            'AI generates descriptive language for your mood board concepts - why each visual choice supports the brand strategy, what emotional response it creates, and how the elements work together. Your mood boards go from image collections to strategic creative documents.',
          flow: [
            'Define the creative direction and key brand attributes',
            'Gather your visual references (or use Midjourney for concept imagery)',
            'Run the mood board description prompt with your visual choices',
            'AI generates strategic context for each visual direction',
            'Present mood boards with written rationale that guides client feedback',
          ],
          timeSaved: { without: '3-4 hours per concept', withAI: '45-60 minutes' },
        },
        {
          id: 3,
          name: 'Asset Naming and Organization',
          before:
            'After a project wraps, your files are scattered across working folders with names like "logo_v7_final2.ai" and "hero_image_REVISED.psd." Organizing and renaming everything for client delivery takes a tedious hour or more. Finding files months later for revisions becomes an archaeological dig.',
          after:
            'AI generates a complete file naming convention and folder structure based on your project type. You organize once, consistently, and finding anything later takes seconds instead of minutes.',
          flow: [
            'List the deliverables and file types for the project',
            'AI generates a naming convention and folder structure',
            'Rename and organize files following the convention',
            'Include the naming guide in the client delivery package',
            'Reuse the convention template for similar projects',
          ],
          timeSaved: { without: '1-2 hours per project', withAI: '15-20 minutes' },
        },
        {
          id: 4,
          name: 'Portfolio and Case Study Writing',
          before:
            'Your portfolio shows the work but does not tell the story. Writing case studies means recalling the project context, articulating the problem, explaining your process, and describing the results - for every project. Each case study takes 2-3 hours to write well, and your backlog of undocumented projects keeps growing.',
          after:
            'Describe the project to AI - the client, the problem, your approach, and the outcome. It drafts a compelling case study narrative that you refine with your voice. Projects get documented while they are still fresh.',
          flow: [
            'Gather project details - client, brief, your approach, results',
            'Run the case study narrative prompt with your project info',
            'AI drafts a structured case study with headline and sections',
            'Edit for your voice and add specific design insights',
            'Publish to your portfolio site or Behance',
          ],
          timeSaved: { without: '2-3 hours per case study', withAI: '30-45 minutes' },
        },
        {
          id: 5,
          name: 'Social Media Template Creation',
          before:
            'Clients need social media templates and you need to create your own content. For each client, that means designing 6-12 templates, writing suggested copy for each, and creating a usage guide. For your own marketing, it means designing posts and writing captions that showcase your work - which always falls to the bottom of the priority list.',
          after:
            'AI generates copy variations for every template, writes usage instructions for clients, and creates caption and hashtag sets for your own social content. You focus on the visual design while AI handles the words.',
          flow: [
            'Define the template types needed and brand voice',
            'Design the visual templates in your design tool',
            'Run the social post template prompt for copy and captions',
            'AI generates copy variations, hashtags, and usage notes',
            'Package templates with copy and deliver to the client',
          ],
          timeSaved: { without: '3-4 hours per template set', withAI: '1-1.5 hours' },
        },
        {
          id: 6,
          name: 'Client Presentation Preparation',
          before:
            'Presenting design work to clients requires more than showing mockups. You need to frame the creative rationale, explain your choices, anticipate objections, and guide feedback toward productive outcomes. Preparing a presentation with talking points takes 2-3 hours on top of the design work.',
          after:
            'Share your design approach and key decisions with AI. It structures a presentation narrative, generates talking points that explain design choices in client-friendly language, and prepares responses for common client feedback patterns.',
          flow: [
            'Describe your design solution and the decisions behind it',
            'AI structures a presentation with narrative flow and talking points',
            'Customize for your specific client and their communication style',
            'Prepare for likely feedback and revision requests',
            'Present with confidence knowing you have responses ready',
          ],
          timeSaved: { without: '2-3 hours per presentation', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts for design work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Client Brief Expansion',
          prompts: [
            {
              id: 'gd-p-1-1',
              title: 'Creative Brief Analysis',
              task: 'Expand a vague client brief into a comprehensive creative direction',
              prompt: `I am a graphic designer and I received this client brief. Help me expand it into a comprehensive creative direction.

Client brief:
[Paste the client's brief exactly as received]

Client industry: [industry]
Project type: [logo, brand identity, packaging, marketing collateral, etc.]
Budget tier: [to gauge scope expectations]

Analyze the brief and provide:
1. What the brief tells us (extract every usable detail)
2. What the brief does NOT tell us (gaps that need client input)
3. Target audience analysis - who is the end consumer and what matters to them
4. Competitive landscape - what visual approaches are common in this industry
5. Brand personality interpretation - translate their adjectives into visual language
   (e.g., "modern" could mean minimalist, geometric, sans-serif, whitespace-heavy)
6. Color direction suggestions (3 palette approaches with rationale)
7. Typography direction suggestions (3 type pairing approaches)
8. Visual style options (3 distinct creative directions to explore)
9. Questions to ask the client before starting (prioritized, top 10)
10. Red flags or scope concerns to address upfront

Write in language I can share with the client to guide the discovery conversation.`,
              result:
                'A comprehensive creative direction document with strategic questions for the client.',
              tip: 'Send the "questions to ask" section to the client before the kickoff call. Informed clients give better feedback from the start.',
            },
            {
              id: 'gd-p-1-2',
              title: 'Brand Positioning Research',
              task: 'Research competitive visual positioning for a brand project',
              prompt: `Help me research the competitive visual landscape for a brand design project.

Client: [brief description of the business]
Industry: [specific industry or niche]
Direct competitors: [list 3-5 if known]
Target market: [who they sell to]
Client's desired positioning: [how they want to be perceived]

Analyze:
1. Visual trends in this industry - what most brands look like (colors, type, imagery style)
2. For each named competitor:
   - Visual identity description (without seeing it - describe the typical approach)
   - Positioning in the market (premium, accessible, innovative, traditional)
   - Strengths and weaknesses of their visual approach
3. Opportunity gaps - visual territories that are underused in this space
4. Differentiation strategies - how the client can stand out visually
5. Industry-specific design considerations (regulations, conventions, cultural factors)
6. Audience expectations - what visual cues this target market responds to
7. Three distinct positioning angles with visual direction for each

Frame each positioning angle as: "If we go this direction, the brand will feel [X] and appeal to [Y] because [Z]."

This needs to inform my creative direction, not just describe what exists.`,
              result:
                'A competitive visual analysis with differentiation strategies and positioning angles.',
              tip: 'Run this in Perplexity for current competitive data, then refine the analysis in ChatGPT or Claude.',
            },
            {
              id: 'gd-p-1-3',
              title: 'Client Discovery Questions',
              task: 'Generate targeted discovery questions for a new design project',
              prompt: `Generate discovery questions for a new design project.

Project type: [logo, full brand identity, packaging, website design, marketing campaign, etc.]
Client industry: [industry]
What I know so far: [paste any information you already have]

Create a discovery questionnaire organized by category:

1. Business Understanding (5 questions)
   - Mission, values, unique selling proposition
   - Growth plans and where the brand is headed
2. Target Audience (5 questions)
   - Demographics, psychographics, buying behavior
   - How customers currently perceive the brand
3. Visual Preferences (5 questions)
   - Brands they admire (and WHY - not just which ones)
   - Colors, styles, or imagery they are drawn to vs. want to avoid
4. Competitive Context (3 questions)
   - Who they consider competition and how they want to differ
5. Practical Requirements (5 questions)
   - Deliverables, deadlines, format needs, budget for production
   - Existing brand assets that must be preserved
6. Success Criteria (3 questions)
   - How they will judge whether the design work succeeded
   - Who are the decision makers and what is the approval process

For each question, include a brief note on why it matters for the design process. Format as a questionnaire I can send to the client or use in a call.`,
              result:
                'A comprehensive discovery questionnaire covering all aspects needed for strong creative direction.',
              tip: 'Do not send all 26 questions at once. Pick the 10-12 most critical for this specific project type and use the rest as follow-ups.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Concept and Mood Board Development',
          prompts: [
            {
              id: 'gd-p-2-1',
              title: 'Mood Board Descriptions',
              task: 'Write strategic descriptions for mood board visual directions',
              prompt: `Write strategic descriptions for mood board concepts I am presenting to a client.

Client: [brief description]
Project: [what you are designing]
Brand attributes: [key personality traits the brand should convey]

I have [number] mood board directions. For each one, I will describe the visual approach:

Direction 1: [describe the visual style, colors, imagery, typography, overall feel]
Direction 2: [describe the visual style, colors, imagery, typography, overall feel]
Direction 3: [describe the visual style, colors, imagery, typography, overall feel]

For each direction, write:
1. Concept name (2-3 words that capture the essence)
2. Strategic rationale - why this visual direction supports the brand goals (3-4 sentences)
3. Emotional response it creates in the target audience
4. Color story - what the palette communicates (not just the names of the colors)
5. Typography rationale - what the type choices say about the brand
6. Imagery direction - what kind of photography or illustration style fits
7. Where this direction works best (applications that will shine)
8. Potential limitation - what this direction does not do well
9. Brands with similar visual energy (reference points the client may recognize)

Write in a way that helps the client evaluate concepts strategically, not just based on personal taste. Guide them toward feedback like "this aligns with our goals because..." rather than "I like the blue one."`,
              result:
                'Strategic mood board descriptions that elevate client presentations from taste-based to strategy-based.',
              tip: 'Present the strongest direction last. Clients remember the final option most clearly and it anchors the discussion.',
            },
            {
              id: 'gd-p-2-2',
              title: 'Color Palette Rationale',
              task: 'Write the strategic rationale for a color palette choice',
              prompt: `Write a strategic rationale for the following color palette.

Brand: [client name and what they do]
Target audience: [who the brand speaks to]
Brand personality: [key attributes]

Color palette:
- Primary: [color and hex code]
- Secondary: [color and hex code]
- Accent: [color and hex code]
- Neutrals: [colors and hex codes]

Write a color rationale document that includes:
1. Overall palette story - what emotional and psychological impression it creates
2. For each color:
   - Cultural and psychological associations relevant to the industry
   - How it supports the brand personality
   - Where it should be used (primary surfaces, CTAs, backgrounds, text)
   - What it should NOT be used for
3. Color relationships - why these colors work together
4. Accessibility notes - contrast ratios between key combinations
5. Industry context - how this palette positions the brand relative to competitors
6. Application guidelines:
   - Digital usage (RGB values, screen considerations)
   - Print usage (CMYK, Pantone equivalents)
   - Ratio guidance (60-30-10 or other distribution)
7. Extended palette suggestions for future growth

Write for a client audience. Make them understand why these specific colors, not just appreciate that they look good together.`,
              result:
                'A comprehensive color rationale document for client presentations and brand guidelines.',
              tip: 'Include this in your brand guidelines deliverable. Clients value designers more when they explain the thinking behind every choice.',
            },
            {
              id: 'gd-p-2-3',
              title: 'Creative Direction Comparison',
              task: 'Create a structured comparison of creative directions for client decision',
              prompt: `Create a structured comparison of creative directions to help my client choose.

Client: [brief description and project]
Number of directions: [how many you are presenting]

Direction details:
[For each direction, describe: visual style, color approach, typography, imagery, overall mood]

Create a comparison document with:
1. Side-by-side summary table:
   - Direction name
   - Visual approach (one sentence)
   - Best for (which brand goals it serves most)
   - Trade-off (what it sacrifices)
   - Audience resonance (who responds most to this style)

2. For each direction:
   - Strengths (3 points)
   - Limitations (2 points)
   - Applications where it shines vs. where it struggles
   - Longevity assessment - will this still work in 5 years?

3. Recommendation section:
   - Which direction I recommend and why
   - Hybrid possibilities - can elements from different directions be combined?
   - Decision criteria for the client to consider

4. Discussion guide:
   - Questions to ask the client as they evaluate
   - How to redirect if feedback becomes purely subjective
   - Framework for making the final decision as a team

Write this as a presentation companion. I will show the visuals - this provides the strategic narrative around them.`,
              result:
                'A structured creative direction comparison with strategic guidance for client decision-making.',
              tip: 'Having a clear recommendation shows confidence and leadership. Clients hire you for your opinion, not just options.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Asset Naming and Organization',
          prompts: [
            {
              id: 'gd-p-3-1',
              title: 'File Naming Convention',
              task: 'Create a file naming convention and folder structure for a design project',
              prompt: `Create a file naming convention and folder structure for a design project.

Project type: [brand identity, packaging, marketing campaign, web design, etc.]
Client: [client name or code]
Deliverables: [list all deliverables]
File types involved: [AI, PSD, PDF, PNG, SVG, INDD, etc.]
Team members: [just you, or multiple designers]

Create:
1. Naming convention format:
   - Structure: [client]_[project]_[asset-type]_[variant]_[version].[ext]
   - Rules for each segment (case, separator, abbreviations)
   - Version numbering system (v01, v02 for drafts; no version for finals)
   - How to handle revisions vs. new versions

2. Folder structure:
   - Root folder organization
   - Subfolder hierarchy (by deliverable type, by phase, or hybrid)
   - Where to store working files vs. client-ready exports
   - Where to store reference materials and client assets
   - Archive structure for completed projects

3. Examples:
   - 10 file name examples using the convention
   - Full folder tree showing where each example lives

4. Quick reference card:
   - Common abbreviations list
   - Decision tree: "If the file is ___, name it ___"
   - What to do when the client sends a revision request

5. Client delivery structure:
   - How to organize the final delivery folder
   - README file content for the client package

Make this practical for a [solo designer / small team]. It should be easy to follow, not bureaucratic.`,
              result:
                'A complete file organization system with naming conventions, folder structure, and delivery templates.',
              tip: 'Set this up at project start, not at the end. Name files correctly the first time and you never need to organize retroactively.',
            },
            {
              id: 'gd-p-3-2',
              title: 'Brand Asset Inventory',
              task: 'Create an inventory checklist of all brand assets to deliver',
              prompt: `Create a comprehensive brand asset inventory and delivery checklist.

Project type: [logo design, full brand identity, brand refresh]
Client: [type of business]
Deliverables agreed upon: [list what was scoped]

Create a complete asset inventory checklist:

1. Logo Files:
   - Primary logo (full color, one color, reversed, grayscale)
   - Secondary logo / logo mark
   - Favicon and app icon versions
   - File formats needed (SVG, PNG, PDF, EPS, AI)
   - Size variants (web, print, social media profile)
   - Clear space and minimum size specifications

2. Color Assets:
   - Primary palette with values (HEX, RGB, CMYK, Pantone)
   - Secondary and accent colors
   - Color application samples

3. Typography:
   - Font files or licensing links
   - Type hierarchy samples (headings, body, captions)
   - Web font implementation notes

4. Templates and Collateral:
   - Business card (print-ready files)
   - Letterhead and envelope
   - Email signature
   - Social media templates (profile, cover, post)
   - Presentation template
   - Any additional collateral scoped

5. Brand Guidelines Document:
   - Table of contents for the guidelines
   - Sections that need to be completed

6. Delivery Package:
   - Folder structure for client delivery
   - README or asset guide for the client
   - Backup copy location

Check off each item as you create it. Flag any items that are out of scope but should be recommended.`,
              result:
                'A comprehensive asset checklist ensuring nothing is missed in the final delivery.',
              tip: 'Share this checklist with the client at project kickoff so expectations are clear from day one.',
            },
            {
              id: 'gd-p-3-3',
              title: 'Project Archive Protocol',
              task: 'Create an end-of-project archiving and handoff process',
              prompt: `Create an end-of-project archiving and client handoff process.

Project type: [what was delivered]
Files involved: [list key file types and approximate count]
Client relationship: [one-time project or ongoing retainer]

Create:
1. Pre-archive checklist:
   - Final round of naming convention cleanup
   - Delete unused drafts and explorations (or move to separate archive)
   - Verify all final files are properly exported
   - Confirm all fonts are outlined in production files
   - Check all images are linked or embedded correctly
   - Verify print files are CMYK with correct bleed

2. Client handoff package:
   - What to include in the delivery folder
   - How to organize files for a non-designer client
   - Asset guide template (what each file is and when to use it)
   - Font licensing information and installation instructions
   - Print specifications for any physical deliverables
   - Digital asset specifications (sizes, formats, resolution)

3. Internal archive:
   - What to keep vs. what to delete
   - Folder structure for long-term storage
   - Project metadata to record (client, date, scope, notes, budget)
   - Where to store reference images and inspiration used
   - How to make the project findable in 2 years

4. Knowledge capture:
   - What worked well in this project (process note)
   - What would you do differently
   - Reusable templates or elements created
   - Portfolio-worthy deliverables to flag

Keep this practical. If archiving takes more than 30 minutes per project, it will not get done.`,
              result:
                'A complete project archiving and handoff protocol that keeps your files organized long-term.',
              tip: 'Archive on the same day you deliver. Once you start the next project, you will never go back to organize the last one.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Portfolio and Case Study Writing',
          prompts: [
            {
              id: 'gd-p-4-1',
              title: 'Case Study Narrative',
              task: 'Write a compelling portfolio case study for a completed project',
              prompt: `Write a portfolio case study for the following design project.

Project details:
- Client: [name or type of business - anonymize if needed]
- Industry: [sector]
- Project type: [logo, brand identity, packaging, campaign, etc.]
- Timeline: [how long the project took]

The story:
- The problem: [what challenge the client faced]
- The brief: [what they asked for]
- Your approach: [how you tackled it - research, exploration, iterations]
- Key design decisions: [the important creative choices and why you made them]
- The result: [what you delivered and any measurable outcomes]

Write a case study with:
1. Headline (compelling, not just "Brand Identity for X")
2. Subheadline (one sentence that captures the project essence)
3. The Challenge section (2-3 sentences - what the client needed and why it mattered)
4. The Approach section (3-4 sentences - your creative process, not step-by-step but strategic)
5. Key Decisions section (2-3 design choices explained in client-friendly language)
6. The Solution section (2-3 sentences - what you created and how it solves the original problem)
7. The Impact section (results, client feedback, or metrics if available)
8. Project details sidebar (client, role, deliverables, timeline, tools used)

Write for a potential client audience. Show your thinking process, not just the output. Keep total length to 300-400 words. Every sentence should justify your design fee.`,
              result:
                'A polished portfolio case study ready to publish alongside project images.',
              tip: 'Write case studies within a week of project completion when the details are fresh. Batch write using this prompt.',
            },
            {
              id: 'gd-p-4-2',
              title: 'Portfolio Project Description',
              task: 'Write a concise portfolio project description for social media or gallery use',
              prompt: `Write concise portfolio project descriptions for my design work.

I need descriptions for [number] projects. For each project:

Project [number]:
- Client type: [industry/business type]
- Project type: [what was designed]
- What makes it interesting: [the design challenge or unique aspect]
- Key visual elements: [describe the main design features]

For each project, write:
1. Gallery description (2-3 sentences for Behance, Dribbble, or portfolio site)
   - Lead with the interesting challenge, not the deliverable list
   - Mention the strategic thinking, not just the aesthetic
   - End with the outcome or impact

2. Instagram caption version (under 150 words)
   - Hook line that stops the scroll
   - Brief project context
   - One insight about the design process
   - Call to action
   - 5-7 relevant hashtags

3. One-liner (for portfolio grids or thumbnails)
   - Format: [Action verb] + [what] + [for whom] + [why it matters]

Write in first person. Keep the tone confident but not arrogant. Show expertise through specificity, not through self-congratulation.`,
              result:
                'Multiple format project descriptions ready for portfolio, social media, and gallery use.',
              tip: 'Batch process all your recent projects at once. Consistency in writing style across your portfolio creates a professional impression.',
            },
            {
              id: 'gd-p-4-3',
              title: 'Designer Bio and About Page',
              task: 'Write a professional designer bio and about page for your portfolio',
              prompt: `Write a professional designer bio and about page.

About me:
- Years of experience: [number]
- Specialization: [what you focus on - brand identity, packaging, digital design, etc.]
- Industries you work with most: [sectors]
- Design philosophy or approach: [how you think about design]
- Notable clients or projects: [if you want to mention them]
- Education or credentials: [relevant background]
- Location: [where you are based]
- What makes you different: [your unique angle or value proposition]

Write:
1. Full bio (150-200 words) - for your about page
   - Open with what you do and who you do it for
   - Include your design philosophy in one sentence
   - Mention experience and specialization naturally
   - Close with something human (not just professional)

2. Short bio (50-75 words) - for speaker bios, guest posts, directory listings

3. One-liner bio (under 20 words) - for social media profiles

4. About page structure:
   - Section headings and content flow
   - What to include beyond the bio (values, process overview, ideal client description)
   - Call to action for the about page

Write in first person. Sound like a real person, not a corporate website. Confident, specific, and approachable.`,
              result:
                'Multiple bio formats plus an about page structure ready for your portfolio site.',
              tip: 'Update your bio every 6 months. Your experience, focus, and positioning evolve - your bio should too.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Social Media Template Creation',
          prompts: [
            {
              id: 'gd-p-5-1',
              title: 'Social Post Templates',
              task: 'Generate copy and content ideas for social media design templates',
              prompt: `Generate copy and content ideas for social media templates.

Client: [business name and what they do]
Brand voice: [tone and personality descriptors]
Target audience: [who sees these posts]
Platforms: [Instagram, LinkedIn, Facebook, etc.]
Template types needed: [quotes, promotions, tips, announcements, testimonials, etc.]
Number of templates: [how many]

For each template type, provide:
1. Template category name
2. Content framework (what goes where on the template)
3. Three copy variations:
   - Headline text (for the graphic itself - keep short)
   - Supporting text (if the template has a subheadline)
   - Caption text (for the post caption, including CTA)
4. Character limits for each text element (based on design readability)
5. Image or visual direction suggestion
6. Hashtag set (5-8 hashtags per post type)

Also provide:
- A content calendar suggestion (which template types to post on which days)
- Copy guidelines for the client to write their own variations
- Tone examples - one sentence showing what sounds right vs. wrong for this brand

Write copy that fits inside design templates. Short, punchy, visual-friendly. Not essay paragraphs.`,
              result:
                'Complete copy sets for social media templates with captions, hashtags, and a content calendar.',
              tip: 'Give the client the copy guidelines and tone examples so they can create new content independently after you deliver.',
            },
            {
              id: 'gd-p-5-2',
              title: 'Design Process Social Content',
              task: 'Create social media content showcasing your design process',
              prompt: `Create social media content ideas that showcase my design process and expertise.

My niche: [brand identity, packaging, web design, etc.]
Platforms I am active on: [Instagram, LinkedIn, Behance, etc.]
Content frequency: [how often I want to post]
Current follower size: [approximate, for content calibration]

Generate 15 content ideas across these categories:

Process posts (5 ideas):
- Show the work behind the work
- For each: concept, what to show visually, caption text (under 150 words)

Educational posts (5 ideas):
- Share design knowledge or tips relevant to your audience
- For each: topic, visual format suggestion, caption text

Behind-the-scenes posts (5 ideas):
- Make the business of design relatable and human
- For each: what to share, how to frame it, caption text

For every post:
- Hook line (first sentence that stops the scroll)
- Body text (short, conversational)
- Call to action
- Hashtag set (5-7)
- Best time/day to post (based on design audience engagement patterns)

Write in my voice as a designer sharing with peers and potential clients. Not salesy. Not preachy. Just a designer showing how the work gets done.`,
              result:
                'A month of social content ideas with captions ready to pair with your design visuals.',
              tip: 'Process posts consistently outperform finished work posts. People follow designers for the "how," not just the "what."',
            },
            {
              id: 'gd-p-5-3',
              title: 'Client Social Media Guidelines',
              task: 'Create a social media usage guide for client templates',
              prompt: `Create a social media usage guide to deliver alongside the design templates.

Client: [who the client is]
Templates delivered: [list the template types and formats]
Brand guidelines summary: [key brand rules - colors, fonts, tone]
Client's design skill level: [non-designer, basic Canva user, etc.]

Create a usage guide that includes:
1. Template overview:
   - What each template is for
   - When to use each type (content calendar integration)
   - Which platforms each template is sized for

2. How to edit templates:
   - Step-by-step for the tool they will use (Canva, Figma, etc.)
   - Which elements they CAN change (text, photos)
   - Which elements they should NOT change (colors, fonts, layout structure, logo placement)

3. Photo guidelines:
   - What kinds of photos work well with these templates
   - Photo quality requirements
   - How to crop or position photos in template frames
   - Free stock photo sources if they need them

4. Copy guidelines:
   - Character limits for each text area
   - Tone and voice reminders
   - Words and phrases that fit the brand vs. ones to avoid

5. Common mistakes to avoid:
   - Top 5 ways clients accidentally break their own brand (with examples)

6. Quick reference card:
   - One-page summary of the do's and don'ts

Write for a non-designer. Be specific and assume they will not read a long document - use headings, bullet points, and visuals where possible.`,
              result:
                'A client-friendly template usage guide that protects brand consistency after handoff.',
              tip: 'Including a usage guide with your templates is a differentiator. Clients remember designers who make their lives easier.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Client Presentation Preparation',
          prompts: [
            {
              id: 'gd-p-6-1',
              title: 'Client Deck Talking Points',
              task: 'Generate talking points for a client design presentation',
              prompt: `Generate talking points for presenting design work to a client.

Client: [who they are]
Project: [what was designed]
Presentation format: [in-person, video call, recorded walkthrough]
Audience: [who will be in the room - decision makers, team members, etc.]

Design work being presented:
- Concepts: [how many directions]
- For each concept: [brief description of the approach]
- Key design choices: [the decisions that define each concept]
- Your recommendation: [which direction you prefer and why]

Create talking points for:
1. Opening (30 seconds):
   - How to re-ground everyone in the project goals
   - Transition to the work

2. For each concept:
   - Introduction line (how to frame this direction in one sentence)
   - 3-4 talking points explaining the design decisions in non-designer language
   - How this direction serves the brand strategy
   - Where this direction would shine in application

3. Comparison moment:
   - How to position the options relative to each other
   - How to present your recommendation without dismissing other options

4. Feedback guidance:
   - How to ask for feedback productively
   - Phrases that redirect "I don't like the color" to "Does this color support the brand goals?"
   - How to handle "Can we combine concepts?" requests

5. Closing:
   - Clear next steps
   - Timeline reminder
   - Decision needed and by when

Write as bullet-point talking points, not a script. Natural delivery, not a recitation.`,
              result:
                'Presentation talking points with feedback management strategies and transition phrases.',
              tip: 'Rehearse the transitions between concepts out loud once. The flow matters more than memorizing every talking point.',
            },
            {
              id: 'gd-p-6-2',
              title: 'Revision Round Management',
              task: 'Structure revision feedback and manage scope for client revisions',
              prompt: `Help me structure and manage a revision round for a design project.

Project: [what was designed]
Revision round: [which round - first, second, third]
Revisions included in scope: [how many rounds are in the contract]
Client feedback received:
[Paste the client's revision requests exactly as received]

Analyze the feedback and create:
1. Feedback categorization:
   - Changes within scope (standard revisions)
   - Changes that are new additions (scope creep)
   - Contradictory feedback (conflicts with previous direction or between decision makers)
   - Subjective vs. objective feedback

2. For each in-scope change:
   - Clear action item (what specifically to change)
   - Estimated time
   - Any questions to clarify before proceeding

3. For each out-of-scope item:
   - Why it is out of scope (reference the original brief or contract)
   - Polite but professional language to communicate this to the client
   - Estimated cost if they want to add it

4. For contradictory feedback:
   - What the contradiction is
   - A question or recommendation to resolve it

5. Response email draft:
   - Acknowledge the feedback professionally
   - Confirm what you will address in this round
   - Flag out-of-scope items with your recommendation
   - Ask clarifying questions
   - Provide timeline for the next version

Keep the tone professional, firm on boundaries, and collaborative. Protect the scope without being adversarial.`,
              result:
                'A structured revision plan with scope management and a professional client response draft.',
              tip: 'Categorize feedback BEFORE responding. Reacting to everything as if it is in scope is how projects lose profitability.',
            },
            {
              id: 'gd-p-6-3',
              title: 'Design Rationale Document',
              task: 'Write a design rationale document explaining creative choices',
              prompt: `Write a design rationale document to accompany a creative deliverable.

Deliverable: [what was designed - logo, brand identity, packaging, etc.]
Client: [who it is for]

Design choices to explain:
- Concept: [the overall creative concept and what inspired it]
- Color choices: [what colors and why]
- Typography choices: [what typefaces and why]
- Imagery/illustration style: [what style and why]
- Layout approach: [how elements are arranged and why]
- Any unique elements: [symbols, patterns, textures, etc.]

Create a design rationale document with:
1. Concept overview (2-3 sentences - the big idea)
2. Visual identity narrative - how all elements work together to tell the brand story
3. For each design element:
   - The choice made
   - Why this choice (strategic rationale, not "because it looks good")
   - How it connects to the brand values or target audience
   - What alternatives were considered and why this was selected
4. Application vision - how this design system will work across touchpoints
5. Emotional impact - what feeling this creates in the target audience
6. Longevity consideration - why this design will age well

Write for a client audience. Help them see the strategic thinking behind every creative decision. This should make them feel confident that every choice is intentional and informed.`,
              result:
                'A design rationale document that demonstrates strategic thinking behind creative choices.',
              tip: 'Include this with every major deliverable. Clients who understand the "why" approve faster and request fewer arbitrary changes.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what your time savings look like when AI handles the writing and organizing around your design work.',
      timeTable: [
        {
          task: 'Client brief expansion',
          without: '1-2 hours of back and forth',
          withAI: '15-20 minutes',
          saved: '45-100 min each',
        },
        {
          task: 'Mood board presentation prep',
          without: '3-4 hours per concept',
          withAI: '45-60 minutes',
          saved: '2-3 hrs each',
        },
        {
          task: 'File naming and organization',
          without: '1-2 hours per project',
          withAI: '15-20 minutes',
          saved: '45-100 min each',
        },
        {
          task: 'Portfolio case studies',
          without: '2-3 hours per project',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs each',
        },
        {
          task: 'Social media copy for templates',
          without: '3-4 hours per template set',
          withAI: '1-1.5 hours',
          saved: '2-2.5 hrs each',
        },
        {
          task: 'Client presentation prep',
          without: '2-3 hours per presentation',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs each',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '20-35 hrs/month',
      },
      sections: [
        {
          heading: 'The Shift',
          paragraphs: [
            'The best graphic designers are not the fastest at production. They are the ones who think deeply about creative problems, build strong client relationships, and deliver work that is both beautiful and strategically sound. But the writing, organizing, and presenting that surrounds the creative work eats into the time available for all of that.',
            'AI does not make you a better designer. It frees you from the non-design work that keeps you from being the designer you already are.',
          ],
        },
        {
          heading: 'The Opportunity',
          paragraphs: [
            'Every hour saved on writing case studies and organizing files is an hour you can spend on creative exploration, client relationships, or growing your business. Those are the activities that separate busy designers from successful ones. AI is how you make that shift without working more hours.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Expand your next client brief with AI. See how much clearer the project becomes from day one. Build from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your design workflow. Follow the plan, check off each step, and by the end of the week you will have a faster way to handle everything around the design work.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'gd-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'gd-1-2', label: 'Explore Midjourney for visual concept exploration' },
            { id: 'gd-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Expand a Brief',
          duration: '15 min',
          items: [
            {
              id: 'gd-2-1',
              label: 'Take your current or most recent client brief',
            },
            {
              id: 'gd-2-2',
              label: 'Run the Creative Brief Analysis prompt and see the expanded direction',
            },
            {
              id: 'gd-2-3',
              label: 'Note how much clearer the project scope becomes',
            },
          ],
        },
        {
          day: 3,
          title: 'Write a Case Study',
          duration: '20 min',
          items: [
            {
              id: 'gd-3-1',
              label: 'Pick your best recent project that is not in your portfolio yet',
            },
            {
              id: 'gd-3-2',
              label: 'Run the Case Study Narrative prompt with the project details',
            },
          ],
        },
        {
          day: 4,
          title: 'Prepare a Presentation',
          duration: '15 min',
          items: [
            {
              id: 'gd-4-1',
              label: 'Run the Client Deck Talking Points prompt for your next client meeting',
            },
            {
              id: 'gd-4-2',
              label: 'Practice the opening and transitions before the actual presentation',
            },
          ],
        },
        {
          day: 5,
          title: 'Organize Your Files',
          duration: '20 min',
          items: [
            {
              id: 'gd-5-1',
              label: 'Run the File Naming Convention prompt for your project type',
            },
            {
              id: 'gd-5-2',
              label: 'Apply the naming convention to your current project files',
            },
          ],
        },
        {
          day: 6,
          title: 'Create Social Content',
          duration: '15 min',
          items: [
            {
              id: 'gd-6-1',
              label: 'Run the Design Process Social Content prompt for your own marketing',
            },
            {
              id: 'gd-6-2',
              label: 'Pick 2-3 post ideas and schedule them',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'gd-7-1',
              label: 'What worked this week? Which prompts will you keep using?',
            },
            {
              id: 'gd-7-2',
              label: 'Share this guide with a designer friend who could benefit',
            },
            {
              id: 'gd-7-3',
              label: 'Pick one system to make a permanent part of your workflow',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
