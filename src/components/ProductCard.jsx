const ProductCard = ({ product: { category, description, image, price, title } }) => {
  const intl = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
  return (
    <div className='card bg-base-300 shadow-xl'>
      <figure className='bg-white h-48'>
        <img src={image} alt={title} className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='truncate'>{description}</p>
        <div className='card-actions justify-end'>
          <p className='text-2xl font-bold'>{intl.format(price)}</p>
          <div className='badge badge-outline'>{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
