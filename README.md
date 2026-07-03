# Hafiz Maulana Faiz Islamic Academy — Website

A production-ready, SEO-optimised website for an online Islamic academy, built with **React + Vite + TypeScript + Tailwind CSS v4**. Includes 18 dedicated course pages, a blog, structured data (JSON-LD), an auto-generated sitemap, and a ready-to-use GitHub Pages deployment workflow.

## Tech Stack

- **React 19 + TypeScript** — component architecture
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite` (CSS-based theme, see `src/index.css`)
- **React Router v7** — client-side routing (`BrowserRouter`, with a GitHub Pages SPA fallback)
- **react-helmet-async** — per-page SEO tags (title, meta description, Open Graph, Twitter Card, canonical, JSON-LD)

## Project Structure

```
src/
  components/
    layout/          Header, Footer, WhatsAppButton, Layout (page shell)
    ui/               Button, Section, CourseCard, TeacherCard, TestimonialCard, FaqAccordion
    SEO.tsx           <SEO> component + JSON-LD helpers (Organization, Course, FAQ, Breadcrumb, Review)
    GeoPattern.tsx    Signature Islamic geometric-lattice motif (SVG)
  data/
    courses.ts        All 18 courses — powers /courses and every /courses/:slug page
    blog.ts            10 SEO blog posts — powers /blog and every /blog/:slug page
    site.ts            Site-wide content: nav, footer links, teachers, testimonials, FAQs
  pages/               One file per route (see App.tsx for the full route list)
scripts/
  generate-sitemap.mjs Runs after `vite build`, writes dist/sitemap.xml from the same slug lists
public/
  404.html             GitHub Pages SPA-routing fallback (see "Deployment" below)
  robots.txt
  favicon.svg
.github/workflows/
  deploy.yml           GitHub Actions: builds and deploys to GitHub Pages on every push to main
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/hafiz-maulana-faiz-academy/` (the dev server also respects the `base` path set in `vite.config.ts`).

## Editing Content

Almost all site content lives in `src/data/`, not scattered across components:

- **Courses** — edit or add entries in `src/data/courses.ts`. Every course automatically gets its own SEO page at `/courses/<slug>`, with schema markup, FAQs, and related-course suggestions — no new files needed.
- **Blog posts** — same pattern in `src/data/blog.ts`, powering `/blog/<slug>`.
- **Teachers, testimonials, general FAQs, nav/footer links, contact details** — `src/data/site.ts`.

If you add or remove a course/blog slug, also update the matching slug list in `scripts/generate-sitemap.mjs` so the sitemap stays accurate.

## SEO Features

- Per-page `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags (`src/components/SEO.tsx`)
- JSON-LD structured data: `EducationalOrganization`, `Course`, `FAQPage`, `BreadcrumbList`, `Review`/`AggregateRating`
- Auto-generated `sitemap.xml` on every build (`npm run build`)
- `public/robots.txt` pointing to the sitemap
- Semantic HTML, descriptive alt-ready image slots, and internal linking between related courses/articles

Before going live, update `siteUrl` in `src/data/site.ts` and the `Sitemap:` line in `public/robots.txt` to your real production domain.

## Deployment

### Option A — GitHub Pages (Vite, recommended for this project)

1. Push this project to a GitHub repository.
2. In `vite.config.ts`, set `base` to match your repo name:
   ```ts
   base: '/your-repo-name/', // e.g. '/hafiz-maulana-faiz-academy/'
   ```
   If deploying to a **custom domain** or a **user/org root page** (`https://<user>.github.io/`), set `base: '/'` instead, and change `pathSegmentsToKeep` in `public/404.html` from `1` to `0`.
3. In your repo settings → **Pages**, set the source to **GitHub Actions**.
4. Push to `main` — `.github/workflows/deploy.yml` will build and deploy automatically.
5. (Custom domain) Add a `public/CNAME` file containing your domain, and configure the DNS records GitHub provides.

**Why the `404.html` file exists:** GitHub Pages has no server-side routing, so a direct visit to e.g. `/courses/tajweed-course` would 404. `public/404.html` plus the redirect script in `index.html` is the standard spa-github-pages trick that makes client-side routes work on refresh and direct links.

### Option B — Vercel / Cloudflare Pages / Netlify

These platforms handle SPA routing natively, so the GitHub Pages workaround isn't needed:

1. Set `base: '/'` in `vite.config.ts`.
2. Connect the repo in your chosen platform's dashboard.
3. Build command: `npm run build` — Output directory: `dist`.
4. Add a rewrite rule of `/* -> /index.html` (Vercel and Netlify do this automatically for Vite SPAs; Cloudflare Pages needs a `_redirects` file with `/* /index.html 200` in `public/`).

## Contact Form

`/book-free-trial` and `/contact` are fully validated client-side forms. Since this is a static site with no backend, submitting currently opens the visitor's email client with a pre-filled message (`mailto:`). For a native in-page submission experience, swap the `handleSubmit` logic in `src/pages/BookTrial.tsx` and `src/pages/Contact.tsx` for a form backend such as Formspree, Web3Forms, or a Cloudflare Pages Function — no other code changes are required.

## Performance Notes

- Fonts are loaded from Google Fonts with `display=swap` to avoid blocking render.
- All images should be added as modern formats (WebP/AVIF) and lazy-loaded (`loading="lazy"`) once real photography is added to `public/images/`.
- Run `npm run build && npm run preview` and audit with Lighthouse before launch to confirm Core Web Vitals targets are met.

## License

Content and branding are proprietary to Hafiz Maulana Faiz Islamic Academy. Code structure may be reused/adapted freely for your own projects.
