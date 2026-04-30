export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-gradient-to-b from-brand-surface to-white">
      <div className="container-x py-16 sm:py-24 text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-ink">{title}</h1>
        {subtitle && (
          <p className="mt-5 mx-auto max-w-3xl text-lg text-brand-slate">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
