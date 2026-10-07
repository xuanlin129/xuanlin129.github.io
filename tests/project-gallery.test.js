import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import { createServer } from 'vite';

let server;
let ProjectGallery;
let createI18n;

before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  ProjectGallery = (await server.ssrLoadModule('/src/components/ProjectGallery.js')).default;
  createI18n = (await server.ssrLoadModule('/src/plugins/i18n.js')).createI18n;
});
after(async () => { await server?.close(); });

async function renderGallery(images, locale = 'zh-TW') {
  return renderToStaticMarkup(createElement(I18nextProvider, { i18n: await createI18n(locale) },
    createElement(ProjectGallery, { images })));
}

test('empty and legacy galleries produce no section', async () => {
  assert.equal(await renderGallery([]), '');
  assert.equal(await renderGallery(undefined), '');
});

test('gallery SSR preserves order with lazy images, empty alt text and accessible preview buttons', async () => {
  const images = [{ id: 'second', url: 'https://images.example.com/second.webp' }, { id: 'first', url: 'https://images.example.com/first.webp' }];
  const html = await renderGallery(images);
  assert.match(html, /作品圖集/);
  assert.ok(html.indexOf(images[0].url) < html.indexOf(images[1].url));
  assert.equal((html.match(/alt=""/g) ?? []).length, 2);
  assert.equal((html.match(/loading="lazy"/g) ?? []).length, 2);
  assert.match(html, /aria-label="放大圖片 1"/);
  assert.match(html, /aria-label="放大圖片 2"/);
  assert.doesNotMatch(html, /<figcaption/);
  assert.match(await renderGallery(images, 'en'), /aria-label="Enlarge image 1"/);
});
