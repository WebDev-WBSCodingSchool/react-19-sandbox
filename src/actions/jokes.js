const BASE_URL =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single';

export const getJoke = async (prevState, formData) => {
  const queryFromForm = formData.get('query');
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
