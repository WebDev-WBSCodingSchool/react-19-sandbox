import { use, useActionState } from 'react';
import { Alert, Products, SubmitButton } from '.';
import { searchProducts } from '@/actions';

/**
 * SearchForm component renders a search form with an input field and a submit button.
 *
 * The built-in browser <form> component lets you create interactive controls for submitting information.
 *
 * https://react.dev/reference/react-dom/components/form
 *
 * Call useActionState at the top level of your component to create component state that is updated when a form action is invoked.
 * You pass useActionState an existing form action function as well as an initial state, and it returns a new action that you use in your form,
 * along with the latest form state and whether the Action is still pending. The latest form state is also passed to the function that you provided.
 *
 * https://react.dev/reference/react/useActionState
 *
 * @param {Object} props - The component props.
 * @param {Promise<any>} props.productsPromise - The products promise for the initial state.
 *
 * @returns {JSX.Element} The rendered search form component.
 */
const SearchForm = ({ productsPromise }) => {
  // We use `use` to unwrap the promise and pass it as initial state for the form action.
  const [productsState, formAction] = useActionState(searchProducts, use(productsPromise));

  console.log('render', productsState.formData.get('category'));

  return (
    <>
      <form action={formAction} className='mb-5'>
        <div className='flex items-center gap-2'>
          <input
            name='query'
            placeholder='Search'
            defaultValue={productsState.formData.get('query')}
            className='input input-bordered'
            aria-label='Search for jokes containing a query.'
          />
          <select
            name='category'
            defaultValue={productsState.formData.get('category')}
            className='select select-bordered'
          >
            <option value='all'>All</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value='men'>Men&apos;s Clothing</option>
            <option value='women'>Women&apos;s Clothing</option>
          </select>
          <label className='form-control'>
            <input
              type='range'
              name='price'
              min='1'
              max='1000'
              defaultValue={productsState.formData.get('price')}
              className='range range-primary range-ghost'
              aria-label='Select the number of products to display.'
            />
          </label>
          <SubmitButton />
        </div>
      </form>
      {/* The productsResponse object is used to check if there are products or an error. */}
      {productsState?.products ? (
        <>
          <h3 className='text-xl font-bold my-5'>
            {productsState?.query
              ? `Products for: ${productsState?.query}`
              : `These are the products`}
          </h3>
          <Products productsArray={productsState.products} />
        </>
      ) : (
        <Alert type='error' message={productsState.error} />
      )}
    </>
  );
};

export default SearchForm;
