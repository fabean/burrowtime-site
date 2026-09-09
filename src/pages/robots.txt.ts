import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://fabean.github.io/BurrowTime/');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', root)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
