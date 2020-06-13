import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Queen',
          artist: 'freddy Mercury',
          album: 'News of the new world',
          id: '1',
        },
        {
          name: 'Triller',
          artist: 'Michael Jackson',
          album: 'Screan',
          id: '3',
        },
        {
          name: 'Las vegas',
          artist: 'Johny Haliday',
          album: 'pions',
          id: '4',
        },
      ],
      playlistName: 'Jean-list',
      playlistTracks: [
        {
          name: 'playlist1',
          artist: 'playlistartist1',
          album: 'playlistalbum1',
          id: '5',
        },
        {
          name: 'playlist2',
          artist: 'playlistartist2',
          album: 'playlistalbum2',
          id: '6',
        },
        {
          name: 'playlist3',
          artist: 'playlistartist3',
          album: 'playlistalbum3',
          id: '6',
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((removedTrack) => removedTrack.id === track.id)) {
      const indexTrack = tracks.indexOf(track.id);
      tracks.splice(indexTrack, 1);
      this.setState({ playlistTracks: tracks });
    }
  }

  updatePlaylistName(updateListe) {
    updateListe = this.state.playlistName;
  }

  savePlaylist() {}

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.state.removeTrack}
              onNameChange={this.state.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
