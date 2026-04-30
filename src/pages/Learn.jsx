import PageHeader from '../components/PageHeader.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'

const resources = [
  {
    title: 'Technical Docs',
    body: 'Step-by-step documentation from GitHub, including how to download, install, run, and even extend BESSER locally.',
    href: 'https://besser.readthedocs.io/en/latest/',
    cta: 'Read the docs',
    accent: 'from-blue-500/15 to-cyan-400/15',
  },
  {
    title: 'Low-code Handbook',
    body: 'A guided introduction to low-code: theory, concepts, and tutorials to help you understand the foundations.',
    href: 'https://lowcode-book.com/',
    cta: 'Open handbook',
    accent: 'from-indigo-500/15 to-violet-400/15',
  },
  {
    title: 'Blog',
    body: 'News, updates, and experiments around BESSER explained in an accessible, easy-to-follow way.',
    href: 'https://modeling-languages.com/',
    cta: 'Read the blog',
    accent: 'from-sky-500/15 to-emerald-400/15',
  },
]

export default function Learn() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Learning BESSER"
        subtitle="We've prepared a variety of resources, ranging from technical guides to friendly explainers, plus slides and exercises, so you can learn BESSER and its low-code philosophy with ease."
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="card group flex flex-col transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`mb-6 h-32 rounded-xl bg-gradient-to-br ${r.accent} flex items-center justify-center`}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-brand-slate flex-1">{r.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                {r.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section bg-brand-surface">
        <div className="container-x">
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
