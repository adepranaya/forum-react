import React, { useEffect } from 'react';
import Filters from '../components/Filters';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import HeadingApp from '../components/HeadingApp';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    threadCategorySelected = null,
    threadSearch = '',
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filteredThreads =
    threadCategorySelected === null
      ? threads
      : threads.filter((thread) => thread.category === threadCategorySelected);

  const searchLower = threadSearch.toLowerCase();

  const searchedThreads = filteredThreads.filter((thread) => {
    const titleMatch = thread.title.toLowerCase().includes(searchLower);
    const bodyMatch = thread.body.toLowerCase().includes(searchLower);

    return titleMatch || bodyMatch;
  });

  const threadList = searchedThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    totalVotes: thread.upVotesBy.length - thread.downVotesBy.length,
  }));

  const categoryList = threads.map((thread) => thread.category);

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingApp>All Threads</HeadingApp>
      </div>
      <Filters categories={categoryList} />
      <ThreadsList threads={threadList} />
    </>
  );
};

export default HomePage;
