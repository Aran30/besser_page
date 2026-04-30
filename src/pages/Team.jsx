import PageHeader from '../components/PageHeader.jsx'

const team = [
  { name: 'Jordi Cabot', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/Jordi-1.jpg', link: 'https://jordicabot.com/' },
  { name: 'Jean-Sebastien Sottet', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/SOTTET_Jean-Sebastien_2024_www.jpg', link: 'https://www.linkedin.com/in/jean-sebastien-sottet' },
  { name: 'Pierre Brimont', photo: 'https://besser-pearl.org/wp-content/uploads/2025/09/BRIMONT_Pierre_2024_www.jpg', link: 'https://www.linkedin.com/in/pierre-brimont-84958552/' },
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

function MemberCard({ name, photo, link, index }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name}, opens in a new tab`}
      className="group block text-center anim-fade-in"
      style={{ animationDelay: `${Math.min(index * 30, 600)}ms` }}
    >
      <div className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full bg-brand-surface ring-2 ring-white shadow-card transition-all duration-300 group-hover:ring-brand group-hover:shadow-lg group-hover:-translate-y-0.5">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = initialFallback(name)
          }}
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand/85 via-brand/0 to-transparent opacity-0 transition group-hover:opacity-100">
          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-base font-semibold text-brand-ink transition-colors group-hover:text-brand">
        {name}
      </h3>
    </a>
  )
}

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The great people behind BESSER"
        subtitle="Researchers and engineers from Luxembourg and beyond, working together to make smart software engineering open, accessible, and reliable."
      />

      <section className="section bg-brand-surface">
        <div className="container-x">
          <div className="grid gap-x-8 gap-y-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
            {team.map((m, i) => (
              <MemberCard key={m.name} index={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="card mx-auto max-w-4xl text-center">
            <p className="eyebrow">Acknowledgments</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-brand-ink">
              Funded by an FNR Pearl grant
            </h2>
            <p className="mt-4 text-brand-slate">
              BESSER is supported by the Luxembourg National Research Fund (FNR) through its Pearl programme,
              led by the Luxembourg Institute of Science and Technology with the participation of
              SnT / University of Luxembourg.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-brand-ink">
              <span className="rounded-full bg-brand/5 px-4 py-1.5 ring-1 ring-brand/10">FNR — Luxembourg National Research Fund</span>
              <span className="rounded-full bg-brand/5 px-4 py-1.5 ring-1 ring-brand/10">Luxembourg Institute of Science and Technology</span>
              <span className="rounded-full bg-brand/5 px-4 py-1.5 ring-1 ring-brand/10">SnT / University of Luxembourg</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
