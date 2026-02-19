# Portfolio — abhipraya.dev

Personal portfolio site built with React 18, Vite 6, Tailwind CSS 3, and Framer Motion. Packaged with Bun.

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

## Build

```bash
bun run build
```

## Production

Deployed on Heroku. To serve the production build locally:

```bash
bun run start
```
