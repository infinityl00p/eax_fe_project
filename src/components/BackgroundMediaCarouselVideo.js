import React, { Component } from 'react';
import Icon from './Icon';

class BackgroundMediaCarouselVideo extends Component {


  render() {
    return (
      <div className="background-media-carousel-video">
        <iframe
          src={`https://www.youtube.com/embed/${this.props.youtubeVideoId}?controls=0&mute=1&modestbranding=1&autoplay=1`}
          title={this.props.gameIconLabel}
          style={{
            display: 'block',
            position: 'relative',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%',
            transition: '400ms ease-in'
          }}
          onLoad={this.handleFileLoad}
          frameBorder="0"
        >
        </iframe>
        <Icon
          label={this.props.gameIconLabel}
          icon={this.props.gameIcon}
        />
      </div>
    );
  }
}


export default BackgroundMediaCarouselVideo;