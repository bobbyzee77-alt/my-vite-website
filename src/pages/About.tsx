import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { site, founderQualifications, whyChooseUs } from '../data/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Hafiz Maulana Faiz Islamic Academy, our founder's qualifications, and our mission to deliver authentic Quranic education worldwide."
        path="/about"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">About Us</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Our Mission &amp; Founder</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Authentic Quranic education, taught with sincerity — for every Muslim family, wherever they are.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our Mission"
            title="Bringing authentic Islamic scholarship to every home"
            subtitle="To provide authentic Quran, Arabic, and Islamic education to students worldwide through qualified scholars, structured learning, and personalised online classes rooted in the Quran and Sunnah."
          />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Meet the Founder</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-green-950">{site.founder}</h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              The academy is led by {site.founder}, a classically trained Islamic scholar dedicated to teaching
              the Quran and Islamic sciences with sincerity, authenticity, and excellence. After completing his
              studies at the Islamic University of Madinah Munawwarah, he founded this academy to make that same
              standard of education accessible to Muslim families anywhere in the world.
            </p>
            <div className="mt-8">
              <Button to="/teachers" variant="ghost">
                Meet the Full Teaching Team
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-ivory p-8">
            <h3 className="font-display text-lg font-semibold text-green-950">Qualifications</h3>
            <ul className="mt-5 space-y-3">
              {founderQualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-900 text-[10px] text-ivory">
                    ✓
                  </span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="What We Stand For" title="Why families trust our academy" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-sand p-6">
              <h3 className="font-display text-base font-semibold text-green-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="green">
        <div className="text-center text-ivory">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Ready to begin your journey?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/70">
            Book a free trial class and experience our teaching approach firsthand.
          </p>
          <div className="mt-7">
            <Button to="/book-free-trial" variant="secondary">
              Book Free Trial
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
