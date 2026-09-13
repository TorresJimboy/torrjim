import { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Certificates from './components/Certificates.jsx';

export default function App() {
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    contentRef.current.querySelectorAll('.slide-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main ref={contentRef}>
        <About onOpenCertificates={() => setCertificatesOpen(true)} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer id="footer">
        <div className="footer container">
          <p>© {new Date().getFullYear()} Guariño Torres. All rights reserved.</p>
        </div>
      </footer>
      {certificatesOpen && <Certificates onClose={() => setCertificatesOpen(false)} />}
    </>
  );
}
