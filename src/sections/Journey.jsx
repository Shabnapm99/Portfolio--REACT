import React from 'react'

function Journey() {
    return (
        <section className='pt-24'>
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0">
                    {/* Item 1 */}
                    <div className="mb-10 ml-8">
                        <span
                            className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-prim-violet rounded-full ring-8 ring-white dark:ring-dark">

                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h3 className="text-xl font-bold">Full Stack (MERN) Upskilling</h3>
                            <time className="text-sm font-mono text-prim-violet">2024 - Present</time>
                        </div>
                        <p className="text-slate-500 mb-2">Self-Driven Learning & MERN Stack Training – Entri Elevate</p>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                            Transitioned into full-stack development after 2 years in SAP Commerce Cloud, focusing on building scalable and user-friendly web applications.
                        </p>
                        {/* <p className="text-slate-600 dark:text-slate-400">Transitioned into full-stack development through 6 months of self-learning, followed by professional MERN stack training at Entri. Developed and deployed multiple applications, focusing on performance, scalability, and user experience.</p> */}
                        <ul className="text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-5 ">
                            <li>Built and deployed full-stack applications using MongoDB, Express, React, and Node.js</li>
                            <li>Focused on responsive UI and scalable backend development</li>
                        </ul>
                    </div>
                    {/* Item 2 */}
                    <div className="mb-10 ml-8">
                        <span
                            className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-seco-cyan rounded-full ring-8 ring-white dark:ring-dark"></span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h3 className="text-xl font-bold"> Analyst / Software Engineer – SAP Commerce Cloud (Hybris)</h3>
                            <time className="text-sm font-mono text-seco-cyan">2022 - 2024</time>
                        </div>
                        <p className="text-slate-500 mb-2">Capgemini Technology Services India Limited</p>
                        {/* <p className="text-slate-600 dark:text-slate-400">Developed enterprise-level e-commerce solutions. Optimized
                            database queries and improved site performance by 25%.</p> */}
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-5">
                            <li>
                                Provided technical support for SAP Commerce Cloud (Hybris) applications, ensuring high availability in a 24×7 environment.
                            </li>
                            <li>
                                Managed data using Backoffice (HMC), FlexibleSearch queries, and Impex scripts.
                            </li>
                            <li>
                                Collaborated with development and QA teams to resolve critical production issues.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a className="inline-flex items-center px-6 py-3 border-2 border-prim-violet text-prim-violet font-bold rounded-xl hover:bg-prim-violet hover:text-white transition-all group"
                        href="/file/Shabnapm-Resume.pdf" download>
                        <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                        Download Full Resume
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Journey