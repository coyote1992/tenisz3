// Gellért's dot-space choreography: what the dots form as you scroll the homepage.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; space.css keeps the courts and Proflex text to the left of it
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.64, 0.12, 0.3), narrow: phone },
  // between the booking steps and the phone card
  { anchor: "#foglalas", shape: "racket", wide: at(0.515, 0.62, 0.1, 0.28), narrow: phone },
  // the founding year beside the Davis Kupa title, complete when the title is mid-screen
  { anchor: "#tortenet-title", done: 0.5, shape: { word: "1996" }, wide: at(0.7, 0.5, 0.2, 0.3), narrow: at(0.5, 0.42, 0.34, 0.2) },
  // large, centred, faint, slowly spinning, behind the content
  { anchor: "#tenisziskola", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// lime, paper, clay, felt
export const PALETTE = ["#e6e28c", "#f5f0e6", "#e5875a", "#c9d34f"];
export const FONT = 'italic 400 230px "Newsreader Variable", Georgia, serif';
