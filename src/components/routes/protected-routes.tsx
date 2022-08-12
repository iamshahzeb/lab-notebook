// Packages
import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Services
import { routeConstantsService } from '../../services/routes';

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const location = useLocation();

  /**
  *  NOTE: This logic will not work now because we aren't setting user token for now,
  *  This is just a dummy logic to explain how authentication will work,
  *  we will be setting this token in our local storage when user is successfully
  *  authenticated from backend API using our application registration mechanism.
  *  */
  const userSession = JSON.parse(localStorage.getItem('user') ?? '{}');
  /**
  * @Render
  */
  if (!userSession?.idToken) {
    return (
      <Navigate
        to={routeConstantsService.unAuthenticatedRoutes.login.path}
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};
