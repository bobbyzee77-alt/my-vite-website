import { useParams, Link, Navigate } from 'react-router-dom'
import { SEO, breadcrumbJsonLd } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { getPostBySlug, blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <section className="bg-green-950 py-16 text-ivory md:py-20">
        <div className="container-page">
          <nav className="mb-6 text-xs text-ivory/50">
            <Link to="/blog" className="hover:text-gold-300">
              Blog
            </Link>{' '}
            / <span className="text-ivory/80">{post.title}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wide text-gold-300">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} &middot; {post.readTime}
            </span>
            <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <Section tone="ivory">
        <div className="mx-auto max-w-2xl">
          <article className="space-y-5 text-sm leading-relaxed text-ink/80 md:text-base">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <div className="mt-12 rounded-2xl border border-line bg-sand p-6 text-center">
            <p className="font-display text-lg font-semibold text-green-950">
              Ready to put this into practice?
            </p>
            <p className="mt-2 text-sm text-ink/65">Book a free trial class and start your structured learning plan.</p>
            <div className="mt-5">
              <Button to="/book-free-trial" variant="primary">
                Book Free Trial
              </Button>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-xl font-semibold text-green-950">More Articles</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="rounded-xl border border-line bg-ivory p-5 transition-shadow hover:shadow-soft"
                  >
                    <h3 className="font-display text-base font-semibold text-green-950">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/60">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
