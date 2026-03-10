import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) { return { error } }

  componentDidCatch(error, info) {
    console.error('Zac Lab render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight:'100vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          background:'#0a0a0a', color:'#f0ece4', textAlign:'center', padding:'2rem'
        }}>
          <p style={{ fontFamily:'Cinzel,serif', fontSize:'0.6rem', letterSpacing:'4px', color:'#c0392b', marginBottom:'1rem' }}>
            SOMETHING WENT WRONG
          </p>
          <h1 style={{ fontFamily:'Antonio,sans-serif', fontSize:'clamp(2rem,8vw,4rem)', marginBottom:'1.5rem' }}>
            Zac Lab
          </h1>
          <p style={{ color:'#b8b0a6', fontSize:'0.9rem', marginBottom:'2rem', maxWidth:'400px' }}>
            A rendering error occurred. Try refreshing the page.
          </p>
          <button
            onClick={() => { this.setState({ error:null }); window.location.href = '/' }}
            style={{
              background:'#6b0f1a', border:'1px solid #8b1a2a', color:'#f0ece4',
              fontFamily:'Cinzel,serif', fontSize:'0.6rem', letterSpacing:'3px',
              textTransform:'uppercase', padding:'0.75rem 2rem', cursor:'pointer'
            }}
          >Go Home</button>
        </div>
      )
    }
    return this.props.children
  }
}
