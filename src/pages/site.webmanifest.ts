import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site?.pathname ?? '/BurrowTime/';
  const manifest = {
    name: 'BurrowTime',
    short_name: 'BurrowTime',
    description: 'Local time tracking for developers and coding agents.',
    start_url: base,
    scope: base,
    display: 'standalone',
    background_color: '#fffdf8',
    theme_color: '#16382b',
    icons: [
      {
        src: `${base}burrowtime-mascot.png`,
        sizes: '1254x1254',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
