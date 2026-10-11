import Reveal from './Reveal'
import { projects } from '../data'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Projects</p>
          <h2 className="section__title">Selected work</h2>
        </Reveal>

        <div className="projects">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="project-card">
                <div className="project-card__top">
                  <h3>{project.title}</h3>
                  <div className="project-card__links">
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {project.repo !== '#' && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
                <ul className="chips">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip chip--sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
