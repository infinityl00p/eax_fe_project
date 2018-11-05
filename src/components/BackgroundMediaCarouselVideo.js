import React, { Component } from 'react';
import Youtube from 'react-youtube';
import Icon from './Icon';
import '../styles/BackgroundMediaCarouselVideo.css'

class BackgroundMediaCarouselVideo extends Component {
  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        modestbranding: 1
      }
    }
    return (
      <div className="background-media-carousel-video">
        <div className="videoWrapper">
          <Youtube
            videoId={this.props.youtubeVideoId}
            className='video-player'
            onEnd={this.props.handleVideoEnded}
            opts={opts}
          />
        </div>
        <Icon
          label={this.props.gameIconLabel}
          icon={this.props.gameIcon}
        />
      </div >
    );
  }
}


export default BackgroundMediaCarouselVideo;