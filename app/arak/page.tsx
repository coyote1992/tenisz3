import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PriceTable } from "@/components/PriceTable";
import { Download, Phone } from "@/components/Icons";
import { otherPrices, priceNotes, priceSeason, site, tennisPrices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Árak",
  description:
    "Teniszpálya, fedett pálya, squash, strandröplabda, lábtenisz, sportcsarnok: a Gellért Szabadidőközpont árjegyzéke. Pályafoglalás: +36 70 686 5124.",
  alternates: { canonical: "/arak" },
};

export default function PricesPage() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <nav className="crumbs" aria-label="Morzsamenü">
            <Link href="/">Főoldal</Link> <span aria-hidden>/</span> <span>Árak</span>
          </nav>
          <div className="phero__grid">
            <div>
              <p className="eyebrow">Árjegyzék</p>
              <h1 className="h1">
                Árak, <em>egy helyen.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                A {priceSeason.label} ({priceSeason.range}) hivatalos árjegyzéke alapján. Az árak forintban értendők és
                tartalmazzák az áfát. Az aktuális, téli árakról a recepción érdeklődj.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="tenisz-arak">
        <div className="container">
          <div className="head head--stack">
            <p className="eyebrow">Tenisz</p>
            <h2 id="tenisz-arak" className="h2">
              Salak, fedett <em>vagy bérlet.</em>
            </h2>
          </div>
          <div className="price-shell">
            <PriceTable showLink={false} />
            <div className="price-side">
              <div className="mini mini--dark">
                <p className="mini__k">Fedett pálya · Hétfő – Vasárnap</p>
                <p className="mini__v num">
                  {tennisPrices.covered[0].single}
                  <small>Ft / alkalom</small>
                </p>
                <p className="mini__t">7:00 és 21:00 között.</p>
              </div>
              <div className="mini">
                <p className="mini__k">Ütőkölcsönzés</p>
                <p className="mini__v num">
                  600<small>Ft / db</small>
                </p>
                <p className="mini__t">Labda a recepción vásárolható.</p>
              </div>
              <div className="mini">
                <p className="mini__k">Foglalás</p>
                <p className="mini__t" style={{ marginTop: 10 }}>
                  Telefonon vagy személyesen a recepción.
                </p>
                <a className="btn btn--clay" href={site.phoneHref} style={{ marginTop: 14, width: "100%" }}>
                  <Phone size={16} /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight section--paper2" aria-labelledby="egyeb-arak">
        <div className="container">
          <div className="head head--stack">
            <p className="eyebrow">A Szabadidőközpontban</p>
            <h2 id="egyeb-arak" className="h2">
              A többi <em>pálya.</em>
            </h2>
          </div>
          <div className="pgroups">
            {otherPrices.map((g) => (
              <article className="pgroup" key={g.sport}>
                <div className="pgroup__head">
                  <h3 className="pgroup__t">{g.sport}</h3>
                  {g.note && <span className="small muted">{g.note}</span>}
                </div>
                {g.blocks.map((b) => (
                  <div key={b.days}>
                    <p className="pgroup__days">{b.days}</p>
                    <table>
                      <caption className="sr-only">
                        {g.sport}, {b.days}
                      </caption>
                      {b.columns.length > 1 && (
                        <thead>
                          <tr>
                            {b.columns.map((c) => (
                              <th key={c} scope="col">
                                {c}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {b.rows.map((r) => (
                          <tr key={r.join()}>
                            {r.map((cell, i) => (
                              <td key={i} className={r.length === 1 ? "single" : undefined}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="tudnivalok">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">Tudnivalók</p>
              <h2 id="tudnivalok" className="h2">
                Mielőtt <em>kijössz.</em>
              </h2>
            </div>
            <p className="lead">
              A pályadíjat játék előtt a recepción (főépület) kell kifizetni — a szezonbérleteseket kivéve. A tízes
              kártyát is itt kezeltetheted.
            </p>
          </div>
          <ol className="notes">
            {priceNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>

          <div className="poster" style={{ marginTop: 48 }}>
            <a href={priceSeason.source} target="_blank" rel="noopener noreferrer" className="frame" aria-label="Az eredeti árjegyzék megnyitása">
              <Image src={priceSeason.source} alt="A Gellért Szabadidőközpont 2025-ös nyári árjegyzéke" fill sizes="180px" />
            </a>
            <div>
              <p className="h4">Az eredeti árjegyzék</p>
              <p className="small muted" style={{ marginTop: 6, maxWidth: "34em" }}>
                A {priceSeason.label} nyomtatható árjegyzéke, ahogy a recepción is kint van. Érvényes: {priceSeason.range}
              </p>
              <a className="link-arrow" href={priceSeason.source} download style={{ marginTop: 16 }}>
                <Download /> Letöltés (JPG)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
