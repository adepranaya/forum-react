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
    // Prevent duplicate upvotes
    if (threadDetail.upVotesBy.includes(action.payload.userId)) {
      return threadDetail;
    }

    // Prevent direct switch from downvote to upvote
    if (threadDetail.downVotesBy.includes(action.payload.userId)) {
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
      };
    }
    return {
      ...threadDetail,
      upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
      downVotesBy: threadDetail.downVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  }
  case ActionType.DOWN_VOTE_THREAD_DETAIL: {
    // Prevent duplicate upvotes
    if (threadDetail.downVotesBy.includes(action.payload.userId)) {
      return threadDetail;
    }

    // Prevent direct switch from downvote to upvote
    if (threadDetail.upVotesBy.includes(action.payload.userId)) {
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter(
          (id) => id !== action.payload.userId
        ),
      };
    }
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
    // Prevent duplicate comments upvotes
    const comment = threadDetail.comments.find((c) => c.id === action.payload.commentId);
    if (comment.upVotesBy.includes(action.payload.userId)) {
      return threadDetail;
    }

    // Prevent direct switch from downvote to upvote
    if (comment.downVotesBy.includes(action.payload.userId)) {
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? {
              ...comment,
              downVotesBy: comment.downVotesBy.filter(
                (id) => id !== action.payload.userId
              ),
            }
            : comment
        ),
      };
    }
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
    const comment = threadDetail.comments.find((c) => c.id === action.payload.commentId);
    // Prevent duplicate comments downvotes
    if (comment.downVotesBy.includes(userId)) {
      return threadDetail;
    }

    // Prevent direct switch from downvote to upvote
    if (comment.upVotesBy.includes(userId)) {
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) =>
          comment.id === commentId
            ? {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                (id) => id !== userId
              ),
            }
            : comment
        ),
      };
    }
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
