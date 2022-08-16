import { AppRouterProps } from '../routes/types';

export const generalUtilService = (() => {
  /**
     * @Private_Methods
     */

  const mergedClasses = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const setPageTitle = (path: string, routes: AppRouterProps[]) => {
    Object.values(routes).forEach(route => {
      if (path === route.path) {
        document.title = route.title;
      } else {
        document.title = 'Lab notebook';
      }
    });
  };

  /**
     * @Public_Methods
     */
  return {
    setPageTitle,
    mergedClasses,
  };
})();
