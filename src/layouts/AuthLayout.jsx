import { ChartLine, ChartLineIcon, MessageCircle } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';

// A layout component that includes common elements like a header and a place for child routes
const AuthLayout = () => {
  const linkActive = (isActive) =>
    `flex flex-col items-center justify-center  transition-colors pb-3.25 pt-4 ${
      isActive
        ? 'border-primary text-primary border-b-[3px]'
        : 'order-transparent text-slate-400 dark:text-[#9cabba]  hover:text-slate-600 dark:hover:text-white'
    }`;
  return (
    <main className="flex-1 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl bg-white dark:bg-[#1b2127] rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200 dark:border-[#283039]">
        <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-50 dark:bg-background-dark p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Connect with developers worldwide.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Join over 50,000 developers sharing knowledge, building threads,
              and climbing the global leaderboard.
            </p>
          </div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-lg border border-slate-200 dark:border-white/10">
              <div className="text-primary">
                <MessageCircle />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  2.4M Threads
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Collaborate and solve problems
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-lg border border-slate-200 dark:border-white/10">
              <span className="text-primary">
                <ChartLineIcon />
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  Global Ranking
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Earn reputation points daily
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-8">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Welcome to DevForum
            </h4>
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              Secure Authentication
            </h2>
          </div>
          <div className="pb-6">
            <div className="flex border-b border-slate-200 dark:border-[#3b4754] gap-8">
              <NavLink
                to="/login"
                className={({ isActive }) => linkActive(isActive)}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Login
                </p>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => linkActive(isActive)}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Register
                </p>
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
