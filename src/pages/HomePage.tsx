import React from 'react'
import NavBar from '../components/navigation/NavBar'
import Hero from '../components/sections/home/Hero'
import AboutSection from '../components/sections/home/AboutSection'
import ExpertiseSection from '../components/sections/home/ExpertiseSection'
import ServicesSection from '../components/sections/home/ServicesSection'
import JoinTeamSection from '../components/sections/home/JoinTeamSection'

const HomePage: React.FC = () => {

  return (
    <div className="h-full w-full bg-background overflow-x-clip">
      <NavBar />
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <JoinTeamSection />
    </div>
  )
}

export default HomePage