/**
 * SearchResults component that displays the search results.
 *
 * It takes the joke and query as props and displays the joke with the query if it exists.
 *
 * @param {Object} props - The component props.
 * @param {string} props.joke - The joke to display.
 * @param {string} props.query - The query to display.
 *
 * @returns {JSX.Element} The rendered results.
 */
const SearchResults = ({ joke, query }) => {
  return (
    <>
      <h3 className='text-xl font-bold my-5'>
        {query ? `Here's a joke for: ${query}` : `No prompt? Here's a random joke`}
      </h3>
      <blockquote className='p-4 my-4 border-s-4 border-primary bg-gray-50  dark:bg-gray-800'>
        <p className='text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white'>
          {joke}
        </p>
      </blockquote>
    </>
  );
};

export default SearchResults;
