import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { teachers } from '../data/site'
import { TeacherCard } from '../components/ui/TeacherCard'

const maleTeachers = teachers.filter((t) => t.gender === 'male')

export default function MaleStudents() {
  return (
    <>
      <SEO
        title="Classes for Male Students — Brothers Program"
        description="Online Quran and Islamic studies classes for brothers, taught by qualified male teachers with one-to-one and small group options."
        path="/male-students"
        keywords={['male quran teacher online', 'online quran classes for brothers']}
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Male Students', path: '/male-students' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Brothers Program</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Classes for Male Students</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Learn with qualified male teachers in one-to-one or small group classes, with flexible scheduling.
          </p>
          <div className="mt-8">
            <Button to="/book-free-trial" variant="secondary">Book Free Trial</Button>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHeading eyebrow="What to Expect" title="A focused, comfortable learning environment for brothers" />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ['Qualified male teachers', 'Every teacher holds verified Tajweed and Ijazah credentials.'],
            ['One-to-one or group classes', 'Choose the format that suits your learning style and budget.'],
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
        <SectionHeading eyebrow="Our Teachers" title="Meet our male teaching team" />
        <div className="grid gap-6 sm:grid-cols-2">
          {maleTeachers.map((t) => (
            <TeacherCard key={t.slug} teacher={t} />
          ))}
        </div>
      </Section>
    </>
  )
}
