"use client";

import { useEffect, useRef } from "react";

/**
 * 30 · Ball progress.
 * A baseline across the top of the page; a ball rolls along it as you read.
 * When the booking button (#lab-cta) comes into view it drops onto it and bounces to rest.
 */
export function BallProgress() {
  const line = useRef<HTMLDivElement>(null);
  const ballEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let state: "bar" | "drop" | "rest" | "back" = "bar";
    let t0 = 0;
    let from = { x: 0, y: 0 };
    let x = 0, y = 0, rot = 0;
    const R = 9;

    const target = () => {
      const t = document.getElementById("lab-cta");
      if (!t) return null;
      const r = t.getBoundingClientRect();
      return { x: r.left + r.width * 0.8, y: r.top - R, vis: r.top < innerHeight * 0.72 && r.top > 90 };
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, scrollY / max) : 0;
      const hb = document.querySelector(".header")?.getBoundingClientRect().bottom ?? 68;
      const barX = 12 + p * (innerWidth - 24), barY = Math.max(68, hb) - R;
      const tg = target();
      const atEnd = !!tg?.vis;

      if (state === "bar" && atEnd) {
        state = "drop";
        t0 = now;
        from = { x, y };
      } else if ((state === "rest" || state === "drop") && !atEnd) {
        state = "back";
        t0 = now;
        from = { x, y };
      }

      if (state === "bar") {
        const nx = barX;
        rot += (nx - x) / R;
        x = nx;
        y = barY;
      } else if (state === "drop" && tg) {
        // fall with two shrinking bounces onto the button
        const u = Math.min(1, (now - t0) / 1100);
        const ex = from.x + (tg.x - from.x) * Math.min(1, u * 1.6);
        const seg = [0.55, 0.8, 1];
        let yy;
        if (u < seg[0]) {
          const k = u / seg[0];
          yy = from.y + (tg.y - from.y) * k * k;
        } else if (u < seg[1]) {
          const k = (u - seg[0]) / (seg[1] - seg[0]);
          yy = tg.y - 4 * k * (1 - k) * 46;
        } else {
          const k = (u - seg[1]) / (seg[2] - seg[1]);
          yy = tg.y - 4 * k * (1 - k) * 12;
        }
        rot += (ex - x) / R;
        x = ex;
        y = yy;
        if (u >= seg[0] && !ballEl.current!.dataset.hit) {
          ballEl.current!.dataset.hit = "1";
          dispatchEvent(new CustomEvent("lab:balldrop", { detail: { x: tg.x, y: tg.y + R } }));
        }
        if (u >= 1) state = "rest";
      } else if (state === "rest" && tg) {
        x = tg.x;
        y = tg.y;
      } else if (state === "back") {
        const u = Math.min(1, (now - t0) / 500);
        const k = 1 - (1 - u) ** 3;
        x = from.x + (barX - from.x) * k;
        y = from.y + (barY - from.y) * k;
        if (u >= 1) {
          state = "bar";
          delete ballEl.current!.dataset.hit;
        }
      }

      if (line.current) line.current.style.transform = `scaleX(${p})`;
      if (ballEl.current) ballEl.current.style.transform = `translate3d(${x - R}px, ${y - R}px, 0) rotate(${rot}rad)`;
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="lab-progress" aria-hidden>
      <div className="lab-progress__track" />
      <div ref={line} className="lab-progress__line" />
      <div ref={ballEl} className="lab-progress__ball" />
    </div>
  );
}
