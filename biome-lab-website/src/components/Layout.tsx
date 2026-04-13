import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/eco-lab', label: 'The Eco-Lab' },
  { to: '/intelligence', label: 'Intelligence' },
  { to: '/living-question', label: 'The Living Question' },
  { to: '/build-with-us', label: 'Connect' },
  { to: '/about', label: 'About JP' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-soil-50/90 backdrop-blur-md border-b border-soil-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-forest-700 font-semibold text-lg tracking-tight no-underline">
            BIOME
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-sm rounded-md no-underline transition-colors ${
                  location.pathname === link.to
                    ? 'text-forest-600 bg-forest-50'
                    : 'text-ink-muted hover:text-forest-600 hover:bg-forest-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ink-muted cursor-pointer bg-transparent border-0"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-soil-50 border-b border-soil-100 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm no-underline ${
                  location.pathname === link.to
                    ? 'text-forest-600'
                    : 'text-ink-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-forest-800 text-forest-200 py-16 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">BIOME Laboratories</h4>
              <p className="text-forest-300 text-sm leading-relaxed">
                A forest-first intelligence laboratory. Studying how nature heals.
                Building the ecosystems that heal with it.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Campuses</h4>
              <p className="text-forest-300 text-sm mb-2">Biome Campus — L'Ange-Gardien, QC</p>
              <p className="text-forest-300 text-sm">Grove Campus — Ottawa, ON</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
              <p className="text-forest-300 text-sm mb-2">
                <a href="mailto:jeeplalonde@gmail.com" className="text-gold-400 no-underline hover:text-gold-300 transition-colors">
                  jeeplalonde@gmail.com
                </a>
              </p>
              <p className="text-forest-300 text-sm">
                <a href="https://linkedin.com/in/jean-paullalonde/" target="_blank" rel="noopener noreferrer" className="text-gold-400 no-underline hover:text-gold-300 transition-colors">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-forest-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-forest-400 text-xs">
              &copy; {new Date().getFullYear()} BIOME Laboratories Inc. All rights reserved.
            </p>
            <p className="text-forest-500 text-xs italic">
              "Which nature system most aligns with what we are trying to do — and could Nature teach us a better way?"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
