"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { priceSeason, tennisPrices } from "@/lib/site";
import { LabTag } from "./LabTag";

/**
 * 10 · Brush the clay.
 * The section background is a procedural clay surface. The cursor drags a brush mat over it,
 * leaving fine parallel lines in the direction of travel; they settle back over a few seconds.
 * On touch screens (and when idle) a sweeper does laps by itself.
 */
export function BrushClay() {
  const sec = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const s = sec.current!, c = cv.current!, ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, d = 1, raf = 0, visible = false;
    let base: HTMLCanvasElement | null = null;
    let mark: HTMLCanvasElement, mctx: CanvasRenderingContext2D;

    const makeBase = () => {
      const b = document.createElement("canvas");
      b.width = c.width;
      b.height = c.height;
      const g = b.getContext("2d")!;
      g.fillStyle = "#b65a31";
      g.fillRect(0, 0, b.width, b.height);
      // granules: thousands of tiny light/dark specks
      const n = (b.width * b.height) / 28;
      for (let i = 0; i < n; i++) {
        const x = Math.random() * b.width, y = Math.random() * b.height, l = Math.random();
        g.fillStyle = l < 0.5 ? `rgba(120,48,20,${0.12 + l * 0.2})` : `rgba(235,150,105,${(l - 0.5) * 0.35})`;
        g.fillRect(x, y, 1 + Math.random() * 1.5 * d, 1 + Math.random() * 1.5 * d);
      }
      // soft large-scale variation
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * b.width, y = Math.random() * b.height, r = (80 + Math.random() * 200) * d;
        const gr = g.createRadialGradient(x, y, 0, x, y, r);
        const dark = Math.random() < 0.5;
        gr.addColorStop(0, dark ? "rgba(110,45,20,.12)" : "rgba(220,140,95,.12)");
        gr.addColorStop(1, "rgba(0,0,0,0)");
        g.fillStyle = gr;
        g.fillRect(x - r, y - r, r * 2, r * 2);
      }
      // faint old brush passes
      g.globalAlpha = 0.05;
      g.strokeStyle = "#f3c19c";
      for (let y = 0; y < b.height; y += 3 * d) {
        g.beginPath();
        g.moveTo(0, y + Math.sin(y) * 2);
        g.lineTo(b.width, y + Math.cos(y) * 2);
        g.stroke();
      }
      g.globalAlpha = 1;
      return b;
    };

    const size = () => {
      d = Math.min(devicePixelRatio || 1, 2);
      W = s.clientWidth;
      H = s.clientHeight;
      c.width = W * d;
      c.height = H * d;
      base = makeBase();
      mark = document.createElement("canvas");
      mark.width = c.width;
      mark.height = c.height;
      mctx = mark.getContext("2d")!;
    };
    size();
    const ro = new ResizeObserver(() => {
      if (Math.abs(s.clientWidth - W) > 2 || Math.abs(s.clientHeight - H) > 2) size();
    });
    ro.observe(s);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(s);

    let mx = -1, my = -1, pmx = -1, pmy = -1, lastMove = 0, ang = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = s.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      lastMove = performance.now();
    };
    s.addEventListener("pointermove", onMove);

    const brush = (x0: number, y0: number, x1: number, y1: number) => {
      const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy);
      if (L < 0.5) return;
      ang = Math.atan2(dy, dx);
      const nx = -dy / L, ny = dx / L;
      const half = 64;
      mctx.save();
      mctx.scale(d, d);
      mctx.lineCap = "round";
      for (let k = -half; k <= half; k += 3) {
        const edge = 1 - Math.abs(k) / half;
        const light = (k / 3) % 2 === 0;
        mctx.strokeStyle = light ? `rgba(248,180,132,${0.5 * edge + 0.08})` : `rgba(98,36,14,${0.42 * edge + 0.06})`;
        mctx.lineWidth = 1.3;
        mctx.beginPath();
        mctx.moveTo(x0 + nx * k, y0 + ny * k);
        mctx.lineTo(x1 + nx * k, y1 + ny * k);
        mctx.stroke();
      }
      mctx.restore();
    };

    const t0 = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || !base) return;
      // idle / touch: a sweeper does slow laps
      const idle = now - lastMove > 2500;
      if (idle && !reduce) {
        const t = (now - t0) / 1000;
        const ix = W * 0.5 + Math.sin(t * 0.45) * W * 0.42, iy = H * 0.5 + Math.sin(t * 0.9) * H * 0.32;
        if (pmx >= 0) brush(pmx, pmy, ix, iy);
        pmx = ix;
        pmy = iy;
      } else if (mx >= 0) {
        if (pmx >= 0) brush(pmx, pmy, mx, my);
        pmx = mx;
        pmy = my;
      }
      // settle: marks fade back into the clay
      mctx.globalCompositeOperation = "destination-out";
      mctx.fillStyle = "rgba(0,0,0,.012)";
      mctx.fillRect(0, 0, mark.width, mark.height);
      mctx.globalCompositeOperation = "source-over";

      ctx.drawImage(base, 0, 0);
      ctx.drawImage(mark, 0, 0);
      // the drag mat itself
      if (pmx >= 0 && (now - lastMove < 300 || idle)) {
        ctx.save();
        ctx.scale(d, d);
        ctx.translate(pmx, pmy);
        ctx.rotate(ang + Math.PI / 2);
        ctx.fillStyle = "rgba(30,30,25,.22)";
        ctx.fillRect(-66, -14, 132, 22);
        ctx.strokeStyle = "rgba(250,245,235,.5)";
        ctx.lineWidth = 1;
        for (let x = -66; x <= 66; x += 6) {
          ctx.beginPath();
          ctx.moveTo(x, -14);
          ctx.lineTo(x, 8);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(21,36,26,.85)";
        ctx.fillRect(-68, -16, 136, 4);
        ctx.restore();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      s.removeEventListener("pointermove", onMove);
    };
  }, []);

  const rows = tennisPrices.weekday;
  return (
    <section ref={sec} className="lab-brush" aria-labelledby="lab-brush-title">
      <canvas ref={cv} className="lab-brush__canvas" aria-hidden />
      <div className="container lab-brush__inner">
        <div className="lab-brush__card">
          <p className="eyebrow">Árak · {priceSeason.label}</p>
          <h2 id="lab-brush-title" className="h2">
            Egy óra salak, <em>hétköznap.</em>
          </h2>
          <table className="lab-brush__table">
            <thead>
              <tr>
                <th scope="col">Idősáv</th>
                <th scope="col">Alkalom</th>
                <th scope="col">10-es bérlet</th>
                <th scope="col">Szezonbérlet*</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.time}>
                  <td>{r.time}</td>
                  <td>
                    <b>{r.single} Ft</b>
                  </td>
                  <td>{r.ten} Ft</td>
                  <td>{r.season} Ft</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lab-brush__fine">
            * 27 hétre szól, alkalmankénti díj. {priceSeason.range} · <Link href="/arak">Minden ár</Link>
          </p>
        </div>
        <p className="lab-brush__hint" aria-hidden>
          Húzd végig az egeret a salakon
        </p>
      </div>
      <LabTag n="10" name="Brush the clay" />
    </section>
  );
}
