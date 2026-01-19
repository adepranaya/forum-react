import { NavLink, useLocation } from 'react-router';

function SideNavItem({ to = '', children }) {
  const location = useLocation();

  // Custom logic to determine if this link should be active
  const isActive = () => {
    // For home link (/), it should be active only on / or when on nested threads routes
    if (to === '/') {
      return location.pathname === '/' || location.pathname.startsWith('/threads');
    }
    // For other links, use standard comparison
    return location.pathname === to || location.pathname.startsWith(`${to  }/`);
  };

  return (
    <NavLink
      to={to}
      end
      className={({ isActive: navLinkIsActive }) => {
        const shouldBeActive = to === '/' ? isActive() : navLinkIsActive;
        return `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
          shouldBeActive ? 'bg-primary text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
        }`;
      }}
    >
      {children}
    </NavLink>
  );
}

export default SideNavItem;
