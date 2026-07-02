# AGENTS.md

## Purpose

This repository contains the Docktree marketing and documentation site. It is intentionally separate from the Docktree CLI implementation so the website can be deployed, edited, and reviewed independently.

The site explains what Docktree is for: running Docker Compose stacks across multiple git worktrees without collisions on ports, containers, project names, networks, volumes, or shared service state. It also documents the CLI commands, configuration file, architecture, integrations, and installer flow.

## Important Routes

- `/` — homepage and product overview.
- `/docs/about/overview` — high-level explanation of the problem Docktree solves.
- `/docs/getting-started/installation` — installation instructions.
- `/install.sh` — shell installer endpoint used by `curl -fsSL https://docktree.dev/install.sh | sh`.
- `/install` — extensionless alias for the same shell installer.

## Installer Source of Truth

The installer script lives at:

```txt
installer/install.sh
```

The Astro endpoints below serve that local file with a shell-script content type:

```txt
src/pages/install.sh.ts
src/pages/install.ts
```

Do not make these endpoints read from `../install.sh` or from the Docktree CLI repository. This site should remain self-contained when split into its own GitHub repository.

If the installer changes in the main Docktree CLI repo, copy the updated script into this repository's `installer/install.sh` and verify both local routes:

```sh
curl -I http://localhost:4321/install.sh
curl -fsSL http://localhost:4321/install.sh | sh
```

Use the second command carefully: it executes the installer. For non-executing verification, prefer:

```sh
curl -fsSL http://localhost:4321/install.sh | head
```

## Link Policy

User-facing docs and install snippets should use the canonical production URL:

```sh
curl -fsSL https://docktree.dev/install.sh | sh
```

Do not dynamically construct install URLs from `window.location.origin`. Local development should still serve `http://localhost:4321/install.sh`, but published copy should point at `https://docktree.dev/install.sh`.

## Development Commands

Run commands from this directory:

```sh
npm install
npm run dev
npm run build
npm run preview
```

Before handing off any non-trivial change, run:

```sh
npm run build
```

## Content Guidelines

- Keep copy direct and developer-focused.
- Prefer concrete examples over vague claims.
- Mention Docktree's zero-modification behavior when relevant: it wraps existing Compose files and generates overrides instead of requiring users to edit their compose YAML.
- Keep the overview page focused on the problem, manual workaround limitations, and how Docktree solves them.
- Keep architecture details under `/docs/architecture/design`.
- Keep CLI reference material under `/docs/commands/*`.

## Safety Notes

- Do not print API keys, tokens, or secrets in examples or verification output.
- Do not replace canonical `https://docktree.dev/install.sh` links with localhost URLs in user-facing docs.
- Do not add dynamic installer URL logic unless there is an explicit product decision to stop using the canonical domain.
