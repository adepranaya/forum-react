import { NavLink } from 'react-router';

function SideNavItem({ to = '', children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
          isActive ? 'bg-primary text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default SideNavItem;
