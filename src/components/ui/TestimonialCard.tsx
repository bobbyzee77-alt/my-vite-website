import type { Testimonial } from '../../data/site'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-ivory p-7">
      <div className="mb-4 flex gap-0.5 text-gold-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.2l6.1-.6L10 1z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-ink/80">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="text-sm font-semibold text-green-950">{testimonial.name}</p>
        <p className="text-xs text-ink/55">
          {testimonial.location} &middot; {testimonial.course}
        </p>
      </figcaption>
    </figure>
  )
}
