import type { WorkbookData } from './types'

export const architectsData = {
  professionId: 'architects',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Architects',
  heroDescription:
    'Everything you need to start using AI in your architecture practice - with real tools, workflows, and prompts for briefs, compliance, specs, and presentations.',

  chapters: {
    ch1: {
      paragraphs: [
        'You arrive at the office to find three emails from a client asking for revisions to a project brief you thought was finalized last week. There is a zoning variance hearing in 10 days and you still need to verify setback requirements for the revised massing. Your spec writer is out sick and 6 CSI sections are due to the contractor by Friday. The sustainability consultant wants your LEED checklist by end of day.',
        'Between lunch and a site visit, you need to draft a fee proposal for a new mixed-use project, write a design narrative for a competition submission, and respond to 14 RFIs from the general contractor. Your intern asks how to research the latest energy code amendments. You realize you are also the one who has to figure that out.',
        'You became an architect because you love designing buildings that shape how people live, work, and move through space. Instead, you spend 70% of your day writing, researching, coordinating, and chasing compliance - tasks that keep the project moving but rarely involve actual design.',
        'The irony is brutal. The profession that most depends on creative thinking leaves almost no time for it. Design reviews get squeezed into 30-minute windows between document deadlines. The real design work happens after hours, if it happens at all.',
      ],
      highlight:
        'What if the research, writing, and compliance work took half the time - and you got those hours back for design?',
      closingParagraph:
        'Not replacing your judgment or your design sensibility. Just removing the friction between your ideas and the documents that bring them to life.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to design your building. It will not replace your understanding of site context, spatial relationships, material performance, or the thousand small decisions that make a building work for the people who use it. It does not understand building science the way you do. And it certainly will not sign and seal your drawings.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most knowledgeable research assistant you have ever had. It has read every building code, every CSI MasterFormat section, every LEED reference guide, and every AIA contract template. It never forgets a detail. It never gets tired of looking things up.',
            'Need to research setback requirements for a specific zoning district? AI summarizes the relevant code sections in 90 seconds. Need a first draft of a project narrative for a design competition? Done in 2 minutes. Need to compare three roofing assemblies for thermal performance? AI pulls the data and formats the comparison while you refill your coffee.',
            'The key insight: AI handles the information retrieval and first-draft writing. You handle the judgment, the design decisions, and the professional responsibility. That division of labor is what makes it powerful.',
          ],
        },
        {
          heading: 'Why architects have a unique advantage',
          paragraphs: [
            'You already think in systems. You understand how a building works as an integrated whole - structure, envelope, mechanical, life safety, accessibility. That systems thinking is exactly what makes you effective with AI.',
            'When non-architects use AI for building-related questions, they accept the first answer. When architects use AI, they know which follow-up questions to ask, which code exceptions apply, and which details need verification. Your professional knowledge turns AI from a search engine into a genuine productivity multiplier.',
          ],
        },
      ],
      keyInsight:
        'Your design expertise + AI\'s research speed = more time for the work that actually requires an architect. AI handles the documentation grind. You handle the design thinking that no algorithm can replicate.',
    },

    ch3: {
      intro: 'Five tools that cover the core of what architects need from AI. Start with the first two and build from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and research workhorse',
          description:
            'Project briefs, code research, specification drafts, design narratives, client correspondence, and RFI responses',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for all text-based tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form document partner',
          description:
            'Detailed specifications, lengthy design narratives, sustainability reports, and nuanced code analysis',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long documents and detailed analysis',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your code and product research engine',
          description:
            'Building code lookups, product specifications, material data, zoning research with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for source-backed research',
          icon: 'perplexity',
        },
        {
          name: 'Midjourney',
          role: 'Your concept visualization tool',
          description:
            'Early-stage design concepts, massing studies, material palette explorations, presentation imagery',
          cost: 'freemium',
          difficulty: 'medium',
          verdict: 'Add for design exploration and presentations',
          icon: 'midjourney',
        },
        {
          name: 'Notion AI',
          role: 'Your project documentation system',
          description:
            'Meeting notes, project trackers, RFI logs, submittal schedules, and team coordination documents',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when managing multiple projects',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing tasks and Perplexity for code research. That combination handles 80% of your AI needs. Add Midjourney for visualization and Notion AI for project management when you are ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your real architecture workflow. Each system eliminates hours of research and writing time. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Project Brief Development',
          before:
            'You gather notes from the client kickoff meeting, review site documents, pull zoning information, and start writing a brief that tries to capture program requirements, site constraints, budget parameters, and design goals. It takes a full day and three rounds of client feedback to get it right.',
          after:
            'You feed AI your meeting notes and site data. It generates a structured project brief with program summary, site analysis outline, zoning constraints, preliminary schedule, and budget framework. You review, refine, and send a polished brief in 2 hours instead of 2 days.',
          flow: [
            'Gather client meeting notes, site survey, and zoning data',
            'Feed AI the raw information with the project brief prompt',
            'AI generates a structured brief with all key sections',
            'Review for accuracy and add design intent language',
            'Send to client for confirmation',
          ],
          timeSaved: { without: '6-10 hours', withAI: '1-2 hours' },
        },
        {
          id: 2,
          name: 'Code Compliance Research',
          before:
            'You open the IBC, the local amendments, the zoning ordinance, and the accessibility standards. You cross-reference occupancy classifications, allowable heights, setback requirements, and egress calculations. Two hours later, you are still not sure you caught everything.',
          after:
            'You describe the project type, location, and construction parameters. AI pulls the relevant code sections, summarizes the requirements, flags potential conflicts, and organizes everything into a compliance checklist. You verify the critical items and move on.',
          flow: [
            'Define the project parameters - type, location, occupancy, construction type',
            'Run the code compliance prompt in ChatGPT or Perplexity',
            'AI generates a structured summary of applicable requirements',
            'Verify key items against the actual code sections',
            'Export as a compliance checklist for the project file',
          ],
          timeSaved: { without: '2-4 hours per code area', withAI: '20-30 minutes' },
        },
        {
          id: 3,
          name: 'Specification Writing',
          before:
            'You open the office master spec, scroll to the relevant CSI section, and start customizing it for this project. Product selections need updating. Performance criteria need adjusting. You check manufacturer websites for current data. Each section takes 1-3 hours depending on complexity.',
          after:
            'AI generates a draft specification section with current product references, performance criteria, and quality assurance requirements. You review, select the right products for your project, and finalize. What used to take an afternoon takes 30 minutes.',
          flow: [
            'Identify the CSI section and project-specific requirements',
            'Run the specification writing prompt with project details',
            'AI generates a complete section draft in MasterFormat structure',
            'Review product selections and performance criteria',
            'Coordinate with consultants and finalize',
          ],
          timeSaved: { without: '1-3 hours per section', withAI: '20-40 minutes' },
        },
        {
          id: 4,
          name: 'Design Narrative Creation',
          before:
            'You stare at a blank document trying to articulate why your design decisions matter. The client wants to understand the concept. The competition jury wants a compelling story. The planning board wants a clear rationale. Writing the narrative takes longer than the design itself.',
          after:
            'You describe your design intent, key moves, material choices, and site response. AI writes a polished narrative that connects your decisions to the project context. You edit for precision and voice. First draft in 5 minutes instead of 2 hours.',
          flow: [
            'List your key design decisions, material palette, and site response',
            'Run the design narrative prompt with project context',
            'AI generates a structured narrative with concept, rationale, and vision',
            'Refine the language to match your design philosophy',
            'Adapt for the specific audience - client, jury, or planning board',
          ],
          timeSaved: { without: '2-4 hours', withAI: '30-45 minutes' },
        },
        {
          id: 5,
          name: 'Client Proposal and Presentation',
          before:
            'A new project inquiry comes in. You need a fee proposal by Thursday. That means scoping the work, estimating hours by phase, writing the approach narrative, defining deliverables, listing exclusions, and formatting it all into something that looks professional. Most of Wednesday disappears.',
          after:
            'AI drafts a complete proposal - scope of services, phase descriptions, fee structure, schedule, deliverables, and exclusions. You adjust the fees, customize the approach, and send a polished proposal in 2 hours. The rest of Wednesday is yours.',
          flow: [
            'Define the project scope, size, type, and client expectations',
            'Run the fee proposal prompt with your billing rates and phase structure',
            'AI generates a complete proposal draft with all sections',
            'Adjust fees, customize the approach narrative, add project-specific details',
            'Format and send',
          ],
          timeSaved: { without: '4-8 hours', withAI: '1-2 hours' },
        },
        {
          id: 6,
          name: 'Sustainability Analysis',
          before:
            'The client wants LEED certification but is not sure which level is achievable. You pull up the LEED scorecard, review each credit category, cross-reference with the project scope, and try to estimate which credits are realistic. It is a full-day exercise that requires coordination with three consultants.',
          after:
            'AI generates a preliminary LEED credit analysis based on your project parameters. It identifies likely credits, marginal credits, and credits that do not apply. You use this as a starting framework for consultant coordination instead of building it from scratch.',
          flow: [
            'Define the project type, location, size, and sustainability goals',
            'Run the sustainability analysis prompt',
            'AI generates a credit-by-credit assessment with recommendations',
            'Review with the sustainability consultant for accuracy',
            'Use as the basis for your sustainability strategy document',
          ],
          timeSaved: { without: '6-10 hours', withAI: '1-2 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every core architecture task. Click to reveal, fill in the brackets, and let AI handle the first draft.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Project Briefs',
          prompts: [
            {
              id: 'ar-p-1-1',
              title: 'Project Program Generator',
              task: 'Create a detailed project program from client meeting notes',
              prompt: `Generate a detailed architectural project program based on the following information.

Client meeting notes:
[Paste your notes from the kickoff meeting]

Project type: [e.g., mixed-use residential, K-12 school, medical office building]
Approximate square footage: [total SF or range]
Site location: [city, state, and any known zoning district]
Budget range: [if known]

Create a program document that includes:
1. Project overview (2-3 sentences summarizing the project)
2. Space program table - list every required space with:
   - Room name
   - Approximate square footage
   - Adjacency requirements
   - Special requirements (ceiling height, MEP, acoustics, daylighting)
3. Site requirements summary (parking, setbacks, access, utilities)
4. Preliminary schedule milestones (SD, DD, CD, permit, construction)
5. Key design priorities from the client's perspective
6. Open questions that need answers before schematic design

Format as a clean document with headers and tables. Flag any assumptions you made.`,
              result: 'A structured project program ready for client review and team kickoff.',
              tip: 'The more detail you paste from your meeting notes, the better the output. Voice-record your client meetings and paste the transcription for best results.',
            },
            {
              id: 'ar-p-1-2',
              title: 'Site Analysis Summary',
              task: 'Generate a site analysis document from survey and zoning data',
              prompt: `Write a site analysis summary for an architectural project.

Site address: [full address]
Zoning district: [district code and name]
Lot size: [dimensions and area]
Existing conditions: [describe what is on the site now]
Topography: [flat, sloped, any notable features]
Adjacent properties: [describe what surrounds the site]
Known utilities: [water, sewer, electric, gas - locations if known]

Research and summarize:
1. Zoning requirements - setbacks, height limits, FAR, lot coverage, parking ratios
2. Site access - vehicular and pedestrian entry points, existing curb cuts
3. Environmental considerations - flood zone, wetlands, tree preservation, soil conditions if known
4. Solar orientation - primary facade exposure and daylighting implications
5. Context analysis - neighborhood character, scale of adjacent buildings, street patterns
6. Opportunities and constraints - what the site allows and what it limits

Format as a professional site analysis document. Note where additional information or surveys are needed.`,
              result: 'A comprehensive site analysis summary to anchor schematic design.',
              tip: 'Run this in Perplexity for zoning and environmental data backed by sources. Follow up in ChatGPT or Claude for the narrative portions.',
            },
            {
              id: 'ar-p-1-3',
              title: 'Client Questionnaire Generator',
              task: 'Create a detailed client questionnaire for project scoping',
              prompt: `Generate a comprehensive client questionnaire for a [project type] project.

Context:
- Project type: [e.g., single-family residence, corporate office, restaurant, etc.]
- Client type: [private owner, developer, institution, etc.]
- Preliminary scope: [rough description of what they want]

Create a questionnaire organized by category:
1. Project vision (5-7 questions about goals, inspiration, priorities)
2. Program and space needs (8-10 questions about specific rooms, sizes, relationships)
3. Site and context (5-6 questions about the site, neighbors, regulations they know about)
4. Budget and schedule (4-5 questions about budget range, timeline expectations, phasing)
5. Aesthetic preferences (5-6 questions about style, materials, examples they admire)
6. Technical requirements (5-7 questions about systems, sustainability, special equipment)
7. Process preferences (3-4 questions about communication style, decision-making, review process)

For each question:
- Write it in plain language the client can understand
- Include a brief note to the architect about why this question matters

End with a section for additional comments and a prioritization exercise - ask them to rank their top 5 project priorities.`,
              result: 'A professional client questionnaire that captures everything you need before starting design.',
              tip: 'Send this before the first meeting so the client has time to think. Their written answers are often more thoughtful than their in-meeting responses.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Code Compliance',
          prompts: [
            {
              id: 'ar-p-2-1',
              title: 'Zoning Requirements Research',
              task: 'Research and summarize zoning requirements for a specific site',
              prompt: `Research the zoning requirements for the following project site.

Location: [city, state]
Zoning district: [code if known, or describe the area]
Proposed use: [e.g., multifamily residential, retail, mixed-use]
Proposed building: [stories, approximate height, approximate footprint]
Lot size: [area and dimensions]

Summarize the following zoning requirements:
1. Permitted uses - is the proposed use allowed by right, by special permit, or not permitted?
2. Dimensional requirements:
   - Maximum building height (feet and stories)
   - Front, side, and rear setbacks
   - Maximum lot coverage
   - Maximum FAR (floor area ratio)
3. Parking requirements:
   - Required spaces by use type
   - Bicycle parking requirements
   - Loading requirements
4. Open space requirements
5. Design standards - any specific requirements for facade materials, articulation, screening
6. Signage regulations
7. Any overlay districts or special requirements that apply to this location

Flag any areas where the proposed project may need a variance or special permit. Note which items need verification with the local planning department.`,
              result: 'A clear zoning summary that identifies requirements and potential issues early.',
              tip: 'Use Perplexity for this - it provides source links you can verify. Always confirm critical setback and height numbers against the actual ordinance before relying on them.',
            },
            {
              id: 'ar-p-2-2',
              title: 'Building Code Summary',
              task: 'Generate a building code analysis for a specific project',
              prompt: `Generate a building code analysis summary for the following project.

Building type: [describe the project]
Occupancy group(s): [if known, or describe uses and AI will classify]
Number of stories: [above and below grade]
Building area per floor: [approximate SF]
Construction type: [if known, or say "recommend"]
Location: [city, state - for local amendments]
Sprinklered: [yes / no / TBD]

Analyze and summarize:
1. Occupancy classification - primary and incidental uses
2. Construction type analysis - allowable height and area per IBC Table 504.3 and 504.4
3. Fire separation requirements between occupancies
4. Means of egress:
   - Required number of exits per floor
   - Maximum travel distance
   - Common path of egress travel limits
   - Required stair width calculations
5. Accessibility requirements:
   - Accessible route requirements
   - Accessible parking count
   - Accessible restroom requirements
6. Fire protection requirements - sprinkler and alarm systems
7. Plumbing fixture count (per IPC)

Present as a code analysis summary with IBC section references. Flag items that need consultant input.`,
              result: 'A structured code analysis that covers the major compliance areas for your project.',
              tip: 'This gives you a strong starting framework. Always verify occupancy classifications and egress calculations with your own code review - AI can miss local amendments.',
            },
            {
              id: 'ar-p-2-3',
              title: 'Accessibility Compliance Checklist',
              task: 'Generate an ADA and accessibility compliance checklist',
              prompt: `Create an accessibility compliance checklist for the following project.

Project type: [describe the building]
Occupancy: [classification]
Location: [state - for state-specific requirements beyond ADA]
New construction or renovation: [specify]
If renovation - scope of work: [describe what is being altered]

Generate a comprehensive checklist covering:

1. Site and exterior:
   - Accessible route from parking to entrance
   - Accessible parking spaces (count and dimensions)
   - Curb ramps and crosswalks
   - Signage at accessible features

2. Building entrance and circulation:
   - Accessible entrance requirements
   - Door hardware and clearances
   - Elevator requirements (if applicable)
   - Corridor widths and passing spaces

3. Restrooms:
   - Accessible stall dimensions and clearances
   - Fixture heights and reach ranges
   - Grab bar locations and specifications
   - Signage requirements

4. Common spaces:
   - Assembly area wheelchair spaces and companion seats
   - Accessible counters and service areas
   - Drinking fountain requirements
   - Kitchen and break room clearances

5. Dwelling units (if applicable):
   - Type A unit requirements and count
   - Type B unit requirements and count
   - Adaptable features

Format as a checklist with code references (ADA Standards, ICC A117.1, and state-specific codes). Include dimensions for key requirements.`,
              result: 'A detailed accessibility checklist with specific dimensional requirements and code references.',
              tip: 'Check your state code - many states have accessibility requirements that exceed ADA minimums. California, Texas, and New York are common examples.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Specifications',
          prompts: [
            {
              id: 'ar-p-3-1',
              title: 'CSI Specification Section Draft',
              task: 'Draft a specification section in CSI MasterFormat',
              prompt: `Draft a specification section in CSI MasterFormat structure.

Section number: [e.g., 07 21 00 - Thermal Insulation]
Project type: [describe the building]
Performance requirements: [specific R-values, fire ratings, or other criteria]
Preferred products or manufacturers: [list any, or say "provide options"]
Quality level: [standard, mid-range, high-performance]

Write the complete specification section with:

Part 1 - General:
- Summary of work included in this section
- Related sections references
- References (ASTM, UL, or other applicable standards)
- Submittals required (product data, samples, shop drawings)
- Quality assurance requirements
- Delivery, storage, and handling
- Warranty requirements

Part 2 - Products:
- Acceptable manufacturers (minimum 3)
- Product requirements with performance criteria
- Material specifications with applicable standards
- Accessories and related materials

Part 3 - Execution:
- Examination of substrates
- Preparation requirements
- Installation methods
- Quality control and testing
- Cleaning and protection
- Closeout requirements

Use standard specification language. Include [brackets] for project-specific information the architect needs to fill in. Reference current edition standards.`,
              result: 'A complete specification section draft ready for customization.',
              tip: 'Always verify product availability and current standard editions before finalizing. AI references can be slightly outdated - check manufacturer websites for current product lines.',
            },
            {
              id: 'ar-p-3-2',
              title: 'Specification Product Comparison',
              task: 'Compare products for a specification section',
              prompt: `Compare products for specification in [section/application].

Application: [describe where this product is being used]
Performance requirements:
- [Requirement 1, e.g., R-value, fire rating, STC rating]
- [Requirement 2]
- [Requirement 3]
Project type: [building type and construction type]
Budget level: [standard, mid-range, premium]
Sustainability preference: [standard, LEED-contributing, Living Building]

Compare 3-4 products from different manufacturers:

For each product provide:
1. Manufacturer and product name
2. Key performance data (specific to the requirements above)
3. Standard compliance (ASTM, UL, FM, etc.)
4. Sustainability attributes (recycled content, VOC levels, EPD availability)
5. Installation considerations (skill level, weather limitations, substrate requirements)
6. Warranty terms
7. Approximate cost range per unit
8. Pros and cons for this specific application

Then provide:
- Recommended product for this project with rationale
- Specification language for the recommended product
- Acceptable substitution criteria

Format as a comparison table followed by the recommendation.`,
              result: 'A clear product comparison with a specification recommendation.',
              tip: 'Use this as your starting point for product research, then verify pricing and availability with your local rep. Material costs shift frequently.',
            },
            {
              id: 'ar-p-3-3',
              title: 'Specification Coordination Checklist',
              task: 'Generate a specification coordination checklist between sections',
              prompt: `Generate a specification coordination checklist for the following project.

Project type: [describe the building]
Specification sections being written: [list the sections, e.g., 03 30 00, 04 20 00, 07 21 00, 07 92 00, 08 11 00, 09 29 00]
Project phase: [SD specs, DD specs, or CD specs]
Consultants involved: [structural, MEP, civil, landscape, etc.]

Create a coordination checklist that identifies:

1. Cross-references between sections:
   - Which sections reference each other
   - Common specification conflicts (e.g., sealant sections vs. window sections)
   - Items that appear in multiple sections and need consistent language

2. Division-to-division coordination:
   - Structural to architectural interfaces
   - MEP to architectural interfaces
   - Civil to architectural interfaces

3. Common coordination failures to check:
   - Conflicting product requirements between sections
   - Missing sections (gaps in the spec that nothing covers)
   - Duplicate coverage (two sections specifying the same work)
   - Warranty conflicts between adjacent assemblies

4. Consultant coordination items:
   - Items that need consultant review before finalizing
   - Specification sections typically written by consultants
   - Interface sections that need joint review

Format as a checklist organized by priority - critical items first.`,
              result: 'A coordination checklist that catches specification conflicts before they become construction problems.',
              tip: 'Run this at the start of your CD phase. Most spec coordination problems are discovered during bidding or construction - catching them early saves everyone time and money.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Design Narratives',
          prompts: [
            {
              id: 'ar-p-4-1',
              title: 'Design Concept Statement',
              task: 'Write a design concept statement for a project',
              prompt: `Write a design concept statement for the following architectural project.

Project: [name and type]
Location: [city, state, neighborhood context]
Client: [who commissioned the project]
Program: [brief description of what the building contains]

Design intent:
- Primary concept or big idea: [describe in 1-2 sentences]
- Key design moves: [list 3-5 major decisions]
- Material palette: [primary materials and why]
- Site response: [how the building relates to its context]
- Sustainability approach: [key strategies]

Write a design narrative that includes:
1. Opening statement - the core idea in one compelling sentence
2. Context response - how the design responds to the site, neighborhood, and climate
3. Program organization - how the spaces are arranged and why
4. Material and form language - what the building looks and feels like, and the reasoning
5. User experience - how people move through and experience the building
6. Sustainability story - how environmental strategies are integrated into the design concept
7. Closing vision - what this project means for the client and the community

Tone: Confident, clear, and specific. Avoid generic architecture language ("celebrates," "reimagines," "juxtaposes"). Every sentence should say something concrete about this project. 500-800 words.`,
              result: 'A polished design narrative ready for client presentations, competition submissions, or planning board reviews.',
              tip: 'Write your key design moves as bullet points first. The clearer your input, the more specific and useful the narrative will be. Generic input produces generic architecture-speak.',
            },
            {
              id: 'ar-p-4-2',
              title: 'Design Review Presentation Script',
              task: 'Create a script for presenting a project at a design review',
              prompt: `Write a presentation script for a design review or planning board presentation.

Project: [name and type]
Audience: [design review committee, planning board, client board of directors, etc.]
Duration: [how many minutes for the presentation]
Key concerns of this audience: [list 2-3 things they care about most]

Project details:
- Site context: [describe the site and surroundings]
- Program: [what the building contains]
- Design concept: [1-2 sentence summary]
- Key design decisions: [list 3-5]
- Zoning compliance: [any variances or special permits requested]
- Community impact: [parking, traffic, scale, views, etc.]

Write a presentation script with:
1. Opening - establish the project context and why it matters (1 minute)
2. Site analysis - what the site told you about how to design (2 minutes)
3. Design concept - the big idea and how it drives the building (2 minutes)
4. Building tour - walk through the project from arrival to key spaces (3-4 minutes)
5. Materials and sustainability - what it looks like and how it performs (2 minutes)
6. Community benefit - what this project gives back (1 minute)
7. Closing - a memorable statement that reinforces the design intent (30 seconds)

Include transition phrases between sections. Note where to reference specific slides or drawings. Anticipate 3 likely questions from this audience and prepare brief answers.`,
              result: 'A presentation-ready script with timing, transitions, and prepared responses to likely questions.',
              tip: 'Practice the script out loud at least twice. Edit for spoken rhythm - sentences that read well on paper often sound awkward when spoken. Cut any sentence longer than 20 words.',
            },
            {
              id: 'ar-p-4-3',
              title: 'Project Description for Publication',
              task: 'Write a project description for a portfolio or publication submission',
              prompt: `Write a project description for publication or portfolio use.

Project: [name]
Location: [city, state, country]
Size: [gross square footage]
Completion: [year]
Client: [name or type]
Program: [what the building contains]
Budget: [if you want to include it]
Awards: [list any received]

Design details:
- Concept: [1-2 sentences]
- Key design moves: [list 3-5]
- Material palette: [primary materials with reasons]
- Sustainability features: [key strategies and any certifications]
- Unique challenges overcome: [1-2 significant challenges and solutions]
- What makes this project notable: [why it deserves attention]

Write three versions:
1. Short version (100 words) - for website thumbnails and social media
2. Medium version (250 words) - for portfolio pages and award submissions
3. Long version (500 words) - for publication features and case studies

All versions should:
- Lead with the most compelling aspect of the project
- Include specific details, not generic descriptions
- Avoid cliche architecture language
- Read well for both architects and non-architects
- End with something memorable

Also provide:
- 5 suggested image captions (for photos of the completed project)
- 3 pull quotes (single sentences that could be highlighted)`,
              result: 'Publication-ready project descriptions at three lengths with supporting text.',
              tip: 'Editors cut from the top. Put the most important information in the first two sentences of each version. If they only read the opening, they should understand why this project matters.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Client Proposals',
          prompts: [
            {
              id: 'ar-p-5-1',
              title: 'Fee Proposal Generator',
              task: 'Draft a complete architectural fee proposal',
              prompt: `Draft a fee proposal for an architectural project.

Project information:
- Project type: [e.g., new construction, renovation, addition]
- Building type: [e.g., multifamily residential, commercial office, K-12 school]
- Approximate size: [gross SF]
- Location: [city, state]
- Estimated construction cost: [range if known]
- Client: [type - private, institutional, developer]

Firm information:
- Billing rates: [principal: $X, project architect: $X, designer: $X, intern: $X]
- Fee structure preference: [fixed fee, percentage of construction cost, hourly with cap]
- Standard phases: [list your phases, e.g., SD, DD, CD, CA]

Scope considerations:
- Services included: [list what you will do]
- Services excluded: [list what is not included]
- Consultants needed: [structural, MEP, civil, landscape, etc.]
- Special services: [interior design, furniture, signage, etc.]

Write a complete proposal with:
1. Cover letter (professional, concise, enthusiastic about the project)
2. Understanding of the project (show you understand their needs)
3. Scope of services by phase with deliverables for each phase
4. Fee summary table with phase-by-phase breakdown
5. Project schedule with milestone dates
6. Assumptions and exclusions
7. Additional services pricing (hourly rates for out-of-scope work)
8. Terms and conditions summary
9. Signature block

Professional but approachable tone. Make the client feel confident in your firm's ability to deliver.`,
              result: 'A complete fee proposal draft ready for fee adjustments and firm-specific customization.',
              tip: 'Always adjust the AI-generated fees to match your actual pricing. The scope and language will save you hours, but the numbers need to come from your experience and market knowledge.',
            },
            {
              id: 'ar-p-5-2',
              title: 'RFP Response Outline',
              task: 'Create an outline for responding to an architectural RFP',
              prompt: `Help me outline a response to this architectural RFP.

RFP details:
[Paste the key sections of the RFP - project description, scope, evaluation criteria, submission requirements]

My firm:
- Name: [firm name]
- Size: [number of people]
- Specialization: [what you are known for]
- Relevant experience: [2-3 similar projects]
- Key differentiator: [why you are the right choice]

Generate:
1. Compliance checklist - every item the RFP requires, formatted as a checklist
2. Response outline matching the RFP's required format with:
   - Key message for each section
   - What the selection committee is really looking for in each section
   - Your competitive advantage for each section
3. Executive summary draft (250 words) - the most compelling case for your firm
4. Project approach narrative outline - how you would tackle this specific project
5. Relevant experience matrix - how to present your past work to match their criteria
6. Team organization narrative - how your team structure serves their project
7. Win themes - 3 messages to reinforce throughout the response

Also identify:
- The 3 most important evaluation criteria (where to invest the most effort)
- Potential weaknesses in your response and how to address them
- Questions to ask during the Q&A period`,
              result: 'A strategic RFP response outline that maximizes your evaluation score.',
              tip: 'Read the evaluation criteria three times before starting. Weight your effort to match their scoring. If "relevant experience" is 30% of the score, it should get 30% of your page count.',
            },
            {
              id: 'ar-p-5-3',
              title: 'Client Presentation Deck Outline',
              task: 'Structure a client presentation deck for a design milestone',
              prompt: `Create a presentation deck outline for a [SD / DD / CD] milestone presentation.

Project: [name and type]
Client: [who you are presenting to - name, role, what they care about]
Presentation format: [in-person, virtual, hybrid]
Time allotted: [minutes]
Previous feedback: [key comments from the last presentation to address]

Design milestone deliverables:
[List what you are presenting - plans, sections, elevations, renderings, material boards, etc.]

Generate a slide-by-slide deck outline:
1. For each slide:
   - Slide title
   - Key visual content (what drawing or image goes here)
   - Talking point (the one thing you need to communicate)
   - Transition to next slide

2. Deck structure should include:
   - Agenda slide
   - Recap of project goals and previous approvals
   - Site plan and context
   - Design presentation (organized by the story you want to tell)
   - Materials and finishes
   - Budget implications or cost update
   - Schedule update
   - Next steps and action items
   - Discussion time

3. Also provide:
   - 3 anticipated client questions and prepared responses
   - Recommended presentation flow (what to show first, when to pause for questions)
   - Tips for this specific milestone presentation

Keep the deck under [X] slides. Each slide should communicate one idea.`,
              result: 'A complete presentation deck outline with talking points and audience-specific strategy.',
              tip: 'Clients remember the first slide, the last slide, and the moment they saw something they did not expect. Structure your deck around those three moments.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Sustainability',
          prompts: [
            {
              id: 'ar-p-6-1',
              title: 'LEED Credit Analysis',
              task: 'Perform a preliminary LEED credit analysis for a project',
              prompt: `Perform a preliminary LEED credit analysis for the following project.

Project information:
- Building type: [e.g., new construction office, major renovation school]
- LEED rating system: [LEED BD+C: New Construction, Schools, Healthcare, etc.]
- Location: [city, state]
- Gross square footage: [SF]
- Number of stories: [count]
- Site type: [greenfield, previously developed, urban infill]
- Budget level: [standard, mid-range, premium]
- Target certification level: [Certified, Silver, Gold, Platinum, or "recommend"]

Analyze each LEED credit category:
1. Integrative Process
2. Location and Transportation
3. Sustainable Sites
4. Water Efficiency
5. Energy and Atmosphere
6. Materials and Resources
7. Indoor Environmental Quality
8. Innovation
9. Regional Priority Credits

For each category, identify:
- Credits likely achievable (high confidence) with point values
- Credits potentially achievable (moderate effort) with point values
- Credits not applicable or not cost-effective
- Estimated total points per category

Provide:
- Total estimated point range (low to high)
- Recommended certification level based on the analysis
- Top 5 credits to prioritize (highest impact for lowest cost)
- Top 3 credits to avoid (high cost for low impact)
- Key decisions that need to be made early in design
- Consultants needed for specific credits

Format as a scorecard summary with a narrative recommendation.`,
              result: 'A preliminary LEED scorecard with strategic recommendations for achieving certification.',
              tip: 'This is a starting framework, not a final scorecard. Review with your sustainability consultant and update as design decisions are made. Credit feasibility changes significantly between SD and DD.',
            },
            {
              id: 'ar-p-6-2',
              title: 'Sustainability Strategy Narrative',
              task: 'Write a sustainability strategy narrative for a project',
              prompt: `Write a sustainability strategy narrative for the following project.

Project: [name and type]
Location: [city, state, climate zone]
Client sustainability goals: [list what the client has asked for]
Certification target: [LEED level, Energy Star, Passive House, Living Building, or none]
Key strategies being considered:
- Energy: [e.g., high-performance envelope, VRF HVAC, solar PV, ground source heat pump]
- Water: [e.g., low-flow fixtures, rainwater harvesting, greywater recycling]
- Materials: [e.g., mass timber, recycled content, regional sourcing, EPDs]
- Site: [e.g., native landscaping, bioswales, green roof, reduced parking]
- Indoor quality: [e.g., natural ventilation, daylighting, low-VOC materials, biophilic design]

Write a sustainability narrative that includes:
1. Vision statement - why sustainability matters for this project (2-3 sentences)
2. Climate and context response - how the local climate drives design decisions
3. Energy strategy - how the building minimizes energy use and what the energy targets are
4. Water strategy - how the building reduces water consumption
5. Material strategy - how material selections reduce environmental impact
6. Site strategy - how the landscape and site design contribute to sustainability
7. Health and wellness - how the building supports occupant health
8. Performance targets - specific measurable goals (EUI, water use intensity, recycled content %)
9. Monitoring plan - how performance will be tracked after occupancy

Tone: Technical but accessible. A developer should understand it. A sustainability consultant should respect it. 600-900 words.`,
              result: 'A comprehensive sustainability narrative for client presentations, project documentation, or certification applications.',
              tip: 'Include specific numbers wherever possible. "High-performance envelope" is vague. "R-30 wall assemblies targeting a 40% energy reduction below ASHRAE 90.1 baseline" is convincing.',
            },
            {
              id: 'ar-p-6-3',
              title: 'Energy Code Compliance Summary',
              task: 'Summarize energy code requirements for a specific project',
              prompt: `Summarize the energy code compliance requirements for the following project.

Project type: [building type]
Location: [city, state]
Applicable energy code: [e.g., IECC 2021, ASHRAE 90.1-2019, or "determine based on location"]
Climate zone: [if known, or location for AI to determine]
Building size: [gross SF]
Compliance path preference: [prescriptive, performance, or "recommend"]

Summarize requirements for:

1. Building envelope:
   - Roof insulation minimum R-value
   - Wall insulation minimum R-value (by assembly type)
   - Floor/slab insulation requirements
   - Fenestration U-factor and SHGC maximums
   - Maximum window-to-wall ratio
   - Air barrier requirements

2. Mechanical systems:
   - Minimum equipment efficiencies (by system type)
   - Economizer requirements
   - Energy recovery requirements
   - Controls and setback requirements

3. Lighting:
   - Maximum lighting power density by space type
   - Required controls (occupancy sensors, daylight dimming, scheduling)
   - Exterior lighting requirements

4. Service water heating:
   - Minimum equipment efficiencies
   - Insulation requirements for piping and storage

5. Additional requirements:
   - Commissioning requirements
   - Metering and monitoring
   - On-site renewable energy (if required by local code)

Format as a compliance checklist with specific values. Note any local amendments that exceed the base code. Flag items that need mechanical or electrical engineer coordination.`,
              result: 'A clear energy code compliance summary with specific performance targets for each building system.',
              tip: 'Energy codes change frequently and local amendments can be significant. Verify the applicable code edition with your local building department before finalizing any design targets.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what changes when AI handles the research and writing in your architecture practice.',
      timeTable: [
        {
          task: 'Project brief development',
          without: '6-10 hours',
          withAI: '1-2 hours',
          saved: '5-8 hrs',
        },
        {
          task: 'Code compliance research',
          without: '2-4 hours per code area',
          withAI: '20-30 minutes',
          saved: '2-3 hrs',
        },
        {
          task: 'Specification sections',
          without: '1-3 hours per section',
          withAI: '20-40 minutes',
          saved: '1-2 hrs/section',
        },
        {
          task: 'Design narratives',
          without: '2-4 hours',
          withAI: '30-45 minutes',
          saved: '2-3 hrs',
        },
        {
          task: 'Fee proposals',
          without: '4-8 hours',
          withAI: '1-2 hours',
          saved: '3-6 hrs',
        },
        {
          task: 'Sustainability analysis',
          without: '6-10 hours',
          withAI: '1-2 hours',
          saved: '5-8 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '18-30 hrs/month',
      },
      sections: [
        {
          heading: 'The Architecture Gap',
          paragraphs: [
            'Architects who use AI for research and documentation work at 2-3x the speed of those who do not. Same design talent, same experience, same code knowledge - just less time buried in documents and more time at the drawing board.',
            'The gap is not design ability. It is how much time you have left for design after the documentation is done.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become an architect to spend your days writing specifications and researching setback requirements. You became an architect to design buildings that matter. AI gives you back the hours to do exactly that - without cutting corners on the documentation that makes good buildings possible.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One project task that always takes longer than it should. That is enough to change how you work.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your architecture workflow. Each day introduces one new capability. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'ar-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'ar-1-2', label: 'Create a free Perplexity account for code research' },
            { id: 'ar-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Research a Code Question',
          duration: '15 min',
          items: [
            { id: 'ar-2-1', label: 'Pick a current project with a pending code question' },
            { id: 'ar-2-2', label: 'Run the Zoning Requirements or Building Code prompt with your real project data' },
            { id: 'ar-2-3', label: 'Compare the output to your own research - notice the time difference' },
          ],
        },
        {
          day: 3,
          title: 'Draft a Project Document',
          duration: '20 min',
          items: [
            { id: 'ar-3-1', label: 'Run the Project Program Generator or Site Analysis prompt for a real project' },
            { id: 'ar-3-2', label: 'Edit the output for accuracy and add project-specific details' },
            { id: 'ar-3-3', label: 'Save the result to your project file' },
          ],
        },
        {
          day: 4,
          title: 'Write a Design Narrative',
          duration: '20 min',
          items: [
            { id: 'ar-4-1', label: 'Pick a project that needs a design statement or narrative' },
            { id: 'ar-4-2', label: 'Run the Design Concept Statement prompt with your design intent' },
            { id: 'ar-4-3', label: 'Refine the output to match your voice and design philosophy' },
          ],
        },
        {
          day: 5,
          title: 'Tackle a Specification',
          duration: '25 min',
          items: [
            { id: 'ar-5-1', label: 'Identify a CSI section you need to write or update' },
            { id: 'ar-5-2', label: 'Run the Specification Section Draft prompt with your project requirements' },
            { id: 'ar-5-3', label: 'Review product selections and customize for your project' },
          ],
        },
        {
          day: 6,
          title: 'Explore Proposals and Sustainability',
          duration: '20 min',
          items: [
            { id: 'ar-6-1', label: 'Try the Fee Proposal Generator or LEED Credit Analysis prompt' },
            { id: 'ar-6-2', label: 'Explore any system or prompt you have not tried yet' },
            { id: 'ar-6-3', label: 'Note which tasks saved the most time - prioritize those going forward' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systematize',
          duration: '10 min',
          items: [
            { id: 'ar-7-1', label: 'Review what worked best this week for your practice' },
            { id: 'ar-7-2', label: 'Save your most-used prompts with firm-specific defaults filled in' },
            { id: 'ar-7-3', label: 'Share this guide with a colleague who spends too much time on documentation' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
