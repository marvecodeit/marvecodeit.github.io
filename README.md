# AirLink website

The official website for **AirLink**, a native macOS captive portal assistant by
[marvecodeit](https://github.com/marvecodeit).

**Live site:** <https://marvecodeit.github.io/airlink/>

## About this repository

This repository contains only the marketing website. It does not contain the
desktop application, and it does not change the application's release workflow.

GitHub repository names are case-insensitive, so a new `airlink` repository
cannot be created while the desktop app's [`AirLink`](https://github.com/marvecodeit/AirLink)
repository exists. A GitHub user-site repository
(`marvecodeit.github.io`) is used to publish this project at the required
`/airlink/` path without touching the app repository.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React
- GitHub Pages through GitHub Actions

Vite's `base` is set to `/airlink/` so all generated asset URLs work under the
GitHub Pages project path.

## Local development

```bash
npm install
npm run dev
```

The dev server uses the same `/airlink/` base path as production.

## Build and preview

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. The preview server serves it at
<http://localhost:4173/airlink/> by default.

## Project structure

```text
src/
  components/        Page sections and UI
  hooks/             Appearance preference hook
  lib/               Shared constants and helpers
  App.tsx            Page composition
  index.css          Tailwind theme, brand tokens, and base styles
public/              Icons, app preview images, OG image, manifest, robots
deploy/              Root redirect and 404 page copied into the Pages artifact
.github/workflows/   GitHub Pages deployment workflow
assets-source/       Original app screenshot used to produce optimized previews
tools/               OG image source
```

## Deployment

The workflow is [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
It runs on every push to `main` and can also be started manually from the
Actions tab. It:

1. Installs dependencies with `npm ci`.
2. Runs the production build.
3. Verifies the base path and required assets in `dist/`.
4. Copies the build into an `airlink/` folder inside the Pages artifact.
5. Adds a root redirect and a 404 page.
6. Publishes the artifact with the official GitHub Pages Actions.

### Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy AirLink website** workflow manually).
5. The site is published at <https://marvecodeit.github.io/airlink/>.

The repository must be public for GitHub Pages on the free plan.

## Content accuracy

Product copy is based on the AirLink desktop app's README and public behavior:

- macOS 12 Monterey or later.
- Captive portal detection with HTTP interception probes and separate HTTPS
  internet probes.
- Integrated WKWebView authentication browser.
- Fresh HTTPS verification over the Mac's own network path.
- Background connection monitoring and native macOS notifications.
- Signed automatic updates through the Tauri updater.
- Local-only operation: no account, cloud backend, analytics, or telemetry.

The download buttons point to the real GitHub Releases page for the desktop app:

<https://github.com/marvecodeit/airlink/releases/latest>

No download filenames or CPU architectures are claimed on the site.

## Branding

The AirLink icon and colour tokens are taken from the desktop application:

- Brand green: `#16833b` (light), `#44c173` (dark)
- Canvas: `#f6f8fa` (light), `#0a110d` (dark)
- Ink: `#10231a` (light), `#eaf2ec` (dark)

The website uses the same macOS system font stack as the app and supports a
light/dark appearance toggle that is remembered in `localStorage`.

## Privacy of the website

The website has no analytics, cookies, or third-party tracking. It stores only
the visitor's appearance preference in `localStorage`.

## What this repository does not include

- No application signing keys, certificates, tokens, or credentials.
- No changes to the desktop app's release workflow.
- No fabricated testimonials, usage statistics, or download counts.
