import React from 'react';
import { Track } from '../Track/Track';
export class Playlist extends React.Component {
  render() {
    return (
      <div className='TrackList'>
        {this.props.tracks.map(tracks => {
          return <Track tracks={tracks} key={tracks.id} />;
        })}
      </div>
    );
  }
}
