import React, { useEffect } from 'react';
import Filters from '../components/Filters';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import HeadingApp from '../components/HeadingApp';
import { getThreadList } from '../states/threads/selector';

const HomePage = () => {
  const threadList = useSelector(getThreadList);
  const { threads = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categoryList = threads.map((thread) => thread.category);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <HeadingApp>All Threads</HeadingApp>
      </div>
      <Filters categories={categoryList} />
      <ThreadsList threads={threadList} />
    </>
  );
};

export default HomePage;
