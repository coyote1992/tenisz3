"use client";

import { useEffect, useRef } from "react";
import { court, player, racket, word, type Cloud } from "@/lib/lab/shapes";
import { LabTag } from "./LabTag";

/**
 * 86 · Spin flow field, after thedent.ai's ambient background.
 * A couple of thousand crisp dots on a 2D canvas. They start as a loose starfield and, as you
 * scroll, glide (each with its own small delay) into a ball, a racket, a serving player, the
 * court and the club's name. Morphs are eased slowly; every dot keeps a slow drift and twinkle.
 * The cursor pushes the whole shape, not single dots: it drifts and tilts away from the pointer
 * (bigger dots a touch more, for depth) and floats back to its place when left alone.
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

// lime, paper, clay, felt: weights 45 / 30 / 15 / 10 % for the loose state
const COLORS = ["#e6e28c", "#f5f0e6", "#e5875a", "#c9d34f"];
const PI = Math.PI, TAU = PI * 2;
const rand = (i: number, s: number) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const sm = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/** Nearest of the four palette colours for a shape colour (0..1 rgb). */
function paletteIndex(r: number, g: number, b: number) {
  if (r > 0.7 && g < 0.75 && b < 0.65 && r - g > 0.12) return 2; // clay, skin
  if (b < 0.62 && g > 0.7) return r > 0.8 ? 0 : 3; // lime strings, felt
  return 1; // paper: frame, lines, net, shirt
}

export function FlowField() {
  const wrap = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const intro = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = wrap.current!, c = cv.current!, ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false, raf = 0, visible = true;
    let W = 0, H = 0, count = 0;
    const S = 6; // states: loose, ball, racket, player, court, word

    // per particle statics
    let rad = new Float32Array(0), ph = new Float32Array(0), spd = new Float32Array(0), tws = new Float32Array(0), stg = new Float32Array(0);
    let halo = new Uint8Array(0), base = new Uint8Array(0);
    // targets per state, CSS px; colour index per state
    let tx: Float32Array[] = [], ty: Float32Array[] = [], tc: Uint8Array[] = [];
    // the ball is stored in 3D so it can turn slowly
    let bx = new Float32Array(0), by = new Float32Array(0), bz = new Float32Array(0), bring = new Uint8Array(0);
    let shapes: Cloud[] | null = null;
    let proj = { cx: 0, cy: 0, s: 1 };

    const setup = async () => {
      const mobile = innerWidth <= 768;
      count = mobile ? 3000 : 7000;
      rad = new Float32Array(count);
      ph = new Float32Array(count);
      spd = new Float32Array(count);
      tws = new Float32Array(count);
      stg = new Float32Array(count);
      halo = new Uint8Array(count);
      base = new Uint8Array(count);
      for (let i = 0; i < count; i++) {
        const pr = rand(i, 20);
        base[i] = pr < 0.45 ? 0 : pr < 0.75 ? 1 : pr < 0.9 ? 2 : 3;
        rad[i] = 0.75 + rand(i, 21) * 1.35;
        ph[i] = rand(i, 22) * TAU;
        spd[i] = 0.00026 + rand(i, 23) * 0.00016;
        tws[i] = 0.0007 + rand(i, 24) * 0.0008;
        stg[i] = rand(i, 8) * 0.25;
        halo[i] = rand(i, 30) < 0.07 ? 1 : 0; // a sparse starfield never joins a shape
      }
      // ball: a rim, the seam and a sprinkle of surface, in 3D
      bx = new Float32Array(count);
      by = new Float32Array(count);
      bz = new Float32Array(count);
      bring = new Uint8Array(count);
      const A = 0.66, B = 0.34, Cz = 2 * Math.sqrt(A * B), R = 0.85;
      for (let i = 0; i < count; i++) {
        const r = rand(i, 40);
        if (r < 0.3) {
          const t = rand(i, 41) * TAU, w = (rand(i, 42) - 0.5) * 0.03;
          bx[i] = (A * Math.cos(t) + B * Math.cos(3 * t)) * (R + w);
          by[i] = (A * Math.sin(t) - B * Math.sin(3 * t)) * (R + w);
          bz[i] = Cz * Math.sin(2 * t) * (R + w);
          bring[i] = 1; // seam: paper
        } else if (r < 0.62) {
          const t = rand(i, 43) * TAU, rr = R * (1 + (rand(i, 44) - 0.5) * 0.04);
          bx[i] = Math.cos(t) * rr;
          by[i] = Math.sin(t) * rr;
          bz[i] = 0;
          bring[i] = 2; // silhouette, fixed to the screen
        } else {
          const u = rand(i, 45) * 2 - 1, th = rand(i, 46) * TAU, s = Math.sqrt(1 - u * u);
          bx[i] = s * Math.cos(th) * R;
          by[i] = u * R;
          bz[i] = s * Math.sin(th) * R;
          bring[i] = 0;
        }
      }
      shapes = [racket(count), player(count), court(count), await word(count, "Gellért")];
      if (disposed) return;
      resize();
      raf = requestAnimationFrame(frame);
    };

    const project = (x: number, y: number, z: number): [number, number] => {
      const k = 4.2 / (4.2 - z);
      return [proj.cx + x * proj.s * k, proj.cy - y * proj.s * k];
    };

    const resize = () => {
      if (!shapes) return;
      const d = Math.min(devicePixelRatio || 1, innerWidth <= 768 ? 1.5 : 2);
      W = c.clientWidth;
      H = c.clientHeight;
      c.width = Math.round(W * d);
      c.height = Math.round(H * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const wide = W > 900;
      proj = { cx: wide ? W * 0.66 : W / 2, cy: wide ? H * 0.52 : H * 0.36, s: Math.min(wide ? W * 0.2 : W * 0.36, H * 0.3) };
      tx = [];
      ty = [];
      tc = [];
      // state 0: loose noise over the whole screen
      const nx = new Float32Array(count), ny = new Float32Array(count), nc = new Uint8Array(count);
      for (let i = 0; i < count; i++) {
        nx[i] = rand(i, 1) * W;
        ny[i] = rand(i, 2) * H;
        nc[i] = base[i];
      }
      tx.push(nx);
      ty.push(ny);
      tc.push(nc);
      // state 1: the ball is projected every frame; keep a slot
      tx.push(new Float32Array(count));
      ty.push(new Float32Array(count));
      tc.push(new Uint8Array(count).map((_, i) => (bring[i] === 1 ? 1 : base[i] === 2 ? 3 : base[i] === 1 ? 0 : base[i])));
      for (const sh of shapes) {
        const X = new Float32Array(count), Y = new Float32Array(count), Cc = new Uint8Array(count);
        for (let i = 0; i < count; i++) {
          const [x, y] = project(sh.pos[i * 3], sh.pos[i * 3 + 1], sh.pos[i * 3 + 2]);
          X[i] = x;
          Y[i] = y;
          Cc[i] = paletteIndex(sh.col[i * 3], sh.col[i * 3 + 1], sh.col[i * 3 + 2]);
        }
        tx.push(X);
        ty.push(Y);
        tc.push(Cc);
      }
    };

    let p = 0, lastT = 0;
    // the pushed shape: offset and tilt with velocity (a soft spring), pointer in canvas px
    let ox = 0, oy = 0, vx = 0, vy = 0, rot = 0, vr = 0, mx = -1e4, my = -1e4;
    const onMove = (e: PointerEvent) => {
      const rc = c.getBoundingClientRect();
      mx = e.clientX - rc.left;
      my = e.clientY - rc.top;
    };
    const onLeave = () => {
      mx = my = -1e4;
    };
    sec.addEventListener("pointermove", onMove, { passive: true });
    sec.addEventListener("pointerdown", onMove, { passive: true });
    sec.addEventListener("pointerleave", onLeave);
    sec.addEventListener("pointercancel", onLeave);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(sec);
    addEventListener("resize", resize);

    function frame(time: number) {
      raf = requestAnimationFrame(frame);
      const dt = lastT ? Math.min(time - lastT, 1000) : 16.7;
      lastT = time;
      // nothing to draw while off screen or under the preloader curtain
      if (!visible || document.documentElement.classList.contains("lab-loading")) return;
      const r = sec.getBoundingClientRect();
      const sp = clamp01(-r.top / (r.height - innerHeight));
      // each state holds for a while; the glide happens in the last 60% of its scroll slot
      const target = sp * (S - 1);
      const k0 = Math.floor(target);
      const stage = Math.min(S - 1, k0 + sm(0.3, 1, target - k0));
      p += (stage - p) * Math.min(1, dt * (reduce ? 1 : 0.0022));
      const t = reduce ? 0 : time;

      // push: when the pointer is over the shape, the whole shape wants to be a little further away
      const R = proj.s * 1.15, formed = clamp01(p);
      let gx = 0, gy = 0, gr = 0;
      if (!reduce && formed > 0.3) {
        const dx = proj.cx + ox - mx, dy = proj.cy + oy - my, d = Math.hypot(dx, dy);
        if (d < R) {
          const push = (1 - d / R) ** 0.8 * formed;
          const max = proj.s * 0.22; // a small gesture: at most ~a fifth of the shape's size
          gx = (dx / (d || 1)) * max * push;
          gy = (dy / (d || 1)) * max * push;
          gr = (dx / (d || 1)) * 0.07 * push; // tips away from the side it was touched
        }
      }
      // soft, slightly under-damped spring: it gives way, then floats back
      const k1 = Math.min(1, dt / 16.7);
      vx = (vx + (gx - ox) * 0.009 * k1) * (1 - 0.11 * k1);
      vy = (vy + (gy - oy) * 0.009 * k1) * (1 - 0.11 * k1);
      vr = (vr + (gr - rot) * 0.009 * k1) * (1 - 0.11 * k1);
      ox += vx * k1;
      oy += vy * k1;
      rot += vr * k1;
      const cr = Math.cos(rot), sr = Math.sin(rot);

      // the ball turns slowly about a tilted axis
      const a = t * 0.00018, ca = Math.cos(a), sa = Math.sin(a), tl = 0.35, ct = Math.cos(tl), st = Math.sin(tl);
      const BX = tx[1], BY = ty[1];
      for (let i = 0; i < count; i++) {
        if (bring[i] === 2) {
          [BX[i], BY[i]] = project(bx[i], by[i], 0);
          continue;
        }
        const x = bx[i] * ca + bz[i] * sa, z = -bx[i] * sa + bz[i] * ca;
        const y = by[i] * ct - z * st, z2 = by[i] * st + z * ct;
        [BX[i], BY[i]] = project(x, y, z2);
      }

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const k = Math.min(S - 2, Math.floor(p)), local = p - k;
      // 4 colours x 4 brightness levels: 16 batched paths instead of 7000 separate fills
      const paths = Array.from({ length: 16 }, () => new Path2D());
      for (let i = 0; i < count; i++) {
        const sg = stg[i];
        const f = halo[i] ? 0 : sm(sg, sg + 0.75, local);
        const ka = halo[i] ? 0 : k, kb = halo[i] ? 0 : k + 1;
        let x = tx[ka][i] + (tx[kb][i] - tx[ka][i]) * f;
        let y = ty[ka][i] + (ty[kb][i] - ty[ka][i]) * f;
        // loose dots wander more; shaped dots only breathe
        const loose = halo[i] ? 1 : 1 - clamp01(p);
        const wob = t * spd[i] + ph[i];
        const amp = 3 + 12 * loose;
        x += Math.cos(wob) * amp;
        y += Math.sin(wob * 1.27 + ph[i]) * amp;
        if (!halo[i]) {
          // move with the pushed shape: tilt about its centre, then shift (bigger dots slightly more)
          const rx = x - proj.cx, ry = y - proj.cy, dep = 0.85 + 0.3 * (rad[i] / 2.1);
          x = proj.cx + rx * cr - ry * sr + ox * dep;
          y = proj.cy + rx * sr + ry * cr + oy * dep;
        }
        const ci = f < 0.5 ? tc[ka][i] : tc[kb][i];
        const tw = 0.5 + 0.5 * Math.sin(t * tws[i] + ph[i] * 13.7);
        const lv = halo[i] ? 0 : Math.min(3, Math.floor(tw * 4));
        const path = paths[ci * 4 + lv];
        path.moveTo(x + rad[i], y);
        path.arc(x, y, rad[i], 0, TAU);
      }
      for (let b = 0; b < 16; b++) {
        ctx.fillStyle = COLORS[b >> 2];
        ctx.globalAlpha = 0.34 + (b & 3) * 0.16;
        ctx.fill(paths[b]);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      // captions follow the settled state
      const idx = Math.round(p);
      caps.current.forEach((el, i) => {
        if (!el) return;
        const on = i + 1 === idx;
        el.style.opacity = on ? "1" : "0";
        el.style.transform = `translateY(${on ? 0 : i + 1 < idx ? -16 : 16}px)`;
      });
      if (intro.current) {
        const v = clamp01(1 - p * 1.6);
        intro.current.style.opacity = String(v);
        intro.current.style.transform = `translateY(${(1 - v) * -20}px)`;
      }
      dots.current?.querySelectorAll("span").forEach((d, i) => d.classList.toggle("on", i + 1 === idx));
    }

    setup();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", resize);
      sec.removeEventListener("pointermove", onMove);
      sec.removeEventListener("pointerdown", onMove);
      sec.removeEventListener("pointerleave", onLeave);
      sec.removeEventListener("pointercancel", onLeave);
    };
  }, []);

  return (
    <section ref={wrap} className="lab-flow" aria-label="Bevezető">
      <div className="lab-flow__stage">
        <canvas ref={cv} className="lab-flow__canvas" aria-hidden />
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
