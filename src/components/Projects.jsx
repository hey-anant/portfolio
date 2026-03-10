import { useMemo, useState } from 'react'

const projectData = [
  {
    id: 1,
    title: 'TerraVilla',
    category: 'Web App',
    description:
      'Engineered a broker-free land marketplace prototype with role-based buyer/seller workflows, mock verification, and localStorage-backed data persistence.',
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'Lucide React', 'localStorage'],
    demoUrl: 'https://terravilla.vercel.app/',
    codeUrl: 'https://github.com/hey-anant/TerraVilla',
  },
  {
    id: 2,
    title: 'BookOrbit',
    category: 'Frontend',
    description:
      'Developed a browser-based reading platform with interactive reading views and fast client-side book search.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://hey-anant.github.io/bookOrbit/',
    codeUrl: 'https://github.com/hey-anant/bookOrbit',
  },
  {
    id: 3,
    title: 'Weather App',
    category: 'Web App',
    description:
      'Built a responsive React.js weather application with city-based forecasting, API integration, and robust error-state handling.',
    stack: ['React.js', 'JavaScript', 'OpenWeatherMap API'],
    demoUrl: 'https://hey-anant.github.io/Weather-App/',
    codeUrl: 'https://github.com/hey-anant/Weather-App',
  },
  {
    id: 4,
    title: 'Simon Game',
    category: 'Frontend',
    description:
      'Implemented an interactive sequence-memory game with randomized pattern generation and input validation logic.',
    stack: ['JavaScript', 'CSS'],
    demoUrl: 'https://hey-anant.github.io/Simon-Game/',
    codeUrl: 'https://github.com/hey-anant/Simon-Game',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = useMemo(() => {
    const unique = [...new Set(projectData.map((p) => p.category))]
    return ['All', ...unique]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectData
    return projectData.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
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
  )
}
