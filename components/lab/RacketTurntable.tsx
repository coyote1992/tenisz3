"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { LabTag } from "./LabTag";
import { frameUrls } from "@/lib/lab/assets";

/**
 * 01 · Racket turntable.
 * 72 Cycles renders of a racket modelled in Blender (16 × 19 strings, the club's "G" stencilled on).
 * Drag to spin it with inertia; it idles slowly and scrolling nudges it round.
 */
export function RacketTurntable() {
  const cv = useRef<HTMLCanvasElement>(null);
  const dial = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = cv.current!, ctx = c.getContext("2d")!;
    const urls = frameUrls.racket;
    const F = urls.length;
    const imgs = urls.map((u) => {
      const i = new Image();
      i.decoding = "async";
      i.src = u;
      return i;
    });
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angle = 0, vel = reduce ? 0 : 0.12, drag = false, lastX = 0, lastScroll = scrollY, visible = false, raf = 0, drawn = -1;

    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
      drawn = -1;
    };
    size();
    addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(c);

    const down = (e: PointerEvent) => {
      drag = true;
      lastX = e.clientX;
      c.setPointerCapture(e.pointerId);
      c.classList.add("is-drag");
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      vel = dx * 0.6;
      angle += dx * 0.6;
    };
    const up = () => {
      drag = false;
      c.classList.remove("is-drag");
    };
    c.addEventListener("pointerdown", down);
    c.addEventListener("pointermove", move);
    c.addEventListener("pointerup", up);
    c.addEventListener("pointercancel", up);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const ds = scrollY - lastScroll;
      lastScroll = scrollY;
      if (!visible) return;
      if (!drag) {
        vel += ((reduce ? 0 : 0.18) - vel) * 0.02;
        angle += vel + (reduce ? 0 : ds * 0.12);
      }
      const f = ((Math.round((angle / 360) * F) % F) + F) % F;
      if (dial.current) dial.current.style.setProperty("--a", `${((angle % 360) + 360) % 360}deg`);
      if (f === drawn || !imgs[f].complete || !imgs[f].naturalWidth) return;
      drawn = f;
      const im = imgs[f];
      const s = Math.min(c.width / im.naturalWidth, c.height / im.naturalHeight);
      const w = im.naturalWidth * s, h = im.naturalHeight * s;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(im, (c.width - w) / 2, (c.height - h) / 2, w, h);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
    };
  }, []);

  return (
    <section className="section lab-racket" aria-labelledby="lab-racket-title">
      <div className="container lab-racket__grid">
        <div className="lab-racket__copy">
          <p className="eyebrow">Felszerelés</p>
          <h2 id="lab-racket-title" className="h2">
            Nem kell saját ütő. <em>Itt van egy.</em>
          </h2>
          <p className="lead">Ütő a recepción kölcsönözhető, labda ugyanott vásárolható. Az első órához nem kell saját felszerelés.</p>
          <dl className="lab-specs">
            <div>
              <dt>Ütőkölcsönzés</dt>
              <dd>600 Ft / db</dd>
            </div>
            <div>
              <dt>Labda</dt>
              <dd>a recepción</dd>
            </div>
            <div>
              <dt>Recepció</dt>
              <dd>{site.hours.reception.time.replace(/ /g, "")}</dd>
            </div>
          </dl>
        </div>
        <div className="lab-racket__stage">
          <canvas ref={cv} className="lab-racket__canvas" aria-label="Forgatható teniszütő. Húzd oldalra a forgatáshoz." role="img" />
          <div className="lab-racket__floor" aria-hidden />
          <div ref={dial} className="lab-racket__dial" aria-hidden>
            <i />
            <span>Húzd a forgatáshoz</span>
          </div>
        </div>
      </div>
      <LabTag n="01" name="Racket turntable" />
    </section>
  );
}
