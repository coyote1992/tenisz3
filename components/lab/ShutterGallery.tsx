"use client";

import { useEffect, useRef } from "react";
import { LabTag } from "./LabTag";

/**
 * 58 · Shutter-speed reveal.
 * Each photo arrives smeared along the direction of the swing, as if shot at 1/15 s,
 * and snaps sharp, with a quick flash, as the "shutter" speeds up. Hover replays it.
 */
const PHOTOS = [
  { src: "/img/forehand.jpg", alt: "Fiú tenyeresre készül a salakpályán", cap: "Tenyeres", dir: -0.15, span: "wide" },
  { src: "/img/volley-lunge.jpg", alt: "Játékos mély kitörésben röptézik a háló előtt", cap: "Röpte a hálónál", dir: 0.1, span: "tall" },
  { src: "/img/junior-forehand.jpg", alt: "Kislány tenyeres ütés közben", cap: "Tenisziskola", dir: 0.05, span: "" },
  { src: "/img/between-points.jpg", alt: "Két játékos beszélget két labdamenet között", cap: "Két labdamenet között", dir: 0, span: "" },
  { src: "/img/stadium-court.jpg", alt: "A centerpálya telt lelátóval, felülről", cap: "A centerpálya", dir: 0.35, span: "wide" },
  { src: "/img/school-group-court.jpg", alt: "A tenisziskola csoportképe a salakpályán", cap: "A Gellért Tenisziskola", dir: 0, span: "" },
];
const SPEEDS = ["1/15", "1/30", "1/60", "1/125", "1/250", "1/500", "1/1000", "1/2000"];

export function ShutterGallery() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = Array.from(grid.current!.querySelectorAll<HTMLElement>(".lab-shot"));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];
    cards.forEach((card, idx) => {
      const c = card.querySelector("canvas")!, ctx = c.getContext("2d")!;
      const speed = card.querySelector<HTMLElement>(".lab-shot__speed")!;
      const img = new Image();
      img.src = PHOTOS[idx].src;
      const dir = PHOTOS[idx].dir;
      let raf = 0, start = 0, played = false, inView = false;
      const size = () => {
        const d = Math.min(devicePixelRatio || 1, 2);
        c.width = c.clientWidth * d;
        c.height = c.clientHeight * d;
      };
      const paint = (blur: number, flash: number) => {
        if (!img.complete || !img.naturalWidth) return;
        const W = c.width, H = c.height;
        const s = Math.max(W / img.naturalWidth, H / img.naturalHeight) * 1.04;
        const w = img.naturalWidth * s, h = img.naturalHeight * s;
        const x0 = (W - w) / 2, y0 = (H - h) / 2;
        ctx.clearRect(0, 0, W, H);
        const n = blur > 0.01 ? 18 : 1;
        const len = blur * W * 0.09;
        const ux = Math.cos(dir), uy = Math.sin(dir);
        for (let k = 0; k < n; k++) {
          const o = n === 1 ? 0 : (k / (n - 1) - 0.5) * len;
          ctx.globalAlpha = 1 / (k + 1);
          ctx.drawImage(img, x0 + ux * o, y0 + uy * o, w, h);
        }
        ctx.globalAlpha = 1;
        if (flash > 0) {
          ctx.fillStyle = `rgba(255,252,240,${flash})`;
          ctx.fillRect(0, 0, W, H);
        }
      };
      const play = () => {
        cancelAnimationFrame(raf);
        start = performance.now();
        card.classList.add("is-shooting");
        const step = (now: number) => {
          const u = Math.min(1, (now - start) / 900);
          // the shutter speeds up: long smear, then sharp
          const blur = reduce ? 0 : Math.max(0, 1 - u / 0.7) ** 2;
          const flash = reduce ? 0 : u > 0.7 && u < 0.86 ? (1 - Math.abs((u - 0.78) / 0.08)) * 0.55 : 0;
          paint(blur, flash);
          speed.textContent = SPEEDS[Math.min(SPEEDS.length - 1, Math.floor((u / 0.72) * SPEEDS.length))] + " s";
          if (u < 1) raf = requestAnimationFrame(step);
          else card.classList.remove("is-shooting");
        };
        raf = requestAnimationFrame(step);
      };
      size();
      img.onload = () => {
        size();
        paint(played ? 0 : 1, 0);
        if (inView && !played) {
          played = true;
          play();
        }
      };
      const io = new IntersectionObserver(
        ([e]) => {
          inView = e.isIntersecting;
          if (e.isIntersecting && !played && img.complete) {
            played = true;
            setTimeout(play, (idx % 3) * 140);
          }
        },
        { threshold: 0.45 },
      );
      io.observe(card);
      const onEnter = () => played && play();
      card.addEventListener("pointerenter", onEnter);
      const ro = new ResizeObserver(() => {
        size();
        paint(played ? 0 : 1, 0);
      });
      ro.observe(c);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        card.removeEventListener("pointerenter", onEnter);
      });
    });
    return () => cleanups.forEach((f) => f());
  }, []);

  return (
    <section className="section lab-shutter" aria-labelledby="lab-shutter-title">
      <div className="container">
        <div className="lab-shutter__head">
          <p className="eyebrow">Pillanatok</p>
          <h2 id="lab-shutter-title" className="h2">
            Egy ütés <em>1/2000 másodperc alatt.</em>
          </h2>
        </div>
        <div ref={grid} className="lab-shutter__grid">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={`lab-shot${p.span ? " lab-shot--" + p.span : ""}`}>
              <canvas role="img" aria-label={p.alt} />
              <figcaption>
                <span>{p.cap}</span>
                <span className="lab-shot__speed">1/15 s</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <LabTag n="58" name="Shutter-speed reveal" />
    </section>
  );
}
