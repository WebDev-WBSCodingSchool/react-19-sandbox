import { Suspense } from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='container mx-auto'>
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen'>
            <span className='loading loading-spinner loading-xl text-error'></span>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
