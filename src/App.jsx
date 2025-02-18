import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
const Transitions = lazy(() => import('@/pages/Transitions'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='transitions' element={<Transitions />} />
        <Route path='search-form' element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;
