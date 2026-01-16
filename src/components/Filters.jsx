import { LayoutGrid } from 'lucide-react';

export default function Filters({ categories = [] }) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Threads</h1>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">
          <LayoutGrid size={14} />
          All
        </button>
        {categories.map((category) => (
          <button key={category} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">
            <span className="text-primary">#</span> {category}
          </button>
        ))}
      </div>
    </div>
  );
}
