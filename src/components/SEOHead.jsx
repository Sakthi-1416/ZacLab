import { useEffect } from 'react'

/**
 * Lightweight SEO head manager (no external dep needed).
 * Updates <title>, meta description, og tags per page.
 */
export default function SEOHead({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | Zac Lab` : 'Zac Lab — Freelance Web, UI/UX, SEO & Digital Marketing'
  const url = `https://zaclab.com${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }

    setMeta('description',          description || 'Just some persons with skill and wifi. Web dev, UI/UX, SEO, data & social.')
    setMeta('og:title',             fullTitle,       true)
    setMeta('og:description',       description || 'Just some persons with skill and wifi.', true)
    setMeta('og:url',               url,             true)
    setMeta('twitter:title',        fullTitle,       false)
    setMeta('twitter:description',  description || 'Just some persons with skill and wifi.', false)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = url
  }, [fullTitle, description, url])

  return null
}
