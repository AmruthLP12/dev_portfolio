import Hero from '@/components/hero'
import Projects from '@/components/projects'
import TechStack from '@/components/tech-stack'
import Services from '@/components/services'
import Reviews from '@/components/reviews'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />
      <Services />
      <Reviews />
      <Contact />
    </>
  )
}

