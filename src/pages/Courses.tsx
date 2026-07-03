import { useState } from 'react'
import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { CourseCard } from '../components/ui/CourseCard'
import { courses } from '../data/courses'

const categories = [
  { key: 'all', label: 'All Courses' },
  { key: 'foundation', label: 'Foundation' },
  { key: 'quran', label: 'Quran' },
  { key: 'islamic-studies', label: 'Islamic Studies' },
  { key: 'schedule', label: 'Scheduling Options' },
] as const

export default function Courses() {
  const [active, setActive] = useState<(typeof categories)[number]['key']>('all')
  const filtered = active === 'all' ? courses : courses.filter((c) => c.category === active)

  return (
    <>
      <SEO
        title="Online Quran & Islamic Studies Courses"
        description="Browse all online Quran, Tajweed, Hifz, Arabic, and Islamic Studies courses at Hafiz Maulana Faiz Islamic Academy. Free trial class available."
        path="/courses"
        keywords={['online quran classes', 'online islamic academy courses']}
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Courses', path: '/courses' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Courses</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">All Courses</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            From first letters to full memorisation — a structured course for every stage of the journey.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat.key ? 'bg-green-900 text-ivory' : 'bg-sand text-ink/70 hover:bg-sand-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Section>
    </>
  )
}
