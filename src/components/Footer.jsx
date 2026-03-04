import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="zac-footer">
      <div className="container">
        <div className="row g-5 mb-4">
          {/* Brand */}
          <div className="col-12 col-md-4">
            <span className="zac-logo d-block mb-3" style={{ fontSize: '2.2rem' }}>Zac</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: '1.85', maxWidth: '270px' }}>
              Just some persons with skill and wifi.
              We build things that actually work.
            </p>
          </div>

          {/* Nav */}
          <div className="col-6 col-md-2">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '3px', color: 'var(--crimson-glow)', marginBottom: '1rem' }}>NAVIGATE</p>
            {[['Home','/'],['About','/about'],['Services','/services'],['Portfolio','/portfolio'],['Contact','/contact']].map(([label,to]) => (
              <Link key={to} to={to} style={{
                display: 'block', color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.82rem', marginBottom: '0.55rem', transition: 'color 0.25s'
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{label}</Link>
            ))}
          </div>

          {/* Services */}
          <div className="col-6 col-md-2">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '3px', color: 'var(--crimson-glow)', marginBottom: '1rem' }}>SERVICES</p>
            {['Web Deployment','UI/UX','SEO','Data Analytics','SMM'].map(s => (
              <p key={s} style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.55rem' }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '3px', color: 'var(--crimson-glow)', marginBottom: '1rem' }}>GET IN TOUCH</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>hello@zacstudio.com</p>
            <div className="d-flex flex-wrap gap-3">
              {['Twitter','LinkedIn','Dribbble','GitHub'].map(s => (
                <a key={s} href="#" style={{
                  color: 'var(--text-muted)', fontSize: '0.6rem',
                  fontFamily: 'var(--font-display)', letterSpacing: '2px',
                  textDecoration: 'none', transition: 'color 0.25s'
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson-glow)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(139,26,42,0.14)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.8rem'
        }}>
          <p style={{ color: 'rgba(160,152,144,0.38)', fontSize: '0.65rem', fontFamily: 'var(--font-display)', letterSpacing: '2.5px' }}>
            © {year} ZAC STUDIO — SKILL & WIFI
          </p>
          <p style={{ color: 'rgba(160,152,144,0.38)', fontSize: '0.65rem', fontFamily: 'var(--font-display)', letterSpacing: '2.5px' }}>
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}
