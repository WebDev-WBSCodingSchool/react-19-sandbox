/**
 * Loading component.
 *
 * @returns {JSX.Element} The rendered loading component.
 */
const Loading = () => {
  return (
    <div className='container mx-auto py-5'>
      <div className='h-full flex flex-col items-center justify-center'>
        <span className='loading loading-dots loading-lg'></span>
      </div>
    </div>
  );
};

export default Loading;
