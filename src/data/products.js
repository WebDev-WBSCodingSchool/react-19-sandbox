const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    let message = '';
    if (res.status === 404) {
      message = 'The requested resource could not be found';
    } else {
      message = res.statusText || 'An error occurred';
    }
    throw new Error(message);
  }
  return await res.json();
};

export const getProductsForForm = async () => {
  const intialFormData = new FormData();
  intialFormData.append('query', '');
  intialFormData.append('category', 'all');
  intialFormData.append('price', '0');

  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      let message = '';
      if (res.status === 404) {
        message = 'The requested resource could not be found';
      } else {
        message = res.statusText || 'An error occurred';
      }
      throw new Error(message);
    }
    const products = await res.json();
    return { products, error: null, filters: intialFormData };
  } catch (error) {
    return { products: null, error: error.message, filters: intialFormData };
  }
};
