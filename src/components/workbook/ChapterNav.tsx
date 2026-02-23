import { BookOpen } from 'lucide-react'
import { cn } from '../../lib/utils'

interface Chapter {
  id: string
  label: string
}

interface ChapterNavProps {
  chapters: Chapter[]
  activeId: string
  progress: { checked: number; total: number }
  professionName?: string
  onToggleMobile?: () => void
}

export default function ChapterNav({
  chapters,
  activeId,
  progress,
  professionName,
  onToggleMobile,
}: ChapterNavProps) {
  const percentage = progress.total > 0 ? (progress.checked / progress.total) * 100 : 0

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    onToggleMobile?.()
  }

  return (
    <nav className="flex h-full flex-col">
      {/* Profession name */}
      {professionName && (
        <div className="px-5 py-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border-2 border-stone-900 bg-white flex items-center justify-center flex-shrink-0">
              <BookOpen size={14} className="text-stone-700" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 leading-tight">
              {professionName}
            </span>
          </div>
        </div>
      )}

      {/* Label */}
      <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-stone-400 mt-5 mb-3 px-5">
        Chapters
      </p>

      {/* Links */}
      <ul className="flex-1 space-y-0 px-2">
        {chapters.map((ch, i) => {
          const isActive = activeId === ch.id
          const num = String(i + 1).padStart(2, '0')

          return (
            <li key={ch.id}>
              <button
                type="button"
                onClick={() => handleClick(ch.id)}
                className={cn(
                  'flex w-full items-center px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-150 text-left',
                  isActive
                    ? 'bg-white border-l-2 border-primary-600 text-stone-900 font-black'
                    : 'text-stone-400 hover:text-stone-900 hover:bg-white border-l-2 border-transparent'
                )}
              >
                <span className="inline-block w-6 text-right mr-2.5 tabular-nums opacity-60">{num}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">{ch.label}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Progress */}
      <div className="mt-auto border-t-2 border-stone-900 p-5">
        <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">
          Progress
        </p>
        <div className="h-3 bg-stone-200 border-2 border-stone-900 overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-[11px] font-bold text-stone-500 mt-2">
          {progress.checked} / {progress.total} complete
        </p>
      </div>
    </nav>
  )
}
