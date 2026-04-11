import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Journey from './Journey'

function MainPage() {
    return (
        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
        </main>
    )
}

export default MainPage