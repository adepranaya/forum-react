import { ArrowDown, ArrowUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { useVoteLogic } from '../hooks/useVoteLogic';

function VoteX(props) {
  const { handleVote, totalVotes, currentVote } = useVoteLogic(props);

  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      <button
        className={`p-2 hover:bg-primary/20 hover:text-primary rounded-md transition-colors ${
          currentVote === 'up' ? 'text-primary' : ''
        }`}
        onClick={() => handleVote('up')}
      >
        <ArrowUp size={14} />
      </button>
      <span className="px-2 text-sm font-bold">{totalVotes}</span>
      <button
        className={`p-2 hover:bg-red-500/20 hover:text-red-500 rounded-md transition-colors ${
          currentVote === 'down' ? 'text-red-500' : ''
        }`}
        onClick={() => handleVote('down')}
      >
        <ArrowDown size={14} />
      </button>
    </div>
  );
}

VoteX.propTypes = {
  totalVotes: PropTypes.number,
  currentVote: PropTypes.oneOf(['up', 'down', 'neutral']),
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  onNeutral: PropTypes.func,
};

export default VoteX;
