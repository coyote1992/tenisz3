"use client";

import { useEffect, useRef } from "react";
import { LabTag } from "./LabTag";

/**
 * 12 · The net as divider.
 * A real tennis net between sections: posts, a white tape, a centre strap and a knotted mesh.
 * Fast scrolling makes it sag and ripple; the cursor pushes into it; it settles when you stop.
 */
export function NetDivider({ tone = "paper", tag = true }: { tone?: "paper" | "dark"; tag?: boolean }) {
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = cv.current!, ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const M = 72;
    const y = new Float32Array(M), v = new Float32Array(M);
    let W = 0, H = 0, d = 1, visible = false, lastY = scrollY, raf = 0;
    let px = -1, py = -1;

    const size = () => {
      d = Math.min(devicePixelRatio || 1, 2);
      W = c.clientWidth;
      H = c.clientHeight;
      c.width = W * d;
      c.height = H * d;
    };
    size();
    addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(c);
    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
    };
    const onLeave = () => (px = py = -1);
    c.addEventListener("pointermove", onMove);
    c.addEventListener("pointerleave", onLeave);

    const dark = tone === "dark";
    const meshCol = dark ? "rgba(245,240,230,.34)" : "rgba(21,36,26,.42)";
    const post = dark ? "#e6e28c" : "#21492b";

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const sv = scrollY - lastY;
      lastY = scrollY;
      if (!visible) return;
      // physics: neighbours, rest, damping; ends fixed to the posts
      const kick = reduce ? 0 : Math.max(-14, Math.min(14, sv * 0.06));
      for (let i = 1; i < M - 1; i++) {
        const s = Math.sin((i / (M - 1)) * Math.PI);
        let f = (y[i - 1] + y[i + 1] - 2 * y[i]) * 0.5 - y[i] * 0.012 + kick * s * 0.08;
        if (px >= 0) {
          const x = (i / (M - 1)) * W, dx = (x - px) / 60;
          f += Math.exp(-dx * dx) * (py < H * 0.5 ? 0.9 : 0.4);
        }
        v[i] = (v[i] + f) * 0.92;
      }
      for (let i = 1; i < M - 1; i++) y[i] += v[i];

      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const L = 22, R = W - 22, top = 26, bot = H - 16, mh = bot - top;
      const sag = (x: number) => {
        const u = (x - L) / (R - L);
        const f = u * (M - 1), i = Math.max(0, Math.min(M - 2, Math.floor(f))), t = f - i;
        return 6 * Math.sin(u * Math.PI) + y[i] + (y[i + 1] - y[i]) * t;
      };
      // ground shadow
      ctx.fillStyle = dark ? "rgba(0,0,0,.22)" : "rgba(21,36,26,.07)";
      ctx.fillRect(L, bot + 6, R - L, 4);
      // mesh
      ctx.strokeStyle = meshCol;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      const g = 9;
      for (let x = L; x <= R; x += g) {
        for (let k = 0; k <= 1; k += 0.05) {
          const yy = top + sag(x) * (1 - k) + k * mh + Math.sin(x * 0.02) * 0;
          if (k === 0) ctx.moveTo(x, yy);
          else ctx.lineTo(x + sag(x) * 0.02 * k, yy);
        }
      }
      for (let k = g / mh; k < 1; k += g / mh) {
        for (let x = L; x <= R; x += 12) {
          const yy = top + sag(x) * (1 - k) + k * mh;
          if (x === L) ctx.moveTo(x, yy);
          else ctx.lineTo(x, yy);
        }
      }
      ctx.stroke();
      // bottom cord
      ctx.strokeStyle = meshCol;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(L, bot);
      ctx.lineTo(R, bot);
      ctx.stroke();
      // centre strap
      const cx = (L + R) / 2;
      ctx.fillStyle = dark ? "#f5f0e6" : "#fbf8f2";
      ctx.beginPath();
      ctx.moveTo(cx - 5, top + sag(cx));
      ctx.lineTo(cx + 5, top + sag(cx));
      ctx.lineTo(cx + 5, bot);
      ctx.lineTo(cx - 5, bot);
      ctx.fill();
      ctx.strokeStyle = "rgba(21,36,26,.18)";
      ctx.lineWidth = 1;
      ctx.stroke();
      // tape
      ctx.lineCap = "butt";
      ctx.strokeStyle = "rgba(21,36,26,.16)";
      ctx.lineWidth = 9;
      ctx.beginPath();
      for (let x = L; x <= R; x += 6) (x === L ? ctx.moveTo(x, top + sag(x) + 2) : ctx.lineTo(x, top + sag(x) + 2));
      ctx.stroke();
      ctx.strokeStyle = "#fbf8f2";
      ctx.lineWidth = 8;
      ctx.beginPath();
      for (let x = L; x <= R; x += 6) (x === L ? ctx.moveTo(x, top + sag(x)) : ctx.lineTo(x, top + sag(x)));
      ctx.stroke();
      // posts
      ctx.fillStyle = post;
      for (const x of [L - 6, R + 1]) {
        ctx.beginPath();
        ctx.roundRect(x, top - 10, 5, bot - top + 18, 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 2.5, top - 10, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
      c.removeEventListener("pointermove", onMove);
      c.removeEventListener("pointerleave", onLeave);
    };
  }, [tone]);

  return (
    <div className={`lab-net lab-net--${tone}`}>
      <canvas ref={cv} aria-hidden />
      {tag && <LabTag n="12" name="Net divider" dark={tone === "dark"} />}
    </div>
  );
}
