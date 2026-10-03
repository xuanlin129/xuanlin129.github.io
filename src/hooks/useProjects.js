import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjects } from '../config/projects';
import { fetchPortfolioProjects } from '../services/project-api';

export function useProjects() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'zh-TW';
  const [result, setResult] = useState(null);
  const projects = result?.locale === locale ? result.projects : getProjects(locale);
  const baseUrl = import.meta.env.VITE_PROJECTS_API_BASE_URL;

  useEffect(() => {
    if (!baseUrl) return;
    let isActive = true;
    void fetchPortfolioProjects(baseUrl, locale)
      .then((nextProjects) => {
        if (isActive) setResult({ locale, projects: nextProjects });
      })
      .catch((error) => console.error('無法更新作品，保留建置時的快照：', error));
    return () => { isActive = false; };
  }, [baseUrl, locale]);

  return projects;
}
