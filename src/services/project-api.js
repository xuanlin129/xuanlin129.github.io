const projectTypes = ['personal', 'client', 'company', 'collaboration'];

function readStringList(value) {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || !item.trim())) {
    throw new Error('作品 API 回傳的標籤格式不正確');
  }
  return [...new Set(value.map((item) => item.trim()))];
}

export function toPortfolioProject(project) {
  if (!project || typeof project.id !== 'string' || typeof project.slug !== 'string' || typeof project.title !== 'string') {
    throw new Error('作品 API 回傳格式不正確');
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) throw new Error('作品 API 回傳的 slug 不正確');
  if (project.summary !== undefined && typeof project.summary !== 'string') throw new Error('作品 API 回傳的說明不正確');
  if (project.projectType != null && !projectTypes.includes(project.projectType)) throw new Error('作品 API 回傳的專案類型不正確');
  if (project.projectYear != null && (!Number.isInteger(project.projectYear) || project.projectYear < 1900 || project.projectYear > 2100)) throw new Error('作品 API 回傳的年份不正確');
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
    summary: project.summary ?? '',
    projectType: project.projectType ?? null,
    projectYear: project.projectYear ?? null,
    taskTags: readStringList(project.taskTags),
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

export async function fetchProjectDetails(baseUrl, slug, locale, fetcher = fetch) {
  const base = new URL(baseUrl);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('作品 API 網址必須使用 HTTP 或 HTTPS');
  const url = new URL(`/api/projects/${encodeURIComponent(slug)}`, base);
  url.search = new URLSearchParams({ locale }).toString();
  const response = await fetcher(url, { signal: AbortSignal.timeout(15000) });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`作品 API 讀取失敗：${response.status}`);
  const payload = await response.json();
  const project = toPortfolioProject(payload.data);
  if (project.slug !== slug) throw new Error('作品 API 回傳的作品不符');
  return project;
}
