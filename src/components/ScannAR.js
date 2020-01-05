import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

//import project data
import projects from '../project-data/projects.js';

const ScannarCustomer = projects[0];
const ScannarBusiness = projects[1];

export default function ScannAR() {
  const styles = {
    image: {
      width: '27%',
      borderRadius: 5,
    },
    iphone: {
      display: 'flex',
      width: '19%',
      position: 'absolute',
      right: '16.61%',
      top: '124.5%'
    },
    noShow: {
      display: 'none'
    },
    gridWrapper: {
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginTop: '1%',
      borderRadius: 5,
      boxShadow: '0px 0px 5px black',
      flexWrap: 'wrap-reverse'
    },
    paperWrapper: {
      paddingTop: '2%',
      marginTop: '2%',
      width: '75%',
      textAlign: 'justify',
      boxShadow: 'none'
    },
  };
  
  const { image, gridWrapper, paperWrapper, iphone, noShow } = styles;

  return (
  <Grid container spacing={2} style={gridWrapper}>
    <Grid item xs={12} lg={6}>
      <Typography variant="h5">ScannAR</Typography>
      <Paper style={paperWrapper}>
      <Typography variant="body2">
        ScannAR helps your business create an <b>augmented reality</b> shopping experience for your customers.
        ScannAR has two separate applications, one of which is for businesses, which allows for easy to access inventory management. 
        The other application allows those customers to view items being sold through their camera, as well as manage their own "saved for later" items.
      </Typography>
      </Paper>
      <Typography variant="body1">View on <a href={ScannarCustomer.url}>GitHub</a></Typography>
    </Grid>
    <Grid item xs={6}>
      <div>
        <img src={require('../project-data/iphone.png')} alt="iphone" style={window.innerWidth > 1000 ? iphone : noShow}></img>
        <img src={ScannarCustomer.coverImage} alt="Project" style={image}></img>
      </div>
    </Grid>
  </Grid>
  )
}