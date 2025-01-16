import { SubmitButton } from '.';

/**
 * SearchForm component renders a search form with an input field and a submit button.
 *
 * The built-in browser <form> component lets you create interactive controls for submitting information.
 *
 * https://react.dev/reference/react-dom/components/form
 *
 * @param {Object} props - The component props.
 * @param {string | Function} props.action - The URL to which the form data will be submitted or the action that will be invoked when the form is submitted.
 *
 * @returns {JSX.Element} The rendered search form component.
 */
const SearchForm = ({ action }) => {
  return (
    <form action={action}>
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
  );
};

export default SearchForm;
