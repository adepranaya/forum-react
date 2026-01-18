export function useVoteLogic({
  totalVotes,
  currentVote,
  onUpvote,
  onDownvote,
  onNeutral,
}) {
  const handleVote = (voteType) => {
    if (currentVote === voteType) {
      onNeutral();
    } else if (voteType === 'up') {
      onUpvote();
    } else {
      onDownvote();
    }
  };

  return { handleVote, totalVotes, currentVote };
}
