"use client";

import { useEffect, useState } from "react";
import { preloadList } from "../lib/assets";
import { BallBasket } from "./BallBasket";

/** 42 as a page preloader: one ball per loaded asset; the curtain lifts when the basket is full. */
export function Preloader() {
  const [p, setP] = useState(0);
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);
  const [lift, setLift] = useState(false);

  useEffect(() => {
    let done = 0, alive = true;
    const total = preloadList.length;
    const t0 = performance.now();
    // never hold the page for more than 6 s, whatever the network does
    const bail = setTimeout(() => alive && setP(1), 6000);
    preloadList.forEach((u) => {
      const i = new Image();
      i.onload = i.onerror = () => {
        done++;
        // don't let a fast cache finish the basket in one frame: pace it a little
        const wait = Math.max(0, 900 * (done / total) - (performance.now() - t0));
        setTimeout(() => {
          if (!alive) return;
          setP((v) => Math.max(v, done / total));
          setCount(done);
        }, wait);
      };
      i.src = u;
    });
    document.documentElement.classList.add("lab-loading");
    return () => {
      alive = false;
      clearTimeout(bail);
      document.documentElement.classList.remove("lab-loading");
    };
  }, []);

  const finish = () => {
    setTimeout(() => setLift(true), 250);
    setTimeout(() => {
      setGone(true);
      document.documentElement.classList.remove("lab-loading");
    }, 1250);
  };

  if (gone) return null;
  return (
    <div className={`lab-preload${lift ? " is-lift" : ""}`} aria-hidden>
      <div className="lab-preload__inner">
        <BallBasket progress={p} capacity={24} tone="dark" onFull={finish} />
        <p className="lab-preload__count">
          <b>{Math.round(p * 24)}</b> / 24 labda
        </p>
        <p className="lab-preload__note">{p < 1 ? "Pályát készítünk elő…" : "Mehet!"}</p>
        <span className="lab-preload__tag">
          <b>42</b> Ball basket progress · {count}/{preloadList.length} fájl
        </span>
      </div>
    </div>
  );
}
