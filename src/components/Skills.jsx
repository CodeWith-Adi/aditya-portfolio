import Reveal from './Reveal'
import { skills } from '../data'

function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Skills</p>
          <h2 className="section__title">Tech I work with</h2>
        </Reveal>

        <div className="skills">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div className="skill-card">
                <h3>{group.category}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
