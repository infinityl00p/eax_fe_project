import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Icon.css';

/**
 * Renders game icon
 */
const Icon = props => (
  <div className="game-icon">
    <label className="game-icon__label">
      {props.label}
    </label>
    <img className="game-icon__img" src={props.icon} alt={props.label}>
    </img>
  </div>
);

Icon.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string
}

export default Icon;