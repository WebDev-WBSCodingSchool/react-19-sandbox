import { useFormStatus } from 'react-dom';

/**
 * SubmitButton component that uses the form status to disable the button when the form is pending.
 *
 * It achieves this by using the `useFormStatus` hook to get the `pending` status.
 *
 * The `useFormStatus` Hook provides status information of the last form submission. To get status information, the SubmitButton component must be rendered within a <form>.
 * The Hook returns information like the pending property which tells you if the form is actively submitting.
 *
 * https://react.dev/reference/react-dom/hooks/useFormStatus
 *
 * @returns {JSX.Element} The rendered button.
 */
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary join-item' disabled={pending}>
      {pending ? 'Searching...' : 'Search'}
    </button>
  );
};

export default SubmitButton;
