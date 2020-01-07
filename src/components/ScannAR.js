import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

//import project data
import projects from '../project-data/projects.js';

const ScannarCustomer = projects[0];
const ScannarBusiness = projects[1];

export default function ScannAR() {
  const styles = {
    image: {
      width: '27%',
      borderRadius: 5,
      position: 'static',
      right: '16.61%',
      top: '115%'
    },
    iphone: {
      display: 'inline-block',
      width: '19%',
      position: 'absolute',
      zIndex: 100,
      right: '16.61%',
      top: '115%'
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
      flexWrap: 'wrap-reverse',
    },
    paperWrapper: {
      paddingTop: '2%',
      marginTop: '2%',
      width: '75%',
      textAlign: 'justify',
      boxShadow: 'none', // override paper shadow
    },
    carouselItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  };
  
  const { image, gridWrapper, paperWrapper, iphone, noShow, carouselItem } = styles;

  return (
  <Grid container spacing={2} style={gridWrapper}>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ textAlign: 'center', padding: '1%' }}>ScannAR</Typography>
        <Typography variant="body2" style={{ textAlign: 'justify', padding: '2%', paddingLeft: '15%', paddingRight: '15%' }}>
          ScannAR helps your business create an <b>augmented reality</b> shopping experience for your customers.
          ScannAR has two separate applications, one of which is for businesses, which allows for easy to access inventory management. 
          The other application allows those customers to view items being sold through their camera, as well as manage their own "saved for later" items.
        </Typography>
        <Typography variant="body1" style={{ paddingTop: '1%' }}>View on <a href={ScannarCustomer.url}>GitHub</a></Typography>
      </Grid>
    </Grid>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12} lg={6} style={{ paddingTop: '1%' }}>
        <Carousel
          swipeable
          dynamicHeight
          showThumbs={false}
        >
            <div style={carouselItem}>
              <img src={ScannarCustomer.coverImage} alt="Project" style={image}></img>
              <p className="legend">ScannAR Customer</p>
            </div>
            {ScannarCustomer.images.map((imgSource, i)=>(
              <div style={carouselItem} key={i}>
                <img src={imgSource} alt="screenshot" style={image}></img>
                <p className="scannar">ScannAR Customer</p>
              </div>
            ))}
            <div style={carouselItem}>
              <img src={ScannarBusiness.coverImage} alt="Project" style={image}></img>
              <p className="legend">ScannAR Business</p>
            </div>
            {ScannarBusiness.images.map((imgSource, i) => (
              <div style={carouselItem} key={i}>
                <img src={imgSource} alt="screenshot" style={image}></img>
                <p className="scannar">ScannAR Business</p>
              </div>
            ))}
        </Carousel>
      </Grid>
    </Grid>
  </Grid>
  )
}