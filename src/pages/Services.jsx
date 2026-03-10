import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { num:'01', title:'Web Deployment',   short:'From dev to live — we handle everything.',    desc:'We architect, build, and launch high-performance websites and web apps. From server setup to CI/CD pipelines, we make sure your product hits the internet the right way.', tags:['React','Next.js','Node.js','AWS','Vercel'] },
  { num:'02', title:'UI/UX Design',     short:'Interfaces people actually want to use.',      desc:'We design with purpose. Every flow, every interaction, every screen is crafted to reduce friction and increase delight. Good UX isn\'t magic — it\'s just careful thinking.',  tags:['Figma','Prototyping','User Research','Wireframing'] },
  { num:'03', title:'SEO',              short:'Be found. Stay found.',                        desc:'Technical SEO, content strategy, keyword research, on-page optimization — we do the work that puts you where your customers are looking. No black hat tricks.',           tags:['Technical SEO','Content Strategy','Analytics','Local SEO'] },
  { num:'04', title:'Data Analytics',   short:'Turn numbers into decisions.',                 desc:'We set up dashboards, track the metrics that matter, and help you understand what your data is actually saying. Because guessing is expensive.',                           tags:['GA4','Looker Studio','SQL','Python','Power BI'] },
  { num:'05', title:'SMM',              short:'Content that connects, not just posts.',       desc:'We build social media strategies rooted in your brand identity. From content calendars to community management, we keep your audience engaged and growing.',               tags:['Instagram','LinkedIn','Content Creation','Paid Social'] },
]

const roadmapItems = [
  { num:'01', title:'Web Deployment',  icon:'⚡', color:'#8b1a2a', desc:'High-performance sites and web apps. Architecture to CI/CD — shipped right.' },
  { num:'02', title:'UI/UX Design',    icon:'✦',  color:'#6b2a1a', desc:'Every flow and screen designed to reduce friction and increase delight.' },
  { num:'03', title:'SEO',             icon:'◎',  color:'#1a4a2a', desc:'Technical SEO and content strategy that surfaces you where customers search.' },
  { num:'04', title:'Data Analytics',  icon:'◈',  color:'#1a2a4a', desc:'Dashboards and pipelines turning raw numbers into clear decisions.' },
  { num:'05', title:'SMM',             icon:'❋',  color:'#4a1a3a', desc:'Social strategy rooted in your brand — content that truly connects.' },
]

const steps = [
  { num:'01', title:'Discovery',       desc:'We listen first. Deep dive into your goals, audience, and constraints before touching anything.' },
  { num:'02', title:'Strategy',        desc:'We map out the path — tools, timeline, deliverables. No surprises, no guesswork.' },
  { num:'03', title:'Execution',       desc:'We build with intent. Regular updates, open channels, no radio silence.' },
  { num:'04', title:'Launch & Beyond', desc:'Go live is just the beginning. We stick around to iterate, optimise, and grow.' },
]

/* ── Horizontal scroll roadmap with connecting dotted SVG path ── */
function HorizontalRoadmap() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'auto', paddingBottom: '2rem' }}
      className="hide-scroll">
      <div style={{ minWidth: '900px', position: 'relative', padding: '3rem 3rem 4rem' }}>

        {/* SVG connecting path beneath nodes */}
        <svg
          viewBox="0 0 900 160"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: '60px', left: 0, width: '100%', height: '160px', pointerEvents: 'none' }}
        >
          <defs>
            <filter id="pathglow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            {/* <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(192,57,43,0)" />
              <stop offset="20%"  stopColor="rgba(192,57,43,0.8)" />
              <stop offset="50%"  stopColor="rgba(255,255,255,0.9)" />
              <stop offset="80%"  stopColor="rgba(192,57,43,0.8)" />
              <stop offset="100%" stopColor="rgba(192,57,43,0)" />
            </linearGradient> */}
          </defs>

          {/* Glow underlayer */}
          <path
            d="M 80 40 C 160 40, 160 120, 260 120 S 380 40, 450 40 S 560 120, 640 120 S 760 40, 820 40"
            fill="none"
            stroke="rgba(192,57,43,0.25)"
            strokeWidth="8"
            strokeDasharray="10 12"
            filter="url(#pathglow)"
          />
          {/* Main dotted wave */}
          <path
            className="wave-path"
            d="M 80 40 C 160 40, 160 120, 260 120 S 380 40, 450 40 S 560 120, 640 120 S 760 40, 820 40"
            fill="none"
            stroke="url(#pathGrad)"
            strokeWidth="1.8"
            strokeDasharray="8 10"
            opacity="0.85"
          />

          {/* Node halos */}
          {[80,260,450,640,820].map((cx, i) => {
            const cy = i % 2 === 0 ? 40 : 120
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="18" fill="rgba(107,15,26,0.3)" />
                <circle cx={cx} cy={cy} r="12" fill="rgba(107,15,26,0.5)" />
                <circle cx={cx} cy={cy} r="6" fill="#c0392b"
                  style={{ filter:'drop-shadow(0 0 8px #c0392b) drop-shadow(0 0 16px rgba(192,57,43,0.6))' }} />
              </g>
            )
          })}
        </svg>

        {/* Cards row */}
        <div style={{ display: 'flex', gap: '0', position: 'relative', zIndex: 2 }}>
          {roadmapItems.map((item, i) => {
            const isUp = i % 2 === 0
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: isUp ? '0' : '140px',
                  paddingBottom: isUp ? '140px' : '0',
                  transition: 'all 0.3s',
                }}
              >
                {/* Card */}
                <div style={{
                  background: hovered === i
                    ? `linear-gradient(135deg, ${item.color}88, rgba(19,19,19,0.98))`
                    : 'var(--dark-card)',
                  border: `1px solid ${hovered === i ? 'rgba(192,57,43,0.6)' : 'rgba(139,26,42,0.22)'}`,
                  padding: '1.4rem 1.2rem',
                  width: '90%',
                  transition: 'all 0.35s',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: hovered === i
                    ? `0 8px 40px rgba(107,15,26,0.45), 0 0 0 1px rgba(192,57,43,0.15), inset 0 0 30px rgba(192,57,43,0.05)`
                    : 'none',
                  transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                }}>
                  {/* Shine sweep */}
                  <div style={{
                    position: 'absolute', top: 0, left: hovered === i ? '120%' : '-60%',
                    width: '40%', height: '100%',
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,180,160,0.08) 50%, transparent 70%)',
                    transition: 'left 0.6s ease',
                    pointerEvents: 'none',
                    transform: 'skewX(-20deg)',
                  }} />

                  <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.8rem' }}>
                    <span style={{ fontSize:'1.2rem', filter: hovered===i ? 'drop-shadow(0 0 6px rgba(192,57,43,0.7))' : 'none', transition:'filter 0.3s' }}>{item.icon}</span>
                    <span style={{ fontFamily:'var(--font-display)', fontSize:'0.5rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
                  </div>
                  <h3 style={{
                    fontFamily:'var(--font-display)', fontSize:'0.78rem', letterSpacing:'2px',
                    color: hovered===i ? 'var(--text-primary)' : 'rgba(240,236,228,0.85)',
                    marginBottom:'0.6rem', transition:'color 0.3s'
                  }}>{item.title}</h3>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.76rem', lineHeight:'1.7' }}>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ── Mobile: vertical cards with dotted left rail ── */
function MobileRoadmap() {
  return (
    <div style={{ position:'relative', paddingLeft:'2.5rem' }}>
      {/* Left rail */}
      <div style={{
        position:'absolute', left:'10px', top:'12px', bottom:'12px', width:'1px',
        background:'linear-gradient(180deg, transparent, rgba(192,57,43,0.6) 10%, rgba(192,57,43,0.6) 90%, transparent)',
      }}>
        <div style={{
          position:'absolute', top:0, left:'-1px', width:'3px', height:'50px',
          background:'linear-gradient(180deg, transparent, var(--crimson-glow), transparent)',
          boxShadow:'0 0 10px var(--crimson-glow)',
          animation:'spine-glow 3s ease-in-out infinite',
        }} />
      </div>

      {roadmapItems.map((item, i) => (
        <div key={i} style={{ position:'relative', marginBottom: i < roadmapItems.length-1 ? '2rem' : 0 }}>
          {/* Node */}
          <div style={{
            position:'absolute', left:'-2.5rem', top:'1.2rem',
            width:'20px', height:'20px', borderRadius:'50%',
            background:'var(--dark-card)', border:'2px solid var(--crimson-mid)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 0 12px rgba(192,57,43,0.3)',
          }}>
            <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--crimson-glow)', boxShadow:'0 0 6px var(--crimson-glow)' }} />
          </div>

          {/* Card */}
          <div style={{
            background:'var(--dark-card)', border:'1px solid rgba(139,26,42,0.22)',
            padding:'1.4rem 1.4rem', position:'relative', overflow:'hidden',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.6rem' }}>
              <span style={{ fontSize:'1rem', color:'var(--crimson-glow)' }}>{item.icon}</span>
              <span style={{ fontFamily:'var(--font-display)', fontSize:'0.5rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
            </div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.85rem', letterSpacing:'2px', marginBottom:'0.5rem', color:'var(--text-primary)' }}>{item.title}</h3>
            <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:'1.78' }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <>
      <style>{`
        .hide-scroll::-webkit-scrollbar { height: 3px; }
        .hide-scroll::-webkit-scrollbar-track { background: transparent; }
        .hide-scroll::-webkit-scrollbar-thumb { background: rgba(139,26,42,0.4); border-radius: 2px; }
        @keyframes spine-glow {
          0%   { top: -10%; opacity: 0.8; }
          100% { top: 110%; opacity: 0.3; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Service",
        "name":"Zac Lab Services","provider":{"@type":"Organization","name":"Zac Lab"},
        "serviceType":["Web Development","UI/UX Design","SEO","Data Analytics","Social Media Marketing"],
        "areaServed":"Worldwide"
      })}} />

      <div className="page-gradient">
        <div style={{ paddingTop:'100px' }}>

          {/* ── HEADER ── */}
          <section style={{ padding:'5rem 0 3rem', position:'relative', overflow:'hidden' }}>
            <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-200px', left:'-100px' }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'1rem', textTransform:'uppercase' }}>What We Do</p>
              <h1 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(3rem,8vw,6rem)', lineHeight:1.05, marginBottom:'1.5rem' }}>Our Services</h1>
              <p style={{ color:'var(--text-muted)', fontSize:'1rem', lineHeight:'1.85', maxWidth:'500px' }}>
                Five disciplines. One tight-knit team. Everything you need to build, launch, and grow — without the agency overhead.
              </p>
            </div>
          </section>

          <div className="shine-divider" />

          {/* ── ROADMAP ── */}
          <section style={{ padding:'5rem 0', position:'relative', overflow:'hidden' }}>
            <div className="orb orb-deep" style={{ width:'600px', height:'600px', top:'0%', right:'-200px', opacity:0.1 }} />

            {/* <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'0.8rem', textTransform:'uppercase' }}>The Full Picture</p>
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'3.5rem' }}>What we offer</h2>
            </div> */}

            {/* Desktop horizontal roadmap — full bleed */}
            <div className="d-none d-md-block" style={{ position:'relative', zIndex:1 }}>
              <HorizontalRoadmap />
            </div>

            {/* Mobile vertical */}
            <div className="d-md-none container" style={{ position:'relative', zIndex:1 }}>
              <MobileRoadmap />
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
                        <span style={{ color: active===i ? 'var(--crimson-glow)' : 'transparent', transition:'color 0.25s' }}>→</span>
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

          {/* ── PROCESS ── */}
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
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-script)', fontSize:'clamp(2rem,5vw,3.8rem)', marginBottom:'2rem' }}>Ready to get started?</h2>
              <Link to="/contact" className="btn-zac-filled">Let's Talk →</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
