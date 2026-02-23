import type { WorkbookData } from './types'

export const frontendData = {
  professionId: 'frontend',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Frontend Developers',
  heroDescription:
    'A practical guide to integrating AI into your frontend workflow - from component scaffolding to debugging CSS, with real tools, systems, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'It starts with a Figma handoff. The designer dropped 14 screens in the channel overnight with the note "should be straightforward." You open the first one and immediately spot three components that look similar but are subtly different. You know from experience that "subtly different" means three hours of pixel-pushing and a dozen CSS overrides.',
        'You start scaffolding a new component. Import React, define props, write the TypeScript interface, set up the state, add the Tailwind classes, wire the event handlers, export it. You have done this exact sequence a thousand times. The component is different each time, but the ceremony around it never changes.',
        'Then a PR review notification pops up. 400 lines changed. You start reading through it - catching a missing key prop here, a potential re-render issue there, a hardcoded color value that should be a design token. Useful work, but slow. You are the human linter.',
        'After lunch, a bug report comes in. "The layout breaks on iPad Mini in landscape mode." You open DevTools, start toggling breakpoints, adjusting flex properties, testing media queries. It takes 45 minutes to find that one rogue `overflow: hidden` buried three components deep. Another 20 minutes to fix it without breaking two other viewports.',
        'By end of day, you have written maybe 200 lines of meaningful logic. The rest was boilerplate, debugging, reviewing, and configuring. You are a skilled engineer spending most of your time on tasks that do not require your full skill set.',
      ],
      highlight:
        'What if you could automate the repetitive 70% and focus on the architecture and UX decisions that actually need your brain?',
      closingParagraph:
        'Not by writing worse code. Not by letting AI ship untested components. By using AI as a fast, tireless pair programmer that handles the scaffolding, catches the bugs, and drafts the tests - so you can focus on building great user experiences.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is not replacing frontend developers',
          paragraphs: [
            'Let\'s be direct: AI is not going to take your job. It cannot design a coherent component architecture. It does not understand your users. It has no taste. It cannot look at a UI and feel that something is "off" the way you can.',
            'What AI is exceptionally good at is the mechanical work that surrounds your creative and architectural decisions. Writing boilerplate. Converting designs to markup. Generating test cases. Explaining cryptic error messages. Writing documentation for code you already wrote.',
          ],
        },
        {
          heading: 'Think of it as a coding partner',
          paragraphs: [
            'The best mental model is a junior developer who has memorized every Stack Overflow answer, every MDN page, and every GitHub repo - but has zero product sense. It can produce code instantly, but you need to direct it, review it, and make the judgment calls.',
            'You say "build me a responsive card grid with Tailwind that handles 1, 2, 3, and 4 column layouts with proper gap handling." It gives you working code in 10 seconds. You would have written the same thing in 8 minutes. That is not cheating. That is leverage.',
            'The developers who will thrive are the ones who use AI to remove friction from their workflow - not the ones who resist it, and not the ones who blindly accept its output.',
          ],
        },
      ],
      keyInsight:
        'Your design eye + your architecture knowledge + AI\'s speed = shipping better frontends in half the time. AI handles the boilerplate. You handle the decisions that matter.',
    },

    ch3: {
      intro: 'You do not need a dozen tools. These five cover the full frontend workflow.',
      tools: [
        {
          name: 'Cursor',
          role: 'Your AI-native code editor',
          description:
            'Full IDE with built-in AI chat, inline editing, and codebase-aware completions. Understands your project context. Best for writing and refactoring code directly in your editor.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Start here - replaces VS Code',
          icon: 'cursor',
        },
        {
          name: 'GitHub Copilot',
          role: 'Your autocomplete on steroids',
          description:
            'Inline code suggestions as you type. Predicts the next line, function, or block. Works inside VS Code, JetBrains, and Neovim. Best for rapid boilerplate and pattern completion.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best inline completions',
          icon: 'copilot',
        },
        {
          name: 'ChatGPT',
          role: 'Your problem-solving partner',
          description:
            'General-purpose AI for debugging, explaining errors, brainstorming approaches, and working through complex logic. Paste in error messages, stack traces, or code snippets for instant help.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for debugging conversations',
          icon: 'chatgpt',
        },
        {
          name: 'v0 by Vercel',
          role: 'Your UI generator',
          description:
            'Describe a component or page in plain English and get production-ready React + Tailwind code. Ideal for rapid prototyping, generating starting points for complex layouts, and exploring UI variations.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for UI prototyping',
          icon: 'v0',
        },
        {
          name: 'Claude',
          role: 'Your code reviewer and architect',
          description:
            'Excellent at reviewing large code blocks, suggesting architectural improvements, explaining complex patterns, and writing detailed documentation. Handles long context well - paste entire files for review.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for reviews and architecture',
          icon: 'claude',
        },
      ],
      footer:
        'Start with Cursor or Copilot in your editor plus ChatGPT or Claude in a browser tab. Add v0 when you need rapid UI prototyping. That covers 90% of your daily needs.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual daily workflow. Each system maps to a real task you do every week. Click each to explore the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'System 1 - Component Scaffolding',
          before:
            'You manually create the file, write the import statements, define the TypeScript interface, set up props with defaults, add the JSX structure, apply Tailwind classes, wire event handlers, and export. For every single component. The ceremony takes 10-15 minutes before you write any real logic.',
          after:
            'You describe the component in plain English - what it does, what props it takes, what it looks like. AI generates the full scaffold in seconds. You review, tweak, and start adding your actual business logic immediately.',
          flow: [
            'Describe the component: purpose, props, and visual behavior',
            'AI generates full TypeScript + React + Tailwind scaffold',
            'Review the output for correctness and naming conventions',
            'Adjust props, styling, and structure to match your patterns',
            'Add your business logic on top of the clean scaffold',
          ],
          timeSaved: { without: '10-15 min/component', withAI: '2-3 min/component' },
        },
        {
          id: 2,
          name: 'System 2 - CSS and Styling Debugging',
          before:
            'A layout breaks on a specific viewport or browser. You open DevTools, start toggling CSS properties one by one, add and remove classes, read through nested flex/grid containers trying to find the culprit. Often takes 30-60 minutes for a single stubborn issue.',
          after:
            'You paste the relevant JSX and CSS into AI, describe the bug, and get a diagnosis in seconds. It explains why the layout breaks, which property is causing it, and gives you the exact fix - often catching issues you would have spent another 20 minutes finding.',
          flow: [
            'Copy the component JSX and relevant styles',
            'Describe the visual bug and which viewport/browser',
            'AI identifies the root cause and explains why',
            'Apply the suggested fix',
            'Ask AI to check for similar issues in related components',
          ],
          timeSaved: { without: '30-60 min/bug', withAI: '5-10 min/bug' },
        },
        {
          id: 3,
          name: 'System 3 - Code Review Assistance',
          before:
            'You open a PR with 300+ lines. You read through every change, checking for type safety issues, missing error handling, performance problems, accessibility gaps, and style inconsistencies. A thorough review takes 30-45 minutes per PR.',
          after:
            'AI does a first pass - flagging potential re-renders, missing memoization, accessibility issues, type problems, and naming inconsistencies. You review its findings and focus your human attention on architecture and logic correctness.',
          flow: [
            'Paste the diff or changed files into AI',
            'Ask for review focusing on performance, types, and a11y',
            'AI returns categorized findings with severity levels',
            'Verify each finding - dismiss false positives',
            'Add your own architectural and logic review on top',
          ],
          timeSaved: { without: '30-45 min/PR', withAI: '10-15 min/PR' },
        },
        {
          id: 4,
          name: 'System 4 - Testing Generation',
          before:
            'Writing tests for a component means setting up renders, mocking props, simulating user interactions, and asserting on DOM output. You know you should test more, but writing tests takes as long as writing the component itself. So tests get skipped.',
          after:
            'Give AI your component code and it generates comprehensive test suites - unit tests, interaction tests, edge cases, and accessibility checks. Tests that would have taken 30 minutes to write are generated in 2 minutes. You review and adjust.',
          flow: [
            'Paste your component code into AI',
            'Specify your testing framework (Vitest, Jest, Testing Library)',
            'AI generates full test suite with multiple scenarios',
            'Review tests for correctness and add edge cases',
            'Run the tests and fix any failures',
          ],
          timeSaved: { without: '25-40 min/component', withAI: '5-10 min/component' },
        },
        {
          id: 5,
          name: 'System 5 - Documentation Writing',
          before:
            'Documentation is always the last priority. Component APIs go undocumented. README files are stale. New team members spend days figuring out patterns that should have been written down. "We should document this" is the most common lie in frontend teams.',
          after:
            'Paste your component code and AI generates prop tables, usage examples, and pattern documentation. What used to be a task you "never got to" becomes a 5-minute step at the end of every feature.',
          flow: [
            'Paste the component or module code',
            'AI generates JSDoc comments, prop tables, and examples',
            'Review for accuracy and add context-specific notes',
            'Add to your docs system (Storybook, MDX, README)',
            'Keep docs updated by re-running when code changes',
          ],
          timeSaved: { without: 'Rarely done', withAI: '5 min/component' },
        },
        {
          id: 6,
          name: 'System 6 - Performance Optimization',
          before:
            'You notice the app feels sluggish. You open the React Profiler, stare at the flamegraph, try to identify unnecessary re-renders, check bundle sizes, and experiment with memoization and code splitting. Performance optimization feels like detective work without clear leads.',
          after:
            'Share your component tree or specific code with AI and describe the performance issue. It identifies likely bottlenecks - missing memo calls, expensive calculations in render, unoptimized re-renders - and suggests specific fixes with code examples.',
          flow: [
            'Describe the performance issue (slow render, large bundle, janky scroll)',
            'Paste the relevant component code or tree',
            'AI identifies bottlenecks and explains the cause',
            'Apply suggested optimizations (memo, useMemo, lazy, etc.)',
            'Measure before/after to confirm improvement',
          ],
          timeSaved: { without: '1-3 hours/issue', withAI: '15-30 min/issue' },
        },
      ],
    },

    ch5: {
      intro:
        'These prompts are ready to copy and paste. Replace the bracketed placeholders with your real project details. Each prompt is specific to frontend work - React, TypeScript, Tailwind, and modern tooling.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Component Scaffolding',
          prompts: [
            {
              id: 'fe-p-1-1',
              title: 'React Component from Description',
              task: 'Generate a fully typed React component from a plain English description',
              prompt: `Generate a React component with TypeScript and Tailwind CSS.

Component name: [ComponentName]
Purpose: [what this component does in one sentence]

Props:
- [propName]: [type] - [what it controls]
- [propName]: [type] - [what it controls]
- [propName]?: [type] - [optional - what it controls]

Visual behavior:
- [describe layout - e.g., "horizontal card with image on left, text on right"]
- [describe responsive behavior - e.g., "stacks vertically on mobile"]
- [describe interactive states - e.g., "hover shows shadow, active scales down slightly"]

Requirements:
- Use TypeScript interface for props (not type alias)
- Use Tailwind CSS only (no inline styles)
- Include proper aria attributes for accessibility
- Include default props where sensible
- Export as named export

Give me the complete component file, ready to save as [ComponentName].tsx.`,
              result:
                'A production-ready component file with types, Tailwind styling, and accessibility attributes.',
              tip: 'Be very specific about responsive behavior. The more detail you give about breakpoints, the better the output.',
            },
            {
              id: 'fe-p-1-2',
              title: 'Component Variant Generator',
              task: 'Generate variants of an existing component using cva or similar patterns',
              prompt: `I have a base component that needs variants. Here is the current code:

[Paste your component code]

I need these variants:
- Size: [sm, md, lg] - affects [padding, font size, etc.]
- Variant: [primary, secondary, outline, ghost] - affects [colors, borders, backgrounds]
- State: [default, disabled, loading] - affects [opacity, cursor, content]

Requirements:
- Use class-variance-authority (cva) for variant management
- Keep Tailwind classes organized and readable
- Include TypeScript types for all variant combinations
- Add a loading spinner for the loading state
- Ensure disabled state is properly accessible (aria-disabled, tabIndex)

Generate the updated component with all variants and the cva configuration.`,
              result:
                'A component with clean variant management using cva, fully typed variant props.',
              tip: 'If you are not using cva, ask AI to use clsx/cn pattern instead - just specify in the prompt.',
            },
            {
              id: 'fe-p-1-3',
              title: 'Form Component with Validation',
              task: 'Scaffold a complete form with validation logic',
              prompt: `Build a React form component with the following fields:

[List each field:]
- [fieldName]: [type - text/email/select/textarea/checkbox] - [validation rules - required, min length, pattern, etc.]
- [fieldName]: [type] - [validation rules]
- [fieldName]: [type] - [validation rules]

Requirements:
- Use React Hook Form with zodResolver
- Define a Zod schema for all validation rules
- Tailwind CSS styling with proper error states (red borders, error messages below fields)
- Show inline validation errors on blur and on submit
- Include a submit handler that logs the typed form data
- Accessible: proper labels, aria-describedby for errors, focus management
- TypeScript: infer form types from the Zod schema

Give me three files:
1. The Zod schema (schema.ts)
2. The form component (Form.tsx)
3. Usage example`,
              result:
                'A complete form with type-safe validation, error handling, and accessibility built in.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - CSS and Styling',
          prompts: [
            {
              id: 'fe-p-2-1',
              title: 'CSS Bug Diagnosis',
              task: 'Diagnose and fix a layout or styling bug',
              prompt: `I have a CSS/layout bug. Here is the component code:

[Paste the JSX/TSX with Tailwind classes or CSS]

The bug:
- What I expect: [describe the correct layout/appearance]
- What actually happens: [describe the broken behavior]
- When it happens: [specific viewport, browser, or condition]
- Parent container context: [is it inside a flex, grid, or overflow container?]

Please:
1. Identify the root cause of the bug
2. Explain WHY it happens (not just what to change)
3. Give me the exact fix with updated code
4. Flag if this fix could affect other viewports or siblings
5. Suggest a defensive approach to prevent this class of bug`,
              result:
                'A clear diagnosis with explanation and exact code fix.',
              tip: 'Always include the parent container context. Most CSS bugs come from inherited flex/grid/overflow properties.',
            },
            {
              id: 'fe-p-2-2',
              title: 'Responsive Layout Builder',
              task: 'Create a responsive layout that works across all breakpoints',
              prompt: `Build a responsive layout with Tailwind CSS:

Layout description:
- Desktop (1024px+): [describe - e.g., "3-column grid, sidebar left, main center, aside right"]
- Tablet (768px-1023px): [describe - e.g., "2-column, sidebar collapses to top bar"]
- Mobile (< 768px): [describe - e.g., "single column, everything stacks"]

Content sections:
- [Section 1]: [content type and approximate height]
- [Section 2]: [content type]
- [Section 3]: [content type]

Requirements:
- Tailwind CSS only (mobile-first approach)
- Proper spacing and gaps at each breakpoint
- No content overflow or horizontal scroll at any size
- Container max-width with auto margins for large screens
- Semantic HTML elements (nav, main, aside, section)

Give me the complete JSX with Tailwind classes and explain the responsive strategy.`,
              result:
                'A fully responsive layout with clean breakpoint transitions and semantic HTML.',
            },
            {
              id: 'fe-p-2-3',
              title: 'Design Token Migration',
              task: 'Convert hardcoded colors and values to design tokens',
              prompt: `I need to migrate hardcoded values to design tokens. Here is my component:

[Paste component code with hardcoded colors, spacing, fonts]

My existing design tokens / Tailwind theme:
[Paste your tailwind.config.ts theme extension or CSS custom properties]

Please:
1. Identify every hardcoded value that should be a token (colors, spacing, font sizes, shadows, border radii)
2. Map each to an existing token, or suggest a new token name if none exists
3. Rewrite the component using only design tokens / theme values
4. List any new tokens I need to add to my Tailwind config
5. Flag any inconsistencies (e.g., using #3b82f6 when my brand blue is #2563eb)`,
              result:
                'A cleaned-up component using consistent design tokens with a list of config additions.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Code Review',
          prompts: [
            {
              id: 'fe-p-3-1',
              title: 'Full Component Review',
              task: 'Get a thorough code review on a React component',
              prompt: `Review this React component for production readiness:

[Paste the full component code]

Check for:
1. TypeScript: Are types strict? Any implicit "any"? Are props properly typed?
2. Performance: Unnecessary re-renders? Missing useMemo/useCallback? Expensive operations in render?
3. Accessibility: ARIA attributes? Keyboard navigation? Screen reader support? Focus management?
4. Error handling: What happens if props are undefined? API calls fail? Data is empty?
5. Naming: Are variable/function names clear and consistent with React conventions?
6. Tailwind: Redundant classes? Missing responsive variants? Inconsistent spacing scale?
7. Edge cases: Empty states? Loading states? Very long text? Missing images?

For each issue found:
- Severity: Critical / Warning / Suggestion
- Line or section affected
- What is wrong and why it matters
- Exact code fix

Be strict. I want to catch issues before they reach production.`,
              result:
                'A categorized list of issues with severity, explanation, and exact fixes.',
              tip: 'Paste the entire component, not just the part you are worried about. AI catches issues in the context you did not think to check.',
            },
            {
              id: 'fe-p-3-2',
              title: 'PR Diff Review',
              task: 'Review a pull request diff for issues',
              prompt: `Review this PR diff for a React/TypeScript frontend project:

[Paste the git diff or changed code sections]

Context: This PR is for [describe the feature or fix].

Review for:
1. Logic correctness - does the code do what the PR claims?
2. Type safety - any type assertions (as), any, or missing types?
3. React anti-patterns - state mutations, missing deps in hooks, prop drilling?
4. Breaking changes - could this affect other components or routes?
5. Testing gaps - what should be tested that probably is not?
6. CSS/styling regressions - could these style changes break other pages?

Format your review as:
- MUST FIX: [blocking issues]
- SHOULD FIX: [important but not blocking]
- NIT: [style and minor suggestions]
- QUESTION: [things that need clarification from the author]`,
              result:
                'A structured PR review categorized by severity, ready to paste into your review.',
            },
            {
              id: 'fe-p-3-3',
              title: 'Accessibility Audit',
              task: 'Audit a component or page for accessibility issues',
              prompt: `Audit this component/page for WCAG 2.1 AA compliance:

[Paste the JSX/TSX code]

Check:
1. Semantic HTML: Are headings in order? Are lists used for lists? Is there a main landmark?
2. Keyboard: Can every interactive element be reached and activated via keyboard?
3. Screen readers: Are images alt-texted? Are form inputs labeled? Are dynamic changes announced?
4. Color contrast: Flag any text/background combinations that likely fail 4.5:1 ratio
5. Focus management: Is focus visible? Does it move logically? Is it trapped in modals?
6. ARIA: Are ARIA roles, states, and properties used correctly? Any ARIA that could be replaced with semantic HTML?
7. Motion: Is there a prefers-reduced-motion consideration for animations?

For each issue:
- WCAG criterion violated (e.g., 1.1.1 Non-text Content)
- Severity: Critical / Major / Minor
- Exact code fix`,
              result:
                'A WCAG-mapped accessibility audit with severity levels and code fixes.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Testing',
          prompts: [
            {
              id: 'fe-p-4-1',
              title: 'Component Test Suite',
              task: 'Generate a comprehensive test suite for a React component',
              prompt: `Write a complete test suite for this React component:

[Paste the component code]

Testing setup: [Vitest/Jest] + React Testing Library + @testing-library/user-event

Generate tests for:
1. Rendering: Does it render without crashing? Does it show correct initial state?
2. Props: Does each prop affect the output correctly? What about optional/missing props?
3. User interactions: Click handlers, form inputs, toggles, hover states
4. Conditional rendering: Different states (loading, error, empty, populated)
5. Accessibility: Role queries, aria attributes, keyboard interaction
6. Edge cases: Very long strings, empty arrays, null values, rapid clicks

Requirements:
- Use screen queries (getByRole, getByText) over test IDs where possible
- Use userEvent over fireEvent for realistic interactions
- Each test should have a clear description of what it tests and why
- Group related tests in describe blocks
- Include setup/teardown where needed
- Mock any external dependencies or API calls

Give me the complete test file ready to run.`,
              result:
                'A complete test file with organized test groups covering rendering, interaction, and edge cases.',
              tip: 'Always review AI-generated tests. They sometimes assert on implementation details instead of user-visible behavior.',
            },
            {
              id: 'fe-p-4-2',
              title: 'Integration Test for User Flow',
              task: 'Test a multi-step user flow across components',
              prompt: `Write an integration test for this user flow:

Flow: [Describe the steps]
Example: "User opens the settings page, changes their display name, clicks save, sees a success toast, and the new name appears in the header."

Components involved:
[Paste relevant component code or describe them]

Route structure:
[Describe routing if relevant]

Test this flow end-to-end:
- Each step the user takes (clicks, types, navigates)
- What the user should see at each step
- Loading states and transitions
- Error scenarios (what if save fails? what if network is down?)
- The final state after the flow completes

Use: [Vitest/Jest] + React Testing Library + MSW for API mocking

Give me the complete integration test with all mocks set up.`,
              result:
                'An integration test that walks through the complete user flow with realistic interactions and API mocking.',
            },
            {
              id: 'fe-p-4-3',
              title: 'Test Coverage Gap Finder',
              task: 'Identify what is missing from existing tests',
              prompt: `Here is my component and its existing test file:

Component:
[Paste component code]

Current tests:
[Paste test file]

Analyze the gaps:
1. What user interactions are untested?
2. What conditional branches are not covered?
3. What edge cases are missing (empty data, errors, loading)?
4. What accessibility behaviors are untested?
5. Are there any tested behaviors that are testing implementation details instead of user behavior?

For each gap:
- Why it matters (what could break without this test)
- The exact test code to add

Also flag any existing tests that are brittle or testing the wrong thing.`,
              result:
                'A gap analysis with specific missing tests and code to add them.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Documentation',
          prompts: [
            {
              id: 'fe-p-5-1',
              title: 'Component Documentation',
              task: 'Generate complete documentation for a component',
              prompt: `Generate documentation for this React component:

[Paste the component code]

Include:
1. Component overview: What it does in 2-3 sentences
2. Props table: Name, Type, Default, Required, Description - formatted as markdown table
3. Usage examples:
   - Basic usage (minimal props)
   - With all optional props
   - Common real-world patterns (2-3 examples)
4. Accessibility notes: What ARIA roles are used, keyboard behavior
5. Styling: How to customize (which Tailwind classes, which props control appearance)
6. Related components: What it is commonly used with
7. Gotchas: Common mistakes or things to watch out for

Format as MDX compatible with Storybook docs or any markdown documentation system.`,
              result:
                'Ready-to-use component documentation in MDX format.',
              tip: 'Run this after every new component. It takes 2 minutes and saves your team hours of confusion.',
            },
            {
              id: 'fe-p-5-2',
              title: 'JSDoc and Inline Comments',
              task: 'Add proper JSDoc comments to a code file',
              prompt: `Add comprehensive JSDoc comments to this TypeScript/React code:

[Paste your code]

Requirements:
- JSDoc for every exported function, component, type, and interface
- @param tags with types and descriptions
- @returns tag with description
- @example tags with realistic usage examples
- Inline comments only where logic is non-obvious (do NOT comment obvious code)
- Use @see to reference related functions/components
- Use @deprecated where applicable with migration notes

Keep comments concise. If the code is self-explanatory, do not add noise. Only comment the "why", not the "what."`,
              result:
                'Your code with professional JSDoc comments that enhance IDE tooltips and generated docs.',
            },
            {
              id: 'fe-p-5-3',
              title: 'Architecture Decision Record',
              task: 'Document an architectural decision for the team',
              prompt: `Write an Architecture Decision Record (ADR) for this frontend decision:

Decision: [e.g., "We chose Zustand over Redux for state management"]

Context:
- Project: [type of app, team size, scale]
- Problem: [what prompted this decision]
- Constraints: [budget, timeline, team skill, etc.]

Options we considered:
1. [Option A]: [brief description]
2. [Option B]: [brief description]
3. [Option C]: [brief description]

We chose: [which option]

Write the ADR with:
- Title and date
- Status (accepted/proposed/deprecated)
- Context: why this decision was needed
- Decision: what we chose and why
- Consequences: positive, negative, and neutral impacts
- Alternatives rejected: why each was not chosen
- References: relevant docs or benchmarks

Keep it under 500 words. Technical but readable.`,
              result:
                'A clean ADR document ready to add to your project docs.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Performance',
          prompts: [
            {
              id: 'fe-p-6-1',
              title: 'Re-render Optimizer',
              task: 'Identify and fix unnecessary re-renders',
              prompt: `Analyze this React component tree for unnecessary re-renders:

[Paste the component(s) - include parent and children if relevant]

State management: [useState/useReducer/Zustand/Redux/Context]
Known issue: [describe the symptom - e.g., "typing in the search input re-renders the entire product list"]

Please:
1. Trace the render path - what causes each component to re-render?
2. Identify every unnecessary re-render and explain why it happens
3. For each issue, give the specific fix:
   - React.memo with custom comparator if needed
   - useMemo for expensive computations
   - useCallback for callback props
   - State colocation (moving state closer to where it is used)
   - Context splitting if context is the problem
4. Show the optimized code
5. Estimate the render count reduction (before vs after)

Prioritize fixes by impact. Some re-renders are cheap and not worth optimizing.`,
              result:
                'A render analysis with prioritized fixes and optimized code.',
              tip: 'Not every re-render needs fixing. Ask AI to focus on renders that cause visible jank or affect user input latency.',
            },
            {
              id: 'fe-p-6-2',
              title: 'Bundle Size Reduction',
              task: 'Identify and fix bundle size issues',
              prompt: `I need to reduce my frontend bundle size. Here is my current setup:

Framework: [Next.js/Vite/CRA]
Current bundle size: [size from build output or lighthouse]
Major dependencies: [list your largest npm packages]

My entry point / page code:
[Paste the main page or layout component]

Please:
1. Identify likely bundle size culprits based on my dependencies
2. Suggest which imports can be dynamically imported (React.lazy / next/dynamic)
3. Find any imports that pull in more than needed (e.g., importing all of lodash vs lodash/get)
4. Suggest tree-shaking improvements
5. Recommend lighter alternatives for heavy libraries
6. Give me a code-splitting strategy for my routes/pages

For each suggestion, estimate the size reduction and show the code change.`,
              result:
                'A prioritized list of bundle optimizations with estimated savings and code changes.',
            },
            {
              id: 'fe-p-6-3',
              title: 'Core Web Vitals Fix',
              task: 'Diagnose and fix Core Web Vitals issues',
              prompt: `My page has poor Core Web Vitals scores. Here are the numbers:

- LCP (Largest Contentful Paint): [score] - target < 2.5s
- FID/INP (Interaction to Next Paint): [score] - target < 200ms
- CLS (Cumulative Layout Shift): [score] - target < 0.1

Page code:
[Paste the page component or relevant sections]

Image handling: [how images are loaded - next/image, img tags, etc.]
Fonts: [how fonts are loaded - next/font, Google Fonts link, etc.]
Third-party scripts: [analytics, chat widgets, etc.]

For each failing metric:
1. Diagnose the most likely cause based on my code
2. Explain the fix with exact code changes
3. Estimate the improvement
4. List any infrastructure changes needed (CDN, caching headers, etc.)

Prioritize by impact. What single change will improve scores the most?`,
              result:
                'A diagnosis of each Core Web Vital issue with prioritized fixes and code changes.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the real impact on your weekly workflow - measured in time you get back.',
      timeTable: [
        {
          task: 'Component scaffolding',
          without: '3-4 hrs/week',
          withAI: '45 min/week',
          saved: '2.5-3 hrs',
        },
        {
          task: 'CSS/styling debugging',
          without: '2-3 hrs/week',
          withAI: '30 min/week',
          saved: '1.5-2.5 hrs',
        },
        {
          task: 'Code reviews',
          without: '3-5 hrs/week',
          withAI: '1-2 hrs/week',
          saved: '2-3 hrs',
        },
        {
          task: 'Writing tests',
          without: '2-4 hrs/week',
          withAI: '30-60 min/week',
          saved: '1.5-3 hrs',
        },
        {
          task: 'Documentation',
          without: 'Rarely done',
          withAI: '30 min/week',
          saved: 'Now it happens',
        },
        {
          task: 'Performance optimization',
          without: '2-3 hrs/sprint',
          withAI: '30 min/sprint',
          saved: '1.5-2.5 hrs',
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
          heading: 'The Real Win',
          paragraphs: [
            'Those 10-15 hours are not just time saved. They are hours you can spend on the work that actually differentiates your product - the interaction design, the component architecture, the user experience polish that no AI can do for you.',
            'Frontend development in 2026 is bifurcating. Developers using AI are shipping features in half the time with better test coverage and documentation. The gap is widening every month.',
          ],
        },
        {
          heading: 'The Mindset Shift',
          paragraphs: [
            'Stop thinking of AI as a shortcut. Think of it as a tool that removes the friction between your idea and the implementation. You still make every decision. You still write the logic that matters. You just skip the ceremony that slows you down.',
          ],
        },
      ],
      keyInsight:
        'Start with one system this week. Scaffolding or testing - whichever you spend the most time on. One system is enough to feel the difference.',
    },

    ch7: {
      intro:
        'Seven days to build an AI-assisted frontend workflow. Each day is short and practical. Follow the steps, check them off, and by day 7 you will have a new way of working.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '20 min',
          items: [
            { id: 'fe-1-1', label: 'Install Cursor (or add GitHub Copilot to VS Code)' },
            { id: 'fe-1-2', label: 'Create a free ChatGPT or Claude account if you do not have one' },
            { id: 'fe-1-3', label: 'Bookmark this guide for the prompts' },
          ],
        },
        {
          day: 2,
          title: 'Scaffold Your First Component with AI',
          duration: '15 min',
          items: [
            {
              id: 'fe-2-1',
              label:
                'Pick a component you need to build this week',
            },
            {
              id: 'fe-2-2',
              label:
                'Run the React Component from Description prompt with your real specs',
            },
            {
              id: 'fe-2-3',
              label:
                'Compare the output to how long it would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Debug with AI',
          duration: '15 min',
          items: [
            {
              id: 'fe-3-1',
              label: 'Find a CSS bug or layout issue in your current project',
            },
            {
              id: 'fe-3-2',
              label:
                'Use the CSS Bug Diagnosis prompt to fix it',
            },
            {
              id: 'fe-3-3',
              label: 'Notice how AI explains the root cause, not just the fix',
            },
          ],
        },
        {
          day: 4,
          title: 'Generate Tests',
          duration: '20 min',
          items: [
            {
              id: 'fe-4-1',
              label: 'Pick a component that has no tests (you know you have one)',
            },
            {
              id: 'fe-4-2',
              label: 'Run the Component Test Suite prompt',
            },
            {
              id: 'fe-4-3',
              label: 'Review the tests, run them, and fix any failures',
            },
          ],
        },
        {
          day: 5,
          title: 'Review Code with AI',
          duration: '15 min',
          items: [
            {
              id: 'fe-5-1',
              label: 'Take your latest PR or a teammate\'s PR diff',
            },
            {
              id: 'fe-5-2',
              label: 'Run the PR Diff Review prompt',
            },
            {
              id: 'fe-5-3',
              label: 'Compare AI findings to what you would have caught manually',
            },
          ],
        },
        {
          day: 6,
          title: 'Document and Optimize',
          duration: '20 min',
          items: [
            {
              id: 'fe-6-1',
              label: 'Generate documentation for one component using the Component Documentation prompt',
            },
            {
              id: 'fe-6-2',
              label: 'Try the Re-render Optimizer prompt on a component you suspect is slow',
            },
          ],
        },
        {
          day: 7,
          title: 'Full AI-Assisted Workflow',
          duration: '15 min',
          items: [
            {
              id: 'fe-7-1',
              label: 'Reflect: which system saved you the most time this week?',
            },
            {
              id: 'fe-7-2',
              label: 'Build that system into your daily routine - make it the default, not the exception',
            },
            {
              id: 'fe-7-3',
              label: 'Share this guide with a frontend developer who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
