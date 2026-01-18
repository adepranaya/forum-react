import React from 'react';

export default function Input({
  label,
  id,
  preIcon,
  postIcon,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-slate-700 dark:text-slate-300 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {preIcon && (
          <div className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {preIcon}
          </div>
        )}

        <input
          id={id}
          className={`w-full ${
            preIcon ? 'pl-12' : 'pl-4'
          } pr-4 h-12 rounded-lg border border-slate-200 dark:border-[#3b4754] bg-white dark:bg-[#1b2127] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9cabba]`}
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={onChange}
        />

        {postIcon}
      </div>
    </div>
  );
}
