import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { HowItWorks } from './components/HowItWorks'
import { FAQ } from './components/FAQ'
import { Integrations } from './components/Integrations'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'clip' }}>
      <Nav />
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 1 }}>
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
