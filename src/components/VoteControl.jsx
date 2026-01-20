import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { cn } from '../utils/cn';
import { useVoteLogic } from '../hooks/useVoteLogic';

const VARIANTS = {
  horizontal: {
    container:
      'flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1',
    buttonUp: 'p-2 hover:bg-primary/20 hover:text-primary rounded-md',
    buttonDown: 'p-2 hover:bg-red-500/20 hover:text-red-500 rounded-md',
    text: 'px-2 text-sm font-bold',
    IconUp: ArrowUp,
    IconDown: ArrowDown,
  },
  vertical: {
    container:
      'w-12 bg-slate-50 dark:bg-slate-950/40 flex flex-col items-center py-4 gap-1',
    buttonUp:
      'p-2 hover:bg-primary/20 text-slate-400 hover:text-primary rounded-md',
    buttonDown:
      'p-2 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-md',
    text: 'text-sm font-bold',
    IconUp: ChevronUp,
    IconDown: ChevronDown,
  },
};

function VoteControl(props) {
  const { totalVotes = 0, currentVote, variant = 'horizontal' } = props;
  const styles = VARIANTS[variant] || VARIANTS.horizontal;
  const { IconUp, IconDown } = styles;
  const { handleVote } = useVoteLogic(props);

  return (
    <div className={styles.container}>
      <div className="tooltip">
        <div className="tooltip-content">
          <div className="animate-bounce text-primary -rotate-10 text-2xl font-black">
            Up
          </div>
        </div>
        <button
          className={cn(
            `${styles.buttonUp} transition-colors ${
              currentVote === 'up' ? 'text-primary' : ''
            }`
          )}
          onClick={() => handleVote('up')}
          aria-label="Upvote"
          title="Upvote"
        >
          <IconUp size={14} />
        </button>
      </div>

      <span className={styles.text}>{totalVotes}</span>

      <div className="tooltip tooltip-bottom">
        <div className="tooltip-content">
          <div className="animate-bounce text-red-500 rotate-10 text-2xl font-black">
            Down
          </div>
        </div>
        <button
          className={cn(
            `${styles.buttonDown} transition-colors ${
              currentVote === 'down' ? 'text-red-500' : ''
            }`
          )}
          onClick={() => handleVote('down')}
          aria-label="Downvote"
          title="Downvote"
        >
          <IconDown size={14} />
        </button>
      </div>
    </div>
  );
}

VoteControl.propTypes = {
  totalVotes: PropTypes.number,
  currentVote: PropTypes.oneOf(['up', 'down', 'neutral']).isRequired,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default VoteControl;
