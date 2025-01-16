import { use } from 'react';

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {products.map(({ id, image, title }) => (
        <div key={id} className='card bg-base-300 shadow-xl'>
          <figure className='bg-white h-48'>
            <img src={image} alt={title} className='object-cover h-full w-full' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <div className='badge badge-outline'>Fashion</div>
              <div className='badge badge-outline'>Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
