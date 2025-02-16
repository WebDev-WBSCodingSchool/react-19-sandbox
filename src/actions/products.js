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
  const query = formData?.get('query');
  const category = formData?.get('category');
  const price = parseFloat(formData?.get('price'));
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      const message = (await res.json()).message || 'Something went wrong';
      throw new Error(message);
    }
    const products = await res.json();
    let filteredProducts = products;
    if (price) {
      filteredProducts = filteredProducts.filter(product => product.price <= price);
    }
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return { products: filteredProducts, error: null, formData };
  } catch (error) {
    return { products: null, error: error.message, formData };
  }
};
