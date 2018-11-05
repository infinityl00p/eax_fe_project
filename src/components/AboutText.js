import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AboutText.css';

function AboutText(props) {
  return (
    <about-text>
      {props.children}
    </about-text>
  )
}

AboutText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default AboutText;
