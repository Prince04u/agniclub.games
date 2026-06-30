# Agni Club — Static Information Site

Pure HTML/CSS/JS production-ready website. No build step.

## Pages
- `/` Home
- `/login/`, `/register/`, `/signup/`, `/giftcode/`
- `/blogs/` index + 4 in-depth articles under `/blogs/<slug>/`
- `/about/`, `/contact/`
- `/responsible-gaming/`, `/privacy-policy/`, `/terms/`, `/disclaimer/`
- `/404.html`

## Assets
- `assets/css/style.css` — full design system (coral gradient palette)
- `assets/js/main.js` — nav toggle + smooth scroll
- `assets/images/` — logo + bonus chart images

## Deploy
Upload the entire folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, Nginx).
Configure the host to serve `index.html` for directory URLs and `/404.html` for missing routes.

## SEO
- Per-page title, meta description, canonical, OG, Twitter cards
- JSON-LD: Organization, WebSite + SearchAction, BreadcrumbList, FAQPage, BlogPosting
- `sitemap.xml`, `robots.txt`, `manifest.json` included
- Lazy-loaded images, `font-display: swap`, system fonts fallback

## Customize
- Colors: edit CSS variables at the top of `assets/css/style.css`.
- Logo: replace `assets/images/logo.webp`.
- Nav / footer links: edit the constants near the top of the generator script (`/tmp/build_site.py` reference).

© 2026 Agni Club Info Hub.
