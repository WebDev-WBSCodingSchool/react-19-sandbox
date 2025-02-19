import { Suspense } from 'react';
import { Loading, SearchForm } from '@/components';
import { getProductsForForm } from '@/data';

const Search = () => {
  const productsPromise = getProductsForForm();

  return (
    <Suspense fallback={<Loading />}>
      <SearchForm productsPromise={productsPromise} />
    </Suspense>
  );
};

export default Search;
