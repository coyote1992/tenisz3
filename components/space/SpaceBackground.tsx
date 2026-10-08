"use client";

import { usePathname } from "next/navigation";
import { SpaceField } from "./SpaceField";

/** One dot field behind every page: shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground() {
  const home = usePathname() === "/";
  return <SpaceField key={home ? "home" : "quiet"} quiet={!home} />;
}
