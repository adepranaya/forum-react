/**
 * test scenario for threadsSelector
 *
 * - threadSelectors function
 *  - should clamp totalVotes to 0 and never return negative values
 *  - should clamp totalVotes to 0 and never return negative values for comments
 */
import { describe, expect, it } from 'vitest';
import { getThreadDetailWithVotes } from './selector.js';

describe('threadsSelectors function', () => {
  it('should clamp totalVotes to 0 and never return negative values', () => {
    const fakeState = {
      threadDetail: {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        upVotesBy: [],
        downVotesBy: ['user-1', 'user-2'],
        comments: [],
      },
    };

    const result = getThreadDetailWithVotes(fakeState);

    // Assert
    expect(result.totalVotes).toBe(0); // Success!
  });
  it('should clamp totalVotes to 0 and never return negative values for comments', () => {
    const fakeState = {
      threadDetail: {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'This is thread 1',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'This is comment 1',
            upVotesBy: [],
            downVotesBy: ['user-2', 'user-3'],
          },
        ],
      },
    };

    const result = getThreadDetailWithVotes(fakeState);

    // Assert
    expect(result.comments[0].totalVotes).toBe(0); // Success!
  });
});
