import { drawAthlete, drawBall, KITS, addDust, drawDust, addRipple, drawRipples } from "./athlete2d.js";

/** Variation A renderer: one fixed canvas over the page. */
export class Illustrated {
  async init() {
    this.cv = document.createElement("canvas");
    this.cv.className = "c-layer";
    document.body.appendChild(this.cv);
    this.c = this.cv.getContext("2d");
  }
  resize(W, H) {
    const d = Math.min(devicePixelRatio || 1, 2);
    this.d = d;
    this.cv.width = W * d;
    this.cv.height = H * d;
    this.cv.style.width = W + "px";
    this.cv.style.height = H + "px";
  }
  begin(sy) {
    const c = this.c;
    this.sy = sy;
    c.setTransform(this.d, 0, 0, this.d, 0, 0);
    c.clearRect(0, 0, this.cv.width, this.cv.height);
    drawDust(c, this, sy);
    drawRipples(c, this, sy);
  }
  ripple(x, y) {
    addRipple(this, x, y);
  }
  puff(x, y, dark) {
    addDust(this, x, y, dark);
  }
  player(a, pose, j, o) {
    drawAthlete(this.c, j, { x: a.x, y: a.footY - o.sy, s: o.s, f: a.f, kit: KITS[a.kit], time: o.now });
  }
  ball(x, y, r, spin, trail, onDark, flying, squash) {
    drawBall(this.c, x, y, r, spin, trail, onDark, squash);
  }
  end() {}
  destroy() {
    this.cv?.remove();
  }
}
