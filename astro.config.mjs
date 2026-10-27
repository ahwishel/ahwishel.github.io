// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are set by .github/workflows/deploy.yml from the repo name:
//   <user>.github.io repo -> https://<user>.github.io/          base "/"
//   any other repo        -> https://<user>.github.io/<repo>/   base "/<repo>"
// Locally both fall back to the root so `astro dev` behaves as before.
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://ahwishel.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
