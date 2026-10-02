import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import zhTW from '../locales/zh-TW.json';

export async function createI18n(language = 'zh-TW') {
  const i18n = createInstance();
  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      'zh-TW': { translation: zhTW },
    },
    lng: language,
    supportedLngs: ['en', 'zh-TW'],
    fallbackLng: 'zh-TW',
    load: 'currentOnly',
    interpolation: { escapeValue: false },
  });
  return i18n;
}
