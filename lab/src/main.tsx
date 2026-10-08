// Entry for the standalone lab page (lab/dist/index.html). Built with `npm run lab:build`.
import "@fontsource-variable/newsreader/standard.css";
import "@fontsource-variable/newsreader/standard-italic.css";
import "@fontsource-variable/dm-sans/index.css";
import "../../app/globals.css";
import { createRoot } from "react-dom/client";
import { LabPage } from "./LabPage";

document.documentElement.classList.add("js");
createRoot(document.getElementById("root")!).render(<LabPage />);
