import Reveal from './Reveal'
import { experience } from '../data'

function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Experience</p>
          <h2 className="section__title">Camps, hackathons &amp; activities</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 90}>
              <div className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__head">
                  <h3>
                    {job.role} <span className="timeline__at">@ {job.company}</span>
                  </h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
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

export default Experience
