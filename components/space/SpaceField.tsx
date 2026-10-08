"use client";

import { useEffect } from "react";
import { DotField, type DotPlace, type DotShape } from "@/components/DotField";
import "./space.css";

/**
 * A dot field fixed behind the whole page, after thedent.ai: the page content floats over it
 * "in space", and as you scroll past certain sections the dots slowly reshape for each one.
 * Each anchor section adds one step; a step ramps in over about one screen of scrolling,
 * starting just before the section enters, so the shape has formed as the section arrives.
 */

export type SpaceTheme = "night" | "dust" | "depth";

/**
 * One shape in the sequence. By default its ramp starts when the anchor's top is just below the
 * viewport and completes about a screen later; `done` instead pins the end of the ramp: the shape
 * is fully formed when the anchor's centre reaches that fraction of the viewport height.
 */
type Step = { anchor: string; shape: DotShape; wide: DotPlace; narrow: DotPlace; alpha?: number; done?: number };

const at = (x: number, y: number, sw: number, sh = 0.3): DotPlace => ({ x, y, sw, sh });
const phone = at(0.5, 0.3, 0.34, 0.2);

const STEPS: Record<SpaceTheme, Step[]> = {
  // dark page; shapes sit beside the content, alternating sides
  night: [
    // the court sits on the right; space.css keeps these sections' text to the left of it
    { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.64, 0.12, 0.3), narrow: phone },
    { anchor: "#foglalas", shape: "racket", wide: at(0.515, 0.62, 0.1, 0.28), narrow: phone },
    // beside the title, complete when the "Itt Davis Kupát játszottak" title is mid-screen
    { anchor: "#tortenet-title", done: 0.5, shape: { word: "1996" }, wide: at(0.7, 0.5, 0.2, 0.3), narrow: at(0.5, 0.42, 0.34, 0.2) },
    // large, centred, slowly spinning, behind everything
    { anchor: "#tenisziskola", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // then the shape's dots spiral into the middle of the screen and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ],
  // light page; dark clay-dust dots, beside the light sections
  dust: [
    { anchor: "#palyak", shape: "court", wide: at(0.84, 0.64, 0.12, 0.3), narrow: phone },
    { anchor: "#arak", shape: "racket", wide: at(0.82, 0.5, 0.12, 0.3), narrow: phone },
    { anchor: "#tenisziskola", shape: "player", wide: at(0.433, 0.5, 0.1, 0.28), narrow: phone },
    { anchor: "#latogatas", shape: "ball", wide: at(0.433, 0.36, 0.04, 0.2), narrow: phone },
    { anchor: ".final", shape: { word: "Gellért" }, wide: at(0.5, 0.2, 0.1, 0.16), narrow: at(0.5, 0.22, 0.3, 0.2) },
  ],
  // dark page; big faint shapes centred behind everything, a deep starfield drifting past
  depth: [
    { anchor: "#palyak", shape: "court", wide: at(0.5, 0.55, 0.3, 0.46), narrow: at(0.5, 0.45, 0.5, 0.3) },
    { anchor: "#foglalas", shape: "racket", wide: at(0.5, 0.52, 0.22, 0.4), narrow: at(0.5, 0.45, 0.42, 0.3) },
    { anchor: "#tortenet", shape: { word: "1996" }, wide: at(0.5, 0.5, 0.36, 0.5), narrow: at(0.5, 0.4, 0.5, 0.3) },
    { anchor: "#tenisziskola", shape: "player", wide: at(0.5, 0.55, 0.24, 0.44), narrow: at(0.5, 0.45, 0.45, 0.32) },
    { anchor: "#latogatas", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3) },
    { anchor: ".final", shape: { word: "Gellért" }, wide: at(0.5, 0.45, 0.34, 0.5), narrow: at(0.5, 0.4, 0.5, 0.3) },
  ],
};

const LOOK: Record<SpaceTheme, { palette?: string[]; blend?: "add" | "normal"; alpha: number; halo: number; parallax: number; spin?: number }> = {
  night: { alpha: 0.62, halo: 0.1, parallax: 0.25, spin: 0.0004 },
  dust: { palette: ["#b4532b", "#21492b", "#c96a3f", "#8a7a5c"], blend: "normal", alpha: 0.6, halo: 0.12, parallax: 0.2 },
  depth: { alpha: 0.55, halo: 0.22, parallax: 0.6 },
};

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

export function SpaceField({ theme }: { theme: SpaceTheme }) {
  const steps = STEPS[theme], look = LOOK[theme];

  useEffect(() => {
    const cls = ["space", `space-${theme}`, theme === "dust" ? "space-light" : "space-dark"];
    document.documentElement.classList.add(...cls);
    return () => document.documentElement.classList.remove(...cls);
  }, [theme]);

  // sum of per-section ramps: 0 = loose starfield, 1 = first shape, ...
  const stage = () => {
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
      palette={look.palette}
      blend={look.blend}
      alpha={look.alpha}
      halo={look.halo}
      parallax={look.parallax}
      className="space-field"
    />
  );
}
