import type { TimeRow } from '../../data/types'

interface TimeTableProps {
  rows: TimeRow[]
  totalRow: TimeRow
}

export default function TimeTable({ rows, totalRow }: TimeTableProps) {
  return (
    <div className="border-2 border-stone-900 overflow-hidden my-6">
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 border-b-2 border-stone-900">
            <th className="text-[10px] uppercase tracking-wider font-black text-stone-700 px-5 py-3 text-left">
              Task
            </th>
            <th className="text-[10px] uppercase tracking-wider font-black text-stone-700 px-5 py-3 text-left">
              Without AI
            </th>
            <th className="text-[10px] uppercase tracking-wider font-black text-stone-700 px-5 py-3 text-left">
              With AI
            </th>
            <th className="text-[10px] uppercase tracking-wider font-black text-stone-700 px-5 py-3 text-left">
              Time Saved
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-stone-200 hover:bg-stone-50">
              <td className="px-5 py-3.5 text-sm font-bold text-stone-900">
                {row.task}
              </td>
              <td className="px-5 py-3.5 text-sm text-stone-500">
                {row.without}
              </td>
              <td className="px-5 py-3.5 text-sm text-stone-500">
                {row.withAI}
              </td>
              <td className="px-5 py-3.5 text-sm text-primary-700 font-bold">
                {row.saved}
              </td>
            </tr>
          ))}
          {/* Total row */}
          <tr className="bg-primary-50 border-t-2 border-stone-900">
            <td className="px-5 py-3.5 text-sm font-black text-stone-900">{totalRow.task}</td>
            <td className="px-5 py-3.5 text-sm font-bold text-stone-900">{totalRow.without}</td>
            <td className="px-5 py-3.5 text-sm font-bold text-stone-900">{totalRow.withAI}</td>
            <td className="px-5 py-3.5 text-sm font-black text-primary-700">{totalRow.saved}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
