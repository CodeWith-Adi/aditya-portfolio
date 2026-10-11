import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span className="bg-orb bg-orb--1" />
        <span className="bg-orb bg-orb--2" />
        <span className="bg-orb bg-orb--3" />
        <span className="bg-orb bg-orb--4" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
