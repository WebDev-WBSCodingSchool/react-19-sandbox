import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router';
import { MainLayout } from '@/layouts';
import { Search } from '@/pages';
import { Fallback } from '@/components';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
