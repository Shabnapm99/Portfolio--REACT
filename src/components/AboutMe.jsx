import React from 'react'

function AboutMe() {
    return (
        <div className='lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-6 flex items-center'>About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                <p>
                    Hello! I'm Shabna PM, a Full Stack Developer with a passion for building digital solutions that solve
                    real-world problems. My journey in tech began with 2 years of professional experience as a
                    <span class="text-seco-cyan font-semibold"> SAP Commerce Cloud Developer</span>, where I mastered
                    complex enterprise architectures.
                </p>
                <p>
                    Driven by a desire to explore the full potential of the modern web, I've successfully pivoted and
                    upskilled into the <span class="text-prim-violet font-semibold">MERN Stack</span>.
                    I love creating seamless user interfaces and architecting efficient server-side logic.
                </p>
            </div>
        </div>
    )
}

export default AboutMe