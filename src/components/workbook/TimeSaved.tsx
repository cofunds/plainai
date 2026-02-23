import { Clock, ArrowRight } from 'lucide-react'

interface TimeSavedProps {
  without: string
  withAI: string
}

export default function TimeSaved({ without, withAI }: TimeSavedProps) {
  return (
    <div className="mt-6 bg-primary-50 border-2 border-stone-900 p-4">
      <div className="flex items-center gap-3">
        <Clock className="text-primary-700 shrink-0" size={18} strokeWidth={2.5} />
        <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
          <span>{without}</span>
          <ArrowRight size={14} className="text-stone-400 shrink-0" strokeWidth={2.5} />
          <span className="text-primary-700">{withAI}</span>
        </div>
      </div>
    </div>
  )
}
