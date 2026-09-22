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
| `npm run check`   | Type-check the project                       |

## Project structure

```
public/               Static assets served as-is (favicon, images)
src/pages/            Each file becomes a route
src/layouts/          BaseLayout.astro — the shell every page uses
src/components/       Header and Footer
src/data/site.ts      Club name, email, meeting time, social links
src/data/officers.ts  Officer roster
src/content/events/   One Markdown file per event
src/content.config.ts Schema for the events collection
src/lib/url.ts        withBase() — required for every internal link
src/styles/global.css Colors, typography, shared classes
```

## Editing content

Most updates do not require touching a component.

**Club details** (email, meeting time, social links) live in
`src/data/site.ts`. Anything marked `TODO` is a placeholder.

**Officers** live in `src/data/officers.ts`. The placeholder notice on the
officers page disappears automatically once no name starts with `TODO`.

**Events** are Markdown files in `src/content/events/`. Copy
`example-event.md`, fill in the frontmatter, and delete the example:

```yaml
---
title: 'Intro to Prompting'
date: 2026-10-09T17:30:00-07:00
location: 'TBE B-172'
summary: 'A one-line description used in event listings.'
draft: false
---
```

Events sort themselves into Upcoming and Past based on `date`, and the three
soonest appear on the home page. Set `draft: true` to hide one without
deleting the file.

## Contributing

1. Create a branch for your change.
2. Run `npm run check` and `npm run build` to confirm the site is clean.
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
