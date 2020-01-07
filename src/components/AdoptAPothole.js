import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

//import project data
import projects from '../project-data/projects.js';

const adoptAPothole = projects[3];
// const ScannarBusiness = projects[1];

export default function AdoptAPothole() {
  const style = {
    image: {
      width: '30%',
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
      marginBottom: '0.5%'
    },
    carouselItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  };
  
  const { image, gridWrapper, carouselItem } = style;

  return (
  <Grid container spacing={2} style={gridWrapper}>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ textAlign: 'justify', padding: '2%', paddingLeft: '20%', paddingRight: '20%' }}>
          {adoptAPothole.description}
        </Typography>
        <Typography variant="body1" style={{ paddingTop: '1%' }}>View on <a href={adoptAPothole.url}>GitHub</a></Typography>
      </Grid>
    </Grid>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12} lg={6} style={{ paddingTop: '1%' }}>
        <Typography variant="h4" style={{ textAlign: 'center', padding: '1%' }}>Adopt A Pothole</Typography>
        <Carousel
          swipeable
          dynamicHeight
          showThumbs={false}
          showStatus={false}
        >
            <div style={carouselItem}>
              <img src={adoptAPothole.coverImage} alt="Project" style={image}></img>
            </div>
            {adoptAPothole.images.map((imgSource, i)=>{
              return (
              <div style={carouselItem} key={i}>
                <img src={imgSource} alt="screenshot" style={image}></img>
                {i === adoptAPothole.images.length - 1 ? <p className="legend">Map of Potholes Reported</p> : null}
              </div>
              )
            })}
        </Carousel>
      </Grid>
    </Grid>
  </Grid>
  )
}