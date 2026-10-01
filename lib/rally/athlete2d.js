// Variation A: illustrated athletes drawn on a 2D canvas.
// Flat editorial style: tapered limbs, real kit, a proper racket with frame, throat, grip and strings.

export const KITS = [
  { shirt: "#f7f4ec", shade: "#ddd6c6", bottom: "#21492b", bottomShade: "#163420", accent: "#b4532b", head: "cap", hair: "#3a2a1e", skin: "#c48a64", skinShade: "#a2704f", female: false },
  { shirt: "#21492b", shade: "#163420", bottom: "#f7f4ec", bottomShade: "#ddd6c6", accent: "#e6e28c", head: "band", hair: "#24180f", skin: "#9c6847", skinShade: "#7f5236", female: false },
  { shirt: "#f7f4ec", shade: "#ddd6c6", bottom: "#f7f4ec", bottomShade: "#ddd6c6", accent: "#b4532b", head: "visor", hair: "#5e3b20", skin: "#dca884", skinShade: "#bb8a67", female: true },
  { shirt: "#b4532b", shade: "#8e3e1e", bottom: "#21492b", bottomShade: "#163420", accent: "#f7f4ec", head: "band", hair: "#c7a05a", skin: "#e2b08e", skinShade: "#c08f6e", female: true },
];

function capsule(c, a, b, ra, rb) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1e-6;
  const ang = Math.atan2(dy, dx);
  c.beginPath();
  c.arc(a[0], a[1], ra, ang + Math.PI / 2, ang - Math.PI / 2);
  c.arc(b[0], b[1], rb, ang - Math.PI / 2, ang + Math.PI / 2);
  c.closePath();
  c.fill();
  void L;
}

export function drawAthlete(c, j, o) {
  // o: { x, y (screen ground), s (px per m), f (facing ±1), kit, time, alpha }
  const { x, y, s, f, kit } = o;
  const P = (q) => [x + f * q[0] * s, y - q[1] * s];
  const W = (m) => m * s;
  c.save();
  c.lineJoin = c.lineCap = "round";

  // shadow
  c.fillStyle = "rgba(20, 30, 20, .16)";
  c.beginPath();
  c.ellipse(x + f * W(0.05), y + 1, W(0.42), W(0.06), 0, 0, Math.PI * 2);
  c.fill();

  const pel = P(j.pelvis), sh = P(j.S), rS = P(j.rS), lS = P(j.lS);
  const fK = P(j.fK), fA = P(j.fA), bK = P(j.bK), bA = P(j.bA);
  const shoe = (ank, footAng, col) => {
    const a = (footAng * Math.PI) / 180;
    const toe = [ank[0] + f * Math.cos(a) * W(0.2), ank[1] - Math.sin(a) * W(0.2) + W(0.035)];
    const heel = [ank[0] - f * W(0.04), ank[1] + W(0.04)];
    c.fillStyle = col;
    capsule(c, heel, toe, W(0.045), W(0.04));
    c.fillStyle = kit.accent;
    c.fillRect(Math.min(heel[0], toe[0]), Math.max(heel[1], toe[1]) + W(0.025), Math.abs(toe[0] - heel[0]), W(0.016));
  };
  const leg = (K, A, skin, shorts, shade) => {
    c.fillStyle = skin;
    capsule(c, pel, K, W(0.07), W(0.05));
    capsule(c, K, A, W(0.052), W(0.032));
    // sock
    c.fillStyle = "#f7f4ec";
    const sk = [A[0] + (K[0] - A[0]) * 0.18, A[1] + (K[1] - A[1]) * 0.18];
    capsule(c, sk, A, W(0.036), W(0.033));
    // shorts / skirt over the thigh
    c.fillStyle = shorts;
    const mid = [pel[0] + (K[0] - pel[0]) * 0.5, pel[1] + (K[1] - pel[1]) * 0.5];
    capsule(c, pel, mid, W(0.095), W(0.078));
    void shade;
  };
  const arm = (Sh, E, H, skin, sleeve, near) => {
    c.fillStyle = skin;
    capsule(c, Sh, E, W(0.048), W(0.038));
    capsule(c, E, H, W(0.04), W(0.028));
    c.fillStyle = sleeve;
    const m = [Sh[0] + (E[0] - Sh[0]) * 0.45, Sh[1] + (E[1] - Sh[1]) * 0.45];
    capsule(c, Sh, m, W(0.062), W(0.054));
    if (near) {
      // wristband
      c.fillStyle = kit.accent;
      const wb = [H[0] + (E[0] - H[0]) * 0.18, H[1] + (E[1] - H[1]) * 0.18];
      capsule(c, wb, [H[0] + (E[0] - H[0]) * 0.05, H[1] + (E[1] - H[1]) * 0.05], W(0.032), W(0.03));
    }
  };

  // ---- far side (behind the torso)
  leg(bK, bA, kit.skinShade, kit.bottomShade);
  shoe(bA, j.bf, "#e7e1d4");
  arm(lS, P(j.lE), P(j.lH), kit.skinShade, kit.shade, false);
  c.fillStyle = kit.skinShade;
  c.beginPath();
  c.arc(P(j.lH)[0], P(j.lH)[1], W(0.035), 0, Math.PI * 2);
  c.fill();

  // ---- torso
  const up = [sh[0] - pel[0], sh[1] - pel[1]];
  const ul = Math.hypot(up[0], up[1]);
  const n = [-up[1] / ul, up[0] / ul];
  const at = (t, w) => [pel[0] + up[0] * t + n[0] * w, pel[1] + up[1] * t + n[1] * w];
  const tw = Math.cos((j.twist * Math.PI) / 180);
  const chest = W(0.13) * (0.9 + 0.1 * Math.abs(tw));
  c.fillStyle = kit.shirt;
  c.beginPath();
  const pts = [at(-0.02, W(0.1)), at(0.45, W(0.105)), at(0.82, chest), at(1.02, W(0.09)), at(1.02, -W(0.09)), at(0.82, -chest * 0.95), at(0.45, -W(0.1)), at(-0.02, -W(0.1))];
  c.moveTo(...pts[0]);
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1], p1 = pts[i];
    c.quadraticCurveTo(p0[0], p0[1], (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2);
  }
  c.closePath();
  c.fill();
  // collar + side seam for depth
  c.strokeStyle = kit.shade;
  c.lineWidth = W(0.012);
  c.beginPath();
  c.moveTo(...at(0.15, W(0.02) * f));
  c.lineTo(...at(0.9, W(0.03) * f));
  c.stroke();
  c.fillStyle = kit.accent;
  capsule(c, at(1.0, -W(0.05)), at(1.0, W(0.05)), W(0.014), W(0.014));
  // shorts / skirt waist
  c.fillStyle = kit.bottom;
  if (kit.female) {
    c.beginPath();
    const a1 = at(0.12, W(0.11)), a2 = at(0.12, -W(0.11));
    const g1 = [pel[0] + n[0] * W(0.19) - up[0] * 0.38, pel[1] + n[1] * W(0.19) - up[1] * 0.38];
    const g2 = [pel[0] - n[0] * W(0.19) - up[0] * 0.38, pel[1] - n[1] * W(0.19) - up[1] * 0.38];
    c.moveTo(...a1); c.lineTo(...g1); c.lineTo(...g2); c.lineTo(...a2); c.closePath();
    c.fill();
  } else {
    capsule(c, at(0.1, 0), at(-0.08, 0), W(0.108), W(0.1));
  }

  // ---- near leg
  leg(fK, fA, kit.skin, kit.bottom);
  shoe(fA, j.ff, "#fbfaf6");

  // ---- head
  const hd = P(j.head);
  const neck = P(j.neck);
  c.fillStyle = kit.skin;
  capsule(c, neck, [neck[0] + (hd[0] - neck[0]) * 0.5, neck[1] + (hd[1] - neck[1]) * 0.5], W(0.045), W(0.045));
  c.beginPath();
  c.arc(hd[0], hd[1], W(0.112), 0, Math.PI * 2);
  c.fill();
  // hair (back of head) + ear
  c.fillStyle = kit.hair;
  c.beginPath();
  c.arc(hd[0] - f * W(0.02), hd[1] - W(0.015), W(0.112), f > 0 ? Math.PI * 0.55 : -Math.PI * 0.45, f > 0 ? Math.PI * 1.95 : Math.PI * 0.95);
  c.fill();
  if (kit.female) {
    // ponytail swings with the body
    const sway = Math.sin(o.time * 6) * 0.04 + (j.twist / 90) * 0.08;
    const base = [hd[0] - f * W(0.1), hd[1] - W(0.02)];
    const tip = [base[0] - f * W(0.16 + sway), base[1] + W(0.16)];
    capsule(c, base, tip, W(0.045), W(0.02));
  }
  c.fillStyle = kit.skinShade;
  c.beginPath();
  c.arc(hd[0] + f * W(0.005), hd[1] + W(0.01), W(0.025), 0, Math.PI * 2);
  c.fill();
  // headwear
  c.fillStyle = kit.accent;
  if (kit.head === "cap") {
    c.beginPath();
    c.arc(hd[0], hd[1] - W(0.02), W(0.118), Math.PI * 1.02, Math.PI * 1.98);
    c.fill();
    capsule(c, [hd[0] + f * W(0.02), hd[1] - W(0.04)], [hd[0] + f * W(0.2), hd[1] - W(0.03)], W(0.02), W(0.016));
  } else if (kit.head === "visor") {
    capsule(c, [hd[0] - f * W(0.1), hd[1] - W(0.06)], [hd[0] + f * W(0.08), hd[1] - W(0.07)], W(0.022), W(0.022));
    capsule(c, [hd[0] + f * W(0.06), hd[1] - W(0.07)], [hd[0] + f * W(0.2), hd[1] - W(0.055)], W(0.016), W(0.012));
  } else {
    capsule(c, [hd[0] - f * W(0.11), hd[1] - W(0.035)], [hd[0] + f * W(0.1), hd[1] - W(0.06)], W(0.022), W(0.022));
  }

  // ---- racket + near arm
  drawRacket(c, j.racket, P, s, f, kit);
  arm(rS, P(j.rE), P(j.rH), kit.skin, kit.shirt, true);
  c.fillStyle = kit.skin;
  c.beginPath();
  c.arc(P(j.rH)[0], P(j.rH)[1], W(0.038), 0, Math.PI * 2);
  c.fill();
  c.restore();
  void sh;
}

export function drawRacket(c, r, P, s, f, kit) {
  const W = (m) => m * s;
  const butt = P(r.butt), throat = P(r.throat), center = P(r.center);
  const ang = Math.atan2(center[1] - throat[1], center[0] - throat[0]);
  const a = W(0.165);
  const b = W(0.128) * Math.max(0.14, Math.abs(Math.cos((r.roll * Math.PI) / 180)));
  // handle + grip
  c.lineCap = "round";
  c.strokeStyle = "#232825";
  c.lineWidth = W(0.032);
  c.beginPath(); c.moveTo(...butt); c.lineTo(...throat); c.stroke();
  c.strokeStyle = kit.accent === "#f7f4ec" ? "#e6e28c" : kit.accent;
  c.lineWidth = W(0.026);
  c.beginPath(); c.moveTo(...butt); c.lineTo(butt[0] + (throat[0] - butt[0]) * 0.55, butt[1] + (throat[1] - butt[1]) * 0.55); c.stroke();
  // throat (open V)
  c.save();
  c.translate(center[0], center[1]);
  c.rotate(ang);
  c.strokeStyle = "#232825";
  c.lineWidth = W(0.015);
  const tx = -(Math.hypot(center[0] - throat[0], center[1] - throat[1]));
  c.beginPath();
  c.moveTo(tx, 0); c.quadraticCurveTo(-a * 0.95, 0, -a * 0.82, b * 0.62);
  c.moveTo(tx, 0); c.quadraticCurveTo(-a * 0.95, 0, -a * 0.82, -b * 0.62);
  c.stroke();
  // strings
  c.save();
  c.beginPath();
  c.ellipse(0, 0, a * 0.93, b * 0.9, 0, 0, Math.PI * 2);
  c.clip();
  c.fillStyle = "rgba(240, 236, 220, .14)";
  c.fill();
  c.strokeStyle = "rgba(245, 240, 225, .75)";
  c.lineWidth = Math.max(0.5, W(0.0035));
  c.beginPath();
  for (let i = -6; i <= 6; i++) { const yy = (i / 6.5) * b; c.moveTo(-a, yy); c.lineTo(a, yy); }
  for (let i = -8; i <= 8; i++) { const xx = (i / 8.5) * a; c.moveTo(xx, -b); c.lineTo(xx, b); }
  c.stroke();
  c.restore();
  // frame
  c.strokeStyle = "#1c201e";
  c.lineWidth = W(0.02);
  c.beginPath(); c.ellipse(0, 0, a, b, 0, 0, Math.PI * 2); c.stroke();
  c.strokeStyle = kit.accent === "#f7f4ec" ? "#e6e28c" : kit.accent;
  c.lineWidth = W(0.009);
  c.beginPath(); c.ellipse(0, 0, a, b, 0, -0.9, 0.9); c.stroke();
  c.restore();
  void f;
}

/** A real-looking tennis ball: felt gradient, seam, spin, motion blur, drop shadow on the page. */
export function drawBall(c, x, y, r, spin, trail, onDark, squash = 0) {
  c.save();
  // motion blur ghosts
  for (let i = 0; i < trail.length; i++) {
    const t = trail[i];
    const k = (i + 1) / (trail.length + 1);
    c.globalAlpha = 0.16 * k;
    c.fillStyle = "#d6e021";
    c.beginPath();
    c.arc(t[0], t[1], r * (0.7 + 0.3 * k), 0, Math.PI * 2);
    c.fill();
  }
  c.globalAlpha = 1;
  // drop shadow (the ball floats just above the page)
  c.fillStyle = onDark ? "rgba(0,0,0,.35)" : "rgba(30,40,25,.18)";
  c.beginPath();
  c.ellipse(x + r * 0.5, y + r * 0.9, r * 0.95, r * 0.45, 0, 0, Math.PI * 2);
  c.fill();
  if (squash) {
    // flatten against the surface on impact
    c.translate(x, y + r);
    c.scale(1 + squash * 0.8, 1 - squash);
    c.translate(-x, -(y + r));
  }
  const g = c.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r);
  g.addColorStop(0, "#f5ff8c");
  g.addColorStop(0.55, "#d3de1c");
  g.addColorStop(1, "#8c970f");
  c.fillStyle = g;
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.fill();
  // seam
  c.save();
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.clip();
  c.translate(x, y);
  c.rotate(spin);
  c.strokeStyle = "#fbfbf2";
  c.lineWidth = r * 0.17;
  c.beginPath();
  c.arc(-r * 1.25, 0, r * 0.88, -0.95, 0.95);
  c.stroke();
  c.beginPath();
  c.arc(r * 1.25, 0, r * 0.88, Math.PI - 0.95, Math.PI + 0.95);
  c.stroke();
  c.restore();
  // fuzz rim
  c.strokeStyle = "rgba(250, 255, 190, .45)";
  c.lineWidth = 1;
  c.beginPath();
  c.arc(x, y, r - 0.5, Math.PI * 1.05, Math.PI * 1.65);
  c.stroke();
  c.restore();
}

/** Clay dust at the bounce: a few particles in document coordinates, plus a faint mark. */
export function addDust(store, x, y, dark) {
  store.dust = store.dust || [];
  store.marks = store.marks || [];
  const t = performance.now();
  for (let i = 0; i < 14; i++) {
    const a = Math.PI + Math.random() * Math.PI;
    const sp = 0.5 + Math.random() * 1.6;
    store.dust.push({ x, y, vx: Math.cos(a) * sp * 1.4, vy: Math.sin(a) * sp * 0.7, r: 1 + Math.random() * 2.2, t, dark });
  }
  store.marks.push({ x, y, t, dark });
  if (store.marks.length > 6) store.marks.shift();
}
export function drawDust(c, store, sy) {
  const now = performance.now();
  for (const m of store.marks || []) {
    const age = (now - m.t) / 1000;
    const k = Math.max(0, 1 - age / 2.5);
    if (!k) continue;
    c.fillStyle = m.dark ? `rgba(230,180,140,${0.18 * k})` : `rgba(196,108,64,${0.12 * k})`;
    c.beginPath();
    c.ellipse(m.x, m.y - sy, 9, 2.4, 0, 0, Math.PI * 2);
    c.fill();
  }
  store.dust = (store.dust || []).filter((p) => now - p.t < 900);
  for (const p of store.dust) {
    const age = (now - p.t) / 900;
    p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.vx *= 0.95; p.vy *= 0.95;
    c.fillStyle = `rgba(214,140,96,${0.5 * (1 - age)})`;
    c.beginPath();
    c.arc(p.x, p.y - sy, p.r * (1 + age), 0, Math.PI * 2);
    c.fill();
  }
}

/** A ring that spreads from the impact point on a photo or card. */
export function addRipple(store, x, y) {
  store.ripples = store.ripples || [];
  store.ripples.push({ x, y, t: performance.now() });
}
export function drawRipples(c, store, sy) {
  const now = performance.now();
  store.ripples = (store.ripples || []).filter((r) => now - r.t < 700);
  for (const r of store.ripples) {
    const k = (now - r.t) / 700;
    c.strokeStyle = `rgba(245, 240, 230, ${0.85 * (1 - k)})`;
    c.lineWidth = 2 * (1 - k) + 0.5;
    c.beginPath();
    c.ellipse(r.x, r.y - sy, 6 + k * 46, 2 + k * 9, 0, 0, Math.PI * 2);
    c.stroke();
    c.strokeStyle = `rgba(180, 83, 43, ${0.5 * (1 - k)})`;
    c.beginPath();
    c.ellipse(r.x, r.y - sy, 3 + k * 26, 1 + k * 5, 0, 0, Math.PI * 2);
    c.stroke();
  }
}
