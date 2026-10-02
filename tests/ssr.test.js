import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { test } from 'node:test';
import { render } from '../dist/server/entry-server.js';
import { renderDocument } from '../scripts/html.js';

const pages = [
  ['/', '林子軒 Xuan Lin｜前端工程師・網頁設計與網頁開發', '前端工程師 / 網頁設計 / 網頁開發'],
  ['/about', '個人簡介｜林子軒 Xuan Lin・前端工程師', '關於我'],
  ['/portfolio', '作品集｜林子軒 Xuan Lin', 'Dutchie'],
  ['/contact', '聯絡我｜林子軒 Xuan Lin・專案合作與面試邀約', '聯絡我'],
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
    const destination = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
    const html = await readFile(new URL(`../dist/client/${destination}`, import.meta.url), 'utf8');
    assert.ok(html.includes(title));
    assert.doesNotMatch(html, /<!--ssr-outlet-->|<!--ssr-head-->/);
    assert.match(html, /src="\/assets\/.*\.js"/);
  }
});

test('static output uses HTML files without legacy directory pages', async () => {
  for (const path of ['/about', '/portfolio', '/contact']) {
    await assert.rejects(
      stat(new URL(`../dist/client${path}/index.html`, import.meta.url)),
      { code: 'ENOENT' },
    );
  }
  const sitemap = await readFile(new URL('../dist/client/sitemap.xml', import.meta.url), 'utf8');
  assert.doesNotMatch(sitemap, /\/(about|portfolio|contact)\/<\/loc>/);
});

for (const [path] of pages) {
  test(`static HTML exposes crawlable SEO metadata and content for ${path}`, async () => {
    const destination = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
    const html = await readFile(new URL(`../dist/client/${destination}`, import.meta.url), 'utf8');
    const canonical = `https://xuanlin129.github.io${path}`;
    assert.equal((html.match(/name="description"/g) ?? []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.ok(html.includes(`href="${canonical}"`));
    assert.match(html, /property="og:image" content="https:\/\/xuanlin129.github.io\/preview.png"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    for (const link of ['/about', '/portfolio', '/contact']) {
      assert.ok(html.includes(`href="${link}"`));
    }
    const script = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    assert.ok(script);
    const data = JSON.parse(script[1]);
    const person = data['@graph'].find((item) => item['@type'] === 'Person');
    assert.equal(person.name, '林子軒');
    assert.deepEqual(person.sameAs, ['https://github.com/xuanlin129']);
    if (path === '/about') {
      const profile = data['@graph'].find((item) => item['@type'] === 'ProfilePage');
      assert.equal(profile.mainEntity['@id'], person['@id']);
    }
    if (path === '/portfolio') {
      const list = data['@graph'].find((item) => item['@type'] === 'ItemList');
      assert.equal(list.itemListElement.length, 5);
      list.itemListElement.forEach((project) => assert.ok(html.includes(project.name)));
    }
  });
}

test('canonical excludes tracking parameters', async () => {
  const result = await render('/about/?utm_source=test');
  assert.match(result.head, /rel="canonical" href="https:\/\/xuanlin129.github.io\/about"/);
  assert.doesNotMatch(result.head, /utm_source/);
});

test('static 404 is noindex and remains crawlable so the directive can be read', async () => {
  const html = await readFile(new URL('../dist/client/404.html', import.meta.url), 'utf8');
  const robots = await readFile(new URL('../dist/client/robots.txt', import.meta.url), 'utf8');
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(html, /rel="canonical"|application\/ld\+json/);
  assert.doesNotMatch(robots, /Disallow: \/404/);
});
