import { describe, expect, test } from 'bun:test';
import {
  estimateTokens,
  markdownAssetPath,
  prefersMarkdown,
} from '../worker/negotiate.js';
import { renderMarkdown } from './generate-markdown.js';

describe('prefersMarkdown', () => {
  test('agents that ask for markdown get it', () => {
    expect(prefersMarkdown('text/markdown')).toBe(true);
    expect(prefersMarkdown('text/markdown, text/html;q=0.9')).toBe(true);
    expect(prefersMarkdown('text/markdown;q=0.8, text/html;q=0.8')).toBe(true);
  });

  test('browsers and wildcard clients stay on HTML', () => {
    expect(prefersMarkdown(undefined)).toBe(false);
    expect(prefersMarkdown(null)).toBe(false);
    expect(prefersMarkdown('*/*')).toBe(false);
    expect(
      prefersMarkdown(
        'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      ),
    ).toBe(false);
    expect(prefersMarkdown('text/html, text/markdown;q=0.5')).toBe(false);
    expect(prefersMarkdown('text/markdown;q=0')).toBe(false);
  });
});

describe('markdownAssetPath', () => {
  test('maps page paths to their generated markdown file', () => {
    expect(markdownAssetPath('/')).toBe('/index.md');
    expect(markdownAssetPath('/about')).toBe('/about/index.md');
  });

  test('never rewrites files with an extension', () => {
    expect(markdownAssetPath('/robots.txt')).toBeNull();
    expect(markdownAssetPath('/assets/app.js')).toBeNull();
  });
});

test('estimateTokens is roughly four characters per token', () => {
  expect(estimateTokens('abcd')).toBe(1);
  expect(estimateTokens('abcde')).toBe(2);
});

describe('renderMarkdown', () => {
  const markdown = renderMarkdown({
    experience: [
      {
        title: 'Engineer',
        org: 'Acme',
        url: 'https://acme.example/',
        date: '01/2026 - Present',
        desc: '- Built a thing',
      },
    ],
    projects: [
      {
        title: 'Widget',
        kind: 'web',
        date: '2026',
        subtitle: 'A widget.',
        stacks: ['bun', 'react'],
        url: '',
        github: 'https://github.com/example/widget',
      },
    ],
    achievements: [
      {
        title: 'Hack',
        organizer: 'Org',
        organizerUrl: 'https://org.example/',
        date: '11/2025',
        desc: 'Won **1st place**.',
        award: '1st Place',
        articles: [{ platform: 'News', url: 'https://news.example/a' }],
      },
    ],
  });

  test('starts with the portfolio heading and canonical URL', () => {
    expect(markdown.startsWith('# Daffa Abhipraya')).toBe(true);
    expect(markdown).toContain('Canonical URL: https://abhipraya.dev/');
  });

  test('renders every section from the data', () => {
    expect(markdown).toContain('### Engineer, [Acme](https://acme.example/)');
    expect(markdown).toContain('- Built a thing');
    expect(markdown).toContain('### Widget');
    expect(markdown).toContain('- Stack: bun, react');
    expect(markdown).toContain('### Hack');
    expect(markdown).toContain('Coverage: [News](https://news.example/a)');
  });

  test('omits an empty site link', () => {
    expect(markdown).not.toContain('[Site]()');
    expect(markdown).toContain(
      '- Links: [Source](https://github.com/example/widget)',
    );
  });
});
