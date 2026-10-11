import { profile, stats, roles } from '../data'
import profileImg from '../assets/profile.jpeg'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I&apos;m {profile.name}</p>
          <p className="hero__school">
            {profile.grade} student at {profile.school}
          </p>
          <h1 className="hero__title">
            {profile.role}
            <span className="hero__accent">.</span>
          </h1>
          <p className="hero__tagline hand">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <ul className="hero__hashes">
            {roles.map((role) => (
              <li key={role}>#{role}</li>
            ))}
          </ul>

          <ul className="hero__socials">
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

        <div className="hero__photo">
          <div className="hero__glow" />
          <div className="hero__photo-frame">
            <img src={profileImg} alt={profile.name} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
