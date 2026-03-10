const socialLinks = [
  { label: 'Email', href: 'mailto:anantkumar.r77@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hey-anant' },
  { label: 'GitHub', href: 'https://github.com/hey-anant' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/hey_anant_/' },
  { label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/profile/hey_anant_/' },
]

export default function Links() {
  return (
    <section className="contact-strip card" id="links">
      <h2>Professional Profiles &amp; Documents</h2>
      <div className="chip-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="doc-links">
        <a
          className="resume-link"
          href="https://drive.google.com/drive/folders/1hwB2zhsVETPjR9tnahdruRpT6JgUZ9LA?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Certificates
        </a>
        <a className="resume-link" href="/My%20Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a
          className="resume-link"
          href="https://drive.google.com/file/d/1s-gDcjvwoHSkyXwPh-rmkdyB-hWfqyV6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Reference Letter
        </a>
      </div>
    </section>
  )
}
