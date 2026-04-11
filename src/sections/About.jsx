import React from 'react'
import ImageSection from '../components/ImageSection'
import AboutMe from '../components/AboutMe'

function About() {
  return (
    <section id='about' className='py-24 bg-slate-100 dark:bg-dark/50 relative'>

      {/* Background glow */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-10 w-100 h-75 bg-seco-cyan/10 blur-3xl opacity-30"></div> */}

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          
          <ImageSection />
          <AboutMe />

        </div>
      </div>
      
    </section>
  )
}

export default About