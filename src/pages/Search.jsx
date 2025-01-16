import { useActionState } from 'react';
import { AlertError, SearchForm, SearchResults } from '@/components';
import { getJoke } from '@/actions';

const initialState = await getJoke(); // target: esnext to use top-level await

const Search = () => {
  const [jokeResponse, formAction] = useActionState(getJoke, initialState);

  return (
    <>
      <SearchForm action={formAction} />
      {jokeResponse?.joke && <SearchResults joke={jokeResponse.joke} query={jokeResponse.query} />}
      {jokeResponse?.error && <AlertError error={jokeResponse.error} />}
    </>
  );
};

export default Search;
