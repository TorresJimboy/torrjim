import projects from '../../data.js';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header"><h1 className="section-title gradient-text slide-up">Recent Projects</h1></div>
      <div className="project-box">
        {projects.map((project) => (
          <article className="project-card" key={project.link}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="heft pulse">
              <img src={project.image} alt={project.name} loading="lazy" />
            </a>
            <div className="card-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
