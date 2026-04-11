import React from 'react'
import SkillCard from '../components/SkillCard';
import { data } from '../data/data';

function Skills() {
  const skills = data.skills;

  return (
    <section id='skills' className='py-24 relative'>
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-prim-violet/10 blur-3xl opacity-30 pointer-events-none"></div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Toolkit
          </h2>

          <div className="h-1.5 w-20 bg-linear-to-r from-prim-violet to-seco-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <SkillCard skill={skill} key={index} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills