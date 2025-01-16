import { Suspense } from 'react';
import { Products } from '@/components';
import { getProducts } from '@/data';

const FetchWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products productsPromise={getProducts('/products')} />
    </Suspense>
  );
};

export default FetchWithSuspense;
