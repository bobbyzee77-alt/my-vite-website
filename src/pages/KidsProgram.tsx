import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { CourseCard } from '../components/ui/CourseCard'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { courses } from '../data/courses'

const kidsCourses = courses.filter((c) =>
  ['kids-islamic-program', 'noorani-qaida', 'quran-reading-for-beginners', 'hifz-al-quran'].includes(c.slug),
)

const faqs = [
  { q: 'What age can my child start?', a: 'Most children begin from age 4–5 with our Kids Islamic Program.' },
  { q: 'How long are classes for young children?', a: 'Typically 30 minutes, matched to a child\u2019s attention span.' },
  { q: 'Can I choose a male or female teacher for my child?', a: 'Yes, you may request either based on your family\u2019s preference.' },
  { q: 'Will I receive updates on my child\u2019s progress?', a: 'Yes, parents receive regular progress reports after each stage of learning.' },
]

export default function KidsProgram() {
  return (
    <>
      <SEO
        title="Kids Islamic Program — Online Quran Classes for Kids"
        description="A warm, structured Quran and Islamic studies programme for children aged 4+, with qualified male and female teachers. Book a free trial."
        path="/kids-program"
        keywords={['online quran classes for kids', 'kids islamic program']}
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Kids Program', path: '/kids-program' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Kids Program</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">A Joyful Start to Quran Learning</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Age-appropriate, encouraging Quran and Islamic studies classes designed specifically for children.
          </p>
          <div className="mt-8">
            <Button to="/book-free-trial" variant="secondary">
              Book Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Built For Children" title="Why our Kids Program works" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Short, focused sessions', '30-minute classes matched to a child\u2019s natural attention span.'],
            ['Encouraging teaching style', 'Patient teachers who build confidence, not pressure.'],
            ['Male & female teachers', 'Choose the teacher your family is most comfortable with.'],
            ['Parent progress reports', 'Clear updates on what was covered and what to practise.'],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-2xl border border-line bg-sand p-6">
              <h3 className="font-display text-base font-semibold text-green-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Courses for Kids" title="Recommended starting courses" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kidsCourses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Parent FAQs" title="Common questions from parents" />
        <div className="mx-auto max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </>
  )
}
