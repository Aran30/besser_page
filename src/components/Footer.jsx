import { Link } from 'react-router-dom'

const LOGO_SRC = 'https://besser-pearl.org/wp-content/uploads/2025/08/besser_logo_light.png'

const social = [
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.71-6.16L4.97 22H2.21l6.97-7.97L2 2h6.93l4.27 5.66L18.24 2zm-1.19 18h1.66L7.04 4H5.27l11.78 16z"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.34c0-1.27-.02-2.91-1.78-2.91-1.78 0-2.05 1.39-2.05 2.82V21h-4V9z"/></svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h2.7l.4-3.13H13V8.85c0-.91.25-1.53 1.55-1.53H16V4.51A22.6 22.6 0 0013.7 4.4c-2.3 0-3.7 1.37-3.7 3.88v2.59H7V14h3v8h3z"/></svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/5 bg-brand-surface">
      <div className="container-x py-12 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img src={LOGO_SRC} alt="BESSER" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-brand-slate">
            BESSER is an open-source low-code platform to quickly build all types of (smart) applications.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-brand-ink">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-slate">
            <li><Link to="/features" className="hover:text-brand">Features</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/learn" className="hover:text-brand">Learn</Link></li>
            <li><Link to="/research" className="hover:text-brand">Research</Link></li>
            <li><Link to="/projects" className="hover:text-brand">Projects</Link></li>
            <li><Link to="/team" className="hover:text-brand">Team</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-brand-ink">Follow us</h4>
          <div className="mt-3 flex items-center gap-2">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-ink ring-1 ring-black/10 transition hover:bg-brand hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-slate">
            Funded by an FNR Pearl grant led by the Luxembourg Institute of Science and Technology
            with participation from SnT / University of Luxembourg.
          </p>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container-x py-5 text-xs text-brand-slate flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>Copyright © 2026 BESSER. All Rights Reserved.</p>
          <p>Built with React. Content adapted from besser-pearl.org.</p>
        </div>
      </div>
    </footer>
  )
}
