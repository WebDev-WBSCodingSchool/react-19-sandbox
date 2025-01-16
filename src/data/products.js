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
    const message = (await res.json()).message || 'Something went wrong';
    throw new Error(message);
  }
  return await res.json();
};
