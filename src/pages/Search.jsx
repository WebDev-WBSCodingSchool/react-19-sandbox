import { useActionState } from 'react';
import { AlertError, SearchForm, SearchResults } from '@/components';
import { getJoke } from '@/actions';

// We get the initial state for our form
const initialState = await getJoke(); // target: esnext to use top-level await. This is done in vite.config.js

/**
 * Search represents a page that allows users to search for jokes.
 *
 * It takes care of rendering the search form, displaying search results, and handling errors. It handles the form state and action with the `useActionState` hook.
 *
 * Call useActionState at the top level of your component to create component state that is updated when a form action is invoked.
 * You pass useActionState an existing form action function as well as an initial state, and it returns a new action that you use in your form,
 * along with the latest form state and whether the Action is still pending. The latest form state is also passed to the function that you provided.
 *
 * https://react.dev/reference/react/useActionState
 *
 * @returns {JSX.Element} The rendered search page
 */
const Search = () => {
  const [jokeResponse, formAction] = useActionState(getJoke, initialState);

  return (
    <>
      <SearchForm action={formAction} />
      {/* The jokeResponse object is used to check if there is a joke or an error. */}
      {jokeResponse?.joke && <SearchResults joke={jokeResponse.joke} query={jokeResponse.query} />}
      {jokeResponse?.error && <AlertError error={jokeResponse.error} />}
    </>
  );
};

export default Search;
