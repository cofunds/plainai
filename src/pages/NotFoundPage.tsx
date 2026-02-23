import { Link } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <SEO title="Page Not Found" />
      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-500">
        This page doesn't exist. Maybe the URL is wrong, or it was moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700"
      >
        Back to home
      </Link>
    </div>
  )
}
