import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills container">
        <div className="skill-top"><h1 className="section-title gradient-text slide-up">Skills</h1></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card heft" key={skill.name}>
              <img src={skill.image} alt={skill.alt} className="full-width" loading="lazy" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
