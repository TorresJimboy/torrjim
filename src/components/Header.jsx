import { useEffect, useState } from 'react';

const sections = ['about', 'skills', 'projects', 'contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updateNavigation() {
      setScrolled(window.scrollY > 250);
      let current = 'about';
      sections.forEach((id) => {
        if (document.getElementById(id).getBoundingClientRect().top <= 100) current = id;
      });
      setActiveSection(current);
    }
    function closeMenu(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);
    window.addEventListener('keydown', closeMenu);
    return () => {
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', updateNavigation);
      window.removeEventListener('keydown', closeMenu);
    };
  }, []);

  return (
    <header id="header">
      <div className={`header container${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-bar">
          <div className="brand"><a href="#about" onClick={() => setMenuOpen(false)}><h1>Guariño Torres</h1></a></div>
          <nav className="nav-list" aria-label="Main navigation">
            <button className={`hamburger${menuOpen ? ' active' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="bar" />
            </button>
            <ul id="navigation" className={menuOpen ? 'active' : ''}>
              {sections.map((id) => (
                <li key={id}><a href={`#${id}`} data-after={id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{id}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
