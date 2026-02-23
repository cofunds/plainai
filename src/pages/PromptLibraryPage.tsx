import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Copy, Check, ChevronDown, Library, Lightbulb, X } from 'lucide-react'
import { foundersData } from '../data/founders'
import { studentsData } from '../data/students'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import ScrollReveal from '../components/ui/ScrollReveal'
import { cn } from '../lib/utils'
import { accordionContent } from '../lib/animations'
import type { Prompt } from '../data/types'

/* ───────────────────── Types ───────────────────── */

interface FlatPrompt {
  id: string
  profession: 'Founders' | 'Students'
  professionId: string
  systemName: string
  title: string
  task: string
  prompt: string
  result?: string
  tip?: string
}

/* ───────────────────── Data extraction ───────────────────── */

function extractPrompts(
  data: typeof foundersData | typeof studentsData,
  profession: 'Founders' | 'Students'
): FlatPrompt[] {
  return data.chapters.ch5.groups.flatMap((group) =>
    group.prompts.map((p: Prompt) => ({
      id: p.id,
      profession,
      professionId: data.professionId,
      systemName: group.systemName,
      title: p.title,
      task: p.task,
      prompt: p.prompt,
      result: p.result,
      tip: p.tip,
    }))
  )
}

const allPrompts: FlatPrompt[] = [
  ...extractPrompts(foundersData, 'Founders'),
  ...extractPrompts(studentsData, 'Students'),
]

const professionFilters = ['All', 'Founders', 'Students'] as const
type ProfessionFilter = (typeof professionFilters)[number]

/* Get unique system names per profession for secondary filter */
function getSystemNames(prompts: FlatPrompt[], professionFilter: ProfessionFilter): string[] {
  const filtered =
    professionFilter === 'All' ? prompts : prompts.filter((p) => p.profession === professionFilter)
  return [...new Set(filtered.map((p) => p.systemName))]
}

/* ───────────────────── Prompt Card ───────────────────── */

function PromptCard({ prompt }: { prompt: FlatPrompt }) {
  const [expanded, setExpanded] = useState(false)
  const { copied, copy } = useCopyToClipboard()

  const professionColor =
    prompt.profession === 'Founders'
      ? 'bg-green-50 text-green-700'
      : 'bg-teal-50 text-teal-700'

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={cn(
            'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold',
            professionColor
          )}
        >
          {prompt.profession}
        </span>
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {prompt.systemName}
        </span>
      </div>

      {/* Title & task */}
      <h3 className="text-lg font-semibold text-gray-900">{prompt.title}</h3>
      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{prompt.task}</p>

      {/* Expand / Copy row */}
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
            expanded
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {expanded ? 'Hide prompt' : 'View prompt'}
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 transition-transform duration-200',
              expanded && 'rotate-180'
            )}
          />
        </button>
        <button
          onClick={() => copy(prompt.prompt)}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Expandable prompt text */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={accordionContent.initial}
            animate={accordionContent.animate}
            exit={accordionContent.exit}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
              <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 leading-relaxed">
                {prompt.prompt}
              </pre>
            </div>

            {/* Result */}
            {prompt.result && (
              <div className="mt-3 rounded-lg border border-green-100 bg-green-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-1">
                  What you'll get
                </p>
                <p className="text-sm text-green-800 leading-relaxed">{prompt.result}</p>
              </div>
            )}

            {/* Tip */}
            {prompt.tip && (
              <div className="mt-3 flex gap-2.5 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <Lightbulb className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
                    Pro tip
                  </p>
                  <p className="text-sm text-amber-800 leading-relaxed">{prompt.tip}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ───────────────────── Page ───────────────────── */

export default function PromptLibraryPage() {
  const [search, setSearch] = useState('')
  const [professionFilter, setProfessionFilter] = useState<ProfessionFilter>('All')
  const [systemFilter, setSystemFilter] = useState<string | null>(null)

  /* Available systems for the current profession filter */
  const systemNames = useMemo(
    () => getSystemNames(allPrompts, professionFilter),
    [professionFilter]
  )

  /* Reset system filter when it's no longer available */
  const activeSystemFilter =
    systemFilter && systemNames.includes(systemFilter) ? systemFilter : null

  /* Filtered prompts */
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return allPrompts.filter((p) => {
      if (professionFilter !== 'All' && p.profession !== professionFilter) return false
      if (activeSystemFilter && p.systemName !== activeSystemFilter) return false
      if (q) {
        const haystack = `${p.title} ${p.task} ${p.prompt}`.toLowerCase()
        return haystack.includes(q)
      }
      return true
    })
  }, [search, professionFilter, activeSystemFilter])

  const clearFilters = () => {
    setSearch('')
    setProfessionFilter('All')
    setSystemFilter(null)
  }

  const hasActiveFilters = search || professionFilter !== 'All' || activeSystemFilter

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
                <Library className="h-4 w-4" />
                Prompt Library
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Prompt Library</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              Copy-paste AI prompts for every profession. Search, filter, use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search + Filters ── */}
      <section className="pb-8">
        <div className="mx-auto max-w-5xl px-6">
          {/* Search bar */}
          <ScrollReveal>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search prompts by title, task, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-gray-400 focus:ring-0"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Profession filter tabs */}
          <ScrollReveal delay={0.05}>
            <div className="mt-5 flex gap-2">
              {professionFilters.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setProfessionFilter(tab)
                    setSystemFilter(null)
                  }}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    professionFilter === tab
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* System filter pills */}
          <ScrollReveal delay={0.1}>
            <div className="mt-4 flex flex-wrap gap-2">
              {systemNames.map((name) => (
                <button
                  key={name}
                  onClick={() =>
                    setSystemFilter(activeSystemFilter === name ? null : name)
                  }
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                    activeSystemFilter === name
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Prompt count */}
          <ScrollReveal delay={0.12}>
            <p className="mt-5 text-sm text-gray-400">
              Showing{' '}
              <span className="font-medium text-gray-600">{filtered.length}</span> of{' '}
              <span className="font-medium text-gray-600">{allPrompts.length}</span> prompts
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Prompt Cards ── */}
      <section>
        <div className="mx-auto max-w-5xl px-6">
          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map((prompt, index) => (
                <ScrollReveal key={prompt.id} delay={Math.min(index * 0.04, 0.3)}>
                  <PromptCard prompt={prompt} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Empty state */
            <ScrollReveal>
              <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
                <Search className="mx-auto h-8 w-8 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">No prompts found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filters.
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear all filters
                  </button>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  )
}
