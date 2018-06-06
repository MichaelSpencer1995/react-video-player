import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import { API_KEY } from '../config'
import _ from 'lodash'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: null
        }

        this.videoSearch('joe rogan')
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onUpdateSearchTerm={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> 
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))