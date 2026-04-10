import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function MainPage() {
    return (
        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default MainPage