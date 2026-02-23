import { Check } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { CheckDay as CheckDayType } from '../../data/types'

interface CheckDayProps {
  day: CheckDayType
  checkedItems: Record<string, boolean>
  onToggle: (id: string) => void
}

export default function CheckDay({ day, checkedItems, onToggle }: CheckDayProps) {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-stone-900 text-white px-3 py-1 border-2 border-stone-900 text-xs font-black uppercase tracking-wider">
          Day {day.day}
        </span>
        <span className="text-[15px] font-bold text-stone-900">
          {day.title}
        </span>
        <span className="text-sm text-stone-400 font-medium">{day.duration}</span>
      </div>

      {/* Items */}
      <div className="space-y-1">
        {day.items.map((item) => {
          const isChecked = !!checkedItems[item.id]

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => onToggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onToggle(item.id)
                }
              }}
              className="flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-stone-50 transition-colors select-none"
            >
              {/* Checkbox - square, brutal */}
              <div
                className={cn(
                  'w-[18px] h-[18px] border-2 flex items-center justify-center flex-shrink-0 transition-all',
                  isChecked
                    ? 'bg-primary-600 border-stone-900'
                    : 'border-stone-900 bg-white'
                )}
              >
                {isChecked && <Check className="text-white" size={12} strokeWidth={3} />}
              </div>

              {/* Label */}
              <span
                className={cn(
                  'text-sm transition-colors',
                  isChecked ? 'text-stone-400 line-through' : 'text-stone-700'
                )}
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
