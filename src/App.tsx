import type React from 'react'
import { ReactLenis } from 'lenis/react'
import HomePage from './pages/HomePage'

const App: React.FC = () => {

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.8 }}>
      <div className="min-h-screen w-full">
        <HomePage />
      </div>
    </ReactLenis>
  )
}

export default App
