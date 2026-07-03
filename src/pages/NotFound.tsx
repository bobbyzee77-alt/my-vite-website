import { SEO } from '../components/SEO'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { GeoDivider } from '../components/GeoPattern'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for could not be found." path="/404" noindex />
      <Section tone="ivory" className="text-center">
        <p className="font-display text-7xl font-semibold text-green-900">404</p>
        <GeoDivider className="my-6" />
        <h1 className="font-display text-2xl font-semibold text-green-950">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/65">
          The page you\u2019re looking for may have moved or no longer exists. Let\u2019s get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/courses" variant="ghost">Browse Courses</Button>
        </div>
      </Section>
    </>
  )
}
