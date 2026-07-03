import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { TeacherCard } from '../components/ui/TeacherCard'
import { teachers } from '../data/site'

export default function Teachers() {
  return (
    <>
      <SEO
        title="Our Teachers"
        description="Meet the qualified male and female Quran and Islamic studies teachers at Hafiz Maulana Faiz Islamic Academy."
        path="/teachers"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Teachers', path: '/teachers' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Our Teaching Team</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Meet Our Teachers</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Every teacher is formally qualified, Ijazah-verified, and matched to teach with patience and clarity.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-6 sm:grid-cols-2">
          {teachers.map((t) => (
            <TeacherCard key={t.slug} teacher={t} />
          ))}
        </div>
      </Section>
    </>
  )
}
