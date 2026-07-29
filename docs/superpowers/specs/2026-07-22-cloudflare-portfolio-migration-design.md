# Cloudflare portfolio migration design

**Status:** Approved direction, pending specification review  
**Issue:** [#13](https://github.com/absolutepraya/portfolio/issues/13)  
**Branch:** `absolutepraya/issue-13-cloudflare-migration`

## Objective

Move the portfolio serving `abhipraya.dev` and `www.abhipraya.dev` from Vercel to Cloudflare. Preserve the existing static Vite build, prerendered HTML, vanity redirect, and automatic release model.

## Confirmed scope

- Pushes to `core` deploy production.
- Pull requests receive isolated preview deployments.
- Only the apex and `www` domains move.
- `blog.abhipraya.dev`, VPS services, Cloudflare Tunnel hostnames, mail records, CAA records, and all unrelated DNS remain unchanged.
- Vercel remains available until Cloudflare production verification succeeds.

## Observed state

- The portfolio is a static Vite application. `bun run build` runs Vite, a Puppeteer prerender step, then `scripts/generate-redirects.js`.
- Current Vercel configuration provides a catch-all app rewrite and a `302` redirect from `/tracklist-buat-gina`.
- The redirect source of truth is `redirects.json`. The current generator emits Vercel and local-preview artifacts only.
- The Cloudflare zone is active. The apex and `www` currently resolve through Vercel. `blog.abhipraya.dev` is a separate Vercel target and is out of scope.
- No Cloudflare Workers, Pages projects, KV namespaces, D1 databases, or Queues currently serve this portfolio.

## Hosting decision

Use **Cloudflare Workers Static Assets** with no application Worker logic.

Cloudflare recommends Workers Static Assets for new static sites. It serves `dist/` natively, supports SPA fallback with `assets.not_found_handling: "single-page-application"`, and supports static `_redirects` rules. Pages is not selected because Cloudflare concentrates new static-hosting features on Workers. Direct Workers Builds is not selected because its documented configuration is less flexible and does not establish this repository's required Bun plus Puppeteer build environment.

## Deployment design

Use GitHub Actions to build and deploy the static asset Worker.

1. A workflow runs on pull requests and on pushes to `core`.
2. The workflow installs the repository's pinned Bun dependencies and provides a known browser environment for Puppeteer prerendering.
3. It runs the existing `bun run build` command, producing `dist/`.
4. Pull-request jobs deploy an isolated preview version without changing production.
5. `core` jobs deploy the production version.
6. GitHub stores a dedicated, least-privilege Cloudflare deployment credential. Local OAuth and DNS-inventory credentials are not reused by CI.

## Runtime configuration

A new root `wrangler.jsonc` will declare:

- a portfolio-specific Worker name
- the current compatibility date at implementation time
- `assets.directory` as `./dist`
- `assets.not_found_handling` as `single-page-application`

No Worker entrypoint, bindings, database, queue, or secret is needed.

## Redirect migration

Keep `redirects.json` as the human-editable source of truth. Extend `scripts/generate-redirects.js` to generate `public/_redirects` in Workers Static Assets syntax, preserving the existing temporary `302` behavior. Retire Vercel-specific redirect generation and configuration after the Cloudflare cutover is verified.

## Domain cutover and rollback

1. Deploy and validate a preview on the Cloudflare Worker hostname.
2. Deploy production on the Worker hostname.
3. Attach `abhipraya.dev` and `www.abhipraya.dev` to the Worker through Cloudflare.
4. Verify HTTP responses, assets, prerendered content, the vanity redirect, and canonical domain behavior.
5. Keep Vercel's existing deployment and configuration until those checks pass.
6. If production verification fails, restore only the apex and `www` Vercel DNS targets. Do not modify any other record.

## Verification

- `bun run build` succeeds locally.
- A preview deployment renders the portfolio and returns a `302` for `/tracklist-buat-gina`.
- Production responds correctly before custom domains are attached.
- After cutover, `abhipraya.dev` and `www.abhipraya.dev` render correctly, assets load, and the redirect remains temporary.
- `blog.abhipraya.dev` still resolves to its existing deployment.

## Non-goals

- Migrating the blog.
- Introducing server-side application logic.
- Changing portfolio content or design.
- Modifying VPS, tunnel, email, or unrelated DNS infrastructure.
