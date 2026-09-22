# UNLV AI Club

Website for the AI club at the University of Nevada, Las Vegas.

Built with [Astro](https://astro.build).

## Getting started

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
public/          Static assets served as-is (favicon, images)
src/pages/       Each file becomes a route
astro.config.mjs Astro configuration
```

## Contributing

1. Create a branch for your change.
2. Run `npm run build` to confirm the site still builds.
3. Open a pull request.

## Deployment

The site deploys to GitHub Pages automatically on every push to `main`, via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Live at: https://robertlaws-unlv-wads.github.io/unlv-ai-club/

Because it is a project site, all pages live under the `/unlv-ai-club` base
path. Use Astro's `base` when writing links so they work in both dev and
production:

```astro
---
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---
<a href={`${base}/events`}>Events</a>
```

If the club moves to a custom domain, set `site` to that domain in
`astro.config.mjs`, delete the `base` option, and add a `public/CNAME` file
containing the domain.
