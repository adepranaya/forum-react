/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with the up voted thread when given by UP_VOTE_THREAD action
 *  - should return the threads without duplicating the user ID when UP_VOTE_THREAD is dispatched twice by the same user
 *  - should return the threads with the down voted thread when given by DOWN_VOTE_THREAD action
 *  - should return the threads without duplicating the user ID when DOWN_VOTE_THREAD is dispatched twice by the same user
 *  - should return the threads with the neutral voted thread when given by NEUTRAL_VOTE_THREAD action
 *  - should return the threads unchanged when NEUTRAL_VOTE_THREAD is dispatched and user is already neutral
 *
 */

import threadsReducer from './reducer';
import { ActionType } from './action';
import { describe, expect, it } from 'vitest';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread 1',
            body: 'This is thread 1',
            category: 'General',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const newThread = {
      id: 'thread-2',
      title: 'Thread 2',
      body: 'This is thread 2',
      category: 'General',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: newThread,
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([newThread, ...initialState]);
  });

  it('should return the threads with the up voted thread when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState[0].upVotesBy).toContain('user-1');
    expect(nextState[0].downVotesBy).not.toContain('user-1');
  });

  it('should return the threads without duplicating the user ID when UP_VOTE_THREAD is dispatched twice by the same user', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        // User-1 sudah memberikan upvote sebelumnya
        upVotesBy: ['user-1'],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    // Memastikan user-1 tetap ada
    expect(nextState[0].upVotesBy).toContain('user-1');

    // Memastikan jumlahnya tidak bertambah (mencegah duplikasi)
    expect(nextState[0].upVotesBy).toHaveLength(1);

    // Memastikan user tersebut juga tidak ada di downVotes
    expect(nextState[0].downVotesBy).not.toContain('user-1');
  });

  it('should return the threads with the down voted thread when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState[0].downVotesBy).toContain('user-1');
    expect(nextState[0].upVotesBy).not.toContain('user-1');
  });

  it('should return the threads without duplicating the user ID when DOWN_VOTE_THREAD is dispatched twice by the same user', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: [],
        // User-1 sudah memberikan downvote sebelumnya
        downVotesBy: ['user-1'],
      },
    ];

    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    // Memastikan user-1 tetap ada
    expect(nextState[0].downVotesBy).toContain('user-1');
    // Memastikan jumlahnya tidak bertambah (mencegah duplikasi)
    expect(nextState[0].downVotesBy).toHaveLength(1);

    // Memastikan user tersebut juga tidak ada di upVotes
    expect(nextState[0].upVotesBy).not.toContain('user-1');
  });

  it('should return the threads with the neutral voted thread when given by NEUTRAL_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: ['user-1'],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState[0].upVotesBy).not.toContain('user-1');
    expect(nextState[0].downVotesBy).toContain('user-2');
  });

  it('should return the threads unchanged when NEUTRAL_VOTE_THREAD is dispatched and user is already neutral', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        upVotesBy: [], // user-1 tidak ada di sini
        downVotesBy: [], // user-1 juga tidak ada di sini
        // ... field lainnya
      },
    ];
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState[0].upVotesBy).not.toContain('user-1');
    expect(nextState[0].downVotesBy).not.toContain('user-1');
    // Memastikan array tetap kosong dan tidak berubah menjadi undefined/error
    expect(nextState[0].upVotesBy).toHaveLength(0);
    expect(nextState[0].downVotesBy).toHaveLength(0);
  });
});
