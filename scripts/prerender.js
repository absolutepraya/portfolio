import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import puppeteer from 'puppeteer';

const DIST_DIR = join(import.meta.dirname, '..', 'dist');
const PORT = 45678;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

function startServer() {
  const server = createServer((req, res) => {
    const url = req.url.split('?')[0];
    const filePath = join(DIST_DIR, url === '/' ? 'index.html' : url);
    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      const fallback = readFileSync(join(DIST_DIR, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fallback);
    }
  });
  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log('Starting prerender...');

  const server = await startServer();
  console.log(`Local server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://localhost:${PORT}/`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Wait for React to render and animations to settle
  await page.waitForSelector('#aboutsec', { timeout: 15000 });
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const html = await page.content();

  await browser.close();
  server.close();

  writeFileSync(join(DIST_DIR, 'index.html'), html);
  console.log('Prerendered index.html written to dist/');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
