import type { Metadata } from "next";
import "./lab.css";
import { Preloader } from "@/components/lab/Preloader";
import { BallProgress } from "@/components/lab/BallProgress";
import { FlowField } from "@/components/lab/FlowField";
import { LivingPhoto } from "@/components/lab/LivingPhoto";
import { NetDivider } from "@/components/lab/NetDivider";
import { RacketTurntable } from "@/components/lab/RacketTurntable";
import { ClaySpecimen } from "@/components/lab/ClaySpecimen";
import { BrushClay } from "@/components/lab/BrushClay";
import { CourtPage } from "@/components/lab/CourtPage";
import { Blueprint } from "@/components/lab/Blueprint";
import { ShutterGallery } from "@/components/lab/ShutterGallery";
import { LabFinale } from "@/components/lab/LabFinale";

export const metadata: Metadata = {
  title: "Labor",
  description: "Kísérleti oldal: tizenkét mozgás- és 3D-ötlet a Gellért Tenisz oldalához, élesben.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lab" },
};

/**
 * /lab — the sketchbook ideas built for real, one after another, on the live design system.
 * Not linked from the navigation; the homepage is unchanged.
 */
export default function LabPage() {
  return (
    <div className="lab">
      <Preloader />
      <BallProgress />
      <FlowField />
      <LivingPhoto />
      <NetDivider />
      <RacketTurntable />
      <ClaySpecimen />
      <BrushClay />
      <CourtPage />
      <NetDivider tone="dark" tag={false} />
      <Blueprint />
      <ShutterGallery />
      <LabFinale />
    </div>
  );
}
