const BASE_URL = 'https://fakestoreapi.com/products';

/**
 * Fetches the products from the API based on the provided path.
 *
 * @param {string} path - The path to fetch the products from.
 * @returns {Promise<any>} The products from the API.
 */
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

/**
 * Fetches the products from the API for the form.
 *
 * @param {string} query - The query to search for products.
 * @returns {Promise<any>} The products from the API.
 */
export const getProductsForForm = async query => {
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
    return { products, error: null, query };
  } catch (error) {
    return { products: null, error: error.message, query };
  }
};
