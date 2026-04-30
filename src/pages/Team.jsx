import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const leadership = [
  { name: 'Jordi Cabot', role: 'Principal Investigator', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/Jordi-1.jpg', link: 'https://jordicabot.com/' },
  { name: 'Jean-Sebastien Sottet', role: 'Co-PI', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/SOTTET_Jean-Sebastien_2024_www.jpg', link: 'https://www.linkedin.com/in/jean-sebastien-sottet' },
  { name: 'Pierre Brimont', role: 'Co-PI', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/BRIMONT_Pierre_2024_www.jpg', link: 'https://www.linkedin.com/in/pierre-brimont-84958552/' },
]

const team = [
  { name: 'Ivan David Alfonso Diaz', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/ALFONSO_Ivan_David_2024_www.jpg', link: 'https://ivan-alfonso.com/' },
  { name: 'Marcos Gomez Vazquez', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/GOMEZ_VAZQUEZ_Marcos_2024_www.jpg', link: 'https://gomezvazquez.com/' },
  { name: 'Aaron Conrardy', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/CONRARDY_Aaron_2024_www.jpg', link: 'https://aaronconrardy.com/#/' },
  { name: 'Armen Sulejmani', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/SULEJMANI_Armen_2024_www.jpg', link: 'https://armen-sulejmani.com/' },
  { name: 'Fitash Ul Haq', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/UL_HAQ_Fitash_2024_www.jpg', link: 'https://www.linkedin.com/in/fitash/' },
  { name: 'Faima Abbasi', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/ABBASI_Faima_2024_www.jpg', link: 'https://www.linkedin.com/in/faima-abbasi-3699a5126/' },
  { name: 'Atefeh Nirumand', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/NIRUMAND_Atefeh_2024_www.jpg', link: 'https://www.linkedin.com/in/atefeh-nirumand/' },
  { name: 'Adem Ait-Mimoune Fonolla', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/adem.jpg', link: 'https://www.linkedin.com/in/ademait/' },
  { name: 'Daniele Pagani', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/daniele.jpg', link: 'https://www.linkedin.com/in/daniele-pagani-/' },
  { name: 'Nadia Daoudi', photo: 'https://besser-pearl.org/wp-content/uploads/2026/02/DAOUDI-Nadia_2025_www.jpg', link: 'https://www.linkedin.com/in/ndaoudi/' },
  { name: 'Mauro Dalle Lucca Tosi', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/DALLE_LUCCA_TOSI_Mauro_2024_www.jpg', link: 'https://www.linkedin.com/in/maurodlt/' },
  { name: 'Renzo Degiovanni', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/DEGIOVANNI_Renzo_2024_www.jpg', link: 'https://www.linkedin.com/in/renzo-degiovanni-5b585115/' },
  { name: 'Julian Valline', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/VALLINE_Julian_2025_www.jpg', link: 'https://www.linkedin.com/in/julian-valline-18a358174/' },
  { name: 'Gwendal Jouneaux', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/JOUNEAUX_Gwendal_2025_www.jpg', link: 'https://www.linkedin.com/in/jouneaux-gwendal/' },
  { name: 'Miriam Coccia', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/COCCIA_Miriam_2025_www.jpg', link: 'https://www.linkedin.com/in/miriam-coccia-2a5998190/' },
  { name: 'Natarajan Chidambaram', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/CHIDAMBARAM_Natarajan_2025_www.jpg', link: 'https://www.linkedin.com/in/natarajan-chidambaram/' },
  { name: 'Cédric Lothritz', photo: 'https://besser-pearl.org/wp-content/uploads/2025/11/lothritz2.png', link: 'https://www.linkedin.com/in/cedric-lothritz-35a698182/' },
  { name: 'Irene De Zarzà', photo: 'https://besser-pearl.org/wp-content/uploads/2025/11/DEZARZA.png', link: 'https://janovas.unizar.es/sideral/CV/irene-zarza-cubero' },
  { name: 'David Manrique Negrin', photo: 'https://besser-pearl.org/wp-content/uploads/2025/11/MANRIQUE-NEGRIN-David_2025_www.jpg', link: 'https://www.linkedin.com/in/david-manrique-negrin-81a2b026/' },
  { name: 'Prasad Adhav', photo: 'https://besser-pearl.org/wp-content/uploads/2026/02/ADHAV-Prasad_2025_cropped-scaled-e1770642697416.jpg', link: 'https://www.linkedin.com/in/psa93/' },
]

const initialFallback = (name) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e3f2fd'/><text x='50%' y='52%' font-family='sans-serif' font-size='52' fill='%231e88e5' text-anchor='middle' dominant-baseline='middle' font-weight='700'>${name
      .split(' ')
      .map((s) => s[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')}</text></svg>`,
  )}`

function MemberCard({ name, role, photo, link, lead = false }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name}, opens in a new tab`}
      className="group block text-center"
    >
      <div
        className={`relative mx-auto overflow-hidden rounded-full bg-brand-surface ring-2 ring-white shadow-card transition-all duration-300 group-hover:ring-brand group-hover:shadow-lg ${
          lead ? 'h-44 w-44' : 'h-32 w-32 sm:h-36 sm:w-36'
        }`}
      >
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = initialFallback(name)
          }}
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand/80 via-brand/0 to-transparent opacity-0 transition group-hover:opacity-100">
          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>
      </div>
      <h3 className={`mt-4 font-semibold text-brand-ink group-hover:text-brand ${lead ? 'text-lg' : 'text-base'}`}>
        {name}
      </h3>
      {role && <p className="mt-0.5 text-xs text-brand-slate">{role}</p>}
    </a>
  )
}

export default function Team() {
  const [query, setQuery] = useState('')

  const filteredTeam = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return team
    return team.filter((m) => m.name.toLowerCase().includes(q))
  }, [query])

  const filteredLead = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return leadership
    return leadership.filter((m) => m.name.toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind BESSER"
        subtitle="A diverse group of researchers, engineers and innovators working to make low-code accessible for everyone."
      />

      <section className="section-tight">
        <div className="container-x">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a team member by name…"
                className="input pl-10"
                aria-label="Find a team member"
              />
            </div>
          </div>
        </div>
      </section>

      {filteredLead.length > 0 && (
        <section className="pb-16">
          <div className="container-x">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-extrabold text-brand-ink">Leadership</h2>
              <span className="chip">{filteredLead.length}</span>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {filteredLead.map((m) => (
                <MemberCard key={m.name} {...m} lead />
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredTeam.length > 0 ? (
        <section className="section bg-brand-surface">
          <div className="container-x">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-extrabold text-brand-ink">Core team</h2>
              <span className="chip">{filteredTeam.length}</span>
            </div>
            <div className="mt-10 grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
              {filteredTeam.map((m) => (
                <MemberCard key={m.name} {...m} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        filteredLead.length === 0 && (
          <section className="section bg-brand-surface">
            <div className="container-x text-center">
              <p className="text-brand-slate">No team members match "{query}".</p>
              <button onClick={() => setQuery('')} className="btn-outline mt-4">
                Clear search
              </button>
            </div>
          </section>
        )
      )}

      <section className="section">
        <div className="container-x text-center max-w-3xl mx-auto">
          <p className="eyebrow">Funded by</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">FNR Pearl grant</h2>
          <p className="mt-4 text-brand-slate">
            BESSER receives funding thanks to an FNR Pearl grant led by the
            <strong> Luxembourg Institute of Science and Technology</strong> with participation from
            <strong> SnT / University of Luxembourg</strong>.
          </p>
        </div>
      </section>
    </>
  )
}
