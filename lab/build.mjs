// Builds the standalone lab page into lab/dist: lab.js, lab.css, fonts and the photos it uses.
// The lab is not part of the website; open it with `npm run lab` (http://localhost:4000).
import { build } from "esbuild";
import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const dist = join(here, "dist");

await build({
  entryPoints: [join(here, "src/main.tsx")],
  bundle: true,
  minify: true,
  format: "esm",
  target: "es2020",
  jsx: "automatic",
  outfile: join(dist, "lab.js"),
  tsconfig: join(root, "tsconfig.json"),
  loader: { ".woff2": "file", ".woff": "file" },
  assetNames: "fonts/[name]-[hash]",
  external: ["/brand/*"],
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "warning",
});

// the site stylesheet points at /brand/…; inside the lab folder it is brand/…
const css = join(dist, "lab.css");
writeFileSync(css, readFileSync(css, "utf8").replaceAll("url(/brand/", "url(brand/"));

// photos and the brand mask, copied from the site
mkdirSync(join(dist, "img"), { recursive: true });
for (const f of ["hero-serve", "forehand", "volley-lunge", "junior-forehand", "between-points", "stadium-court", "school-group-court", "courts-13-14"])
  cpSync(join(root, "public/img", f + ".jpg"), join(dist, "img", f + ".jpg"));
cpSync(join(root, "public/brand/ball-mask.png"), join(dist, "brand/ball-mask.png"));
console.log("lab built → lab/dist");
