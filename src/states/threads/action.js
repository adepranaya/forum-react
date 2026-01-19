import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { withAuth } from '../../utils';
import { createVoteThunk } from '../../utils/createVoteThunk';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function neutralThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function downThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

const asyncAddThread = withAuth(({ title, body, category = '' }) => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
});

// Config untuk thread votes
const threadVoteConfig = {
  actionCreators: {
    up: upThreadActionCreator,
    down: downThreadActionCreator,
    neutral: neutralThreadActionCreator
  },
  getVoteState: (state, threadId) => {
    const thread = state.threads.find((t) => t.id === threadId);
    return {
      upVotesBy: thread.upVotesBy,
      downVotesBy: thread.downVotesBy
    };
  },
  getParams: (state, threadId, authUser) => ({
    threadId,
    userId: authUser.id
  })
};
const asyncUpVoteThread = createVoteThunk({
  voteType: 'up',
  ...threadVoteConfig,
  apiCall: api.upVoteThread
});

const asyncDownVoteThread = createVoteThunk({
  voteType: 'down',
  ...threadVoteConfig,
  apiCall: api.downVoteThread
});

const asyncNeutralVoteThread = createVoteThunk({
  voteType: 'neutral',
  ...threadVoteConfig,
  apiCall: api.neutralVoteThread
});

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upThreadActionCreator,
  neutralThreadActionCreator,
  downThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
};
