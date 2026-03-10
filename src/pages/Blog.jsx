import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const posts = [
  {
    id:1, tag:'Web Dev', date:'March 2025', author:'Alex Rivera', readTime:'5 min read',
    img:'/images/blog-webdev.svg',
    title:'Why Your Website Is Losing Customers (And How to Fix It)',
    excerpt:'Most websites are built to look good in design tools. But looking good and converting visitors are two very different things. Here\'s what we see broken most often — and how to fix it.',
    content:[
      {type:'p',text:'Most websites are built to look good in design tools. But looking good and converting visitors are two very different things.'},
      {type:'h2',text:'1. Your page loads too slowly'},
      {type:'p',text:'53% of mobile users abandon a page that takes more than 3 seconds to load. If your site is serving unoptimised images or loading 40 JavaScript libraries, you\'re losing customers before they even see your content.'},
      {type:'h2',text:'2. Your CTA is buried or vague'},
      {type:'p',text:'A button that says "Learn More" doesn\'t convert. A button that says "Get a free quote in 24 hours" does. Be specific about the value, and put it above the fold.'},
      {type:'h2',text:'3. Mobile is an afterthought'},
      {type:'p',text:'Over 60% of web traffic is now mobile. If your site was designed desktop-first and adjusted down, it shows. Test on a real phone, not just a browser emulator.'},
      {type:'quote',text:'"Your website is your hardest-working employee. It works 24/7 and never calls in sick. Make sure it\'s doing its job."'},
      {type:'h2',text:'The Fix'},
      {type:'p',text:'Run your site through Google PageSpeed Insights. Audit your CTAs — are they specific? Test your site on a real phone. Small changes here have outsized impact.'},
    ]
  },
  {
    id:2, tag:'SEO', date:'February 2025', author:'Jordan Lee', readTime:'7 min read',
    img:'/images/blog-seo.svg',
    title:'SEO in 2025: What\'s Actually Working Right Now',
    excerpt:'The tactics that worked in 2020 are dead. Here\'s an honest breakdown of what\'s driving organic traffic right now — from someone who spends every day in Search Console.',
    content:[
      {type:'p',text:'The tactics that worked in 2020 are mostly dead. Keyword stuffing, low-quality backlinks, thin content farms — Google has caught up with all of it.'},
      {type:'h2',text:'Helpful content, not just optimised content'},
      {type:'p',text:'Google\'s Helpful Content System rewards content written for people, not search engines. Opinionated, specific, experience-backed writing beats generic overviews every time.'},
      {type:'h2',text:'Core Web Vitals are non-negotiable'},
      {type:'p',text:'LCP, INP, and CLS directly influence rankings. If your site has poor Core Web Vitals, you\'re fighting with one hand tied behind your back.'},
      {type:'ul',text:'LCP (Largest Contentful Paint) — aim for under 2.5s\nINP (Interaction to Next Paint) — under 200ms\nCLS (Cumulative Layout Shift) — under 0.1'},
      {type:'h2',text:'Topic clusters over individual keywords'},
      {type:'p',text:'Building a cluster of related content around a pillar page signals authority to Google. It compounds in a way one-off blog posts never do.'},
      {type:'quote',text:'"Ranking #1 for a term nobody searches is pointless. Ranking #3 for something your customers actually type is the whole game."'},
    ]
  },
  {
    id:3, tag:'UI/UX', date:'January 2025', author:'Sam Torres', readTime:'6 min read',
    img:'/images/blog-ux.svg',
    title:'The UX Mistakes We See on Almost Every Client Site',
    excerpt:'After designing and auditing dozens of sites, certain patterns emerge. These are the UX mistakes we see constantly — even on sites that look polished at first glance.',
    content:[
      {type:'p',text:'After designing and auditing dozens of sites, patterns emerge. These are the UX mistakes we encounter constantly — even on sites that look polished at first glance.'},
      {type:'h2',text:'Mistaking aesthetics for usability'},
      {type:'p',text:'A beautiful UI that confuses users is a bad UI. Low contrast text, fancy hover effects that obscure functionality, modals that can\'t be dismissed on mobile — these are design failures dressed as design choices.'},
      {type:'h2',text:'Forms that ask for too much, too soon'},
      {type:'p',text:'The goal of the form is to start a conversation, not complete a CRM intake. Pick three fields. Maximum.'},
      {type:'h2',text:'Navigation that assumes the user knows your IA'},
      {type:'p',text:'Your information architecture makes sense to you. Test your navigation with five people who\'ve never seen your site. You\'ll be surprised.'},
      {type:'ul',text:'Always test on real devices\nReduce form fields to the minimum\nContrast ratio should be at least 4.5:1\nEvery interactive element needs a clear hover/focus state'},
      {type:'quote',text:'"Good UX is mostly invisible. Users notice it only when it\'s missing."'},
    ]
  },
  {
    id:4, tag:'Analytics', date:'December 2024', author:'Maya Chen', readTime:'8 min read',
    img:'/images/blog-analytics.svg',
    title:'How We Use Data to Make Smarter Marketing Decisions',
    excerpt:'Data without context is just noise. This is our framework for turning analytics into decisions that actually change how you work — not just dashboards you screenshot for reports.',
    content:[
      {type:'p',text:'Data without context is noise. Every business we work with has access to analytics. Few are actually using it to make decisions. Here\'s our framework.'},
      {type:'h2',text:'Start with questions, not metrics'},
      {type:'p',text:'Before opening any analytics tool, write down the three most important questions about your business. "Where are we losing customers?" beats "what\'s our bounce rate?" every time.'},
      {type:'h2',text:'The funnel you\'re ignoring'},
      {type:'p',text:'Most businesses obsess over acquisition and ignore the middle of the funnel. What happens between first visit and first purchase? That\'s where the money is hiding.'},
      {type:'ul',text:'Acquisition: how are people finding you?\nActivation: what does the first meaningful action look like?\nRetention: are they coming back?\nRevenue: where is the actual conversion?'},
      {type:'h2',text:'Make your dashboards actionable'},
      {type:'p',text:'If you can\'t look at a number and know what you\'d do if it went up or down — remove it from your dashboard. Every metric should connect to a decision.'},
      {type:'quote',text:'"The goal is not to have more data. The goal is to make fewer wrong decisions."'},
    ]
  },
  {
    id:5, tag:'SMM', date:'November 2024', author:'Alex Rivera', readTime:'5 min read',
    img:'/images/blog-smm.svg',
    title:'Social Media That Doesn\'t Feel Like Social Media',
    excerpt:'The brands winning on social right now don\'t look like brands at all. Here\'s how to build a social presence that feels human and actually converts — without a content factory.',
    content:[
      {type:'p',text:'The brands winning on social right now don\'t look like brands at all. They sound like people. Here\'s how to replicate that without a content factory.'},
      {type:'h2',text:'Have a point of view'},
      {type:'p',text:'Generic inspirational quotes and product announcements are content equivalent of background noise. What does your brand actually believe? That\'s your content.'},
      {type:'h2',text:'Consistency over virality'},
      {type:'p',text:'One viral post doesn\'t build a business. Showing up three times a week for two years does. The algorithm rewards consistency. So does trust.'},
      {type:'ul',text:'Post consistently (pick a schedule you can sustain)\nShare opinions, not just information\nReply to every comment for the first month\nTrack saves and shares over likes'},
      {type:'quote',text:'"The best social strategy is to be genuinely interesting. Everything else is tactics."'},
    ]
  },
  {
    id:6, tag:'Insights', date:'October 2024', author:'Jordan Lee', readTime:'6 min read',
    img:'/images/blog-insights.svg',
    title:'Freelance vs Agency: What\'s Actually Better for Your Project?',
    excerpt:'It\'s not a simple answer. Both have real advantages and real drawbacks. Here\'s an honest comparison from people who have worked on both sides of that line.',
    content:[
      {type:'p',text:'This deserves an honest answer, not a sales pitch. Both freelancers and agencies have genuine advantages depending on what you need.'},
      {type:'h2',text:'Where agencies win'},
      {type:'p',text:'Agencies are better for large, complex projects requiring multiple simultaneous workstreams. More capacity, more redundancy, broader institutional knowledge.'},
      {type:'h2',text:'Where freelancers win'},
      {type:'p',text:'Freelancers typically have lower overhead, so your money goes further. You get direct access to the person doing the work. For focused projects with clear scope, freelancers are often faster and more cost-effective.'},
      {type:'h2',text:'Where we sit'},
      {type:'p',text:'We\'re deliberately in the middle. Small enough that you\'re always talking to the people building your product, but experienced enough to handle projects that previously required an agency.'},
      {type:'quote',text:'"The best choice gives you direct access to skilled people who give a damn about your outcome."'},
    ]
  },
]

const tags = ['All','Web Dev','SEO','UI/UX','Analytics','SMM','Insights']

function PostDetail({ post, onBack }) {
  return (
    <div style={{ paddingTop:'100px' }}>
      <section style={{ padding:'4rem 0 2rem', position:'relative' }}>
        <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-200px', left:'-100px' }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <button onClick={onBack} style={{
            background:'transparent', border:'none', cursor:'pointer',
            fontFamily:'var(--font-display)', fontSize:'0.58rem', letterSpacing:'3px',
            color:'var(--text-muted)', textTransform:'uppercase', marginBottom:'2rem',
            display:'flex', alignItems:'center', gap:'0.5rem', padding:0, transition:'color 0.25s',
          }}
            onMouseEnter={e=>e.currentTarget.style.color='var(--crimson-glow)'}
            onMouseLeave={e=>e.currentTarget.style.color='var(--text-muted)'}
          >← Back to Blog</button>

          {/* Hero image */}
          <div style={{ width:'100%', maxHeight:'340px', overflow:'hidden', marginBottom:'2rem', borderRadius:'4px' }}>
            <img src={post.img} alt={post.title}
              style={{ width:'100%', height:'340px', objectFit:'cover', display:'block' }} />
          </div>

          <span className="blog-tag">{post.tag}</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3.5vw,2rem)', letterSpacing:'2px', lineHeight:1.4, marginBottom:'1.5rem', maxWidth:'760px' }}>
            {post.title}
          </h1>
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <span className="blog-meta">{post.author}</span>
            <span style={{ color:'var(--border-subtle)' }}>·</span>
            <span className="blog-meta">{post.date}</span>
            <span style={{ color:'var(--border-subtle)' }}>·</span>
            <span className="blog-meta">{post.readTime}</span>
          </div>
        </div>
      </section>

      <div className="shine-divider" />

      <section style={{ padding:'3rem 0 6rem' }}>
        <div className="container">
          <div className="blog-prose">
            {post.content.map((block,i) => {
              if (block.type==='p')     return <p key={i}>{block.text}</p>
              if (block.type==='h2')    return <h2 key={i}><span className="shimmer-crimson">{block.text}</span></h2>
              if (block.type==='h3')    return <h3 key={i}>{block.text}</h3>
              if (block.type==='quote') return <blockquote key={i}>{block.text}</blockquote>
              if (block.type==='ul')    return <ul key={i}>{block.text.split('\n').map((li,j)=><li key={j}>{li}</li>)}</ul>
              return null
            })}
            <div style={{ marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid var(--border-subtle)' }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'3px', color:'var(--crimson-glow)', marginBottom:'0.8rem' }}>WRITTEN BY</p>
              <p style={{ color:'var(--text-primary)', fontFamily:'var(--font-display)', fontSize:'0.8rem', letterSpacing:'2px' }}>{post.author}</p>
              <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', marginTop:'0.3rem' }}>Zac Lab</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Blog() {
  const [filter, setFilter]     = useState('All')
  const [selected, setSelected] = useState(null)
  const filtered = filter === 'All' ? posts : posts.filter(p => p.tag === filter)

  if (selected) {
    return (
      <div className="page-gradient">
        <SEOHead title={selected.title} description={selected.excerpt} path="/blog" />
        <PostDetail post={selected} onBack={() => { setSelected(null); window.scrollTo(0,0) }} />
      </div>
    )
  }

  return (
    <>
      <SEOHead title="Blog" description="Insights on web development, UI/UX, SEO, data analytics, and social media from the Zac Lab team." path="/blog" />
      <div className="page-gradient">
        <div style={{ paddingTop:'100px' }}>

          <section style={{ padding:'5rem 0 3rem', position:'relative' }}>
            <div className="orb orb-crimson" style={{ width:'500px', height:'500px', top:'-150px', left:'-100px' }} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'5px', color:'var(--crimson-glow)', marginBottom:'1rem' }}>FROM THE LAB</p>
              <h1 className="shimmer-text" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,6vw,4.5rem)', letterSpacing:'4px', marginBottom:'1.5rem' }}>Blog</h1>
              <p style={{ color:'var(--text-muted)', fontSize:'0.95rem', lineHeight:'1.85', maxWidth:'520px' }}>
                Honest thoughts on web, design, and digital growth — from the people actually doing the work.
              </p>
            </div>
          </section>

          <div className="shine-divider" />

          {/* Filter */}
          <section style={{ padding:'3rem 0 1rem' }}>
            <div className="container">
              <div className="d-flex flex-wrap gap-2">
                {tags.map(t => (
                  <button key={t} onClick={() => setFilter(t)} style={{
                    background: filter===t ? 'var(--crimson-deep)' : 'transparent',
                    border:`1px solid ${filter===t ? 'var(--crimson-glow)' : 'var(--border-subtle)'}`,
                    color: filter===t ? '#fff' : 'var(--text-muted)',
                    fontFamily:'var(--font-display)', fontSize:'0.58rem', letterSpacing:'3px',
                    textTransform:'uppercase', padding:'0.45rem 1.1rem', cursor:'pointer', transition:'all 0.25s',
                    boxShadow: filter===t ? '0 0 16px rgba(192,57,43,0.3)' : 'none',
                  }}>{t}</button>
                ))}
              </div>
            </div>
          </section>

          {/* Grid */}
          <section style={{ padding:'2rem 0 6rem' }}>
            <div className="container">
              {/* Featured */}
              {filter === 'All' && (
                <div className="mb-4">
                  <div className="blog-card" onClick={() => { setSelected(posts[0]); window.scrollTo(0,0) }}
                    style={{ display:'flex', flexDirection:'row', flexWrap:'wrap' }}>
                    <div className="blog-card-img" style={{ flex:'1 1 300px', minHeight:'240px', height:'auto' }}>
                      <img src={posts[0].img} alt={posts[0].title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    </div>
                    <div className="blog-card-body" style={{ flex:'1 1 300px' }}>
                      <span className="blog-tag">{posts[0].tag} · Featured</span>
                      <h2 className="blog-title" style={{ fontSize:'clamp(1rem,2.5vw,1.3rem)' }}>{posts[0].title}</h2>
                      <p className="blog-excerpt">{posts[0].excerpt}</p>
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <span className="blog-meta">{posts[0].author}</span>
                        <span style={{ color:'var(--border-subtle)' }}>·</span>
                        <span className="blog-meta">{posts[0].date}</span>
                        <span style={{ color:'var(--border-subtle)' }}>·</span>
                        <span className="blog-meta">{posts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="row g-4">
                {(filter === 'All' ? filtered.slice(1) : filtered).map(post => (
                  <div key={post.id} className="col-12 col-sm-6 col-lg-4">
                    <div className="blog-card h-100" onClick={() => { setSelected(post); window.scrollTo(0,0) }}>
                      <div className="blog-card-img">
                        <img src={post.img} alt={post.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                      </div>
                      <div className="blog-card-body">
                        <span className="blog-tag">{post.tag}</span>
                        <h2 className="blog-title">{post.title}</h2>
                        <p className="blog-excerpt" style={{ WebkitLineClamp:3, display:'-webkit-box', WebkitBoxOrient:'vertical', overflow:'hidden' }}>{post.excerpt}</p>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <span className="blog-meta">{post.author}</span>
                          <span style={{ color:'var(--border-subtle)' }}>·</span>
                          <span className="blog-meta">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div style={{ textAlign:'center', padding:'4rem 0' }}>
                  <p style={{ color:'var(--text-muted)', fontFamily:'var(--font-display)', fontSize:'0.7rem', letterSpacing:'3px' }}>NO POSTS IN THIS CATEGORY</p>
                  <button onClick={() => setFilter('All')} className="btn-zac mt-3">View All Posts</button>
                </div>
              )}
            </div>
          </section>

          <section style={{ padding:'4rem 0 6rem', textAlign:'center', background:'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(107,15,26,0.35) 0%, transparent 70%)' }}>
            <div className="container">
              <p style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'4px', color:'var(--crimson-glow)', marginBottom:'1.2rem' }}>HAVE CONTENT?</p>
              <h2 className="shimmer-text" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,3vw,2rem)', letterSpacing:'3px', marginBottom:'1rem' }}>
                Ready to publish?
              </h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'2rem' }}>
                Upload your content and we'll add it to the blog. Formatted and live in minutes.
              </p>
              <Link to="/contact" className="btn-zac-filled">Send Us Your Content →</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
