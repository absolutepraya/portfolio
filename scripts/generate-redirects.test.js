import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'bun:test';
import {
  generateRedirectArtifacts,
  renderWorkersRedirects,
} from './generate-redirects.js';

const ROOT = join(import.meta.dirname, '..');
const REDIRECTS_FILE = join(ROOT, 'redirects.json');
const DIST_DIR = join(ROOT, 'dist');
const DIST_WORKERS_OUT = join(DIST_DIR, '_redirects');

describe('renderWorkersRedirects', () => {
  test('emits temporary rules for slash and trailing-slash variants', () => {
    expect(
      renderWorkersRedirects({
        'tracklist-buat-gina': 'https://example.com/playlist',
      }),
    ).toBe(
      '/tracklist-buat-gina https://example.com/playlist 302\n/tracklist-buat-gina/ https://example.com/playlist 302\n',
    );
  });

  test('emits no rules for an empty mapping', () => {
    expect(renderWorkersRedirects({})).toBe('');
  });
});

describe('generateRedirectArtifacts', () => {
  test('writes Workers rules directly to the production build output', () => {
    const distExisted = existsSync(DIST_DIR);

    if (!distExisted) {
      mkdirSync(DIST_DIR, { recursive: true });
    }

    try {
      generateRedirectArtifacts();

      const redirects = JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'));
      expect(readFileSync(DIST_WORKERS_OUT, 'utf8')).toBe(
        renderWorkersRedirects(redirects),
      );
    } finally {
      if (!distExisted) {
        rmSync(DIST_DIR, { force: true, recursive: true });
      }
    }
  });
});
