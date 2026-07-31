import { expect, test } from 'bun:test';
import { readFile } from 'node:fs/promises';

async function optionalText(path) {
  try {
    return await readFile(path, 'utf8');
  } catch {
    return '';
  }
}

test('defines secure revalidation and immutable asset caching at the edge', async () => {
  const headers = await optionalText('public/_headers');

  expect(headers).toContain(
    'Cache-Control: public, max-age=0, must-revalidate',
  );
  expect(headers).toContain('/assets/*');
  expect(headers).toContain('! Cache-Control');
  expect(headers).toContain(
    'Cache-Control: public, max-age=31536000, immutable',
  );
  expect(headers).toContain('Strict-Transport-Security: max-age=63072000');
  expect(headers).toContain('X-Content-Type-Options: nosniff');
});

test('keeps the Cloudflare deployment smoke contract versioned', async () => {
  const smokeScript = await optionalText(
    'scripts/smoke-cloudflare-deployment.mjs',
  );

  expect(smokeScript).toContain('Cloudflare deployment smoke test passed');
  expect(smokeScript).toContain('strict-transport-security');
  expect(smokeScript).toContain('max-age=31536000');
  expect(smokeScript).toContain('Production is still served by Vercel');
});

test('deploys only the verified build artifact and cleans up closed previews', async () => {
  const workflow = await optionalText(
    '.github/workflows/deploy-cloudflare.yml',
  );

  expect(workflow).toContain('name: Verify');
  expect(workflow).toContain('actions/upload-artifact@v4');
  expect(workflow).toContain('actions/download-artifact@v4');
  expect(workflow).toContain('name: Delete preview');
  expect(workflow).toContain('smoke-cloudflare-deployment.mjs');
});
