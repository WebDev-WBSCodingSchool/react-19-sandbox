/**
 * ProductCard component displays a single product card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The product category.
 * @param {string} props.description - The product description.
 * @param {string} props.image - The product image URL.
 * @param {number} props.price - The product price.
 * @param {string} props.title - The product title.
 *
 * @returns {JSX.Element} The rendered ProductCard component.
 */
const ProductCard = ({ category, description, image, price, title }) => {
  return (
    <div className='card bg-base-300 shadow-xl'>
      <figure className='bg-white h-48'>
        <img src={image} alt={title} className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='truncate'>{description}</p>
        <div className='card-actions justify-end'>
          <p className='text-2xl font-bold'>
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}
          </p>
          <div className='badge badge-outline'>{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
