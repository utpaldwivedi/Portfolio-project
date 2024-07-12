import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <section id='home' >
      <Home/>
      </section>
      <section id='about'>
      <About/>
      </section>
      <section id='skills'>
      <Skills/>
      </section>
      <section id='projects'>
      <Projects/>
      </section>
      <section id='contact'>
      <Contact/>
      </section>
      <Footer/>
    </>
  )
}

export default App
