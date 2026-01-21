import { useDispatch, useSelector } from 'react-redux';
import { useCurrentVote } from '../hooks/useCurrentVote';
import { postedAt } from '../utils';
import SafeHTMLRenderer from './SafeHTMLRenderer';
import {
  asyncDownVoteThreadComment,
  asyncNeutralVoteThreadComment,
  asyncUpVoteThreadComment,
} from '../states/threadDetail/action';
import VoteControl from './VoteControl';
import PropTypes from 'prop-types';
import CurrentVote from './CurrentVote';

function CommentItem({
  id: commentId,
  content = '',
  createdAt = '',
  owner,
  totalVotes = 0,
  upVotesBy = [],
  downVotesBy = [],
}) {
  const dispatch = useDispatch();
  const threadId = useSelector((state) => state.threadDetail?.id);
  const currentVote = useCurrentVote(upVotesBy, downVotesBy);
  const { avatar, name } = owner || {};

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex gap-4">
        <div className="size-10 rounded-full overflow-hidden shrink-0">
          <img
            alt="Commenter Avatar"
            className="w-full h-full object-cover"
            data-alt="Commenter profile picture"
            src={avatar}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-bold text-sm">{name}</span>
            <span className="text-xs text-slate-500">
              • {postedAt(createdAt)}
            </span>
          </div>
          <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
            <SafeHTMLRenderer htmlString={content} />
          </div>
          <div className="flex items-center gap-4">
            <VoteControl
              totalVotes={totalVotes}
              currentVote={currentVote}
              onUpvote={() =>
                dispatch(asyncUpVoteThreadComment({ id: threadId, commentId }))
              }
              onDownvote={() =>
                dispatch(
                  asyncDownVoteThreadComment({ id: threadId, commentId })
                )
              }
              onNeutral={() =>
                dispatch(
                  asyncNeutralVoteThreadComment({ id: threadId, commentId })
                )
              }
            />
          </div>
          <CurrentVote currentVote={currentVote} />
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalVotes: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};
export default CommentItem;
