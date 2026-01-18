// hooks/useCurrentVote.js
import { useSelector } from 'react-redux';
import { getCurrentVote } from '../utils/index';

export const useCurrentVote = (upVotesBy, downVotesBy) => {
  const authUser = useSelector((state) => state.authUser);

  return getCurrentVote(upVotesBy, downVotesBy, authUser?.id);
};
