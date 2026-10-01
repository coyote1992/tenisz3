// Shared tennis-player pose system: side view, facing +x, y up, metres.
// Angles in degrees. Limb angles are absolute and measured from straight down (+ = forward).
// lean: torso from vertical (+ forward). twist: shoulder turn (-90 coiled away … +90 chest to camera).
// rw: racket relative to forearm. rr: racket face roll (0 = face seen full, 90 = edge on).

export const POSES = {
  ready:   { drop: .10, lean: 14, twist: 20,  head: 0,   rs: 30,  re: 60,  rw: 30,   rr: 35, ls: 35,  le: 50,  fh: 22, fk: 38, bh: -14, bk: 28, ff: 0,   bf: 0, th: 0 },
  split:   { drop: .02, lean: 10, twist: 20,  head: 0,   rs: 28,  re: 62,  rw: 30,   rr: 35, ls: 32,  le: 50,  fh: 16, fk: 14, bh: -12, bk: 14, ff: 6,   bf: -6, th: 0 },
  keepup:  { drop: .05, lean: 8,  twist: 25,  head: 12,  rs: 42,  re: 44,  rw: 4,    rr: 88, ls: 20,  le: 40,  fh: 14, fk: 20, bh: -12, bk: 18, ff: 0,   bf: 0, th: 0 },
  cushion: { drop: .12, lean: 18, twist: 15,  head: 5,   rs: 58,  re: 30,  rw: 2,    rr: 80, ls: 10,  le: 45,  fh: 30, fk: 40, bh: -20, bk: 28, ff: 0,   bf: -10, th: 0 },
  fhBack:  { drop: .13, lean: 8,  twist: -65, head: 20,  rs: -62, re: 32,  rw: -100, rr: 55, ls: 88,  le: 4,   fh: 30, fk: 34, bh: -24, bk: 38, ff: 0,   bf: 0, th: 0 },
  fhLoop:  { drop: .14, lean: 10, twist: -45, head: 18,  rs: -40, re: 20,  rw: -10,  rr: 70, ls: 70,  le: 10,  fh: 32, fk: 32, bh: -28, bk: 26, ff: 0,   bf: -8, th: 0 },
  fhHit:   { drop: .10, lean: 15, twist: 10,  head: 8,   rs: 56,  re: 24,  rw: 10,   rr: 78, ls: 12,  le: 50,  fh: 33, fk: 24, bh: -28, bk: 22, ff: 0,   bf: -28, th: 0 },
  fhFollow:{ drop: .06, lean: 18, twist: 78,  head: 0,   rs: 172, re: 70,  rw: 32,   rr: 40, ls: -32, le: 82,  fh: 20, fk: 14, bh: -10, bk: 42, ff: 0,   bf: -50, th: 0 },
  svStance:{ drop: .02, lean: 4,  twist: -30, head: 0,   rs: 22,  re: 40,  rw: 20,   rr: 40, ls: 26,  le: 30,  fh: 10, fk: 6,  bh: -16, bk: 10, ff: 0,   bf: 0, th: 0 },
  svToss:  { drop: .08, lean: -6, twist: -50, head: 25,  rs: -40, re: 10,  rw: -40,  rr: 50, ls: 150, le: 0,   fh: 14, fk: 26, bh: -10, bk: 26, ff: 0,   bf: 0, th: 0 },
  svTrophy:{ drop: .16, lean: -18,twist: -62, head: 30,  rs: -95, re: -95, rw: 168,  rr: 60, ls: 176, le: 0,   fh: 18, fk: 50, bh: -6,  bk: 46, ff: 0,   bf: 0, th: 0 },
  svHit:   { drop: -.16,lean: 8,  twist: 12,  head: 20,  rs: 174, re: 0,   rw: 6,    rr: 82, ls: 42,  le: 62,  fh: 6,  fk: 10, bh: -14, bk: 26, ff: -20, bf: -30, th: 0 },
  svFollow:{ drop: .12, lean: 42, twist: 72,  head: 0,   rs: 34,  re: -30, rw: -40,  rr: 40, ls: -12, le: 62,  fh: 30, fk: 32, bh: -52, bk: 72, ff: 0,   bf: -40, th: 0 },
  // two-handed backhand: the racket comes from the far side, both hands on the grip
  bhBack:  { drop: .13, lean: 4,  twist: 80,  head: 22,  rs: -18, re: 50,  rw: -125, rr: 55, ls: -10, le: 40,  fh: 30, fk: 36, bh: -24, bk: 30, ff: 0,   bf: 0,   th: 1 },
  bhLoop:  { drop: .14, lean: 8,  twist: 60,  head: 18,  rs: -5,  re: 30,  rw: -45,  rr: 70, ls: 0,   le: 30,  fh: 33, fk: 32, bh: -27, bk: 26, ff: 0,   bf: -8,  th: 1 },
  bhHit:   { drop: .10, lean: 14, twist: 15,  head: 6,   rs: 52,  re: 22,  rw: 14,   rr: 80, ls: 50,  le: 22,  fh: 35, fk: 24, bh: -28, bk: 22, ff: 0,   bf: -28, th: 1 },
  bhFollow:{ drop: .05, lean: 14, twist: -45, head: 0,   rs: 165, re: 40,  rw: 45,   rr: 40, ls: 150, le: 40,  fh: 22, fk: 14, bh: -12, bk: 40, ff: 0,   bf: -45, th: 1 },
  catch:   { drop: .04, lean: 6,  twist: 35,  head: 10,  rs: 24,  re: 40,  rw: 60,   rr: 30, ls: 150, le: 20,  fh: 14, fk: 12, bh: -14, bk: 12, ff: 0,   bf: 0, th: 0 },
};
export const KEYS = Object.keys(POSES.ready);

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const ease = {
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  smooth: (t) => t * t * (3 - 2 * t),
};

export function mix(a, b, t) {
  const o = {};
  for (const k of KEYS) o[k] = lerp(a[k], b[k], t);
  return o;
}

/** A timeline of [time(s), poseName, easing] keys → pose at time t. */
export function track(keys) {
  return (t) => {
    if (t <= keys[0][0]) return POSES[keys[0][1]];
    for (let i = 0; i < keys.length - 1; i++) {
      const [ta, pa] = keys[i];
      const [tb, pb, e] = keys[i + 1];
      if (t <= tb) return mix(POSES[pa], POSES[pb], (ease[e] || ease.inOut)((t - ta) / (tb - ta)));
    }
    return POSES[keys[keys.length - 1][1]];
  };
}

// segment lengths (m) for a 1.85 m athlete
export const BODY = { thigh: 0.46, shin: 0.45, upper: 0.30, fore: 0.27, torso: 0.52, neck: 0.07, headR: 0.112, shoulder: 0.17, hipH: 0.93 };

const dir = (a) => {
  const r = (a * Math.PI) / 180;
  return [Math.sin(r), -Math.cos(r)];
};
const add = (p, d, l) => [p[0] + d[0] * l, p[1] + d[1] * l];

/** Forward kinematics. Returns joint positions (m, y up, ground at 0) and racket frame. */
export function fk(p) {
  const B = BODY;
  const pelvis = [0, B.hipH - p.drop];
  const up = [Math.sin((p.lean * Math.PI) / 180), Math.cos((p.lean * Math.PI) / 180)];
  const neck = add(pelvis, up, B.torso);
  const S = add(pelvis, up, B.torso - 0.03);
  const sw = Math.sin((p.twist * Math.PI) / 180) * B.shoulder;
  const rS = [S[0] + sw, S[1]];
  const lS = [S[0] - sw, S[1]];
  const head = add(neck, [Math.sin(((p.lean + p.head * 0.3) * Math.PI) / 180), Math.cos(((p.lean + p.head * 0.3) * Math.PI) / 180)], B.neck + B.headR);
  const rE = add(rS, dir(p.rs), B.upper);
  const rH = add(rE, dir(p.rs + p.re), B.fore);
  const lE = add(lS, dir(p.ls), B.upper);
  const lH = add(lE, dir(p.ls + p.le), B.fore);
  const fK = add(pelvis, dir(p.fh), B.thigh);
  const fA = add(fK, dir(p.fh - p.fk), B.shin);
  const bK = add(pelvis, dir(p.bh), B.thigh);
  const bA = add(bK, dir(p.bh - p.bk), B.shin);
  const ra = p.rs + p.re + p.rw; // racket direction (absolute)
  const rd = dir(ra);
  let lE2 = lE, lH2 = lH;
  if (p.th > 0.01) {
    // two-handed grip: solve the left arm so its hand sits on the grip just above the right hand
    const T = add(rH, rd, 0.075);
    const dx = T[0] - lS[0], dy = T[1] - lS[1];
    const d = Math.min(Math.max(Math.hypot(dx, dy), 0.08), B.upper + B.fore - 0.005);
    const base = Math.atan2(dy, dx);
    const A = Math.acos((B.upper * B.upper + d * d - B.fore * B.fore) / (2 * B.upper * d));
    const e1 = [lS[0] + Math.cos(base - A) * B.upper, lS[1] + Math.sin(base - A) * B.upper];
    const e2 = [lS[0] + Math.cos(base + A) * B.upper, lS[1] + Math.sin(base + A) * B.upper];
    const eIK = e1[1] < e2[1] ? e1 : e2; // elbow bends downward
    const hIK = [lS[0] + (dx / Math.hypot(dx, dy)) * d, lS[1] + (dy / Math.hypot(dx, dy)) * d];
    const t = p.th;
    lE2 = [lE[0] + (eIK[0] - lE[0]) * t, lE[1] + (eIK[1] - lE[1]) * t];
    lH2 = [lH[0] + (hIK[0] - lH[0]) * t, lH[1] + (hIK[1] - lH[1]) * t];
  }
  const racket = {
    angle: ra,
    roll: p.rr,
    butt: add(rH, rd, -0.05),
    throat: add(rH, rd, 0.15),
    center: add(rH, rd, 0.15 + 0.165),
    tip: add(rH, rd, 0.15 + 0.33),
    dir: rd,
  };
  return { pelvis, neck, S, rS, lS, head, rE, rH, lE: lE2, lH: lH2, fK, fA, bK, bA, racket, twist: p.twist, ff: p.ff, bf: p.bf, lean: p.lean };
}

// ---------------------------------------------------------------- shot timelines (seconds)
export const SHOTS = {
  // groundstroke: unit-turn, loop, strike, finish, recover
  forehand: {
    pose: track([[0, "keepup"], [0.32, "fhBack", "inOut"], [0.5, "fhLoop", "in"], [0.62, "fhHit", "in"], [0.95, "fhFollow", "out"], [1.75, "ready", "inOut"]]),
    contact: 0.62,
    contactPose: "fhHit",
  },
  backhand: {
    pose: track([[0, "keepup"], [0.34, "bhBack", "inOut"], [0.5, "bhLoop", "in"], [0.62, "bhHit", "in"], [0.95, "bhFollow", "out"], [1.75, "ready", "inOut"]]),
    contact: 0.62,
    contactPose: "bhHit",
  },
  serve: {
    pose: track([[0, "keepup"], [0.25, "svStance", "inOut"], [0.62, "svToss", "inOut"], [0.98, "svTrophy", "inOut"], [1.16, "svHit", "in"], [1.5, "svFollow", "out"], [2.3, "ready", "inOut"]]),
    contact: 1.16,
    contactPose: "svHit",
    // ball: caught in the left hand, tossed from it
    toss: { catchAt: 0.25, releaseAt: 0.66 },
  },
};

/** Receive: ready → cushion exactly when the ball arrives → settle into keep-ups. */
export function receivePose(tRel) {
  // tRel: seconds relative to ball arrival (negative before)
  return track([[-0.55, "ready"], [0, "cushion", "out"], [0.5, "keepup", "inOut"]])(tRel);
}
