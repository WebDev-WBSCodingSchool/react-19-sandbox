import { useState } from 'react';
import { Alert, ProductCard } from '@/components';
import { searchProducts } from '@/data';

const SearchForm = () => {
  const [isPending, setIsPending] = useState();
  const [productsState, setProductsState] = useState({
    products: null,
    error: null
  });

  const searchProductsHandler = async e => {
    try {
      e.preventDefault();
      setIsPending(true);
      const formData = new FormData(e.target);
      setProductsState(await searchProducts(formData));
    } catch (error) {
      console.error(error);
      setProductsState({
        error: error.message,
        products: null
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <form onSubmit={searchProductsHandler} className='mb-5'>
        <div className='flex items-center gap-2'>
          <input
            name='query'
            placeholder='Search'
            className='input input-bordered'
            aria-label='Search for jokes containing a query.'
          />
          <select name='category' className='select select-bordered'>
            <option value='all'>All</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value='men'>Men&apos;s Clothing</option>
            <option value='women'>Women&apos;s Clothing</option>
          </select>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text'>Up to?</span>
            </div>
            <input
              type='range'
              name='price'
              min='0'
              max='1000'
              className='range range-primary range-ghost'
              aria-label='Select the number of products to display.'
            />
          </label>
          <button type='submit' className='btn btn-primary'>
            {isPending ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
      {productsState?.products && (
        <>
          <h3 className='text-xl font-bold my-5'>
            {productsState?.query
              ? `Products for: ${productsState?.query}`
              : `These are the products`}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
            {productsState.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {productsState?.error && <Alert type='error' message={productsState.error} />}
    </>
  );
};

export default SearchForm;
