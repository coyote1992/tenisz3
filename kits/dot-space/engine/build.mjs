// Builds dist/dot-space.js: the framework-free engine with three.js bundled in, for plain
// HTML / WordPress / static sites. Run from a project that has `three` and `esbuild`
// installed:  node <kit>/engine/build.mjs
import { build } from "esbuild";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
await build({
  entryPoints: [join(here, "index.ts")],
  bundle: true,
  minify: true,
  format: "esm",
  target: "es2020",
  outfile: join(here, "../dist/dot-space.js"),
  legalComments: "eof",
  logLevel: "warning",
});
console.log("built dist/dot-space.js");
