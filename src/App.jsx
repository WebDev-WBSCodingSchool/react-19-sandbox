import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';
import { Fallback } from '@/components';

const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
const Transitions = lazy(() => import('@/pages/Transitions'));

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='transitions' element={<Transitions />} />
          <Route path='search-form' element={<Search />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
