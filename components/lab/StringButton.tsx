"use client";

import { useEffect, useRef } from "react";

/**
 * 26 · String-bed button.
 * The call-to-book button is a woven string bed in a frame. The strings bend around the cursor,
 * a press punches through them with a tiny synthesised "pock", and the ball from the
 * top-of-page progress bar lands on it at the end of the page.
 */
let audio: AudioContext | null = null;
function pock(strength = 1) {
  try {
    audio = audio || new AudioContext();
    const a = audio, t = a.currentTime;
    const o = a.createOscillator(), g = a.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(1250, t);
    o.frequency.exponentialRampToValueAtTime(520, t + 0.05);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22 * strength, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + 0.12);
    // a breath of felt-on-string noise
    const buf = a.createBuffer(1, a.sampleRate * 0.04, a.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / ch.length) ** 3;
    const n = a.createBufferSource(), bp = a.createBiquadFilter(), ng = a.createGain();
    n.buffer = buf;
    bp.type = "bandpass";
    bp.frequency.value = 2400;
    ng.gain.value = 0.18 * strength;
    n.connect(bp).connect(ng).connect(a.destination);
    n.start(t);
  } catch {}
}

export function StringButton({ href, children, id }: { href: string; children: React.ReactNode; id?: string }) {
  const el = useRef<HTMLAnchorElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const a = el.current!, c = cv.current!, ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, d = 1, raf = 0;
    let mx = 0.5, my = 0.5, hover = false;
    // dent depth is a damped spring: amp → target, with velocity (so presses wobble)
    let amp = 0, vel = 0, target = 0;
    let hx = 0.5, hy = 0.5; // impact point for impulses

    const size = () => {
      d = Math.min(devicePixelRatio || 1, 2);
      W = a.clientWidth;
      H = a.clientHeight;
      c.width = W * d;
      c.height = H * d;
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(a);

    const pos = (e: PointerEvent) => {
      const r = a.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    };
    const enter = (e: PointerEvent) => {
      hover = true;
      pos(e);
      target = 7;
    };
    const leave = () => {
      hover = false;
      target = 0;
    };
    const down = (e: PointerEvent) => {
      pos(e);
      hx = mx;
      hy = my;
      vel += 9;
      pock(1);
    };
    const drop = (e: Event) => {
      const r = a.getBoundingClientRect();
      const { x } = (e as CustomEvent).detail;
      hx = (x - r.left) / r.width;
      hy = 0.25;
      vel += 12;
      pock(0.8);
    };
    a.addEventListener("pointerenter", enter);
    a.addEventListener("pointermove", pos);
    a.addEventListener("pointerleave", leave);
    a.addEventListener("pointerdown", down);
    if (id) addEventListener("lab:balldrop", drop);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      vel += (target - amp) * 0.12;
      vel *= 0.86;
      amp += vel;
      if (!hover) {
        hx += (0.5 - hx) * 0.02;
        hy += (0.5 - hy) * 0.02;
      } else {
        hx += (mx - hx) * 0.25;
        hy += (my - hy) * 0.25;
      }
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const cx = hx * W, cy = hy * H, sig = 34;
      const A = reduce ? 0 : amp;
      const bend = (x: number, y: number): [number, number] => {
        const dx = x - cx, dy = y - cy, r2 = dx * dx + dy * dy;
        const k = (A * Math.exp(-r2 / (sig * sig))) / Math.max(8, Math.sqrt(r2));
        return [x + dx * k, y + dy * k];
      };
      const gap = 8;
      ctx.lineWidth = 1.1;
      // mains then crosses, alternating shade for the weave
      for (let pass = 0; pass < 2; pass++) {
        const n = pass === 0 ? Math.floor(W / gap) : Math.floor(H / gap);
        for (let i = 1; i < n; i++) {
          ctx.strokeStyle = i % 2 ? "rgba(255,246,232,.5)" : "rgba(255,246,232,.32)";
          ctx.beginPath();
          const steps = 26;
          for (let s = 0; s <= steps; s++) {
            const u = s / steps;
            const [x, y] = pass === 0 ? bend(i * gap, u * H) : bend(u * W, i * gap);
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      // where the strings are pushed hardest, a soft highlight
      if (A > 0.5) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, sig * 1.2);
        g.addColorStop(0, `rgba(255,240,215,${Math.min(0.28, A * 0.025)})`);
        g.addColorStop(1, "rgba(255,240,215,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      a.removeEventListener("pointerenter", enter);
      a.removeEventListener("pointermove", pos);
      a.removeEventListener("pointerleave", leave);
      a.removeEventListener("pointerdown", down);
      if (id) removeEventListener("lab:balldrop", drop);
    };
  }, [id]);

  return (
    <a ref={el} id={id} href={href} className="lab-strings">
      <canvas ref={cv} aria-hidden />
      <span className="lab-strings__label">{children}</span>
    </a>
  );
}
