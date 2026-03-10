import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const projects = [
  { id:1, title:'Nomad Eats',    cat:'Web',    tags:['React','Node.js','UX'],   year:'2024', img:'/images/proj-nomadeats.svg', desc:'Full-stack food delivery platform. Custom order tracking, dynamic restaurant onboarding, mobile-first.' },
  { id:2, title:'Folio Studio',  cat:'Design', tags:['UI/UX','Figma'],          year:'2024', img:'/images/proj-folio.svg',     desc:'Portfolio builder for creatives. Drag-and-drop editor, template engine, CMS integration.' },
  { id:3, title:'GreenPath SEO', cat:'SEO',    tags:['SEO','Analytics'],        year:'2023', img:'/images/proj-greenpath.svg', desc:'11-month SEO campaign for a sustainable goods brand. Grew organic traffic 420%.' },
  { id:4, title:'Pulseboard',    cat:'Data',   tags:['Python','SQL','Looker'],  year:'2023', img:'/images/proj-pulse.svg',     desc:'Real-time analytics dashboard for a SaaS startup. Custom KPIs, automated reporting pipeline.' },
  { id:5, title:'Vero Apparel',  cat:'SMM',    tags:['Instagram','Content'],    year:'2023', img:'/images/proj-vero.svg',      desc:'Social media strategy and execution. Grew from 2k to 28k followers in 8 months.' },
  { id:6, title:'LexiCare',      cat:'Web',    tags:['Next.js','AWS'],          year:'2022', img:'/images/proj-lexi.svg',      desc:'Healthcare appointment booking system. HIPAA-compliant, multi-tenant, 99.9% uptime.' },
]

const testimonials = [
  { quote:'Zac Lab built our entire platform in 6 weeks. Clean code, clear communication, zero drama.',    name:'Sarah K.',  role:'Founder, Nomad Eats' },
  { quote:'Our organic traffic tripled. They actually explained what they were doing and why.',             name:'Marcus T.', role:'CMO, GreenPath' },
  { quote:'The dashboard they built changed how we make decisions. Simple, fast, and actually useful.',    name:'Priya M.',  role:'Head of Data, Pulseboard' },
]

const cats = ['All','Web','Design','SEO','Data','SMM']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.cat === filter)

  return (
    <>
      <SEOHead title="Portfolio" description="See our work: web apps, design systems, SEO campaigns, analytics dashboards, and social media strategy." path="/portfolio" />
      <div className="page-gradient">
        <div style={{ paddingTop:'100px' }}>

          <section style={{ padding:'5rem 0 2rem', position:'relative' }}>
            <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-150px', right:'-100px', opacity:0.12 }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'1rem' }}>OUR WORK</p>
              <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,6vw,4.5rem)', letterSpacing:'4px', marginBottom:'3rem' }}>
                <span className="shimmer-text">Portfolio</span>
              </h1>
              <div className="d-flex flex-wrap gap-2 mb-5">
                {cats.map(c => (
                  <button key={c} onClick={() => setFilter(c)} style={{
                    background: filter===c ? 'var(--crimson-deep)' : 'transparent',
                    border:`1px solid ${filter===c ? 'var(--crimson-glow)' : 'rgba(139,26,42,0.28)'}`,
                    color: filter===c ? '#fff' : 'var(--text-muted)',
                    fontFamily:'var(--font-display)', fontSize:'0.58rem', letterSpacing:'3px',
                    textTransform:'uppercase', padding:'0.45rem 1.1rem', cursor:'pointer', transition:'all 0.25s',
                    boxShadow: filter===c ? '0 0 16px rgba(192,57,43,0.3)' : 'none',
                  }}>{c}</button>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding:'0 0 5rem' }}>
            <div className="container">
              <div className="row g-4">
                {filtered.map((p,i) => (
                  <div key={p.id} className="col-12 col-md-6 col-lg-4">
                    <div className="zac-card h-100" style={{ padding:0, overflow:'hidden' }}>
                      <div style={{ width:'100%', height:'190px', overflow:'hidden' }}>
                        <img src={p.img} alt={p.title}
                          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                      </div>
                      <div style={{ padding:'1.6rem' }}>
                        <div className="service-number">{String(i+1).padStart(2,'0')} · {p.year}</div>
                        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.9rem', letterSpacing:'2px', marginBottom:'0.75rem', color:'var(--text-primary)' }}>{p.title}</h3>
                        <p style={{ color:'var(--text-muted)', fontSize:'0.84rem', lineHeight:'1.82', marginBottom:'1.2rem' }}>{p.desc}</p>
                        <div className="d-flex flex-wrap gap-2">
                          {p.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          <section style={{ padding:'5rem 0', position:'relative' }}>
            <div className="orb orb-crimson" style={{ width:'400px', height:'400px', bottom:'-80px', left:'-80px', opacity:0.1 }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>WHAT CLIENTS SAY</p>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'3px', marginBottom:'3rem' }}>
                <span className="shimmer-text">Kind words</span>
              </h2>
              <div className="row g-4">
                {testimonials.map((t,i) => (
                  <div key={i} className="col-12 col-md-4">
                    <div className="zac-card h-100">
                      <p style={{ color:'var(--crimson-glow)', fontSize:'2.5rem', fontFamily:'Georgia,serif', marginBottom:'1rem', lineHeight:1 }}>"</p>
                      <p style={{ color:'var(--text-muted)', lineHeight:'1.85', fontSize:'0.88rem', marginBottom:'1.5rem', fontStyle:'italic' }}>{t.quote}</p>
                      <div className="crimson-divider" style={{ width:'28px' }} />
                      <p style={{ fontFamily:'var(--font-display)', fontSize:'0.68rem', letterSpacing:'2px', marginTop:'1rem', color:'var(--text-primary)' }}>{t.name}</p>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.62rem' }}>{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding:'2rem 0 6rem', textAlign:'center' }}>
            <div className="container">
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,3.5vw,2.2rem)', letterSpacing:'3px', marginBottom:'2rem' }}>
                <span className="shimmer-text">Want to be next?</span>
              </h2>
              <Link to="/contact" className="btn-zac-filled">Start a Project →</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
