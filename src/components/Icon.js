import React from 'react';
import '../styles/Icon.css';

const Icon = props => (
  <div className="game-icon">
    <label className="game-icon__label">
      {props.label}
    </label>
    <img className="game-icon__img" src={props.icon} alt={props.label}>
    </img>
  </div>
);

export default Icon;