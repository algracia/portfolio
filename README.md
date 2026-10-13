# Alberto Gracia Martelo — engineering portfolio

React, TypeScript and Vite portfolio for [albertogracia.dev](https://albertogracia.dev). English is the default at `/`; Spanish lives at `/es`. Project case studies use `/projects/:slug` and `/es/projects/:slug`.

## Local development

```bash
npm ci
npm run dev
npm run build
```

Cloudflare Pages: production branch `main`, build command `npm run build`, output `dist`. The SPA fallback is in `public/_redirects`. The build does not publish by itself.

## Content and project images

General bilingual copy, experience, capabilities and CV availability are in `src/data/site.ts`. Project copy and media live in `src/data/projects.ts`. A project without a `cover` gets a designed text fallback. To publish a real project image, add it under `public/assets` and set its `cover` in the project media registry. Gallery images are optional. Use actual project images; no synthetic imagery is required.

Existing public assets cover the ChessProject technical overview and CAD assemblies. The CAD detail page has two assembly drawings and five local MP4 videos in one gallery; its homepage cover remains the wafer dispenser drawing. The publishable videos and their real-frame posters are in `public/assets`. Keep each video under Cloudflare Pages' 25 MiB per-file limit. Source recordings in `Multimedia/` are local inputs and are ignored by Git.

ChessProject uses a real prototype photograph as its cover. Its gallery contains two local MP4 demonstrations and the mechanical CAD video shared with the CAD gallery. Technical details links directly to `/docs/ChessProject.pdf`.

## CV files

Place the current master CVs at:

- `public/docs/Alberto_Gracia_CV_EN.pdf`
- `public/docs/Alberto_Gracia_CV_ES.pdf`

The header shows a CV link only for a language whose file is present and whose `available` flag in `src/data/site.ts` is `true`. Add each PDF, then enable its flag. No other component changes are needed.

## SEO

The HTML entry provides English home metadata. React updates title, canonical URL, social metadata and JSON-LD by route and language. `public/robots.txt` and `public/sitemap.xml` list both languages and all case studies. As a client-rendered SPA, route-specific social previews depend on crawlers executing JavaScript; static prerendering would be needed for guaranteed previews.
