import { startTransition, use, useActionState } from 'react';
import { Alert, Products } from '@/components';
import { searchProducts } from '@/actions';

const SearchForm = ({ productsPromise }) => {
  const [productsState, searchAction, isPending] = useActionState(
    searchProducts,
    use(productsPromise)
  );

  const searchSubmitHandler = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    startTransition(() => {
      searchAction(formData);
    });
  };

  return (
    <>
      <form onSubmit={searchSubmitHandler} className='mb-5'>
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
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
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
            {productsState?.filters?.get('query')
              ? `Products for: ${productsState?.filters?.get('query')}`
              : `These are the products`}
          </h3>
          <Products productData={productsState.products} />
        </>
      )}
      {productsState?.error && <Alert type='error' message={productsState.error} />}
    </>
  );
};

export default SearchForm;
