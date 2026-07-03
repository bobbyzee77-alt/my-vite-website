import type { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  tone = 'ivory',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'ivory' | 'sand' | 'green'
  id?: string
}) {
  const toneClasses = {
    ivory: 'bg-ivory',
    sand: 'bg-sand',
    green: 'bg-green-950 text-ivory',
  }
  return (
    <section id={id} className={`py-16 md:py-24 ${toneClasses[tone]} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  tone = 'dark',
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  tone?: 'dark' | 'light'
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            tone === 'light' ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-semibold ${tone === 'light' ? 'text-ivory' : 'text-green-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${tone === 'light' ? 'text-ivory/80' : 'text-ink/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
