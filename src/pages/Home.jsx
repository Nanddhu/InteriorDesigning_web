import AboutSection from '../components/home/AboutSection'
import ContactCTA from '../components/home/ContactCTA'
import HeroSection from '../components/home/HeroSection'
import ProjectsSection from '../components/home/ProjectsSection'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}

export default Home
