import React from 'react';
import { data } from '../data/data';
import ProjectCard from '../components/ProjectCard';

function Projects() {

  let projects = data.projects;

  return (
    <section id='projects' className='bg-slate-100 dark:bg-dark/30'>
      <div className='mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4'>
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-slate-500">Some of my recent work that I'm proud of.</p>
          </div>
          <a className="text-prim-violet font-semibold hover:underline" href="#">View all projects →</a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            projects.map((project) => {
              return (<ProjectCard project={project} />)
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Projects