import { MessagesSquare, Search } from 'lucide-react';
import { NavLink } from 'react-router';
import UserActions from './UserActions';

function TopNavigation({ onSignOut }) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
        <div className="max-w-360 mx-auto flex items-center justify-between gap-8">
          {/* Logo Area */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="size-9 rounded-lg flex items-center justify-center text-white">
              <MessagesSquare />
            </div>
            <h2 className="text-xl font-bold tracking-tight">DevForum</h2>
          </NavLink>
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <Search />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder-slate-500"
                placeholder="Search for threads, users, or tags..."
                type="text"
              />
            </div>
          </div>

          {/* User Actions */}
          <UserActions onSignOut={onSignOut} />
        </div>
      </header>
    </>
  );
}

export default TopNavigation;
