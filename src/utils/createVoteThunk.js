// states/utils/createVoteThunk.js
import { showLoading, hideLoading } from '@dimasmds/react-redux-loading-bar';
import { withAuth } from '.';

/**
 * Factory function untuk membuat vote thunk dengan optimistic update & rollback
 *
 * @param {Object} config - Konfigurasi vote thunk
 * @param {string} config.voteType - Tipe vote: 'up', 'down', atau 'neutral'
 * @param {Function} config.getVoteState - Function untuk ambil current vote state
 * @param {Object} config.actionCreators - Object berisi up, down, neutral action creators
 * @param {Function} config.apiCall - API call function
 * @param {Function} config.getParams - Function untuk ambil params dari state (optional)
 */
export const createVoteThunk = ({
  voteType,
  getVoteState,
  actionCreators,
  apiCall,
  getParams,
}) => {
  return withAuth((params) => {
    return async (dispatch, getState) => {
      dispatch(showLoading());

      const state = getState();
      const { authUser } = state;

      // Get current vote state
      const { upVotesBy, downVotesBy } = getVoteState(state, params);
      const wasUpvoted = upVotesBy.includes(authUser.id);
      const wasDownvoted = downVotesBy.includes(authUser.id);

      // Get params untuk action creator dan API
      const actionParams = getParams
        ? getParams(state, params, authUser)
        : params;

      // Optimistic update
      dispatch(actionCreators[voteType](actionParams));

      try {
        await apiCall(params, state);
      } catch (error) {
        // Rollback logic
        if (voteType === 'up') {
          if (wasDownvoted) {
            dispatch(actionCreators.down(actionParams));
          } else if (!wasUpvoted) {
            dispatch(actionCreators.neutral(actionParams));
          }
        } else if (voteType === 'down') {
          if (wasUpvoted) {
            dispatch(actionCreators.up(actionParams));
          } else if (!wasDownvoted) {
            dispatch(actionCreators.neutral(actionParams));
          }
        } else if (voteType === 'neutral') {
          if (wasUpvoted) {
            dispatch(actionCreators.up(actionParams));
          } else if (wasDownvoted) {
            dispatch(actionCreators.down(actionParams));
          }
        }

        alert(error.message);
      } finally {
        dispatch(hideLoading());
      }
    };
  });
};
