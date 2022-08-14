// Packages
import { useTranslation } from 'react-i18next';

// Services
import { translationsUtilService } from '../../services/translations';

const Header = () => {
  /**
   * @Hooks
   */
  const { i18n } = useTranslation();

  /**
   * @Render
   */
  return (
    <div className="sticky top-0 z-50 flex-shrink-0 flex h-16 bg-primary shadow">
      <div className="flex-1 px-8 flex justify-end">
        <div className="ml-4 flex items-center md:ml-6">
          {' '}
          <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {translationsUtilService.availableLanguages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
