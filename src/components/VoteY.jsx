import { ArrowDown, ArrowUp } from 'lucide-react';
import PropTypes from 'prop-types';

function VoteY({
  totalVotes = 0,
  currentVote,
  onUpvote,
  onDownvote,
  onNeutral,
}) {
  const handleVote = (voteType) => {
    if (currentVote === voteType) {
      // Toggle: klik yang sama jadi neutral
      onNeutral();
    } else if (voteType === 'up') {
      onUpvote();
    } else {
      onDownvote();
    }
  };

  return (
    <div className="w-12 bg-slate-50 dark:bg-slate-950/40 flex flex-col items-center py-4 gap-1">
      <button
        className={`text-slate-400 hover:text-primary ${
          currentVote === 'up' ? 'text-primary' : ''
        }`}
        onClick={() => handleVote('up')}
      >
        <ChevronUp />
      </button>
      <span className="text-sm font-bold">{totalVotes}</span>
      <button
        className={`text-slate-400 hover:text-red-500 ${
          currentVote === 'down' ? 'text-red-500' : ''
        }`}
        onClick={() => handleVote('down')}
      >
        <ChevronDown />
      </button>
    </div>
  );
}

VoteY.propTypes = {
  totalVotes: PropTypes.number,
  currentVote: PropTypes.oneOf(['up', 'down', 'neutral']),
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  onNeutral: PropTypes.func,
};

export default VoteY;
