import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'

interface Breadcrumb {
  label: string
  href: string
}

interface NavbarProps {
  breadcrumbs?: Breadcrumb[]
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'AI 101', href: '/ai-101' },
]

export default function Navbar({ breadcrumbs }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-stone-900">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center bg-stone-900 text-sm font-bold text-white">
            P
          </span>
          <span className="text-lg font-extrabold uppercase tracking-tight text-stone-900">PLAINAI</span>
        </Link>

        {/* Center: Nav links (desktop) */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.href)

            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : 'text-stone-500 hover:text-stone-900'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right: CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/guides"
            className="hidden brutal-btn bg-stone-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 md:inline-flex"
          >
            Get started
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center text-stone-600 transition-colors hover:text-stone-900 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="border-t border-stone-300">
          <div className="mx-auto flex max-w-6xl items-center gap-1.5 px-4 py-2 text-sm text-stone-400 sm:px-6">
            <Link to="/" className="text-stone-400 hover:text-stone-700 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-stone-600">{crumb.label}</span>
                ) : (
                  <Link to={crumb.href} className="text-stone-400 hover:text-stone-700 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      <div
        className={cn(
          'border-t-2 border-stone-900 bg-white px-4 py-4 md:hidden transition-all',
          mobileOpen ? 'block' : 'hidden'
        )}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.href)

            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : 'text-stone-500 hover:text-stone-900'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-2 border-t border-stone-300 pt-3">
            <Link
              to="/guides"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center brutal-btn bg-stone-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
