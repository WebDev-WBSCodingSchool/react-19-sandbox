import { useRef } from 'react';
import { Link, Outlet } from 'react-router';

/**
 * MainLayout component that provides a drawer layout with a sidebar and main content area.
 *
 * @returns {JSX.Element} The rendered drawer layout component.
 */
const MainLayout = () => {
  const drawerCheckbox = useRef();
  const closeDrawer = () => (drawerCheckbox.current.checked = false);

  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' ref={drawerCheckbox} />
      <div className='drawer-content'>
        <div className='container mx-auto py-5'>
          <label htmlFor='my-drawer' className='btn btn-primary drawer-button mb-5'>
            Menu
          </label>
          <Outlet />
        </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
          <li>
            <Link to='/' onClick={closeDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/search`} onClick={closeDrawer}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
