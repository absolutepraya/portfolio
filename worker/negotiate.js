// Pure helpers for Markdown content negotiation. Kept free of Worker globals so Node can test them.

/**
 * True when the client asks for markdown at least as strongly as HTML.
 * Browsers send text/html first and never list text/markdown, so they stay on HTML.
 * Wildcards are ignored on purpose: "*\/*" must keep returning HTML.
 */
export function prefersMarkdown(accept) {
  if (!accept) return false;
  let markdown = 0;
  let html = 0;
  for (const part of accept.split(',')) {
    const [rawType, ...params] = part.trim().split(';');
    const type = rawType.trim().toLowerCase();
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    if (type === 'text/markdown') markdown = Math.max(markdown, q);
    if (type === 'text/html' || type === 'application/xhtml+xml')
      html = Math.max(html, q);
  }
  return markdown > 0 && markdown >= html;
}

/** Maps a page URL path to its generated markdown asset, or null for files such as images or feeds. */
export function markdownAssetPath(pathname) {
  if (pathname.endsWith('/')) return `${pathname}index.md`;
  const last = pathname.split('/').pop() ?? '';
  if (last.includes('.')) return null;
  return `${pathname}/index.md`;
}

/** Rough token estimate (about four characters per token) for the x-markdown-tokens header. */
export function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}
