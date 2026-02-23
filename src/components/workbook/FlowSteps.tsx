interface FlowStepsProps {
  steps: string[]
}

export default function FlowSteps({ steps }: FlowStepsProps) {
  return (
    <div className="mb-4">
      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4 mt-6">
        The Flow
      </p>
      <div className="space-y-0 relative">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 relative py-2.5">
            {/* Connecting line */}
            {i < steps.length - 1 && (
              <div className="absolute left-[13px] top-10 w-[2px] h-[calc(100%-12px)] bg-stone-200" />
            )}
            {/* Square step number */}
            <div className="w-7 h-7 border-2 border-stone-900 bg-primary-600 text-white text-[11px] font-black flex items-center justify-center flex-shrink-0 relative z-10">
              {i + 1}
            </div>
            {/* Text */}
            <p className="text-sm text-stone-600 pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
