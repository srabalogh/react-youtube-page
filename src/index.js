import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDVbp8S55paujARuAx9hxJH8z3pROqr6kg';



// Create a new component. THis component should produce some HTML
class App extends Component{

  constructor(props){
    super(props);

    this.state = { 
	    videos: [],
	    selectedVideo: null
    };

    this.videoSearch('aurora australis');
  }
  videoSearch(term){
  	YTSearch({key: API_KEY, term:term},(videos) => {                               			this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
        	});
   	 });
  }

  render(){
    return <div>
      <SearchBar  onSearchTermChanges = { term => this.videoSearch(term)} />
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList 
	  onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
	  videos = {this.state.videos}
	/>
    </div>
  }
}

// This componente render HTML to our page 

ReactDOM.render(<App />, document.querySelector('.container'));
