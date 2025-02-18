import { ArtistItem } from '@/components';

const ListArtists = () => {
  const artistsData = Array.from({ length: 500 }, (_, index) => {
    return {
      id: index + 1,
      name: `Artist ${index + 1}`,
      cover: `https://robohash.org/${index}`
    };
  });

  let artists = [];

  for (let i = 0; i < artistsData.length; i++) {
    artists.push(<ArtistItem key={artistsData[i].id} artist={artistsData[i]} />);
  }

  return <ul className='list bg-base-100 rounded-box shadow-md'>{artists}</ul>;
};

export default ListArtists;
