import { BookOpen, GitBranch, Wrench, Copy, Clock, CalendarCheck } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const features = [
  {
    icon: BookOpen,
    title: 'ELI8 Explanation',
    description: "Every concept explained like you're 8. No jargon, no assumptions.",
  },
  {
    icon: GitBranch,
    title: 'Visual Workflows',
    description: 'See exactly where AI fits into your daily work with before-and-after flows.',
  },
  {
    icon: Wrench,
    title: 'Curated Tool Stack',
    description: 'Only 3-5 tools you actually need. All with free tiers. No fluff.',
  },
  {
    icon: Copy,
    title: 'Copy-Paste Prompts',
    description: '15+ ready-to-use prompts per guide. Just copy, paste, and run.',
  },
  {
    icon: Clock,
    title: 'Time Savings Math',
    description: 'See exactly how many hours you save per week with real calculations.',
  },
  {
    icon: CalendarCheck,
    title: '7-Day Action Plan',
    description: 'A day-by-day checklist to go from zero to AI-powered in one week.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              Inside each guide
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Everything you need, nothing you don't
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.06}>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <feature.icon className="h-6 w-6 text-primary-600 mb-4" />
                <h4 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
