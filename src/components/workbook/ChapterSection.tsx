interface ChapterSectionProps {
  id: string
  chapterNum: number
  title: string
  children: React.ReactNode
}

export default function ChapterSection({ id, chapterNum, title, children }: ChapterSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-16 pb-16 border-b border-stone-200 last:border-b-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="border-2 border-stone-900 bg-stone-100 px-2 py-0.5 text-xs font-black uppercase tracking-wider text-stone-900">
          {String(chapterNum).padStart(2, '0')}
        </span>
      </div>
      <h2 className="text-2xl font-black text-stone-900 mb-8">{title}</h2>
      {children}
    </section>
  )
}
