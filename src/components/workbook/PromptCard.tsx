import { useState } from 'react'
import { ChevronDown, Copy, Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { accordionContent } from '../../lib/animations'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { cn } from '../../lib/utils'
import type { Prompt } from '../../data/types'

interface PromptCardProps {
  prompt: Prompt
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [open, setOpen] = useState(false)
  const { copied, copy } = useCopyToClipboard()

  return (
    <div
      className={cn(
        'border-2 border-stone-900 overflow-hidden transition-all duration-150 mb-3',
        open ? 'shadow-[3px_3px_0px_0px_#1c1917]' : 'shadow-none'
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center p-4 cursor-pointer group hover:bg-stone-50 transition-colors"
      >
        <h4 className="text-sm font-bold text-stone-900 group-hover:text-primary-600 transition-colors text-left">
          {prompt.title}
        </h4>
        <ChevronDown
          className={cn(
            'text-stone-400 shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
          size={18}
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
            <div className="px-4 pb-4">
              {/* Prompt block */}
              <div className="relative bg-stone-50 border-2 border-stone-900 p-4 pr-20">
                <pre className="font-mono text-[12.5px] leading-[1.75] text-stone-700 whitespace-pre-wrap">
                  {prompt.prompt}
                </pre>
                <button
                  type="button"
                  onClick={() => copy(prompt.prompt)}
                  className={cn(
                    'absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors border-2',
                    copied
                      ? 'bg-primary-50 border-primary-600 text-primary-600'
                      : 'bg-white border-stone-900 text-stone-700 hover:bg-stone-50'
                  )}
                  aria-label="Copy prompt"
                >
                  {copied ? (
                    <>
                      <Check size={12} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Result */}
              {prompt.result && (
                <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                  <span className="font-bold text-stone-900">What you get: </span>
                  {prompt.result}
                </p>
              )}

              {/* Tip */}
              {prompt.tip && (
                <div className="bg-amber-50 border-2 border-stone-900 p-3.5 mt-3">
                  <p className="text-sm text-amber-800">
                    <span className="font-black uppercase text-xs tracking-wider">Pro tip: </span>
                    {prompt.tip}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
