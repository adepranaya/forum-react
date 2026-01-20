/**
 * test scenario for threadsSelector
 *
 * - threadSelectors function
 *  - should clamp totalVotes to 0 and never return negative values
 *
 */
import { describe, expect, it } from 'vitest';
import { getThreadList } from './selector.js';

describe('threadsSelectors function', () => {
  it('should clamp totalVotes to 0 and never return negative values', () => {
    const fakeState = {
      threads: [
        {
          id: 'thread-1',
          upVotesBy: [],
          downVotesBy: ['user-1', 'user-2'], // Score is -2
          title: 'Test',
          body: 'Test',
          category: 'General',
        },
      ],
      users: [],
      threadCategorySelected: null,
      threadSearch: '',
    };

    const result = getThreadList(fakeState);

    // Assert
    expect(result[0].totalVotes).toBe(0); // Success!
  });
});
