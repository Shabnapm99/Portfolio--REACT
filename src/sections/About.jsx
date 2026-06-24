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
          <div className='flex flex-col justify-center items-center'>
            <AboutMe />
            <div className="mt-12 text-center">
              <a className="inline-flex items-center px-6 py-3 border-2 border-prim-violet text-prim-violet font-bold rounded-xl hover:bg-prim-violet hover:text-white transition-all group"
                href="/file/Resume_Shabnapm.pdf" download>
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Download Full Resume
              </a>
            </div>

          </div>


        </div>
      </div>

    </motion.section>
  )
}

export default About