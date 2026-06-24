import React, { useState } from 'react';
import { data } from '../data/data';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'

function Projects() {

  const [showAll, setShowAll] = useState(false);
  const projects = data.projects;
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id='projects' className='bg-slate-100 dark:bg-dark/50 pt-20'>
      <motion.div className='mx-auto px-6'
        initial={{ y: 80, opacity: 0 }}        // start below
        whileInView={{ y: 0, opacity: 1 }}     // move up to position
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4'>
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-slate-500">Some of my recent work that I'm proud of.</p>
          </div>
          <a className="text-prim-violet font-semibold hover:underline" href="#projects"
            onClick={() => setShowAll(!showAll)}>{
              showAll ? 'Show Less ←' : 'View all projects →'}</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            visibleProjects.map((project, index) => {
              return (<ProjectCard project={project} key={index} />)
            })
          }

        </div>
      </motion.div>
    </section>
  )
}

export default Projects