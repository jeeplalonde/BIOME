import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/research', label: 'Research' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Connect' },
]

export function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-forest-200/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-forest-900 font-semibold text-xl tracking-tight no-underline">
            BIOME
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-1.5 text-sm rounded-md no-underline transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5
                  after:bg-glow-400 after:transition-all after:duration-300
                  hover:after:w-full hover:after:left-0
                  ${
                    location.pathname === link.to
                      ? 'text-forest-900 after:w-full after:left-0'
                      : 'text-forest-700/70 hover:text-forest-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-forest-700/70 cursor-pointer bg-transparent border-0"
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
          <div className="lg:hidden bg-cream-100 border-b border-forest-200/30 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm no-underline ${
                  location.pathname === link.to
                    ? 'text-forest-900'
                    : 'text-forest-700/70'
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
      <footer className="bg-forest-900 py-16 px-6 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl text-cream-100 mb-4">BIOME Laboratories</h3>
              <p className="text-cream-200/70 text-sm leading-relaxed">
                A forest-first intelligence laboratory. Studying how nature heals.
                Building the ecosystems that heal with it.
              </p>
            </div>
            <div>
              <h4 className="text-glow-400 font-medium mb-4">Campuses</h4>
              <div className="space-y-2 text-cream-200/70 text-sm">
                <p>Biome Campus — L'Ange-Gardien, QC</p>
                <p>Grove Campus — Ottawa, ON</p>
              </div>
            </div>
            <div>
              <h4 className="text-glow-400 font-medium mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="mailto:jeeplalonde@gmail.com" className="block text-cream-200/70 hover:text-glow-400 transition-colors no-underline">
                  jeeplalonde@gmail.com
                </a>
                <a href="https://linkedin.com/in/jean-paullalonde/" target="_blank" rel="noopener noreferrer" className="block text-cream-200/70 hover:text-glow-400 transition-colors no-underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-forest-800 pt-8 text-center">
            <p className="text-cream-200/50 text-sm">
              &copy; {new Date().getFullYear()} BIOME Laboratories Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
