const quickStats = [
  { label: 'Projects Delivered', value: '4+' },
  { label: 'DSA Problems Solved', value: '100+' },
  { label: 'Location', value: 'Kanpur, India' },
]

export default function Hero() {
  return (
    <section className="hero card" id="home">
      <div className="hero-left">
        <p className="kicker animated-role">Full Stack Developer</p>
        <h1>Building reliable, user-focused web products.</h1>
        <p>
          I develop responsive applications using React.js and Node.js, with clean UI,
          maintainable architecture, animated UI interactions, and practical problem-solving
          for real-world use cases.
        </p>

        <div className="hero-cta">
          <a
            href="https://drive.google.com/file/d/1s-gDcjvwoHSkyXwPh-rmkdyB-hWfqyV6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Reference Letter
          </a>
          <a href="/My%20Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="#projects">Projects</a>
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
  )
}
