import React from 'react';
import '../styles/AboutText.css';

function AboutText(props) {
  return (
    <about-text>
      {props.children}
    </about-text>
  )
}

export default AboutText;
