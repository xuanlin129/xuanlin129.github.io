import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { render } from '../dist/server/entry-server.js';
import { renderDocument } from '../scripts/html.js';

const pages = [
  ['/', 'Xuan Lin', '前端工程師 / 網頁設計師'],
  ['/about', '個人簡介 - Xuan Lin', '關於我'],
  ['/portfolio', '作品集 - Xuan Lin', 'Dutchie'],
  ['/contact', '聯絡我 - Xuan Lin', '聯絡我'],
];

for (const [path, title, content] of pages) {
  test(`SSR renders content, title and styles for ${path}`, async () => {
    const result = await render(path);
    assert.equal(result.status, 200);
    assert.ok(result.html.includes(content));
    assert.ok(result.head.includes(`>${title}</title>`));
    assert.ok(result.styles.includes('data-styled'));
    assert.ok(result.styles.includes('data-css-hash'));
    assert.doesNotMatch(result.html + result.styles, /file:\/\/|\/Users\//);
  });
}

test('SSR returns a rendered 404 for unknown URLs', async () => {
  const result = await render('/unknown-page?from=test');
  assert.equal(result.status, 404);
  assert.match(result.html, /<h1>404<\/h1>/);
});

test('concurrent SSR requests keep their page titles isolated', async () => {
  const results = await Promise.all(pages.map(([path]) => render(path)));
  results.forEach((result, index) => {
    assert.ok(result.head.includes(`>${pages[index][1]}</title>`));
  });
});

test('HTML insertion preserves literal replacement characters', () => {
  const template = '<title>Old</title><!--ssr-head--><div><!--ssr-outlet--></div>';
  const result = renderDocument(template, { html: '$&', head: '<title>$&</title>', styles: '$&' });
  assert.equal(result, '<title>$&</title>$&<div>$&</div>');
});

test('GitHub Pages output contains each page and uses client assets', async () => {
  for (const [path, title] of [...pages, ['/404', '找不到頁面 - Xuan Lin']]) {
    const destination = path === '/404' ? '404.html' : `${path.slice(1)}${path === '/' ? '' : '/'}index.html`;
    const html = await readFile(new URL(`../dist/client/${destination}`, import.meta.url), 'utf8');
    assert.ok(html.includes(title));
    assert.doesNotMatch(html, /<!--ssr-outlet-->|<!--ssr-head-->/);
    assert.match(html, /src="\/assets\/.*\.js"/);
  }
});
