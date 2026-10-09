"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import "@/kits/dot-space/theme/space.css";
import "./gellert-space.css";
import { FONT, HOME_STEPS, PALETTE } from "./gellert-config";

/** One dot field behind every page: the shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground() {
  const home = usePathname() === "/";
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? HOME_STEPS : undefined} palette={PALETTE} font={FONT} />;
}
