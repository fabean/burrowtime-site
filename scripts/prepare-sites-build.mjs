import { cp, mkdir, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(siteRoot, 'dist');
const clientRoot = path.join(outputRoot, 'client');
const serverRoot = path.join(outputRoot, 'server');
const reserved = new Set(['.openai', 'client', 'server']);
const outputEntries = await readdir(outputRoot, { withFileTypes: true });

await mkdir(clientRoot, { recursive: true });
for (const entry of outputEntries) {
  if (reserved.has(entry.name)) continue;
  await cp(path.join(outputRoot, entry.name), path.join(clientRoot, entry.name), {
    recursive: entry.isDirectory(),
  });
}

await mkdir(serverRoot, { recursive: true });
await writeFile(
  path.join(serverRoot, 'index.js'),
  `export default {
  fetch(request, env) {
    if (!env.ASSETS) {
      return new Response('Static asset binding unavailable.', { status: 500 });
    }
    return env.ASSETS.fetch(request);
  },
};
`,
);
