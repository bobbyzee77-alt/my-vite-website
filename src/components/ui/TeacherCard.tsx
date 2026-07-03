import type { Teacher } from '../../data/site'

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="rounded-2xl border border-line bg-ivory p-7">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-900 font-display text-xl font-semibold text-gold-300">
          {teacher.name
            .split(' ')
            .map((w) => w[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-green-950">{teacher.name}</h3>
          <p className="text-sm font-medium text-gold-600">{teacher.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">{teacher.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {teacher.specialities.map((s) => (
          <span key={s} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-green-800">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
