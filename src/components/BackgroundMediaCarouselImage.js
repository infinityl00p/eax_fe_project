import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

/**
 * Description: Renders a fullpage background-image and its Icon
 *
 * @mandatory-props: backgroundImage, gameIcon, gameIconLabel
 */
const BackgroundMediaCarouselImage = props => (
  <background-mediacarousel-image
    background-image={props.backgroundImage}
    gameicon={props.gameIcon}
    gameicon-label={props.gameIconLabel}
    style={{
      display: 'block',
      position: 'relative',
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100%',
      transition: '400ms ease-in'
    }}
  >
    <Icon
      label={props.gameIconLabel}
      icon={props.gameIcon}
    />
  </background-mediacarousel-image>
);

BackgroundMediaCarouselImage.propTypes = {
  backgroundImage: PropTypes.string,
  gameIcon: PropTypes.string || null,
  gameIconLabel: PropTypes.string || null
}

export default BackgroundMediaCarouselImage;