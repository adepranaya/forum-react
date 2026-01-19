import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

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

function asyncCreateThreadComment({ id, content }) {
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

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncNeutralVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(neutralVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.neutralVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}
function asyncUpVoteThreadComment({ id, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      upVoteThreadCommentActionCreator({ commentId, userId: authUser.id })
    );
    try {
      await api.upVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThreadComment({ id, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      downVoteThreadCommentActionCreator({ commentId, userId: authUser.id })
    );
    try {
      await api.downVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncNeutralVoteThreadComment({ id, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      neutralVoteThreadCommentActionCreator({ commentId, userId: authUser.id })
    );
    try {
      await api.neutralVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

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
