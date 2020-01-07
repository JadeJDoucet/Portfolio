import React from 'react';
import { Typography } from '@material-ui/core';

// import components
import ScannAR from './ScannAR.js';
import ReaderProject from './Readr.js';
import AdoptAPothole from './AdoptAPothole.js';

export default function Projects() {
  const styles = {
    container: {
      textAlign: 'center',
      backgroundColor:'rgb(51, 51, 51)',
      padding: '1%',
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
      <AdoptAPothole />
    </div>
  );
};
