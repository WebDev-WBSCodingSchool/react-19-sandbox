import { Alert } from '@/components';

const ProductsFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Alert type='error' message={error.message} />
        <button className='btn btn-warning mx-auto' onClick={() => resetErrorBoundary()}>
          Please try again
        </button>
      </div>
    </div>
  );
};

export default ProductsFallback;
