"use client";

import { DotField, type DotPlace, type DotShape } from "@/components/DotField";
import "./space.css";

/**
 * The site's background: a dot field fixed behind the whole page, after thedent.ai. The content floats over it
 * "in space", and as you scroll past certain sections the dots slowly reshape for each one.
 * Each anchor section adds one step; a step ramps in over about one screen of scrolling,
 * starting just before the section enters, so the shape has formed as the section arrives.
 */

/**
 * One shape in the sequence. By default its ramp starts when the anchor's top is just below the
 * viewport and completes about a screen later; `done` instead pins the end of the ramp: the shape
 * is fully formed when the anchor's centre reaches that fraction of the viewport height.
 */
type Step = { anchor: string; shape: DotShape; wide: DotPlace; narrow: DotPlace; alpha?: number; done?: number };

const at = (x: number, y: number, sw: number, sh = 0.3): DotPlace => ({ x, y, sw, sh });
const phone = at(0.5, 0.3, 0.34, 0.2);

// shapes sit beside the content where there is room; big ones go faint and behind
const STEPS: Step[] = [
    // the court sits on the right; space.css keeps these sections' text to the left of it
    { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.64, 0.12, 0.3), narrow: phone },
    { anchor: "#foglalas", shape: "racket", wide: at(0.515, 0.62, 0.1, 0.28), narrow: phone },
    // beside the title, complete when the "Itt Davis Kupát játszottak" title is mid-screen
    { anchor: "#tortenet-title", done: 0.5, shape: { word: "1996" }, wide: at(0.7, 0.5, 0.2, 0.3), narrow: at(0.5, 0.42, 0.34, 0.2) },
    // large, centred, slowly spinning, behind everything
    { anchor: "#tenisziskola", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // then the shape's dots spiral into the middle of the screen and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

const LOOK = { alpha: 0.62, halo: 0.1, parallax: 0.25, spin: 0.0004 };

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

const QUIET: Step[] = [{ anchor: "body", shape: "ball", wide: at(0.5, 0.5, 0.2), narrow: phone }];

/**
 * The site's background (html.space, set in the root layout; see space.css). On the homepage the
 * dots form the shapes above as you scroll; with `quiet` (every other page) they stay a starfield.
 */
export function SpaceField({ quiet = false }: { quiet?: boolean }) {
  const steps = quiet ? QUIET : STEPS, look = LOOK;

  // sum of per-section ramps: 0 = loose starfield, 1 = first shape, ...
  const stage = () => {
    if (quiet) return 0;
    const vh = innerHeight;
    let s = 0;
    for (const st of steps) {
      const el = document.querySelector(st.anchor);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (st.done !== undefined) s += clamp01((st.done * vh + vh - (r.top + r.height / 2)) / vh);
      else s += clamp01((1.15 * vh - r.top) / (1.1 * vh));
    }
    return s;
  };

  return (
    <DotField
      shapes={steps.map((s) => s.shape)}
      places={steps.map((s) => ({ wide: s.wide, narrow: s.narrow, alpha: s.alpha }))}
      ballSpin={look.spin}
      stage={stage}
      alpha={quiet ? 0.5 : look.alpha}
      count={quiet ? [2400, 1100] : undefined}
      halo={look.halo}
      parallax={look.parallax}
      className="space-field"
    />
  );
}
