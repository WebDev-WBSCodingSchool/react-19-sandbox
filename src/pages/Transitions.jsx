import { useState } from 'react';
import { ListArtists, ListPlaylists, ListSelectionButton, ListSongs } from '@/components';

const Transitions = () => {
  const [list, setList] = useState('playlists');

  return (
    <>
      <div className='flex gap-2'>
        <ListSelectionButton setList={setList} label='playlists' disabled={list === 'playlists'} />
        <ListSelectionButton setList={setList} label='artists' disabled={list === 'artists'} />
        <ListSelectionButton setList={setList} label='songs' disabled={list === 'songs'} />
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
