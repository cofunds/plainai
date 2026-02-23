import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { professions } from '../../data/professions'
import ProfessionCard from './ProfessionCard'

export default function ProfessionGrid() {
  return (
    <section id="guides" className="py-14 border-t-2 border-stone-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight text-stone-900">
            Choose your guide
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professions.slice(0, 12).map((profession, index) => (
            <ProfessionCard key={profession.id} profession={profession} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-stone-900 hover:text-primary-600 transition-colors"
          >
            View all guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
