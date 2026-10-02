"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { LabTag } from "./LabTag";

/**
 * 21 · Living photograph.
 * The club's own hero photo plus a depth map (estimated offline with Depth Anything V2).
 * The cursor (or a slow idle sway) moves the camera a few millimetres; scrolling pulls focus
 * from the player in front to the player behind her, like a cinema focus pull.
 */

const FRAG = /* glsl */ `
  uniform sampler2D uImg, uDepth;
  uniform vec2 uOff, uRes, uImgRes;
  uniform float uFocus, uBlur, uTime;
  varying vec2 vUv;

  vec2 cover(vec2 uv){
    float ra = uRes.x / uRes.y, ri = uImgRes.x / uImgRes.y;
    vec2 s = ra > ri ? vec2(1., ri / ra) : vec2(ra / ri, 1.);
    // on portrait screens keep the woman in front in frame (she stands left of centre)
    float cx = mix(.5, .4, clamp((ri / ra - 1.) * .5, 0., 1.));
    return (uv - .5) * s * .93 + vec2(cx, .5);
  }
  void main(){
    vec2 uv = cover(vUv);
    // parallax: near pixels move more than far ones; three refinement steps
    vec2 p = uv;
    for (int i = 0; i < 3; i++) {
      float d = texture2D(uDepth, p).r;
      p = uv - uOff * (d - .35) * .045;
    }
    float d0 = texture2D(uDepth, p).r;
    float coc = clamp(abs(d0 - uFocus) * uBlur, 0., 1.);
    vec3 acc = vec3(0.); float wsum = 0.;
    const float GA = 2.39996;
    for (int i = 0; i < 24; i++) {
      float fi = float(i);
      float r = sqrt(fi / 24.) * coc * .011;
      vec2 o = vec2(cos(fi * GA), sin(fi * GA)) * r * vec2(uRes.y / uRes.x, 1.);
      vec3 c = texture2D(uImg, p + o).rgb;
      float w = 1. + dot(c, vec3(.3)) * coc * 2.;
      acc += c * w; wsum += w;
    }
    vec3 col = acc / wsum;
    // warm grade, vignette and a whisper of grain
    float v = smoothstep(1.1, .35, length((vUv - .5) * vec2(1.2, 1.)));
    col *= mix(.72, 1., v);
    col = mix(col, col * vec3(1.04, 1., .94), .5);
    float g = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - .5) * .025;
    gl_FragColor = vec4(col, 1.);
  }
`;

export function LivingPhoto() {
  const wrap = useRef<HTMLElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const capA = useRef<HTMLDivElement>(null);
  const capB = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = holder.current!, sec = wrap.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const load = (u: string) =>
      new THREE.TextureLoader().load(u, (t) => {
        t.colorSpace = THREE.NoColorSpace;
      });
    const img = load("/img/hero-serve.jpg");
    img.minFilter = THREE.LinearFilter;
    const depth = load("/lab/hero-serve-depth.webp");
    const uniforms = {
      uImg: { value: img },
      uDepth: { value: depth },
      uOff: { value: new THREE.Vector2() },
      uRes: { value: new THREE.Vector2(1, 1) },
      uImgRes: { value: new THREE.Vector2(1920, 1064) },
      uFocus: { value: 0.56 },
      uBlur: { value: 2.2 },
      uTime: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",
      fragmentShader: FRAG,
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w, h);
    };
    resize();
    addEventListener("resize", resize);

    const off = new THREE.Vector2(), offT = new THREE.Vector2();
    let pointer = false;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      offT.set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
      pointer = true;
    };
    const onLeave = () => (pointer = false);
    sec.addEventListener("pointermove", onMove);
    sec.addEventListener("pointerleave", onLeave);
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(sec);

    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const t = (now - t0) / 1000;
      if (!pointer) offT.set(Math.sin(t * 0.35) * 0.55, Math.sin(t * 0.23) * 0.25);
      off.lerp(offT, reduce ? 1 : 0.06);
      uniforms.uOff.value.copy(reduce ? new THREE.Vector2() : off);
      uniforms.uTime.value = t;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      // focus: her (near) → him (far) between 30% and 70% of the section
      const k = Math.min(1, Math.max(0, (p - 0.3) / 0.4));
      const s = k * k * (3 - 2 * k);
      uniforms.uFocus.value = 0.56 - s * 0.5;
      if (capA.current) capA.current.style.opacity = String(1 - s);
      if (capB.current) capB.current.style.opacity = String(s);
      if (ring.current) {
        ring.current.style.setProperty("--k", String(s));
        ring.current.querySelector("b")!.textContent = (1.2 + s * 4.6).toFixed(1).replace(".", ",") + " m";
      }
      renderer.render(scene, cam);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", resize);
      sec.removeEventListener("pointermove", onMove);
      sec.removeEventListener("pointerleave", onLeave);
      mat.dispose();
      img.dispose();
      depth.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section ref={wrap} className="lab-photo" aria-label="Élő fotó">
      <div className="lab-photo__stage">
        <div ref={holder} className="lab-photo__canvas" role="img" aria-label="Két játékos a salakpályán, az előtérben egy lány feldobja a labdát" />
        <div className="container lab-photo__copy">
          <div ref={capA} className="lab-photo__cap">
            <p className="eyebrow eyebrow--light">Az első labda</p>
            <h2 className="h1">
              Minden óra egy <em>feldobással</em> kezdődik.
            </h2>
          </div>
          <div ref={capB} className="lab-photo__cap" style={{ opacity: 0 }}>
            <p className="eyebrow eyebrow--light">A túloldalon</p>
            <h2 className="h1">
              …és a háló mögött <em>mindig vár valaki.</em>
            </h2>
          </div>
        </div>
        <div ref={ring} className="lab-photo__focus" aria-hidden>
          <span>Fókusz</span>
          <i />
          <b>1,2 m</b>
        </div>
        <LabTag n="21" name="Living photograph" dark />
      </div>
    </section>
  );
}
