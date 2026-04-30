import PageHeader from '../components/PageHeader.jsx'

const primary = [
  {
    title: '15+ Generators',
    body: 'Creating a database? A web application? An AI agent? BESSER has you covered with its 10+ generators targeting many different platforms.',
    img: 'https://besser-pearl.org/wp-content/uploads/2025/08/software-img-10.png',
  },
  {
    title: 'Friendly Interface',
    body: 'Use our online editor, create a model from an image or write a textual description. We have one UI for each type of user.',
    img: 'https://besser-pearl.org/wp-content/uploads/2025/08/software-img-11.png',
  },
  {
    title: 'AI-powered platform',
    body: 'BESSER combines AI and low-code to accelerate the modeling of your system and to generate software systems that embed AI components. A win-win.',
    img: 'https://besser-pearl.org/wp-content/uploads/2025/08/software-img-05.png',
  },
  {
    title: 'Model everything you need',
    body: 'BESSER comes with predefined support for a variety of modeling languages (class diagrams, state machines, object diagrams, agents, deployment specifications…). You can also always add your own.',
    img: 'https://besser-pearl.org/wp-content/uploads/2025/08/software-img-13.png',
  },
]

const secondary = [
  {
    title: 'Free and open-source',
    body: 'You can freely use BESSER. No commercial restrictions. And as open-source software, you\'re also free to improve it (if so, we hope you contribute back your improvements).',
  },
  {
    title: 'From model to running application',
    body: 'Beyond generating code, you can also automatically deploy your software by generating the docker components for the automatic deployment of your system.',
  },
  {
    title: 'Project management',
    body: 'You can work on single models or create a modeling project that will aggregate models of different types covering all dimensions of your software system.',
  },
  {
    title: 'Quality checks',
    body: 'BESSER comes with integrated quality checks to validate the syntax and some model semantics before you generate the system.',
  },
  {
    title: 'Enable Vibe-Modeling',
    body: 'BESSER comes with an MCP server, allowing connection to clients such as Claude Desktop or Cursor to accelerate your modeling activities and reduce Time-to-Market.',
  },
  {
    title: 'Generate full back-ends',
    body: 'Beyond generating single files (such as SQL or Java), you can generate a full back-end including a database and a full-blown REST API to enable front-ends to interact with your data.',
  },
  {
    title: 'Beyond "traditional" software',
    body: 'With BESSER you can generate neural networks (using TensorFlow or PyTorch) and complete agents as part of your development process.',
  },
  {
    title: 'Import / export',
    body: 'BESSER comes with different import / export options (including an LLM-driven importing process from images) to maximize the reuse of BESSER models.',
  },
  {
    title: 'Business Rules support with OCL',
    body: 'OCL (Object Constraint Language) is the most popular language to express business rules, constraints, contracts… as part of your models.',
  },
  {
    title: 'Agent-to-Agent Communication',
    body: 'BESSER-Agentic-Framework (BAF) has built-in support for the A2A protocol, enabling agents built with BAF to seamlessly interact with agents from other platforms such as LangGraph, CrewAI and more.',
  },
]

export default function Features() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="See all that BESSER can do for you!"
        subtitle="From AI-powered modeling to one-click code generation — explore every capability of the platform."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:gap-20">
          {primary.map((f, i) => (
            <div
              key={f.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                <h2 className="text-3xl font-extrabold text-brand-ink">{f.title}</h2>
                <p className="mt-4 text-brand-slate">{f.body}</p>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-full bg-brand/10 blur-3xl" />
                <img src={f.img} alt={f.title} className="w-full max-w-md mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">And more</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">But there's more!</h2>
            <p className="mt-4 text-brand-slate">
              Play with BESSER (both the online editor and the whole platform) to really see the
              full potential in practice. That includes, among many others, also the following
              features.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((f, i) => (
              <div
                key={f.title}
                className="card relative overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 select-none text-7xl font-extrabold text-brand/5"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <span className="chip">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-bold text-brand-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-slate">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
