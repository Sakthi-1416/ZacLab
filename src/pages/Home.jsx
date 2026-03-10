import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const roadmapItems = [
  { num:'01', title:'Web Deployment',  icon:'⚡', color:'#5a0f18', desc:'From architecture to CI/CD — your site, live and fast.' },
  { num:'02', title:'UI/UX Design',    icon:'✦',  color:'#5a2010', desc:'Every screen crafted to delight and convert.' },
  { num:'03', title:'SEO',             icon:'◎',  color:'#103a1e', desc:'Be found exactly where your customers are searching.' },
  { num:'04', title:'Data Analytics',  icon:'◈',  color:'#101e3a', desc:'Turn raw numbers into decisions you can act on.' },
  { num:'05', title:'SMM',             icon:'❋',  color:'#3a1030', desc:'Content that truly connects — not just scheduled posts.' },
]

function HomeRoadmap() {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ position:'relative', width:'100%', overflowX:'auto', paddingBottom:'1rem' }} className="hide-scroll">
      <div style={{ minWidth:'760px', position:'relative', padding:'2.5rem 4rem 4rem' }}>
        <svg viewBox="0 0 900 160" preserveAspectRatio="none"
          style={{ position:'absolute', top:'55px', left:0, width:'100%', height:'160px', pointerEvents:'none' }}>
          <defs>
            <filter id="hglow2"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            {/* <linearGradient id="hpathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(192,57,43,0)" />
              <stop offset="25%"  stopColor="rgba(192,57,43,0.75)" />
              <stop offset="50%"  stopColor="rgba(255,255,255,0.88)" />
              <stop offset="75%"  stopColor="rgba(192,57,43,0.75)" />
              <stop offset="100%" stopColor="rgba(192,57,43,0)" />
            </linearGradient> */}
          </defs>
          <path d="M 80 40 C 160 40, 160 120, 260 120 S 380 40, 450 40 S 560 120, 640 120 S 760 40, 820 40"
            fill="none" stroke="rgba(192,57,43,0.22)" strokeWidth="8" strokeDasharray="10 12" filter="url(#hglow2)" />
          <path className="wave-path"
            d="M 80 40 C 160 40, 160 120, 260 120 S 380 40, 450 40 S 560 120, 640 120 S 760 40, 820 40"
            fill="none" stroke="url(#hpathGrad2)" strokeWidth="1.8" strokeDasharray="8 10" opacity="0.85" />
          {[80,260,450,640,820].map((cx,i) => {
            const cy = i%2===0 ? 40 : 120
            return <g key={i}>
              <circle cx={cx} cy={cy} r="16" fill="rgba(107,15,26,0.28)" />
              <circle cx={cx} cy={cy} r="5.5" fill="#c0392b" style={{ filter:'drop-shadow(0 0 7px #c0392b) drop-shadow(0 0 16px rgba(192,57,43,0.55))' }} />
            </g>
          })}
        </svg>

        <div style={{ display:'flex', gap:'0', position:'relative', zIndex:2 }}>
          {roadmapItems.map((item,i) => {
            const isUp = i%2===0
            return (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center',
                  paddingTop: isUp ? '0' : '130px', paddingBottom: isUp ? '130px' : '0' }}>
                <div style={{
                  background: hovered===i ? `linear-gradient(135deg, ${item.color}cc, var(--bg-card))` : 'var(--bg-card)',
                  border:`1px solid ${hovered===i ? 'rgba(192,57,43,0.6)' : 'var(--border-card)'}`,
                  padding:'1.2rem 1rem', width:'90%',
                  transition:'all 0.32s', position:'relative', overflow:'hidden',
                  boxShadow: hovered===i ? `0 8px 36px rgba(107,15,26,0.35)` : 'none',
                  transform: hovered===i ? 'scale(1.05)' : 'scale(1)',
                }}>
                  <div style={{ position:'absolute', top:0, left: hovered===i ? '120%' : '-60%', width:'40%', height:'100%',
                    background:'linear-gradient(105deg, transparent 30%, rgba(255,180,160,0.07) 50%, transparent 70%)',
                    transition:'left 0.55s ease', pointerEvents:'none', transform:'skewX(-20deg)' }} />
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.6rem' }}>
                    <span style={{ fontSize:'1rem', filter: hovered===i ? 'drop-shadow(0 0 5px rgba(192,57,43,0.8))' : 'none', transition:'filter 0.3s' }}>{item.icon}</span>
                    <span style={{ fontFamily:'var(--font-display)', fontSize:'0.48rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
                  </div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(0.65rem,1.2vw,0.74rem)', letterSpacing:'2px',
                    color: 'var(--text-primary)', marginBottom:'0.5rem', transition:'color 0.3s' }}>{item.title}</h3>
                  <p style={{ color:'var(--text-muted)', fontSize:'clamp(0.65rem,1.1vw,0.72rem)', lineHeight:'1.7' }}>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const sparkles = [
  {left:'15%',top:'20%',delay:'0s'}, {left:'80%',top:'15%',delay:'0.8s'},
  {left:'60%',top:'70%',delay:'1.5s'}, {left:'35%',top:'55%',delay:'0.4s'},
  {left:'90%',top:'50%',delay:'2s'}, {left:'5%',top:'75%',delay:'1.2s'},
]

const whyUs = [
  ['01','Direct Communication','You talk to the people doing the work. No account managers, no confusion.'],
  ['02','Fast Turnaround','We ship fast without cutting corners. Quality and speed aren\'t mutually exclusive.'],
  ['03','Transparent Pricing','No surprises. You know what you\'re paying for from day one.'],
  ['04','Post-Launch Support','We don\'t disappear after launch. We\'re here when things need fixing or growing.'],
]

export default function Home() {
  return (
    <>
      <SEOHead title="Home" description="Zac Lab is a small, skilled freelance team offering web deployment, UI/UX, SEO, data analytics, and social media marketing." path="/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Organization",
        "name":"Zac Lab","url":"https://zaclab.in",
        "description":"Freelance agency: web deployment, UI/UX, SEO, data analytics, SMM.",
        "contactPoint":{"@type":"ContactPoint","email":"zaclabofficial.in.com","contactType":"customer service"}
      })}} />

      {/* ── HERO ── */}
      <section className="hero-gradient d-flex align-items-center"
        style={{ minHeight:'100vh', paddingTop:'80px', position:'relative', overflow:'hidden' }}>
        <div className="orb orb-crimson" style={{ width:'700px', height:'700px', top:'-200px', left:'-200px', opacity:0.22 }} />
        <div className="orb orb-deep"    style={{ width:'400px', height:'400px', bottom:'-100px', right:'-100px', opacity:0.15 }} />
        {sparkles.map((s,i) => (
          <div key={i} className="sparkle" style={{ left:s.left, top:s.top, animationDelay:s.delay, animationDuration:`${2+i*0.3}s` }} />
        ))}

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className="float-script" style={{ fontFamily:'var(--font-logo)', fontSize:'clamp(5rem,18vw,14rem)', lineHeight:0.9, fontWeight:700, letterSpacing:'4px', marginLeft:'-0.03em' }}>
                <span className="shimmer-text">Zac </span>
              </div>
            </div>
            <div className="col-12 col-lg-6 anim-fade-up anim-delay-1">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(0.58rem,1.2vw,0.68rem)', letterSpacing:'4px', marginBottom:'1.2rem', textTransform:'uppercase' }}>
                <span className="shimmer-crimson">Just some persons with skill and wifi</span>
              </p>
              <p style={{ color:'var(--text-muted)', fontSize:'clamp(0.85rem,1.5vw,0.95rem)', lineHeight:'1.9', marginBottom:'0.8rem' }}>
                Hey. We're Zac Lab. Nice to meet you.
              </p>
              <p style={{ color:'var(--text-faint)', fontSize:'clamp(0.82rem,1.4vw,0.9rem)', lineHeight:'1.9', marginBottom:'0.8rem' }}>
                If you've been looking for people who actually care about your business as much as you do,
                you're in the right place. We're a small group of freelancers who love building cool stuff that actually works.
              </p>
              <p style={{ color:'var(--text-faint)', fontSize:'clamp(0.8rem,1.3vw,0.88rem)', lineHeight:'1.9', marginBottom:'2.5rem' }}>
                So, what's on your mind? We're ready when you are.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/services" className="btn-zac-filled">Our Services</Link>
                <Link to="/contact"  className="btn-zac">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ROADMAP ── */}
      <section style={{ background:'var(--bg-section-alt)', padding:'5rem 0 4rem', position:'relative', overflow:'hidden' }}>
        <div className="orb orb-deep" style={{ width:'500px', height:'500px', top:'-100px', right:'0', opacity:0.15 }} />
        <div className="container mb-4" style={{ position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'0.6rem' }}>WHAT WE DO</p>
          <h2 className="shimmer-text" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'4px' }}>Our Services</h2>
        </div>

        {/* Desktop roadmap */}
        <div className="d-none d-md-block" style={{ position:'relative', zIndex:1 }}>
          <HomeRoadmap />
        </div>

        {/* Mobile stacked */}
        <div className="d-md-none container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ position:'relative', paddingLeft:'2.5rem' }}>
            <div style={{ position:'absolute', left:'10px', top:'12px', bottom:'12px', width:'1px',
              background:'linear-gradient(180deg, transparent, rgba(192,57,43,0.55) 10%, rgba(192,57,43,0.55) 90%, transparent)' }} />
            {roadmapItems.map((item,i) => (
              <div key={i} style={{ position:'relative', marginBottom: i<roadmapItems.length-1 ? '1.5rem' : 0 }}>
                <div style={{ position:'absolute', left:'-2rem', top:'1rem', width:'20px', height:'20px', borderRadius:'50%',
                  background:'var(--bg-card)', border:'2px solid var(--crimson-mid)',
                  display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 10px rgba(192,57,43,0.3)' }}>
                  <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--crimson-glow)', boxShadow:'0 0 6px var(--crimson-glow)' }} />
                </div>
                <div style={{ background:'var(--bg-card)', border:'1px solid var(--border-card)', padding:'1.2rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.5rem' }}>
                    <span style={{ fontSize:'1rem' }}>{item.icon}</span>
                    <span style={{ fontFamily:'var(--font-display)', fontSize:'0.5rem', letterSpacing:'3px', color:'var(--crimson-glow)' }}>{item.num}</span>
                  </div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.82rem', letterSpacing:'2px', marginBottom:'0.45rem', color:'var(--text-primary)' }}>{item.title}</h3>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', lineHeight:'1.75' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4" style={{ position:'relative', zIndex:1 }}>
          <Link to="/services" className="btn-zac" style={{ fontSize:'0.58rem' }}>View All Services →</Link>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background:'var(--bg-base)', padding:'6rem 0', position:'relative', overflow:'hidden' }}>
        <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'0', right:'-150px', opacity:0.1 }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div className="row g-5 align-items-center">
            <div className="col-12 col-md-5">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'1.5rem' }}>WHY CHOOSE ZAC LAB</p>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'3px', lineHeight:1.3, marginBottom:'1.5rem' }}>
                <span className="shimmer-text">Small team.<br />Big results.</span>
              </h2>
              <div className="crimson-divider" />
              <p style={{ color:'var(--text-muted)', lineHeight:'1.9', fontSize:'clamp(0.84rem,1.4vw,0.9rem)', marginBottom:'2rem' }}>
                We're not an agency with 200 employees. We're a tight-knit crew that actually cares —
                and it shows in everything we build.
              </p>
              <Link to="/about" className="btn-zac">Meet the Team →</Link>
            </div>
            <div className="col-12 col-md-7">
              <div className="row g-3">
                {whyUs.map(([num,title,desc]) => (
                  <div key={num} className="col-12 col-sm-6">
                    <div className="zac-card h-100">
                      <div className="service-number">{num}</div>
                      <h5 style={{ fontFamily:'var(--font-display)', fontSize:'0.78rem', letterSpacing:'2px', marginBottom:'0.8rem', color:'var(--text-primary)' }}>{title}</h5>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.84rem', lineHeight:'1.82' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'radial-gradient(ellipse 75% 90% at 50% 50%, rgba(107,15,26,0.45) 0%, transparent 68%), var(--bg-footer)',
        padding:'7rem 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="orb orb-crimson" style={{ width:'600px', height:'600px', top:'-200px', left:'50%', transform:'translateX(-50%)', opacity:0.15 }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'1.5rem' }}>READY TO START?</p>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4.5vw,3.5rem)', letterSpacing:'3px', marginBottom:'2.5rem' }}>
            <span className="shimmer-text">Let's build something<br />worth talking about.</span>
          </h2>
          <Link to="/contact" className="btn-zac-filled">Start a Project →</Link>
        </div>
      </section>
    </>
  )
}
