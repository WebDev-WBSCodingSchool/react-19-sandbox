import { use } from 'react';
import { Alert, ProductCard } from '@/components';

const Products = ({ productData }) => {
  let products;

  if (productData instanceof Promise) {
    products = use(productData);
  } else if (productData instanceof Array) {
    products = productData;
  } else {
    throw new Error('Something went wrong while fetching products.');
  }

  if (!products.length) return <Alert type='warning' message='No products found.' />;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
