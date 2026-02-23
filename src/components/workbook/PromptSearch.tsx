import { Search, X } from 'lucide-react'

interface PromptSearchProps {
  query: string
  onChange: (value: string) => void
}

export default function PromptSearch({ query, onChange }: PromptSearchProps) {
  return (
    <div className="relative max-w-sm mb-5">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} strokeWidth={2.5} />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search prompts..."
        className="w-full bg-white border-2 border-stone-900 py-2.5 pl-9 pr-9 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all"
      />
      {query && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:bg-stone-100 transition-colors"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5 text-stone-500" strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
}
