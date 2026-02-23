import { XCircle, CheckCircle } from 'lucide-react'

interface ComparisonBoxProps {
  before: string
  after: string
}

export default function ComparisonBox({ before, after }: ComparisonBoxProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
      <div className="bg-red-50 border-2 border-stone-900 p-5">
        <p className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-red-600 mb-2.5">
          <XCircle size={14} className="text-red-500" strokeWidth={2.5} />
          Before
        </p>
        <p className="text-sm text-red-900/70 leading-relaxed">{before}</p>
      </div>
      <div className="bg-primary-50 border-2 border-stone-900 p-5">
        <p className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-primary-700 mb-2.5">
          <CheckCircle size={14} className="text-primary-600" strokeWidth={2.5} />
          With AI
        </p>
        <p className="text-sm text-green-900/70 leading-relaxed">{after}</p>
      </div>
    </div>
  )
}
