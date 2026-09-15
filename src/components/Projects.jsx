import projects from '../../data.js';
import ScrollPanel from './ScrollPanel.jsx';

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span className="section-eyebrow">Ideas into experiences</span>
        <h1 id="projects-title" className="section-title gradient-text slide-up">Recent Projects</h1>
        <p>A selection of things I've designed and built.</p>
      </div>
      <ScrollPanel id="projects-viewport" title="Selected work" count={projects.length} itemLabel="projects" className="projects-panel">
        <div className="project-box">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              {project.screenshots ? (
                <div className="project-gallery" role="group" aria-label={`${project.name} screenshots`}>
                  <div className="project-screenshots">
                    {project.screenshots.map((screenshot) => (
                      <figure className="project-screenshot" key={screenshot.image}>
                        <a className="phone-preview" href={screenshot.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}: ${screenshot.label} screenshot full size (opens in a new tab)`}>
                          <img src={screenshot.image} alt={`${project.name} ${screenshot.label} screen`} width="922" height="2049" loading="lazy" />
                        </a>
                        <figcaption>{screenshot.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="gallery-hint">Select a screen to view full size <span aria-hidden="true">↗</span></p>
                </div>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`project-preview${project.previewFit === 'contain' ? ' project-preview-contain' : ''}`} aria-label={`View ${project.name} (opens in a new tab)`}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                </a>
              )}
              <div className="card-info">
                {project.platform && <span className="project-platform">{project.platform}</span>}
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                {project.tech && (
                  <ul className="tech-list" aria-label="Technologies used">
                    {project.tech.split(' • ').map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                )}
                {project.link && (
                  <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} (opens in a new tab)`}>View project <span aria-hidden="true">↗</span></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </ScrollPanel>
    </section>
  );
}
