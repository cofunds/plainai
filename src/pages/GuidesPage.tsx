import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { SEO } from '../components/ui/SEO'
import { professions } from '../data/professions'
import ProfessionCard from '../components/home/ProfessionCard'
import { cn } from '../lib/utils'

type Filter = 'all' | 'available' | 'coming-soon'

const tabs: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Available', value: 'available' },
  { label: 'Coming soon', value: 'coming-soon' },
]

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return professions.filter((p) => {
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'available' && p.status === 'active') ||
        (activeFilter === 'coming-soon' && p.status === 'coming-soon')
      const matchesSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortName.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, search])

  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <SEO
        title="Guides"
        description="Browse AI guides for every profession. Free tools, prompts, workflows, and action plans - no jargon, no paywall."
        path="/guides"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-black uppercase tracking-tight text-stone-900">All Guides</h1>
        <p className="mt-3 text-lg text-stone-500">
          Free AI workbooks for every profession. Pick yours and start today.
        </p>
      </motion.div>

      {/* Search bar */}
      <div className="relative mt-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search roles - e.g. designer, nurse, sales..."
          className="w-full border-2 border-stone-900 bg-white py-3 pl-10 pr-10 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-1"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter tabs + count */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={cn(
              'text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors',
              activeFilter === tab.value
                ? 'bg-stone-900 text-white border-2 border-stone-900'
                : 'bg-white text-stone-600 border-2 border-stone-300 hover:border-stone-900 hover:text-stone-900'
            )}
          >
            {tab.label}
          </button>
        ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          {filtered.length} of {professions.length} guides
        </span>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((profession, index) => (
          <ProfessionCard key={profession.id} profession={profession} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-stone-400">No guides found{search ? ` for "${search}"` : ''}.</p>
          {(search || activeFilter !== 'all') && (
            <button
              onClick={() => { setSearch(''); setActiveFilter('all') }}
              className="mt-3 text-xs font-bold uppercase tracking-wider text-primary-600 hover:text-primary-700"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
