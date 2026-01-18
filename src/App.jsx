import TopNavigation from './components/TopNavigation';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailThreadPage from './pages/DetailThreadPage';
import CreateThreadPage from './pages/CreateThreadPAge';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <>
      <Loading />
      <TopNavigation onSignOut={onSignOut} />

      <Routes>
        {authUser === null && (
          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        )}

        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="threads">
            <Route index element={<HomePage />} />
            <Route path=":id" element={<DetailThreadPage />} />
            {authUser !== null && (
              <Route path="create" element={<CreateThreadPage />} />
            )}
          </Route>
          <Route path="leaderboard" element={<LeaderboardPage />} />
          {authUser !== null && (
            <Route path="profile" element={<ProfilePage />} />
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
