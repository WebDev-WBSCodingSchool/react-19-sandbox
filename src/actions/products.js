const BASE_URL = 'https://fakestoreapi.com/products';

/**
 * Fetches products from the API based on the query parameter.
 *
 * @param {Object} prevState - The previous state (not used in the function).
 * @param {FormData} formData - The form data containing the query parameter.
 * @returns {Promise<{
 *  products: string[]|null,
 *  error: string|null,
 *  query: string
 * }>} An object containing the products, error message, and query.
 */
export const searchProducts = async (prevState, formData) => {
  const queryString = formData?.get('query');
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      const message = (await res.json()).message || 'Something went wrong';
      throw new Error(message);
    }
    const products = await res.json();
    if (queryString) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(queryString.toLowerCase())
      );
      return { products: filteredProducts, error: null, query: queryString };
    }
    return { products, error: null, query: '' };
  } catch (error) {
    return { products: null, error: error.message, query: '' };
  }
};
