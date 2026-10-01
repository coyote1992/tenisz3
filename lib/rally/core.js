// Rally core v3.
// Players stand in the margins of the page. A pass only happens while both players are fully on screen:
// scrolling down, the moment the lower player has fully entered the frame; scrolling up, the moment the
// upper one has. On its way the ball always bounces on something real on the page (a word, a number,
// the edge of a photo or a card), which reacts to the hit.
import { POSES, fk, SHOTS, receivePose, mix, clamp, lerp } from "./pose.js";

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ROTATION = ["serve", "forehand", "backhand"];

function docRect(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height, r: r.right + scrollX, b: r.bottom + scrollY };
}
const qbez = (k, p0, p1, p2) => (1 - k) * (1 - k) * p0 + 2 * (1 - k) * k * p1 + k * k * p2;

/** Wrap every word of the given elements in a span so single words can take a hit. */
function wrapWords(el) {
  if (el.dataset.rWrapped) return;
  el.dataset.rWrapped = "1";
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) if (walker.currentNode.textContent.trim()) nodes.push(walker.currentNode);
  for (const n of nodes) {
    const parts = n.textContent.split(/([ \t\n\r]+)/);
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^[ \t\n\r]+$/.test(part)) frag.appendChild(document.createTextNode(part));
      else {
        const s = document.createElement("span");
        s.className = "r-w";
        s.textContent = part;
        frag.appendChild(s);
      }
    }
    n.parentNode.replaceChild(frag, n);
  }
}

export class RallyCore {
  constructor(renderer, opts = {}) {
    this.r = renderer;
    this.onShot = opts.onShot;
  }

  async start() {
    await this.r.init();
    await document.fonts.ready;
    // words and numbers that can take a bounce
    document.querySelectorAll("main h2, main h3, main .lead, .fact__num, .mini__v, .timeline__y, .callcard__phone, .stamp__v, .hero__lead")
      // leave text that React re-renders (interactive components) untouched
      .forEach((el) => !el.closest(".plan, .price-card, .map, .header, .mobile-menu") && wrapWords(el));
    this.measure();
    this.h = 0;
    this.shot = null;
    this.count = 0;
    this.spin = 0;
    this.trail = [];
    this.lastY = scrollY;
    this.dir = 1;
    this.onResize = () => this.measure();
    addEventListener("resize", this.onResize);
    this.running = true;
    const loop = (t) => {
      if (!this.running) return;
      this.frame(t / 1000);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    removeEventListener("resize", this.onResize);
    this.r.destroy();
  }

  measure() {
    const W = innerWidth, vh = innerHeight;
    this.small = W < 700;
    this.narrow = W < 1000; // no side margins: players use the empty section paddings
    this.heightPx = this.small ? 62 : this.narrow ? 84 : 132;
    this.s = this.heightPx / 1.85;
    this.ballR = this.small ? 5 : this.narrow ? 6 : 7.5;
    this.headerH = (document.querySelector(".header")?.getBoundingClientRect().height || 68) + 4;
    this.r.resize(W, vh);
    const sections = [...document.querySelectorAll("main > section")].filter((s) => !s.classList.contains("hero"));
    const rects = sections.map((sec) => ({ sec, r: docRect(sec) }));
    const isDark = (y) => {
      const hit = rects.find(({ r }) => y >= r.y && y < r.b);
      return !!hit && (hit.sec.classList.contains("section--dark") || hit.sec.classList.contains("heritage"));
    };
    // the whole figure (backswing, shadow) must stay inside the screen
    const back = 0.7 * this.s + 10;
    const clampX = (x, left) => (left ? Math.max(x, back) : Math.min(x, W - back));
    // both players of a pass must fit on screen at once
    const band = vh - this.headerH - this.heightPx * 1.3;
    this.anchors = [];
    const add = (x, footY, left) => this.anchors.push({ x: clampX(x, left), footY, f: left ? 1 : -1, kit: this.anchors.length % 4, dark: isDark(footY - 30) });
    if (!this.narrow) {
      // desktop: players stand in the side margins reserved for them, alternating sides
      const cont = document.querySelector("#palyak .container");
      const cr = docRect(cont);
      const cs0 = getComputedStyle(cont);
      const cl = cr.x + parseFloat(cs0.paddingLeft), crr = cr.r - parseFloat(cs0.paddingRight);
      const step = Math.min(vh * 0.52, band * 0.82);
      const first = rects[0], fin = rects[rects.length - 1];
      const y0 = first.r.y + Math.min(150, parseFloat(getComputedStyle(first.sec).paddingTop) + 20);
      const yEnd = fin.r.y + parseFloat(getComputedStyle(fin.sec).paddingTop) * 0.9 + 60;
      const n = Math.max(2, Math.ceil((yEnd - y0) / step));
      const st = (yEnd - y0) / n;
      const gap = Math.min(64, cl * 0.5);
      for (let i = 0; i <= n; i++) {
        const left = i % 2 === 0;
        add(left ? cl - gap : crr + gap, y0 + i * st, left);
      }
    } else {
      // phones and tablets: stand in the empty top / bottom padding of each section
      const zones = [];
      for (const { sec, r } of rects) {
        const cs = getComputedStyle(sec);
        const pt = parseFloat(cs.paddingTop) || 0, pb = parseFloat(cs.paddingBottom) || 0;
        if (pt > this.heightPx * 0.75) zones.push(r.y + pt - 8);
        if (pb > this.heightPx * 0.75 && !sec.querySelector(".final")) zones.push(r.b - 6);
      }
      zones.sort((a, b) => a - b);
      const picked = [];
      for (let i = 0; i < zones.length; i++) {
        const last = picked[picked.length - 1];
        const next = zones[i + 1];
        if (last === undefined) { picked.push(zones[i]); continue; }
        if (zones[i] - last < vh * 0.28) continue;
        // take this zone if skipping it would leave a gap too big for both players to be on screen
        if (next === undefined || next - last > band || zones[i] - last > vh * 0.45) picked.push(zones[i]);
      }
      const inset = this.small ? 14 : 28;
      picked.forEach((y, i) => {
        const left = i % 2 === 0;
        add(left ? inset : W - inset, y, left);
      });
    }
    const br = this.ballR / this.s;
    const toDoc = (a, q) => [a.x + a.f * q[0] * this.s, a.footY - q[1] * this.s];
    this.toDoc = toDoc;
    for (const a of this.anchors) {
      const c = fk(POSES.cushion).racket.center;
      a.receive = toDoc(a, [c[0], c[1] + br]);
    }
    // surfaces a ball can land on: words, numbers, and the top edges of photos and cards
    const surfaces = [];
    document.querySelectorAll(".r-w").forEach((w) => {
      const r = w.getBoundingClientRect();
      if (!r.width || r.width < 14) return;
      const fs = parseFloat(getComputedStyle(w).fontSize);
      const top = r.top + (r.height - fs) / 2 + fs * 0.16 + scrollY;
      surfaces.push({ x0: r.left + scrollX + 2, x1: r.right + scrollX - 2, y: top, el: w, kind: "word" });
    });
    document.querySelectorAll(".frame, .price-card, .mini, .callcard, .tile, .result, .plan__board, .map, .ccard").forEach((el) => {
      const r = docRect(el);
      if (r.w < 60) return;
      surfaces.push({ x0: r.x + 12, x1: r.r - 12, y: r.y, el, kind: "box" });
    });
    this.surfaces = surfaces;
  }

  // ------------------------------------------------------------------ poses
  keepupPose(now) {
    const ph = (now / 0.62) % 1;
    const p = { ...POSES.keepup };
    p.re += -7 * Math.cos(ph * Math.PI * 2);
    p.drop += 0.012 * Math.cos(ph * Math.PI * 2);
    return { pose: p, ph };
  }
  idlePose(k, now) {
    if (reduce) return POSES.ready;
    const w = 0.5 + 0.5 * Math.sin(now * 2.1 + k * 1.7);
    return mix(POSES.ready, POSES.split, w * 0.35);
  }
  keepupBall(k, now) {
    const a = this.anchors[k];
    const { pose, ph } = this.keepupPose(now);
    const c = fk(pose).racket.center;
    const hop = reduce ? 0 : 0.34 * Math.sin(Math.PI * ph);
    return this.toDoc(a, [c[0], c[1] + this.ballR / this.s + hop]);
  }

  // ------------------------------------------------------------------ visibility
  fullyVisible(k, sy) {
    const a = this.anchors[k];
    if (!a) return false;
    return a.footY - this.heightPx * 1.15 >= sy + this.headerH && a.footY + 4 <= sy + innerHeight;
  }
  partlyVisible(k, sy) {
    const a = this.anchors[k];
    return a.footY > sy + this.headerH && a.footY - this.heightPx < sy + innerHeight;
  }

  /** Pick the surface closest to the diagonal between the two players; widen the search until one is found. */
  pickBounce(a, b, recvFootY) {
    const down = b[1] > a[1];
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const tries = down
      ? [[a[1] + 40, recvFootY - 10, 0.66], [a[1] - 20, recvFootY + 20, 0.6], [Math.min(a[1], b[1]) - 200, Math.max(a[1], recvFootY) + 120, 0.5]]
      : [[b[1] + 30, a[1] - 50, 0.5], [b[1] - 20, a[1] + 20, 0.5], [Math.min(a[1], b[1]) - 200, Math.max(a[1], b[1]) + 120, 0.5]];
    for (const [lo, hi, ideal] of tries) {
      let best = null, bestScore = Infinity;
      for (const s of this.surfaces) {
        if (s.y < lo || s.y > hi) continue;
        const t = clamp((s.y - a[1]) / (dy || 1), 0, 1);
        const lx = a[0] + dx * t;
        const x = clamp(lx, s.x0, s.x1);
        const score = Math.abs(x - lx) + Math.abs(t - ideal) * 260 + (s.kind === "box" ? 25 : 0);
        if (score < bestScore) { bestScore = score; best = { x, y: s.y, s }; }
      }
      if (best) return best;
    }
    return { x: lerp(a[0], b[0], 0.78), y: recvFootY - 2, s: null };
  }

  startShot(from, to, now, ts) {
    const type = ROTATION[this.count % ROTATION.length];
    const S = SHOTS[type];
    const A = this.anchors[from], B = this.anchors[to];
    const cp = fk(POSES[S.contactPose]).racket.center;
    const contactPt = this.toDoc(A, [cp[0] + 0.05, cp[1]]);
    const bounce = this.pickBounce(contactPt, B.receive, B.footY);
    const P = [bounce.x, bounce.y - this.ballR];
    const l1 = Math.hypot(P[0] - contactPt[0], P[1] - contactPt[1]);
    const l2 = Math.hypot(B.receive[0] - P[0], B.receive[1] - P[1]);
    const flight = clamp(0.5 + (l1 + l2) / 1700, 0.6, 1.25) / ts;
    const contactAbs = now + S.contact / ts;
    const arrive = contactAbs + flight;
    const hitterEnd = now + (type === "serve" ? 2.3 : 1.75) / ts;
    const rise1 = Math.max(26, Math.min(70, l1 * 0.12)) + (contactPt[1] > P[1] ? Math.abs(contactPt[1] - P[1]) * 0.25 : 0);
    const c1 = [lerp(contactPt[0], P[0], 0.45), Math.min(contactPt[1], P[1]) - rise1];
    const c2 = [lerp(P[0], B.receive[0], 0.5), Math.min(P[1], B.receive[1]) - Math.max(30, 0.3 * this.s + Math.abs(P[1] - B.receive[1]) * 0.2)];
    this.shot = {
      from, to, type, ts, t0: now, contactAbs, arrive, end: Math.max(hitterEnd, arrive + 0.55),
      contactPt, P, c1, c2, split: clamp(l1 / (l1 + l2), 0.5, 0.82), bounce, startBall: this.keepupBall(from, now),
    };
  }

  ballDoc(now) {
    const sh = this.shot;
    if (!sh) return { p: this.keepupBall(this.h, now), flying: false, squash: 0 };
    if (now >= sh.arrive) return { p: this.keepupBall(sh.to, now), flying: false, squash: 0 };
    const A = this.anchors[sh.from];
    if (now < sh.contactAbs) {
      const t = (now - sh.t0) * sh.ts;
      if (sh.type === "serve") {
        const toss = SHOTS.serve.toss;
        const hand = () => {
          const j = fk(SHOTS.serve.pose(t));
          return this.toDoc(A, [j.lH[0] + 0.02, j.lH[1] + this.ballR / this.s]);
        };
        if (t < toss.catchAt) {
          const k = t / toss.catchAt, h = hand();
          return { p: [lerp(sh.startBall[0], h[0], k), lerp(sh.startBall[1], h[1], k) - Math.sin(Math.PI * k) * 18], flying: false, squash: 0 };
        }
        if (t < toss.releaseAt) return { p: hand(), flying: false, squash: 0 };
        if (!sh.release) {
          const j = fk(SHOTS.serve.pose(toss.releaseAt));
          sh.release = this.toDoc(A, [j.lH[0] + 0.02, j.lH[1] + this.ballR / this.s]);
        }
        const u = (t - toss.releaseAt) / (SHOTS.serve.contact - toss.releaseAt);
        const apex = sh.contactPt[1] - 0.5 * this.s;
        const y = u < 0.62 ? lerp(sh.release[1], apex, 1 - Math.pow(1 - u / 0.62, 2)) : lerp(apex, sh.contactPt[1], Math.pow((u - 0.62) / 0.38, 2));
        return { p: [lerp(sh.release[0], sh.contactPt[0], u), y], flying: false, squash: 0 };
      }
      const c = SHOTS[sh.type].contact;
      const u = t / c;
      const top = Math.min(sh.startBall[1], sh.contactPt[1]) - 0.6 * this.s;
      const y = u < 0.45 ? lerp(sh.startBall[1], top, 1 - Math.pow(1 - u / 0.45, 2)) : lerp(top, sh.contactPt[1], Math.pow((u - 0.45) / 0.55, 2));
      return { p: [lerp(sh.startBall[0], sh.contactPt[0], u), y], flying: false, squash: 0 };
    }
    const u = (now - sh.contactAbs) / (sh.arrive - sh.contactAbs);
    const B = this.anchors[sh.to];
    const near = Math.abs(u - sh.split);
    const squash = near < 0.035 ? (1 - near / 0.035) * 0.28 : 0;
    if (u < sh.split) {
      const k = u / sh.split;
      return { p: [qbez(k, sh.contactPt[0], sh.c1[0], sh.P[0]), qbez(k, sh.contactPt[1], sh.c1[1], sh.P[1])], flying: true, squash };
    }
    if (!sh.bounced) {
      sh.bounced = true;
      this.hitSurface(sh.bounce, B.dark);
    }
    const k = (u - sh.split) / (1 - sh.split);
    return { p: [qbez(k, sh.P[0], sh.c2[0], B.receive[0]), qbez(k, sh.P[1], sh.c2[1], B.receive[1])], flying: true, squash };
  }

  hitSurface(b, dark) {
    this.r.puff?.(b.x, b.y, dark);
    const el = b.s?.el;
    if (!el) return;
    const cls = b.s.kind === "word" ? "r-hit" : "r-dent";
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    if (b.s.kind === "box") this.r.ripple?.(b.x, b.y);
    setTimeout(() => el.classList.remove(cls), 700);
  }

  // ------------------------------------------------------------------ frame
  frame(now) {
    const sy = scrollY, vh = innerHeight, A = this.anchors;
    if (Math.abs(sy - this.lastY) > 2) {
      this.dir = sy > this.lastY ? 1 : -1;
      this.lastY = sy;
    }
    const sh = this.shot;
    if (sh && now >= sh.arrive && this.h !== sh.to) {
      this.h = sh.to;
      this.count++;
      this.onShot?.(this.count);
    }
    if (sh && now >= sh.end) this.shot = null;
    if (!this.shot) {
      const h = this.h;
      if (!this.partlyVisible(h, sy)) {
        // the holder is gone: hand the ball quietly to the player in view, never pass off-screen
        let best = h, bd = Infinity;
        for (let k = 0; k < A.length; k++) {
          if (!this.partlyVisible(k, sy)) continue;
          const d = Math.abs(A[k].footY - sy - vh / 2);
          if (d < bd) { bd = d; best = k; }
        }
        this.h = best;
      } else if (this.dir > 0 && this.fullyVisible(h + 1, sy) && this.fullyVisible(h, sy)) {
        this.startShot(h, h + 1, now, reduce ? 3 : 1);
      } else if (this.dir < 0 && this.fullyVisible(h - 1, sy) && this.fullyVisible(h, sy)) {
        this.startShot(h, h - 1, now, reduce ? 3 : 1);
      }
    }

    this.r.begin(sy);
    for (let k = 0; k < A.length; k++) {
      const a = A[k];
      const yScreen = a.footY - sy;
      if (yScreen < -60 || yScreen > vh + this.heightPx + 60) continue;
      const s = this.shot;
      let pose;
      if (s && k === s.from) pose = SHOTS[s.type].pose((now - s.t0) * s.ts);
      else if (s && k === s.to && now > s.arrive + 0.5) pose = this.keepupPose(now).pose;
      else if (s && k === s.to && now > s.arrive - 0.6) pose = receivePose(now - s.arrive);
      else if (!s && k === this.h) pose = this.keepupPose(now).pose;
      else pose = this.idlePose(k, now);
      this.r.player(a, pose, fk(pose), { s: this.s, sy, now, small: this.small });
    }
    const { p, flying, squash } = this.ballDoc(now);
    const scr = [p[0], p[1] - sy];
    if (flying) {
      this.trail.push(scr);
      if (this.trail.length > 6) this.trail.shift();
      this.spin += 0.35;
    } else {
      this.trail.length = 0;
      this.spin += 0.04;
    }
    const holder = this.shot ? A[this.shot.to] : A[this.h];
    this.r.ball(scr[0], scr[1], this.ballR, this.spin, this.trail.slice(0, -1), holder?.dark, flying, squash);
    this.r.end();
  }
}
