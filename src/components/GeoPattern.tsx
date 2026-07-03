/**
 * Signature visual motif: an 8-point star (khatam) lattice, drawn as a
 * repeating SVG pattern. Used sparingly as texture behind the hero and as a
 * hairline divider — never as decoration for its own sake.
 */
export function GeoPattern({
  id,
  color = 'currentColor',
  opacity = 0.08,
  size = 64,
  className = '',
}: {
  id: string
  color?: string
  opacity?: number
  size?: number
  className?: string
}) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g stroke={color} strokeWidth="1" fill="none" opacity={opacity}>
            <path
              d={`M0,${size / 2} L${size / 4},${size / 4} L${size / 2},0 L${(size * 3) / 4},${size / 4} L${size},${size / 2} L${(size * 3) / 4},${(size * 3) / 4} L${size / 2},${size} L${size / 4},${(size * 3) / 4} Z`}
            />
            <circle cx={size / 2} cy={size / 2} r={size / 6} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** A thin divider that reads as a strand of the lattice, for section breaks. */
export function GeoDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gold-500/60" />
      <svg width="18" height="18" viewBox="0 0 18 18" className="text-gold-500">
        <path
          d="M9 0 L11.5 6.5 L18 9 L11.5 11.5 L9 18 L6.5 11.5 L0 9 L6.5 6.5 Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-12 bg-gold-500/60" />
    </div>
  )
}
