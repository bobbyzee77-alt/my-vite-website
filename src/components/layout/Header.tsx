import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, site } from '../../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-ivory/95 backdrop-blur border-line shadow-sm' : 'bg-ivory/70 backdrop-blur border-transparent'
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-gold-400">
            <svg width="20" height="20" viewBox="0 0 18 18">
              <path
                d="M9 0 L11.5 6.5 L18 9 L11.5 11.5 L9 18 L6.5 11.5 L0 9 L6.5 6.5 Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold leading-tight text-green-950">
            {site.founder}
            <span className="block text-[11px] font-body font-medium uppercase tracking-[0.16em] text-gold-600">
              Islamic Academy
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-green-900' : 'text-ink/70 hover:text-green-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/book-free-trial"
            className="inline-flex items-center rounded-full bg-green-900 px-5 py-2.5 text-sm font-semibold text-ivory shadow-soft transition-colors hover:bg-green-800"
          >
            Book Free Trial
          </Link>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M2 2 L16 16 M16 2 L2 16" strokeLinecap="round" />
            ) : (
              <path d="M1 4 H17 M1 9 H17 M1 14 H17" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-ivory px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-sand text-green-900' : 'text-ink/80 hover:bg-sand/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/book-free-trial"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-green-900 px-5 py-3 text-sm font-semibold text-ivory"
            >
              Book Free Trial
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
