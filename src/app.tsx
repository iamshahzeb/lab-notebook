// Packages
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import { AppRoutes } from './components/routes';

// Styles
import 'react-toastify/dist/ReactToastify.css';

// Services
import { reactQueryUtilService } from './services/react-query';
import './services/translations';

// Initialize react query client
const queryClient = new QueryClient(reactQueryUtilService.queryDefaultConfig);

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
