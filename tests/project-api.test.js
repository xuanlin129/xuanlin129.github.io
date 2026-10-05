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

test('preserves summary metadata and accepts projects published before the extension', () => {
  const legacy = toPortfolioProject(project);
  assert.equal(legacy.projectYear, null);
  assert.deepEqual(legacy.taskTags, []);
  const details = toPortfolioProject({ ...project, summary: '說明', projectType: 'personal', projectYear: 2024, taskTags: ['介面設計'] });
  assert.equal(details.summary, '說明');
  assert.equal(details.projectYear, 2024);
  assert.equal(details.path, project.websiteUrl);
  for (const fields of [{ slug: '../invalid' }, { projectYear: 2024.5 }, { projectType: 'invalid' }, { taskTags: [null] }]) {
    assert.throws(() => toPortfolioProject({ ...project, ...fields }));
  }
});

test('detail requests distinguish missing projects, failures, and mismatched records', async () => {
  const { fetchProjectDetails } = await import('../src/services/project-api.js');
  const result = await fetchProjectDetails('https://api.example.com', 'example', 'en', async (url) => {
    assert.equal(url.pathname, '/api/projects/example');
    assert.equal(url.searchParams.get('locale'), 'en');
    return Response.json({ data: project });
  });
  assert.equal(result.slug, 'example');
  assert.equal(await fetchProjectDetails('https://api.example.com', 'example', 'en', async () => new Response(null, { status: 404 })), null);
  await assert.rejects(fetchProjectDetails('https://api.example.com', 'example', 'en', async () => new Response(null, { status: 500 })));
  await assert.rejects(fetchProjectDetails('https://api.example.com', 'other', 'en', async () => Response.json({ data: project })));
});
