import {
  estimateTokens,
  markdownAssetPath,
  prefersMarkdown,
} from './negotiate.js';

// Serves the static build and answers "Accept: text/markdown" with the generated index.md.
export default {
  async fetch(request, env) {
    const readOnly = request.method === 'GET' || request.method === 'HEAD';

    if (readOnly && prefersMarkdown(request.headers.get('accept'))) {
      const assetPath = markdownAssetPath(new URL(request.url).pathname);
      if (assetPath) {
        const assetUrl = new URL(request.url);
        assetUrl.pathname = assetPath;
        assetUrl.search = '';
        const asset = await env.ASSETS.fetch(
          new Request(assetUrl, { method: 'GET' }),
        );
        // The single-page-app fallback answers unknown paths with index.html, which is not markdown.
        const isHtml = asset.headers.get('content-type')?.includes('text/html');
        if (asset.ok && !isHtml) {
          const text = await asset.text();
          const headers = new Headers(asset.headers);
          headers.set('Content-Type', 'text/markdown; charset=utf-8');
          headers.set('x-markdown-tokens', String(estimateTokens(text)));
          headers.delete('content-length');
          headers.append('Vary', 'Accept');
          return new Response(request.method === 'HEAD' ? null : text, {
            status: 200,
            headers,
          });
        }
      }
    }

    const response = await env.ASSETS.fetch(request);
    if (response.headers.get('content-type')?.includes('text/html')) {
      const varied = new Response(response.body, response);
      varied.headers.append('Vary', 'Accept');
      return varied;
    }
    return response;
  },
};
