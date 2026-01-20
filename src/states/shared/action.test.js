/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    const fakeUsers = [
      {
        id: 'user-1',
        name: 'User 1',
        email: '<EMAIL>',
        avatar: 'https://generated-image-url.jpg',
      },
    ];
    const fakeThreads = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        category: 'General',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    // mock implementation
    api.getAllUsers = () => Promise.resolve(fakeUsers);
    api.getAllThreads = () => Promise.resolve(fakeThreads);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    const errorMessage = 'Ups, something went wrong';

    // mock implementation
    api.getAllUsers = () => Promise.reject(new Error(errorMessage));
    api.getAllThreads = () => Promise.reject(new Error(errorMessage));

    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
