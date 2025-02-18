import { useState } from 'react';
import { ListArtists, ListPlaylists, ListSongs } from '@/components';

const Transitions = () => {
  const [list, setList] = useState('playlists');

  return (
    <div>
      <div className='flex gap-2'>
        <button
          className='btn btn-success'
          onClick={() => setList('playlists')}
          disabled={list === 'playlists'}
        >
          Playlists
        </button>
        <button
          className='btn btn-success'
          onClick={() => setList('artists')}
          disabled={list === 'artists'}
        >
          Artists
        </button>
        <div
          className='btn btn-success'
          onClick={() => setList('songs')}
          disabled={list === 'songs'}
        >
          Songs
        </div>
      </div>
      <div className='mt-4'>
        {list === 'playlists' && <ListPlaylists />}
        {list === 'artists' && <ListArtists />}
        {list === 'songs' && <ListSongs />}
      </div>
    </div>
  );
};

export default Transitions;
