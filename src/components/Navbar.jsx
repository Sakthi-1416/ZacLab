import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className={`zac-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" className="zac-logo">Zac</Link>

        {/* Desktop */}
        <div className="d-none d-md-flex align-items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link-zac${pathname === l.to ? ' active' : ''}`}
            >{l.label}</Link>
          ))}
          <Link to="/contact" className="btn-zac ms-3" style={{ fontSize: '0.58rem', padding: '0.5rem 1.4rem' }}>
            Hire Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="d-md-none border-0"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'transparent', padding: '0.3rem 0.5rem', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '1px',
                background: open && i===1 ? 'transparent' : 'var(--text-primary)',
                transition: 'all 0.3s',
                transform: open ? (i===0 ? 'rotate(45deg) translate(4px,4px)' : i===2 ? 'rotate(-45deg) translate(4px,-4px)' : '') : 'none'
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        maxHeight: open ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        background: 'rgba(6,6,6,0.98)',
        borderTop: open ? '1px solid rgba(139,26,42,0.18)' : 'none',
      }}>
        <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link-zac d-block py-2${pathname === l.to ? ' active' : ''}`}
            >{l.label}</Link>
          ))}
          <Link to="/contact" className="btn-zac mt-3 d-inline-block">Hire Us</Link>
        </div>
      </div>
    </nav>
  )
}
