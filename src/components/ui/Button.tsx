import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-green-900 text-ivory hover:bg-green-800 shadow-soft',
  secondary:
    'bg-gold-500 text-green-950 hover:bg-gold-400',
  ghost:
    'bg-transparent text-ink border border-line hover:border-gold-500 hover:text-green-900',
}

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
}

export function Button({ children, to, href, onClick, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
