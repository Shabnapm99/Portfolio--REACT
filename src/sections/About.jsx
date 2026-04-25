import React from 'react'
import ImageSection from '../components/ImageSection'
import AboutMe from '../components/AboutMe'
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section id='about' className='pt-24 bg-slate-100 dark:bg-dark/50 relative'
      initial={{ y: 80, opacity: 0 }}        // start below
      whileInView={{ y: 0, opacity: 1 }}     // move up to position
      transition={{ duration: 0.5, ease: "easeOut" }}>

      {/* Background glow */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-10 w-100 h-75 bg-seco-cyan/10 blur-3xl opacity-30"></div> */}

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          <ImageSection />
          <AboutMe />

        </div>
      </div>

    </motion.section>
  )
}

export default About