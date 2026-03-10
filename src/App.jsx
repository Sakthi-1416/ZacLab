import React, { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

/* ── Theme context ── */
export const ThemeContext = createContext({ theme:'dark', toggle:()=>{} })
export const useTheme = () => useContext(ThemeContext)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('zac-theme') || 'dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : ''
    localStorage.setItem('zac-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog"      element={<Blog />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
