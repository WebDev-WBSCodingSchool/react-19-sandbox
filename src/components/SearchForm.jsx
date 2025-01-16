import { SubmitButton } from '@/components';

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
