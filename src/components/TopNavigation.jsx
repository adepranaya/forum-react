import { MessagesSquare, Search } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router";

function TopNavigation() {
  const navigate = useNavigate();
  function navToSignin() {
    navigate('/login');
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
        <div className="max-w-360 mx-auto flex items-center justify-between gap-8">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg flex items-center justify-center text-white">
              <MessagesSquare />
            </div>
            <h2 className="text-xl font-bold tracking-tight">DevForum</h2>
          </div>
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
          {/* TODO: create new component and check guest or not */}
          <div className="flex items-center gap-4">
            <Button onClick={navToSignin}>Sign In</Button>
            <button className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold">Alex Rivers</p>
                <p className="text-[10px] text-slate-500">2.4k Karma</p>
              </div>
              <div
                className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
                data-alt="User profile avatar portrait"
                style={{
                  backgroundImage: `url(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuD4poGqCaX2ZMq2x58rDWujTRrbXyUwPxzyQJW_anIHNcJttMw1GRiQ8j3cBepsjii_Dmh62ZuxI1UuWDk1I8rq41TWS8eymkBQOUEgNccCh1JQeAkR2j0yNW9IAb9qKP78hsPil4LoagkzkAMssB1uKJkO1TS_Gj8YvwdvvJxsPbRtQ-WL4bfUaQ4cMfbKzZAmYxNahpTcq5wBRTqSEUXJfBwP5aWqwohIRR2twTeBMi3pYU0nYUJSgoKNSs7CyzhVeMZ1x8J35Q'
                  )`,
                }}
              ></div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopNavigation;
