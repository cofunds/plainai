import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Wrench, ExternalLink } from 'lucide-react'
import { foundersData } from '../data/founders'
import { studentsData } from '../data/students'
import type { Tool } from '../data/types'
import ScrollReveal from '../components/ui/ScrollReveal'
import { cn } from '../lib/utils'

/* ───────────────────── Types ───────────────────── */

interface DirectoryTool extends Tool {
  professions: string[]
}

type ProfessionFilter = 'all' | 'founders' | 'students'
type CostFilter = 'all' | 'free' | 'free-tier' | 'freemium'

/* ───────────────────── Extract & deduplicate tools ───────────────────── */

function buildToolDirectory(): DirectoryTool[] {
  const toolMap = new Map<string, DirectoryTool>()

  const addTools = (tools: Tool[], profession: string) => {
    for (const tool of tools) {
      const key = tool.name.toLowerCase()
      const existing = toolMap.get(key)
      if (existing) {
        if (!existing.professions.includes(profession)) {
          existing.professions.push(profession)
        }
      } else {
        toolMap.set(key, { ...tool, professions: [profession] })
      }
    }
  }

  addTools(foundersData.chapters.ch3.tools, 'Founders')
  addTools(studentsData.chapters.ch3.tools, 'Students')

  return Array.from(toolMap.values())
}

const allTools = buildToolDirectory()

/* ───────────────────── Filter config ───────────────────── */

const professionTabs: { label: string; value: ProfessionFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Founders', value: 'founders' },
  { label: 'Students', value: 'students' },
]

const costTabs: { label: string; value: CostFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Free', value: 'free' },
  { label: 'Free Tier', value: 'free-tier' },
  { label: 'Freemium', value: 'freemium' },
]

/* ───────────────────── Badge helpers ───────────────────── */

function costBadgeClasses(cost: Tool['cost']): string {
  switch (cost) {
    case 'free':
      return 'bg-green-50 text-green-700 border-green-200'
    case 'free-tier':
      return 'bg-amber-50 text-amber-700 border-amber-200'
    case 'freemium':
      return 'bg-red-50 text-red-700 border-red-200'
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200'
  }
}

function costLabel(cost: Tool['cost']): string {
  switch (cost) {
    case 'free':
      return 'Free'
    case 'free-tier':
      return 'Free Tier'
    case 'freemium':
      return 'Freemium'
    default:
      return cost
  }
}

/* ───────────────────── Component ───────────────────── */

export default function ToolDirectoryPage() {
  const [professionFilter, setProfessionFilter] = useState<ProfessionFilter>('all')
  const [costFilter, setCostFilter] = useState<CostFilter>('all')

  const filtered = useMemo(() => {
    return allTools.filter((tool) => {
      if (professionFilter !== 'all') {
        const label = professionFilter === 'founders' ? 'Founders' : 'Students'
        if (!tool.professions.includes(label)) return false
      }
      if (costFilter !== 'all' && tool.cost !== costFilter) return false
      return true
    })
  }, [professionFilter, costFilter])

  return (
    <div className="pb-24">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                <Wrench className="h-4 w-4" />
                Curated Tools
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Tool Directory</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              Every AI tool we recommend, across all guides. Curated, tested, explained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            {/* Profession filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-500 mr-1">Profession:</span>
              {professionTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setProfessionFilter(tab.value)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    professionFilter === tab.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cost filter */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-500 mr-1">Cost:</span>
              {costTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setCostFilter(tab.value)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    costFilter === tab.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tool count */}
            <p className="mt-5 text-sm text-gray-400">
              Showing {filtered.length} of {allTools.length} tools
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tool cards grid ── */}
      <section>
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, index) => (
              <ScrollReveal key={tool.name} delay={index * 0.06}>
                <div className="group rounded-xl border border-gray-200 bg-white p-6 h-full flex flex-col">
                  {/* Header: icon + name + link */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-lg">
                        {tool.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-gray-300 mt-1 group-hover:text-gray-500 transition-colors" />
                  </div>

                  {/* Badges: profession + cost */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tool.professions.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center rounded-md border border-primary-200 bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700"
                      >
                        {p}
                      </span>
                    ))}
                    <span
                      className={cn(
                        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium',
                        costBadgeClasses(tool.cost)
                      )}
                    >
                      {costLabel(tool.cost)}
                    </span>
                  </div>

                  {/* Role / category */}
                  <p className="mt-4 text-sm font-medium text-gray-700">{tool.role}</p>

                  {/* Description */}
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1">
                    {tool.description}
                  </p>

                  {/* Verdict */}
                  <div className="mt-4 rounded-lg bg-gray-50 border border-gray-100 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Verdict
                    </p>
                    <p className="text-sm font-medium text-gray-900">{tool.verdict}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <Wrench className="mx-auto h-8 w-8 text-gray-300 mb-3" />
              <p className="text-gray-400">No tools found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
