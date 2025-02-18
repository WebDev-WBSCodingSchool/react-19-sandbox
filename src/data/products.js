const BASE_URL = 'https://fakestoreapi.com/products';

export const searchProducts = async formData => {
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
    return { products: filteredProducts, error: null, filters: formData };
  } catch (error) {
    return { products: null, error: error.message, filters: formData };
  }
};
