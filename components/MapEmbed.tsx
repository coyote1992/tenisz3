"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";
import { ArrowUpRight, Pin } from "./Icons";

/** Google Maps loads only on request: faster page, no third-party cookies up front. */
export function MapEmbed() {
  const [load, setLoad] = useState(false);
  return (
    <div className="map">
      {load ? (
        <iframe
          src={site.mapsEmbed}
          title="Gellért Szabadidőközpont a térképen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map__consent">
          <Image src="/img/courts-13-14.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 60vw" />
          <div className="map__consent-inner">
            <Pin size={28} />
            <p className="h4" style={{ color: "var(--paper)" }}>
              {site.address.zip} {site.address.city}, {site.address.street}
            </p>
            <p>A térkép a Google Maps szolgáltatását tölti be.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <button type="button" className="btn btn--lime" onClick={() => setLoad(true)}>
                Térkép betöltése
              </button>
              <a className="btn btn--ghost-light" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Útvonaltervezés <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
