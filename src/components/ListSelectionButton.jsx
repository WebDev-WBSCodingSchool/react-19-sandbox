const ListSelectionButton = ({ disabled, label, setList }) => {
  return (
    <button
      className='btn btn-success capitalize'
      onClick={() => {
        setList(label);
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ListSelectionButton;
