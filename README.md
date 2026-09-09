# BurrowTime site

This Astro project contains the BurrowTime product site and documentation. It
builds as a static site for GitHub Pages and has its own Git repository,
separate from the [BurrowTime CLI](https://github.com/fabean/BurrowTime).

```bash
npm ci
npm run dev
npm run check
npm run build
```

The default public URL is `https://fabean.github.io/burrowtime-site/`. Set
`SITE_URL` to build for another origin or base path:

```bash
SITE_URL=https://burrowtime.example/ npm run build
```

`npm run build:sites` creates the worker-shaped artifact used by the private
OpenAI Sites preview. The normal build remains a plain static GitHub Pages
artifact.

Pages live in `src/pages/`, shared layouts in `src/layouts/`, and global styles
in `src/styles/global.css`. The terminal recordings are generated from the VHS
tapes in the CLI repository's `docs/vhs/` directory. Run `make demos` there,
then copy the three `assets/burrowtime-*.gif` recordings into this project's
`public/` directory. This site builds independently of the CLI checkout.

The site does not use analytics, cookies, client frameworks, or third-party
font requests.
