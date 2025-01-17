import { use } from 'react';
import { Alert, ProductCard } from '.';

/**
 * Products component renders a list of products.
 *
 * It receives a promise that resolves to an array of products or the array itself.
 * It uses the `use` hook to resolve the promise and render the products.
 *
 * https://react.dev/reference/react/use
 *
 * @param {Object} props - The component props.
 * @param {Promse<any>} props.productsPromise - The promise that resolves to an array of products.
 * @param {Array<Object>} props.productsArray - The array of products.
 *
 * @returns {JSX.Element} The rendered products component.
 */
const Products = ({ productsPromise, productsArray }) => {
  let products;

  if (productsPromise) {
    products = use(productsPromise);
  } else {
    products = productsArray;
  }

  if (!products.length) return <Alert type='warning' message='No products found.' />;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {products.map(({ category, description, id, image, price, title }) => (
        <ProductCard
          key={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}
        />
      ))}
    </div>
  );
};

export default Products;
