import React from 'react'
import Hero from './components/Hero'
import ProjectIntro from './components/ProjectIntro'
import BrandConcept from './components/BrandConcept'
import Typography from './components/Typography'
import ColorPalette from './components/ColorPalette'
import Applications from './components/Applications'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="bg-industrial-black min-h-screen text-white selection:bg-safety-orange selection:text-black font-body">
      <Hero />
      <ProjectIntro />
      <BrandConcept />
      <Typography />
      <ColorPalette />
      <Applications />
      <Footer />
    </div>
  )
}

export default App
