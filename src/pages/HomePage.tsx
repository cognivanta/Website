import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import NavBar from '../components/navigation/NavBar'
import Hero from '../components/sections/home/Hero'
import AboutSection from '../components/sections/home/AboutSection'
import ExpertiseSection from '../components/sections/home/ExpertiseSection'
import ServicesSection from '../components/sections/home/ServicesSection'
import JoinTeamSection from '../components/sections/home/JoinTeamSection'
import Footer from '../components/sections/home/Footer'

const HomePage: React.FC = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    // Delay to allow page sections and Lenis to fully mount/initialize after navigation
    const timer = setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        // offset: -80 accounts for the sticky navbar height so the section top reaches the viewport top
        lenis?.scrollTo(element, { immediate: false, offset: -80 });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location.state, lenis]);

  return (
    <div className="h-full w-full bg-background overflow-x-clip">
      <NavBar />
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <JoinTeamSection />
      <Footer />
    </div>
  )
}

export default HomePage