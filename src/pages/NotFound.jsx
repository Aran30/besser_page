import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-5xl font-extrabold text-brand-ink">Page not found</h1>
        <p className="mt-4 text-brand-slate">
          The page you're looking for doesn't exist (yet).
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  )
}
