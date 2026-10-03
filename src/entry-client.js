import { useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector';
import '@/styles/reset.css';
import { createApp } from './main';
import { createI18n } from './plugins/i18n';
import { createRoutes } from './router';
import { setRouter } from './utils';

function BrowserLanguage({ i18n }) {
  useEffect(() => {
    const detector = new LanguageDetector();
    detector.init({
      order: ['localStorage'],
      caches: ['localStorage'],
    });
    const languages = detector.detect();
    const language = i18n.services.languageUtils.getBestMatchFromCodes(
      Array.isArray(languages) ? languages : [languages],
    ) || 'zh-TW';
    const handleLanguageChange = (nextLanguage) => {
      detector.cacheUserLanguage(nextLanguage);
      document.documentElement.lang = nextLanguage;
    };
    i18n.on('languageChanged', handleLanguageChange);
    i18n.changeLanguage(language);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
  return null;
}

async function bootstrap() {
  const i18n = await createI18n(document.documentElement.lang);
  const routes = await createRoutes(window.location.href);
  const router = createBrowserRouter(routes);
  setRouter(router);

  hydrateRoot(document.getElementById('root'), createApp({
    i18n,
    children: <><BrowserLanguage i18n={i18n} /><RouterProvider router={router} /></>,
  }));
}

// Let the entry module finish evaluating before lazy pages import its shared exports.
bootstrap().catch((error) => {
  console.error('Failed to initialize the application:', error);
});
