const ListPlaylists = () => {
  const playlists = [
    {
      id: 1,
      name: 'Summer Vibes',
      description: 'Get ready for the summer with these hot tracks',
      cover: 'https://i.scdn.co/image/ab67616d0000b27346e4e8079743a66a5467d091'
    },
    {
      id: 2,
      name: 'Workout Mix',
      description: 'Get pumped with these high-energy tracks',
      cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8451894f88d85e7cf210d6b6b0'
    },
    {
      id: 3,
      name: 'Focus Beats',
      description: 'Stay focused with these instrumental beats',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6_BiY92eNewnr7vb5hCWHyzT1xqrn5vpNw&s'
    }
  ];

  return (
    <ul className='list bg-base-100 rounded-box shadow-md'>
      {playlists.map(({ id, cover, description, name }) => (
        <li key={id} className='list-row'>
          <div>
            <img className='size-10 rounded-box' src={cover} />
          </div>
          <div className='list-col-grow'>
            <div>{name}</div>
            <div className='text-xs uppercase font-semibold opacity-60'>{description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListPlaylists;
