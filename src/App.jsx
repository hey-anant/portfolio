import { useMemo, useState } from 'react'

const quickStats = [
  { label: 'Projects Delivered', value: '4+' },
  { label: 'DSA Problems Solved', value: '100+' },
  { label: 'Location', value: 'Kanpur, India' },
]

const projectData = [
  {
    id: 1,
    title: 'TerraVilla',
    category: 'Web App',
    description:
      'Engineered a broker-free land marketplace prototype with role-based buyer/seller workflows, mock verification, and localStorage-backed data persistence.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'localStorage'],
    demoUrl: '',
    codeUrl: 'https://github.com/hey-anant?tab=repositories',
  },
  {
    id: 2,
    title: 'BookOrbit',
    category: 'Frontend',
    description:
      'Developed a browser-based reading platform with interactive reading views and fast client-side book search.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://hey-anant.github.io/bookOrbit/',
    codeUrl: 'https://github.com/hey-anant?tab=repositories',
  },
  {
    id: 3,
    title: 'Weather App',
    category: 'Web App',
    description:
      'Built a responsive React weather application with city-based forecasting, API integration, and robust error-state handling.',
    stack: ['React', 'JavaScript', 'OpenWeatherMap API'],
    demoUrl: 'https://hey-anant.github.io/Weather-App/',
    codeUrl: 'https://github.com/hey-anant?tab=repositories',
  },
  {
    id: 4,
    title: 'Simon Game',
    category: 'Frontend',
    description:
      'Implemented an interactive sequence-memory game with randomized pattern generation and input validation logic.',
    stack: ['JavaScript', 'CSS'],
    demoUrl: 'https://hey-anant.github.io/Simon-Game/',
    codeUrl: 'https://github.com/hey-anant?tab=repositories',
  },
]

const skillTags = [
  'C',
  'Java',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'REST API',
  'MongoDB',
  'MySQL',
  'Git & GitHub',
]

const softSkillTags = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Time Management',
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hey-anant' },
  { label: 'GitHub', href: 'https://github.com/hey-anant' },
  { label: 'Email', href: 'mailto:anantkumar.r77@gmail.com' },
  {
    label: 'Certificates',
    href: 'https://drive.google.com/drive/folders/1hwB2zhsVETPjR9tnahdruRpT6JgUZ9LA?usp=sharing',
  },
  { label: 'LeetCode', href: 'https://leetcode.com/u/hey_anant_/' },
  { label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/profile/hey_anant_/' },
]

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const categories = useMemo(() => {
    const unique = [...new Set(projectData.map((project) => project.category))]
    return ['All', ...unique]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectData
    return projectData.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const themeClass = isDark ? 'theme-dark' : 'theme-light'

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    if (!contactData.name || !contactData.email || !contactData.message) {
      setStatus('Please fill in all fields before sending.')
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${contactData.name}`)
    const body = encodeURIComponent(
      `Name: ${contactData.name}\nEmail: ${contactData.email}\n\nMessage:\n${contactData.message}`,
    )
    window.location.href = `mailto:anantkumar.r77@gmail.com?subject=${subject}&body=${body}`
    setStatus(`Thanks, ${contactData.name}! Your email draft is now open.`)
    setContactData({ name: '', email: '', message: '' })
  }

  return (
    <div className={`app ${themeClass}`}>
      <div className="bg-accent accent-one" />
      <div className="bg-accent accent-two" />

      <header className="topbar container">
        <a className="logo" href="#home">
          Anant Kumar
        </a>

        <nav className="nav-links">
          <a href="#home">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-btn" onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? 'Light' : 'Dark'}
        </button>
      </header>

      <main className="container">
        <section className="hero card" id="home">
          <div className="hero-left">
            <p className="kicker animated-role">Full Stack Developer</p>
            <h1>Building reliable, user-focused web products.</h1>
            <p>
              I develop responsive applications using React and Node.js, with clean UI,
              maintainable architecture, animated UI interactions, and practical problem-solving
              for real-world use cases.
            </p>

            <div className="hero-cta">
              <a
                href="https://drive.google.com/file/d/1s-gDcjvwoHSkyXwPh-rmkdyB-hWfqyV6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Reference Letter
              </a>
              <a href="#projects">View Projects</a>
              <a href="#contact">Contact Me</a>
            </div>

            <div className="stats-grid">
              {quickStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <img
            src="/my-img.png"
            alt="Anant Kumar"
            className="profile-image"
            loading="lazy"
          />
        </section>

        <section className="split-grid">
          <section className="experience card" id="experience">
            <h2>Professional Experience</h2>
            <h3>Full Stack Developer | Academic & Personal Projects</h3>
            <ul>
              <li>Built responsive full-stack applications using React, Node.js, and RESTful architecture.</li>
              <li>Developed and integrated secure APIs with authentication, authorization, and end-to-end CRUD operations.</li>
              <li>Applied data-structure and algorithm techniques to optimize backend logic and response efficiency.</li>
            </ul>

            <h3>Hackathon Participant</h3>
            <ul>
              <li>Collaborated in 3-5 member teams across multiple hackathons to deliver production-style prototypes.</li>
              <li>Shipped functional MVPs under strict timelines through rapid planning and execution.</li>
              <li>Contributed across frontend development, backend integration, and solution pitching.</li>
            </ul>
          </section>

          <section className="education card" id="education">
            <h2>Education</h2>
            <article className="edu-item">
              <h3>Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur</h3>
              <p>B.Tech in Computer Science and Engineering (CSE) • 2023 - 2027</p>
              <p>CGPA: 7.39 / 10</p>
            </article>
            <article className="edu-item">
              <h3>CH V Singh Bhartiya Balika Inter College, Auraiya</h3>
              <p>Class XII • 2021 - 2022</p>
              <p>Percentage: 82.4 / 100</p>
            </article>
          </section>
        </section>

        <section className="projects card" id="projects">
          <div className="section-head">
            <h2>Projects</h2>
            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={category === activeFilter ? 'filter active' : 'filter'}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <p className="project-category">{project.category}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills card" id="skills">
          <div className="section-head">
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skillTags.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
          <h3 className="skills-subtitle">Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkillTags.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="about card" id="achievements">
          <h2>Achievements</h2>
          <p>
            Solved 100+ DSA problems on LeetCode and GeeksforGeeks, and participated in
            university-level and national hackathons focused on practical product innovation.
          </p>
        </section>

        <section className="contact-strip card" id="links">
          <h2>Professional Profiles & Documents</h2>
          <div className="chip-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <div className="doc-links">
            <a className="resume-link" href="/resume-preview.png" target="_blank" rel="noreferrer">
              View Resume Snapshot
            </a>
            <a
              className="resume-link"
              href="https://drive.google.com/file/d/1s-gDcjvwoHSkyXwPh-rmkdyB-hWfqyV6/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View Reference Letter
            </a>
          </div>
        </section>

        <section className="contact card" id="contact">
          <h2>Contact</h2>
          <form onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={contactData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={contactData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="4"
              value={contactData.message}
              onChange={handleInputChange}
            />
            <button type="submit">Send Message</button>
          </form>
          {status && <p className="status-text">{status}</p>}
        </section>
      </main>
    </div>
  )
}
