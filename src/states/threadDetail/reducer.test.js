/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with the new comment when given by ADD_THREAD_COMMENT action
 *  - should return the thread detail with the up voted thread when given by UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail without duplicating the user ID when UP_VOTE_THREAD_DETAIL is dispatched twice by the same user
 *  - should return the thread detail with the down voted thread when given by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail without duplicating the user ID when DOWN_VOTE_THREAD_DETAIL is dispatched twice by the same user
 *  - should return the thread detail with the neutral voted thread when given by NEUTRAL_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with the neutral voted thread when given by UP_VOTE_THREAD_DETAIL action but user have downvoted before
 *  - should return the thread detail with the neutral voted thread when given by DOWN_VOTE_THREAD_DETAIL action but user have upvoted before
 *  - should return the thread detail unchanged when NEUTRAL_VOTE_THREAD_DETAIL is dispatched and user is already neutral
 *  - should return the thread detail with the up voted comment when given by UP_VOTE_THREAD_COMMENT action
 *  - should return the thread detail with the down voted comment when given by DOWN_VOTE_THREAD_COMMENT action
 *  - should return the thread detail with the neutral voted comment when given by NEUTRAL_VOTE_THREAD_COMMENT action
 *  - should return the thread detail with the up voted comment when given by UP_VOTE_THREAD_COMMENT action but user have downvoted before
 *  - should return the thread detail with the down voted comment when given by DOWN_VOTE_THREAD_COMMENT action but user have upvoted before
 *  - should return the thread detail unchanged when NEUTRAL_VOTE_THREAD_COMMENT is dispatched and user is already neutral
 */

import threadDetailReducer from './reducer';
import { ActionType } from './action';
import { describe, expect, it } from 'vitest';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread 1',
          body: 'This is thread 1',
          category: 'General',
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with the new comment when given by ADD_THREAD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const newComment = {
      id: 'comment-1',
      content: 'This is a comment',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.ADD_THREAD_COMMENT,
      payload: {
        content: newComment,
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [newComment, ...initialState.comments],
    });
  });

  it('should return the thread detail with the up voted thread when given by UP_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [...initialState.upVotesBy, 'user-1'],
      downVotesBy: initialState.downVotesBy.filter((id) => id !== 'user-1'),
    });
  });

  it('should return the thread detail without duplicating the user ID when UP_VOTE_THREAD_DETAIL is dispatched twice by the same user', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: ['user-1'],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail with the down voted thread when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [...initialState.downVotesBy, 'user-1'],
      upVotesBy: initialState.upVotesBy.filter((id) => id !== 'user-1'),
    });
  });

  it('should return the thread detail without duplicating the user ID when DOWN_VOTE_THREAD_DETAIL is dispatched twice by the same user', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: ['user-1'],
      comments: [],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail with the neutral voted thread when given by NEUTRAL_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: ['user-1'],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: initialState.upVotesBy.filter((id) => id !== 'user-1'),
      downVotesBy: initialState.downVotesBy.filter((id) => id !== 'user-1'),
    });
  });

  it('should return the thread detail with the neutral voted thread when given by UP_VOTE_THREAD_DETAIL action but user have downvoted before', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: ['user-1'],
      comments: [],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.upVotesBy).not.toContain('user-1');
    expect(nextState.downVotesBy).not.toContain('user-1');
  });

  it('should return the thread detail with the neutral voted thread when given by DOWN_VOTE_THREAD_DETAIL action but user have upvoted before', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: ['user-1'],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.upVotesBy).not.toContain('user-1');
    expect(nextState.downVotesBy).not.toContain('user-1');
  });

  it('should return the thread detail unchanged when NEUTRAL_VOTE_THREAD_DETAIL is dispatched and user is already neutral', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail with the up voted comment when given by UP_VOTE_THREAD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) =>
        comment.id === 'comment-1'
          ? {
            ...comment,
            upVotesBy: [...comment.upVotesBy, 'user-1'],
            downVotesBy: comment.downVotesBy.filter((id) => id !== 'user-1'),
          }
          : comment
      ),
    });
  });

  it('should return the thread detail with the down voted comment when given by DOWN_VOTE_THREAD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) =>
        comment.id === 'comment-1'
          ? {
            ...comment,
            downVotesBy: [...comment.downVotesBy, 'user-1'],
            upVotesBy: comment.upVotesBy.filter((id) => id !== 'user-1'),
          }
          : comment
      ),
    });
  });

  it('should return the thread detail with the neutral voted comment when given by NEUTRAL_VOTE_THREAD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: ['user-1'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) =>
        comment.id === 'comment-1'
          ? {
            ...comment,
            upVotesBy: comment.upVotesBy.filter((id) => id !== 'user-1'),
            downVotesBy: comment.downVotesBy.filter((id) => id !== 'user-1'),
          }
          : comment
      ),
    });
  });

  it('should return the thread detail with the up voted comment when given by UP_VOTE_THREAD_COMMENT action but user have downvoted before', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: [],
          downVotesBy: ['user-1'],
        },
      ],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments.find((comment) => comment.id === 'comment-1').upVotesBy).not.toContain('user-1');
    expect(nextState.comments.find((comment) => comment.id === 'comment-1').downVotesBy).not.toContain('user-1');
  });

  it('should return the thread detail with the down voted comment when given by DOWN_VOTE_THREAD_COMMENT action but user have upvoted before', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: ['user-1'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments.find((comment) => comment.id === 'comment-1').upVotesBy).not.toContain('user-1');
    expect(nextState.comments.find((comment) => comment.id === 'comment-1').downVotesBy).not.toContain('user-1');
  });

  it('should return the thread detail unchanged when NEUTRAL_VOTE_THREAD_COMMENT is dispatched and user is already neutral', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread 1',
      body: 'This is thread 1',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
});
