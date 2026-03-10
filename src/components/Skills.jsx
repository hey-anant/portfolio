const skillTags = [
  'Java',
  'JavaScript',
  'React.js',
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

export default function Skills() {
  return (
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
  )
}
