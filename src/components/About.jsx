export default function About({ onOpenCertificates }) {
  return (
<section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src="./img/me3.png" alt="Guariño Torres" className="full-width" />
        </div>
      </div>
      <div className="col-right">
        <h2 className="whiteb slide-up">Software Developer</h2>
        <p className="whiteb">Hi, I’m Guariño Torres (Jim), a BSIT graduate and Software Developer
          passionate about creating clean, secure, and user-friendly applications. I’ve
          built multiple projects that demonstrate my skills in web and mobile development, and I’m
          continuously improving by exploring new technologies and developing projects across
          different platforms.</p>
        <div className="cta-items">
          <a href="./resume/Torres, Guariño.pdf?v=2" target="_blank" rel="noopener noreferrer" className="cta btn-effect">My CV</a>
          <a href="#projects" className="cta btn-effect">View Projects</a>
          <div className="certificates">
            <button className="cta btn-effect" onClick={onOpenCertificates}>Certificates</button>
          </div>
        </div>
        <div className="link-icons">
          <a href="https://github.com/TorresJimboy" target="_blank" rel="noopener noreferrer"><img src="./img/github.png"
              alt="Github" className="github" /></a>
          <a href="https://www.linkedin.com/in/guari%C3%B1o-torres-827433358/" target="_blank" rel="noopener noreferrer"><img
              src="./img/linkedin.png" alt="Linkedin" className="linkedin" /></a>
        </div>
      </div>
    </div>
  </section>
  );
}
