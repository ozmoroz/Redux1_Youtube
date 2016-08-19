import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCGNVl4M5HY8C7sb8zDSUOz9SA4oN2hoNQ';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'windsurfing boards'}, videos => {
      this.setState({ videos });
    });
  }

  render () {
    return  (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take those components and put them on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
