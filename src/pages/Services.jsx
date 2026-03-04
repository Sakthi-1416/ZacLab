import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { num:'01', title:'Web Deployment',   short:'From dev to live — we handle everything.',    desc:'We architect, build, and launch high-performance websites and web apps. From server setup to CI/CD pipelines, we make sure your product hits the internet the right way.', tags:['React','Next.js','Node.js','AWS','Vercel'] },
  { num:'02', title:'UI/UX Design',     short:'Interfaces people actually want to use.',      desc:'We design with purpose. Every flow, every interaction, every screen is crafted to reduce friction and increase delight. Good UX isn\'t magic — it\'s just careful thinking.',  tags:['Figma','Prototyping','User Research','Wireframing'] },
  { num:'03', title:'SEO',              short:'Be found. Stay found.',                        desc:'Technical SEO, content strategy, keyword research, on-page optimization — we do the work that puts you where your customers are looking. No black hat tricks.',           tags:['Technical SEO','Content Strategy','Analytics','Local SEO'] },
  { num:'04', title:'Data Analytics',   short:'Turn numbers into decisions.',                 desc:'We set up dashboards, track the metrics that matter, and help you understand what your data is actually saying. Because guessing is expensive.',                           tags:['GA4','Looker Studio','SQL','Python','Power BI'] },
  { num:'05', title:'SMM',              short:'Content that connects, not just posts.',       desc:'We build social media strategies rooted in your brand identity. From content calendars to community management, we keep your audience engaged and growing.',               tags:['Instagram','LinkedIn','Content Creation','Paid Social'] },
]

// Roadmap: alternates left / right — perfectly aligned to center spine
const roadmapItems = [
  { side:'left',  num:'01', title:'Web Deployment',   icon:'⚡', desc:'High-performance websites and web apps. From architecture to CI/CD pipelines — shipped right.' },
  { side:'right', num:'02', title:'UI/UX Design',     icon:'✦', desc:'Every flow, every screen designed to reduce friction and increase delight.' },
  { side:'left',  num:'03', title:'SEO',              icon:'◎', desc:'Technical SEO and content strategy that puts you where your customers are searching.' },
  { side:'right', num:'04', title:'Data Analytics',   icon:'◈', desc:'Dashboards and pipelines that turn raw numbers into decisions you can act on.' },
  { side:'left',  num:'05', title:'SMM',              icon:'❋', desc:'Social strategy rooted in your brand — content that connects, not just posts.' },
]

const steps = [
  { num:'01', title:'Discovery',       desc:'We listen first. Deep dive into your goals, audience, and constraints before touching anything.' },
  { num:'02', title:'Strategy',        desc:'We map out the path — tools, timeline, deliverables. No surprises, no guesswork.' },
  { num:'03', title:'Execution',       desc:'We build with intent. Regular updates, open channels, no radio silence.' },
  { num:'04', title:'Launch & Beyond', desc:'Go live is just the beginning. We stick around to iterate, optimise, and grow.' },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <>
      {/* ─── SEO: structured data ─── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Zac Studio Services",
        "provider": { "@type": "Organization", "name": "Zac Studio" },
        "serviceType": ["Web Development","UI/UX Design","SEO","Data Analytics","Social Media Marketing"],
        "areaServed": "Worldwide",
        "description": "Freelance services: web deployment, UI/UX design, SEO, data analytics, and social media marketing."
      })}} />

      <div className="page-gradient">
        <div style={{ paddingTop: '100px' }}>

          {/* ── HEADER ── */}
          <section style={{ padding: '5rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient orb */}
            <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-200px', left:'-100px' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'1rem', textTransform:'uppercase' }}>
                What We Do
              </p>
              <h1 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(3rem,8vw,6rem)', lineHeight:1.05, marginBottom:'1.5rem' }}>
                Our Services
              </h1>
              <p style={{ color:'var(--text-muted)', fontSize:'1rem', lineHeight:'1.85', maxWidth:'500px' }}>
                Five disciplines. One tight-knit team. Everything you need to build, launch, and grow online — without the agency overhead.
              </p>
            </div>
          </section>

          <div className="shine-divider" />

          {/* ── ROADMAP (zigzag timeline) ── */}
          <section style={{ padding:'5rem 0', position:'relative', overflow:'hidden' }}>
            <div className="orb orb-deep" style={{ width:'600px', height:'600px', top:'10%', right:'-200px', opacity:0.12 }} />

            <div className="container">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'0.8rem', textTransform:'uppercase' }}>The Full Picture</p>
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'4rem' }}>
                What we offer
              </h2>

              <div className="roadmap-wrapper">
                {/* Vertical spine */}
                <div className="roadmap-spine d-none d-md-block" />

                {roadmapItems.map((item, i) => (
                  <div key={i} className={`roadmap-row ${item.side}`}>
                    {/* Content card */}
                    <div className="roadmap-content">
                      <div className="roadmap-card">
                        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.6rem',
                          justifyContent: item.side === 'left' ? 'flex-end' : 'flex-start' }}>
                          <span style={{ fontSize:'1.1rem', color:'var(--crimson-glow)' }}>{item.icon}</span>
                          <span style={{ fontFamily:'var(--font-display)', fontSize:'0.52rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
                        </div>
                        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.9rem', letterSpacing:'2px', marginBottom:'0.6rem', color:'var(--text-primary)' }}>{item.title}</h3>
                        <p style={{ color:'var(--text-muted)', fontSize:'0.84rem', lineHeight:'1.8' }}>{item.desc}</p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="roadmap-node d-none d-md-flex">
                      <div className="roadmap-node-inner" />
                    </div>

                    {/* Empty half */}
                    <div className="roadmap-empty d-none d-md-block" />
                  </div>
                ))}
              </div>

              {/* Mobile: simple stacked cards */}
              <div className="d-md-none">
                {roadmapItems.map((item, i) => (
                  <div key={i} style={{ display:'flex', gap:'1rem', marginBottom:'2rem', alignItems:'flex-start' }}>
                    <div style={{ flexShrink:0, marginTop:'0.3rem' }}>
                      <div style={{ width:'32px', height:'32px', borderRadius:'50%', background:'var(--dark-card)', border:'2px solid var(--crimson-mid)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--crimson-glow)', boxShadow:'0 0 8px var(--crimson-glow)' }} />
                      </div>
                    </div>
                    <div className="roadmap-card" style={{ flex:1 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.5rem' }}>
                        <span style={{ fontSize:'1rem', color:'var(--crimson-glow)' }}>{item.icon}</span>
                        <span style={{ fontFamily:'var(--font-display)', fontSize:'0.52rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
                      </div>
                      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.88rem', letterSpacing:'2px', marginBottom:'0.5rem' }}>{item.title}</h3>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.83rem', lineHeight:'1.8' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* ── INTERACTIVE SERVICE DETAIL ── */}
          <section style={{ padding:'5rem 0' }}>
            <div className="container">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>DEEP DIVE</p>
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'3rem' }}>Explore each service</h2>

              <div className="row g-5">
                {/* List */}
                <div className="col-12 col-md-5">
                  {services.map((s,i) => (
                    <div key={i} onClick={() => setActive(i)} role="button" aria-label={`View ${s.title} details`} style={{
                      padding:'1.4rem 0 1.4rem 1.2rem',
                      borderBottom:'1px solid rgba(139,26,42,0.15)',
                      borderLeft: active===i ? '2px solid var(--crimson-glow)' : '2px solid transparent',
                      cursor:'pointer', transition:'all 0.25s',
                      background: active===i ? 'rgba(107,15,26,0.08)' : 'transparent',
                    }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <div>
                          <span style={{ fontFamily:'var(--font-display)', fontSize:'0.52rem', letterSpacing:'3px', color: active===i ? 'var(--crimson-glow)' : 'var(--text-muted)' }}>{s.num}</span>
                          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.88rem', letterSpacing:'2px', color: active===i ? 'var(--text-primary)' : 'var(--text-muted)', marginTop:'0.3rem', transition:'color 0.25s' }}>{s.title}</h3>
                        </div>
                        <span style={{ color: active===i ? 'var(--crimson-glow)' : 'transparent', transition:'color 0.25s', fontSize:'0.9rem' }}>→</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detail */}
                <div className="col-12 col-md-7">
                  <div className="zac-card" style={{ padding:'2.5rem', minHeight:'320px' }}>
                    <div className="service-number">{services[active].num}</div>
                    <h2 style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>{services[active].title}</h2>
                    <p className="shimmer-crimson" style={{ fontFamily:'var(--font-display)', fontSize:'0.65rem', letterSpacing:'2px', marginBottom:'1.5rem' }}>{services[active].short}</p>
                    <div className="crimson-divider" />
                    <p style={{ color:'var(--text-muted)', lineHeight:'1.9', fontSize:'0.9rem', marginBottom:'2rem' }}>{services[active].desc}</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {services[active].tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                    </div>
                    <Link to="/contact" className="btn-zac">Get a Quote →</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* ── PROCESS STEPS ── */}
          <section style={{ padding:'5rem 0 6rem', position:'relative' }}>
            <div className="orb orb-crimson" style={{ width:'400px', height:'400px', bottom:'-100px', left:'-100px', opacity:0.1 }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>HOW IT WORKS</p>
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'3.5rem' }}>Our process</h2>

              <div className="row g-4">
                {steps.map((s,i) => (
                  <div key={s.num} className="col-12 col-sm-6 col-md-3">
                    <div className="zac-card h-100" style={{ padding:'2rem' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'0.8rem', marginBottom:'1.2rem' }}>
                        <span className="glow-dot" />
                        <span style={{ fontFamily:'var(--font-display)', fontSize:'0.52rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>STEP {s.num}</span>
                      </div>
                      <h4 style={{ fontFamily:'var(--font-display)', fontSize:'0.8rem', letterSpacing:'2px', marginBottom:'0.8rem', color:'var(--text-primary)' }}>{s.title}</h4>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.84rem', lineHeight:'1.82' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section style={{ padding:'4rem 0 6rem', textAlign:'center', background:'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(107,15,26,0.45) 0%, transparent 70%)' }}>
            <div className="container">
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.8rem)', marginBottom:'2rem' }}>
                Ready to get started?
              </h2>
              <Link to="/contact" className="btn-zac-filled">Let's Talk →</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
