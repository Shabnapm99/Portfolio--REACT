import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project }) {

  const colors = [
    "bg-prim-violet/10 text-prim-violet",
    "bg-seco-cyan/10 text-seco-cyan"
  ];
  return (
    <div className="card w-full max-w-sm shadow-sm group relative bg-white dark:bg-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-2">
      <figure>
        <img
          src={project.image}
          alt="project image"
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 mb-4">
          {
            project.technologies.map((tech,index) => {
              return (

                <span
                  key={index}
                  className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${colors[index % colors.length]
                    }`}
                >{tech}</span>
              )
            })
          }
        </div>
        <h2 className="card-title">{project.title}</h2>
        <p className='mb-6'>{project.description}</p>
        <div className="card-actions justify-start text-[20px]">
          <a class="text-prim-violet hover:text-seco-cyan transition-colors" href={project.github} target='_blank'><FaGithub /></a>
          <a class="text-prim-violet hover:text-seco-cyan transition-colors" href={project.live} target='_blank'><FaArrowUpRightFromSquare /></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard