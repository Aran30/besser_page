import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const LOGO_SRC = 'https://besser-pearl.org/wp-content/uploads/2025/08/besser_logo_light.png'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
  { to: '/services', label: 'Services' },
  {
    to: '/learn',
    label: 'Learn',
    children: [
      { label: 'Technical docs', href: 'https://besser.readthedocs.io/en/latest/', external: true, desc: 'Install, run and extend BESSER' },
      { label: 'Low-code handbook', href: 'https://lowcode-book.com/', external: true, desc: 'Theory, concepts and tutorials' },
      { label: 'Blog', href: 'https://modeling-languages.com/', external: true, desc: 'News and experiments' },
    ],
  },
  {
    to: '/research',
    label: 'Research',
    children: [
      { label: 'Publications', to: '/research', desc: '31 scientific papers' },
      { label: 'Projects', to: '/projects', desc: 'MOSAICO, Climaborough, BESSER' },
    ],
  },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.13c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z"/>
    </svg>
  )
}

function Chevron({ open }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (!openMenu) return
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-white/85 backdrop-blur'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="BESSER home">
          <img src={LOGO_SRC} alt="BESSER" className="h-9 w-auto" />
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => {
            if (item.children) {
              const isOpen = openMenu === item.label
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      location.pathname.startsWith(item.to) || isOpen
                        ? 'text-brand'
                        : 'text-brand-ink hover:text-brand'
                    }`}
                  >
                    {item.label}
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-card ring-1 ring-black/5 anim-fade-in"
                    >
                      {item.children.map((c) => {
                        const className =
                          'group/item flex flex-col gap-0.5 rounded-xl px-3 py-2.5 text-sm text-brand-ink hover:bg-brand/5 hover:text-brand'
                        return c.external ? (
                          <a
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            role="menuitem"
                            className={className}
                          >
                            <span className="font-semibold">{c.label}</span>
                            {c.desc && <span className="text-xs text-brand-slate group-hover/item:text-brand">{c.desc}</span>}
                          </a>
                        ) : (
                          <Link key={c.label} to={c.to} role="menuitem" className={className}>
                            <span className="font-semibold">{c.label}</span>
                            {c.desc && <span className="text-xs text-brand-slate group-hover/item:text-brand">{c.desc}</span>}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-brand' : 'text-brand-ink hover:text-brand'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/besser-pearl"
            target="_blank"
            rel="noreferrer"
            aria-label="BESSER on GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-ink ring-1 ring-black/10 transition hover:bg-brand hover:text-white hover:ring-brand"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://editor.besser-pearl.org"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Try
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-black/10"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-black/5 bg-white anim-fade-in">
          <div className="container-x py-3">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-semibold ${isActive ? 'text-brand' : 'text-brand-ink'}`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((c) =>
                      c.external ? (
                        <a
                          key={c.label}
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block py-1.5 text-sm text-brand-slate hover:text-brand"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <Link key={c.label} to={c.to} className="block py-1.5 text-sm text-brand-slate hover:text-brand">
                          {c.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <a
                href="https://github.com/besser-pearl"
                target="_blank"
                rel="noreferrer"
                aria-label="BESSER on GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-ink ring-1 ring-black/10"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://editor.besser-pearl.org"
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-1"
              >
                Try editor
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
