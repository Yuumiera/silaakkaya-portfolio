import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer>
                <div className="container" style={{ textAlign: 'center', padding: '2rem 0', opacity: 0.6 }}>
                    <p>&copy; {new Date().getFullYear()} Sila Akkaya. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    )
}

export default App
