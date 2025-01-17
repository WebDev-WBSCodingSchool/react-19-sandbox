import { Alert } from '.';

/**
 * Fallback component to display error information and provide a retry option.
 *
 * @param {Object} props - The component props.
 * @param {Error} props.error - The error object containing the error message and stack trace.
 * @param {Function} props.resetErrorBoundary - Function to reset the error boundary and retry the operation.
 * @returns {JSX.Element} The rendered Fallback component.
 */
const Fallback = ({ error, resetErrorBoundary }) => {
  const errorLines = error.stack.split('\n');

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Alert type='error' message={error.message} />
        <p>Here&apos;s the error trace:</p>
        <div className='w-full mockup-code'>
          {errorLines.map((line, index) => (
            <pre key={index}>
              <code>{line}</code>
            </pre>
          ))}
        </div>
        <button className='btn btn-warning mx-auto' onClick={() => resetErrorBoundary()}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default Fallback;
