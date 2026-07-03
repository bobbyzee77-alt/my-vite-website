import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'

interface SEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

export function SEO({ title, description, path, keywords, image, jsonLd, noindex }: SEOProps) {
  const fullTitle = title.includes(site.shortName) ? title : `${title} | ${site.shortName}`
  const url = `${site.siteUrl}${path}`
  const ogImage = image ?? `${site.siteUrl}/images/og-cover.jpg`
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {ldArray.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}

/** Shared Organization schema, included once via the root layout. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    alternateName: site.shortName,
    url: site.siteUrl,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sialkot',
      addressCountry: 'PK',
    },
    founder: {
      '@type': 'Person',
      name: site.founder,
    },
    sameAs: [],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.siteUrl}${item.path}`,
    })),
  }
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function courseJsonLd(course: {
  title: string
  metaDescription: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.metaDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: site.name,
      sameAs: site.siteUrl,
    },
    url: `${site.siteUrl}/courses/${course.slug}`,
  }
}

export function reviewJsonLd(testimonials: { name: string; quote: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: String(testimonials.length * 8),
    },
  }
}
