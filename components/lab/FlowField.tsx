"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { court, player, racket, word } from "@/lib/lab/shapes";
import { LabTag } from "./LabTag";

/**
 * 86 · Spin flow field, after thedent.ai's ambient background.
 * 7 000 crisp dots (3 000 on phones), drawn with WebGL so the GPU does the per-dot work.
 * They start as a loose starfield and, as you scroll, glide (each with its own small delay)
 * into a ball, a racket, a serving player, the court and the club's name. Morphs are eased
 * slowly; every dot keeps a slow drift and twinkle. Dots near the cursor slide out of its way
 * inside a small circle, and drift back when it moves on.
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
const TAU = Math.PI * 2;
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

const VERT = /* glsl */ `
  attribute vec2 aNoise;               // loose state, 0..1 of the screen
  attribute float aBallType;           // 0 surface, 1 seam, 2 silhouette (does not turn)
  attribute vec3 aRacket; attribute vec3 aPlayer; attribute vec3 aCourt; attribute vec3 aWord;
  attribute float aCol;                // colour index per state, packed base 4
  attribute vec4 aDot;                 // radius px, phase, drift speed, twinkle speed
  attribute vec2 aStag;                // morph stagger, halo flag
  uniform float uMorph, uTime, uDpr, uRepelR, uRepelA;
  uniform vec2 uRes, uMouse;
  uniform vec3 uProj;                  // centre x, centre y, scale (px per unit)
  uniform vec3 uPal[4];
  varying vec3 vCol; varying float vA;

  vec2 project(vec3 v){ float k = 4.2 / (4.2 - v.z); return vec2(uProj.x + v.x * uProj.z * k, uProj.y - v.y * uProj.z * k); }
  vec2 ballPos(){
    if (aBallType > 1.5) return project(vec3(position.xy, 0.));
    float a = uTime * .00018, ca = cos(a), sa = sin(a), ct = cos(.35), st = sin(.35);
    float x = position.x * ca + position.z * sa, z = -position.x * sa + position.z * ca;
    return project(vec3(x, position.y * ct - z * st, position.y * st + z * ct));
  }
  vec2 statePos(int k){
    if (k == 0) return aNoise * uRes;
    if (k == 1) return ballPos();
    if (k == 2) return project(aRacket);
    if (k == 3) return project(aPlayer);
    if (k == 4) return project(aCourt);
    return project(aWord);
  }
  float colIndex(int k){
    float b = k == 0 ? 1. : k == 1 ? 4. : k == 2 ? 16. : k == 3 ? 64. : k == 4 ? 256. : 1024.;
    return mod(floor((aCol + .5) / b), 4.);
  }
  void main(){
    float halo = aStag.y;
    int k = int(min(4., floor(uMorph)));
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
    vA = halo > .5 ? .34 : .34 + .48 * tw;
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

export function FlowField() {
  const wrap = useRef<HTMLElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const intro = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = wrap.current!, el = holder.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const S = 6; // states: loose, ball, racket, player, court, word
    let disposed = false, raf = 0, visible = true;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const uniforms = {
      uMorph: { value: 0 },
      uTime: { value: 0 },
      uDpr: { value: 1 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(-1e4, -1e4) },
      uProj: { value: new THREE.Vector3() },
      uRepelR: { value: 70 },
      uRepelA: { value: 0 },
      uPal: { value: COLORS.map(hexRgb) },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      // premultiplied additive, like canvas "lighter"
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    });
    const geo = new THREE.BufferGeometry();

    const setup = async () => {
      const count = innerWidth <= 768 ? 3000 : 7000;
      const noise = new Float32Array(count * 2), ball = new Float32Array(count * 3), btype = new Float32Array(count);
      const dot = new Float32Array(count * 4), stag = new Float32Array(count * 2), col = new Float32Array(count);
      const base = new Uint8Array(count);
      const A = 0.66, B = 0.34, Cz = 2 * Math.sqrt(A * B), R = 0.85;
      for (let i = 0; i < count; i++) {
        const pr = rand(i, 20);
        base[i] = pr < 0.45 ? 0 : pr < 0.75 ? 1 : pr < 0.9 ? 2 : 3;
        dot.set([0.75 + rand(i, 21) * 1.35, rand(i, 22) * TAU, 0.00026 + rand(i, 23) * 0.00016, 0.0007 + rand(i, 24) * 0.0008], i * 4);
        stag.set([rand(i, 8) * 0.25, rand(i, 30) < 0.07 ? 1 : 0], i * 2); // 7% stay loose as a starfield
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
      const shapes = [racket(count), player(count), court(count), await word(count, "Gellért")];
      if (disposed) return;
      // colour per state, packed as base-4 digits: loose, ball, racket, player, court, word
      for (let i = 0; i < count; i++) {
        const ballCol = btype[i] === 1 ? 1 : base[i] === 2 ? 3 : base[i] === 1 ? 0 : base[i];
        let v = base[i] + ballCol * 4, m = 16;
        for (const sh of shapes) {
          v += paletteIndex(sh.col[i * 3], sh.col[i * 3 + 1], sh.col[i * 3 + 2]) * m;
          m *= 4;
        }
        col[i] = v;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(ball, 3));
      geo.setAttribute("aBallType", new THREE.BufferAttribute(btype, 1));
      geo.setAttribute("aNoise", new THREE.BufferAttribute(noise, 2));
      ["aRacket", "aPlayer", "aCourt", "aWord"].forEach((n, k) => geo.setAttribute(n, new THREE.BufferAttribute(shapes[k].pos, 3)));
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
      const d = Math.min(devicePixelRatio || 1, 2);
      renderer.setPixelRatio(d);
      renderer.setSize(W, H, false);
      uniforms.uDpr.value = d;
      uniforms.uRes.value.set(W, H);
      const wide = W > 900;
      uniforms.uProj.value.set(wide ? W * 0.66 : W / 2, wide ? H * 0.52 : H * 0.36, Math.min(wide ? W * 0.2 : W * 0.36, H * 0.3));
      // the cleared circle scales a little with the screen: ~100 px on a laptop
      // (the first version was an oval of about 170 x 106 px)
      uniforms.uRepelR.value = Math.max(56, Math.min(W, H) * 0.11);
    };

    let p = 0, lastT = 0, mx = -1e4, my = -1e4, pres = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
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
      // the cleared circle follows the pointer with a little lag; when the pointer leaves,
      // it fades out where it was, so the dots drift back instead of snapping
      const m = uniforms.uMouse.value, here = mx > -1e3;
      if (here) {
        if (pres < 0.01) m.set(mx, my);
        else m.lerp(new THREE.Vector2(mx, my), Math.min(1, dt * 0.012));
      }
      pres += ((here ? 1 : 0) - pres) * Math.min(1, dt * 0.004);
      uniforms.uRepelA.value = reduce ? 0 : 42 * pres;
      uniforms.uMorph.value = p;
      uniforms.uTime.value = reduce ? 0 : time;
      renderer.render(scene, camera);

      // captions follow the settled state
      const idx = Math.round(p);
      caps.current.forEach((c, i) => {
        if (!c) return;
        const on = i + 1 === idx;
        c.style.opacity = on ? "1" : "0";
        c.style.transform = `translateY(${on ? 0 : i + 1 < idx ? -16 : 16}px)`;
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
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section ref={wrap} className="lab-flow" aria-label="Bevezető">
      <div className="lab-flow__stage">
        <div ref={holder} className="lab-flow__canvas" aria-hidden />
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
