import { Link } from 'react-router';
import { examples } from '@/utils';

const Home = () => {
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
