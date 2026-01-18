import SideNavigation from '../components/SideNavigation';
import { Outlet } from 'react-router';

// A layout component that includes common elements like a header and a place for child routes
const MainLayout = () => {
  return (
    <div className="max-w-360 mx-auto flex gap-6 px-6 py-8">
      <SideNavigation />
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
