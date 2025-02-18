import { Link } from 'react-router';

const Home = () => {
  const examples = [
    {
      id: 1,
      name: 'Transitions',
      description: 'Overview of React transitions',
      path: '/transitions'
    },
    { id: 2, name: 'Search Form', path: '/search-form' },
    { id: 3, name: 'Fetching', path: '/fetching' }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {examples.map(ex => (
        <div key={ex.id} className='card bg-base-300 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>{ex.name}</h2>
            <p>{ex.description}</p>
            <div className='card-actions justify-end'>
              <Link to={ex.path}>
                <button className='btn btn-primary'>Go</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
