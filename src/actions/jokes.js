const BASE_URL =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single';

/**
 * Fetches a joke from the API based on the provided form data.
 *
 * @param {Object} prevState - The previous state (not used in the function).
 * @param {FormData} formData - The form data containing the query parameter.
 * @returns {Promise<{
 *  joke: string|null,
 *  error: string|null,
 *  query: string
 * }>} An object containing the joke, error message, and query.
 */
export const getJoke = async (prevState, formData) => {
  const queryFromForm = formData?.get('query');
  try {
    const querySegment = queryFromForm ? `&contains=${queryFromForm}` : '';
    const res = await fetch(BASE_URL + querySegment);
    if (!res.ok) {
      const message = (await res.json()).message || 'Something went wrong';
      throw new Error(message);
    }
    const { joke } = await res.json();
    return { joke, error: null, query: queryFromForm };
  } catch (error) {
    return { joke: null, error: error.message, query: queryFromForm };
  }
};
