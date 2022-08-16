// Packages
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import { AppRoutes } from './components/routes';

// Styles
import 'react-toastify/dist/ReactToastify.css';

// Services
import { generalUtilService } from './services/general';
import { reactQueryUtilService } from './services/react-query';
import './services/translations';
import { routeUtilService } from './services/routes';

// Initialize react query client
const queryClient = new QueryClient(reactQueryUtilService.queryDefaultConfig);

const App = () => {
  /**
  * @Hooks
  */
  const location = useLocation();

  // Setting window title as per route
  useEffect(() => {
    generalUtilService.setPageTitle(location.pathname, routeUtilService.applicationRoutes);
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
