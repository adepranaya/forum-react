import React, { useEffect } from 'react';
import Filters from '../components/Filters';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardsList from '../components/LeaderboardsList';
import HeadingApp from '../components/HeadingApp';

const LeaderboardPage = () => {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <HeadingApp>Leaderboard</HeadingApp>
      </div>
      <LeaderboardsList leaderboards={leaderboards} />
    </>
  );
};

export default LeaderboardPage;
