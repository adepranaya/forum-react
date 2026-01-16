import { ArrowDown, ArrowUp, MessageCircleIcon } from 'lucide-react';
import { postedAt } from '../utils';
import SafeHTMLRenderer from './SafeHTMLRenderer';

export default function DetailThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  comments,
  totalVotes,
}) {
  return (
    <div key={id} className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-full overflow-hidden bg-slate-200">
          {owner?.avatar && (
            <img
              alt="Post Author Avatar"
              className="w-full h-full object-cover"
              data-alt="Author profile avatar"
              src={owner?.avatar}
            />
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {owner?.name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            Posted {postedAt(createdAt)} in
            <span className="text-primary ms-1">#{category}</span>
          </p>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
        {title}
      </h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-lg space-y-4">
        <SafeHTMLRenderer htmlString={body} />
      </div>
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button className="p-2 hover:bg-primary/20 hover:text-primary rounded-md transition-colors">
              <ArrowUp />
            </button>
            <span className="px-2 font-bold text-sm">{totalVotes}</span>
            <button className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-md transition-colors">
              <ArrowDown />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-sm font-semibold">
            <MessageCircleIcon size={14} />
            <span>{comments?.length} Comments</span>
          </button>
        </div>
      </div>
    </div>
  );
}
