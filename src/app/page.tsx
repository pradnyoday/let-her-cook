import HeroSection from '../features/home/sections/hero/HeroSection'
import TrustSection from '../features/home/sections/trust/TrustSection'
import HowItWorks from '../features/home/sections/how-it-works/HowItWorks'
import PricingSection from '../features/home/sections/pricing/PricingSection'
import TestimonialsSection from '../features/home/sections/testimonials/TestimonialsSection'
import FaqSection from '../features/home/sections/faq/FaqSection'
import CtaSection from '../features/home/sections/cta/CtaSection'
import FooterSection from '../features/home/sections/footer/FooterSection'

export default function Home() {
  return (
    // <main>Homepage</main>
    <>
      <HeroSection />
      <TrustSection />
      <PricingSection />
      <HowItWorks />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </>
  )
}
