import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fetchPortfolioProjects, toPortfolioProject } from '../src/services/project-api.js';
const project = { id: '1', slug: 'example', title: '作品', websiteUrl: 'https://example.com', coverImageUrl: 'https://images.example.com/image.png', isFeatured: true };
test('fetches every API page and maps the public contract to cards', async () => {
  const calls = [];
  const results = await fetchPortfolioProjects('https://api.example.com', 'en', async (url) => {
    calls.push(url);
    return Response.json({ data: [{ ...project, id: url.searchParams.get('page') }], pagination: { totalPages: 2 } });
  });
  assert.equal(results.length, 2);
  assert.equal(calls[1].searchParams.get('page'), '2');
  assert.equal(calls[0].searchParams.get('locale'), 'en');
  assert.equal(results[0].highlight, true);
  assert.equal(results[0].imageAlt, '作品');
});
test('published list can be empty without falling back to legacy cards', async () => {
  assert.deepEqual(await fetchPortfolioProjects('https://api.example.com', 'zh-TW', async () => Response.json({ data: [], pagination: { totalPages: 1 } })), []);
});
test('rejects failed requests, malformed pagination and unsafe card links', async () => {
  await assert.rejects(fetchPortfolioProjects('https://api.example.com', 'en', async () => new Response('', { status: 500 })));
  await assert.rejects(fetchPortfolioProjects('https://api.example.com', 'en', async () => Response.json({ data: [], pagination: { totalPages: 0 } })));
  assert.throws(() => toPortfolioProject({ ...project, websiteUrl: 'javascript:alert(1)' }));
});
