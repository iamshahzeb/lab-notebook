// Packages
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Services
import { routeConstantsService } from '../../services/routes';

export const NotFound = () => {
  /**
  * @Hooks
  */
  const { t } = useTranslation();
  const navigate = useNavigate();

  /**
   * @Methods
   */

  const goHome = () => {
    navigate(routeConstantsService.unAuthenticatedRoutes.scientistsDashboard.path);
  };

  /**
  * @Render
  */
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-blue-600 text-9xl">{t('404')}</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">{t('Oops!')}</span> {t('Page not found')}
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              {t('The page you’re looking for doesn’t exist.')}
            </p>
            <button onClick={goHome} className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              {t('Go home')}
            </button>
          </div>
          <div className="mt-4">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
