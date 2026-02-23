import type { WorkbookData } from './types'

export const backendData = {
  professionId: 'backend',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Backend Developers',
  heroDescription:
    'A hands-on guide to using AI in your backend workflow - from API design to database optimization, with real tools, systems, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your morning starts with a Slack message from the frontend team. The user profile endpoint is returning 200ms responses and they need it under 50ms. You open the query, see three nested JOINs, a missing index, and a WHERE clause that scans the entire table. You know the fix will take an hour of careful refactoring - and you cannot break the six other endpoints that depend on the same query.',
        'Then there is the migration. The product team wants a new "teams" feature, which means a new table, new foreign keys, new relationships, and a migration that needs to run safely on a production database with 4 million rows. You write the migration, double-check the rollback, test it on staging, and pray it does not lock the table for 30 seconds during deploy.',
        'After lunch, a production alert fires. 500 errors spiking on the payments webhook. You dig into the logs - a third-party API changed their response format and your validation is rejecting it. You patch the handler, write a test for the new format, deploy a hotfix, and write a postmortem. It took three hours. The actual code change was four lines.',
        'Between incidents, you need to build two new API endpoints, write the database schema for a reporting feature, update the Docker config for a new service, and review a PR that adds caching logic. Each task is different, but they all share the same pattern: 30% thinking, 70% typing out things you have typed a hundred times before.',
        'You are an experienced engineer solving real problems. But most of your day is spent on boilerplate, debugging, and repetitive configuration - not the architecture and problem-solving that actually require your expertise.',
      ],
      highlight:
        'What if you could cut the repetitive 70% and spend your time on the system design and debugging that actually needs your brain?',
      closingParagraph:
        'Not by shipping untested code. Not by letting AI make architectural decisions. By using AI as a fast, context-aware assistant that handles the boilerplate, explains the errors, and drafts the schemas - so you focus on building reliable systems.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is not going to architect your system',
          paragraphs: [
            'Let\'s be clear about what AI cannot do. It cannot design your system architecture from scratch. It does not understand your business constraints, your team\'s capabilities, your infrastructure budget, or the tradeoffs that make your system yours. It has no context about your specific production environment.',
            'What AI is extremely good at is the mechanical work that sits between your decisions and the final code. Writing CRUD endpoints. Generating migration files. Translating error messages into root causes. Drafting SQL queries from plain English descriptions. Producing boilerplate that follows patterns you have already established.',
          ],
        },
        {
          heading: 'Think of it as a senior-level autocomplete',
          paragraphs: [
            'The best way to think about AI for backend work is as an assistant that has read every StackOverflow answer, every documentation page, and every GitHub repo in your stack - but has zero knowledge of your specific production system. It can generate correct code instantly, but you validate it against your context.',
            'You say "write me a rate limiter middleware for Express using Redis with a sliding window of 100 requests per minute per IP." It gives you working code in 15 seconds. You would have written the same thing in 20 minutes after checking the Redis docs and reviewing your existing middleware pattern. That time savings compounds across your entire day.',
            'The backend developers who gain the most from AI are the ones who use it to accelerate the work they already know how to do - not the ones who use it to do work they do not understand.',
          ],
        },
      ],
      keyInsight:
        'Your system knowledge + your debugging instincts + AI\'s speed = shipping reliable backends in half the time. AI writes the code. You make the decisions that keep production running.',
    },

    ch3: {
      intro: 'Five tools that cover the full backend development workflow. No bloat, no overlap.',
      tools: [
        {
          name: 'Cursor',
          role: 'Your AI-native code editor',
          description:
            'Full IDE with codebase-aware AI chat and inline editing. Understands your project structure, imports, and patterns. Best for writing and refactoring code directly in your editor with full project context.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Start here - replaces VS Code',
          icon: 'cursor',
        },
        {
          name: 'GitHub Copilot',
          role: 'Your inline code completions',
          description:
            'Predicts the next line, function, or block as you type. Excellent for repetitive patterns like route handlers, model definitions, and test setups. Works across VS Code, JetBrains, and Neovim.',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for fast pattern completion',
          icon: 'copilot',
        },
        {
          name: 'ChatGPT',
          role: 'Your debugging and problem-solving partner',
          description:
            'Paste in error messages, stack traces, log outputs, or architectural questions and get instant help. Best for working through complex debugging sessions and exploring implementation options.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for debugging conversations',
          icon: 'chatgpt',
        },
        {
          name: 'Cody by Sourcegraph',
          role: 'Your codebase search and understanding tool',
          description:
            'AI-powered code search that understands your entire codebase. Ask questions about how things work, find usage patterns, and get context-aware answers grounded in your actual code.',
          cost: 'free',
          difficulty: 'easy-medium',
          verdict: 'Best for large codebases',
          icon: 'cody',
        },
        {
          name: 'Claude',
          role: 'Your architecture advisor and code reviewer',
          description:
            'Excels at reviewing large code blocks, designing database schemas, explaining complex system interactions, and writing thorough documentation. Handles very long context - paste entire files or multiple files for holistic review.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for architecture and reviews',
          icon: 'claude',
        },
      ],
      footer:
        'Start with Cursor or Copilot in your editor plus ChatGPT or Claude in a browser tab. Add Cody if you work in a large monorepo. That covers 90% of backend development needs.',
    },

    ch4: {
      intro:
        'These six systems map directly to the tasks you do every week as a backend developer. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'System 1 - API Endpoint Design',
          before:
            'You create the route file, define the handler function, write the request validation, add error handling, connect to the service layer, write the response serialization, and add the route to the router. Each endpoint follows the same pattern, but you type it out fresh every time. A standard CRUD set takes 45 minutes to an hour.',
          after:
            'You describe the resource, its fields, and the operations needed. AI generates the full CRUD endpoint set - routes, validation, error handling, service layer, and response types. You review, adjust to your project patterns, and add the business logic.',
          flow: [
            'Describe the resource: fields, relationships, required operations',
            'AI generates route handlers with request/response types',
            'Review validation logic and error handling',
            'Adjust to match your project structure and naming conventions',
            'Add business logic and edge case handling',
          ],
          timeSaved: { without: '45-60 min/resource', withAI: '10-15 min/resource' },
        },
        {
          id: 2,
          name: 'System 2 - Database Query Optimization',
          before:
            'A query is slow. You run EXPLAIN ANALYZE, stare at the query plan, look for sequential scans, check index usage, consider query restructuring, test different approaches, and benchmark. A single optimization can eat an entire afternoon if the query is complex.',
          after:
            'You paste the slow query and the EXPLAIN output. AI identifies the bottleneck - missing index, bad JOIN order, unnecessary subquery - and suggests the optimized version with explanation. What took 2 hours of investigation now takes 15 minutes of guided optimization.',
          flow: [
            'Run EXPLAIN ANALYZE on the slow query',
            'Paste query + EXPLAIN output into AI',
            'AI diagnoses the bottleneck and explains why',
            'Review and apply the suggested optimization',
            'Re-run EXPLAIN ANALYZE to confirm improvement',
          ],
          timeSaved: { without: '1-3 hours/query', withAI: '15-30 min/query' },
        },
        {
          id: 3,
          name: 'System 3 - Error Debugging',
          before:
            'A production error fires. You check the logs, parse the stack trace, reproduce locally, add debug logging, trace the data flow, find the root cause, and write the fix. For unfamiliar errors or third-party integrations, you spend 30 minutes just reading documentation to understand the error code.',
          after:
            'Paste the error message, stack trace, and relevant code into AI. It identifies the likely root cause, explains why it happens, suggests the fix, and points out related issues you should check. The investigation phase shrinks from hours to minutes.',
          flow: [
            'Capture the full error message, stack trace, and relevant logs',
            'Paste into AI with the code where the error originates',
            'AI explains the root cause and suggests fixes',
            'Apply the fix and write a regression test',
            'Ask AI to identify similar patterns in your codebase that could fail the same way',
          ],
          timeSaved: { without: '30 min - 3 hours/bug', withAI: '10-30 min/bug' },
        },
        {
          id: 4,
          name: 'System 4 - Migration and Schema Design',
          before:
            'A new feature needs schema changes. You design the tables, think through relationships, write the migration file, handle the rollback, consider data migration for existing rows, test on a copy of production data, and coordinate the deploy. Getting it wrong means a painful rollback or data corruption.',
          after:
            'Describe the feature requirements and existing schema. AI generates the migration with up/down functions, suggests indexes for common query patterns, flags potential issues with large table migrations, and includes data backfill logic. You review the critical details - AI handles the boilerplate.',
          flow: [
            'Describe the feature and what data it needs',
            'Share your existing schema (relevant tables)',
            'AI generates migration with proper up/down functions',
            'Review index choices and relationship constraints',
            'Test migration on staging before production deploy',
          ],
          timeSaved: { without: '1-2 hours/migration', withAI: '15-25 min/migration' },
        },
        {
          id: 5,
          name: 'System 5 - CI/CD Pipeline Setup',
          before:
            'Setting up or modifying a CI/CD pipeline means wrestling with YAML syntax, Docker configurations, environment variables, caching strategies, and deployment scripts. You copy from other projects, modify, push, wait for the build, see it fail, fix the YAML, push again. The feedback loop is painfully slow.',
          after:
            'Describe your project stack, deployment target, and pipeline requirements. AI generates the complete configuration - GitHub Actions workflow, Dockerfile, docker-compose, environment setup - with comments explaining each section. You refine instead of starting from scratch.',
          flow: [
            'Describe your stack, test setup, and deployment target',
            'AI generates complete CI/CD configuration files',
            'Review each step for correctness and security',
            'Adjust caching, secrets, and environment-specific values',
            'Push and iterate on any failures with AI assistance',
          ],
          timeSaved: { without: '2-4 hours/setup', withAI: '30-60 min/setup' },
        },
        {
          id: 6,
          name: 'System 6 - Security Audit',
          before:
            'You know you should audit your code for security issues - SQL injection, authentication bypasses, exposed secrets, missing rate limiting - but there is never time for a thorough review. Security auditing is the task that always gets pushed to "next sprint."',
          after:
            'Paste your route handlers, middleware, and authentication logic into AI. It scans for common vulnerabilities - injection points, missing input sanitization, insecure defaults, exposed error details - and gives you specific fixes. A basic audit that never happened now takes 20 minutes.',
          flow: [
            'Paste your authentication middleware and route handlers',
            'AI scans for OWASP Top 10 vulnerabilities',
            'Review each finding - confirm or dismiss',
            'Apply critical fixes immediately',
            'Schedule non-critical improvements in your backlog',
          ],
          timeSaved: { without: 'Rarely done', withAI: '20-30 min/audit' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste ready prompts for every backend system. Replace the bracketed placeholders with your actual project details. Each prompt is specific to backend work - Node.js, Python, SQL, Docker, and cloud infrastructure.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - API Design',
          prompts: [
            {
              id: 'be-p-1-1',
              title: 'REST API Endpoint Generator',
              task: 'Generate a complete set of CRUD endpoints for a resource',
              prompt: `Generate a complete REST API for a [resource name] resource.

Framework: [Express/Fastify/Django/FastAPI/etc.]
Language: [TypeScript/Python/Go/etc.]
Database: [PostgreSQL/MongoDB/MySQL/etc.]
ORM: [Prisma/TypeORM/SQLAlchemy/Mongoose/etc.]

Resource fields:
- [field]: [type] - [constraints: required, unique, etc.]
- [field]: [type] - [constraints]
- [field]: [type] - [constraints]
- [field]: [type] - [foreign key to: table]

Generate:
1. Route definitions (GET all, GET by id, POST, PUT/PATCH, DELETE)
2. Request validation (body, params, query) with proper error messages
3. Controller/handler functions with error handling
4. Service layer with database operations
5. Response DTOs/serializers (do not expose internal fields)
6. Proper HTTP status codes for every scenario (201 for create, 404 for not found, 409 for conflict, etc.)

Include pagination for the list endpoint (cursor-based or offset). Include filtering by [field] and sorting by [field].`,
              result:
                'A complete, production-ready API resource with validation, error handling, and pagination.',
              tip: 'Specify your project\'s existing patterns (file structure, naming conventions) for output that fits your codebase.',
            },
            {
              id: 'be-p-1-2',
              title: 'API Error Handling Strategy',
              task: 'Design a consistent error handling approach across your API',
              prompt: `Design an error handling strategy for my [framework] API.

Current setup:
- Language: [TypeScript/Python/etc.]
- Number of endpoints: ~[number]
- Current error handling: [describe - e.g., "inconsistent try/catch in each handler"]

I need:
1. A custom error class hierarchy (AppError base, then NotFoundError, ValidationError, AuthenticationError, AuthorizationError, ConflictError, RateLimitError)
2. A global error handling middleware that catches all errors and returns consistent responses
3. Error response format: { status, code, message, details?, requestId? }
4. Proper HTTP status code mapping for each error type
5. Error logging strategy (what to log, what to hide from the client)
6. How to handle unexpected errors (500s) without leaking stack traces in production
7. Example usage in a route handler showing how clean the code becomes

Show me the complete implementation with all files.`,
              result:
                'A complete error handling system with custom errors, middleware, and consistent response format.',
            },
            {
              id: 'be-p-1-3',
              title: 'API Documentation Generator',
              task: 'Generate OpenAPI/Swagger documentation from existing code',
              prompt: `Generate OpenAPI 3.0 documentation for these API endpoints:

[Paste your route handlers/controllers]

For each endpoint, document:
- HTTP method and path
- Summary and description
- Request parameters (path, query, header)
- Request body schema with field types and validation rules
- All response codes with response schemas
- Authentication requirements
- Example request and response payloads

Also include:
- API info section (title, version, description)
- Server URLs for [dev, staging, production]
- Security scheme definition for [JWT/API key/OAuth]
- Reusable component schemas for shared types

Output as valid OpenAPI 3.0 YAML. Make sure every field is properly typed and examples are realistic.`,
              result:
                'A complete OpenAPI spec you can plug into Swagger UI or import into Postman.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Database Optimization',
          prompts: [
            {
              id: 'be-p-2-1',
              title: 'Slow Query Optimizer',
              task: 'Diagnose and optimize a slow database query',
              prompt: `Optimize this slow database query:

Database: [PostgreSQL/MySQL/MongoDB]
Table sizes: [table_name: ~X rows, table_name: ~Y rows]

The slow query:
[Paste the SQL/query]

EXPLAIN ANALYZE output:
[Paste the EXPLAIN output]

Current indexes on relevant tables:
[List existing indexes]

The query is used for: [describe the feature - e.g., "loading the user dashboard with recent activity"]
Acceptable response time: [target - e.g., "under 50ms"]
Current response time: [current - e.g., "~800ms"]

Please:
1. Identify the bottleneck from the EXPLAIN output
2. Explain WHY it is slow (not just what to change)
3. Suggest the optimized query with explanation of changes
4. Recommend indexes to add (with CREATE INDEX statements)
5. Flag if this optimization could affect write performance
6. Suggest a materialized view or caching strategy if the query is inherently expensive`,
              result:
                'A diagnosed bottleneck with optimized query, index recommendations, and tradeoff analysis.',
              tip: 'Always include the EXPLAIN output. Without it, AI is guessing. With it, AI can pinpoint the exact issue.',
            },
            {
              id: 'be-p-2-2',
              title: 'Database Schema Design',
              task: 'Design a normalized schema for a new feature',
              prompt: `Design a database schema for this feature:

Feature description: [what the feature does]
Database: [PostgreSQL/MySQL/MongoDB]
Existing related tables: [list tables this interacts with]

Requirements:
- [List the data entities and their relationships]
- [List key queries that will run against this schema]
- [Any constraints: soft deletes, audit trails, multi-tenant, etc.]
- [Expected data volume: how many rows per day/month]

Please provide:
1. Table definitions with columns, types, and constraints
2. Foreign key relationships with ON DELETE behavior
3. Indexes optimized for the query patterns I described
4. Explanation of normalization decisions
5. Migration SQL (CREATE TABLE statements)
6. Example seed data for testing
7. Any denormalization suggestions if query performance demands it`,
              result:
                'A complete schema design with tables, indexes, relationships, and migration SQL.',
            },
            {
              id: 'be-p-2-3',
              title: 'N+1 Query Detector',
              task: 'Find and fix N+1 query problems in your code',
              prompt: `Analyze this code for N+1 query problems:

[Paste the code that fetches and processes data - include the ORM/query calls]

ORM: [Prisma/TypeORM/SQLAlchemy/Sequelize/etc.]
Database: [PostgreSQL/MySQL/etc.]

For each N+1 problem found:
1. Explain the N+1 pattern - what query runs N times
2. Show how many queries this generates for N=[100] records
3. Give the fix using eager loading / joins / batch queries
4. Show the optimized code
5. Estimate the query reduction (e.g., "101 queries down to 2")

Also check for:
- Queries inside loops
- Lazy loading that triggers unexpected queries
- Missing batch operations (inserting/updating one row at a time)`,
              result:
                'A list of N+1 problems with exact fixes and query count reductions.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Error Debugging',
          prompts: [
            {
              id: 'be-p-3-1',
              title: 'Production Error Diagnosis',
              task: 'Diagnose a production error from logs and stack traces',
              prompt: `I have a production error. Help me diagnose and fix it.

Error message:
[Paste the full error message]

Stack trace:
[Paste the stack trace]

Relevant logs around the error:
[Paste log lines before and after the error]

Code where the error originates:
[Paste the function/handler code]

Context:
- This started happening: [when - after a deploy, randomly, under load, etc.]
- Frequency: [every request, intermittent, specific conditions]
- Environment: [Node.js version, Python version, OS, etc.]
- Recent changes: [any recent deploys or config changes]

Please:
1. Identify the most likely root cause
2. Explain WHY this error happens (the mechanism, not just the symptom)
3. Give the exact fix with code
4. Suggest a regression test to prevent this from happening again
5. Flag any related issues this root cause might cause elsewhere
6. Recommend monitoring/alerting to catch this earlier next time`,
              result:
                'A root cause analysis with fix, regression test, and monitoring recommendations.',
              tip: 'Include recent deployment history. Many production bugs are triggered by config changes, not code changes.',
            },
            {
              id: 'be-p-3-2',
              title: 'Third-Party API Integration Debug',
              task: 'Debug issues with external API integrations',
              prompt: `I am having issues integrating with [API name / service].

What I am trying to do: [describe the integration]

My request code:
[Paste the HTTP request code - fetch, axios, etc.]

Expected response:
[Paste what the API docs say you should get]

Actual response:
[Paste what you are actually getting - status code, headers, body]

Error (if any):
[Paste error message]

API documentation reference: [link or paste relevant docs section]

Please:
1. Identify why the request is failing or returning unexpected data
2. Check my request format against the API docs (headers, auth, body format)
3. Suggest the corrected request code
4. Add proper error handling for common failure scenarios (timeout, rate limit, invalid token, etc.)
5. Recommend retry logic with exponential backoff
6. Suggest how to add logging for easier debugging in the future`,
              result:
                'Diagnosis of the integration issue with corrected code and robust error handling.',
            },
            {
              id: 'be-p-3-3',
              title: 'Memory Leak Investigator',
              task: 'Diagnose and fix a memory leak in your application',
              prompt: `I suspect my [Node.js/Python/etc.] application has a memory leak.

Symptoms:
- [describe - e.g., "memory usage grows from 200MB to 2GB over 24 hours"]
- [any OOM crashes or restarts?]
- [does it correlate with specific endpoints or operations?]

Application details:
- Runtime: [Node.js 20 / Python 3.12 / etc.]
- Framework: [Express / FastAPI / etc.]
- Connection pools: [database, Redis, HTTP clients]
- Caching: [in-memory cache? what library?]

Relevant code sections:
[Paste code you suspect - especially event listeners, streams, caches, connection handling]

Please:
1. Identify the most likely leak sources based on the code and symptoms
2. Explain the leak mechanism (what is being retained and why)
3. Provide the fix for each identified leak
4. Give me a diagnostic script/approach to confirm the leak location
5. Recommend monitoring to track memory usage over time
6. Suggest preventive patterns to avoid similar leaks`,
              result:
                'Identified leak sources with fixes and a diagnostic approach to confirm.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Migrations and Schemas',
          prompts: [
            {
              id: 'be-p-4-1',
              title: 'Migration File Generator',
              task: 'Generate a safe database migration with up and down functions',
              prompt: `Generate a database migration for the following change:

Change description: [what you need to change]
Database: [PostgreSQL/MySQL]
Migration tool: [Prisma Migrate/Knex/TypeORM/Alembic/Django/raw SQL]

Current schema (relevant tables):
[Paste current table definitions or schema]

The change:
- [Add table X with columns...]
- [Add column Y to table Z with default value...]
- [Create index on...]
- [Add foreign key...]

Requirements:
1. Safe UP migration (the change)
2. Safe DOWN migration (complete rollback)
3. Handle existing data: [describe what should happen to existing rows]
4. No table locks longer than [X seconds] - use concurrent index creation if needed
5. Include data backfill if adding a NOT NULL column to an existing table
6. Add comments explaining each step

Production considerations:
- Table [X] has ~[N] rows
- This runs during [zero-downtime deploy / maintenance window]
- [Any other constraints]`,
              result:
                'A complete migration file with up/down functions, data handling, and production safety notes.',
              tip: 'For large tables (1M+ rows), always ask AI about concurrent operations and lock implications.',
            },
            {
              id: 'be-p-4-2',
              title: 'Schema Refactoring Plan',
              task: 'Plan a safe schema refactoring across multiple migrations',
              prompt: `I need to refactor my database schema. This is a breaking change that needs multiple migration steps.

Current schema:
[Paste current table definitions]

Target schema:
[Describe or paste what you want to end up with]

What is changing and why:
[Explain the motivation - e.g., "splitting the users table into users and profiles for multi-tenant support"]

Constraints:
- Zero downtime required: [yes/no]
- Application code can be updated: [all at once / gradually]
- Data volume: [rows in affected tables]

Please give me:
1. A multi-step migration plan (each step should be independently deployable and reversible)
2. The migration SQL for each step
3. Application code changes needed between migrations
4. A rollback plan for each step
5. Data integrity checks to run after each step
6. Estimated downtime or performance impact per step
7. The order of operations (what deploys when)`,
              result:
                'A phased migration plan with SQL, rollback procedures, and deployment coordination.',
            },
            {
              id: 'be-p-4-3',
              title: 'Seed Data Generator',
              task: 'Generate realistic seed data for development and testing',
              prompt: `Generate seed data for my database schema:

Schema:
[Paste your table definitions or ORM models]

Requirements:
- Generate [X] records for each main table
- Maintain referential integrity (foreign keys must point to real records)
- Use realistic data (not "test1", "test2" - actual names, emails, dates)
- Include edge cases: [null optional fields, very long strings, special characters, boundary dates]
- Cover these scenarios: [list scenarios - e.g., "users with 0 orders, users with 50+ orders, canceled orders"]

Output format: [SQL INSERT statements / ORM seed script / JSON]
Language: [TypeScript/Python/etc.]

Include a factory function pattern so I can generate more data with custom overrides for tests.`,
              result:
                'Realistic seed data with edge cases and a reusable factory function for tests.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - CI/CD Pipelines',
          prompts: [
            {
              id: 'be-p-5-1',
              title: 'GitHub Actions Pipeline',
              task: 'Generate a complete CI/CD pipeline with GitHub Actions',
              prompt: `Create a GitHub Actions CI/CD pipeline for my backend project.

Project details:
- Language/Runtime: [Node.js 20 / Python 3.12 / Go 1.22 / etc.]
- Framework: [Express / FastAPI / Gin / etc.]
- Database: [PostgreSQL / MongoDB / etc.] (needed for tests)
- Package manager: [npm / pnpm / pip / poetry / etc.]
- Test command: [npm test / pytest / go test / etc.]
- Lint command: [eslint / ruff / golangci-lint / etc.]

Pipeline stages:
1. Lint and type check on every push
2. Run unit tests with database service container
3. Run integration tests
4. Build Docker image
5. Push to [ECR / Docker Hub / GCR] on main branch
6. Deploy to [ECS / K8s / Railway / etc.] on main branch

Requirements:
- Cache dependencies between runs
- Run lint and tests in parallel where possible
- Use environment secrets for credentials (list which secrets I need to set)
- Fail fast - stop pipeline on first failure
- Include Slack notification on failure
- Branch protection: only run deploy on main, run tests on all branches

Give me the complete .github/workflows/ci.yml file with comments explaining each section.`,
              result:
                'A complete GitHub Actions workflow file with caching, parallel jobs, and deployment.',
              tip: 'Start with a simpler pipeline and add stages. Do not build the full pipeline before testing the basic lint+test flow.',
            },
            {
              id: 'be-p-5-2',
              title: 'Dockerfile Optimizer',
              task: 'Create or optimize a Dockerfile for production',
              prompt: `Create a production-optimized Dockerfile for my backend application.

Application:
- Language: [Node.js / Python / Go / etc.]
- Entry point: [e.g., "dist/server.js" or "main.py"]
- Build step: [e.g., "npm run build" or "go build"]
- Dependencies file: [package.json / requirements.txt / go.mod]
- Static assets: [any files that need to be copied - config files, certs, etc.]
- Environment variables needed at runtime: [list them]

Current Dockerfile (if exists):
[Paste current Dockerfile or "none"]

Optimize for:
1. Multi-stage build (separate build and runtime stages)
2. Minimal final image size (alpine or distroless base)
3. Layer caching (dependencies before code for faster rebuilds)
4. Security (non-root user, no unnecessary packages, no secrets in image)
5. Health check endpoint
6. Proper signal handling (graceful shutdown on SIGTERM)
7. .dockerignore file contents

Show me the Dockerfile, .dockerignore, and explain each optimization decision.`,
              result:
                'A production-optimized Dockerfile with multi-stage build, security hardening, and caching.',
            },
            {
              id: 'be-p-5-3',
              title: 'Environment Configuration Setup',
              task: 'Set up type-safe environment configuration with validation',
              prompt: `Create a type-safe environment configuration module for my [Node.js/Python] backend.

Environment variables I need:
- [VAR_NAME]: [type - string/number/boolean/url] - [description] - [required/optional with default]
- [VAR_NAME]: [type] - [description] - [required/optional]
- [VAR_NAME]: [type] - [description] - [required/optional]

Environments: development, staging, production

Requirements:
1. Validate all env vars at startup (fail fast with clear error messages if missing)
2. Type-safe access throughout the application (no process.env scattered everywhere)
3. Different defaults per environment
4. A .env.example file with all variables documented
5. Zod (TypeScript) or Pydantic (Python) schema for validation
6. Singleton pattern - parse once, import everywhere
7. Sensitive values (passwords, API keys) should never be logged

Give me the complete config module, the .env.example file, and usage examples.`,
              result:
                'A type-safe config module with validation, documentation, and usage examples.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Security Audit',
          prompts: [
            {
              id: 'be-p-6-1',
              title: 'API Security Review',
              task: 'Audit your API endpoints for common security vulnerabilities',
              prompt: `Review these API endpoints for security vulnerabilities:

[Paste your route handlers, middleware, and authentication logic]

Framework: [Express / FastAPI / Django / etc.]
Authentication: [JWT / session / API key / OAuth]
Authorization: [describe your permission model]

Check against OWASP Top 10:
1. Injection (SQL, NoSQL, command injection) - are all inputs sanitized?
2. Broken authentication - token handling, session management, password policies
3. Broken access control - can users access resources they should not?
4. Security misconfiguration - exposed headers, debug mode, default credentials
5. Sensitive data exposure - are responses leaking internal data?
6. Mass assignment - can users set fields they should not (admin, role, id)?
7. Rate limiting - are endpoints protected against abuse?
8. CORS - is it properly configured or wide open?
9. Input validation - is every input validated and sanitized?
10. Error handling - do errors leak stack traces or internal details?

For each vulnerability found:
- Severity: Critical / High / Medium / Low
- The specific code that is vulnerable
- The attack scenario (how could this be exploited)
- The exact fix with code`,
              result:
                'A prioritized security audit with vulnerability details and exact fixes.',
              tip: 'Run this on every new set of endpoints before merging to main. It takes 10 minutes and can prevent serious incidents.',
            },
            {
              id: 'be-p-6-2',
              title: 'Authentication Flow Review',
              task: 'Review your authentication implementation for security flaws',
              prompt: `Review my authentication implementation for security best practices:

[Paste your auth code - login, registration, token management, password reset]

Stack:
- Auth method: [JWT / sessions / etc.]
- Password hashing: [bcrypt / argon2 / etc.]
- Token storage: [cookies / localStorage / etc.]
- Refresh token strategy: [describe or "none"]

Review for:
1. Password security: hashing algorithm, salt rounds, minimum requirements
2. Token security: expiration, rotation, revocation, secure storage
3. Session management: fixation prevention, concurrent session limits
4. Brute force protection: rate limiting, account lockout, CAPTCHA
5. Password reset: token expiration, one-time use, email enumeration prevention
6. OAuth (if applicable): state parameter, PKCE, token validation
7. Cookie security: HttpOnly, Secure, SameSite, domain scope

For each issue:
- What is wrong and why it is dangerous
- Real-world attack scenario
- The secure implementation with code`,
              result:
                'A thorough auth review with security improvements and implementation code.',
            },
            {
              id: 'be-p-6-3',
              title: 'Dependency Security Check',
              task: 'Analyze your dependencies for security risks',
              prompt: `Analyze my project dependencies for security concerns:

[Paste your package.json / requirements.txt / go.mod]

Please:
1. Flag any packages with known vulnerabilities (CVEs)
2. Identify packages that are unmaintained (no updates in 12+ months)
3. Find packages that are overkill for what they do (pulling in large dependency trees for simple tasks)
4. Check for packages that should not be in production dependencies (dev tools, testing libraries)
5. Identify packages with permissive or problematic licenses
6. Suggest lighter or more secure alternatives where applicable
7. Recommend a dependency update strategy (which to update first, which to pin)

For each flagged dependency:
- Risk level: Critical / High / Medium / Low
- The issue
- Recommended action (update, replace, remove)
- Replacement suggestion if applicable`,
              result:
                'A dependency audit with risk levels, alternatives, and an update priority list.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is how AI changes your weekly time allocation as a backend developer.',
      timeTable: [
        {
          task: 'API endpoint creation',
          without: '3-5 hrs/week',
          withAI: '1 hr/week',
          saved: '2-4 hrs',
        },
        {
          task: 'Database optimization',
          without: '2-4 hrs/week',
          withAI: '30 min/week',
          saved: '1.5-3.5 hrs',
        },
        {
          task: 'Error debugging',
          without: '3-6 hrs/week',
          withAI: '1-2 hrs/week',
          saved: '2-4 hrs',
        },
        {
          task: 'Migrations and schemas',
          without: '2-3 hrs/week',
          withAI: '30-45 min/week',
          saved: '1.5-2 hrs',
        },
        {
          task: 'CI/CD and DevOps',
          without: '2-3 hrs/sprint',
          withAI: '30 min/sprint',
          saved: '1.5-2.5 hrs',
        },
        {
          task: 'Security review',
          without: 'Rarely done',
          withAI: '30 min/sprint',
          saved: 'Now it happens',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '10-18 hrs/week',
      },
      sections: [
        {
          heading: 'Where Those Hours Go',
          paragraphs: [
            'The time you save is not about doing less. It is about spending your hours on system design, architecture decisions, performance tuning, and the deep thinking that makes the difference between a system that works and a system that scales.',
            'Backend developers using AI in 2026 are not writing less code. They are shipping more features with better error handling, more comprehensive tests, and actual documentation. The quality goes up, not down.',
          ],
        },
        {
          heading: 'The Compounding Effect',
          paragraphs: [
            'Each system you automate frees up time to improve another system. Better schemas mean fewer debugging hours. Better CI/CD means faster iteration. Better security means fewer incidents. The gains compound week over week.',
          ],
        },
      ],
      keyInsight:
        'Start with one system - whichever burns the most time in your current sprint. One prompt, one workflow change. That is enough to prove the value.',
    },

    ch7: {
      intro:
        'Seven days to integrate AI into your backend workflow. Each day is focused and practical. By day 7, you will have a new baseline for how fast you ship.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '20 min',
          items: [
            { id: 'be-1-1', label: 'Install Cursor (or add GitHub Copilot to your editor)' },
            { id: 'be-1-2', label: 'Create a free ChatGPT or Claude account if you do not have one' },
            { id: 'be-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Generate Your First Endpoint',
          duration: '15 min',
          items: [
            {
              id: 'be-2-1',
              label:
                'Pick an API endpoint you need to build this week',
            },
            {
              id: 'be-2-2',
              label:
                'Run the REST API Endpoint Generator prompt with your real specs',
            },
            {
              id: 'be-2-3',
              label:
                'Review the output and compare to how long it would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Optimize a Slow Query',
          duration: '20 min',
          items: [
            {
              id: 'be-3-1',
              label: 'Find the slowest query in your application (check your monitoring or logs)',
            },
            {
              id: 'be-3-2',
              label:
                'Run EXPLAIN ANALYZE and use the Slow Query Optimizer prompt',
            },
            {
              id: 'be-3-3',
              label: 'Apply the fix and measure the improvement',
            },
          ],
        },
        {
          day: 4,
          title: 'Debug with AI',
          duration: '15 min',
          items: [
            {
              id: 'be-4-1',
              label: 'Take the next bug or error that comes up in your work',
            },
            {
              id: 'be-4-2',
              label: 'Use the Production Error Diagnosis prompt instead of manual investigation',
            },
            {
              id: 'be-4-3',
              label: 'Write the regression test AI suggests',
            },
          ],
        },
        {
          day: 5,
          title: 'Build a Migration with AI',
          duration: '20 min',
          items: [
            {
              id: 'be-5-1',
              label: 'Pick a schema change you need to make',
            },
            {
              id: 'be-5-2',
              label: 'Run the Migration File Generator prompt with your real schema',
            },
            {
              id: 'be-5-3',
              label: 'Review the up/down functions and test on staging',
            },
          ],
        },
        {
          day: 6,
          title: 'Security and DevOps',
          duration: '20 min',
          items: [
            {
              id: 'be-6-1',
              label: 'Run the API Security Review prompt on your most critical endpoints',
            },
            {
              id: 'be-6-2',
              label: 'Try the Dockerfile Optimizer prompt on your current Docker setup',
            },
          ],
        },
        {
          day: 7,
          title: 'Full AI-Assisted Workflow',
          duration: '15 min',
          items: [
            {
              id: 'be-7-1',
              label: 'Reflect: which system saved you the most time this week?',
            },
            {
              id: 'be-7-2',
              label: 'Build that system into your daily routine - make it your default approach',
            },
            {
              id: 'be-7-3',
              label: 'Share this guide with a backend developer who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
