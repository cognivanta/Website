import React from 'react'
import NavBar from '../components/navigation/NavBar'
import Hero from '../components/sections/home/Hero'
import AboutSection from '../components/sections/home/AboutSection'
import FeatureSection from '../components/sections/home/ExpertisesSection'

const HomePage: React.FC = () => {

  return (
    <div className="h-full w-full bg-background overflow-x-clip">
      <NavBar />
      <Hero />
      <AboutSection />
      <FeatureSection />
    </div>
  )
}

export default HomePage