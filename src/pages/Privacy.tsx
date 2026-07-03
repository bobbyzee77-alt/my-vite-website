import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Hafiz Maulana Faiz Islamic Academy, covering how we collect and use student and visitor information."
        path="/privacy-policy"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ivory/60">Last updated: January 2026</p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="prose-content mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-ink/75">
          <p>
            {site.name} ("we", "us", "our") respects your privacy. This policy explains what information we
            collect through this website, how we use it, and the choices you have.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Information We Collect</h2>
          <p>
            When you book a free trial, contact us, or subscribe to our newsletter, we may collect your name,
            email address, phone/WhatsApp number, and any details you choose to share about the student and
            learning preferences.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">How We Use Your Information</h2>
          <p>
            We use this information to respond to enquiries, schedule trial and paid classes, match students with
            suitable teachers, and send relevant updates about your classes. We do not sell your personal
            information to third parties.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Cookies</h2>
          <p>
            This website may use basic cookies or analytics tools to understand how visitors use our pages, in
            order to improve content and navigation.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Data Security</h2>
          <p>
            We take reasonable measures to protect the information you share with us. However, no method of
            transmission over the internet is completely secure.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us at {site.email}.
          </p>
          <h2 className="font-display text-lg font-semibold text-green-950">Contact</h2>
          <p>
            For any questions about this policy, please contact us at {site.email} or {site.phone}.
          </p>
        </div>
      </Section>
    </>
  )
}
