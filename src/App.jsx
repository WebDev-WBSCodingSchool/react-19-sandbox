import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/components/Home'));
const Transitions = lazy(() => import('@/components/Transitions'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='transitions' element={<Transitions />} />
      </Route>
    </Routes>
  );
};

export default App;
