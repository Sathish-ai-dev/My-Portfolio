import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Scene3D from './components/Scene3D'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="relative">
      {/* Fixed 3D Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas
          dpr={[1, 2]}
          gl={{
            powerPreference: "high-performance",
            antialias: false
          }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Content */}
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
