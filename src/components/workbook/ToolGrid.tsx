import type { Tool } from '../../data/types'
import ToolCard from './ToolCard'

interface ToolGridProps {
  tools: Tool[]
  footer: string
}

export default function ToolGrid({ tools, footer }: ToolGridProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>
      <div className="bg-stone-100 border-2 border-stone-900 p-4 text-sm text-stone-600 font-medium mt-4">
        {footer}
      </div>
    </div>
  )
}
