import { useParams, Link, Navigate } from 'react-router-dom'
import { SEO, breadcrumbJsonLd, courseJsonLd, faqJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { CourseCard } from '../components/ui/CourseCard'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { getCourseBySlug, courses } from '../data/courses'
import { testimonials } from '../data/site'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = slug ? getCourseBySlug(slug) : undefined

  if (!course) return <Navigate to="/courses" replace />

  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3)
  const matchingTestimonial = testimonials.find((t) => t.course === course.title) ?? testimonials[0]

  return (
    <>
      <SEO
        title={course.title}
        description={course.metaDescription}
        path={`/courses/${course.slug}`}
        keywords={course.keywords}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Courses', path: '/courses' },
            { name: course.title, path: `/courses/${course.slug}` },
          ]),
          courseJsonLd(course),
          faqJsonLd(course.faqs),
        ]}
      />

      <section className="bg-green-950 py-16 text-ivory md:py-20">
        <div className="container-page">
          <nav className="mb-6 text-xs text-ivory/50">
            <Link to="/courses" className="hover:text-gold-300">
              Courses
            </Link>{' '}
            / <span className="text-ivory/80">{course.title}</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl font-semibold md:text-5xl">{course.title}</h1>
            <p className="mt-5 text-sm leading-relaxed text-ivory/75 md:text-base">{course.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book-free-trial" variant="secondary">
                Book Free Trial
              </Button>
              <Button to="/contact" variant="ghost" className="border-ivory/25 text-ivory hover:border-gold-400 hover:text-gold-300">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-green-950">Learning Outcomes</h2>
              <ul className="mt-5 space-y-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-ink/75">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-900 text-[10px] text-ivory">
                      ✓
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-green-950">Curriculum</h2>
              <div className="mt-5 space-y-4">
                {course.curriculum.map((c, i) => (
                  <div key={c.title} className="rounded-xl border border-line bg-sand p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">Stage {i + 1}</p>
                    <h3 className="mt-1 font-display text-base font-semibold text-green-950">{c.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-green-950">Frequently Asked Questions</h2>
              <div className="mt-5">
                <FaqAccordion items={course.faqs} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-green-950">Student Testimonial</h2>
              <div className="mt-5 max-w-md">
                <TestimonialCard testimonial={matchingTestimonial} />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-sand p-6">
              <h3 className="font-display text-base font-semibold text-green-950">Course Details</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-green-800">Duration</dt>
                  <dd className="mt-0.5 text-ink/70">{course.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-green-800">Who Can Join</dt>
                  <dd className="mt-0.5 text-ink/70">{course.whoCanJoin}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-green-800">Class Schedule</dt>
                  <dd className="mt-0.5 text-ink/70">{course.schedule}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-green-800">Teaching Method</dt>
                  <dd className="mt-0.5 text-ink/70">{course.teachingMethod}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button to="/book-free-trial" className="w-full">
                  Book Free Trial
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="Related Courses" title="You might also be interested in" />
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
