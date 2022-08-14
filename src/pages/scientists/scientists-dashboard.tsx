// Packages
import { Outlet } from 'react-router-dom';

// Components
import Header from '../../components/header';

export const ScientistsDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 pb-8 pt-0 px-10 box-border h-full w-full overflow-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
};
