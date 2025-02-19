import { useTransition } from 'react';

const ListSelectionButton = ({ disabled, label, action }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className='btn btn-success capitalize'
      onClick={() => startTransition(action)}
      disabled={disabled || isPending}
    >
      {isPending && <span className='loading loading-spinner'></span>}
      {label}
    </button>
  );
};

export default ListSelectionButton;
