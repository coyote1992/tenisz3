"use client";

import { useRef } from "react";
import { DotField, type DotPlace, type DotShape } from "@/components/DotField";
import { DOT_STEPS } from "@/lib/dots/steps";
import "./dots.css";

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const sm = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const SEQUENCE: DotShape[] = ["ball", "racket", "player", "court", { word: "Gellért" }];

/**
 * Option A: the hero photo is replaced by the dot field. It gathers into the ball on load and
 * then cycles through the shapes on its own (no scroll needed), one every ~7 seconds.
 */
export function HeroDots() {
  const t0 = useRef(0);
  const stage = () => {
    const now = performance.now();
    if (!t0.current) t0.current = now;
    const e = now - t0.current;
    return e < 500 ? 0 : 1 + Math.floor((e - 500) / 7000);
  };
  return (
    <DotField
      shapes={[...SEQUENCE, "ball"]}
      loop
      stage={stage}
      className="hero__media hero__media--dots"
      wide={{ x: 0.3, y: 0.52, sw: 0.16, sh: 0.3 }}
      narrow={{ x: 0.5, y: 0.47, sw: 0.32, sh: 0.3 }}
    />
  );
}

/**
 * Option B: a pinned dark band after the photo hero. Scrolling turns the starfield into the
 * ball, racket, player, court and the club's name, with a fact as caption for each.
 */
export function DotStory() {
  const wrap = useRef<HTMLElement>(null);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const hint = useRef<HTMLParagraphElement>(null);
  const stage = () => {
    const sec = wrap.current;
    if (!sec) return 0;
    const r = sec.getBoundingClientRect();
    const target = clamp01(-r.top / (r.height - innerHeight)) * SEQUENCE.length;
    const k0 = Math.floor(target);
    return Math.min(SEQUENCE.length, k0 + sm(0.3, 1, target - k0));
  };
  const onFrame = (p: number) => {
    const idx = Math.round(p);
    caps.current.forEach((c, i) => {
      if (!c) return;
      const on = i + 1 === idx;
      c.style.opacity = on ? "1" : "0";
      c.style.transform = `translateY(${on ? 0 : i + 1 < idx ? -16 : 16}px)`;
    });
    if (hint.current) hint.current.style.opacity = String(clamp01(1 - p * 1.6));
  };
  return (
    <section ref={wrap} className="dot-story" aria-label="A Gellért röviden">
      <div className="dot-story__stage">
        <DotField shapes={SEQUENCE} stage={stage} onFrame={onFrame} className="dot-story__canvas" />
        <div className="container dot-story__copy">
          <p ref={hint} className="dot-story__hint eyebrow eyebrow--light">
            A Gellért öt pontban · görgess tovább
          </p>
          {DOT_STEPS.map((s, i) => (
            <div key={i} ref={(n) => void (caps.current[i] = n)} className="dot-story__cap" style={{ opacity: 0 }}>
              <p className="eyebrow eyebrow--light">{s.kicker}</p>
              <h2 className="h1">{s.title}</h2>
              <p className="lead">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Option C: ambient dots behind a dark section. The starfield gathers into one shape while the
 * section is in view and scatters again as it leaves.
 */
export function DotAmbient({ shape, wide, narrow }: { shape: DotShape; wide: DotPlace; narrow: DotPlace }) {
  const box = useRef<HTMLDivElement>(null);
  const stage = () => {
    const el = box.current?.parentElement;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    return r.top < innerHeight * 0.55 && r.bottom > innerHeight * 0.35 ? 1 : 0;
  };
  return (
    <div ref={box} className="dot-ambient" aria-hidden>
      <DotField shapes={[shape]} stage={stage} count={[5000, 2400]} wide={wide} narrow={narrow} className="dot-ambient__canvas" />
    </div>
  );
}
