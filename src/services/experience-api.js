const monthPattern = /^[1-9]\d{3}-(0[1-9]|1[0-2])$/;

export function toAboutExperience(experience, locale) {
  if (!experience || typeof experience.id !== 'string' || !monthPattern.test(experience.startMonth)
    || (experience.endMonth !== null && (!monthPattern.test(experience.endMonth) || experience.endMonth < experience.startMonth))
    || !['company', 'jobTitle', 'summary'].every((key) => typeof experience[key] === 'string')
    || !Array.isArray(experience.highlights)
    || !experience.highlights.every((item) => item && ['id', 'title', 'content'].every((key) => typeof item[key] === 'string'))) {
    throw new Error('經歷 API 回傳格式不正確');
  }
  const end = experience.endMonth?.replace('-', '.') ?? (locale === 'en' ? 'Present' : '至今');
  return {
    id: experience.id,
    startMonth: experience.startMonth,
    time: `${experience.startMonth.replace('-', '.')} - ${end}`,
    company: experience.company,
    job: experience.jobTitle,
    desc: experience.summary,
    list: experience.highlights,
  };
}
export async function fetchAboutExperiences(baseUrl, locale, fetcher = fetch) {
  const base = new URL(baseUrl);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('經歷 API 網址必須使用 HTTP 或 HTTPS');
  const experiences = [];
  let totalPages = 1;
  for (let page = 1; page <= totalPages; page += 1) {
    const url = new URL('/api/experiences', base);
    url.search = new URLSearchParams({ locale, page: String(page), pageSize: '100' }).toString();
    const response = await fetcher(url, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`經歷 API 讀取失敗：${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.data) || !Number.isSafeInteger(payload.pagination?.totalPages)
      || payload.pagination.totalPages < 1 || payload.pagination.totalPages > 10000) {
      throw new Error('經歷 API 分頁格式不正確');
    }
    totalPages = payload.pagination.totalPages;
    experiences.push(...payload.data.map((experience) => toAboutExperience(experience, locale)));
  }
  return experiences.sort((left, right) => left.startMonth.localeCompare(right.startMonth) || left.id.localeCompare(right.id));
}
