import { Suspense } from 'react';
import { Loading, SearchForm } from '@/components';
import { getProductsForForm } from '@/data';

/**
 * Search represents a page that allows users to search for products.
 *
 * It takes care of getting the initial data for the search form, which is a list of products.
 * It uses `Suspense` to handle loading states and since it doesn't declare an `ErrorBoundary` errors
 * will be thrown to the nearest error boundary, which is the ErrorBoundary component in the App component.
 *
 * @returns {JSX.Element} The rendered search page
 */
const Search = () => {
  const productsPromise = getProductsForForm();

  return (
    <Suspense fallback={<Loading />}>
      <SearchForm productsPromise={productsPromise} />
    </Suspense>
  );
};

export default Search;
