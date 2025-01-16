import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';
import { Home, NotFound, Search } from '@/pages';
import { Fallback } from '@/components';

/**
 * App component that sets up the main application routes and error boundary.
 * The error boundary catches errors in the component tree and displays a fallback UI.
 *
 * https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 *
 * Since there's currently no way to create an error boundary as a function component, React recoommends abstracting the error boundary logic
 * to a third-party library like react-error-boundary.
 *
 * https://github.com/bvaughn/react-error-boundary
 *
 *
 * @returns {JSX.Element} The rendered main component.
 */
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
