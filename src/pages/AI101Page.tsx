import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'
import {
  Brain,
  MessageSquare,
  Image,
  Mic,
  Zap,
  Target,
  AlertTriangle,
  Rocket,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { cn } from '../lib/utils'

/* ───────────────────── Data ───────────────────── */

const aiTypes = [
  {
    icon: MessageSquare,
    title: 'Text AI (LLMs)',
    tools: 'ChatGPT, Claude, Gemini',
    description: 'Writes, summarizes, analyzes text.',
    bestFor: 'Emails, content, research, brainstorming.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Image,
    title: 'Image AI',
    tools: 'Midjourney, DALL-E, Ideogram',
    description: 'Generates and edits images from text descriptions.',
    bestFor: 'Social media graphics, presentations, mockups.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Mic,
    title: 'Voice AI',
    tools: 'ElevenLabs, Whisper, Descript',
    description: 'Converts speech to text and text to speech, clones voices.',
    bestFor: 'Transcription, podcasts, video narration.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Zap,
    title: 'Automation AI',
    tools: 'Zapier, Make, n8n',
    description: 'Connects tools and automates repetitive workflows.',
    bestFor: 'Data entry, notifications, report generation.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

const promptExamples = [
  {
    bad: 'Write me an email',
    good: 'You are a professional copywriter. Write a follow-up email to a potential client who attended our webinar on AI automation. Tone: warm but professional. Length: 150 words. Include a specific CTA to book a call.',
  },
  {
    bad: 'Summarize this article',
    good: "Summarize this article in 5 bullet points. Each bullet should be one sentence. Focus on actionable takeaways for a startup founder. Skip background info.",
  },
  {
    bad: 'Help me with my resume',
    good: 'Review my resume for a Senior Product Manager role at a Series B SaaS company. Identify 3 weak points and rewrite each bullet using the XYZ formula (Accomplished X, as measured by Y, by doing Z).',
  },
]

const limitations = [
  "Can't verify facts - it hallucinates confidently",
  "Can't access real-time information (unless connected to search)",
  "Can't replace human judgment, creativity, or relationships",
  "Can't learn from your conversation permanently (each chat starts fresh)",
  "Doesn't \"know\" you - you need to provide context every time",
]

const gettingStartedSteps = [
  {
    number: '01',
    title: 'Open a free AI tool',
    description: 'Go to chatgpt.com or claude.ai - both have free tiers.',
  },
  {
    number: '02',
    title: 'Type a real task',
    description: "Pick something you'd actually do today - an email, a summary, a plan.",
  },
  {
    number: '03',
    title: 'Review the output',
    description: "Don't accept it blindly. Read critically, check facts, verify logic.",
  },
  {
    number: '04',
    title: 'Edit and refine',
    description: 'AI gives you a draft, not a final product. Shape it to your voice and needs.',
  },
  {
    number: '05',
    title: 'Repeat and level up',
    description: 'Try increasingly complex tasks. You\'ll develop intuition for what AI does well.',
  },
]

/* ───────────────────── Component ───────────────────── */

export default function AI101Page() {
  return (
    <div className="pb-24">
      <SEO
        title="AI 101"
        description="Learn the basics of AI in plain language. No jargon, no hype - just a clear explanation of what AI is, what it can do, and how to start using it today."
        path="/ai-101"
      />
      {/* ── Hero ── */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                <Brain className="h-4 w-4" />
                AI 101
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              AI explained plain and simple
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              No jargon, no hype. Just a clear explanation of what AI is, what it can do, and how to
              start using it today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: What is AI, really? ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                1
              </span>
              <h2 className="text-2xl font-bold text-gray-900">What is AI, really?</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    1
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">AI is pattern recognition at scale.</strong>{' '}
                    It processes massive amounts of data and finds statistical patterns humans can't
                    see.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    2
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">
                      It learns from examples (training data), not from understanding.
                    </strong>{' '}
                    It was fed billions of web pages, books, and conversations during training.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    3
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">
                      It doesn't "think" - it predicts the most likely next word/pixel/action.
                    </strong>{' '}
                    Every response is a sophisticated guess based on probability.
                  </p>
                </li>
              </ul>

              <div className="mt-6 rounded-lg bg-gray-50 border border-gray-100 p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">The analogy</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI is like autocomplete on steroids. It's read the internet, and it's guessing what
                  comes next. That's it. No consciousness, no understanding - just extremely good
                  pattern matching.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: The 4 Types You'll Actually Use ── */}
      <section className="py-16 border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                2
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                The 4 Types You'll Actually Use
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aiTypes.map((type, index) => (
              <ScrollReveal key={type.title} delay={index * 0.08}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 h-full">
                  <div
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-lg mb-4',
                      type.bg
                    )}
                  >
                    <type.icon className={cn('h-5 w-5', type.color)} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{type.tools}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{type.description}</p>
                  <div className="mt-4 rounded-lg bg-gray-50 border border-gray-100 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Best for
                    </p>
                    <p className="text-sm text-gray-700">{type.bestFor}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How to Talk to AI (Prompting 101) ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                3
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                How to Talk to AI (Prompting 101)
              </h2>
            </div>
            <p className="ml-12 text-gray-500 mb-8">
              The #1 skill with AI is being specific. Vague in, vague out.
            </p>
          </ScrollReveal>

          {/* Formula */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">The Prompt Formula</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Role', 'Context', 'Task', 'Format', 'Constraints'].map((part, i) => (
                  <span key={part} className="flex items-center gap-2">
                    <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900">
                      {part}
                    </span>
                    {i < 4 && <span className="text-gray-300 font-mono text-lg">+</span>}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                The more context you give AI, the better the output. Think of it like briefing a new
                team member - they can't read your mind.
              </p>
            </div>
          </ScrollReveal>

          {/* Prompt examples */}
          <div className="space-y-6">
            {promptExamples.map((example, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.08}>
                <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Bad prompt */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="h-4 w-4 text-red-400" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                          Vague prompt
                        </span>
                      </div>
                      <div className="rounded-lg bg-red-50 border border-red-100 p-4">
                        <p className="font-mono text-sm text-red-700">{example.bad}</p>
                      </div>
                    </div>

                    {/* Good prompt */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                          Specific prompt
                        </span>
                      </div>
                      <div className="rounded-lg bg-green-50 border border-green-100 p-4">
                        <p className="font-mono text-sm text-green-800 leading-relaxed">
                          {example.good}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: What AI Can't Do (Yet) ── */}
      <section className="py-16 border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                4
              </span>
              <h2 className="text-2xl font-bold text-gray-900">What AI Can't Do (Yet)</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <p className="text-sm font-semibold text-gray-900">
                  Know these limitations before you start
                </p>
              </div>
              <ul className="space-y-4">
                {limitations.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <XCircle className="h-5 w-5 shrink-0 text-red-300 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-amber-50 border border-amber-100 p-5">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>The bottom line:</strong> AI is a power tool, not a replacement for your
                  brain. Use it to move faster on things you already understand - don't outsource
                  your thinking entirely.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 5: Getting Started in 5 Minutes ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                5
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Getting Started in 5 Minutes</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {gettingStartedSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="rounded-xl border border-gray-200 bg-white p-5 flex gap-5 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-sm font-bold text-primary-700">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl bg-gray-900 p-12 text-center">
              <Rocket className="mx-auto h-8 w-8 text-primary-400 mb-4" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to see AI in action?
              </h2>
              <p className="mt-3 text-gray-400">
                Pick your profession and get a step-by-step AI guide built for your actual workflow.
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                Browse guides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-sm text-gray-500">Free forever. No account needed.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
