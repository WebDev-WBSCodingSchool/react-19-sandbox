const ArtistItem = ({ artist }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className='list-row'>
      <div>
        <img className='size-10 rounded-box' src={artist.cover} />
      </div>
      <div className='list-col-grow'>
        <div>{artist.name}</div>
      </div>
    </li>
  );
};

export default ArtistItem;
