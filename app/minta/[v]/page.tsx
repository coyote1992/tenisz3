import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { SpaceField, type SpaceTheme } from "@/components/space/SpaceField";

/** Three takes on the homepage floating over a fixed, scroll-reshaping dot field. */
const VARIANTS: Record<string, { name: string; theme: SpaceTheme }> = {
  d: { name: "D · Éjszakai űr", theme: "night" },
  e: { name: "E · Salakpor", theme: "dust" },
  f: { name: "F · Mélység", theme: "depth" },
};

export const metadata: Metadata = {
  title: "Minta",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(VARIANTS).map((v) => ({ v }));
}

/** Preview of the homepage with one of the themes applied. */
export default async function Variant({ params }: { params: Promise<{ v: string }> }) {
  const { v } = await params;
  const variant = VARIANTS[v];
  if (!variant) notFound();
  return (
    <>
      <SpaceField theme={variant.theme} />
      <div className="minta-badge">{variant.name}</div>
      <HomePage />
    </>
  );
}
