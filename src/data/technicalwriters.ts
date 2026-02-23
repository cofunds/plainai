import type { WorkbookData } from './types'

export const technicalwritersData = {
  professionId: 'technicalwriters',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Technical Writers',
  heroDescription:
    'Write better docs, faster. Real tools, proven workflows, and copy-paste prompts for API documentation, user guides, release notes, knowledge base articles, and style guide enforcement.',

  chapters: {
    ch1: {
      paragraphs: [
        'You have 23 Jira tickets tagged "needs documentation." The API team shipped three new endpoints last sprint and the docs are already behind. There is a user guide that needs updating because the UI changed in the last release, but nobody told you until a customer filed a support ticket asking why the screenshots do not match. Your knowledge base has 400 articles and at least 50 of them reference features that no longer exist.',
        'The release notes for next Tuesday are not started. Engineering wrote a list of commit messages that might as well be in a different language - "refactored auth middleware to support multi-tenant RBAC with fallback to legacy ACL" - and you need to turn that into something a product manager can understand. There is a developer tutorial that has been on your backlog for two months. And the style guide you wrote last year? Half the team has never read it. The other half ignores it.',
        'You became a technical writer because you bridge the gap between builders and users. You take complexity and make it clear. You are the person who ensures that when someone reads the docs, they can actually do the thing. But instead of crafting great content, you spend most of your time chasing engineers for information, reformatting inconsistent drafts, and playing whack-a-mole with outdated articles.',
      ],
      highlight:
        'What if AI handled the first draft, the formatting, and the consistency checking - so you could focus on clarity, accuracy, and the user experience that makes great documentation?',
      closingParagraph:
        'Not replacing your judgment about what users need. Not automating away editorial quality. Just eliminating the 5 hours between getting the raw technical input and having a polished first draft ready for review.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace the technical writer who understands users. It cannot tell you that the third step in a tutorial is where people actually get confused. It will not know that your developer audience hates marketing language in API docs. It cannot sense that a knowledge base article answers the wrong question because the real question is upstream of what was asked. The editorial judgment that makes documentation genuinely useful - that is human. AI does not have it.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the fastest, most tireless documentation assistant you have ever worked with. One who can generate a complete API endpoint doc from a spec in 2 minutes, turn a developer\'s brain dump into a structured user guide, write release notes from a changelog in 30 seconds, and audit 400 knowledge base articles against your style guide overnight.',
            'Need to document 15 new API endpoints? AI writes the initial reference docs while you focus on the getting-started guide. Need to translate a dense engineering document into user-facing language? AI handles the first draft. Need to check whether 200 articles follow your tone, formatting, and terminology standards? AI flags every deviation.',
            'You bring the user empathy, the editorial standards, and the understanding of what clear really means. AI brings the drafting speed, the formatting consistency, and the tireless ability to process thousands of words without losing focus.',
          ],
        },
      ],
      keyInsight:
        'Your editorial expertise + AI\'s production speed = documentation that stays current, consistent, and comprehensive - without burning out the writing team.',
    },

    ch3: {
      intro: 'Five tools that cover the full technical writing workflow. Start with two, add from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your drafting and rewriting engine',
          description:
            'First drafts, API docs, user guides, release notes, knowledge base articles, style guide checks - any documentation task',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form and technical analysis partner',
          description:
            'Complex API documentation, lengthy user guides, detailed tutorials, style guide auditing across large bodies of text - excels at depth and consistency',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long docs',
          icon: 'claude',
        },
        {
          name: 'Perplexity',
          role: 'Your research and reference assistant',
          description:
            'Industry documentation standards, competitor doc analysis, terminology research, best practices for specific doc types - with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your content management hub',
          description:
            'Documentation planning, article tracking, editorial calendar, review workflows, style guide hosting, team knowledge base',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Organize everything',
          icon: 'notion',
        },
        {
          name: 'Canva AI',
          role: 'Your visual content creator',
          description:
            'Diagrams, flowcharts, architecture visuals, tutorial graphics, process illustrations, documentation screenshots with annotations',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Make docs visual',
          icon: 'canva',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for drafting and auditing. Add Perplexity when you need to research standards or analyze competitor documentation. That combination covers 80% of the writing process.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual technical writing workflows. Click each system to see the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'API Documentation Writing',
          before:
            'Engineering ships 10 new endpoints. You get a Swagger spec and maybe some Slack messages explaining what the endpoints do. You spend 2-3 hours per endpoint writing descriptions, parameter explanations, example requests and responses, error codes, and edge case notes. The full set takes a week. By the time you finish, there are 5 more endpoints waiting.',
          after:
            'You feed the API spec to AI. In minutes, it generates complete endpoint documentation - descriptions, parameter tables, example requests/responses, error handling guides, and edge case notes. You spend your time verifying technical accuracy and adding the usage context that makes docs genuinely helpful. A week of writing becomes a day of reviewing and polishing.',
          flow: [
            'Feed the API spec (OpenAPI/Swagger) or endpoint details to AI',
            'AI generates complete documentation for each endpoint',
            'Review technical accuracy with the engineering team',
            'Add usage context, best practices, and real-world examples',
            'Publish and link to related guides and tutorials',
          ],
          timeSaved: { without: '2-3 hours/endpoint', withAI: '20-30 min/endpoint' },
        },
        {
          id: 2,
          name: 'User Guide Creation',
          before:
            'Writing a user guide means navigating the product yourself, taking screenshots, writing step-by-step instructions, adding context for different user types, organizing everything into a logical flow, and then formatting it all consistently. A comprehensive guide takes days. Updating it when the product changes takes almost as long because you are hunting for every affected section.',
          after:
            'You describe the feature or workflow. AI generates a structured user guide - overview, prerequisites, step-by-step instructions, tips, troubleshooting, and related content links. You verify accuracy against the actual product, add screenshots, and refine the language. A multi-day project becomes a few hours of focused work.',
          flow: [
            'Describe the feature, workflow, or task to document',
            'AI generates a structured guide with all standard sections',
            'Walk through the product to verify accuracy and flow',
            'Add screenshots and visual aids',
            'Review for clarity with a non-technical reader',
          ],
          timeSaved: { without: '1-3 days/guide', withAI: '2-4 hours' },
        },
        {
          id: 3,
          name: 'Release Notes Generation',
          before:
            'Release notes mean translating engineering language into human language. You get a list of PRs, commit messages, or Jira tickets. Half of them are incomprehensible to anyone outside the dev team. You spend hours categorizing changes, writing user-facing descriptions, identifying what matters to different audiences, and formatting everything consistently. It is tedious, time-sensitive, and thankless.',
          after:
            'You feed AI the raw changelog - commit messages, PR descriptions, Jira tickets. It categorizes the changes (new features, improvements, bug fixes, deprecations), writes user-facing descriptions, flags breaking changes, and formats everything according to your template. You review for accuracy and add context. Release notes that took 3 hours now take 30 minutes.',
          flow: [
            'Collect raw input - PRs, commits, Jira tickets, engineering notes',
            'AI categorizes and writes user-facing descriptions for each change',
            'Review for accuracy and add business context or impact notes',
            'AI flags breaking changes and generates migration guidance',
            'Publish in your standard format across all channels',
          ],
          timeSaved: { without: '2-4 hours/release', withAI: '20-40 minutes' },
        },
        {
          id: 4,
          name: 'Knowledge Base Management',
          before:
            'Your knowledge base grows but never shrinks. Articles are added but rarely updated or retired. Search results surface outdated content alongside current content. Customers follow old instructions and get confused. You know the KB needs a cleanup but auditing 400 articles manually would take weeks. So it stays messy.',
          after:
            'AI audits your entire knowledge base - flagging outdated content, identifying duplicate articles, checking for broken links and terminology consistency, and prioritizing what needs updating. It generates updated drafts for outdated articles and suggests articles to merge or retire. A quarterly audit that used to be impossible now takes a day.',
          flow: [
            'Export or feed your knowledge base content to AI',
            'AI scans for outdated information, inconsistencies, and gaps',
            'Review the audit results and prioritize updates',
            'AI generates updated drafts for the highest-priority articles',
            'Publish updates and archive deprecated content',
          ],
          timeSaved: { without: 'Rarely done', withAI: '4-6 hours/quarter' },
        },
        {
          id: 5,
          name: 'Style Guide Enforcement',
          before:
            'You wrote a 40-page style guide. Engineers ignore it. Contract writers follow parts of it. Even your own team is inconsistent on terminology, capitalization, and tone. Manually reviewing every piece of content against the style guide is humanly impossible at scale. So inconsistency compounds with every new article published.',
          after:
            'AI checks any piece of content against your style guide rules - terminology, tone, formatting, capitalization, prohibited phrases, active voice requirements, and more. It flags deviations and suggests corrections. You can audit a 5,000-word document in minutes or batch-check 50 articles overnight. Consistency becomes automatic.',
          flow: [
            'Feed your style guide rules to AI as a reference document',
            'Submit content for style guide compliance checking',
            'AI flags every deviation with the specific rule violated',
            'Review flagged items and accept or override suggestions',
            'Track compliance trends over time to identify systemic issues',
          ],
          timeSaved: { without: '30-60 min/article', withAI: '5 min/article' },
        },
        {
          id: 6,
          name: 'Tutorial and Walkthrough Design',
          before:
            'Building a good tutorial means understanding the user journey, designing a logical progression, writing clear instructions, adding context and tips, creating supporting visuals, and testing the entire flow end-to-end. A single developer tutorial can take 2-3 days. Interactive walkthroughs with decision points take even longer because you are branching the content.',
          after:
            'You define the learning objective and audience. AI designs the tutorial structure - prerequisites, learning path, step-by-step sections with explanations, checkpoints, troubleshooting sections, and next steps. You verify the technical accuracy, add visuals, and test the flow. A multi-day project compresses to half a day.',
          flow: [
            'Define the learning objective, audience, and prerequisites',
            'AI generates the tutorial structure and step-by-step content',
            'Walk through each step to verify accuracy and completeness',
            'Add code samples, screenshots, and interactive elements',
            'Test with a member of the target audience and iterate',
          ],
          timeSaved: { without: '2-3 days/tutorial', withAI: '4-6 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every technical writing scenario. Copy, paste, fill in the brackets, and get results in minutes.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - API Documentation',
          prompts: [
            {
              id: 'tw-p-1-1',
              title: 'API Endpoint Documentation',
              task: 'Generate complete documentation for an API endpoint',
              prompt: `Generate complete documentation for this API endpoint.

API name: [your API name]
Base URL: [base URL]
Authentication: [method - API key, OAuth, Bearer token, etc.]
Audience: [developers integrating your API]

Endpoint details:
- Method: [GET / POST / PUT / PATCH / DELETE]
- Path: [/api/v1/resource]
- Purpose: [what this endpoint does in plain English]
- Parameters:
  [List all parameters - path, query, header, body - with types]
- Response: [describe the response structure or paste a sample]
- Error codes: [list known error responses]
- Rate limits: [if applicable]
- Notes from engineering: [paste any technical notes]

Generate documentation with these sections:

1. Overview
   - One-sentence description of what this endpoint does
   - When to use it (common use cases)
   - Prerequisites (authentication, permissions, dependent calls)

2. Request
   - HTTP method and full URL
   - Headers table (name, type, required, description)
   - Path parameters table (if any)
   - Query parameters table (name, type, required, default, description)
   - Request body schema (if POST/PUT/PATCH)
     - Field-by-field documentation with types, constraints, and examples
   - Example request (curl command)
   - Example request (language-specific - Python, JavaScript, or both)

3. Response
   - Success response (status code and body)
     - Field-by-field documentation
   - Example success response (formatted JSON)
   - Error responses table (status code, error code, description, resolution)
   - Example error response

4. Usage Notes
   - Pagination details (if applicable)
   - Filtering and sorting options (if applicable)
   - Rate limiting behavior
   - Idempotency notes (if applicable)
   - Common pitfalls and how to avoid them

5. Related Endpoints
   - List related endpoints and when to use each
   - Common workflow sequences involving this endpoint

Write for developers who want to integrate quickly. Be precise. Every parameter description should tell the developer what to pass and what happens if they do not.`,
              result:
                'Production-ready API endpoint documentation with examples and error handling.',
              tip: 'Test every example request against the actual API before publishing. Developers trust docs that work on the first try.',
            },
            {
              id: 'tw-p-1-2',
              title: 'API Getting Started Guide',
              task: 'Write a getting-started guide for an API',
              prompt: `Write a getting-started guide for developers using our API for the first time.

API name: [name]
What it does: [2-3 sentences about the API's purpose]
Target developer: [backend devs, frontend devs, mobile devs, data engineers]
Authentication method: [how to authenticate]
Base URL: [base URL]
Key concepts: [any domain-specific terms developers need to understand]
Most common use case: [what most developers do first]

Generate a getting-started guide with:

1. Introduction (2-3 paragraphs)
   - What the API does and why they would use it
   - What they can build with it
   - High-level architecture (how the API fits into their stack)

2. Prerequisites
   - Account setup requirements
   - API key or credential generation (step by step)
   - Required tools or libraries
   - Supported languages and SDKs

3. Authentication
   - How authentication works (explained simply)
   - Step-by-step setup
   - Example authenticated request
   - Common auth errors and how to fix them

4. Your First API Call
   - The simplest possible call that returns a meaningful result
   - Curl example
   - Python example
   - JavaScript/Node example
   - Expected response and how to read it
   - "If this worked, you are ready for the next step"

5. Core Concepts
   For each key concept:
   - What it is (one sentence)
   - Why it matters
   - How it appears in the API

6. Common Workflows (3 workflows)
   For each:
   - What the workflow achieves
   - Step-by-step API calls in order
   - Code example for the complete workflow

7. Next Steps
   - Link to full API reference
   - Link to code examples and SDKs
   - Link to community or support
   - "What to build next" suggestions

8. Troubleshooting
   - Top 5 issues developers hit in the first hour
   - Solution for each

Write like you are pair-programming with the developer. Conversational but precise. No unnecessary words.`,
              result:
                'A complete getting-started guide that takes a developer from zero to their first successful API call.',
              tip: 'Have a developer who has never used your API test this guide. Every place they get stuck is a place the guide needs improvement.',
            },
            {
              id: 'tw-p-1-3',
              title: 'API Changelog and Migration Guide',
              task: 'Write an API changelog with migration guidance',
              prompt: `Write an API changelog with migration guidance for a new API version.

API name: [name]
Previous version: [v1 / v2 / etc.]
New version: [v2 / v3 / etc.]
Release date: [date]
Deprecation date for old version: [date]
End-of-life date for old version: [date]

Changes:
[List all changes - new endpoints, modified endpoints, removed endpoints, schema changes, behavior changes, new features]

Breaking changes:
[List anything that will break existing integrations]

Generate:

1. Changelog Summary
   - Version number and release date
   - 2-3 sentence overview of what changed and why
   - Impact assessment: how many integrations are likely affected

2. New Features
   For each:
   - What is new
   - Why it was added
   - How to use it (brief example)
   - Link to full documentation

3. Improvements
   For each:
   - What changed
   - The benefit for developers
   - Whether any action is needed

4. Breaking Changes (critical section)
   For each breaking change:
   - What changed (exact before vs. after)
   - Why it changed
   - Impact: who is affected
   - Migration steps (specific code changes needed)
   - Before code example
   - After code example
   - Workaround if immediate migration is not possible

5. Deprecations
   For each:
   - What is deprecated
   - Timeline (when it stops working)
   - Replacement (what to use instead)
   - Migration path

6. Migration Checklist
   - Step-by-step checklist for updating from old version to new
   - Estimated effort for a typical integration
   - Testing recommendations
   - Rollback plan if issues arise

7. Timeline
   - Release date (new version available)
   - Deprecation date (old version shows warnings)
   - End-of-life date (old version stops working)
   - Support availability during transition

8. Support
   - How to get help during migration
   - Known issues with the new version
   - FAQ for common migration questions

Tone: clear, direct, and empathetic to the developer who now has migration work to do. Acknowledge the burden while making it as painless as possible.`,
              result:
                'A comprehensive changelog and migration guide that respects developer time and prevents integration breakage.',
              tip: 'Send this 60+ days before the deprecation date. Developers need time to plan migration work into their sprint cycles.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - User Guides',
          prompts: [
            {
              id: 'tw-p-2-1',
              title: 'Step-by-Step User Guide',
              task: 'Write a step-by-step user guide for a feature or workflow',
              prompt: `Write a step-by-step user guide for a product feature or workflow.

Product: [product name]
Feature/workflow: [what the user is trying to accomplish]
Target user: [role, technical level, context]
User\'s goal: [what they want to achieve by the end of this guide]
Prerequisites: [what they need before starting - account, permissions, data, etc.]
Platform: [web / mobile / desktop / API]

Current documentation: [none / outdated / partial - what exists today]
Related features: [other features they might need]

Generate a comprehensive user guide:

1. Overview
   - What this feature does (one paragraph, no jargon)
   - Who should use it and when
   - What they will accomplish by following this guide
   - Estimated time to complete

2. Before You Begin
   - Prerequisites checklist
   - Required permissions or access levels
   - Recommended setup or configuration

3. Step-by-Step Instructions
   For each step:
   - Step number and action title (verb-first - e.g., "Create a new project")
   - What to do (clear, specific instruction)
   - Where to find the UI element (navigation path)
   - [Screenshot placeholder: describe what the screenshot should show]
   - Expected result after completing this step
   - Common mistake at this step and how to avoid it

4. Configuration Options
   For each setting or option:
   - Setting name
   - What it does (plain language)
   - Default value
   - When to change it
   - Impact of changing it

5. Tips and Best Practices
   - 5-7 practical tips from experienced users
   - "Do this" and "avoid this" pairs
   - Advanced options for power users

6. Troubleshooting
   - "I cannot find [element]" - solution
   - "I got an error saying [common error]" - solution
   - "The result does not look right" - solution
   - "I want to undo what I did" - solution
   - Add 3-5 more based on common support tickets

7. Related Content
   - Links to related guides
   - Links to API docs (if applicable)
   - Links to video tutorials (if they exist)
   - "What to do next" suggestions

Write for someone doing this for the first time. Every instruction should be unambiguous. If a step has more than one interpretation, it needs to be clearer.`,
              result:
                'A complete, user-tested-ready guide that takes users from start to finish with zero ambiguity.',
              tip: 'Test every guide by following the steps yourself in a clean environment. If you skip a step because you "know" the product, a user will get stuck there.',
            },
            {
              id: 'tw-p-2-2',
              title: 'Feature Overview Page',
              task: 'Write a feature overview page for the documentation site',
              prompt: `Write a feature overview page for our documentation site.

Product: [product name]
Feature: [feature name]
Feature category: [core feature / add-on / advanced / beta]
Target audience: [all users / admins / developers / specific role]
Feature maturity: [GA / beta / new / recently updated]

Feature details:
- What it does: [2-3 sentences]
- Key capabilities: [list 5-8 things users can do with this feature]
- Technical requirements: [any system requirements or integrations needed]
- Pricing/availability: [included in plan X, available as add-on, etc.]
- Known limitations: [what it cannot do or known restrictions]

Generate:

1. Feature Header
   - Feature name
   - One-line description (under 15 words)
   - Availability badge (GA / Beta / New)
   - Plan availability

2. Overview
   - What the feature does and the problem it solves (2 paragraphs)
   - Key benefits (3-5 bullet points)
   - Who benefits most from this feature

3. Key Capabilities
   For each capability:
   - Capability name
   - Brief description (1-2 sentences)
   - Link to detailed guide

4. How It Works
   - High-level architecture or process flow (described for visual creation)
   - Key concepts users need to understand
   - How it connects to other features in the product

5. Getting Started
   - Quickstart: the fastest path to using this feature (5-7 steps)
   - Link to the full setup guide
   - Link to the first tutorial

6. Use Cases
   - 3-4 real-world use cases
   - For each: scenario description, how to set it up, expected outcome

7. Plans and Pricing (if applicable)
   - Feature availability by plan
   - Usage limits by plan
   - How to upgrade

8. Resources
   - Guides and tutorials (linked list)
   - API reference (if applicable)
   - Video walkthroughs (if available)
   - Community discussions

9. FAQ
   - 5-7 frequently asked questions with concise answers

Write for someone evaluating whether this feature meets their needs. Balance marketing appeal with technical accuracy. No exaggeration.`,
              result:
                'A complete feature overview page that serves as the hub for all related documentation.',
              tip: 'Link this page from every related guide and article. The overview page should be the central node in your documentation graph for this feature.',
            },
            {
              id: 'tw-p-2-3',
              title: 'Admin Guide Generator',
              task: 'Write an administrator guide for product setup and configuration',
              prompt: `Write an administrator guide for product setup and configuration.

Product: [product name]
Admin audience: [IT admin, team lead, workspace owner, system administrator]
Technical level: [low - they configure but do not code / medium - comfortable with settings / high - can handle API config]
Setup context: [new deployment / migration from another tool / configuration update]

Configuration areas to cover:
[List all areas the admin needs to configure - e.g., user management, permissions, integrations, security, billing, notifications]

Generate:

1. Admin Overview
   - What administrators can do
   - Access requirements (how to get admin access)
   - Admin dashboard tour (describe the key areas)

2. Initial Setup Checklist
   - Ordered list of everything to configure on Day 1
   - For each item: what it is, where to find it, recommended setting, and why

3. User Management
   - How to add and remove users
   - Role types and permissions matrix
   - Bulk operations (if available)
   - SSO/SAML configuration (if applicable)
   - User provisioning best practices

4. Security Configuration
   - Authentication settings and recommendations
   - Password and access policies
   - Data retention settings
   - Audit log access and usage
   - Compliance-relevant settings

5. Integration Setup
   For each integration:
   - What it connects to
   - Step-by-step setup
   - Configuration options
   - Troubleshooting common connection issues
   - Security considerations

6. Notification and Communication Settings
   - Available notification channels
   - How to configure each
   - Recommended settings by team size and use case

7. Billing and Plan Management (if applicable)
   - How to view and manage the subscription
   - How to add seats or upgrade
   - Invoice and payment management

8. Maintenance and Monitoring
   - Health checks to run periodically
   - Usage reporting and analytics
   - Performance optimization tips
   - When to contact support vs. self-serve

9. Troubleshooting for Admins
   - "Users cannot log in" - resolution steps
   - "Integration stopped working" - resolution steps
   - "Performance is slow" - resolution steps
   - Add 5-7 more admin-specific issues

Write for an admin who is technically capable but may not be a developer. Be precise about navigation paths and setting names. Every instruction should reference the exact UI element.`,
              result:
                'A comprehensive admin guide that enables self-serve setup and reduces admin support tickets.',
              tip: 'Include the "recommended setting" for every configuration option. Admins want to know what most successful teams choose, not just what the options are.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Release Notes',
          prompts: [
            {
              id: 'tw-p-3-1',
              title: 'Release Notes Changelog Writer',
              task: 'Write user-facing release notes from engineering changelogs',
              prompt: `Write user-facing release notes from this engineering changelog.

Product: [product name]
Version: [version number]
Release date: [date]
Release type: [major / minor / patch / hotfix]
Target audience: [all users / admins / developers / specific segment]

Engineering changelog:
[Paste the raw changelog - commit messages, PR titles, Jira ticket summaries, engineering notes]

Style guide rules:
- Tone: [professional / casual / technical]
- Format: [grouped by category / chronological / by impact]
- Naming conventions: [any specific product or feature naming rules]

Generate:

1. Release Header
   - Version number and date
   - One-sentence release summary (what is the headline of this release?)
   - Impact level: Major / Minor / Maintenance

2. Highlights (top 3-5 changes that matter most)
   - For each: user-friendly title, 2-3 sentence description of what changed and why it matters to the user, [screenshot placeholder if applicable]

3. New Features
   For each:
   - Feature name
   - What it does (user perspective, not technical)
   - How to access or enable it
   - Link to documentation

4. Improvements
   For each:
   - What improved
   - How users benefit
   - Any action needed from users

5. Bug Fixes
   For each:
   - What was broken (describe the user experience)
   - What was fixed (describe the improved experience)
   - Affected users (who experienced this)

6. Breaking Changes (if any)
   For each:
   - What changed
   - Who is affected
   - What to do (migration steps)
   - Timeline

7. Deprecations (if any)
   For each:
   - What is being deprecated
   - Timeline (when it goes away)
   - Alternative (what to use instead)

8. Known Issues
   - Any known issues in this release
   - Workarounds if available
   - Expected fix timeline

Transform every engineering description into user-facing language. "Refactored authentication middleware" becomes "Improved login reliability and speed." The user cares about outcomes, not implementation.`,
              result:
                'Professional, user-facing release notes ready to publish across all channels.',
              tip: 'Write the highlight section first and make it compelling. Most users only read the highlights. Make those words count.',
            },
            {
              id: 'tw-p-3-2',
              title: 'Release Communication Suite',
              task: 'Create a full release communication package',
              prompt: `Create a full release communication package for a product update.

Product: [product name]
Version: [version number]
Release date: [date]
Key changes: [list the top 3-5 changes with brief descriptions]
Target audiences: [list - all users, enterprise admins, developers, partners, internal team]
Communication channels: [in-app, email, blog, social, docs, Slack/community]

Generate a complete communication suite:

1. Release Notes Page (for docs site)
   - Full, detailed release notes (as per standard format)
   - Optimized for search (include keywords users would search for)

2. In-App Notification (50 words max)
   - Headline that captures the key improvement
   - 1-2 sentence summary
   - CTA button text and destination

3. Email Announcement (200-300 words)
   - Subject line (2 options)
   - Brief, scannable email body
   - Key changes with user benefits
   - CTA to read full release notes
   - Personal sign-off from product team

4. Blog Post (500-700 words)
   - Title that emphasizes user value (not version numbers)
   - Opening paragraph: why this release matters
   - Feature highlights with context and use cases
   - What is coming next (roadmap teaser)
   - CTA to try the new features

5. Social Media Posts
   - Twitter/X post (under 280 characters)
   - LinkedIn post (under 300 words)
   - Each should be standalone and engaging

6. Internal Communication
   - Slack message for the team (3-4 sentences)
   - Talking points for customer-facing teams (5 bullet points)
   - FAQ for support team (5-7 anticipated questions and answers)

7. Enterprise/Admin Communication (if applicable)
   - Admin notification email
   - Configuration changes needed (if any)
   - Timeline for rollout

Each piece should feel like it was written specifically for its audience and channel. Same information, different framing.`,
              result:
                'A complete multi-channel release communication package ready to publish.',
              tip: 'Write the in-app notification first. The constraint of 50 words forces you to identify the single most important message - then expand from there.',
            },
            {
              id: 'tw-p-3-3',
              title: 'Deprecation Notice Writer',
              task: 'Write a deprecation notice for a feature or API being retired',
              prompt: `Write a deprecation notice for a feature or API endpoint being retired.

Product: [product name]
What is being deprecated: [feature name, API endpoint, or functionality]
Reason for deprecation: [why - replacement available, low usage, technical debt, security, etc.]
Replacement: [what users should use instead - or "none" if no replacement]
Current usage: [approximate number of users/integrations affected]

Timeline:
- Announcement date: [date]
- Deprecation date (starts showing warnings): [date]
- End-of-life date (stops working): [date]
- Total migration window: [months]

Generate:

1. Deprecation Announcement
   - Clear statement of what is being deprecated
   - Why (honest, transparent reasoning)
   - Timeline with all key dates
   - What users need to do
   - Where to get help

2. Migration Guide
   - Step-by-step migration from old to new
   - Before/after comparison (what changes in the user experience)
   - Code examples for API deprecations (old code vs. new code)
   - Data migration steps (if data needs to be moved)
   - Testing recommendations
   - Rollback plan if migration causes issues

3. FAQ
   - "Why is this being deprecated?" - honest answer
   - "When does it stop working?" - exact dates
   - "What do I need to do?" - action steps
   - "What if I cannot migrate by the deadline?" - options
   - "Will I lose any data?" - clear answer
   - "Who can I contact for help?" - support channels
   - "Is there a cost to migrate?" - transparent answer
   - Add 3-5 more based on the specific deprecation

4. Communication Timeline
   - Announcement email template
   - 60-day reminder email template
   - 30-day warning email template
   - 7-day final notice email template
   - Day-of sunset confirmation email template
   - Each should be progressively more urgent but always respectful

5. Internal Resources
   - Talking points for support team
   - Escalation path for customers who need extensions
   - Monitoring plan for migration progress

Tone: empathetic and transparent. Deprecating something people use is inconvenient for them. Acknowledge that, explain the "why" clearly, and make migration as painless as possible.`,
              result:
                'A comprehensive deprecation package with migration guidance and multi-stage communications.',
              tip: 'Give at least 90 days of migration window. Anything less creates resentment. Enterprise customers often need 6+ months for significant changes.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Knowledge Base',
          prompts: [
            {
              id: 'tw-p-4-1',
              title: 'Knowledge Base Article Template',
              task: 'Write a knowledge base article for a common user question',
              prompt: `Write a knowledge base article for a common user question or task.

Product: [product name]
Article type: [how-to / troubleshooting / conceptual / reference / FAQ]
User question: [the exact question or problem users have - use their language]
Current answer: [how this is currently handled - support response, workaround, etc.]
Audience: [all users / specific role / specific plan]
Search keywords: [what users type when looking for this answer]

Generate:

1. Article Header
   - Title (matches how users would phrase the question)
   - Short description (1-2 sentences visible in search results)
   - Applicable to: [plan, role, platform]
   - Last updated: [date]

2. Quick Answer
   - The answer in 2-3 sentences (for users who just need the quick version)
   - If it is a how-to: the steps in a numbered list (no explanation, just steps)

3. Detailed Explanation
   - Context: why users encounter this situation
   - Full step-by-step walkthrough with detailed instructions
   - [Screenshot/GIF placeholder: describe what should be shown at each key step]
   - Expected result at the end
   - What to do if the result is different from expected

4. Alternative Methods (if applicable)
   - Method B (different way to achieve the same result)
   - API method (for technical users)
   - Workaround (if there are known limitations)

5. Related Questions
   - "I tried this but got [error]" - quick solution
   - "Can I do this for [variation]?" - answer
   - "What about [edge case]?" - answer
   - Add 3-5 more based on common follow-up questions

6. Related Articles
   - 3-5 links to related content with one-line descriptions

7. Metadata
   - Category
   - Tags
   - Search keywords
   - Difficulty level
   - Estimated time to complete

Write the title in the user's language, not product terminology. If they search "how to change my password" do not title it "Authentication Credential Management."`,
              result:
                'A well-structured KB article optimized for search and self-serve resolution.',
              tip: 'Check your support ticket queue. The top 10 most-asked questions should each have a perfectly written KB article. This alone can reduce ticket volume by 20-30%.',
            },
            {
              id: 'tw-p-4-2',
              title: 'Knowledge Base Audit Report',
              task: 'Audit a knowledge base for quality and freshness',
              prompt: `Audit this knowledge base content for quality, freshness, and gaps.

Product: [product name]
Knowledge base size: [number of articles]
Last major audit: [date or "never"]
Recent product changes: [list major changes in the last 6 months]

Articles to audit:
[Paste article titles and brief descriptions, or paste the actual content of articles you want checked]

Current style guide rules:
- Tone: [professional / conversational / technical]
- Formatting: [specific rules - headers, lists, screenshots, etc.]
- Terminology: [key terms and how they should be used]
- Prohibited: [phrases or patterns to avoid]

Generate:

1. Audit Summary
   - Total articles reviewed
   - Health breakdown: Current / Needs Update / Outdated / Should Archive
   - Overall quality score (1-10)
   - Top 3 priorities for improvement

2. Freshness Check
   For each article:
   - Article title
   - Status: Current / Needs Update / Outdated / Archive
   - Reason for status
   - Specific elements that need updating
   - Priority: High / Medium / Low

3. Quality Check
   For each article reviewed:
   - Clarity score (1-5)
   - Completeness score (1-5)
   - Style compliance score (1-5)
   - Specific issues found:
     - Unclear instructions
     - Missing steps
     - Terminology inconsistencies
     - Formatting violations
     - Missing screenshots or visuals
     - Broken internal links

4. Gap Analysis
   - Topics that should have articles but do not
   - Features with insufficient documentation
   - Common support questions without KB coverage
   - User journey gaps (where does the documentation leave users stranded?)

5. Duplicate and Overlap Detection
   - Articles covering the same topic
   - Recommendation: merge, differentiate, or archive

6. Improvement Plan
   - Priority 1: Articles to update immediately (high traffic + outdated)
   - Priority 2: New articles to write (gap coverage)
   - Priority 3: Articles to archive (outdated + low traffic)
   - Priority 4: Style and formatting cleanup
   - Estimated effort for each priority tier

Format as a spreadsheet-ready report with sortable columns.`,
              result:
                'A comprehensive KB audit report with prioritized action items for improving documentation quality.',
              tip: 'Cross-reference audit results with support ticket data. Articles that are outdated and generate support tickets should be updated first.',
            },
            {
              id: 'tw-p-4-3',
              title: 'KB Article Refresher',
              task: 'Update an outdated knowledge base article',
              prompt: `Update this outdated knowledge base article to reflect current product state.

Product: [product name]
Article title: [current title]
Current article content:
[Paste the full current article text]

What has changed since this article was written:
[Describe all product changes that affect this content - UI changes, feature updates, renamed elements, new options, removed features]

New information to include:
[Any new context, steps, tips, or related features to add]

Style guide requirements:
[Paste key style guide rules or describe the tone and formatting standards]

Generate:

1. Updated Article
   - Full rewritten article incorporating all changes
   - Mark sections that changed with [UPDATED] tags for review
   - Mark new sections with [NEW] tags for review
   - Remove references to deprecated features
   - Update all navigation paths and UI element names
   - Add any new steps required
   - Update the "last updated" date

2. Change Summary
   - What was changed (bullet list of specific modifications)
   - What was added (new content)
   - What was removed (deprecated content)
   - What stayed the same (unchanged sections)

3. Screenshot Update List
   - List of screenshots that need to be retaken
   - For each: what the screenshot should show now
   - New screenshots needed for new sections

4. SEO and Search Updates
   - Updated title (if the current title is suboptimal)
   - Updated meta description
   - Updated keywords and tags
   - Updated related articles section

5. Quality Check
   - Confirm all steps work with current product
   - Flag any instructions that need verification
   - Note any areas where engineering input is needed

Maintain the original article's helpful tone while bringing every detail up to date. If in doubt about a specific behavior, flag it for verification rather than guessing.`,
              result:
                'A fully refreshed KB article with tracked changes and a screenshot update list.',
              tip: 'Batch article refreshes by feature area. When a feature changes, update all related articles in one session instead of discovering them one at a time.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Style Guide',
          prompts: [
            {
              id: 'tw-p-5-1',
              title: 'Style Guide Audit Tool',
              task: 'Audit a document against your style guide',
              prompt: `Audit the following document against our documentation style guide.

Style Guide Rules:

Voice and Tone:
- [e.g., Use active voice, not passive]
- [e.g., Address the user as "you"]
- [e.g., Be direct - avoid hedging language like "you might want to"]
- [e.g., Professional but conversational]

Terminology:
- [Term 1]: always use [preferred term], never [prohibited term]
- [Term 2]: always use [preferred term], never [prohibited term]
- [Add all product-specific terminology rules]

Formatting:
- [e.g., Use sentence case for headings]
- [e.g., Use numbered lists for sequential steps]
- [e.g., Use bullet lists for non-sequential items]
- [e.g., Code elements in backtick formatting]

Structure:
- [e.g., Every article starts with a one-sentence overview]
- [e.g., Maximum heading depth is H3]
- [e.g., Steps must start with a verb]

Prohibited Patterns:
- [e.g., No exclamation marks]
- [e.g., No "simply" or "just" (minimizes complexity)]
- [e.g., No "please" in instructions]
- [e.g., No future tense for current features]

Document to audit:
[Paste the document text]

Generate:

1. Compliance Score
   - Overall score: X/100
   - Score by category: Voice, Terminology, Formatting, Structure

2. Violations Found
   For each violation:
   - Line or section where it occurs
   - The specific text that violates the rule
   - Which rule it violates
   - Suggested correction
   - Severity: Critical (breaks clarity) / Minor (inconsistency) / Style (preference)

3. Positive Findings
   - What the document does well
   - Sections that are exemplary

4. Revised Document
   - Full document with all corrections applied
   - Changes highlighted with [CHANGED] markers

5. Pattern Analysis
   - Recurring violations (habits to break)
   - Rules most frequently ignored
   - Recommendations for the author

Format the violations as a sortable list that can be used as a review checklist.`,
              result:
                'A detailed style compliance audit with specific corrections and pattern analysis.',
              tip: 'Run this on every document before publication. Build it into your review workflow. Consistency compounds over time.',
            },
            {
              id: 'tw-p-5-2',
              title: 'Style Guide Builder',
              task: 'Create or expand a documentation style guide',
              prompt: `Create a documentation style guide for our product and team.

Product: [product name]
Documentation platform: [docs site, wiki, help center, etc.]
Team size: [number of writers and contributors]
Existing style guide: [none / basic / comprehensive but outdated]
Brand voice: [describe in 3-5 adjectives]
Audience: [developers / end users / admins / mixed]
Industry: [your industry - affects terminology and tone]

Generate a comprehensive style guide:

1. Voice and Tone
   - Our documentation voice (3-5 characteristics with examples)
   - How tone changes by content type:
     - Tutorials: [specific tone guidance with example]
     - Reference docs: [specific tone guidance with example]
     - Error messages: [specific tone guidance with example]
     - Release notes: [specific tone guidance with example]
   - Words and phrases we use
   - Words and phrases we never use
   - Before/after examples (5 common rewrites)

2. Grammar and Mechanics
   - Active vs. passive voice (with examples)
   - Tense rules (when to use present, past, future)
   - Pronoun usage (we, you, they)
   - Sentence length guidelines
   - Paragraph length guidelines
   - Oxford comma: yes or no
   - Contractions: yes or no

3. Formatting Standards
   - Heading hierarchy and capitalization rules
   - List formatting (numbered vs. bulleted, punctuation)
   - Code formatting (inline, blocks, language specification)
   - Table formatting
   - Note/warning/tip callout boxes - when and how
   - Link text conventions
   - Image and screenshot standards

4. Terminology Dictionary
   - Product terms (official names, capitalization, usage)
   - Technical terms (preferred terminology)
   - Prohibited terms (with preferred alternatives)
   - Abbreviations and acronyms (when to expand, when to abbreviate)

5. Content Structure Templates
   - How-to article template
   - Conceptual article template
   - Troubleshooting article template
   - API reference template
   - Release notes template

6. Accessibility Standards
   - Alt text requirements for images
   - Heading structure for screen readers
   - Color-independent communication
   - Link text accessibility
   - Plain language guidelines

7. Review Checklist
   - Pre-publication checklist for authors
   - Peer review checklist for reviewers
   - Technical accuracy checklist

Make this guide practical and usable. Include enough examples that a new contributor can understand every rule without asking.`,
              result:
                'A comprehensive style guide that ensures consistency across all documentation.',
              tip: 'Keep the style guide under 20 pages. A guide nobody reads is worse than no guide. Put the most important rules on page one.',
            },
            {
              id: 'tw-p-5-3',
              title: 'Content Consistency Checker',
              task: 'Check multiple documents for cross-document consistency',
              prompt: `Check these documents for cross-document consistency.

Documents to compare:
[Paste or describe 3-5 documents that should be consistent with each other]

Consistency dimensions to check:

1. Terminology Consistency
   - Are the same features, tools, and concepts called the same thing across all documents?
   - Flag any instances where the same thing has different names

2. Factual Consistency
   - Do the documents agree on facts? (prices, limits, features, procedures)
   - Flag any contradictions between documents

3. Process Consistency
   - When the same process is described in multiple places, are the steps identical?
   - Flag any procedural differences

4. Tone Consistency
   - Does the writing voice feel like it comes from the same organization?
   - Flag jarring tone shifts between documents

5. Visual Consistency
   - Are formatting patterns consistent? (heading styles, list styles, callout usage)
   - Flag formatting inconsistencies

Generate:

1. Consistency Report
   - Overall consistency score: X/100
   - Number of inconsistencies found by category
   - Severity distribution: Critical / Moderate / Minor

2. Inconsistency Log
   For each inconsistency:
   - Type (terminology / factual / process / tone / visual)
   - Document A: what it says
   - Document B: what it says
   - Which is correct (if determinable) or recommendation
   - Severity and impact on user experience

3. Terminology Alignment Table
   - Term or concept
   - How Document A refers to it
   - How Document B refers to it
   - Recommended standard term

4. Recommendations
   - Priority fixes (inconsistencies that confuse users)
   - Quick wins (easy standardization opportunities)
   - Systemic patterns (underlying causes of inconsistency)
   - Process recommendations (how to prevent future inconsistencies)

Focus on inconsistencies that would confuse a user who reads both documents. Minor style differences are lower priority than factual contradictions.`,
              result:
                'A cross-document consistency report that prevents users from encountering conflicting information.',
              tip: 'Run this check whenever a major feature ships. That is when documentation across multiple pages is most likely to fall out of sync.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Tutorials',
          prompts: [
            {
              id: 'tw-p-6-1',
              title: 'Interactive Tutorial Outline',
              task: 'Design an interactive tutorial or walkthrough',
              prompt: `Design an interactive tutorial or walkthrough for learning a product feature.

Product: [product name]
Tutorial topic: [what the user will learn to do]
Target audience: [who this tutorial is for - role and skill level]
Learning objective: [what they can do after completing this tutorial]
Estimated completion time: [minutes]
Format: [text-based / interactive / video script / mixed]
Prerequisites: [what they need before starting]

Generate:

1. Tutorial Overview
   - Title (engaging, describes the outcome)
   - One-sentence description
   - What they will build or accomplish
   - Skills they will learn
   - Time estimate

2. Tutorial Structure
   For each section (6-10 sections):
   - Section title
   - Learning objective for this section
   - Estimated time
   - Concept introduction (what they need to understand)
   - Hands-on steps (what they will do)
   - Checkpoint (how to verify they did it correctly)
   - Common mistakes and troubleshooting

3. Detailed Content for Each Section
   - Brief concept explanation (2-3 sentences max - avoid lecturing)
   - Step-by-step instructions (precise and testable)
   - Code samples or configuration examples (if applicable)
   - [Screenshot/GIF placeholder: what to show]
   - Expected result (what they should see)
   - "Try it yourself" challenge (optional practice exercise)

4. Progress Indicators
   - Completion percentage by section
   - Skill badges or achievements (if gamification is appropriate)
   - "You just learned..." summary after each section

5. Branching Points (for interactive tutorials)
   - Decision points where users can choose their path
   - Alternative routes for different use cases
   - "Skip this if you already know..." options

6. Wrap-Up
   - Summary of everything learned
   - What they built or accomplished
   - Next tutorials to take
   - Advanced variations to try
   - Resources for going deeper

7. Feedback Collection
   - "Was this tutorial helpful?" mechanism
   - "Where did you get stuck?" question
   - "What would you add?" open field

Design for momentum. Each section should end with a small win that makes them want to start the next one.`,
              result:
                'A complete tutorial design with progressive learning, checkpoints, and hands-on exercises.',
              tip: 'Put a working result in front of the user within the first 5 minutes. Early success creates motivation to continue.',
            },
            {
              id: 'tw-p-6-2',
              title: 'Developer Quick Start Tutorial',
              task: 'Write a developer quickstart that gets them to "hello world" fast',
              prompt: `Write a developer quickstart tutorial for our product.

Product: [product name]
Developer audience: [backend / frontend / mobile / full-stack / data]
Languages/frameworks supported: [list]
Integration type: [SDK / REST API / webhook / embed / plugin]
"Hello world" moment: [what is the simplest meaningful thing a developer can build - e.g., "make your first API call and get a response"]
Time goal: [how quickly should a developer reach the hello world moment - e.g., "under 5 minutes"]

Technical details:
- Installation: [how to install SDK or access API]
- Authentication: [how to get credentials]
- Base URL: [if API-based]
- Key dependencies: [any required tools or libraries]

Generate:

1. Quickstart Header
   - Title: "Get started with [product] in [X] minutes"
   - What they will build
   - Prerequisites (one-line checklist)
   - Languages available (with tabs for each)

2. Step 1: Get Your Credentials (2 min)
   - Where to sign up
   - How to generate API key or credentials
   - Environment setup (if needed)

3. Step 2: Install (1 min)
   - Package manager commands for each language
   - Version requirements
   - Verification step (confirm installation works)

4. Step 3: Write Your First [X] (2 min)
   - The simplest possible code that does something meaningful
   - Full code sample (copy-pasteable, no placeholders that break)
   - Line-by-line explanation of what the code does
   - Language-specific tabs (Python, JavaScript, Go, etc.)

5. Step 4: Run It
   - Command to execute
   - Expected output (exact)
   - "If you see this, you are ready to go"
   - "If you see an error..." troubleshooting

6. What You Just Did
   - 2-3 sentences explaining what happened under the hood
   - Why this matters for what they will build next

7. Next Steps (choose your path)
   - Path A: [common use case 1] - link to tutorial
   - Path B: [common use case 2] - link to tutorial
   - Path C: [common use case 3] - link to tutorial
   - Full API reference - link
   - Code examples repository - link

8. Troubleshooting
   - Top 5 errors developers hit during quickstart
   - Solution for each (specific, not "check your configuration")

Every code sample must be copy-pasteable and runnable. No placeholder values that cause errors. Test every example.`,
              result:
                'A developer quickstart that gets them from zero to working code in minutes.',
              tip: 'Time yourself following this quickstart from a clean environment. If it takes longer than your stated time goal, simplify or split into steps.',
            },
            {
              id: 'tw-p-6-3',
              title: 'Video Script for Tutorial',
              task: 'Write a video tutorial script with visual directions',
              prompt: `Write a video tutorial script with visual directions.

Product: [product name]
Tutorial topic: [what the video will teach]
Target viewer: [who this is for]
Video length target: [minutes]
Style: [screen recording with voiceover / talking head + screen / animated explainer]
Platform: [where this will be published - YouTube, docs site, in-app, LMS]

Content to cover:
[Describe what the tutorial needs to teach]

Generate:

1. Video Outline
   - Title (YouTube-optimized if applicable)
   - Description (2-3 sentences for the listing)
   - Chapters/timestamps breakdown

2. Script (scene by scene)
   For each scene:
   - Timestamp: [start - end]
   - Visual: [describe exactly what should be on screen]
   - Audio/Voiceover: [exact script to read]
   - On-screen text: [any text overlays, callouts, or highlights]
   - Transition: [how to move to the next scene]

3. Introduction (first 30 seconds)
   - Hook: capture attention and state what they will learn
   - "By the end of this video, you will be able to..."
   - Brief preview of what they will see

4. Main Content (bulk of video)
   For each teaching segment:
   - Concept introduction (brief explanation)
   - Demo (show it in action - describe screen recording directions)
   - Highlight key moments (zoom, highlight, annotate)
   - Checkpoint: "You should now see..."

5. Closing (last 30 seconds)
   - Recap of what they learned (3 bullet points)
   - Next video or resource to check out
   - CTA: subscribe, check docs, join community
   - End screen elements

6. B-Roll and Visual Suggestions
   - Moments that need diagrams or animations
   - Screen areas to zoom or highlight
   - Transition effects between sections

7. Accessibility
   - Caption/subtitle notes
   - Key visuals that need verbal description
   - Pace and clarity guidelines for voiceover

8. Production Notes
   - Screen resolution and window size for recording
   - Demo data or account setup needed
   - Features or settings to configure before recording
   - Practice run checklist

Write the voiceover script conversationally - as if teaching a friend, not reading a manual. Keep sentences short for natural delivery.`,
              result:
                'A complete video tutorial script with visual directions, voiceover text, and production notes.',
              tip: 'Record the voiceover first, then screen capture to match. Trying to talk and demo simultaneously leads to awkward pacing.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the math on what AI saves you in a typical technical writing month.',
      timeTable: [
        {
          task: 'API endpoint documentation',
          without: '2-3 hours/endpoint',
          withAI: '20-30 minutes',
          saved: '2 hrs/endpoint',
        },
        {
          task: 'User guide creation',
          without: '1-3 days/guide',
          withAI: '2-4 hours',
          saved: '1-2 days/guide',
        },
        {
          task: 'Release notes writing',
          without: '2-4 hours/release',
          withAI: '20-40 minutes',
          saved: '2 hrs/release',
        },
        {
          task: 'KB article management',
          without: 'Rarely audited',
          withAI: '4-6 hours/quarter',
          saved: 'Infinite - done',
        },
        {
          task: 'Style guide enforcement',
          without: '30-60 min/article',
          withAI: '5 min/article',
          saved: '30 min/article',
        },
        {
          task: 'Tutorial development',
          without: '2-3 days/tutorial',
          withAI: '4-6 hours',
          saved: '1-2 days/tutorial',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '30-50 hrs/month',
      },
      sections: [
        {
          heading: 'The Documentation Edge',
          paragraphs: [
            'In 2026, the technical writer using AI keeps docs current with every release instead of falling behind. They audit 400 KB articles in a day instead of never. They produce API docs at the speed engineering ships endpoints. Their counterpart is still three releases behind and apologizing for outdated screenshots. Same editorial skill, same user empathy, radically different coverage.',
            'The gap is not quality. It is throughput.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a technical writer to spend your days reformatting tables and translating commit messages. You became one because clear documentation is the difference between users who succeed and users who abandon. AI gives you back the time to focus on clarity, accuracy, and the user experience - the things that make documentation genuinely great.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Release notes generation is the fastest win. You will feel the difference after your first AI-drafted changelog.',
    },

    ch7: {
      intro:
        'One system a day. By the end of the week, AI will be part of your technical writing workflow. Follow along and check each step.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'tw-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'tw-1-2', label: 'Create a free Perplexity account' },
            { id: 'tw-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Document an API Endpoint',
          duration: '25 min',
          items: [
            {
              id: 'tw-2-1',
              label: 'Run the API Endpoint Documentation prompt with a real endpoint spec',
            },
            {
              id: 'tw-2-2',
              label: 'Review the output against the actual API behavior',
            },
            {
              id: 'tw-2-3',
              label: 'Compare: how long would writing this from scratch have taken?',
            },
          ],
        },
        {
          day: 3,
          title: 'Write a User Guide',
          duration: '25 min',
          items: [
            {
              id: 'tw-3-1',
              label: 'Use the Step-by-Step User Guide prompt for a feature that needs documentation',
            },
            {
              id: 'tw-3-2',
              label: 'Walk through the guide following each step to verify accuracy',
            },
          ],
        },
        {
          day: 4,
          title: 'Generate Release Notes',
          duration: '20 min',
          items: [
            {
              id: 'tw-4-1',
              label: 'Run the Release Notes Changelog Writer with your latest engineering changelog',
            },
            {
              id: 'tw-4-2',
              label: 'Create a Release Communication Suite for the same release',
            },
          ],
        },
        {
          day: 5,
          title: 'Audit Your Knowledge Base',
          duration: '25 min',
          items: [
            {
              id: 'tw-5-1',
              label: 'Run the Knowledge Base Audit Report on a section of your KB',
            },
            {
              id: 'tw-5-2',
              label: 'Use the KB Article Refresher to update the highest-priority outdated article',
            },
            {
              id: 'tw-5-3',
              label: 'Write a new KB article using the Knowledge Base Article Template',
            },
          ],
        },
        {
          day: 6,
          title: 'Enforce Your Style Guide',
          duration: '20 min',
          items: [
            {
              id: 'tw-6-1',
              label: 'Run the Style Guide Audit Tool on a recent document',
            },
            {
              id: 'tw-6-2',
              label: 'If you do not have a style guide, use the Style Guide Builder to create one',
            },
            {
              id: 'tw-6-3',
              label: 'Check 2-3 recent articles for cross-document consistency',
            },
          ],
        },
        {
          day: 7,
          title: 'Design a Tutorial',
          duration: '25 min',
          items: [
            {
              id: 'tw-7-1',
              label: 'Use the Interactive Tutorial Outline for a feature that needs a tutorial',
            },
            {
              id: 'tw-7-2',
              label: 'Identify which AI system saved you the most time this week',
            },
            {
              id: 'tw-7-3',
              label: 'Share this guide with a fellow technical writer who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
