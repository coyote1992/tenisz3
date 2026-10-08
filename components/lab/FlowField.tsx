"use client";

import { useRef } from "react";
import { DotField, type DotShape } from "@/components/DotField";
import { LabTag } from "./LabTag";

/**
 * 86 · Spin flow field, after thedent.ai's ambient background.
 * 7 000 crisp dots (3 000 on phones) from the shared DotField engine (WebGL).
 * They start as a loose starfield and, as you scroll, glide (each with its own small delay)
 * into a ball, a racket, a serving player, the court and the club's name. Morphs are eased
 * slowly; every dot keeps a slow drift and twinkle. Dots near the cursor slide out of its way
 * inside a small circle, and drift back when it moves on.
 */

const STEPS = [
  {
    kicker: "1996 óta",
    title: "Itt pattog a labda.",
    text: "Az újszegedi Gellért 1996-ban nyitott. Azóta magyar bajnokságot, Davis Kupát és Fed Kupát is látott.",
  },
  {
    kicker: "Ütőkölcsönzés",
    title: "Ütőt mi adunk.",
    text: "Ütő a recepción kölcsönözhető, 600 Ft / db. Az első órához nem kell saját felszerelés.",
  },
  {
    kicker: "Tenisziskola",
    title: "5 éves kortól.",
    text: "Tenisziskola 5–17 éveseknek, és felnőtteknek is.",
  },
  {
    kicker: "Pályák",
    title: "12 salakpálya.",
    text: "Szabadtéri salakpályák a nyári szezonban, ebből 5 világítással, este 10 óráig.",
  },
  {
    kicker: "Szeged, Derkovits fasor 113.",
    title: "Gellért.",
    text: "Pályafoglalás telefonon, a recepción: +36 70 686 5124.",
  },
];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const sm = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const SHAPES: DotShape[] = ["ball", "racket", "player", "court", { word: "Gellért" }];

export function FlowField() {
  const wrap = useRef<HTMLElement>(null);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const intro = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);

  // scroll through the pinned section: each state holds, then glides in the last 60% of its slot
  const stage = () => {
    const sec = wrap.current;
    if (!sec) return 0;
    const r = sec.getBoundingClientRect();
    const target = clamp01(-r.top / (r.height - innerHeight)) * SHAPES.length;
    const k0 = Math.floor(target);
    return Math.min(SHAPES.length, k0 + sm(0.3, 1, target - k0));
  };

  // captions follow the settled state
  const onFrame = (p: number) => {
    const idx = Math.round(p);
    caps.current.forEach((c, i) => {
      if (!c) return;
      const on = i + 1 === idx;
      c.style.opacity = on ? "1" : "0";
      c.style.transform = `translateY(${on ? 0 : i + 1 < idx ? -16 : 16}px)`;
    });
    if (intro.current) {
      const v = clamp01(1 - p * 1.6);
      intro.current.style.opacity = String(v);
      intro.current.style.transform = `translateY(${(1 - v) * -20}px)`;
    }
    dots.current?.querySelectorAll("span").forEach((d, i) => d.classList.toggle("on", i + 1 === idx));
  };

  return (
    <section ref={wrap} className="lab-flow" aria-label="Bevezető">
      <div className="lab-flow__stage">
        <DotField shapes={SHAPES} stage={stage} onFrame={onFrame} className="lab-flow__canvas" />
        <div className="container lab-flow__copy">
          <div ref={intro} className="lab-flow__intro">
            <p className="eyebrow eyebrow--light">Labor · tizenkét ötlet élesben</p>
            <h1 className="h1">
              A pálya, <em>ahogy még nem láttad.</em>
            </h1>
            <p className="lead">Görgess lassan. Minden, ami ezen az oldalon mozog, a Gellért valódi adataiból és fotóiból épül.</p>
          </div>
          {STEPS.map((s, i) => (
            <div key={i} ref={(n) => void (caps.current[i] = n)} className="lab-flow__cap" style={{ opacity: 0 }}>
              <p className="eyebrow eyebrow--light">{s.kicker}</p>
              <h2 className="h1">{s.title}</h2>
              <p className="lead">{s.text}</p>
            </div>
          ))}
        </div>
        <div ref={dots} className="lab-flow__dots" aria-hidden>
          {STEPS.map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <LabTag n="86" name="Dot field · after thedent.ai" dark />
      </div>
    </section>
  );
}
