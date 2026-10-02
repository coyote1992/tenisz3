"use client";

import { useEffect, useRef } from "react";
import { fk, POSES, SHOTS } from "@/lib/rally/pose.js";
import { LabTag } from "./LabTag";

/**
 * 81 · Blueprint mode (+ the skeleton view, after pwang724's "Skeleton Tennis" quiz).
 * Scroll 1: the court draws itself as a plan with its official ITF dimensions.
 * Scroll 2: the plan tilts up into a broadcast-style side view and the net rises.
 * Scroll 3: two wireframe players play a point; scrolling scrubs time back and forth,
 * each shot is labelled like a match-analysis overlay and bounce marks stay on the court.
 */

type V3 = [number, number, number];
type Pose = Record<string, number>;
type Shot = { by: 0 | 1; kind: "serve" | "forehand" | "backhand"; tc: number; at: V3; bounce: V3; tb: number; arc: number; label: string };

const HL = 23.77 / 2, HW = 10.97 / 2, HS = 8.23 / 2, SV = 6.4;
const C_A = "#e6e28c", C_B = "#f0a982", INK = "#f5f0e6";

// the point: contact times (s), contact points, bounce points (x along the court, y up, z across)
const SHOTS_PLAN: Shot[] = [
  { by: 0, kind: "serve", tc: 1.16, at: [-12.0, 2.75, -0.7], bounce: [5.6, 0, 3.7], tb: 1.66, arc: 0.15, label: "Szerva · kifelé" },
  { by: 1, kind: "backhand", tc: 2.06, at: [11.4, 0.95, 4.7], bounce: [-7.4, 0, -3.0], tb: 2.86, arc: 1.25, label: "Fonák return · keresztbe" },
  { by: 0, kind: "forehand", tc: 3.3, at: [-11.6, 0.95, -3.5], bounce: [7.9, 0, 2.6], tb: 4.08, arc: 1.4, label: "Tenyeres · keresztbe" },
  { by: 1, kind: "forehand", tc: 4.5, at: [11.7, 1.0, 3.0], bounce: [-8.2, 0, 0.6], tb: 5.3, arc: 1.5, label: "Tenyeres · középre" },
  { by: 0, kind: "forehand", tc: 5.72, at: [-11.2, 0.95, 0.9], bounce: [9.6, 0, -4.0], tb: 6.38, arc: 0.9, label: "Tenyeres nyerő · a vonalra" },
];
const T_END = 8.2;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const sm = (t: number) => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};

function ballAt(t: number): V3 | null {
  // before the serve: toss from the left hand
  const s0 = SHOTS_PLAN[0];
  if (t < 0.66) return null;
  if (t < s0.tc) {
    const u = (t - 0.66) / (s0.tc - 0.66);
    return [s0.at[0] + 0.25, lerp(1.5, s0.at[1], u) + 4 * u * (1 - u) * 0.55, s0.at[2] - 0.15];
  }
  for (let i = 0; i < SHOTS_PLAN.length; i++) {
    const s = SHOTS_PLAN[i], n = SHOTS_PLAN[i + 1];
    if (t < s.tb) {
      const u = (t - s.tc) / (s.tb - s.tc);
      return [lerp(s.at[0], s.bounce[0], u), lerp(s.at[1], 0, u) + 4 * u * (1 - u) * s.arc, lerp(s.at[2], s.bounce[2], u)];
    }
    if (n && t < n.tc) {
      const u = (t - s.tb) / (n.tc - s.tb);
      return [lerp(s.bounce[0], n.at[0], u), lerp(0, n.at[1], u) + 4 * u * (1 - u) * 1.1, lerp(s.bounce[2], n.at[2], u)];
    }
    if (!n) {
      // the winner: second bounce, then it rolls into the back fence
      const u = t - s.tb;
      const vx = (s.bounce[0] - s.at[0]) / (s.tb - s.tc), vz = (s.bounce[2] - s.at[2]) / (s.tb - s.tc);
      const h = u < 0.7 ? 4 * (u / 0.7) * (1 - u / 0.7) * 0.9 : u < 1.05 ? 4 * ((u - 0.7) / 0.35) * (1 - (u - 0.7) / 0.35) * 0.2 : 0;
      const slow = u < 1.05 ? u : 1.05 + (u - 1.05) * 0.4;
      return [Math.min(17.5, s.bounce[0] + vx * 0.55 * slow), h, s.bounce[2] + vz * 0.55 * slow];
    }
  }
  return null;
}

/** Player position and pose at time t. */
function playerAt(who: 0 | 1, t: number): { pos: V3; pose: Pose } {
  const mine = SHOTS_PLAN.filter((s) => s.by === who);
  const theirs = SHOTS_PLAN.filter((s) => s.by !== who);
  // where to be: last contact point → next contact point; recover towards the middle in between
  const keys: [number, number, number][] = []; // t, x, z
  if (who === 0) keys.push([0, -12.2, -0.6]);
  else keys.push([0, 11.6, 3.4]);
  for (const s of SHOTS_PLAN) {
    if (s.by === who) {
      const off = s.kind === "serve" ? [0, 0] : [-Math.sign(s.at[0]) * 0.55, s.kind === "forehand" ? -0.8 * Math.sign(s.at[0]) : 0.8 * Math.sign(s.at[0])];
      keys.push([s.tc, s.at[0] + off[0], s.at[2] + off[1]]);
      keys.push([s.tc + 0.7, s.at[0] + off[0] - Math.sign(s.at[0]) * 0.3, lerp(s.at[2] + off[1], 0, 0.45)]);
    }
  }
  keys.sort((a, b) => a[0] - b[0]);
  let x = keys[0][1], z = keys[0][2];
  for (let i = 0; i < keys.length - 1; i++) {
    if (t >= keys[i][0] && t <= keys[i + 1][0]) {
      const u = sm((t - keys[i][0]) / (keys[i + 1][0] - keys[i][0]));
      x = lerp(keys[i][1], keys[i + 1][1], u);
      z = lerp(keys[i][2], keys[i + 1][2], u);
    } else if (t > keys[keys.length - 1][0]) {
      x = keys[keys.length - 1][1];
      z = keys[keys.length - 1][2];
    }
  }
  // the last shot is a winner: the far player lunges for it and misses
  if (who === 1) {
    const last = SHOTS_PLAN[SHOTS_PLAN.length - 1];
    if (t > last.tc) z = lerp(z, -2.2, sm((t - last.tc) / 0.9));
  }
  // pose: the shot whose swing window contains t, else ready
  let pose: Pose = POSES.ready;
  for (const s of mine) {
    const sh = SHOTS[s.kind];
    const start = s.tc - sh.contact;
    if (t >= start && t < start + (s.kind === "serve" ? 2.3 : 1.75)) pose = sh.pose(t - start);
  }
  void theirs;
  return { pos: [x, 0, z], pose };
}

/** Lift the side-view pose into 3D: x forward, y up, z across (right side positive). */
function skeleton(pose: Pose, pos: V3, facing: 1 | -1) {
  const j = fk(pose);
  const tw = (pose.twist * Math.PI) / 180;
  const P = (q: number[], z: number): V3 => [pos[0] + facing * q[0], q[1], pos[2] + z * facing];
  const sz = Math.cos(tw) * 0.17;
  return {
    head: P(j.head, 0),
    neck: P(j.neck, 0),
    pelvis: P(j.pelvis, 0),
    rS: P(j.rS, sz),
    lS: P(j.lS, -sz),
    rE: P(j.rE, sz * 1.25),
    rH: P(j.rH, sz * 1.3),
    lE: P(j.lE, -sz * 1.25),
    lH: P(j.lH, -sz * 1.2),
    rHip: P([j.pelvis[0], j.pelvis[1] - 0.02], 0.11),
    lHip: P([j.pelvis[0], j.pelvis[1] - 0.02], -0.11),
    fK: P(j.fK, -0.13),
    fA: P(j.fA, -0.14),
    bK: P(j.bK, 0.13),
    bA: P(j.bA, 0.14),
    rThroat: P(j.racket.throat, sz * 1.3),
    rTip: P(j.racket.tip, sz * 1.3),
    rCenter: P(j.racket.center, sz * 1.3),
  };
}

export function Blueprint() {
  const wrap = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const cap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = wrap.current!, c = cv.current!, ctx = c.getContext("2d")!;
    let W = 0, H = 0, d = 1, raf = 0, visible = false, sp = 0, camX = 0;
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
    io.observe(sec);

    const mono = (px: number) => `500 ${px}px "DM Sans Variable", "DM Sans", system-ui, sans-serif`;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const r = sec.getBoundingClientRect();
      const pTarget = clamp(-r.top / (r.height - innerHeight));
      sp += (pTarget - sp) * 0.14;
      const p = sp;
      const draw = clamp(p / 0.26), tilt = sm((p - 0.27) / 0.15), play = clamp((p - 0.44) / 0.54);
      const t = play * T_END;

      // ---------------------------------------------------------------- camera
      const small = W < 700;
      // during the point the camera dollies along the court after the ball, and moves in
      const follow = sm(play * 7);
      const fb = play > 0 ? ballAt(t) : null;
      const want = (fb ? clamp(fb[0] * 0.3, -3.5, 3.5) : t < 1 ? -3 : camX) * follow;
      camX += (want - camX) * 0.1;
      const elev = lerp(89.5, small ? 30 : lerp(22, 19, follow), tilt) * (Math.PI / 180);
      const D = 34;
      const cam: V3 = [camX, D * Math.sin(elev), -D * Math.cos(elev)];
      const tgt: V3 = [camX, lerp(0, 1.2, tilt), lerp(0, 1.5, tilt)];
      const f = norm(sub(tgt, cam)), rgt = norm(cross([0, 1, 0], f)), up = cross(f, rgt);
      const span = small ? 13.5 : 15.5;
      const focal = ((small ? 0.36 : 0.4) * W * D) / span * lerp(1, small ? 1.12 : 1.25, tilt) * lerp(1, small ? 1.1 : 1.14, follow);
      const cx = W / 2, cy = H * lerp(small ? 0.56 : 0.54, small ? 0.54 : 0.5, tilt);
      const pr = (q: V3): [number, number, number] => {
        const v = sub(q, cam);
        const z = dot(v, f);
        return [cx + (dot(v, rgt) / z) * focal, cy - (dot(v, up) / z) * focal, z];
      };

      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // blueprint grid (screen space, fades as the view tilts)
      ctx.strokeStyle = `rgba(245,240,230,${0.05 * (1 - tilt) + 0.02})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = (W / 2) % 24; x < W; x += 24) (ctx.moveTo(x, 0), ctx.lineTo(x, H));
      for (let y = (H / 2) % 24; y < H; y += 24) (ctx.moveTo(0, y), ctx.lineTo(W, y));
      ctx.stroke();

      // ground grid in 3D, appears with the tilt
      if (tilt > 0) {
        ctx.strokeStyle = `rgba(245,240,230,${0.06 * tilt})`;
        ctx.beginPath();
        for (let x = -18; x <= 18; x += 2) seg3(ctx, pr, [x, 0, -9], [x, 0, 9]);
        for (let z = -9; z <= 9; z += 2) seg3(ctx, pr, [-18, 0, z], [18, 0, z]);
        ctx.stroke();
      }

      // ---------------------------------------------------------------- the court lines, drawn in order
      const lines: [V3, V3][] = [
        [[-HL, 0, -HW], [HL, 0, -HW]],
        [[-HL, 0, HW], [HL, 0, HW]],
        [[-HL, 0, -HW], [-HL, 0, HW]],
        [[HL, 0, -HW], [HL, 0, HW]],
        [[-HL, 0, -HS], [HL, 0, -HS]],
        [[-HL, 0, HS], [HL, 0, HS]],
        [[-SV, 0, -HS], [-SV, 0, HS]],
        [[SV, 0, -HS], [SV, 0, HS]],
        [[-SV, 0, 0], [SV, 0, 0]],
        [[-HL, 0, 0], [-HL + 0.3, 0, 0]],
        [[HL, 0, 0], [HL - 0.3, 0, 0]],
      ];
      ctx.strokeStyle = INK;
      ctx.lineWidth = 1.6;
      ctx.lineCap = "round";
      lines.forEach(([a, b], i) => {
        const u = clamp(draw * lines.length * 1.15 - i);
        if (u <= 0) return;
        ctx.beginPath();
        seg3(ctx, pr, a, [lerp(a[0], b[0], u), 0, lerp(a[2], b[2], u)]);
        ctx.stroke();
      });

      // net: a line in plan, a mesh in elevation
      const netU = clamp(draw * 1.4 - 0.25);
      const nh = (z: number) => (0.914 + (1.07 - 0.914) * (Math.abs(z) / (HW + 0.914)) ** 2) * tilt;
      if (netU > 0) {
        const ext = HW + 0.914;
        ctx.strokeStyle = `rgba(245,240,230,${0.25 + 0.2 * tilt})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        for (let z = -ext; z <= ext; z += 0.5) seg3(ctx, pr, [0, 0, z], [0, nh(z), z]);
        for (let y = 0.15; y < 1.07; y += 0.15) {
          const pts: V3[] = [];
          for (let z = -ext; z <= ext; z += 0.5) if (nh(z) > y) pts.push([0, y, z]);
          for (let i = 0; i < pts.length - 1; i++) seg3(ctx, pr, pts[i], pts[i + 1]);
        }
        ctx.stroke();
        ctx.strokeStyle = INK;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        let first = true;
        for (let z = -ext; z <= ext + 1e-6; z += 0.25) {
          const [x, y] = pr([0, nh(z), z * netU]);
          if (first) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          first = false;
        }
        ctx.stroke();
        // posts
        ctx.lineWidth = 3;
        ctx.beginPath();
        seg3(ctx, pr, [0, 0, -ext], [0, nh(ext) + 0.02 * tilt, -ext]);
        seg3(ctx, pr, [0, 0, ext], [0, nh(ext) + 0.02 * tilt, ext]);
        ctx.stroke();
      }

      // ---------------------------------------------------------------- dimensions
      const dimA = clamp(draw * 1.3 - 0.35) * (1 - tilt * 0.85);
      ctx.font = mono(small ? 10 : 11.5);
      if (dimA > 0) {
        ctx.globalAlpha = dimA;
        dim(ctx, pr, [-HL, 0, -HW - 1.4], [HL, 0, -HW - 1.4], "23,77 m", 0, 14);
        dim(ctx, pr, [-HL - 1.4, 0, -HW], [-HL - 1.4, 0, HW], "10,97 m", 1, 0);
        dim(ctx, pr, [HL + 1.4, 0, -HS], [HL + 1.4, 0, HS], "8,23 m", 2, 0);
        dim(ctx, pr, [0, 0, HW + 1.2], [SV, 0, HW + 1.2], "6,40 m", 0, -8);
        dim(ctx, pr, [SV, 0, HW + 1.2], [HL, 0, HW + 1.2], "5,49 m", 0, -8);
        dim(ctx, pr, [-HL - 0.6, 0, HS], [-HL - 0.6, 0, HW], "1,37", 1, 0);
        ctx.globalAlpha = 1;
      }
      // net heights in the elevation
      const elevA = sm((p - 0.33) / 0.08) * (1 - sm((p - 0.47) / 0.06));
      if (elevA > 0) {
        ctx.globalAlpha = elevA;
        const [x0, y0] = pr([0, 0, 0]), [, y1] = pr([0, 0.914, 0]);
        const [x2, y2] = pr([0, 0, -(HW + 0.914)]), [, y3] = pr([0, 1.07, -(HW + 0.914)]);
        tick(ctx, x0 + 22, y0, x0 + 22, y1, "0,914 m", C_A);
        tick(ctx, x2 - 22, y2, x2 - 22, y3, "1,07 m", C_A, true);
        ctx.globalAlpha = 1;
      }

      // title block
      ctx.globalAlpha = clamp(draw * 2 - 0.4) * (1 - tilt) ;
      if (ctx.globalAlpha > 0) {
        const bw = small ? 196 : 250, bh = 54, bx = W - bw - (small ? 16 : 40), by = H - bh - (small ? 70 : 40);
        ctx.strokeStyle = "rgba(245,240,230,.6)";
        ctx.lineWidth = 1;
        ctx.strokeRect(bx, by, bw, bh);
        ctx.beginPath();
        ctx.moveTo(bx, by + 22);
        ctx.lineTo(bx + bw, by + 22);
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.font = mono(10);
        ctx.fillText("GELLÉRT · TENISZPÁLYA · ALAPRAJZ", bx + 8, by + 15);
        ctx.fillStyle = "rgba(245,240,230,.6)";
        ctx.fillText("ITF szabványméretek · páros pálya", bx + 8, by + 36);
        ctx.fillText("Lap 1/1", bx + 8, by + 48);
      }
      ctx.globalAlpha = 1;

      // ---------------------------------------------------------------- the point
      if (tilt > 0.6) {
        const vis = sm((tilt - 0.6) / 0.4);
        ctx.globalAlpha = vis;
        // bounce marks so far
        SHOTS_PLAN.forEach((s, i) => {
          if (t < s.tb) return;
          const [x, y] = pr(s.bounce);
          const col = s.by === 0 ? C_A : C_B;
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.ellipse(x, y, 7, 2.6, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.font = mono(10);
          ctx.fillStyle = col;
          ctx.fillText(String(i + 1), x + 9, y + 3);
        });
        // ball trail (dashed) for the current shot
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = "rgba(245,240,230,.55)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        let started = false;
        for (let k = Math.max(0.66, t - 1.4); k <= t; k += 1 / 60) {
          const b = ballAt(k);
          if (!b) continue;
          const [x, y] = pr(b);
          if (!started) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          started = true;
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // players
        const A = playerAt(0, t), B = playerAt(1, t);
        const sa = skeleton(A.pose, A.pos, 1), sb = skeleton(B.pose, B.pos, -1);
        // the far player is drawn first
        drawSkel(ctx, pr, sb, C_B);
        const ball = ballAt(t);
        drawSkel(ctx, pr, sa, C_A);
        if (ball) {
          const [bx, by] = pr(ball), [sx, sy] = pr([ball[0], 0, ball[2]]);
          ctx.fillStyle = "rgba(0,0,0,.35)";
          ctx.beginPath();
          ctx.ellipse(sx, sy, 4, 1.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#d9e05a";
          ctx.beginPath();
          ctx.arc(bx, by, small ? 3.2 : 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        // shot label (HTML)
        let cur = -1;
        SHOTS_PLAN.forEach((s, i) => {
          if (t >= s.tc - 0.05) cur = i;
        });
        if (cap.current) {
          const done = t > SHOTS_PLAN[SHOTS_PLAN.length - 1].tb + 0.6;
          const lab = done ? "Pont · 15 : 0" : cur >= 0 ? `${cur + 1}. ${SHOTS_PLAN[cur].label}` : "Szerva előtt";
          const col = done ? INK : cur >= 0 ? (SHOTS_PLAN[cur].by === 0 ? C_A : C_B) : INK;
          if (cap.current.dataset.l !== lab) {
            cap.current.dataset.l = lab;
            cap.current.querySelector("b")!.textContent = lab;
            cap.current.style.setProperty("--c", col);
            cap.current.classList.remove("is-new");
            void cap.current.offsetWidth;
            cap.current.classList.add("is-new");
          }
          cap.current.style.opacity = String(vis);
          const bar = cap.current.querySelector<HTMLElement>("i");
          if (bar) bar.style.transform = `scaleX(${t / T_END})`;
        }
      } else if (cap.current) cap.current.style.opacity = "0";
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
    };
  }, []);

  return (
    <section ref={wrap} className="lab-blueprint" aria-labelledby="lab-bp-title">
      <div className="lab-blueprint__stage">
        <canvas ref={cv} className="lab-blueprint__canvas" role="img" aria-label="Teniszpálya alaprajza a hivatalos méretekkel, majd oldalnézetben két játékos egy labdamenete" />
        <div className="container lab-blueprint__head">
          <p className="eyebrow eyebrow--light">Méretek</p>
          <h2 id="lab-bp-title" className="h2">
            23,77 × 10,97 méter. <em>Pontosan.</em>
          </h2>
        </div>
        <div ref={cap} className="lab-blueprint__cap" style={{ opacity: 0 }} aria-live="polite">
          <b>Szerva előtt</b>
          <span>
            <i />
          </span>
          <small>Görgess előre és vissza: te tekered a labdamenetet.</small>
        </div>
        <LabTag n="81" name="Blueprint mode · skeleton point" dark />
      </div>
    </section>
  );
}

// ------------------------------------------------------------------ small 3D + drawing helpers
function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function dot(a: V3, b: V3) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function norm(a: V3): V3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
type Proj = (q: V3) => [number, number, number];
function seg3(ctx: CanvasRenderingContext2D, pr: Proj, a: V3, b: V3) {
  const [x0, y0] = pr(a), [x1, y1] = pr(b);
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
}
/** Dimension line with end ticks and a centred label. orient 0 = along x, 1/2 = along z (label left/right). */
function dim(ctx: CanvasRenderingContext2D, pr: Proj, a: V3, b: V3, text: string, orient: number, dy: number) {
  const [x0, y0] = pr(a), [x1, y1] = pr(b);
  ctx.strokeStyle = "#e6e28c";
  ctx.fillStyle = "#e6e28c";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  const ang = Math.atan2(y1 - y0, x1 - x0), nx = -Math.sin(ang) * 5, ny = Math.cos(ang) * 5;
  for (const [x, y] of [[x0, y0], [x1, y1]]) {
    ctx.moveTo(x - nx, y - ny);
    ctx.lineTo(x + nx, y + ny);
  }
  ctx.stroke();
  const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
  const w = ctx.measureText(text).width;
  if (orient === 0) {
    ctx.fillText(text, mx - w / 2, my + dy);
  } else {
    ctx.save();
    ctx.translate(mx + (orient === 1 ? -8 : 14), my);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(text, -w / 2, 0);
    ctx.restore();
  }
}
function tick(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, text: string, col: string, left = false) {
  ctx.strokeStyle = col;
  ctx.fillStyle = col;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.moveTo(x0 - 4, y0);
  ctx.lineTo(x0 + 4, y0);
  ctx.moveTo(x1 - 4, y1);
  ctx.lineTo(x1 + 4, y1);
  ctx.stroke();
  const w = ctx.measureText(text).width;
  ctx.fillText(text, left ? x0 - w - 8 : x0 + 8, (y0 + y1) / 2 + 4);
}
function drawSkel(ctx: CanvasRenderingContext2D, pr: Proj, s: ReturnType<typeof skeleton>, col: string) {
  const P = (k: keyof typeof s) => pr(s[k]);
  // ground shadow: the skeleton squashed onto the court
  ctx.strokeStyle = "rgba(0,0,0,.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (const [a, b] of [["pelvis", "fA"], ["pelvis", "bA"], ["neck", "pelvis"], ["rS", "rH"], ["lS", "lH"]] as const) {
    const pa = s[a], pb = s[b];
    const sa = pr([pa[0] + pa[1] * 0.35, 0, pa[2] + pa[1] * 0.2]), sb = pr([pb[0] + pb[1] * 0.35, 0, pb[2] + pb[1] * 0.2]);
    ctx.moveTo(sa[0], sa[1]);
    ctx.lineTo(sb[0], sb[1]);
  }
  ctx.stroke();
  const bones: [keyof typeof s, keyof typeof s][] = [
    ["neck", "pelvis"], ["lS", "rS"], ["rS", "rE"], ["rE", "rH"], ["lS", "lE"], ["lE", "lH"],
    ["lHip", "rHip"], ["lHip", "fK"], ["fK", "fA"], ["rHip", "bK"], ["bK", "bA"],
  ];
  ctx.strokeStyle = col;
  ctx.lineWidth = 2.6;
  ctx.lineCap = "round";
  ctx.shadowColor = col;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  for (const [a, b] of bones) {
    const [x0, y0] = P(a), [x1, y1] = P(b);
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
  }
  ctx.stroke();
  // head
  const [hx, hy, hz] = P("head"), [nx, ny] = P("neck");
  const hr = Math.max(2.5, Math.hypot(hx - nx, hy - ny) * 0.55);
  ctx.beginPath();
  ctx.arc(hx, hy, hr, 0, Math.PI * 2);
  ctx.stroke();
  void hz;
  // racket: shaft + head ellipse
  const [tx, ty] = P("rThroat"), [px, py] = P("rTip"), [qx, qy] = P("rCenter"), [gx, gy] = P("rH");
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(gx, gy);
  ctx.lineTo(tx, ty);
  const ang = Math.atan2(py - ty, px - tx), len = Math.hypot(px - tx, py - ty) / 2;
  ctx.moveTo(qx + Math.cos(ang) * len, qy + Math.sin(ang) * len);
  ctx.ellipse(qx, qy, len, len * 0.55, ang, 0, Math.PI * 2);
  ctx.stroke();
  ctx.shadowBlur = 0;
  // joints
  ctx.fillStyle = col;
  for (const k of ["rS", "lS", "rE", "lE", "rH", "lH", "fK", "bK", "fA", "bA", "pelvis"] as const) {
    const [x, y] = P(k);
    ctx.beginPath();
    ctx.arc(x, y, 2.6, 0, Math.PI * 2);
    ctx.fill();
  }
}
