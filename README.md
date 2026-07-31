# Portfolio — abhipraya.dev

Personal portfolio site built with React 18, Vite 6, Tailwind CSS 4, and Framer Motion. Packaged with Bun.

## Lighthouse

|  | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Desktop | 94 | 91 | 100 | 100 |
| Mobile | 56 | 91 | 100 | 100 |

## Setup

```bash
bun install
```

## Development

```bash
bun run dev
```

To expose on the network (for testing on other devices):

```bash
bun run dev -- --host
```

## Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting (with Tailwind class sorting). A Husky pre-commit hook runs this automatically.

```bash
bun run check
```

## Dead Code Detection

```bash
bun run knip
```

## Quality checks

The required local equivalent of the blocking CI checks is:

```bash
bun run verify
```

Individual commands are available for format verification, linting, typechecking, tests, React Doctor, and the production bundle budget. `bun run react-doctor:staged` is advisory and only scans the Git index. The full React Doctor baseline and CI threshold are documented in [docs/react-doctor.md](docs/react-doctor.md).

## Build

```bash
bun run build
```

## Production

Deployed on Cloudflare Workers Static Assets. `abhipraya-portfolio` serves the complete prerendered `dist/` output at `abhipraya.dev` and `www.abhipraya.dev`, with SPA fallback and no application Worker runtime.

```bash
bun run build
bun run start
bun run smoke:deployment -- https://example.workers.dev
```

The deployment workflow verifies the full quality suite and builds `dist/` once. Same-repository pull requests deploy that verified artifact to a public preview Worker and smoke-test it. A push to `core` deploys the same artifact through the `absolutepraya-portfolio` GitHub environment, then smoke-tests production. Closed pull requests remove their preview Worker.

`core` is protected: changes require a pull request with the `Verify` check passing. Force pushes and branch deletion are blocked, but an approval is not required.

`public/_headers` is the versioned Cloudflare cache and security policy: HTML and mutable root files revalidate, while fingerprinted `/assets/*` files cache immutably for one year. It also sets HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and `Permissions-Policy`.

Cloudflare Web Analytics is already enabled through automatic setup. It collects portfolio visitors, page views, referrers, page-load data, and Core Web Vitals without a third-party tracker. Do not add another analytics beacon.

For an exceptional stale root asset, use a targeted purge in Cloudflare's Caching settings. Routine publishes do not require a whole-cache purge.

To serve the production build locally:

```bash
bun run start
```
