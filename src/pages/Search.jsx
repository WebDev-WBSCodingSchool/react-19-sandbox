import { useActionState } from 'react';
import { SearchError, SearchForm, SearchResults } from '@/components';
import { getJoke } from '@/actions';

const Search = () => {
  const [jokeResponse, formAction] = useActionState(getJoke, null);

  return (
    <>
      <SearchForm action={formAction} />
      {jokeResponse?.joke && <SearchResults joke={jokeResponse.joke} query={jokeResponse.query} />}
      {jokeResponse?.error && <SearchError error={jokeResponse.error} />}
    </>
  );
};

export default Search;
