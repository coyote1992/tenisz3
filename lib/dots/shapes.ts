// The serving-player shape (used by the lab), drawn with the rally athlete and sampled into dots.
import { fromCanvas, type Cloud } from "@/kits/dot-space/engine";
import { drawAthlete } from "@/lib/rally/athlete2d.js";
import { fk, POSES } from "@/lib/rally/pose.js";

export function player(n: number): Cloud {
  const cv = document.createElement("canvas");
  cv.width = 300;
  cv.height = 400;
  const kit = { shirt: "#f5f0e6", shade: "#d9d2c2", bottom: "#c96a3f", bottomShade: "#a9552f", accent: "#e6e28c", head: "cap", hair: "#e7b797", skin: "#e7b797", skinShade: "#d39b78", female: false };
  drawAthlete(cv.getContext("2d")!, fk(POSES.svHit), { x: 130, y: 382, s: 150, f: 1, kit, time: 0 });
  return fromCanvas(cv, n, { size: 0.0058 * 300, depth: 0.12, seed: 3 });
}
