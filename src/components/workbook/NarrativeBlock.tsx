interface NarrativeBlockProps {
  paragraphs: string[]
  highlight?: string
  closingParagraph?: string
}

export default function NarrativeBlock({ paragraphs, highlight, closingParagraph }: NarrativeBlockProps) {
  return (
    <div>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[16px] text-stone-500 leading-[1.8] mb-5">
          {p}
        </p>
      ))}
      {highlight && (
        <p className="text-xl font-bold text-stone-900 my-10 pl-5 border-l-2 border-stone-900 bg-stone-50 py-4 pr-4">
          {highlight}
        </p>
      )}
      {closingParagraph && (
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-5">
          {closingParagraph}
        </p>
      )}
    </div>
  )
}
