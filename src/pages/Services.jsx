import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const services = [
  {
    title: 'Adaptation and Configuration',
    body: 'We can customize BESSER to fit the specific needs of your domain — from tuning code generators to adding support for new domain-specific languages.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Low-Code Migration',
    body: 'Move your projects between low-code platforms with confidence. We use BESSER as a neutral intermediate to make migrations smooth and reliable.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M14 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: 'Teaching Low-Code',
    body: 'We deliver tailored courses and seminars on low-code development for teams, universities, and organizations who want to bring everyone up to speed.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5a6 6 0 0012 0v-5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Discover what else BESSER can do for you"
        subtitle="BESSER is completely free. No freemium, no hidden fees. 100% free. But we also offer additional services on top of the BESSER platform that you may find useful."
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-brand-slate">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-brand-surface">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Need something else?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-slate">
            If you have a use case or a domain that needs a tailored approach, get in touch — we
            love a good challenge.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
