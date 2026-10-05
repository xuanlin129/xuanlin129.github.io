import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjects } from '../config/projects';
import { fetchProjectDetails } from '../services/project-api';

export function useProjectDetails(slug) {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'zh-TW';
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const fallback = getProjects(locale).find((project) => project.slug === slug);
  const [result, setResult] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const requestKey = `${locale}:${slug}:${attempt}`;

  useEffect(() => {
    if (!baseUrl) return;
    let isActive = true;
    fetchProjectDetails(baseUrl, slug, locale)
      .then((project) => {
        if (isActive) setResult({ requestKey, project });
      })
      .catch((error) => {
        if (isActive) setResult({ requestKey, error });
      });
    return () => { isActive = false; };
  }, [baseUrl, slug, locale, requestKey]);

  const currentResult = result?.requestKey === requestKey ? result : null;
  const project = currentResult && !currentResult.error ? currentResult.project : fallback;
  const retry = () => setAttempt((previous) => previous + 1);
  if (project) return { project, status: 'ready', retry };
  if (currentResult?.error) return { status: 'error', retry };
  if (currentResult || !baseUrl) return { status: 'notFound', retry };
  return { status: attempt > 0 ? 'loading' : 'notFound', retry };
}
