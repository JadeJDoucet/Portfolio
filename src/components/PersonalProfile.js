import React from 'react';
import { Typography } from '@material-ui/core';

export default function PersonalProfile({ mobile }) {
  const styles = {
    introWrapper: {
      backgroundColor: 'rgb(51, 51, 51)',
      textAlign: 'center',
      paddingTop: '3%',
      paddingBottom: '3%',
    },
    image: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 3,
      width: '23%',
      borderRadius: '50%',
    }
  }
const { image, introWrapper } = styles;
  return (
    <section id="intro" style={introWrapper}>
      <img
      src={require("../project-data/headshots/headshot-close.jpg")}
      alt="profile"
      style={image}
      />
      <Typography variant="h2" style={{ color: 'lightgrey' }}>Jade Doucet</Typography>
      <Typography variant="subtitle1" style={{ color: 'lightgrey' }}>Software Engineer</Typography>
    </section>
  )
}