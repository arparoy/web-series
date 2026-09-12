# StreamVault — Web Series & Movie Collection

## Overview
Next.js 14 (App Router, TypeScript, Tailwind CSS) app aggregating web series, movies, and collections from multiple blog/Vercel/Google Sites sources. Content is stored as static data in `src/data/movies.ts`.

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000. First boot runs `npm install` then `next dev`.

## Architecture
- `src/data/movies.ts` — all extracted content (titles, descriptions, cast, screenshots, download links, source URLs)
- `src/app/page.tsx` — home page with hero, trending, filterable grid
- `src/app/movie/[slug]/page.tsx` — detail page with screenshots, download links, trailer, related
- `src/components/` — Navbar, Hero, MovieCard, MovieGrid, FilterBar, Footer

## Content Sources
- StreamBox (streambox-alpha.vercel.app) — main hub with 100+ titles
- Individual Vercel sites — Palang Tod, Charmsukh, Riti Riwaj, Meetii Kalher
- Google Sites — Arpa Roy collection
- Most blogspot sites were empty or removed at time of extraction

## Key Notes
- Images are hot-linked from original sources (StreamBox, GitHub raw, Vercel sites)
- `next.config.js` allows remote images from all source domains
- `allowedDevOrigins` is set dynamically from `BASE44_PUBLIC_HOST_SUFFIX` for preview compatibility
- No database or external API — all data is static TypeScript
- No secrets required
