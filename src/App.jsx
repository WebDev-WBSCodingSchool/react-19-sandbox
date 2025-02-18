import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';

const Home = lazy(() => import('@/pages/Home'));
const Forms = lazy(() => import('@/pages/Forms'));
const Transitions = lazy(() => import('@/pages/Transitions'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='forms' element={<Forms />} />
        <Route path='transitions' element={<Transitions />} />
      </Route>
    </Routes>
  );
};

export default App;
