import { useState, useMemo } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import ChapterNav from './ChapterNav'

interface Chapter {
  id: string
  label: string
}

interface WorkbookLayoutProps {
  children: React.ReactNode
  chapters: Chapter[]
  professionSlug: string
  professionName?: string
  progress?: { checked: number; total: number }
}

export default function WorkbookLayout({
  children,
  chapters,
  professionSlug: _professionSlug,
  professionName,
  progress = { checked: 0, total: 0 },
}: WorkbookLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const chapterIds = useMemo(() => chapters.map((ch) => ch.id), [chapters])
  const activeId = useScrollSpy(chapterIds, 100)

  return (
    <div className="flex min-h-screen pt-10">
      {/* Desktop left panel - fixed, full height */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-72 h-screen border-r-2 border-stone-900 bg-stone-50 z-30 flex-col">
        {/* Back link */}
        <Link
          to="/guides"
          className="flex items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 hover:bg-white border-b-2 border-stone-900 transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={3} />
          All Guides
        </Link>

        {/* Chapter navigation */}
        <ChapterNav
          chapters={chapters}
          activeId={activeId}
          progress={progress}
          professionName={professionName}
        />
      </aside>

      {/* Mobile floating menu button */}
      {!mobileNavOpen && (
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center border-2 border-stone-900 bg-white text-stone-900 shadow-[3px_3px_0px_0px_#1c1917] transition-all hover:shadow-[1px_1px_0px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] lg:hidden"
          aria-label="Open chapter navigation"
        >
          <Menu className="h-5 w-5" strokeWidth={2.5} />
        </button>
      )}

      {/* Mobile drawer overlay */}
      {mobileNavOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          />
          <aside className="fixed top-0 left-0 z-50 w-72 h-screen bg-stone-50 border-r-2 border-stone-900 lg:hidden flex flex-col">
            {/* Back link + close */}
            <div className="flex items-center justify-between border-b-2 border-stone-900">
              <Link
                to="/guides"
                className="flex items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                <ArrowLeft size={14} strokeWidth={3} />
                All Guides
              </Link>
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                className="flex h-10 w-10 items-center justify-center mr-2 border-2 border-stone-900 bg-white text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            <ChapterNav
              chapters={chapters}
              activeId={activeId}
              progress={progress}
              professionName={professionName}
              onToggleMobile={() => setMobileNavOpen(false)}
            />
          </aside>
        </>
      )}

      {/* Right panel - scrollable content */}
      <main className="flex-1 lg:ml-72">
        <div className="mx-auto max-w-3xl px-6 md:px-12 py-12 md:py-16">
          {children}
        </div>
      </main>
    </div>
  )
}
