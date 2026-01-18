import { ChartLine, Home, Plus, User } from 'lucide-react';
import SideNavItem from './SideNavItem';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

export default function SideNavigation() {
  const authUser = useSelector((states) => states.authUser);
  return (
    <aside className="lg:w-64 shrink-0 flex flex-col gap-8 sticky top-24 self-start h-[calc(100vh-120px)]">
      <div className="flex flex-col gap-1">
        <SideNavItem to="/">
          <Home />
          <span className="hidden md:inline">All Threads</span>
        </SideNavItem>
        <SideNavItem to="leaderboard">
          <ChartLine />
          <span className="hidden md:inline">Leaderboards</span>
        </SideNavItem>
        {authUser !== null && (
          <SideNavItem to="profile">
            <User />
            <span className="hidden md:inline">My Profile</span>
          </SideNavItem>
        )}
      </div>
      {authUser !== null && (
        <div className="flex flex-col gap-4">
          <NavLink
            to="/threads/create"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
          >
            <Plus />
            <span className="hidden md:inline">Create Thread</span>
          </NavLink>
        </div>
      )}
    </aside>
  );
}
