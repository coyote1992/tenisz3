// Serves lab/dist on http://localhost:4000 (the WebGL pieces need http, not file://).
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("./dist/", import.meta.url));
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2" };
const port = Number(process.env.PORT) || 4000;

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  const file = join(dist, path.endsWith("/") ? path + "index.html" : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
}).listen(port, () => console.log(`Lab: http://localhost:${port}`));
