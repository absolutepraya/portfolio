import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const REDIRECTS_FILE = join(ROOT, 'redirects.json');
const DIST_DIR = join(ROOT, 'dist');
const SERVE_OUT = join(DIST_DIR, 'serve.json');
const VERCEL_OUT = join(ROOT, 'vercel.json');

const redirects = existsSync(REDIRECTS_FILE)
  ? JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))
  : {};

const entries = Object.entries(redirects);

// --- vercel.json (production host) ---
// `redirects.json` stays the single human-editable source of truth. Vercel's
// service/routing structure (the `services` block and the catch-all service
// rewrite) is created and maintained by `vercel link`, so we MERGE into the
// existing vercel.json and only manage the `redirects` array — never clobbering
// what the CLI writes. statusCode 302 mirrors the old serve.json behavior
// (temporary, so destinations can change without browser cache lock-in). Vercel
// evaluates redirects before rewrites, so these vanity slugs win over the
// catch-all service route. DEFAULT_BASE is the fallback for a fresh checkout
// where `vercel link` has not run yet (keeps `bun run build` working).
const DEFAULT_BASE = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  trailingSlash: false,
  rewrites: [
    { source: '/(.*)', destination: { type: 'service', service: 'web' } },
  ],
  services: { web: { root: '.', framework: 'vite', entrypoint: '.' } },
};

const vercelConfig = existsSync(VERCEL_OUT)
  ? JSON.parse(readFileSync(VERCEL_OUT, 'utf8'))
  : DEFAULT_BASE;

vercelConfig.redirects = entries.map(([slug, destination]) => ({
  source: `/${slug}`,
  destination,
  statusCode: 302,
}));

writeFileSync(VERCEL_OUT, `${JSON.stringify(vercelConfig, null, 2)}\n`);

// --- dist/serve.json (local `bun run start` preview only) ---
// `serve` (serve-handler) reads this when previewing the production build locally.
// Emit both /slug and /slug/ forms — serve-handler's path-to-regexp matching is
// exact and won't match a stray trailing slash otherwise.
let wroteServe = false;
if (existsSync(DIST_DIR)) {
  const serveConfig = {
    redirects: entries.flatMap(([slug, destination]) => [
      { source: `/${slug}`, destination, type: 302 },
      { source: `/${slug}/`, destination, type: 302 },
    ]),
  };
  writeFileSync(SERVE_OUT, `${JSON.stringify(serveConfig, null, 2)}\n`);
  wroteServe = true;
}

console.log(
  `Wrote ${entries.length} redirect(s) → vercel.json${
    wroteServe ? ' + dist/serve.json' : ''
  }`,
);
