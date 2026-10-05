import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { render, prerenderPaths } from '../dist/server/entry-server.js';
import { renderDocument } from './html.js';
import { site } from '../src/config/site.js';

const output = new URL('../dist/client/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');

await writeFile(new URL('../dist/server/index.html', import.meta.url), template);

for (const path of [...prerenderPaths, '/404']) {
  const result = await render(path);
  const destination = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
  const file = new URL(destination, output);
  const html = renderDocument(template, result);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, html);

  console.log(`Pre-rendered ${path}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderPaths.map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(new URL('sitemap.xml', output), sitemap);
