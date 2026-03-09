import React from 'react'
import NavBar from '../components/navigation/NavBar'
import Hero from '../components/sections/home/Hero'
import AboutSection from '../components/sections/home/AboutSection'
import ExpertiseSection from '../components/sections/home/ExpertiseSection'
import ServicesSection from '../components/sections/home/ServicesSection'

const HomePage: React.FC = () => {

  return (
    <div className="h-full w-full bg-background overflow-x-clip">
      <NavBar />
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
    </div>
  )
}

export default HomePage