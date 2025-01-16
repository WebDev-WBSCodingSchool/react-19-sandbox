const Fallback = ({ error, resetErrorBoundary }) => {
  console.log({ error });

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message ? error.message : error}</pre>
      <button onClick={() => resetErrorBoundary()}>Retry</button>
    </div>
  );
};

export default Fallback;
