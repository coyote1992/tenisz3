"use client";

import { useEffect } from "react";

/** Illustrated players who rally the ball down the homepage as the visitor scrolls. */
export function Rally() {
  useEffect(() => {
    let core: { stop: () => void } | null = null;
    let cancelled = false;
    (async () => {
      const [{ RallyCore }, { Illustrated }] = await Promise.all([import("@/lib/rally/core.js"), import("@/lib/rally/renderA.js")]);
      if (cancelled) return;
      const c = new RallyCore(new Illustrated());
      core = c;
      await c.start();
    })();
    return () => {
      cancelled = true;
      core?.stop();
    };
  }, []);
  return null;
}
