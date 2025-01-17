import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading, Products, ProductsFallback } from '@/components';
import { getProducts } from '@/data';

/**
 * FetchWithSuspense represents a page that fetches products from an API and displays them in a grid.
 * It uses `Suspense` to handle loading states and `ErrorBoundary` to handle errors.
 *
 * https://react.dev/reference/react/Suspense
 *
 * @returns {JSX.Element} The rendered search page
 */
const FetchWithSuspense = () => {
  const productsPromise = getProducts('/products');

  return (
    <ErrorBoundary FallbackComponent={ProductsFallback}>
      <Suspense fallback={<Loading />}>
        <Products productsPromise={productsPromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FetchWithSuspense;
