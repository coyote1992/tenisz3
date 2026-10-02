// Frame sequences and images the /lab page preloads (the ball-basket loader counts them).
const seq = (dir: string, prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/lab/${dir}/${prefix}${String(i).padStart(2, "0")}.webp`);

export const frameUrls = {
  racket: seq("racket", "r", 72),
  clay: seq("clay", "c", 40),
};

export const preloadList = [
  "/img/hero-serve.jpg",
  "/lab/hero-serve-depth.webp",
  ...frameUrls.racket.filter((_, i) => i % 3 === 0),
  ...frameUrls.clay.filter((_, i) => i % 4 === 0),
];
