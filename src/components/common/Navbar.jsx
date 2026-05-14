import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { navLinks } from '../../utils/content'
import Button from './Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useScrollDirection()
  const { pathname } = useLocation()
  const isHomeHero = pathname === '/' && !isScrolled && !isOpen
  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    `relative text-xs font-semibold uppercase tracking-[0.24em] transition ${
      isHomeHero ? 'text-white/75 hover:text-white' : 'text-charcoal/65 hover:text-charcoal'
    } ${isActive ? (isHomeHero ? 'text-white' : 'text-charcoal') : ''}`

  return (
    <motion.header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isHomeHero ? 'bg-transparent' : 'bg-ivory/92 shadow-soft backdrop-blur-xl'
      }`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link
          to="/"
          className={`font-display text-2xl font-semibold ${isHomeHero ? 'text-white' : 'text-charcoal'}`}
          onClick={closeMenu}
        >
          Aurelia
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.path} className={linkClass}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-current transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Button
          to="/contact"
          variant={isHomeHero ? 'secondary' : 'outline'}
          className="hidden px-5 py-3 text-xs lg:inline-flex"
        >
          Book Consultation
        </Button>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center border transition lg:hidden ${
            isHomeHero ? 'border-white/35 text-white' : 'border-charcoal/15 text-charcoal'
          }`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          className="border-t border-charcoal/10 bg-ivory px-5 py-6 shadow-soft lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-[0.24em] ${
                    isActive ? 'text-charcoal' : 'text-charcoal/65'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2" onClick={closeMenu}>
              Book Consultation
            </Button>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  )
}

export default Navbar
