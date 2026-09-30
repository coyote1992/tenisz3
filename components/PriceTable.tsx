"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { priceSeason, tennisPrices, type PriceRow } from "@/lib/site";
import { ArrowRight } from "./Icons";

const tabs = [
  { key: "weekday", label: "Hétköznap" },
  { key: "weekend", label: "Hétvége, ünnep" },
] as const;

type Key = (typeof tabs)[number]["key"];

function band(time: string) {
  if (time.startsWith("07") && time.includes("14")) return "reggeltől kora délutánig";
  if (time.startsWith("14")) return "délután";
  if (time.startsWith("19")) return "este";
  return "napközben";
}

export function PriceTable({ showLink = true }: { showLink?: boolean }) {
  const [tab, setTab] = useState<Key>("weekday");
  const id = useId();
  const rows: PriceRow[] = tennisPrices[tab];

  return (
    <div className="price-card">
      <div className="price-card__top">
        <h3 className="price-card__title">Szabadtéri salakpálya</h3>
        <div className="tabs" role="tablist" aria-label="Napok">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              id={`${id}-${t.key}`}
              aria-selected={tab === t.key}
              aria-controls={`${id}-panel`}
              tabIndex={tab === t.key ? 0 : -1}
              onClick={() => setTab(t.key)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  const next = tab === "weekday" ? "weekend" : "weekday";
                  setTab(next);
                  document.getElementById(`${id}-${next}`)?.focus();
                }
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${tab}`}>
        <table className="ptable">
          <caption className="sr-only">
            Teniszpálya díjak, {tab === "weekday" ? "hétfőtől péntekig" : "hétvégén és ünnepnapokon"}, forintban
          </caption>
          <thead>
            <tr>
              <th scope="col">Idősáv</th>
              <th scope="col">Alkalom</th>
              <th scope="col">
                <span className="th-long">10-es bérlet</span>
                <span className="th-short">10-es</span>
              </th>
              <th scope="col">
                <span className="th-long">Szezonbérlet*</span>
                <span className="th-short">Szezon*</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.time}>
                <td>
                  <span className="ptable__time num">{r.time.replace(/ – /g, "–\u200b")}</span>
                  <span className="ptable__band">{band(r.time)}</span>
                </td>
                <td className="is-key num">
                  {r.single}
                  <span className="ft">Ft</span>
                </td>
                <td className="num">
                  {r.ten}
                  <span className="ft">Ft</span>
                </td>
                <td className="num">
                  {r.season}
                  <span className="ft">Ft</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="price-card__foot">
        <span>
          * A szezonbérlet 27 hétre szól, alkalmankénti díj. Forrás: {priceSeason.label} árjegyzéke ({priceSeason.range}).
        </span>
        {showLink && (
          <Link href="/arak" className="link-arrow">
            Minden ár <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
