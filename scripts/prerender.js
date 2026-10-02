import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { render, prerenderPaths } from '../dist/server/entry-server.js';
import { renderDocument } from './html.js';

const output = new URL('../dist/client/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');

await writeFile(new URL('../dist/server/index.html', import.meta.url), template);

for (const path of [...prerenderPaths, '/404']) {
  const result = await render(path);
  const destination = path === '/404' ? '404.html' : `${path.slice(1)}${path === '/' ? '' : '/'}index.html`;
  const file = new URL(destination, output);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, renderDocument(template, result));
  console.log(`Pre-rendered ${path}`);
}
