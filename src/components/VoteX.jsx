import { ArrowDown, ArrowUp } from 'lucide-react';

export default function VoteX({ totalVotes = 0, onUpVote, onDownVote }) {
  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      <button
        className="p-2 hover:bg-primary/20 hover:text-primary rounded-md transition-colors"
        onClick={onUpVote}
      >
        <ArrowUp size={14} />
      </button>
      <span className="px-2 text-sm font-bold">{totalVotes}</span>
      <button
        className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-md transition-colors"
        onClick={onDownVote}
      >
        <ArrowDown size={14}/>
      </button>
    </div>
  );
}
