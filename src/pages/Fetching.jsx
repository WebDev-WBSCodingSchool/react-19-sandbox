import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading, Products, ProductsFallback } from '@/components';
import { getProducts } from '@/data';

const Fetching = () => {
  const productsPromise = getProducts();
  return (
    <>
      <h1 className='text-xl mb-2'>
        Fetching with <code>use</code> and <code>Suspense</code>
      </h1>
      <ErrorBoundary FallbackComponent={ProductsFallback}>
        <Suspense fallback={<Loading />}>
          <Products productData={productsPromise} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Fetching;
