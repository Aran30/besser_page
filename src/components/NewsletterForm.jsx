import { useState } from 'react'

export default function NewsletterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setName('')
    setEmail('')
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 6L12 13 2 6"/><path d="M22 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6"/><path d="M22 6l-10 7L2 6"/></svg>
        </span>
        <p className="eyebrow">Newsletter</p>
      </div>
      <h3 className="mt-3 text-2xl font-bold text-brand-ink">
        Get all our news, updates and release information
      </h3>
      <p className="mt-2 text-brand-slate">
        Subscribe to our BESSER and low-code / modeling news.
      </p>
      {submitted ? (
        <div className="mt-5 rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-200 flex items-start gap-3">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-emerald-800">You're in!</p>
            <p className="text-xs text-emerald-700">We'll send you the next BESSER update straight to your inbox.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            aria-label="Name"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            aria-label="Email"
          />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      )}
    </div>
  )
}
