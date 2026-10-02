"use client";

import { useEffect, useRef } from "react";

/**
 * 42 · Ball basket progress.
 * A coach's wire ball basket that fills one ball at a time as something loads.
 * The balls are simulated (gravity, walls, ball-on-ball), so every load looks slightly different.
 */
export function BallBasket({
  progress,
  capacity = 26,
  tone = "dark",
  onFull,
}: {
  progress: number;
  capacity?: number;
  tone?: "dark" | "paper";
  onFull?: () => void;
}) {
  const cv = useRef<HTMLCanvasElement>(null);
  const prog = useRef(progress);
  const full = useRef(onFull);
  prog.current = progress;
  full.current = onFull;

  useEffect(() => {
    const c = cv.current!, ctx = c.getContext("2d")!;
    const d = Math.min(devicePixelRatio || 1, 2);
    const W = c.clientWidth, H = c.clientHeight;
    c.width = W * d;
    c.height = H * d;
    const R = Math.min(W, H) * 0.052;
    // basket in side view: a slightly tapered cylinder
    const bx0 = W * 0.22, bx1 = W * 0.78, by0 = H * 0.36, by1 = H * 0.9, taper = W * 0.035;
    const walls: [number, number, number, number][] = [
      [bx0, by0, bx0 + taper, by1],
      [bx0 + taper, by1, bx1 - taper, by1],
      [bx1 - taper, by1, bx1, by0],
    ];
    type B = { x: number; y: number; px: number; py: number; rot: number; born: number };
    const balls: B[] = [];
    let raf = 0, fired = false, last = 0;

    const collideSeg = (b: B, [x0, y0, x1, y1]: number[]) => {
      const dx = x1 - x0, dy = y1 - y0, L2 = dx * dx + dy * dy;
      const t = Math.max(0, Math.min(1, ((b.x - x0) * dx + (b.y - y0) * dy) / L2));
      const qx = x0 + dx * t, qy = y0 + dy * t;
      const ex = b.x - qx, ey = b.y - qy, dist = Math.hypot(ex, ey);
      if (dist < R && dist > 1e-6) {
        const push = R - dist;
        b.x += (ex / dist) * push;
        b.y += (ey / dist) * push;
      }
    };

    const drawBall = (x: number, y: number, rot: number) => {
      const g = ctx.createRadialGradient(x - R * 0.35, y - R * 0.4, R * 0.1, x, y, R);
      g.addColorStop(0, "#f1f59a");
      g.addColorStop(0.6, "#d9e05a");
      g.addColorStop(1, "#98a31a");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, R, 0, Math.PI * 2);
      ctx.clip();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.strokeStyle = "rgba(251,251,242,.95)";
      ctx.lineWidth = Math.max(1, R * 0.14);
      ctx.beginPath();
      ctx.arc(-R * 1.25, 0, R * 0.9, -0.95, 0.95);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(R * 1.25, 0, R * 0.9, Math.PI - 0.95, Math.PI + 0.95);
      ctx.stroke();
      ctx.restore();
    };

    const wire = tone === "dark" ? "rgba(245,240,230,.75)" : "rgba(21,36,26,.7)";
    const wireSoft = tone === "dark" ? "rgba(245,240,230,.28)" : "rgba(21,36,26,.25)";

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const want = Math.round(Math.max(0, Math.min(1, prog.current)) * capacity);
      if (balls.length < want && now - last > 55) {
        last = now;
        const x = W * 0.5 + (Math.random() - 0.5) * (bx1 - bx0) * 0.5;
        balls.push({ x, y: -R * 2, px: x - (Math.random() - 0.5) * 2, py: -R * 2 - 3, rot: Math.random() * 6, born: now });
      }
      // verlet integration + constraint relaxation
      for (const b of balls) {
        const vx = (b.x - b.px) * 0.995, vy = (b.y - b.py) * 0.995;
        b.px = b.x;
        b.py = b.y;
        b.x += vx;
        b.y += vy + 0.55;
        b.rot += vx / R;
      }
      for (let it = 0; it < 4; it++) {
        for (let i = 0; i < balls.length; i++) {
          const a = balls[i];
          for (let j = i + 1; j < balls.length; j++) {
            const b = balls[j];
            const dx = b.x - a.x, dy = b.y - a.y, dist = Math.hypot(dx, dy);
            if (dist < 2 * R && dist > 1e-6) {
              const k = (2 * R - dist) / dist / 2;
              a.x -= dx * k;
              a.y -= dy * k;
              b.x += dx * k;
              b.y += dy * k;
            }
          }
          for (const w of walls) collideSeg(a, w);
          // keep balls that bounce out of the top rim inside the basket's width
          if (a.y > by0) a.x = Math.max(bx0 + R * 0.6, Math.min(bx1 - R * 0.6, a.x));
        }
      }

      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // back of the basket
      ctx.strokeStyle = wireSoft;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(W / 2, by0, (bx1 - bx0) / 2, H * 0.035, 0, Math.PI, Math.PI * 2);
      ctx.stroke();
      // shadow
      ctx.fillStyle = tone === "dark" ? "rgba(0,0,0,.3)" : "rgba(21,36,26,.12)";
      ctx.beginPath();
      ctx.ellipse(W / 2, by1 + H * 0.045, (bx1 - bx0) * 0.55, H * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      for (const b of balls) drawBall(b.x, b.y, b.rot);
      // front wires
      ctx.strokeStyle = wire;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      const n = 9;
      for (let i = 0; i <= n; i++) {
        const u = i / n;
        const xt = bx0 + (bx1 - bx0) * u, xb = bx0 + taper + (bx1 - bx0 - 2 * taper) * u;
        const bulge = Math.sin(u * Math.PI) * H * 0.035;
        ctx.moveTo(xt, by0 + bulge);
        ctx.lineTo(xb, by1 + bulge * 0.7);
      }
      for (const v of [0, 0.5, 1]) {
        const y = by0 + (by1 - by0) * v, inset = taper * v;
        ctx.moveTo(bx0 + inset, y);
        ctx.ellipse(W / 2, y, (bx1 - bx0) / 2 - inset, H * 0.035, 0, Math.PI, 0, true);
      }
      ctx.stroke();
      // legs and handles
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bx0 + taper, by1);
      ctx.lineTo(bx0 + taper - W * 0.04, by1 + H * 0.06);
      ctx.moveTo(bx1 - taper, by1);
      ctx.lineTo(bx1 - taper + W * 0.04, by1 + H * 0.06);
      const fill = balls.length / capacity;
      const lift = H * 0.02 + (1 - fill) * H * 0.0;
      ctx.moveTo(bx0, by0);
      ctx.quadraticCurveTo(bx0 - W * 0.08, by0 - H * 0.2 - lift, W * 0.5 - W * 0.06, by0 - H * 0.27 - lift);
      ctx.moveTo(bx1, by0);
      ctx.quadraticCurveTo(bx1 + W * 0.08, by0 - H * 0.2 - lift, W * 0.5 + W * 0.06, by0 - H * 0.27 - lift);
      ctx.stroke();

      // full: every ball dropped and the last one has had time to land
      const settled = balls.length >= capacity && now - last > 750;
      if (settled && !fired) {
        fired = true;
        full.current?.();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [capacity, tone]);

  return <canvas ref={cv} className="lab-basket" aria-hidden />;
}
