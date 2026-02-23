import { Lightbulb } from 'lucide-react'

interface KeyInsightProps {
  label?: string
  text: string
}

export default function KeyInsight({ label = 'Key Insight', text }: KeyInsightProps) {
  return (
    <div className="border-2 border-stone-900 bg-primary-50 p-6 my-6 shadow-[3px_3px_0px_0px_#1c1917]">
      <div className="flex items-center gap-2">
        <Lightbulb className="text-primary-600" size={18} strokeWidth={2.5} />
        <span className="text-xs font-black uppercase tracking-widest text-stone-900">
          {label}
        </span>
      </div>
      <p className="text-[16px] font-medium text-stone-800 leading-relaxed mt-3">
        {text}
      </p>
    </div>
  )
}
