import ScrollReveal from '../ui/ScrollReveal'

export default function MissionBlock() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl bg-gray-50 px-8 py-10 sm:px-12 sm:py-14">
              <blockquote className="text-center">
                <p className="text-lg font-medium leading-relaxed text-gray-700">
                  "AI shouldn't be something you need a computer science degree to understand.
                  We're building the simplest, most practical AI education on the internet --
                  one profession at a time. No paywalls, no logins, no nonsense."
                </p>
                <footer className="mt-6 text-sm font-medium text-gray-400">
                  &mdash; 1126labs
                </footer>
              </blockquote>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
