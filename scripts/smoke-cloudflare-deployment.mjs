import { constants } from 'node:fs';
import { access, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const args = process.argv.slice(2);
const target = args.find((value) => !value.startsWith('--'));
const isProduction = args.includes('--production');
const deploymentAttempts = 30;

if (!target) {
  throw new Error(
    'Usage: bun scripts/smoke-cloudflare-deployment.mjs <base-url> [--production]',
  );
}

const baseUrl = new URL(target);
baseUrl.pathname = '/';

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

async function requireFile(file) {
  try {
    await access(file, constants.R_OK);
  } catch {
    fail(`Expected generated file is missing: ${file}`);
  }
}

async function findFirstFile(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      const nested = await findFirstFile(file, predicate);
      if (nested) return nested;
    } else if (predicate(entry.name)) {
      return file;
    }
  }
  return undefined;
}

function deployedPath(file) {
  return `/${relative('dist', file).split(sep).join('/')}`;
}

async function request(pathname) {
  const url = new URL(pathname, baseUrl);
  let lastError;
  for (let attempt = 1; attempt <= deploymentAttempts; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: 'manual' });
      if (response.status < 500 || attempt === deploymentAttempts)
        return response;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }
  throw lastError ?? new Error(`Unable to request ${url}`);
}

async function assertResponse(pathname, expectedStatus, expectedContentType) {
  let response;
  for (let attempt = 1; attempt <= deploymentAttempts; attempt += 1) {
    response = await request(pathname);
    if (response.status === expectedStatus || attempt === deploymentAttempts)
      break;
    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }
  assert(
    response.status === expectedStatus,
    `${pathname} returned ${response.status}, expected ${expectedStatus}`,
  );
  if (expectedContentType) {
    assert(
      response.headers.get('content-type')?.includes(expectedContentType),
      `${pathname} has content type ${response.headers.get('content-type')}, expected ${expectedContentType}`,
    );
  }
  return response;
}

async function assertHeaderEventually(
  pathname,
  header,
  expectedValue,
  description,
  initialResponse,
) {
  let response = initialResponse;
  for (let attempt = 1; attempt <= deploymentAttempts; attempt += 1) {
    if (response.headers.get(header)?.includes(expectedValue)) return;

    if (attempt === deploymentAttempts) {
      fail(`${description} is incorrect`);
    }

    await new Promise((resolve) => setTimeout(resolve, 2_000));
    response = await assertResponse(pathname, 200);
  }
}

await Promise.all([
  requireFile('dist/index.html'),
  requireFile('dist/robots.txt'),
  requireFile('dist/sitemap.xml'),
  requireFile('dist/_redirects'),
  requireFile('dist/_headers'),
]);

const stylesheet = await findFirstFile('dist/assets', (name) =>
  name.endsWith('.css'),
);
const script = await findFirstFile('dist/assets', (name) =>
  name.endsWith('.js'),
);
const font = await findFirstFile('dist/assets', (name) =>
  name.endsWith('.woff2'),
);
assert(stylesheet, 'Expected at least one generated stylesheet');
assert(script, 'Expected at least one generated JavaScript asset');
assert(font, 'Expected at least one generated font asset');

const home = await assertResponse('/', 200, 'text/html');
const homeHtml = await home.text();
assert(
  homeHtml.includes('rel="canonical" href="https://abhipraya.dev/"'),
  'Home canonical URL is incorrect',
);
assert(
  homeHtml.includes('Daffa Abhipraya Putra'),
  'Home page is missing portfolio content',
);

const spaFallback = await assertResponse(
  '/__cloudflare-portfolio-missing__/',
  200,
  'text/html',
);
assert(
  (await spaFallback.text()).includes('Daffa Abhipraya Putra'),
  'SPA fallback does not serve the portfolio',
);

await assertResponse('/robots.txt', 200, 'text/plain');
await assertResponse('/sitemap.xml', 200, 'application/xml');
const css = await assertResponse(deployedPath(stylesheet), 200, 'text/css');
await assertResponse(deployedPath(script), 200, 'javascript');
const fontResponse = await assertResponse(
  deployedPath(font),
  200,
  'font/woff2',
);

const expectedHomeHeaders = {
  'strict-transport-security': 'max-age=63072000',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'DENY',
  'permissions-policy':
    'camera=(), geolocation=(), microphone=(), payment=(), usb=()',
  'cache-control': 'public, max-age=0, must-revalidate',
};

let policyHome = home;
for (let attempt = 1; attempt <= deploymentAttempts; attempt += 1) {
  const missingHeader = Object.entries(expectedHomeHeaders).find(
    ([name, expected]) => !policyHome.headers.get(name)?.includes(expected),
  );
  if (!missingHeader) break;

  if (attempt === deploymentAttempts) {
    fail(`Home response is missing ${missingHeader[0]}: ${missingHeader[1]}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 2_000));
  policyHome = await assertResponse('/', 200, 'text/html');
}

await assertHeaderEventually(
  deployedPath(stylesheet),
  'cache-control',
  'max-age=31536000',
  'Stylesheet cache policy',
  css,
);
await assertHeaderEventually(
  deployedPath(font),
  'cache-control',
  'max-age=31536000',
  'Font cache policy',
  fontResponse,
);

if (isProduction) {
  assert(
    !home.headers.get('server')?.toLowerCase().includes('vercel'),
    'Production is still served by Vercel',
  );
}

console.log(`Cloudflare deployment smoke test passed for ${baseUrl.origin}`);
