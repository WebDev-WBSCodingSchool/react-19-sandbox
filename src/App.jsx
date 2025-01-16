import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';
import { Search } from '@/pages';
import { Fallback } from '@/components';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='search' element={<Search />} />
        </Route>
        {/* not found*/}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
