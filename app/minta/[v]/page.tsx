import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage, type HomeSlots } from "@/components/home/HomePage";
import { DotAmbient, DotStory, HeroDots } from "@/components/home/Dots";
import { NetDivider } from "@/components/NetDivider";

const PAPER = "var(--paper)", PAPER2 = "var(--paper-2)";
const split = (top: string, bottom: string) => `linear-gradient(${top} 0 50%, ${bottom} 50% 100%)`;
const net = () => <NetDivider bg={split(PAPER, PAPER2)} />;

/** Three ways of bringing the dot field and the net divider onto the homepage. */
const VARIANTS: Record<string, { name: string; slots: HomeSlots }> = {
  a: {
    name: "A · Pontfelhő a hero helyén",
    slots: { heroMedia: <HeroDots />, heroClass: "hero--dots", afterCourts: net(), afterSchool: net() },
  },
  b: {
    name: "B · Pontfelhő-történet a hero után",
    slots: {
      afterHero: (
        <>
          <DotStory />
          <NetDivider tone="dark" />
        </>
      ),
      afterSchool: net(),
    },
  },
  c: {
    name: "C · Pontfelhő a sötét szekciók mögött",
    slots: {
      bookingClass: "has-dots",
      booking: <DotAmbient shape="court" wide={{ x: 0.66, y: 0, py: 180, sw: 0.105, sh: 1 }} narrow={{ x: 0.5, y: 0, py: 118, sw: 0.29, sh: 1 }} />,
      heritageClass: "has-dots",
      heritage: <DotAmbient shape={{ word: "1996" }} wide={{ x: 0.72, y: 0.3, sw: 0.22, sh: 0.32 }} narrow={{ x: 0.5, y: 0, py: 175, sw: 0.4, sh: 1 }} />,
      afterCourts: net(),
      beforeFinal: net(),
    },
  },
};

export const metadata: Metadata = {
  title: "Minta",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(VARIANTS).map((v) => ({ v }));
}

/** Preview of the homepage with one of the options applied. */
export default async function Variant({ params }: { params: Promise<{ v: string }> }) {
  const { v } = await params;
  const variant = VARIANTS[v];
  if (!variant) notFound();
  return (
    <>
      <div className="minta-badge">{variant.name}</div>
      <HomePage slots={variant.slots} />
    </>
  );
}
