# NudgeFollowup landing page

A Next.js 14 (App Router) marketing landing page for NudgeFollowup, a follow-up tracker built to replace spreadsheets for small businesses.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's included

- `app/layout.tsx` — fonts, page metadata, Open Graph/Twitter tags, and JSON-LD structured data (SoftwareApplication + FAQPage) for SEO
- `app/page.tsx` — the landing page itself: hero, problem, features, how-it-works, testimonial, pricing, FAQ, final CTA
- `app/sitemap.ts` / `app/robots.ts` — auto-generated sitemap.xml and robots.txt
- `tailwind.config.ts` — the page's design tokens (colors, fonts)

## Before you launch

- Swap `https://www.nudgefollowup.com` in `app/layout.tsx` and `app/sitemap.ts` for your real domain.
- Replace the pricing figures and testimonial with real numbers/quotes once you have them.
- Point the CTA links (`#get-started`, nav links) at your real signup flow.
- Add an OG image (`opengraph-image.png` in `app/`) for nicer link previews on social/Slack.

## Deploying

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```
