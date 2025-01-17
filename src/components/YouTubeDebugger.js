import React, { Component } from 'react';

export class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.changeBitrate} className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.changeRes} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
