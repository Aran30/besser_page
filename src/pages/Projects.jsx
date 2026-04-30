import PageHeader from '../components/PageHeader.jsx'

const projects = [
  {
    name: 'MOSAICO',
    full: 'Management, Orchestration and Supervision of AI-agent COmmunities for reliable AI in software engineering',
    category: 'Smart City Development',
    funding: 'EU – HORIZON',
    duration: 'January 2025 – December 2027',
    status: 'active',
    href: 'https://mosaico-project.eu/',
    description:
      'Initiative targeting engineering and operation of communities of AIs across the Software Engineering lifecycle, integrating agent communication, orchestration, governance, quality assessment, and benchmarking across immersive tech, finance, aerospace, and IoT sectors.',
    role:
      'Low-code approach enables accessible agent creation for diverse skill levels; BESSER integrates MOSAICO results for AI-assisted modeling collaboration.',
  },
  {
    name: 'CLIMABOROUGH',
    full: 'Climate-neutral cities through innovative platforms',
    category: 'Smart City Development',
    funding: 'EU – HORIZON Innovation Actions',
    duration: 'January 2023 – January 2027',
    status: 'active',
    href: 'https://climaborough.eu/',
    description:
      'European initiative engaging 12 cities testing climate solutions via ClimHub, Climate Sandbox, and Climate Service platforms, emphasizing a city data platform that uses both historical and real-time data.',
    role:
      'Provides no-code dashboard creation enabling non-technical users to monitor climate neutrality progress.',
  },
  {
    name: 'BESSER',
    full: 'BEtter Smart Software fastER',
    category: 'Smart Software Development',
    funding: 'FNR – PEARL',
    duration: 'April 2023 – April 2027',
    status: 'active',
    href: 'https://besser-pearl.org/',
    description:
      'Open-source Luxembourg-based platform enabling both software engineers and domain experts to create, adapt, and deploy applications using the B-UML modeling language with automated code generation.',
    role: 'Core platform behind everything you see on this site.',
  },
]

const StatusBadge = ({ status }) => {
  const map = {
    active: { label: 'Active', dot: 'bg-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-700' },
    upcoming: { label: 'Upcoming', dot: 'bg-amber-500', bg: 'bg-amber-500/10', text: 'text-amber-700' },
    closed: { label: 'Closed', dot: 'bg-brand-slate', bg: 'bg-brand-slate/10', text: 'text-brand-slate' },
  }
  const s = map[status] || map.active
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${s.bg} ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} animate-pulse`} />
      {s.label}
    </span>
  )
}

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Projects"
        subtitle="BESSER is part of, and powers, several research and innovation projects across Europe."
      />

      <section className="section">
        <div className="container-x grid gap-8">
          {projects.map((p) => (
            <article
              key={p.name}
              className="card grid gap-8 md:grid-cols-[1fr_2fr] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p className="eyebrow">{p.category}</p>
                  <StatusBadge status={p.status} />
                </div>
                <h2 className="mt-3 text-3xl font-extrabold text-brand-ink">{p.name}</h2>
                <p className="mt-2 text-sm text-brand-slate">{p.full}</p>
                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-brand-ink shrink-0">Funding</dt>
                    <dd className="text-brand-slate text-right">{p.funding}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-brand-ink shrink-0">Duration</dt>
                    <dd className="text-brand-slate text-right">{p.duration}</dd>
                  </div>
                </dl>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-6"
                >
                  Visit project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
              <div className="border-t border-black/5 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                <h3 className="text-base font-bold uppercase tracking-wider text-brand-slate">About the project</h3>
                <p className="mt-2 text-brand-slate">{p.description}</p>
                <h3 className="mt-6 text-base font-bold uppercase tracking-wider text-brand-slate">BESSER's role</h3>
                <p className="mt-2 text-brand-slate">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
