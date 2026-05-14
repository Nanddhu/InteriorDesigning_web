import { NavLink } from 'react-router-dom'
import { contactDetails, footerLinks, navLinks } from '../../utils/content'

function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-semibold">Aurelia</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
            Premium residential interiors shaped through calm composition,
            exacting detail, and beautifully restrained materials.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Explore</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.path} className="text-sm text-white/65 transition hover:text-white">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Contact</h3>
          <div className="mt-5 space-y-3">
            {contactDetails.map(({ label, icon: Icon }) => (
              <p key={label} className="flex items-center gap-3 text-sm text-white/65">
                <Icon size={16} />
                {label}
              </p>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
