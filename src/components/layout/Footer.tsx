import { Link } from 'react-router-dom'
import { site, footerLinks } from '../../data/site'

export function Footer() {
  return (
    <footer className="bg-green-950 text-ivory">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <svg width="16" height="16" viewBox="0 0 18 18">
                  <path d="M9 0 L11.5 6.5 L18 9 L11.5 11.5 L9 18 L6.5 11.5 L0 9 L6.5 6.5 Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-base font-semibold">{site.founder}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">{site.tagline}</p>
            <div className="mt-5 space-y-1.5 text-sm text-ivory/70">
              <p>{site.location}</p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone}`} className="hover:text-gold-300">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <FooterCol title="Academy" links={footerLinks.academy} />
          <FooterCol title="Learn" links={footerLinks.learn} />
          <FooterCol title="Support" links={footerLinks.support} />
          <FooterCol title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Serving students across {site.regions.join(', ')}.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-ivory/70 transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
