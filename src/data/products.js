const BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetches the products from the API based on the provided path.
 *
 * @param {string} path - The path to fetch the products from.
 * @returns {Promise<any>} The products from the API.
 */
export const getProducts = async path => {
  const res = await fetch(BASE_URL + path);
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
