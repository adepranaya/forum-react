import { ChartLine, Home, Plus, User } from 'lucide-react';

export default function SideNavigation() {
  return (
    <aside className="lg:w-64 shrink-0 flex flex-col gap-8 sticky top-24 self-start h-[calc(100vh-120px)]">
      <div className="flex flex-col gap-1">
        {/* TODO: create new component and handle active or not active */}
        {/* TODO: goto home page */}
        <a
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium"
          href="#"
        >
          <Home />
          <span className="hidden md:inline">All Threads</span>
        </a>
        {/* TODO: goto leaderboard page */}
        <a
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium transition-colors"
          href="#"
        >
          <ChartLine />
          <span className="hidden md:inline">Leaderboards</span>
        </a>
        {/* TODO: only show for auth user */}
        <a
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium transition-colors"
          href="#"
        >
          <User />
          <span className="hidden md:inline">My Profile</span>
        </a>
      </div>
      {/* TODO: only show for auth user */}
      <div className="flex flex-col gap-4">
        <a
          href="/create-thread.html"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
        >
          <Plus />
          <span className="hidden md:inline">Create Thread</span>
        </a>
      </div>
    </aside>
  );
}
