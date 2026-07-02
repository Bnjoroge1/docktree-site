# Docktree Site

This repository contains the Docktree marketing and documentation site.

Docktree helps developers run Docker Compose stacks across multiple git worktrees without collisions on ports, containers, project names, networks, volumes, or shared service state.

## Links

- Live site: https://docktree.dev
- Documentation: https://docktree.dev/docs
- Overview: https://docktree.dev/docs/about/overview
- Installation guide: https://docktree.dev/docs/getting-started/installation
- Docktree CLI repository: https://github.com/Bnjoroge1/Docktree

## Routes

- `/` — homepage and product overview
- `/docs/about/overview` — high-level problem and solution overview
- `/docs/getting-started/installation` — installation instructions
- `/install.sh` — shell installer endpoint
- `/install` — extensionless alias for the installer

## Installer

The local installer source is:

```txt
installer/install.sh
```

The Astro endpoints in `src/pages/install.sh.ts` and `src/pages/install.ts` serve that script with a shell-script content type.

Public install snippets should use the canonical production URL:

```sh
curl -fsSL https://docktree.dev/install.sh | sh
```

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

Requires Node.js `>=22.12.0`.

## Verification

Before shipping changes, run:

```sh
npm run build
```

To verify the local installer route while the dev server is running:

```sh
curl -I http://localhost:4321/install.sh
curl -fsSL http://localhost:4321/install.sh | head
```
