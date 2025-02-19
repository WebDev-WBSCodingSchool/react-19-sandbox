import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';
import { Loading } from '@/components';
import { examples } from '@/utils';

const MainLayout = () => {
  return (
    <>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost text-xl'>
            React 19
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a
                href='https://react.dev/blog/2024/12/05/react-19'
                target='_blank'
                rel='norelation noreferrer'
              >
                React 19 blog announcement
              </a>
            </li>
            {examples.map(example => (
              <li key={example.path}>
                <Link to={example.path}>{example.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='container mx-auto'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MainLayout;
