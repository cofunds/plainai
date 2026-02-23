import type { WorkbookData } from './types'

export const uxdesignersData = {
  professionId: 'uxdesigners',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for UI/UX Designers',
  heroDescription:
    'A practical guide to using AI in your design workflow - from user research to accessibility audits, with real tools, systems, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You just finished a two-week sprint of user interviews. Twelve sessions, each 45 minutes. You have 9 hours of recorded conversations, 47 pages of notes, and a product team expecting a research synthesis by Thursday. You start reading through the transcripts, highlighting patterns, coding themes, and trying to find the signal in a mountain of qualitative data. By the end of day one, you have processed four interviews.',
        'The wireframes for the new checkout flow are due next week. You have three competing approaches in your head, but translating them into something the team can evaluate requires building out each one - user flows, edge cases, error states, responsive behavior. Each iteration takes hours of careful work in Figma, and the stakeholder review will probably send you back to revise at least two of them.',
        'Meanwhile, the usability test results from last month are sitting in a spreadsheet - task completion rates, time on task, error counts, and participant quotes. The PM keeps asking for the report. You know what the findings are, but writing them up in a way that non-designers understand and actually act on takes a solid day of focused writing.',
        'Your design system documentation is also falling behind. Three new components shipped without proper usage guidelines, accessibility notes, or code specifications. The engineering team is implementing them inconsistently because the docs do not exist yet. You keep meaning to write them, but there is always something more urgent.',
        'You became a UX designer to solve problems for users. Instead, you spend most of your time synthesizing research, documenting decisions, and producing deliverables that communicate your thinking to people who do not think in wireframes.',
      ],
      highlight:
        'What if AI could handle the synthesis, documentation, and presentation prep - so you could focus on the design thinking and user empathy that only you can provide?',
      closingParagraph:
        'Not by replacing your design instincts. Not by generating layouts for you. By processing the data, drafting the documents, and structuring the presentations - so your time goes into the creative and strategic work that makes products better for users.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is a design operations accelerator, not a creative replacement',
          paragraphs: [
            'Let\'s address the elephant in the room. AI is not going to replace UX designers. It cannot empathize with users. It cannot observe the subtle frustration when someone taps the wrong button. It cannot feel the flow of a well-designed interaction or understand why one layout feels right and another feels off. That intuition is yours, and it is what makes you valuable.',
            'What AI does exceptionally well is process and organize information. It can synthesize interview transcripts and identify themes. It can structure usability findings into clear reports. It can draft component documentation and accessibility guidelines. These are the tasks that eat 40-50% of your week - the parts of the job that are not design but are necessary for design to have impact.',
          ],
        },
        {
          heading: 'Where AI fits in the design workflow',
          paragraphs: [
            'Think of AI as a research and documentation assistant who has read every Nielsen Norman article, every WCAG guideline, and every design system documentation example - but has never watched a user struggle with a confusing interface. It can organize and articulate design thinking, but it cannot originate it.',
            'You conduct the research and AI synthesizes the findings. You identify the usability issues and AI drafts the report. You design the components and AI writes the documentation. You present the work and AI structures the talking points. In every case, the design judgment is yours - AI handles the output production.',
            'The UX designers gaining the most from AI are using it to close the gap between having insights and communicating them. Less time writing reports, more time in Figma. Less time on documentation, more time with users.',
          ],
        },
      ],
      keyInsight:
        'Your design intuition + your user empathy + AI\'s information processing = better design communication in less time. AI handles the synthesis and documentation. You handle the design thinking.',
    },

    ch3: {
      intro: 'Five tools that cover the core UX design workflow. Practical, design-focused, no bloat.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your research synthesis and writing partner',
          description:
            'Synthesize user research, draft usability reports, create personas, write UX copy, and structure design presentations. Best for turning your design thinking into polished documents and deliverables.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - best all-rounder',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your documentation and analysis specialist',
          description:
            'Excels at processing lengthy research transcripts, writing detailed design system documentation, analyzing large usability datasets, and producing comprehensive reports. Handles very large context - paste full interview transcripts for thorough synthesis.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long transcripts and detailed docs',
          icon: 'claude',
        },
        {
          name: 'Figma AI',
          role: 'Your design production accelerator',
          description:
            'AI features within Figma for generating design variations, auto-layout suggestions, content population, and component organization. Speeds up the production side of design work directly in your primary design tool.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential if you live in Figma',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your design research assistant',
          description:
            'Research design patterns, competitive UX analysis, accessibility standards, and industry benchmarks with source citations. Real-time access to current best practices and design trend data.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for UX research with sources',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your design knowledge base',
          description:
            'Organize research findings, design decisions, component documentation, and project notes. AI-powered search and summarization across your entire design knowledge base. Build a team design wiki that scales.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Add when your team needs centralized docs',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for research synthesis and documentation, plus Perplexity for design research. Add Figma AI as your in-tool accelerator and Notion AI for your team knowledge base. That combination covers research, documentation, production, and organization.',
    },

    ch4: {
      intro:
        'Six systems that map directly to the work you do every week as a UX designer. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'User Research Synthesis',
          before:
            'After a round of user interviews, you have hours of recordings and pages of notes. You read through everything, code themes manually, look for patterns, build an affinity diagram, and write up findings. Synthesizing 10-12 interviews takes 2-3 full days of focused work. The team waits.',
          after:
            'Paste interview transcripts into AI and get theme identification, pattern analysis, and a structured synthesis in 30 minutes. You review, add your observational insights, and deliver the findings in hours instead of days.',
          flow: [
            'Transcribe interviews using your recording tool',
            'Paste transcripts into Claude or ChatGPT with the synthesis prompt',
            'AI identifies themes, patterns, and key quotes',
            'Review and add observations that only you noticed in person',
            'Finalize the research synthesis document',
          ],
          timeSaved: { without: '2-3 days per study', withAI: '3-4 hours' },
        },
        {
          id: 2,
          name: 'Wireframe and Flow Documentation',
          before:
            'Your wireframes make sense to you, but the team needs documentation - user flows with decision logic, annotation of design rationale, edge case handling, and responsive behavior notes. Writing all this up takes almost as long as creating the wireframes themselves.',
          after:
            'Describe your wireframe approach and design decisions to AI. It generates structured flow documentation, edge case matrices, and annotated descriptions. You review and refine instead of writing from scratch.',
          flow: [
            'Describe the user flow, key screens, and design decisions',
            'AI generates structured documentation with decision points',
            'Add edge cases and error states you want covered',
            'AI produces a complete flow specification',
            'Review for accuracy and attach to your design file',
          ],
          timeSaved: { without: '4-6 hours per flow', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'Usability Testing Analysis',
          before:
            'Usability test data sits in spreadsheets and recordings. You need to calculate task success rates, compile error patterns, pull participant quotes, identify severity ratings, and write it all up in a report that stakeholders will actually read. A proper usability report takes a full day or more.',
          after:
            'Feed AI your task data, observations, and quotes. It calculates metrics, identifies patterns, assigns severity ratings, and drafts a complete report. You add your expert interpretation and deliver in half the time.',
          flow: [
            'Compile your usability data - task results, observations, quotes',
            'Run the usability report prompt with the raw data',
            'AI generates metrics, patterns, and severity-rated findings',
            'Add your expert interpretation and design recommendations',
            'Format the final report for your stakeholder audience',
          ],
          timeSaved: { without: '1-2 days per study', withAI: '3-4 hours' },
        },
        {
          id: 4,
          name: 'Design System Documentation',
          before:
            'New components ship and the documentation falls behind. Each component needs usage guidelines, do\'s and don\'ts, accessibility requirements, code specifications, and visual examples. Writing thorough component docs takes 2-3 hours per component, and you have a backlog of a dozen.',
          after:
            'Describe the component, its variants, and intended usage to AI. It generates comprehensive documentation including usage guidelines, accessibility requirements, and implementation notes. You review for accuracy and publish. The backlog clears in days instead of weeks.',
          flow: [
            'Describe the component - purpose, variants, props, and behavior',
            'AI generates complete documentation with usage guidelines',
            'Add accessibility requirements and code specifications',
            'Review against your design system standards',
            'Publish to your design system documentation site',
          ],
          timeSaved: { without: '2-3 hours per component', withAI: '30-45 minutes' },
        },
        {
          id: 5,
          name: 'Stakeholder Presentation Prep',
          before:
            'Design reviews and stakeholder presentations require translating your design decisions into language that non-designers understand. You build slide decks, write talking points, anticipate objections, and rehearse your rationale. Prep for a major design review easily takes half a day.',
          after:
            'Share your design approach and key decisions with AI. It structures a presentation narrative, generates talking points for each slide, anticipates stakeholder questions, and drafts responses. Prep time drops from hours to minutes.',
          flow: [
            'Describe your design solution and key decisions',
            'AI structures a presentation narrative arc',
            'Generate talking points and anticipate stakeholder questions',
            'Review and customize for your specific audience',
            'Prepare response frameworks for likely pushback',
          ],
          timeSaved: { without: '3-4 hours per review', withAI: '45-60 minutes' },
        },
        {
          id: 6,
          name: 'Accessibility Audit',
          before:
            'Accessibility reviews require checking every screen against WCAG guidelines - color contrast, keyboard navigation, screen reader compatibility, focus order, alt text, heading hierarchy. A thorough audit is tedious, detail-oriented work that takes days for a complex product.',
          after:
            'Describe your interface elements and interaction patterns to AI. It generates a structured WCAG compliance checklist, identifies potential violations, suggests fixes, and drafts accessibility documentation. The audit framework that took days to build now takes hours.',
          flow: [
            'Describe or paste your interface structure, components, and interactions',
            'AI generates a WCAG 2.1 compliance checklist specific to your product',
            'Review flagged issues and verify with accessibility testing tools',
            'AI drafts remediation recommendations for each finding',
            'Create the accessibility documentation and compliance report',
          ],
          timeSaved: { without: '2-3 days per product area', withAI: '4-6 hours' },
        },
      ],
    },

    ch5: {
      intro:
        'You do not need to learn prompt engineering. You just need the right prompts for UX work. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - User Research Synthesis',
          prompts: [
            {
              id: 'ux-p-1-1',
              title: 'Research Persona Creator',
              task: 'Create data-driven personas from user research',
              prompt: `Create user personas from the following research data.

Research context:
- Product: [what the product does]
- Number of participants: [count]
- Research method: [interviews, surveys, contextual inquiry, etc.]

Research data:
[Paste interview excerpts, survey data, or research notes]

For each persona identified (create 2-3):
1. Name, age range, role, and a one-line description
2. Goals - what they are trying to accomplish (primary and secondary)
3. Frustrations - what gets in their way
4. Behaviors - how they currently solve the problem
5. Motivations - why they care about this
6. Tech comfort level
7. A representative quote from the research data
8. Key scenario - the most common situation where they need this product
9. Decision factors - what influences their choices

Also provide:
- A comparison matrix showing how the personas differ on key dimensions
- Which persona should be the primary design target and why

Base every element on the research data. Flag any persona elements that are inferred rather than directly supported by data.`,
              result:
                'Data-driven personas with comparison matrix and primary target recommendation.',
              tip: 'Share the research quotes that support each persona trait. Stakeholders trust personas more when they can see the evidence behind them.',
            },
            {
              id: 'ux-p-1-2',
              title: 'User Journey Map Draft',
              task: 'Create a user journey map from research findings',
              prompt: `Create a user journey map from the following research data.

Context:
- Product/service: [what it is]
- Journey being mapped: [which user journey - e.g., onboarding, purchase, support request]
- Primary persona: [who is making this journey]

Research data:
[Paste relevant interview excerpts, observation notes, analytics data, or survey responses]

Build a journey map with these columns:
1. Stage name (3-6 stages from awareness to goal completion)
2. User actions - what the user does at each stage
3. Touchpoints - where the interaction happens (app, website, email, in-person, etc.)
4. Thoughts - what the user is thinking (use actual quotes where possible)
5. Emotions - emotional state (frustrated, confident, confused, relieved, etc.)
6. Pain points - what goes wrong or feels difficult
7. Opportunities - where design could improve the experience
8. Metrics to track - how to measure improvement at each stage

Also provide:
- The single biggest drop-off point in the journey
- Top 3 design opportunities ranked by user impact
- Moments of delight worth preserving or amplifying

Format as a structured table that can be transferred into a visual journey map.`,
              result:
                'A complete journey map structure with prioritized design opportunities.',
              tip: 'Journey maps are communication tools first. Use this as the data foundation, then design the visual version in Figma or Miro.',
            },
            {
              id: 'ux-p-1-3',
              title: 'Interview Theme Synthesis',
              task: 'Synthesize user interview transcripts into themes and insights',
              prompt: `Synthesize the following user interview transcripts into research themes and actionable insights.

Research context:
- Product: [what you are researching]
- Research question: [what you are trying to learn]
- Number of interviews: [count]

Interview data:
[Paste transcripts, notes, or key excerpts from each interview]

Perform the following synthesis:
1. Theme identification - group related findings into 5-8 themes
2. For each theme:
   - Theme name and description
   - How many participants mentioned it
   - Supporting quotes (2-3 per theme)
   - Design implication - what this means for the product
3. Surprising findings - anything unexpected that challenges assumptions
4. Contradictions - areas where participants disagreed with each other
5. Unmet needs - problems participants mentioned that the product does not address
6. Behavioral patterns - actions that were consistent across participants
7. Priority matrix - rank themes by frequency and impact

Provide an executive summary (5-7 sentences) that a PM could read and understand the key findings without reading the full synthesis.`,
              result:
                'A structured research synthesis with themed findings, quotes, and an executive summary.',
              tip: 'Run this in Claude for large transcript sets. Its longer context window handles more interview data in a single pass.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Wireframe and Flow Documentation',
          prompts: [
            {
              id: 'ux-p-2-1',
              title: 'User Flow Specification',
              task: 'Document a user flow with decision points and edge cases',
              prompt: `Document the following user flow as a complete specification.

Flow name: [e.g., checkout flow, onboarding flow, account recovery]
Primary persona: [who this is designed for]
Entry point: [where the user starts]
Success state: [what "done" looks like]

Flow description:
[Describe the flow - screens, steps, decisions, and interactions]

Create a flow specification that includes:
1. Flow overview - purpose and scope in 2-3 sentences
2. Step-by-step flow with screen descriptions
3. Decision points - where the user makes a choice and what happens for each option
4. Error states - what can go wrong at each step and how the UI responds
5. Edge cases - unusual but valid scenarios (empty states, max limits, expired sessions, etc.)
6. Loading and transition states
7. Responsive behavior notes - how the flow changes on mobile vs. desktop
8. Data requirements - what information is needed at each step
9. Analytics events - what to track at each step
10. Accessibility considerations for each screen

Format as a structured document that an engineer could use to build the flow without ambiguity.`,
              result:
                'A comprehensive flow specification covering happy paths, error states, and edge cases.',
              tip: 'Share this with engineering early. The edge cases you document here prevent 80% of the "what should happen when..." questions during development.',
            },
            {
              id: 'ux-p-2-2',
              title: 'Design Decision Documentation',
              task: 'Document design decisions and rationale for a feature',
              prompt: `Document the design decisions and rationale for the following feature.

Feature: [feature name]
Problem being solved: [user need or business goal]
Design approach chosen: [describe the design solution]

Alternatives considered:
[List other approaches you evaluated]

Research or data that informed the decision:
[Any user research, analytics, competitive analysis, or best practices]

Create a design decision document with:
1. Problem statement - the user need in clear terms
2. Design principles applied (which principles guided this decision)
3. Options evaluated - brief description of each alternative
4. Evaluation criteria - what factors mattered most
5. Decision matrix - how each option scored against the criteria
6. Chosen approach and rationale
7. Trade-offs acknowledged - what you are giving up
8. Risks and mitigations
9. Success metrics - how you will know this was the right call
10. Future considerations - what might change this decision later

Write for a mixed audience - designers, PMs, and engineers should all understand the reasoning.`,
              result:
                'A clear design decision document with rationale that builds stakeholder confidence.',
              tip: 'Document decisions when you make them, not weeks later. The reasoning is freshest in the moment.',
            },
            {
              id: 'ux-p-2-3',
              title: 'Interaction Pattern Documentation',
              task: 'Document an interaction pattern for team consistency',
              prompt: `Document the following interaction pattern for our design team and engineering team.

Pattern name: [e.g., inline editing, drag and drop reordering, multi-step form, infinite scroll]
Where it is used: [which parts of the product]
Why this pattern: [the user need it serves]

Describe the interaction:
[How the pattern works - triggers, states, transitions, feedback]

Create pattern documentation with:
1. Pattern overview - what it is and when to use it
2. When to use this pattern (appropriate scenarios)
3. When NOT to use this pattern (common misapplications)
4. Interaction states:
   - Default state
   - Hover/focus state
   - Active/in-progress state
   - Success state
   - Error state
   - Loading state
   - Disabled state
5. Animation and transition specifications
6. Keyboard interaction (full keyboard support description)
7. Screen reader behavior (ARIA roles, labels, announcements)
8. Touch interaction (mobile-specific behavior)
9. Implementation notes for engineering
10. Do's and Don'ts (3-4 examples each)

Keep it specific and visual-ready. This should serve as the source of truth for anyone implementing this pattern.`,
              result:
                'A complete interaction pattern specification covering all states and accessibility requirements.',
              tip: 'Include real product screenshots or Figma links next to the documentation. Patterns are easier to understand with visual references.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Usability Testing Analysis',
          prompts: [
            {
              id: 'ux-p-3-1',
              title: 'Usability Report Summary',
              task: 'Create a usability test report from session data',
              prompt: `Create a usability test report from the following test data.

Test context:
- Product/feature tested: [what was tested]
- Test method: [moderated, unmoderated, remote, in-person]
- Number of participants: [count]
- Tasks tested: [list the tasks participants were asked to complete]

Task results:
[For each task: task description, success rate, average time, errors observed, participant comments]

Observations:
[Any additional observations from the sessions]

Generate a usability report with:
1. Executive summary (4-5 sentences - key findings a stakeholder needs)
2. Methodology overview
3. Participant demographics summary
4. Task-by-task analysis:
   - Success rate and benchmark comparison
   - Average task time
   - Common errors or failure points
   - Participant quotes
   - Severity rating (critical, major, moderate, minor)
5. Cross-task patterns - issues that affected multiple tasks
6. Top 5 findings ranked by severity and frequency
7. Recommendations for each finding (specific design changes, not vague suggestions)
8. What worked well - positive findings worth preserving
9. Recommended next steps and timeline

Write for a non-designer audience. Use plain language. Avoid UX jargon unless defined.`,
              result:
                'A stakeholder-ready usability report with severity-rated findings and specific recommendations.',
              tip: 'Include participant video clips or quotes alongside key findings. Seeing real users struggle is more persuasive than any chart.',
            },
            {
              id: 'ux-p-3-2',
              title: 'Severity Rating Framework',
              task: 'Apply a severity rating framework to usability findings',
              prompt: `Apply a usability severity rating to the following findings and help me prioritize them.

Product context: [what was tested]
Findings from usability testing:
[List each finding - what the issue is, how many participants encountered it, what happened]

For each finding, rate severity using this framework:
- Frequency: How often does this occur? (most users / some users / few users)
- Impact: How much does this affect task completion? (prevents completion / delays significantly / minor inconvenience)
- Persistence: Can users recover on their own? (cannot recover / recover with difficulty / recover easily)

Then assign an overall severity:
1. Critical - prevents task completion, affects most users
2. Major - significantly delays task, affects many users
3. Moderate - causes confusion, workaround exists
4. Minor - cosmetic or preference issue

For each rated finding:
- Severity level with justification
- Recommended fix (specific design change)
- Estimated design effort (small, medium, large)
- Estimated engineering effort (small, medium, large)
- Quick win flag (high impact + low effort)

Provide a prioritized action plan: what to fix first, second, and third.`,
              result:
                'A prioritized list of usability findings with severity ratings and a recommended fix order.',
              tip: 'Quick wins build team confidence in usability testing. Always lead with an easy fix that shows visible improvement.',
            },
            {
              id: 'ux-p-3-3',
              title: 'Competitive UX Evaluation',
              task: 'Evaluate competitor UX for a specific workflow',
              prompt: `Conduct a competitive UX evaluation for the following workflow.

Workflow being evaluated: [e.g., onboarding, checkout, search, settings management]
Our product: [brief description]
Competitors to evaluate: [competitor 1], [competitor 2], [competitor 3]

For each competitor, analyze:
1. How they handle this workflow (step-by-step description)
2. Number of steps to complete the task
3. Strengths - what they do well in this workflow
4. Weaknesses - where the experience breaks down
5. Unique features or patterns worth noting
6. Accessibility approach (visible considerations)
7. Mobile experience for this workflow

Then provide:
- Comparison matrix across all competitors and our product
- Best practices observed that we should consider adopting
- Anti-patterns observed that we should avoid
- Gaps in the market - things nobody does well
- Design opportunities specific to our product
- Screenshots or specific UI elements worth referencing (describe them)

Focus on the experience, not the visual design. I care about usability, flow, and interaction quality.`,
              result:
                'A structured competitive UX analysis with best practices and design opportunities.',
              tip: 'Run this in Perplexity for current competitor info, then use ChatGPT or Claude for the deeper analysis layer.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Design System Documentation',
          prompts: [
            {
              id: 'ux-p-4-1',
              title: 'Component Documentation',
              task: 'Write comprehensive documentation for a design system component',
              prompt: `Write comprehensive documentation for the following design system component.

Component name: [e.g., Button, Modal, Dropdown, Card, Toast, Data Table]
Component purpose: [what user need it serves]
Variants: [list all variants - primary, secondary, sizes, states]
Props/parameters: [list configurable properties]

Current usage in the product:
[Where and how this component is currently used]

Generate complete component documentation:
1. Overview - what the component is and when to use it
2. Anatomy diagram description - label each visual element
3. Variants - description and use case for each
4. Properties/props table (name, type, default, description)
5. States - default, hover, focus, active, disabled, loading, error
6. Usage guidelines:
   - When to use (3-4 scenarios)
   - When NOT to use (3-4 anti-patterns)
   - Placement and spacing guidelines
   - Content guidelines (character limits, formatting, tone)
7. Responsive behavior - how it adapts across breakpoints
8. Accessibility:
   - Required ARIA attributes
   - Keyboard interaction map
   - Screen reader announcements
   - Color contrast requirements
   - Focus management
9. Do's and Don'ts (4-5 examples each)
10. Related components - when to use this vs. similar components

Write for designers and engineers. Be specific enough to eliminate interpretation differences.`,
              result:
                'Comprehensive component documentation ready for your design system site.',
              tip: 'Document one component per day using this prompt. In two weeks, you can clear a significant documentation backlog.',
            },
            {
              id: 'ux-p-4-2',
              title: 'Design Token Documentation',
              task: 'Document design tokens and their usage guidelines',
              prompt: `Document the following design tokens and their usage guidelines.

Token category: [color, typography, spacing, elevation, border radius, animation, etc.]
Token list:
[Paste your token names and values - e.g., color-primary-500: #3B82F6, spacing-md: 16px]

Design context:
- Brand personality: [how the brand should feel]
- Design principles: [relevant principles that guided token choices]

Create documentation for each token:
1. Token name and value
2. Semantic meaning - what this token represents conceptually
3. When to use - specific use cases and components
4. When NOT to use - common misuse patterns
5. Relationship to other tokens (e.g., primary-500 is the base, 400 is hover, 600 is pressed)

Also provide:
- Token hierarchy explanation (how tokens are organized and why)
- Mapping table - which tokens apply to which component states
- Dark mode considerations (if applicable)
- Accessibility implications (contrast ratios for color tokens, minimum sizes for spacing)
- Migration guide if replacing old values
- Quick reference cheat sheet

Write for both designers (who pick tokens in Figma) and engineers (who reference tokens in code).`,
              result:
                'Complete design token documentation with usage guidelines and quick reference.',
              tip: 'Good token documentation prevents 90% of "what color should I use" questions. The investment pays for itself in team velocity.',
            },
            {
              id: 'ux-p-4-3',
              title: 'Design System Changelog',
              task: 'Create a changelog entry for design system updates',
              prompt: `Create a design system changelog entry for the following updates.

Version: [version number]
Release date: [date]

Changes:
[List all changes - new components, updated components, deprecated items, bug fixes, token changes]

For each change, write a changelog entry that includes:
1. Change type tag: [New], [Updated], [Deprecated], [Fixed], [Breaking]
2. Component or token affected
3. What changed (specific and concise)
4. Why it changed (user feedback, accessibility fix, consistency improvement)
5. Migration guide for breaking changes (exact steps to update)
6. Visual diff description (what looks different)

Also create:
- A release summary paragraph (3-4 sentences for the newsletter or Slack announcement)
- A "what designers need to do" section (action items for the design team)
- A "what engineers need to do" section (action items for the dev team)
- Known issues or limitations in this release
- Preview of what is coming in the next release

Keep entries scannable. Engineers and designers skim changelogs - put the most important information first in each entry.`,
              result:
                'A complete changelog entry with migration guides and team-specific action items.',
              tip: 'Publish changelogs consistently with each release. Teams trust a design system more when they can see it actively maintained.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Stakeholder Presentation Prep',
          prompts: [
            {
              id: 'ux-p-5-1',
              title: 'Design Review Presentation',
              task: 'Structure a design review presentation with talking points',
              prompt: `Help me structure a design review presentation for the following feature.

Feature: [feature name]
Audience: [who will be in the review - PM, engineering, leadership, etc.]
Review goal: [approval, feedback, alignment, sign-off]
Time allotted: [duration]

Design context:
- Problem being solved: [user need or business goal]
- Research that informed the design: [key findings]
- Design approach: [describe the solution]
- Key design decisions: [list the important choices you made]
- Trade-offs: [what you knowingly gave up]

Create a presentation structure with:
1. Slide-by-slide outline (title and content summary for each slide)
2. Opening - how to frame the problem compellingly in 60 seconds
3. Narrative arc - the story from problem to solution
4. Talking points for each slide (what to say, not just what to show)
5. Transition phrases between sections
6. Anticipated questions from each audience type (PM, eng, leadership)
7. Prepared responses for likely objections
8. Decision points - what you need the audience to decide
9. Closing - clear next steps and timeline
10. Backup slides - data and details to have ready if asked

Keep it under [slide count] slides. Every slide should earn its place.`,
              result:
                'A complete presentation structure with talking points and objection responses.',
              tip: 'Practice the transitions out loud. The flow between slides matters more than the content on any single slide.',
            },
            {
              id: 'ux-p-5-2',
              title: 'Design Critique Preparation',
              task: 'Prepare for a design critique by structuring your presentation and feedback request',
              prompt: `Help me prepare to present my work in a design critique.

Design work: [what you are presenting - feature, screen, flow, component]
Stage: [early exploration, mid-fidelity, high-fidelity, pre-launch]
Specific feedback needed: [what you want the group to focus on]
Known concerns: [areas you are unsure about]

Create a critique preparation document:
1. Context slide content - minimum background the audience needs (2-3 sentences)
2. What to present and in what order
3. Specific questions to ask the group (5-7 targeted questions)
4. How to frame your feedback request (avoid "what do you think?" - too vague)
5. Areas where you intentionally want to defend your choices vs. areas where you are genuinely open
6. Potential feedback you might receive and how to evaluate it
7. What "good feedback" looks like for this stage of design
8. Facilitation notes - how to keep the critique productive and on track
9. Post-critique action plan template

Also provide:
- A 30-second introduction script for your presentation
- Red flags in feedback that indicate a misunderstanding of the problem
- How to handle feedback that contradicts your research findings`,
              result:
                'A structured critique preparation guide with facilitation notes and feedback frameworks.',
              tip: 'Critique is about the work, not about you. Frame your questions around user needs and the audience will give more useful feedback.',
            },
            {
              id: 'ux-p-5-3',
              title: 'Executive Design Summary',
              task: 'Create an executive summary of design work for leadership',
              prompt: `Create an executive summary of the following design work for leadership.

Project: [project name]
Timeline: [when this work happened]
Team: [who was involved]

Work completed:
- Research conducted: [type and scale]
- Key findings: [bullet points]
- Design solution: [brief description]
- User testing results: [if available]

Business context:
- Business goal: [what the company is trying to achieve]
- User impact: [how users benefit]
- Technical feasibility: [engineering input if available]

Create an executive summary that:
1. Opens with the business impact (not the design process)
2. Summarizes the problem in one sentence
3. Explains the solution in two sentences (no design jargon)
4. Presents key metrics or research data that support the approach
5. Shows the expected outcome (user and business value)
6. Lists what needs to happen next (decisions, resources, timeline)
7. Identifies risks and dependencies
8. Ends with a clear ask

Length: One page maximum. Use bullet points. Every sentence should justify its inclusion. Leadership does not need process details - they need confidence that the team solved the right problem well.`,
              result:
                'A concise executive summary that connects design work to business outcomes.',
              tip: 'Lead with outcomes, not process. Leadership cares about what this means for users and the business, not how many interviews you ran.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Accessibility Audit',
          prompts: [
            {
              id: 'ux-p-6-1',
              title: 'WCAG Compliance Checklist',
              task: 'Generate a WCAG compliance checklist for a specific product area',
              prompt: `Generate a WCAG 2.1 compliance checklist customized for the following product area.

Product area: [which screens, flows, or features]
Target conformance level: [A, AA, or AAA]
Component types present: [forms, tables, modals, navigation, media, etc.]
User types: [sighted, screen reader, keyboard-only, low vision, etc.]

Create a customized checklist organized by WCAG principle:

Perceivable:
- Text alternatives for non-text content
- Captions and audio descriptions for media
- Content adaptability (responsive, zoom, orientation)
- Color and contrast requirements

Operable:
- Keyboard accessibility for all interactive elements
- Timing adjustability for time-limited content
- Seizure and motion sensitivity
- Navigation consistency and findability

Understandable:
- Language and readability
- Predictable behavior and navigation
- Input assistance and error handling

Robust:
- Parsing and compatibility with assistive technology
- Status messages and dynamic content updates

For each checklist item:
- The WCAG success criterion number and name
- What to check (specific to your product area)
- How to test it (tool or method)
- Common failures to watch for
- Pass/Fail column for recording results

Flag items that are most commonly failed in [your component types].`,
              result:
                'A customized WCAG compliance checklist with testing instructions specific to your product.',
              tip: 'Use this as a living audit document. Check items as you go and track remediation progress per criterion.',
            },
            {
              id: 'ux-p-6-2',
              title: 'Accessibility Remediation Plan',
              task: 'Create a remediation plan for accessibility issues found in an audit',
              prompt: `Create an accessibility remediation plan from the following audit findings.

Product: [product name]
Audit scope: [what was audited]
Audit method: [automated tools, manual testing, screen reader testing, etc.]

Findings:
[List each accessibility issue - WCAG criterion, description, severity, location in the product]

For each finding, create a remediation entry:
1. Issue description in plain language
2. WCAG criterion and conformance level affected
3. User impact - who is affected and how
4. Severity: Critical (blocks access), Major (significant barrier), Moderate (workaround available), Minor (inconvenience)
5. Recommended fix - specific design and code changes needed
6. Effort estimate (small, medium, large)
7. Priority score (severity x frequency)
8. Responsible team (design, engineering, content)

Then provide:
- A sprint-ready backlog sorted by priority
- Quick wins list (high impact + low effort)
- Items that require design changes vs. code-only fixes
- Dependencies between fixes
- Estimated total effort to reach target conformance
- Recommended testing approach to verify each fix
- Ongoing monitoring plan to prevent regression`,
              result:
                'A prioritized accessibility remediation plan with sprint-ready backlog items.',
              tip: 'Fix critical issues first - these block access entirely. Then move to major issues. Perfect is not the goal; continuous improvement is.',
            },
            {
              id: 'ux-p-6-3',
              title: 'Accessible Design Pattern Review',
              task: 'Review a design pattern for accessibility compliance and improvement',
              prompt: `Review the following design pattern for accessibility compliance and suggest improvements.

Pattern: [describe the interaction pattern - e.g., dropdown menu, modal dialog, tab navigation, carousel, accordion]
Current implementation: [describe how it currently works]
Component structure: [describe the HTML/component structure if known]

Evaluate the pattern against:
1. Keyboard accessibility:
   - Can all functions be accessed via keyboard?
   - Is the tab order logical?
   - Are keyboard shortcuts needed? What should they be?
   - Is focus management correct (especially for dynamic content)?
2. Screen reader experience:
   - What ARIA roles, states, and properties are needed?
   - What announcements should the screen reader make?
   - Is the reading order logical when the DOM changes?
3. Visual accessibility:
   - Do all states meet color contrast requirements?
   - Is focus visible and prominent?
   - Does the pattern work at 200% zoom?
   - Does it work with high contrast mode?
4. Cognitive accessibility:
   - Is the interaction intuitive and predictable?
   - Are instructions clear?
   - Is error recovery straightforward?
5. Motor accessibility:
   - Are click/tap targets large enough (44x44 minimum)?
   - Can interactions be completed without precision movements?

For each issue found:
- What needs to change
- Example code or ARIA markup
- Testing approach to verify the fix

Provide a "before and after" accessibility specification for this pattern.`,
              result:
                'A detailed accessibility review with specific fixes and ARIA implementation guidance.',
              tip: 'Test with actual assistive technology after implementing fixes. AI can identify issues but cannot replicate the screen reader experience.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what your time savings look like when AI handles the synthesis and documentation.',
      timeTable: [
        {
          task: 'User research synthesis',
          without: '2-3 days per study',
          withAI: '3-4 hours',
          saved: '1.5-2.5 days',
        },
        {
          task: 'Flow documentation',
          without: '4-6 hours per flow',
          withAI: '1-2 hours',
          saved: '3-4 hrs each',
        },
        {
          task: 'Usability reports',
          without: '1-2 days per study',
          withAI: '3-4 hours',
          saved: '0.5-1.5 days',
        },
        {
          task: 'Component documentation',
          without: '2-3 hours per component',
          withAI: '30-45 minutes',
          saved: '1.5-2 hrs each',
        },
        {
          task: 'Stakeholder presentation prep',
          without: '3-4 hours per review',
          withAI: '45-60 minutes',
          saved: '2-3 hrs each',
        },
        {
          task: 'Accessibility audit',
          without: '2-3 days per area',
          withAI: '4-6 hours',
          saved: '1-2 days',
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
          heading: 'The Shift',
          paragraphs: [
            'The best UX designers are not the ones who produce the most deliverables. They are the ones who spend the most time understanding users and solving problems. But the reality of the job is that synthesis, documentation, and communication take more time than the design work itself.',
            'AI does not make you a better designer. It removes the bottleneck between your design thinking and its impact on the product.',
          ],
        },
        {
          heading: 'The Opportunity',
          paragraphs: [
            'Every hour saved on writing reports and documenting components is an hour you can spend in research sessions, design exploration, or usability testing. Those are the activities that create better products. AI gives you back the time for the work that matters most.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Synthesize your next round of research with AI. See how it changes your week. Build from there.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your design workflow. Follow the plan, check off each step, and by the end of the week you will have a new way of handling the documentation side of design.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'ux-1-1', label: 'Create a free ChatGPT or Claude account' },
            { id: 'ux-1-2', label: 'Create a free Perplexity account' },
            { id: 'ux-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Synthesize Research',
          duration: '20 min',
          items: [
            {
              id: 'ux-2-1',
              label: 'Take your most recent interview notes or transcripts',
            },
            {
              id: 'ux-2-2',
              label: 'Run the Interview Theme Synthesis prompt with the data',
            },
            {
              id: 'ux-2-3',
              label: 'Compare the AI synthesis to your own mental model of the findings',
            },
          ],
        },
        {
          day: 3,
          title: 'Document a Flow',
          duration: '20 min',
          items: [
            {
              id: 'ux-3-1',
              label: 'Pick a wireframe or flow that needs documentation',
            },
            {
              id: 'ux-3-2',
              label: 'Run the User Flow Specification prompt with your design details',
            },
          ],
        },
        {
          day: 4,
          title: 'Write Component Docs',
          duration: '15 min',
          items: [
            {
              id: 'ux-4-1',
              label: 'Pick one component from your documentation backlog',
            },
            {
              id: 'ux-4-2',
              label: 'Run the Component Documentation prompt',
            },
            {
              id: 'ux-4-3',
              label: 'Review and publish to your design system',
            },
          ],
        },
        {
          day: 5,
          title: 'Prep a Presentation',
          duration: '15 min',
          items: [
            {
              id: 'ux-5-1',
              label: 'Run the Design Review Presentation prompt for your next review',
            },
            {
              id: 'ux-5-2',
              label: 'Use the talking points and anticipated questions to prepare',
            },
          ],
        },
        {
          day: 6,
          title: 'Explore Accessibility',
          duration: '20 min',
          items: [
            {
              id: 'ux-6-1',
              label: 'Run the WCAG Compliance Checklist prompt for a product area',
            },
            {
              id: 'ux-6-2',
              label: 'Identify which systems and prompts save you the most time',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan',
          duration: '10 min',
          items: [
            {
              id: 'ux-7-1',
              label: 'What worked this week? Which prompts will you keep using?',
            },
            {
              id: 'ux-7-2',
              label: 'Share this guide with a designer on your team',
            },
            {
              id: 'ux-7-3',
              label: 'Pick one system to make a regular part of your workflow',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
