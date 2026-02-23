import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'
import {
  BookOpen,
  Crosshair,
  Wrench,
  Copy,
  RefreshCw,
  ArrowRight,
} from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

/* ───────────────────── Data ───────────────────── */

const guidePrinciples = [
  {
    icon: BookOpen,
    title: '7-chapter structure',
    description: 'Every guide follows a proven framework from "what is AI" to a 7-day action plan.',
  },
  {
    icon: Crosshair,
    title: 'Your actual pain points',
    description: 'We start with your daily frustrations, not abstract AI concepts.',
  },
  {
    icon: Wrench,
    title: 'Specific tools & systems',
    description: 'We show the exact tools, systems, prompts, and time savings for your role.',
  },
  {
    icon: Copy,
    title: 'Copy-paste ready',
    description: 'Everything is actionable. No theory dumps - just stuff you can use today.',
  },
  {
    icon: RefreshCw,
    title: 'Always growing',
    description: 'New profession guides launch regularly. Request yours if we haven\'t built it yet.',
  },
]

/* ───────────────────── Component ───────────────────── */

export default function AboutPage() {
  return (
    <div className="pb-24">
      <SEO
        title="About"
        description="Learn about PlainAI and our mission to make AI accessible for every profession. No jargon, no paywall - just practical AI guides you can use today."
        path="/about"
      />
      {/* ── Hero ── */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About PlainAI</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              AI shouldn't be gatekept. We're making it accessible for every profession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Story ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Story</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  PlainAI started with a simple observation: everyone's talking about AI, but nobody's
                  explaining how to actually use it for <em>your</em> job.
                </p>
                <p>
                  Not "AI in general" - but what does AI mean for a founder raising their Series A?
                  For a student building their first portfolio? For a freelancer managing 12 clients?
                </p>
                <p>
                  We're not selling courses. We're not locking content behind paywalls. We're building
                  the most practical, no-BS guide to AI for every profession - and giving it away for
                  free.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How We Build Guides ── */}
      <section className="py-16 border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
                Our approach
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                How We Build Guides
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guidePrinciples.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.06}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 h-full">
                  <principle.icon className="h-6 w-6 text-primary-600 mb-4" />
                  <h4 className="text-base font-semibold text-gray-900">{principle.title}</h4>
                  <p className="mt-1.5 text-sm text-gray-500">{principle.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1126labs ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1126labs</h2>
              <p className="text-gray-600 leading-relaxed">
                PlainAI is a 1126labs project. We build practical tools and resources that help people
                work smarter with technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl bg-gray-900 p-12 text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Start exploring AI for your profession
              </h2>
              <p className="mt-4 text-gray-400">
                Pick your role and get a practical, no-BS guide to using AI in your daily work.
              </p>
              <Link
                to="/guides"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                Browse guides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                No account needed. No paywall. Ever.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
