import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary join-item' disabled={pending}>
      {pending ? 'Searching...' : 'Search'}
    </button>
  );
};

export default SubmitButton;
