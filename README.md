# Alberto portfolio starter

Initial portfolio starter oriented to:
- CAD and manufacturable drawings
- embedded firmware
- PCB / power electronics
- prototype engineering

## Local start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Placeholder assets to replace
Current project data uses these placeholder paths. Replace them with your final files using the same names, or update `src/data/site.ts` to your preferred names.

- `/public/assets/chessproject-cover-final.jpg`
- `/public/assets/chessproject-gallery-01.jpg`
- `/public/assets/chessproject-gallery-02.jpg`
- `/public/assets/zvs-inverter-cover-final.jpg`
- `/public/assets/zvs-inverter-gallery-01.jpg`
- `/public/assets/zvs-inverter-gallery-02.jpg`
- `/public/assets/cad-assemblies-cover-final.jpg`
- `/public/assets/cad-assemblies-gallery-01.jpg`
- `/public/assets/cad-assemblies-gallery-02.jpg`
- `/public/docs/chessproject-technical-brief.pdf`
- `/public/docs/chessproject-electromechanical-overview.pdf`
- `/public/docs/zvs-inverter-design-report.pdf`
- `/public/docs/zvs-inverter-validation-notes.pdf`
- `/public/docs/cad-assemblies-drawing-package.pdf`
- `/public/docs/cad-assemblies-bom-documentation.pdf`

## Cloudflare Pages
Recommended framework choice: React + Vite.
Typical Pages configuration:
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback redirects: `public/_redirects` (already included as `/* /index.html 200`)

## Contact form placeholder
- Lightweight form submissions are configured through `contactFormConfig` in `src/data/site.ts`.
- Default placeholder endpoint: `https://formspree.io/f/your-form-id`
- Replace it with your real external form service endpoint before production use.

## Next improvements
1. Add a bilingual toggle (EN/ES).
2. Add a dedicated project page for ChessProject.
3. Replace placeholder / simplified assets with final curated visuals.
4. Add a downloadable one-page portfolio PDF.
5. Add custom favicon and Open Graph image.

## Prompt ideas for desktop coding assistant
See `PROMPTS.md`.
