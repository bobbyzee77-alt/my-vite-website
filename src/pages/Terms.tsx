import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and Conditions for enrolling in and attending classes at Hafiz Maulana Faiz Islamic Academy."
        path="/terms-and-conditions"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms-and-conditions' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-ivory/60">Last updated: January 2026</p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-ink/75">
          <p>
            By enrolling in classes or using this website, you agree to the following terms. Please read them
            carefully before booking a trial or paid course.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Enrolment</h2>
          <p>
            Enrolment in any course is subject to teacher availability. A free trial class does not guarantee a
            specific teacher or time slot for ongoing enrolment.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Fees & Payment</h2>
          <p>
            Course fees are billed according to the plan selected at enrolment. Fees are payable in advance of
            each billing cycle unless otherwise agreed in writing.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Cancellations & Rescheduling</h2>
          <p>
            Students may reschedule a class with reasonable advance notice, subject to teacher availability.
            Repeated late cancellations may affect scheduling priority.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Conduct</h2>
          <p>
            We expect respectful conduct from all students and parents toward teachers and academy staff.
            Repeated inappropriate conduct may result in suspension of classes.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of our services after changes constitutes
            acceptance of the updated terms.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Contact</h2>
          <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
        </div>
      </Section>
    </>
  )
}
