import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { cn } from '../utils/cn';

function Breadcrumbs({ className = '', items = [] }) {
  return (
    <nav
      className={cn(
        'flex items-center gap-2 text-sm font-medium text-slate-500',
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} />}
          {item.to ? (
            <Link className="hover:text-primary transition-colors" to={item.to}>
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white truncate">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
