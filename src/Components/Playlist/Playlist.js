import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  handleNameChange() {
    onNameChange();
  }
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={'New Playlist'} onChange={handleNameChange()} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
        />
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
