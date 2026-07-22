import { describe, expect, test } from 'bun:test';
import { renderWorkersRedirects } from './generate-redirects.js';

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
