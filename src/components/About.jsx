import Reveal from './Reveal'
import { about } from '../data'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">About</p>
          <h2 className="section__title">A little about me</h2>
        </Reveal>

        <div className="about">
          <Reveal className="about__text hand">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="about__aside" delay={120}>
            <ul className="about__list">
              {about.highlights.map((h) => (
                <li key={h}>
                  <span className="tick" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
