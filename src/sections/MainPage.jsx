import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function MainPage() {
  return (
    <main>
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
    </main>
  )
}

export default MainPage