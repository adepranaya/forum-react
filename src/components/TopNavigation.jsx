import PropTypes from 'prop-types';
import { MessagesSquare } from 'lucide-react';
import { NavLink } from 'react-router';
import UserActions from './UserActions';

function TopNavigation({ onSignOut }) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
        <div className="max-w-360 mx-auto flex items-center justify-between gap-8">
          {/* Logo Area */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="hidden md:flex size-9 rounded-lg items-center justify-center text-white">
              <MessagesSquare />
            </div>
            <h2 className=" text-xl font-bold tracking-tight">DevForum</h2>
          </NavLink>

          {/* User Actions */}
          <UserActions onSignOut={onSignOut} />
        </div>
      </header>
    </>
  );
}

TopNavigation.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default TopNavigation;
