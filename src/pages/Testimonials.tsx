import { SEO, breadcrumbJsonLd, reviewJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Student Testimonials"
        description="Read what students and parents say about learning Quran and Islamic studies at Hafiz Maulana Faiz Islamic Academy."
        path="/testimonials"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Testimonials', path: '/testimonials' }]),
          reviewJsonLd(testimonials),
        ]}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Testimonials</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">What Our Students Say</h1>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>
    </>
  )
}
