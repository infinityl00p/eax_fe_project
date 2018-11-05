import React, { Component } from 'react';
import BackgroundMediaCarouselVideo from './BackgroundMediaCarouselVideo';
import BackgroundMediaCarouselImage from './BackgroundMediaCarouselImage';
import TrackVisibility from 'react-on-screen';
import '../styles/BackgroundMediaCarousel.css'

class BackgroundMediaCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentElementIndex: 0,
      secondsActive: 0
    }
  }

  componentDidMount() {
    if (this.props.mediaItems.length > 1) { setInterval(this.updateSecondsActive, 1000); }
  }

  updateSecondsActive = () => {
    let { secondsActive, currentElementIndex } = this.state;
    const { mediaItems } = this.props;
    const activeMediaItem = mediaItems[currentElementIndex]
    secondsActive++;

    if (activeMediaItem.type === 'image' && secondsActive === 10) {
      return this.setNextItem();
    } else { this.setState({ secondsActive: secondsActive }); }
  }

  setNextItem = () => {
    // if it's the last element in the array, reset index to the first element, otherwise increment the index
    if (this.state.currentElementIndex === this.props.mediaItems.length - 1) {
      return this.setState({
        currentElementIndex: 0,
        secondsActive: 0
      })
    } else {
      let { currentElementIndex } = this.state;
      return this.setState({
        currentElementIndex: ++currentElementIndex,
        secondsActive: 0
      });
    }
  }

  handleVideoEnded = () => {
    //if its not already looping
    if (this.props.mediaItems.length !== 1) {
      return this.setNextItem();
    }
  }

  renderActiveItem = () => {
    const { mediaItems } = this.props;
    const { currentElementIndex } = this.state;

    return mediaItems[currentElementIndex].type === 'video'
      ?
      <BackgroundMediaCarouselVideo
        youtubeVideoId={mediaItems[currentElementIndex].youtubeVideoId}
        gameIcon={mediaItems[currentElementIndex].gameIcon || null}
        gameIconLabel={mediaItems[currentElementIndex].gameIconLabel || null}
        handleVideoEnded={this.handleVideoEnded}
        loop={this.props.mediaItems.length === 1 ? 1 : 0}
      />
      :
      <BackgroundMediaCarouselImage
        backgroundImage={mediaItems[currentElementIndex].backgroundImage}
        gameIcon={mediaItems[currentElementIndex].gameIcon || null}
        gameIconLabel={mediaItems[currentElementIndex].gameIconLabel || null}
      />
  }


  render() {
    return (
      <div className="background-media-carousel--overlay">
        <TrackVisibility>
          {this.renderActiveItem()}
        </TrackVisibility>
      </div>
    )
  }
}

export default BackgroundMediaCarousel;