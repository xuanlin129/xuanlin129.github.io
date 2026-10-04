import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import snapshot from '../config/experiences.snapshot.json';
import { fetchAboutExperiences } from '../services/experience-api';

export function useExperiences() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'zh-TW';
  const [result, setResult] = useState(null);
  const fallback = snapshot[locale] ?? [];
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    if (!baseUrl) return;
    let isActive = true;
    void fetchAboutExperiences(baseUrl, locale)
      .then((experiences) => {
        if (isActive) setResult({ locale, experiences });
      })
      .catch((error) => console.error('無法更新經歷，保留建置時的資料：', error));
    return () => { isActive = false; };
  }, [baseUrl, locale]);
  return result?.locale === locale ? result.experiences : fallback;
}
