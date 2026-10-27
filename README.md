# Abdallah Hwishel — Portfolio

Personal portfolio built with Astro 7. Interactive e-resume, markdown blog, and a
filterable project showcase. Static output, zero backend, free hosting.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
```

## Docs

- `PLAN.md` — full implementation plan, site map, how to write posts, deploy guide,
  and the pre-launch TODO list
- `src/data/profile.ts` — contact info and socials (edit before deploying)
- `src/data/skills.ts` — skill categories and levels
- `src/content/blog/` — add a `.md` file here to publish a post
- `src/content/projects/` — project entries; each gets a page at `/projects/<file-name>/`

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Create a public repo on GitHub. Name it `<your-username>.github.io` to serve the
   site at `https://<your-username>.github.io/`; any other name (e.g. `portfolio`)
   serves it at `https://<your-username>.github.io/portfolio/`. The workflow detects
   which and sets Astro's `base` for you.
2. Push this project to it.
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Watch the **Actions** tab; the first deploy takes about a minute.

Internal links must go through `url()` from `src/lib/url.ts` (never a bare `"/path"`),
or they break when the site is served under `/<repo>/`.

To test the GitHub Pages build locally under a sub-path:

```bash
BASE_PATH=/portfolio npm run build && BASE_PATH=/portfolio npm run preview
```
