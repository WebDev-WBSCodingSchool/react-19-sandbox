import { Alert } from '@/components';

const Fallback = ({ error, resetErrorBoundary }) => {
  const errorLines = error.stack.split('\n');

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Alert type='error' message={error.message} />
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
