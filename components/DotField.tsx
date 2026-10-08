"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { court, player, racket, word, type Cloud } from "@/lib/dots/shapes";

/**
 * Dot field: thousands of crisp dots drawn with WebGL (the GPU does the per-dot work).
 * State 0 is a loose starfield; the next states are tennis shapes. The parent says which state
 * it wants via `stage()` (called every frame); the field eases there slowly, each dot gliding
 * with its own small delay, then keeps a slow drift and twinkle. Dots near the cursor slide out
 * of its way inside a small circle and drift back when it moves on.
 * With `loop`, the last shape must equal the first one: the field then wraps round seamlessly
 * and `stage()` can keep counting up (1, 2, 3, ...) for an endless cycle.
 */

export type DotShape = "ball" | "racket" | "player" | "court" | "courtLines" | { word: string };
/**
 * Where the shapes sit: centre x and y as fractions of the box (or `py` px from its top),
 * scale = min(width·sw, height·sh).
 */
export type DotPlace = { x: number; y: number; sw: number; sh: number; py?: number };

type Props = {
  shapes: DotShape[];
  stage: () => number;
  onFrame?: (p: number) => void;
  wide?: DotPlace;
  narrow?: DotPlace;
  /** Optional placement per shape (same order as `shapes`); falls back to wide / narrow. */
  places?: { wide: DotPlace; narrow: DotPlace; alpha?: number }[];
  /** Ball rotation speed, radians per millisecond. */
  ballSpin?: number;
  count?: [number, number];
  loop?: boolean;
  /** Four colours. "add" glows on dark pages; "normal" is for light pages. */
  palette?: string[];
  blend?: "add" | "normal";
  /** Overall dot opacity multiplier. */
  alpha?: number;
  /** Share of dots that never join a shape and stay as a starfield. */
  halo?: number;
  /** Loose dots drift with the page scroll by depth (bigger = nearer = faster); 0 = off. */
  parallax?: number;
  className?: string;
};

// lime, paper, clay, felt
const COLORS = ["#e6e28c", "#f5f0e6", "#e5875a", "#c9d34f"];
const TAU = Math.PI * 2;
const MAX_STATES = 7;
const rand = (i: number, s: number) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** Nearest of the four palette colours for a shape colour (0..1 rgb). */
function paletteIndex(r: number, g: number, b: number) {
  if (r > 0.7 && g < 0.75 && b < 0.65 && r - g > 0.12) return 2; // clay, skin
  if (b < 0.62 && g > 0.7) return r > 0.8 ? 0 : 3; // lime strings, felt
  return 1; // paper: frame, lines, net, shirt
}

const VERT = /* glsl */ `
  attribute vec2 aNoise;               // loose state, 0..1 of the box
  attribute float aBallType;           // 0 surface, 1 seam, 2 silhouette (does not turn)
  attribute vec3 aT0; attribute vec3 aT1; attribute vec3 aT2; attribute vec3 aT3; attribute vec3 aT4;
  attribute float aCol;                // colour index per state, packed base 4
  attribute vec4 aDot;                 // radius px, phase, drift speed, twinkle speed
  attribute vec2 aStag;                // morph stagger, halo flag
  uniform float uMorph, uTime, uDpr, uRepelR, uRepelA, uLast, uAlpha, uScroll, uParallax, uSpin;
  uniform float uStateA[${MAX_STATES}]; // per state opacity
  uniform vec3 uPlace[${MAX_STATES}];  // per state: centre x, centre y, scale (px per unit)
  uniform float uKind[${MAX_STATES}];  // 0 loose, 1 ball, 2 static shape
  uniform float uSlot[${MAX_STATES}];  // which aT slot a static state uses
  uniform vec2 uRes, uMouse;
  uniform vec3 uPal[4];
  varying vec3 vCol; varying float vA;

  vec2 project(vec3 v, vec3 pl){ float k = 4.2 / (4.2 - v.z); return vec2(pl.x + v.x * pl.z * k, pl.y - v.y * pl.z * k); }
  vec2 ballPos(vec3 pl){
    if (aBallType > 1.5) return project(vec3(position.xy, 0.), pl);
    float a = uTime * uSpin, ca = cos(a), sa = sin(a), ct = cos(.35), st = sin(.35);
    float x = position.x * ca + position.z * sa, z = -position.x * sa + position.z * ca;
    return project(vec3(x, position.y * ct - z * st, position.y * st + z * ct), pl);
  }
  vec3 slot(float s){ return s < .5 ? aT0 : s < 1.5 ? aT1 : s < 2.5 ? aT2 : s < 3.5 ? aT3 : aT4; }
  vec2 statePos(int k){
    float kind = uKind[k];
    if (kind < .5) {
      // the loose starfield; with parallax it scrolls past at a speed set by each dot's depth
      vec2 q = aNoise * uRes;
      float depth = .25 + .75 * (aDot.x - .75) / 1.35;
      q.y = mod(q.y - uScroll * uParallax * depth, uRes.y + 40.) - 20.;
      return q;
    }
    if (kind < 1.5) return ballPos(uPlace[k]);
    return project(slot(uSlot[k]), uPlace[k]);
  }
  float colIndex(int k){
    float b = k == 0 ? 1. : k == 1 ? 4. : k == 2 ? 16. : k == 3 ? 64. : k == 4 ? 256. : k == 5 ? 1024. : 4096.;
    return mod(floor((aCol + .5) / b), 4.);
  }
  void main(){
    float halo = aStag.y;
    int k = int(min(uLast - 1., floor(uMorph)));
    float local = uMorph - float(k);
    float f = halo > .5 ? 0. : smoothstep(aStag.x, aStag.x + .75, local);
    int ka = halo > .5 ? 0 : k, kb = halo > .5 ? 0 : k + 1;
    vec2 pos = mix(statePos(ka), statePos(kb), f);
    // loose dots wander, shaped dots only breathe
    float loose = halo > .5 ? 1. : 1. - clamp(uMorph, 0., 1.);
    float wob = uTime * aDot.z + aDot.y, amp = 3. + 12. * loose;
    pos += vec2(cos(wob), sin(wob * 1.27 + aDot.y)) * amp;
    // the cursor clears a small round space: dots slide out of the way and drift back
    vec2 d = pos - uMouse;
    float r2 = dot(d, d);
    pos += d * inversesqrt(r2 + 1.) * uRepelA * exp(-r2 / (uRepelR * uRepelR));
    vec2 clip = pos / uRes * 2. - 1.;
    gl_Position = vec4(clip.x, -clip.y, 0., 1.);
    gl_PointSize = (aDot.x * 2. + 1.) * uDpr;
    vCol = uPal[int(f < .5 ? colIndex(ka) : colIndex(kb))];
    float tw = .5 + .5 * sin(uTime * aDot.w + aDot.y * 13.7);
    vA = (halo > .5 ? .34 : .34 + .48 * tw) * uAlpha * (halo > .5 ? 1. : mix(uStateA[ka], uStateA[kb], f));
  }
`;

const FRAG = /* glsl */ `
  varying vec3 vCol; varying float vA;
  void main(){
    float d = length(gl_PointCoord - .5) * 2.;
    float a = vA * (1. - smoothstep(.6, 1., d));
    if (a < .01) discard;
    gl_FragColor = vec4(vCol * a, a);
  }
`;

const hexRgb = (h: string) => new THREE.Vector3(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const LAB_WIDE: DotPlace = { x: 0.66, y: 0.52, sw: 0.2, sh: 0.3 };
const LAB_NARROW: DotPlace = { x: 0.5, y: 0.36, sw: 0.36, sh: 0.3 };

export function DotField({
  shapes,
  stage,
  onFrame,
  wide = LAB_WIDE,
  narrow = LAB_NARROW,
  places,
  ballSpin = 0.00018,
  count = [7000, 3000],
  loop = false,
  palette = COLORS,
  blend = "add",
  alpha = 1,
  halo = 0.07,
  parallax = 0,
  className,
}: Props) {
  const holder = useRef<HTMLDivElement>(null);
  // latest callbacks without re-creating the GL scene
  const cb = useRef({ stage, onFrame });
  cb.current = { stage, onFrame };
  const cfg = useRef({ shapes, wide, narrow, places, ballSpin, count, loop, palette, blend, alpha, halo, parallax });

  useEffect(() => {
    const el = holder.current!;
    const { shapes, wide, narrow, places, ballSpin, count: counts, loop, palette, blend, alpha, halo, parallax } = cfg.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const S = Math.min(MAX_STATES, shapes.length + 1);
    let disposed = false, raf = 0, visible = false;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const kinds = new Array(MAX_STATES).fill(0), slots = new Array(MAX_STATES).fill(0);
    const uniforms = {
      uMorph: { value: 0 },
      uTime: { value: 0 },
      uDpr: { value: 1 },
      uLast: { value: S - 1 },
      uKind: { value: kinds },
      uSlot: { value: slots },
      uRes: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(-1e4, -1e4) },
      uPlace: { value: Array.from({ length: MAX_STATES }, () => new THREE.Vector3()) },
      uAlpha: { value: alpha },
      uScroll: { value: 0 },
      uParallax: { value: parallax },
      uSpin: { value: ballSpin },
      uStateA: { value: Array.from({ length: MAX_STATES }, (_, k) => (k === 0 ? 1 : places?.[k - 1]?.alpha ?? 1)) },
      uRepelR: { value: 70 },
      uRepelA: { value: 0 },
      uPal: { value: palette.map(hexRgb) },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      // premultiplied: additive glows like canvas "lighter"; normal sits on light pages
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: blend === "add" ? THREE.OneFactor : THREE.OneMinusSrcAlphaFactor,
    });
    const geo = new THREE.BufferGeometry();

    const setup = async () => {
      const n = innerWidth <= 768 ? counts[1] : counts[0];
      const noise = new Float32Array(n * 2), ball = new Float32Array(n * 3), btype = new Float32Array(n);
      const dot = new Float32Array(n * 4), stag = new Float32Array(n * 2), col = new Float32Array(n);
      const base = new Uint8Array(n);
      const A = 0.66, B = 0.34, Cz = 2 * Math.sqrt(A * B), R = 0.85;
      for (let i = 0; i < n; i++) {
        const pr = rand(i, 20);
        base[i] = pr < 0.45 ? 0 : pr < 0.75 ? 1 : pr < 0.9 ? 2 : 3;
        dot.set([0.75 + rand(i, 21) * 1.35, rand(i, 22) * TAU, 0.00026 + rand(i, 23) * 0.00016, 0.0007 + rand(i, 24) * 0.0008], i * 4);
        stag.set([rand(i, 8) * 0.25, rand(i, 30) < halo ? 1 : 0], i * 2); // a share stays loose as a starfield
        noise.set([rand(i, 1), rand(i, 2)], i * 2);
        // ball: a seam, a silhouette rim and a sprinkle of surface
        const r = rand(i, 40);
        if (r < 0.3) {
          const t = rand(i, 41) * TAU, w = R + (rand(i, 42) - 0.5) * 0.03;
          ball.set([(A * Math.cos(t) + B * Math.cos(3 * t)) * w, (A * Math.sin(t) - B * Math.sin(3 * t)) * w, Cz * Math.sin(2 * t) * w], i * 3);
          btype[i] = 1;
        } else if (r < 0.62) {
          const t = rand(i, 43) * TAU, rr = R * (1 + (rand(i, 44) - 0.5) * 0.04);
          ball.set([Math.cos(t) * rr, Math.sin(t) * rr, 0], i * 3);
          btype[i] = 2;
        } else {
          const u = rand(i, 45) * 2 - 1, th = rand(i, 46) * TAU, s = Math.sqrt(1 - u * u);
          ball.set([s * Math.cos(th) * R, u * R, s * Math.sin(th) * R], i * 3);
          btype[i] = 0;
        }
      }
      // static shapes go into the aT slots; the ball is special (it turns), the loose state is state 0
      const clouds: Cloud[] = [];
      const stateCloud: (Cloud | "ball")[] = [];
      for (const sh of shapes.slice(0, S - 1)) {
        if (sh === "ball") {
          stateCloud.push("ball");
          continue;
        }
        const c =
          sh === "racket" ? racket(n) : sh === "player" ? player(n) : sh === "court" ? court(n) : sh === "courtLines" ? court(n, false) : await word(n, sh.word);
        clouds.push(c);
        stateCloud.push(c);
      }
      if (disposed) return;
      stateCloud.forEach((c, i) => {
        kinds[i + 1] = c === "ball" ? 1 : 2;
        slots[i + 1] = c === "ball" ? 0 : clouds.indexOf(c);
      });
      // colour per state, packed as base-4 digits
      for (let i = 0; i < n; i++) {
        const ballCol = btype[i] === 1 ? 1 : base[i] === 2 ? 3 : base[i] === 1 ? 0 : base[i];
        let v = base[i], m = 4;
        for (const c of stateCloud) {
          v += (c === "ball" ? ballCol : paletteIndex(c.col[i * 3], c.col[i * 3 + 1], c.col[i * 3 + 2])) * m;
          m *= 4;
        }
        col[i] = v;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(ball, 3));
      geo.setAttribute("aBallType", new THREE.BufferAttribute(btype, 1));
      geo.setAttribute("aNoise", new THREE.BufferAttribute(noise, 2));
      for (let s = 0; s < 5; s++) geo.setAttribute("aT" + s, new THREE.BufferAttribute(clouds[s]?.pos ?? new Float32Array(n * 3), 3));
      geo.setAttribute("aCol", new THREE.BufferAttribute(col, 1));
      geo.setAttribute("aDot", new THREE.BufferAttribute(dot, 4));
      geo.setAttribute("aStag", new THREE.BufferAttribute(stag, 2));
      const pts = new THREE.Points(geo, mat);
      pts.frustumCulled = false;
      scene.add(pts);
      resize();
      raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const W = el.clientWidth, H = el.clientHeight;
      if (!W || !H) return;
      const d = Math.min(devicePixelRatio || 1, 2);
      renderer.setPixelRatio(d);
      renderer.setSize(W, H, false);
      uniforms.uDpr.value = d;
      uniforms.uRes.value.set(W, H);
      for (let k = 1; k < MAX_STATES; k++) {
        const set = places?.[k - 1];
        const pl = W > 900 ? set?.wide ?? wide : set?.narrow ?? narrow;
        uniforms.uPlace.value[k].set(W * pl.x, pl.py ?? H * pl.y, Math.min(W * pl.sw, H * pl.sh));
      }
      // the cleared circle scales a little with the screen: ~100 px on a laptop
      uniforms.uRepelR.value = Math.max(56, Math.min(innerWidth, innerHeight) * 0.11);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let p = 0, raw = 0, lastT = 0, mx = -1e4, my = -1e4, pres = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      mx = inside ? x : -1e4;
      my = inside ? y : -1e4;
    };
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);

    function frame(time: number) {
      raf = requestAnimationFrame(frame);
      const dt = lastT ? Math.min(time - lastT, 1000) : 16.7;
      lastT = time;
      // nothing to draw while off screen or under a preloader curtain
      if (!visible || document.documentElement.classList.contains("lab-loading")) return;
      const target = cb.current.stage();
      raw += (target - raw) * Math.min(1, dt * (reduce ? 1 : 0.0022));
      // looping: the last state equals state 1, so wrap the counter round without a visible jump
      p = loop && raw > 1 ? 1 + ((raw - 1) % (S - 2)) : Math.min(S - 1, raw);
      const m = uniforms.uMouse.value, here = mx > -1e3;
      if (here) {
        if (pres < 0.01) m.set(mx, my);
        else m.lerp(new THREE.Vector2(mx, my), Math.min(1, dt * 0.012));
      }
      pres += ((here ? 1 : 0) - pres) * Math.min(1, dt * 0.004);
      uniforms.uRepelA.value = reduce ? 0 : 42 * pres;
      uniforms.uMorph.value = p;
      uniforms.uScroll.value = scrollY;
      uniforms.uTime.value = reduce ? 0 : time;
      renderer.render(scene, camera);
      cb.current.onFrame?.(p);
    }

    setup();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onMove);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={holder} className={className ?? "dotfield"} aria-hidden />;
}
