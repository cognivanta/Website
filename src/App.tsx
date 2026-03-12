import type React from 'react'
import { ReactLenis } from 'lenis/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Training from './pages/Training'
import CourseDetail from './pages/CourseDetail'
import Enquire from './pages/Enquire'

const App: React.FC = () => {

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.8 }}>
      <div className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:courseId" element={<CourseDetail />} />
          <Route path="/enquire" element={<Enquire />} />
        </Routes>
      </div>
    </ReactLenis>
  )
}

export default App
