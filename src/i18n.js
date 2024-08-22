import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil dosyalarını içe aktarın
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React'te XSS koruması sağlar
    },
  });

export default i18n;