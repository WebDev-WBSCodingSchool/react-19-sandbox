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
  const [productsResponse, formAction] = useActionState(searchProducts, use(productsPromise));

  return (
    <>
      <form action={formAction} className='mb-5'>
        <div className='join'>
          <input
            name='query'
            placeholder='Search'
            className='input input-bordered join-item'
            aria-label='Search for jokes containing a query.'
          />
          <SubmitButton />
        </div>
      </form>
      {/* The productsResponse object is used to check if there are products or an error. */}
      {productsResponse?.products ? (
        <>
          <h3 className='text-xl font-bold my-5'>
            {productsResponse?.query
              ? `Products for: ${productsResponse?.query}`
              : `These are the products`}
          </h3>
          <Products productsArray={productsResponse.products} />
        </>
      ) : (
        <Alert type='error' message={productsResponse.error} />
      )}
    </>
  );
};

export default SearchForm;
