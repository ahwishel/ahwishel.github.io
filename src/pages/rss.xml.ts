import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { profile } from '../data/profile';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: `${profile.name} — Blog`,
    description: `Writing on agentic AI, LLM systems, and software engineering by ${profile.name}.`,
    site: context.site ?? 'https://ahwishel.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: url(`/blog/${post.id}/`),
    })),
    customData: '<language>en-us</language>',
  });
}
