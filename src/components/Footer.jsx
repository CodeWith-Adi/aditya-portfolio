import { profile } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
