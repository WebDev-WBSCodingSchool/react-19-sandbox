const Alert = ({ message, type }) => {
  const getAlertClasses = () => {
    let classes = 'w-full my-4 alert ';
    if (type === 'error') {
      classes += 'alert-error';
    } else if (type === 'warning') {
      classes += 'alert-warning';
    } else if (type === 'success') {
      classes += 'alert-success';
    } else {
      classes += 'alert-info';
    }
    return classes;
  };

  return (
    <div role='alert' className={getAlertClasses()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
