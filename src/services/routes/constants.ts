// Types
import { AppRouterProps } from './types';

export const routeConstantsService = (() => {
  /**
   * NOTE: Declare all routes which doesn't require authentication over here.
   */
  const unAuthenticatedRoutes: Record<string, AppRouterProps> = {
    scientistsDashboard: {
      key: 'scientistsDashboard',
      title: 'Scientists Dashboard',
      path: '/',
    },
    notebook: {
      key: 'notebook',
      title: 'Notebook',
      index: true,
      path: '/notebook',
    },
    login: {
      key: 'login',
      title: 'Login',
      path: '/login',
    },
    notFound: {
      key: '404',
      title: '404',
      path: '*',
    },
  };

  /**
   * NOTE: Declare all routes which require authentication over here.
   */
  const authenticatedRoutes: Record<string, AppRouterProps> = {
    /**
     * NOTE: protected routes will have "isProtected" as true,
     * we don't have any protected routes for now.
     * This is just an example of how those routes will work.
     */
    // protected: {
    //   key: 'home',
    //   title: 'Home',
    //   path: '/',
    //   isProtected: true,
    // },
  };

  /**
   * @Public_Methods
   */
  return {
    authenticatedRoutes,
    unAuthenticatedRoutes,
  };
})();
