import React from 'react'
import ContactForm from '../components/ContactForm';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section id='contact'>
            <div className='flex flex-col items-center'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold mb-4 text-gradient'>Get In Touch</h2>
                    <p className='text-slate-600 font-medium'>I'm currently looking for new opportunities. My inbox is always open!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/*  Contact Info  */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
                        {/* Contact me */}
                        <div className='space-y-6'>
                            <div className='flex'>
                                <div className='w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4 border border-slate-200 dark:border-slate-800'>
                                    <svg class="w-6 h-6 text-prim-violet" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>

                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email Me</p>
                                    <p className="font-semibold">pmshabnashareefa@gmail.com</p>

                                </div>
                            </div>

                            <div className='flex'>
                                <div className='w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4 border border-slate-200 dark:border-slate-800'>
                                    <svg class="w-6 h-6 text-seco-cyan" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>

                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-semibold">Manama, Bahrain</p>

                                </div>

                            </div>
                        </div>
                        {/* Follow me */}
                        <div className='mt-10'>
                            <h4 className='font-bold mb-4'>Follow Me</h4>
                            <div className='flex gap-4'>
                                <a className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-seco-cyan text-lg transition-all' href="https://www.linkedin.com/in/shabnapm/" target='_blank'>
                                    <FaLinkedin />
                                </a>
                                <a className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-seco-cyan text-lg transition-all' href="https://github.com/Shabnapm99" target='_blank'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                    </div>
                    <ContactForm />
                </div>

            </div>

        </section>
    )
}

export default Contact