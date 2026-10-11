import Reveal from './Reveal'
import { profile } from '../data'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact">
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Let&apos;s build something together</h2>
            <p className="contact__text">
              I am open to collaborations, freelance work, and new opportunities.
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn--ghost" href={profile.resumeUrl}>
                Download resume
              </a>
            </div>

            <ul className="contact__socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
