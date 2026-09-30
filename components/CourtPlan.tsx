"use client";

import { useState } from "react";

type Season = "summer" | "winter";

const W = 64; // court incl. run-off, top-down
const H = 132;
const GAP = 14;

type Court = { x: number; y: number; lit?: boolean; dome?: boolean };

// 12 outdoor clay courts in three rows of four (schematic, not to scale)
const outdoor: Court[] = Array.from({ length: 12 }, (_, i) => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  return {
    x: 36 + col * (W + GAP),
    y: 36 + row * (H + 20),
    lit: i < 4 || i === 4,
    dome: i === 10 || i === 11,
  };
});

// 3 permanently covered courts
const hall: Court[] = [0, 1, 2].map((i) => ({ x: 404 + i * (W + GAP), y: 50 }));

function CourtLines({ x, y, w = W, h = H }: { x: number; y: number; w?: number; h?: number }) {
  // proportions of a real court inside its run-off area
  const iw = w * 0.62;
  const ih = h * 0.74;
  const ix = x + (w - iw) / 2;
  const iy = y + (h - ih) / 2;
  const single = iw * 0.125;
  const service = ih * 0.23;
  return (
    <g stroke="rgba(255,255,255,0.88)" strokeWidth={1.2} fill="none">
      <rect x={ix} y={iy} width={iw} height={ih} />
      <line x1={ix + single} y1={iy} x2={ix + single} y2={iy + ih} />
      <line x1={ix + iw - single} y1={iy} x2={ix + iw - single} y2={iy + ih} />
      <line x1={ix + single} y1={iy + service} x2={ix + iw - single} y2={iy + service} />
      <line x1={ix + single} y1={iy + ih - service} x2={ix + iw - single} y2={iy + ih - service} />
      <line x1={ix + iw / 2} y1={iy + service} x2={ix + iw / 2} y2={iy + ih - service} />
      <line x1={ix - 4} y1={iy + ih / 2} x2={ix + iw + 4} y2={iy + ih / 2} strokeWidth={2} stroke="rgba(255,255,255,0.95)" />
    </g>
  );
}

function ClayCourt({ c, on, n }: { c: Court; on: boolean; n: number }) {
  return (
    <g className="court" data-state={on ? "on" : "off"}>
      <title>{`${n}. pálya`}</title>
      <rect className="court__surface" x={c.x} y={c.y} width={W} height={H} rx={2} fill="#b85a30" />
      <rect x={c.x} y={c.y} width={W} height={H} rx={2} fill="url(#clayGrain)" opacity={0.5} />
      <CourtLines x={c.x} y={c.y} />
      {c.lit && (
        <g className="court__lamp">
          <circle cx={c.x + W - 7} cy={c.y + 7} r={9} fill="rgba(230,226,140,0.25)" />
          <circle cx={c.x + W - 7} cy={c.y + 7} r={3.6} fill="#e6e28c" />
        </g>
      )}
    </g>
  );
}

export function CourtPlan() {
  const [season, setSeason] = useState<Season>("summer");
  const summer = season === "summer";

  const copy = summer
    ? {
        title: "Nyáron 15 teniszpálya.",
        text: "12 szabadtéri salakpálya — ötön világítás, így este 10-ig lehet játszani — és 3 állandóan fedett pálya, ha közbeszól az időjárás.",
      }
    : {
        title: "Télen 5 fedett pálya.",
        text: "A 3 állandóan fedett pálya mellé két pályát egy légtartásos sátor fed be. Így a labda egész évben pattog a Gellértben.",
      };

  return (
    <div className="plan">
      <div className="plan__side">
        <div className="season-toggle" role="group" aria-label="Évszak" data-season={season}>
          <span className="season-toggle__thumb" aria-hidden />
          <button type="button" aria-pressed={summer} onClick={() => setSeason("summer")}>
            Nyár
          </button>
          <button type="button" aria-pressed={!summer} onClick={() => setSeason("winter")}>
            Tél
          </button>
        </div>
        <div aria-live="polite">
          <h3 className="plan__title">{copy.title}</h3>
          <p className="plan__text">{copy.text}</p>
        </div>
        <ul className="legend">
          <li data-off={!summer}>
            <span className="swatch" aria-hidden />
            <span>Szabadtéri salakpálya</span>
            <b className="num">12</b>
          </li>
          <li data-off={!summer}>
            <span className="swatch swatch--lit" aria-hidden />
            <span>… ebből világítással</span>
            <b className="num">5</b>
          </li>
          <li>
            <span className="swatch swatch--covered" aria-hidden />
            <span>{summer ? "Állandóan fedett pálya" : "Fedett pálya (csarnok + sátor)"}</span>
            <b className="num">{summer ? 3 : 5}</b>
          </li>
          <li data-off={!summer}>
            <span className="swatch swatch--proflex" aria-hidden />
            <span>Proflex multifunkciós pálya</span>
            <b className="num">1</b>
          </li>
        </ul>
      </div>

      <figure>
        <div className="plan__board">
          <svg
            className="plan__svg"
            viewBox="0 0 680 520"
            role="img"
            aria-label={
              summer
                ? "Sematikus pályatérkép nyáron: 12 szabadtéri salakpálya, ebből 5 világítással, 3 fedett pálya és egy Proflex pálya."
                : "Sematikus pályatérkép télen: 3 fedett pálya és 2 sátorral fedett pálya, összesen 5 fedett pálya."
            }
          >
            <defs>
              <pattern id="clayGrain" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.6" fill="#7a2f12" />
                <circle cx="4" cy="3.5" r="0.5" fill="#e59a6c" />
              </pattern>
              <pattern id="roofHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(245,240,230,0.28)" strokeWidth="1.2" />
              </pattern>
            </defs>

            {/* hedges between courts */}
            <rect x="18" y="18" width="346" height="484" rx="6" fill="none" stroke="rgba(245,240,230,0.14)" strokeDasharray="3 5" />
            <text x="36" y="508" className="plan__label" dy="-2">
              Szabadtér
            </text>

            {outdoor.map((c, i) => {
              const on = summer || !!c.dome;
              return <ClayCourt key={i} c={c} on={on} n={i + 1} />;
            })}

            {/* winter air dome over two courts */}
            <g className="court__roof" data-shown={!summer}>
              <rect x={36 + 2 * (W + GAP) - 8} y={36 + 2 * (H + 20) - 8} width={2 * W + GAP + 16} height={H + 16} rx={34} fill="rgba(245,240,230,0.16)" stroke="#f5f0e6" strokeWidth={1.6} />
              <rect x={36 + 2 * (W + GAP) - 8} y={36 + 2 * (H + 20) - 8} width={2 * W + GAP + 16} height={H + 16} rx={34} fill="url(#roofHatch)" />
              <text x={36 + 2 * (W + GAP) + W + GAP / 2} y={36 + 2 * (H + 20) - 16} textAnchor="middle" className="plan__label" style={{ fill: "#f5f0e6" }}>
                Sátor
              </text>
            </g>

            {/* permanently covered hall */}
            <g>
              <rect x="392" y="30" width={3 * W + 2 * GAP + 24} height={H + 40} rx="4" fill="rgba(15,36,22,0.45)" stroke="rgba(245,240,230,0.55)" strokeWidth="1.4" />
              <rect x="392" y="30" width={3 * W + 2 * GAP + 24} height={H + 40} rx="4" fill="url(#roofHatch)" opacity="0.6" />
              {hall.map((c, i) => (
                <ClayCourt key={i} c={c} on n={13 + i} />
              ))}
              <text x="404" y="226" className="plan__label">
                Fedett csarnok
              </text>
            </g>

            {/* Proflex multi court */}
            <g className="court" data-state={summer ? "on" : "off"}>
              <title>Proflex multifunkciós pálya</title>
              <rect x="392" y="258" width="252" height="120" rx="3" fill="#3f6f5c" />
              <g transform="rotate(90 518 318)">
                <CourtLines x={458} y={192} w={120} h={252} />
              </g>
              <g stroke="rgba(230,226,140,0.55)" strokeWidth="1" fill="none">
                <circle cx="518" cy="318" r="22" />
                <line x1="518" y1="258" x2="518" y2="378" />
              </g>
              <text x="404" y="400" className="plan__label">
                Proflex
              </text>
            </g>

            {/* reception & lake – orientation only */}
            <g>
              <rect x="392" y="420" width="120" height="70" rx="4" fill="#f5f0e6" opacity="0.92" />
              <text x="452" y="460" textAnchor="middle" className="plan__label" style={{ fill: "#15241a" }}>
                Recepció
              </text>
              <path d="M548 470c0-26 30-48 62-44s46 30 34 50-58 22-78 12-18-6-18-18Z" fill="#5d8b8f" opacity="0.7" />
              <text x="600" y="508" textAnchor="middle" className="plan__label">
                Tó
              </text>
            </g>
          </svg>
        </div>
        <figcaption className="plan__note">Sematikus ábra: a pályák száma pontos, az elrendezés és a méretarány nem.</figcaption>
      </figure>
    </div>
  );
}
