export default function Header({ isDark, onThemeToggle }) {
  return (
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

      <button className="theme-btn" onClick={onThemeToggle}>
        {isDark ? 'Light' : 'Dark'}
      </button>
    </header>
  )
}
