"use client";

import { useEffect, useRef } from "react";
import { mountSpace, type SpaceStep } from "../core/space";

/**
 * The space background for React / Next.js. Render it once in the root layout:
 *   <DotSpace steps={isHome ? HOME_STEPS : undefined} key={isHome ? "home" : "quiet"} />
 * Without steps it is the quiet starfield. Set className="space" on <html> yourself so the
 * dark theme applies from the first paint.
 */
export function DotSpace({ steps, palette, font }: { steps?: SpaceStep[]; palette?: string[]; font?: string }) {
  const cfg = useRef({ steps, palette, font });
  useEffect(() => {
    const h = mountSpace(cfg.current);
    return () => h.destroy();
  }, []);
  return null;
}
