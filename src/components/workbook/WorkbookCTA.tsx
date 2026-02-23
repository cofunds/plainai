import ShareButtons from './ShareButtons'

interface WorkbookCTAProps {
  title: string
  subtitle: string
}

export default function WorkbookCTA({ title, subtitle }: WorkbookCTAProps) {
  return (
    <div className="bg-stone-900 border-2 border-stone-900 p-10 md:p-14 text-center mt-16 shadow-[4px_4px_0px_0px_#1c1917]">
      <h3 className="text-2xl font-black uppercase tracking-tight text-white">{title}</h3>
      <p className="text-stone-400 mt-3 text-base">{subtitle}</p>
      <div className="mt-8">
        <ShareButtons />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mt-4">Share this with someone who needs it.</p>
    </div>
  )
}
