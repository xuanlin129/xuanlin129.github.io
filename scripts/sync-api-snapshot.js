import { writeFile } from 'node:fs/promises';

export async function syncApiSnapshot({ baseUrl, fetchRecords, destination, label }) {
  if (!baseUrl?.trim()) {
    throw new Error(`未設定 VITE_API_BASE_URL，無法同步${label}。請設定 API 後重新執行。`);
  }

  const locales = ['zh-TW', 'en'];
  const results = await Promise.all(locales.map((locale) => fetchRecords(baseUrl, locale)));
  const snapshot = Object.fromEntries(locales.map((locale, index) => [locale, results[index]]));
  await writeFile(destination, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`已取得${label}快照：${results[0].length} 筆。`);
}
