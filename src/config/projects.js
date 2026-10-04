import snapshot from './projects.snapshot.json';

export function getProjects(locale = 'zh-TW') {
  return snapshot[locale] ?? [];
}
