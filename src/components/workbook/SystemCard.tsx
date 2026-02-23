import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { accordionContent } from '../../lib/animations'
import { cn } from '../../lib/utils'
import type { System } from '../../data/types'
import ComparisonBox from './ComparisonBox'
import FlowSteps from './FlowSteps'
import TimeSaved from './TimeSaved'

interface SystemCardProps {
  system: System
  defaultOpen?: boolean
}

export default function SystemCard({ system, defaultOpen = false }: SystemCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={cn(
        'border-2 border-stone-900 overflow-hidden transition-all duration-200 mb-4',
        open ? 'shadow-[3px_3px_0px_0px_#1c1917]' : 'shadow-none'
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center p-5 cursor-pointer group hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-stone-900 bg-primary-50 text-stone-900 text-xs font-black flex items-center justify-center">
            {system.id}
          </div>
          <h3 className="text-[15px] font-bold text-stone-900 group-hover:text-primary-600 transition-colors text-left">
            {system.name}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-stone-400 transition-transform duration-200',
            open && 'rotate-180'
          )}
          strokeWidth={2.5}
        />
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            {...accordionContent}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">
              <div className="border-t-2 border-stone-200 pt-5">
                <ComparisonBox before={system.before} after={system.after} />
                <FlowSteps steps={system.flow} />
                <TimeSaved
                  without={system.timeSaved.without}
                  withAI={system.timeSaved.withAI}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
