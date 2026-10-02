"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ball, court, player, racket, word, type Cloud } from "@/lib/lab/shapes";
import { LabTag } from "./LabTag";

/**
 * 86 · Spin flow field.
 * ~14 000 particles drift in a flow field and settle into a ball, a racket, a serving player,
 * the court and the club's name. Scroll drives the morph; the cursor pushes particles away.
 * Each frame is drawn four times with a little time lag, which reads as motion trails.
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

const VERT = /* glsl */ `
  attribute vec3 p0; attribute vec3 p1; attribute vec3 p2; attribute vec3 p3; attribute vec3 p4;
  attribute vec3 c0; attribute vec3 c1; attribute vec3 c2; attribute vec3 c3; attribute vec3 c4;
  attribute vec4 rnd;
  uniform float uMorph, uTime, uPixel, uSize, uAlpha, uSpin;
  uniform vec2 uMouse;
  varying vec3 vCol; varying float vA;

  vec3 P(int k){ return k==0?p0:k==1?p1:k==2?p2:k==3?p3:p4; }
  vec3 C(int k){ return k==0?c0:k==1?c1:k==2?c2:k==3?c3:c4; }
  vec3 flow(vec3 p, float t){
    return vec3(
      sin(p.y*2.7 + t) + sin(p.z*1.9 - t*.7) * .6,
      sin(p.z*2.3 + t*.8) + sin(p.x*2.9 + t*.5) * .6,
      sin(p.x*2.1 - t*.9) + sin(p.y*1.7 + t*.6) * .6);
  }
  mat3 rotY(float a){ float c=cos(a), s=sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }

  void main(){
    float m = clamp(uMorph, 0., 4.);
    int k = int(min(floor(m), 3.));
    float t = m - float(k);
    float st = rnd.x * .45;
    float tt = smoothstep(st, st + .55, t);
    vec3 a = P(k), b = P(k + 1);
    // the ball spins, everything else turns gently
    float spin = uSpin + (k == 0 ? (1. - tt) * uTime * .25 : 0.);
    vec3 pos = rotY(spin) * mix(a, b, tt);
    vCol = mix(C(k), C(k + 1), tt);
    float wild = sin(3.14159 * tt);
    pos += flow(pos * 1.3 + rnd.yzw * 2., uTime * .35 + rnd.x * 6.) * (wild * .55 + .012);
    // cursor pushes particles away on the screen plane
    vec4 mv = modelViewMatrix * vec4(pos, 1.);
    vec4 clip = projectionMatrix * mv;
    vec2 ndc = clip.xy / clip.w;
    vec2 d = ndc - uMouse;
    float f = exp(-dot(d, d) * 18.) * .12;
    clip.xy += normalize(d + 1e-5) * f * clip.w;
    gl_Position = clip;
    gl_PointSize = uSize * uPixel * (.6 + rnd.y * .8) / -mv.z;
    vA = uAlpha * (.55 + rnd.z * .45);
  }
`;

const FRAG = /* glsl */ `
  varying vec3 vCol; varying float vA;
  void main(){
    vec2 q = gl_PointCoord - .5;
    float d = dot(q, q);
    if (d > .25) discard;
    gl_FragColor = vec4(vCol, vA * smoothstep(.25, .0, d));
  }
`;

export function FlowField() {
  const wrap = useRef<HTMLElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const intro = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = holder.current!, sec = wrap.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = innerWidth < 760;
    const N = small ? 7000 : 14000;
    let disposed = false;
    let raf = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0, 4.2);

    const uniforms = {
      uMorph: { value: 0 },
      uTime: { value: 0 },
      uPixel: { value: renderer.getPixelRatio() },
      uSize: { value: small ? 9 : 8 },
      uAlpha: { value: 1 },
      uSpin: { value: 0 },
      uMouse: { value: new THREE.Vector2(9, 9) },
    };
    const geo = new THREE.BufferGeometry();
    const LAGS = reduce ? [0] : [0, 1, 2, 3];
    const mats = LAGS.map(
      (i) =>
        new THREE.ShaderMaterial({
          vertexShader: VERT,
          fragmentShader: FRAG,
          uniforms: THREE.UniformsUtils.clone(uniforms),
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
    );
    const group = new THREE.Group();
    scene.add(group);

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // keep the shapes a similar size on tall phones
      camera.position.z = w / h < 0.8 ? 5.6 : 4.2;
      // on wide screens the shape sits right of the caption
      group.position.x = w > 900 ? 0.95 : 0;
      group.position.y = w > 900 ? 0 : 0.55;
      camera.updateProjectionMatrix();
    };

    (async () => {
      const shapes: Cloud[] = [ball(N), racket(N), player(N), court(N), await word(N, "Gellért")];
      if (disposed) return;
      shapes.forEach((s, i) => {
        geo.setAttribute("p" + i, new THREE.BufferAttribute(s.pos, 3));
        geo.setAttribute("c" + i, new THREE.BufferAttribute(s.col, 3));
      });
      const rnd = new Float32Array(N * 4);
      for (let i = 0; i < rnd.length; i++) rnd[i] = Math.random();
      geo.setAttribute("rnd", new THREE.BufferAttribute(rnd, 4));
      geo.setAttribute("position", new THREE.BufferAttribute(shapes[0].pos, 3));
      geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 10);
      mats.forEach((m, i) => {
        const pts = new THREE.Points(geo, m);
        pts.renderOrder = -i;
        group.add(pts);
      });
      resize();
      loop(performance.now());
    })();

    const hist: { m: number; t: number; s: number }[] = [];
    let morph = 0, spin = 0, visible = true;
    const mouse = new THREE.Vector2(9, 9), mouseT = new THREE.Vector2(9, 9);
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouseT.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1));
    };
    const onLeave = () => mouseT.set(9, 9);
    sec.addEventListener("pointermove", onMove);
    sec.addEventListener("pointerleave", onLeave);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(sec);
    addEventListener("resize", resize);

    const t0 = performance.now();
    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      // hold each shape for a while, morph in between
      const target = p * 4;
      const hold = Math.floor(target) + Math.min(1, Math.max(0, (target - Math.floor(target) - 0.3) / 0.7));
      morph += (Math.min(4, hold) - morph) * 0.07;
      const t = reduce ? 4 : (now - t0) / 1000;
      spin = Math.sin(t * 0.18) * 0.35 + (p - 0.5) * 0.6;
      mouse.lerp(mouseT.x > 5 ? mouseT : mouseT, 0.15);
      hist.unshift({ m: morph, t, s: spin });
      if (hist.length > 16) hist.pop();
      mats.forEach((m, i) => {
        const h = hist[Math.min(hist.length - 1, LAGS[i] * 4)];
        m.uniforms.uMorph.value = h.m;
        m.uniforms.uTime.value = h.t;
        m.uniforms.uSpin.value = h.s;
        m.uniforms.uAlpha.value = i === 0 ? 0.85 : 0.22 / i;
        m.uniforms.uMouse.value.copy(mouse);
        m.uniforms.uSize.value = small ? 9 : 8;
        m.uniforms.uPixel.value = renderer.getPixelRatio();
      });
      renderer.render(scene, camera);

      // captions
      const idx = Math.min(4, Math.round(morph));
      caps.current.forEach((c, i) => {
        if (!c) return;
        const on = i === idx && p > 0.06;
        c.style.opacity = on ? "1" : "0";
        c.style.transform = `translateY(${on ? 0 : i < idx ? -16 : 16}px)`;
      });
      if (intro.current) {
        const v = Math.max(0, 1 - p / 0.06);
        intro.current.style.opacity = String(v);
        intro.current.style.transform = `translateY(${(1 - v) * -20}px)`;
      }
      dots.current?.querySelectorAll("span").forEach((d, i) => d.classList.toggle("on", i === idx));
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", resize);
      sec.removeEventListener("pointermove", onMove);
      sec.removeEventListener("pointerleave", onLeave);
      geo.dispose();
      mats.forEach((m) => m.dispose());
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
        <LabTag n="86" name="Spin flow field" dark />
      </div>
    </section>
  );
}
