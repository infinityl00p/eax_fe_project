import React, { Component } from 'react';
import '../styles/BackgroundMediaCarouselImage.css';

/**
 * Description: Renders a fullpage background-image
 *
 * @mandatory-props: backgroundImage
 * @optional-props: gameIcon, gameIconLabel
 */
class BackgroundMediaCarouselImage extends Component {
  getBackgroundStyle = () => {
    return {
      display: 'block',
      position: 'relative',
      backgroundImage: `url(${this.props.backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100%'
    }
  }

  renderGameIcon = () => {
    return (
      <div className="game-icon">
        <label className="game-icon__label">
          {this.props.gameIconLabel}
        </label>
        <img className="game-icon__img" src={this.props.gameIcon} alt={this.props.gameIconLabel}>
        </img>
      </div>
    );
  }

  render() {
    return (
      <background-mediacarousel-image
        background-image={this.props.backgroundImage}
        gameicon={this.props.gameIcon}
        gameicon-label={this.props.gameIconLabel}
        style={this.getBackgroundStyle()}
      >
        {this.renderGameIcon()}
      </background-mediacarousel-image>
    )
  }
}

export default BackgroundMediaCarouselImage;