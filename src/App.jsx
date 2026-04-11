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

function App() {

  return (
    <div className='bg-slate-50 dark:bg-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
