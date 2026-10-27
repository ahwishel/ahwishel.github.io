# Portfolio Website — Implementation Plan & Guide

Astro 7 static portfolio for Abdallah Hwishel. Zero backend, markdown blog, interactive e-resume.
Deploys free on Cloudflare Pages, Netlify, or Vercel.

## Goal

A portfolio that showcases skills better than a resume can: an interactive e-resume with
animated skill bars and expandable experience, a markdown blog for writing, and a
filterable project showcase. All content truthful to the real resume.

## Tech stack

- Astro 7 (static output, no JS framework)
- Content collections (astro:content) for blog + projects
- @astrojs/sitemap + @astrojs/rss
- Vanilla CSS (dark-first, light-mode toggle), zero CSS frameworks
- Vanilla TS in <script> blocks for interactivity (no React islands needed)

## Site map

| Route | What it is |
|---|---|
| `/` | Hero, skills, featured work, latest posts, contact |
| `/projects` | All projects with category filter chips (AI/Agents, Backend, Full Stack, Platform) |
| `/blog` | Post index from `src/content/blog/*.md` |
| `/blog/[slug]` | Rendered post with prose styles |
| `/resume` | Interactive e-resume: skill bars animate on scroll, experience in accordion, Save-as-PDF button with print stylesheet |
| `/rss.xml` | RSS feed of blog posts |
| `/resume.pdf` | The real resume PDF (copy of `~/Downloads/Abdallah Hwishel Resume - 2026.pdf`) |
| `/sitemap-index.xml` | Auto-generated |

## Project structure

```
portfolio/
├── astro.config.mjs          # site URL + sitemap
├── public/
│   ├── favicon.svg           # "AH" monogram
│   └── resume.pdf            # real resume (for download button)
└── src/
    ├── content.config.ts     # blog + projects schemas
    ├── content/
    │   ├── blog/             # 3 posts — add a .md here to publish
    │   └── projects/         # 6 projects
    ├── data/
    │   ├── profile.ts        # name, email, phone, socials — EDIT THIS
    │   ├── skills.ts         # skill categories + levels (1-5)
    │   └── experience.ts     # resume bullets verbatim
    ├── layouts/BaseLayout.astro
    ├── components/           # Nav, Footer, Hero, SkillBar, Timeline, ProjectCard, BlogCard
    ├── pages/                # index, projects, blog, blog/[slug], resume, rss.xml, 404
    └── styles/global.css     # design system
```

## How to run

```bash
cd ~/portfolio
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build locally
```

## How to write a blog post

Drop a file in `src/content/blog/`, e.g. `my-new-post.md`:

```markdown
---
title: "Post title"
description: "One-sentence summary shown on the index and in RSS."
pubDate: 2026-08-20
tags: ["AI", "Backend"]
---

Body in markdown. Code blocks are styled automatically.
```

It appears on `/blog` and in `/rss.xml` automatically. No rebuild config needed.

## How to deploy (free)

1. Edit `astro.config.mjs` and replace the `site` URL with your real domain.
2. Push to a GitHub repo.
3. Cloudflare Pages or Netlify: connect the repo, build command `npm run build`,
   output directory `dist`. Both are free and handle the static output natively.

## TODO before going live

- [ ] Replace placeholder LinkedIn URL in `src/data/profile.ts`
- [ ] Replace placeholder GitHub URL in `src/data/profile.ts` (currently `abdallahratib`,
      guessed from the macOS username — confirm it's your real handle)
- [ ] Replace `site` URL in `astro.config.mjs`
- [ ] Confirm email: site uses `4hwishel@gmail.com` (per profile correction);
      resume.pdf still shows the older `hwishela@gmail.com`
- [ ] Write more blog posts; adjust skill levels in `src/data/skills.ts` if needed

## Truthfulness notes

- All experience bullets are copied verbatim from the resume PDF.
- Skill levels are honest self-assessments (1-5); tweak in `src/data/skills.ts`.
- Project entries describe only work verified in the resume or session history:
  SellAnyCar AI chat (OpenRouter), ElevenLabs voice agents (on the telephony system —
  never claims to have built the telephony itself), BuyAnyCar platform APIs, PMG
  Bedrock/LangChain apps, ESSIC dashboard, Meerkat (real Laravel/Sail side project).
