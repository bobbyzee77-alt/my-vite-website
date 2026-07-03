import { Link } from 'react-router-dom'
import type { Course } from '../../data/courses'

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-ivory p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-green-800">
        <svg width="16" height="16" viewBox="0 0 18 18">
          <path d="M9 0 L11.5 6.5 L18 9 L11.5 11.5 L9 18 L6.5 11.5 L0 9 L6.5 6.5 Z" fill="currentColor" />
        </svg>
      </span>
      <h3 className="font-display text-lg font-semibold text-green-950 group-hover:text-green-800">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{course.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
        View course
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 7 H12 M8 3 L12 7 L8 11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}
