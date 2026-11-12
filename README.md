# Colophon 2

Landing page for Colophon, a CMS where every publish becomes a numbered release. The layout is a pixel-matched
rebuild of the Parley Framer template in React 19 + TypeScript (Vite), with Colophon copy.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Structure

- `src/styles/global.css` — fonts (DM Sans, Geist, Inter), colour tokens, type presets, breakpoints
  (desktop ≥1200, tablet 810–1199, phone <810)
- `src/components/ui/` — `ArrowButton` (sliding-arrow button), `SectionHeading`, `MaskIcon`, `Brand` (text logo + wordmark)
- `src/components/*.tsx` — one component per section, each with a co-located CSS module
- `src/hooks/` — `useScrollZoom` (hero zooms 1.5×→3.9× across the page), `useSmoothScroll` (Lenis, 1.5s), `useMediaQuery`
- `public/videos/` — the "How it works" demos, recorded from the source's animated SVGs as seamless 2× loops
  (`mobile/` holds the phone crops)
