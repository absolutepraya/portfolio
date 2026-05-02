import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const REDIRECTS_FILE = join(ROOT, 'redirects.json');
const OUT_FILE = join(ROOT, 'dist', 'serve.json');

const redirects = existsSync(REDIRECTS_FILE)
  ? JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))
  : {};

// Emit both /slug and /slug/ source forms — serve-handler's path-to-regexp
// matching is exact and won't match a stray trailing slash otherwise.
const config = {
  redirects: Object.entries(redirects).flatMap(([slug, destination]) => [
    { source: `/${slug}`, destination, type: 302 },
    { source: `/${slug}/`, destination, type: 302 },
  ]),
};

writeFileSync(OUT_FILE, `${JSON.stringify(config, null, 2)}\n`);
console.log(
  `Wrote ${Object.keys(redirects).length} redirect(s) to ${OUT_FILE}`,
);
