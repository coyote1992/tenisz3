# The dark "space" theme

The dots only work if the page lets them through. Every page becomes dark, sections become
transparent, and cards become frosted glass, so the content floats in front of one continuous
field. Adapt the site's own design system; do not replace it.

## 1. Base (from the kit)

Import `theme/space.css` once. It provides the fixed field, `html.space` (a deep radial sky)
and a transparent `body`. Tune the sky to the brand by overriding three variables: a deep,
almost-black version of the brand's darkest colour, slightly lighter at the top.

```css
:root {
  --space-sky-top: #11281b;    /* Gellért: forest green */
  --space-sky-mid: #0a1a10;
  --space-sky-bottom: #07130c;
}
```

Set `class="space"` on `<html>` in the server-rendered markup (or the root layout), not in an
effect, so there is no light flash before the script runs.

## 2. The site's side (write this per site, all under `html.space`)

1. **Flip the text tokens** inside `main` and the footer: body text to an off-white
   (`#f2eee4`), secondary text to 80% and 58% of it, lines and borders to 14% / 30% white.
   If the site uses CSS variables (most do), redefine them under `html.space main`.
2. **Make every section background transparent**, including "dark" and "tinted" sections
   and the hero. Hero photos become floating cards (rounded, shadowed) instead of
   full-bleed backgrounds; full-bleed photos behind a big moment shape step aside so the shape
   takes their place.
3. **Glass cards**: every card, table panel, map frame, tab group and toggle becomes
   `background: rgba(<brand dark>, .5)`, a hairline light border and
   `backdrop-filter: blur(12px) saturate(1.1)`.
4. **Accents**: headings' emphasis in a warm light (Gellért: clay-soft), eyebrows and small
   labels in the accent (Gellért: lime), and dark primary buttons turn into accent buttons
   with dark text.
5. **Leftovers**: hunt every rule that paints the light theme's dark colour on text or a
   light colour on a background, and give it a dark-theme value. Typical ones: arrow and text
   links, active tab or toggle, open accordion markers, big stat numbers, the sticky header
   once it turns solid, the announcement bar, the phone menu, the phone action bar and footer
   borders. A quick way to find them: grep the stylesheet for the light background and dark
   ink variables and check each hit on a dark page.
6. **Keep** logos that need a white plate (grant or partner badges) and printed documents
   (for example a scanned price list) as they are.

## 3. Check

- Every page on desktop and phone: no dark text on dark, no light panels left over, links
  visible, the open phone menu dark.
- The header: transparent over the hero, then smoky glass
  (`rgba(<brand dark>, .72)` + `backdrop-filter: blur(14px)`).

See `reference/examples/gellert-space.css` for a complete worked example.
