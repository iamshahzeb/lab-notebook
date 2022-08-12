// Packages
import { useTranslation } from 'react-i18next';
// import { translationsUtilService } from '../../services/translations';

export const ScientistsNotebook = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Scientists Notebook')}</h1>;
      {/* <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {translationsUtilService.availableLanguages.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select> */}
    </div>
  );
};
