import React from 'react';
import { Typography } from '@material-ui/core';

export default function PersonalProfile({ mobile }) {
  const styles = {
    introWrapper: {
      backgroundColor: 'rgb(51, 51, 51)',
      textAlign: 'center',
      display: 'inline-block',
      // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      // marginTop: '2.5%'
      paddingTop: '3%',
      paddingBottom: '3%'
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
      <Typography variant="h2">Jade Doucet</Typography>
      <Typography variant="subtitle1">Software Engineer</Typography>
    </section>
  )
}