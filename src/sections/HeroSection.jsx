import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

function HeroSection() {
  return (
    <section id='home' className='pt-15 flex flex-col items-center overflow-hidden'>
       {/* Background Gradient Blobs  */}
      <div className="absolute top-1/4 left-0 w-60 md:w-72 h-60 md:h-72 bg-prim-violet/20 rounded-full blur-[100px] animate-pulse">
      </div>
      <div
        className="absolute bottom-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-seco-cyan/20 rounded-full blur-[100px] animate-pulse delay-700">
      </div>
      <div className='text-center'>
        <p className='text-prim-violet font-mono tracking-widest text-lg mb-5'>Hi, MY NAME IS</p>
        <h1 className='text-5xl md:text-8xl font-bold mb-6 '>Shabna <span className='text-gradient'>Pm.</span></h1>
      </div>

      <div className='text-2xl md:text-4xl font-semibold text-slate-600 mb-10 h-12'>
        {/* <span id="typewriter" className='cursor-blink'></span> */}
        <Typewriter words={['Full-Stack Developer', 'MERN Stack Developer', 'FrontEnd Developer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000} />
      </div>



      <p class="max-w-2xl mx-auto text-base md:text-lg mb-10 text-center">
        I build high-performance, scalable web applications using the MERN stack.
        Specializing in bridging the gap between robust backend systems and intuitive frontend experiences.
      </p>

      {/* Buttons */}

      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
        <a className='px-8 py-4 bg-prim-violet text-white rounded-xl font-bold hover:shadow-xl hover:shadow-prim-violet/30 transition-all w-full sm:w-auto' href="#projects">View My Work</a>
        <a className='px-8 py-4 border rounded-xl font-bold transition-all w-full sm:w-auto border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white' href='#contact'>Get In Touch</a>
      </div>

    </section>
  )
}

export default HeroSection