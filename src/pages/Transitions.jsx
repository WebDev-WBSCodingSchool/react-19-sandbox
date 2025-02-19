import { useState } from 'react';
import { ListArtists, ListPlaylists, ListSelectionButton, ListSongs } from '@/components';

const Transitions = () => {
  const [list, setList] = useState('playlists');

  return (
    <>
      <div className='flex gap-2'>
        <ListSelectionButton
          action={() => setList('playlists')}
          label='playlists'
          disabled={list === 'playlists'}
        />
        <ListSelectionButton
          action={() => setList('artists')}
          label='artists'
          disabled={list === 'artists'}
        />
        <ListSelectionButton
          action={() => setList('songs')}
          label='songs'
          disabled={list === 'songs'}
        />
      </div>
      <div className='mt-4'>
        {list === 'playlists' && <ListPlaylists />}
        {list === 'artists' && <ListArtists />}
        {list === 'songs' && <ListSongs />}
      </div>
    </>
  );
};

export default Transitions;
