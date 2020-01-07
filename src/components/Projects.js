import React from 'react';
import { Typography } from '@material-ui/core';

// import components
import ScannAR from './ScannAR';
import ReaderProject from './Readr.js';

export default function Projects() {
  const styles = {
    container: {
      textAlign: 'center',
      backgroundColor:'rgb(51, 51, 51)',
      padding: '3%'
    },
    text: {
      color: 'lightgrey'
    }
  };

  const { container, text } = styles;

  return (
    <div id="projects" style={container}>
      <Typography variant="h4" style={text}>Recent Projects</Typography>
      <ScannAR />
      <ReaderProject />
    </div>
  );
};
