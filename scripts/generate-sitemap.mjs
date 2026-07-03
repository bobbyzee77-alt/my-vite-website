// Generates public routing sitemap.xml into dist/ after build, driven by the
// same course and blog data used by the React app (kept in sync automatically).
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://hafizmaulanafaiz.academy'

// Lightweight re-implementation of the slug lists so this script has no
// TypeScript/JSX build step of its own. Keep in sync with src/data/*.ts.
const courseSlugs = [
  'quran-reading-for-beginners', 'noorani-qaida', 'tajweed-course', 'hifz-al-quran',
  'quran-memorization-revision', 'quran-recitation', 'arabic-language', 'quran-translation',
  'tafseer-al-quran', 'islamic-studies', 'hadith-studies', 'aqeedah', 'fiqh',
  'kids-islamic-program', 'adults-islamic-program', 'weekend-classes', 'evening-classes', 'one-to-one-classes',
]

const blogSlugs = [
  'how-online-quran-classes-work', 'best-age-to-start-quran-learning', 'benefits-of-tajweed',
  'how-long-does-hifz-take', 'choosing-the-right-quran-teacher', 'online-quran-classes-for-sisters',
  'online-quran-classes-for-kids', 'why-learn-arabic', 'parents-guide-to-islamic-education',
  'daily-quran-learning-tips',
]

const staticPaths = [
  '/', '/about', '/courses', '/kids-program', '/adults-program', '/male-students', '/female-students',
  '/teachers', '/pricing', '/testimonials', '/faq', '/blog', '/book-free-trial', '/contact',
  '/privacy-policy', '/terms-and-conditions',
]

const allPaths = [
  ...staticPaths,
  ...courseSlugs.map((s) => `/courses/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
]

const today = new Date().toISOString().split('T')[0]

const urlEntries = allPaths
  .map((p) => {
    const priority = p === '/' ? '1.0' : p.split('/').length > 2 ? '0.7' : '0.8'
    return `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`

const outPath = path.join(__dirname, '..', 'dist', 'sitemap.xml')
writeFileSync(outPath, xml)
console.log(`Sitemap generated with ${allPaths.length} URLs -> ${outPath}`)
