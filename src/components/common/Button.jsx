import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-charcoal text-white hover:bg-champagne hover:text-charcoal border-charcoal',
  secondary:
    'border-white/45 text-white hover:border-white hover:bg-white hover:text-charcoal',
  outline:
    'border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white',
}

function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 border px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
