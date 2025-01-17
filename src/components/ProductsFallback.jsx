import { Alert } from '.';

/**
 * ProductsFallback component to display error information and provide a retry option.
 *
 * @param {Object} props - The component props.
 * @param {Error} props.error - The error object containing the error message and stack trace.
 * @param {Function} props.resetErrorBoundary - Function to reset the error boundary and retry the operation.
 * @returns {JSX.Element} The rendered Fallback component.
 */
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
