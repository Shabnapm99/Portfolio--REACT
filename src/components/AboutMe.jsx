import React from 'react'

function AboutMe() {
    return (
        <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-6 flex items-center'>About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                <p>Hello! I'm Shabna PM. A Full Stack Developer with 2 years of experience in SAP Commerce Cloud and hands-on experience building  <span className="text-prim-violet font-semibold">MERN stack</span> projects.</p>
                <p>
                    I build responsive and user-friendly web applications using React, Node.js, Express, and MongoDB, with hands-on experience through personal projects.
                </p>
                <p>
                    Currently focused on growing as a <span className="text-seco-cyan font-semibold">Full Stack Developer</span> and building scalable, modern web applications.
                </p>
            </div>
        </div>
    )
}

export default AboutMe