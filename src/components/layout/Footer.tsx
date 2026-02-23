import { Link } from 'react-router-dom'

const platformLinks = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'AI 101', href: '/ai-101' },
]

const resourceLinks = [
  { label: 'Prompt Library', href: '/prompts' },
  { label: 'Tool Directory', href: '/tools' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Twitter/X', href: 'https://x.com', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center bg-stone-900 text-sm font-bold text-white">
                P
              </span>
              <span className="text-lg font-extrabold uppercase tracking-tight text-stone-900">PLAINAI</span>
            </Link>
            <p className="mt-3 text-sm font-medium leading-relaxed text-stone-500">
              AI explained plain and simple.
            </p>
            <p className="mt-1 text-sm text-stone-400">
              A 1126labs project
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-stone-900 mb-3">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-stone-900 mb-3">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-stone-900 mb-3">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t-2 border-stone-200 pt-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
            &copy; 2026 1126labs. Free forever.
          </p>
        </div>
      </div>
    </footer>
  )
}
