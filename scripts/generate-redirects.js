import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const REDIRECTS_FILE = join(ROOT, 'redirects.json');
const DIST_DIR = join(ROOT, 'dist');
const PUBLIC_DIR = join(ROOT, 'public');
const WORKERS_OUT = join(PUBLIC_DIR, '_redirects');
const DIST_WORKERS_OUT = join(DIST_DIR, '_redirects');
const SERVE_OUT = join(DIST_DIR, 'serve.json');

export function renderWorkersRedirects(redirects) {
  return Object.entries(redirects)
    .flatMap(([slug, destination]) => [
      `/${slug} ${destination} 302`,
      `/${slug}/ ${destination} 302`,
    ])
    .join('\n')
    .concat(Object.keys(redirects).length > 0 ? '\n' : '');
}

export function generateRedirectArtifacts() {
  const redirects = existsSync(REDIRECTS_FILE)
    ? JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))
    : {};

  const workersRedirects = renderWorkersRedirects(redirects);

  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(WORKERS_OUT, workersRedirects);

  if (existsSync(DIST_DIR)) {
    writeFileSync(DIST_WORKERS_OUT, workersRedirects);
    const serveConfig = {
      redirects: Object.entries(redirects).flatMap(([slug, destination]) => [
        { source: `/${slug}`, destination, type: 302 },
        { source: `/${slug}/`, destination, type: 302 },
      ]),
    };
    writeFileSync(SERVE_OUT, `${JSON.stringify(serveConfig, null, 2)}\n`);
  }
}

if (import.meta.main) {
  generateRedirectArtifacts();
}
