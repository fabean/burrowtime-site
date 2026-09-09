// @ts-check
import sitemap from '@astrojs/sitemap';
import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'astro/config';

const publicUrl = process.env.SITE_URL ?? 'https://fabean.github.io/burrowtime-site/';
const publicPath = new URL(publicUrl).pathname.replace(/\/$/, '');
const isSitesBuild = process.env.OPENAI_SITES === '1';

export default defineConfig({
  site: publicUrl,
  base: publicPath || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: isSitesBuild ? [sites()] : [],
  },
});
