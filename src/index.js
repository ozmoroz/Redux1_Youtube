import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCGNVl4M5HY8C7sb8zDSUOz9SA4oN2hoNQ';

class App extends Component {
  constructor (props) {
    super(props);
    //console.log('props: ', props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'windsurfing boards'}, videos => {
      this.setState({ videos });
    });
  }

  render () {
    return  (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take those components and put them on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
