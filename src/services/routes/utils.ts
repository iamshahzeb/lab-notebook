// Types

// Components
import { Login } from '../../pages/authentication';
import { NotFound } from '../../pages/redirect';
import { ScientistsDashboard, ScientistsNotebook } from '../../pages/scientists';

// Services
import { routeConstantsService } from './constants';
import { AppRouterProps } from './types';


export const routeUtilService = (() => {
  /**
   * NOTE: All un-authenticated routes will be listed down here.
   */
  const unAuthenticatedRoutes: AppRouterProps[] = [
    {
      ...routeConstantsService.unAuthenticatedRoutes.scientistsDashboard,
      component: ScientistsDashboard,
      childrenRoutes: [
        {
          ...routeConstantsService.unAuthenticatedRoutes.notebook,
          component: ScientistsNotebook,
        },
      ],
    },
    {
      ...routeConstantsService.unAuthenticatedRoutes.notFound,
      component: NotFound,
    },
    {
      ...routeConstantsService.unAuthenticatedRoutes.login,
      component: Login,
    },
  ];

  /**
   * NOTE: All authenticated routes will be listed down here,
   * it's just an empty array for now because we currently don't have any protected routes.
   */
  const authenticatedRoutes: AppRouterProps[] = [];

  // merged route Arrays for all routes
  const applicationRoutes: AppRouterProps[] = [
    ...unAuthenticatedRoutes,
    ...authenticatedRoutes,
  ];

  /**
   * @Public_Methods
   */
  return {
    applicationRoutes,
  };
})();
