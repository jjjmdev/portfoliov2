import Footer from '@/src/hooks/components/layout/Footer'
import Navbar from '@/src/hooks/components/layout/Navbar'
import HeroSection from '@/src/hooks/components/hero/HeroSection'
import ServicesSection from '@/src/hooks/components/sections/ServicesSection'
import ProjectsSection from '@/src/hooks/components/sections/ProjectsSection'
import AboutSection from '@/src/hooks/components/sections/AboutSection'
import ExperienceSection from '@/src/hooks/components/sections/ExperienceSection'
import SkillsSection from '@/src/hooks/components/sections/SkillsSection'
import BlogSection from '@/src/hooks/components/sections/BlogSection'
import ContactSection from '@/src/hooks/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='main-content'>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
