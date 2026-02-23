import {
  Bot,
  Search,
  Palette,
  ClipboardList,
  Zap,
  PenTool,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Tool } from '../../data/types'

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  search: Search,
  palette: Palette,
  'clipboard-list': ClipboardList,
  zap: Zap,
  'pen-tool': PenTool,
}

const costStyles: Record<Tool['cost'], { bg: string; text: string; label: string }> = {
  free: { bg: 'bg-primary-50', text: 'text-primary-700', label: 'Free' },
  'free-tier': { bg: 'bg-primary-50', text: 'text-primary-700', label: 'Free Tier' },
  freemium: { bg: 'bg-amber-50', text: 'text-amber-700', label: 'Freemium' },
  paid: { bg: 'bg-red-50', text: 'text-red-700', label: 'Paid' },
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = iconMap[tool.icon] ?? Bot
  const cost = costStyles[tool.cost]

  return (
    <div
      className={cn(
        'border-2 border-stone-900 p-5 flex items-start gap-4 transition-all duration-150',
        'hover:shadow-[3px_3px_0px_0px_#1c1917] bg-white'
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 border-2 border-stone-900 bg-stone-100 flex items-center justify-center flex-shrink-0">
        <Icon className="text-stone-700" size={20} strokeWidth={2} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[15px] font-bold text-stone-900">{tool.name}</h4>
        <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mt-0.5">{tool.role}</p>
        <p className="text-sm text-stone-400 mt-1">{tool.description}</p>
      </div>

      {/* Badge + Verdict */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span
          className={cn(
            'text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 border-2 border-stone-900',
            cost.bg,
            cost.text
          )}
        >
          {cost.label}
        </span>
        <p className="text-[11px] text-stone-400">{tool.verdict}</p>
      </div>
    </div>
  )
}
