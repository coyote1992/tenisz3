"use client";

import { useEffect, useRef } from "react";
import anchors from "../lib/clay-anchors.json";
import { frameUrls } from "../lib/assets";
import { LabTag } from "./LabTag";

/**
 * 04 · The clay specimen.
 * A cut-away block of a clay court, rendered in Blender as 40 frames. Scrolling lifts the layers
 * apart like an exploded drawing; each label is pinned to its layer with a leader line
 * (the anchor points were projected from the 3D scene for every frame).
 */
const LAYERS = [
  { key: "top", name: "Fedőréteg", sub: "téglaőrlemény", text: "Égetett, finomra őrölt tégla. Ettől vörös a pálya, és ezen lehet csúszni." },
  { key: "dyn", name: "Dinamikus réteg", sub: "salak és klinker", text: "Rugalmas, vízáteresztő keverék. Ettől puha a pálya járása." },
  { key: "base", name: "Tartóréteg", sub: "zúzottkő", text: "Teherbíró alap, ami egyenletesen tartja a felső rétegeket." },
  { key: "drain", name: "Szivárgóréteg", sub: "kavics", text: "Elvezeti a lefelé szivárgó vizet." },
  { key: "soil", name: "Altalaj", sub: "tömörített föld", text: "Erre épül minden más." },
] as const;

type Anchor = Record<string, [number, number]>;

export function ClaySpecimen() {
  const wrap = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const labels = useRef<(HTMLDivElement | null)[]>([]);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = wrap.current!, c = cv.current!, ctx = c.getContext("2d")!;
    const imgs = frameUrls.clay.map((u) => {
      const i = new Image();
      i.src = u;
      return i;
    });
    const A = anchors as unknown as Anchor[];
    let raf = 0, drawn = -1, visible = false;
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
      drawn = -1;
    };
    size();
    addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(sec);
    let shown = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const target = Math.min(1, p / 0.75);
      shown += (target - shown) * 0.12;
      const f = Math.min(imgs.length - 1, Math.round(shown * (imgs.length - 1)));
      if (f !== drawn && imgs[f].complete && imgs[f].naturalWidth) {
        drawn = f;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(imgs[f], 0, 0, c.width, c.height);
      }
      // labels + leader lines
      const cr = c.getBoundingClientRect(), sr = stage.current!.getBoundingClientRect();
      const a = A[Math.min(A.length - 1, Math.round(shown * (A.length - 1)))];
      const paths: string[] = [];
      LAYERS.forEach((L, i) => {
        const el = labels.current[i];
        if (!el) return;
        const on = Math.min(1, Math.max(0, (shown - 0.15 - i * 0.12) / 0.2));
        el.style.opacity = String(on);
        el.style.setProperty("--full", shown > 0.8 ? "1" : "0");
        const [ax, ay] = a[L.key];
        const x = cr.left - sr.left + ax * cr.width, y = cr.top - sr.top + ay * cr.height;
        const lr = el.getBoundingClientRect();
        const lx = lr.left - sr.left - 10, ly = lr.top - sr.top + 14;
        el.style.setProperty("--y", `${y - 14}px`);
        if (on > 0.02) paths.push(`<path d="M${x + 6},${y} C${(x + lx) / 2},${y} ${(x + lx) / 2},${ly} ${lx},${ly}" opacity="${on}"/><circle cx="${x + 6}" cy="${y}" r="3" opacity="${on}"/>`);
      });
      if (svg.current) svg.current.innerHTML = paths.join("");
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
    };
  }, []);

  return (
    <section ref={wrap} className="lab-clay" aria-labelledby="lab-clay-title">
      <div ref={stage} className="lab-clay__stage">
        <div className="container lab-clay__head">
          <p className="eyebrow">A salak</p>
          <h2 id="lab-clay-title" className="h2">
            Mi van a <em>lábad alatt?</em>
          </h2>
          <p className="lab-clay__note">Egy salakpálya tipikus rétegrendje. Illusztráció, a rétegvastagságok nem méretarányosak.</p>
        </div>
        <canvas ref={cv} className="lab-clay__canvas" role="img" aria-label="Salakpálya rétegei szétnyitva: fedőréteg, dinamikus réteg, tartóréteg, szivárgóréteg, altalaj" />
        <svg ref={svg} className="lab-clay__lines" aria-hidden />
        <div className="lab-clay__labels">
          {LAYERS.map((L, i) => (
            <div key={L.key} ref={(n) => void (labels.current[i] = n)} className="lab-clay__label" style={{ opacity: 0 }}>
              <b>{L.name}</b>
              <span>{L.sub}</span>
              <p>{L.text}</p>
            </div>
          ))}
        </div>
        <LabTag n="04" name="Clay specimen" />
      </div>
    </section>
  );
}
