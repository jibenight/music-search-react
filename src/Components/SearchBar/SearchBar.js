import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(term) {
    term = this.props.onSearch;
  }
  handleTermChange(event) {
    event = this.state.search;
  }
  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Song, Album, or Artist'
          onChange={this.handleTermChange}
        />
        <button className='SearchButton'>SEARCH</button>
      </div>
    );
  }
}
