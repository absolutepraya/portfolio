# Cloudflare Portfolio Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve `abhipraya.dev` and `www.abhipraya.dev` through Cloudflare Workers Static Assets, with production releases from `core` and trusted pull-request previews.

**Architecture:** A configuration-only Worker serves the existing `dist/` Vite output, including SPA fallback. GitHub Actions provisions Bun and Chrome, runs the existing build pipeline, then either uploads a preview version or deploys production. Cloudflare custom-domain routes are deliberately added only after a Worker-hostname production smoke test.

**Tech Stack:** Bun 1.3.14, Vite 6, React 18, Puppeteer 24, Cloudflare Workers Static Assets, Wrangler, GitHub Actions.

## Global Constraints

- Scope the migration to `abhipraya.dev` and `www.abhipraya.dev` only.
- Do not alter `blog.abhipraya.dev`, mail, CAA, VPS, tunnel, or other zone records.
- Retain `redirects.json` as the only human-edited vanity-redirect source.
- Redirects remain HTTP `302` and must match both `/slug` and `/slug/`.
- Build with the existing `bun run build` command. It includes Vite, Puppeteer prerendering, and redirect generation.
- Do not create a Worker entrypoint or add runtime bindings, databases, queues, or secrets.
- Use `preview_urls: true` and do not route previews to a custom domain.
- GitHub Actions must deploy only from repository branches. Fork pull requests cannot receive the Cloudflare credential.
- Keep Vercel live until the Worker-hostname and production-domain checks pass.
- Every task ends with the specified verification and commit.

---

## File structure

| Path | Responsibility |
|---|---|
| `scripts/generate-redirects.js` | Generates Cloudflare `_redirects` and local `dist/serve.json` from `redirects.json`. |
| `scripts/generate-redirects.test.js` | Covers the Workers redirect serialization contract. |
| `public/_redirects` | Generated Cloudflare static-assets redirect artifact. Never hand-edit. |
| `wrangler.jsonc` | Declares the assets-only Worker, SPA fallback, preview URLs, then production custom domains after smoke testing. |
| `.github/workflows/deploy-cloudflare.yml` | Builds and deploys trusted PR previews and `core` production revisions. |
| `package.json` | Removes obsolete Vercel deployment metadata after successful cutover. |
| `vercel.json` | Removed only after Cloudflare is verified live. |
| `CLAUDE.md` | Replaces Vercel deployment and redirect instructions with Cloudflare operations. |

### Task 1: Generate Workers redirect artifacts

**Files:**
- Modify: `scripts/generate-redirects.js:1-68`
- Create: `scripts/generate-redirects.test.js`
- Generate: `public/_redirects`
- Modify: `CLAUDE.md:85-95`

**Interfaces:**
- Consumes: `redirects.json`, an object mapping a slash-free slug to an external absolute URL.
- Produces: `renderWorkersRedirects(redirects: Record<string, string>): string` and `public/_redirects` containing one `302` rule for each slash variant.
- Preserves: `dist/serve.json` for `bun run start`.

- [ ] **Step 1: Write the failing redirect serialization test**

Create `scripts/generate-redirects.test.js`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bun test scripts/generate-redirects.test.js`

Expected: FAIL because `renderWorkersRedirects` is not exported.

- [ ] **Step 3: Refactor the generator to emit `_redirects`**

Replace the Vercel-specific setup with the following structure. Keep the existing `redirects.json` loading and local `serve.json` generation.

```js
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const REDIRECTS_FILE = join(ROOT, 'redirects.json');
const DIST_DIR = join(ROOT, 'dist');
const PUBLIC_DIR = join(ROOT, 'public');
const WORKERS_OUT = join(PUBLIC_DIR, '_redirects');
const SERVE_OUT = join(DIST_DIR, 'serve.json');

export function renderWorkersRedirects(redirects) {
  return Object.entries(redirects)
    .flatMap(([slug, destination]) => [
      `/${slug} ${destination} 302`,
      `/${slug}/ ${destination} 302`,
    ])
    .join('\n')
    .concat(Object.keys(redirects).length > 0 ? '\n' : '');
}

export function generateRedirectArtifacts() {
  const redirects = existsSync(REDIRECTS_FILE)
    ? JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))
    : {};

  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(WORKERS_OUT, renderWorkersRedirects(redirects));

  if (existsSync(DIST_DIR)) {
    const serveConfig = {
      redirects: Object.entries(redirects).flatMap(([slug, destination]) => [
        { source: `/${slug}`, destination, type: 302 },
        { source: `/${slug}/`, destination, type: 302 },
      ]),
    };
    writeFileSync(SERVE_OUT, `${JSON.stringify(serveConfig, null, 2)}\n`);
  }
}

if (import.meta.main) {
  generateRedirectArtifacts();
}
```

Do not read, modify, or write `vercel.json` from this script.

- [ ] **Step 4: Update redirect documentation**

Replace the Vercel bullet in `CLAUDE.md` with this operational contract:

```markdown
- **`public/_redirects`** (generated, committed) — production. Cloudflare Workers Static Assets parses these temporary `302` rules before serving assets. It emits both `/slug` and `/slug/` forms.
- **`dist/serve.json`** (when `dist/` exists) — local-only, for previewing the production build via `bun run start` (`serve`/serve-handler). It emits the same two forms.
```

Change the add-redirect instruction to `edit redirects.json, then bun run build`, and change the Vite warning to say redirects work after `bun run build && bun run start` or on Cloudflare production.

- [ ] **Step 5: Verify generated artifacts and the full build**

Run:

```bash
bun test scripts/generate-redirects.test.js
bun run build
cat public/_redirects
git diff --check
```

Expected:

- both tests PASS
- the build completes and writes `dist/`
- `public/_redirects` contains both `tracklist-buat-gina` rules with status `302`
- `git diff --check` exits successfully

- [ ] **Step 6: Commit the redirect migration**

```bash
git add scripts/generate-redirects.js scripts/generate-redirects.test.js public/_redirects CLAUDE.md
git commit -m "feat: generate Cloudflare redirect rules"
```

### Task 2: Configure the assets-only Worker

**Files:**
- Create: `wrangler.jsonc`
- Modify: `CLAUDE.md:97-110`

**Interfaces:**
- Consumes: the `dist/` directory from `bun run build` and `public/_redirects` copied into it by Vite.
- Produces: the Worker named `abhipraya-portfolio`, its Workers preview URLs, and SPA fallback behavior.
- Does not expose: any production custom domain in this task.

- [ ] **Step 1: Add the initial Worker configuration**

Create `wrangler.jsonc` exactly as follows:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "abhipraya-portfolio",
  "compatibility_date": "2026-07-22",
  "preview_urls": true,
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

Do not add `main`, `routes`, `bindings`, `compatibility_flags`, or an application Worker module.

- [ ] **Step 2: Replace the Vercel deployment guide**

Replace `CLAUDE.md` deployment lines 97 to 110 with:

```markdown
## Deployment

**Cloudflare Workers Static Assets** — Worker `abhipraya-portfolio`. GitHub Actions builds and deploys production from `core`; trusted pull requests upload a preview Worker version. The Worker serves `dist/` with SPA fallback and has no application runtime code.

- **Production domains:** `abhipraya.dev` and `www.abhipraya.dev` only. `blog.abhipraya.dev` and all other zone records are out of scope.
- **Local verification:** run `bun run build`, then `bun run start`. Validate the generated `public/_redirects` and the prerendered homepage before pushing.
- **Rollback:** remove the two Cloudflare custom-domain routes and restore only the observed Vercel apex A record and `www` CNAME. Do not change other DNS records.
- **CI credentials:** GitHub Actions uses its own scoped `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets. Never reuse, commit, or print local credentials.
```

- [ ] **Step 3: Validate the assets configuration locally**

Run:

```bash
bun run build
bunx wrangler@latest deploy --dry-run
```

Expected: the build succeeds and Wrangler identifies `dist` as the static-assets directory without requiring a Worker entrypoint.

- [ ] **Step 4: Commit Worker configuration**

```bash
git add wrangler.jsonc CLAUDE.md
git commit -m "feat: configure Cloudflare static assets"
```

### Task 3: Automate trusted previews and production deploys

**Files:**
- Create: `.github/workflows/deploy-cloudflare.yml`

**Interfaces:**
- Consumes: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets, plus the `wrangler.jsonc` configuration.
- Produces: a production deploy on `core` and an aliased version preview at `pr-13-abhipraya-portfolio.absolutepraya.workers.dev` for the issue pull request.
- Does not run: a deployment for fork pull requests, because repository secrets are not available to them.

- [ ] **Step 1: Add the deployment workflow**

Create `.github/workflows/deploy-cloudflare.yml`:

```yaml
name: Deploy Cloudflare portfolio

on:
  pull_request:
    branches: [core]
  push:
    branches: [core]

permissions:
  contents: read

concurrency:
  group: cloudflare-portfolio-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  deploy:
    if: github.event_name == 'push' || github.event.pull_request.head.repo.fork == false
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - uses: actions/checkout@v6
      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: 1.3.14
      - run: bun install --frozen-lockfile
      - run: bunx puppeteer browsers install
      - run: bun run build
      - name: Deploy production
        if: github.event_name == 'push' && github.ref == 'refs/heads/core'
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy
      - name: Upload pull-request preview
        if: github.event_name == 'pull_request'
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: versions upload --preview-alias pr-${{ github.event.pull_request.number }}
```

- [ ] **Step 2: Create and add the dedicated CI credential**

In Cloudflare, create a new API token from the **Edit Cloudflare Workers** custom template. Scope it to the account hosting `abhipraya-portfolio` and the `abhipraya.dev` zone only. In the GitHub repository, add its value as `CLOUDFLARE_API_TOKEN` and add the account ID as `CLOUDFLARE_ACCOUNT_ID`.

Do not reuse any local OAuth or DNS-inventory credential. Do not paste the token in a terminal, source file, issue, pull request, or chat.

- [ ] **Step 3: Commit and push the workflow**

```bash
git add .github/workflows/deploy-cloudflare.yml
git commit -m "ci: deploy portfolio to Cloudflare Workers"
git push -u origin absolutepraya/issue-13-cloudflare-migration
```

- [ ] **Step 4: Verify a trusted pull-request preview**

Open a pull request from `absolutepraya/issue-13-cloudflare-migration` to `core`, then wait for the `Deploy Cloudflare portfolio` check. Open `https://pr-13-abhipraya-portfolio.absolutepraya.workers.dev`. Verify the portfolio loads and `/tracklist-buat-gina` returns a `302`.

Expected: the preview is reachable, production remains unchanged, and the workflow makes no deployment attempt for a forked PR.

### Task 4: Attach production domains after Worker-hostname verification

**Files:**
- Modify: `wrangler.jsonc`

**Interfaces:**
- Consumes: the verified production Worker from Task 3.
- Produces: Cloudflare-managed custom domains for only `abhipraya.dev` and `www.abhipraya.dev`.
- Leaves unchanged: `blog.abhipraya.dev` and every unrelated DNS record.

- [ ] **Step 1: Verify production on the Worker hostname**

Merge the verified workflow and Worker configuration into `core`. Wait for the production job to succeed, then use the Worker URL emitted by Wrangler to verify:

```bash
curl -I https://abhipraya-portfolio.absolutepraya.workers.dev/
curl -I https://abhipraya-portfolio.absolutepraya.workers.dev/tracklist-buat-gina
```

Expected: the homepage is `200`; the vanity path is `302` with the Spotify destination; `abhipraya.dev` still serves the Vercel deployment at this point.

- [ ] **Step 2: Add only the two custom-domain routes**

Add this `routes` array to `wrangler.jsonc` after `preview_urls`:

```jsonc
"routes": [
  {
    "pattern": "abhipraya.dev",
    "custom_domain": true
  },
  {
    "pattern": "www.abhipraya.dev",
    "custom_domain": true
  }
],
```

Cloudflare custom domains make the Worker the origin and manage the matching DNS and TLS records. Do not add a wildcard route or any hostname other than these two.

- [ ] **Step 3: Commit and deploy the cutover**

```bash
git add wrangler.jsonc
git commit -m "feat: route portfolio domains through Cloudflare"
git push
```

Wait for the `core` production deployment to complete before testing the domains.

- [ ] **Step 4: Smoke test the cutover and unaffected blog**

Run:

```bash
curl -I https://abhipraya.dev/
curl -I https://www.abhipraya.dev/
curl -I https://abhipraya.dev/tracklist-buat-gina
curl -I https://blog.abhipraya.dev/
```

Use a browser to verify the rendered homepage and loaded assets on both portfolio domains. Expected: both portfolio domains are `200`, the vanity route is `302`, and the blog still returns its pre-cutover response.

- [ ] **Step 5: Roll back only if smoke testing fails**

Remove the two `routes` entries, commit the reversal, and push to rerun production deployment. Restore only the previously observed Vercel apex A record (`76.76.21.21`) and `www` CNAME to the apex if Cloudflare does not restore them automatically. Do not modify `blog.abhipraya.dev` or any other DNS record.

### Task 5: Retire Vercel configuration after stable production verification

**Files:**
- Modify: `package.json:9-26`
- Delete: `vercel.json`
- Modify: `CLAUDE.md:85-110`

**Interfaces:**
- Consumes: a successfully cut-over and smoke-tested Cloudflare production deployment.
- Produces: a repository with no Vercel deploy script, Vercel config, or Vercel-specific redirect documentation.
- Retains: the `start` local server and the `heroku-prebuild` and `heroku-postbuild` transition scripts until the separately documented Heroku retirement is complete.

- [ ] **Step 1: Remove obsolete Vercel project configuration**

After production has remained healthy through the agreed verification window, delete `vercel.json`. In `package.json`, remove the `deploy` script and remove `vercel` from `knip.ignoreBinaries`. Do not change `dev`, `build`, `check`, `start`, `knip`, or Heroku scripts.

- [ ] **Step 2: Remove Vercel-only text from `CLAUDE.md`**

Ensure the vanity-redirect section describes only generated `public/_redirects` and `dist/serve.json`. Ensure the deployment section describes only Workers Static Assets, GitHub Actions, the two portfolio custom domains, the scoped CI secrets, and the rollback instructions from Task 4.

- [ ] **Step 3: Run full repository verification**

Run:

```bash
bun test scripts/generate-redirects.test.js
bun run check
bun run build
bun run knip
git diff --check
```

Expected: tests, formatting, build, and diff checks pass. `knip` must not report a new unused Vercel binary or deployment dependency.

- [ ] **Step 4: Commit the completed cutover cleanup**

```bash
git add package.json CLAUDE.md scripts/generate-redirects.js public/_redirects scripts/generate-redirects.test.js .github/workflows/deploy-cloudflare.yml wrangler.jsonc
git rm vercel.json
git commit -m "chore: retire Vercel portfolio deployment"
```
