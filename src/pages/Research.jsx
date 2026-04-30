import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const publications = [
  { year: 2025, title: 'A Metascience Study of the Low-Code Scientific Field', authors: 'Mauro Dalle Lucca Tosi, Javier Luis Cánovas Izquierdo, Jordi Cabot', venue: 'Journal of Object Technology, Vol. 24 no. 2 (May 2025), pp. 2:1-14' },
  { year: 2025, title: 'User Modeling in Model-Driven Engineering: A Systematic Literature Review', authors: 'Aaron Conrardy, Alfredo Capozucca, Jordi Cabot', venue: 'Journal of Object Technology, Vol. 24 no. 2 (May 2025), pp. 2:1-14' },
  { year: 2025, title: 'Low-code to fight climate change: the Climaborough project', authors: 'Aaron Conrardy, Armen Sulejmani, Cindy Guerlain, Daniele Pagani, David Hick, Matteo Satta, Jordi Cabot', venue: 'RCIS 2025 Workshops' },
  { year: 2025, title: 'Modeling the obsolescence of models', authors: 'Iván Alfonso, Jean-Sébastien Sottet, Pierre Brimont, Jordi Cabot', venue: 'Software and Systems Modeling 24, no. 3 (2025): 705-719' },
  { year: 2025, title: 'Modelling Neural Network Models', authors: 'Nadia Daoudi, Iván Alfonso, Jordi Cabot', venue: 'International Conference on Research Challenges in Information Science, pp. 130-139' },
  { year: 2025, title: 'ImageBiTe: A Framework for Evaluating Representational Harms in Text-to-Image Models', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: '2025 IEEE/ACM 4th International Conference on AI Engineering' },
  { year: 2025, title: 'On the suitability of hugging face hub for empirical studies', authors: 'Adem Ait, Javier Luis Cánovas Izquierdo, Jordi Cabot', venue: 'Empirical Software Engineering 30.2 (2025)' },
  { year: 2025, title: 'Towards the interoperability of Low-Code platforms', authors: 'Iván Alfonso, Aaron David Conrardy, Jordi Cabot', venue: 'CAiSE Forum 2025: 3-11' },
  { year: 2025, title: 'Impromptu: A framework for model-driven prompt engineering', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: 'Software and Systems Modeling (2025)' },
  { year: 2025, title: 'Towards Data Interoperability for the Digital Product Passport Ecosystem', authors: 'Iván Alfonso, Daniele Pagani, Jordi Cabot', venue: '' },
  { year: 2025, title: 'On the Readiness of Scientific Data Papers for a Fair and Transparent Use in Machine Learning', authors: 'Joan Giner-Miguelez, Abel Gómez, Jordi Cabot', venue: 'Sci Data 12, 61' },
  { year: 2024, title: 'On the Creation of Representative Samples of Software Repositories', authors: 'June Gorostidi, Adem Ait, Jordi Cabot, Javier Luis Cánovas Izquierdo', venue: 'Proceedings of the 18th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement, pp. 434-439' },
  { year: 2024, title: 'Application of the Tree-of-Thoughts Framework to LLM-Enabled Domain Modeling', authors: 'Jonathan Silva, Qin Ma, Jordi Cabot, Pierre Kelsen, Henderik A. Proper', venue: 'International Conference on Conceptual Modeling, pp. 94-111' },
  { year: 2024, title: 'Low-Code Flutter Application Development Solution', authors: 'Atefeh Nirumand Jazi, Iván Alfonso, Jordi Cabot', venue: 'ACM/IEEE 27th International Conference on Model Driven Engineering Languages and Systems' },
  { year: 2024, title: 'A DSL for Testing LLMs for Fairness and Bias', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: 'ACM/IEEE 27th International Conference on Model Driven Engineering Languages and Systems, pp. 203-213' },
  { year: 2024, title: 'From Image to UML: First results of image based UML diagram generation using LLMs', authors: 'Aaron Conrardy, Jordi Cabot', venue: 'STAF 2024 Workshops, pp. 55-65' },
  { year: 2024, title: 'Exploring the use of software product lines for the combination of machine learning models', authors: 'Marcos Gomez-Vazquez, Jordi Cabot', venue: '28th ACM International Systems and Software Product Line Conference, pp. 26-29' },
  { year: 2024, title: 'Extending a low-code tool with multi-cloud deployment capabilities', authors: 'Fitash Ul Haq, Iván Alfonso, Armen Sulejmani, Jordi Cabot', venue: 'European Conference on Software Architecture, pp. 39-46' },
  { year: 2024, title: 'Automatic Generation of Conversational Interfaces for Tabular Data Analysis', authors: 'Marcos Gomez-Vazquez, Jordi Cabot, Robert Clarisó', venue: '6th ACM Conference on Conversational User Interfaces, pp. 1-6' },
  { year: 2024, title: 'What makes a good modeling research contribution?', authors: 'Richard F. Paige, Jordi Cabot', venue: 'Software and Systems Modeling 23, no. 3 (2024): 527-531' },
  { year: 2024, title: 'HFCommunity: An extraction process and relational database to analyze Hugging Face Hub data', authors: 'Adem Ait, Javier Luis Cánovas Izquierdo, Jordi Cabot', venue: 'Science of Computer Programming 234 (2024)' },
  { year: 2024, title: 'LangBiTe: An open-source platform to automate bias testing of large language models', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: 'SoftwareX, vol. 31' },
  { year: 2024, title: 'A Framework to Model ML Engineering Processes', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: '' },
  { year: 2024, title: 'Building BESSER: An Open-Source Low-Code Platform', authors: 'Iván Alfonso, Aaron Conrardy, Armen Sulejmani, Atefeh Nirumand, Fitash Ul Haq, Marcos Gomez-Vazquez, Jean-Sébastien Sottet, Jordi Cabot', venue: 'International Conference on Business Process Modeling, Development and Support' },
  { year: 2024, title: 'A leaderboard to benchmark ethical biases in LLMs', authors: 'Marcos Gomez-Vazquez, Sergio Morales, German Castignani, Robert Clarisó, Aaron Conrardy, Louis Deladiennee, Samuel Renault, Jordi Cabot', venue: 'AIMMES 2024' },
  { year: 2024, title: 'Low-modeling of software systems', authors: 'Jordi Cabot', venue: 'International Conference on Software Technologies, 19-28' },
  { year: 2023, title: 'Modeling and enforcing access control policies in conversational user interfaces', authors: 'Elena Planas, Salvador Martínez, Marco Brambilla, Jordi Cabot', venue: 'Software and Systems Modeling, 22(6), pp. 1925-1944' },
  { year: 2023, title: 'A tool for the definition and deployment of platform-independent bots on open source projects', authors: 'Adem Ait, Javier Luis Cánovas Izquierdo, Jordi Cabot', venue: '16th ACM SIGPLAN International Conference on Software Language Engineering, pp. 214-219' },
  { year: 2023, title: 'Datadoc analyzer: A tool for analyzing the documentation of scientific datasets', authors: 'Joan Giner-Miguelez, Abel Gómez, Jordi Cabot', venue: '32nd ACM International Conference on Information and Knowledge Management, pp. 5046-5050' },
  { year: 2023, title: 'Model-driven prompt engineering', authors: 'Robert Clarisó, Jordi Cabot', venue: '2023 ACM/IEEE 26th International Conference on Model Driven Engineering Languages and Systems (MODELS), pp. 47-54' },
  { year: 2023, title: 'Automating bias testing of LLMs', authors: 'Sergio Morales, Robert Clarisó, Jordi Cabot', venue: '2023 38th IEEE/ACM International Conference on Automated Software Engineering (ASE)' },
]

const allYears = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

export default function Research() {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return publications.filter((p) => {
      if (year !== 'all' && p.year !== Number(year)) return false
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        (p.venue || '').toLowerCase().includes(q)
      )
    })
  }, [query, year])

  const grouped = useMemo(() => {
    const map = new Map()
    for (const p of filtered) {
      if (!map.has(p.year)) map.set(p.year, [])
      map.get(p.year).push(p)
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0])
  }, [filtered])

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Scientific Publications"
        subtitle="BESSER includes cutting-edge results at the intersection of low-code, modeling and artificial intelligence. See some of the latest results BESSER has been part of!"
      />

      <section className="section">
        <div className="container-x">
          {/* Toolbar */}
          <div className="card flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search title, author or venue…"
                  className="input pl-10"
                  aria-label="Search publications"
                />
              </div>
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="btn-ghost"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-slate">Year</span>
              <button
                type="button"
                onClick={() => setYear('all')}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  year === 'all' ? 'bg-brand text-white' : 'bg-brand/5 text-brand-ink hover:bg-brand/10'
                }`}
              >
                All
              </button>
              {allYears.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setYear(String(y))}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    String(year) === String(y) ? 'bg-brand text-white' : 'bg-brand/5 text-brand-ink hover:bg-brand/10'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-brand-slate">
            Showing <strong className="text-brand-ink">{filtered.length}</strong> of {publications.length} publications
          </p>

          {/* Results */}
          {grouped.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-black/10 p-12 text-center">
              <p className="text-brand-slate">No publications match your search.</p>
            </div>
          ) : (
            <div className="mt-10 space-y-12">
              {grouped.map(([y, items]) => (
                <div key={y}>
                  <div className="sticky top-20 z-10 -mx-2 mb-4 flex items-center gap-3 bg-white/90 px-2 py-2 backdrop-blur">
                    <h2 className="text-2xl font-extrabold text-brand-ink">{y}</h2>
                    <span className="chip">{items.length} {items.length === 1 ? 'paper' : 'papers'}</span>
                    <div className="h-px flex-1 bg-black/5" />
                  </div>
                  <ol className="space-y-3">
                    {items.map((p, i) => (
                      <li
                        key={`${y}-${i}`}
                        className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-card"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-brand-ink leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-brand-slate">{p.authors}</p>
                        {p.venue && <p className="mt-1 text-xs italic text-brand-slate">{p.venue}</p>}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
