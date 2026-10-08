// Point-cloud targets for the dot field (DotField): ball, racket, player, court, words.
// Every shape returns N positions (world units, roughly -1.6..1.6) and N colours (0..1 rgb).
import { drawAthlete } from "@/lib/rally/athlete2d.js";
import { fk, POSES } from "@/lib/rally/pose.js";

export type Cloud = { pos: Float32Array; col: Float32Array };

const hex = (h: string): [number, number, number] => {
  const n = parseInt(h.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};
export const PAL = {
  lime: hex("#e6e28c"),
  felt: hex("#d9e05a"),
  feltDim: hex("#7d8526"),
  paper: hex("#f5f0e6"),
  clay: hex("#c96a3f"),
  claySoft: hex("#e7b797"),
  forest: hex("#4f8a5c"),
};

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

class Builder {
  pos: Float32Array;
  col: Float32Array;
  i = 0;
  constructor(public n: number) {
    this.pos = new Float32Array(n * 3);
    this.col = new Float32Array(n * 3);
  }
  push(x: number, y: number, z: number, c: [number, number, number]) {
    if (this.i >= this.n) return;
    const k = this.i * 3;
    this.pos[k] = x;
    this.pos[k + 1] = y;
    this.pos[k + 2] = z;
    this.col[k] = c[0];
    this.col[k + 1] = c[1];
    this.col[k + 2] = c[2];
    this.i++;
  }
  /** Fill any remainder by repeating random existing points (keeps the count fixed). */
  done(r: () => number): Cloud {
    const filled = Math.max(1, this.i);
    while (this.i < this.n) {
      const k = Math.floor(r() * filled) * 3;
      this.push(this.pos[k] + (r() - 0.5) * 0.01, this.pos[k + 1] + (r() - 0.5) * 0.01, this.pos[k + 2], [this.col[k], this.col[k + 1], this.col[k + 2]]);
    }
    return { pos: this.pos, col: this.col };
  }
}

export function ball(n: number): Cloud {
  const r = rng(1);
  const b = new Builder(n);
  const R = 0.82;
  const seam = Math.floor(n * 0.3);
  const A = 0.66, B = 0.34, Cz = 2 * Math.sqrt(A * B);
  for (let i = 0; i < seam; i++) {
    const t = r() * Math.PI * 2;
    const w = 0.018;
    const x = A * Math.cos(t) + B * Math.cos(3 * t), y = A * Math.sin(t) - B * Math.sin(3 * t), z = Cz * Math.sin(2 * t);
    b.push(x * R + (r() - 0.5) * w, y * R + (r() - 0.5) * w, z * R + (r() - 0.5) * w, PAL.paper);
  }
  while (b.i < n) {
    // uniform on the sphere, a little fuzzy like felt
    const u = r() * 2 - 1, th = r() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    const rr = R * (1 + (r() - 0.5) * 0.05);
    b.push(s * Math.cos(th) * rr, u * rr, s * Math.sin(th) * rr, r() < 0.85 ? PAL.feltDim : PAL.felt);
  }
  return b.done(r);
}

export function racket(n: number): Cloud {
  const r = rng(2);
  const b = new Builder(n);
  const cy = 0.42, a = 0.42, e = 0.54;
  const frame = n * 0.44, strings = n * 0.2, throat = n * 0.13;
  for (let i = 0; i < frame; i++) {
    const t = r() * Math.PI * 2, rr = 1 + (r() - 0.5) * 0.07;
    b.push(Math.cos(t) * a * rr, cy + Math.sin(t) * e * rr, (r() - 0.5) * 0.06, i % 9 === 0 ? PAL.clay : PAL.paper);
  }
  const mains = 8, crosses = 10;
  for (let i = 0; i < strings; i++) {
    if (r() < 0.47) {
      const x = -a + ((Math.floor(r() * mains) + 0.5) / mains) * 2 * a;
      const h = e * Math.sqrt(Math.max(0, 1 - (x / a) ** 2));
      b.push(x, cy + (r() * 2 - 1) * h * 0.97, 0, PAL.lime);
    } else {
      const y = -e + ((Math.floor(r() * crosses) + 0.5) / crosses) * 2 * e;
      const w = a * Math.sqrt(Math.max(0, 1 - (y / e) ** 2));
      b.push((r() * 2 - 1) * w * 0.97, cy + y, 0, PAL.lime);
    }
  }
  // throat arms
  const t0 = -Math.PI / 2 - 0.85, t1 = -Math.PI / 2 + 0.85;
  for (let i = 0; i < throat; i++) {
    const side = r() < 0.5 ? t0 : t1, u = r();
    const sx = Math.cos(side) * a, sy = cy + Math.sin(side) * e;
    const ex = Math.sign(sx) * 0.03, ey = -0.42;
    const x = sx + (ex - sx) * (1 - (1 - u) ** 2), y = sy + (ey - sy) * u;
    b.push(x + (r() - 0.5) * 0.03, y, (r() - 0.5) * 0.05, PAL.paper);
  }
  // shaft + grip
  while (b.i < n) {
    const y = -0.42 - r() * 0.66;
    const grip = y < -0.6;
    const w = grip ? 0.07 : 0.045;
    const th = r() * Math.PI * 2;
    b.push(Math.cos(th) * w * 0.5, y, Math.sin(th) * w * 0.5, grip ? (Math.sin(y * 70 + th) > 0.4 ? PAL.claySoft : PAL.clay) : PAL.paper);
  }
  return b.done(r);
}

function sampleCanvas(cv: HTMLCanvasElement, n: number, scale: number, seed: number, depth: number, colorFn?: (r: number, g: number, bl: number) => [number, number, number]): Cloud {
  const r = rng(seed);
  const c = cv.getContext("2d")!;
  const { width: W, height: H } = cv;
  const d = c.getImageData(0, 0, W, H).data;
  const px: number[] = [];
  for (let y = 0; y < H; y += 1) for (let x = 0; x < W; x += 1) if (d[(y * W + x) * 4 + 3] > 140) px.push(x, y);
  const b = new Builder(n);
  const cnt = px.length / 2;
  for (let i = 0; i < n && cnt; i++) {
    const k = Math.floor(r() * cnt) * 2;
    const x = px[k] + r() - 0.5, y = px[k + 1] + r() - 0.5;
    const o = (Math.floor(px[k + 1]) * W + Math.floor(px[k])) * 4;
    const col: [number, number, number] = colorFn ? colorFn(d[o], d[o + 1], d[o + 2]) : [d[o] / 255, d[o + 1] / 255, d[o + 2] / 255];
    b.push((x - W / 2) * scale, -(y - H / 2) * scale, (r() - 0.5) * depth, col);
  }
  return b.done(r);
}

export function player(n: number): Cloud {
  const cv = document.createElement("canvas");
  cv.width = 300;
  cv.height = 400;
  const c = cv.getContext("2d")!;
  const kit = { shirt: "#f5f0e6", shade: "#d9d2c2", bottom: "#c96a3f", bottomShade: "#a9552f", accent: "#e6e28c", head: "cap", hair: "#e7b797", skin: "#e7b797", skinShade: "#d39b78", female: false };
  drawAthlete(c, fk(POSES.svHit), { x: 130, y: 382, s: 150, f: 1, kit, time: 0 });
  return sampleCanvas(cv, n, 0.0058, 3, 0.12);
}

export function court(n: number): Cloud {
  const r = rng(4);
  const b = new Builder(n);
  // real proportions: 23.77 x 10.97 (doubles), singles 8.23, service line 6.40 from net
  const L = 2.7 / 23.77; // world units per metre (court length runs along z)
  const hw = (10.97 / 2) * L, hs = (8.23 / 2) * L, hl = (23.77 / 2) * L, sv = 6.4 * L;
  const lines: [number, number, number, number][] = [
    [-hw, -hl, hw, -hl], [-hw, hl, hw, hl], [-hw, -hl, -hw, hl], [hw, -hl, hw, hl],
    [-hs, -hl, -hs, hl], [hs, -hl, hs, hl], [-hs, -sv, hs, -sv], [-hs, sv, hs, sv], [0, -sv, 0, sv],
    [0, -hl, 0, -hl + 0.15 * L * 2], [0, hl, 0, hl - 0.15 * L * 2],
  ];
  const lens = lines.map(([x0, z0, x1, z1]) => Math.hypot(x1 - x0, z1 - z0));
  const tot = lens.reduce((s, v) => s + v, 0);
  const nl = n * 0.64;
  for (let i = 0; i < nl; i++) {
    let u = r() * tot, k = 0;
    while (u > lens[k] && k < lens.length - 1) u -= lens[k++];
    const [x0, z0, x1, z1] = lines[k];
    const t = u / lens[k];
    b.push(x0 + (x1 - x0) * t + (r() - 0.5) * 0.012, 0, z0 + (z1 - z0) * t + (r() - 0.5) * 0.012, PAL.paper);
  }
  // net: a mesh plane at z = 0, height 0.914 m in the middle, 1.07 m at the posts
  const nn = n * 0.2, ext = hw + 0.914 * L;
  for (let i = 0; i < nn; i++) {
    const x = (r() * 2 - 1) * ext;
    const top = (0.914 + (1.07 - 0.914) * (Math.abs(x) / ext) ** 2) * L * 1.6;
    const grid = r() < 0.5;
    const y = grid ? Math.round((r() * top) / 0.03) * 0.03 : r() * top;
    const xx = grid ? x : Math.round(x / 0.03) * 0.03;
    b.push(xx, Math.min(y, top), 0, r() < 0.15 ? PAL.paper : [0.75, 0.78, 0.7]);
  }
  for (let i = 0; i < n * 0.03; i++) {
    const x = (r() * 2 - 1) * ext;
    b.push(x, (0.914 + (1.07 - 0.914) * (Math.abs(x) / ext) ** 2) * L * 1.6, 0, PAL.paper);
  }
  // the clay itself, sparse
  while (b.i < n) {
    const x = (r() * 2 - 1) * (hw + 0.35), z = (r() * 2 - 1) * (hl + 0.4);
    b.push(x, -0.005, z, r() < 0.5 ? PAL.clay : PAL.claySoft);
  }
  const out = b.done(r);
  // tilt the court towards the viewer and drop it a little
  const a = 0.62, ca = Math.cos(a), sa = Math.sin(a);
  for (let i = 0; i < n; i++) {
    const y = out.pos[i * 3 + 1], z = out.pos[i * 3 + 2];
    out.pos[i * 3 + 1] = y * ca - z * sa - 0.05;
    out.pos[i * 3 + 2] = y * sa + z * ca;
  }
  return out;
}

export async function word(n: number, text: string): Promise<Cloud> {
  try {
    await document.fonts.load('italic 400 220px "Newsreader Variable"');
  } catch {}
  const cv = document.createElement("canvas");
  cv.width = 900;
  cv.height = 300;
  const c = cv.getContext("2d")!;
  c.fillStyle = "#f5f0e6";
  c.font = 'italic 400 230px "Newsreader Variable", Georgia, serif';
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.fillText(text, 450, 150);
  const r = rng(5);
  return sampleCanvas(cv, n, 0.0034, 6, 0.06, () => (r() < 0.12 ? PAL.lime : PAL.paper));
}
