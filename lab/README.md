# Gellért Labor

The twelve sketchbook ideas (dot field, living photo, net divider, racket turntable, clay
specimen, brushed clay, court walk, blueprint and skeleton point, shutter gallery, string-bed
button, ball progress, ball-basket loader) built on the site's design system, one after another.

It is **not part of the website**: nothing here is deployed or linked. It reuses the site's
styles and a few shared pieces (`components/DotField.tsx`, `components/NetDivider.tsx`,
`lib/site.ts`, `lib/rally`).

- Look at it: `npm run lab`, then open http://localhost:4000
- Rebuild after changing `lab/src`: `npm run lab:build`

`lab/dist` is committed, so `npm run lab` works without building. The Blender and depth-map
scripts that made the assets in `lab/dist/assets` are in `tools/lab`.
