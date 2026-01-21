import TopNavigation from './components/TopNavigation';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import { Routes, Route, useNavigate } from 'react-router';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailThreadPage from './pages/DetailThreadPage';
import CreateThreadPage from './pages/CreateThreadPage';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import { persistor } from './states';

function App() {
  const { authUser = null, isPreload = false, theme = 'light' } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  if (isPreload) {
    return null;
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    persistor.purge();
    navigate('/');
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
          <Route path="*" element={<NotFound />} />
          <Route index element={<HomePage />} />
          <Route path="threads">
            <Route index element={<HomePage />} />
            <Route path=":id" element={<DetailThreadPage />} />
            <Route
              path="create"
              element={
                <ProtectedRoute>
                  <CreateThreadPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute to="/login">
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
