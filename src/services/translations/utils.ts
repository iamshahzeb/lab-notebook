
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { AvailableLanguagesEnums } from './constants';

export const translationsUtilService = (() => {
  /**
       * @Private_Methods
       */

  const resources = AvailableLanguagesEnums;

  const availableLanguages = Object.keys(resources);

  void i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      defaultNS: 'common',
      fallbackLng: 'en',
    });

  /**
     * @Public_Methods
     */
  return {
    availableLanguages,
  };
})();
