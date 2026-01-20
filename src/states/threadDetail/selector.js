import { createSelector } from '@reduxjs/toolkit';

// 1. Basic input selectors (grabbing raw data)
const getThreadDetail = (state) => state.threadDetail;

// 2. The Memoized Selector
export const getThreadDetailWithVotes = createSelector(
  [getThreadDetail],
  (threadDetails) => {
    const threadDetail = threadDetails;
    return {
      ...threadDetail,
      totalVotes: Math.max(
        0,
        threadDetail
          ? threadDetail?.upVotesBy?.length - threadDetail?.downVotesBy?.length
          : 0
      ),
      comments: threadDetail?.comments
        ? threadDetail.comments.map((comment) => ({
          ...comment,
          totalVotes:
              Math.max(0, comment?.upVotesBy?.length - comment?.downVotesBy?.length),
        }))
        : [],
    };
  }
);
