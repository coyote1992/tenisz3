import "./lab.css";
import { Preloader } from "./components/Preloader";
import { BallProgress } from "./components/BallProgress";
import { FlowField } from "./components/FlowField";
import { LivingPhoto } from "./components/LivingPhoto";
import { NetDivider } from "./components/NetDivider";
import { RacketTurntable } from "./components/RacketTurntable";
import { ClaySpecimen } from "./components/ClaySpecimen";
import { BrushClay } from "./components/BrushClay";
import { CourtPage } from "./components/CourtPage";
import { Blueprint } from "./components/Blueprint";
import { ShutterGallery } from "./components/ShutterGallery";
import { LabFinale } from "./components/LabFinale";

/** The lab: twelve sketchbook ideas built for real, one after another, on the site's design system. */
export function LabPage() {
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
