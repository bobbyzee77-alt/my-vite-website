import { Link } from 'react-router-dom'
import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Guidance and practical tips on Quran learning, Tajweed, Hifz, and Islamic education for parents and adult learners."
        path="/blog"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />

      <section className="bg-green-950 py-16 text-center text-ivory md:py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Blog</span>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Articles &amp; Guidance</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base">
            Practical insight on Quran learning, Tajweed, Hifz, and raising children with strong Islamic
            foundations.
          </p>
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-sand p-6 transition-shadow hover:shadow-soft"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-gold-600">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} &middot; {post.readTime}
              </span>
              <h2 className="mt-2 font-display text-lg font-semibold text-green-950 group-hover:text-green-800">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-gold-600">Read article →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
