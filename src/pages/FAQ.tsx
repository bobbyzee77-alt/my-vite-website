import { SEO, breadcrumbJsonLd, faqJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { Button } from '../components/ui/Button'
import { generalFaqs } from '../data/site'

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about our online Quran classes, scheduling, pricing, and free trial lessons."
        path="/faq"
        jsonLd={[breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]), faqJsonLd(generalFaqs)]}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">FAQ</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Frequently Asked Questions</h1>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl">
          <FaqAccordion items={generalFaqs} />
          <div className="mt-10 text-center">
            <p className="text-sm text-ink/65">Still have questions?</p>
            <div className="mt-4">
              <Button to="/contact" variant="ghost">Contact Us</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
