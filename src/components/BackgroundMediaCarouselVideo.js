import React, { Component } from 'react';
import Youtube from 'react-youtube';
import Icon from './Icon';
import PropTypes from 'prop-types';
import '../styles/BackgroundMediaCarouselVideo.css'

class BackgroundMediaCarouselVideo extends Component {
  constructor() {
    super();

    this.intervals = [];
  }

  //check the visibility every 1.5s
  _onPlay = (e) => {
    var interval = setInterval(() => { this.checkVisible(e) }, 1500);
    this.intervals.push(interval);
  }

  componentWillUnmount() {
    clearInterval(this.checkVisible);
    this.intervals.forEach(clearInterval);
  }

  componentWillUpdate() {
    clearInterval(this.checkVisible);
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
        playlist: this.props.loop ? this.props.youtubeVideoId : null
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
            onPause={this._onPause}
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