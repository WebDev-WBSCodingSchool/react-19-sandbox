import { use } from 'react';

/**
 * Products component renders a list of products.
 *
 * It receives a promise that resolves to an array of products. It uses the `use` hook to resolve the promise and render the products.
 *
 * https://react.dev/reference/react/use
 *
 * @param {Object} props - The component props.
 * @param {Promse<any>} props.productsPromise - The promise that resolves to an array of products.
 *
 * @returns {JSX.Element} The rendered products component.
 */
const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {products.map(({ category, description, id, image, price, title }) => (
        <div key={id} className='card bg-base-300 shadow-xl'>
          <figure className='bg-white h-48'>
            <img src={image} alt={title} className='object-cover h-full w-full' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
            <p className='truncate'>{description}</p>
            <div className='card-actions justify-end'>
              <p className='text-2xl font-bold'>
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
                  price
                )}
              </p>
              <div className='badge badge-outline'>{category}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
