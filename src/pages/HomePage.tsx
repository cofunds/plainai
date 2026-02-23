import { SEO } from '../components/ui/SEO'
import Hero from '../components/home/Hero'
import ProfessionGrid from '../components/home/ProfessionGrid'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <SEO
        description="AI explained simple and plain for every profession. Free guides with tools, prompts, workflows, and action plans."
        path="/"
      />
      <Hero />
      <ProfessionGrid />
      <CTASection />
    </>
  )
}
