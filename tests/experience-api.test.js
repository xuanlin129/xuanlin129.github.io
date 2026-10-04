import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fetchAboutExperiences, toAboutExperience } from '../src/services/experience-api.js';
const experience = {
  id: '1', startMonth: '2025-07', endMonth: null, company: '公司', jobTitle: '前端工程師', summary: '簡介',
  highlights: [{ id: 'highlight-1', title: '成果', content: '說明' }],
};
test('maps localized dates and stable experience and highlight IDs', () => {
  const chinese = toAboutExperience(experience, 'zh-TW');
  assert.equal(chinese.time, '2025.07 - 至今');
  assert.equal(toAboutExperience(experience, 'en').time, '2025.07 - Present');
  assert.equal(toAboutExperience({ ...experience, endMonth: '2026-01' }, 'zh-TW').time, '2025.07 - 2026.01');
  assert.equal(chinese.id, '1');
  assert.equal(chinese.list[0].id, 'highlight-1');
});
test('fetches all pages and presents oldest first with stable tie ordering', async () => {
  const calls = [];
  const result = await fetchAboutExperiences('https://api.example.com', 'en', async (url) => {
    calls.push(url);
    const data = url.searchParams.get('page') === '1' ? [experience, { ...experience, id: '2' }]
      : [{ ...experience, id: 'old', startMonth: '2021-07', endMonth: '2022-06' }];
    return Response.json({ data, pagination: { totalPages: 2 } });
  });
  assert.deepEqual(result.map((item) => item.id), ['old', '1', '2']);
  assert.equal(calls[1].searchParams.get('page'), '2');
  assert.equal(calls[0].searchParams.get('locale'), 'en');
});
test('an empty public list stays empty', async () => {
  assert.deepEqual(await fetchAboutExperiences('https://api.example.com', 'zh-TW', async () => Response.json({ data: [], pagination: { totalPages: 1 } })), []);
});
test('rejects failed requests, unsafe endpoints, malformed dates and response shapes', async () => {
  await assert.rejects(fetchAboutExperiences('file:///tmp/test', 'en'));
  await assert.rejects(fetchAboutExperiences('https://api.example.com', 'en', async () => new Response('', { status: 500 })));
  await assert.rejects(fetchAboutExperiences('https://api.example.com', 'en', async () => Response.json({ data: [], pagination: { totalPages: 0 } })));
  for (const patch of [{ startMonth: '2025-13' }, { endMonth: '2025-06' }, { endMonth: undefined }, { highlights: [null] }, { company: 1 }]) {
    assert.throws(() => toAboutExperience({ ...experience, ...patch }, 'en'));
  }
});
