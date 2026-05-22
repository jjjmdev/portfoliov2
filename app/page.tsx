import Footer from '@/src/components/layout/Footer'
import Navbar from '@/src/components/layout/Navbar'
import HeroSection from '@/src/components/hero/HeroSection'
import ProjectsSection from '@/src/components/sections/ProjectsSection'
import AboutSection from '@/src/components/sections/AboutSection'
import ExperienceSection from '@/src/components/sections/ExperienceSection'
import SkillsSection from '@/src/components/sections/SkillsSection'
import ContactSection from '@/src/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='main-content'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
