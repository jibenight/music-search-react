import React from 'react';
import { Track } from '../Track/Track';
export class TrackList extends React.Component {
  render() {
    return (
      <div className='TrackList'>
        {this.props.tracks.map((tracks) => {
          return (
            <Track tracks={tracks} key={tracks.id} onAdd={this.props.onAdd} />
          );
        })}
      </div>
    );
  }
}
