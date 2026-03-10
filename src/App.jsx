import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Links from './components/Links'
import Contact from './components/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const themeClass = isDark ? 'theme-dark' : 'theme-light'

  return (
    <div className={`app ${themeClass}`}>
      <div className="bg-accent accent-one" />
      <div className="bg-accent accent-two" />

      <Header isDark={isDark} onThemeToggle={() => setIsDark((prev) => !prev)} />

      <main className="container">
        <Hero />

        <section className="split-grid">
          <Experience />
          <Education />
        </section>

        <Projects />

        <Skills />

        <Achievements />

        <Links />

        <Contact />
      </main>
    </div>
  )
}
