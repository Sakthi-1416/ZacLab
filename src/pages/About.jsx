import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const team = [
  { name:'Alex Rivera',  role:'Creative Director', img:'/images/team-1.svg' },
  { name:'Maya Chen',    role:'Lead Developer',    img:'/images/team-2.svg' },
  { name:'Sam Torres',   role:'UX Strategist',     img:'/images/team-3.svg' },
  { name:'Jordan Lee',   role:'Data & SEO',        img:'/images/team-4.svg' },
]

const stats = [['40+','Projects Delivered'],['5','Years Experience'],['3','Countries Served'],['98%','Client Satisfaction']]
const values = [
  ['Honesty',        'We tell you the truth even when it\'s not what you want to hear. That\'s how real partnerships work.'],
  ['Craft',          'Every pixel, every line of code is intentional. We don\'t ship work we\'re not proud of.'],
  ['Curiosity',      'We stay current because we genuinely love what we do. New tools, new ideas — always learning.'],
  ['Accountability', 'Mistakes happen. We own them fast and fix them faster.'],
]

export default function About() {
  return (
    <>
      <SEOHead title="About Us" description="Meet the Zac Lab team — a small group of skilled freelancers who care about your business as much as you do." path="/about" />
      <div className="page-gradient">
        <div style={{ paddingTop:'100px' }}>

          <section style={{ padding:'5rem 0 3rem', position:'relative' }}>
            <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-150px', left:'-100px' }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <div className="row g-5 align-items-end">
                <div className="col-12 col-md-6">
                  <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'1.2rem' }}>WHO WE ARE</p>
                  <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,5vw,3.5rem)', letterSpacing:'3px', lineHeight:1.2 }}>
                    <span className="shimmer-text">Just some persons<br />with skill and wifi</span>
                  </h1>
                </div>
                <div className="col-12 col-md-6">
                  <div className="crimson-divider" />
                  <p style={{ color:'var(--text-muted)', lineHeight:'1.9', fontSize:'0.92rem', marginBottom:'1rem' }}>
                    We started Zac Lab because we were tired of agencies that overpromise and underdeliver.
                    So we built what we wished existed — a small, skilled team that actually gives a damn.
                  </p>
                  <p style={{ color:'var(--text-faint)', lineHeight:'1.9', fontSize:'0.88rem' }}>
                    We've worked with startups, local businesses, and everyone in between. Every client gets the same level of attention.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* Stats */}
          <section style={{ padding:'4rem 0' }}>
            <div className="container">
              <div className="row g-4 text-center">
                {stats.map(([num,label]) => (
                  <div key={num} className="col-6 col-md-3">
                    <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,5vw,3.2rem)', lineHeight:1, fontWeight:600 }}>
                      <span className="shimmer-crimson">{num}</span>
                    </p>
                    <p style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'3px', color:'var(--text-muted)', textTransform:'uppercase', marginTop:'0.5rem' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* Team */}
          <section style={{ padding:'6rem 0' }}>
            <div className="container">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>THE CREW</p>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'3px', marginBottom:'3rem' }}>
                <span className="shimmer-text">Meet the team</span>
              </h2>
              <div className="row g-4">
                {team.map((m,i) => (
                  <div key={i} className="col-12 col-sm-6 col-md-3">
                    <div className="team-card">
                      <div style={{ width:'100%', height:'260px', overflow:'hidden' }}>
                        <img src={m.img} alt={m.name}
                          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                      </div>
                      <div style={{ padding:'1.4rem' }}>
                        <h5 style={{ fontFamily:'var(--font-display)', fontSize:'0.76rem', letterSpacing:'2px', marginBottom:'0.35rem', color:'var(--text-primary)' }}>{m.name}</h5>
                        <p className="shimmer-crimson" style={{ fontFamily:'var(--font-display)', fontSize:'0.58rem', letterSpacing:'2px' }}>{m.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="shine-divider" />

          {/* Values */}
          <section style={{ padding:'4rem 0 6rem', position:'relative' }}>
            <div className="orb orb-deep" style={{ width:'400px', height:'400px', bottom:'-100px', right:'-100px', opacity:0.12 }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>WHAT DRIVES US</p>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'3px', marginBottom:'3rem' }}>
                <span className="shimmer-text">Our values</span>
              </h2>
              <div className="row g-4">
                {values.map(([title,desc]) => (
                  <div key={title} className="col-12 col-md-6">
                    <div className="zac-card">
                      <h4 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(0.9rem,2vw,1.1rem)', letterSpacing:'2px', marginBottom:'0.8rem' }}>
                        <span className="shimmer-crimson">{title}</span>
                      </h4>
                      <p style={{ color:'var(--text-muted)', lineHeight:'1.85', fontSize:'0.88rem' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding:'2rem 0 6rem', textAlign:'center' }}>
            <div className="container">
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,3.5vw,2.2rem)', letterSpacing:'3px', marginBottom:'2rem' }}>
                <span className="shimmer-text">Sound like your kind of team?</span>
              </h2>
              <Link to="/contact" className="btn-zac-filled">Let's Talk →</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
