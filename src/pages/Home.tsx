import { Link } from 'react-router-dom'
import { SEO, organizationJsonLd, reviewJsonLd } from '../components/SEO'
import { Section, SectionHeading } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { CourseCard } from '../components/ui/CourseCard'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { GeoPattern, GeoDivider } from '../components/GeoPattern'
import { courses } from '../data/courses'
import { blogPosts } from '../data/blog'
import { site, whyChooseUs, founderQualifications, testimonials } from '../data/site'

const popularSlugs = ['hifz-al-quran', 'tajweed-course', 'kids-islamic-program', 'quran-reading-for-beginners']
const popularCourses = courses.filter((c) => popularSlugs.includes(c.slug))

const process = [
  { title: 'Book a free trial', detail: 'Tell us the student\u2019s age, level, and preferred teacher — we match you within 24 hours.' },
  { title: 'Meet your teacher', detail: 'A real live lesson, not a sales call — see the teaching style before committing.' },
  { title: 'Start your structured plan', detail: 'Weekly classes with clear milestones and regular progress reports.' },
  { title: 'Track steady progress', detail: 'Consistent revision and feedback keep learning moving forward, term after term.' },
]

export default function Home() {
  return (
    <>
      <SEO
        title={`${site.name} — Online Quran Classes Worldwide`}
        description="Authentic online Quran, Tajweed, Hifz, and Islamic Studies classes with qualified male and female teachers. Book a free trial class today."
        path="/"
        keywords={['online quran classes', 'online islamic academy', 'learn quran online']}
        jsonLd={[organizationJsonLd(), reviewJsonLd(testimonials)]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-ivory">
        <GeoPattern id="hero-pattern" color="#E7CE9A" opacity={0.07} size={72} />
        <div className="container-page relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
              Live Online Classes &middot; Worldwide
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
              {site.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
              Learn Quran, Tajweed, Hifz, and Islamic Studies with qualified scholars — one-to-one, live,
              and built around your family\u2019s schedule.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/book-free-trial" variant="secondary">
                Book Free Trial
              </Button>
              <Button to="/courses" variant="ghost" className="border-ivory/25 text-ivory hover:border-gold-400 hover:text-gold-300">
                View Courses
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-ivory/10 pt-10 text-center sm:grid-cols-4">
            {[
              ['8–10 yrs', 'Teaching experience'],
              ['6', 'Regions served'],
              ['18+', 'Structured courses'],
              ['1:1', 'Live class format'],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold text-gold-300">{stat}</p>
                <p className="mt-1 text-xs text-ivory/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="border-b border-line bg-sand py-6">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm font-medium text-ink/60">
          <span>Trusted by Muslim families in</span>
          {site.regions.map((r) => (
            <span key={r} className="text-green-800">
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section tone="ivory">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About the Academy" title="Structured, authentic Islamic education — built for real family life" center={false} />
            <p className="text-sm leading-relaxed text-ink/70">
              {site.name} was founded to make classical, authentic Quranic education genuinely accessible — not
              rushed, not diluted, and not intimidating for beginners. Every course follows a structured
              curriculum taught by qualified scholars, with male and female teachers available so every student
              learns in a comfortable environment.
            </p>
            <ul className="mt-6 space-y-3">
              {['Qualified Male Teachers Available', 'Qualified Female Teachers Available', 'Separate Classes for Brothers and Sisters', 'Family-Friendly Learning Environment'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-900 text-[10px] text-ivory">
                      ✓
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8">
              <Button to="/about" variant="ghost">
                Learn About Our Academy
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-sand p-10">
            <GeoPattern id="about-pattern" color="#0F5132" opacity={0.05} size={48} />
            <div className="relative">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">Meet the Founder</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-green-950">{site.founder}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                A classically trained scholar and graduate of the Islamic University of Madinah, dedicated to
                teaching the Quran and Islamic sciences with sincerity and excellence.
              </p>
              <ul className="mt-6 space-y-2">
                {founderQualifications.slice(0, 5).map((q) => (
                  <li key={q} className="flex items-start gap-2 text-xs font-medium text-green-800">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="sand">
        <SectionHeading eyebrow="Why Families Choose Us" title="A premium learning experience, rooted in tradition" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-ivory p-6">
              <h3 className="font-display text-base font-semibold text-green-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POPULAR COURSES */}
      <Section tone="ivory">
        <SectionHeading eyebrow="Popular Courses" title="Find the right starting point for your journey" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/courses" variant="ghost">
            View All Courses
          </Button>
        </div>
      </Section>

      {/* LEARNING PROCESS */}
      <Section tone="green">
        <SectionHeading eyebrow="How It Works" title="A simple path from first trial to lasting progress" tone="light" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-ivory/10 bg-ivory/5 p-6">
              <span className="font-display text-3xl font-semibold text-gold-400/60">0{i + 1}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-ivory">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="ivory">
        <SectionHeading eyebrow="Student Testimonials" title="What families say about learning with us" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/testimonials" variant="ghost">
            Read More Testimonials
          </Button>
        </div>
      </Section>

      {/* FREE TRIAL CTA */}
      <Section tone="sand">
        <div className="relative overflow-hidden rounded-3xl bg-green-950 px-8 py-14 text-center text-ivory md:px-16">
          <GeoPattern id="trial-pattern" color="#E7CE9A" opacity={0.06} size={56} />
          <div className="relative">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Start with a free trial class — no pressure, no cost</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ivory/70">
              See our teaching style for yourself before you commit to a course. Available for kids, teens, and
              adults, worldwide.
            </p>
            <div className="mt-8">
              <Button to="/book-free-trial" variant="secondary">
                Book Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ TEASER */}
      <Section tone="ivory">
        <SectionHeading eyebrow="Common Questions" title="Answers before you enrol" />
        <div className="mx-auto max-w-2xl">
          <GeoDivider className="mb-8" />
          <p className="text-center text-sm text-ink/65">
            Curious about scheduling, pricing, or how classes work?{' '}
            <Link to="/faq" className="font-semibold text-green-800 underline underline-offset-4">
              Visit our full FAQ page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* LATEST ARTICLES */}
      <Section tone="sand">
        <SectionHeading eyebrow="From the Blog" title="Guidance for Quran learning, at every stage" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-ivory p-6 transition-shadow hover:shadow-soft"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-gold-600">{post.readTime}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-green-950 group-hover:text-green-800">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/blog" variant="ghost">
            Read the Blog
          </Button>
        </div>
      </Section>
    </>
  )
}
