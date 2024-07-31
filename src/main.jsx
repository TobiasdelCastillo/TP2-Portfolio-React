import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Services from './Components/Servicess/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Services/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
