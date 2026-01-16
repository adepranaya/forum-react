import TopNavigation from './components/TopNavigation';
import SideNavigation from './components/SideNavigation';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Loading />
      <TopNavigation />
      <div className="max-w-360 mx-auto flex gap-6 px-6 py-8">
        <SideNavigation />
        <main className="flex-1 min-w-0">
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
