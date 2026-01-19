import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { withAuth } from '../../utils';
import { createVoteThunk } from '../../utils/createVoteThunk';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
  UP_VOTE_THREAD_COMMENT: 'UP_VOTE_THREAD_COMMENT',
  DOWN_VOTE_THREAD_COMMENT: 'DOWN_VOTE_THREAD_COMMENT',
  NEUTRAL_VOTE_THREAD_COMMENT: 'NEUTRAL_VOTE_THREAD_COMMENT',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function neutralVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function upVoteThreadCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteThreadCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteThreadCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function addThreadCommentActionCreator(content) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      content,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function _asyncCreateThreadComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createThreadComment({ id, content });
      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

const threadDetailVoteConfig = {
  actionCreators: {
    up: upVoteThreadDetailActionCreator,
    down: downVoteThreadDetailActionCreator,
    neutral: neutralVoteThreadDetailActionCreator,
  },
  getVoteState: (state) => ({
    upVotesBy: state.threadDetail.upVotesBy,
    downVotesBy: state.threadDetail.downVotesBy,
  }),
  getParams: (state, params, authUser) => authUser.id,
};

// Config untuk thread comment votes
const threadCommentVoteConfig = {
  actionCreators: {
    up: upVoteThreadCommentActionCreator,
    down: downVoteThreadCommentActionCreator,
    neutral: neutralVoteThreadCommentActionCreator,
  },
  getVoteState: (state, { commentId }) => {
    const comment = state.threadDetail.comments.find((c) => c.id === commentId);
    return {
      upVotesBy: comment.upVotesBy,
      downVotesBy: comment.downVotesBy,
    };
  },
  getParams: (state, params, authUser) => ({
    commentId: params.commentId,
    userId: authUser.id,
  }),
};

const asyncCreateThreadComment = withAuth(_asyncCreateThreadComment);
const asyncUpVoteThreadDetail = createVoteThunk({
  voteType: 'up',
  ...threadDetailVoteConfig,
  apiCall: (_, state) => {
    const { threadDetail } = state;
    return api.upVoteThread(threadDetail.id);
  },
});
const asyncDownVoteThreadDetail = createVoteThunk({
  voteType: 'down',
  ...threadDetailVoteConfig,
  apiCall: (_, state) => {
    const { threadDetail } = state;
    return api.downVoteThread(threadDetail.id);
  },
});
const asyncNeutralVoteThreadDetail = createVoteThunk({
  voteType: 'neutral',
  ...threadDetailVoteConfig,
  apiCall: (_, state) => {
    const { threadDetail } = state;
    return api.neutralVoteThread(threadDetail.id);
  },
});
const asyncUpVoteThreadComment = createVoteThunk({
  voteType: 'up',
  ...threadCommentVoteConfig,
  apiCall: ({ id, commentId }) => {
    console.log(id, commentId);
    return api.upVoteThreadComment({ id, commentId });
  },
});
const asyncDownVoteThreadComment = createVoteThunk({
  voteType: 'down',
  ...threadCommentVoteConfig,
  apiCall: ({ id, commentId }) => api.downVoteThreadComment({ id, commentId }),
});
const asyncNeutralVoteThreadComment = createVoteThunk({
  voteType: 'neutral',
  ...threadCommentVoteConfig,
  apiCall: ({ id, commentId }) =>
    api.neutralVoteThreadComment({ id, commentId }),
});

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  addThreadCommentActionCreator,
  asyncCreateThreadComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteThreadComment,
  asyncDownVoteThreadComment,
  asyncNeutralVoteThreadComment,
};
