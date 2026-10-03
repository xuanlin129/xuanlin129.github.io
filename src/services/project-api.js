export function toPortfolioProject(project) {
  if (!project || typeof project.id !== 'string' || typeof project.slug !== 'string' || typeof project.title !== 'string') {
    throw new Error('作品 API 回傳格式不正確');
  }
  for (const value of [project.websiteUrl, project.coverImageUrl]) {
    if (typeof value !== 'string' || !['http:', 'https:'].includes(new URL(value).protocol)) {
      throw new Error('作品 API 回傳的網址不正確');
    }
  }
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    path: project.websiteUrl,
    image: project.coverImageUrl,
    imageAlt: project.coverImageAlt || project.title,
    highlight: project.isFeatured === true,
  };
}

export async function fetchPortfolioProjects(baseUrl, locale, fetcher = fetch) {
  const base = new URL(baseUrl);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('作品 API 網址必須使用 HTTP 或 HTTPS');
  const projects = [];
  let totalPages = 1;
  for (let page = 1; page <= totalPages; page += 1) {
    const url = new URL('/api/projects', base);
    url.search = new URLSearchParams({ locale, page: String(page), pageSize: '100' }).toString();
    const response = await fetcher(url, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`作品 API 讀取失敗：${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.data) || !Number.isSafeInteger(payload.pagination?.totalPages) || payload.pagination.totalPages < 1 || payload.pagination.totalPages > 10000) {
      throw new Error('作品 API 分頁格式不正確');
    }
    totalPages = payload.pagination.totalPages;
    projects.push(...payload.data.map(toPortfolioProject));
  }
  return projects;
}
