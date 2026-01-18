import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_THREAD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.content, ...threadDetail.comments],
      };
    case ActionType.UP_VOTE_THREAD_DETAIL: {
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
        downVotesBy: threadDetail.downVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
      };
    }
    case ActionType.DOWN_VOTE_THREAD_DETAIL: {
      return {
        ...threadDetail,
        downVotesBy: [...threadDetail.downVotesBy, action.payload.userId],
        upVotesBy: threadDetail.upVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
      };
    }
    case ActionType.NEUTRAL_VOTE_THREAD_DETAIL: {
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
        downVotesBy: threadDetail.downVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
      };
    }
    case ActionType.UP_VOTE_THREAD_COMMENT: {
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                upVotesBy: [...comment.upVotesBy, action.payload.userId],
                downVotesBy: comment.downVotesBy.filter(
                  (id) => id !== action.payload.userId
                ),
              }
            : comment
        ),
      };
    }
    case ActionType.DOWN_VOTE_THREAD_COMMENT: {
      const { commentId, userId } = action.payload;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== userId),
              downVotesBy: [...comment.downVotesBy, userId],
            };
          }
          return comment;
        }),
      };
    }
    case ActionType.NEUTRAL_VOTE_THREAD_COMMENT: {
      const { commentId, userId } = action.payload;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== userId),
            };
          }
          return comment;
        }),
      };
    }
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
