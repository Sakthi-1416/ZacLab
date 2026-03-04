# Zac Studio — Vite + React Website

## Quick Start
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Stack
- **Vite 5** + React 18 + React Router v6
- **Bootstrap 5.3** (grid & utilities only)
- **Google Fonts**: Dancing Script, Cinzel, Lato
- Zero external UI libraries — pure CSS effects

## Pages
| Route | Page |
|-------|------|
| `/` | Home — hero shimmer, wave services, why-us |
| `/about` | About — stats, team cards, values |
| `/services` | Services — zigzag roadmap + detail panel |
| `/portfolio` | Portfolio — filterable grid + testimonials |
| `/contact` | Contact — form + FAQ |

## SEO Features
- Per-page `<title>` + `<meta description>` via `SEOHead` component
- Open Graph + Twitter Card tags in `index.html`
- `public/sitemap.xml` — submit to Google Search Console
- `public/robots.txt` — allows all crawlers
- `public/favicon.svg` — crimson Z icon
- JSON-LD structured data on Home + Services pages

## Shine / Visual Effects
- `.shimmer-text` — animated light sweep on headings
- `.shimmer-crimson` — crimson shimmer on accents/stats
- `.shine-card` / `.zac-card` — hover edge shine sweep
- `.shine-divider` — animated sliding glow line between sections
- `.orb` — ambient blur orbs for atmosphere
- `.sparkle` — tiny twinkling dots on hero
- `.glow-dot` — pulsing crimson glow dots
- Animated SVG dotted wave path on Home

## Roadmap (Services page)
- Desktop: proper zigzag left/right timeline with center spine
- Mobile: vertical stacked cards with left-side dots
- Animated spine glow crawling down the timeline
