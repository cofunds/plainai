import type { PromptGroup as PromptGroupType } from '../../data/types'
import PromptCard from './PromptCard'

interface PromptGroupProps {
  group: PromptGroupType
}

export default function PromptGroup({ group }: PromptGroupProps) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase font-black text-stone-900 tracking-wider border-b-2 border-stone-900 pb-2 mb-4">
        {group.systemName}
      </p>
      <div className="flex flex-col gap-3">
        {group.prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  )
}
