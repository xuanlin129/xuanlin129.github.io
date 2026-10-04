import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { syncApiSnapshot } from '../scripts/sync-api-snapshot.js';

async function createSnapshot(t) {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-snapshot-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const destination = join(directory, 'snapshot.json');
  const previousContent = '{"zh-TW":[{"id":"previous"}],"en":[]}\n';
  await writeFile(destination, previousContent);
  return { destination, previousContent };
}

test('missing API configuration rejects without fetching or clearing the snapshot', async (t) => {
  const { destination, previousContent } = await createSnapshot(t);
  for (const baseUrl of [undefined, '', '   ']) {
    await assert.rejects(syncApiSnapshot({
      baseUrl, destination, label: '作品',
      fetchRecords: () => assert.fail('Missing configuration must not fetch'),
    }), /VITE_API_BASE_URL/);
    assert.equal(await readFile(destination, 'utf8'), previousContent);
  }
});

test('failure in either locale preserves the previous complete snapshot', async (t) => {
  const { destination, previousContent } = await createSnapshot(t);
  await assert.rejects(syncApiSnapshot({
    baseUrl: 'https://api.example.com', destination, label: '經歷',
    fetchRecords: async (_baseUrl, locale) => {
      if (locale === 'en') throw new Error('API unavailable');
      return [{ id: 'updated' }];
    },
  }), /API unavailable/);
  assert.equal(await readFile(destination, 'utf8'), previousContent);
});

test('successful sync replaces both locales and preserves an empty published list', async (t) => {
  const { destination } = await createSnapshot(t);
  await syncApiSnapshot({
    baseUrl: 'https://api.example.com', destination, label: '作品',
    fetchRecords: async (_baseUrl, locale) => locale === 'en' ? [] : [{ id: 'published' }],
  });
  assert.deepEqual(JSON.parse(await readFile(destination, 'utf8')), {
    'zh-TW': [{ id: 'published' }], en: [],
  });
});
