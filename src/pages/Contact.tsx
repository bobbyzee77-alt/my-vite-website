import { useState, type FormEvent } from 'react'
import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      setError('Please fill in your name, a valid email, and a message.')
      return
    }
    setError('')
    const subject = encodeURIComponent(`Website Enquiry — ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Hafiz Maulana Faiz Islamic Academy by email, phone, or WhatsApp for questions about our online Quran classes."
        path="/contact"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Get in Touch</h1>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <ContactItem label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactItem label="Phone" value={site.phone} href={`tel:${site.phone}`} />
            <ContactItem
              label="WhatsApp"
              value={site.phone}
              href={`https://wa.me/${site.whatsapp}`}
            />
            <ContactItem label="Location" value={site.location} />
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-line bg-sand p-8 text-center">
                <h2 className="font-display text-xl font-semibold text-green-950">Message sent!</h2>
                <p className="mt-3 text-sm text-ink/70">
                  Your email client should have opened. We\u2019ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-line bg-sand p-8">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-green-950">Name</span>
                  <input
                    className="w-full rounded-lg border border-line bg-ivory px-4 py-2.5 text-sm outline-none focus:border-green-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-green-950">Email</span>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-line bg-ivory px-4 py-2.5 text-sm outline-none focus:border-green-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-green-950">Message</span>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-line bg-ivory px-4 py-2.5 text-sm outline-none focus:border-green-700"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                {error && <p className="text-xs text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-green-900 px-6 py-3.5 text-sm font-semibold text-ivory shadow-soft transition-colors hover:bg-green-800"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}

function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="rounded-2xl border border-line bg-sand p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">{label}</p>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="mt-1 block text-sm font-medium text-green-950 hover:text-green-800">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm font-medium text-green-950">{value}</p>
      )}
    </div>
  )
}
