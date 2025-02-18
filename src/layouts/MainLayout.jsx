import { Loading } from '@/components';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='container mx-auto mt-5'>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
