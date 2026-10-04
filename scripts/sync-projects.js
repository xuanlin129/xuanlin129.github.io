import { writeFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { fetchPortfolioProjects } from '../src/services/project-api.js';

const mode = process.argv.includes('--development') ? 'development' : 'production';
const environment = loadEnv(mode, process.cwd(), 'VITE_');
const baseUrl = environment.VITE_API_BASE_URL;
const snapshot = {};
if (baseUrl) {
  const results = await Promise.all(['zh-TW', 'en'].map((locale) => fetchPortfolioProjects(baseUrl, locale)));
  snapshot['zh-TW'] = results[0];
  snapshot.en = results[1];
  console.log(`已取得作品快照：${results[0].length} 個作品。`);
} else {
  console.log('未設定作品 API，沿用現有本機作品資料。');
}
await writeFile(new URL('../src/config/projects.snapshot.json', import.meta.url), `${JSON.stringify(snapshot, null, 2)}\n`);
