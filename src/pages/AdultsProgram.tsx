import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { CourseCard } from '../components/ui/CourseCard'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { courses } from '../data/courses'

const adultCourses = courses.filter((c) =>
  ['adults-islamic-program', 'quran-reading-for-beginners', 'tajweed-course', 'islamic-studies'].includes(c.slug),
)

const faqs = [
  { q: 'I have never read Arabic — can I still join?', a: 'Yes, our Adults Program is designed for complete beginners, including reverts.' },
  { q: 'How flexible is scheduling for busy adults?', a: 'We offer early morning, evening, and weekend slots across all major time zones.' },
  { q: 'Can I request a male or female teacher?', a: 'Yes, every adult student may choose based on their preference.' },
]

export default function AdultsProgram() {
  return (
    <>
      <SEO
        title="Adults Islamic Program — Online Quran Classes for Adults"
        description="Flexible online Quran and Islamic studies classes for adults, including reverts, with qualified teachers matched to your schedule."
        path="/adults-program"
        keywords={['online quran classes for adults', 'islamic classes for adults']}
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Adults Program', path: '/adults-program' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Adults Program</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Quran Learning, Built for Adult Life</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Structured, flexible classes for busy adults — including complete beginners and new Muslims.
          </p>
          <div className="mt-8">
            <Button to="/book-free-trial" variant="secondary">
              Book Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Designed for Adults" title="Learning that fits around work and family" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['No judgement, any starting point', 'Whether you\u2019re a lifelong Muslim or a new revert, lessons start where you are.'],
            ['Flexible timing', 'Early morning, evening, and weekend slots to fit real schedules.'],
            ['Personalised pace', 'Progress at a speed that matches your available time.'],
            ['Male & female teachers', 'Learn with the teacher your comfort level requires.'],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-2xl border border-line bg-sand p-6">
              <h3 className="font-display text-base font-semibold text-green-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Courses for Adults" title="Recommended starting courses" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adultCourses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Adult Learner FAQs" title="Common questions from new students" />
        <div className="mx-auto max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </>
  )
}
