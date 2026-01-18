import { ChevronDown, ChevronUp, MessageCircleIcon, Vote } from 'lucide-react';
import { postedAt } from '../utils';
import SafeHTMLRenderer from './SafeHTMLRenderer';
import { NavLink } from 'react-router';
import VoteControl from './VoteControl';
import { useCurrentVote } from '../hooks/useCurrentVote';
import { useDispatch } from 'react-redux';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../states/threads/action';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
  totalVotes,
  totalComments = 0,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();
  const currentVote = useCurrentVote(upVotesBy, downVotesBy);

  const onThreadClick = () => {
    return `/threads/${id}`;
  };
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-primary/40 transition-colors flex">
      <VoteControl
        totalVotes={totalVotes}
        currentVote={currentVote}
        onUpvote={() => dispatch(asyncUpVoteThread(id))}
        onDownvote={() => dispatch(asyncDownVoteThread(id))}
        onNeutral={() => dispatch(asyncNeutralVoteThread(id))}
        variant='vertical'
      />
      <div className="flex-1 p-5 flex gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium flex-wrap">
            <img
              src={user?.avatar}
              className="size-5 rounded-full"
              alt={`Mini avatar of ${user?.name}`}
            />
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
            <NavLink to={onThreadClick()}>{title}</NavLink>
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            <SafeHTMLRenderer htmlString={body} />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <NavLink
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-1.5 rounded-lg transition-colors"
              to={onThreadClick()}
            >
              <MessageCircleIcon size={14} />
              {totalComments} Comments
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
