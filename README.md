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

Deployed on Cloudflare Workers Static Assets. To serve the production build locally:

```bash
bun run start
```
