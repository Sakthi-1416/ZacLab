import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../App'

const links = [
  { to:'/',          label:'Home'      },
  { to:'/about',     label:'About'     },
  { to:'/services',  label:'Services'  },
  { to:'/portfolio', label:'Portfolio' },
  { to:'/blog',      label:'Blog'      },
  { to:'/contact',   label:'Contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()
  const { theme, toggle }       = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className={`zac-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.5rem' }}>

        {/* Logo */}
        <Link to="/" aria-label="Zac Lab home"
          style={{ display:'flex', alignItems:'center', gap:'0.55rem', textDecoration:'none', flexShrink:0 }}>
          <img
            src="/zaclab-logo.webp"
            alt="Zac Lab"
            className="zac-logo-img"
            style={{
              filter: theme === 'light'
                ? 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))'
                : 'drop-shadow(0 0 6px rgba(192,57,43,0.35))',
            }}
          />
          {/* <span className="zac-logo-text">Zac Lab</span> */}
        </Link>

        {/* Desktop nav */}
        <div className="d-none d-lg-flex align-items-center gap-1" style={{ flex:1, justifyContent:'center' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`nav-link-zac${pathname === l.to ? ' active' : ''}`}
              aria-current={pathname === l.to ? 'page' : undefined}
            >{l.label}</Link>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', flexShrink:0 }}>
          <button onClick={toggle} className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <Link to="/contact" className="btn-zac d-none d-lg-inline-block"
            style={{ fontSize:'0.58rem', padding:'0.45rem 1.1rem' }}>
            Hire Us
          </Link>
          <button className="d-lg-none theme-toggle border-0"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span style={{ fontSize:'1.1rem', color:'var(--text-muted)', lineHeight:1 }}>
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div style={{
        maxHeight: open ? '520px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        background: theme === 'light' ? 'rgba(245,240,235,0.98)' : 'rgba(6,6,6,0.98)',
        borderTop: open ? '1px solid var(--border-subtle)' : 'none',
      }} aria-hidden={!open}>
        <div style={{ padding:'1rem 1rem 1.5rem', display:'flex', flexDirection:'column', gap:'0.1rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`nav-link-zac d-block py-2${pathname === l.to ? ' active' : ''}`}
            >{l.label}</Link>
          ))}
          <Link to="/contact" className="btn-zac mt-3" style={{ alignSelf:'flex-start' }}>Hire Us</Link>
        </div>
      </div>
    </nav>
  )
}
