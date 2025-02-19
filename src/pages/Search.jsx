import { Suspense } from 'react';
import { Loading, SearchForm } from '@/components';
import { getProductsForForm } from '@/data';

const Search = () => {
  const productsPromise = getProductsForForm();

  return (
    <>
      <h1 className='text-xl mb-2'>Search form with initial data</h1>
      <Suspense fallback={<Loading />}>
        <SearchForm productsPromise={productsPromise} />
      </Suspense>
    </>
  );
};

export default Search;
