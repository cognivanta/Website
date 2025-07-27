import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundEffects from './components/common/BackgroundEffects';
import Navigation from './components/common/Navigation';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import TrainingPage from './components/pages/TrainingPage';
import ProjectsPage from './components/pages/ProjectsPage';
import InternshipsPage from './components/pages/InternshipsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'services': return <ServicesPage />;
      case 'training': return <TrainingPage />;
      case 'projects': return <ProjectsPage />;
      case 'internships': return <InternshipsPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <BackgroundEffects />
      <Navigation current={page} onChange={setPage} />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-20 }} transition={{ duration:0.5 }}>
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}