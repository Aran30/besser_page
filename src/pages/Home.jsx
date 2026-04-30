import { Link } from 'react-router-dom'
import NewsletterForm from '../components/NewsletterForm.jsx'

const HERO_IMG = 'https://besser-pearl.org/wp-content/uploads/2025/08/software-img-01-1.png'
const DEMO_GIF = 'https://besser-pearl.org/wp-content/uploads/2025/09/Adobe-Express-aaaaa.gif'

const techLogos = [
  { name: 'FastAPI', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/fastapi-white.png' },
  { name: 'SQL', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/sql-white.png' },
  { name: 'Java', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/java-white.png' },
  { name: 'SQLAlchemy', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/sqlalchemy-white.png' },
  { name: 'Python', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/python-white.png' },
  { name: 'Terraform', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/terraform-white.png' },
  { name: 'Django', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/django-white.png' },
  { name: 'PyTorch', src: 'https://besser-pearl.org/wp-content/uploads/2025/09/pytorch-white.png' },
]

const featureCards = [
  {
    title: 'Online modeling',
    body: 'Use the cloud-based editor to model your software system right in the browser — no installation needed.',
    href: 'https://editor.besser-pearl.org',
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    title: 'Code generators',
    body: '15+ generators turn your models into running code: SQL, Java, Python, Django, FastAPI, Terraform and more.',
    to: '/features',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
  },
  {
    title: 'Quality analysis',
    body: 'Built-in syntactic and semantic checks validate your models before you generate any code.',
    to: '/features',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  },
  {
    title: 'Contact us',
    body: 'Tell us how we can help make BESSER work great for you, or ask for a demo.',
    to: '/contact',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    ),
  },
]

const stats = [
  { value: '15+', label: 'Code generators' },
  { value: '31', label: 'Scientific publications' },
  { value: '23', label: 'Team members' },
  { value: '100%', label: 'Open-source' },
]

const mainFeatures = [
  {
    icon: 'https://besser-pearl.org/wp-content/uploads/2025/08/saas-icon_13.png',
    title: 'Model-based',
    body: 'Model every aspect of your software system — data, logic, agents, deployment — and generate the artifacts automatically.',
  },
  {
    icon: 'https://besser-pearl.org/wp-content/uploads/2025/08/saas-icon_15.png',
    title: 'No installation',
    body: 'Cloud-based online editor: open the browser, sign in, and start modeling in seconds.',
  },
  {
    icon: 'https://besser-pearl.org/wp-content/uploads/2025/08/saas-icon_14.png',
    title: 'Customizable',
    body: 'Open-source from day one. Extend BESSER with new modeling languages, generators or domain-specific add-ons.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-surface via-white to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 10%, rgba(30,136,229,0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,188,212,0.08), transparent 40%)',
          }}
        />
        <div className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Open-source low-code platform
            </span>
            <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold leading-[1.05] text-brand-ink">
              Better Software <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">Faster</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-slate">
              BESSER is an open-source low-code platform to quickly build all types of (smart)
              applications. Model your system once, generate everywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://editor.besser-pearl.org"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Start now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <Link to="/features" className="btn-outline">
                See all features
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-6 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-brand-accent/10 blur-3xl" />
            <img
              src={HERO_IMG}
              alt="BESSER platform illustration"
              className="relative w-full max-w-xl mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-black/5 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-brand-slate">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="bg-brand-surface">
        <div className="container-x py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">See it in action</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Model. Generate. Ship.</h2>
            <p className="mt-3 text-brand-slate">
              From a class diagram to a running back-end in minutes.
            </p>
          </div>
          <div className="relative mx-auto mt-10 max-w-5xl">
            {/* Browser chrome */}
            <div className="rounded-t-2xl bg-brand-ink/95 px-4 py-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 truncate text-xs text-white/60">editor.besser-pearl.org</span>
            </div>
            <div className="overflow-hidden rounded-b-2xl bg-brand-ink/95 p-2 shadow-card">
              <img src={DEMO_GIF} alt="BESSER editor demo" className="w-full rounded-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Why BESSER</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Build, generate and deploy — all from one platform
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((c) => {
              const inner = (
                <>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    {c.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-slate">{c.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover/card:gap-2">
                    Learn more →
                  </span>
                </>
              )
              return c.external ? (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/card card flex h-full flex-col transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={c.title}
                  to={c.to}
                  className="group/card card flex h-full flex-col transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section bg-brand-surface">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <div className="card flex flex-col">
            <h3 className="text-xl font-bold">Is BESSER right for me?</h3>
            <p className="mt-3 flex-1 text-brand-slate">
              From software engineers to domain experts, BESSER lets every kind of user contribute
              to building software. Each role has its own UI: visual editor, image-to-model importer,
              or textual descriptions powered by AI.
            </p>
            <Link to="/features" className="mt-5 inline-flex text-sm font-semibold text-brand">
              Explore features →
            </Link>
          </div>
          <div className="card flex flex-col">
            <h3 className="text-xl font-bold">Learn by doing</h3>
            <p className="mt-3 flex-1 text-brand-slate">
              Step-by-step technical docs, a guided low-code handbook and a regularly updated blog
              cover everything from the very basics to advanced extensions.
            </p>
            <Link to="/learn" className="mt-5 inline-flex text-sm font-semibold text-brand">
              Go to Learn →
            </Link>
          </div>
          <div className="card flex flex-col">
            <h3 className="text-xl font-bold">100% open-source</h3>
            <p className="mt-3 flex-1 text-brand-slate">
              Free to use, modify and extend. No commercial restrictions, no hidden fees. Contribute
              back on GitHub and shape the future of low-code with us.
            </p>
            <a
              href="https://github.com/besser-pearl"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-brand"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Tech logos */}
      <section className="section">
        <div className="container-x text-center">
          <p className="eyebrow">Generates code for</p>
          <h2 className="mt-3 text-3xl font-extrabold">All your favourite stacks</h2>
          <div className="mt-12 overflow-hidden rounded-3xl bg-brand-ink p-8 sm:p-12 shadow-card">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 items-center">
              {techLogos.map((t) => (
                <div key={t.name} className="flex flex-col items-center justify-center gap-2 group">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="max-h-10 sm:max-h-12 w-auto opacity-80 transition group-hover:opacity-100 group-hover:scale-110"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.outerHTML = `<span class="text-white font-semibold text-base">${t.name}</span>`
                    }}
                  />
                  <span className="text-xs text-white/50 transition group-hover:text-white/80">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main features */}
      <section className="section bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Main features</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Everything you need to model, build and ship
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {mainFeatures.map((f) => (
              <div key={f.title} className="card transition hover:-translate-y-1 hover:shadow-lg">
                <img src={f.icon} alt="" className="h-14 w-14" loading="lazy" />
                <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-brand-slate">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn by doing */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow">Learn by doing</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Master BESSER with friendly guides
            </h2>
            <p className="mt-4 text-brand-slate">
              We've prepared a variety of resources, ranging from technical guides to friendly
              explainers, plus slides and exercises, so you can learn BESSER and its low-code
              philosophy with ease.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://besser.readthedocs.io/en/latest/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Technical docs
              </a>
              <a
                href="https://lowcode-book.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Low-code handbook
              </a>
              <a
                href="https://modeling-languages.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Blog
              </a>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
