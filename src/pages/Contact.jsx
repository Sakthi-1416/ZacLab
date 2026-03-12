import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'

// 👇 Paste your deployed Apps Script Web App URL here
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwT0xdmqySmjqnVtt3_z26ZabtGNZ8ZnMECXvh4KQXFcjjw239-tyDbBrNLtWXUARYNYg/exec'

const faqs = [
  ['How long does a project take?', 'Depends on scope. A landing page might be 1-2 weeks. A full platform could be 2-3 months. We give you a realistic timeline upfront.'],
  ['Do you work with small budgets?', 'We work with a range of budgets. Tell us what you have and we\'ll tell you what\'s possible. No judgment.'],
  ['Can I hire you for ongoing work?', 'Absolutely. Many of our clients start with a project and move to a monthly retainer. We love long-term relationships.'],
  ['What if I don\'t know exactly what I need?', 'That\'s fine. We\'re used to working through fuzzy briefs. Just tell us the problem and we\'ll help figure out the solution.'],
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
  e.preventDefault()
  setLoading(true)
  setError('')
  try {
    const body = new URLSearchParams()
    body.append('name',    form.name)
    body.append('email',   form.email)
    body.append('service', form.service)
    body.append('message', form.message)

    await fetch(SHEET_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: body,
    })
    setSent(true)
  } catch (err) {
    setError('Something went wrong. Please try again or email us directly.')
  } finally {
    setLoading(false)
  }
}

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with Zac Lab. We respond within 24 hours. Start your project today." path="/contact" />
      <div className="page-gradient">
        <div style={{ paddingTop: '100px' }}>
          <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="orb orb-crimson" style={{ width: '600px', height: '600px', top: '-200px', left: '-200px', opacity: 0.15 }} />
            <div className="orb orb-deep"    style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px', opacity: 0.12 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="row g-5 align-items-start">
                {/* Left */}
                <div className="col-12 col-md-5">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '4px', color: 'var(--crimson-glow)', marginBottom: '1rem' }}>GET IN TOUCH</p>
                  <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(3rem,7.5vw,5.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                    <span className="shimmer-text">Let's talk<br />about it.</span>
                  </h1>
                  <div className="crimson-divider" />
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.9rem', marginBottom: '3rem' }}>
                    Whether you have a fully formed brief or just a vague idea — we're happy to chat.
                    Drop us a line and we'll get back to you within 24 hours.
                  </p>

                  {[['EMAIL', 'zaclabofficial.com'], ['RESPONSE TIME', 'Within 24 hours']].map(([label, val]) => (
                    <div key={label} style={{ marginBottom: '1.6rem' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--crimson-glow)', marginBottom: '0.35rem' }}>{label}</p>
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{val}</p>
                    </div>
                  ))}

                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--crimson-glow)', marginBottom: '0.8rem' }}>SOCIALS</p>
                  <div className="d-flex flex-wrap gap-3">
                    {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(s => (
                      <a key={s} href="#"
                        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '2px', textDecoration: 'none', transition: 'color 0.25s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson-glow)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >{s}</a>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <div className="col-12 col-md-7">
                  {sent ? (
                    <div className="zac-card" style={{ padding: '4rem', textAlign: 'center' }}>
                      <span className="glow-dot d-block mx-auto mb-4" style={{ width: '14px', height: '14px' }} />
                      <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', marginBottom: '1rem' }}>
                        <span className="shimmer-text">Got it.</span>
                      </h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We'll be in touch within 24 hours. Talk soon.</p>
                    </div>
                  ) : (
                    <div className="zac-card" style={{ padding: '2.5rem' }}>
                      <form onSubmit={submit}>
                        <div className="row g-4">
                          <div className="col-12 col-sm-6">
                            <label className="zac-input-label">Your Name</label>
                            <input className="zac-input" name="name" value={form.name} onChange={handle} placeholder="Max" required />
                          </div>
                          <div className="col-12 col-sm-6">
                            <label className="zac-input-label">Email Address</label>
                            <input className="zac-input" name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" required />
                          </div>
                          <div className="col-12">
                            <label className="zac-input-label" style={{ marginBottom: '0.7rem' }}>What do you need?</label>
                            <div className="d-flex flex-wrap gap-2">
                              {['Web Dev', 'UI/UX', 'SEO', 'Data Analytics', 'SMM', 'Not sure yet'].map(opt => (
                                <button key={opt} type="button"
                                  onClick={() => setForm(f => ({ ...f, service: f.service === opt ? '' : opt }))}
                                  style={{
                                    background: form.service === opt ? 'var(--crimson-deep)' : 'transparent',
                                    border: `1px solid ${form.service === opt ? 'var(--crimson-glow)' : 'rgba(139,26,42,0.28)'}`,
                                    color: form.service === opt ? '#fff' : 'var(--text-muted)',
                                    fontFamily: 'var(--font-display)', fontSize: '0.52rem', letterSpacing: '2px',
                                    padding: '0.4rem 0.9rem', cursor: 'pointer', transition: 'all 0.25s',
                                    boxShadow: form.service === opt ? '0 0 12px rgba(192,57,43,0.3)' : 'none',
                                  }}
                                >{opt}</button>
                              ))}
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="zac-input-label">Tell Us About Your Project</label>
                            <textarea className="zac-input" name="message" value={form.message} onChange={handle}
                              placeholder="What are you building? What's the timeline? What's the problem you're solving?"
                              rows={5} required style={{ resize: 'none' }}
                            />
                          </div>

                          {error && (
                            <div className="col-12">
                              <p style={{ color: 'var(--crimson-glow)', fontSize: '0.82rem', margin: 0 }}>{error}</p>
                            </div>
                          )}

                          <div className="col-12">
                            <button type="submit" className="btn-zac-filled" disabled={loading}>
                              {loading ? 'Sending…' : 'Send Message →'}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* FAQ */}
          <section style={{ padding: '4rem 0 6rem' }}>
            <div className="container">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '4px', color: 'var(--crimson-glow)', marginBottom: '0.8rem' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '3rem' }}>
                <span className="shimmer-text">Good questions</span>
              </h2>
              <div className="row g-4">
                {faqs.map(([q, a]) => (
                  <div key={q} className="col-12 col-md-6">
                    <div style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(139,26,42,0.15)' }}>
                      <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', letterSpacing: '2px', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{q}</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.85' }}>{a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
