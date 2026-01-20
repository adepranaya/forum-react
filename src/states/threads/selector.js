import { createSelector } from '@reduxjs/toolkit';

// 1. Basic input selectors (grabbing raw data)
const getThreads = (state) => state.threads;
const getUsers = (state) => state.users;
const getCategory = (state) => state.threadCategorySelected;
const getSearch = (state) => state.threadSearch;

// 2. The Memoized Selector
export const getThreadList = createSelector(
  [getThreads, getUsers, getCategory, getSearch],
  (threads, users, category, search) => {
    const searchLower = search.toLowerCase();

    return threads
      .filter((thread) => {
        const categoryMatch = !category || thread.category === category;
        const contentMatch =
          thread.title.toLowerCase().includes(searchLower) ||
          thread.body.toLowerCase().includes(searchLower);
        return categoryMatch && contentMatch;
      })
      .map((thread) => {
        // DERIVED DATA LOGIC
        const rawScore = thread.upVotesBy.length - thread.downVotesBy.length;

        return {
          ...thread,
          user: users.find((u) => u.id === thread.ownerId),
          // Your "No Negative" Rule
          totalVotes: Math.max(0, rawScore),
        };
      });
  }
);
