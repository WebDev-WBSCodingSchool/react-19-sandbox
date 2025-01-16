import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { Loading, Products, ProductsFallback } from '@/components';
import { getProducts } from '@/data';

/**
 * FetchWithSuspense represents a page that fetches products from an API and displays them in a grid. It uses `Suspense` to handle loading states and `ErrorBoundary` to handle errors.
 *
 * The `Products` component receives a `productsPromise` prop that is used to fetch the products. It uses the `use` hook to get the resolved value of the promise and trigger the Suspense loading state.
 *
 * https://react.dev/reference/react/Suspense
 *
 * https://react.dev/reference/react/use
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
