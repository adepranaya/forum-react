import React from 'react';

export default function FilterButton({ active, onClick, children }) {
  return (
    <button
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors whitespace-nowrap  text-sm font-medium ${
        active
          ? 'bg-primary '
          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
