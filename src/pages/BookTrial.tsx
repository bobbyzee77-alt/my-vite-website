import { useState, type FormEvent } from 'react'
import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'
import { courses } from '../data/courses'

interface FormState {
  name: string
  email: string
  whatsapp: string
  studentAge: string
  course: string
  teacherPreference: string
  timezone: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  whatsapp: '',
  studentAge: '',
  course: courses[0]?.slug ?? '',
  teacherPreference: 'no-preference',
  timezone: '',
  message: '',
}

export default function BookTrial() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof FormState, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.studentAge.trim()) next.studentAge = 'Please enter the student\u2019s age.'
    if (!form.timezone.trim()) next.timezone = 'Please enter your time zone or country.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const courseTitle = courses.find((c) => c.slug === form.course)?.title ?? form.course
    const subject = encodeURIComponent(`Free Trial Request — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nStudent Age: ${form.studentAge}\nCourse: ${courseTitle}\nTeacher Preference: ${form.teacherPreference}\nTime Zone: ${form.timezone}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Book Your Free Trial Class"
        description="Book a free trial Quran class with Hafiz Maulana Faiz Islamic Academy. Tell us your preferences and we'll match you with a qualified teacher."
        path="/book-free-trial"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Book Free Trial', path: '/book-free-trial' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Free Trial</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Book Your Free Trial Class</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Tell us a little about the student and we\u2019ll match you with the right teacher — no cost, no
            obligation.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="rounded-2xl border border-line bg-sand p-8 text-center">
              <h2 className="font-display text-xl font-semibold text-green-950">Thank you, {form.name.split(' ')[0]}!</h2>
              <p className="mt-3 text-sm text-ink/70">
                Your email client should have opened with your trial request ready to send. If it didn\u2019t open,
                please email us directly at{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-green-800 underline underline-offset-4">
                  {site.email}
                </a>{' '}
                or message us on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-sand p-8">
              <Field label="Full Name" error={errors.name}>
                <input
                  className={inputClass(errors.name)}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  autoComplete="name"
                />
              </Field>

              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  className={inputClass(errors.email)}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  autoComplete="email"
                />
              </Field>

              <Field label="WhatsApp Number (optional)">
                <input
                  className={inputClass()}
                  value={form.whatsapp}
                  onChange={(e) => update('whatsapp', e.target.value)}
                  autoComplete="tel"
                />
              </Field>

              <Field label="Student's Age" error={errors.studentAge}>
                <input
                  className={inputClass(errors.studentAge)}
                  value={form.studentAge}
                  onChange={(e) => update('studentAge', e.target.value)}
                  placeholder="e.g. 7, or 'Adult'"
                />
              </Field>

              <Field label="Course of Interest">
                <select
                  className={inputClass()}
                  value={form.course}
                  onChange={(e) => update('course', e.target.value)}
                >
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Teacher Preference">
                <select
                  className={inputClass()}
                  value={form.teacherPreference}
                  onChange={(e) => update('teacherPreference', e.target.value)}
                >
                  <option value="no-preference">No preference</option>
                  <option value="male">Male teacher</option>
                  <option value="female">Female teacher</option>
                </select>
              </Field>

              <Field label="Time Zone / Country" error={errors.timezone}>
                <input
                  className={inputClass(errors.timezone)}
                  value={form.timezone}
                  onChange={(e) => update('timezone', e.target.value)}
                  placeholder="e.g. UK (GMT), or 'London'"
                />
              </Field>

              <Field label="Anything else we should know? (optional)">
                <textarea
                  rows={4}
                  className={inputClass()}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-green-900 px-6 py-3.5 text-sm font-semibold text-ivory shadow-soft transition-colors hover:bg-green-800"
              >
                Request Free Trial
              </button>
              <p className="text-center text-xs text-ink/50">
                Submitting opens your email client with a pre-filled message to {site.email}.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-green-950">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function inputClass(error?: string) {
  return `w-full rounded-lg border bg-ivory px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-green-700 ${
    error ? 'border-red-400' : 'border-line'
  }`
}
