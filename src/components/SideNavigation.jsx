import { ChartLine, Home, Plus, User } from 'lucide-react';
import SideNavItem from './SideNavItem';
import { NavLink } from 'react-router';

export default function SideNavigation() {
  return (
    <aside className="lg:w-64 shrink-0 flex flex-col gap-8 sticky top-24 self-start h-[calc(100vh-120px)]">
      <div className="flex flex-col gap-1">
        {/* TODO: create new component and handle active or not active */}
        {/* TODO: goto home page */}
        <SideNavItem to='/'>
          <Home />
          <span className="hidden md:inline">All Threads</span>
        </SideNavItem>
        {/* TODO: goto leaderboard page */}
        <SideNavItem to='leaderboard'>
          <ChartLine />
          <span className="hidden md:inline">Leaderboards</span>
        </SideNavItem>
        {/* TODO: only show for auth user */}
        <SideNavItem to='profile'>
          <User />
          <span className="hidden md:inline">My Profile</span>
        </SideNavItem>
      </div>
      {/* TODO: only show for auth user */}
      <div className="flex flex-col gap-4">
        <NavLink
          to="/threads/create"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
        >
          <Plus />
          <span className="hidden md:inline">Create Thread</span>
        </NavLink>
      </div>
    </aside>
  );
}
