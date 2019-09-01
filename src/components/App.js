import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state= { videos: [] };

  onTermSubmit = async term => {
    const resp = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: resp.data.items });
  };

 render() {
   return (
     <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <VideoList videos={this.state.videos} />
     </div>
   );
  }
}



export default App;
