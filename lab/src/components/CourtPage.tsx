"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { LabTag } from "./LabTag";

/**
 * 08 · The page is a court.
 * A full court (with run-off) lies in 3D under the page. Scrolling walks the camera from one
 * baseline to the other; the club's real information stands on the court like signs:
 * hours at the near baseline, booking rules in the service boxes, the net in the middle,
 * the school and covered courts on the far side, the address at the far baseline.
 */

// metres; y is measured from the near baseline towards the far one
const SIGNS = [
  { y: -1.2, x: 0, k: "Nyitvatartás", t: `Pályák ${site.hours.courts.time}`, s: `Recepció ${site.hours.reception.time} · minden nap` },
  { y: 4.2, x: -2.4, k: "Fizetés", t: "Készpénz, kártya", s: "SZÉP-kártya, AYCM Sportpass" },
  { y: 4.2, x: 2.4, k: "Lemondás", t: "24 órával előtte", s: "A lemondott bérletes órák a szezonban lejátszhatók." },
  { y: 9.2, x: 0, k: "Este", t: "Világítás 19 órától", s: "Automatikusan kapcsoljuk a világítással rendelkező pályákon." },
  { y: 16.6, x: -2.4, k: "Tenisziskola", t: "5–17 éveseknek", s: "és felnőtteknek is" },
  { y: 16.6, x: 2.4, k: "Télen is", t: "3 + 2 fedett pálya", s: "három állandóan fedett, kettő sátorban" },
  { y: 23.0, x: 0, k: "Gellért Szabadidőközpont", t: site.phone, s: `${site.address.zip} ${site.address.city}, ${site.address.street}` },
];
const L = 36.6, Wm = 18.3, RUN = (L - 23.77) / 2;
const TILT = 62;

export function CourtPage() {
  const wrap = useRef<HTMLElement>(null);
  const plane = useRef<HTMLDivElement>(null);
  const signs = useRef<(HTMLDivElement | null)[]>([]);
  const meter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sec = wrap.current!, pl = plane.current!;
    let raf = 0, visible = false, k = 30;
    const size = () => {
      const w = Math.min(innerWidth * 0.94, 860);
      k = w / Wm;
      pl.style.width = `${w}px`;
      pl.style.height = `${L * k}px`;
      pl.style.setProperty("--k", `${k}px`);
    };
    size();
    addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(sec);
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      // camera travels from behind the near baseline to just before the far one
      const travel = (-2 + p * 25) * k;
      pl.style.transform = `translateX(-50%) rotateX(${TILT}deg) translateY(${travel}px)`;
      if (meter.current) meter.current.textContent = Math.max(0, Math.min(23.77, p * 25 - 0.4)).toFixed(1).replace(".", ",");
      SIGNS.forEach((s, i) => {
        const el = signs.current[i];
        if (!el) return;
        // distance in metres between the sign and the camera's focus point
        const dist = s.y - (p * 25 - 2) - 3;
        const o = dist < -1.5 ? Math.max(0, 1 + (dist + 1.5) / 2.5) : dist > 9 ? Math.max(0, 1 - (dist - 9) / 5) : 1;
        // opacity goes on the card (a leaf): on the 3D container it would flatten the scene
        (el.firstElementChild as HTMLElement).style.opacity = String(o);
      });
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
    };
  }, []);

  // court line positions in plane space (metres from the plane's top-left corner)
  const nearBase = L - RUN, farBase = RUN;
  return (
    <section ref={wrap} className="lab-courtpage" aria-labelledby="lab-courtpage-title">
      <div className="lab-courtpage__stage">
        <div className="container lab-courtpage__head">
          <p className="eyebrow eyebrow--light">Végig a pályán</p>
          <h2 id="lab-courtpage-title" className="h2">
            Minden, amit tudni kell, <em>alapvonaltól alapvonalig.</em>
          </h2>
        </div>
        <div className="lab-courtpage__view">
          <div ref={plane} className="lab-courtpage__plane">
            <svg className="lab-courtpage__lines" viewBox={`0 0 ${Wm} ${L}`} preserveAspectRatio="none" aria-hidden>
              <rect x={(Wm - 10.97) / 2} y={farBase} width={10.97} height={23.77} />
              <line x1={(Wm - 8.23) / 2} y1={farBase} x2={(Wm - 8.23) / 2} y2={nearBase} />
              <line x1={(Wm + 8.23) / 2} y1={farBase} x2={(Wm + 8.23) / 2} y2={nearBase} />
              <line x1={(Wm - 8.23) / 2} y1={L / 2 - 6.4} x2={(Wm + 8.23) / 2} y2={L / 2 - 6.4} />
              <line x1={(Wm - 8.23) / 2} y1={L / 2 + 6.4} x2={(Wm + 8.23) / 2} y2={L / 2 + 6.4} />
              <line x1={Wm / 2} y1={L / 2 - 6.4} x2={Wm / 2} y2={L / 2 + 6.4} />
              <line x1={Wm / 2} y1={farBase} x2={Wm / 2} y2={farBase + 0.3} />
              <line x1={Wm / 2} y1={nearBase} x2={Wm / 2} y2={nearBase - 0.3} />
            </svg>
            <div className="lab-courtpage__net" style={{ top: `calc(var(--k) * ${L / 2})` }} aria-hidden>
              <span />
            </div>
            {SIGNS.map((s, i) => (
              <div
                key={i}
                ref={(n) => void (signs.current[i] = n)}
                className="lab-courtpage__sign"
                style={{ left: `calc(var(--k) * (${Wm / 2} + ${s.x} * var(--spread, 1)))`, top: `calc(var(--k) * ${nearBase - s.y})` }}
              >
                <div className="lab-courtpage__card">
                  <small>{s.k}</small>
                  <b>{s.t}</b>
                  <span>{s.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lab-courtpage__meter" aria-hidden>
          <span ref={meter}>0,0</span> / 23,77 m
        </div>
        <LabTag n="08" name="The page is a court" dark />
      </div>
    </section>
  );
}
