# hypesiege.github.io

The public Astro marketing site for **HypeSiege**.

Deterministic campaign scheduling, approvals, queues, and delivery state.

## Development

Use Node.js 22.22.1 or newer.

```sh
npm ci
npm run dev
npm run build
```

Astro writes the production site to `dist/`. The committed GitHub Actions workflow builds pull requests and deploys the default branch to GitHub Pages.

The landing page includes the reviewed anonymous ORES Chat footer component
(`ores-chat-footer-link`) from the versioned `ores-chat.github.io` distribution.
It opens the public, site-scoped chat context without browser credentials. The
page CSP permits only that component origin and same-origin connections; an
authenticated customer or administrator chat must use its separate product
surface and API.

## Content standard

Public claims must remain traceable to the organization's repositories, documentation, or planning context. Do not publish credentials, customer data, private operational details, or unreviewed legal language from this public repository.
