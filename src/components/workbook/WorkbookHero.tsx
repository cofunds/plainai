import { BookOpen } from 'lucide-react'

interface WorkbookHeroProps {
  label: string
  title: string
  description: string
}

export default function WorkbookHero({ label, title, description }: WorkbookHeroProps) {
  return (
    <header className="mb-12 pb-8 border-b-2 border-stone-900">
      <span className="inline-flex items-center gap-1.5 border-2 border-stone-900 bg-primary-50 text-stone-900 px-3 py-1 text-xs font-bold uppercase tracking-wider">
        <BookOpen size={14} strokeWidth={2.5} />
        {label}
      </span>
      <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-stone-900 mt-4">
        {title}
      </h1>
      <p className="text-base text-stone-500 mt-4 max-w-xl leading-relaxed">
        {description}
      </p>
    </header>
  )
}
