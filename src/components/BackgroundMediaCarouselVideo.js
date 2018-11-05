import React, { Component } from 'react';
import Youtube from 'react-youtube';
import Icon from './Icon';
import PropTypes from 'prop-types';
import '../styles/BackgroundMediaCarouselVideo.css'

class BackgroundMediaCarouselVideo extends Component {
  //check the visibility every second
  _onPlay = (e) => {
    setInterval(() => { return this.checkVisible(e) }, 1000);
  }


  checkVisible = (e) => {
    if (!this.props.isVisible) {
      e.target.pauseVideo();
    } else {
      e.target.playVideo();
    }
  }

  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        modestbranding: 1,
        loop: this.props.loop,
        playlist: this.props.loop ? this.props.youtubeVideoId : null,
        start: 105
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
            onPlay={this._onPlay}
          />
        </div>
        <Icon
          label={this.props.gameIconLabel}
          icon={this.props.gameIcon}
        />
      </div>
    );
  }
}

BackgroundMediaCarouselVideo.propTypes = {
  youtubeVideoId: PropTypes.string,
  gameIcon: PropTypes.string || null,
  gameIconLabel: PropTypes.string || null
}

export default BackgroundMediaCarouselVideo;