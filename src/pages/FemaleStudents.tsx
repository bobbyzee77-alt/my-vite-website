import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { teachers } from '../data/site'
import { TeacherCard } from '../components/ui/TeacherCard'

const femaleTeachers = teachers.filter((t) => t.gender === 'female')

export default function FemaleStudents() {
  return (
    <>
      <SEO
        title="Classes for Female Students — Sisters Program"
        description="Online Quran and Islamic studies classes for sisters, taught by qualified female teachers in a private, comfortable environment."
        path="/female-students"
        keywords={['female quran teacher online', 'online quran classes for sisters']}
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Female Students', path: '/female-students' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Sisters Program</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Classes for Female Students</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Learn with qualified female teachers in private, one-to-one sessions within a secure, comfortable environment.
          </p>
          <div className="mt-8">
            <Button to="/book-free-trial" variant="secondary">Book Free Trial</Button>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHeading eyebrow="What to Expect" title="A private, comfortable learning environment for sisters" />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ['Qualified female teachers', 'Every teacher holds verified Tajweed and Islamic Studies credentials.'],
            ['Female-only classes', 'Fully private sessions with no discomfort about who is present.'],
            ['Flexible scheduling', 'Morning, evening, and weekend slots across all time zones.'],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-2xl border border-line bg-sand p-6">
              <h3 className="font-display text-base font-semibold text-green-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Our Teachers" title="Meet our female teaching team" />
        <div className="grid gap-6 sm:grid-cols-2">
          {femaleTeachers.map((t) => (
            <TeacherCard key={t.slug} teacher={t} />
          ))}
        </div>
      </Section>
    </>
  )
}
