import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Pick your role',
    description:
      'We built a complete AI guide tailored to your specific profession and daily workflow.',
  },
  {
    number: '02',
    title: 'Learn the systems',
    description:
      'See exactly where AI fits - with before and after comparisons for every workflow.',
  },
  {
    number: '03',
    title: 'Start using it today',
    description:
      "Copy our prompts, set up the tools, follow the 7-day plan. You'll be running by Friday.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-gray-200 bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">
              How it works
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              From zero to AI-powered in 7 days
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-gray-100 mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
