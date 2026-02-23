import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          className="border-2 border-stone-900 bg-stone-900 p-10 text-center"
          style={{ boxShadow: '6px 6px 0 #16a34a' }}
        >
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Start using AI today
          </h2>
          <p className="mt-3 text-base text-stone-400">
            Pick your role. Follow the guide. Free forever.
          </p>
          <Link
            to="/guides"
            className="brutal-btn mt-6 inline-flex bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-stone-900 border-white"
          >
            Browse guides
          </Link>
        </div>
      </div>
    </section>
  )
}
