import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { FaqAccordion } from '../components/ui/FaqAccordion'

const plans = [
  {
    name: 'One-to-One',
    description: 'Private, fully personalised classes with a dedicated teacher.',
    features: ['1 student per class', 'Custom pace & plan', 'Progress reports', 'Male or female teacher', 'Free trial class'],
    highlight: false,
  },
  {
    name: 'Small Group',
    description: 'Learn alongside 2–4 students at a similar level, at a lower cost.',
    features: ['2–4 students per class', 'Structured curriculum', 'Progress reports', 'Male or female teacher', 'Free trial class'],
    highlight: true,
  },
  {
    name: 'Family Plan',
    description: 'Multiple children from the same family, scheduled together or separately.',
    features: ['2+ children', 'Coordinated scheduling', 'Family progress summary', 'Male or female teacher', 'Free trial class'],
    highlight: false,
  },
]

const faqs = [
  { q: 'Do you charge per course or a flat monthly fee?', a: 'Fees are billed monthly and vary by class type (one-to-one, small group, or family plan) and course.' },
  { q: 'Is the free trial really free?', a: 'Yes, every new student receives one free trial class with no obligation to continue.' },
  { q: 'Can I switch between one-to-one and group classes?', a: 'Yes, you can adjust your plan at any time between billing cycles.' },
  { q: 'What payment methods do you accept?', a: 'We accept major international payment methods; full details are shared during trial booking.' },
]

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Affordable pricing for online Quran and Islamic studies classes — one-to-one, small group, and family plans available."
        path="/pricing"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Pricing</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Choose the class format that fits your family and budget. Contact us for an exact quote based on your
            course and schedule.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlight ? 'border-gold-500 bg-green-950 text-ivory shadow-soft' : 'border-line bg-sand'
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-green-950">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? 'text-ivory/75' : 'text-ink/65'}`}>
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-ivory/85' : 'text-ink/75'}`}
                  >
                    <span
                      className={`mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] ${
                        plan.highlight ? 'bg-gold-500 text-green-950' : 'bg-green-900 text-ivory'
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/book-free-trial" variant={plan.highlight ? 'secondary' : 'primary'} className="w-full">
                  Book Free Trial
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Pricing FAQ" title="Common billing questions" />
        <div className="mx-auto max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </>
  )
}
