const ListSongs = () => {
  const songs = [
    {
      id: 1,
      name: 'Call it Dreaming',
      artist: 'Iron & Wine',
      cover: 'https://i1.sndcdn.com/artworks-yPw4q4J5i0ff-0-t500x500.png'
    },
    {
      id: 2,
      name: 'Hasta la Raíz',
      artist: 'Natalia Lafourcade',
      cover: 'https://i1.sndcdn.com/artworks-f407f056-cdac-410f-9420-5923a7652e0c-0-t500x500.jpg'
    },
    {
      id: 3,
      name: 'Stick Season',
      artist: 'Noah Kahan',
      cover: 'https://i1.sndcdn.com/artworks-9c8d3439-be8e-4626-a315-ed207fe2caf6-0-t500x500.jpg'
    }
  ];

  return (
    <ul className='list bg-base-100 rounded-box shadow-md'>
      {songs.map(({ id, artist, cover, name }) => (
        <li key={id} className='list-row'>
          <div>
            <img className='size-10 rounded-box' src={cover} />
          </div>
          <div className='list-col-grow'>
            <div>{name}</div>
            <div className='text-xs uppercase font-semibold opacity-60'>{artist}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListSongs;
