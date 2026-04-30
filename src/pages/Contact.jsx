import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'

const quickLinks = [
  {
    label: 'Email us',
    desc: 'contact@besser-pearl.org',
    href: 'mailto:contact@besser-pearl.org',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    ),
  },
  {
    label: 'GitHub',
    desc: 'github.com/besser-pearl',
    href: 'https://github.com/besser-pearl',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.13c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" /></svg>
    ),
  },
  {
    label: 'Try the editor',
    desc: 'editor.besser-pearl.org',
    href: 'https://editor.besser-pearl.org',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M21 14v7H3V3h7"/></svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Please tell us your name.'
    if (!form.email.trim()) er.email = 'We need an email to reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'That email looks off.'
    if (!form.message.trim() || form.message.trim().length < 10) er.message = 'A few more words please (10+ chars).'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    if (Object.keys(er).length) {
      setErrors(er)
      return
    }
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Ask for a demo or let us know any way we can help in making sure BESSER works great for you!"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="card">
            <h3 className="text-2xl font-bold text-brand-ink">Send us a message</h3>
            <p className="mt-1 text-sm text-brand-slate">We usually reply within a couple of working days.</p>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <p className="font-semibold text-emerald-800">Message received!</p>
                </div>
                <p className="mt-3 text-sm text-emerald-800">
                  Thanks for reaching out. We've got your note and will get back to you soon.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-4">
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-err' : undefined}
                    className={`input mt-1 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                  />
                  {errors.name && <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-ink">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                    className={`input mt-1 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                  />
                  {errors.email && <p id="email-err" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-ink">
                      Message
                    </label>
                    <span className="text-xs text-brand-slate">{form.message.length} chars</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'msg-err' : undefined}
                    className={`input mt-1 resize-y ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                  />
                  {errors.message && <p id="msg-err" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary">
                  Submit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-ink">Reach us directly</h3>
              <p className="mt-2 text-sm text-brand-slate">
                We're happy to talk about demos, collaborations or anything BESSER-related.
              </p>
              <ul className="mt-5 space-y-2">
                {quickLinks.map((q) => (
                  <li key={q.label}>
                    <a
                      href={q.href}
                      {...(q.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-brand/5"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                        {q.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-brand-ink">{q.label}</span>
                        <span className="block text-xs text-brand-slate">{q.desc}</span>
                      </span>
                      <svg className="text-brand-slate transition group-hover:translate-x-1 group-hover:text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
