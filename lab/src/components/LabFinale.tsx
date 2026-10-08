"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { BallBasket } from "./BallBasket";
import { LabTag } from "./LabTag";
import { StringButton } from "./StringButton";

/** The map loads on request; while Google Maps loads, the ball basket fills (42 in context). */
function MapWithBasket() {
  const [state, setState] = useState<"idle" | "loading" | "ready">("idle");
  const [p, setP] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // an honest indeterminate loader: creeps towards 90 %, jumps to full on the iframe's load event
  useEffect(() => {
    if (state !== "loading") return;
    const id = setInterval(() => setP((v) => (loaded ? 1 : v + (0.9 - v) * 0.08)), 120);
    return () => clearInterval(id);
  }, [state, loaded]);

  return (
    <div className="lab-map">
      {state !== "idle" && (
        <iframe
          src={site.mapsEmbed}
          title="Gellért Szabadidőközpont a térképen"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => {
            setLoaded(true);
            setP(1);
          }}
          style={{ opacity: state === "ready" ? 1 : 0 }}
        />
      )}
      {state !== "ready" && (
        <div className="lab-map__cover">
          <img src="img/courts-13-14.jpg" alt="" />
          <div className="lab-map__inner">
            {state === "idle" ? (
              <>
                <p className="h4">
                  {site.address.zip} {site.address.city}, {site.address.street}
                </p>
                <p>A térkép a Google Maps szolgáltatását tölti be.</p>
                <button type="button" className="btn btn--lime" onClick={() => setState("loading")}>
                  Térkép betöltése
                </button>
              </>
            ) : (
              <>
                <BallBasket progress={p} capacity={18} tone="dark" onFull={() => setTimeout(() => setState("ready"), 300)} />
                <p className="lab-map__loading">Térkép betöltése…</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function LabFinale() {
  return (
    <section className="section section--forest lab-finale" aria-labelledby="lab-finale-title">
      <div className="container lab-finale__grid">
        <div className="lab-finale__copy">
          <p className="eyebrow eyebrow--light">Pályafoglalás</p>
          <h2 id="lab-finale-title" className="h1">
            Foglalj pályát. <em>Egy hívás.</em>
          </h2>
          <p className="lead">
            Telefonon, a recepción. {site.hours.reception.days}, {site.hours.reception.time.replace(/ /g, "")}. Egy óra, tíz alkalom vagy egész szezon.
          </p>
          <div className="lab-finale__cta">
            <StringButton href={site.phoneHref} id="lab-cta">
              <small>Hívd a recepciót</small>
              <b>{site.phone}</b>
            </StringButton>
          </div>
          <p className="lab-finale__hint">Nyomd meg a húrokat. A görgetősáv labdája is ide érkezik.</p>
          <div className="lab-finale__tags">
            <LabTag n="26" name="String-bed button" dark />
            <LabTag n="30" name="Ball progress lands here" dark />
          </div>
        </div>
        <div className="lab-finale__map">
          <MapWithBasket />
          <LabTag n="42" name="Ball basket while the map loads" dark />
        </div>
      </div>
    </section>
  );
}
