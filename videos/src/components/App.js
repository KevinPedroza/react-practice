import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBgBGwBdu6gN7aFt0tsA-2Yl-7C9-8EZj8';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };
    
    onSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
              q: term,
              part: 'snippet',
              maxResults: 5,
              type: 'video',
              key: KEY,
            },
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    componentDidMount() {
        this.onSubmit('shean kigston')
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '20px' }}>
            <SearchBar onSubmit={ this.onSubmit }/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={ this.state.selectedVideo }/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos }/>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default App;