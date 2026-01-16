import { ChevronDown, ChevronUp, MessageCircleIcon } from 'lucide-react';
import { postedAt } from '../utils';
import SafeHTMLRenderer from './SafeHTMLRenderer';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
  totalVotes,
  totalComments = 0,
  upVote,
  downVote,
}) {
  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };
  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onThreadClick = () => {
    // navigate(`/threads/${id}`);
  };
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-primary/40 transition-colors flex">
      <div className="w-12 bg-slate-50 dark:bg-slate-950/40 flex flex-col items-center py-4 gap-1">
        <button
          className="text-slate-400 hover:text-primary"
          onClick={onUpVoteClick}
        >
          <ChevronUp />
        </button>
        <span className="text-sm font-bold">{totalVotes}</span>
        <button
          className="text-slate-400 hover:text-red-500"
          onClick={onDownVoteClick}
        >
          <ChevronDown />
        </button>
      </div>
      <div className="flex-1 p-5 flex gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <img src={user?.avatar} className='size-5 rounded-full' alt={`Mini avatar of ${user?.name}`} />
            <span className="text-slate-900 dark:text-slate-200">
              {user?.name}
            </span>
            <span>•</span>
            <span>{postedAt(createdAt)}</span>
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              #{category}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug hover:text-primary cursor-pointer transition-colors">
            <button onClick={onThreadClick}>{title}</button>
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            <SafeHTMLRenderer htmlString={body} />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <button
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-1.5 rounded-lg transition-colors"
              onClick={onThreadClick}
            >
              <MessageCircleIcon size={14} />
              {totalComments} Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
