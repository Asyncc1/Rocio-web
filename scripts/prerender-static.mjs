// Generates static HTML for every page so the site can be served by a static
// host (e.g. Netlify publishing .output/public) without running a server.
// Run after `bun run build`:
//   node scripts/prerender-static.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = join(root, ".output", "public");
const entry = join(root, ".output", "server", "index.mjs");

// The optimized photos live behind /__l5e/... and are only served by the Lovable
// preview proxy, so a static host has to receive real copies of them.
const ASSET_SOURCE =
  process.env.LOVABLE_ASSET_SOURCE || "https://o-calm-space.lovable.app";
const ROUTES = [
  "/",
  "/terapia-individual",
  "/terapia-de-pareja",
  "/terapia-duelo",
  "/terapia-ansiedad",
  "/terapia-adolescentes",
  "/terapia-depresion",
];

// A path nothing matches, rendered so the static host has a real 404 page.
const NOT_FOUND_PROBE = "/pagina-inexistente-404";

const server = await import(entry);
const handler = server.default ?? server;
// The Cloudflare-module entry expects an execution context; static generation
// has nothing to defer, so a no-op is enough.
const ctx = { waitUntil: (promise) => Promise.resolve(promise).catch(() => {}) };

let failed = 0;

async function render(route) {
  const response = await handler.fetch(
    new Request("http://localhost" + route),
    {},
    ctx,
  );
  // The streamed payload carries NUL separators; some static hosts and
  // tooling treat a file containing them as binary, so drop them.
  const html = (await response.text()).replace(/\u0000/g, "");
  if (!html.includes("<html")) {
    console.error(`FAIL ${route} status=${response.status} (no HTML)`);
    failed += 1;
    return null;
  }
  return { html, status: response.status };
}

for (const route of ROUTES) {
  const rendered = await render(route);
  if (!rendered) continue;
  const file = route === "/" ? "index.html" : join(route.slice(1), "index.html");
  const target = join(outDir, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, rendered.html, "utf8");
  console.log(`ok ${route} -> ${file} (${rendered.html.length} bytes)`);
}

// The photos referenced by the pages are served by the Lovable preview proxy;
// download each one so .output/public is self-contained on a static host.
const usedAssets = new Set();
for (const route of ROUTES) {
  const file = route === "/" ? "index.html" : join(route.slice(1), "index.html");
  const target = join(outDir, file);
  try {
    const html = await readFile(target, "utf8");
    for (const url of html.match(/\/__l5e\/[^\s"'()]+/g) || []) usedAssets.add(url);
  } catch {
    /* the page failed earlier and was already counted */
  }
}

let assetsFailed = 0;
for (const url of [...usedAssets].sort()) {
  try {
    const response = await fetch(ASSET_SOURCE + url);
    if (!response.ok) throw new Error(`status ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    const target = join(outDir, url.replace(/^\/+/, ""));
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, bytes);
    console.log(`ok foto ${url} (${bytes.length} bytes)`);
  } catch (error) {
    console.error(`FAIL foto ${url}: ${error.message}`);
    assetsFailed += 1;
  }
}
if (assetsFailed > 0) {
  console.error(
    `prerender-static: ${assetsFailed} photo(s) could not be downloaded from ${ASSET_SOURCE}`,
  );
  process.exit(1);
}

const notFound = await render(NOT_FOUND_PROBE);
if (notFound) {
  // The not-found render inherits the root head, which carries no title and
  // says the page may be indexed. A 404 must not be indexed, so fix both.
  const html = notFound.html
    .replace(
      '<meta name="robots" content="index, follow"/>',
      '<meta name="robots" content="noindex"/>',
    )
    .replace(
      "</head>",
      "<title>Página no encontrada | Rocío Ordóñez</title>" +
        '<meta name="description" content="La página que buscas no existe. ' +
        'Encuentra la terapia que necesitas en rocioordonez.com."/></head>',
    );
  await writeFile(join(outDir, "404.html"), html, "utf8");
  console.log(`ok 404 page -> 404.html (status ${notFound.status})`);
}

if (failed > 0) {
  console.error(`prerender-static: ${failed} route(s) failed`);
  process.exit(1);
}
