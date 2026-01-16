import TopNavigation from './components/TopNavigation';
import SideNavigation from './components/SideNavigation';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailThreadPage from './pages/DetailThreadPage';
import CreateThreadPage from './pages/CreateThreadPAge';

function App() {
  return (
    <>
      <Loading />
      <TopNavigation />
      <div className="max-w-360 mx-auto flex gap-6 px-6 py-8">
        <SideNavigation />
        <main className="flex-1 min-w-0">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="threads">
              <Route index element={<HomePage />} />
              <Route path=":id" element={<DetailThreadPage />} />
              <Route path="create" element={<CreateThreadPage />} />
            </Route>
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
