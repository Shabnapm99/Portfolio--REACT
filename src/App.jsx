import './App.css'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import ContactForm from './components/ContactForm'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import MainPage from './sections/MainPage'
import { useEffect, useState } from 'react'
import { PulseLoader } from "react-spinners";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ? <div className='h-screen flex justify-center items-center'><PulseLoader loading={loading} color='#8b5cf6' /></div> : <div className='bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300'>
          <Header />
          <MainPage />
          <Footer />
        </div>
      }
    </>

  )
}

export default App
