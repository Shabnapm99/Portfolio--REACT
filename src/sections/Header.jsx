import React from 'react'
import Navbar from '../components/Navbar'

function Header() {
    return (
        <header className='sticky top-0 left-0 z-50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800'>
            <Navbar />
        </header>
    )
}

export default Header