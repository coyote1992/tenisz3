---
name: dot-space
description: Adds the "dot-space" background to a website. Thousands of small glowing dots float behind the whole page, as if the site were in space, and as the visitor scrolls they slowly gather into shapes that belong to the site (a tennis court, a racket, a founding year, a spinning ball, a logo), then fall into a black hole at the end. Use when the user asks for the dot / starfield / particle background, "the dots", "dot-space", or the effect from the Gellért tennis site, on any website (React, Next.js or plain HTML).
---

# dot-space

You are adding a finished, client-approved effect to a new site. The **look and motion are
fixed**: they are the client's preferences, reached over many iterations. Your job is the
**site-specific part**: which shapes, where they sit, when they form, and making the page's
content read well in front of them, so the result feels native to this site.

Read these before you start:

1. `reference/preferences.md`: what is fixed and why. Do not change these values unless the
   user asks.
2. `reference/recipe.md`: how to choose shapes, place them, time them and move text out of
   their way.
3. `reference/theme.md`: how to restyle the site into the dark "space" look.
4. `reference/screenshots/`: the approved result on the Gellért tennis site. Match this feel.
5. `reference/examples/`: the Gellért configuration and its theme CSS, as a worked example.

## What is in the kit

| Path | What it is | Use it |
|---|---|---|
| `engine/core/*.ts` | The engine (WebGL via three.js), framework-free | Copy as is |
| `engine/react/DotSpace.tsx` | React wrapper for the page background | React / Next.js |
| `engine/react/DotField.tsx` | React wrapper for a dot field in your own box | Optional |
| `dist/dot-space.js`, `dist/space.css` | Prebuilt bundle (three.js included) and base CSS | Plain HTML, WordPress, static sites |
| `theme/space.css` | Base of the dark theme | Import globally |
| `check/stages.mjs` | Screenshots every stage and measures text overlap | Run before you finish |
| `examples/plain.html` | Minimal plain-HTML page using the bundle | Template |

## Workflow

1. **Understand the site.** Find the framework, the homepage sections and their order, the
   design tokens (colours, fonts), and two or three facts that make this club different: the
   founding year, a famous event, the number of courts, the club's initials, a logo. Use only
   facts the site states; never invent one.
2. **Install the engine.**
   - React or Next.js: copy `engine/` and `theme/` into the project (for example
     `kits/dot-space/`), `npm i three`, and render `<DotSpace>` once in the root layout. Pass
     the steps on the homepage only, and use `key` so the field remounts between the home and
     quiet versions. Put `className="space"` on `<html>` so the dark theme is there from the
     first paint. See `reference/examples/gellert-SpaceBackground.tsx`.
   - Plain HTML: copy `dist/` and follow `examples/plain.html`: `class="space"` on `<html>`,
     link `space.css`, and call `mountSpace()` from a module script.
3. **Write the choreography.** Follow `reference/recipe.md`: usually 4 or 5 steps, ending in
   `"blackhole"`. Every subpage gets the quiet starfield (`mountSpace()` with no steps).
4. **Restyle the site into space.** Follow `reference/theme.md`: transparent sections, light
   text, frosted-glass cards, and dark versions of every leftover light element.
5. **Rearrange content, not dots.** Where a shape lands on text, move or narrow the text (see
   the recipe). The shape's position, size and look stay as the recipe sets them.
6. **Check.** Run the site, then `node <kit>/check/stages.mjs <url>`. On desktop every shape
   except those marked "behind" must report `clear` (a few per cent is acceptable if the
   layout makes it unavoidable), and none may report `NOT FULLY FORMED`. Look at the
   screenshots it writes: desktop and phone, every stage. Check that subpages show the quiet
   starfield, that there is no light flash on load, and that the build passes.
7. **Report briefly.** Which shapes you chose and why (the site-specific ones especially),
   where you moved content, and what the check found on phones.

## Do not

- Change dot counts, sizes, speeds, drift, twinkle, the cursor effect or the rendering. They
  are approved; see preferences.
- Move or shrink a shape to dodge text: move the text.
- End with the club's name as a shape. The approved ending is the black hole.
- Put the shapes on subpages. They get the quiet starfield only.
- Use a 2D canvas or DOM elements for the dots. It is WebGL; the 2D version felt slow.
- Invent facts for the word shapes.
