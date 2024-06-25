import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from '../../locales/en/translation.json';
import translationES from '../../locales/es/translation.json';
import translationCAT from '../../locales/cat/translation.json';
import translationFR from '../../locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  ca: {
    translation: translationCAT
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', () => {
  window.scrollTo(0, 0); // Scroll immediately to top after language change
});

export default i18n;
