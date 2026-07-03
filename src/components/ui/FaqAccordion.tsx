import { useState } from 'react'

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-ivory">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-green-950">{item.q}</span>
              <span
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line text-green-900 transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-ink/70">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
