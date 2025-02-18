import { useEffect, useState } from 'react';
import { Alert, Loading, ProductCard } from '@/components';

const Fetching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInitialProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          const message = (await res.json()).message || 'Something went wrong';
          throw new Error(message);
        }
        setProducts(await res.json());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getInitialProducts();
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Alert message={error.message} type='error' />;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Fetching;
