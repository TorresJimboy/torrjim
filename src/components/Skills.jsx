import { skills } from '../data/portfolio.js';
import ScrollPanel from './ScrollPanel.jsx';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="skills container">
        <div className="section-heading">
          <span className="section-eyebrow">Always learning. Always building.</span>
          <h1 id="skills-title" className="section-title gradient-text slide-up">Skills</h1>
          <p>The languages, frameworks, and tools behind my work.</p>
        </div>
        <ScrollPanel id="skills-viewport" title="My toolkit" count={skills.length} itemLabel="skills" className="skills-panel">
          <ul className="skills-grid">
            {skills.map((skill) => (
              <li className="skill-card" key={skill.name}>
                <span className="skill-icon"><img src={skill.image} alt="" width="48" height="48" loading="lazy" /></span>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </ScrollPanel>
      </div>
    </section>
  );
}
