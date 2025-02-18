import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/pages/Home'));
const Fetching = lazy(() => import('@/pages/Fetching'));
const Search = lazy(() => import('@/pages/Search'));
const Transitions = lazy(() => import('@/pages/Transitions'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='fetching' element={<Fetching />} />
        <Route path='transitions' element={<Transitions />} />
        <Route path='search-form' element={<Search />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
