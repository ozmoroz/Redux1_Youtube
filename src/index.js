import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCGNVl4M5HY8C7sb8zDSUOz9SA4oN2hoNQ';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: []
    };
    this.videoSearch('windsurfing boards');
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return  (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take those components and put them on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
