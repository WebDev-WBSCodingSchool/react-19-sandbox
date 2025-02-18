const ListArtists = () => {
  const artistsData = [
    {
      id: 1,
      name: 'Paul McCartney',
      cover: 'https://i.scdn.co/image/ab6761610000e5eb03bf2fe26e397122faa3d323'
    },
    {
      id: 2,
      name: 'Amon Amarth',
      cover: 'https://i.scdn.co/image/ab6761610000e5eb131d4f2d863142fda3e0f69e'
    },
    {
      id: 3,
      name: 'Belle and Sebastian',
      cover: 'https://i.scdn.co/image/ab6761610000e5eb6a456088b3e6c53b6501502c'
    }
  ];

  let artists = [];

  for (const artist of artistsData) {
    let startTime = performance.now();

    while (performance.now() - startTime < 1000) {
      // Do nothing for 1s per item to emulate extremely slow code
    }
    artists.push(artist);
  }

  return (
    <ul className='list bg-base-100 rounded-box shadow-md'>
      {artists.map(({ id, cover, name }) => (
        <li key={id} className='list-row'>
          <div>
            <img className='size-10 rounded-box' src={cover} />
          </div>
          <div className='list-col-grow'>
            <div>{name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListArtists;
