import React, { useEffect } from 'react';
import Filters from '../components/Filters';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    threadCategorySelected = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filteredThreads =
    threadCategorySelected === null
      ? threads
      : threads.filter((thread) => thread.category === threadCategorySelected);

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    totalVotes: thread.upVotesBy.length + thread.downVotesBy.length,
    // authUser: authUser.id,
  }));

  const categoryList = threads.map((thread) => thread.category);

  return (
    <>
      <Filters categories={categoryList} />
      <ThreadsList threads={threadList} />
    </>
  );
};

export default HomePage;
