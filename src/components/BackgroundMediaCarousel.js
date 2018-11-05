import React, { Component } from 'react';
import BackgroundMediaCarouselVideo from './BackgroundMediaCarouselVideo';
import BackgroundMediaCarouselImage from './BackgroundMediaCarouselImage';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';
import '../styles/BackgroundMediaCarousel.css'

/**
 * BackgroundMediaCarousel: Creates a carousel depending on the length of the given array, handles changing
 * multiple videos mixed with multiple images as well as single video and images
 *  */
class BackgroundMediaCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentElementIndex: 0,
      secondsActive: 0
    }
  }

  //Set the counter if an image is on the carousel (videos stop playing when finished)
  componentDidMount() {
    const { mediaItems } = this.props;

    if (mediaItems.length > 1 && mediaItems[this.state.currentElementIndex].type === 'image') {
      setInterval(this.updateSecondsActive, 1000);
    }
  }

  //Increment the seconds or reset the seconds and change the item
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
    //if its not the only item, set the next item in the carousel to play
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
        <TrackVisibility partialVisibility>
          {this.renderActiveItem()}
        </TrackVisibility>
      </div>
    )
  }
}

BackgroundMediaCarousel.propTypes = {
  mediaItems: PropTypes.arrayOf(PropTypes.object)
}

export default BackgroundMediaCarousel;